package seedu.address.model;

import javafx.collections.ObservableList;
import seedu.address.model.listEntries.Lesson;
import seedu.address.model.listEntries.ListEntry;
import seedu.address.model.listEntries.Task;
import seedu.address.model.listEntries.Person;

public interface MethodsThatLogicComponentNeededFromModel {
    ObservableList<Person> getFilteredPersonList();
    ObservableList<Lesson> getFilteredLessonList();
    ObservableList<Task> getFilteredTaskList();
    void setPerson(Person target, Person editedPerson);
    void setLesson(Lesson target, Lesson editedLesson);
    void setTask(Task target, Task editedTask);
    void addPerson(Person person);
    void addLesson(Lesson lesson);
    void addTask(Task task);
    void deletePerson(Person target);
    void deleteLesson(Lesson target);
    void deleteTask(Task target);
    void updateFilteredPersonList();
    void updateFilteredLessonList();
    void updateFilteredTaskList();
    Boolean hasPersonClashWith(Person person);
    Boolean hasLessonClashWith(Lesson lesson);
    Boolean hasTaskClashWith(Task task);
    ListEntry getCurrentShownEntry();
    ObservableList<? extends ListEntry> getCurrentShownList();
}
