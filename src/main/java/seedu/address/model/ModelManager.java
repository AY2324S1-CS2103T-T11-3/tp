package seedu.address.model;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.nio.file.Path;
import java.util.function.Predicate;
import java.util.logging.Logger;

import javafx.collections.ObservableList;
import javafx.collections.transformation.FilteredList;
import seedu.address.commons.core.GuiSettings;
import seedu.address.commons.core.LogsCenter;
import seedu.address.model.lessons.Lesson;
import seedu.address.model.person.Person;
import seedu.address.model.state.State;
import seedu.address.ui.Ui;

/**
 * Represents the in-memory model of the address book and schedule list data.
 */
public class ModelManager implements Model {
    private static final Logger logger = LogsCenter.getLogger(ModelManager.class);

    private final AddressBook addressBook;
    private final ScheduleList scheduleList;
    private final UserPrefs userPrefs;
    private final FilteredList<Person> filteredPersons;
    private final FilteredList<Lesson> filteredLessons;
    private Ui ui = null;
    private State state = State.SCHEDULE; // Default state of app. Can be either SCHEDULE or STUDENTS
    private Person currentShowingPerson = null;
    private Lesson currentShowingLesson = null;

    /**
     * Initializes a ModelManager with the given addressBook and userPrefs.
     */
    public ModelManager(ReadOnlyAddressBook addressBook, ReadOnlyUserPrefs userPrefs, ReadOnlySchedule scheduleList) {
        requireAllNonNull(addressBook, userPrefs, scheduleList);

        logger.fine("Initializing with address book: " + addressBook + " , schedule list: " + scheduleList
                + " and user prefs " + userPrefs);

        this.addressBook = new AddressBook(addressBook);
        this.scheduleList = new ScheduleList(scheduleList);
        // to add: filtered list of lessons
        this.userPrefs = new UserPrefs(userPrefs);
        filteredPersons = new FilteredList<>(this.addressBook.getPersonList());
        filteredLessons = new FilteredList<>(this.scheduleList.getLessonList());
    }

    public ModelManager() {
        this(new AddressBook(), new UserPrefs(), new ScheduleList());
    }

    //=========== UserPrefs ==================================================================================

    @Override
    public void setUserPrefs(ReadOnlyUserPrefs userPrefs) {
        requireNonNull(userPrefs);
        this.userPrefs.resetData(userPrefs);
    }

    @Override
    public ReadOnlyUserPrefs getUserPrefs() {
        return userPrefs;
    }

    @Override
    public GuiSettings getGuiSettings() {
        return userPrefs.getGuiSettings();
    }

    @Override
    public void setGuiSettings(GuiSettings guiSettings) {
        requireNonNull(guiSettings);
        userPrefs.setGuiSettings(guiSettings);
    }

    @Override
    public Path getAddressBookFilePath() {
        return userPrefs.getAddressBookFilePath();
    }

    @Override
    public void setAddressBookFilePath(Path addressBookFilePath) {
        requireNonNull(addressBookFilePath);
        userPrefs.setAddressBookFilePath(addressBookFilePath);
    }

    @Override
    public Path getScheduleListFilePath() {
        return userPrefs.getScheduleListFilePath();
    }

    @Override
    public void setScheduleListFilePath(Path scheduleListPath) {
        requireNonNull(scheduleListPath);
        userPrefs.setScheduleListFilePath(scheduleListPath);
    }

    //=========== AddressBook ================================================================================

    @Override
    public void setAddressBook(ReadOnlyAddressBook addressBook) {
        this.addressBook.resetData(addressBook);
    }

    @Override
    public ReadOnlyAddressBook getAddressBook() {
        return addressBook;
    }

    @Override
    public boolean hasPerson(Person person) {
        requireNonNull(person);
        return addressBook.hasPerson(person);
    }

    @Override
    public void deletePerson(Person target) {
        addressBook.removePerson(target);
    }

    @Override
    public void addPerson(Person person) {
        addressBook.addPerson(person);
        updateFilteredPersonList(PREDICATE_SHOW_ALL_PERSONS);
    }

    @Override
    public void setPerson(Person target, Person editedPerson) {
        requireAllNonNull(target, editedPerson);
        addressBook.setPerson(target, editedPerson);

    }



    //=========== Filtered Person List Accessors =============================================================

    /**
     * Returns an unmodifiable view of the list of {@code Person} backed by the internal list of
     * {@code versionedAddressBook}
     */
    @Override
    public ObservableList<Person> getFilteredPersonList() {
        return filteredPersons;
    }

    @Override
    public void updateFilteredPersonList(Predicate<Person> predicate) {
        requireNonNull(predicate);
        filteredPersons.setPredicate(predicate);
    }

    //=========== ScheduleList ================================================================================

    @Override
    public void setScheduleList(ReadOnlySchedule scheduleList) {
        this.scheduleList.resetData(scheduleList);
    }

    @Override
    public ReadOnlySchedule getScheduleList() {
        return scheduleList;
    }

    @Override
    public boolean hasLesson(Lesson lesson) {
        requireNonNull(lesson);
        return scheduleList.hasLesson(lesson);
    }

    /**
     * Returns true if a lesson with the same identity as {@code lesson} exists in the schedule list.
     * @param lesson The lesson to check
     * @return true if the lessons clash
     */
    public boolean hasLessonClashWith(Lesson lesson) {
        requireNonNull(lesson);
        return scheduleList.hasLessonClashWith(lesson);
    }

    public Lesson getLessonClashWith(Lesson lesson) {
        requireNonNull(lesson);
        return scheduleList.getLessonClashWith(lesson);
    }

    @Override
    public void deleteLesson(Lesson target) {
        scheduleList.removeLesson(target);
    }

    @Override
    public void addLesson(Lesson lesson) {
        scheduleList.addLesson(lesson);
        //updateFilteredLessonList(PREDICATE_SHOW_ALL_LESSONS);
    }

    @Override
    public void setLesson(Lesson target, Lesson editedLesson) {
        requireAllNonNull(target, editedLesson);

        scheduleList.setLesson(target, editedLesson);
    }

    //=========== Filtered Lesson List Accessors =============================================================

    /**
     * Returns an unmodifiable view of the list of {@code Lesson} backed by the internal list of
     * {@code versionedScheduleList}
     */
    @Override
    public ObservableList<Lesson> getFilteredScheduleList() {
        return filteredLessons;
    }

    @Override
    public void updateFilteredScheduleList(Predicate<Lesson> predicate) {
        requireNonNull(predicate);
        filteredLessons.setPredicate(predicate);
    }
    //=========== Ui Changing =============================================================

    public void linkUi(Ui ui) {
        this.ui = ui;
    }

    @Override
    public void showPerson(Person person) {
        requireNonNull(person);
        if (ui != null) {
            currentShowingPerson = person;
            ui.showPersonDetails(person);
        }
    }

    @Override
    public void showLesson(Lesson lesson) {
        requireNonNull(lesson);
        if (ui != null) {
            currentShowingLesson = lesson;
            ui.showLessonDetails(lesson);
        }
    }

    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof ModelManager)) {
            return false;
        }

        ModelManager otherModelManager = (ModelManager) other;
        return addressBook.equals(otherModelManager.addressBook)
                && userPrefs.equals(otherModelManager.userPrefs)
                && filteredPersons.equals(otherModelManager.filteredPersons);
    }

    //=========== App State Changing =============================================================

    @Override
    public State getState() {
        return state;
    }

    @Override
    public void setState(State state) {
        this.state = state;
    }

    @Override
    public boolean sameState(State state) {
        return this.state.equals(state);
    }

}
