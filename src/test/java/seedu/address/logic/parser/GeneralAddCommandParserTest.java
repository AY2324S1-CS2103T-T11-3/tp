package seedu.address.logic.parser;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import java.util.HashSet;

import org.junit.jupiter.api.Test;

import seedu.address.model.fields.Address;
import seedu.address.model.fields.Email;
import seedu.address.model.fields.Name;
import seedu.address.model.fields.Phone;
import seedu.address.model.fields.Remark;
import seedu.address.model.fields.Tag;
import seedu.address.model.listentries.Lesson;
import seedu.address.model.listentries.Person;

class GeneralAddCommandParserTest {
    @Test
    public void parsePerson_parseLessonTest() {
        GeneralAddCommandParser personParser = new GeneralAddCommandParser(Person.class);
        GeneralAddCommandParser lessonParser = new GeneralAddCommandParser(Lesson.class);
        try {
            Person p1 = Person.getDefaultPerson();
            p1.setName(new Name("Yiwen1010101"));
            assertEquals(personParser.parse("add -name Yiwen1010101").getToAdd(), p1);
            Person p2 = new Person(new Name("Yiwen1010101"),
                                   new Phone("12345678"),
                                   new Email("fakeEmail@fake.domain"),
                                   new Address("Fake Address"),
                                   new HashSet<>(),
                                   new HashSet<Tag>(),
                                   new Remark("Fake Remark"));
            Lesson l1 = Lesson.getDefaultLesson();
            l1.setName(new Name("Lesson1010101"));
            assertEquals(lessonParser.parse("add -name Lesson1010101").getToAdd(), l1);
            Lesson l2 = Lesson.getDefaultLesson();
        } catch (Exception e) {
            fail(e.getMessage());
        }
    }
}
