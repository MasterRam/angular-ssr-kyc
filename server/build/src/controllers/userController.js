"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = require("../database/user.model");
const bcrypt_1 = require("bcrypt");
const tsoa_1 = require("tsoa");
let UserController = class UserController extends tsoa_1.Controller {
    /**
     * Method to get all Users
     * @returns @type {User}
     */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            var dd = yield user_model_1.UserSchemaModel.find({}).lean();
            return dd;
        });
    }
    doctor() {
        return __awaiter(this, void 0, void 0, function* () {
            var dd = yield user_model_1.UserSchemaModel.find({}).lean();
            return dd;
        });
    }
    patient(req) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const reqBody = req.body || {};
                var user = {};
                user.username = reqBody.username;
                user.isActive = true;
                user.createdDate = new Date();
                const salt = yield (0, bcrypt_1.genSalt)(10);
                user.passwordHash = yield (0, bcrypt_1.hash)(reqBody.password || 'Demo@123', salt);
                user.email = reqBody.email;
                user.mobile = reqBody.mobile;
                var userModel = yield user_model_1.UserSchemaModel.create(user);
                console.log("send response");
                return userModel;
            }
            catch (error) {
                console.log("error", error);
            }
            return false;
        });
    }
};
exports.UserController = UserController;
__decorate([
    (0, tsoa_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "get", null);
__decorate([
    (0, tsoa_1.Post)("asdoctor"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "doctor", null);
__decorate([
    (0, tsoa_1.Post)("aspatient"),
    __param(0, (0, tsoa_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "patient", null);
exports.UserController = UserController = __decorate([
    (0, tsoa_1.Route)("api/users")
], UserController);
