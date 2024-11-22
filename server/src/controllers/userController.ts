import { User } from "src/database/types/user.type";
import { UserSchemaModel } from "../database/user.model";
import { Response, Request as Req } from "express";
import { genSalt, hash } from "bcrypt";
import { Route, Get, Post, Request, Res, Controller, TsoaResponse } from 'tsoa';
@Route("api/users")
export class UserController extends Controller {

    /**
     * Method to get all Users
     * @returns @type {User}
     */
    @Get()
    public async get() {
        var dd = await UserSchemaModel.find({}).lean();
        return dd;
    }

    @Post("asdoctor")
    public async doctor() {
        var dd = await UserSchemaModel.find({}).lean();
        return dd;
    }

    @Post("aspatient")
    public async patient(@Request() req: Req) {
        try {
            const reqBody: any = req.body || {};
            var user = {} as User;
            user.username = reqBody.username;
            user.isActive = true;
            user.createdDate = new Date();
            const salt = await genSalt(10);
            user.passwordHash = await hash(reqBody.password || 'Demo@123', salt);
            user.email = reqBody.email;
            user.mobile = reqBody.mobile;
            var userModel = await UserSchemaModel.create(user);
            console.log("send response")
            return userModel;
        } catch (error) {
            console.log("error", error);
        }
        return false;
    }
}
