// class for TODOs

class TodoItem {
  constructor(public task: string, public isCompleted: boolean) {}
}

// tasks administrator - define operations
class TaskManager {
  tasks: TodoItem[] = []

  addTask(task: string): void {
    const newItem = new TodoItem(task, false)
    this.tasks.push(newItem)
  }
}

class HTMLHelper {
  static createTaskItem(task: TodoItem) {
    const listItem = document.createElement('li')
    const checkBox = document.createElement('input')
    
    checkBox.addEventListener('change', () => {
      if (checkBox.checked) {
        task.isCompleted = true
        displayTasks()
      }
    })
    
    const label = document.createElement('label')

    checkBox.type = 'checkbox'
    label.innerText = task.task
    
    listItem.appendChild(checkBox)
    listItem.appendChild(label)
    
    return listItem
  }
}

const taskManager = new TaskManager()

const taskInput = <HTMLInputElement>document.getElementById('new-task')!
const addButton = document.getElementById('add-task')!
const incompleteTaskHolder = document.getElementById('incomplete-tasks')!
const completedTasksHolder = document.getElementById('completed-tasks')!

addButton.addEventListener('click', () => {
  taskManager.addTask(taskInput.value)
  displayTasks()
  clear()
})

function displayTasks() {
  completedTasksHolder.innerHTML = ''
  incompleteTaskHolder.innerHTML = ''
  taskManager.tasks.forEach((task: TodoItem, index: number) => {
    const listItem = HTMLHelper.createTaskItem(task)
    if (task.isCompleted) completedTasksHolder.appendChild(listItem)
    else incompleteTaskHolder.appendChild(listItem)
  })
}

function clear() {
  taskInput.value = ''
}