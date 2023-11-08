package seedu.address.logic.commands;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.logic.parser.EditPersonCommandParser;
import seedu.address.model.person.Person;
// hello world
/**
 * Edits the details of an existing person in the address book.
 */
public class EditPersonCommand extends AbstractEditCommand<Person> {

    public static final String COMMAND_WORD = "editperson";

    public EditPersonCommand(Integer index, Person editDescriptor) {
        super(index, editDescriptor);
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


