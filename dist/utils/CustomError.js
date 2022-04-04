"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomError extends Error {
    constructor(message, httpStatus) {
        super(message);
        this.message = message;
        this.httpStatus = httpStatus;
        this.status = String(httpStatus).startsWith('4') ? 'fail' : 'error';
        Error.captureStackTrace(this, this.constructor);
    }
}
exports.default = CustomError;
