package seedu.address.model;

import seedu.address.logic.parser.exceptions.InvalidInputException;

public interface Parseable {
    // static Boolean isValid(String input);
    // static T of(String input);
    Parseable clone();
}
