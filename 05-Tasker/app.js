"use strict";
// class for TODOs
var TodoItem = /** @class */ (function () {
    function TodoItem(task, isCompleted) {
        this.task = task;
        this.isCompleted = isCompleted;
    }
    return TodoItem;
}());
// tasks administrator - define operations
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (task) {
        var newItem = new TodoItem(task, false);
        this.tasks.push(newItem);
    };
    return TaskManager;
}());
var HTMLHelper = /** @class */ (function () {
    function HTMLHelper() {
    }
    HTMLHelper.createTaskItem = function (task) {
        var listItem = document.createElement('li');
        var checkBox = document.createElement('input');
        checkBox.addEventListener('change', function () {
            if (checkBox.checked) {
                task.isCompleted = true;
                displayTasks();
            }
        });
        var label = document.createElement('label');
        checkBox.type = 'checkbox';
        label.innerText = task.task;
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        return listItem;
    };
    return HTMLHelper;
}());
var taskManager = new TaskManager();
var taskInput = document.getElementById('new-task');
var addButton = document.getElementById('add-task');
var incompleteTaskHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');
addButton.addEventListener('click', function () {
    taskManager.addTask(taskInput.value);
    displayTasks();
});
function displayTasks() {
    completedTasksHolder.innerHTML = '';
    incompleteTaskHolder.innerHTML = '';
    taskManager.tasks.forEach(function (task) {
        var listItem = HTMLHelper.createTaskItem(task);
        if (task.isCompleted)
            completedTasksHolder.appendChild(listItem);
        else
            incompleteTaskHolder.appendChild(listItem);
    });
}
