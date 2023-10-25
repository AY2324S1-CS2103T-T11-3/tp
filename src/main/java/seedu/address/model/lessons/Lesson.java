package seedu.address.model.lessons;

import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Objects;

import javafx.collections.ObservableList;
import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.commons.util.StringUtil;
import seedu.address.model.ListEntry;
import seedu.address.model.person.Name;
import seedu.address.model.person.Person;
import seedu.address.model.person.Subject;

/**
 * Represents a student's lesson in the schedule.
 * Guarantees: details are present and not null, field values are validated, immutable.
 */
public class Lesson implements ListEntry {
    private Name name;
    // Lesson fields
    private LocalDateTime start;
    private LocalDateTime end;
    // Data fields
    private Subject subject;

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
        this.start = start;
        this.end = end;
        this.subject = subject;
        this.students = new ArrayList<>(Arrays.asList(studentNames));
        this.taskList = taskList;
    }

    /**
     * Alternative constructor for a Lesson Object without subject
     */
    public Lesson(LocalDateTime start, LocalDateTime end, TaskList taskList, Name... studentNames) {
        requireAllNonNull(start, end);
        this.start = start;
        this.end = end;
        this.students = new ArrayList<>(Arrays.asList(studentNames));
        this.taskList = taskList;
    }
    /**
     * Alternative constructor for a Lesson Object with an ArrayList of students
     */
    public Lesson(LocalDateTime start, LocalDateTime end, Subject subject,
                  TaskList taskList, ArrayList<Name> studentNames) {
        requireAllNonNull(start, end, subject);
        this.start = start;
        this.end = end;
        this.subject = subject;
        this.students = studentNames;
        this.taskList = taskList;
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }

    public void setNameIfNotNull(Name name) {
        if (name != null) {
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
        return start.format(formatter);
    }

    /**
     * Gets the end time formatted in 12h
     */
    public String getEndTimeStr() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("h:mm a");
        return end.format(formatter);
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
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d MMM yyyy");
        String formattedStart = start.format(formatter);
        if (isSameDay()) {
            return formattedStart;
        } else {
            String formattedEnd = end.format(formatter);
            return formattedStart + " - " + formattedEnd;
        }
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

    public LocalDateTime getStart() {
        return start;
    }
    public void setStart(LocalDateTime start) {
        this.start = start;
    }

    public LocalDateTime getEnd() {
        return end;
    }

    public void setEnd(LocalDateTime end) {
        this.end = end;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
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
                && students.equals(otherLesson.students);

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
    public boolean isSameLesson(Lesson otherLesson) {
        if (otherLesson == this) {
            return true;
        }

        return otherLesson != null
                && otherLesson.getStart().equals(getStart())
                && otherLesson.getEnd().equals(getEnd());
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
        return otherLesson != null
                && otherLesson.getStart().isBefore(getEnd())
                && otherLesson.getEnd().isAfter(getStart());
    }
    @Override
    public String toString() {
        /* this leads to `New lesson added: seedu.address.model.lessons.Lesson
        {start=2023-10-20T13:40, end=2023-10-20T14:00, subject=null, students=[name1]}`
        return new ToStringBuilder(this)
                .add("start", start)
                .add("end", end)
                .add("subject", subject)
                .add("students", students)
                .toString();

        not sure why the above code works for Person but not for Lesson
        */

        String subjectStr = subject == null
                             ? ""
                             : " for " + subject;
        return "Lesson from " + start + " to " + end + subjectStr + " with " + students;
    }

    /**
     * Returns true if this Lesson's start and end date are the same.
     * @return
     */
    private boolean isSameDay() {
        return start.toLocalDate().isEqual(end.toLocalDate());
    }

    public Lesson clone() {
        return new Lesson(start, end, subject, students);
    }
}
