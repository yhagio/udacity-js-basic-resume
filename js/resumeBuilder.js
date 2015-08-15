var bio = {
  name: "Yuichi Hagio",
  role: "Front-End Ninja",
  contacts: {
    mobile: "123-456-789",
    email: "example@example.com",
    github: "yhagio",
    twitter: "yuichihagio",
    location: "Montreal, QC",
    blog: "yhagio.github.io/blog"
  },
  biopic: "./images/profile.jpg",
  welcomeMessage: "Welcome to my page",
  skills: ["HTML", "CSS", "Javascript"]
};


bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", this.name);
  var formattedRole = HTMLheaderRole.replace("%data%", this.role);

  var contactsMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
  var contactsEmail = HTMLemail.replace("%data%", this.contacts.email);
  var contactsTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
  var contactsGithub = HTMLgithub.replace("%data%", this.contacts.github);
  var contactsBlog = HTMLblog.replace("%data%", this.contacts.blog);
  var contactsLocation = HTMLlocation.replace("%data%", this.contacts.location);

  var bioPic = HTMLbioPic.replace("%data%", this.biopic);

  var welcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(bioPic);

  // $("#topContacts").append(contactsMobile);
  $("#topContacts").append(contactsEmail);
  // $("#topContacts").append(contactsTwitter);
  $("#topContacts").append(contactsGithub);
  $("#topContacts").append(contactsBlog);
  $("#topContacts").append(contactsLocation);

  $("#header").append(welcomeMsg);
  $("#header").append(HTMLskillsStart);
  var i = 0;
  while(bio.skills.length > i){
    var skill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(skill);
    i++;
  }
};

var education = {
  schools: [
    {
      name: "University of Arizona",
      location: "Arizona, USA",
      degree: "Bachelor of Arts",
      majors: ["Economics"],
      dates: "2010-12",
      url: "arizona.edu"
    }
  ],
  onlineCourses: [
    {
      title: "Nanodegree - Front-End Development",
      school: "Udacity",
      date: "2015-08",
      url: "udacity.com"
    }
  ]
};

education.display = function(){
  $("#education").append(HTMLschoolStart);

  var _this = this;

  for(var i = 0; _this.schools.length > i; i++){
    var schoolName = HTMLschoolName.replace("%data%", _this.schools[i].name).replace("#", _this.schools[i].url);
    var schoolLocation = HTMLschoolLocation.replace("%data%", _this.schools[i].location);
    var schoolDegree = HTMLschoolDegree.replace("%data%", _this.schools[i].degree);
    var schoolDates = HTMLschoolDates.replace("%data%", _this.schools[i].dates);
    var schoolNameDegree = schoolName + schoolDegree;

    $(".education-entry").append(schoolNameDegree);
    $(".education-entry").append(schoolLocation);
    $(".education-entry").append(schoolDates);

    _this.schools[i].majors.forEach(function(major){
      var aMajor = HTMLschoolMajor.replace("%data%", major);
      $(".education-entry").append(aMajor);
    });

  }

  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);

  for(var i = 0; _this.onlineCourses.length > i; i++){
    var classTitle = HTMLonlineTitle.replace("%data%", _this.onlineCourses[i].title).replace("#", _this.onlineCourses[i].url);
    var classSchool = HTMLonlineSchool.replace("%data%", _this.onlineCourses[i].school);
    var classDate = HTMLonlineDates.replace("%data%", _this.onlineCourses[i].date);

    var classTitleSchool = classTitle + classSchool;
    var classURL = HTMLonlineURL.replace("%data%", _this.onlineCourses[i].url).replace("#",  _this.onlineCourses[i].url);

    $(".education-entry").append(classTitleSchool);
    $(".education-entry").append(classDate);
    $(".education-entry").append(classURL);

  }

};


var work = {
  jobs: [
    {
      employer: "Babel Media / Keyword Studio",
      title: "Freelance Japanese Localization Tester",
      location: "Montreal, CANADA",
      dates: "2012-01 - Present",
      description: "Localize various games from English to Japanese"
    },
    {
      employer: "ELECOM",
      title: "Sales Marketing Consultant",
      location: "Tokyo, JAPAN",
      dates: "2011-01 - 2011-12",
      description: "Consulting client on marketing strategies"
    }
  ]
};



work.display = function(){
  $("#workExperience").append(HTMLworkStart);

  var _this = this;
  for(var i = 0; _this.jobs.length > i; i++){
    var employer = HTMLworkEmployer.replace("%data%", _this.jobs[i].employer);
    var title = HTMLworkTitle.replace("%data%", _this.jobs[i].title);
    var empTitle = employer + title;
    var dates = HTMLworkDates.replace("%data%", _this.jobs[i].dates);
    var location = HTMLworkLocation.replace("%data%", _this.jobs[i].location);
    var desc = HTMLworkDescription.replace("%data%", _this.jobs[i].description);

    $(".work-entry").append(empTitle);
    $(".work-entry").append(dates);
    $(".work-entry").append(location);
    $(".work-entry").append(desc);
  }


}


var projects = {
  projects: [
    {
      title: "HTML CSS Portfolio",
      dates: "2015-08",
      description: "Portfolio web site using semantic markups and vanilla stylesheets. No libraries or frameworks.",
      images: ["images/sample-one.jpeg"]
    },
    {
      title: "Resume Builder",
      dates: "2015-08",
      description: "Interactive resume with help of jQuery and vanilla JavaScript",
      images: ["images/sample-two.jpeg", "images/sample-three.jpeg"]
    }
  ]
};

projects.display = function(){
  $("#projects").append(HTMLprojectStart);

  var _this = this;
  for(var i = 0; _this.projects.length > i; i++){

    var title = HTMLprojectTitle.replace("%data%", _this.projects[i].title);
    var dates = HTMLprojectDates.replace("%data%", _this.projects[i].dates);

    var desc = HTMLprojectDescription.replace("%data%", _this.projects[i].description);

    $(".project-entry").append(title);
    $(".project-entry").append(dates);
    $(".project-entry").append(desc);

    _this.projects[i].images.forEach(function(image){
      var img = HTMLprojectImage.replace("%data%", image);
      $(".project-entry").append(img);
    });
  }
};

bio.footerDisplay = function(){
  var contactsEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var contactsGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var contactsBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  var contactsTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

  $("#footerContacts").append(contactsEmail);
  $("#footerContacts").append(contactsGithub);
  $("#footerContacts").append(contactsBlog);
  $("#footerContacts").append(contactsTwitter);
}


bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);
bio.footerDisplay();
