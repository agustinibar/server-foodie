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
exports.loginCtrl = exports.registerCtrl = void 0;
const auth_1 = require("../services/auth");
const registerCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const responseUser = yield (0, auth_1.registerNewUser)(data);
    res.send(responseUser);
});
exports.registerCtrl = registerCtrl;
const loginCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const { email, password } = data;
    const logInUser = yield (0, auth_1.loginUser)({ email, password });
    res.send(logInUser);
});
exports.loginCtrl = loginCtrl;
