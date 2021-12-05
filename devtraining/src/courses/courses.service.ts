import { Course } from './entities/course.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {

    private courses: Course[] = [
        {
            id: 1,
            name: "fundamentos do framework nestjs",
            description: "fundamentos do framework nestjs",
            tags: ["node.js", "nestjs", "java", "javascript"]
        }
    ]

    findAll(): Course[] {
        return this.courses;
    }

    findOne(id: string): Course {
        return this.courses.find((course: Course) => course.id == Number(id))
    }

    create(createCursoDTO: any) {
        this.courses.push(createCursoDTO)
    }

    update(id: string, updateCursoDTO: any) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id == Number(id))
        this.courses[indexCourse] = updateCursoDTO
    }

    remove(id: string, updateCursoDTO: any) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id == Number(id))
        if (indexCourse > 0) {
            this.courses.splice(indexCourse, 1)
        }

    }

}