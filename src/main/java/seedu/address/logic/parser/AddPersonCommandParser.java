package seedu.address.logic.parser;

import static seedu.address.logic.parser.TypeParsingUtil.parseField;

import seedu.address.logic.commands.AddPersonCommand;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.person.Address;
import seedu.address.model.person.Email;
import seedu.address.model.person.Name;
import seedu.address.model.person.Person;
import seedu.address.model.person.Phone;
import seedu.address.model.person.Remark;
import seedu.address.model.person.Subjects;
import seedu.address.model.person.Tags;

/**
 * Parses input arguments and creates a new AddCommand object
 */
public class AddPersonCommandParser implements Parser<AddPersonCommand> {

    /**
     * Parses the given {@code String} of arguments in the context of the AddCommand
     * and returns an AddCommand object for execution.
     * @throws ParseException if the user input does not conform the expected format
     */
    public AddPersonCommand parse(String args) throws ParseException {
        return new AddPersonCommand(parsePerson(args));
    }

    /**
     * Parses the given {@code String} of arguments in the context of the AddCommand
     * @param args string input from user
     * @return the person parsed
     * @throws ParseException if the user input does not conform the expected format or of wrong value
     */
    public static Person parsePerson(String args) throws ParseException {
        Person person = Person.getDefaultPerson();
        person.setNameIfNotDefault(parseField("name", args, Name::of));
        person.setPhoneIfNotDefault(parseField("phone", args, Phone::of));
        person.setEmailIfNotDefault(parseField("email", args, Email::of));
        person.setAddressIfNotDefault(parseField("address", args, Address::of));
        person.setSubjectsIfNotDefault(parseField("subject", args, Subjects::of));
        person.setTagsIfNotDefault(parseField("tag", args, Tags::of));
        person.setRemarkIfNotDefault(parseField("remark", args, Remark::of));
        return person;
    }
}
