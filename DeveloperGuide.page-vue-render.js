
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("TutorMate")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2324S1-CS2103T-T11-3/tp","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('br'),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(1),_v(" "),_m(2),_v(" "),_c('hr'),_v(" "),_m(3),_v(" "),_m(4),_v(" "),_c('hr'),_v(" "),_m(5),_v(" "),_m(6),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureDiagram.png","width":"280"}})],1),_v(" "),_m(7),_v(" "),_c('p',[_v("You can see that the bulk of the app's works are done by the UI, Logic, Model and Storage components. Below are the general duties of each component and how they interact with each other.")]),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_m(11),_v(" "),_m(12),_v(" "),_m(13),_v(" "),_m(14),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_m(21),_v(" "),_m(22),_v(" "),_m(23),_v(" "),_m(24),_v(" "),_m(25),_v(" "),_m(26),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/ArchitectureSequenceDiagram.png","width":"574"}})],1),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/ComponentManagers.png","width":"300"}})],1),_v(" "),_c('p',[_v("If you are to contribute to this project, please align with this group decision.")]),_v(" "),_m(29),_v(" "),_c('p',[_v("The sections below give more details of each component.")]),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_m(32),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/UiClassDiagram.png","alt":"Structure of the UI Component"}})],1),_v(" "),_m(33),_v(" "),_m(34),_v(" "),_m(35),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_m(39),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/DeleteSequenceDiagram.png","alt":"Interactions Inside the Logic Component for the `delete 1` Command"}})],1),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_c('p',[_v("Parser classes are responsible for parsing the user input and creating the corresponding command object.")]),_v(" "),_c('p',[_v("AddressBookParser is responsible for parsing the user input for finding the corresponding parser and returning the corresponding command object.")]),_v(" "),_c('p',[_v("LogicManager will perform the actual execution of the command, and update the ui and storage.")]),_v(" "),_m(44),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/LogicClassDiagram.png","width":"550"}})],1),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline reaches the end of diagram.")])]),_v(" "),_m(45),_v(" "),_m(46),_v(" "),_m(47),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/ParserClasses.png","width":"600"}})],1),_v(" "),_c('p',[_v("How the parsing works:")]),_v(" "),_m(48),_v(" "),_m(49),_v(" "),_m(50),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/ModelClassDiagram.png"}})],1),_v(" "),_m(51),_v(" "),_m(52),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" An alternative (arguably, a more OOP) model is given below. It has a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" list in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(", which "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" references. This allows "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" to only require one "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" object per unique tag, instead of each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" needing their own "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tag")]),_v(" objects."),_c('br')]),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/BetterModelClassDiagram.png","width":"450"}})],1)]),_v(" "),_m(53),_v(" "),_m(54),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/StorageClassDiagram.png"}})],1),_v(" "),_m(55),_v(" "),_m(56),_v(" "),_m(57),_v(" "),_m(58),_v(" "),_m(59),_v(" "),_m(60),_v(" "),_m(61),_v(" "),_c('hr'),_v(" "),_m(62),_v(" "),_c('p',[_v("This section describes some noteworthy details on how certain features are implemented.")]),_v(" "),_m(63),_v(" "),_m(64),_v(" "),_m(65),_v(" "),_m(66),_v(" "),_m(67),_v(" "),_m(68),_v(" "),_m(69),_v(" "),_m(70),_v(" "),_m(71),_v(" "),_m(72),_v(" "),_m(73),_v(" "),_m(74),_v(" "),_m(75),_v(" "),_m(76),_v(" "),_m(77),_v(" "),_m(78),_v(" "),_m(79),_v(" "),_m(80),_v(" "),_m(81),_v(" "),_m(82),_v(" "),_m(83),_v(" "),_m(84),_v(" "),_m(85),_v(" "),_m(86),_v(" "),_m(87),_v(" "),_m(88),_v(" "),_c('p',[_v("The following sequence diagram shows how the flow of the example execution:")]),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/AddSequenceDiagram.png","alt":"AddSequenceDiagram"}})],1),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddPersonCommandParser")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline reaches the end of diagram.")])]),_v(" "),_m(89),_v(" "),_m(90),_v(" "),_m(91),_v(" "),_m(92),_v(" "),_m(93),_v(" "),_c('p',[_v("To boost usability and support more functionalities, many commands in TutorMate support multiple forms of valid user input.")]),_v(" "),_m(94),_v(" "),_c('p',[_v("Given this flexibility and variety of valid user input, it is a challenge to parse all form of valid user input correctly and efficiently.")]),_v(" "),_m(95),_v(" "),_m(96),_v(" "),_m(97),_v(" "),_m(98),_v(" "),_m(99),_v(" "),_m(100),_v(" "),_m(101),_v(" "),_m(102),_v(" "),_c('p',[_v("The following section will discuss the implementation of the later three groups of classes in more detail.")]),_v(" "),_m(103),_v(" "),_m(104),_v(" "),_m(105),_v(" "),_c('p',[_v("These two classes are used in multiple generic classes and methods to achieve the flexibility and robustness of the parsing process.")]),_v(" "),_m(106),_v(" "),_m(107),_v(" "),_m(108),_m(109),_v(" "),_m(110),_v(" "),_m(111),_v(" "),_m(112),_m(113),_v(" "),_m(114),_v(" "),_m(115),_m(116),_v(" "),_m(117),_v(" "),_m(118),_v(" "),_m(119),_v(" "),_m(120),_v(" "),_m(121),_v(" "),_c('p',[_v("The following is an example of how it can be used:")]),_v(" "),_m(122),_m(123),_v(" "),_m(124),_v(" "),_m(125),_v(" "),_m(126),_v(" "),_m(127),_m(128),_v(" "),_c('p',[_v("The template for the edit process is as follows:")]),_v(" "),_m(129),_m(130),_v(" "),_m(131),_v(" "),_m(132),_m(133),_v(" "),_c('p',[_v("**Aspect: How to keep the code clean and maintainable while providing the flexibility and variety of valid user input.")]),_v(" "),_m(134),_v(" "),_m(135),_v(" "),_m(136),_v(" "),_m(137),_v(" "),_m(138),_v(" "),_m(139),_v(" "),_m(140),_v(" "),_m(141),_v(" "),_m(142),_v(" "),_c('p',[_v("Given below is an example usage scenario and how the show feature behaves at each step.")]),_v(" "),_m(143),_v(" "),_m(144),_v(" "),_m(145),_v(" "),_m(146),_v(" "),_m(147),_v(" "),_c('p',{staticStyle:{"text-align":"center"}},[_c('pic',{attrs:{"src":"/tp/diagrams/ShowSequenceDiagram.png","alt":"ShowSequenceDiagram"}})],1),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" The lifeline for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ShowCommandParser")]),_v(" should end at the destroy marker (X) but due to a limitation of PlantUML, the lifeline reaches the end of diagram.")])]),_v(" "),_m(148),_v(" "),_m(149),_v(" "),_m(150),_v(" "),_m(151),_v(" "),_m(152),_v(" "),_m(153),_v(" "),_m(154),_v(" "),_m(155),_v(" "),_m(156),_v(" "),_m(157),_v(" "),_c('hr'),_v(" "),_m(158),_v(" "),_m(159),_v(" "),_c('hr'),_v(" "),_m(160),_v(" "),_m(161),_v(" "),_m(162),_v(" "),_m(163),_v(" "),_m(164),_v(" "),_m(165),_v(" "),_m(166),_v(" "),_m(167),_m(168),_v(" "),_m(169),_v(" "),_m(170),_v(" "),_m(171),_v(" "),_m(172),_v(" "),_c('p',[_v("Use Case ends")]),_v(" "),_m(173),_v(" "),_m(174),_v(" "),_m(175),_v(" "),_m(176),_v(" "),_m(177),_v(" "),_c('p',[_v("Use case ends.")]),_v(" "),_m(178),_v(" "),_m(179),_v(" "),_m(180),_v(" "),_m(181),_v(" "),_m(182),_v(" "),_c('p',[_v("Use case ends.")]),_v(" "),_m(183),_v(" "),_m(184),_v(" "),_m(185),_v(" "),_m(186),_v(" "),_m(187),_v(" "),_c('p',[_v("Use Case ends.")]),_v(" "),_m(188),_v(" "),_m(189),_v(" "),_m(190),_v(" "),_m(191),_v(" "),_m(192),_v(" "),_c('p',[_v("Use Case ends.")]),_v(" "),_m(193),_v(" "),_m(194),_v(" "),_m(195),_v(" "),_m(196),_v(" "),_m(197),_v(" "),_c('p',[_v("Use Case ends.")]),_v(" "),_m(198),_v(" "),_m(199),_v(" "),_m(200),_v(" "),_m(201),_v(" "),_m(202),_v(" "),_c('p',[_v("Use Case ends.")]),_v(" "),_m(203),_v(" "),_m(204),_v(" "),_m(205),_v(" "),_m(206),_v(" "),_m(207),_v(" "),_c('p',[_v("Use Case ends.")]),_v(" "),_m(208),_v(" "),_m(209),_v(" "),_m(210),_v(" "),_m(211),_v(" "),_m(212),_v(" "),_m(213),_v(" "),_m(214),_v(" "),_m(215),_v(" "),_c('hr'),_v(" "),_m(216),_v(" "),_c('p',[_v("Given below are instructions to test the app manually.")]),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('p',[_c('strong',[_v("Note:")]),_v(" These instructions only provide a starting point for testers to work on;\ntesters are expected to do more "),_c('em',[_v("exploratory")]),_v(" testing.")])]),_v(" "),_m(217),_v(" "),_m(218),_v(" "),_m(219),_v(" "),_m(220),_v(" "),_m(221),_v(" "),_m(222),_v(" "),_m(223),_v(" "),_m(224),_v(" "),_m(225),_v(" "),_m(226),_v(" "),_m(227),_v(" "),_m(228),_v(" "),_m(229),_v(" "),_m(230),_v(" "),_m(231),_v(" "),_m(232),_v(" "),_m(233),_v(" "),_m(234),_v(" "),_m(235),_v(" "),_m(236),_v(" "),_m(237),_v(" "),_m(238),_v(" "),_m(239),_v(" "),_m(240),_v(" "),_m(241),_v(" "),_m(242),_v(" "),_m(243),_v(" "),_m(244),_v(" "),_m(245),_v(" "),_m(246),_v(" "),_m(247),_v(" "),_m(248),_v(" "),_m(249),_v(" "),_m(250),_v(" "),_m(251),_v(" "),_m(252),_v(" "),_m(253),_v(" "),_m(254),_v(" "),_m(255),_v(" "),_m(256),_v(" "),_m(257),_v(" "),_m(258),_v(" "),_m(259),_v(" "),_m(260),_v(" "),_m(261),_v(" "),_m(262),_v(" "),_m(263),_v(" "),_m(264),_v(" "),_m(265),_v(" "),_m(266),_v(" "),_m(267),_v(" "),_m(268),_v(" "),_m(269),_v(" "),_m(270),_v(" "),_m(271),_v(" "),_m(272),_v(" "),_m(273),_v(" "),_m(274),_v(" "),_m(275),_v(" "),_m(276),_v(" "),_m(277),_v(" "),_m(278),_v(" "),_m(279),_v(" "),_m(280),_v(" "),_m(281),_v(" "),_m(282),_v(" "),_m(283)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#tutormate-developer-guide"}},[_v("TutorMate Developer Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#acknowledgements"}},[_v("Acknowledgements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#setting-up-getting-started"}},[_v("Setting up, getting started‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#design"}},[_v("Design‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#architecture"}},[_v("Architecture‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#components"}},[_v("Components‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#ui-component"}},[_v("UI component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#logic-component"}},[_v("Logic component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#model-component"}},[_v("Model component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#storage-component"}},[_v("Storage component‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#entry-point-classes"}},[_v("Entry point classes‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#common-classes"}},[_v("Common classes‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#implementation"}},[_v("Implementation‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#app-state"}},[_v("App State‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#editpersoncommand-and-parser"}},[_v("EditPersonCommand and Parser‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#show-feature"}},[_v("Show feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#task-list-feature"}},[_v("Task List Feature‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#documentation-logging-testing-configuration-dev-ops"}},[_v("Documentation, logging, testing, configuration, dev-ops‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-requirements"}},[_v("Appendix: Requirements‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#product-scope"}},[_v("Product scope‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#user-stories"}},[_v("User stories‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-cases"}},[_v("Use cases‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-add-a-student-uc01"}},[_v("Use case: Add a student [UC01]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-delete-a-student-uc02"}},[_v("Use case: Delete a student [UC02]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-show-a-student-uc03"}},[_v("Use case: Show a student [UC03]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-find-and-amp-see-a-student-with-their-details-uc04"}},[_v("Use case: Find & see a student with their details [UC04]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-edit-a-student-s-details-uc05"}},[_v("Use case: Edit a student's details [UC05]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-add-a-lesson-uc06"}},[_v("Use case: Add a lesson [UC06]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-add-a-task-to-a-lesson-uc07"}},[_v("Use case: Add a task to a lesson [UC07]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#use-case-delete-a-task-to-a-lesson-uc08"}},[_v("Use case: Delete a task to a lesson [UC08]‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#non-functional-requirements"}},[_v("Non-Functional Requirements‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#glossary"}},[_v("Glossary‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-instructions-for-manual-testing"}},[_v("Appendix: Instructions for manual testing‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#launch-and-shutdown"}},[_v("Launch and Shutdown‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#basic-usage"}},[_v("Basic Usage‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#viewing-students-list-schedule-list-and-tasks-list"}},[_v("Viewing STUDENTS list, SCHEDULE list and  TASKS list‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#show-feature-2"}},[_v("Show Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#add-feature"}},[_v("Add Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#delete-feature"}},[_v("Delete Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#edit-feature"}},[_v("Edit Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#find-feature"}},[_v("Find Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#filter-feature"}},[_v("Filter Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#link-feature"}},[_v("Link Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#navigate-feature"}},[_v("Navigate Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-history-feature"}},[_v("Command History Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#clear"}},[_v("Clear‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#exit"}},[_v("Exit‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#saving-data"}},[_v("Saving data‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#appendix-planned-enhancements"}},[_v("Appendix: Planned Enhancements‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#deleting-of-tags"}},[_v("Deleting of tags‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#unlinking-of-students-from-lessons-and-vice-versa"}},[_v("Unlinking of students from lessons and vice versa‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#navigating-from-tasks-to-lesson"}},[_v("Navigating from tasks to lesson‎")])])])])],1)]),_v(" "),_c('scroll-top-button')],1)])}
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
with(this){return _c('ol',[_c('li',[_c('p',[_v("Each of the four main components (also shown in the diagram above)")]),_v(" "),_c('ul',[_c('li',[_v("Defines its "),_c('em',[_v("API")]),_v(" in an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" with the same name as the Component.")]),_v(" "),_c('li',[_v("Implements its functionality using a concrete "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{Component Name}Manager")]),_v(" class (which follows the corresponding API "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" mentioned in the previous point.")])]),_v(" "),_c('p',[_v("For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component defines its API in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")]),_v(" interface and implements its functionality using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager.java")]),_v(" class.")])]),_v(" "),_c('li',[_c('p',[_v("The team has decided to force all components to interact via interfaces rather than the concrete classes as illustrated in the (partial) class diagram below (reason: to prevent outside component's being coupled to the implementation of a component).")])])])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"3"}},[_c('li',[_v("There are other components that are not shown in the diagram above. These components are:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commons")]),_v(" component: contains classes that are used by multiple other components.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Entry Point")]),_v(" classes: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")]),_v(" classes that are in charge of the app launch and shut down.")])])]),_v(" "),_c('li',[_v("Please be reminded that, despite similar naming, our architecture is not the "),_c('a',{attrs:{"href":"https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"}},[_v("Model-View-Controller (MVC)")]),_v(" architecture. The major difference is that there is not a clear \"Controller\" component in our architecture. Instead, the role of the \"Controller\" is played by all the main components (UI, Logic, Model and Storage) working together.")])])}
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
with(this){return _c('p',[_v("At a high level, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component is responsible for making sense of the user inputs, and modifying storage and ui accordingly.\nIt acts like a controller to glue the other components together.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("It interacts with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component by taking the user input from it, and setting the UI display accordingly.\nIt also calls APIs (addPerson, deleteLesson for example) from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component to modify the data representation, and call APIs\nfrom the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component to save the data to local storage each time the data is modified.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The sequence diagram below illustrates the interactions within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, taking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(\"delete 1\")")]),_v(" API call as an example.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Inside the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, there are 4 main components: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Parser")]),_v(" classes and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" classes.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" class will do the actual modification of the data, when executed by the LogicManager, and communicate its execution result via the CommandResult class with the Logic manager.")])}
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
with(this){return _c('ul',[_c('li',[_v("stores the address book data i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (which are contained in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList")]),_v(" object).")]),_v(" "),_c('li',[_v("stores the schedule data i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("lesson")]),_v(" objects (which are contained in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Schedule")]),_v(" object).")]),_v(" "),_c('li',[_v("stores the currently 'selected' "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (e.g., results of a search query) as a separate "),_c('em',[_v("filtered")]),_v(" list which is exposed to outsiders as an unmodifiable "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ObservableList<Person>")]),_v(" that can be 'observed' e.g. the UI can be bound to this list so that the UI automatically updates when the data in the list change.")]),_v(" "),_c('li',[_v("stores a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPref")]),_v(" object that represents the user’s preferences. This is exposed to the outside as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ReadOnlyUserPref")]),_v(" objects.")]),_v(" "),_c('li',[_v("stores the task data of all the lessons i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("task")]),_v(" objects (which are contained in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TaskList")]),_v(" objects of each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Lesson")]),_v(" object).")]),_v(" "),_c('li',[_v("does not depend on any of the other three components (as the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" represents data entities of the domain, they should make sense on their own without depending on other components).")]),_v(" "),_c('li',[_v("links to the UI component to display the Show Details Panel in the UI (to reduce code complexity).")]),_v(" "),_c('li',[_v("stores a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("State")]),_v(" object that represents the current state of the app. Currently, there are 3 main states: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASK")]),_v(" state.")])])}
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
with(this){return _c('p',[_c('a',{attrs:{"href":"#common-classes"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commons")])])]),_v(" represents a collection of classes used by multiple other components. They are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.addressbook.commons")]),_v(" package.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"implementation"}},[_c('strong',[_v("Implementation")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"app-state"}},[_v("App State"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#app-state","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"background"}},[_v("Background"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#background","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("TutorMate has 3 main \"modes\" each to cater to the main features. We refer to them as \"states\", where we implement it using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("State")]),_v(" enum.\nThe different states have their own set of Ui layout and commands, while some commands work for all states but has different behaviours between them.\nThe 3 main states are "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASK")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(" state handles the student management system feature.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" state handles lessons and schedules.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASK")]),_v(" state handles tasks for lessons.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-2"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(" class stores the current state of the app. The default state is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(". It implements the following operations for the show command:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#getState()")]),_v(" returns the current state of the app, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#setState()")]),_v(" sets the app's state, and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#sameState()")]),_v(" checks if the given state is the same as the app's state.")])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"1-parser-overloading"}},[_v("1. Parser Overloading"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-parser-overloading","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("States allows the same command word to be mapped to different commands based on the current app state. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser#parseCommand()")]),_v(" handles the parsing of user input into its respective parsers and commands.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, the \"add\" command word is overloaded, where using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#sameState()")]),_v(" method:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If its in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(" state, it returns the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddPersonCommandParser")]),_v(", which returns the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddPersonCommand")]),_v(" command class.")]),_v(" "),_c('li',[_v("If its in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" state, it returns the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddLessonCommandParser")]),_v(", which returns the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddLessonCommand")]),_v(" command class.")])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"2-command-overloading"}},[_v("2. Command Overloading"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-command-overloading","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("States allows the same command to have differing behaviours based on the current app state.\nCommands can easily enable this by modifying its "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method and implement a switch statement that executes different functions based on the model state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, the \"find\" command is overloaded, where using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#sameState()")]),_v(" method:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If its in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(" state, it searches through the list of students.")]),_v(" "),_c('li',[_v("If its in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" state, it searches through the list of lessons.")])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"3-ui-updates"}},[_v("3. Ui updates"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-ui-updates","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("When commands change the app state (i.e. model state), using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#setState()")]),_v(" method, it will automatically call the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiManager")]),_v(" class to make necessary Ui changes.\nThe "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiManager")]),_v(" class calls the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow#changeLayout()")]),_v(" method to make necessary changes to the layout based on the new state:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If the new state is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(" state, only show the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonList")]),_v(" (list for students) and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("studentDetailList")]),_v(".")]),_v(" "),_c('li',[_v("If the new state is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" state, only show the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ScheduleList")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("lessonDetailList")]),_v(".")]),_v(" "),_c('li',[_v("If the new state is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASK")]),_v(" state, only show the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("fullTaskList")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("taskDetailListPanel")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"example-execution"}},[_v("Example execution"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#example-execution","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Given below is an example usage scenario of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_v(" command changes the model state and Ui layout.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user launches the application for the first time. The initial state of the Model will be set to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(". The schedule list will be initialized with the initial schedule.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. User enters the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name Alice")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddPersonCommand")]),_v(" will be called by the logicManager. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" command will call the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_v(" method in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(" class to add a new person to the app.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddPersonCommand")]),_v(" will change the app state to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(" by calling the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#setState()")]),_v(" method, which changes the model state to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. Since the current model state is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(", the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#setState()")]),_v(" method will call the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiManager#changeLayout()")]),_v(" method, which calls the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow#changeLayout()")]),_v(" method.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 5. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow#changeLayout()")]),_v(" method will hide all panels and only show the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonList")]),_v(" (list for students) and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("studentDetailList")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 6. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddPersonCommand")]),_v(" will then call the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#showPerson()")]),_v(" method, which will display the newly added person's details (not shown in diagram, described in next section).")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: How to structure app to work with the 3 main modes:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1 (current choice):")]),_v(" Implement app state, where commands can check and modify the current app state.")]),_v(" "),_c('ul',[_c('li',[_v("Pros:\n"),_c('ul',[_c('li',[_v("Commands can be overloaded since they can have different behaviours based on app state, reducing number of commands for user to remember.")]),_v(" "),_c('li',[_v("Commands do not need to handle changing of Ui layouts (specifying panels it requires), since similar features (e.g. managing students) all require the same panels. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiManager")]),_v(" will make required Ui changes based on desired state.")])])]),_v(" "),_c('li',[_v("Cons: Increase complexity of the code.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2:")]),_v(" Have a collection of related commands that are grouped to work with each main mode.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy to implement")]),_v(" "),_c('li',[_v("Cons:\n"),_c('ul',[_c('li',[_v("Many commands for user to remember, although they have similar ideas (e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson")]),_v(" both involving adding a new object, which the user could have used a generic "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" method.)")]),_v(" "),_c('li',[_v("Commands have to manually call the Ui to specify which Ui panels to show.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editpersoncommand-and-parser"}},[_v("EditPersonCommand and Parser"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editpersoncommand-and-parser","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"background-2"}},[_v("Background"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#background-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, when editing a person, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" parameter can be conditionally omitted when editing the currently shown entry, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command word is overloaded for both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson")]),_v(" command, and for each of these two commands, many optional flags are available.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The implementation of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommandParser")]),_v(" can serve as a good example to represent how we tackle this challenge at command and parser class level to achieve the desired flexibility and usability while keeping the code clean and maintainable.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-3"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The parsing and execution process of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(" is achieved via the combination of four groups of classes: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TypeParsingUtil")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommandParser")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(", each of which is responsible for a different stage of the parsing process.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Given a user input that is intended to be parsed into an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(", a high level description of the parsing process is as follows:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The first stage is to understand that user intends to invoke the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(" and delegate the parsing to the specialised parser class, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommmandParser")]),_v(". This step is done by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" class, which behaves like a \"simple factory\" via a giant \"switch\" statement. We will not discuss it in depth here.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The second stage is to parse each parameter and flags. This work is delegated to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("typeParsingUtil")]),_v(" class, which is a utility class that contains many static methods that are responsible for parsing different types of user input that is reused across different command parsers.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Then, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommandParser")]),_v(" class is responsible for combining the results of the previous stage and constructing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(" object.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Finally, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(" class is responsible for executing the command and updating the model accordingly.")])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"1-listentry-and-listentryfield-class"}},[_v("1. ListEntry and ListEntryField class"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#1-listentry-and-listentryfield-class","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("In TutorMate, Lesson and Person extends "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntry")]),_v(" class as they are displayed as items of the "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(", "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" respectively.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntry")]),_v(" object contains a list of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntryField")]),_v(" objects, which are the fields of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntry")]),_v(" object. For example, a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object contains a list of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntryField")]),_v(" objects, which are the fields of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object, such as name, phone number, email address, etc.")])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"2-parsing-of-flags-and-parameters"}},[_v("2. Parsing of Flags and Parameters"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#2-parsing-of-flags-and-parameters","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TypeParsingUtil")]),_v(" class parses all kinds of flags (which are all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntryField")]),_v(" ) via a single powerful generic method, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("parseField")]),_v(". The method signature is as follows:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v(" public static <T extends ListEntryField> T parseField(String flagName,\n")]),_c('span',[_v("                                                          String input,\n")]),_c('span',[_v("                                                          Of<T> of,\n")]),_c('span',[_v("                                                          boolean isOptional) throws ParseException\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The first parameter, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("flagName")]),_v(", is the name of the flag that is being parsed. It will also be used to generate the error message when the parsing fails.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The second parameter, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("input")]),_v(", is the user input that is intended to be parsed into the flag.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The third parameter, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("of")]),_v(", is a self-defined functional interface that is to be used as the \"factory\" to create the flag object. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("of")]),_v(" method signature is as follows:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("public interface Of<T extends ListEntryField> {\n")]),_c('span',[_v("    T apply(String str) throws IllegalArgumentException, ParseException;\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The last parameter, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("isOptional")]),_v(", is a boolean flag that indicates whether the flag is optional or not. If the flag is not found in the user input, this method will throw a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ParseException")]),_v(" if the flag is not optional, but will return a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("null")]),_v(" object if the flag is optional. It is overloaded to have a default value of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("true")]),_v(" when omitted.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("parseField")]),_v(" method is reused extensively in multiple parser classes to parse all the flags. The following is an example of how it can be used:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("// Parse the name flag, which is compulsory\n")]),_c('span',[_v("Name name = TypeParsingUtil.parseField(\"name\", args, Name::of, false);\n")]),_c('span',[_v("\n")]),_c('span',[_v("// Parse the phone flag, which is optional\n")]),_c('span',[_v("Phone phone = TypeParsingUtil.parseField(\"phone\", args, Phone::of);\n")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"3-parsing-of-the-editpersoncommand"}},[_v("3. Parsing of the EditPersonCommand"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#3-parsing-of-the-editpersoncommand","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommandParser")]),_v(" class will parse the user input into an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(" object.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("This is achieved by combining the results of parsing flags in the previous stage and construct a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object that contains the updated fields.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Each of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntryField")]),_v(" has a global and static singleton default instance. For example, the default "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Phone")]),_v(" is a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Phone")]),_v(" object with message \"To be added\". Please also note that it is not possible to create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Phone")]),_v(" object with such message via public constructor and factory method.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Each of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntry")]),_v(" also has a global and static singleton default instance whose fields are all the default "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntryField")]),_v(" objects. We can obtain a clone of the default "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntry")]),_v(" object via a static method in the class method.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommandParser")]),_v(" class will first obtain a clone of the default "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object via the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("getDefault")]),_v(" method, and then update the fields of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object with the results of parsing flags in the previous stage when the corresponding flags are found in the user input.")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Person person = Person.getDefaultPerson();\n")]),_c('span',[_v("            person.setNameIfNotDefault(parseField(\"name\", args, Name::of, nameIsOptional));\n")]),_c('span',[_v("            person.setPhoneIfNotDefault(parseField(\"phone\", args, Phone::of));\n")]),_c('span',[_v("            person.setEmailIfNotDefault(parseField(\"email\", args, Email::of));\n")]),_c('span',[_v("            person.setAddressIfNotDefault(parseField(\"address\", args, Address::of));\n")]),_c('span',[_v("            person.setSubjectsIfNotDefault(parseField(\"subject\", args, Subjects::of));\n")]),_c('span',[_v("            person.setTagsIfNotDefault(parseField(\"tag\", args, Tags::of));\n")]),_c('span',[_v("            person.setRemarkIfNotDefault(parseField(\"remark\", args, Remark::of));\n")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"4-editpersoncommand-implementation"}},[_v("4. EditPersonCommand Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#4-editpersoncommand-implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(" class will execute the command and update the model accordingly.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Realising the commonality between all kinds of edit commands, we have created an abstract generic class, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AbstractEditCommand")]),_v(", to serve as template class containing the logic of editing a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntry")]),_v(" object.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The signature of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AbstractEditCommand")]),_v(" class is as follows:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("public abstract class AbstractEditCommand<T extends ListEntry<? extends T>> extends Command\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("And the concrete edit classes ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(" class for example) can be simply implemented by \"filling in the blank\" and providing the correct parameters to the template class.")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("initModelMethods();\n")]),_c('span',[_v("init();\n")]),_c('span',[_v("editFields();\n")]),_c('span',[_v("updatePersonLessonMap();\n")]),_c('span',[_v("validateEditedAndWriteBack();\n")]),_c('span',[_v("showMethod.accept(edited);\n")]),_c('span',[_v("return new CommandResult(\"Edit success.\\n from: \" + original.toString() + \"\\n to: \" + edited.toString());\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(" class can be simply implemented by overriding the abstract methods in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AbstractEditCommand")]),_v(" class.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The most important method to be overridden is the initModelMethods(), which looks like this in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(" class:")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v(" @Override\n")]),_c('span',[_v("    protected void initModelMethods() {\n")]),_c('span',[_v("        currentShownEntry = model.getCurrentlyDisplayedPerson();\n")]),_c('span',[_v("        list = model.getFilteredPersonList();\n")]),_c('span',[_v("        hasClashWith = model::hasPersonClashWith;\n")]),_c('span',[_v("        deleteMethod = model::deletePersonForEdit;\n")]),_c('span',[_v("        addMethod = model::addPerson;\n")]),_c('span',[_v("        getClashingEntry = model::getPersonClashWith;\n")]),_c('span',[_v("        showMethod = model::showPerson;\n")]),_c('span',[_v("    }\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations-2"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1 (current choice):")]),_v(" Group the parsing and execution of a command into four groups of classes: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TypeParsingUtil")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommandParser")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonCommand")]),_v(".")]),_v(" "),_c('ul',[_c('li',[_v("Pros:\n"),_c('ul',[_c('li',[_v("Clear separation of concerns.")]),_v(" "),_c('li',[_v("Easy to maintain, easy to extend as for each new "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntryField")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntry")]),_v(" class that is added and fulfill the contract of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntryField")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntry")]),_v(" class, the parsing and execution of the command will almost be automatically supported.")]),_v(" "),_c('li',[_v("Good DRY principle. Only one method is needed to parse all kinds of flags, the knowledge of a given type of processing is encapsulated in a single place.")])])]),_v(" "),_c('li',[_v("Cons: Less flexible. It is not easy to add flags that have special parsing logic not supported by the current template.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2:")]),_v(" Having even stricter constraints on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntryField")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListEntry")]),_v(" class, so that we can use reflection feature of Java to automatically parse the flags.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Potentially better extensibility.")]),_v(" "),_c('li',[_v("Cons:\n"),_c('ul',[_c('li',[_v("Difficult to implement.")]),_v(" "),_c('li',[_v("Even more difficult to debug.")]),_v(" "),_c('li',[_v("Even less flexible.")]),_v(" "),_c('li',[_v("Not easy to get the correct error message and type, as if the call via reflection throws exception, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ParseException")]),_v(" for example, the reflection call will always overwrite the original exception and throw an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("InvocationTargetException")]),_v(" instead.")])])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 3:")]),_v(" Writing a separate parser class for each command.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Flexible. Easy to implement.")]),_v(" "),_c('li',[_v("Cons:\n"),_c('ul',[_c('li',[_v("Many redundant code.")]),_v(" "),_c('li',[_v("Difficult to maintain as the code is not DRY.")])])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"show-feature"}},[_v("Show feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#show-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-4"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-4","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The show feature is facilitated by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ShowCommand")]),_v(" which extends the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" class. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ShowCommand")]),_v(" will check the current state of the Model (either "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASK")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NONE")]),_v(") when the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" method is called and see whether it is currently showing a "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(", "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" or a "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Additionally, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(" class implements the following operations for the show command:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#linkUi()")]),_v(" — Links the Ui of TutorMate to the Model to display the Show Panel\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#showPerson()")]),_v(" — Shows the details of the specified person in the Ui.\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#showLesson()")]),_v(" — Shows the details of the specified lesson in the Ui.\n"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager#showTask()")]),_v(" — Shows the details of the specified task in the Ui.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The Show Command has different behaviours based on the current state in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The Show Command will show the Person Details if the current state is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")])]),_v(" "),_c('li',[_v("The Show Command will show the Lesson Details if the current state is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")])]),_v(" "),_c('li',[_v("The Show Command will show the Task Details if the current state is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASK")])])])}
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
with(this){return _c('h4',{attrs:{"id":"design-considerations-3"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-3","onclick":"event.stopPropagation()"}})])}
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
with(this){return _c('h4',{attrs:{"id":"implementation-5"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-5","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The task list functionality is facilitated by multiple related classes. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TaskList")]),_v(" can contain any number of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Task")]),_v(" objects. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TaskList")]),_v(" is implemented as a component of each Lesson so that each lesson will have its own individual Task List.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("FullTaskList")]),_v(" class is implemented as a list to view all the collective tasks of all the lessons. It uses a similar structure to ScheduleList to display the list.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations-4"}},[_v("Design considerations:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations-4","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: How the Task List structure should be implemented:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1 (current choice):")]),_v(" Each individual Lesson will contain a Task List.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: Easy to implement.")]),_v(" "),_c('li',[_v("Cons: May be hard to increase navigability from students to lessons and tasks.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2:")]),_v(" Create a central Task List and filter the tasks for each lesson.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: May be easier to increase navigability.")]),_v(" "),_c('li',[_v("Cons: May increase code complexity due to filtering the respective tasks.")])])])])}
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
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Priority")]),_v(" "),_c('th',[_v("As a …​")]),_v(" "),_c('th',[_v("I want to …​")]),_v(" "),_c('th',[_v("So that I can…​")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("see usage instructions")]),_v(" "),_c('td',[_v("refer to a user guide when I forget how to use the app")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("new user")]),_v(" "),_c('td',[_v("purge all existing sample data")]),_v(" "),_c('td',[_v("get rid of the experimental data when exploring the app")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("private tutor")]),_v(" "),_c('td',[_v("install the app on my device with one click")]),_v(" "),_c('td',[_v("use the app with ease without much trouble building the environment")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("private tutor")]),_v(" "),_c('td',[_v("add students by name only without having to include all their contact details")]),_v(" "),_c('td',[_v("can keep tabs on potential students")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("delete a student in the app's students list")]),_v(" "),_c('td',[_v("remove entries that I no longer need")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("user")]),_v(" "),_c('td',[_v("find a student by name")]),_v(" "),_c('td',[_v("locate details of students without having to go through the entire list")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("tutor")]),_v(" "),_c('td',[_v("quickly edit student details")]),_v(" "),_c('td',[_v("save time re-adding students if I have added the wrong details by accident")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("busy tutor")]),_v(" "),_c('td',[_v("add lessons that fits into my schedule quickly")]),_v(" "),_c('td',[_v("ensure that the newly added lesson do not clash with existing tuition sessions in my schedule")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("flexible tutor")]),_v(" "),_c('td',[_v("edit my student’s lesson timings")]),_v(" "),_c('td',[_v("accommodate any changes in timing requested by them")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* * *")])]),_v(" "),_c('td',[_v("private tutor")]),_v(" "),_c('td',[_v("see a specific student’s data from the contact list")]),_v(" "),_c('td',[_v("get a more concise and detailed view of the student")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("private tutor")]),_v(" "),_c('td',[_v("keep contact details of students hidden unless specified otherwise")]),_v(" "),_c('td',[_v("minimize the chances of someone else seeing them by accident")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("tutor")]),_v(" "),_c('td',[_v("see my teaching schedule")]),_v(" "),_c('td',[_v("complete lesson preparation before the upcoming tuition sessions")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("efficient tutor")]),_v(" "),_c('td',[_v("filter lessons to view lessons on or after a specific date")]),_v(" "),_c('td',[_v("plan my activities with the free time that is not occupied by lessons")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("tutor")]),_v(" "),_c('td',[_v("link a student to a lesson")]),_v(" "),_c('td',[_v("prepare for the lesson according to the student's weaknesses and strengths")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("forgetful tutor")]),_v(" "),_c('td',[_v("see all the planned lessons with a student")]),_v(" "),_c('td',[_v("plan for additional lessons with the student")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("* *")])]),_v(" "),_c('td',[_v("tutor")]),_v(" "),_c('td',[_v("update my students' details as they progress through learning in remarks")]),_v(" "),_c('td',[_v("keep track of their information like test scores and learning styles")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("forgetful tutor")]),_v(" "),_c('td',[_v("include certain tasks to do for each lesson")]),_v(" "),_c('td',[_v("remember to do them in preparation for each lesson")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("*")])]),_v(" "),_c('td',[_v("busy user")]),_v(" "),_c('td',[_v("see all the tasks for all my tuition sessions at a glance")]),_v(" "),_c('td',[_v("I know how many tasks I have yet to complete in preparation for all my tuition sessions")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-cases"}},[_v("Use cases"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-cases","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("(For all use cases below, the "),_c('strong',[_v("System")]),_v(" is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TutorMate")]),_v(" and the "),_c('strong',[_v("Actor")]),_v(" is the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Tutor")]),_v(", unless specified otherwise)")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-add-a-student-uc01"}},[_v("Use case: Add a student [UC01]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-add-a-student-uc01","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User chooses to add a new student.")]),_v(" "),_c('li',[_v("User enters the required details to create a student.")]),_v(" "),_c('li',[_v("TutorMate creates the student.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("2a. Student's name is not specified and / or details specified are incorrect.\n"),_c('ul',[_c('li',[_v("2a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("2a2. The user enters new data.\n"),_c('br'),_v(" Use case resumes from step 2.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-delete-a-student-uc02"}},[_v("Use case: Delete a student [UC02]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-delete-a-student-uc02","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to list students.")]),_v(" "),_c('li',[_v("TutorMate shows a list of students.")]),_v(" "),_c('li',[_v("User requests to delete a student in the list.")]),_v(" "),_c('li',[_v("TutorMate deletes the person.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("2a. The list is empty (no students in student list).\n"),_c('br'),_v(" Use case ends.")]),_v(" "),_c('li',[_v("3a. The given index is invalid.\n"),_c('ul',[_c('li',[_v("3a1. TutorMate shows an error message.\n"),_c('br'),_v(" Use case resumes at step 2.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-show-a-student-uc03"}},[_v("Use case: Show a student [UC03]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-show-a-student-uc03","onclick":"event.stopPropagation()"}})])}
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
with(this){return _c('ul',[_c('li',[_v("2a. The list is empty (no students in student list).\n"),_c('br'),_v(" Use case ends.")]),_v(" "),_c('li',[_v("3a. The given index is invalid.\n"),_c('ul',[_c('li',[_v("3a1. TutorMate shows an error message.\n"),_c('br'),_v("  Use case resumes at step 2.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-find-and-amp-see-a-student-with-their-details-uc04"}},[_v("Use case: Find & see a student with their details [UC04]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-find-and-amp-see-a-student-with-their-details-uc04","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("User requests to find a student by a specific characteristic e.g. Name.")]),_v(" "),_c('li',[_v("TutorMate shows a list of students that matches the user's input.")]),_v(" "),_c('li',[_v("User "),_c('u',[_v("shows a student (UC03)")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("2a. The list is empty (no students found that matches the user's input).\n"),_c('br'),_v(" Use case ends.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-edit-a-student-s-details-uc05"}},[_v("Use case: Edit a student's details [UC05]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-edit-a-student-s-details-uc05","onclick":"event.stopPropagation()"}})])}
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
with(this){return _c('ul',[_c('li',[_v("3a. Some details are incorrect/ overlapping with existing app data.\n"),_c('ul',[_c('li',[_v("3a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3a2. The user enters new data.\n"),_c('br'),_v(" Use case resumes from step 3.")])])]),_v(" "),_c('li',[_v("3b. The given index is invalid.\n"),_c('ul',[_c('li',[_v("3b1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3b2. The user enters new data.\n"),_c('br'),_v(" Use case resumes from step 3.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-add-a-lesson-uc06"}},[_v("Use case: Add a lesson [UC06]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-add-a-lesson-uc06","onclick":"event.stopPropagation()"}})])}
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
with(this){return _c('ul',[_c('li',[_v("3a. Lesson's name is not specified and / or details specified are incorrect.\n"),_c('ul',[_c('li',[_v("3a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3a2. The user enters new data.\n"),_c('br'),_v("Use case resumes from step 3.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-add-a-task-to-a-lesson-uc07"}},[_v("Use case: Add a task to a lesson [UC07]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-add-a-task-to-a-lesson-uc07","onclick":"event.stopPropagation()"}})])}
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
with(this){return _c('ul',[_c('li',[_v("2a. The list is empty (no lessons in schedule list).\n"),_c('br'),_v(" Use case ends.")]),_v(" "),_c('li',[_v("3a. Description details are missing/ overlapping with existing app data.\n"),_c('ul',[_c('li',[_v("3a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3a2. The user enters new data.\n"),_c('br'),_v("Use case resumes from step 3.")])])]),_v(" "),_c('li',[_v("3b. The given index is invalid.\n"),_c('ul',[_c('li',[_v("3b1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3b2. The user enters new data.\n"),_c('br'),_v("Use case resumes from step 3.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-case-delete-a-task-to-a-lesson-uc08"}},[_v("Use case: Delete a task to a lesson [UC08]"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-case-delete-a-task-to-a-lesson-uc08","onclick":"event.stopPropagation()"}})])}
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
with(this){return _c('ul',[_c('li',[_v("2a. The list is empty (no lessons in schedule list).\n"),_c('br'),_v("Use case ends.")]),_v(" "),_c('li',[_v("3a. The given lesson index is invalid.\n"),_c('ul',[_c('li',[_v("3a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("3a2. The user enters new data.\n"),_c('br'),_v("Use case resumes from step 3.")])])]),_v(" "),_c('li',[_v("5a. The given task index is invalid.\n"),_c('ul',[_c('li',[_v("5a1. The app informs the user of the error.")]),_v(" "),_c('li',[_v("5a2. The user enters new data.\n"),_c('br'),_v("Use case resumes from step 5.")])])]),_v(" "),_c('li',[_v("5b. The task list is empty (no tasks in the task list of the lesson).\n"),_c('br'),_v("Use case ends.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"non-functional-requirements"}},[_v("Non-Functional Requirements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#non-functional-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Should work on any Windows, Linux, and MacOs as long as it has Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed.")])]),_v(" "),_c('li',[_c('p',[_v("Should be able to hold up to:")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("1000 persons without a noticeable(> 1 second) sluggishness in performance for typical usage.")]),_v(" "),_c('li',[_v("1000 lessons without a noticeable(> 1 second) sluggishness in performance for typical usage.")]),_v(" "),_c('li',[_v("a total of 1000 tasks without a noticeable(> 1 second) sluggishness in performance for typical usage.")])])}
},function anonymous(
) {
with(this){return _c('ol',{attrs:{"start":"3"}},[_c('li',[_c('p',[_v("A user with above average typing speed for regular English text (i.e. not code, not system admin commands) should be able to accomplish most of the tasks faster using commands than using the mouse.")])]),_v(" "),_c('li',[_c('p',[_v("The application should respond and load all data within three seconds.")])]),_v(" "),_c('li',[_c('p',[_v("The response time for adding, updating, or deleting student and lesson records should be within two seconds.")])]),_v(" "),_c('li',[_c('p',[_v("The system should be usable with a user interface that is intuitive enough for users who have not used similar applications before.")])]),_v(" "),_c('li',[_c('p',[_v("Users will only have access to their own students' data.")])]),_v(" "),_c('li',[_c('p',[_v("Should there be an irregular termination of the app, the data should not be corrupted.")])]),_v(" "),_c('li',[_c('p',[_v("The app should respond to user text input within 0.2 second.")])]),_v(" "),_c('li',[_c('p',[_v("Data should be stored locally.")])]),_v(" "),_c('li',[_c('p',[_v("The application is not expected to:")]),_v(" "),_c('ol',[_c('li',[_v("Perform analysis of students' academic performance.")]),_v(" "),_c('li',[_v("Send real-time notifications when there is an upcoming lesson.")]),_v(" "),_c('li',[_v("Delete lessons that are past the current date automatically.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("GUI")]),_v(": Abbreviation for graphical user interface, which allow user to interact with with the application via graphical components such as icons, buttons, and menus.")]),_v(" "),_c('li',[_c('strong',[_v("Private contact detail")]),_v(": A contact detail that is not meant to be shared with others")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-instructions-for-manual-testing"}},[_c('strong',[_v("Appendix: Instructions for manual testing")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-instructions-for-manual-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"launch-and-shutdown"}},[_v("Launch and Shutdown"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#launch-and-shutdown","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("Initial Launch")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tutormate.jar")]),_v(" from "),_c('a',{attrs:{"href":"https://github.com/AY2324S1-CS2103T-T11-3/tp/releases"}},[_v("here")]),_v(" and copy it into an empty folder.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" into the folder you put the jar file in, and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar tutormate.jar")]),_v(" command to run the application."),_c('br')])]),_v(" "),_c('li',[_c('p',[_v("Expected: A GUI similar to the picture below should appear in a few seconds. The app will contain some sample data."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/about.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/about.png","alt":"Ui"}})])])])])]),_v(" "),_c('li',[_c('p',[_v("Shutdown")]),_v(" "),_c('ul',[_c('li',[_v("Click on the cross at the top of the window.\n"),_c('ul',[_c('li',[_v("MacOs: Red cross button at top left side of the window.")]),_v(" "),_c('li',[_v("Windows & Linux: Cross button at the top right side of the window.\n"),_c('br'),_v("\nExpected: The application window disappears.\n"),_c('br'),_c('br')])])]),_v(" "),_c('li',[_v("Enter "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" into the command box of the application. "),_c('br'),_v("\nExpected: The application window disappears.\n"),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Subsequent Launches")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Relaunch the application by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(" into the folder with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tutormate.jar")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar tutormate.jar")]),_v(" command to run the application.")])]),_v(" "),_c('li',[_c('p',[_v("Expected: The list panel will show a list of lessons similar to the picture above (in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v("). The data in the application should be the same as the data in the application before it was shut down previously.")])])])]),_v(" "),_c('li',[_c('p',[_v("Saving Window Preferences")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Resize the window to an optimum size. Move the window to a different location. Close the window.")])]),_v(" "),_c('li',[_c('p',[_v("Re-launch the application by using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar tutormate.jar")]),_v(" command."),_c('br'),_v("\nExpected: The most recent window size and location is retained.")])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"basic-usage"}},[_v("Basic Usage"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#basic-usage","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("The app is split into 3 states:")]),_v(" "),_c('ol',[_c('li',[_c('p',[_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(" "),_c('a',{attrs:{"href":"/tp/images/list/list_student_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/list/list_student_positive.png","alt":"list STUDENTS"}})])])]),_v(" "),_c('li',[_c('p',[_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" (default)\n"),_c('a',{attrs:{"href":"/tp/images/list/list_schedule_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/list/list_schedule_positive.png","alt":"list SCHEDULE"}})])])]),_v(" "),_c('li',[_c('p',[_c('em',[_c('strong',[_v("TASKS list")])]),_v(" "),_c('a',{attrs:{"href":"/tp/images/list/list_tasks_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/list/list_tasks_positive.png","alt":"list TASKS"}})])])])])]),_v(" "),_c('li',[_c('p',[_v("Each state has its associated features, while certain features work with all states but has differing functionalities.")])]),_v(" "),_c('li',[_c('p',[_v("The "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(" handles student details management, "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" handles lessons, scheduling and the tasks for each lesson while the full "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(" is a view to display all tasks.")])]),_v(" "),_c('li',[_c('p',[_v("The "),_c('em',[_v("GUI")]),_v(" "),_c('sup',[_c('a',{attrs:{"href":"#glossary"}},[_v("1")])]),_v(" has several main components (see "),_c('em',[_v("GUI")]),_v(" "),_c('sup',[_c('a',{attrs:{"href":"#glossary"}},[_v("2")])]),_v(" image below):")]),_v(" "),_c('ul',[_c('li',[_v("The command box is for users to enter and execute commands.")]),_v(" "),_c('li',[_v("The response box is to display responses for command execution, to indicate success or errors.")]),_v(" "),_c('li',[_v("The left side has the list panel, which shows different list types (student, schedule, tasks).")]),_v(" "),_c('li',[_v("The right side has the details panel, which shows details of any specific item in the list.\n"),_c('a',{attrs:{"href":"/tp/images/Ui.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/Ui.png","alt":"Ui"}})])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"viewing-students-list-schedule-list-and-tasks-list"}},[_v("Viewing "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(", "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" and  "),_c('em',[_c('strong',[_v("TASKS list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#viewing-students-list-schedule-list-and-tasks-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("In "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" "),_c('br'),_v("\nExpected: A list of all students with their names is displayed in the list panel. Showing list students is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students email")]),_v(" "),_c('br'),_v("\nExpected: A list of all students with their names and emails is displayed in the list panel.")])])])]),_v(" "),_c('li',[_c('p',[_v("In "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" "),_c('br'),_v("\nExpected: A list of all lessons with their names, date, start and end time is displayed in the list panel. Showing list schedule is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(" "),_c('br'),_v("\nExpected: A list of all lessons with their names, date, start and end time is displayed in the list panel. Showing list schedule is shown in the response box.")])])])]),_v(" "),_c('li',[_c('p',[_v("In "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(" "),_c('br'),_v("\nExpected: The full task list with task description is displayed in the list panel. Showing list tasks is shown in the response box.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"show-feature-2"}},[_v("Show Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#show-feature-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"showing-a-student-in-students-list"}},[_v("Showing a student in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#showing-a-student-in-students-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites: List all students using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" command. There are more than 2 and less than 80 students in the displayed list of students.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_c('br'),_v("\nExpected: The first student in the displayed list of students is shown in the details panel. The details of the first student in the displayed list is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 80")]),_v(" "),_c('br'),_v("\nExpected: Details panel remains the same. Error indicating index is invalid is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"showing-a-lesson-in-schedule-list"}},[_v("Showing a lesson in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#showing-a-lesson-in-schedule-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites: List all lessons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command. There are more than 2 and less than 80 lessons in the displayed list of lessons.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 2")]),_c('br'),_v("\nExpected: The second lesson in the displayed list of lessons is shown in the details panel. The details of the second lesson in the displayed list is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show1")]),_v(" "),_c('br'),_v("\nExpected: Details panel remains the same. Error indicating unknown command is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"showing-a-task-in-task-list"}},[_v("Showing a task in "),_c('em',[_c('strong',[_v("TASK list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#showing-a-task-in-task-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites: List all tasks using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(" command. There are more than 2 and less than 80 tasks in the displayed list of tasks.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 2")]),_c('br'),_v("\nExpected: The second task in the displayed list of tasks is shown in the details panel. The details of the second task in the displayed list is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show -2")]),_c('br'),_v("\nExpected: Details panel remains the same. Error indicating invalid command format with the usage message of show is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"add-feature"}},[_v("Add Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"adding-a-student-in-students-list"}},[_v("Adding a student in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-student-in-students-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites: List all students using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" command. There is currently no student with the name \"Leah\", \"Riley\" and \"Max\".")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name Leah -phone 88888888 -subject biology -remark new student -tag new")]),_c('br'),_v("\nExpected: A new student is added, with name \"Leah\", phone \"88888888\", subject \"BIOLOGY\", remark \"new student\" and tag \"new\". The details of the added student is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name Riley -phone 81818181")]),_v(" (in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(") "),_c('br'),_v("\nExpected: A new student is added, with name \"Riley\" and phone \"81818181\". The details of the added student is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name Lea_h -phone 88888888 -subject biology -remark new student -tag new")]),_c('br'),_v("\nExpected: No student is added. Error indicating invalid format with the name constraints shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name Max -phone abcdefg")]),_v(" "),_c('br'),_v("\nExpected: No student is added. Error indicating invalid format with the phone number constraints shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_v(" "),_c('br'),_v("\nExpected: No student is added. Error indicating invalid format and flag name not found shown in the response box."),_c('br'),_c('br')])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"adding-a-lesson-in-schedule-list"}},[_v("Adding a lesson in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-lesson-in-schedule-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all lessons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command.")]),_v(" "),_c('li',[_v("There is currently no lessons with the name \"Chemistry Lesson at Bedok\" and \"Biology Lesson at Tai Seng\".")]),_v(" "),_c('li',[_v("There are no existing lessons from 12 December 2023 to 15 December 2023 in the application.")]),_v(" "),_c('li',[_v("There is an existing lesson on 11 December 2023 from 11:00 AM to 1:00 PM."),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name Chemistry Lesson at Bedok -day 2023/12/12 -subject chemistry -start 11:00 -end 13:30")]),_c('br'),_v("\nExpected: A new lesson is added, with name \"Chemistry Lesson at Bedok\" from 11:00 AM to 1:30 PM on \"2023/12/12\" with subject \"CHEMISTRY\". The details of the added lesson is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name Biology Lesson at Tai Seng -day 2023/12/13 -start 15:00 -end 14:00")]),_c('br'),_v("\nExpected: No lesson is added. Error indicating invalid lesson format and that the end time cannot be before start time is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name Biology Lesson at Tai Seng -day 2023/12/11 -start 12:00 -end 14:00")]),_c('br'),_v("\nExpected: No lesson is added. Error indicating existing lesson clashes with lesson to be added with the details of the existing lesson in the schedule shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name Biology Lesson at Tai Seng")]),_v(" (in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(") "),_c('br'),_v("\nExpected: A new lesson is added, with name \"Biology Lesson at Tai Seng\". The details of the added lesson is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"adding-a-task-to-a-lesson-in-schedule-list"}},[_v("Adding a task to a lesson in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#adding-a-task-to-a-lesson-in-schedule-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all lessons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command.")]),_v(" "),_c('li',[_v("There is currently no tasks with the name \"Mark Alkanes Practice\" and \"Make Forces Notes\" in all the lessons in the application.")]),_v(" "),_c('li',[_v("There is a task with the description \"Mark Practice Paper\" in all the lessons in the application.")]),_v(" "),_c('li',[_v("There are more than 2 and less than 80 lessons in the displayed list of lessons. "),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask 2 Mark Alkanes Practice")]),_v(" "),_c('br'),_v("\nExpected: A new task is added to the second lesson in the displayed list of lessons, with description \"Mark Alkanes Practice\". The details of the added task is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask Make Forces Notes")]),_v(" (no lesson is shown in details panel) "),_c('br'),_v("\nExpected: No task is added to any of the lessons in the list. Error indicating no lesson is displayed and use show lessonIndex before adding task is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask Make Forces Notes")]),_v(" "),_c('br'),_v("\nExpected: A new task is added to the first lesson in the displayed list of lessons, with description \"Make Forces Notes\". The details of the added task is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask 1 Mark Practice Paper")]),_v(" "),_c('br'),_v("\nExpected: No task is added to the first lesson in the displayed list of lessons. Error indicating existing task with same description in the specified lesson shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask")]),_v(" "),_c('br'),_v("\nExpected: No task is added to any of the lessons in the list. Error indicating invalid description shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"delete-feature"}},[_v("Delete Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#delete-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"deleting-a-student-in-students-list"}},[_v("Deleting a student in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-student-in-students-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites: There are more than 2 students in the displayed list of students.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson 1")]),_c('br'),_v("\nExpected: First student is deleted from the list. Details of the deleted student is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(" (in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(") "),_c('br'),_v("\nExpected: First student is deleted from the list. Details of the deleted student is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson 0")]),_c('br'),_v("\nExpected: No student is deleted. Error indicating index input cannot be zero is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson -1")]),_v(" "),_c('br'),_v("\nExpected: No student is deleted. Error indicating index input cannot be negative is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson")]),_v(" "),_c('br'),_v("\nExpected: No student is deleted. Error indicating invalid command format is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"deleting-a-lesson-in-schedule-list"}},[_v("Deleting a lesson in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-lesson-in-schedule-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites: List all lessons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command. There are more than 2 and less than 80 students in the displayed list of lessons."),_c('br')])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson 1")]),_c('br'),_v("\nExpected: First lesson is deleted from the list. Details of the deleted lesson is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 3")]),_v(" (in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(") "),_c('br'),_v("\nExpected: Third lesson is deleted from the list. Details of the deleted lesson is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson 80")]),_c('br'),_v("\nExpected: No lesson is deleted. Error indicating index input is out of bounds and the acceptable range is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson")]),_v(" "),_c('br'),_v("\nExpected: No lesson is deleted. Error indicating invalid command format is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"deleting-a-task-from-a-lesson-in-schedule-list"}},[_v("Deleting a task from a lesson in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-task-from-a-lesson-in-schedule-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all lessons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command. There are more than 2 lessons in the displayed list of lessons.")]),_v(" "),_c('li',[_v("All lessons have more than 2 and less than 10 tasks. "),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask 2")]),_v(" "),_c('br'),_v("\nExpected: The second task in the task list of the first lesson in the displayed list of lessons is deleted. Details of the deleted task is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask 1")]),_v(" "),_c('br'),_v("\nExpected: No task is deleted. Error indicating the use of show lesson before deleting task is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask 1")]),_v(" (in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(")\nExpected: No task is deleted. Error indicating deleting of tasks only in schedule list is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask 1")]),_v(" (in "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(")\nExpected: No task is deleted. Error indicating deleting of tasks only in schedule list is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"edit-feature"}},[_v("Edit Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#edit-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"editing-a-student-in-students-list"}},[_v("Editing a student in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-student-in-students-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all students using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" command.")]),_v(" "),_c('li',[_v("There is currently no student with the name \"Leah\" and \"Max\".")]),_v(" "),_c('li',[_v("There is an existing student with the name \"Riley\".")]),_v(" "),_c('li',[_v("There are more than 2 students in the displayed list of students. "),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson 1 -name Leah")]),_v(" "),_c('br'),_v("\nExpected: The name of the first student in the displayed list of students is edited to \"Leah\". Details of the edited student is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 -name Max -subject biology")]),_v(" (in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(") "),_c('br'),_v("\nExpected: The name of the second student in the displayed list of students is edited to \"Max\" and the subject of this student is set to \"BIOLOGY\". Details of the edited student is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson 1 -name Riley")]),_v(" "),_c('br'),_v("\nExpected: No student is edited. Error indicating a clash detected is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"editing-a-lesson-in-schedule-list"}},[_v("Editing a lesson in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-a-lesson-in-schedule-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all lessons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command.")]),_v(" "),_c('li',[_v("There is currently no lessons with the name \"Chemistry Lesson at Bedok\", \"Biology Lesson at Tai Seng\" and \"Lesson\".")]),_v(" "),_c('li',[_v("There is an existing lesson on 2023/12/12 from 13:00 to 15:00.")]),_v(" "),_c('li',[_v("There are more than 2 lessons in the displayed list of lessons. "),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson 1 -name Chemistry Lesson at Bedok")]),_v(" "),_c('br'),_v("\nExpected: The name of the first lesson in the displayed list of lessons is edited to \"Chemistry Lesson at Bedok\". Details of the edited lesson is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 2 -name Biology Lesson at Tai Seng -start 10:00 -end 12:00")]),_v(" (in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(") "),_c('br'),_v("\nExpected: The name and time of the second lesson in the displayed list of lessons is edited to \"Biology Lesson at Tai Seng\" and \"10:00AM\" to \"12:00PM\" respectively. Details of the edited lesson is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson 1 -name Lesson -start 12:00 -end 14:00 -day 2023/12/12")]),_v(" "),_c('br'),_v("\nExpected: No lesson is edited. Error indicating a clash detected is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"find-feature"}},[_v("Find Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#find-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"finding-a-student-by-name-in-students-list"}},[_v("Finding a student by name in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#finding-a-student-by-name-in-students-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all students using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" command.")]),_v(" "),_c('li',[_v("There are currently four students with names \"Alex Wong\", \"Alex Yeoh\", \"Willy Wonka\" and \"Wong Max\". "),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find Alex")]),_v(" "),_c('br'),_v("\nExpected: Only students with the name \"Alex Wong\" and \"Alex Yeoh\" are shown in the list panel. A message indicating the number of students listed is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find alex")]),_v(" "),_c('br'),_v("\nExpected: Only students with the name \"Alex Wong\" and \"Alex Yeoh\" are shown in the list panel. A message indicating the number of students listed is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find won")]),_v(" "),_c('br'),_v("\nExpected: Only students with the name \"Alex Wong\", \"Willy Wonka\"  and \"Wong Max\" are shown in the list panel. A message indicating the number of students listed is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find xyz")]),_v(" "),_c('br'),_v("\nExpected: No students are shown. A message indicating 0 persons listed is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"finding-a-lesson-by-name-in-schedule-list"}},[_v("Finding a lesson by name in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#finding-a-lesson-by-name-in-schedule-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all lessons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command.")]),_v(" "),_c('li',[_v("There are currently three lessons with names \"Chemistry Lesson at bedok\", \"lesson chem at kovan\" and \"bedok eng\". "),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find chem")]),_v(" "),_c('br'),_v("\nExpected: Only lessons with the name \"Chemistry Lesson at bedok\" and \"lesson chem at kovan\" are shown in the list panel. A message indicating the number of lessons listed is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find bedok")]),_v(" "),_c('br'),_v("\nExpected: Only students with the name \"Chemistry Lesson at bedok\" and \"bedok eng\" are shown in the list panel. A message indicating the number of lessons listed is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" "),_c('br'),_v("\nExpected: List panel remains the same. Error indicating invalid command format is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"filter-feature"}},[_v("Filter Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filter-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"filtering-a-student-in-students-list"}},[_v("Filtering a student in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filtering-a-student-in-students-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all students using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" command.")]),_v(" "),_c('li',[_v("There are currently four students with \"ENGLISH\" as subjects.")]),_v(" "),_c('li',[_v("There are currently three students with \"new\" tag.")]),_v(" "),_c('li',[_v("There are currently two students with \"yet to pay\" remark. "),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -subject english")]),_v(" "),_c('br'),_v("\nExpected: Four students are shown in the list panel. A message indicating filtered student list successfully is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -tag new")]),_v(" "),_c('br'),_v("\nExpected: Three students are shown in the list panel. A message indicating filtered student list successfully is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -remark yet to pay")]),_v(" "),_c('br'),_v("\nExpected: Two students are shown in the list panel. A message indicating filtered student list successfully is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -subject bio")]),_v(" "),_c('br'),_v("\nExpected: List panel remains the same. Error indicating invalid filter format and subject constraints is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"filtering-a-lesson-in-schedule-list"}},[_v("Filtering a lesson in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filtering-a-lesson-in-schedule-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all lessons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command.")]),_v(" "),_c('li',[_v("There are currently four lessons with \"PHYSICS\" as subjects.")]),_v(" "),_c('li',[_v("There are currently two lessons on 12/12/2023, one lesson on 13/12/2023, three lessons on 14/12/2023.")]),_v(" "),_c('li',[_v("There are currently two lessons with no date specified. "),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -subject physics")]),_v(" "),_c('br'),_v("\nExpected: Four lessons are shown in the list panel. A message indicating filtered schedule list successfully is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -on 2023/12/12")]),_v(" "),_c('br'),_v("\nExpected: Two lessons are shown in the list panel. A message indicating filtered schedule list successfully is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -after 2023/12/13")]),_v(" "),_c('br'),_v("\nExpected: Five lessons are shown in the list panel (three lessons on 14/12/2023 & two lessons with no date specified). A message indicating filtered schedule list successfully is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter -before 2023/10/10")]),_v(" "),_c('br'),_v("\nExpected: No lessons are shown in the list panel. A message indicating filtered schedule list successfully is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"link-feature"}},[_v("Link Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#link-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"linking-a-lesson-to-a-student-in-students-list"}},[_v("Linking a lesson to a student in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#linking-a-lesson-to-a-student-in-students-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all students using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" command.")]),_v(" "),_c('li',[_v("The first student in the list has the name \"Alex Yeoh\" with one lesson named \"Bedok Lesson\" linked to him.")]),_v(" "),_c('li',[_v("There are currently three lessons with names \"Chemistry Lesson at Bedok\", \"Biology Lesson at Bedok\" and \"Bedok Lesson\".\n"),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo Chemistry Lesson at Bedok")]),_v(" "),_c('br'),_v("\nExpected: Lesson with the name \"Chemistry Lesson at Bedok\" is linked to the currently shown student (\"Alex Yeoh\") in the details panel. A message indicating student linked to lesson is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("link -student alex yeoh -lesson biology lesson at bedok")]),_v(" "),_c('br'),_v("\nExpected: Student \"Alex Yeoh\" is linked to the lesson with the name \"Biology Lesson at Bedok\". A message indicating student linked to lesson is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo bedok")]),_v(" "),_c('br'),_v("\nExpected: No lesson is added to the currently shown student in the details panel. Error indicating no such lesson is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo")]),_v(" "),_c('br'),_v("\nExpected: No lesson is added to any student. Error indicating name should be alphanumeric and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo")]),_v(" command usage is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"linking-a-student-to-a-lesson-in-schedule-list"}},[_v("Linking a student to a lesson in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#linking-a-student-to-a-lesson-in-schedule-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all lessons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command.")]),_v(" "),_c('li',[_v("The first lesson in the list has the name \"Bedok Lesson\" with one student named \"Alex Wong\" linked to it.")]),_v(" "),_c('li',[_v("There are currently four students with names \"Alex Wong\", \"Alex Yeoh\", \"Willy Wonka\" and \"Willy Max\".")]),_v(" "),_c('li',[_v("Only \"Alex Wong\" has a lesson linked to him. All other students have no lessons linked to them. "),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo Alex Yeoh")]),_v(" "),_c('br'),_v("\nExpected: Student \"Alex Yeoh\" is linked to the currently shown lesson in the details panel. A message indicating student linked to lesson is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("link -student willy max -lesson bedok lesson")]),_v(" "),_c('br'),_v("\nExpected: Student \"Willy Max\" is linked to the lesson with the name \"Bedok Lesson\". A message indicating student linked to lesson is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo willy")]),_v(" "),_c('br'),_v("\nExpected: No student is added to the currently shown lesson in the details panel. Error indicating no student with name \"willy\" found is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo alex wong")]),_v(" "),_c('br'),_v("\nExpected: No student is added to the currently shown lesson in the details panel. A message indicating student is already linked to lesson is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"navigate-feature"}},[_v("Navigate Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#navigate-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"navigating-to-lessons-linked-to-a-student-in-students-list"}},[_v("Navigating to lessons linked to a student in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#navigating-to-lessons-linked-to-a-student-in-students-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all students using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" command.")]),_v(" "),_c('li',[_v("The first student in the list is named \"Alex Yeoh\" with three lessons linked to him.")]),_v(" "),_c('li',[_v("The second student in the list is named \"Willy Wonka\" with no lessons linked to him."),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")]),_v(" "),_c('br'),_v("\nExpected: Three lessons are shown in the list panel. A message indicating navigated to student's lesson is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 2")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")]),_v(" "),_c('br'),_v("\nExpected: List panel remains the same. Error indicating no lessons linked to student is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h5',{attrs:{"id":"navigating-to-students-linked-to-a-lesson-in-schedule-list"}},[_v("Navigating to students linked to a lesson in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#navigating-to-students-linked-to-a-lesson-in-schedule-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("List all lessons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command.")]),_v(" "),_c('li',[_v("The first lesson in the list is named \"Lesson at Bedok\" with two students linked to it.")]),_v(" "),_c('li',[_v("The second lesson in the list is named \"Lesson at Punggol\" with no student linked to it."),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")]),_v(" "),_c('br'),_v("\nExpected: Two students are shown in the list panel. A message indicating navigated to lesson's students is shown in the response box.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 2")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")]),_v(" "),_c('br'),_v("\nExpected: List panel remains the same. Error indicating the lesson has no linked students is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"command-history-feature"}},[_v("Command History Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-history-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("Re-launch the application.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(" were entered in this order into the command box."),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: (Steps 1 to 5 below are performed sequentially.)")]),_v(" "),_c('ul',[_c('li',[_v("Step 1. Press the arrow up button on keyboard. "),_c('br'),_v("\nExpected: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(" is shown in the command box.")]),_v(" "),_c('li',[_v("Step 2. Press the arrow up button on keyboard again."),_c('br'),_v("\nExpected: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(" is shown in the command box.")]),_v(" "),_c('li',[_v("Step 3. Press the arrow up button on keyboard again."),_c('br'),_v("\nExpected: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" is shown in the command box.")]),_v(" "),_c('li',[_v("Step 4. Press the arrow up button on keyboard again."),_c('br'),_v("\nExpected: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" remains in the command box.")]),_v(" "),_c('li',[_v("Step 5. Press the arrow down button on keyboard."),_c('br'),_v("\nExpected: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(" is shown in the command box.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clear"}},[_v("Clear"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clear","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("There are more than 1 student, 1 lesson and 1 task in the application."),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(" "),_c('br'),_v("\nExpected: The list panel becomes empty. A message indicating student, schedule and task list is cleared is shown in the response box.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"exit"}},[_v("Exit"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Prerequisites:")]),_v(" "),_c('ul',[_c('li',[_v("Run the application."),_c('br'),_c('br')])])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" "),_c('br'),_v("\nExpected: The application exits.")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-data"}},[_v("Saving data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Dealing with missing/corrupted data files")]),_v(" "),_c('ol',[_c('li',[_v("If a missing file is detected, the system will automatically create a .json file.")]),_v(" "),_c('li',[_v("If a corrupted file is detected (i.e. missing any key properties), the system will delete the corrupted file, and replace it with a new one.")]),_v(" "),_c('li',[_v("The .json file will be populated with sample content loaded from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SampleDataUtil.java")]),_v(".")])])]),_v(" "),_c('li',[_c('p',[_v("Saving")]),_v(" "),_c('ol',[_c('li',[_v("Data is written to the file after every command.")])])]),_v(" "),_c('li',[_c('p',[_v("Test cases")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-planned-enhancements"}},[_c('strong',[_v("Appendix: Planned Enhancements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-planned-enhancements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-of-tags"}},[_v("Deleting of tags"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-of-tags","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Relevant feature:")]),_v(" editing of students "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson")])]),_v(" "),_c('li',[_c('strong',[_v("Current issues:")]),_v(" Once a tag is added to a student, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson")]),_v(" command prevents you from deleting the tag. This is because by specifying the flag "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-tag")]),_v(", the parameter provided as the tag must be a non-empty string.")]),_v(" "),_c('li',[_c('strong',[_v("Proposed new behaviour:")]),_v(" The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-tag")]),_v(" flag can be made to accept an empty string.\n"),_c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson 1 -tag")])]),_v(" "),_c('li',[_v("Expected output: The person at index 1 should have no more tags set.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"unlinking-of-students-from-lessons-and-vice-versa"}},[_v("Unlinking of students from lessons and vice versa"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#unlinking-of-students-from-lessons-and-vice-versa","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Relevant feature:")]),_v(" linking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("link")])]),_v(" "),_c('li',[_c('strong',[_v("Current issues:")]),_v(" Once a student has been linked to a lesson, there is no way to unlink them.")]),_v(" "),_c('li',[_c('strong',[_v("Proposed new behaviour:")]),_v(" A new "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unlinkFrom")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unlink")]),_v(" command that mirrors "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("link")]),_v(", which will unlink the specified lesson and student if it detects that they have already been linked.\n"),_c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo Bernice Yu")])]),_v(" "),_c('li',[_v("Expected output: Bernice Yu is linked to the current lesson")]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unlinkFrom Bernice Yu")])]),_v(" "),_c('li',[_v("Expected output: Bernice Yu is unlinked from the current lesson.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"navigating-from-tasks-to-lesson"}},[_v("Navigating from tasks to lesson"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#navigating-from-tasks-to-lesson","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Relevant feature:")]),_v(" Task Lists "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")])]),_v(" "),_c('li',[_c('strong',[_v("Current issues:")]),_v(" There's no way to see what lesson a task is under.")]),_v(" "),_c('li',[_c('strong',[_v("Proposed new behaviour:")]),_v(" The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")]),_v(" command should also work when viewing a task.\n"),_c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")])]),_v(" "),_c('li',[_v("Expected output: The screen changes to the lesson that the task is assigned to.")])])])])}
}];
  