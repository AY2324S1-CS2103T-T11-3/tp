package seedu.address.model.listEntries;

import static seedu.address.commons.util.CollectionUtil.requireAllNonNull;

import java.util.Collections;
import java.util.Objects;
import java.util.Set;

import seedu.address.commons.util.ToStringBuilder;
import seedu.address.model.listEntryFields.*;
import seedu.address.model.listEntryFields.Tag;

/**
 * Represents a Person in the address book.
 * Guarantees: details are present and not null, field values are validated, immutable.
 */
public class Person extends ListEntry {
    public static final Person DEFAULT_PERSON = new Person(Name.DEFAULT_NAME);

    // Identity fields
    private Name name;
    private Phone phone = Phone.DEFAULT_PHONE;
    private Email email = Email.DEFAULT_EMAIL;

    // Data fields
    private Address address = Address.DEFAULT_ADDRESS;
    private Subjects subjects = new Subjects();
    private Tags tags = new Tags();
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
        this.subjects = new Subjects(subjects);
        this.tags = new Tags(tags);
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
    public void setNameIfNotDefault(Name name) {
        if (name != null && !name.equals(Name.DEFAULT_NAME)) {
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
    public void setPhoneIfNotDefault(Phone phone) {
        if (phone != null && !phone.equals(Phone.DEFAULT_PHONE)) {
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
    public void setEmailIfNotDefault(Email email) {
        if (email != null && !email.equals(Email.DEFAULT_EMAIL)) {
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
    public void setAddressIfNotDefault(Address address) {
        if (address != null && !address.equals(Address.DEFAULT_ADDRESS)) {
            setAddress(address);
        }
    }
    /**
     * Returns an immutable subject set, which throws {@code UnsupportedOperationException}
     * if modification is attempted.
     */
    public Set<Subject> getSubjectsSet() {
        return Collections.unmodifiableSet(subjects.getSubjectSetClone());
    }
    public Subjects getSubjects() {
        return subjects;
    }
    public void setSubjects(Set<Subject> subjects) {
        requireAllNonNull(subjects);
        setSubjects(new Subjects(subjects));
    }
    public void setSubjects(Subjects subjects) {
        requireAllNonNull(subjects);
        this.subjects = subjects;
    }

    public void setSubjectsIfNotDefault(Subjects subjects) {
        if (subjects != null && !subjects.equals(new Subjects())) {
            setSubjects(subjects);
        }
    }
    public void setSubjectsIfNotDefault(Set<Subject> subjects) {
        if (subjects != null) {
            setSubjectsIfNotDefault(new Subjects(subjects));
        }
    }

    /**
     * Returns an immutable tag set, which throws {@code UnsupportedOperationException}
     * if modification is attempted.
     */
    public Set<Tag> getTagSet() {
        return Collections.unmodifiableSet(tags.getTagSetClone());
    }
    public Tags getTags() {
        return tags;
    }

    public void setTags(Set<Tag> tags) {
        requireAllNonNull(tags);
        setTags(new Tags(tags));
    }

    public void setTags(Tags tags) {
        requireAllNonNull(tags);
        this.tags = tags;
    }
    public void setTagsIfNotDefault(Set<Tag> tags) {
        if (tags != null) {
            setTagsIfNotDefault(new Tags(tags));
        }
    }

    public void setTagsIfNotDefault(Tags tags) {
        if (tags != null && !tags.equals(new Tags())) {
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

    public void setRemarkIfNotDefault(Remark remark) {
        if (remark != null && !remark.equals(Remark.DEFAULT_REMARK)) {
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
        return new Person(name.clone(), phone.clone(), email.clone(), address.clone(),
                subjects.getSubjectSetClone(), tags.getTagSetClone(), remark.clone());
    }

}
