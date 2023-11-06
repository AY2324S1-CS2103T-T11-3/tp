package seedu.address.logic.commands;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import static seedu.address.testutil.Assert.assertThrows;

import org.junit.jupiter.api.Test;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.ModelManager;
import seedu.address.model.lessons.Lesson;
import seedu.address.model.person.Name;


class AddLessonCommandTest {

    @Test
    void executeTest() {
        Lesson lesson = Lesson.getDefaultLesson();
        try {
            lesson.setName(new Name("test"));
            AddLessonCommand addLessonCommand = new AddLessonCommand(null);
            fail();
        } catch (Exception e) {
            assertTrue(e instanceof NullPointerException);
        }
        AddLessonCommand addLessonCommand = new AddLessonCommand(lesson);
        try {
            addLessonCommand.execute(null);
            fail();
        } catch (Exception e) {
            assertTrue(e instanceof NullPointerException);
        }
        try {
            Model model = new ModelManager();
            assertFalse(model.hasLessonClashWith(lesson));
            addLessonCommand.execute(model);
            assertTrue(model.hasLessonClashWith(lesson));
            assertThrows(CommandException.class, () -> addLessonCommand.execute(model));
        } catch (CommandException e) {
            fail();
        }
    }
}
