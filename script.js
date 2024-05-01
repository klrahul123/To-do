const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {    //inputBox.value se hm jo bhi value dalenge textbox me wo isme get ho jayegi
        alert("you must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)


//now we have to restore the all the list to the storage so that....jab bhi hm page ko refresh kre hmara list wesa ka wesa hi bna rhe 
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

//now we have to display the data whenever we will open the page
function showtask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showtask();



