package seedu.address.model.lessons;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.LocalDateTime;
import java.util.ArrayList;

import org.junit.jupiter.api.Test;

import seedu.address.model.person.Name;
import seedu.address.model.person.Person;
import seedu.address.model.person.Subject;



class LessonTest {
    @Test
    void test() {
        ArrayList<Name> names = new ArrayList<>();
        names.add(new Name("Yiwen"));
        names.add(new Name("Yiwen2"));
        names.add(new Name("Yiwen3"));
        Lesson lesson = new Lesson(LocalDateTime.of(2020, 1, 1, 1, 1),
                LocalDateTime.of(2020, 1, 1, 2, 1),
                new Subject("English"), new TaskList(),
                names);
        Person p = new Person(new Name("Yiwen"));
        assertTrue(lesson.hasStudent(p));
        assertEquals(lesson.getStudentsStr(), "Yiwen, Yiwen2, Yiwen3");
    }
}
