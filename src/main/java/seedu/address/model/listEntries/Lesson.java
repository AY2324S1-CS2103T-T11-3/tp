package seedu.address.model.listEntries;

import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Objects;

import javafx.collections.ObservableList;
import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.commons.util.StringUtil;
import seedu.address.model.listEntryFields.Day;
import seedu.address.model.listEntryFields.Time;
import seedu.address.model.lists.TaskList;
import seedu.address.model.listEntryFields.Name;
import seedu.address.model.listEntryFields.Subject;

/**
 * Represents a student's lesson in the schedule.
 * Guarantees: details are present and not null, field values are validated, immutable.
 */
public class Lesson extends ListEntry {
    public static final Lesson DEFAULT_LESSON = new Lesson();
    private Name name;
    // Lesson fields
    private Time start;
    private Time end;
    // Data fields
    private Subject subject;
    private Day day;

    private ArrayList<Name> students; // TODO: change to student object

    /**
     * The Task List to store the Lesson Tasks.
     */
    private TaskList taskList;

    /**
     * Constructor for a Lesson Object with at least one student.
     * Note: parse the string before giving it to the constructor.
     *
     * @param start The start time of the lesson
     * @param end The end time of the lesson
     * @param subject The subject of this lesson
     * @param studentNames The student attending this lesson. Note: Converted to ArrayList when stored
     * @see seedu.address.logic.parser.ParserUtil
     */
    public Lesson(LocalDateTime start, LocalDateTime end, Subject subject, TaskList taskList, Name... studentNames) {
        requireAllNonNull(start, end, subject);
        this.name = Name.DEFAULT_NAME;
        this.start = new Time(start);
        this.end = new Time(end);
        this.subject = subject;
        this.students = new ArrayList<>(Arrays.asList(studentNames));
        this.taskList = taskList;
    }
    //todo store the name of lesson as well;
    /**
     * Alternative constructor for a Lesson Object without subject
     */
    public Lesson(LocalDateTime start, LocalDateTime end, TaskList taskList, Name... studentNames) {
        requireAllNonNull(start, end);
        this.name = Name.DEFAULT_NAME;
        this.start = new Time(start);
        this.end = new Time(end);
        this.students = new ArrayList<>(Arrays.asList(studentNames));
        this.taskList = taskList;
    }
    /**
     * Alternative constructor for a Lesson Object with an ArrayList of students
     */
    public Lesson(LocalDateTime start, LocalDateTime end, Subject subject,
                  TaskList taskList, ArrayList<Name> studentNames) {
        requireAllNonNull(start, end, subject);
        this.name = Name.DEFAULT_NAME;
        this.start = new Time(start);
        this.end = new Time(end);
        this.subject = subject;
        this.students = studentNames;
        this.taskList = taskList;
    }
    private Lesson() {
        this.name = Name.DEFAULT_NAME;
        this.start = Time.DEFAULT_TIME;
        this.end = Time.DEFAULT_TIME;
        this.subject = Subject.DEFAULT_SUBJECT;
        this.students = new ArrayList<>();
        this.taskList = new TaskList();
        this.day = Day.DEFAULT_DAY;
    }
    public static Lesson getDefaultLesson() {
        return DEFAULT_LESSON.clone();
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public void setNameIfNotDefault(Name name) {
        if (name != null && !name.equals(Name.DEFAULT_NAME)) {
            setName(name);
        }
    }

    /**
     * Returns true if the lesson has the specified student.
     * @param person The person to check
     * @return true if the lesson has the specified student
     */
    public boolean hasStudent(Person person) {
        return hasStudent(person.getName());
    }

    /**
     * Returns true if the lesson has the specified student.
     * @param name The name of the student to check
     * @return true if the lesson has the specified student
     */
    public boolean hasStudent(Name name) {
        return students.contains(name);
    }

    /**
     * Gets the start time formatted in 12h
     */
    public String getStartTimeStr() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("h:mm a");
        return start.getTime().format(formatter);
    }

