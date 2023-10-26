package seedu.address.model.listEntryFields;

import seedu.address.logic.parser.exceptions.ParseException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import static seedu.address.logic.parser.TypeParsingUtil.parseDate;

public class Day extends ListEntryField {
    public static final Day DEFAULT_DAY = new Day();
    private LocalDate day;
    public Day(LocalDate day) {
        this.day = day;
    }
    public Day(String str) throws ParseException {
        this.day = parseDate(str);
    }
    private Day() {
    }

    public String toString() {
        if (this == DEFAULT_DAY) {
            return "To be added";
        }
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d MMM yyyy");
        return day.format(formatter);
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

    @Override
    public Day clone() {
        return this == DEFAULT_DAY ? DEFAULT_DAY : new Day(this.day);
    }
}
