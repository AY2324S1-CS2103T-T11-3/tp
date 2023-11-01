package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;
import static seedu.address.logic.parser.CliSyntax.PREFIX_ADDRESS;
import static seedu.address.logic.parser.CliSyntax.PREFIX_EMAIL;
import static seedu.address.logic.parser.CliSyntax.PREFIX_NAME;
import static seedu.address.logic.parser.CliSyntax.PREFIX_PHONE;
import static seedu.address.logic.parser.CliSyntax.PREFIX_SCHEDULE;
import static seedu.address.logic.parser.CliSyntax.PREFIX_SUBJECT;
import static seedu.address.logic.parser.CliSyntax.PREFIX_TAG;

import seedu.address.commons.util.ToStringBuilder;
import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.lessons.Lesson;
import seedu.address.model.person.Person;

/**
 * Adds a person to the address book.
 */
public class AddPersonCommand extends Command {

    public static final String COMMAND_WORD = "addPerson";

    public static final String MESSAGE_USAGE = COMMAND_WORD + ": Adds a person to the address book. "
            + "Parameters: "
            + PREFIX_NAME + "NAME "
            + PREFIX_PHONE + "PHONE "
            + PREFIX_EMAIL + "EMAIL "
            + PREFIX_ADDRESS + "ADDRESS "
            + "[" + PREFIX_SUBJECT + "SUBJECT]...\n"
            + "[" + PREFIX_TAG + "TAG]...\n"
            + "Example: " + COMMAND_WORD + " "
            + PREFIX_NAME + "John Doe "
            + PREFIX_PHONE + "98765432 "
            + PREFIX_EMAIL + "johnd@example.com "
            + PREFIX_ADDRESS + "311, Clementi Ave 2, #02-25 "
            + PREFIX_SUBJECT + "BIOLOGY "
            + PREFIX_TAG + "friends "
            + PREFIX_TAG + "owesMoney"
            + PREFIX_SCHEDULE + "Monday 1200 1400 weekly";

    public static final String MESSAGE_SUCCESS = "New person added: %1$s";
    public static final String MESSAGE_DUPLICATE_PERSON = "Person with this name already exists in the address book";

    private final Person toAdd;
    private Lesson lesson = null;

    /**
     * Creates an AddCommand to add the specified {@code Person} and set lesson to be null
     */
    public AddPersonCommand(Person person) {
        requireNonNull(person);
        toAdd = person;
    }
    /**
     * Creates an AddCommand to add the specified {@code Person} and {@code Lesson}
     */
    public AddPersonCommand(Person person, Lesson lesson) {
        requireNonNull(person);
        toAdd = person;
        this.lesson = lesson;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);

        if (model.hasPersonClashWith(toAdd)) {
            throw new CommandException(MESSAGE_DUPLICATE_PERSON);
        }
        if (lesson != null) {
            // ugly; copy and paste from the body of AddLessonCommand, refactor later when I have time by making command
            // could execute without model by making model singleton
            if (model.hasLessonClashWith(lesson)) {
                Lesson clashingLesson = model.getLessonClashWith(lesson);
                throw new CommandException("Exist lesson clashing with lesson to added: "
                        + clashingLesson.toString());
            }
            model.addLesson(lesson);
        }
        model.addPerson(toAdd);
        model.resetAllShowFields();
        return new CommandResult(String.format(MESSAGE_SUCCESS, Messages.format(toAdd)));
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof AddPersonCommand)) {
            return false;
        }

        AddPersonCommand otherAddPersonCommand = (AddPersonCommand) other;
        return toAdd.equals(otherAddPersonCommand.toAdd);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("toAdd", toAdd)
                .toString();
    }

    public Lesson getLesson() {
        return lesson;
    }

    public Person getPerson() {
        return toAdd;
    }
}
