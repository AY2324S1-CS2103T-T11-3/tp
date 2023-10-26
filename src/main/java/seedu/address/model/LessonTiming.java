package seedu.address.model;

/**
 * Encapsulates a lesson timing.
 */
public class LessonTiming {
    // minutes since start
    private int startTime;
    private int endTime;

    /**
     * Constructor for a LessonTiming
     *
     * @param startTime The start time of this lesson
     * @param endTime The end time of this lesson
     */
    public LessonTiming(int startTime, int endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
    }
    /**
     * Converts a String-based 24 hour time format into the number of minutes since 0000
     * @param time The input string
     * @return the number of minutes
     */
    public static int getMinutesFromTime(String time) {
        String hr = time.substring(0, 2);
        String min = time.substring(2);
        int hours = Integer.parseInt(hr);
        int minutes = Integer.parseInt(min);
        return hours * 60 + minutes;
    }

    /**
     * Converts the stored minute-based times into human readable times
     * @return the number of minutes
     */
    public static String getTimeFromMinutes(int time) {
        int hours = (int) Math.floor(time / 60);
        int minutes = time % 60;

        // pad out the hours if it's less than 0;
        String hrStr = String.valueOf(hours);
        String minStr = String.valueOf(minutes);

        if (hours < 10) {
            hrStr = "0" + hrStr;
        }
        if (minutes < 10) {
            minStr = "0" + minStr;
        }

        return hrStr + ":" + minStr;
    }

    @Override
    public String toString() {
        return getTimeFromMinutes(startTime) + " - " + getTimeFromMinutes(endTime);
    }

}
