package seedu.address.model;

import seedu.address.model.person.Name;

public interface ListEntry {
    ListEntry clone();
    Name getName();


}
