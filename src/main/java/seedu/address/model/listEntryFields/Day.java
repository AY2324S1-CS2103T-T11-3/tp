package seedu.address.model.listEntryFields;

import seedu.address.logic.parser.exceptions.ParseException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static seedu.address.logic.parser.TypeParsingUtil.parseDate;

public class Day extends ListEntryField {
    public static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("dd-MM-yyyy");
    public static final Day DEFAULT_DAY = new Day();
    private LocalDate day;
    public Day(LocalDate day) {
        this.day = day;
    }
    public Day(String str) throws IllegalArgumentException {
        try {
            this.day = parseDate(str);
        } catch (ParseException e) {
            throw new IllegalArgumentException(e);
        }
    }
    private Day() {
    }

    public static Day of(String str) throws IllegalArgumentException {
        return new Day(str);
    }
    public static Day deserialize(String str) {
        return new Day(LocalDate.parse(str, FORMATTER));
    }
    public static Boolean isValid(String test) {
        try {
            parseDate(test);
            return true;
        } catch (ParseException e) {
            return false;
        }
    }

    public String toString() {
        if (this == DEFAULT_DAY) {
            return "To be added";
        }
        return day.format(FORMATTER);
    }


    public LocalDate getDay() {
        return day;
    }

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

    public boolean isBefore(Day other) {
        if (this == DEFAULT_DAY || other == DEFAULT_DAY) {
            return other == DEFAULT_DAY;
        }
        return this.day.isBefore(other.day);
    }

    public boolean equals(Day other) {
        if (this == other) {
            return true;
        }
        if (this == DEFAULT_DAY || other == DEFAULT_DAY) {
            return false;
        }
        return this.day.equals(other.day);
    }

    public int compareTo(Day other) {
        if (this == DEFAULT_DAY || other == DEFAULT_DAY) {
            return other == DEFAULT_DAY ? -1 : 1;
        }
        return this.day.compareTo(other.day);
    }

    @Override
    public Day clone() {
        return this == DEFAULT_DAY ? DEFAULT_DAY : new Day(this.day);
    }
}
