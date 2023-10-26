package seedu.address.model.fields;

import java.util.HashSet;
import java.util.Set;

/**
 * Represents a group of Subjects in the application.
 */
public class Subjects extends ListEntryField {
    private Set<Subject> subjects;
    public Subjects() {
        subjects = new HashSet<>();
    }
    public Subjects(Set<Subject> subjects) {
        this.subjects = subjects;
    }
    @Override
    public ListEntryField clone() {
        return new Subjects(getSubjectSetClone());
    }

    /**
     * Returns true if a given string is a valid subject.
     */
    public static Boolean isValid(String input) {
        for (String str : input.split(",")) {
            if (!Subject.isValid(str.trim())) {
                return false;
            }
        }
        return true;
    }

    /**
     * Constructs a {@code Subjects} from input of format "subject1, subject2, subject3".
     */
    public static Subjects of(String input) throws IllegalArgumentException {
        Subjects t = new Subjects();
        for (String str : input.split(",")) {
            t.add(Subject.of(str.trim()));
        }
        return t;
    }

    /**
     * Adds a subject to the set of subjects.
     */
    public void add(Subject subject) throws IllegalArgumentException {
        if (subjects.contains(subject)) {
            throw new IllegalArgumentException("Subject already exists");
        }
        subjects.add(subject);
    }
    public Set<Subject> getSubjectSetClone() {
        HashSet<Subject> subjectsClone = new HashSet<>();
        for (Subject subject : subjects) {
            subjectsClone.add(subject.clone());
        }
        return subjectsClone;
    }
    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if (!(other instanceof Subjects)) {
            return false;
        }
        Subjects otherSubjects = (Subjects) other;
        return subjects.equals(otherSubjects.subjects);
    }

}
