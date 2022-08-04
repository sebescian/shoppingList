window.addEventListener('load', () => {
const form = document.getElementById("newShoppingList");
const itemInput = document.getElementById("newItemInput");
const list = document.getElementById("items");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const item = itemInput.value;
    if(!item) {
        alert("Please enter an item!")
        return;
    } 
    const newItem = document.createElement('div');
newItem.classList.add("item");
const itemContent = document.createElement('div');
itemContent.classList.add("content");
const newItemInput = document.createElement("input");
newItemInput.classList.add("text");
newItemInput.type = "text";
newItemInput.value = item;
newItemInput.setAttribute("readonly", "readonly");
const itemActions = document.createElement('div');
itemActions.classList.add("actions");
const itemEdit = document.createElement("button");
itemEdit.classList.add("edit");
itemEdit.innerHTML = "Edit";
itemEdit.addEventListener("click", () => {
    if(itemEdit.innerText.toLowerCase() == "edit") {
        newItemInput.removeAttribute("readonly");
        itemEdit.classList.add("save");
        newItemInput.focus();
        itemEdit.innerText = "Save";
    }
    else {
        newItemInput.setAttribute("readonly", "readonly");
        itemEdit.innerText = "Edit";
        itemEdit.classList.remove("save");
    }
})
const itemDelete = document.createElement("button");
itemDelete.classList.add("delete");
itemDelete.innerHTML = "Delete";
itemDelete.addEventListener("click", () => {
    list.removeChild(newItem);
})
let totalQuantity = document.createElement("div");
totalQuantity.innerHTML = 0;
totalQuantity.classList.add("actions", "totalQuantity");
const plusSign = document.createElement("button");
plusSign.classList.add("plusSign");
plusSign.innerHTML = "+";
plusSign.addEventListener("click", () => {
    totalQuantity.innerHTML++;
})
const minusSign = document.createElement("button");
minusSign.classList.add("minusSign");
minusSign.innerHTML = "-";
minusSign.addEventListener("click", (event) => {
    totalQuantity.innerHTML--;
})
newItem.appendChild(itemContent);
itemContent.appendChild(newItemInput);
itemActions.appendChild(plusSign);
itemActions.appendChild(totalQuantity);
itemActions.appendChild(minusSign);
itemActions.appendChild(itemEdit);
itemActions.appendChild(itemDelete);
newItem.appendChild(itemActions);
list.appendChild(newItem);
itemInput.value = "";
itemInput.focus();
})
})
