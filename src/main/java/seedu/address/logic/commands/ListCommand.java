package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;
import static seedu.address.model.Model.PREDICATE_SHOW_ALL_PERSONS;

import java.util.Arrays;

import seedu.address.model.Model;
import seedu.address.model.State;

/**
 * Lists all persons in the address book to the user.
 */
public class ListCommand extends Command {

    public static final String COMMAND_WORD = "list";

    public static final String MESSAGE_SUCCESS = "Showing list";

    public static final String MESSAGE_USAGE = COMMAND_WORD + ": Displays the specified list, which can be a "
            + "STUDENTS list or SCHEDULE list. Default command without "
            + "specified list displays the schedule list. When specifying STUDENTS list,"
            + "optional parameters can be used to specify what student details to display\n"
            + "Parameters: [LIST] [KEYWORDS]...\n"
            + "Example: " + COMMAND_WORD + " SCHEDULE\n"
            + "Example: " + COMMAND_WORD + " STUDENTS phone email\n";

    private final State state;
    private final String[] displayParams;

    /**
     * Creates a list command.
     *
     * @param state Name of the state.
     * @param displayParams Array of strings specifying details to display for each student.
     */
    public ListCommand(State state, String[] displayParams) {
        this.state = state;
        this.displayParams = displayParams;
    }

    public ListCommand() {
        this(State.NONE, new String[0]);
    }

    public ListCommand(State state) {
        this(state, new String[0]);
    }

    @Override
    public CommandResult execute(Model model) {
        requireNonNull(model);
        model.updateFilteredPersonList(PREDICATE_SHOW_ALL_PERSONS);
        if (model.sameState(state)) {
            return new CommandResult(MESSAGE_SUCCESS, displayParams);
        } else {
            model.setState(state); // Only can pass in "STUDENTS" or "SCHEDULE", has been filtered by parser
            return new CommandResult(MESSAGE_SUCCESS, state, displayParams);
        }
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof ListCommand)) {
            return false;
        }

        ListCommand otherListCommand = (ListCommand) other;
        return state.equals(otherListCommand.state)
                && Arrays.equals(displayParams, otherListCommand.displayParams);
    }
}
