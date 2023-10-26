package seedu.address.logic.parser;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;
import static seedu.address.logic.Messages.MESSAGE_UNKNOWN_COMMAND;

import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import seedu.address.commons.core.LogsCenter;
import seedu.address.logic.commands.*;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.Model;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.listEntries.Person;
import seedu.address.model.listEntries.Task;

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

        final String commandWord = matcher.group("commandWord");
        final String arguments = matcher.group("arguments");

        // Note to developers: Change the log level in config.json to enable lower level (i.e., FINE, FINER and lower)
        // log messages such as the one below.
        // Lower level log messages are used sparingly to minimize noise in the code.
        logger.fine("Command word: " + commandWord + "; Arguments: " + arguments);

        switch (commandWord) {
        case DeleteCommand.COMMAND_WORD:
            return new DeleteCommandParser().parse(arguments);

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

        default:
            logger.finer("This user input caused a ParseException: " + userInput);
            throw new ParseException(MESSAGE_UNKNOWN_COMMAND);
        }
    }
    public boolean startsWithNumber(String userInputStr) {
        Pattern pattern = Pattern.compile("^\\d+");
        Matcher matcher = pattern.matcher(userInputStr);
        return matcher.find();
    }
    /*
    public Command buildMacroCommand(Command... commands) {
        assert commands.length > 0;
        return new Command() {
            @Override
            public CommandResult execute(Model model) throws CommandException {
                String result = "";
                CommandResult temp;
                try {
                    for (Command command : commands) {
                        temp = command.execute(model);
                        result += command.getClass().getSimpleName() + ": " + temp.getFeedbackToUser() + "\n";
                    }

                }
                return new CommandResult("Macro command executed");
            }
        }
    }
     */
    public Command parseExplicitAddOrEditCommand(String userInputStr) throws ParseException {
        if (userInputStr.startsWith("addStudent")) {
            return new GeneralAddCommandParser(Person.class).parse(userInputStr);
        } else if (userInputStr.startsWith("addLesson")) {
            return new GeneralAddCommandParser(Lesson.class).parse(userInputStr);
        } else if (userInputStr.startsWith("addTask")) {
            return new GeneralAddCommandParser(Task.class).parse(userInputStr);
        } else if (userInputStr.startsWith("add")) {
            return new GeneralAddCommandParser(model.getCurrentlyDisplayedClass()).parse(userInputStr);
        }

        if (userInputStr.startsWith("editStudent")) {
            return new GeneralEditCommandParser(Person.class).parse(userInputStr);
        } else if (userInputStr.startsWith("editLesson")) {
            return new GeneralEditCommandParser(Lesson.class).parse(userInputStr);
        } else if (userInputStr.startsWith("editTask")) {
            return new GeneralEditCommandParser(Task.class).parse(userInputStr);
        } else if (userInputStr.startsWith("edit")) {
            return new GeneralEditCommandParser(model.getCurrentlyDisplayedClass()).parse(userInputStr);
        }
    }


}
