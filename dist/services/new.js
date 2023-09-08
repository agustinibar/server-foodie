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
exports.deleteNew = exports.updateNew = exports.getNew = exports.getNews = exports.insertNews = void 0;
const News_1 = __importDefault(require("../models/News"));
const insertNews = (notice) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield News_1.default.create(notice);
    return responseInsert;
});
exports.insertNews = insertNews;
const getNews = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseNews = yield News_1.default.find();
    return responseNews;
});
exports.getNews = getNews;
const getNew = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseNew = yield News_1.default.findOne({ _id: id });
    return responseNew;
});
exports.getNew = getNew;
const updateNew = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const responseUpdate = yield News_1.default.findOneAndUpdate({ _id: id }, data, { new: true });
    console.log(responseUpdate);
    return responseUpdate;
});
exports.updateNew = updateNew;
const deleteNew = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield News_1.default.deleteOne({ _id: id });
    return response;
});
exports.deleteNew = deleteNew;
