package seedu.address.logic.parser;

import seedu.address.logic.commands.GeneralAddCommand;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.listEntries.ListEntry;

import static seedu.address.logic.parser.TypeParsingUtil.parseTo;
import static seedu.address.logic.parser.TypeParsingUtil.parseToListEntry;

public class GeneralAddCommandParser implements Parser<GeneralAddCommand> {
    private final Class<? extends ListEntry> listEntryClass;
    public GeneralAddCommandParser(Class<? extends ListEntry> listEntryClass) {
        this.listEntryClass = listEntryClass;
    }
    @Override
    public GeneralAddCommand parse(String commandText) throws ParseException {
        return new GeneralAddCommand(parseToListEntry(listEntryClass, commandText));
    }
}
