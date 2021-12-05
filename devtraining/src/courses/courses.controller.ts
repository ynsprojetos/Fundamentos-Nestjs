import { CoursesService } from './courses.service';

import { Controller, Get, Param } from '@nestjs/common';
@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CoursesService) { }
    @Get()
    findAll() {
        return 'Listagem de cursos'
    }

    @Get(':id')
    findOne(@Param() params) {
        return `Curso #${params.id}`
    }
}
