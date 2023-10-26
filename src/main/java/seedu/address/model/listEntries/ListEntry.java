package seedu.address.model.listEntries;

import seedu.address.model.l.Name;

public abstract class ListEntry {
    //public static ListEntry getDefault${className);
    public abstract ListEntry clone();
    public abstract Name getName();
}
