package seedu.address.model;

import seedu.address.logic.parser.exceptions.InvalidInputException;

public interface Parseable<T> {
    // static Boolean isValid(String input);
    // static T of(String input);
    T clone();
}
