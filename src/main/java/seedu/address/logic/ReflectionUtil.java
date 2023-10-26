package seedu.address.logic;

import static java.lang.reflect.Modifier.isPrivate;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.function.Predicate;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.listEntries.ListEntry;
import seedu.address.model.l.ListEntryField;

public class ReflectionUtil {
    /**
     * Calls a method on an object with the given arguments.
     * @param obj The object to call the method on.
     * @param methodName The name of the method to call.
     * @param args The arguments to pass to the method.
     * @return The return value of the method.
     * @throws CommandException If the method does not exist, or if the method is private.
     */
    public static Object call(Object obj, String methodName, Object... args) throws CommandException {
        try {
            Class<?>[] classes = new Class[args.length];
            for (int i = 0; i < args.length; i++) {
                if (args[i] instanceof Integer) {
                    classes[i] = int.class;
                } else if (args[i] instanceof Boolean) {
                    classes[i] = boolean.class;
                } else {
                    classes[i] = args[i].getClass();
                }
            }
            Method method = obj.getClass().getDeclaredMethod(methodName, classes);
            return method.invoke(obj, args);
        } catch (NoSuchMethodException e) {
            throw new CommandException("No such method " + methodName + " for class " + obj.getClass().getSimpleName());
        } catch (IllegalAccessException e) {
            throw new CommandException("Access denied for method " + methodName + " for class " + obj.getClass().getSimpleName());
        } catch (IllegalArgumentException e){
            throw new CommandException("Illegal argument for method " + methodName + " for class " + obj.getClass().getSimpleName());
        } catch (InvocationTargetException e) {
            throw new CommandException("start time cannot be after end time");
        }
    }

    /**
     * Calls a static method on a class with the given arguments.
     * @param clazz The class to call the method on.
     * @param methodName The name of the method to call.
     * @param args The arguments to pass to the method.
     * @return The return value of the method.
     * @throws CommandException If the method does not exist, or if the method is private.
     */
    public static Object staticCall(Class<?> clazz, String methodName, Object... args) throws CommandException {
        try {
            Method method = clazz.getMethod(methodName);
            return method.invoke(null, args);
        } catch (NoSuchMethodException e) {
            throw new CommandException("No such method " + methodName + " for class " +clazz.getSimpleName());
        } catch (IllegalAccessException e) {
            throw new CommandException("Access denied for method " + methodName + " for class " + clazz.getSimpleName());
        } catch (IllegalArgumentException e){
            throw new CommandException("Illegal argument for method " + methodName + " for class " + clazz.getSimpleName());
        } catch (InvocationTargetException e) {
            throw new CommandException(e.getMessage());
        }
    }

    /**
     * Overload of {@link #call(Object, String, Object...)} that takes a {@link ListEntry} instead of an object.
     */
    public static Object staticCall(Object obj, String methodName, Object... args) throws CommandException {
        return staticCall(obj.getClass(), methodName, args);
    }

    /**
     * Gets the value of a field on an object.
     * @param field The field to get the value of.
     * @return The name of the field.
     */
    public static String capitaliseFieldName(Field field) {
        return field.getName().substring(0, 1).toUpperCase() + field.getName().substring(1);
    }

    /**
     * Gets the value of a field on an object.
     * @param c The class to get the field from.
     * @return The private fields of the class.
     * @param <T> The type of the class.
     */
    public static <T extends ListEntry> Field[] getPrivateFields(Class<T> c) {
        return Arrays.stream(c.getDeclaredFields())
                .filter(field -> isPrivate(field.getModifiers()))
                .toArray(Field[]::new);
    }

    /**
     * Gets the value of a field on an object.
     * @param obj The object to get the field from.
     * @return The private fields of the object that is a ListEntryField.
     */
    public static String[] getCapitalisedListEntryFields(ListEntry obj) {
       if (obj == null) {
           return new String[0];
       }
       Field[] fields = getPrivateFields(obj.getClass());
       return Arrays.stream(getPrivateFields(obj.getClass()))
               .filter(isListEntry)
               .map(ReflectionUtil::capitaliseFieldName)
               .toArray(String[]::new);
    }
    private static final Predicate<Field> isListEntry = field -> ListEntryField.class.isAssignableFrom(field.getType());
}
