package seedu.address.model;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * Represents the command history of the app
 */
public class CommandHistory {

    private ArrayList<String> commands;
    private int id;

    /**
     * Constructs a command history
     * @param commandList ArrayList of preset commands
     * @param id Current id
     */
    public CommandHistory(ArrayList<String> commandList, int id) {
        this.commands = commandList;
        this.id = id;
    }

    /**
     * Create command history with empty list and id
     */
    public CommandHistory() {
        this(new ArrayList<String>(), 0);
    }


    /**
     * Returns the previous command.
     *
     * @return String of previous command
     */
    public String prev() {
        if (commands.size() == 0) {
            return "";
        }
        if (id - 1 >= 0) {
            id--;
        }
        return commands.get(id);
    }

    /**
     * Returns the next command.
     *
     * @return String of next command
     */
    public String next() {
        if (commands.size() == 0) {
            return "";
        }
        if (id >= commands.size()) {
            id = commands.size() - 1;
        }
        if (id + 1 < commands.size()) {
            id++;
        }
        return commands.get(id);
    }

    /**
     * Adds a new command to history
     *
     * @param commandText String of new command
     */
    public void add(String commandText) {
        commands.add(commandText);
        id = commands.size();
    }

    /**
     * Change the index of command history
     * @param index New index
     */
    public void changeIndex(int index) {
        id = index;
    }

    @Override
    public String toString() {
        return Arrays.toString(commands.toArray());
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof CommandHistory)) {
            return false;
        }

        CommandHistory otherCommandHistory = (CommandHistory) other;
        return id == otherCommandHistory.id
                && commands.equals(otherCommandHistory.commands);
    }

}
