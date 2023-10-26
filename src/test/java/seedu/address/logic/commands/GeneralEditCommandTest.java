package seedu.address.logic.commands;

import org.junit.jupiter.api.Test;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.Model;
import seedu.address.model.ModelManager;
import seedu.address.model.UserPrefs;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.listEntries.Person;
import seedu.address.model.l.*;
import seedu.address.model.l.Tag;

import java.time.LocalDateTime;
import java.util.HashSet;

import static org.junit.jupiter.api.Assertions.*;
import static seedu.address.testutil.TypicalLessons.getTypicalScheduleList;
import static seedu.address.testutil.TypicalPersons.getTypicalAddressBook;

class GeneralEditCommandTest {
    private Model model = new ModelManager(getTypicalAddressBook(), new UserPrefs(), getTypicalScheduleList());

    @Test
    void editPersonWithIndex_editPersonWithOriginalPerson() {
        try {
            int length = model.getFilteredPersonList().size();
            Person person = new Person(new Name("Yiwen"));
            model.addPerson(person);
            assertEquals(person, model.getFilteredPersonList().get(length));
            Person person2 = (new Person(new Name("Yiwen2")));
            new GeneralEditCommand(person2, length).execute(model);
            assertEquals(person2, model.getFilteredPersonList().get(length));
            Person person3 = new Person(new Name("Yiwen3"),
                                        new Phone("12345678"),
                                        new Email("fakeEmail@fakeDomain.com"),
                                        new Address("fakeAddress"),
                                        new HashSet<Subject>(){{add(new Subject("English"));}},
                                        new HashSet<Tag>(){{add(new Tag("fakeTag"));}},
                                        new Remark("fakeRemark"));

            new GeneralEditCommand(person3, length).execute(model);
            assertEquals(person3, model.getFilteredPersonList().get(length));
            Person person4 = new Person(new Name("Yiwen4"));
            new GeneralEditCommand(person4, person3).execute(model);
            Person person5 = person3.clone();
            person5.setName(new Name("Yiwen4"));
            assertEquals(person5, model.getFilteredPersonList().get(length));
        } catch (Exception e) {
            fail();
        }
    }
    @Test
    void editPerson_NoChange_InvalidIndex_NameCollision() {
        int length = model.getFilteredPersonList().size();
        Person person = new Person(new Name("Yiwen"));
        model.addPerson(person);
        assertEquals(person, model.getFilteredPersonList().get(length));
        Person person2 = person.clone();
        assertThrows(CommandException.class, () -> new GeneralEditCommand(person2, length).execute(model));
        Person person3 = new Person(new Name("Yiwen3"));
        assertThrows(CommandException.class, () -> new GeneralEditCommand(person3, length + 10).execute(model));
        assertThrows(CommandException.class, () -> new GeneralEditCommand(person3, 0).execute(model));
        model.addPerson(person3);
        assertThrows(CommandException.class, () -> new GeneralEditCommand(person3, person).execute(model));
    }
    @Test
    void editLessonWithIndex_editLessonWithOriginalLesson() {
        try {
            int length = model.getFilteredLessonList().size();
            Lesson lesson = Lesson.getDefaultLesson();
            model.addLesson(lesson);
            assertEquals(lesson, model.getFilteredLessonList().get(length));
            Lesson lesson2 = Lesson.getDefaultLesson();
            lesson2.setStart(new Time(LocalDateTime.of(2020, 1, 1, 1, 1)));
            lesson2.setEnd(new Time(LocalDateTime.of(2020, 1, 1, 2, 1)));
            new GeneralEditCommand(lesson2, length).execute(model);
            assertFalse(model.hasLesson(lesson));
            assertTrue(model.hasLesson(lesson2));
            Lesson lesson3 = lesson2.clone();
            lesson3.setStart(new Time("14:30"));
            lesson3.setEnd(new Time("15:30"));
            new GeneralEditCommand(lesson3, lesson2).execute(model);
            assertFalse(model.hasLesson(lesson2));
            assertTrue(model.hasLesson(lesson3));
        } catch (Exception e) {
            fail();
        }
    }
    @Test
    void editLesson_NoChange_InvalidIndex_NameCollision() {
        try {
            int length = model.getFilteredPersonList().size();
            Lesson lesson = Lesson.getDefaultLesson();
            lesson.setName(new Name("Test Lesson1"));
            model.addLesson(lesson);
            assertThrows(CommandException.class, () -> new GeneralEditCommand(lesson, lesson).execute(model));
            assertThrows(CommandException.class, () -> new GeneralEditCommand(lesson, length + 10).execute(model));
            assertThrows(CommandException.class, () -> new GeneralEditCommand(lesson, 0).execute(model));
            Lesson lesson2 = lesson.clone();
            lesson2.setName(new Name("Test Lesson2"));
            new GeneralEditCommand(lesson2, lesson).execute(model);
            assertFalse(model.hasLesson(lesson));
            assertTrue(model.hasLesson(lesson2));
            Lesson lesson3 = lesson2.clone();
            assertThrows(CommandException.class, () -> new GeneralEditCommand(lesson3, lesson2).execute(model));
        } catch (Exception e) {
            fail();
        }
    }

}