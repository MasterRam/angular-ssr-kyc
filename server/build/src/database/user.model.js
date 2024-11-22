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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchemaModel = void 0;
const mongoose_1 = require("mongoose");
const user_type_1 = require("../database/types/user.type");
const bcrypt_1 = require("bcrypt");
const UserSchema = new mongoose_1.Schema({
    firstname: { type: String },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        sparse: true,
        default: null,
    },
    mobilecode: { type: String, default: "IN" },
    role: {
        type: String,
        enum: ['patient', 'doctor', 'representative'],
    },
    contactPhone: {
        type: String,
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    passwordHash: {
        type: String,
        default: "M/Zm+JuF+Q0xwG9XOWQSjLVSMkNUnIRfx8D6J2rfP9vFFp/DRmF+cx+db79J8DNm0XScry2gQHykvJlxh4+yVg==",
    },
    loginConditions: {
        loginAttempt: { type: Number, default: 0 },
        loginFailedDateTime: { type: Date },
        nextLoginDateTime: { type: Date },
    },
    mobile: { type: Number, unique: true, sparse: true },
    mobileVerified: { type: Boolean, default: false },
    profilePicture: { type: String, default: "" },
    dob: {
        type: Date,
    },
    gender: String,
    userVerified: { type: Boolean, default: false },
}, { timestamps: true });
/**
 * Virtuals
 */
UserSchema.virtual("password")
    .set(function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        const salt = yield (0, bcrypt_1.genSalt)(10);
        this.passwordHash = yield (0, bcrypt_1.hash)(password, salt);
    });
})
    .get(function () {
    return this.passwordHash;
});
// Non-sensitive info we'll be putting in the token
UserSchema.virtual("token").get(function () {
    return {
        _id: this._id,
        role: this.role,
    };
});
console.log("connections", mongoose_1.connections);
exports.UserSchemaModel = mongoose_1.connections[getObjectIndex(mongoose_1.connections, "id", 0)].model(user_type_1.User.COLLECTION_NAME, UserSchema, user_type_1.User.COLLECTION_NAME);
function getObjectIndex(array, key, value) {
    return array.findIndex((ind) => ind[key] == value);
}
