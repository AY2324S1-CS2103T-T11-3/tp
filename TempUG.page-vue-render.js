
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("TutorMate")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2324S1-CS2103T-T11-3/tp","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('br'),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('br'),_v(" "),_m(1),_v(" "),_c('p',[_v("TutorMate is a desktop app targeted to private tuition teachers on handling tuition related matters.")]),_v(" "),_c('p',[_v("It is optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI).\nIf you can type fast, TutorMate can get your administrative tasks done faster than traditional GUI apps.")]),_v(" "),_c('p',[_v("This document describes the main features of TutorMate:")]),_v(" "),_m(2),_v(" "),_c('p',[_v("With a customised student list and schedule in TutorMate just for you, organising lessons and managing students\nwill be the least of your worries.")]),_v(" "),_m(3),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('hr'),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_m(10),_v(" "),_c('ul',[_m(11),_v(" "),_c('li',[_c('box',{attrs:{"type":"info","seamless":""}},[_v("This box denotes additional information.")])],1),_v(" "),_c('li',[_c('box',{attrs:{"type":"tip","seamless":""}},[_v("This box denotes tips to improve usability.")])],1),_v(" "),_c('li',[_c('box',{attrs:{"type":"warning","seamless":""}},[_v("This box denotes warnings that can cause errors.")])],1)]),_v(" "),_m(12),_m(13),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('ul',[_c('li',[_v("Words in upper case are compulsory parameters to be supplied by the user."),_c('br'),_v("\ne.g. in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" is a parameter which can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name Leah")]),_v(".\nIn this case, \"Leah\" is substituted for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(".")]),_v(" "),_c('li',[_v("Words in square brackets are optional."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list [LIST] [KEYWORDS]")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" or as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students email")]),_v(", though the behaviour may differ.")]),_v(" "),_c('li',[_v("Flags can be in any order."),_c('br'),_v("\ne.g. both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("link -student student name -lesson lesson name")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("link -lesson lesson name -student student name")]),_v(" are acceptable.")]),_v(" "),_c('li',[_v("Parameters without a flag need to strictly follow the order specified."),_c('br'),_v("\ne.g. For delete command which specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete INDEX")]),_v(", the \"index\" parameter must immediately follow the command name \"delete\"."),_c('br')]),_v(" "),_c('li',[_v("All command name are case-insensitive. "),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo")]),_v(" is the same as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkto")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LiNkTo")]),_v(".")]),_v(" "),_c('li',[_v("When applicable, extraneous parameters and flags for commands will be ignored ."),_c('br'),_v("\ne.g. if the command entered is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add info -name new name -notValid flagBody -subject physics")]),_v(", it will be interpreted as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name new name -subject physics")]),_v(". \"info \" and \"-notValid flagBody\" will be ignored. "),_c('br'),_v("\ne.g. However, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete extra 3")]),_v(" will not be accepted as delete command specifies that the index parameter must immediately follow the command name.")])])]),_v(" "),_m(14),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('ul',[_c('li',[_v("Please avoid using \" -\" in the value of a parameter as tutorMate treats \" -\" as a reserved word that signifies the start of a new flag.")]),_v(" "),_c('li',[_v("Please do not abuse the parser of tutorMate. For example, do not game it with special characters or code injections. TutorMate does not guarantee the behaviour of the application on deliberate and malicious abuse beyond supported normal usage.")]),_v(" "),_c('li',[_v("TutorMate supports a maximum of 99999 students, 99999 lessons and 99999 tasks. Further data beyond this limit might be lost and not accessible in the application.")]),_v(" "),_c('li',[_v("Please avoid manually modifying the data files in the data folder. Doing so may result in unexpected behaviour and data loss.")]),_v(" "),_c('li',[_v("Please avoid running multiple instances of TutorMate at the same time. Doing so may result in unexpected behaviour and data loss.")]),_v(" "),_c('li',[_v("If you are using a PDF version of this document, be careful when copying and pasting commands that span multiple lines as space characters surrounding line-breaks may be omitted when copied over to the application.")])])]),_v(" "),_m(15),_v(" "),_m(16),_c('hr'),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('p',[_v("The list command is the way to navigate between the 3 states in our app.\nIt will display the specified list and its corresponding details panel.")]),_v(" "),_m(19),_v(" "),_m(20),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" without specifying the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[LIST]")]),_v(" parameter defaults to showing the "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(".")])])]),_v(" "),_m(21),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(22),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(23),_v(" "),_m(24),_m(25),_v(" "),_m(26),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(27),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(28),_v(" "),_m(29),_m(30),_v(" "),_m(31),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(32),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(33),_v(" "),_m(34),_m(35),_v(" "),_m(36),_v(" "),_m(37),_v(" "),_m(38),_v(" "),_c('p',[_v("Failure outputs:")]),_v(" "),_m(39),_v(" "),_m(40),_c('br'),_v(" "),_m(41),_v(" "),_c('p',[_v("The show command has different behaviours depending on the current list. It shows the details of the specified item in the current list in the application.")]),_v(" "),_m(42),_v(" "),_m(43),_v(" "),_m(44),_v(" "),_m(45),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(46),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(47),_v(" "),_m(48),_m(49),_v(" "),_m(50),_v(" "),_m(51),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(52),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(53),_v(" "),_m(54),_m(55),_v(" "),_m(56),_v(" "),_m(57),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(58),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(59),_v(" "),_m(60),_m(61),_v(" "),_m(62),_v(" "),_c('p',[_v("Failure outputs:")]),_v(" "),_m(63),_v(" "),_m(64),_m(65),_v(" "),_m(66),_c('br'),_v(" "),_m(67),_v(" "),_c('p',[_v("Adds a student/lesson/task to the students/schedule list of the application or the task list of a lesson in the application.")]),_v(" "),_m(68),_v(" "),_m(69),_v(" "),_m(70),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("If the user is currently in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(", the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(".")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(71),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(72),_v(" "),_m(73),_m(74),_v(" "),_c('p',[_v("Failure outputs:")]),_v(" "),_m(75),_v(" "),_m(76),_m(77),_v(" "),_m(78),_v(" "),_m(79),_v(" "),_m(80),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")]),_v("\nIf the user is currently in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(", the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(".")])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(81),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(82),_v(" "),_m(83),_m(84),_v(" "),_m(85),_c('p',[_v("Failure outputs:")]),_v(" "),_m(86),_v(" "),_m(87),_m(88),_v(" "),_m(89),_m(90),_v(" "),_m(91),_v(" "),_m(92),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(93),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(94),_v(" "),_m(95),_m(96),_v(" "),_m(97),_c('p',[_v("Failure outputs:")]),_v(" "),_m(98),_v(" "),_m(99),_c('br'),_v(" "),_m(100),_v(" "),_m(101),_v(" "),_m(102),_v(" "),_m(103),_v(" "),_m(104),_v(" "),_m(105),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("If the user is currently in the "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(", the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(".")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(106),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(107),_v(" "),_m(108),_c('p',[_v("Failure outputs:")]),_v(" "),_m(109),_v(" "),_m(110),_m(111),_v(" "),_m(112),_v(" "),_m(113),_v(" "),_m(114),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("If the user is currently in the "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(", the command can be shortened to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(".")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(115),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(116),_v(" "),_m(117),_c('p',[_v("Failure outputs:")]),_v(" "),_m(118),_v(" "),_m(119),_m(120),_v(" "),_m(121),_v(" "),_m(122),_v(" "),_m(123),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_c('strong',[_v("Caution:")]),_v("\nThe deleteTask command can only be used in the "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" and while a lesson is shown.")])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(124),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(125),_v(" "),_m(126),_c('p',[_v("Failure outputs:")]),_v(" "),_m(127),_v(" "),_m(128),_m(129),_v(" "),_m(130),_m(131),_v(" "),_m(132),_c('br'),_v(" "),_m(133),_v(" "),_c('p',[_v("About the feature (generally that is similar across states)")]),_v(" "),_m(134),_v(" "),_m(135),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_m(136),_v(" "),_m(137),_v(" "),_m(138),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(139),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(140),_v(" "),_m(141),_c('p',[_v("Failure outputs:")]),_v(" "),_m(142),_v(" "),_m(143),_m(144),_v(" "),_m(145),_m(146),_v(" "),_m(147),_v(" "),_m(148),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(149),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(150),_v(" "),_m(151),_c('p',[_v("Failure outputs:")]),_v(" "),_m(152),_v(" "),_m(153),_m(154),_v(" "),_m(155),_m(156),_v(" "),_m(157),_v(" "),_c('br'),_v(" "),_m(158),_v(" "),_m(159),_v(" "),_m(160),_v(" "),_m(161),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_c('strong',[_v("Caution:")])]),_v(" "),_c('ul',[_c('li',[_v("Find tasks by name/description is disabled.")]),_v(" "),_c('li',[_v("Tasks can be found based on the lesson (find lesson by name) and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_v(" lesson to see list of tasks of the lesson.")])])]),_v(" "),_m(162),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(163),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(164),_v(" "),_m(165),_m(166),_v(" "),_m(167),_m(168),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(169),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(170),_v(" "),_m(171),_m(172),_v(" "),_m(173),_m(174),_v(" "),_c('p',[_v("Failure outputs:")]),_v(" "),_m(175),_v(" "),_m(176),_m(177),_v(" "),_m(178),_c('br'),_v(" "),_m(179),_v(" "),_c('p',[_v("About the feature (generally that is similar across states)")]),_v(" "),_m(180),_v(" "),_m(181),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_m(182),_v(" "),_m(183),_v(" "),_m(184),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(185),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(186),_v(" "),_m(187),_c('p',[_v("Failure outputs:")]),_v(" "),_m(188),_v(" "),_m(189),_m(190),_v(" "),_m(191),_m(192),_v(" "),_m(193),_v(" "),_m(194),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(195),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(196),_v(" "),_m(197),_c('p',[_v("Failure outputs:")]),_v(" "),_m(198),_v(" "),_m(199),_m(200),_v(" "),_m(201),_m(202),_v(" "),_m(203),_v(" "),_m(204),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(205),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(206),_v(" "),_m(207),_c('p',[_v("Failure outputs:")]),_v(" "),_m(208),_v(" "),_m(209),_m(210),_v(" "),_m(211),_c('br'),_v(" "),_m(212),_v(" "),_c('p',[_v("About the feature (generally that is similar across states)")]),_v(" "),_m(213),_v(" "),_m(214),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_m(215),_v(" "),_m(216),_v(" "),_m(217),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(218),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(219),_v(" "),_m(220),_c('p',[_v("Failure outputs:")]),_v(" "),_m(221),_v(" "),_m(222),_m(223),_v(" "),_m(224),_m(225),_v(" "),_m(226),_v(" "),_m(227),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(228),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(229),_v(" "),_m(230),_c('p',[_v("Failure outputs:")]),_v(" "),_m(231),_v(" "),_m(232),_m(233),_v(" "),_m(234),_m(235),_v(" "),_m(236),_v(" "),_m(237),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(238),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(239),_v(" "),_m(240),_c('p',[_v("Failure outputs:")]),_v(" "),_m(241),_v(" "),_m(242),_m(243),_v(" "),_m(244),_c('br'),_v(" "),_m(245),_v(" "),_c('p',[_v("About the feature (generally that is similar across states)")]),_v(" "),_m(246),_v(" "),_m(247),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_m(248),_v(" "),_m(249),_v(" "),_m(250),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(251),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(252),_v(" "),_m(253),_c('p',[_v("Failure outputs:")]),_v(" "),_m(254),_v(" "),_m(255),_m(256),_v(" "),_m(257),_m(258),_v(" "),_m(259),_v(" "),_m(260),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(261),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(262),_v(" "),_m(263),_c('p',[_v("Failure outputs:")]),_v(" "),_m(264),_v(" "),_m(265),_m(266),_v(" "),_m(267),_m(268),_v(" "),_m(269),_v(" "),_m(270),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(271),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(272),_v(" "),_m(273),_c('p',[_v("Failure outputs:")]),_v(" "),_m(274),_v(" "),_m(275),_m(276),_v(" "),_m(277),_c('br'),_v(" "),_m(278),_v(" "),_c('p',[_v("The command history feature allows you to retrieve previously typed commands into the command text box.")]),_v(" "),_m(279),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Command history is only valid per session, it does not save into storage.")]),_v(" "),_c('li',[_v("Invalid commands are also saved into command history.")]),_v(" "),_c('li',[_v("During each successful command execution, the pointer resets again, hence pressing the up or down arrow will point and return the most recent command text.")]),_v(" "),_c('li',[_v("Retrieved commands will replace the existing text in command box.")])])]),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_c('strong',[_v("Caution:")])]),_v(" "),_c('ul',[_c('li',[_v("The index in command history remains when user clears the command box while scrolling through the history.")]),_v(" "),_c('li',[_v("e.g. For the history ["),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v("], if user is retrieves the command history with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" and clears his command box, pressing up again will retrieve "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(".")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(280),_v(" "),_m(281),_v(" "),_c('br'),_v(" "),_m(282),_v(" "),_c('p',[_v("Clears the program data.")]),_v(" "),_m(283),_v(" "),_c('br'),_v(" "),_m(284),_v(" "),_c('p',[_v("Exits the program.")]),_v(" "),_m(285),_v(" "),_c('br'),_v(" "),_m(286),_v(" "),_c('p',[_v("Shows a message explaining how to access the help page.\nClick on the button to copy the link, enter it in a web browser to visit our user guide.")]),_v(" "),_m(287),_v(" "),_m(288),_v(" "),_c('br'),_v(" "),_m(289),_v(" "),_c('p',[_v("TutorMate data is saved in the hard disk automatically after any command that changes the data. There is no need to save manually.")]),_v(" "),_c('br'),_v(" "),_m(290),_v(" "),_m(291),_v(" "),_c('box',{attrs:{"type":"warning","seamless":""}},[_c('p',[_c('strong',[_v("Caution:")]),_v("\nIf your changes to the data file makes its format invalid, TutorMate will discard all data and start with an empty data file at the next run.  Hence, it is recommended to take a backup of the file before editing it.")])]),_v(" "),_c('hr'),_v(" "),_m(292),_v(" "),_m(293),_v(" "),_m(294),_v(" "),_m(295),_v(" "),_c('hr'),_v(" "),_m(296),_v(" "),_m(297),_v(" "),_c('hr'),_v(" "),_m(298),_v(" "),_m(299),_c('hr'),_v(" "),_m(300),_v(" "),_m(301)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#tutormate-user-guide"}},[_v("TutorMate User Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#about"}},[_v("About‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#quick-start"}},[_v("Quick Start‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#important-notes"}},[_v("Important Notes‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#basic-usage"}},[_v("Basic Usage‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#terminologies-symbols"}},[_v("Terminologies / Symbols‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#notes-on-command-format"}},[_v("Notes on Command Format‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#other-notes"}},[_v("Other Notes‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#parameter-summary"}},[_v("Parameter Summary‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#features"}},[_v("Features‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#list-feature-list"}},[_v("List Feature : list‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#show-feature-show"}},[_v("Show Feature : show‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#add-feature"}},[_v("Add Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#delete-feature"}},[_v("Delete Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#edit-feature"}},[_v("Edit Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#find-feature-find"}},[_v("Find Feature : find‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#filter-feature-filter"}},[_v("Filter Feature : filter‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#link-feature-linkto"}},[_v("Link Feature : linkTo‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#navigate-feature-nav"}},[_v("Navigate Feature : nav‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-history-feature"}},[_v("Command History Feature‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#clearing-data-clear"}},[_v("Clearing Data : clear‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#exit-program-exit"}},[_v("Exit Program : exit‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#view-help-help"}},[_v("View Help : help‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#saving-data"}},[_v("Saving Data‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#editing-data-file"}},[_v("Editing Data File‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#faq"}},[_v("FAQ‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#known-issues"}},[_v("Known Issues‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-summary"}},[_v("Command Summary‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#glossary"}},[_v("Glossary‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h1',{attrs:{"id":"tutormate-user-guide"}},[_v("TutorMate User Guide"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tutormate-user-guide","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"about"}},[_v("About"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#about","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Student Management System: track all student details")]),_v(" "),_c('li',[_v("Lesson Schedule: easily plan and manage lessons")]),_v(" "),_c('li',[_v("Task Lists: keep track of tasks to be done for lessons")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("This project is based on the "),_c('a',{attrs:{"href":"https://se-education.org"}},[_v("AddressBook-Level3 project")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"quick-start"}},[_v("Quick Start"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quick-start","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java 11 or above installed in your Computer. You can check by opening a command terminal and typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -version")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tutormate.jar")]),_v(" from "),_c('a',{attrs:{"href":"https://github.com/AY2324S1-CS2103T-T11-3/tp/releases"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the file to the folder you want to use as the "),_c('em',[_v("home folder")]),_v(" for your TutorMate.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, navigate into the home folder using the change directory command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(", and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar tutormate.jar")]),_v(" command to run the application."),_c('br'),_v("\nA GUI similar to the below should appear in a few seconds. Note how the app contains some sample data."),_c('br')]),_v(" "),_c('p',[_c('a',{attrs:{"href":"/tp/images/about.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/about.png","alt":"Ui"}})])])]),_v(" "),_c('li',[_c('p',[_v("Type the command in the command box and press Enter to execute it. e.g. typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" and pressing Enter will open the help window."),_c('br'),_v("\nSome example commands you can try:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" : Lists all students with their name.")])]),_v(" "),_c('li',[_c('p',[_v("In "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(":")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name Leah")]),_v(" : Adds a student named \"Leah\" to the application.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 3")]),_v(" : Shows the details of the person with the index 3 in TutorMate.")])])])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" : Exits the app.")])])])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#features"}},[_v("Features")]),_v(" below for details of each command.")])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#command-summary"}},[_v("Command Summary")]),_v(" below for the summary of all commands.")])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#glossary"}},[_v("Glossary")]),_v(" below for definitions of glossary terms.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"important-notes"}},[_v("Important Notes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#important-notes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"basic-usage"}},[_v("Basic Usage"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#basic-usage","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The app is split into 3 states: "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(", "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" (default) and "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(". Each corresponds to the main features of TutorMate.")]),_v(" "),_c('li',[_v("Each state has its associated features, while certain features work with all states but has differing functionalities.")]),_v(" "),_c('li',[_v("The "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(" handles student details management, "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" handles lessons, scheduling and the tasks for each lesson while the full "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(" is a view to display all tasks.")]),_v(" "),_c('li',[_v("The GUI has several main components (see GUI image below):\n"),_c('ul',[_c('li',[_v("The command box is for users to enter and execute commands.")]),_v(" "),_c('li',[_v("The response box is to display responses for command execution, to indicate success or errors.")]),_v(" "),_c('li',[_v("The left side has the list panel, which shows different list types (student, schedule, tasks).")]),_v(" "),_c('li',[_v("The right side has the details panel, which shows details of any specific item in the list.\n"),_c('a',{attrs:{"href":"/tp/images/Ui.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/Ui.png","alt":"Ui"}})])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"terminologies-symbols"}},[_v("Terminologies / Symbols"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#terminologies-symbols","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Flag: denoted with a dash before the flag name e.g. -name.")])])}
},function anonymous(
) {
with(this){return _c('li',[_v("Text formatted as code snippets are either commands e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(", command formats e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list [LIST][KEYWORDS]")]),_v(" or parameters e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This box denotes command outputs.\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"notes-on-command-format"}},[_v("Notes on Command Format"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#notes-on-command-format","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"other-notes"}},[_v("Other Notes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#other-notes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"parameter-summary"}},[_v("Parameter Summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#parameter-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Parameter")]),_v(" "),_c('th',[_v("Used in")]),_v(" "),_c('th',[_v("Constraints")]),_v(" "),_c('th',[_v("Valid examples")]),_v(" "),_c('th',[_v("Invalid examples")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson")])]),_v(" "),_c('td',[_v("Must be a positive integer in the range of 1 to 99999 inclusive.")]),_v(" "),_c('td',[_v("\"1\", \"24\", \"12\"")]),_v(" "),_c('td',[_v("\"-1\", \"2147483648\", \"10000\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LIST")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")])]),_v(" "),_c('td',[_v("Must be either \"Students\", \"Schedule\", \"Tasks\". Parameter is case-insensitive.")]),_v(" "),_c('td',[_v("\"STUDENTS\", \"stuDEnts\"")]),_v(" "),_c('td',[_v("\"task\", \"student\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("KEYWORDS")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")])]),_v(" "),_c('td',[_v("Must be either \"phone\", \"email\", \"address\", \"tags\", \"subjects\", \"remark\", \"none\", or \"all\"")]),_v(" "),_c('td',[_v("\"none\", \"all\", \"subJeCts\"")]),_v(" "),_c('td',[_v("\"subject\", \"\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")])]),_v(" "),_c('td',[_v("Must not be empty. "),_c('br'),_v("Must only contain alphanumeric characters.")]),_v(" "),_c('td',[_v("\"John\", \"Elton\"")]),_v(" "),_c('td',[_v("\"\", \"jo!\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SUBJECT")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson")])]),_v(" "),_c('td',[_v("Must be either \"Mathematics\", \"Physics\", "),_c('br'),_v("\"Biology\", \"Chemistry\" or \"English\".")]),_v(" "),_c('td',[_v("\"mathematics\", \"MATHEMATICS\",")]),_v(" "),_c('td',[_v("\"math\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SUBJECTS")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")])]),_v(" "),_c('td',[_v("Must be a valid SUBJECT (see row above) or multiple entries of SUBJECT separated using a comma (,).")]),_v(" "),_c('td',[_v("\"mathematics\", \"mathematics, physics\"")]),_v(" "),_c('td',[_v("\"math, physics\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PHONE")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson")])]),_v(" "),_c('td',[_v("Should be at least 3 characters long, and can only contain numbers.")]),_v(" "),_c('td',[_v("\"96681234\", \"823234\"")]),_v(" "),_c('td',[_v("\"+6592212341\", \"98\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EMAIL")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson")])]),_v(" "),_c('td',[_v("Should follow the format localpart@domain."),_c('br'),_v("The local-part should only contain alphanumeric characters and these special characters, excluding the parentheses, (+_.-). The local-part may not start or end with any special characters."),_c('br'),_v("This is followed by a '@' and then a domain name. The domain name is made up of domain labels separated by periods."),_c('br'),_v("The domain name must:"),_c('br'),_v("- end with a domain label at least 2 characters long"),_c('br'),_v("- have each domain label start and end with alphanumeric characters"),_c('br'),_v("- have each domain label consist of alphanumeric characters, separated only by hyphens, if any.")]),_v(" "),_c('td',[_v("\""),_c('a',{attrs:{"href":"mailto:hello@gmail.com"}},[_v("hello@gmail.com")]),_v("\", \""),_c('a',{attrs:{"href":"mailto:test@g.com"}},[_v("test@g.com")]),_v("\"")]),_v(" "),_c('td',[_v("\"hello.com\", \"f@f\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ADDRESS")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson")])]),_v(" "),_c('td',[_v("Must not be empty.")]),_v(" "),_c('td',[_v("\"Bedok\", \"25 Lower Kent Ridge Road\"")]),_v(" "),_c('td',[_v("\"\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TAG")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPerson")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")])]),_v(" "),_c('td',[_v("Must not be empty and cannot contain any spaces. Multiple tags can be specified at once by using a comma (,) as a separator.")]),_v(" "),_c('td',[_v("\"jc,express\", \"weak\"")]),_v(" "),_c('td',[_v("\"junior college\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DATE")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")])]),_v(" "),_c('td',[_v("Must follow either the date format "),_c('strong',[_v("yyyy/MM/dd")]),_v(", "),_c('strong',[_v("yy/MM/dd")]),_v(", "),_c('strong',[_v("MM/dd")]),_v(", "),_c('strong',[_v("dd")]),_v(". See "),_c('a',{attrs:{"href":"https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table"}},[_v("here")]),_v(" for an exhaustive explanation of the allowable formats.")]),_v(" "),_c('td',[_v("To represent the date 13/08/2023 and assuming today is 07/08/2023: "),_c('br'),_v("\"2023/08/13\", \"23/08/13\", \"08/13\", \"13\"")]),_v(" "),_c('td',[_v("\"20222/08/2\", \"13/1\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TIME")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson")]),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editLesson")]),_c('br'),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")])]),_v(" "),_c('td',[_v("Must follow either HH:MM or H:MM (only for 0:00 to 9:59)")]),_v(" "),_c('td',[_v("\"13:30\", \"9:17\"")]),_v(" "),_c('td',[_v("\"9:1\", \"13:70\"")])]),_v(" "),_c('tr',[_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SEARCH_STRING")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")])]),_v(" "),_c('td',[_v("Must not be empty.")]),_v(" "),_c('td',[_v("\"Alex\", \"alex yeoh\", \"+asdf-\"")]),_v(" "),_c('td',[_v("\"\"")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"list-feature-list"}},[_v("List Feature : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#list-feature-list","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list [LIST] [KEYWORDS]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Shows the list and associated detail panel for the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[LIST]")]),_v(".")]),_v(" "),_c('li',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[KEYWORDS]")]),_v(" is for which specifying student details to display, and is only valid for "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(". When used for "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" and "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(", they will be ignored.")]),_v(" "),_c('li',[_v("Refer to the parameter constraints "),_c('a',{attrs:{"href":"#parameter-summary"}},[_v("here")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-student"}},[_v("For Student:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-student","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" displays all the students with their names (including previously specified fields).")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students subjects email")]),_v(" displays all the students with their names, a list of subjects for each student and their email.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" (with no additional student details):")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Showing list STUDENT\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/list/list_student_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/list/list_student_positive.png","alt":"Success for list STUDENTS"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-schedule"}},[_v("For Schedule:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-schedule","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(" displays the "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" with all the lessons with their names in time order.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Showing list SCHEDULE\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/list/list_schedule_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/list/list_schedule_positive.png","alt":"Success for list SCHEDULE"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-task"}},[_v("For Task:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-task","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(" displays all the tasks with their description.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Showing list TASK\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/list/list_tasks_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/list/list_tasks_positive.png","alt":"Success for list STUDENTS"}})])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("If there are no entries, e.g. there are no students added yet or there are no tasks added yet, an empty list is displayed.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/list/list_tasks_empty.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/list/list_tasks_empty.png","alt":"Empty list"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"general-examples"}},[_v("General Examples"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#general-examples","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list student")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list task")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students EMAIL")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students subject")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students subjects,phone")]),_v(" "),_c('ul',[_c('li',[_v("Error: First command should spell "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("students")]),_v(" instead of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("student")]),_v(".")]),_v(" "),_c('li',[_v("Error: Second command should spell "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tasks")]),_v(" instead of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("task")]),_v(".")]),_v(" "),_c('li',[_v("Error: Third command should spell "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("email")]),_v(" in lower case, not "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EMAIL")]),_v(".")]),_v(" "),_c('li',[_v("Error: Fourth command should spell "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("subjects")]),_v(" instead of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("subject")]),_v(".")]),_v(" "),_c('li',[_v("Error: Fifth command should use space separation "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("subjects phone")]),_v(" for keywords instead of comma separation.")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("  list: Displays the specified list, which can be a STUDENTS list, SCHEDULE list or TASKS list. Default command without specified list displays the schedule list. When specifying STUDENTS list, optional parameters can be used to specify what student details to display.\n")]),_c('span',[_v("  Parameters: [LIST] [KEYWORDS]...\n")]),_c('span',[_v("  Example: list schedule\n")]),_c('span',[_v("  Example: list students phone email\n")]),_c('span',[_v("  Example: list tasks\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"show-feature-show"}},[_v("Show Feature : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#show-feature-show","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The command format is the same for all lists.")]),_v(" "),_c('li',[_v("Shows the details of the lesson/task/student at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed list.")]),_v(" "),_c('li',[_v("Refer to the parameter constraints "),_c('a',{attrs:{"href":"#parameter-summary"}},[_v("here")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-student-2"}},[_v("For Student:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-student-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("In "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(", the show command shows the details of the specified student from the "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(" in the application.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list STUDENTS")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 2")]),_v(" shows the details of the 2nd student in the "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find Betsy")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" shows the details of the 1st student in the results of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Showing Person: Alex Yeoh; Phone: 87438807; Email: alexyeoh@example.com; Address: Blk 30 Geylang Street 29, #06-40; Subjects: BIOLOGYCHEMISTRY; Tags: [friends]; Remark: To be added\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/show/show_student_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/show/show_student_positive.png","alt":"Success for show 1"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-schedule-2"}},[_v("For Schedule:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-schedule-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("In "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(", the show command shows the details of the specified lesson from the "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" in the application.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list SCHEDULE")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 2")]),_v(" shows the details of the 2nd lesson in the "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(".")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find lesson1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" shows the details of the 1st lesson in the results of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Showing Lesson: Start: 12:30 PM; End: 2:30 PM\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/show/show_lesson_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/show/show_lesson_positive.png","alt":"Success for show 1"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-task-2"}},[_v("For Task:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-task-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("In "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(", the show command shows the details of the specified task from the full "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(" in the application.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list TASKS")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 2")]),_v(" shows the description of the 2nd task in the full "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Showing Task: Description: Revise CS2103T Materials\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/show/show_task_positive.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/show/show_task_positive.png","alt":"Success for show 1"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"general-examples-2"}},[_v("General Examples"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#general-examples-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_v(" "),_c('ul',[_c('li',[_v("Error: No index given. Enter a valid index!")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("  Invalid command format!\n")]),_c('span',[_v("  show: Shows the details of the item identified by the index number used in the last item listing.\n")]),_c('span',[_v("  Parameters: INDEX (must be a positive integer)\n")]),_c('span',[_v("  Example: show 1\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 100")]),_v(" "),_c('ul',[_c('li',[_v("Error: Index given exceeds the length of the displayed list. Enter a valid index!")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("The lesson index provided is invalid\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"add-feature"}},[_v("Add Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#add-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-student-3"}},[_v("For Student:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-student-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name NAME [-phone PHONE_NUMBER] [-email EMAIL] [-address ADDRESS] [-subject SUBJECTS] [-tag TAG] [-remark REMARK]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("A new student cannot have the same name as existing students in the "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(".")]),_v(" "),_c('li',[_v("A student can have any number of unique tags (including 0)")]),_v(" "),_c('li',[_v("Duplicate phone numbers are allowed, since it is possible for 2 children to use their parent's number.")]),_v(" "),_c('li',[_v("Refer to the parameter constraints "),_c('a',{attrs:{"href":"#parameter-summary"}},[_v("here")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name John")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson -name John -phone 91234567 -email test@gmail.com -address 10 Kent Ridge Drive -subject MATHEMATICS")])]),_v(" "),_c('li',[_v("In "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(" :\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name John -phone 91234567 -email test@gmail.com -address 10 Kent Ridge Drive -subject MATHEMATICS")])])])])])}
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
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addPerson")]),_v(" "),_c('ul',[_c('li',[_v("Error: No name given. Enter the -name flag with a valid name.")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid person format: Flag name not found. \n")]),_c('span',[_v("Usage: addPerson -name NAME (any number of unique [-phone|email|address|subject|tag|remark] VALUE). \n")]),_c('span',[_v("For example, addPerson -name John -phone 91234567\n")]),_c('span',[_v("If you are currently displaying student list, you could use 'add' inplace of 'addPerson'. \n")]),_c('span',[_v("Note you must provide a 'name' not already in the address book.\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/add-person/add_person_failure.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/add-person/add_person_failure.png","alt":"Failure for addPerson"}})])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-schedule-3"}},[_v("For Schedule:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-schedule-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name NAME [-day DATE] [-start TIME] [-end TIME] [-subject SUBJECT]")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("A new lesson cannot have the same name as existing students in the contact list.")]),_v(" "),_c('li',[_v("Start time cannot be after end time.")]),_v(" "),_c('li',[_v("Users can choose to specify the start or end time of a lesson only.")]),_v(" "),_c('li',[_v("Refer to the parameter constraints "),_c('a',{attrs:{"href":"#parameter-summary"}},[_v("here")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name Chemistry Lesson at Bishan")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name Lesson at Tai Seng -start 09:00 -end 11:00 -day 03/21 -subject physics")])]),_v(" "),_c('li',[_v("In "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" :\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name Lesson at Yishun -day 21 -subject MATHEMATICS")])])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name Chemistry Lesson at Bishan")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("New lesson added: Lesson Chemistry Lesson at Bishan\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name Lesson at Tai Seng -start 09:00 -end 11:00 -day 03/21 -subject physics")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("New lesson added: Lesson Lesson at Tai Seng from 9:00 AM to 11:00 AM on 21-03-2023 for PHYSICS\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name Chemistry Lesson")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name Chemistry Lesson -day 2023/12/12")]),_v(" "),_c('ul',[_c('li',[_v("Error: A new lesson cannot have the same name as an existing lesson. Enter another name for the new lesson.")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Lesson with this name already exists in the schedule\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addLesson -name English Lesson -start 13:00 -end 10:00")]),_v(" "),_c('ul',[_c('li',[_v("Error: The start time specified for a lesson cannot be after its end time. Enter a start time that is before the end time.")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid lesson input: End time: 10:00 AM cannot be before start time: 1:00 PM.. \n")]),_c('span',[_v("Usage: addLesson -name NAME (any number of unique [-subject|day|start|end VALUE]). \n")]),_c('span',[_v(" For example, addLesson -name John -subject English -day 23 -start 14:30 -end 16:30\n")]),_c('span',[_v(" If you are currently displaying schedule list, you could use 'add' inplace of 'addLesson'. \n")]),_c('span',[_v(" Note you must provide a 'name' not already in the schedule and 'start' must be before 'end'.\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-task-3"}},[_v("For Task:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-task-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask [INDEX] DESCRIPTION")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Adds the task to the lesson at specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" of the displayed "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" or to the shown lesson (if "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" is omitted).")]),_v(" "),_c('li',[_v("A new task cannot have the same description as existing tasks in the task list of that specific lesson.")]),_v(" "),_c('li',[_v("Refer to the parameter constraints "),_c('a',{attrs:{"href":"#parameter-summary"}},[_v("here")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask 1 Make Forces Notes")])]),_v(" "),_c('li',[_v("With a lesson shown:\n"),_c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask Mark MYE Practice Paper")])])])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask 1 Make Forces Notes")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("New task added to lesson with index 1: Make Forces Notes\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask Mark MYE Practice Paper")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("New task added to current lesson: Mark MYE Practice Paper\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask")]),_v(" "),_c('ul',[_c('li',[_v("Error: No lesson index specified and no lesson shown. Missing description. "),_c('br'),_v("\nUse the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_v(" command or add the lesson index you want to add tasks to after "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addTask")]),_v(". Add description of the task at the end of the command.")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid description: Tasks can take any values, and it should not be blank\n")]),_c('span',[_v("Usage: addTask/task + [lesson index] [description]. You could omit the lesson index when adding task to showing lesson.\n")]),_c('span',[_v("Example1: addtask 1 do homework\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"delete-feature"}},[_v("Delete Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#delete-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Deletes the specified item in the "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(" or "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" of the application.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-student-4"}},[_v("For Student:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-student-4","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Deletes a student in the "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(" of the application.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the student at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(".")]),_v(" "),_c('li',[_v("The command is case-insensitive: e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteperson")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DELETEPERSON")]),_v(" are all valid.")]),_v(" "),_c('li',[_v("Refer to the parameter constraints "),_c('a',{attrs:{"href":"#parameter-summary"}},[_v("here")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson 1")])]),_v(" "),_c('li',[_v("In "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(" : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson 1")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Deleted Person: Alex Yeoh; Phone: 87438807; Email: alexyeoh@example.com; Address: Blk 30 Geylang Street 29, #06-40; Subjects: BIOLOGYCHEMISTRY; Tags: [friends]; Remark: To be added\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletePerson")]),_v(" "),_c('ul',[_c('li',[_v("Error: No index given. Enter a valid index!")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command format! \n")]),_c('span',[_v("deleteperson: Deletes the entry identified by the index number used in the displayed list.\n")]),_c('span',[_v("Parameters: INDEX (must be a positive integer)\n")]),_c('span',[_v("Example: delete 1\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-schedule-4"}},[_v("For Schedule:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-schedule-4","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Deletes a lesson in the "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" of the application.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the lesson at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(".")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(".")]),_v(" "),_c('li',[_v("The command is case-insensitive: e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletelesson")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DELETELESSON")]),_v(" are all valid.")]),_v(" "),_c('li',[_v("Refer to the parameter constraints "),_c('a',{attrs:{"href":"#parameter-summary"}},[_v("here")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson 1")])]),_v(" "),_c('li',[_v("In "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson 1")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Deleted Lesson: Lesson lesson1 from 12:30 PM to 2:30 PM on 20-11-2023 for MATHEMATICS\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteLesson")]),_v(" "),_c('ul',[_c('li',[_v("Error: No index given. Enter a valid index!")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command format! \n")]),_c('span',[_v("deletelesson: Deletes the lesson identified by the index number used in the displayed schedule list.\n")]),_c('span',[_v("Parameters: INDEX (must be a positive integer)\n")]),_c('span',[_v("Example: deletelesson 1\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-task-4"}},[_v("For Task:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-task-4","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Deletes the specified task from the shown lesson in the application. User must be in the "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" and showing a lesson.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask INDEX")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Deletes the task at the specified "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("INDEX")]),_v(" of the "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(" in the shown lesson.")]),_v(" "),_c('li',[_v("The index refers to the index number shown in the displayed "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(" of the lesson.")]),_v(" "),_c('li',[_v("The command is case-insensitive: e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deletetask")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DELETETASK")]),_v(" are all valid.")]),_v(" "),_c('li',[_v("Refer to the parameter constraints "),_c('a',{attrs:{"href":"#parameter-summary"}},[_v("here")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("In "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(" : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask 2")]),_v(" deletes the 2nd task of the 1st lesson in the "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask 1")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Deleted Task: Revise CS2103T Materials\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask 100")]),_v(" "),_c('ul',[_c('li',[_v("Error: The index given is invalid. Enter a valid task index!")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Task index do not belong to any tasks!\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 1")]),_v(" followed by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask")]),_v(" "),_c('ul',[_c('li',[_v("Error: No index given. Enter a valid task index!")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command format! \n")]),_c('span',[_v("deletetask: Deletes the task identified by the task index from the currently displayed lesson.\n")]),_c('span',[_v("Parameters: task index (must be a positive integer)\n")]),_c('span',[_v("Example: deletetask 1\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("deleteTask 1")]),_v(" without showing a lesson\n"),_c('ul',[_c('li',[_v("Error: No lesson shown. Show a lesson with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_v(" command.")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Please use show lessonIndex before deleting task!\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"edit-feature"}},[_v("Edit Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#edit-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (if same command format across states)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-student-5"}},[_v("For Student:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-student-5","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (for list specific format)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("some code here")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("another code here")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory parameters")])]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory and optional parameters")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This block of code is for success outputs\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-schedule-5"}},[_v("For Schedule:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-schedule-5","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (for list specific format)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("some code here")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("another code here")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory parameters")])]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory and optional parameters")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This block of code is for success outputs\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-task-5"}},[_v("For Task:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-task-5","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Editing of "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(" is not supported at this time!")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"find-feature-find"}},[_v("Find Feature : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#find-feature-find","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The find command finds students (in "),_c('em',[_c('strong',[_v("STUDENTS list")])]),_v(") or lessons (in "),_c('em',[_c('strong',[_v("SCHEDULE list")])]),_v(") whose names contain the search string.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find SEARCH_STRING")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The search is case-insensitive. e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("lesson")]),_v(" will match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Lesson")]),_v(". "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hans")]),_v(" will match "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hans")]),_v(".")]),_v(" "),_c('li',[_v("Names does not need to match the search string, as long as they contain it they will be returned. e.g. search string "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sson Che")]),_v(" will return "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Lesson Chemistry")]),_v(".")]),_v(" "),_c('li',[_v("While non-alphanumeric characters are allowed in the search string, they will likely not return any results as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" parameter only allows alphanumeric characters.")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-student-6"}},[_v("For Student:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-student-6","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find bernice")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find a")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find bernice")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("1 persons listed!\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find a[s*(|o")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("0 persons listed!\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-schedule-6"}},[_v("For Schedule:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-schedule-6","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find lesson")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find b")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find lesson")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("4 lessons listed!\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find &*af1")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("0 lessons listed!\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"general-examples-3"}},[_v("General Examples"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#general-examples-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find ")]),_v(" "),_c('ul',[_c('li',[_v("Error: search string is empty.")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command format! \n")]),_c('span',[_v("find: Finds all persons or lesson whose names contains the specified search string (case-insensitive) and displays them as a list with index numbers.\n")]),_c('span',[_v("Parameter: SEARCH_STRING\n")]),_c('span',[_v("Example: find alex yeoh\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find task1")]),_v(" (in "),_c('em',[_c('strong',[_v("TASKS list")])]),_v(")\n"),_c('ul',[_c('li',[_v("Error: Find command is disabled in task list.")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Unknown command\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"filter-feature-filter"}},[_v("Filter Feature : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("filter")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#filter-feature-filter","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (if same command format across states)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-student-7"}},[_v("For Student:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-student-7","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (for list specific format)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("some code here")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("another code here")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory parameters")])]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory and optional parameters")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This block of code is for success outputs\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")])]),_v(" "),_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-schedule-7"}},[_v("For Schedule:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-schedule-7","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (for list specific format)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("some code here")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("another code here")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory parameters")])]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory and optional parameters")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This block of code is for success outputs\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-task-6"}},[_v("For Task:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-task-6","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (for list specific format)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("some code here")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("another code here")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory parameters")])]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory and optional parameters")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This block of code is for success outputs\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"link-feature-linkto"}},[_v("Link Feature : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("linkTo")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#link-feature-linkto","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (if same command format across states)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-student-8"}},[_v("For Student:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-student-8","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (for list specific format)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("some code here")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("another code here")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory parameters")])]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory and optional parameters")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This block of code is for success outputs\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-schedule-8"}},[_v("For Schedule:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-schedule-8","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (for list specific format)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("some code here")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("another code here")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory parameters")])]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory and optional parameters")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This block of code is for success outputs\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-task-7"}},[_v("For Task:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-task-7","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (for list specific format)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("some code here")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("another code here")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory parameters")])]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory and optional parameters")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This block of code is for success outputs\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"navigate-feature-nav"}},[_v("Navigate Feature : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("nav")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#navigate-feature-nav","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (if same command format across states)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-student-9"}},[_v("For Student:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-student-9","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (for list specific format)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("some code here")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("another code here")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory parameters")])]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory and optional parameters")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This block of code is for success outputs\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-schedule-9"}},[_v("For Schedule:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-schedule-9","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (for list specific format)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("some code here")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("another code here")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory parameters")])]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory and optional parameters")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This block of code is for success outputs\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-task-8"}},[_v("For Task:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-task-8","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (for list specific format)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("some code here")])]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("another code here")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory parameters")])]),_v(" "),_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("code with compulsory and optional parameters")])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("This block of code is for success outputs\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")]),_v(" "),_c('ul',[_c('li',[_v("Error: Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"command-history-feature"}},[_v("Command History Feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-history-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("To start navigating the command history, press the up or down arrow, which will point and return the most recent command text (for invalid commands, it will retrieve it again since it is also saved, hence it will not change the command text yet).")]),_v(" "),_c('li',[_v("Cycle through the command history using the up arrow to go back to previous commands, and down arrow to go to next commands, going beyond the command history will retrieve the oldest or newest command text for respectively.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(" were entered in this order.")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Pressing up arrow will go back in the command history and retrieve: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(".")]),_v(" "),_c('li',[_v("Pressing up arrow will go further back in the command history and retrieve: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(".")]),_v(" "),_c('li',[_v("Pressing down arrow will go forward in the command history and retrieve: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"clearing-data-clear"}},[_v("Clearing Data : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#clearing-data-clear","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"exit-program-exit"}},[_v("Exit Program : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#exit-program-exit","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"view-help-help"}},[_v("View Help : "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#view-help-help","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/helpMessage.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/helpMessage.png","alt":"help message"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-data"}},[_v("Saving Data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"editing-data-file"}},[_v("Editing Data File"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#editing-data-file","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("TutorMate data is saved automatically as JSON files "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/addressbook.json")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/schedulelist.json")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("[JAR file location]/data/personLessonMap.json")]),_v(". Advanced users are welcome to update data directly by editing that data file.\nBe very careful, especially when you modify attributes such as Start and End time of lessons, as any overlapping lesson timings will render the data as invalid. For example, lesson clashes will not be detected. Scenarios like these are not exhaustive.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another Computer? "),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Copy TutorMate's jar file into the folder you want to use as the home folder in the other computer. Before running the application, copy "),_c('em',[_v("addressbook.json")]),_v(", "),_c('em',[_v("personLessonMap.json")]),_v(" and "),_c('em',[_v("schedulelist.json")]),_v(" files from the home folder in your current computer into the home folder of the other computer. After copying the 3 files, running the application will show the same data. However, do note that the changes made through the application in one computer will not be reflected in the data in another computer.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": Can I edit the data in the application through the "),_c('em',[_v("addressbook.json, personLessonMap.json, schedulelist.json")]),_v(" files directly? "),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": It is possible. However, it is not advisable for you to do so as if the changes made to the data file makes its format invalid, TutorMate will discard all data. Please use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command to make changes to your data instead. If you insist on directly modifying data files, please read this section "),_c('a',{attrs:{"href":"#editing-the-data-file"}},[_v("here")]),_v(" before doing so.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": Can I still use the application without internet connection? "),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Yes, you can. TutorMate is an offline desktop application. The only exception is the \"help\" command which provides a URL to the user guide.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"known-issues"}},[_v("Known Issues"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#known-issues","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('strong',[_v("When using multiple screens")]),_v(", if you move the application to a secondary screen, and later switch to using only the primary screen, the GUI will open off-screen. The remedy is to delete the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("preferences.json")]),_v(" file created by the application before running the application again.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"command-summary"}},[_v("Command Summary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#command-summary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format")]),_v(" "),_c('th',[_v("Examples")]),_v(" "),_c('th',[_v("List")]),_v(" "),_c('th',[_v("Remarks")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("List")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list [LIST] [KEYWORDS]")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students email")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list schedule")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")])]),_v(" "),_c('td',[_v("Any")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" without optional parameters displays the "),_c('em',[_c('strong',[_v("SCHEDULE list")])])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Find")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find SEARCH_STRING")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find bernice")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find lesson")])]),_v(" "),_c('td',[_v("Student, Schedule")]),_v(" "),_c('td',[_v("Disabled in "),_c('em',[_c('strong',[_v("TASKS list")])])])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Feature2")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command format")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sample valid command")])]),_v(" "),_c('td',[_v("Any")]),_v(" "),_c('td',[_v("Any additional remarks here")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Term")]),_v(" "),_c('th',[_v("Definition")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Command Terminal")])]),_v(" "),_c('td',[_v("A text based user interface where most of the interaction is done by inputting commands. You can search for \"terminal\" to find and launch the inbuilt terminal in your operating system (Windows, Linus and MacOS).")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("GUI")])]),_v(" "),_c('td',[_v("Abbreviation for graphical user interface, which allow user to interact with graphical components such as icons, buttons, and menus.")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Home Folder")])]),_v(" "),_c('td',[_v("The folder TutorMate is located at while running. This will be the folder where tutorMate read the date from and write the data to.")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Java")])]),_v(" "),_c('td',[_v("A programming language that you need to install before you are able to launch tutorMate. You could refer to FAQ for tips on how to verify whether you already have Java installed and how to install it.")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Flag")])]),_v(" "),_c('td',[_v("A flag is a tab started with dash \"-\" that is used to identify the type of information that is being provided. For example, in \"add -name John\", \"-name\" is a flag and \"John\" is the value of this flag.")])])])])])}
}];
  