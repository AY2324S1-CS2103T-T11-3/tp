package seedu.address.model.listEntries;

import java.util.Objects;

import seedu.address.commons.util.ToStringBuilder;
import seedu.address.model.l.Name;

/**
 * Represents a Task in the application.
 */
public class Task extends ListEntry {

    //Task fields
    /**
     * The description of the Task.
     */
    protected Name name;

    /**
     * The boolean to represent if the Task is Done.
     */
    protected boolean isDone;

    /**
     * Constructor for a Task.
     *
     * @param description The description of the task.
     */
    public Task(String description) {
        this.name = new Name(description);
        this.isDone = false;
    }

    /**
     * Returns the description of the Task.
     *
     * @return The description of the Task.
     */
    public Name getDescription() {
        return this.name;
    }
    public Name getName() {
        return this.name;
    }

    public void updateName(Name name) {
        this.name = name;
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
           return otherTask.getDescription().equals(getDescription())
                    && otherTask.isDone == isDone;

    }

    @Override
    public int hashCode() {
        // use this method for custom fields hashing instead of implementing your own
        return Objects.hash(name);
    }


    /**
     * Returns the String representation of the task.
     *
     * @return String representation of the task.
     */
    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("name", name)
                .toString();
    }

    @Override
    public ListEntry clone() {
        return null;
    }
}
