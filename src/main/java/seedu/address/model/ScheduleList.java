package seedu.address.model;

import static java.util.Objects.requireNonNull;

import java.util.List;

import javafx.collections.ObservableList;
import seedu.address.commons.util.ToStringBuilder;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.lists.Schedule;

/**
 * Wraps all data at the schedule-list level
 * Duplicates are not allowed (by .isSameLesson comparison)
 */
public class ScheduleList implements ReadOnlySchedule {

    private final Schedule lessons;

    /*
     * The 'unusual' code block below is a non-static initialization block, sometimes used to avoid duplication
     * between constructors. See https://docs.oracle.com/javase/tutorial/java/javaOO/initial.html
     *
     * Note that non-static init blocks are not recommended to use. There are other ways to avoid duplication
     *   among constructors.
     */
    {
        lessons = new Schedule();
    }

    public ScheduleList() {}

    /**
     * Creates an ScheduleList using the Lessons in the {@code toBeCopied}
     */
    public ScheduleList(ReadOnlySchedule toBeCopied) {
        this();
        resetData(toBeCopied);
    }

    //// list overwrite operations

    /**
     * Replaces the contents of the lesson list with {@code lessons}.
     * {@code lessons} must not contain duplicate lessons.
     */
    public void setLessons(List<Lesson> lessons) {
        this.lessons.setLessons(lessons);
    }

    /**
     * Resets the existing data of this {@code ScheduleList} with {@code newData}.
     */
    public void resetData(ReadOnlySchedule newData) {
        requireNonNull(newData);

        setLessons(newData.getLessonList());
    }

    //// person-level operations

    /**
     * Returns true if a lesson with the same identity as {@code lesson} exists in the schedule list.
     */
    public boolean hasLesson(Lesson lesson) {
        requireNonNull(lesson);
        return lessons.contains(lesson);
    }

    /**
     * Returns true if a lesson with the same identity as {@code lesson} exists in the schedule list.
     */
    public boolean hasLessonClashWith(Lesson lesson) {
        requireNonNull(lesson);
        return lessons.hasLessonClashWith(lesson);
    }

    /**
     * Returns the lesson that clashes with {@code lesson} if any. Else returns null.
     */
    public Lesson getLessonClashWith(Lesson lesson) {
        requireNonNull(lesson);
        return lessons.getLessonClashWith(lesson);
    }

    /**
     * Adds a lesson to the schedule list.
     * The lesson must not already exist in the schedule list.
     */
    public void addLesson(Lesson l) {
        lessons.add(l);
    }

    /**
     * Replaces the given lesson {@code target} in the list with {@code editedLesson}.
     * {@code target} must exist in the schedule list.
     * The lesson identity of {@code editedLesson} must not be the same as another existing lesson in the schedule list.
     */
    public void setLesson(Lesson target, Lesson editedLesson) {
        requireNonNull(editedLesson);

        lessons.setLesson(target, editedLesson);
    }

    /**
     * Removes {@code key} from this {@code ScheduleList}.
     * {@code key} must exist in the schedule list.
     */
    public void removeLesson(Lesson key) {
        lessons.remove(key);
    }

    //// util methods

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("lessons", lessons)
                .toString();
    }

    @Override
    public ObservableList<Lesson> getLessonList() {
        return lessons.asUnmodifiableObservableList();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof ScheduleList)) {
            return false;
        }

        ScheduleList otherScheduleList = (ScheduleList) other;
        return lessons.equals(otherScheduleList.lessons);
    }

    @Override
    public int hashCode() {
        return lessons.hashCode();
    }
}
