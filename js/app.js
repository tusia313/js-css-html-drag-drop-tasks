const taskContainers = document.querySelectorAll('.task-container')
const tasks = document.querySelectorAll('.task')

let taskDragged

tasks.forEach( task => {
    task.addEventListener('dragstart', dragStart)
})

taskContainers.forEach( taskContainer => {
    taskContainer.addEventListener('dragdrop', dragDrop)
    taskContainer.addEventListener('dragover', dragOver)
})

function dragStart(e) {
    taskDragged = e.target
    console.log(taskDragged)
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e) {
  console.log(e.target)
}












// const tasks = document.querySelectorAll('.task')
// const taskContainers = document.querySelectorAll('.task-container')

// let taskDragged

// tasks.forEach( task => task.addEventListener('dragstart', dragStart))
// function dragStart(e) {
//     taskDragged = e.target
   
// }

// taskContainers.forEach(taskContainer => {
//     taskContainer.addEventListener('drop', dropTask)
//     taskContainer.addEventListener('dragover', dragTask)
// })

// function dropTask(e) {
//     e.target.append(taskDragged)
// }

// function dragTask(e) {
//     e.preventDefault()
// }

