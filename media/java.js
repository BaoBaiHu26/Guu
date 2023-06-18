const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("C'mon, type smth!");
  } else {
    let li = document.createElement("li");
    li.classList.add("goallist");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
  saveData();
}

// function e() {
//   if (e.target.tagname === "SPAN") {
//     // target.parentElement.remove();
//     alert("delete");
//   } else if (target.tagname === "SPAN") {
//     e.target.classList.toggle("goallist checked");
//   }
// }

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    } else if (e.target.tagname === "LI.goallist") {
      e.target.classList.toggle("goallist, checked");
      console.log(e.target.tagName);
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
