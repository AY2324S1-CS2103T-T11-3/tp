package seedu.address.model.person;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static seedu.address.testutil.Assert.assertThrows;

import org.junit.jupiter.api.Test;

import seedu.address.model.fields.Subject;


class SubjectTest {

    @Test
    public void constructor_null_throwsNullPointerException() {
        assertThrows(NullPointerException.class, () -> new Subject(null));
    }

    @Test
    public void constructor_invalidTagName_throwsIllegalArgumentException() {
        String invalidSubjectName = "";
        assertThrows(IllegalArgumentException.class, () -> new Subject(invalidSubjectName));
    }

    @Test
    public void isValidSubjectName() {
        // null tag name
        assertThrows(NullPointerException.class, () -> Subject.isValidSubject(null));
    }

    @Test
    public void nodeSubject() {
        try {
            Subject none = new Subject("NONE");
            assertEquals(none.getColour(), "invalid");
            Subject maths = new Subject("MATHEMATICS");
            assertEquals(maths.getColour(), "FireBrick");
            Subject physics = new Subject("PHYSICS");
            assertEquals(physics.getColour(), "Chocolate");
            Subject biology = new Subject("BIOLOGY");
            assertEquals(biology.getColour(), "ForestGreen");
            Subject chemistry = new Subject("CHEMISTRY");
            assertEquals(chemistry.getColour(), "DarkCyan");
            Subject english = new Subject("ENGLISH");
            assertEquals(english.getColour(), "SaddleBrown");
        } catch (Exception e) {
            assert false;
        }
    }

}
