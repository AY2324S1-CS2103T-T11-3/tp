package seedu.address.logic.parser;

import org.junit.jupiter.api.Test;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.listEntries.Person;
import seedu.address.model.l.*;

import java.util.HashSet;

import static org.junit.jupiter.api.Assertions.*;
import static seedu.address.logic.ReflectionUtil.staticCall;
import static seedu.address.logic.parser.TypeParsingUtil.parseToListEntry;

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
                                   new HashSet<>(){{add(new Subject("English"));}},
                                   new HashSet<Tag>(){{add(new Tag("Tag1")); add(new Tag("Tag2"));}},
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