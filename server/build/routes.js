"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRoutes = RegisterRoutes;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var healthController_1 = require("./controllers/healthController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var userController_1 = require("./controllers/userController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
var models = {};
var validationService = new runtime_1.ValidationService(models);
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get.apply(app, __spreadArray(__spreadArray(__spreadArray(['/api/health'], ((0, runtime_1.fetchMiddlewares)(healthController_1.HealthController)), false), ((0, runtime_1.fetchMiddlewares)(healthController_1.HealthController.prototype.check)), false), [function HealthController_check(request, response, next) {
            var args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            var validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                var controller = new healthController_1.HealthController();
                var promise = controller.check.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get.apply(app, __spreadArray(__spreadArray(__spreadArray(['/api/users'], ((0, runtime_1.fetchMiddlewares)(userController_1.UserController)), false), ((0, runtime_1.fetchMiddlewares)(userController_1.UserController.prototype.get)), false), [function UserController_get(request, response, next) {
            var args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            var validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                var controller = new userController_1.UserController();
                var promise = controller.get.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post.apply(app, __spreadArray(__spreadArray(__spreadArray(['/api/users/asdoctor'], ((0, runtime_1.fetchMiddlewares)(userController_1.UserController)), false), ((0, runtime_1.fetchMiddlewares)(userController_1.UserController.prototype.doctor)), false), [function UserController_doctor(request, response, next) {
            var args = {};
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            var validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                var controller = new userController_1.UserController();
                var promise = controller.doctor.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post.apply(app, __spreadArray(__spreadArray(__spreadArray(['/api/users/aspatient'], ((0, runtime_1.fetchMiddlewares)(userController_1.UserController)), false), ((0, runtime_1.fetchMiddlewares)(userController_1.UserController.prototype.patient)), false), [function UserController_patient(request, response, next) {
            var args = {
                req: { "in": "request", "name": "req", "required": true, "dataType": "object" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            var validatedArgs = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);
                var controller = new userController_1.UserController();
                var promise = controller.patient.apply(controller, validatedArgs);
                promiseHandler(controller, promise, response, undefined, next);
            }
            catch (err) {
                return next(err);
            }
        }], false));
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function isController(object) {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }
    function promiseHandler(controllerObj, promise, response, successStatus, next) {
        return Promise.resolve(promise)
            .then(function (data) {
            var statusCode = successStatus;
            var headers;
            if (isController(controllerObj)) {
                headers = controllerObj.getHeaders();
                statusCode = controllerObj.getStatus() || statusCode;
            }
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            returnHandler(response, statusCode, data, headers);
        })
            .catch(function (error) { return next(error); });
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function returnHandler(response, statusCode, data, headers) {
        if (headers === void 0) { headers = {}; }
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach(function (name) {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            response.status(statusCode || 200);
            data.pipe(response);
        }
        else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        }
        else {
            response.status(statusCode || 204).end();
        }
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function responder(response) {
        return function (status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    }
    ;
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    function getValidatedArgs(args, request, response) {
        var fieldErrors = {};
        var values = Object.keys(args).map(function (key) {
            var name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'queries':
                    return validationService.ValidateParam(args[key], request.query, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "noImplicitAdditionalProperties": "throw-on-extras" });
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                    else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, { "noImplicitAdditionalProperties": "throw-on-extras" });
                    }
                case 'res':
                    return responder(response);
            }
        });
        if (Object.keys(fieldErrors).length > 0) {
            throw new runtime_1.ValidateError(fieldErrors, '');
        }
        return values;
    }
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
