package seedu.address.model.util;

import seedu.address.model.fields.ListEntryField;

/**
 * A wrapper class for the input to deserialize.
 */
public interface Of<T extends ListEntryField> {
    T apply(String str) throws IllegalArgumentException;

}
