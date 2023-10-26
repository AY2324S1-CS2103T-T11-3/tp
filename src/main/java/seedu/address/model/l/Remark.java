package seedu.address.model.l;

import static java.util.Objects.requireNonNull;

/**
 * Represents a Person's remark in the address book.
 * Guarantees: immutable; is always valid
 */
public class Remark extends ListEntryField {
    public static final Remark DEFAULT_REMARK = new Remark("To be added");

    public final String value;

    /**
     * Constructs a {@code Remark}.
     *
     * @param remark A valid remark.
     */
    public Remark(String remark) {
        requireNonNull(remark);
        value = remark;
    }
    public static Boolean isValid(String input) {
        return true;
    }
    public static Remark of(String input) {
        return new Remark(input);
    }

    @Override
    public String toString() {
        return value;
    }

    @Override
    public boolean equals(Object other) {
        return other == this // short circuit if same object
                || (other instanceof Remark // instanceof handles nulls
                && value.equals(((Remark) other).value)); // state check
    }

    @Override
    public int hashCode() {
        return value.hashCode();
    }

    public Remark clone() {
        return new Remark(value);
    }

}
