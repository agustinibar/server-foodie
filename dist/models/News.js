"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NewSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
const NewsModel = (0, mongoose_1.model)('News', NewSchema);
exports.default = NewsModel;
