import { Tag } from './entities/tag.entity';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { Course } from './entities/course.entity';
import { HttpException, Injectable, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course) private readonly courseRepository: Repository<Course>,
        @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>
    ) { }

    findAll() {
        return this.courseRepository.find({
            relations: ['tags']
        })
    }

    findOne(id: string) {
        const course = this.courseRepository.findOne(id, { relations: ['tags'] });

        if (!course) {
            throw new NotFoundException(`Course ID ${id} not found`)
        }
        return course
    }

    async create(createCursoDTO: CreateCourseDto) {
        const tags = await Promise.all(
            createCursoDTO.tags.map((name: string) => this.preloadTagByName(name))
        )

        const course = this.courseRepository.create({
            ...createCursoDTO, tags
        })

        return this.courseRepository.save(course)

    }

    async update(id: string, updateCursoDTO: UpdateCourseDto) {

        const tags = updateCursoDTO.tags && (
            await Promise.all(updateCursoDTO.tags.map(name => this.preloadTagByName(name)))
        )

        const course = await this.courseRepository.preload({
            id: + id,
            ...updateCursoDTO,
            tags
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

    private async preloadTagByName(name: string): Promise<Tag> {
        const tag = await this.tagRepository.findOne({ name });

        if (tag) {
            return tag
        }

        return this.tagRepository.create({ name })
    }

}
