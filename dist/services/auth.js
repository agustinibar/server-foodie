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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerNewUser = void 0;
const Users_1 = __importDefault(require("../models/Users"));
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const registerNewUser = (authUser) => __awaiter(void 0, void 0, void 0, function* () {
    const checkUser = yield Users_1.default.findOne({ email: authUser.email });
    if (checkUser) {
        return "The user email already exists";
    }
    ;
    const passwordHash = yield (0, bcrypt_handle_1.encrypt)(authUser.password);
    const newUser = yield Users_1.default.create({
        email: authUser.email,
        name: authUser.name,
        password: passwordHash
    });
    return newUser;
});
exports.registerNewUser = registerNewUser;
const loginUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    const userLog = yield Users_1.default.findOne({ email });
    if (!userLog) {
        return "NOT_FOUND_USER";
    }
    ;
    const passwordHash = userLog.password;
    const isCorrect = yield (0, bcrypt_handle_1.verified)(password, passwordHash);
    if (!isCorrect) {
        return "PASSWORD INCORRECT";
    }
    ;
    const token = yield (0, jwt_handle_1.generateToken)(userLog.email);
    const tokenData = {
        token,
        user: userLog,
    };
    return tokenData;
});
exports.loginUser = loginUser;
