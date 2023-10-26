package seedu.address.model.listEntryFields;

import seedu.address.logic.parser.exceptions.ParseException;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

import static seedu.address.logic.parser.TypeParsingUtil.parseTime;

public class Time extends ListEntryField {
    public static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("h:mm a");
    public static Time DEFAULT_TIME = new Time();
    private LocalTime time;
    public Time(LocalDateTime time) {
        this.time = time.toLocalTime();
    }
    public Time(LocalTime time) {
        this.time = time;
    }
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
    public static Time deserialize(String str) {
        return new Time(LocalTime.parse(str, FORMATTER));
    }
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

    public Time clone() {
        if(this == DEFAULT_TIME) {
            return DEFAULT_TIME;
        }
        return new Time(this.time);
    }

    public boolean isBefore(Time other) {
        if (this == DEFAULT_TIME || other == DEFAULT_TIME) {
            return other == DEFAULT_TIME;
        }
        return this.time.isBefore(other.time);
    }
    public boolean isAfter(Time other) {
        return other.isBefore(this);
    }

    public int compareTo(Time other) {
        if (this == DEFAULT_TIME || other == DEFAULT_TIME) {
            return other == DEFAULT_TIME ? -1 : 1;
        }
        return this.time.compareTo(other.time);
    }

    public String toString() {
        if (this == DEFAULT_TIME) {
            return "To be added";
        }
        return time.format(FORMATTER);
    }
}
