class TaskService {

    tasks = [
        {
            "id": 1,
            "title": "Mettre en place une architecture modulaire ES6",
            "completed": true
        },
        {
            "id": 2,
            "title": "Mettre en place un fichier service.mjs contenant un CRUD sur un tableau de tâches",
            "completed": true
        }
    ];

    getTasks = () => {
        return new Promise((resolve) => {
            resolve(this.tasks);
        });
    };

    toggleTaskStatus(taskId) {
        const task = this.tasks.find(task => task.id === +taskId);
        if (task) {
            this.tasks = this.tasks.map(task => {
                if (task.id === taskId) {
                    return {...task, completed: !task.completed};
                } else {
                    return task;
                }
            });
        }
    }
}

export default new TaskService();
