const addButton = document.querySelector('#addTask')
const taskWrappers = document.querySelectorAll('.task-wrapper .body')


let taskCounter = 0

addButton.addEventListener('click', createTask)

taskWrappers.forEach((wrapper) => {
    wrapper.addEventListener('dragover', (e) => {
        e.preventDefault()
        wrapper.classList.add('drag-over')
    })

    wrapper.addEventListener('dragleave', (e) => {
        e.preventDefault()
        wrapper.classList.remove('drag-over')
    })
    
    wrapper.addEventListener('drop', (e) => {
        e.preventDefault()
        const taskId = e.dataTransfer.getData('text/plain')
        const task = document.querySelector(`#${taskId}`)

        if(task) {
            wrapper.appendChild(task)
        }else {
            console.log('task not found');
            
        }

        wrapper.classList.remove('drag-over')
    })
})


function createTask() {
    const taskTitle = prompt('Enter task Title')
    if(taskTitle) {
        const task = document.createElement('div')
        task.classList.add('task')
        task.textContent = taskTitle

        task.id = `task-${taskCounter++}`

        task.setAttribute('draggable', 'true')
        addDragEvents(task)
        document.querySelector('.todo.task-wrapper .body').appendChild(task)
    }
}

function addDragEvents(task) {
    task.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id)
        setTimeout(() => {
            task.classList.remove('hidden')
        }, 0)
    })
}