"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCourseService = /** @class */ (function () {
    function CreateCourseService() {
    }
    CreateCourseService.prototype.execute = function (_a) {
        var name = _a.name, duration = _a.duration, educator = _a.educator;
        var course = { name: name, duration: duration, educator: educator };
        console.log(course);
        return course;
    };
    return CreateCourseService;
}());
exports.default = new CreateCourseService();
