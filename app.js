function onReady () {
  var toDos = [];
  var addToDoForm = document.getElementById("addToDoForm");

  function createNewToDo() {
    var newToDoText = document.getElementById("newToDoText");
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = "";

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    var toDoList = document.getElementById("toDoList");
    toDoList.innerHTML = "";

    toDos.forEach(function(toDo) {
      var newLi = document.createElement("li");
      var checkbox = document.createElement("input");
      var deleteButton = document.createElement("input");
      checkbox.type = "checkbox";
      deleteButton.type = "radio";

      newLi.innerHTML = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

        deleteButton.addEventListener("click", function() {
          var todo = document.querySelectorAll("LI");
          var input = document.querySelectorAll("INPUT");
              for(var i = 0; i < input.length; i++){
                  if(input[i].checked === true){
                          input[i].parentNode.remove();
                  }
              }
      });
    });
  }

addToDoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  createNewToDo();
});

renderTheUI(toDos);

}
window.onload = function() {
  onReady();
};
