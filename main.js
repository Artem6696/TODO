const taskArray = []
let idCounter = 0
const todoListContent = document.querySelector('.todolisst-content')

const createTask = (taskTitle) => {
    const newTask = {
        id: idCounter,
        title: taskTitle,
        status: 1,
    }
    taskArray.push(newTask)
    idCounter += 1
}
console.log('Task Araay:', taskArray);

createTask('first task')
createTask('demo')