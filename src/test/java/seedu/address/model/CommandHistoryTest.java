package seedu.address.model;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.Test;

public class CommandHistoryTest {

    private CommandHistory commandHistory = new CommandHistory();


    /* Test add method ==================================================== */
    @Test
    public void addOneCommand() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1")), 1);
        commandHistory.add("command1");
        assertEquals(commandHistory, expectedCommandHistory);
    }
    @Test
    public void addMultipleCommands() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1", "command2")), 2);
        commandHistory.add("command1");
        commandHistory.add("command2");
        assertEquals(commandHistory, expectedCommandHistory);
    }

    /* Test prev method ==================================================== */

    // Empty command history should return empty string
    @Test
    public void prevNoCommands() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(), 0);
        assertEquals(commandHistory.prev(), "");
        assertEquals(commandHistory, expectedCommandHistory);
    }

    /* Test valid prev method uses */

    // Go back prev once after executing a command, it should retrieve the newest command
    @Test
    public void prevOnceWithOneCommand() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1")), 0);
        commandHistory.add("command1");
        assertEquals(commandHistory.prev(), "command1");
        assertEquals(commandHistory, expectedCommandHistory);
    }
    // Go back prev after executing a command, it should retrieve the newest command
    @Test
    public void prevOnceWithMultipleCommands() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1", "command2", "command3")), 2);
        commandHistory.add("command1");
        commandHistory.add("command2");
        commandHistory.add("command3");
        assertEquals(commandHistory.prev(), "command3");
        assertEquals(commandHistory, expectedCommandHistory);
    }
    @Test
    public void prevTwiceWithMultipleCommands() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1", "command2", "command3")), 1);
        commandHistory.add("command1");
        commandHistory.add("command2");
        commandHistory.add("command3");
        assertEquals(commandHistory.prev(), "command3");
        assertEquals(commandHistory.prev(), "command2");
        assertEquals(commandHistory, expectedCommandHistory);
    }

    /* Test prev method going out of bounds */

    // Test prev method going out of bounds, with no command in history, should return the empty string
    @Test
    public void prevOutOfBoundNoCommand() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(), 0);
        assertEquals(commandHistory.prev(), "");
        assertEquals(commandHistory.prev(), "");
        assertEquals(commandHistory, expectedCommandHistory);
    }

    // Test prev method going out of bounds, with one command in history, should return the same command
    @Test
    public void prevOutOfBoundOneCommand() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1")), 0);
        commandHistory.add("command1");
        assertEquals(commandHistory.prev(), "command1");
        assertEquals(commandHistory, expectedCommandHistory);
        assertEquals(commandHistory.prev(), "command1");
        assertEquals(commandHistory, expectedCommandHistory);
    }
    // Test prev method going out of bounds, with multiple commands in history, should return the oldest command
    @Test
    public void prevOutOfBoundMultipleCommands() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1", "command2", "command3")), 0);
        commandHistory.add("command1");
        commandHistory.add("command2");
        commandHistory.add("command3");
        assertEquals(commandHistory.prev(), "command3");
        assertEquals(commandHistory.prev(), "command2");
        assertEquals(commandHistory.prev(), "command1");
        assertEquals(commandHistory, expectedCommandHistory);
        assertEquals(commandHistory.prev(), "command1");
        assertEquals(commandHistory, expectedCommandHistory);
    }

    /* Test next method ==================================================== */

    // Empty command history should return empty string
    @Test
    public void nextNoCommands() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(), 0);
        assertEquals(commandHistory.next(), "");
        assertEquals(commandHistory, expectedCommandHistory);
    }

    /* Test valid next method uses */

    // Go next once after executing a command, it should retrieve the newest command
    @Test
    public void nextOnceWithOneCommandAfterExec() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1")), 0);
        commandHistory.add("command1");
        assertEquals(commandHistory.next(), "command1");
        assertEquals(commandHistory, expectedCommandHistory);
    }
    // Go next after executing multiple command, it should still retrieve the newest command
    @Test
    public void nextOnceWithMultipleCommandsAfterExec() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1", "command2", "command3")), 2);
        commandHistory.add("command1");
        commandHistory.add("command2");
        commandHistory.add("command3");
        assertEquals(commandHistory.next(), "command3");
        assertEquals(commandHistory, expectedCommandHistory);
    }
    // Go next once from the start with multiple commands
    @Test
    public void nextOnceWithMultipleCommandsFromStart() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1", "command2", "command3")), 1);
        commandHistory.add("command1");
        commandHistory.add("command2");
        commandHistory.add("command3");
        commandHistory.changeIndex(0);
        assertEquals(commandHistory.next(), "command2");
        assertEquals(commandHistory, expectedCommandHistory);
    }
    // Go next once from the middle with multiple commands
    @Test
    public void nextOnceWithMultipleCommandsFromMiddle() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1", "command2", "command3")), 2);
        commandHistory.add("command1");
        commandHistory.add("command2");
        commandHistory.add("command3");
        commandHistory.changeIndex(1);
        assertEquals(commandHistory.next(), "command3");
        assertEquals(commandHistory, expectedCommandHistory);
    }
    // Go next twice from the start with multiple commands
    @Test
    public void nextTwiceWithMultipleCommandsFromStart() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1", "command2", "command3")), 1);
        commandHistory.add("command1");
        commandHistory.add("command2");
        commandHistory.add("command3");
        commandHistory.changeIndex(0);
        assertEquals(commandHistory.next(), "command2");
        assertEquals(commandHistory, expectedCommandHistory);
    }
    // Go next twice from the middle with multiple commands
    @Test
    public void nextTwiceWithMultipleCommandsFromMiddle() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1", "command2", "command3", "command4")), 3);
        commandHistory.add("command1");
        commandHistory.add("command2");
        commandHistory.add("command3");
        commandHistory.add("command4");
        commandHistory.changeIndex(1);
        assertEquals(commandHistory.next(), "command3");
        assertEquals(commandHistory.next(), "command4");
        assertEquals(commandHistory, expectedCommandHistory);
    }

    /* Test next method going out of bounds */

    // Test next method going out of bounds, with no command in history, should return the empty string
    @Test
    public void nextOutOfBoundNoCommand() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(), 0);
        assertEquals(commandHistory.next(), "");
        assertEquals(commandHistory.next(), "");
        assertEquals(commandHistory, expectedCommandHistory);
    }

    // Test next method going out of bounds, with one command in history, should return the same command
    @Test
    public void nextOutOfBoundOneCommand() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1")), 0);
        commandHistory.add("command1");
        assertEquals(commandHistory.next(), "command1");
        assertEquals(commandHistory, expectedCommandHistory);
        assertEquals(commandHistory.next(), "command1");
        assertEquals(commandHistory, expectedCommandHistory);
    }
    // Test next method going out of bounds, with multiple commands in history, should return the oldest command
    @Test
    public void nextOutOfBoundMultipleCommandsFromMiddle() {
        CommandHistory expectedCommandHistory = new CommandHistory(new ArrayList<>(
                Arrays.asList("command1", "command2", "command3")), 2);
        commandHistory.add("command1");
        commandHistory.add("command2");
        commandHistory.add("command3");
        commandHistory.changeIndex(1);
        assertEquals(commandHistory.next(), "command3");
        assertEquals(commandHistory.next(), "command3");
        assertEquals(commandHistory, expectedCommandHistory);
    }

}
