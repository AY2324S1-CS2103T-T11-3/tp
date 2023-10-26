package seedu.address.model.listEntries;

import seedu.address.model.listEntryFields.Name;

public abstract class ListEntry {
    //public static ListEntry getDefault${className);
    public abstract ListEntry clone();
    public abstract Name getName();
}
