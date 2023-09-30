package seedu.address.logic.commands;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;

public class TutorialCommand extends Command {
    public static final String COMMAND_WORD = "tutorial";
    public  CommandResult execute(Model model) throws CommandException {
        return new CommandResult("Fake command result");
    }
}
