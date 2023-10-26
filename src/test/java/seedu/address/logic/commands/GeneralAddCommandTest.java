package seedu.address.logic.commands;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import static seedu.address.testutil.Assert.assertThrows;
import static seedu.address.testutil.TypicalLessons.getTypicalScheduleList;
import static seedu.address.testutil.TypicalPersons.getTypicalAddressBook;

import org.junit.jupiter.api.Test;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.ModelManager;
import seedu.address.model.UserPrefs;
import seedu.address.model.fields.Name;
import seedu.address.model.listentries.Lesson;
import seedu.address.model.listentries.Person;

class GeneralAddCommandTest {
    private Model model = new ModelManager(getTypicalAddressBook(), new UserPrefs(), getTypicalScheduleList());

    @Test
    void addPersonAddLessonTestDetectForPersonOrLessonAlreadyInTheList() {
        try {
            int length = model.getFilteredPersonList().size();
            Person person = new Person(new Name("Yiwen"));
            new GeneralAddCommand(person).execute(model);
            assertEquals(person, model.getFilteredPersonList().get(length));
            Lesson lesson = Lesson.getDefaultLesson();
            lesson.setName(new Name("Lesson1010101"));
            assertFalse(model.hasLesson(lesson));
            new GeneralAddCommand(lesson).execute(model);
            assertTrue(model.hasLesson(lesson));
            assertThrows(CommandException.class, () -> new GeneralAddCommand(lesson).execute(model));
            assertThrows(CommandException.class, () -> new GeneralAddCommand(person).execute(model));
        } catch (Exception e) {
            fail(e.getMessage());
        }
    }

}
