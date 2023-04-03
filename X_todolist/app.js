import TaskService from "./services/task.service.mjs";

TaskService.getTasks().then(tasks => displayTasks(tasks));

const displayOneTask = (task, container) => {
    const item = `<div class="item" data-task-id="${task.id}">
        <input type="checkbox" ${task.completed ? 'checked' : ''}>
        <p>${task.title}</p>
    </div>`;
    container.innerHTML += item;

    // Define events
    let checkboxList = document.querySelectorAll('input[type=checkbox]');
    for (let i = 0; i < checkboxList.length; i++) {
        checkboxList[i].addEventListener('change', function (evt) {
            let taskId = checkboxList[i].parentElement.dataset.taskId;
            TaskService.toggleTaskStatus(taskId);
        });
    }
}

const displayTasks = (tasks) => {
    let tasksContainer = document.getElementById("tasks");
    return tasks.forEach(task => displayOneTask(task, tasksContainer));
}




