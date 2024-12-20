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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchemaModel = void 0;
var mongoose_1 = require("mongoose");
var user_type_1 = require("./types/user.type");
var bcrypt_1 = require("bcrypt");
"use strict";
var UserSchema = new mongoose_1.Schema({
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
    return __awaiter(this, void 0, void 0, function () {
        var salt, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, bcrypt_1.genSalt)(10)];
                case 1:
                    salt = _b.sent();
                    _a = this;
                    return [4 /*yield*/, (0, bcrypt_1.hash)(password, salt)];
                case 2:
                    _a.passwordHash = _b.sent();
                    return [2 /*return*/];
            }
        });
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
    return array.findIndex(function (ind) { return ind[key] == value; });
}
