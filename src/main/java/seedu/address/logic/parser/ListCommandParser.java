package seedu.address.logic.parser;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;

import java.util.ArrayList;
import java.util.Arrays;

import seedu.address.logic.commands.ListCommand;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.State;

/**
 * Parses input arguments and creates a new ListCommand object
 */
public class ListCommandParser implements Parser<ListCommand> {

    public static final ArrayList<String> DISPLAYABLE_FIELDS = new ArrayList<>(
            Arrays.asList("phone", "email", "address", "tags", "subjects", "remark")
    );

    /**
     * Parses the given {@code String} of arguments in the context of the ListCommand
     * and returns a ListCommand object for execution.
     * @throws ParseException if the user input does not conform the expected format, or invalid display fields
     */
    public ListCommand parse(String args) throws ParseException {
        String trimmedArgs = args.trim();
        String[] keywords = trimmedArgs.split("\\s+");
        String[] displayParams = Arrays.copyOfRange(keywords, 1, keywords.length);

        for (String p : displayParams) {
            // Check if displayParams contains "none" keyword, and set it to "none"
            if (p.equals("none")) {
                displayParams = new String[]{"none"};
                break;
            }
            // Check if displayParams contains "all" keyword, and set it to all displayable fields
            if (p.equals("all")) {
                displayParams = DISPLAYABLE_FIELDS.toArray(new String[0]);
                break;
            }
            if (!DISPLAYABLE_FIELDS.contains(p)) {
                throw new ParseException(
                        String.format(MESSAGE_INVALID_COMMAND_FORMAT, ListCommand.MESSAGE_USAGE));
            }
        }


        switch (keywords[0].toUpperCase()) {
        case "":
        case "SCHEDULE":
            return new ListCommand(State.SCHEDULE);

        case "STUDENTS":
            return new ListCommand(State.STUDENT, displayParams);

        default:
            throw new ParseException(
                    String.format(MESSAGE_INVALID_COMMAND_FORMAT, ListCommand.MESSAGE_USAGE));
        }

    }

}
