package seedu.address.logic.commands;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;
import static seedu.address.testutil.TypicalLessons.getTypicalScheduleList;
import static seedu.address.testutil.TypicalPersons.getTypicalAddressBook;

import org.junit.jupiter.api.Test;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.EditCommandParser;
import seedu.address.model.Model;
import seedu.address.model.ModelManager;
import seedu.address.model.UserPrefs;
import seedu.address.model.fields.Name;
import seedu.address.model.listentries.Person;


/**
 * Contains integration tests (interaction with the Model) and unit tests for EditCommand.
 */
public class EditCommandTest {

    private Model model = new ModelManager(getTypicalAddressBook(), new UserPrefs(), getTypicalScheduleList());
    private EditCommandParser p = new EditCommandParser();

    @Test
    void happyCases() {
        try {
            assertFalse(model.hasPerson(new Person(new Name("Yiwen"))));
            p.parse("edit 1 -name Yiwen -email fake@email"
                    + " -address fake -subject english -phone 12345678").execute(model);
            assertTrue(model.hasPerson(new Person(new Name("Yiwen"))));
        } catch (Exception e) {
            fail();
        }
    }

    @Test
    void noNameCollisionAndNoDetectableModificationTest() {
        try {
            int length = model.getFilteredPersonList().size();
            Person person = new Person(new Name("Yiwen"));
            model.addPerson(person);
            assertEquals(person, model.getFilteredPersonList().get(length));
            String index = Integer.toString(length + 1);
            p.parse("edit " + index + " -name Yiwen2").execute(model);
            assertThrows(CommandException.class, () -> p
                    .parse("edit " + index + " -name Yiwen2").execute(model));
        } catch (Exception e) {
            fail();
        }
    }
}
