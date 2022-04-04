"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoController_1 = require("../controllers/todoController");
const router = (0, express_1.Router)();
router.route('/').get(todoController_1.getAllTodos).post(todoController_1.createNewTodo);
router.route('/:id').patch(todoController_1.updateTodo).delete(todoController_1.deleteTodo);
exports.default = router;
