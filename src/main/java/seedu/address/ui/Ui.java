package seedu.address.ui;

import javafx.stage.Stage;
import seedu.address.model.listentries.Lesson;
import seedu.address.model.listentries.Person;

/**
 * API of UI component
 */
public interface Ui {

    /** Starts the UI (and the App).  */
    void start(Stage primaryStage);

    /**
     * Shows the details of the specified person.
     *
     * @param person The specified person to show the details of.
     */
    void showPersonDetails(Person person);

    /**
     * Shows the details of the specified lesson.
     *
     * @param lesson The specified lesson to show the details of.
     */
    void showLessonDetails(Lesson lesson); //TODO
}
