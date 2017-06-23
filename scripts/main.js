function createListItem(inputValue) {
  var createNewList = document.createElement("li");
  var createNewListText = document.createTextNode(inputValue);
  createNewList.appendChild(createNewListText);
  return createNewList;
}

function appendNewSwarmItem() {
  var inputValue = document.getElementById("addingNewSwarmItem").value;
  var createNewList = createListItem(inputValue);
  document.getElementById("swarmTargets").appendChild(createNewList);
}

function appendNewAnnoyanceItem() {
  var inputValue = document.getElementById("addingNewAnnoyanceItem").value;
  var createNewList = createListItem(inputValue);
  document.getElementById("annoyances").appendChild(createNewList);
}
