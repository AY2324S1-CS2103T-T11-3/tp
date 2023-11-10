
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"sticky":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/tp/index.html","title":"Home"}},[_v("TutorMate")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('form',{staticClass:"navbar-form"},[_c('searchbar',{attrs:{"data":searchData,"placeholder":"Search","on-hit":searchCallback,"menu-align-right":""}})],1)])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/UserGuide.html"}},[_v("User Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/DeveloperGuide.html"}},[_v("Developer Guide")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/tp/AboutUs.html"}},[_v("About Us")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/AY2324S1-CS2103T-T11-3/tp","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])])],1),_v(" "),_c('br'),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})]),_v(" "),_c('scroll-top-button')],1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"project-tutormate"}},[_v("Project: TutorMate"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#project-tutormate","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TutorMate helps private tuition teachers manage their students more easily. It allows faster access and storage of students’ contacts and data, providing better time management and productivity. The app will help to manage students for a single tuition teacher only. The app will only provide simple student analytics (without detailed student progress analysis).")]),_v(" "),_c('p',[_v("Given below are my contributions to the project.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_c('strong',[_v("New Feature")]),_v(": Added the ability to show the details of the selected student/lesson/task.")]),_v(" "),_c('ul',[_c('li',[_v("What it does: allows the user to display the selected item in the show details panel at the right of the User Interface. It allows the user to show students while in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("STUDENT")]),_v(" list, show lessons while in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SCHEDULE")]),_v(" list and show tasks while in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TASK")]),_v(" list.")]),_v(" "),_c('li',[_v("Justification: This feature improves the product significantly because this de-clutters the details in the list of students and lessons at the left of the User Interface. It allows the user to view the details of the selected item in a clearer and more detailed view.")]),_v(" "),_c('li',[_v("Highlights: This enhancement affects the coupling between the Model and the UI classes. The current implementation requires the linking between them and required certain considerations as elaborated in the "),_c('a',{attrs:{"href":"https://ay2324s1-cs2103t-t11-3.github.io/tp/DeveloperGuide.html"}},[_v("Developer Guide")]),_v(".")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("New Feature")]),_v(": Added the Task class and the structure of the TaskList.")]),_v(" "),_c('ul',[_c('li',[_v("What it does: enables developers to implement additional functionality regarding the Task class. The Task List class enables developers to have a structure to contain the respective Task objects.")]),_v(" "),_c('li',[_v("Justification: This structure improves the product significantly because this enables the Task List functionality of the Lessons.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("New Feature")]),_v(": Added the Tasks List view.")]),_v(" "),_c('ul',[_c('li',[_v("What it does: allows the user to display the Full Task List view in the left of the User Interface. It displays all the tasks of all the lessons currently in the TutorMate application.")]),_v(" "),_c('li',[_v("Justification: This feature improves the product significantly because this allows users to view all the current tasks in the TutorMate application. This gives them a convenient view of the tasks that they need to take note of. The tasks are sorted accordingly in the order of the lessons (increasing order by date).")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Code contributed")]),_v(": "),_c('a',{attrs:{"href":"https://nus-cs2103-ay2324s1.github.io/tp-dashboard/?search=richiehx&breakdown=true"}},[_v("RepoSense link")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Enhancements implemented")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Created the Show Detail Panel, Lesson Detail Panel and Task Detail Panel to display and show the details of the respective item specified.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Contributions to User Guide")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Added documentation for the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list tasks")]),_v(" features.")]),_v(" "),_c('li',[_v("Added and updated the outdated documentation for other features.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Contributions to Developer Guide")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("Added implementation details of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("show")]),_v(" feature.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Contributions to team-based tasks")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("tP Team Organization Setup")]),_v(" "),_c('li',[_v("tP Team Repo Setup")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Review/mentoring contributions")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("32 PRs reviewed (with non-trivial review comments)")]),_v(" "),_c('li',[_v("Reported bugs and suggestions for other teams")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Contributions beyond the project team")]),_v(":")]),_v(" "),_c('ul',[_c('li',[_v("to be added soon")])])])])])}
}];
  