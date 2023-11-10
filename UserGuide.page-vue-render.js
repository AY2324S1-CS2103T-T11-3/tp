
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("TutorMate")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2324S1-CS2103T-T11-3/tp","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('br'),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('p',[_v("TutorMate is a desktop app targeted to tuition teachers for managing contacts of tuition students.")]),_v(" "),_c('p',[_v("It is optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI). If you can type fast, TutorMate can get your administrative tasks done faster than traditional GUI apps.")]),_v(" "),_m(1),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(2),_v(" "),_m(3),_v(" "),_c('hr'),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('hr'),_v(" "),_m(6),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Notes about the command format:")]),_c('br')]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Words in upper case are compulsory parameters to be supplied by the user."),_c('br'),_v("\ne.g. in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" is a parameter which can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name Leah")]),_v(".\nIn this case, \"Leah\" is substituted for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items in square brackets are optional."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list [LIST] [KEYWORDS]")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" or as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students email")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Flags can be in any order."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-name NAME -phone PHONE_NUMBER")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-phone PHONE_NUMBER -name NAME")]),_v(" is also acceptable.")])]),_v(" "),_c('li',[_c('p',[_v("Extraneous parameters for commands that do not take in parameters (such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(") will be ignored."),_c('br'),_v("\ne.g. if the command entered is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help 123")]),_v(", it will be interpreted as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("If you are using a PDF version of this document, be careful when copying and pasting commands that span multiple lines as space characters surrounding line-breaks may be omitted when copied over to the application.")])])])]),_v(" "),_m(7),_v(" "),_c('p',[_v("Shows a message explaining how to access the help page.")]),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('p',[_v("The list command has different behaviours depending on the keywords given.\nLists all the students, lessons and tasks saved in the application, with students list having optional specified information through space-separated keywords.")]),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('p',[_v("Acceptable values for the keywords:")]),_v(" "),_m(19),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(20),_v(" "),_c('p',[_v("Success Output:")]),_v(" "),_m(21),_v(" "),_c('p',[_v("Notes")]),_v(" "),_m(22),_v(" "),_c('p',[_v("Failure Output:")]),_v(" "),_m(23),_v(" "),_m(24),_m(25),_v(" "),_m(26),_v(" "),_m(27),_v(" "),_c('p',[_v("Explanation of fields that can be filtered")]),_v(" "),_m(28),_c('p',[_v("Notes")]),_v(" "),_m(29),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(30),_v(" "),_c('p',[_v("Success Output:")]),_v(" "),_m(31),_v(" "),_c('p',[_v("Failure output:")]),_v(" "),_m(32),_v(" "),_m(33),_m(34),_v(" "),_c('p',[_v("The find command generally finds items by its exact name, but has different behaviours depending on the current list:")]),_v(" "),_m(35),_v(" "),_m(36),_v(" "),_c('p',[_v("Success Output:")]),_v(" "),_m(37),_v(" "),_m(38),_m(39),_v(" "),_m(40),_c('p',[_v("These are also counted as success outputs, since they can be a result of finding a valid search string (with no results):")]),_v(" "),_m(41),_v(" "),_m(42),_m(43),_v(" "),_m(44),_c('p',[_v("Failure Output:")]),_v(" "),_m(45),_m(46),_v(" "),_m(47),_v(" "),_m(48),_v(" "),_m(49),_v(" "),_m(50),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(51),_v(" "),_c('p',[_v("Success Output:")]),_v(" "),_m(52),_v(" "),_m(53),_m(54),_v(" "),_m(55),_v(" "),_m(56),_m(57),_v(" "),_m(58),_v(" "),_m(59),_m(60),_v(" "),_c('p',[_v("Failure Output:")]),_v(" "),_m(61),_m(62),_v(" "),_m(63),_v(" "),_c('p',[_v("Adds a student to the contact list in application.")]),_v(" "),_m(64),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("A student can have any number of unique tags (including 0)")]),_v(" "),_c('li',[_v("A new student cannot have the same name as existing students in the contact list.")]),_v(" "),_c('li',[_v("If the user is currently in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list (refer to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command "),_c('a',{attrs:{"href":"#listing-upcoming-lessons--tasks--students--list"}},[_v("here")]),_v("), the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(".")]),_v(" "),_c('li',[_v("For flags that can take multiple values (eg. -subject, -tag), separate the values with commas.")]),_v(" "),_c('li',[_v("Subjects can only be MATHEMATICS, PHYSICS, BIOLOGY, CHEMISTRY or ENGLISH.")]),_v(" "),_c('li',[_v("Tags must be alphanumeric. '-', ',' and spaces are not allowed.")]),_v(" "),_c('li',[_v("Duplicate phone numbers are allowed, since it is possible for 2 children to use their parent's number.")])])]),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(65),_v(" "),_c('p',[_v("Success Output:")]),_v(" "),_m(66),_v(" "),_m(67),_m(68),_v(" "),_c('p',[_v("Failure Output:")]),_v(" "),_m(69),_v(" "),_m(70),_m(71),_v(" "),_m(72),_v(" "),_c('p',[_v("Edits an existing student in the application.")]),_v(" "),_m(73),_v(" "),_m(74),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(75),_v(" "),_m(76),_v(" "),_m(77),_v(" "),_m(78),_v(" "),_m(79),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("If the user is currently in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list (refer to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command "),_c('a',{attrs:{"href":"#listing-upcoming-lessons--tasks--students--list"}},[_v("here")]),_v("), the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(".")])])]),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(80),_v(" "),_c('p',[_v("Success Output:")]),_v(" "),_m(81),_v(" "),_m(82),_m(83),_v(" "),_c('p',[_v("Failure Output:")]),_v(" "),_m(84),_v(" "),_m(85),_m(86),_v(" "),_m(87),_v(" "),_c('p',[_v("Adds a lesson to the schedule list in application.")]),_v(" "),_m(88),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("A new lesson cannot have the same name as existing lessons in the schedule list.")]),_v(" "),_c('li',[_v("A new lesson cannot have overlapping timings with existing lessons in the schedule list.")]),_v(" "),_c('li',[_v("Start time cannot be after end time.")]),_v(" "),_c('li',[_v("If the user is currently in list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(", the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")])]),_v(" "),_c('li',[_v("Only one subject can be assigned to a lesson.")]),_v(" "),_c('li',[_v("Subjects can only be MATHEMATICS, PHYSICS, BIOLOGY, CHEMISTRY or ENGLISH.")])])]),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(89),_v(" "),_c('p',[_v("Success Output:")]),_v(" "),_m(90),_c('p',[_v("Failure Output:")]),_v(" "),_m(91),_m(92),_v(" "),_c('p',[_v("Edits an existing lesson in the application.")]),_v(" "),_m(93),_v(" "),_m(94),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(95),_v(" "),_c('p',[_v("Success output:")]),_v(" "),_m(96),_c('p',[_v("Failure Output:")]),_v(" "),_m(97),_m(98),_v(" "),_m(99),_v(" "),_m(100),_v(" "),_m(101),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("If the user is currently in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list (refer to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command "),_c('a',{attrs:{"href":"#listing-upcoming-lessons--tasks--students--list"}},[_v("here")]),_v("), the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(".")])])]),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(102),_v(" "),_c('p',[_v("Success Output:")]),_v(" "),_m(103),_v(" "),_m(104),_m(105),_v(" "),_c('p',[_v("Failure Output:")]),_v(" "),_m(106),_v(" "),_m(107),_m(108),_v(" "),_m(109),_v(" "),_c('p',[_v("Adds a task to the specified lesson.")]),_v(" "),_m(110),_v(" "),_m(111),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(112),_v(" "),_c('p',[_v("Success Output:")]),_v(" "),_m(113),_c('p',[_v("Failure Output:")]),_v(" "),_m(114),_m(115),_m(116),_m(117),_v(" "),_c('p',[_v("Deletes the specified task from the shown lesson in the application.")]),_v(" "),_m(118),_v(" "),_m(119),_v(" "),_c('p',[_v("Examples:")]),_v(" "),_m(120),_v(" "),_c('p',[_v("Success Output:")]),_v(" "),_m(121),_c('p',[_v("Failure Output:")]),_v(" "),_m(122),_m(123),_c('p',[_v("If no lesson is shown:")]),_v(" "),_m(124),_m(125),_v(" "),_m(126),_v(" "),_m(127),_v(" "),_m(128),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("A lesson can have multiple students, and a student can have multiple lessons. Just run the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo")]),_v(" command multiple times.")]),_v(" "),_c('li',[_v("As of now, you cannot unlink a student from a lesson and vice versa. Use caution when running the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo")]),_v(" command.")]),_v(" "),_c('li',[_v("To link a lesson to a student, the lesson must first be selected. To link a student to a lesson, the student must first be selected.")])])]),_v(" "),_m(129),_v(" "),_m(130),_v(" "),_m(131),_v(" "),_m(132),_v(" "),_m(133),_v(" "),_m(134),_v(" "),_m(135),_m(136),_v(" "),_m(137),_m(138),_v(" "),_m(139),_m(140),_v(" "),_c('p',[_v("After linking students to lessons or vice versa, you can \"navigate\" between the student and their linked lessons, or the lesson and its linked students.\nThis comes in handy when you want to view the details of students in a lesson, or see what lessons a student has upcoming.")]),_v(" "),_m(141),_v(" "),_m(142),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("The lesson (or student) must have at least one linked student (or lesson) for the command to work.")])])]),_v(" "),_m(143),_v(" "),_m(144),_v(" "),_m(145),_v(" "),_m(146),_v(" "),_m(147),_v(" "),_m(148),_v(" "),_m(149),_v(" "),_m(150),_v(" "),_m(151),_v(" "),_m(152),_v(" "),_m(153),_m(154),_v(" "),_m(155),_v(" "),_m(156),_v(" "),_m(157),_m(158),_v(" "),_m(159),_v(" "),_m(160),_v(" "),_m(161),_m(162),_v(" "),_m(163),_v(" "),_c('p',[_v("The command history feature allows you to retrieve previously typed commands into the command text box.\nCycle through the command history using the up and down arrows.\nUse the up arrow to go back to previous commands, and down arrow to go to next commands.")]),_v(" "),_c('p',[_v("Example:")]),_v(" "),_m(164),_v(" "),_m(165),_v(" "),_c('p',[_v("Command history is only valid per session, it does not save into storage.\nInvalid commands are also saved into command history.\nRetrieved commands will replace the existing text in command box.")]),_v(" "),_c('p',[_v("To start navigating the command history, press the up or down arrow, which will point and return the most recent command text (for invalid commands, it will retrieve it again since it is also saved, hence it will not change the command text yet).\nPress up or down to navigate through the history, going beyond the command history will retrieve the oldest or newest command text respectively.\nDuring each successful command execution, the pointer resets again, hence pressing the up or down arrow will point and return the most recent command text.")]),_v(" "),_m(166),_v(" "),_m(167),_v(" "),_m(168),_v(" "),_c('p',[_v("Exits the program.")]),_v(" "),_m(169),_v(" "),_m(170),_v(" "),_c('p',[_v("Clears the program data.")]),_v(" "),_m(171),_v(" "),_m(172),_v(" "),_c('p',[_v("TutorMate data is saved in the hard disk automatically after any command that changes the data. There is no need to save manually.")]),_v(" "),_m(173),_v(" "),_m(174),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_c('strong',[_v("Caution:")]),_v("\nIf your changes to the data file makes its format invalid, TutorMate will discard all data and start with an empty data file at the next run.  Hence, it is recommended to take a backup of the file before editing it.")])]),_v(" "),_c('hr'),_v(" "),_m(175),_v(" "),_m(176),_v(" "),_c('hr'),_v(" "),_m(177),_v(" "),_m(178),_v(" "),_c('hr'),_v(" "),_m(179),_v(" "),_m(180),_v(" "),_m(181)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#tutormate-user-guide"}},[_v("TutorMate User Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#about"}},[_v("About‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#quick-start"}},[_v("Quick start‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#features"}},[_v("Features‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#viewing-help-help"}},[_v("Viewing help : help‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#listing-upcoming-lessons-tasks-students-list"}},[_v("Listing upcoming lessons / tasks / students : list‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#filtering-the-lesson-student-list"}},[_v("Filtering the lesson / student list‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#locating-students-lessons-by-name-find"}},[_v("Locating students/lessons by name: find‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#showing-a-lesson-task-student-s-details-show"}},[_v("Showing a lesson / task / student's details : show‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#adding-a-student-addperson"}},[_v("Adding a student : addPerson‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#editing-a-student-editperson"}},[_v("Editing a student : editPerson‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#deleting-a-student-deleteperson"}},[_v("Deleting a student : deletePerson‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#adding-a-lesson-addlesson"}},[_v("Adding a Lesson : addLesson‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#editing-a-lesson-editlesson"}},[_v("Editing a lesson : editLesson‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#deleting-a-lesson-deletelesson"}},[_v("Deleting a lesson : deleteLesson‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#adding-a-task-addtask"}},[_v("Adding a task : addTask‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#deleting-a-task-deletetask"}},[_v("Deleting a task : deleteTask‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#linking-students-to-lessons"}},[_v("Linking students to lessons‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#viewing-the-linked-students-of-a-lesson-or-the-linked-lessons-of-a-student-nav"}},[_v("Viewing the linked students of a lesson, or the linked lessons of a student : nav‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-history"}},[_v("Command history‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#exiting-the-program-exit"}},[_v("Exiting the program : exit‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#clearing-data-clear"}},[_v("Clearing data : clear‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#saving-the-data"}},[_v("Saving the data‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#editing-the-data-file"}},[_v("Editing the data file‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#faq"}},[_v("FAQ‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#known-issues"}},[_v("Known issues‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-summary"}},[_v("Command summary‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"tutormate-user-guide"}},[_v("TutorMate User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tutormate-user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("This project is based on the "),_c('a',{attrs:{"href":"https://se-education.org"}},[_v("AddressBook-Level3 project")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"about"}},[_v("About"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#about","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("This document describes the main features of TutorMate. The main features of TutorMate are the Student Management\nSystem, Schedule of Lessons and Task List of each lesson.\nWith a customised student list and schedule in TutorMate just for you, organising lessons and managing students\nwill be the least of your worries.\n"),_c('br'),_v(" "),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/about.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/about.png","alt":"Ui"}})])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"quick-start"}},[_v("Quick start"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quick-start","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed in your Computer.")])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tutormate.jar")]),_v(" from "),_c('a',{attrs:{"href":"https://github.com/AY2324S1-CS2103T-T11-3/tp/releases"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the file to the folder you want to use as the "),_c('em',[_v("home folder")]),_v(" for your TutorMate.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" into the folder you put the jar file in, and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar tutormate.jar")]),_v(" command to run the application."),_c('br'),_v("\nA GUI similar to the below should appear in a few seconds. Note how the app contains some sample data."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/Ui.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/Ui.png","alt":"Ui"}})])])]),_v(" "),_c('li',[_c('p',[_v("Type the command in the command box and press Enter to execute it. e.g. typing "),_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])]),_v(" and pressing Enter will open the help window."),_c('br'),_v("\nSome example commands you can try:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" : Lists all students with their "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("In list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name Leah")]),_v(" : Adds a student named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Leah")]),_v(" to the application.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 3")]),_v(" : Shows the details of the person with the index 3 in TutorMate.")])])])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" : Exits the app.")])])])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#features"}},[_v("Features")]),_v(" below for details of each command.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"viewing-help-help"}},[_v("Viewing help : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#viewing-help-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/helpMessage.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/helpMessage.png","alt":"help message"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"listing-upcoming-lessons-tasks-students-list"}},[_v("Listing upcoming lessons / tasks / students : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#listing-upcoming-lessons-tasks-students-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list [LIST] [KEYWORDS]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Shows the list and associated detail panel for the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[LIST]")]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[LIST]")]),_v(" is case-insensitive: e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("students")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("stuDEnts")]),_v(" are all valid.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[KEYWORDS]")]),_v(" is for which specifying student details to display, and is only valid for students list.")]),_v(" "),_c('li',[_v("Keyword specifiers for students list is "),_c('strong',[_v("case-sensitive")]),_v(": "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("subjects")]),_v(" is valid, but "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SUBJECTS")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SubJEcts")]),_v(" are not.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("To show the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")])]),_v(" "),_c('li',[_v("By default, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" will also show the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list and list all the lessons with their lesson name.")]),_v(" "),_c('li',[_v("This is also the default view when you first open the application.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("To show the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASKS")]),_v(" list:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(" "),_c('ul',[_c('li',[_v("displays all the tasks with their description.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("To show the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students [KEYWORDS]")]),_v(" "),_c('ul',[_c('li',[_v("displays all the students with their name in alphabetical order.")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[KEYWORDS]")]),_v(" allows for an optional list of valid (case-sensitive) space-separated information of the student to be displayed.")])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("phone")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("email")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("address")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tags")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("subjects")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("remark")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("none")]),_v(" (resets to only showing student names)")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("all")]),_v(" (shows all student detail fields)")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(" displays the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list with all the lessons with their names in time order.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" displays all the students with their names (including previously specified fields).")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students subjects")]),_v(" displays all the students with their names and a list of subjects for each student.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students subjects email")]),_v(" displays all the students with their names, a list of subjects for each student and their email.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(" displays all the tasks with their description.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("For the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(":\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Showing list SCHEDULE")]),_v(" "),_c('a',{attrs:{"href":"/tp/images/list/list_schedule_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/list/list_schedule_positive.png","alt":"Success for list SCHEDULE"}})])]),_v(" "),_c('li',[_v("For the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" (with no additional student details):\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Showing list STUDENT")]),_v(" "),_c('a',{attrs:{"href":"/tp/images/list/list_student_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/list/list_student_positive.png","alt":"Success for list STUDENTS"}})])]),_v(" "),_c('li',[_v("For the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Showing list TASK")]),_v(" "),_c('a',{attrs:{"href":"/tp/images/list/list_tasks_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/list/list_tasks_positive.png","alt":"Success for list STUDENTS"}})])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If there are no entries, e.g. there are no students added yet or there are no tasks added yet, an empty list is displayed.\n"),_c('a',{attrs:{"href":"/tp/images/list/list_tasks_empty.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/list/list_tasks_empty.png","alt":"Empty list"}})])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When there are invalid keywords specified as a parameter:")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("  list: Displays the specified list, which can be a STUDENTS list, SCHEDULE list or TASKS list. Default command without specified list displays the schedule list. When specifying STUDENTS list, optional parameters can be used to specify what student details to display.\n")]),_c('span',[_v("  Parameters: [LIST] [KEYWORDS]...\n")]),_c('span',[_v("  Example: list schedule\n")]),_c('span',[_v("  Example: list students phone email\n")]),_c('span',[_v("  Example: list tasks\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"filtering-the-lesson-student-list"}},[_v("Filtering the lesson / student list"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filtering-the-lesson-student-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("You can filter the list of lessons (obtained by typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(") or the list of students (obtained by typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(").\nThe filter command will show only the relevant entries that match the entered flags and values.\nThe filter command has different supported filter properties depending on the current list (refer to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command "),_c('a',{attrs:{"href":"#listing-upcoming-lessons--tasks--students--list"}},[_v("here")]),_v("):")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list:\n"),_c('ul',[_c('li',[_v("Shows a list of lessons that match the provided filters")]),_v(" "),_c('li',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter [-name NAME] [-subject SUBJECT] [-before DATE] [-on DATE] [-after DATE] [-remark REMARK]")])]),_v(" "),_c('li',[_v("Note: Only one of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-before")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-on")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-after")]),_v(" can be used at once. For example, you cannot use both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-before")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-after")]),_v(" in the same filter command.\n"),_c('ul',[_c('li',[_v("Allowed: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -before 2022/10/10")])]),_v(" "),_c('li',[_v("Not allowed: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -before 2022/10/10 -after 2022/01/01")])])])])])]),_v(" "),_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list:\n"),_c('ul',[_c('li',[_v("Shows a list of students that match the provided filters")]),_v(" "),_c('li',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter [-name NAME] [-subject SUBJECT] [-tag TAG] [-remark REMARK]")])])])])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Flag")]),_v(" "),_c('th',[_v("Used when showing...")]),_v(" "),_c('th',[_v("Filter results")]),_v(" "),_c('th',[_v("Example")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("-name")])]),_v(" "),_c('td',[_v("Students, Schedule")]),_v(" "),_c('td',[_v("Lessons or students whose name partially or fully matches the name entered")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -name John")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("-subject")])]),_v(" "),_c('td',[_v("Students, Schedule")]),_v(" "),_c('td',[_v("Lessons or students that have the specified subject. Valid values: MATHEMATICS, PHYSICS, BIOLOGY, CHEMISTRY or ENGLISH.")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -subject Mathematics")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("-before")])]),_v(" "),_c('td',[_v("Schedule")]),_v(" "),_c('td',[_v("Lessons that occur before (not including) the specified date. Valid input formats: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("YYYY/MM/DD")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("YY/MM/DD")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MM/DD")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DD")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -before 2023/12/01")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -before 23/12/01")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -before 12/01")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -before 1")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("-on")])]),_v(" "),_c('td',[_v("Schedule")]),_v(" "),_c('td',[_v("Lessons that occur on the specified date. Valid input formats: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("YYYY/MM/DD")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("YY/MM/DD")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MM/DD")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DD")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -on 2023/12/01")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -on 23/12/01")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -on 12/01")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -on 1")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("-after")])]),_v(" "),_c('td',[_v("Schedule")]),_v(" "),_c('td',[_v("Lessons that occur after (not including) the specified date. Valid input formats: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("YYYY/MM/DD")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("YY/MM/DD")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MM/DD")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DD")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -after 2023/12/01")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -after 23/12/01")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -after 12/01")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -after 1")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("-remark")])]),_v(" "),_c('td',[_v("Students, Schedule")]),_v(" "),_c('td',[_v("Lessons or students whose remarks partially or fully matches the remark entered")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -remark assistance")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("-tag")])]),_v(" "),_c('td',[_v("Students")]),_v(" "),_c('td',[_v("Students who have at least one tag that fully matches the tag name entered")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -tag primary")])])])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When filtering, all text is case-insensitive. That is, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -name LEAH")]),_v(" is the same as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -name leah")]),_v(".")]),_v(" "),_c('li',[_v("You can filter by any number of flags, and in any order.")]),_v(" "),_c('li',[_v("To reset the filter (view all students / lessons), type "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -name CS2103T -before 2023/12/11")])])])]),_v(" "),_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(" list:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -name Alex -tag primary -subject Mathematics")])])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("For the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -name Alex -tag primary -subject Mathematics")]),_v(" in the "),_c('em',[_v("Student List")]),_v(" with all detail fields shown\n"),_c('a',{attrs:{"href":"/tp/images/filter/filter_positive_1.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/filter/filter_positive_1.png","alt":"Success for filter 1"}})])]),_v(" "),_c('li',[_v("For the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -name Alex -tag secondary")]),_v(" (No such students matching the filter found)\n"),_c('a',{attrs:{"href":"/tp/images/filter/filter_positive_2.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/filter/filter_positive_2.png","alt":"Success for filter 2"}})])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When there are invalid values specified in the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -on 2/2/2")]),_v(" (invalid date format)\n"),_c('a',{attrs:{"href":"/tp/images/filter/filter_negative_1.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/filter/filter_negative_1.png","alt":"Error for filter"}})])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid lesson format: 2/2/2 is not a valid date, please use yyyy/mm/dd or mm/dd or dd\n")]),_c('span',[_v("for example, assume today is 2023/11/3, to add 2023/11/29, could use 29, 11/29, 2023/11/29 or 23/11/29. \n")]),_c('span',[_v("Usage: filter -(any number of unique -[name|subject|before|on|after|remark] [value]). \n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"locating-students-lessons-by-name-find"}},[_v("Locating students/lessons by name: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#locating-students-lessons-by-name-find","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find SEARCH_STRING")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list:")]),_v(" "),_c('ul',[_c('li',[_v("Finds lesson(s) whose names contain the given search string.")]),_v(" "),_c('li',[_v("The search is case-insensitive. e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("lesson")]),_v(" will match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Lesson")]),_v(".")]),_v(" "),_c('li',[_v("Lesson(s) with names containing the search string will be returned.\ne.g. Both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Lesson Chem")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sson Che")]),_v(" will return "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Lesson Chemistry")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Bishan Lesson Chem")]),_v(".")])])]),_v(" "),_c('li',[_c('p',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list:")]),_v(" "),_c('ul',[_c('li',[_v("Finds student(s) whose names contain the given search string.")]),_v(" "),_c('li',[_v("The search is case-insensitive. e.g "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hans")]),_v(" will match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")]),_v(".")]),_v(" "),_c('li',[_v("Student(s) with names containing the search string will be returned.\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")]),_v(" will return "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hanso Gruber")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Lee Hansel")]),_v(".")])])]),_v(" "),_c('li',[_c('p',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASKS")]),_v(" list:")]),_v(" "),_c('ul',[_c('li',[_v("Find tasks by name/description is disabled.")]),_v(" "),_c('li',[_v("Tasks can be found based on the lesson (find lesson by name) and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_v(" lesson to see task list of the lesson.")])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list:")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("2 lessons listed!\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list:")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("3 persons listed!\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list:")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("0 lessons listed!\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list:")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("0 persons listed!\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command format! \n")]),_c('span',[_v("find: Finds all persons or lesson whose names contains the specified search string (case-insensitive) and displays them as a list with index numbers.\n")]),_c('span',[_v("Parameter: SEARCH_STRING\n")]),_c('span',[_v("Example: find alex yeoh\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"showing-a-lesson-task-student-s-details-show"}},[_v("Showing a lesson / task / student's details : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#showing-a-lesson-task-student-s-details-show","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The show command has different behaviours depending on the current list (refer to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command "),_c('a',{attrs:{"href":"#listing-upcoming-lessons--tasks--students--list"}},[_v("here")]),_v("):")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list:\n"),_c('ul',[_c('li',[_v("Shows the details of the specified lesson from the schedule list in the application.")])])]),_v(" "),_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASKS")]),_v(" list:\n"),_c('ul',[_c('li',[_v("Shows the details of the specified task from the full task list in the application.")])])]),_v(" "),_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list:\n"),_c('ul',[_c('li',[_v("Shows the details of the specified student from the contact list in the application.")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Shows the details of the lesson/task/student at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed schedule/task/student list.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer between 0 and 99999")]),_v(" 1, 2, 3, …​")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list SCHEDULE")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 2")]),_v(" shows the details of the 2nd lesson in the schedule list.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find lesson1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" shows the details of the 1st lesson in the results of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command.")])])]),_v(" "),_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASKS")]),_v(" list:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list TASKS")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 2")]),_v(" shows the description of the 2nd task in the full task list.")])])]),_v(" "),_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list STUDENTS")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 2")]),_v(" shows the details of the 2nd student in the student list.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find Betsy")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" shows the details of the 1st student in the results of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command.")])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list:\n"),_c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")])])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Showing Lesson: Start: 12:30 PM; End: 2:30 PM\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/show/show_lesson_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/show/show_lesson_positive.png","alt":"Success for show 1"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASKS")]),_v(" list:\n"),_c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")])])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Showing Task: Description: Revise CS2103T Materials\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/show/show_task_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/show/show_task_positive.png","alt":"Success for show 1"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list:\n"),_c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")])])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Showing Person: Alex Yeoh; Phone: 87438807; Email: alexyeoh@example.com; Address: Blk 30 Geylang Street 29, #06-40; Subjects: BIOLOGYCHEMISTRY; Tags: [friends]; Remark: To be added\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/show/show_student_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/show/show_student_positive.png","alt":"Success for show 1"}})])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("  Invalid command format!\n")]),_c('span',[_v("  show: Shows the details of the item identified by the index number used in the last item listing.\n")]),_c('span',[_v("  Parameters: INDEX (must be a positive integer)\n")]),_c('span',[_v("  Example: show 1\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/show/show_negative.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/show/show_negative.png","alt":"failure for show"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-student-addperson"}},[_v("Adding a student : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-student-addperson","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name NAME [-phone PHONE_NUMBER] [-email EMAIL] [-address ADDRESS]  [-subject SUBJECT] [-tag TAG] [-remark REMARK]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name John -phone 91234567")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name John -phone 91234567 -email test@gmail.com -address 10 Kent Ridge Drive -subject MATHEMATICS")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name John -phone 91234567 -email test@gmail.com -address 10 Kent Ridge Drive -subject MATHEMATICS,PHYSICS -tag abc,cde,fgh")])]),_v(" "),_c('li',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list :\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name John -phone 91234567")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name John -phone 91234567 -email test@gmail.com -address 10 Kent Ridge Drive -subject MATHEMATICS")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name John -phone 91234567 -email test@gmail.com -address 10 Kent Ridge Drive -subject MATHEMATICS,PHYSICS -tag abc,cde,fgh")])])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name John -phone 91234567 -email test@gmail.com -address 10 Kent Ridge Drive -subject MATHEMATICS")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("New person added: John; Phone: 91234567; Email: test@gmail.com; Address: 10 Kent Ridge Drive; Subjects: MATHEMATICS; Tags: ; Remark: To be added\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/add-person/add_person_success.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/add-person/add_person_success.png","alt":"Success for addPerson"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid person format: Flag name not found. \n")]),_c('span',[_v("Usage: addPerson -name [NAME] (any number of unique -[phone|email|address|subject|tag|remark] [value]). \n")]),_c('span',[_v("For example, addPerson -name John -phone 91234567\n")]),_c('span',[_v("If you are currently displaying student list, you could use 'add' inplace of 'addPerson'. \n")]),_c('span',[_v("Note you must provide a 'name' not already in the address book.\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/add-person/add_person_failure.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/add-person/add_person_failure.png","alt":"Failure for addPerson"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-a-student-editperson"}},[_v("Editing a student : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-student-editperson","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson INDEX [-name NAME] [-phone PHONE_NUMBER] [-email EMAIL] [-address ADDRESS] [-subject SUBJECT] [-tag TAG] [-remark REMARK]")]),_v(" "),_c('br')])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Edits the student at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(". The index refers to the index number shown in the displayed student list. The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")]),_v(" "),_c('li',[_v("If the user is currently in list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(", the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit INDEX")])]),_v(" "),_c('li',[_v("If the user is currently in list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" with a student shown, the index can be omitted and the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(". The shown student will be edited.")]),_v(" "),_c('li',[_v("At least one of the optional fields must be provided.")]),_v(" "),_c('li',[_v("Existing values will be updated to the input values.")]),_v(" "),_c('li',[_v("For flags that can take multiple values (eg. -subject, -tag), separate the values with commas")]),_v(" "),_c('li',[_v("When editing subjects, tags and remarks, the existing subjects/tags/remarks of the student will be removed i.e. adding of subjects/tags/remarks is not cumulative.")]),_v(" "),_c('li',[_v("Subjects can only be MATHEMATICS, PHYSICS, BIOLOGY, CHEMISTRY or ENGLISH.")]),_v(" "),_c('li',[_v("Subjects stated are case-insensitive.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson 1 -phone 91234567 -email johndoe@example.com")]),_v(" "),_c('br'),_v(" Edits the phone number and email address of the 1st student to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("91234567")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("johndoe@example.com")]),_v(" respectively.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson 2 -name Betsy Crower -tag Secondary")]),_c('br'),_v(" Edits the name of the 2nd student to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Betsy Crower")]),_v(" and sets the tag to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Secondary")]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson 3 -subject chemistry, biology")]),_v(" "),_c('br'),_v(" Sets the subjects of the 3rd student to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CHEMISTRY")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("BIOLOGY")]),_v(".")]),_v(" "),_c('li',[_v("In list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(":\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 -name John -phone 91234567")]),_v(" "),_c('br'),_v(" Edits the name and phone number of the 1st student to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("John")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("91234567")]),_v(" respectively.")])])]),_v(" "),_c('li',[_v("In list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" and 2nd student is shown:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit -subject chemistry, english")]),_v(" "),_c('br'),_v(" Edits the subject of the 2nd lesson to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CHEMISTRY")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ENGLISH")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-student-deleteperson"}},[_v("Deleting a student : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-student-deleteperson","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Deletes a student in the contact list of the application. The command is case-insensitive: eg. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteperson")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DELETEPERSON")]),_v(" are all valid.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the student at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(" list.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson 1")])])]),_v(" "),_c('li',[_c('p',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(" list :")]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")])])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson 1")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Deleted Person: Alex Yeoh; Phone: 87438807; Email: alexyeoh@example.com; Address: Blk 30 Geylang Street 29, #06-40; Subjects: BIOLOGYCHEMISTRY; Tags: [friends]; Remark: To be added\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/delete-person/delete_person_success.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/delete-person/delete_person_success.png","alt":"Success for deletePerson"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command format! \n")]),_c('span',[_v("deleteperson: Deletes the entry identified by the index number used in the displayed list.\n")]),_c('span',[_v("Parameters: INDEX (must be a positive integer)\n")]),_c('span',[_v("Example: delete 1\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/delete-person/delete_person_failure.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/delete-person/delete_person_failure.png","alt":"Failure for deletePerson"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-lesson-addlesson"}},[_v("Adding a Lesson : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-lesson-addlesson","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name NAME [-start HH:MM] [-end HH:MM] [-day YYYY/MM/DD or YY/MM/DD or MM/DD or DD] [-subject SUBJECT]")]),_v(" "),_c('br'),_v("\nNote: If no year and month is specified, the year and month is assumed to be current year and month respectively.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name Chemistry Lesson at Bishan -start 14:00 -end 15:00 -day 2023/12/12 -subject MATHEMATICS")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name Lesson at Tai Seng -start 09:00 -end 11:00 -day 03/21 -subject PHYSICS")])]),_v(" "),_c('li',[_v("In list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(":\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name Lesson at Tai Seng -start 09:00 -end 11:00 -day 03/21 -subject PHYSICS")])])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("New lesson added: Lesson Chemistry Lesson at Bishan from 2:00 PM to 3:00 PM on 12-12-2023\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Exist lesson clashes with this lesson: Lesson Chemistry Lesson at Bishan from 2:00 PM to 3:00 PM on 12-12-2023\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-a-lesson-editlesson"}},[_v("Editing a lesson : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-lesson-editlesson","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson INDEX [-name NAME] [-start HH:MM] [-end HH:MM] [-day YYYY/MM/DD or YY/MM/DD or MM/DD or DD] [-subject SUBJECT]")]),_v(" "),_c('br'),_v("\nNote: If no year and month is specified, the year and month is assumed to be current year and month respectively.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Edits the lesson at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(". The index refers to the index number shown in the displayed schedule list. The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")]),_v(" "),_c('li',[_v("If the user is currently in list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(", the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit INDEX")])]),_v(" "),_c('li',[_v("If the user is currently in list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" with a lesson shown, the index can be omitted and the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(". The shown lesson will be edited.")]),_v(" "),_c('li',[_v("At least one of the optional fields must be provided.")]),_v(" "),_c('li',[_v("Existing values will be updated to the input values.")]),_v(" "),_c('li',[_v("Start time cannot be after end time.")]),_v(" "),_c('li',[_v("Editing the start and end time of a lesson that overlaps with another existing lesson is not allowed.")]),_v(" "),_c('li',[_v("Editing the name of a lesson to a name of another existing lesson is not allowed.")]),_v(" "),_c('li',[_v("Only one subject can be specified. For example, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson 2 -subject mathematics, biology")]),_v(" is not allowed.")]),_v(" "),_c('li',[_v("Subjects can only be MATHEMATICS, PHYSICS, BIOLOGY, CHEMISTRY or ENGLISH.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson 1 -name Lesson at Farrer Road -start 14:00 -end 15:00")]),_c('br'),_v(" Edits the lesson name, start and end time of the 1st lesson to be "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Lesson at Farrer Road")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("14:00")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("15:00")]),_v(" respectively.")]),_v(" "),_c('li',[_v("In list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(":\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 -start 14:00 -end 15:00")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 -name Chemistry lesson at Bedok")])])])]),_v(" "),_c('li',[_v("In list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" and a lesson is shown:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit -start 14:00 -end 15:00")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit -day 2023/12/30")])])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Edit success.\n")]),_c('span',[_v(" from: Lesson Lesson Tai Seng from 8:00 AM to 10:00 AM on 21-12-2023 for PHYSICS\n")]),_c('span',[_v(" to: Lesson Lesson Tai Seng from 9:00 AM to 11:00 AM on 21-12-2023 for PHYSICS\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid lesson format. Invalid lesson input:  is not a valid time. \n")]),_c('span',[_v("Usage: addLesson -name [NAME] (any number of unique -[subject|day|start|end|remark] [value]). \n")]),_c('span',[_v(" For example, addLesson -name John -subject English -day 23 -start 14:30 -end 16:30\n")]),_c('span',[_v(" If you are currently displaying schedule list, you could use 'add' inplace of 'addLesson'. \n")]),_c('span',[_v(" Note you must provide a 'name' not already in the schedule and 'start' must be before 'end'.\n")]),_c('span',[_v("Usage: edit <Index> (at least one of -[name|subject|day|start|end|remark] [value]). \n")]),_c('span',[_v("For example, edit 1 -name lesson2 -subject English -day 23/12 -start 14:30 -end 16:30\n")]),_c('span',[_v("If you want to edit the currently shown lesson, you could omit the index. \n")]),_c('span',[_v("Note your edited 'name' must not already in the schedule and 'start' must be before 'end'.\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-lesson-deletelesson"}},[_v("Deleting a lesson : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-lesson-deletelesson","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Deletes a lesson in the schedule list of the application. The command is case-insensitive: eg. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletelesson")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DELETELESSON")]),_v(" are all valid.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the lesson at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson 1")])])]),_v(" "),_c('li',[_c('p',[_v("In "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list :")]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")])])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson 1")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Deleted Lesson: Lesson lesson1 from 12:30 PM to 2:30 PM on 20-11-2023 for MATHEMATICS\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/delete-lesson/delete_lesson_success.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/delete-lesson/delete_lesson_success.png","alt":"Success for deleteLesson"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command format! \n")]),_c('span',[_v("deletelesson: Deletes the lesson identified by the index number used in the displayed schedule list.\n")]),_c('span',[_v("Parameters: INDEX (must be a positive integer)\n")]),_c('span',[_v("Example: deletelesson 1\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/delete-lesson/delete_lesson_failure.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/delete-lesson/delete_lesson_failure.png","alt":"Failure for deleteLesson"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"adding-a-task-addtask"}},[_v("Adding a task : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-task-addtask","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask LESSON_INDEX TASK_DESCRIPTION")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Adds the task to the lesson at specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LESSON_INDEX")]),_v(".")]),_v(" "),_c('li',[_v("Task description cannot be empty.")]),_v(" "),_c('li',[_v("If a lesson is shown, the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask")]),_v(" without "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LESSON_INDEX")]),_v(".")]),_v(" "),_c('li',[_v("A new task cannot have the same description as existing tasks in the task list of that specific lesson.")]),_v(" "),_c('li',[_v("The lesson index refers to the index number of the lesson shown in the displayed schedule list.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask 2 mark homework")]),_v(" adds a task to the second lesson in the schedule.")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("New task added to lesson with index 2: mark homework\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("No lesson with index 10!\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Lesson index has to be a positive value!\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Existing task with same task description with index dmnfdn!\n")]),_c('span',[_v("Usage: addTask/task + [lesson index] [description]. You could omit the lesson index when adding task to showing lesson.\n")]),_c('span',[_v("Example1: addtask 1 do homework\n")]),_c('span',[_v("Example2 (a lesson is shown): addtask do homeworkPlease note that there cannot be two tasks with the same description in any lesson.\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-task-deletetask"}},[_v("Deleting a task : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-task-deletetask","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask TASK_INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the task at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASK_INDEX")]),_v(" of the task list in shown lesson.")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed task list of the lesson.")]),_v(" "),_c('li',[_v("The index "),_c('strong',[_v("must be a positive integer")]),_v(" 1, 2, 3, …​")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask 2")]),_v(" deletes the 2nd task of the 1st lesson in the schedule list.")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Deleted Task: mark extra practice questions \n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Task index do not belong to any tasks!\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command format! \n")]),_c('span',[_v("deleteTask: Deletes the task identified by the task index from the currently displayed lesson.\n")]),_c('span',[_v("Parameters: task index (must be a positive integer)\n")]),_c('span',[_v("Example: deleteTask 1\n")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Please use show lessonIndex before deleting task!\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"linking-students-to-lessons"}},[_v("Linking students to lessons"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#linking-students-to-lessons","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("You can link lessons to students, and vice versa. For example, if a lesson has a few students, you can link each of the students to the lesson, so that you can quickly see who is attending this specific lesson.\nTo use this command, you must have selected a lesson or student using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_v(" command (see "),_c('a',{attrs:{"href":"#showing-a-lesson--task--students-details--show"}},[_v("here")]),_v(").")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"command-format"}},[_v("Command format"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-format","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In the student list and a student is selected:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo LESSON_NAME")])])])]),_v(" "),_c('li',[_v("In the schedule list and a lesson is selected:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo STUDENT_NAME")])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"example-usage"}},[_v("Example usage"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#example-usage","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In the student list and a student is selected:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo CS2103T Lab")])]),_v(" "),_c('li',[_v("Result: The student is linked to the lesson with name \"CS2103T Lab\"")])])]),_v(" "),_c('li',[_v("In the schedule list and a lesson is selected:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo Bernice Yu")])]),_v(" "),_c('li',[_v("Result: The lesson is linked to the student \"Bernice Yu\"")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"success-outputs"}},[_v("Success outputs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#success-outputs","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("For the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo CS2103T Lab")]),_v(" in the student list when \"Alex Wong\" is selected:\n"),_c('a',{attrs:{"href":"/tp/images/linkTo/linkTo_lesson_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/linkTo/linkTo_lesson_positive.png","alt":"Success for linking to lesson"}})])]),_v(" "),_c('li',[_v("For the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo John")]),_v(" in the schedule list when \"CS2100 Tutorial\" is selected:\n"),_c('a',{attrs:{"href":"/tp/images/linkTo/linkTo_student_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/linkTo/linkTo_student_positive.png","alt":"Success for linking to student"}})])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"failure-outputs"}},[_v("Failure outputs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#failure-outputs","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In the schedule list and a lesson is NOT selected, when trying to link a student:\n"),_c('a',{attrs:{"href":"/tp/images/linkTo/linkTo_noSelectedLesson.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/linkTo/linkTo_noSelectedLesson.png","alt":"Failure for linking to student"}})])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("No lesson is shown\n")]),_c('span',[_v("LinkTo command usage: linkTo [STUDENT_NAME]\n")]),_c('span',[_v("Example: linkTo Alice Pauline\n")]),_c('span',[_v("Note: This command is only available when a lesson is shown\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In the schedule list and a lesson is selected, when the student name specified in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo nonexisting student")]),_v(" command cannot be found:\n"),_c('a',{attrs:{"href":"/tp/images/linkTo/linkTo_student_negative.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/linkTo/linkTo_student_negative.png","alt":"Failure for linking to student"}})])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("No such student with name nonexisting student found\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In the student list and a student is NOT selected, when trying to link a lesson:\n"),_c('a',{attrs:{"href":"/tp/images/linkTo/linkTo_noSelectedStudent.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/linkTo/linkTo_noSelectedStudent.png","alt":"Failure for linking to lesson"}})])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("No student is shown\n")]),_c('span',[_v("LinkTo command usage: linkTo [LESSON_NAME]\n")]),_c('span',[_v("Example: linkTo CS2103T lab1\n")]),_c('span',[_v("Note: This command is only available when a student is shown\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"viewing-the-linked-students-of-a-lesson-or-the-linked-lessons-of-a-student-nav"}},[_v("Viewing the linked students of a lesson, or the linked lessons of a student : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#viewing-the-linked-students-of-a-lesson-or-the-linked-lessons-of-a-student-nav","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"command-format-2"}},[_v("Command format"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-format-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When a lesson or a student is selected and there are associated students/lessons:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"example-usage-2"}},[_v("Example usage"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#example-usage-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When a lesson is selected and it has linked students:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")])]),_v(" "),_c('li',[_v("Result: The app changes to the student list and only shows the students that are linked to the lesson.")])])]),_v(" "),_c('li',[_v("When a lesson is selected and it has linked students:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")])]),_v(" "),_c('li',[_v("Result: The app changes to the schedule list and only shows the lessons that are linked to the student.")])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"success-outputs-2"}},[_v("Success outputs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#success-outputs-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When \"CS2100 Tutorial\" is selected that has two students (\"Bernice Yu\" and \"John\") linked to it:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/nav/nav_fromLesson_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/nav/nav_fromLesson_positive.png","alt":"Success for navigating to students"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When \"John\" is selected and is linked to two lessons (\"lesson1\", \"CS2100 Tutorial\"):")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/nav/nav_fromLesson_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/nav/nav_fromLesson_positive.png","alt":"Success for navigating to lessons"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"failure-outputs-2"}},[_v("Failure outputs"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#failure-outputs-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")]),_v(" command is used without selecting either a student or a lesson:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/nav/nav_noneSelected.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/nav/nav_noneSelected.png","alt":"Failure for navigating to students as no lesson is selected"}})])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("No lesson is currently displayed\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Solution: Select a lesson or student using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_v(" command (here)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When a lesson has no linked students:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/nav/nav_noStudents.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/nav/nav_noStudents.png","alt":"Failure for navigating to students as no students are linked"}})])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This lesson has no linked students\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Solution: link a student using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo")]),_v(" command (here)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When a student has no linked lessons:")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/nav/nav_noLessons.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/nav/nav_noLessons.png","alt":"Failure for navigating to lessons as no lessons are linked"}})])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This student has no linked lessons\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Solution: link a student using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo")]),_v(" command (here)")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"command-history"}},[_v("Command history"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-history","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(" were entered in this order.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Pressing up arrow will go back in the command history and retrieve: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(".")]),_v(" "),_c('li',[_v("Pressing up arrow will go further back in the command history and retrieve: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(".")]),_v(" "),_c('li',[_v("Pressing down arrow will go forward in the command history and retrieve: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Example:\nPreviously typed commands are "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(" in this order.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The index in command history remains when user clears the command box while scrolling through the history.\n(e.g. for the history ["),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v("], if user is retrieves the command history with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" and clears his command box, pressing up again will retrieve "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(".)")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"exiting-the-program-exit"}},[_v("Exiting the program : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exiting-the-program-exit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clearing-data-clear"}},[_v("Clearing data : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clearing-data-clear","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-the-data"}},[_v("Saving the data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-the-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-the-data-file"}},[_v("Editing the data file"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-the-data-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("TutorMate data is saved automatically as JSON files "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/addressbook.json")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/schedulelist.json")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/personLessonMap.json")]),_v(". Advanced users are welcome to update data directly by editing that data file.\nBe very careful, especially when you modify attributes such as Start and End time of lessons, as any overlapping lesson timings will render the data as invalid. For example, lesson clashes will not be detected. Scenarios like these are not exhaustive.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another Computer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Install the app in the other computer and overwrite the empty data file it creates with the file that contains the data of your previous AddressBook home folder.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"known-issues"}},[_v("Known issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("When using multiple screens")]),_v(", if you move the application to a secondary screen, and later switch to using only the primary screen, the GUI will open off-screen. The remedy is to delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferences.json")]),_v(" file created by the application before running the application again.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"command-summary"}},[_v("Command summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Note: Add, Edit & Delete commands are dependent on the list type ["),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASKS")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v("].")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format, Examples")]),_v(" "),_c('th',[_v("List, Remarks")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Help")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])]),_v(" "),_c('td')]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("List")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students [KEYWORDs]")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")])]),_v(" "),_c('td',[_v("NA")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Show")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASKS")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Add Person")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name NAME [-phone PHONE_NUMBER] [-email EMAIL] [-address ADDRESS] [-subject SUBJECT] [-tag TAG] [-remark REMARK]")]),_v(" "),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name John -phone 91234567 -email test@gmail.com -address 10 Kent Ridge Drive -subject MATHEMATICS")])]),_v(" "),_c('td',[_v("ANY LIST")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Edit Person")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson INDEX [-name NAME] [-phone PHONE_NUMBER] [-email EMAIL] [-address ADDRESS] [-tag TAG,…​] [-subject SUBJECT,…​")]),_v("]"),_c('br'),_v(" e.g.,"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson 2 -name James Lee -email jameslee@example.com")])]),_v(" "),_c('td',[_v("ANY LIST")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete Person")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson 3")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Add Lesson")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name NAME [-start HH:MM] [-end HH:MM] [-day YYYY/MM/DD] [-subject SUBJECT]")])]),_v(" "),_c('td',[_v("ANY LIST")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Edit Lesson")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson INDEX [-start HH:MM] [-end HH:MM] [-day YYYY/MM/DD] [-subject SUBJECT]")]),_v(" "),_c('br'),_v(" e.g.,"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson 2 -start 13:00 -end 14:00")])]),_v(" "),_c('td',[_v("ANY LIST")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete Lesson")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson 3")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Add Task")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask LESSON_INDEX DESCRIPTION")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Delete Task")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask TASK_INDEX")]),_c('br'),_v(" e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask 3")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(", "),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show LESSON_INDEX")]),_v(" has to be used prior to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask")]),_v(" command")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Find")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find KEYWORD")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Clear")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])]),_v(" "),_c('td',[_v("NA")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Exit")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])]),_v(" "),_c('td',[_v("NA")])])])])])}
}];
  