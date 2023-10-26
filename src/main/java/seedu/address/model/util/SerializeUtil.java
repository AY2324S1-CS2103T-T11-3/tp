package seedu.address.model.util;

import seedu.address.model.l.ListEntryField;
/**
 * A utility class for serializing and deserializing ListEntryFields.
 */
public class SerializeUtil {
    /**
     * Serializes a ListEntryField into a string.
     */
    public static String serialize(ListEntryField obj) {
        return obj.toString();
    }

    /**
     * Deserializes a string into a ListEntryField.
     */
    public static <T extends ListEntryField> T deserialize(T defaultValue, Of<T> of, String str) {
        return str.equals(defaultValue.toString())
                ? defaultValue
                : of.apply(str);
    }
}
