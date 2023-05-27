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
            <div class="task-title">[ID: ${task.id}] ${task.title}</div>
            <div class="task-status"> ${ statusTypes[task.status]}</div>
                <div class="task-icon->
                    <div class="task-icon-container">
                    <img src="assets/edit.png"> </div>
                <div onclick="deleteTask(${task.id})"class="task-icon-container"> 
                    <img src="assets/delete.png"> 
                </div>
            </div>
        </div>    
        `
    }
    todoListContent.innerHTML = content
}
const getIndexById = (id) => {
    
    for(let i = 0; i < taskArray.length; i++){
        const task = taskArray[i]
        if(id == task.id) return i
    }
    // for(const[index,task] of Object.entries(taskArray)){
    //     if(id == task.id) return index
    // }

    return -1
}

const deleteTask = (id) => {
    const targetIndex = getIndexById(id)

    taskArray.splice(targetIndex,1)

    showTasks()
}

showTasks()
//CRUD
//CREATE +
//READ  +
//UPDATE
//DELETE