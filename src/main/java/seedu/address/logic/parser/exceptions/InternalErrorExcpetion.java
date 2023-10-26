package seedu.address.logic.parser.exceptions;
/**
 * Signals that the error is not due to invalid user operation.
 */
public class InternalErrorExcpetion extends ParseException {
    public InternalErrorExcpetion(String message) {
        super(message);
    }
}
