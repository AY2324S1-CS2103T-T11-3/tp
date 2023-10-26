package seedu.address.logic.parser;

import static seedu.address.logic.parser.TypeParsingUtil.getValueImmediatelyAfterCommandName;

import seedu.address.logic.commands.GeneralEditCommand;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.listentries.ListEntry;


/**
 * Parses input arguments and creates a new GeneralEditCommand object
 */
public class GeneralEditCommandParser implements Parser<GeneralEditCommand> {
    private final Class<? extends ListEntry> listEntryClass;
    public GeneralEditCommandParser(Class<? extends ListEntry> listEntryClass) {
        this.listEntryClass = listEntryClass;
    }
    /**
     * Parses the given {@code String} of arguments in the context of the GeneralEditCommand
     * and returns a GeneralEditCommand object for execution.
     * @throws ParseException if the user input does not conform the expected format
     */
    public GeneralEditCommand parse(String commandText) throws ParseException {
        String indexString = getValueImmediatelyAfterCommandName("edit", "index", commandText, true);
        ListEntry toEdit = TypeParsingUtil.parseToListEntry(listEntryClass, commandText, true);
        if (indexString != null) {
            Integer index = TypeParsingUtil.parseNum(indexString);
            return new GeneralEditCommand(toEdit, index);
        }
        return new GeneralEditCommand(toEdit);
    }
}
