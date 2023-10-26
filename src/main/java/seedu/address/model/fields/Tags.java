package seedu.address.model.fields;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * Represents a ListEntry's tags in the address book.
 */
public class Tags extends ListEntryField {
    private Set<Tag> tags;
    public Tags() {
        tags = new HashSet<>();
    }
    public Tags(Set<Tag> tags) {
        this.tags = tags;
    }
    /**
     * Returns a clone of the tags.
     */
    @Override
    public Tags clone() {
        return new Tags(getTagSetClone());
    }
    /**
     * Returns true if a given string is a valid tag.
     */
    public static Boolean isValid(String input) {
        for (String str : input.split(",")) {
            if (!Tag.isValid(str.trim())) {
                return false;
            }
        }
        return true;
    }
    /**
     * Constructs a {@code Tags} from input of format "tag1, tag2, tag3".
     */
    public static Tags of(String input) throws IllegalArgumentException {
        Tags t = new Tags();
        Arrays.stream(input.split(",")).forEach(str -> t.add(new Tag(str.trim())));
        return t;
    }

    /**
     * Adds a tag to the set of tags.
     */
    public void add(Tag tag) throws IllegalArgumentException {
        if (tags.contains(tag)) {
            throw new IllegalArgumentException("Tag already exists");
        }
        tags.add(tag);
    }
    public Set<Tag> getTagSetClone() {
        HashSet<Tag> tagsClone = new HashSet<>();
        for (Tag tag : tags) {
            tagsClone.add(tag.clone());
        }
        return tagsClone;
    }
    @Override
    public boolean equals(Object other) {
        if (other == this) {
            return true;
        }
        if (!(other instanceof Tags)) {
            return false;
        }
        Tags otherTags = (Tags) other;
        return tags.equals(otherTags.tags);
    }
}
