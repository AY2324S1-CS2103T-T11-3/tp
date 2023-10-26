package seedu.address.model.util;

import seedu.address.model.listEntryFields.ListEntryField;

public interface Of<T extends ListEntryField> {
    T apply(String str) throws IllegalArgumentException;

}
