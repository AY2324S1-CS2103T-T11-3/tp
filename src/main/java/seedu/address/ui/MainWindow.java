package seedu.address.ui;

import java.util.ArrayList;
import java.util.logging.Logger;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.MenuItem;
import javafx.scene.control.SplitPane;
import javafx.scene.control.TextInputControl;
import javafx.scene.input.KeyCode;
import javafx.scene.input.KeyCombination;
import javafx.scene.input.KeyEvent;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.StackPane;
import javafx.scene.layout.VBox;
import javafx.stage.Stage;
import seedu.address.commons.core.GuiSettings;
import seedu.address.commons.core.LogsCenter;
import seedu.address.logic.Logic;
import seedu.address.logic.commands.CommandResult;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.Model;
import seedu.address.model.lessons.Lesson;
import seedu.address.model.lessons.Task;
import seedu.address.model.person.Person;
import seedu.address.model.state.State;

/**
 * The Main Window. Provides the basic application layout containing
 * a menu bar and space where other JavaFX elements can be placed.
 */
public class MainWindow extends UiPart<Stage> {

    private static final String FXML = "MainWindow.fxml";

    private final Logger logger = LogsCenter.getLogger(getClass());

    private Stage primaryStage;
    private Logic logic;
    private Model model;
    private ArrayList<String> prevCommand = new ArrayList<>();
    private int prevCommandId = 0;

    // Independent Ui parts residing in this Ui container
    private PersonListPanel personListPanel;
    private LessonListPanel lessonListPanel;
    private StudentDetailListPanel studentDetailListPanel;
    private LessonDetailListPanel lessonDetailListPanel;
    private FullTaskListPanel fullTaskListPanel;
    private TaskDetailPanel taskDetailPanel;
    private ResultDisplay resultDisplay;
    private HelpWindow helpWindow;
    private CommandBox commandBox;

    @FXML
    private AnchorPane showPersonPanelPlaceholder;

    @FXML
    private StackPane commandBoxPlaceholder;

    @FXML
    private MenuItem helpMenuItem;

    @FXML
    private VBox personList;
    @FXML
    private StackPane personListPanelPlaceholder;

    @FXML
    private VBox scheduleList;
    @FXML
    private StackPane scheduleListPanelPlaceholder;

    @FXML
    private VBox fullTaskList;
    @FXML
    private StackPane fullTaskListPanelPlaceholder;

    @FXML
    private VBox taskDetailListPanel;
    @FXML
    private StackPane taskDetailListPanelPlaceholder;

    @FXML
    private VBox studentDetailList;
    @FXML
    private StackPane studentDetailListPanelPlaceholder;

    @FXML
    private VBox lessonDetailList;
    @FXML
    private StackPane lessonDetailListPanelPlaceholder;

    @FXML
    private StackPane resultDisplayPlaceholder;

    @FXML
    private StackPane statusbarPlaceholder;

    @FXML
    private SplitPane contentSplitPane;

    /**
     * Creates a {@code MainWindow} with the given {@code Stage} and {@code Logic}.
     */
    public MainWindow(Stage primaryStage, Logic logic, Model model) {
        super(FXML, primaryStage);

        // Set dependencies
        this.primaryStage = primaryStage;
        this.logic = logic;
        this.model = model;

        // Configure the UI
        setWindowDefaultSize(logic.getGuiSettings());

        setAccelerators();

        helpWindow = new HelpWindow();
        commandBox = new CommandBox(this::executeCommand);

    }

    public Stage getPrimaryStage() {
        return primaryStage;
    }

    private void setAccelerators() {
        setAccelerator(helpMenuItem, KeyCombination.valueOf("F1"));
    }

    /**
     * Sets the accelerator of a MenuItem.
     * @param keyCombination the KeyCombination value of the accelerator
     */
    private void setAccelerator(MenuItem menuItem, KeyCombination keyCombination) {
        menuItem.setAccelerator(keyCombination);

        /*
         * TODO: the code below can be removed once the bug reported here
         * https://bugs.openjdk.java.net/browse/JDK-8131666
         * is fixed in later version of SDK.
         *
         * According to the bug report, TextInputControl (TextField, TextArea) will
         * consume function-key events. Because CommandBox contains a TextField, and
         * ResultDisplay contains a TextArea, thus some accelerators (e.g F1) will
         * not work when the focus is in them because the key event is consumed by
         * the TextInputControl(s).
         *
         * For now, we add following event filter to capture such key events and open
         * help window purposely so to support accelerators even when focus is
         * in CommandBox or ResultDisplay.
         */
        getRoot().addEventFilter(KeyEvent.KEY_PRESSED, event -> {
            if (event.getCode() == KeyCode.UP) {
                String prevCommandText = model.getPrevCommandHistory();
                commandBox.changeText(prevCommandText);
            }
            if (event.getCode() == KeyCode.DOWN) {
                String nextCommandText = model.getNextCommandHistory();
                commandBox.changeText(nextCommandText);
            }
            if (event.getTarget() instanceof TextInputControl && keyCombination.match(event)) {
                menuItem.getOnAction().handle(new ActionEvent());
                event.consume();
            }
        });
    }

