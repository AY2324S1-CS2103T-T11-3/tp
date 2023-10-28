package seedu.address.logic.commands;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.lessons.Lesson;

/**
 * Edits the details of an existing lesson in the schedule.
 */
public class EditLessonCommand extends AbstractEditCommand<Lesson> {
    public EditLessonCommand(int index, Lesson editDescriptor) {
        super(index, editDescriptor);
    }

    public EditLessonCommand(Lesson editDescriptor) {
        super(editDescriptor);
    }

    public EditLessonCommand(Lesson editDescriptor, Lesson originalLesson) {
        super(editDescriptor, originalLesson);
    }

    @Override
    protected void initModelMethods() {
        currentShownEntry = model.getCurrentlyDisplayedLesson();
        list = model.getFilteredScheduleList();
        hasClashWith = model::hasLessonClashWith;
        deleteMethod = model::deleteLesson;
        addMethod = model::addLesson;
    }

    @Override
    protected void setNonDefaultFields() throws CommandException {
        edited.setDayIfNotDefault(editDescriptor.getDay());
        edited.setStartIfNotDefault(editDescriptor.getStart());
        edited.setEndIfNotDefault(editDescriptor.getEnd());
        edited.setSubjectIfNotDefault(editDescriptor.getSubject());
    }
}
