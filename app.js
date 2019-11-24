let app = document.querySelector("#app");
let lists = document.querySelector(".task-lists");
let inputBox = document.querySelector("#task-input");
let listsWrapper = document.querySelector(".task-list-wrapper");
let taskNo = new Date().getTime();
let itemsArr = localStorage.getItem('todoData') ? JSON.parse(localStorage.getItem('todoData')) : [];
localStorage.setItem('todoData', JSON.stringify(itemsArr));


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
        itemsArr.push(inputBox.value);
        localStorage.setItem('todoData', JSON.stringify(itemsArr));
        createTask(taskNo, inputBox.value);
        inputBox.value = "";
        listsWrapper.style.display = "block";
    }
})

let data = JSON.parse(localStorage.getItem('todoData'));
data.map(item=>{
    createTask(taskNo, item);
    listsWrapper.style.display = "block";
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