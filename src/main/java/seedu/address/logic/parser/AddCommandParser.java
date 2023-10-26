package seedu.address.logic.parser;

import seedu.address.logic.commands.AddCommand;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.listEntries.Person;
import seedu.address.model.listEntryFields.*;

/**
 * Parses input arguments and creates a new AddCommand object
 */
public class AddCommandParser implements Parser<AddCommand> {

    /**
     * Parses the given {@code String} of arguments in the context of the AddCommand
     * and returns an AddCommand object for execution.
     * @throws ParseException if the user input does not conform the expected format
     */
    public AddCommand parse(String args) throws ParseException {
        Person person = parsePerson(args);

        // I see no reason why execute needs to take in a Model. Since model is not singleton, global variable.
        // so I could not call addLesson command to add lesson to schedule after adding it to a person.
        // the code below is a temporary ugly solution that rely on the model passed to the Addcommand to add lesson
        // I will make model, logic singleton in future and refractor this
        if (args.contains("-lesson")) {
            // obtain the substring after -lesson flag
            String subStrAfterLessonFlag = args.substring(args.indexOf("-lesson") + 7);
            // set -name flag if it is not set
            if (!subStrAfterLessonFlag.contains("-name")) {
                subStrAfterLessonFlag = "-name " + person.getName() + subStrAfterLessonFlag;
            }
            Lesson lesson = new AddLessonCommandParser().parseLesson(subStrAfterLessonFlag);
            return new AddCommand(person, lesson);
        }

        return new AddCommand(person);
    }

    /**
     * Parses the given {@code String} of arguments in the context of the AddCommand
     * @param args string input from user
     * @return the person parsed
     * @throws ParseException if the user input does not conform the expected format or of wrong value
     */
    public static Person parsePerson(String args) throws ParseException {
        Person person = new Person(TypeParsingUtil.parseTo(Name.class,"name", args));
        person.setPhoneIfNotDefault(TypeParsingUtil.parseTo(Phone.class,"phone", args, true));
        person.setEmailIfNotDefault(TypeParsingUtil.parseTo(Email.class,"email", args, true));
        person.setAddressIfNotDefault(TypeParsingUtil.parseTo(Address.class,"address", args, true));
        person.setSubjectsIfNotDefault(TypeParsingUtil.parseSubjects("subject", args, true));
        person.setTagsIfNotDefault(TypeParsingUtil.parseTags("tag", args, true));
        person.setRemarkIfNotDefault(TypeParsingUtil.parseTo(Remark.class,"remark", args, true));
        return person;
    }
}
