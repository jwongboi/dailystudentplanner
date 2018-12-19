n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
/*document.getElementById("addtask").onclick = function () {
        location.href = "signupemail.html";
};*/
var numtasks = 0;
var task = [];
document.querySelector(".tasks").innerHTML = task;
document.getElementById("numtasks").innerHTML = numtasks + " Tasks";

function openForm() {
  document.getElementById("addTask").style.display = "block";
}

function closeForm() {
  document.getElementById("addTask").style.display = "none";
}
function addTasks() {
  var x = [];
  var y = document.getElementById("addTask");
  var text = "";
  for (i=0; i<x.length; i++) { 
    x.push(x.elements[i].value); 
  }
  task.push(x);
  numtasks += 1;
}
