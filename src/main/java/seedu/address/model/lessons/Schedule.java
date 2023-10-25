package seedu.address.model.lessons;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.util.Comparator;
import java.util.Iterator;
import java.util.List;

import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import seedu.address.model.lessons.exceptions.DuplicateLessonException;
import seedu.address.model.lessons.exceptions.LessonNotFoundException;
import seedu.address.model.person.exceptions.DuplicatePersonException;


/**
 * A list of lessons that enforces uniqueness between its elements and does not allow nulls.
 * A lesson is considered unique by comparing using {@code Lesson#isSameLesson(Lesson)}. As such, adding and updating of
 * persons uses Person#isSamePerson(Person) for equality so as to ensure that the person being added or updated is
 * unique in terms of identity in the UniquePersonList. However, the removal of a person uses Lesson#equals(Object) so
 * as to ensure that the person with exactly the same fields will be removed.
 *
 * Supports a minimal set of list operations.
 *
 * @see Lesson#isSameLesson(Lesson)
 */
public class Schedule implements Iterable<Lesson> {

    private final ObservableList<Lesson> internalSchedule = FXCollections.observableArrayList();
    private final LessonComparator lessonComparator = new LessonComparator();
    private final ObservableList<Lesson> internalUnmodifiableSchedule =
            FXCollections.unmodifiableObservableList(internalSchedule);

    /**
     * Constructor for a Schedule.
     */
    public Schedule() {

    }

    /**
     * Serializes the student's schedule
     * TODO: make this override something
     * TODO: Implementation
     */
    public String serialize() {

        return "";

    }

    /**
     * Deserialize to a schedule
     * @return stringified version of schedule
     */
    public Schedule deserialize() {
        // TODO
        return new Schedule();
    }
    /**
     * Returns true if the list contains an equivalent lesson as the given argument.
     */
    public boolean contains(Lesson toCheck) {
        requireNonNull(toCheck);
        System.out.println(internalSchedule);
        return internalSchedule.stream().anyMatch(toCheck::isSameLesson);
    }

    /**
     * Returns true if the list contains a lesson that clashes with the given argument.
     * @param toCheck Lesson to check
     * @return true if the list contains a lesson that clashes with the given argument.
     */
    public boolean hasLessonClashWith(Lesson toCheck) {
        requireNonNull(toCheck);
        return internalSchedule.stream().anyMatch(toCheck::isClashWith);
    }

    /**
     * Returns the lesson that clashes with the given argument.
     * @param toCheck Lesson to check
     * @return Lesson that clashes with the given argument.
     */
    public Lesson getLessonClashWith(Lesson toCheck) {
        requireNonNull(toCheck);
        return internalSchedule.stream().filter(toCheck::isClashWith).findFirst().get();
    }

    /**
     * Adds a lesson to the schedule.
     * The lesson must not already exist in the list.
     */
    public void add(Lesson toAdd) {
        requireNonNull(toAdd);
        if (contains(toAdd)) {
            throw new DuplicateLessonException();
        }
        internalSchedule.add(toAdd);
        internalSchedule.sort(lessonComparator);
    }

    /**
     * Replaces the lesson {@code target} in the list with {@code editedLesson}.
     * {@code target} must exist in the list.
     * The lesson identity of {@code editedLesson} must not be the same as another existing lesson in the schedule.
     */
    public void setLesson(Lesson target, Lesson editedLesson) {
        requireAllNonNull(target, editedLesson);

        int index = internalSchedule.indexOf(target);
        if (index == -1) {
            throw new LessonNotFoundException();
        }

        if (!target.isSameLesson(editedLesson) && contains(editedLesson)) {
            throw new DuplicatePersonException();
        }

        internalSchedule.set(index, editedLesson);
        internalSchedule.sort(lessonComparator);
    }

    /**
     * Removes the equivalent lesson from the list.
     * The lesson must exist in the list.
     */
    public void remove(Lesson toRemove) {
        requireNonNull(toRemove);
        if (!internalSchedule.remove(toRemove)) {
            throw new LessonNotFoundException();
        }
    }

    public void setLessons(Schedule replacement) {
        requireNonNull(replacement);
        internalSchedule.setAll(replacement.internalSchedule);
        internalSchedule.sort(lessonComparator);
    }

    /**
     * Replaces the contents of this list with {@code lessons}.
     * {@code lessons} must not contain duplicate lessons.
     */
    public void setLessons(List<Lesson> lessons) {
        requireAllNonNull(lessons);
        if (!lessonsAreUnique(lessons)) {
            throw new DuplicateLessonException();
        }

        internalSchedule.setAll(lessons);
        internalSchedule.sort(lessonComparator);
    }

    /**
     * Returns the backing list as an unmodifiable {@code ObservableList}.
     */
    public ObservableList<Lesson> asUnmodifiableObservableList() {
        return internalUnmodifiableSchedule;
    }

    @Override
    public Iterator<Lesson> iterator() {
        return internalSchedule.iterator();
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof Schedule)) {
            return false;
        }

        Schedule otherSchedule = (Schedule) other;
        return internalSchedule.equals(otherSchedule.internalSchedule);
    }

    @Override
    public int hashCode() {
        return internalSchedule.hashCode();
    }

    @Override
    public String toString() {
        return internalSchedule.toString();
    }

    /**
     * Returns true if {@code lessons} contains only unique lessons.
     */
    private boolean lessonsAreUnique(List<Lesson> lessons) {
        for (int i = 0; i < lessons.size() - 1; i++) {
            for (int j = i + 1; j < lessons.size(); j++) {
                if (lessons.get(i).isSameLesson(lessons.get(j))) {
                    return false;
                }
            }
        }
        return true;
    }
    class LessonComparator implements Comparator<Lesson> {
        @Override
        public int compare(Lesson lesson1, Lesson lesson2) {
            return lesson1.getStart()
                    .compareTo(lesson2.getStart());
        }
    }
}
