package seedu.address.logic.commands;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.listEntries.ListEntry;
import seedu.address.model.Model;

import static seedu.address.logic.ReflectionUtil.call;

public class GeneralAddCommand extends Command {
    private final ListEntry toAdd;
    public GeneralAddCommand(ListEntry toAdd) {
        this.toAdd = toAdd;
    }
    @Override
    public CommandResult execute(Model model) throws CommandException {
        if ((Boolean) call(model, "has" + toAdd.getClass().getSimpleName(), toAdd)) {
            throw new CommandException("This " + toAdd.getClass().getSimpleName() + " already exists in the list.");
        }
        ListEntry defaultEntry = (ListEntry) call(toAdd, "getDefault" + toAdd.getClass().getSimpleName());
        call(model, "add" + toAdd.getClass().getSimpleName(), defaultEntry);
        return new GeneralEditCommand(toAdd, defaultEntry).execute(model);
    }
    public ListEntry getToAdd() {
        return toAdd;
    }
}
