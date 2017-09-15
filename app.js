function onReady () {
  var toDos = [];
  var addToDoForm = document.getElementbyId("addToDoForm");

  function createNewToDo() {
    var newToDoText = document.getElementbyId("newToDoText");
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = "";

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    var toDoList = document.getElementbyId("toDoList");
    toDoList.innerHTML = "";

    toDos.forEach(function(toDo) {
      var newLi = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      newLi.innerHTML = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

addToDoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  createNewToDo();
});


window.onload = function() {
  onReady();
};
