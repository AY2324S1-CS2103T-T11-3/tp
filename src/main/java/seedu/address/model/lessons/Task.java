package seedu.address.model.lessons;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.AppUtil.checkArgument;
import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.util.Objects;

import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.ListEntryField;



/**
 * Represents a Task in the application.
 */

public class Task extends ListEntryField {

    public static final String MESSAGE_CONSTRAINTS = "Tasks can take any values, and it should not be blank";
    public static final String DECODED_CONSTRAINTS = "Incorrect task encoding! The encoded task should have a \"+\" "
            + "or \"-\" at the beginning of the string,";
    public static final Task DEFAULT_TASK = new Task("Sample Task");

    /*
     * The first character of the task description must not be a whitespace,
     * otherwise " " (a blank string) becomes a valid input.
     */
    public static final String VALIDATION_REGEX = "[^\\s].*";

    /**
     * The description of the Task.
     */
    protected String description;

    /**
     * The boolean to represent if the Task is Done.
     */
    protected boolean isDone;

    /**
     * Constructs a {@code Task}.
     *
     * @param description A valid description of the task.
     */
    public Task(String description) {
        requireNonNull(description);
        if (!isValidTask(description)) {
            throw new IllegalArgumentException();
        }
        this.description = description;
        this.isDone = false;
    }

    /**
     * Constructs a {@code Task}, given the done status
     *
     * @param description A valid description of the task.
     * @param isDone The completion status of the task.
     */
    public Task(String description, boolean isDone) {
        requireAllNonNull(description, isDone);
        if (!isValidTask(description)) {
            throw new IllegalArgumentException();
        }
        this.description = description;
        this.isDone = isDone;
    }

    /**
     * Constructs a {@code Task} used for testing
     */
    public Task() {
        this.description = "testing";
        this.isDone = false;
    }

    /**
     * Returns true if a given string is a valid task.
     */
    public static boolean isValidTask(String test) {
        return test.matches(VALIDATION_REGEX);
    }

    /**
     * Returns the description of the Task.
     *
     * @return The description of the Task.
     */
    public String getDescription() {
        return this.description;
    }

    /**
     * Updates the Description of the Task.
     *
     * @param newDesc The new description of the task.
     */
    public void updateDesc(String newDesc) {
        this.description = newDesc;
    }


    /**
     * Marks the Task as Done.
     */
    public void markTask() {
        this.isDone = true;
    }

    /**
     * Marks the Task as Not Done.
     */
    public void unmarkTask() {
        this.isDone = false;
    }

    /**
     * Marks the Task as done or not done.
     * @param isDone The completion status of task to mark/ unmark as.
     */
    public void isDoneTask(boolean isDone) {
        this.isDone = isDone;
    }
    /**
     * Returns true if both tasks have the same description.
     * This defines a weaker notion of equality between two tasks.
     */
    public boolean isSameTask(Task otherTask) {
        if (otherTask == this) {
            return true;
        }

        return otherTask != null
                && otherTask.getDescription().equals(getDescription());
    }

    public boolean isDone() {
        return isDone;
    }

    /**
     * Parses a string task.
     * The first character will be either + or -.
     * If it is +, the task is done. if it is -, the task is undone.
     *
     * Defaults to undone if not present.
     *
     * @param task
     * @return Task
     * @throws ParseException if the string doesn't contain a + or - at the start.
     */
    public static Task of(String task) throws ParseException {
        // parse the task
        checkArgument(isValidEncodedTask(task));
        String description = task.substring(1);
        if (task.charAt(0) == '+') {
            // task done
            return new Task(description, true);
        } else if (task.charAt(0) == '-') {
            return new Task(description, false);
        } else {
            throw new ParseException(DECODED_CONSTRAINTS);
        }
    }

    /**
     * Tests if a encoded string is valid.
     * @param test The test string
     * @return
     */
    public static boolean isValidEncodedTask(String test) {
        // first character must be + or -
        return (test.charAt(0) == '+' || test.charAt(0) == '-') && isValidTask(test.substring(1));
    }

    /**
     * Returns true if both tasks have the same identity and data fields.
     * This defines a stronger notion of equality between two tasks.
     */
    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof Task)) {
            return false;
        }

        Task otherTask = (Task) other;
        return description.equals(otherTask.description) && isDone == otherTask.isDone;

    }

    @Override
    public int hashCode() {
        // use this method for custom fields hashing instead of implementing your own
        return Objects.hash(description);
    }


    /**
     * Returns the String representation of the task.
     *
     * @return String representation of the task.
     */
    @Override
    public String toString() {
        return this.description;
    }

    /**
     * Returns a clone of this task that is equal to this task.
     */
    public Task clone() {
        return new Task(description);
    }
}
