let taskId = 1

class Task {
    constructor(title, description) {
        this.id = taskId++
        this.title = title
        this.description = description
    }
}

module.exports = Task