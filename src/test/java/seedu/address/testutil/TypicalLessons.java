package seedu.address.testutil;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import seedu.address.model.ScheduleList;
import seedu.address.model.lessons.Lesson;
import seedu.address.model.lessons.Task;
import seedu.address.model.lessons.TaskList;
import seedu.address.model.person.Name;
import seedu.address.model.person.Subject;

/**
 * A utility class containing a list of {@code Person} objects to be used in tests.
 */
public class TypicalLessons {
    private static LocalDateTime startLesson1 = LocalDateTime.of(2022, 10, 10, 14, 30);
    private static LocalDateTime endLesson1 = LocalDateTime.of(2022, 10, 10, 16, 30);
    private static LocalDateTime startLesson2 = LocalDateTime.of(2022, 10, 20, 14, 30);
    private static LocalDateTime endLesson2 = LocalDateTime.of(2022, 10, 18, 16, 30);
    private static LocalDateTime startLesson3 = LocalDateTime.of(2022, 11, 20, 10, 30);
    private static LocalDateTime endLesson3 = LocalDateTime.of(2022, 10, 18, 12, 30);
    private static Subject math = new Subject("MATHEMATICS");
    private static Subject bio = new Subject("BIOLOGY");
    private static TaskList taskList = new TaskList();

    private static List<Task> fillerTasks = Arrays.asList(new Task("first"), new Task("second"), new Task("third"));

    public static final Lesson LESSON1 = new Lesson(startLesson1, endLesson1, math, taskList, new Name("Alex Yeoh"));

    public static final Lesson LESSON2 = new Lesson(startLesson2, endLesson2, math, taskList, new Name("David Li"));
    public static final Lesson LESSON3 = new Lesson(startLesson3, endLesson3, bio, taskList, new Name("Bernice Yu"));

    private TypicalLessons() {} // prevents instantiation

    /**
     * Returns an {@code ScheduleList} with all the typical persons.
     */
    public static ScheduleList getTypicalScheduleList() {
        ScheduleList sc = new ScheduleList();
        for (Lesson lesson : getTypicalLessons()) {
            sc.addLesson(lesson);
        }
        return sc;
    }

    public static List<Lesson> getTypicalLessons() {
        taskList.setTasks(fillerTasks);
        return new ArrayList<>(Arrays.asList(LESSON1, LESSON2, LESSON3));
    }
}
