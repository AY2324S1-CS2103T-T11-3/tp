package seedu.address.model.listEntryFields;

import seedu.address.logic.parser.exceptions.ParseException;

import java.time.LocalDateTime;
import java.time.LocalTime;

import static seedu.address.logic.parser.TypeParsingUtil.parseTime;

public class Time extends ListEntryField {
    public static Time DEFAULT_TIME = new Time();
    private LocalTime time;
    public Time(LocalDateTime time) {
        this.time = time.toLocalTime();
    }
    public Time(LocalTime time) {
        this.time = time;
    }
    public Time(String str) throws ParseException {
        LocalTime time = parseTime(str);
        LocalDateTime now = LocalDateTime.now();
        this.time = time.withHour(now.getHour()).withMinute(now.getMinute());
    }
    private Time() {
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

}
