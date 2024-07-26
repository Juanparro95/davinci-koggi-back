const Task = require('../models/task')
const tasks = []

exports.getTasks = (req, res) => {
    res.json(tasks)
}

exports.createTask = (req, res) => {
    const { title, description } = req.body
    const task = new Task(title, description)
    tasks.push(task)
    res.status(201).json(tasks);
}

exports.updateTask = (req, res) => {
    const id = parseInt(req.params.id)
    const { title, description } = req.body
    const index = tasks.findIndex(task => task.id === id)
    
    if (index !== -1) {
        tasks[index] = { id, title, description}
        return res.json(tasks[index]);
    }

    return res.status(404).json({});

}

exports.deleteTask = (req, res) => {
    const id = parseInt(req.params.id)
    const index = tasks.findIndex(task => task.id === id)

    if (index !== -1) {
        tasks.splice(index, 1)
        return res.status(204);
    }

    res.status(401).json({message: 'La tarea no se encontró'})
}