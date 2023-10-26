package seedu.address.ui;

import java.util.Comparator;

import javafx.scene.control.Label;
import javafx.scene.layout.FlowPane;
import javafx.scene.layout.VBox;
import seedu.address.model.listEntries.Person;


/**
 * A UI component that displays information of a {@code Person}.
 */
public class PersonCardFieldBuilder {
    /**
     * Build a field of a person card
     * @param fieldName the name of the field
     * @param person the person
     * @param fields the fields
     * @param tags the tags
     */
    public static void build(String fieldName, Person person, VBox fields, FlowPane tags) {
        switch (fieldName) {
        case "phone":
            buildPhone(person, fields, tags);
            break;
        case "address":
            buildAddress(person, fields, tags);
            break;
        case "email":
            buildEmail(person, fields, tags);
            break;
        case "tags":
            buildTags(person, fields, tags);
            break;
        case "subjects":
            buildSubjects(person, fields, tags);
            break;
        case "remark":
            buildRemark(person, fields, tags);
            break;

        default:
            break;
        }
    }

    static void buildPhone(Person person, VBox fields, FlowPane tags) {
        Label phone = new Label(person.getPhone().value);
        phone.getStyleClass().add("cell_small_label");
        fields.getChildren().add(phone);
    }

    static void buildAddress(Person person, VBox fields, FlowPane tags) {
        Label address = new Label(person.getAddress().value);
        address.getStyleClass().add("cell_small_label");
        fields.getChildren().add(address);
    }

    static void buildEmail(Person person, VBox fields, FlowPane tags) {
        Label email = new Label(person.getEmail().value);
        email.getStyleClass().add("cell_small_label");
        fields.getChildren().add(email);
    }

    static void buildTags(Person person, VBox fields, FlowPane tags) {
        //why creating a new pane tags and push to fields does not work?
        person.getTagSet().stream()
                .sorted(Comparator.comparing(tag -> tag.tagName))
                .forEach(tag -> tags.getChildren().add(new Label(tag.tagName)));
    }

    static void buildSubjects(Person person, VBox fields, FlowPane tags) {
        FlowPane subjects = new FlowPane();
        person.getSubjectsSet().stream()
                .sorted(Comparator.comparing(subject -> subject.subjectName))
                .forEach(subject -> subjects.getChildren()
                        .add(new ColoredTextEntry(subject.subjectName.toString(), subject.getColour())));
        subjects.setHgap(10);
        fields.getChildren().add(subjects);
    }

    static void buildRemark(Person person, VBox fields, FlowPane tags) {
        String remarkValue = person.getRemark().value;
        if (!remarkValue.equals("")) {
            Label remark = new Label(remarkValue);
            remark.getStyleClass().add("cell_small_label");
            fields.getChildren().add(remark);
        }
    }
}
