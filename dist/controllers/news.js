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
exports.deleteItem = exports.postItem = exports.uploadItem = exports.getItems = exports.getItem = void 0;
const error_handle_1 = require("../utils/error.handle");
const new_1 = require("../services/new");
const getItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield (0, new_1.getNew)(id);
        res.send(response);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, `ERROR_GET_ITEM: ${error}`);
    }
});
exports.getItem = getItem;
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, new_1.getNews)();
        res.send(response);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, `ERROR_GET_ITEMS: ${error}`);
    }
});
exports.getItems = getItems;
const uploadItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const response = yield (0, new_1.updateNew)(id, data);
        res.send(response);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, `ERROR_UPLOAD_ITEMS: ${error}`);
    }
});
exports.uploadItem = uploadItem;
const postItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseNews = yield (0, new_1.insertNews)(req.body);
        res.send(responseNews);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, `ERROR_POST_ITEM: ${error}`);
    }
});
exports.postItem = postItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield (0, new_1.deleteNew)(id);
        const data = response ? response : "NOT_FOUND";
        res.send(response);
    }
    catch (error) {
        (0, error_handle_1.handleHttp)(res, `ERROR_DELETE_ITEM: ${error}`);
    }
});
exports.deleteItem = deleteItem;
