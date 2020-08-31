function getById(id) {
    return document.getElementById(id);
}

function createDeleteButton(id) {
    const deleteButton = document.createElement("Button")
    deleteButton.innerText = "x";
    deleteButton.onclick = () => deleteItem(id);
    return deleteButton;
}

function createListItem(value) {
    const newListItem = document.createElement("span");
    newListItem.innerText = value;
    return newListItem;
}

function createNewEntry(value, id) {
    const newListItem = createListItem(value, id);
    const deleteButton = createDeleteButton(id);
    
    const div = document.createElement("li");
    div.id = id;
    div.appendChild(newListItem);
    div.appendChild(deleteButton);
        
    return div;
}

function clearValueOf(inputTextBox) {
    inputTextBox.value = "";
}

function addItemToList(newListItem) {
    getById("list").appendChild(newListItem);
}

function addItem() {
    addItemToList(createNewEntry(getById("item-value").value));

    clearValueOf(getById("item-value"));
}

function deleteItem(id) {
    document.getElementById(id).remove();
}
console.log("Index.js, Initialized successfully!");
