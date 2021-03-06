"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var CreateCourseService_1 = __importDefault(require("./service/CreateCourseService"));
function createCourse(request, response) {
    var course = CreateCourseService_1.default.execute({
        name: "NodeJs",
        duration: 10,
        educator: "Dani Leao"
    });
    return response.json(course);
}
exports.createCourse = createCourse;
