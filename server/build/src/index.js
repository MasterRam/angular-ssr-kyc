"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const routes_1 = require("./routes");
const swaggerUI = __importStar(require("swagger-ui-express"));
const swaggerJson = __importStar(require("../swagger.json"));
// Create a new express application instance
const app = (0, express_1.default)();
(0, database_1.default)();
// Set the network port
const port = process.env['PORT'] || 3000;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
// app.use("/api",()=>{
(0, routes_1.RegisterRoutes)(app);
// })
app.use(["/openapi", "/docs", "/swagger"], swaggerUI.serve, swaggerUI.setup(swaggerJson));
// Define the root path with a greeting message
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});
// app.listen(3000);
// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});
