const express = require('express');
const router = express.Router();
const { createTodo, show, showById, updateTask, deleteTask } = require("../controller/todos")

router.post('/create/table', createTodo);
router.get("/get", show);
router.get("/get/:id", showById);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask);

module.exports = router;