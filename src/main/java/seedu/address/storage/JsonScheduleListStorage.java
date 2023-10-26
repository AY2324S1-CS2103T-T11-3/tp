package seedu.address.storage;

import static java.util.Objects.requireNonNull;

import java.io.IOException;
import java.nio.file.Path;
import java.util.Optional;
import java.util.logging.Logger;

import seedu.address.commons.core.LogsCenter;
import seedu.address.commons.exceptions.DataLoadingException;
import seedu.address.commons.exceptions.IllegalValueException;
import seedu.address.commons.util.FileUtil;
import seedu.address.commons.util.JsonUtil;
import seedu.address.model.ReadOnlySchedule;

/**
 * A class to access AddressBook data stored as a json file on the hard disk.
 */
public class JsonScheduleListStorage implements ScheduleStorage {

    private static final Logger logger = LogsCenter.getLogger(JsonScheduleListStorage.class);

    private Path filePath;

    public JsonScheduleListStorage(Path filePath) {
        this.filePath = filePath;
    }

    public Path getScheduleListFilePath() {
        return filePath;
    }

    @Override
    public Optional<ReadOnlySchedule> readScheduleList() throws DataLoadingException {
        return readScheduleList(filePath);
    }

    /**
     * Similar to {@link #readScheduleList()}.
     *
     * @param filePath location of the data. Cannot be null.
     * @throws DataLoadingException if loading the data from storage failed.
     */
    public Optional<ReadOnlySchedule> readScheduleList(Path filePath) throws DataLoadingException {
        requireNonNull(filePath);

        Optional<JsonSerializableSchedule> jsonSchedule = JsonUtil.readJsonFile(
                filePath, JsonSerializableSchedule.class);
        if (jsonSchedule.isEmpty()) {
            return Optional.empty();
        }

        try {
            return Optional.of(jsonSchedule.get().toModelType());
        } catch (IllegalValueException ive) {
            logger.info("Illegal values found in " + filePath + ": " + ive.getMessage());
            throw new DataLoadingException(ive);
        }
    }

    @Override
    public void saveScheduleList(ReadOnlySchedule schedule) throws IOException {
        saveScheduleList(schedule, filePath);
    }

    /**
     * Similar to {@link #saveScheduleList(ReadOnlySchedule)}.
     *
     * @param filePath location of the data. Cannot be null.
     */
    public void saveScheduleList(ReadOnlySchedule schedule, Path filePath) throws IOException {
        requireNonNull(schedule);
        requireNonNull(filePath);

        FileUtil.createIfMissing(filePath);
        JsonUtil.saveJsonFile(new JsonSerializableSchedule(schedule), filePath);
    }

}
