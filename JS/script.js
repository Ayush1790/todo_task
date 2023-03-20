data = [];
comp = [];
let up;
let b = 1;
//function for adding task
function add() {
  if (document.getElementById("new-task").value == "") {
    document.getElementById("msg").innerHTML = "Input box can not be empty.";
    return;
  }
  data.push(document.getElementById("new-task").value);
  document.getElementById("new-task").value = "";
  display();
}
//function for display task
function display() {
  let count = 0;
  let txt = "";
  data.forEach((element) => {
    txt +=
      "<li><input type='checkbox' onclick='completed(this,0)' id='" +
      count +
      "'><label>" +
      element +
      "</label><input type='text' ><button id='" +
      count +
      "' onclick='editdata(this,0) '>" +
      "Edit</button><button id='" +
      count +
      "' onclick='deletedata(this,0)'>Delete</button></li>";
    count++;
  });
  document.getElementById("incomplete-tasks").innerHTML = txt;
}
//function for delete task
function deletedata(a, b) {
  if (b == 0) {
    data.splice(a.id, 1);
    display();
  } else {
    comp.splice(b.id, 1);
    cdisplay();
  }
}
//function for edit task
function editdata(a, b) {
  if (b == 0) {
    document.getElementById("new-task").value = data[a.id];
    up = a;
    u = 0;
  } else {
    up = a;
    u = 1;
    document.getElementById("new-task").value = comp[a.id];
  }
  document.getElementById("add").style.display = "none";
  document.getElementById("update").style.display = "inline";
}
//function for update task
function updatedata() {
  if (u == 0) {
    data[up.id] = document.getElementById("new-task").value;
    display();
  } else if (u == 1) {
    comp[up.id] = document.getElementById("new-task").value;
    cdisplay();
  }
  document.getElementById("update").style.display = "none";
  document.getElementById("add").style.display = "inline";
  document.getElementById("new-task").value = "";
}
//function for complete task
function completed(a, b) {
  if (a.checked && b == 0) {
    comp.push(data.splice(a.id, 1));
    display();
    cdisplay();
  } else if (a.checked && b == 1) {
    data.push(comp.splice(a.id, 1));
    display();
    cdisplay();
  }
}
//function for display completed task
function cdisplay() {
  let ccount = 0;
  let txt = "";
  comp.forEach((element) => {
    txt +=
      "<li><input type='checkbox' onclick='completed(this,1)' id='" +
      ccount +
      "'><label>" +
      element +
      "</label><input type='text' ><button id='" +
      ccount +
      "' onclick='editdata(this,1) '>Edit</button><button id='" +
      ccount +
      "' onclick='deletedata(this,1)'>Delete</button></li>";
    ccount++;
  });
  document.getElementById("completed-tasks").innerHTML = txt;
}
