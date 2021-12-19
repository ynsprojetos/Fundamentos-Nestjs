import { CoursesService } from './courses.service';

import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CoursesService) { }
    @Get()
    findAll() {
        return this.courseService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.courseService.findOne(id)
    }

    @Post()
    create(@Body() body) {
        return this.courseService.create(body)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.courseService.update(id, body)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.courseService.remove(id)
    }
}
