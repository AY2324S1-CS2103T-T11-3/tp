
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("TutorMate")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2324S1-CS2103T-T11-3/tp","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('br'),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_c('div',{attrs:{"id":"content-wrapper"}},[_m(0),_v(" "),_c('br'),_v(" "),_m(1),_v(" "),_c('p',[_v("TutorMate is a desktop app targeted to private tuition teachers on handling tuition related matters.")]),_v(" "),_c('p',[_v("It is optimized for use via a Command Line Interface (CLI) while still having the benefits of a Graphical User Interface (GUI).\nIf you can type fast, TutorMate can get your administrative tasks done faster than traditional GUI apps.")]),_v(" "),_c('p',[_v("This document describes the main features of TutorMate:")]),_v(" "),_m(2),_v(" "),_c('p',[_v("With a customised student list and schedule in TutorMate just for you, organising lessons and managing students\nwill be the least of your worries.")]),_v(" "),_m(3),_v(" "),_c('div',{pre:true,attrs:{"class":"page-nav-print d-none d-print-block"}}),_v(" "),_c('hr'),_v(" "),_m(4),_v(" "),_m(5),_v(" "),_c('hr'),_v(" "),_m(6),_v(" "),_m(7),_v(" "),_m(8),_v(" "),_m(9),_v(" "),_c('ul',[_c('li',[_v("Flag: denoted with a dash before the flag name e.g. -name.")]),_v(" "),_m(10),_v(" "),_c('li',[_c('box',{attrs:{"type":"info","seamless":""}},[_v("This box denotes additional information.")])],1),_v(" "),_c('li',[_c('box',{attrs:{"type":"tip","seamless":""}},[_v("This box denotes tips to improve usability.")])],1),_v(" "),_c('li',[_c('box',{attrs:{"type":"warning","seamless":""}},[_v("This box denotes warnings that can cause errors.")])],1),_v(" "),_m(11)]),_v(" "),_m(12),_v(" "),_c('box',{attrs:{"type":"info","seamless":""}},[_c('ul',[_c('li',[_c('p',[_v("Words in upper case are compulsory parameters to be supplied by the user."),_c('br'),_v("\ne.g. in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name NAME")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(" is a parameter which can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name Leah")]),_v(".\nIn this case, \"Leah\" is substituted for "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Items in square brackets are optional."),_c('br'),_v("\ne.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list [LIST] [KEYWORDS]")]),_v(" can be used as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" or as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students email")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Flags can be in any order."),_c('br'),_v("\ne.g. if the command specifies "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-name NAME -phone PHONE_NUMBER")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("-phone PHONE_NUMBER -name NAME")]),_v(" is also acceptable.")])]),_v(" "),_c('li',[_c('p',[_v("Extraneous parameters for commands that do not take in parameters (such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(") will be ignored."),_c('br'),_v("\ne.g. if the command entered is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help 123")]),_v(", it will be interpreted as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("If you are using a PDF version of this document, be careful when copying and pasting commands that span multiple lines as space characters surrounding line-breaks may be omitted when copied over to the application.")])])])]),_v(" "),_m(13),_v(" "),_m(14),_c('hr'),_v(" "),_m(15),_v(" "),_m(16),_v(" "),_c('p',[_v("About the feature")]),_v(" "),_m(17),_v(" "),_m(18),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(19),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(20),_v(" "),_m(21),_c('p',[_v("Failure outputs:")]),_v(" "),_m(22),_v(" "),_m(23),_m(24),_v(" "),_m(25),_c('br'),_v(" "),_m(26),_v(" "),_c('p',[_v("About the feature (generally that is similar across states)")]),_v(" "),_m(27),_v(" "),_m(28),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_m(29),_v(" "),_m(30),_v(" "),_m(31),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(32),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(33),_v(" "),_m(34),_c('p',[_v("Failure outputs:")]),_v(" "),_m(35),_v(" "),_m(36),_m(37),_v(" "),_m(38),_m(39),_v(" "),_m(40),_v(" "),_m(41),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(42),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(43),_v(" "),_m(44),_c('p',[_v("Failure outputs:")]),_v(" "),_m(45),_v(" "),_m(46),_m(47),_v(" "),_m(48),_m(49),_v(" "),_m(50),_v(" "),_m(51),_v(" "),_c('box',{attrs:{"type":"tip","seamless":""}},[_c('p',[_c('strong',[_v("Tips:")])]),_v(" "),_c('ul',[_c('li',[_v("Tip 1")]),_v(" "),_c('li',[_v("Tip 2")])])]),_v(" "),_c('p',[_v("Example usages:")]),_v(" "),_m(52),_v(" "),_c('p',[_v("Success outputs:")]),_v(" "),_m(53),_v(" "),_m(54),_c('p',[_v("Failure outputs:")]),_v(" "),_m(55),_v(" "),_m(56),_m(57),_v(" "),_m(58),_m(59),_v(" "),_c('hr'),_v(" "),_m(60),_v(" "),_m(61),_v(" "),_c('hr'),_v(" "),_m(62),_v(" "),_m(63),_v(" "),_c('hr'),_v(" "),_m(64),_v(" "),_m(65),_c('hr'),_v(" "),_m(66),_v(" "),_m(67)],1),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#tutormate-user-guide"}},[_v("TutorMate User Guide‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#about"}},[_v("About‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#quick-start"}},[_v("Quick start‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#important-notes"}},[_v("Important notes‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#basic-usage"}},[_v("Basic usage‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#terminologies-symbols"}},[_v("Terminologies / Symbols‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#notes-on-command-format"}},[_v("Notes on command format‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#table-of-flags"}},[_v("Table of flags‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#features"}},[_v("Features‎")]),_v(" "),_c('nav',{staticClass:"nav nav-pills flex-column my-0 nested no-flex-wrap"},[_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#template-feature-without-state-temp"}},[_v("Template feature without state: temp‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#template-feature-with-states"}},[_v("Template feature with states‎")])]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#faq"}},[_v("FAQ‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#known-issues"}},[_v("Known issues‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#command-summary"}},[_v("Command summary‎")]),_v(" "),_c('a',{pre:true,attrs:{"class":"nav-link py-1","href":"#glossary"}},[_v("Glossary‎")])])])],1)]),_v(" "),_c('scroll-top-button')],1)])}
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
with(this){return _c('h2',{attrs:{"id":"quick-start"}},[_v("Quick start"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#quick-start","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Ensure you have Java 11 or above installed in your Computer. You can check by opening a command terminal and typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -version")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Download the latest "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("tutormate.jar")]),_v(" from "),_c('a',{attrs:{"href":"https://github.com/AY2324S1-CS2103T-T11-3/tp/releases"}},[_v("here")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("Copy the file to the folder you want to use as the "),_c('em',[_v("home folder")]),_v(" for your TutorMate.")])]),_v(" "),_c('li',[_c('p',[_v("Open a command terminal, navigate into the folder you put the jar file in using the change directory command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cd")]),_v(", and use the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("java -jar tutormate.jar")]),_v(" command to run the application."),_c('br'),_v("\nA GUI similar to the below should appear in a few seconds. Note how the app contains some sample data."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/about.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/about.png","alt":"Ui"}})])])]),_v(" "),_c('li',[_c('p',[_v("Type the command in the command box and press Enter to execute it. e.g. typing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("help")]),_v(" and pressing Enter will open the help window."),_c('br'),_v("\nSome example commands you can try:")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list students")]),_v(" : Lists all students with their name.")])]),_v(" "),_c('li',[_c('p',[_v("In list "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENTS")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add -name Leah")]),_v(" : Adds a student named \"Leah\" to the application.")])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show 3")]),_v(" : Shows the details of the person with the index 3 in TutorMate.")])])])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("exit")]),_v(" : Exits the app.")])])])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#features"}},[_v("Features")]),_v(" below for details of each command.")])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#command-summary"}},[_v("Command Summary")]),_v(" below for the summary of all commands.")])]),_v(" "),_c('li',[_c('p',[_v("Refer to the "),_c('a',{attrs:{"href":"#glossary"}},[_v("Glossary")]),_v(" below for definitions of glossary terms.")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"important-notes"}},[_v("Important notes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#important-notes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"basic-usage"}},[_v("Basic usage"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#basic-usage","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("The app is split into 3 states: student list, schedule list and task list. Each corresponds to the main features of TutorMate.")]),_v(" "),_c('li',[_v("Each state has its associated features, while certain features work with all states but has differing functionalities.")]),_v(" "),_c('li',[_v("The student list handles student details management, schedule list handles lessons and scheduling, task list handles tasks.")]),_v(" "),_c('li',[_v("The GUI has several main components (see GUI image below):\n"),_c('ul',[_c('li',[_v("The command box is for users to enter and execute commands.")]),_v(" "),_c('li',[_v("The response box is to display responses for command execution, to indicate success or errors.")]),_v(" "),_c('li',[_v("The left side has the list panel, which shows different list types (student, schedule, tasks).")]),_v(" "),_c('li',[_v("The right side has the details panel, which shows details of any specific item in the list.\n"),_c('a',{attrs:{"href":"/tp/images/Ui.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/Ui.png","alt":"Ui"}})])])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"terminologies-symbols"}},[_v("Terminologies / Symbols"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#terminologies-symbols","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('li',[_v("Text formatted as code snippets are either commands e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list SCHEDULE")]),_v(", command formats e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list [LIST][KEYWORDS]")]),_v(" or parameters e.g. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NAME")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("This box denotes command outputs.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"notes-on-command-format"}},[_v("Notes on command format"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#notes-on-command-format","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"table-of-flags"}},[_v("Table of flags"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#table-of-flags","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Flag")]),_v(" "),_c('th',[_v("Description")]),_v(" "),_c('th',[_v("Format")]),_v(" "),_c('th',[_v("Valid inputs")]),_v(" "),_c('th',[_v("Invalid inputs")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("-name, -remark")])]),_v(" "),_c('td',[_v("describe flag")]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command format")])]),_v(" "),_c('td',[_v("input")]),_v(" "),_c('td',[_v("invalid input")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"features"}},[_v("Features"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#features","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"template-feature-without-state-temp"}},[_v("Template feature without state: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("temp")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#template-feature-without-state-temp","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")])])}
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
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")])]),_v(" "),_c('li',[_v("Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")])]),_v(" "),_c('li',[_v("Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"template-feature-with-states"}},[_v("Template feature with states"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#template-feature-with-states","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command COMPULSORY [optional]")]),_v(" (if same command format across states)")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Format info 1")]),_v(" "),_c('li',[_v("Format info 2")])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-student-list"}},[_v("For student list:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-student-list","onclick":"event.stopPropagation()"}})])}
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
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")])]),_v(" "),_c('li',[_v("Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")])]),_v(" "),_c('li',[_v("Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-schedule-list"}},[_v("For schedule list:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-schedule-list","onclick":"event.stopPropagation()"}})])}
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
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")])]),_v(" "),_c('li',[_v("Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")])]),_v(" "),_c('li',[_v("Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"for-task-list"}},[_v("For task list:"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#for-task-list","onclick":"event.stopPropagation()"}})])}
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
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")])]),_v(" "),_c('li',[_v("Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("Input: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("invalid command code here")])]),_v(" "),_c('li',[_v("Explanation and solution here, this is because the flag has an incorrect value, bla bla bla")])])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("Invalid command with the error message here\n")])])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("list")]),_v(" "),_c('li',[_v("show")]),_v(" "),_c('li',[_v("add (person, lesson, task)")]),_v(" "),_c('li',[_v("delete (person, lesson, task)")]),_v(" "),_c('li',[_v("edit (person, lesson)")]),_v(" "),_c('li',[_v("find")]),_v(" "),_c('li',[_v("filter (person, lesson)")]),_v(" "),_c('li',[_v("link")]),_v(" "),_c('li',[_v("nav")]),_v(" "),_c('li',[_v("command history")]),_v(" "),_c('li',[_v("clear")]),_v(" "),_c('li',[_v("exit")]),_v(" "),_c('li',[_v("help")]),_v(" "),_c('li',[_v("save data")]),_v(" "),_c('li',[_v("edit data")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"faq"}},[_v("FAQ"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#faq","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Q")]),_v(": How do I transfer my data to another Computer?"),_c('br'),_v(" "),_c('strong',[_v("A")]),_v(": Install the app in the other computer and overwrite the empty data file it creates with the file that contains the data of your previous TutorMate home folder.")])}
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
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Action")]),_v(" "),_c('th',[_v("Format")]),_v(" "),_c('th',[_v("Examples")]),_v(" "),_c('th',[_v("List")]),_v(" "),_c('th',[_v("Remarks")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Feature1")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command format")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sample valid command")])]),_v(" "),_c('td',[_v("Student")]),_v(" "),_c('td',[_v("Any additional remarks here")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Feature2")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command format")])]),_v(" "),_c('td',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("sample valid command")])]),_v(" "),_c('td',[_v("Any")]),_v(" "),_c('td',[_v("Any additional remarks here")])])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("Term")]),_v(" "),_c('th',[_v("Definition")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_c('strong',[_v("Glossary term 1")])]),_v(" "),_c('td',[_v("definition of glossary term")])]),_v(" "),_c('tr',[_c('td',[_c('strong',[_v("Glossary term 2")])]),_v(" "),_c('td',[_v("definition of glossary term")])])])])])}
}];
  