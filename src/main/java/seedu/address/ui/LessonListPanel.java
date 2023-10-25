package seedu.address.ui;

import java.util.logging.Logger;

import javafx.beans.property.BooleanProperty;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.fxml.FXML;
import javafx.scene.control.ListCell;
import javafx.scene.control.ListView;
import javafx.scene.layout.Region;
import seedu.address.commons.core.LogsCenter;
import seedu.address.logic.Logic;
import seedu.address.model.lessons.Lesson;

/**
 * Panel containing the schedule.
 */
public class LessonListPanel extends UiPart<Region> {
    private static final String FXML = "LessonListPanel.fxml";
    private final Logger logger = LogsCenter.getLogger(LessonListPanel.class);

    private Logic logic;
    private BooleanProperty reRenderUi;
    @FXML
    private ListView<Lesson> scheduleListView;

    /**
     * Creates a {@code PersonListPanel} with the given {@code ObservableList}.
     */
    public LessonListPanel(Logic logic) {
        super(FXML);
        this.logic = logic;
        this.reRenderUi = logic.getRefreshListUi(); // Connect to the logic manager's boolean flag
        scheduleListView.setItems(logic.getFilteredScheduleList());
        scheduleListView.setCellFactory(listView -> new ScheduleListViewCell());
        // Listens for a change in reRenderUi value and updates UI, the actual value is irrelevant
        reRenderUi.addListener(new ChangeListener<Boolean>() {
            @Override
            public void changed(ObservableValue<? extends Boolean> observable, Boolean oldValue, Boolean newValue) {
                refreshUI();
            }
        });

    }

    private void refreshUI() {
        scheduleListView.refresh();
    }

    /**
     * Custom {@code ListCell} that displays the graphics of a {@code Lesson} using a {@code LessonCard}.
     */
    class ScheduleListViewCell extends ListCell<Lesson> {
        @Override
        protected void updateItem(Lesson lesson, boolean empty) {
            super.updateItem(lesson, empty);

            if (empty || lesson == null) {
                setGraphic(null);
                setText(null);
            } else {
                setGraphic(new LessonCard(lesson, getIndex() + 1, logic.getDisplayedFieldsList()).getRoot());
            }
        }
    }
}
