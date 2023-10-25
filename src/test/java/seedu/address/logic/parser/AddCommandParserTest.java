package seedu.address.logic.parser;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.fail;

import java.time.LocalDateTime;
import java.util.Set;

import org.junit.jupiter.api.Test;

import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.lessons.Lesson;
import seedu.address.model.lessons.TaskList;
import seedu.address.model.person.Address;
import seedu.address.model.person.Email;
import seedu.address.model.person.Name;
import seedu.address.model.person.Person;
import seedu.address.model.person.Phone;
import seedu.address.model.person.Subject;
import seedu.address.model.tag.Tag;



public class AddCommandParserTest {
    private AddCommandParser p = new AddCommandParser();

    @Test
    void happyCases() {
        try {
            Name name = new Name("Yiwen");
            Phone phone = new Phone("12345678");
            Email email = new Email("owenfree126@hotmail.com");
            Address address = new Address("Blk 123, Clementi Ave 3, #12-34");
            Tag tag = new Tag("friends");
            Subject subject = new Subject("English");
            p.parse("add -name Yiwen");
            p.parse("add -name Yiwen -phone 12345678");
            p.parse("add -name Yiwen -email owenfree126@hotmail.com");
            p.parse("add -name Yiwen -address Blk 123, Clementi Ave 3, #12-34");
            p.parse("add -name Yiwen -tag friends");
            p.parse("add -name Yiwen -subject English");
            p.parse("add -name Yiwen -phone 12345678 -email owenfree126@hotmail.com"
                    + " -address Blk 123, Clementi Ave 3, #12-34 -tag friends -subject English");
        } catch (ParseException e) {
            fail();
        }
    }

    @Test
    void invalidCases() {
        assertThrows(ParseException.class, () -> p.parse("add -name"));
        assertThrows(ParseException.class, () -> p.parse("add -name 1 -phone abc"));
        assertThrows(ParseException.class, () -> p.parse("add -name 2 -email 123"));
        assertThrows(ParseException.class, () -> p.parse("add -name 4 -subject singapore"));
        assertThrows(ParseException.class, () -> p.parse("add -tag missing name"));
    }

    @Test
    void correctPerson() {
        try {
            Person actualPerson = AddCommandParser.parsePerson("add -name Yiwen"
                    + " -phone 12345678 -email email@u.com -address Blk 123, Clementi Ave 3, #12,34 "
                    + "-tag friends -subject English");
            Person expectedPerson = new Person(new Name("Yiwen"));
            expectedPerson.setPhone(new Phone("12345678"));
            expectedPerson.setEmail(new Email("email@u.com"));
            expectedPerson.setAddress(new Address("Blk 123, Clementi Ave 3, #12,34"));
            expectedPerson.setTagsIfNotNull(Set.of(new Tag("friends")));
            expectedPerson.setSubjectsIfNotNull(Set.of(new Subject("English")));
            assertEquals(expectedPerson, actualPerson);
        } catch (ParseException e) {
            fail();
        }
    }

    @Test
    void correctLesson() {
        try {
            Lesson actualLesson = p.parse("add -name Yiwen "
                    + "-lesson -subject English -start 12:00 -end 13:00 -day 20/12/23").getLesson();
            Lesson expectedLesson = new Lesson(LocalDateTime.of(2020, 12, 23, 12, 0),
                    LocalDateTime.of(2020, 12, 23, 13, 0),
                    new Subject("English"), new TaskList(),
                    new Name("Yiwen"));
            assertEquals(expectedLesson, actualLesson);
        } catch (ParseException e) {
            fail();
        }
    }
}
