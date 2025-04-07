const Task = require('../models/task');

exports.getMyTasksByStatus = async (req, res) => {
    const userId = req.user; // user ID from token middleware
    const { status } = req.query; // get status from query param

    try {
        const tasks = await Task.find({
            assignedTo: userId, // or whatever your field is called
            status: status // "complete" or "fail"
        }).populate("createdBy", "name")

        res.status(200).json({
            success: true,
            message: `Tasks with status: ${status}`,
            data: tasks
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateStatus = async (req, res) => {
    const id = req.params.id
    const { status } = req.body
    console.log(status, id)
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({
            success: true,
            message: "Status updated successfully",
            data: updatedTask
        });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

