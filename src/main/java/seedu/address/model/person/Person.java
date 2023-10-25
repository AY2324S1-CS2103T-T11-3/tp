package seedu.address.model.person;

import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.util.Collections;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import seedu.address.commons.util.ToStringBuilder;
import seedu.address.model.ListEntry;
import seedu.address.model.tag.Tag;

/**
 * Represents a Person in the address book.
 * Guarantees: details are present and not null, field values are validated, immutable.
 */
public class Person implements ListEntry {
    private static final Person DEFAULT_PERSON = new Person(
            new Name("Default Person"),
            Phone.DEFAULT_PHONE,
            Email.DEFAULT_EMAIL,
            Address.DEFAULT_ADDRESS,
            new HashSet<>(),
            new HashSet<>(),
            Remark.DEFAULT_REMARK);

    // Identity fields
    private Name name;
    private Phone phone = Phone.DEFAULT_PHONE;
    private Email email = Email.DEFAULT_EMAIL;

    // Data fields
    private Address address = Address.DEFAULT_ADDRESS;
    private final Set<Subject> subjects = new HashSet<>();
    private final Set<Tag> tags = new HashSet<>();
    private Remark remark = Remark.DEFAULT_REMARK;


    /**
     * Make sense to only force the name to be non-null
     */
    public Person(Name name) {
        requireAllNonNull(name);
        this.name = name;
    }
    /**
     * Every field must be present and not null in this constructor.
     */
    public Person(Name name, Phone phone, Email email, Address address,
                  Set<Subject> subjects, Set<Tag> tags, Remark remark) {
        requireAllNonNull(name, phone, email, address, subjects, tags, remark);
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.subjects.addAll(subjects);
        this.tags.addAll(tags);
        this.remark = remark;
    }
    public static Person getDefaultPerson() {
        return DEFAULT_PERSON.clone();
    }

    public Name getName() {
        return name;
    }

    public void setName(Name name) {
        this.name = name;
    }
    public void setNameIfNotNull(Name name) {
        if (name != null) {
            setName(name);
        }
    }

    public Phone getPhone() {
        return phone;
    }
    public void setPhone(Phone phone) {
        this.phone = phone;
    }

    /**
     * Only update if arguement passes is not null. To ease the update and edit command
     */
    public void setPhoneIfNotNull(Phone phone) {
        if (phone != null) {
            setPhone(phone);
        }
    }

    public Email getEmail() {
        return email;
    }
    public void setEmail(Email email) {
        this.email = email;
    }
    /**
     * Only update if arguement passes is not null. To ease the update and edit command
     */
    public void setEmailIfNotNull(Email email) {
        if (email != null) {
            setEmail(email);
        }
    }

    public Address getAddress() {
        return address;
    }
    public void setAddress(Address address) {
        this.address = address;
    }
    /**
     * Only update if arguement passes is not null. To ease the update and edit command
     */
    public void setAddressIfNotNull(Address address) {
        if (address != null) {
            setAddress(address);
        }
    }
    /**
     * Returns an immutable subject set, which throws {@code UnsupportedOperationException}
     * if modification is attempted.
     */
    public Set<Subject> getSubjects() {
        return Collections.unmodifiableSet(subjects);
    }
    public void setSubjects(Set<Subject> subjects) {
        requireAllNonNull(subjects);
        this.subjects.clear();
        this.subjects.addAll(subjects);
    }

    public void setSubjectsIfNotNull(Set<Subject> subjects) {
        if (subjects != null) {
            setSubjects(subjects);
        }
    }

    /**
     * Returns an immutable tag set, which throws {@code UnsupportedOperationException}
     * if modification is attempted.
     */
    public Set<Tag> getTags() {
        return Collections.unmodifiableSet(tags);
    }

    public void setTags(Set<Tag> tags) {
        requireAllNonNull(tags);
        this.tags.clear();
        this.tags.addAll(tags);
    }
    public void setTagsIfNotNull(Set<Tag> tags) {
        if (tags != null) {
            setTags(tags);
        }
    }

    public Remark getRemark() {
        return remark;
    }

    public void setRemark(Remark remark) {
        requireAllNonNull(remark);
        this.remark = remark;
    }

    public void setRemarkIfNotNull(Remark remark) {
        if (remark != null) {
            setRemark(remark);
        }
    }

    /**
     * Returns true if both persons have the same name.
     * This defines a weaker notion of equality between two persons.
     */
    public boolean isSamePerson(Person otherPerson) {
        if (otherPerson == this) {
            return true;
        }

        return otherPerson != null
                && otherPerson.getName().equals(getName());
    }

    /**
     * Returns true if both persons have the same identity and data fields.
     * This defines a stronger notion of equality between two persons.
     */
    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }

        // instanceof handles nulls
        if (!(other instanceof Person)) {
            return false;
        }

        Person otherPerson = (Person) other;
        return name.equals(otherPerson.name)
                && phone.equals(otherPerson.phone)
                && email.equals(otherPerson.email)
                && address.equals(otherPerson.address)
                && subjects.equals(otherPerson.subjects)
                && tags.equals(otherPerson.tags)
                && remark.equals(otherPerson.remark);
    }

    @Override
    public int hashCode() {
        // use this method for custom fields hashing instead of implementing your own
        return Objects.hash(name, phone, email, address, subjects, tags, remark);
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this)
                .add("name", name)
                .add("phone", phone)
                .add("email", email)
                .add("address", address)
                .add("subjects", subjects)
                .add("tags", tags)
                .add("remark", remark)
                .toString();
    }
    /**
     * Returns a clone of this person that is equal to this person.
     */
    public Person clone() {
        Set<Subject> clonedSubjects = new HashSet<>();
        for (Subject subject : subjects) {
            clonedSubjects.add(subject.clone());
        }
        Set<Tag> clonedTags = new HashSet<>();
        for (Tag tag : tags) {
            clonedTags.add(tag.clone());
        }
        return new Person(name.clone(), phone.clone(), email.clone(), address.clone(),
                clonedSubjects, clonedTags, remark.clone());
    }

}
