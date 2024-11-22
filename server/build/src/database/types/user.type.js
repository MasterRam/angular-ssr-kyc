"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
class User extends mongoose_1.Document {
    constructor() {
        super(...arguments);
        this.gender = 'unknown';
        this.isActive = true;
        this.isLocked = false;
    }
}
exports.User = User;
User.COLLECTION_NAME = "User";
