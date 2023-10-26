package seedu.address.testutil;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.ScheduleList;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.listEntries.Task;
import seedu.address.model.lists.TaskList;
import seedu.address.model.listEntryFields.Name;
import seedu.address.model.listEntryFields.Subject;

/**
 * A utility class containing a list of {@code Person} objects to be used in tests.
 */
public class TypicalLessons {
    private static TaskList taskList = new TaskList();

    private static List<Task> fillerTasks = Arrays.asList(new Task("first"), new Task("second"), new Task("third"));


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
        try {
            taskList.setTasks(fillerTasks);
            return new ArrayList<>(Arrays.asList(
                    new Lesson("lesson 1",  "14:30", "16:30", "2022/10/10", "MATHEMATICS"),
                    new Lesson("lesson 2",  "14:30", "16:30", "2022/10/20", "BIOLOGY"),
                    new Lesson("lesson 3", "10:30", "12:30", "2022/11/20", "MATHEMATICS")
            ));
        } catch (ParseException e) {
            return new ArrayList<>();
        }
    }
}
