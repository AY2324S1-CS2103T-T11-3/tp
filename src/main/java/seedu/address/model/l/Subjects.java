package seedu.address.model.l;

import java.util.HashSet;
import java.util.Set;

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

    public static Boolean isValid(String input) {
        for (String str : input.split(",")) {
            if (!Subject.isValid(str.trim())) {
                return false;
            }
        }
        return true;
    }

    public static Subjects of(String input) throws IllegalArgumentException {
        Subjects t = new Subjects();
        for (String str : input.split(",")) {
            t.add(Subject.of(str.trim()));
        }
        return t;
    }

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
