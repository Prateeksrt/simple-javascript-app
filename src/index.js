function getById(id) {
    return document.getElementById(id);
}

function createListItem(value) {
    const newListItem = document.createElement("span");
    newListItem.innerText = value;
    return newListItem;
}

function createNewEntry(value, id) {
    const newListItem = createListItem(value, id);
    
    const div = document.createElement("li");
    div.id = id;
    div.appendChild(newListItem);
        
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

console.log("Index.js, Initialized successfully!");
