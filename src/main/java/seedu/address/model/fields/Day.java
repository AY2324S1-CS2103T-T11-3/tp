package seedu.address.model.fields;

import static seedu.address.logic.parser.TypeParsingUtil.parseDate;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import seedu.address.logic.parser.exceptions.ParseException;

/**
 * Represents a Day in the application.
 * Guarantees: immutable; is valid as declared in {@link #isValid(String)}
 */
public class Day extends ListEntryField {
    public static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd-MM-yyyy");
    public static final Day DEFAULT_DAY = new Day();
    private LocalDate day;
    public Day(LocalDate day) {
        this.day = day;
    }
    /**
     * Constructs a {@code Day} from input of format "dd-MM-yyyy".
     */
    public Day(String str) throws IllegalArgumentException {
        try {
            this.day = parseDate(str);
        } catch (ParseException e) {
            throw new IllegalArgumentException(e);
        }
    }
    private Day() {
    }
    /**
     * Constructs a {@code Day} from input of format "dd-MM-yyyy".
     */
    public static Day of(String str) throws IllegalArgumentException {
        return new Day(str);
    }
    /**
     * Returns a serialized string of the day.
     */
    public static Day deserialize(String str) {
        return new Day(LocalDate.parse(str, FORMATTER));
    }
    /**
     * Returns true if a given string is a valid day.
     */
    public static Boolean isValid(String test) {
        try {
            parseDate(test);
            return true;
        } catch (ParseException e) {
            return false;
        }
    }
    @Override
    public String toString() {
        if (this == DEFAULT_DAY) {
            return "To be added";
        }
        return day.format(FORMATTER);
    }


    public LocalDate getDay() {
        return day;
    }
    @Override
    public boolean equals(Object other) {
        if (this == other) {
            return true;
        }
        if (!(other instanceof Day)) {
            return false;
        }
        Day otherDay = (Day) other;
        if (this == DEFAULT_DAY || other == DEFAULT_DAY) {
            return false;
        }
        return this.day.equals(otherDay.day);
    }
    /**
     * Returns true if this day is after the other day.
     */
    public boolean isBefore(Day other) {
        if (this == DEFAULT_DAY || other == DEFAULT_DAY) {
            return other == DEFAULT_DAY;
        }
        return this.day.isBefore(other.day);
    }
    /**
     * Compares this day with another day, return 0 if equal, 1 if after, -1 if before.
     */
    public int compareTo(Day other) {
        if (this == DEFAULT_DAY || other == DEFAULT_DAY) {
            return other == DEFAULT_DAY ? -1 : 1;
        }
        return this.day.compareTo(other.day);
    }
    /**
     * Return a clone of this day.
     */
    @Override
    public Day clone() {
        return this == DEFAULT_DAY ? DEFAULT_DAY : new Day(this.day);
    }
}
