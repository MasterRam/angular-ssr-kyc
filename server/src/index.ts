import { Request, Response } from "express";
import express from "express";
import connectDB from './database';
import { RegisterRoutes } from "./routes";
import * as swaggerUI from "swagger-ui-express";
import * as swaggerJson from "../swagger.json";
import './controllers/healthController';
import './controllers/userController';
// Create a new express application instance
const app = express();
connectDB();
// Set the network port
const port = process.env['PORT'] || 3000;
app.use(express.json());
app.use(express.static("public"));

// app.use("/api",()=>{
RegisterRoutes(app);
// })
app.use(["/openapi", "/docs", "/swagger"], swaggerUI.serve, swaggerUI.setup(swaggerJson));
// Define the root path with a greeting message
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});
// app.listen(3000);
// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
}); 