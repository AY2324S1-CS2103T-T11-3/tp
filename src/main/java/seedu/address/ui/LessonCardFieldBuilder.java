package seedu.address.ui;

import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import seedu.address.model.listentries.Lesson;


/**
 * A UI component that displays information of a {@code Lesson}.
 */
public class LessonCardFieldBuilder {
    /**
     * Build a field of a person card
     * @param fieldName the name of the field
     * @param lesson the lesson
     * @param fields the fields
     */
    public static void build(String fieldName, Lesson lesson, VBox fields) {
        switch (fieldName) {
        case "date":
            buildDate(lesson, fields);
            break;
        case "students":
            buildStudents(lesson, fields);
            break;
        case "subjects":
            buildSubjects(lesson, fields);
            break;
        default:

            break;
        }
    }

    static void buildDate(Lesson lesson, VBox fields) {
        Label date = new Label(lesson.getLessonDateStr());
        date.getStyleClass().add("cell_small_label");
        fields.getChildren().add(date);
    }

    static void buildStudents(Lesson lesson, VBox fields) {
        Label students = new Label(lesson.getStudentsStr());
        students.getStyleClass().add("cell_small_label");
        fields.getChildren().add(students);
    }
    static void buildSubjects(Lesson lesson, VBox fields) {
        Label subject = new Label(lesson.getSubjectStr());
        subject.getStyleClass().add("cell_small_label");
        fields.getChildren().add(subject);
    }

}
