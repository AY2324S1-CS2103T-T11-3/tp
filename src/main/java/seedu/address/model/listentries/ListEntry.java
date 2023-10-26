package seedu.address.model.listentries;

import seedu.address.model.fields.Name;

/**
 * Represents a ListEntry in the application.
 */
public abstract class ListEntry {
    //public static ListEntry getDefault${className);
    public abstract ListEntry clone();
    public abstract Name getName();
}
