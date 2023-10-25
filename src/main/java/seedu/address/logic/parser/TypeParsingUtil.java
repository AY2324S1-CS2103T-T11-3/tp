package seedu.address.logic.parser;

import java.lang.reflect.Method;
import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import seedu.address.logic.parser.exceptions.*;
import seedu.address.model.Parseable;
import seedu.address.model.person.Address;
import seedu.address.model.person.Email;
import seedu.address.model.person.Name;
import seedu.address.model.person.Phone;
import seedu.address.model.person.Subject;
import seedu.address.model.tag.Tag;

// I am considering probably make sense to write specific parser inside each class.
/**
 * Contains utility methods used for parsing strings into various desirable values, and validating them.
 */
public class TypeParsingUtil {
    /**
     * Parses the time from the input string, which can be in the following formats: hh:mm
     * @param input the input string where the time is to be parsed from
     * @return the time parsed
     * @throws ParseException if the input is not a valid time
     */
    public static LocalTime parseTime(String input) throws ParseException {
        String hourMinPattern = "(\\d{1,2}):(\\d{2})";
        Pattern p = Pattern.compile(hourMinPattern);
        Matcher m = p.matcher(input);
        if (m.matches()) {
            int hour = TypeParsingUtil.parseNum(m.group(1));
            int min = TypeParsingUtil.parseNum(m.group(2));
            if (hour > 23 || min > 59) {
                throw new InvalidInputException(input + " is not a valid time");
            }
            return LocalTime.of(hour, min);
        } else {
            throw new InvalidInputException(input + " is not a valid time");
        }
    }
    /**
     * overloading parseTime to take in flagName and parse the flag from the input string
     */
    public static LocalTime parseTime(String flagName, String input) throws ParseException {
        return parseTime(parseFlag(flagName, input));
    }
    /**
     * overloading to not throw exception if the flag is not found when isOptional is true
     */
    public static LocalTime parseTime(String flagName, String input, boolean isOptional) throws ParseException {
        if (isOptional) {
            try {
                parseFlag(flagName, input);
            } catch (FlagNotFoundException e) {
                return null;
            }
        }
        return parseTime(parseFlag(flagName, input));
    }
    private static Integer findMaxDay(int year, int month) {
        if (month == 2) {
            if (year % 4 == 0) {
                return 29;
            } else {
                return 28;
            }
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            return 30;
        } else {
            return 31;
        }
    }
    /**
     * Parses the date from the input string, which can be in the following formats:
     * 1. dd, then the date will be the current month and year
     * 2. mm/dd ,then the date will be the current year
     * 3. yyyy/mm/dd ,then the date will be the given year
     * 4. yy/mm/dd ,then the date will be the given year + 2000
     * @param input the input string where the date is to be parsed from
     * @return the date parsed
     * @throws ParseException if the input is not a valid date
     */
    public static LocalDate parseDate(String input) throws ParseException {
        String dayPattern = "(\\d{1,2})";
        String monthDayPattern = "(\\d{1,2})/(\\d{1,2})";
        String yearMonthDayPattern = "(\\d{2,4})/(\\d{1,2})/(\\d{1,2})";
        Pattern dayP = Pattern.compile(dayPattern);
        Pattern monthDayP = Pattern.compile(monthDayPattern);
        Pattern yearMonthDayP = Pattern.compile(yearMonthDayPattern);
        Matcher dayM = dayP.matcher(input);
        Matcher monthDayM = monthDayP.matcher(input);
        Matcher yearMonthDayM = yearMonthDayP.matcher(input);
        if (yearMonthDayM.matches()) {
            int year = TypeParsingUtil.parseNum(yearMonthDayM.group(1), 0, 9999);
            if (year < 1000) {
                year += 2000;
            }
            int month = TypeParsingUtil.parseNum(yearMonthDayM.group(2), 1, 12);
            int day = TypeParsingUtil.parseNum(yearMonthDayM.group(3), 1, findMaxDay(year, month));
            return LocalDate.of(year, month, day);
        } else if (monthDayM.matches()) {
            LocalDate now = LocalDate.now();
            int month = TypeParsingUtil.parseNum(monthDayM.group(1), 1, 12);
            int day = TypeParsingUtil.parseNum(monthDayM.group(2), 1, findMaxDay(now.getYear(), month));
            return LocalDate.of(now.getYear(), month, day);
        } else if (dayM.matches()) {
            LocalDate now = LocalDate.now();
            int day = TypeParsingUtil.parseNum(dayM.group(1), 1, findMaxDay(now.getYear(), now.getMonthValue()));
            return LocalDate.of(now.getYear(), now.getMonth(), day);
        } else {
            throw new InvalidInputException(input + " is not a valid date");
        }
    }

    /**
     * overloading parseDate to take in flagName and parse the flag from the input string
     */
    public static LocalDate parseDate(String flagName, String input) throws ParseException {
        return parseDate(parseFlag(flagName, input));
    }

