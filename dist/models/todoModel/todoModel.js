"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'You must specify name'],
    },
    status: {
        type: String,
        enum: {
            values: ['complete', 'progress'],
        },
        default: 'progress',
    },
});
const Todo = (0, mongoose_1.model)('Todo', todoSchema);
exports.default = Todo;
