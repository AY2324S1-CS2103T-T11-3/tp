package seedu.address.logic;

import javafx.util.Pair;
import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.ListEntry;
import seedu.address.model.Parseable;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;

import static java.lang.reflect.Modifier.isPrivate;

public class ReflectionUtil {
    public static Object call(Object obj, String methodName, Object... args) throws CommandException {
        try {
            Method method = obj.getClass().getDeclaredMethod(methodName);
            return method.invoke(obj, args);
        } catch (NoSuchMethodException e) {
            throw new CommandException("No such method " + methodName + " for class " + obj.getClass().getName());
        } catch (IllegalAccessException e) {
            throw new CommandException("Access denied for method " + methodName + " for class " + obj.getClass().getName());
        } catch (IllegalArgumentException e){
            throw new CommandException("Illegal argument for method " + methodName + " for class " + obj.getClass().getName());
        } catch (Exception e) {
            throw new CommandException("Error invoking method " + methodName + " for class " + obj.getClass().getName());
        }
    }
    public static Object staticCall(Object obj, String methodName, Object... args) throws CommandException {
        try {
            Method method = obj.getClass().getDeclaredMethod(methodName);
            return method.invoke(null, args);
        } catch (NoSuchMethodException e) {
            throw new CommandException("No such method " + methodName + " for class " + obj.getClass().getName());
        } catch (IllegalAccessException e) {
            throw new CommandException("Access denied for method " + methodName + " for class " + obj.getClass().getName());
        } catch (IllegalArgumentException e){
            throw new CommandException("Illegal argument for method " + methodName + " for class " + obj.getClass().getName());
        } catch (Exception e) {
            throw new CommandException("Error invoking method " + methodName + " for class " + obj.getClass().getName());
        }
    }
    public static String[] getCapitalisedPrivateFieldNames(ListEntry obj) {
        return getCapitalisedPrivateFieldNames(obj.getClass());
    }
    public static <T extends ListEntry> String[] getCapitalisedPrivateFieldNames(Class<T> c) {
        return Arrays.stream(getPrivateFields(c))
                .map(ReflectionUtil::capitaliseFieldName)
                .toArray(String[]::new);
    }
    public static String capitaliseFieldName(Field field) {
        return field.getName().substring(0, 1).toUpperCase() + field.getName().substring(1);
    }
    public static <T extends ListEntry> Field[] getPrivateFields(Class<T> c) {
        return Arrays.stream(c.getDeclaredFields())
                .filter(field -> isPrivate(field.getModifiers()))
                .toArray(Field[]::new);
    }
}
