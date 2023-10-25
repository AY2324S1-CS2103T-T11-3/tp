package seedu.address.logic.commands;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.ListEntry;
import seedu.address.model.Model;

import static seedu.address.logic.ReflectionUtil.call;

public class GeneralAddCommand extends Command {
    private final ListEntry toAdd;
    public GeneralAddCommand(ListEntry toAdd) {
        this.toAdd = toAdd;
    }
    @Override
    public CommandResult execute(Model model) throws CommandException {
        ListEntry defaultEntry = (ListEntry) call(toAdd, "getDefault" + toAdd.getClass().getSimpleName());
        return new GeneralEditCommand(toAdd, defaultEntry).execute(model);
    }
}
