"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerErrorMiddleware = ServerErrorMiddleware;
function ServerErrorMiddleware(error, request, response, next) {
    next();
}