    /**
     * Gets the end time formatted in 12h
     */
    public String getEndTimeStr() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("h:mm a");
        return end.getTime().format(formatter);
    }

    public Day getDay() {
        return day;
    }

    public void setDay(Day day) {
        this.day = day;
    }

    public void setDayIfNotDefault(Day day) {
        if (day != null && !day.equals(Day.DEFAULT_DAY)) {
            setDay(day);
        }
    }

    /**
     * Gets a one-line overview of the lesson.
     *
     * If a lesson is on Thursday, 10 Oct 10 am - 12 pm, it will be formatted as:
     *
     * 10 am - 12 pm // TODO
     * @return A formatted overview of the time of the lesson
     */
    public String getLessonOverview() {
        return getLessonDateStr() + " • " + getSubjectStr();
    }
    /**
     * Gets a one-line overview of the lesson.
     *
     * If a lesson is on Tuesday, 10 Oct 10 am - 12 pm, it will be formatted as:
     *
     * 10 am - 12 pm
     * @return A formatted overview of the time of the lesson
     */
    public String getLessonDuration() {
        return getStartTimeStr() + " - " + getEndTimeStr();
    }

    /**
     * Gets the date of a lesson.
     * If the start and end date are the same, then only one date string is returned.
     * Else, the date will be returned as: [start date] - [end date]
     * @return
     */
    public String getLessonDateStr() {
        return day.toString();
    }

    /**
     * Returns a comma-separated list of students.
     * @return
     */
    public String getStudentsStr() {
        ArrayList<String> studentNames = new ArrayList<>();
        for (Name student : students) {
            studentNames.add(student.toString());
        }
        return StringUtil.joinArray(studentNames, ", ");
    }

    /**
     * Returns the subject.
     * @return
     */
    public String getSubjectStr() {
        return serializeSubject();
        // TODO - change to something more concrete,
    }

    /**
     * Returns the Task List.
     * @return
     */
    public ObservableList<Task> getTaskList() {
        return taskList.asUnmodifiableObservableList();
    }

    public Time getStart() {
        return start;
    }
    public void setStart(Time start) {
        this.start = start;
    }
    public void setStartIfNotDefault(Time start) {
        if (start != null && !start.equals(Time.DEFAULT_TIME)) {
            setStart(start);
        }
    }

    public Time getEnd() {
        return end;
    }

    public void setEnd(Time end) {
        this.end = end;
    }
    public void setEndIfNotDefault(Time end) {
        if (end != null && !end.equals(Time.DEFAULT_TIME)) {
            setEnd(end);
        }
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }
    public void setSubjectIfNotDefault(Subject subject) {
        if (subject != null && !subject.equals(Subject.DEFAULT_SUBJECT)) {
            setSubject(subject);
        }
    }

    public ArrayList<Name> getStudents() {
        return students;
    }

    public void setStudents(ArrayList<Name> students) {
        this.students = students;
    }
    /**
     * Adds a student to the lesson.
     * @param student The student to add
     * @throws IllegalValueException if the student already exists in the lesson
     */
    public void addStudent(Name student) throws IllegalValueException {
        if (this.students.contains(student)) {
            throw new IllegalValueException("Student already exists in lesson");
        }
        this.students.add(student);
    }
    /**
     * Serializes the start date to a String
     * @return stringified version of start date
     */
    public String serializeStart() {
        return this.start.toString();
    }
    /**
     * Serializes the end date to a String
     * @return stringified version of end date
     */
    public String serializeEnd() {
        return this.end.toString();
    }
    /**
     * Serializes the subject to a String
     * @return stringified version of subject
     */
    public String serializeSubject() {
        return this.subject != null
                ? this.subject.subjectName.toString()
                : Subject.Subjects.NONE.toString(); // TODO public access
    }
    /**
     * Serializes the students to a String
     * @return stringified version of students
     */
    public String serializeStudents() {
        return getStudentsStr();
    }

    /**
     * Serializes the Task List to a String
     * @return stringified version of the task list
     */
    public String serializeTaskList() { //TODO
        return "";
    }

    /**
     * Deserialize the String to a Task List
     * @return Task List
     */
    public static TaskList deserializeTaskList(String taskList) throws IllegalValueException { //TODO
        return new TaskList();
    }

    /**
     * Deserialize the dates to a String
     * @return stringified version of dates
     */
    public static LocalDateTime deserializeDate(String date) throws IllegalValueException {
        return LocalDateTime.parse(date);
    }

    /**
     * Deserialize the subject to a String
     * @return stringified version of subjects
     */
    public static Subject deserializeSubject(String subject) throws IllegalValueException {
        return Subject.parseSubject(subject);
    }

    /**
     * Deserialize the students to a String
     * @return stringified version of students
     */
    public static ArrayList<String> deserializeStudents(String students) throws IllegalValueException {
        // comma delimited
        return new ArrayList<>(Arrays.asList(students.split(",")));
    }
    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof Lesson)) {
            return false;
        }

        Lesson otherLesson = (Lesson) other;
        return start.equals(otherLesson.start)
                && end.equals(otherLesson.end)
                && subject.equals(otherLesson.subject)
                && students.equals(otherLesson.students)
                && name.equals(otherLesson.name)
                && taskList.equals(otherLesson.taskList);

    }
    @Override
    public int hashCode() {
        // use this method for custom fields hashing instead of implementing your own
        return Objects.hash(start, end, subject, students);
    }
    /**
     * Returns true if both lessons have the same start and end time.
     * This defines a weaker notion of equality between two lessons.
     */
    public boolean equals(Lesson otherLesson) {
        return otherLesson.getName().equals(getName())
                && otherLesson.getStart().equals(getStart())
                && otherLesson.getEnd().equals(getEnd())
                && otherLesson.getSubject().equals(getSubject())
                && otherLesson.getStudents().equals(getStudents());
    }

    /**
     * Returns true if both lessons have the same identity and data fields.
     * @param otherLesson The other lesson to compare with
     * @return true if the lessons clash
     */
    public boolean isClashWith(Lesson otherLesson) {
        requireAllNonNull(otherLesson);
        if (otherLesson == this) {
            return true;
        }
        if (this.start == Time.DEFAULT_TIME || otherLesson.getStart() == Time.DEFAULT_TIME) {
            return false;
        }
        if (this.end == Time.DEFAULT_TIME || otherLesson.getEnd() == Time.DEFAULT_TIME) {
            return false;
        }
        if (otherLesson.getStart().isBefore(this.getStart())) {
            return otherLesson.isClashWith(this);
        }
        return this.getEnd().isAfter(otherLesson.getStart());
    }
    @Override
    public String toString() {
        String subjectStr = subject == null
                             ? ""
                             : " for " + subject;
        return "Lesson from " + start + " to " + end + subjectStr + " with " + students;
    }

    public Lesson clone() {
        Lesson cloned = new Lesson();
        cloned.setStartIfNotDefault(this.start);
        cloned.setEndIfNotDefault(this.end);
        cloned.setSubjectIfNotDefault(this.subject);
        cloned.setStudents(this.students);
        cloned.setNameIfNotDefault(this.name);
        return cloned;
    }
}
