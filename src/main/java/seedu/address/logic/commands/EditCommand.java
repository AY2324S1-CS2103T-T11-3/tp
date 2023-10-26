package seedu.address.logic.commands;

import static java.util.Objects.requireNonNull;
import static seedu.address.logic.parser.CliSyntax.PREFIX_ADDRESS;
import static seedu.address.logic.parser.CliSyntax.PREFIX_EMAIL;
import static seedu.address.logic.parser.CliSyntax.PREFIX_NAME;
import static seedu.address.logic.parser.CliSyntax.PREFIX_PHONE;
import static seedu.address.logic.parser.CliSyntax.PREFIX_REMARK;
import static seedu.address.logic.parser.CliSyntax.PREFIX_SUBJECT;
import static seedu.address.logic.parser.CliSyntax.PREFIX_TAG;
import static seedu.address.model.Model.PREDICATE_SHOW_ALL_PERSONS;

import java.util.List;
import java.util.Set;

import seedu.address.logic.Messages;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.fields.Address;
import seedu.address.model.fields.Email;
import seedu.address.model.fields.Name;
import seedu.address.model.fields.Phone;
import seedu.address.model.fields.Remark;
import seedu.address.model.fields.Subject;
import seedu.address.model.fields.Tag;
import seedu.address.model.listentries.Person;
// hello world
/**
 * Edits the details of an existing person in the address book.
 */
public class EditCommand extends Command {

    public static final String COMMAND_WORD = "edit";
    //todo, update, or refractor how help command is implemented
    // that being say, good design that allow user to use without learning is better than any help command
    public static final String MESSAGE_USAGE = COMMAND_WORD + ": Edits the details of the person identified "
            + "by the index number used in the displayed person list. "
            + "Existing values will be overwritten by the input values.\n"
            + "Parameters: INDEX (must be a positive integer) "
            + "[" + PREFIX_NAME + "NAME] "
            + "[" + PREFIX_PHONE + "PHONE] "
            + "[" + PREFIX_EMAIL + "EMAIL] "
            + "[" + PREFIX_ADDRESS + "ADDRESS] "
            + "[" + PREFIX_TAG + "TAG]...\n"
            + "[" + PREFIX_SUBJECT + "SUBJECT]...\n"
            + "[" + PREFIX_REMARK + "REMARK] \n"
            + "Example: " + COMMAND_WORD + " 1 "
            + PREFIX_PHONE + "91234567 "
            + PREFIX_EMAIL + "johndoe@example.com";

    public static final String MESSAGE_EDIT_PERSON_SUCCESS = "Edited Person: %1$s";
    public static final String MESSAGE_NOT_EDITED = "At least one field to edit must be provided.";
    public static final String MESSAGE_DUPLICATE_PERSON = "This person already exists in the address book.";

    private final int index;
    private final Name name;
    private final Phone phone;
    private final Email email;
    private final Address address;
    private final Set<Subject> subjects;
    private final Set<Tag> tags;
    private final Remark remark;

    /**
     * still some redundancy, but significant improvement over the original
     */
    public EditCommand(int index, Name name, Phone phone, Email email, Address address, Set<Subject> subjects,
                       Set<Tag> tags, Remark remark) {
        this.index = index;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.subjects = subjects;
        this.tags = tags;
        this.remark = remark;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        requireNonNull(model);
        List<Person> lastShownList = model.getFilteredPersonList();
        if (index < 1 || index - 1 >= lastShownList.size()) {
            throw new CommandException(Messages.MESSAGE_INVALID_PERSON_DISPLAYED_INDEX);
        }
        Person original = lastShownList.get(index - 1);
        Person edited = original.clone();
        edited.setNameIfNotDefault(name);
        edited.setPhoneIfNotDefault(phone);
        edited.setEmailIfNotDefault(email);
        edited.setAddressIfNotDefault(address);
        edited.setSubjectsIfNotDefault(subjects);
        edited.setTagsIfNotDefault(tags);
        edited.setRemarkIfNotDefault(remark);
        if (edited.equals(original)) {
            throw new CommandException("No change detected.");
        }
        if (!edited.getName().equals(original.getName()) && model.hasPerson(edited)) {
            throw new CommandException(MESSAGE_DUPLICATE_PERSON);
        }
        model.setPerson(original, edited);
        model.updateFilteredPersonList(PREDICATE_SHOW_ALL_PERSONS);
        return new CommandResult(String.format(MESSAGE_EDIT_PERSON_SUCCESS, Messages.format(edited)));
    }
}


