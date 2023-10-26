package seedu.address.logic;

import seedu.address.logic.commands.exceptions.CommandException;
import seedu.address.model.listEntries.ListEntry;
import seedu.address.model.listEntryFields.ListEntryField;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.function.Predicate;

import static java.lang.reflect.Modifier.isPrivate;

public class ReflectionUtil {
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
        } catch (Exception e) {
            throw new CommandException("Error invoking method " + methodName + " for class " + obj.getClass().getSimpleName());
        }
    }
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
        } catch (Exception e) {
            throw new CommandException("Error invoking method " + methodName + " for class " + clazz.getSimpleName());
        }
    }

    public static Object staticCall(Object obj, String methodName, Object... args) throws CommandException {
        return staticCall(obj.getClass(), methodName, args);
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
    private static Predicate<Field> isListEntry = field -> ListEntryField.class.isAssignableFrom(field.getType());
}
