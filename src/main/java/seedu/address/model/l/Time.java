package seedu.address.model.l;

import static seedu.address.logic.parser.TypeParsingUtil.parseTime;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import seedu.address.logic.parser.exceptions.ParseException;


/**
 * Represents a Time in the address book.
 */
public class Time extends ListEntryField {
    public static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("h:mm a");
    public static final Time DEFAULT_TIME = new Time();
    private LocalTime time;
    public Time(LocalDateTime time) {
        this.time = time.toLocalTime();
    }
    public Time(LocalTime time) {
        this.time = time;
    }
    /**
     * Constructs a {@code Time} from input of format "hh:mm".
     */
    public Time(String str) throws IllegalArgumentException {
        try {
            this.time = parseTime(str);
        } catch (ParseException e) {
            throw new IllegalArgumentException(e);
        }

    }
    private Time() {
    }
    public static Time of(String str) throws IllegalArgumentException {
        return new Time(str);
    }

    /**
     * Serializes a time into a string.
     */
    public static Time deserialize(String str) {
        return new Time(LocalTime.parse(str, FORMATTER));
    }

    /**
     * Returns true if the given string is a valid time.
     */
    public static Boolean isValid(String test) {
        try {
            parseTime(test);
            return true;
        } catch (ParseException e) {
            return false;
        }
    }
    public LocalTime getTime() {
        return time;
    }
    @Override
    public boolean equals(Object other) {
        if (this == other) {
            return true;
        }
        if (!(other instanceof Time)) {
            return false;
        }
        Time otherTime = (Time) other;
        if (this == DEFAULT_TIME || other == DEFAULT_TIME) {
            return false;
        }
        return this.time.equals(otherTime.time);
    }
    /**
     * Returns a clone of this time.
     */
    public Time clone() {
        if (this == DEFAULT_TIME) {
            return DEFAULT_TIME;
        }
        return new Time(this.time);
    }

    /**
     * Returns true if this time is before the other time.
     */
    public boolean isBefore(Time other) {
        if (this == DEFAULT_TIME || other == DEFAULT_TIME) {
            return other == DEFAULT_TIME;
        }
        return this.time.isBefore(other.time);
    }
    /**
     * Returns true if this time is after the other time.
     */
    public boolean isAfter(Time other) {
        return other.isBefore(this);
    }

    /**
     * returning a negative integer if this is less than other, 0 if this is equal to other.
     */
    public int compareTo(Time other) {
        if (this == DEFAULT_TIME || other == DEFAULT_TIME) {
            return other == DEFAULT_TIME ? -1 : 1;
        }
        return this.time.compareTo(other.time);
    }
    /**
     * Returns the String representation of the time.
     */
    public String toString() {
        if (this == DEFAULT_TIME) {
            return "To be added";
        }
        return time.format(FORMATTER);
    }
}
