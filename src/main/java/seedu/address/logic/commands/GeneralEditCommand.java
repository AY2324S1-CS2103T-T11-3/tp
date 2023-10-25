package seedu.address.logic.commands;

import static seedu.address.logic.ReflectionUtil.call;
import static seedu.address.logic.ReflectionUtil.getCapitalisedPrivateFieldNames;
import static seedu.address.logic.ReflectionUtil.staticCall;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.ListEntry;
import seedu.address.model.Model;

import java.util.List;


public class GeneralEditCommand extends Command {
    private final ListEntry editedFieldsHolder;
    private ListEntry original = null;
    private ListEntry cloned = null;

    private Integer index = null;

    private final String className;
    public GeneralEditCommand (ListEntry editedFieldsHolder) {
        this.editedFieldsHolder = editedFieldsHolder;
        this.className = editedFieldsHolder.getClass().getSimpleName();
    }
    public GeneralEditCommand (ListEntry editedFieldsHolder, ListEntry original) {
        this.editedFieldsHolder = editedFieldsHolder;
        this.className = editedFieldsHolder.getClass().getSimpleName();
        this.original = original;
        this.cloned = original.clone();
    }
    public GeneralEditCommand (ListEntry editedFieldsHolder, Integer index) {
        this.editedFieldsHolder = editedFieldsHolder;
        this.className = editedFieldsHolder.getClass().getSimpleName();
        this.index = index;
    }

    @Override
    public CommandResult execute(Model model) throws CommandException {
        init(model);
        editFields(model);
        validateEdited(model);
        writeBack(model);
        return new CommandResult("Edited " + className + ": " + cloned.toString());
    }

    private void init(Model model) throws CommandException {
        if (original == null) {
            if (index == null) {
                original = model.getCurrentShownEntry();
            } else {
                Object returned = call(model, "getFiltered"+className+"List", index);
                if (!(returned instanceof List)) {
                    throw new CommandException("Error calling getFiltered"+className+"List(index) in model.");
                } else {
                    Integer size = (Integer) call(returned, "size");
                    if (index < 1 || index - 1 >= size) {
                        throw new CommandException("Index out of bounds, expected 1 to " + size + " but got " + index + ".");
                    }
                    original = (ListEntry) call(returned, "get", index);
                }
            }

        }
            cloned = original.clone();
    }
    private void editFields(Model model) throws CommandException {
        for (String fieldName: getCapitalisedPrivateFieldNames(original)) {
            String setter = "set" + fieldName + "IfNotNull";
            String getter = "get" + fieldName;
            call(cloned, setter, call(editedFieldsHolder, getter));
        }
    }
    private void validateEdited(Model model) throws CommandException {
        if (cloned.equals(original)) {
            throw new CommandException("No change detected.");
        }

        if (!cloned.getName().equals(original.getName())) {
            boolean hasNameCollision = (boolean) call(model, "has" + className, cloned);
            if (hasNameCollision) {
                throw new CommandException("Entry with the same name already exists.");
            }
        }
    }
    private void writeBack(Model model) throws CommandException {
        call(model, "set" + className, original, cloned);
        call(model, "updateFiltered" + className + "List",
                staticCall(model,"PREDICATE_SHOW_ALL_" + className.toUpperCase() + "S"));
    }
}

