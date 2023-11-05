package seedu.address.logic.commands;

import static seedu.address.logic.parser.CliSyntax.PREFIX_ADDRESS;
import static seedu.address.logic.parser.CliSyntax.PREFIX_EMAIL;
import static seedu.address.logic.parser.CliSyntax.PREFIX_NAME;
import static seedu.address.logic.parser.CliSyntax.PREFIX_PHONE;
import static seedu.address.logic.parser.CliSyntax.PREFIX_REMARK;
import static seedu.address.logic.parser.CliSyntax.PREFIX_SUBJECT;
import static seedu.address.logic.parser.CliSyntax.PREFIX_TAG;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.EditPersonCommandParser;
import seedu.address.model.person.Person;
// hello world
/**
 * Edits the details of an existing person in the address book.
 */
public class EditPersonCommand extends AbstractEditCommand<Person> {

    public static final String COMMAND_WORD = "editperson";
    //todo, update, or refractor how help command is implemented
    // that being say, good design that allow user to use without learning is better than any help command
    public static final String MESSAGE_USAGE = COMMAND_WORD + ": Edits the details of the person identified "
            + "by the index number used in the displayed student list. "
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


    public EditPersonCommand(int index, Person editDescriptor) {
        super(index, editDescriptor);
    }

    public EditPersonCommand(Person editDescriptor) {
        super(editDescriptor);
    }

    public EditPersonCommand(Person editDescriptor, Person originalPerson) {
        super(editDescriptor, originalPerson);
    }

    @Override
    protected void initModelMethods() {
        currentShownEntry = model.getCurrentlyDisplayedPerson();
        list = model.getFilteredPersonList();
        hasClashWith = model::hasPersonClashWith;
        deleteMethod = model::deletePerson;
        addMethod = model::addPerson;
        getClashingEntry = model::getPersonClashWith;
        showMethod = model::showPerson;
    }


    @Override
    protected void setNonDefaultFields() throws CommandException {
        edited.setPhoneIfNotDefault(editDescriptor.getPhone());
        edited.setEmailIfNotDefault(editDescriptor.getEmail());
        edited.setAddressIfNotDefault(editDescriptor.getAddress());
        edited.setSubjectsIfNotDefault(editDescriptor.getSubjects());
    }

    @Override
    String editableFieldsInfo() {
        return "name, phone, email, address, subjects, remark, tags";
    }

    @Override
    String listName() {
        return "student";
    }

    @Override
    public String getUsageInfo() {
        return EditPersonCommandParser.getUsageInfo();
    }
}


