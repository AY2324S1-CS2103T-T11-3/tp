package seedu.address.model.util;

import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.listEntries.ListEntry;
import seedu.address.model.listEntryFields.ListEntryField;

import java.util.function.Function;

public class SerializeUtil {
    public static String serialize(ListEntryField obj) {
        return obj.toString();
    }
    public static <T extends ListEntryField> T deserialize(T defaultValue, Of<T> of, String str) {
        return str.equals(defaultValue.toString())
                ? defaultValue
                : of.apply(str);
    }
}