    /**
     * Fills up all the placeholders of this window.
     */
    void fillInnerParts() {
        personListPanel = new PersonListPanel(logic);
        personListPanelPlaceholder.getChildren().add(personListPanel.getRoot());

        lessonListPanel = new LessonListPanel(logic, model);
        scheduleListPanelPlaceholder.getChildren().add(lessonListPanel.getRoot());

        fullTaskListPanel = new FullTaskListPanel(logic);
        fullTaskListPanelPlaceholder.getChildren().add(fullTaskListPanel.getRoot());

        taskDetailPanel = new TaskDetailPanel(logic);
        taskDetailListPanelPlaceholder.getChildren().add(taskDetailPanel.getRoot());

        studentDetailListPanel = new StudentDetailListPanel(logic);
        studentDetailListPanelPlaceholder.getChildren().add(studentDetailListPanel.getRoot());

        lessonDetailListPanel = new LessonDetailListPanel(logic);
        lessonDetailListPanelPlaceholder.getChildren().add(lessonDetailListPanel.getRoot());

        resultDisplay = new ResultDisplay();
        resultDisplayPlaceholder.getChildren().add(resultDisplay.getRoot());

        StatusBarFooter statusBarFooter = new StatusBarFooter(logic.getAddressBookFilePath());
        statusbarPlaceholder.getChildren().add(statusBarFooter.getRoot());

        commandBoxPlaceholder.getChildren().add(commandBox.getRoot());

        studentDetailList.setVisible(false);
        lessonDetailList.setVisible(false);
        taskDetailListPanel.setVisible(false);

        contentSplitPane.getItems().removeAll(personList, studentDetailList, fullTaskList, taskDetailListPanel);
    }

    /**
     * Sets the default size based on {@code guiSettings}.
     */
    private void setWindowDefaultSize(GuiSettings guiSettings) {
        primaryStage.setHeight(guiSettings.getWindowHeight());
        primaryStage.setWidth(guiSettings.getWindowWidth());
        if (guiSettings.getWindowCoordinates() != null) {
            primaryStage.setX(guiSettings.getWindowCoordinates().getX());
            primaryStage.setY(guiSettings.getWindowCoordinates().getY());
        }
    }

    /**
     * Opens the help window or focuses on it if it's already opened.
     */
    @FXML
    public void handleHelp() {
        if (!helpWindow.isShowing()) {
            helpWindow.show();
        } else {
            helpWindow.focus();
        }
    }

    void show() {
        primaryStage.show();
    }

    /**
     * Closes the application.
     */
    @FXML
    private void handleExit() {
        GuiSettings guiSettings = new GuiSettings(primaryStage.getWidth(), primaryStage.getHeight(),
                (int) primaryStage.getX(), (int) primaryStage.getY());
        logic.setGuiSettings(guiSettings);
        helpWindow.hide();
        primaryStage.hide();
    }

    public PersonListPanel getPersonListPanel() {
        return personListPanel;
    }

    /**
     * Executes the command and returns the result.
     *
     * @see seedu.address.logic.Logic#execute(String)
     */
    private CommandResult executeCommand(String commandText) throws CommandException, ParseException {
        try {
            CommandResult commandResult = logic.execute(commandText);
            logger.info("Result: " + commandResult.getFeedbackToUser());
            resultDisplay.setFeedbackToUser(commandResult.getFeedbackToUser());

            if (commandResult.isShowHelp()) {
                handleHelp();
            }

            if (commandResult.isExit()) {
                handleExit();
            }

            if (!commandResult.getState().equals(State.NONE)) {
                State state = commandResult.getState();
                double[] dividerPositions = contentSplitPane.getDividerPositions();
                contentSplitPane.getItems().removeAll(personList, studentDetailList,
                        scheduleList, lessonDetailList, fullTaskList, taskDetailListPanel);
                switch (state) {
                case SCHEDULE:
                    contentSplitPane.getItems().addAll(scheduleList, lessonDetailList);
                    break;
                case STUDENT:
                    contentSplitPane.getItems().addAll(personList, studentDetailList);
                    break;
                case TASK:
                    contentSplitPane.getItems().addAll(fullTaskList, taskDetailListPanel);
                    break;
                default:
                    System.out.println("unknown panel asked for");
                    break;
                }
                contentSplitPane.setDividerPositions(dividerPositions);
            }

            return commandResult;
        } catch (CommandException | ParseException e) {
            logger.info("An error occurred while executing command: " + commandText);
            resultDisplay.setFeedbackToUser(e.getMessage());
            throw e;
        }
    }

    /**
     * Sets the Person Details in the Student Detail Panel and shows it.
     *
     * @param person The person to show the details of.
     */
    public void handleShowPerson(Person person) {
        if (person == null) {
            studentDetailList.setVisible(false);
            return;
        }
        studentDetailList.setVisible(true);
        studentDetailListPanel.setPersonDetails(person, model);
    }

    /**
     * Sets the Lesson Details in the Lesson Detail Panel and shows it.
     *
     * @param lesson The lesson to show the details of.
     */
    public void handleShowLesson(Lesson lesson) {
        if (lesson == null) {
            lessonDetailList.setVisible(false);
            return;
        }
        lessonDetailList.setVisible(true);
        lessonDetailListPanel.setLessonDetails(lesson, model);
    }

    /**
     * Sets the Task Details in the Task Detail Panel and shows it.
     *
     * @param task The task to show the details of.
     */
    public void handleShowTask(Task task) {
        if (task == null) {
            taskDetailListPanel.setVisible(false);
            return;
        }
        taskDetailListPanel.setVisible(true);
        taskDetailPanel.setTaskDetails(task);
    }
}
