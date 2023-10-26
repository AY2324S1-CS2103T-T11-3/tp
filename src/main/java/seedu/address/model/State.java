package seedu.address.model;


import seedu.address.model.listEntries.Lesson;
import seedu.address.model.listEntries.ListEntry;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.AppUtil.checkArgument;

/**
 * Enum for different possible state of the app.
 */
public enum State {
    STUDENT,
    SCHEDULE,
    NONE;

    public static final String MESSAGE_CONSTRAINTS =
            "State should only be STUDENTS or SCHEDULE";

    /**
     * Returns a {@code State}.
     *
     * @param state A valid state string.
     */
    public State state(String state) {
        requireNonNull(state);
        checkArgument(isValidState(state.toUpperCase()), MESSAGE_CONSTRAINTS);
        if (isValidState(state.toUpperCase())) {
            return State.valueOf(state.toUpperCase());
        } else {
            return State.NONE;
        }
    }

    /**
     * Returns true if a given string is a valid state.
     */
    public static boolean isValidState(String test) {
        try {
            State state = State.valueOf(test);
            return true;
        } catch (IllegalArgumentException e) {
            return false;
        }
    }

}
