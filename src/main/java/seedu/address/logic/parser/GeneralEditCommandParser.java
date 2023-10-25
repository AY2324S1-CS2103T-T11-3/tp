package seedu.address.logic.parser;

import seedu.address.logic.commands.GeneralEditCommand;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.ListEntry;

import static seedu.address.logic.parser.TypeParsingUtil.getValueImmediatelyAfterCommandName;

public class GeneralEditCommandParser implements Parser<GeneralEditCommand> {
    private final Class<? extends ListEntry> listEntryClass;
    public GeneralEditCommandParser(Class<? extends ListEntry> listEntryClass) {
        this.listEntryClass = listEntryClass;
    }
    public GeneralEditCommand parse(String commandText) throws ParseException {
        String indexString = getValueImmediatelyAfterCommandName("edit", "index", commandText, true);
        ListEntry toEdit = TypeParsingUtil.parseToListEntry(listEntryClass, commandText);
        if (indexString != null) {
            Integer index = TypeParsingUtil.parseNum(indexString);
            return new GeneralEditCommand(toEdit, index);
        }
        return new GeneralEditCommand(toEdit);
    }
}
