package seedu.address.model.util;

import java.util.Arrays;
import java.util.Set;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.AddressBook;
import seedu.address.model.ReadOnlyAddressBook;
import seedu.address.model.ReadOnlySchedule;
import seedu.address.model.ScheduleList;
import seedu.address.model.fields.Address;
import seedu.address.model.fields.Email;
import seedu.address.model.fields.Name;
import seedu.address.model.fields.Phone;
import seedu.address.model.fields.Remark;
import seedu.address.model.fields.Subject;
import seedu.address.model.fields.Tag;
import seedu.address.model.listentries.Lesson;
import seedu.address.model.listentries.Person;

/**
 * Contains utility methods for populating {@code AddressBook} with sample data.
 */
public class SampleDataUtil {
    public static final String SAMPLE_SCHEDULE = "Mon 1200 1400 weekly";
    public static final Remark EMPTY_REMARK = new Remark("");

    public static Person[] getSamplePersons() {
        return new Person[] {
            new Person(new Name("Alex Yeoh"), new Phone("87438807"), new Email("alexyeoh@example.com"),
                new Address("Blk 30 Geylang Street 29, #06-40"), getSubjectSet("CHEMISTRY", "BIOLOGY"),
                getTagSet("friends"), EMPTY_REMARK),
            new Person(new Name("Bernice Yu"), new Phone("99272758"), new Email("berniceyu@example.com"),
                new Address("Blk 30 Lorong 3 Serangoon Gardens, #07-18"), getSubjectSet("English", "MATHEMATICS"),
                getTagSet("colleagues", "friends"), EMPTY_REMARK),
            new Person(new Name("Charlotte Oliveiro"), new Phone("93210283"), new Email("charlotte@example.com"),
                new Address("Blk 11 Ang Mo Kio Street 74, #11-04"), getSubjectSet("Chemistry", "PHYSICS"),
                getTagSet("neighbours"), EMPTY_REMARK),
            new Person(new Name("David Li"), new Phone("91031282"), new Email("lidavid@example.com"),
                new Address("Blk 436 Serangoon Gardens Street 26, #16-43"), getSubjectSet("Biology"),
                getTagSet("family"), EMPTY_REMARK),
            new Person(new Name("Irfan Ibrahim"), new Phone("92492021"), new Email("irfan@example.com"),
                new Address("Blk 47 Tampines Street 20, #17-35"), getSubjectSet("English", "MATHEMATICS"),
                getTagSet("classmates"), EMPTY_REMARK),
            new Person(new Name("Roy Balakrishnan"), new Phone("92624417"), new Email("royb@example.com"),
                new Address("Blk 45 Aljunied Street 85, #11-31"), getSubjectSet("Chemistry"),
                getTagSet("colleagues"), EMPTY_REMARK)
        };
    }

    public static ReadOnlyAddressBook getSampleAddressBook() {
        AddressBook sampleAb = new AddressBook();
        for (Person samplePerson : getSamplePersons()) {
            sampleAb.addPerson(samplePerson);
        }
        return sampleAb;
    }

    /**
     * Returns a tag set containing the list of strings given.
     */
    public static Set<Tag> getTagSet(String... strings) {
        return Arrays.stream(strings)
                .map(Tag::new)
                .collect(Collectors.toSet());
    }

    /**
     * Returns a subject set containing the list of strings given.
     */
    public static Set<Subject> getSubjectSet(String... strings) {
        return Arrays.stream(strings)
                .map(Subject::new)
                .collect(Collectors.toSet());
    }

    public static Lesson[] getSampleLessons() {
        try {
            return new Lesson[] {
                new Lesson("lesson1", "12:30", "14:30", "20", "Mathematics"),
                new Lesson("lesson2", "13:30", "15:30", "21", "Physics"),
                new Lesson("lesson3", "14:30", "16:30", "22", "Biology"),
                new Lesson("lesson4", "15:30", "17:30", "23", "Chemistry"),
            };
        } catch (ParseException e) {
            Logger logger = Logger.getLogger(SampleDataUtil.class.getName());
            logger.warning("Sample lessons not parsed correctly");
            return new Lesson[] {};
        }
    }
    public static ReadOnlySchedule getSampleSchedule() {
        ScheduleList sampleSchedule = new ScheduleList();
        for (Lesson sampleLesson : getSampleLessons()) {
            sampleSchedule.addLesson(sampleLesson);
        }
        return sampleSchedule;
    }
}
