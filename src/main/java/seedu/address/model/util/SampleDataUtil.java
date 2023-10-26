package seedu.address.model.util;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import seedu.address.model.AddressBook;
import seedu.address.model.ReadOnlyAddressBook;
import seedu.address.model.ReadOnlySchedule;
import seedu.address.model.ScheduleList;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.listEntries.Task;
import seedu.address.model.lists.TaskList;
import seedu.address.model.listEntryFields.Address;
import seedu.address.model.listEntryFields.Email;
import seedu.address.model.listEntryFields.Name;
import seedu.address.model.listEntries.Person;
import seedu.address.model.listEntryFields.Phone;
import seedu.address.model.listEntryFields.Remark;
import seedu.address.model.listEntryFields.Subject;
import seedu.address.model.listEntryFields.Tag;

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
        LocalDateTime startLesson1 = LocalDateTime.of(2022, 10, 10, 14, 30);
        LocalDateTime endLesson1 = LocalDateTime.of(2022, 10, 10, 16, 30);
        LocalDateTime startLesson2 = LocalDateTime.of(2022, 10, 18, 14, 30);
        LocalDateTime endLesson2 = LocalDateTime.of(2022, 10, 18, 16, 30);
        LocalDateTime startLesson3 = LocalDateTime.of(2022, 11, 20, 10, 30);
        LocalDateTime endLesson3 = LocalDateTime.of(2022, 11, 20, 12, 30);
        LocalDateTime startLesson4 = LocalDateTime.of(2022, 9, 20, 13, 30);
        LocalDateTime endLesson4 = LocalDateTime.of(2022, 9, 20, 15, 30);
        Subject math = new Subject("MATHEMATICS");
        Subject bio = new Subject("BIOLOGY");
        TaskList taskList = new TaskList();
        List<Task> tasks = Arrays.asList(new Task("first"), new Task("second"), new Task("third"));
        taskList.setTasks(tasks);
        return new Lesson[] {
            new Lesson(startLesson1, endLesson1, math, taskList, new Name("Alex Yeoh")),
            new Lesson(startLesson2, endLesson2, math, taskList, new Name("David Li")),
            new Lesson(startLesson3, endLesson3, bio, taskList, new Name("Bernice Yu")),
            new Lesson(startLesson4, endLesson4, bio, taskList, new Name("Bernice Yu")),
        };
    }
    public static ReadOnlySchedule getSampleSchedule() {
        ScheduleList sampleSchedule = new ScheduleList();
        for (Lesson sampleLesson : getSampleLessons()) {
            sampleSchedule.addLesson(sampleLesson);
        }
        return sampleSchedule;
    }


}