    /**
     * overloading to not throw exception if the flag is not found when isOptional is true
     */
    public static LocalDate parseDate(String flagName, String input, boolean isOptional) throws ParseException {
        if (isOptional) {
            try {
                parseFlag(flagName, input);
            } catch (FlagNotFoundException e) {
                return null;
            }
        }
        return parseDate(parseFlag(flagName, input));
    }

    /**
     * Parses the number from the input string
     * @param input the input string where the flag is to be parsed from
     * @param min the minimum value of the number
     * @param max the maximum value of the number
     * @return the number parsed
     * @throws ParseException if the input is not a valid number
     */
    public static Integer parseNum(String input, int min, int max) throws ParseException {
        try {
            int num = Integer.parseInt(input);
            if (num < min || num > max) {
                throw new InvalidInputException("Number " + input + " is not of range: " + min + "-" + max);
            }
            return num;
        } catch (NumberFormatException e) {
            throw new InvalidInputException(input + " is not a number");
        }
    }

    /**
     * overloading parseNum assuming no min and max
     */
    public static Integer parseNum(String input) throws ParseException {
        return parseNum(input, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }

    /**
     * overloading parseNum to take in flagName and parse the flag from the input string
     */
    public static Integer parseNum(String flagName, String input, int min, int max) throws ParseException {
        return parseNum(parseFlag(flagName, input), min, max);
    }

    /**
     * overloading parseNum to take in flagName and parse the flag from the input string assuming no min and max
     */
    public static Integer parseNum(String flagName, String input) throws ParseException {
        return parseNum(parseFlag(flagName, input));
    }

    /**
     * overloading to not throw exception if the flag is not found when isOptional is true
     */
    public static Integer parseNum(String flagName, String input, boolean isOptional) throws ParseException {
        if (isOptional) {
            try {
                parseFlag(flagName, input);
            } catch (FlagNotFoundException e) {
                return null;
            }
        }
        return parseNum(parseFlag(flagName, input));
    }
    /**
     * Parses the string from the input string
     */
    public static String parseStr(String input) throws ParseException {
        return input;
    }
    /**
     * overloading parseStr to take in flagName and parse the flag from the input string
     */
    public static String parseStr(String flagName, String input) throws ParseException {
        return parseStr(parseFlag(flagName, input));
    }
    /**
     * overloading to not throw exception if the flag is not found when isOptional is true
     */
    public static String parseStr(String flagName, String input, boolean isOptional) throws ParseException {
        if (isOptional) {
            try {
                parseFlag(flagName, input);
            } catch (FlagNotFoundException e) {
                return null;
            }
        }
        return parseStr(parseFlag(flagName, input));
    }
    /**
     * Parses the strings from the input string
     * @param input the input string of substr seperated by ,
     */
    public static String[] parseStrs(String flagName, String input) throws ParseException {
        String strs = parseFlag(flagName, input);
        String[] strList = Arrays.stream(strs.split(",")).map(String::trim).toArray(String[]::new);
        if (strList.length < 1) {
            throw new InvalidInputException(strs + " is not a valid list of inputs");
        }
        return strList;
    }
    /**
     * overloading to not throw exception if the flag is not found when isOptional is true
     */
    public static String[] parseStrs(String flagName, String input, boolean isOptional) throws ParseException {
        if (isOptional) {
            try {
                parseFlag(flagName, input);
            } catch (FlagNotFoundException e) {
                return null;
            }
        }
        return parseStrs(flagName, input);
    }

    /**
     * Parses the subject from the input string
     * @param input the input string where the flag is to be parsed from
     * @return the subject parsed
     * @throws ParseException if the input is not a valid subject
     */
    public static Subject parseSubject(String input) throws ParseException {
        if (Subject.isValidSubject(input.toUpperCase())) {
            return Subject.parseSubject(input);
        } else {
            throw new InvalidInputException(input + " is not a valid subject");
        }
    }
    /**
     * overloading parseSubject to take in flagName and parse the flag from the input string
     */
    public static Subject parseSubject(String flagName, String input) throws ParseException {
        return parseSubject(parseFlag(flagName, input));
    }
    /**
     * overloading to not throw exception if the flag is not found when isOptional is true
     */
    public static Subject parseSubject(String flagName, String input, boolean isOptional) throws ParseException {
        if (isOptional && parseStrs(flagName, input, true) == null) {
            return null;
        }

        return parseSubject(parseFlag(flagName, input));
    }
    /**
     * Parses the subjects from the input string
     */
    public static Set<Subject> parseSubjects(String flagName, String input) throws ParseException {
        String[] subjectList = parseStrs(flagName, input);
        Set<Subject> subjectSet = new HashSet<>();
        for (String subject : subjectList) {
            subjectSet.add(parseSubject(subject));
        }
        assert !subjectSet.isEmpty();
        return subjectSet;
    }
    /**
     * overloading to not throw exception if the flag is not found when isOptional is true
     */
    public static Set<Subject> parseSubjects(String flagName, String input, boolean isOptional) throws ParseException {
        if (isOptional) {
            try {
                parseFlag(flagName, input);
            } catch (FlagNotFoundException e) {
                return null;
            }
        }
        return parseSubjects(flagName, input);
    }
    /**
     * Parses the day of week from the input string
     * @param input the input string where the flag is to be parsed from
     * @return the day of week parsed
     * @throws InvalidInputException if the input is not a valid day of week
     */
    public static DayOfWeek parseDayOfWeek(String input) throws ParseException {
        try {
            return DayOfWeek.valueOf(input.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new InvalidInputException(input + " is not a valid day of week");
        }
    }

    /**
     * overloading parseDayOfWeek to take in flagName and parse the flag from the input string
     */
    public static DayOfWeek parseDayOfWeek(String flagName, String input) throws ParseException {
        return parseDayOfWeek(parseFlag(flagName, input));
    }

    /**
     * overloading to not throw exception if the flag is not found when isOptional is true
     */
    public static DayOfWeek parseDayOfWeek(String flagName, String input, boolean isOptional) throws ParseException {
        if (isOptional) {
            try {
                parseFlag(flagName, input);
            } catch (FlagNotFoundException e) {
                return null;
            }
        }
        return parseDayOfWeek(parseFlag(flagName, input));
    }

    /**
     * Parses the tags from the input string
     */
    public static HashSet<Tag> parseTags(String flag, String input) throws ParseException {
        String[] tagList = parseStrs(flag, input);
        HashSet<Tag> tagSet = new HashSet<>();
        for (String tag : tagList) {
            if (!Tag.isValidTagName(tag)) {
                throw new InvalidInputException(tag + " is not a valid tag");
            }
            if (tagSet.contains(new Tag(tag))) {
                throw new InvalidInputException(tag + " is repeated");
            }
            tagSet.add(new Tag(tag));
        }
        assert !tagSet.isEmpty();
        return tagSet;
    }

    /**
     * overloading to not throw exception if the flag is not found when isOptional is true
     */
    public static HashSet<Tag> parseTags(String flag, String input, boolean isOptional) throws ParseException {
        if (isOptional) {
            try {
                parseFlag(flag, input);
            } catch (FlagNotFoundException e) {
                return null;
            }
        }
        return parseTags(flag, input);
    }
    /**
     * Parses the flag from the input string
     * @param flag the flag to parse
     * @param input the input string where the flag is to be parsed from
     * @return the string after the flag
     * @throws FlagNotFoundException if the flag is not found
     * @throws RepeatedFlagException if more than one flag is found
     */
    public static String parseFlag(String flag, String input) throws ParseException {
        Pattern p = Pattern.compile("-" + flag + "\\s*([\\w:,._/@#$%&! ]+)");
        Matcher m = p.matcher(input);
        if (m.find()) {
            String flagValue = m.group(1).trim();
            if (m.find()) {
                throw new RepeatedFlagException("Flag " + flag + " is repeated");
            }
            return flagValue;
        } else {
            throw new FlagNotFoundException("Flag " + flag + " not found");
        }
    }
    public static String getValueImmediatelyAfterCommandName(String commandWord,
                                                             String errorFieldName,
                                                             String input) throws ParseException {
        Pattern p = Pattern.compile(commandWord + "\\s+([\\w ]+)");
        Matcher m = p.matcher(input);
        if (m.find()) {
            return m.group(1).trim();
        } else {
            throw new FlagNotFoundException(errorFieldName + " not found");
        }
    }

    public static <T extends Parseable<T>> T parseTo(Class<T> parsedTo, String inputStr) throws ParseException {
        Method isValid;
        Method of;
        try {
            isValid = parsedTo.getMethod("isValid", String.class);
        } catch (NoSuchMethodException e) {
            throw new InternalErrorExcpetion("Internal error: " + parsedTo.getName() + " does not have static isValid method");
        }
        try {
            of = parsedTo.getMethod("of", String.class);
        } catch (NoSuchMethodException e) {
            throw new InternalErrorExcpetion("Internal error: " + parsedTo.getName() + " does not have static of method");
        }

        try {
            if ((boolean) isValid.invoke(null, inputStr)) {
                Object o = of.invoke(null, inputStr);
                if (parsedTo.isInstance(o)) {
                    return parsedTo.cast(o);
                } else {
                    throw new InternalErrorExcpetion("Internal error: " + parsedTo.getName() + " of method does not return a " + parsedTo.getName());
                }
            } else {
                throw new InvalidInputException(inputStr + " is not a valid " + parsedTo.getName());
            }
        } catch (Exception e) {
            throw new InternalErrorExcpetion("Internal error: " + e.getMessage());
        }
    }
    public static <T extends Parseable<T>> T parseTo(Class<T> parsedTo, String flagName, String inputStr) throws ParseException {
        return parseTo(parsedTo, parseFlag(flagName, inputStr));
    }
    public static <T extends Parseable<T>> T parseTo(Class<T> parsedTo, String flagName, String inputStr, boolean isOptional) throws ParseException {
        if (isOptional) {
            try {
                parseFlag(flagName, inputStr);
            } catch (FlagNotFoundException e) {
                return null;
            }
        }
        return parseTo(parsedTo, parseFlag(flagName, inputStr));
    }
}
