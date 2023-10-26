package seedu.address.logic.commands;


import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static seedu.address.logic.commands.CommandTestUtil.assertCommandFailure;
import static seedu.address.logic.commands.CommandTestUtil.assertCommandSuccess;
import static seedu.address.testutil.TypicalIndexes.INDEX_FIRST_PERSON;
import static seedu.address.testutil.TypicalIndexes.INDEX_SECOND_PERSON;
import static seedu.address.testutil.TypicalLessons.getTypicalScheduleList;
import static seedu.address.testutil.TypicalPersons.getTypicalAddressBook;

import org.junit.jupiter.api.Test;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.Messages;
import seedu.address.model.Model;
import seedu.address.model.ModelManager;
import seedu.address.model.State;
import seedu.address.model.UserPrefs;
import seedu.address.model.listentries.Lesson;
import seedu.address.model.listentries.Person;

/**
 * Contains integration tests (interaction with the Model) and unit tests for
 * {@code ShowCommand}.
 */
public class ShowCommandTest {

    private Model model = new ModelManager(getTypicalAddressBook(), new UserPrefs(), getTypicalScheduleList());

    @Test
    public void execute_validIndexUnfilteredStudentList_success() {
        model.setState(State.STUDENT);
        Person personToShow = model.getFilteredPersonList().get(INDEX_FIRST_PERSON.getZeroBased());
        ShowCommand showCommand = new ShowCommand(INDEX_FIRST_PERSON);
        String expectedMessage = String.format(ShowCommand.MESSAGE_SHOW_PERSON_SUCCESS,
                Messages.format(personToShow));
        ModelManager expectedModel = new ModelManager(model.getAddressBook(), new UserPrefs(), model.getScheduleList());
        expectedModel.showPerson(personToShow);

        assertCommandSuccess(showCommand, model, expectedMessage, expectedModel);
    }

    @Test
    public void execute_validIndexUnfilteredLessonList_success() {
        model.setState(State.SCHEDULE);
        Lesson lessonToShow = model.getFilteredScheduleList().get(INDEX_FIRST_PERSON.getZeroBased());
        ShowCommand showCommand = new ShowCommand(INDEX_FIRST_PERSON);
        String expectedMessage = String.format(ShowCommand.MESSAGE_SHOW_LESSON_SUCCESS,
                Messages.formatLesson(lessonToShow));
        ModelManager expectedModel = new ModelManager(model.getAddressBook(), new UserPrefs(), model.getScheduleList());
        expectedModel.showLesson(lessonToShow);

        assertCommandSuccess(showCommand, model, expectedMessage, expectedModel);
    }

    @Test
    public void execute_invalidIndexUnfilteredPersonList_throwsCommandException() {
        model.setState(State.STUDENT);
        Index outOfBoundIndex = Index.fromOneBased(model.getFilteredPersonList().size() + 1);
        ShowCommand showCommand = new ShowCommand(outOfBoundIndex);

        assertCommandFailure(showCommand, model, Messages.MESSAGE_INVALID_PERSON_DISPLAYED_INDEX);
    }

    @Test
    public void execute_invalidIndexUnfilteredLessonList_throwsCommandException() {
        model.setState(State.SCHEDULE);
        Index outOfBoundIndex = Index.fromOneBased(model.getFilteredScheduleList().size() + 1);
        ShowCommand showCommand = new ShowCommand(outOfBoundIndex);

        assertCommandFailure(showCommand, model, Messages.MESSAGE_INVALID_LESSON_DISPLAYED_INDEX);
    }

    @Test
    public void execute_invalidState_throwsCommandException() {
        model.setState(State.NONE);
        ShowCommand showCommand = new ShowCommand(INDEX_FIRST_PERSON);

        assertCommandFailure(showCommand, model, Messages.MESSAGE_UNKNOWN_COMMAND);
    }

    @Test
    public void equals() {
        ShowCommand showFirstCommand = new ShowCommand(INDEX_FIRST_PERSON);
        ShowCommand showSecondCommand = new ShowCommand(INDEX_SECOND_PERSON);

        // same object -> returns true
        assertTrue(showFirstCommand.equals(showFirstCommand));

        // same values -> returns true
        ShowCommand deleteFirstCommandCopy = new ShowCommand(INDEX_FIRST_PERSON);
        assertTrue(showFirstCommand.equals(deleteFirstCommandCopy));

        // different types -> returns false
        assertFalse(showFirstCommand.equals(1));

        // null -> returns false
        assertFalse(showFirstCommand.equals(null));

        // different person -> returns false
        assertFalse(showFirstCommand.equals(showSecondCommand));
    }

    @Test
    public void toStringMethod() {
        Index targetIndex = Index.fromOneBased(1);
        ShowCommand showCommand = new ShowCommand(targetIndex);
        String expected = ShowCommand.class.getCanonicalName() + "{targetIndex=" + targetIndex + "}";
        assertEquals(expected, showCommand.toString());
    }
}
