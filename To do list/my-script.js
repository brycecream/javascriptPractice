let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let item = document.querySelector("#doList")
let textInBox = document.getElementById('textbox_id');
let checkbox1 = document.querySelector("#listItem");


button1.onclick = createList;
button2.onclick = clearList;

textInBox.addEventListener("keydown", function (event) {
    // Check if the pressed key is Enter (key code 13) and if the text input has focus
    if (event.key === "Enter" && document.activeElement === textInBox) {
        event.preventDefault();
        createList();
    }
});

function createList() {
    let newList = document.createElement("li");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    // gives the new Li element  the listItem id
    newList.setAttribute("id", "listItem");
    // allows the checkbox to have the type of checkbox
    checkbox.setAttribute("type", "checkbox");
    // listens for when the checkbox is checked
    checkbox.addEventListener("change", function() {
        // Check if the checkbox is checked
        if (checkbox.checked) {
            newList.setAttribute("id", "finishedItem");
        } else {
            // If the checkbox is not checked, you can set the id back to "listItem"
            newList.setAttribute("id", "listItem");
        }
    });
    //gives the label an inner text = to that of the text input
    label.innerHTML = textInBox.value;

    newList.appendChild(checkbox);
    newList.appendChild(label);
    item.appendChild(newList);
    // Clear the input field after creating the list item
    textInBox.value = '';
}

function clearList() {
    // Select all elements with the id "listItem"
    const listItems = document.querySelectorAll("#finishedItem");

     // Loop through each element and remove it
     for (let i = 0; i < listItems.length; i++) {
        listItems[i].remove();
      }
}

