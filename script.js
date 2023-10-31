const input = document.getElementById("input-box");
const liContainer = document.getElementById("list-container");

const addTask = () => {
  if (input.value == "") {
    alert("Please enter some data");
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    liContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    input.value="";
    saveData();
  }
};
liContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    // console.log("li");
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    // console.log("span");
    e.target.parentElement.remove();
    saveData();
  }
});

const saveData = () => {
  localStorage.setItem("data", liContainer.innerHTML);
};
const showData = () => {
  liContainer.innerHTML = localStorage.getItem("data");
};
showData();
