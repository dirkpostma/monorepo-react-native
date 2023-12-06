"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = exports.someFunction = exports.someMessage = void 0;
exports.someMessage = 'Message from shared';
const someFunction = () => {
    alert("Alert from shared");
};
exports.someFunction = someFunction;
exports.theme = {
    backgroundColor: "#3528A7"
};
