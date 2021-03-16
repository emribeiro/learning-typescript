import {Request, Response} from 'express';
import CreateCourseService from './service/CreateCourseService'

export function createCourse(request: Request, response: Response){
    const course = CreateCourseService.execute({
        name: "NodeJs",
        duration: 10,
        educator: "Dani Leao"
    });

    return response.json(course);
}