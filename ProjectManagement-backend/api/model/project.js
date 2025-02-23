const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    task: {
        type: String,
        required: true
    }
})

const projectItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {   // Changed from dueData to dueDate
        type: Date,
        required: true
    },
    tasks: [taskSchema]
});



const projectSchema = new mongoose.Schema({
    projects: [projectItemSchema],
    tasks: {

    }
});

module.exports = mongoose.model("Project", projectSchema);
