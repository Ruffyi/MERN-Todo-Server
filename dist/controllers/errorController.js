"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundPage = void 0;
const CustomError_1 = __importDefault(require("./../utils/CustomError"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './../config/.env' });
const NotFoundPage = (req, res, next) => {
    const errorMessage = `Can't find ${req.originalUrl} on server`;
    next(new CustomError_1.default(errorMessage, 404));
};
exports.NotFoundPage = NotFoundPage;
const sendErrorDev = (res, err) => {
    const { message, httpStatus = 500, status = 'error', stack } = err;
    res.status(httpStatus).send({
        error: {
            message,
            httpStatus,
            status,
        },
        stack,
    });
};
const sendErrorProd = (res, err) => {
    const { message, httpStatus = 500, status = 'error' } = err;
    res.status(httpStatus).send({
        message: 'Something went wrong :(',
        status,
    });
};
const globalErrorMiddleware = (err, req, res, next) => {
    if (process.env.PROJECT_MODE === 'development') {
        sendErrorDev(res, err);
    }
    else if (process.env.PROJECT_MODE === 'production') {
        sendErrorProd(res, err);
    }
};
exports.default = globalErrorMiddleware;
