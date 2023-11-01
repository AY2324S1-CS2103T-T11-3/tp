package seedu.address.logic.parser;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;
import static seedu.address.logic.Messages.MESSAGE_UNKNOWN_COMMAND;
import static seedu.address.model.state.State.SCHEDULE;
import static seedu.address.model.state.State.STUDENT;
import static seedu.address.model.state.State.TASK;

import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import seedu.address.commons.core.LogsCenter;
import seedu.address.logic.commands.AddLessonCommand;
import seedu.address.logic.commands.AddPersonCommand;
import seedu.address.logic.commands.AddTaskCommand;
import seedu.address.logic.commands.ClearCommand;
import seedu.address.logic.commands.Command;
import seedu.address.logic.commands.DeleteLessonCommand;
import seedu.address.logic.commands.DeletePersonCommand;
import seedu.address.logic.commands.DeleteTaskCommand;
import seedu.address.logic.commands.EditLessonCommand;
import seedu.address.logic.commands.EditPersonCommand;
import seedu.address.logic.commands.ExitCommand;
import seedu.address.logic.commands.FindCommand;
import seedu.address.logic.commands.HelpCommand;
import seedu.address.logic.commands.LinkCommand;
import seedu.address.logic.commands.ListCommand;
import seedu.address.logic.commands.NavigateCommand;
import seedu.address.logic.commands.ShowCommand;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.Model;

/**
 * Parses user input.
 */
public class AddressBookParser {

    /**
     * Used for initial separation of command word and args.
     */
    private static final Pattern BASIC_COMMAND_FORMAT = Pattern.compile("(?<commandWord>\\S+)(?<arguments>.*)");
    private static final Logger logger = LogsCenter.getLogger(AddressBookParser.class);
    private final Model model;
    public AddressBookParser(Model model) {
        this.model = model;
    }

    /**
     * Parses user input into command for execution.
     *
     * @param userInput full user input string
     * @return the command based on the user input
     * @throws ParseException if the user input does not conform the expected format
     */
    public Command parseCommand(String userInput) throws ParseException {
        final Matcher matcher = BASIC_COMMAND_FORMAT.matcher(userInput.trim());
        if (!matcher.matches()) {
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, HelpCommand.MESSAGE_USAGE));
        }

        String commandWord = matcher.group("commandWord");
        switch (commandWord) {
        case "delete":
            if (model.getState().equals(SCHEDULE)) {
                commandWord = "deleteLesson";
                break;
            } else if (model.getState().equals(STUDENT)) {
                commandWord = "deletePerson";
                break;
            } else if (model.getState().equals(TASK)) {
                throw new ParseException("Please delete tasks in the schedule list.");
            }
            break;
        case "add":
            if (model.getState().equals(SCHEDULE)) {
                commandWord = "addLesson";
                break;
            } else if (model.getState().equals(STUDENT)) {
                commandWord = "addPerson";
                break;
            } else if (model.getState().equals(TASK)) {
                throw new ParseException("Please add tasks in the schedule list.");
            }
            break;
        case "edit":
            if (model.getState().equals(SCHEDULE)) {
                commandWord = "editLesson";
                break;
            } else if (model.getState().equals(STUDENT)) {
                commandWord = "editPerson";
                break;
            } else if (model.getState().equals(TASK)) {
                throw new ParseException("Editing tasks is not supported.");
            }
            break;
        default:
            break;
        }
        final String arguments = matcher.group("arguments");
        // Note to developers: Change the log level in config.json to enable lower level (i.e., FINE, FINER and lower)
        // log messages such as the one below.
        // Lower level log messages are used sparingly to minimize noise in the code.
        logger.fine("Command word: " + commandWord + "; Arguments: " + arguments);
        userInput = commandWord + " " + arguments;
        switch (commandWord) {

        case AddPersonCommand.COMMAND_WORD:
            return new AddPersonCommandParser().parse(userInput);

        case EditPersonCommand.COMMAND_WORD:
            return new EditPersonCommandParser().parse(userInput);

        case DeletePersonCommand.COMMAND_WORD:
            return new DeletePersonCommandParser().parse(arguments);
        case DeleteLessonCommand.COMMAND_WORD:
            return new DeleteLessonCommandParser().parse(arguments);
        case ShowCommand.COMMAND_WORD:
            return new ShowCommandParser().parse(arguments);
        case ClearCommand.COMMAND_WORD:
            return new ClearCommand();
        case FindCommand.COMMAND_WORD:
            return new FindCommandParser().parse(arguments);
        case ListCommand.COMMAND_WORD:
            return new ListCommandParser().parse(arguments);
        case ExitCommand.COMMAND_WORD:
            return new ExitCommand();
        case HelpCommand.COMMAND_WORD:
            return new HelpCommand();
        case AddLessonCommand.COMMAND_WORD:
            return new AddLessonCommandParser().parse(userInput);
        case EditLessonCommand.COMMAND_WORD:
            return new EditLessonCommandParser().parse(userInput);
        case LinkCommand.STATEFUL_COMMAND_WORD:
            return new LinkCommandParser(model).parse(arguments);
        case LinkCommand.COMMAND_WORD:
            return new LinkCommandParser().parse(arguments);
        case AddTaskCommand.COMMAND_WORD:
            return new AddTaskCommandParser().parse(userInput);
        case "task":
            return new AddTaskCommandParser().parse(userInput);
        case DeleteTaskCommand.COMMAND_WORD:
            return new DeleteTaskCommandParser().parse(userInput);
        case NavigateCommand.COMMAND_WORD:
            return new NavigateCommand();
        case "nav":
            return new NavigateCommand();
        default:
            logger.finer("This user input caused a ParseException: " + userInput);
            throw new ParseException(MESSAGE_UNKNOWN_COMMAND);
        }
    }

}
