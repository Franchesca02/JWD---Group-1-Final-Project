class TaskManager {
    constructor(currentId = 0){
        this.tasks = [];
        this.currentId = currentId;
    }
        addTask(name, description, assignedTo, dueDate) {
            const task = {
                currentId: this.currentId++,
                name: name,
                description: description,
                assignedTo: assignedTo,
                dueDate: dueDate,
                status: 'TODO'
            }
            this.tasks.push(task);
        
    }
    }