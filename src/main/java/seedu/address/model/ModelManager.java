package seedu.address.model;

import static java.util.Objects.requireNonNull;
import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.nio.file.Path;
import java.util.Arrays;
import java.util.Set;
import java.util.function.Predicate;
import java.util.logging.Logger;

import javafx.collections.ObservableList;
import javafx.collections.transformation.FilteredList;
import seedu.address.commons.core.GuiSettings;
import seedu.address.commons.core.LogsCenter;
import seedu.address.model.lessons.Lesson;
import seedu.address.model.lessons.Task;
import seedu.address.model.person.Name;
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

    private final FullTaskList fullTaskList;
    private final UserPrefs userPrefs;
    private final FilteredList<Person> filteredPersons;
    private final FilteredList<Lesson> filteredLessons;

    private Ui ui = null;
    private State state = State.SCHEDULE; // Default state of app. Can be either SCHEDULE or STUDENTS
    private Person currentShowingPerson = null;
    private Lesson currentShowingLesson = null;
    private Task currentShowingTask = null;
    private BiDirectionalMap<Person, Lesson> personToLessonMap;
    private CommandHistory commandHistory;

    /**
     * Initializes a ModelManager with the given addressBook and userPrefs.
     */
    public ModelManager(ReadOnlyAddressBook addressBook, ReadOnlyUserPrefs userPrefs, ReadOnlySchedule scheduleList) {
        requireAllNonNull(addressBook, userPrefs, scheduleList);

        logger.fine("Initializing with address book: " + addressBook + " , schedule list: " + scheduleList
                + " and user prefs " + userPrefs);

        this.addressBook = new AddressBook(addressBook);
        this.scheduleList = new ScheduleList(scheduleList);
        this.userPrefs = new UserPrefs(userPrefs);
        filteredPersons = new FilteredList<>(this.addressBook.getPersonList());
        filteredLessons = new FilteredList<>(this.scheduleList.getLessonList());
        this.fullTaskList = new FullTaskList();
        this.fullTaskList.setFullTaskList(scheduleList);
        personToLessonMap = new BiDirectionalMap<>();
        commandHistory = new CommandHistory();
    }

    /**
     * Initializes a ModelManager with the given addressBook and userPrefs and scheduleList and map.
     * @param addressBook
     * @param userPrefs
     * @param scheduleList
     * @param map
     */
    public ModelManager(ReadOnlyAddressBook addressBook, ReadOnlyUserPrefs userPrefs,
                        ReadOnlySchedule scheduleList, BiDirectionalMap<Person, Lesson> map) {
        this(addressBook, userPrefs, scheduleList);
        personToLessonMap = map;
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
    public Boolean hasPersonClashWith(Person person) {
        requireNonNull(person);
        return addressBook.hasPersonClashWith(person);
    }

    public Person getPersonClashWith(Person person) {
        requireNonNull(person);
        Set<Person> persons = addressBook.getPersonsFulfill(p -> p.hasSameName(person));
        assert persons.size() <= 1;
        return persons.stream().findFirst().orElse(null);
    }

    public Set<Person> getPersonsFulfill(Predicate<Person> predicate) {
        requireNonNull(predicate);
        return addressBook.getPersonsFulfill(predicate);
    }

    @Override
    public void deletePerson(Person target) {
        addressBook.removePerson(target);
        personToLessonMap.remove(target);
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
        personToLessonMap.update(target, editedPerson);
    }



    //=========== Filtered student list Accessors =============================================================

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
    public Set<Lesson> getLessonsFulfill(Predicate<Lesson> predicate) {
        requireNonNull(predicate);
        return scheduleList.getLessonsFulfill(predicate);
    }

    @Override
    public void deleteLesson(Lesson target) {
        scheduleList.removeLesson(target);
        personToLessonMap.removeReverse(target);
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
        updateFilteredScheduleList(PREDICATE_SHOW_ALL_LESSONS);
        personToLessonMap.updateReverse(target, editedLesson);
    }

    //=========== Filtered schedule list Accessors =============================================================

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

    //=========== Full Task List ================================================================================


    @Override
    public ObservableList<Task> getFullTaskList() {
        return fullTaskList.getFullTaskList();
    }

    @Override
    public void updateFullTaskList() {
        fullTaskList.setFullTaskList(this.scheduleList);
    }

    //=========== Ui Changing =============================================================

    public void linkUi(Ui ui) {
        this.ui = ui;
    }
    // could be more robust
    @Override
    public void showPerson(Person person) {
        currentShowingPerson = person;
        if (ui != null) {
            ui.showPersonDetails(person);
        }
    }

    @Override
    public void showLesson(Lesson lesson) {
        currentShowingLesson = lesson;
        if (ui != null) {
            ui.showLessonDetails(lesson);
        }
    }

    @Override
    public void showTask(Task task) {
        currentShowingTask = task;
        if (ui != null) {
            ui.showTaskDetails(task);
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
                && filteredPersons.equals(otherModelManager.filteredPersons)
                && filteredLessons.equals(otherModelManager.filteredLessons)
                && scheduleList.equals(otherModelManager.scheduleList)
                && state.equals(otherModelManager.state);
    }
    //=========== Modify tasks in Lesson  =============================================================

    @Override
    public boolean hasTaskClashWith(Task task, int index) {
        // elaine: to check whether implementation below violates any principles
        return filteredLessons.get(index).hasSameTask(task);
    }
    @Override
    public void addTask(Task task, int index) {
        requireNonNull(task);
        requireNonNull(index);
        Lesson target = filteredLessons.get(index);
        Lesson editedLesson = target.clone();
        editedLesson.addToTaskList(task);
        setLesson(target, editedLesson);
    }
    @Override
    public int getTaskClashWith(Task task, int index) {
        requireNonNull(task);
        requireNonNull(index);
        return filteredLessons.get(index).getTaskClashWith(task);
    }

    @Override
    public String deleteTask(Lesson lesson, int index) {
        requireNonNull(index);
        requireNonNull(lesson);
        return lesson.removeFromTaskList(index);
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

    public boolean hasCurrentShownEntry() {
        return currentShowingPerson != null || currentShowingLesson != null || currentShowingTask != null;
    }
    @Override
    public void resetAllShowFields() {
        this.currentShowingLesson = null;
        this.currentShowingPerson = null;
        this.currentShowingTask = null;
    }

    public Person getCurrentlyDisplayedPerson() {
        return currentShowingPerson;
    }

    public Lesson getCurrentlyDisplayedLesson() {
        return currentShowingLesson;
    }

    public Task getCurrentlyDisplayedTask() {
        return currentShowingTask;
    }

    public BiDirectionalMap<Person, Lesson> getPersonLessonMap() {
        return personToLessonMap;
    }
    public void linkWith(Person person, Lesson lesson) {
        personToLessonMap.addMapping(person, lesson);
    }
    public void unLinkWith(Person person, Lesson lesson) {
        personToLessonMap.removeMapping(person, lesson);
    }
    public Name[] getLinkedWith(Person person) {
        return personToLessonMap.get(person);
    }
    public Name[] getLinkedWith(Lesson lesson) {
        return personToLessonMap.getReversed(lesson);
    }
    public String getLinkedPersonNameStr(Lesson lesson) {
        return Arrays.stream(personToLessonMap.getReversed(lesson)).map(Name::toString)
                .reduce((a, b) -> a + ", " + b).orElse("Not linked to any Students yet");
    }
    public String getLinkedLessonNameStr(Person person) {
        return Arrays.stream(personToLessonMap.get(person)).map(Name::toString)
                .reduce((a, b) -> a + ", " + b).orElse("Not linked to any Lessons yet");
    }

    //=========== Command history ========================================================

    public void addCommandHistory(String commandText) {
        commandHistory.add(commandText);
    }

    public String getNextCommandHistory() {
        return commandHistory.next();
    }

    public String getPrevCommandHistory() {
        return commandHistory.prev();
    }

}
