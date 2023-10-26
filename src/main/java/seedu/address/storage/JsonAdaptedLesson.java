package seedu.address.storage;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.listEntryFields.Day;
import seedu.address.model.listEntryFields.Subject;
import seedu.address.model.lists.TaskList;

import java.util.ArrayList;

import static seedu.address.model.util.SerializeUtil.serialize;
import static seedu.address.model.util.SerializeUtil.deserialize;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.listEntryFields.Day;
import seedu.address.model.listEntryFields.Time;
import seedu.address.model.lists.TaskList;
import seedu.address.model.listEntryFields.Name;
import seedu.address.model.listEntryFields.Subject;



/**
 * Jackson-friendly version of {@link Lesson}
 */
public class JsonAdaptedLesson {
    private final String start;
    private final String end;
    private final String day;
    private final String subject;
    private final String name;
    //private final String students; // comma-separated
    //private final String taskList;

    /**
     * Constructs a {@code JsonAdaptedPerson} with the given person details.
     */
    /*
    @JsonCreator
    public JsonAdaptedLesson(@JsonProperty("name") String name, @JsonProperty("start") String start, @JsonProperty("end") String end, @JsonProperty("day") String day,
                             @JsonProperty("subject") String subject, @JsonProperty("students") String students,
                             @JsonProperty("students") String taskList) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.day = day;
        this.subject = subject;
        //this.students = students;
        //this.taskList = taskList;
    }
    */
    @JsonCreator
    public JsonAdaptedLesson(@JsonProperty("name") String name, @JsonProperty("start") String start, @JsonProperty("end") String end, @JsonProperty("day") String day,
                             @JsonProperty("subject") String subject) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.day = day;
        this.subject = subject;
    }

    /**
     * Converts a given {@code Lesson} into this class for Jackson use.
     */
    public JsonAdaptedLesson(Lesson source) {
        name = serialize(source.getName());
        start = serialize(source.getStart());
        end = serialize(source.getEnd());
        day = serialize(source.getDay());
        subject = serialize(source.getSubject());
        //students = serialize(source.getStudents());
        //taskList =
    }
    /**
     * Converts this Jackson-friendly adapted lesson object into the model's {@code Lesson} object.
     *
     * @throws IllegalValueException if there were any data constraints violated in the adapted lesson.
     */
    public Lesson toModelType() throws IllegalValueException {
        try {
            Name name = deserialize(Name.DEFAULT_NAME, Name::of, this.name);
            Time start = deserialize(Time.DEFAULT_TIME, Time::deserialize, this.start);
            Time end = deserialize(Time.DEFAULT_TIME, Time::deserialize, this.end);
            Day day = deserialize(Day.DEFAULT_DAY, Day::deserialize, this.day);
            Subject subject = deserialize(Subject.DEFAULT_SUBJECT, Subject::of, this.subject);
            return new Lesson(name,start, end,day, subject);
            //ArrayList<String> students = Lesson.deserializeStudents(this.students);
            //TaskList taskList = Lesson.deserializeTaskList(this.taskList); //TODO
        } catch (Exception e) {
            throw new IllegalValueException(e.getMessage());
        }
    }
}
