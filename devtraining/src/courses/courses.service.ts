import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';
import { HttpException, Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course) private readonly courseRepository: Repository<Course>
    ) { }
    findAll() {
        return this.courseRepository.find()
    }

    findOne(id: string) {
        const course = this.courseRepository.findOne(id);

        if (!course) {
            throw new NotFoundException(`Course ID ${id} not found`)
        }
        return course
    }

    create(createCursoDTO: CreateCourseDto) {
        const courses = this.courseRepository.create(createCursoDTO)
        return this.courseRepository.save(courses)
    }

    async update(id: string, updateCursoDTO: UpdateCourseDto) {
        const course = await this.courseRepository.preload({
            id: + id, ...updateCursoDTO,
        })

        if (!course) {
            throw new NotFoundException(`Course ID ${id} not found`)
        }

        return this.courseRepository.save(course)
    }

    async remove(id: string) {
        const course = await this.courseRepository.findOne(id)

        if (!course) {
            throw new NotFoundException(`Course ID ${id} not found`)
        }

        return this.courseRepository.remove(course)

    }

}
