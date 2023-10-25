package seedu.address.model.lessons;

import java.util.Objects;

import seedu.address.commons.util.ToStringBuilder;

/**
 * Represents a Task in the application.
 */
public class Task {

    //Task fields
    /**
     * The description of the Task.
     */
    protected String description;

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
        this.description = description;
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
        return description.equals(otherTask.description);

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
        return new ToStringBuilder(this)
                .add("description", description)
                .toString();
    }
}
