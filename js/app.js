const tasks = document.querySelectorAll('.task')
const taskContainers = document.querySelectorAll('.task-container')

let taskDragged

tasks.forEach( task => task.addEventListener('dragstart', dragStart))
function dragStart(e) {
    taskDragged = e.target
   
}

taskContainers.forEach(taskContainer => {
    taskContainer.addEventListener('drop', dropTask)
    taskContainer.addEventListener('dragover', dragTask)
})

function dropTask(e) {
    e.target.append(taskDragged)
}

function dragTask(e) {
    e.preventDefault()
}

