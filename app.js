const app = document.querySelector("#app");
const lists = document.querySelector(".task-lists");
const inputBox = document.querySelector("#task-input");
const listsWrapper = document.querySelector(".task-list-wrapper");


// Create Element
function createEle(ele) {
    return document.createElement(ele);
}

// Append Element
function appendEle(parent, elem) {
    return parent.appendChild(elem);
}

// Set Multiple Attributes
function setAttributes(ele, attrs) {
    for (var key in attrs) {
        ele.setAttribute(key, attrs[key]);
    }
}

function createTask(taskID, taskText) {
    let taskItem = createEle("li");
    taskItem.className = 'todo-item';
    appendEle(lists, taskItem);

    let taskInput = createEle("input");
    setAttributes(taskInput, {
        "id": `todo${taskID}`,
        "type": "checkbox"
    })
    appendEle(taskItem, taskInput);

    let taskName = createEle('label');
    setAttributes(taskName, {
        "for": `todo${taskID}`,
        "class": "todo-name"
    })
    taskName.innerText = taskText;
    appendEle(taskItem, taskName);
}

inputBox.addEventListener('keyup', e => {
    if (e.which === 13 && inputBox.value.length) {
        var taskNo = new Date().getSeconds();
        let taskContent = inputBox.value;
        createTask(taskNo, taskContent);
        inputBox.value = "";
        listsWrapper.style.display = "block";
    }

})