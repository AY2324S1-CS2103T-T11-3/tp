package seedu.address.model.lessons;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

import seedu.address.logic.parser.exceptions.ParseException;


public class LessonTest {
    private TaskList taskList = new TaskList();
    @Test
    public void clash_withItself_true() throws ParseException {

        Lesson lesson1 = new Lesson("Test name", "10:00", "12:00", "20", "Chemistry",
                taskList);
        assertTrue(lesson1.isClashWith(lesson1));
    }

    @Test
    public void doesNotClash_withNonOverlapping_true() throws ParseException {
        Lesson lesson1 = new Lesson("Test name", "10:00", "12:00", "20", "Chemistry",
                taskList);
        Lesson lesson2 = new Lesson("Test name", "10:00", "12:00", "23", "Chemistry",
                taskList);

        assertFalse(lesson1.isClashWith(lesson2));
    }

    @Test
    public void clash_withOverlappingLesson_true() throws ParseException {
        Lesson lesson1 = new Lesson("Test name", "10:00", "12:00", "20", "Chemistry",
                taskList);
        Lesson lesson2 = new Lesson("Test name", "11:00", "13:00", "20", "Chemistry",
                taskList);

        assertTrue(lesson1.isClashWith(lesson2));
    }

    @Test
    public void doesNotClash_startTimeEqualsEndTime_true() throws ParseException {
        Lesson lesson1 = new Lesson("Test name", "10:00", "12:00", "20", "Chemistry",
                taskList);
        Lesson lesson2 = new Lesson("Test name", "12:00", "13:00", "20", "Chemistry",
                taskList);

        assertFalse(lesson1.isClashWith(lesson2));
    }

}
