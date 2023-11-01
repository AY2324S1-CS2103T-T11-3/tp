package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;

import seedu.address.commons.core.index.Index;
import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.lessons.Lesson;

/**
 * Deletes a person identified using it's displayed index from the address book.
 */
public class DeleteTaskCommand extends Command {

    public static final String COMMAND_WORD = "deleteTask";

    public static final String MESSAGE_USAGE = COMMAND_WORD
            + ": Deletes the task identified by the task index from the currently displayed lesson .\n"
            + "Parameters: task index (must be a positive integer)\n"
            + "Example: " + COMMAND_WORD + " 1";

    public static final String MESSAGE_DELETE_TASK_SUCCESS = "Deleted Task: %1$s";

    private final int taskIndex;

    public DeleteTaskCommand(int taskIndex) {
        this.taskIndex = taskIndex;
    }

    public DeleteTaskCommand(Index targetIndex) {
        this.taskIndex = targetIndex.getZeroBased();
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);
        Lesson currentlyShownLesson = model.getCurrentlyDisplayedLesson();
        // check whether task index specified is within task list of lesson
        if (currentlyShownLesson == null) {
            throw new CommandException("Please use show lessonIndex before deleting task!");
        }
        String taskToDelete = "";
        if (taskIndex < 0) {
            throw new CommandException("Task index do not belong to any tasks!");
        }
        try {
            taskToDelete = model.deleteTask(currentlyShownLesson, taskIndex);
        } catch (IndexOutOfBoundsException e) {
            throw new CommandException("Task index do not belong to any tasks!");
        }
        return new CommandResult(String.format(MESSAGE_DELETE_TASK_SUCCESS, taskToDelete));
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof DeleteTaskCommand)) {
            return false;
        }

        DeleteTaskCommand otherDeletePersonCommand = (DeleteTaskCommand) other;
        return taskIndex == otherDeletePersonCommand.taskIndex;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("taskIndex", taskIndex)
                .toString();
    }
}
