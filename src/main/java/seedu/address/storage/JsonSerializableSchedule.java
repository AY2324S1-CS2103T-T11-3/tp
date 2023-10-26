package seedu.address.storage;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonRootName;

import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.model.ReadOnlySchedule;
import seedu.address.model.ScheduleList;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.lists.Schedule;


/**
 * Jackson-friendly version of {@link Schedule}
 */
@JsonRootName(value = "schedule")
public class JsonSerializableSchedule {
    public static final String MESSAGE_DUPLICATE_LESSON = "Lessons list contains duplicate lesson(s).";

    private final List<JsonAdaptedLesson> lessons = new ArrayList<>();

    /**
     * Constructs a {@code JsonSerializableSchedule} with the given schedule details.
     */
    @JsonCreator
    public JsonSerializableSchedule(@JsonProperty("lessons") List<JsonAdaptedLesson> lessons) {
        this.lessons.addAll(lessons);
    }

    /**
     * Converts a given {@code ReadOnlySchedule} into this class for Jackson use.
     */
    public JsonSerializableSchedule(ReadOnlySchedule source) {

        lessons.addAll(source.getLessonList()
                .stream().map(JsonAdaptedLesson::new)
                .collect(Collectors.toList()));

    }

    /**
     * Converts this Jackson-friendly adapted lesson schedule into the model's {@code ScheduleList} object.
     *
     * @throws IllegalValueException if there were any data constraints violated in the adapted lesson.
     */
    public ScheduleList toModelType() throws IllegalValueException {
        // TODO implementation
        ScheduleList scheduleList = new ScheduleList();
        for (JsonAdaptedLesson jsonAdaptedLesson: lessons) {
            Lesson lesson = jsonAdaptedLesson.toModelType();
            if (scheduleList.hasLesson(lesson)) {
                throw new IllegalValueException(MESSAGE_DUPLICATE_LESSON);
            }
            scheduleList.addLesson(lesson);
        }
        return scheduleList;
    }
}
