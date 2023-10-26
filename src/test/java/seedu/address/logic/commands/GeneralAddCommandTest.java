package seedu.address.logic.commands;

import org.junit.jupiter.api.Test;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.ModelManager;
import seedu.address.model.UserPrefs;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.listEntries.Person;
import seedu.address.model.l.Name;

import static org.junit.jupiter.api.Assertions.*;
import static seedu.address.testutil.TypicalLessons.getTypicalScheduleList;
import static seedu.address.testutil.TypicalPersons.getTypicalAddressBook;

class GeneralAddCommandTest {
    private Model model = new ModelManager(getTypicalAddressBook(), new UserPrefs(), getTypicalScheduleList());

    @Test
    void addPerson_addLessonTest_DetectForPersonOrLessonAlreadyInTheList() {
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