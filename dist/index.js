"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost:27017/md4_demo1').then(() => {
    console.log('--DB Connection Success--');
}).catch((error) => {
    console.log(error.message);
});
const app = (0, express_1.default)();
app.listen(3000, () => {
    console.log('--Server is Running--');
});
//# sourceMappingURL=index.js.map