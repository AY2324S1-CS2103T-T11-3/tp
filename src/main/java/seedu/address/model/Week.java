package seedu.address.model;

import static seedu.address.model.LessonTiming.getMinutesFromTime;

import java.util.ArrayList;
import java.util.EnumMap;
import java.util.Map;



/**
 * Encapsulates a week in which a student has lessons.
 */
public class Week {
    /**
     * Days of week
     */
    public enum Days {
        MON, TUE, WED, THU, FRI, SAT, SUN;

        /**
         * Checks if the provided string is one of the Days enums.
         * @param test
         * @return
         */
        public static boolean containsDays(String test) {

            for (Days c : Days.values()) {
                if (c.name().equals(test)) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Finds the correct day by the string given
         * @param name
         * @return
         */
        public static Days findByName(String name) {
            Days day = null;
            for (Days d : values()) {
                if (d.name().equalsIgnoreCase(name)) {
                    day = d;
                }
            }
            return day;
        }
    }

    private Map<Days, ArrayList<LessonTiming>> lessons = new EnumMap<>(Days.class);

    /**
     * Creates a Week object with the correct lesson timings
     * @param schedule
     */
    public Week(String schedule) {
        String[] data = schedule.split(" ");

        Days day = Days.findByName(data[0]);

        int startTime = getMinutesFromTime(data[1]);
        int endTime = getMinutesFromTime(data[2]);

        LessonTiming lt = new LessonTiming(startTime, endTime);
        // ArrayList<LessonTiming> existingTimings = lessons.get(day);
        ArrayList<LessonTiming> newTimings = new ArrayList<>();
        // if (existingTimings != null) {
        //     newTimings.addAll(existingTimings);
        // }

        newTimings.add(lt);


        // lessons.put(day, newTimings);
        // todo: CHange this to dynamic. currently, we are overwriting all the lessons
        //       when we set a new lesson
        Map<Days, ArrayList<LessonTiming>> newLessons = new EnumMap<>(Days.class);
        newLessons.put(day, newTimings);
        this.lessons = newLessons;

    }


    @Override
    public String toString() {
        // todo
        return "Lessons on: " + this.serialize();

    }
    /**
     * Serialize Week to a string
     * @return stringified version of week
     */
    public String serialize() {
        StringBuilder result = new StringBuilder();
        for (Map.Entry<Days, ArrayList<LessonTiming>> entry : this.lessons.entrySet()) {
            Days day = entry.getKey();
            ArrayList<LessonTiming> lessonTimings = entry.getValue();
            result.append(day.toString() + ": ");
            for (LessonTiming lessonTiming : lessonTimings) {
                result.append(lessonTiming.toString());
                result.append(",");
            }

        }

        return result.toString();
    }
}
