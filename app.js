let app = document.querySelector("#app");
let lists = document.querySelector(".task-lists");
let inputBox = document.querySelector("#task-input");
let listsWrapper = document.querySelector(".task-list-wrapper");
let itemsArr = localStorage.getItem('todoData') ? JSON.parse(localStorage.getItem('todoData')) : [];
localStorage.setItem('todoData', JSON.stringify(itemsArr));
let data = JSON.parse(localStorage.getItem('todoData'));

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

// Create Task Content Object
function taskObj(id,txt){
    let singleTask = {
        id:id,
        content: txt,
        status: false
    };

    return singleTask;
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
        let taskID = new Date().getTime();

        let obj = taskObj(taskID, inputBox.value);

        itemsArr.push(obj);
        localStorage.setItem('todoData', JSON.stringify(itemsArr));
        createTask(taskID, inputBox.value);
        inputBox.value = "";
        listsWrapper.style.display = "block";
    }
})

data.map(item=>{
    createTask(item.id, item.content);
})



// Git Fork
// Git Fork Button
function gitFork(url) {
    var anchorBtn = document.createElement('a');
    anchorBtn.href = url;
    var btnImg = document.createElement('img');
    btnImg.src = 'https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png';
    anchorBtn.setAttribute('style', 'position: fixed;top: 0;right: 0;z-index: 999;');
    anchorBtn.appendChild(btnImg);
    document.querySelector("body").appendChild(anchorBtn);
}

gitFork('https://github.com/rajuahammadfanz/todojs');