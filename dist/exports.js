"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setClientCookie = exports.getClientCookie = void 0;
const getClientCookie_1 = __importDefault(require("./getClientCookie"));
exports.getClientCookie = getClientCookie_1.default;
const setClientCookie_1 = __importDefault(require("./setClientCookie"));
exports.setClientCookie = setClientCookie_1.default;
