
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("TutorMate")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2324S1-CS2103T-T11-3/tp","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('br'),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('hr'),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureDiagram.png","width":"280"}}),_v(" "),_m(7),_v(" "),_c('p',[_v("You can see that the bulk of the app's works are done by the UI, Logic, Model and Storage components. Below are the general duties of each component and how they interact with each other.")]),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureSequenceDiagram.png","width":"574"}}),_v(" "),_m(27),_v(" "),_c('ol',[_m(28),_v(" "),_c('li',[_c('p',[_v("The team has decided to force all components to interact via interfaces rather than the concrete classes as illustrated in the (partial) class diagram below (reason: to prevent outside component's being coupled to the implementation of a component).")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ComponentManagers.png","width":"300"}}),_v("\nIf you are to contribute to this project, please align with this group decision.\n")],1),_v(" "),_m(29),_v(" "),_m(30)]),_v(" "),_c('p',[_v("The sections below give more details of each component.")]),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_m(33),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UiClassDiagram.png","alt":"Structure of the UI Component"}}),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_m(39),_v(" "),_c('p',[_v("At high level, Logic Component is responsible for making sense of the user inputs, and modify storage and ui accordingly.\nIt is like a controller that glue the other components together.")]),_v(" "),_c('p',[_v("To be more specific, it interacts with ui component by taking the user input from it, and setting the ui display accordingly.\nIt also calls APIs (addPerson, deleteLesson for example) from model component to modify the data representation, and call APIs\nfrom storage component to save the data to local storage each time the data is modified.")]),_v(" "),_m(40),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/DeleteSequenceDiagram.png","alt":"Interactions Inside the Logic Component for the `delete 1` Command"}}),_v(" "),_m(41),_v(" "),_c('p',[_v("The command class will do the actual modification of the data, on been executed by the LogicManager, and communicate with logic\nmanager its execution result via the CommandResult class.")]),_v(" "),_c('p',[_v("Parser classes are responsible for parsing the user input and create\nthe corresponding command object.")]),_v(" "),_c('p',[_v("AddressBookParser is responsible for parsing the user input for finding the corresponding parser and return the corresponding command object.")]),_v(" "),_c('p',[_v("And logicManager will do the actual execution of command, and update to ui and storage.\nThe sequence diagram below")]),_v(" "),_m(42),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/LogicClassDiagram.png","width":"550"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline reaches the end of diagram.")])]),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ParserClasses.png","width":"600"}}),_v(" "),_c('p',[_v("How the parsing works:")]),_v(" "),_m(46),_v(" "),_m(47),_v(" "),_m(48),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ModelClassDiagram.png","width":"600"}}),_v(" "),_m(49),_v(" "),_m(50),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" An alternative (arguably, a more OOP) model is given below. It has a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" list in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(", which "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" references. This allows "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" to only require one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" object per unique tag, instead of each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" needing their own "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" objects."),_c('br')]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/BetterModelClassDiagram.png","width":"450"}})],1),_v(" "),_m(51),_v(" "),_m(52),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/StorageClassDiagram.png","width":"550"}}),_v(" "),_m(53),_v(" "),_m(54),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_c('p',[_v("This section describes some noteworthy details on how certain features are implemented.")]),_v(" "),_m(61),_v(" "),_m(62),_v(" "),_c('p',[_v("The list feature is the core feature that handles the current state of the app. Depending on what the user specifies to list out, the user interface will change accordingly to show the appropriate list panels.\nIt also handles displaying the relevant student details specified by the user when the student list is shown, in order to not overcrowd the interface.")]),_v(" "),_m(63),_v(" "),_m(64),_v(" "),_m(65),_v(" "),_m(66),_v(" "),_m(67),_v(" "),_m(68),_v(" "),_m(69),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_m(72),_v(" "),_c('p',[_v("Given below is an example usage scenario and how the show feature behaves at each step.")]),_v(" "),_m(73),_v(" "),_m(74),_v(" "),_m(75),_v(" "),_m(76),_v(" "),_m(77),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/ShowSequenceDiagram.png","alt":"ShowSequenceDiagram"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ShowCommandParser")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline reaches the end of diagram.")])]),_v(" "),_m(78),_v(" "),_m(79),_v(" "),_m(80),_v(" "),_m(81),_v(" "),_m(82),_v(" "),_m(83),_v(" "),_m(84),_v(" "),_m(85),_v(" "),_m(86),_v(" "),_m(87),_v(" "),_m(88),_v(" "),_m(89),_v(" "),_m(90),_v(" "),_m(91),_v(" "),_m(92),_v(" "),_c('p',[_v("Given below is an example usage scenario and how the undo/redo mechanism behaves at each step.")]),_v(" "),_m(93),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState0.png","alt":"UndoRedoState0"}}),_v(" "),_m(94),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState1.png","alt":"UndoRedoState1"}}),_v(" "),_m(95),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState2.png","alt":"UndoRedoState2"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If a command fails its execution, it will not call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", so the address book state will not be saved into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(".")])]),_v(" "),_m(96),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState3.png","alt":"UndoRedoState3"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is at index 0, pointing to the initial AddressBook state, then there are no previous AddressBook states to restore. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_v(" command uses "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#canUndoAddressBook()")]),_v(" to check if this is the case. If so, it will return an error to the user rather\nthan attempting to perform the undo.")])]),_v(" "),_c('p',[_v("The following sequence diagram shows how the undo operation works:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoSequenceDiagram.png","alt":"UndoSequenceDiagram"}}),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UndoCommand")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline reaches the end of diagram.")])]),_v(" "),_m(97),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" If the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is at index "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList.size() - 1")]),_v(", pointing to the latest address book state, then there are no undone AddressBook states to restore. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("redo")]),_v(" command uses "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#canRedoAddressBook()")]),_v(" to check if this is the case. If so, it will return an error to the user rather than attempting to perform the redo.")])]),_v(" "),_m(98),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState4.png","alt":"UndoRedoState4"}}),_v(" "),_m(99),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/UndoRedoState5.png","alt":"UndoRedoState5"}}),_v(" "),_c('p',[_v("The following activity diagram summarizes what happens when a user executes a new command:")]),_v(" "),_c('pic',{attrs:{"src":"/tp/diagrams/CommitActivityDiagram.png","width":"250"}}),_v(" "),_m(100),_v(" "),_m(101),_v(" "),_m(102),_v(" "),_m(103),_v(" "),_m(104),_v(" "),_m(105),_v(" "),_c('hr'),_v(" "),_m(106),_v(" "),_m(107),_v(" "),_c('hr'),_v(" "),_m(108),_v(" "),_m(109),_v(" "),_m(110),_v(" "),_m(111),_v(" "),_m(112),_v(" "),_m(113),_v(" "),_m(114),_v(" "),_m(115),_m(116),_v(" "),_m(117),_v(" "),_m(118),_v(" "),_c('p',[_v("MSS")]),_v(" "),_m(119),_v(" "),_c('p',[_v("Extensions")]),_v(" "),_m(120),_v(" "),_m(121),_v(" "),_c('p',[_v("Preconditions")]),_v(" "),_m(122),_v(" "),_c('p',[_v("MSS")]),_v(" "),_m(123),_v(" "),_c('p',[_v("Use Case ends")]),_v(" "),_c('p',[_v("Extensions")]),_v(" "),_m(124),_v(" "),_m(125),_v(" "),_m(126),_v(" "),_m(127),_v(" "),_c('p',[_v("Use case ends.")]),_v(" "),_m(128),_v(" "),_m(129),_v(" "),_m(130),_v(" "),_m(131),_v(" "),_m(132),_v(" "),_c('p',[_v("Use case ends.")]),_v(" "),_m(133),_v(" "),_m(134),_v(" "),_m(135),_v(" "),_m(136),_v(" "),_m(137),_v(" "),_c('p',[_v("Use Case ends")]),_v(" "),_m(138),_v(" "),_m(139),_v(" "),_m(140),_v(" "),_m(141),_v(" "),_m(142),_v(" "),_c('p',[_v("Use Case ends")]),_v(" "),_m(143),_v(" "),_m(144),_v(" "),_m(145),_v(" "),_m(146),_v(" "),_m(147),_v(" "),_c('p',[_v("Use Case ends")]),_v(" "),_m(148),_v(" "),_m(149),_v(" "),_m(150),_v(" "),_m(151),_v(" "),_m(152),_v(" "),_c('p',[_v("Use Case ends")]),_v(" "),_m(153),_v(" "),_m(154),_v(" "),_m(155),_v(" "),_m(156),_v(" "),_m(157),_v(" "),_c('p',[_v("Use Case ends.")]),_v(" "),_m(158),_v(" "),_m(159),_v(" "),_m(160),_v(" "),_m(161),_v(" "),_m(162),_v(" "),_m(163),_v(" "),_c('hr'),_v(" "),_m(164),_v(" "),_c('p',[_v("Given below are instructions to test the app manually.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" These instructions only provide a starting point for testers to work on;\ntesters are expected to do more "),_c('em',[_v("exploratory")]),_v(" testing.")])]),_v(" "),_m(165),_v(" "),_m(166),_v(" "),_m(167),_v(" "),_m(168),_v(" "),_m(169),_v(" "),_m(170)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#tutormate-developer-guide"}},[_v("TutorMate Developer Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#acknowledgements"}},[_v("Acknowledgements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up-getting-started"}},[_v("Setting up, getting started‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#design"}},[_v("Design‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#architecture"}},[_v("Architecture‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#components"}},[_v("Components‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#ui-component"}},[_v("UI component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#logic-component"}},[_v("Logic component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#model-component"}},[_v("Model component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#storage-component"}},[_v("Storage component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#entry-point-classes"}},[_v("Entry point classes‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#common-classes"}},[_v("Common classes‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#commons-represents-a-collection-of-classes-used-by-multiple-other-components-they-are-in-the-seedu-addressbook-commons-package"}},[_v("Commons represents a collection of classes used by multiple other components. They are in the seedu.addressbook.commons package.‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#implementation"}},[_v("Implementation‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#list-feature"}},[_v("List feature‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#purpose"}},[_v("Purpose‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#show-feature"}},[_v("Show feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#task-list-feature"}},[_v("Task List Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#proposed-undo-redo-feature"}},[_v("[Proposed] Undo/redo feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#proposed-data-archiving"}},[_v("[Proposed] Data archiving‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#documentation-logging-testing-configuration-dev-ops"}},[_v("Documentation, logging, testing, configuration, dev-ops‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-requirements"}},[_v("Appendix: Requirements‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#product-scope"}},[_v("Product scope‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#user-stories"}},[_v("User stories‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-cases"}},[_v("Use cases‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-install-the-app-uc01"}},[_v("Use case: Install the app [UC01]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-add-a-student-uc02"}},[_v("Use case: Add a student [UC02]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-delete-a-student-uc03"}},[_v("Use case: Delete a student [UC03]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-show-a-student-uc04"}},[_v("Use case: Show a student [UC04]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-find-and-amp-see-a-student-with-their-details-uc05"}},[_v("Use case: Find & see a student with their details [UC05]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-edit-a-student-s-details-uc06"}},[_v("Use case: Edit a student's details [UC06]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-add-a-lesson-uc07"}},[_v("Use case: Add a lesson [UC07]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-add-a-task-to-a-lesson-uc08"}},[_v("Use case: Add a task to a lesson [UC08]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-delete-a-task-to-a-lesson-uc09"}},[_v("Use case: Delete a task to a lesson [UC09]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#non-functional-requirements"}},[_v("Non-Functional Requirements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#glossary"}},[_v("Glossary‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-instructions-for-manual-testing"}},[_v("Appendix: Instructions for manual testing‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#launch-and-shutdown"}},[_v("Launch and shutdown‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#deleting-a-person"}},[_v("Deleting a person‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#saving-data"}},[_v("Saving data‎")])])])])],1)]),_v(" "),_c('scroll-top-button')],1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"tutormate-developer-guide"}},[_v("TutorMate Developer Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tutormate-developer-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"acknowledgements"}},[_c('strong',[_v("Acknowledgements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#acknowledgements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("This project is based on the "),_c('a',{attrs:{"href":"https://se-education.org"}},[_v("AddressBook-Level3 project")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-getting-started"}},[_c('strong',[_v("Setting up, getting started")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-getting-started","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Refer to the guide "),_c('a',{attrs:{"href":"/tp/SettingUp.html"}},[_c('em',[_v("Setting up and getting started")])]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"design"}},[_c('strong',[_v("Design")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"architecture"}},[_v("Architecture"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#architecture","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_c('strong',[_v("Architecture Diagram")])]),_v(" given above illustrates the high-level design of the App.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"duties-of-each-component"}},[_v("Duties of each component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#duties-of-each-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#ui-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")])])]),_v(" is responsible for")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Rendering visuals to the user.")]),_v(" "),_c('li',[_v("Handling and responding to user interactions.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#logic-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")])])]),_v(" is responsible for")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Interpreting the user command to find the corresponding strategies to execute.")]),_v(" "),_c('li',[_v("Parsing the user command to construct the corresponding parameters for the strategies.")]),_v(" "),_c('li',[_v("Executing the strategies to modify the data and state of the app.")]),_v(" "),_c('li',[_v("Updating the UI to reflect the changes in the data and state of the app.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#model-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")])])]),_v(" is responsible for")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Providing accurate representation of the current data and state of the app")]),_v(" "),_c('li',[_v("Providing APIs for other components to access and modify the data and state.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#storage-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")])])]),_v(": is responsible for")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Loading the user data from the hard disk.")]),_v(" "),_c('li',[_v("Saving the user data to the hard disk.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"how-the-architecture-components-interact-with-each-other"}},[_v("How the architecture components interact with each other"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#how-the-architecture-components-interact-with-each-other","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#ui-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")])])]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Delegates the interpretation of user command to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.")]),_v(" "),_c('li',[_v("Relies on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component to obtain the appropriate data to display.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#logic-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")])])]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Informs "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" what to display.")]),_v(" "),_c('li',[_v("Utilises "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" to access and modify the current data and state "),_c('br')]),_v(" "),_c('li',[_v("Instructs "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" to save data to the hard disk.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#model-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")])])]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Provides APIs for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" to access and modify the data.")]),_v(" "),_c('li',[_v("Depends on "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" to load data from the hard disk to initialise.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#storage-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")])])]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Provides APIs for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" to save data to the hard disk.")]),_v(" "),_c('li',[_v("Provides APIs for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" to load data from the hard disk to initialise.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_v("Sequence Diagram")]),_v(" below shows how the components interact with each other for the scenario where the user issues the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"other-notes"}},[_v("Other notes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#other-notes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Each of the four main components (also shown in the diagram above)")]),_v(" "),_c('ul',[_c('li',[_v("Defines its "),_c('em',[_v("API")]),_v(" in an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" with the same name as the Component.")]),_v(" "),_c('li',[_v("Implements its functionality using a concrete "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{Component Name}Manager")]),_v(" class (which follows the corresponding API "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" mentioned in the previous point.")])]),_v(" "),_c('p',[_v("For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component defines its API in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")]),_v(" interface and implements its functionality using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager.java")]),_v(" class.")])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("There are other components that are not shown in the diagram above. These components are:")]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commons")]),_v(" component: contains classes that are used by multiple other components.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Entry Point")]),_v(" classes: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")]),_v(" classes that are in charge of the app launch and shut down.")])])])}
},function anonymous(
) {
with(this){return _c('li',[_c('p',[_v("Please be reminded that, despite similar naming, our architecture is not the "),_c('a',{attrs:{"href":"https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"}},[_v("Model-View-Controller (MVC)")]),_v(" architecture. The major difference is that there is not a clear \"Controller\" component in our architecture. Instead, the role of the \"Controller\" is played by all the main components (UI, Logic, Model and Storage) working together.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"components"}},[_v("Components"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#components","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"ui-component"}},[_v("UI component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ui-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_v("API")]),_v(" of this component is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/Ui.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ui.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The UI consists of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(" that is made up of parts e.g."),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandBox")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ResultDisplay")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonListPanel")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StatusBarFooter")]),_v(" etc. All these, including the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(", inherit from the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiPart")]),_v(" class which captures the commonalities between classes that represent parts of the visible GUI.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component uses the JavaFx UI framework. The layout of these UI parts are defined in matching "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".fxml")]),_v(" files that are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/main/resources/view")]),_v(" folder. For example, the layout of the "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/MainWindow.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")])]),_v(" is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/resources/view/MainWindow.fxml"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow.fxml")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("executes user commands using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.")]),_v(" "),_c('li',[_v("listens for changes to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" data so that the UI can be updated with the modified data.")]),_v(" "),_c('li',[_v("keeps a reference to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" relies on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" to execute commands.")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component, as it displays "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object residing in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(".")]),_v(" "),_c('li',[_v("consists of 2 sides: the left side being the lists section and the right side being the details section.")]),_v(" "),_c('li',[_v("depends on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("State")]),_v(" of the app currently to show the appropriate list panels.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"logic-component"}},[_v("Logic component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#logic-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/logic/Logic.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The sequence diagram below illustrates the interactions within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, taking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(\"delete 1\")")]),_v(" API call as an example.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Inside the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, there are 4 main components: LogicManager, AddressBookParser, ScheduleParser and Command.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here's a (partial) class diagram of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("How the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component works:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("When "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" is called upon to execute a command, it is passed to an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" object which in turn creates a parser that matches the command (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(") and uses it to parse the command.")]),_v(" "),_c('li',[_v("This results in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object (more precisely, an object of one of its subclasses e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(") which is executed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(".")]),_v(" "),_c('li',[_v("The command can communicate with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" when it is executed (e.g. to delete a person).")]),_v(" "),_c('li',[_v("The result of the command execution is encapsulated as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" object which is returned back from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here are the other classes in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" (omitted from the class diagram above) that are used for parsing a user command:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When called upon to parse a user command, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" class creates an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZ")]),_v(" is a placeholder for the specific command name e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(") which uses the other classes shown above to parse the user command and create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommand")]),_v(" object (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommand")]),_v(") which the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" returns back as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object.")]),_v(" "),_c('li',[_v("All "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" classes (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(", ...) inherit from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Parser")]),_v(" interface so that they can be treated similarly where possible e.g, during testing.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"model-component"}},[_v("Model component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#model-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/model/Model.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("stores the address book data i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (which are contained in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList")]),_v(" object).")]),_v(" "),_c('li',[_v("stores the schedule data i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("lesson")]),_v(" objects (which are contained in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Schedule")]),_v(" object).")]),_v(" "),_c('li',[_v("stores the currently 'selected' "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (e.g., results of a search query) as a separate "),_c('em',[_v("filtered")]),_v(" list which is exposed to outsiders as an unmodifiable "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ObservableList<Person>")]),_v(" that can be 'observed' e.g. the UI can be bound to this list so that the UI automatically updates when the data in the list change.")]),_v(" "),_c('li',[_v("stores a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPref")]),_v(" object that represents the user’s preferences. This is exposed to the outside as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ReadOnlyUserPref")]),_v(" objects.")]),_v(" "),_c('li',[_v("stores the task data of all the lessons i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("task")]),_v(" objects (which are contained in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TaskList")]),_v(" objects of each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Lesson")]),_v(" object).")]),_v(" "),_c('li',[_v("does not depend on any of the other three components (as the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" represents data entities of the domain, they should make sense on their own without depending on other components).")]),_v(" "),_c('li',[_v("links to the UI component to display the Show Details Panel in the UI (to reduce code complexity).")]),_v(" "),_c('li',[_v("stores a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("State")]),_v(" object that represents the current state of the app. Currently, the only 3 possible states are "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NONE")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"storage-component"}},[_v("Storage component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#storage-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/storage/Storage.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("can save both address book data, user preference data, and schedule data in JSON format, and read them back into corresponding objects.")]),_v(" "),_c('li',[_v("inherits from both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookStorage")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPrefStorage")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ScheduleStorage")]),_v(", which means it can be treated as either one (if only the functionality of only one is needed).")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component (because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component's job is to save/retrieve objects that belong to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(")")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"entry-point-classes"}},[_v("Entry point classes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#entry-point-classes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" (consisting of classes "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/Main.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/MainApp.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")])]),_v(") is in charge of the app launch and shut down.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("At app launch, it initializes the other components in the correct sequence, and connects them up with each other.")]),_v(" "),_c('li',[_v("At shut down, it shuts down the other components and invokes cleanup methods where necessary.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"common-classes"}},[_v("Common classes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#common-classes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"commons-represents-a-collection-of-classes-used-by-multiple-other-components-they-are-in-the-seedu-addressbook-commons-package"}},[_c('a',{attrs:{"href":"#common-classes"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commons")])])]),_v(" represents a collection of classes used by multiple other components. They are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.addressbook.commons")]),_v(" package."),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#commons-represents-a-collection-of-classes-used-by-multiple-other-components-they-are-in-the-seedu-addressbook-commons-package","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"implementation"}},[_c('strong',[_v("Implementation")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"list-feature"}},[_v("List feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#list-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"purpose"}},[_v("Purpose"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#purpose","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-2"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The list feature is facilitated by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListCommand")]),_v(" which extends the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" class. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListCommand")]),_v(" will change the current state of the Model (either "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NONE")]),_v(") when the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method is called.\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(" receives changes to the app's state and renders the required panels accordingly.\nIt also stores an array of display parameters which will specifies what student details are shown by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ui")]),_v(" component in the student list. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(" will detect changes in display parameters and set the required displayed fields.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"show-feature"}},[_v("Show feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#show-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-3"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The show feature is facilitated by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ShowCommand")]),_v(" which extends the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" class. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ShowCommand")]),_v(" will check the current state of the Model (either "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NONE")]),_v(") when the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method is called and see whether it is currently showing a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(" list or a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Additionally, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(" class implements the following operations for the show command:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#linkUi()")]),_v(" — Links the Ui of TutorMate to the Model to display the Show Panel\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#showPerson()")]),_v(" — Shows the details of the specified person in the Ui.\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#showLesson()")]),_v(" — Shows the details of the specified lesson in the Ui.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The Show Command has different behaviours based on the current state in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The show Command will show the Person Details if the current state is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")])]),_v(" "),_c('li',[_v("The show Command will show the Lesson Details if the current state is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ShowCommand")]),_v(" will be called by the logicManager when the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_v(" command is input.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user launches the application for the first time. The initial state of the Model will be set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(". The schedule list will be initialized with the initial schedule.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The user executes show 5 command to show the details of the 5th lesson in the schedule list. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ShowCommand")]),_v(" will be called by the logicManager. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" command will call the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("showLesson")]),_v(" method in the ModelManager which displays the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LessonDetailListPanel")]),_v(" in the Ui.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. The user wants to display the details of a person and switches to the student list with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" command in the Command Line Interface(CLI) Ui. The current list will display the students and the Model state will change to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. The user executes show 1 command to show the details of the 1st person in the student list. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ShowCommand")]),_v(" will be called by the logicManager. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" command will call the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("showPerson")]),_v(" method in the ModelManager which displays the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StudentDetailListPanel")]),_v(" in the Ui.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following sequence diagram shows how the show operation works for showing a person from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(" list:")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: How the Show Command calls the Ui to display the Show Details Panel:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1 (current choice):")]),_v(" Link the Model with the Ui to display the Show Details Panel.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy to implement.")]),_v(" "),_c('li',[_v("Cons: May increase coupling between the Model and Ui")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2:")]),_v(" Pass the Ui call from the Show Command around the currently linked files.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: No additional coupling created.")]),_v(" "),_c('li',[_v("Cons: Many files will have to be changed and will increase the complexity of the code.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"task-list-feature"}},[_v("Task List Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#task-list-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-4"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-4","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The task list functionality is facilitated by multiple related classes. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TaskList")]),_v(" can contain any number of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Task")]),_v(" objects. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TaskList")]),_v(" is implemented as a component of each Lesson so that each lesson will have its own individual Task List.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FullTaskList")]),_v(" class is implemented as a list to view all the collective tasks of all the lessons. It uses a similar structure to ScheduleList to display the list.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations-2"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: How the Task List structure should be implemented:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1 (current choice):")]),_v(" Each individual Lesson will contain a Task List.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy to implement.")]),_v(" "),_c('li',[_v("Cons: May be hard to increase navigability from students to lessons and tasks.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2:")]),_v(" Create a central Task List and filter the tasks for each lesson.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: May be easier to increase navigability.")]),_v(" "),_c('li',[_v("Cons: May increase code complexity due to filtering the respective tasks.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"proposed-undo-redo-feature"}},[_v("[Proposed] Undo/redo feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#proposed-undo-redo-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"proposed-implementation"}},[_v("Proposed Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#proposed-implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The proposed undo/redo mechanism is facilitated by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook")]),_v(". It extends "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" with an undo/redo history, stored internally as an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(". Additionally, it implements the following operations:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#commit()")]),_v(" — Saves the current address book state in its history.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#undo()")]),_v(" — Restores the previous address book state from its history.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#redo()")]),_v(" — Restores a previously undone address book state from its history.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("These operations are exposed in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" interface as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(" respectively.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user launches the application for the first time. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook")]),_v(" will be initialized with the initial address book state, and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" pointing to that single address book state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 5")]),_v(" command to delete the 5th person in the address book. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" command calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", causing the modified state of the address book after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 5")]),_v(" command executes to be saved in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(", and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is shifted to the newly inserted address book state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/David …​")]),_v(" to add a new person. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command also calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", causing another modified address book state to be saved into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. The user now decides that adding the person was a mistake, and decides to undo that action by executing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_v(" command. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_v(" command will call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(", which will shift the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" once to the left, pointing it to the previous address book state, and restores the address book to that state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("redo")]),_v(" command does the opposite — it calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(", which shifts the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" once to the right, pointing to the previously undone state, and restores the address book to that state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 5. The user then decides to execute the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(". Commands that do not modify the address book, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(", will usually not call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(". Thus, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(" remains unchanged.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 6. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(", which calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(". Since the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is not pointing at the end of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(", all address book states after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" will be purged. Reason: It no longer makes sense to redo the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/David …​")]),_v(" command. This is the behavior that most modern desktop applications follow.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations-3"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: How undo & redo executes:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1 (current choice):")]),_v(" Saves the entire address book.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy to implement.")]),_v(" "),_c('li',[_v("Cons: May have performance issues in terms of memory usage.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2:")]),_v(" Individual command knows how to undo/redo by\nitself.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Will use less memory (e.g. for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(", just save the person being deleted).")]),_v(" "),_c('li',[_v("Cons: We must ensure that the implementation of each individual command are correct.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("{more aspects and alternatives to be added}")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"proposed-data-archiving"}},[_v("[Proposed] Data archiving"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#proposed-data-archiving","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("{Explain here how the data archiving feature will be implemented}")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"documentation-logging-testing-configuration-dev-ops"}},[_c('strong',[_v("Documentation, logging, testing, configuration, dev-ops")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#documentation-logging-testing-configuration-dev-ops","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"/tp/Documentation.html"}},[_v("Documentation guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Testing.html"}},[_v("Testing guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Logging.html"}},[_v("Logging guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Configuration.html"}},[_v("Configuration guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/DevOps.html"}},[_v("DevOps guide")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-requirements"}},[_c('strong',[_v("Appendix: Requirements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"product-scope"}},[_v("Product scope"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#product-scope","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Target user profile")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Private Tuition Teachers")]),_v(" "),_c('li',[_v("has a need to manage a significant number of students")]),_v(" "),_c('li',[_v("Teaches multiple subjects")]),_v(" "),_c('li',[_v("prefer desktop apps over other types")]),_v(" "),_c('li',[_v("can type fast")]),_v(" "),_c('li',[_v("prefers typing to mouse interactions")]),_v(" "),_c('li',[_v("is reasonably comfortable using CLI apps")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Value proposition")]),_v(": Helps private tuition teachers manage their students more easily. Faster access and storage of students’ contacts and data than a typical mouse/GUI driven app, provides better time management and productivity. The app will help to manage students for a single tuition teacher only. The app will only provide simple student analytics (without detailed student progress analysis).")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"user-stories"}},[_v("User stories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-stories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Priorities: High (must have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")]),_v(", Medium (nice to have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")]),_v(", Low (unlikely to have) - "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Priority")]),_v(" "),_c('th',[_v("As a …​")]),_v(" "),_c('th',[_v("I want to …​")]),_v(" "),_c('th',[_v("So that I can…​")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("see usage instructions")]),_v(" "),_c('td',[_v("refer to instructions when I forget how to use the App")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("purge all existing sample data")]),_v(" "),_c('td',[_v("get rid of the experimental data when exploring the app")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("lazy tutor")]),_v(" "),_c('td',[_v("add students by name")]),_v(" "),_c('td',[_v("include new students into our app")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("delete a person")]),_v(" "),_c('td',[_v("remove entries that I no longer need")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("find a student by name or subject")]),_v(" "),_c('td',[_v("locate details of persons without having to go through the entire list")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("tutor")]),_v(" "),_c('td',[_v("update my students details as they progress through learning in remarks")]),_v(" "),_c('td',[_v("keep track of their information e.g. test scores")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("tutor")]),_v(" "),_c('td',[_v("quickly edit student details")]),_v(" "),_c('td',[_v("save time re-adding students if I have added the wrong details by accident")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("flexible tutor")]),_v(" "),_c('td',[_v("edit my student’s lesson timings")]),_v(" "),_c('td',[_v("accommodate any changes in timing requested by them")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("private tutor")]),_v(" "),_c('td',[_v("install the app on my device with one click")]),_v(" "),_c('td',[_v("use the app with ease without much trouble building the environment")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("private tutor")]),_v(" "),_c('td',[_v("see a specific student’s data from the contact list")]),_v(" "),_c('td',[_v("get a more concise and detailed view of the student")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("hide private contact details")]),_v(" "),_c('td',[_v("minimize chance of someone else seeing them by accident")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("efficient tutor")]),_v(" "),_c('td',[_v("add lessons to my schedule quickly")]),_v(" "),_c('td',[_v("maximize my time usage")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("tutor")]),_v(" "),_c('td',[_v("see my teaching schedule")]),_v(" "),_c('td',[_v("complete lesson preparation that is catered to the student before tuition sessions")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("efficient tutor")]),_v(" "),_c('td',[_v("filter lessons to view lessons on a specific dates")]),_v(" "),_c('td',[_v("plan my activities with the free time that is not occupied by lessons.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("tutor")]),_v(" "),_c('td',[_v("link students to a lesson")]),_v(" "),_c('td',[_v("prepare for the lesson according to the students' weaknesses and strengths.")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("forgetful tutor")]),_v(" "),_c('td',[_v("include certain tasks to do for each lesson")]),_v(" "),_c('td',[_v("remember to do them in preparation for the tuition lesson")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("regular app user")]),_v(" "),_c('td',[_v("hide information that is not relevant to me currently")]),_v(" "),_c('td',[_v("have a cleaner User Interface")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-cases"}},[_v("Use cases"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-cases","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("(For all use cases below, the "),_c('strong',[_v("System")]),_v(" is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TutorMate")]),_v(" and the "),_c('strong',[_v("Actor")]),_v(" is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tutor")]),_v(", unless specified otherwise)")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-install-the-app-uc01"}},[_v("Use case: Install the app [UC01]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-install-the-app-uc01","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User executes the installation package")]),_v(" "),_c('li',[_v("The app asks to continue or cancel the installation")]),_v(" "),_c('li',[_v("User responds by indicating continue")]),_v(" "),_c('li',[_v("The app installs the app")]),_v(" "),_c('li',[_v("The app informs the user that the installation is successful\nUse Case ends")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("3a. User responds by indicating cancel")]),_v(" "),_c('ul',[_c('li',[_v("3a1. The app closes the installation package")]),_v(" "),_c('li',[_v("Use case ends")])])]),_v(" "),_c('li',[_c('p',[_v("4a. An error occurs during installation")]),_v(" "),_c('ul',[_c('li',[_v("4a1. The app informs the user that the installation is unsuccessful and displays reasons")]),_v(" "),_c('li',[_v("Use case ends")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-add-a-student-uc02"}},[_v("Use case: Add a student [UC02]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-add-a-student-uc02","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User has installed the app")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User chooses to add a new student.")]),_v(" "),_c('li',[_v("User enters the required details to create a student.")]),_v(" "),_c('li',[_v("TutorMate creates the student.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("2a. Student's name is not specified and / or details specified are incorrect.\n"),_c('ul',[_c('li',[_v("2a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("2a2. The user enters new data.")]),_v(" "),_c('li',[_v("Use case resumes from step 2.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-delete-a-student-uc03"}},[_v("Use case: Delete a student [UC03]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-delete-a-student-uc03","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to list students.")]),_v(" "),_c('li',[_v("TutorMate shows a list of persons.")]),_v(" "),_c('li',[_v("User requests to delete a specific person in the list.")]),_v(" "),_c('li',[_v("TutorMate deletes the person.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("2a. The list is empty (No students in student list).\nUse case ends.")]),_v(" "),_c('li',[_v("3a. The given index is invalid.\n"),_c('ul',[_c('li',[_v("3a1. TutorMate shows an error message.\nUse case resumes at step 2.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-show-a-student-uc04"}},[_v("Use case: Show a student [UC04]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-show-a-student-uc04","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to list students.")]),_v(" "),_c('li',[_v("TutorMate shows a list of students.")]),_v(" "),_c('li',[_v("User requests to see the details of a specific student.")]),_v(" "),_c('li',[_v("TutorMate shows the student.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("2a. The list is empty (No students found).\nUse case ends.")]),_v(" "),_c('li',[_v("3a. The given index is invalid.\n"),_c('ul',[_c('li',[_v("3a1. TutorMate shows an error message.\nUse case resumes at step 2.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-find-and-amp-see-a-student-with-their-details-uc05"}},[_v("Use case: Find & see a student with their details [UC05]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-find-and-amp-see-a-student-with-their-details-uc05","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to find a student by a specific characteristic e.g. Name.")]),_v(" "),_c('li',[_v("TutorMate shows a list of students that matches the user's input.")]),_v(" "),_c('li',[_v("User "),_c('u',[_v("shows a student (UC04)")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("2a. The list is empty (No students found that matches the user's input).\n"),_c('br'),_v(" Use case ends.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-edit-a-student-s-details-uc06"}},[_v("Use case: Edit a student's details [UC06]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-edit-a-student-s-details-uc06","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to list students.")]),_v(" "),_c('li',[_v("TutorMate shows the student list.")]),_v(" "),_c('li',[_v("User chooses to edit a student and enters the data.")]),_v(" "),_c('li',[_v("TutorMate edits the student's details.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("3a. Some details are incorrect/ overlapping with existing app data.\n"),_c('ul',[_c('li',[_v("3a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3a2. The user enters new data.")]),_v(" "),_c('li',[_v("Use case resumes from step 3.")])])]),_v(" "),_c('li',[_v("3b. The given index is invalid.\n"),_c('ul',[_c('li',[_v("3b1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3b2. The user enters new data.")]),_v(" "),_c('li',[_v("Use case resumes from step 3.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-add-a-lesson-uc07"}},[_v("Use case: Add a lesson [UC07]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-add-a-lesson-uc07","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to list schedule.")]),_v(" "),_c('li',[_v("TutorMate shows the schedule list.")]),_v(" "),_c('li',[_v("User enters the required details to create a lesson.")]),_v(" "),_c('li',[_v("TutorMate creates the lesson.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("3a. Lesson's name is not specified and / or details specified are incorrect.\n"),_c('ul',[_c('li',[_v("3a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3a2. The user enters new data.")]),_v(" "),_c('li',[_v("Use case resumes from step 3.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-add-a-task-to-a-lesson-uc08"}},[_v("Use case: Add a task to a lesson [UC08]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-add-a-task-to-a-lesson-uc08","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to list schedule.")]),_v(" "),_c('li',[_v("TutorMate shows the schedule list.")]),_v(" "),_c('li',[_v("User enters the required details to create a task to a lesson.")]),_v(" "),_c('li',[_v("TutorMate creates the task in the task list of the lesson.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("2a. The list is empty (No lessons in schedule list).\nUse case ends.")]),_v(" "),_c('li',[_v("3a. Description details are missing/ overlapping with existing app data.\n"),_c('ul',[_c('li',[_v("3a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3a2. The user enters new data.")]),_v(" "),_c('li',[_v("Use case resumes from step 3.")])])]),_v(" "),_c('li',[_v("3b. The given index is invalid.\n"),_c('ul',[_c('li',[_v("3b1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3b2. The user enters new data.")]),_v(" "),_c('li',[_v("Use case resumes from step 3.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-delete-a-task-to-a-lesson-uc09"}},[_v("Use case: Delete a task to a lesson [UC09]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-delete-a-task-to-a-lesson-uc09","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to list schedule.")]),_v(" "),_c('li',[_v("TutorMate shows the schedule list.")]),_v(" "),_c('li',[_v("User requests to see the details of a lesson.")]),_v(" "),_c('li',[_v("TutorMate shows the lesson.")]),_v(" "),_c('li',[_v("User requests to delete a specific task in the lesson.")]),_v(" "),_c('li',[_v("TutorMate deletes the task.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("2a. The list is empty (No lessons in schedule list).\nUse case ends.")]),_v(" "),_c('li',[_v("3a. The given lesson index is invalid.\n"),_c('ul',[_c('li',[_v("3a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3a2. The user enters new data.")]),_v(" "),_c('li',[_v("Use case resumes from step 3.")])])]),_v(" "),_c('li',[_v("5a. The given task index is invalid.\n"),_c('ul',[_c('li',[_v("3a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3a2. The user enters new data.")]),_v(" "),_c('li',[_v("Use case resumes from step 5.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"non-functional-requirements"}},[_v("Non-Functional Requirements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#non-functional-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Should work on any Windows, Linux, and MacOs as long as it has Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed.")]),_v(" "),_c('li',[_v("Should be able to hold up to 1000 persons without a noticeable(> 1 second) sluggishness in performance for typical usage.")]),_v(" "),_c('li',[_v("A user with above average typing speed for regular English text (i.e. not code, not system admin commands) should be able to accomplish most of the tasks faster using commands than using the mouse.")]),_v(" "),_c('li',[_v("The application should respond and load all data within three seconds.")]),_v(" "),_c('li',[_v("The response time for adding, updating, or deleting student records should be within two seconds.")]),_v(" "),_c('li',[_v("The system should be usable with a user interface that is intuitive enough for users who have not used similar applications before.")]),_v(" "),_c('li',[_v("Users will only have access to their own students' data.")]),_v(" "),_c('li',[_v("Should there be an irregular termination of the app, the data should not be corrupted.")]),_v(" "),_c('li',[_v("The app should respond to user text input within 0.2 second.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Private contact detail")]),_v(": A contact detail that is not meant to be shared with others")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-instructions-for-manual-testing"}},[_c('strong',[_v("Appendix: Instructions for manual testing")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-instructions-for-manual-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"launch-and-shutdown"}},[_v("Launch and shutdown"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#launch-and-shutdown","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Initial launch")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Download the jar file and copy into an empty folder")])]),_v(" "),_c('li',[_c('p',[_v("Double-click the jar file Expected: Shows the GUI with a set of sample contacts. The window size may not be optimum.")])])])]),_v(" "),_c('li',[_c('p',[_v("Saving window preferences")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Resize the window to an optimum size. Move the window to a different location. Close the window.")])]),_v(" "),_c('li',[_c('p',[_v("Re-launch the app by double-clicking the jar file."),_c('br'),_v("\nExpected: The most recent window size and location is retained.")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("{ more test cases …​ }")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-person"}},[_v("Deleting a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Deleting a person while all persons are being shown")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Prerequisites: List all persons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command. Multiple persons in the list.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_c('br'),_v("\nExpected: First contact is deleted from the list. Details of the deleted contact shown in the status message. Timestamp in the status bar is updated.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 0")]),_c('br'),_v("\nExpected: No person is deleted. Error details shown in the status message. Status bar remains the same.")])]),_v(" "),_c('li',[_c('p',[_v("Other incorrect delete commands to try: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete x")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("...")]),_v(" (where x is larger than the list size)"),_c('br'),_v("\nExpected: Similar to previous.")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("{ more test cases …​ }")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-data"}},[_v("Saving data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Dealing with missing/corrupted data files")]),_v(" "),_c('ol',[_c('li',[_v("If a missing file is detected, the system will automatically create a .json file.")]),_v(" "),_c('li',[_v("If a corrupted file is detected (i.e. missing any key properties), the system will delete the corrupted file, and replace it with a new one.")]),_v(" "),_c('li',[_v("The .json file will be populated with sample content loaded from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SampleDataUtil.java")]),_v(".")])])]),_v(" "),_c('li',[_c('p',[_v("Saving")]),_v(" "),_c('ol',[_c('li',[_v("Data is written to the file after every command.")])])]),_v(" "),_c('li',[_c('p',[_v("Test cases")])])])}
}];
  