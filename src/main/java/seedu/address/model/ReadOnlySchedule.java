package seedu.address.model;

import javafx.collections.ObservableList;
import seedu.address.model.listentries.Lesson;

/**
 * Unmodifiable view of an address book
 */
public interface ReadOnlySchedule {

    /**
     * Returns an unmodifiable view of the persons list.
     * This list will not contain any duplicate persons.
     */
    ObservableList<Lesson> getLessonList();

}
