const app = document.querySelector("#app");
const lists = document.querySelector(".task-lists");


// Create Element
function createEle(ele){
    return document.createElement(ele);
}

// Append Element
function appendEle(parent, elem){
    return parent.appendChild(elem);
}

// Set Multiple Attributes
function setAttributes(ele, attrs) {
    for (var key in attrs) {
        ele.setAttribute(key, attrs[key]);
    }
}

function createTask(taskText){
    var taskNo = 1;
    let taskItem = createEle("li");
        taskItem.className = 'todo-item';
        appendEle(lists, taskItem);

    let taskInput = createEle("input");
        setAttributes(taskInput, {
            "id": `todo${taskNo}`,
            "type": "checkbox"
        })
        appendEle(taskItem, taskInput);

    let taskName = createEle('label');
        setAttributes(taskName, {
            "for": `todo${taskNo}`,
            "class": "todo-name"
        })
        taskName.innerText = taskText;
        appendEle(taskItem, taskName);

        ++taskNo;
}



createTask("I'm Winner!");
createTask("Hasan is a  Winner!");
createTask("Uzzal is a  Winner!");




