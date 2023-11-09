package seedu.address.testutil;

import java.nio.file.Path;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Set;
import java.util.function.Predicate;

import javafx.beans.InvalidationListener;
import javafx.collections.ListChangeListener;
import javafx.collections.ObservableList;
import seedu.address.commons.core.GuiSettings;
import seedu.address.model.Model;
import seedu.address.model.ReadOnlyAddressBook;
import seedu.address.model.ReadOnlySchedule;
import seedu.address.model.ReadOnlyUserPrefs;
import seedu.address.model.lessons.Lesson;
import seedu.address.model.lessons.Task;
import seedu.address.model.person.Name;
import seedu.address.model.person.Person;
import seedu.address.model.state.State;
import seedu.address.ui.Ui;

/**
 * A default model stub that have all of the methods failing.
 */

public class ModelStub implements Model {
    @Override
    public void setUserPrefs(ReadOnlyUserPrefs userPrefs) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public ReadOnlyUserPrefs getUserPrefs() {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public GuiSettings getGuiSettings() {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public void setGuiSettings(GuiSettings guiSettings) {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public Path getAddressBookFilePath() {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public void setAddressBookFilePath(Path addressBookFilePath) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public void addPerson(Person person) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public void setAddressBook(ReadOnlyAddressBook newData) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public ReadOnlyAddressBook getAddressBook() {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public boolean hasPerson(Person person) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public void deletePerson(Person target) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public void setPerson(Person target, Person editedPerson) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public ObservableList<Person> getFilteredPersonList() {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public void updateFilteredPersonList(Predicate<Person> predicate) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public Path getScheduleListFilePath() {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public void setScheduleListFilePath(Path scheduleListFilePath) {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public void addLesson(Lesson lesson) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public void setScheduleList(ReadOnlySchedule newData) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public ReadOnlySchedule getScheduleList() {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public boolean hasLesson(Lesson lesson) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public void deleteLesson(Lesson target) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public void setLesson(Lesson target, Lesson editedLesson) {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public ObservableList<Lesson> getFilteredScheduleList() {
        return new ObservableList<Lesson>() {

            @Override
            public void addListener(InvalidationListener listener) {
            }
            @Override
            public void addListener(ListChangeListener<? super Lesson> listener) {

            }
            @Override
            public void removeListener(InvalidationListener listener) {
            }

            @Override
            public void removeListener(ListChangeListener<? super Lesson> listener) {

            }
            @Override
            public boolean setAll(Lesson... elements) {
                return false;
            }

            @Override
            public boolean setAll(Collection<? extends Lesson> col) {
                return false;
            }
            @Override
            public Object[] toArray() {
                return new Object[0];
            }

            @Override
            public <T> T[] toArray(T[] a) {
                return null;
            }

            @Override
            public boolean addAll(Collection<? extends Lesson> c) {
                return false;
            }

            @Override
            public boolean addAll(int index, Collection<? extends Lesson> c) {
                return false;
            }

            @Override
            public boolean addAll(Lesson... elements) {
                return false;
            }


            @Override
            public boolean removeAll(Collection<?> c) {
                return false;
            }
            @Override
            public boolean removeAll(Lesson... elements) {
                return false;
            }


            @Override
            public boolean retainAll(Collection<?> c) {
                return false;
            }

            @Override
            public boolean retainAll(Lesson... elements) {
                return false;
            }


            @Override
            public void clear() {

            }

            @Override
            public Lesson get(int index) {
                return null;
            }

            @Override
            public Lesson set(int index, Lesson element) {
                return null;
            }

            @Override
            public void add(int index, Lesson element) {
            }
            @Override
            public boolean add(Lesson lesson) {
                return false;
            }


            @Override
            public Lesson remove(int index) {
                return null;
            }
            @Override
            public void remove(int from, int to) {

            }
            @Override
            public boolean remove(Object o) {
                return false;
            }

            @Override
            public int indexOf(Object o) {
                return 0;
            }

            @Override
            public int lastIndexOf(Object o) {
                return 0;
            }

            @Override
            public ListIterator<Lesson> listIterator() {
                return null;
            }

            @Override
            public ListIterator<Lesson> listIterator(int index) {
                return null;
            }

            @Override
            public List<Lesson> subList(int fromIndex, int toIndex) {
                return null;
            }

            @Override
            public int size() {
                return 2;
            }

            @Override
            public boolean isEmpty() {
                return false;
            }

            @Override
            public boolean contains(Object o) {
                return false;
            }

            @Override
            public Iterator<Lesson> iterator() {
                return null;
            }




            @Override
            public boolean containsAll(Collection<?> c) {
                return false;
            }


        };
    }

    @Override
    public void updateFilteredScheduleList(Predicate<Lesson> predicate) {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public void showLesson(Lesson lessonToShow) {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public void showPerson(Person personToShow) {
    }
    @Override
    public void showTask(Task taskToShow) {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public void linkUi(Ui ui) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public State getState() {
        return State.STUDENT;
    }

    @Override
    public void setState(State state) {
        //throw new AssertionError("This method should not be called.");
    }

    @Override
    public boolean sameState(State state) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public boolean hasCurrentShownEntry() {
        return false;
    }

    @Override
    public ObservableList<Task> getFullTaskList() {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public void updateFullTaskList() {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public Boolean hasPersonClashWith(Person person) {
        return null;
    }

    @Override
    public Person getPersonClashWith(Person person) {
        return null;
    }

    @Override
    public Set<Person> getPersonsFulfill(Predicate<Person> predicate) {
        return null;
    }

    public void linkWith(Person person, Lesson lesson) {

    }

    @Override
    public void unLinkWith(Person person, Lesson lesson) {

    }

    @Override
    public String getLinkedPersonNameStr(Lesson lesson) {

        return null;
    }

    public String getLinkedLessonNameStr(Person person) {
        return null;
    }

    @Override
    public Name[] getLinkedWith(Person person) {
        return new Name[0];
    }

    @Override
    public Name[] getLinkedWith(Lesson lesson) {
        return new Name[0];
    }

    @Override
    public boolean hasLessonClashWith(Lesson lesson) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public Set<Lesson> getLessonsFulfill(Predicate<Lesson> predicate) {
        return null;
    }

    @Override
    public Lesson getLessonClashWith(Lesson lesson) {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public void addTask(Task task, int index) {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public int getTaskClashWith(Task task, int index) {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public boolean hasTaskClashWith(Task task, int index) {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public String deleteTask(Lesson lesson, int index) {
        throw new AssertionError("This method should not be called.");
    }
    @Override
    public void resetAllShowFields() {
    }

    @Override
    public void addCommandHistory(String commandText) {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public String getNextCommandHistory() {
        throw new AssertionError("This method should not be called.");
    }

    @Override
    public String getPrevCommandHistory() {
        throw new AssertionError("This method should not be called.");
    }
}
