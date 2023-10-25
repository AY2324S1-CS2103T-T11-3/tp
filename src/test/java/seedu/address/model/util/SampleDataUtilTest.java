package seedu.address.model.util;

import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

class SampleDataUtilTest {
    @Test
    public void getSamplePersons() {
        try {
            assertTrue(SampleDataUtil.getSamplePersons().length > 0);
        } catch (Exception e) {
            assert false;
        }
    }

    @Test
    public void getSampleLessons() {
        try {
            assertTrue(SampleDataUtil.getSampleLessons().length > 0);
        } catch (Exception e) {
            assert false;
        }
    }

}
