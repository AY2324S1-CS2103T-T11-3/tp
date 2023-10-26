package seedu.address.ui;

import java.util.Comparator;
import java.util.logging.Logger;

import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.FlowPane;
import javafx.scene.layout.Region;
import seedu.address.commons.core.LogsCenter;
import seedu.address.logic.Logic;
import seedu.address.model.listentries.Person;

/**
 * Panel containing a student's details.
 */
public class StudentDetailListPanel extends UiPart<Region> {
    private static final String FXML = "StudentDetailListPanel.fxml";
    private final Logger logger = LogsCenter.getLogger(StudentDetailListPanel.class);

    private Logic logic;

    @FXML
    private TextField address;

    @FXML
    private TextField email;

    @FXML
    private TextField name;

    @FXML
    private TextField phone;

    @FXML
    private FlowPane subjects;

    @FXML
    private FlowPane tags;

    @FXML
    private TextField remark;

    /**
     * Creates a {@code StudentDetailListPanel} with the given {@code ObservableList}.
     */
    public StudentDetailListPanel(Logic logic) {
        super(FXML);
        this.logic = logic;
    }


    /**
     * Sets the Details of the person to be shown.
     *
     * @param person The person whose details are to be shown.
     */
    public void setPersonDetails(Person person) {
        name.setText(person.getName().fullName);
        phone.setText(person.getPhone().value);
        address.setText(person.getAddress().value);
        email.setText(person.getEmail().value);
        remark.setText(person.getRemark().value);

        // Clears the previous items in the FlowPane for Tags and Subjects
        tags.getChildren().clear();
        subjects.getChildren().clear();

        person.getTagSet().stream()
                .sorted(Comparator.comparing(tag -> tag.tagName))
                .forEach(tag -> tags.getChildren().add(new Label(tag.tagName)));
        person.getSubjectsSet().stream()
                .sorted(Comparator.comparing(subject -> subject.subjectName))
                .forEach(subject -> subjects.getChildren()
                        .add(new ColoredTextEntry(subject.subjectName.toString(), subject.getColour())));
        subjects.setHgap(10);
    }

}
