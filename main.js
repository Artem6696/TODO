const taskArray = []
let idCounter = 0
const todoListContent = document.querySelector('#todolist-content')

const statusTypes = {
    1: "Не начато",
    2: "В работе",
    3: "Завершено"
}

const createTask = (taskTitle) => { // функция добавления таска в массив
    const newTask = { //создаем объект таска
        id: idCounter, // id 
        title: taskTitle, //заголовок таска
        status: 1, //статус таска по умолчанию -1 
    }
    taskArray.push(newTask)
    idCounter += 1
}

const submitTask = () => {
    const input = document.querySelector('.task-title-value')//получаем инпут когда юзер вводит назввание
    createTask(input.value)
    showTasks()
}   

const showTasks = () => {
    let content = ''

    for(const task of taskArray){
        content += `
        <div class ="task-container">
            <div class="task-title"> ${task.title}</div>
            <div class="task-status"> ${ statusTypes[task.status]}</div>
                <div class="task-icon->
                <div class="task-icon-container"> <img src="assets/edit.png"> </div>
                <div class="task-icon-container"> <img src="assets/delete.png"> </div>
                </div>
        </div>    
        `
    }
    todoListContent.innerHTML = content
}

showTasks()
//CRUD
//CREATE +
//READ  +