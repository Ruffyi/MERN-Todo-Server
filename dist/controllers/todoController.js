"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createNewTodo = exports.getAllTodos = void 0;
const todoModel_1 = __importDefault(require("../models/todoModel/todoModel"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
// @desc Get all todos
// @route GET /todos
// @access Public
const getAllTodos = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield todoModel_1.default.find({});
    res.status(200).send({
        status: 'success',
        data: {
            todos,
        },
    });
}));
exports.getAllTodos = getAllTodos;
// @desc Create new todo
// @route POST /todos
// @access Public
const createNewTodo = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, status } = req.body;
    const newTodo = yield todoModel_1.default.create({ name, status });
    res.status(201).send({
        status: 'success',
        data: {
            newTodo,
        },
    });
}));
exports.createNewTodo = createNewTodo;
// @desc Update todo
// @route POST /todos/:id
// @access Public
const updateTodo = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedTodo = yield todoModel_1.default.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(201).send({
        status: 'success',
        data: {
            updatedTodo,
        },
    });
}));
exports.updateTodo = updateTodo;
// @desc Delete todo
// @route POST /todos/:id
// @access Public
const deleteTodo = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deletedTodo = yield todoModel_1.default.findByIdAndDelete(id);
    res.status(201).send({
        status: 'success',
        data: {
            deletedTodo,
        },
    });
}));
exports.deleteTodo = deleteTodo;
