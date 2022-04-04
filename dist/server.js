"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = require("path");
// DB
const connectDB_1 = require("./db/connectDB");
// Router
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
// Middlewares
const errorController_1 = require("./controllers/errorController");
const errorController_2 = __importDefault(require("./controllers/errorController"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({ path: './config/.env' });
(0, connectDB_1.connectDB)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
if (process.env.PROJECT_MODE === 'production') {
    app.use(express_1.default.static((0, path_1.resolve)(__dirname, './client/build')));
    app.get('*', (req, res) => {
        res.sendFile((0, path_1.resolve)(__dirname, './client/build', 'index.html'));
    });
}
if (process.env.PROJECT_MODE === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
const SERVER_PORT = process.env.SERVER_PORT || 5000;
app.use('/api/v1/todos', todoRoutes_1.default);
app.all('*', errorController_1.NotFoundPage);
app.use('*', errorController_2.default);
app.listen(SERVER_PORT, () => {
    console.log(`Server is listening at port : ${SERVER_PORT}`);
});
