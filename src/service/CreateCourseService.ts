

interface Course{
    name: String,
    duration: Number,
    educator: String
}

class CreateCourseService{

    execute({name, duration, educator} : Course){
        const course = {name,duration,educator};
        console.log(course);

        return course;
    }
}

export default new CreateCourseService()