"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SomeComponent = void 0;
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const SomeComponent = (props) => {
    const { onPress = () => { } } = props;
    return (react_1.default.createElement(react_native_1.Pressable, { onPress: onPress, style: styles.mainContainer },
        react_1.default.createElement(react_native_1.Text, { style: styles.text }, "Shared Button")));
};
exports.SomeComponent = SomeComponent;
const styles = react_native_1.StyleSheet.create({
    mainContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "#2BE044",
        borderRadius: 10,
    },
    text: {
        fontSize: 16,
        color: "#FF0",
    },
});
