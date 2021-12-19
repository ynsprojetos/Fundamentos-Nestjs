import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesService } from './courses.service';

import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
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
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCouseDto: UpdateCourseDto) {
        return this.courseService.update(id, updateCouseDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.courseService.remove(id)
    }
}
