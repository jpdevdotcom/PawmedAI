"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../controller/auth");
exports.authRoute = express_1.default.Router();
exports.authRoute.post('/register', auth_1.register);
exports.authRoute.post('/login', auth_1.login);
