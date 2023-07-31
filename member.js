function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");
  var about = document.getElementById("about");
  var memberList = document.getElementById("memberList");
  var skillsList = document.getElementById("skillsList");
  var projectsList = document.getElementById("projectsList");
  var contactList = document.getElementById("contactList");
  var aboutList = document.getElementById("aboutList");
  member.style.display = "block";
  skills.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";
  about.style.display = "none";
  memberList.style.backgroundColor = "#1c1c1c";
  skillsList.style.backgroundColor = "#2c2c2c";
  projectsList.style.backgroundColor = "#2c2c2c";
  contactList.style.backgroundColor = "#2c2c2c";
  aboutList.style.backgroundColor = "#2c2c2c";
}