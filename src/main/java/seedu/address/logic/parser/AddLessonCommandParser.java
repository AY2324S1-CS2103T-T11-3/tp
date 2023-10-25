package seedu.address.logic.parser;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import seedu.address.logic.commands.AddLessonCommand;
import seedu.address.logic.parser.exceptions.ParseException;
import seedu.address.model.lessons.Lesson;
import seedu.address.model.person.Name;
import seedu.address.model.person.Subject;



/**
 * Parses input arguments and creates a new AddLessonCommand object
 */
public class AddLessonCommandParser implements Parser<AddLessonCommand> {

    @Override
    public AddLessonCommand parse(String args) throws ParseException {
        return new AddLessonCommand(parseLesson(args));
    }

    /**
     * Parses the given {@code String} of arguments in to a lesson object
     * @param args the user input string
     * @return a lesson object
     * @throws ParseException if the user input is of wrong format or the lesson clashes with existing lessons
     */
    public Lesson parseLesson(String args) throws ParseException {
        LocalTime startTime = TypeParsingUtil.parseTime("start", args);
        LocalTime endTime = TypeParsingUtil.parseTime("end", args);
        if (startTime.isAfter(endTime)) {
            throw new ParseException("Start time must be before end time");
        }
        Subject subject = TypeParsingUtil.parseSubject("subject", args, true);
        Name studentName = TypeParsingUtil.parseTo(Name.class,"name", args);
        LocalDate date = TypeParsingUtil.parseDate("day", args, true);
        if (date == null) {
            date = LocalDate.now();
        }
        LocalDateTime start = LocalDateTime.of(date, startTime);
        LocalDateTime end = LocalDateTime.of(date, endTime);
        if (subject == null) {
            return new Lesson(start, end, studentName);
        }
        return new Lesson(start, end, subject, studentName);
    }
}
