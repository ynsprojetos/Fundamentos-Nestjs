<<<<<<< HEAD
import { CourseService } from './../../../course/course.service';
import { Controller, Get, Param } from '@nestjs/common';
@Controller('courses')
export class CoursesController {
    constructor(private readonly courseService: CourseService) { }
    @Get()
    findAll() {
        return 'Listagem de cursos'
    }

    @Get(':id')
    findOne(@Param() params) {
        return `Curso #${params.id}`
=======
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(@Res() response) {
        return response.status.send('Listagem de cursos')
    }

    @Get(':id')
    findoOne(@Param('id') id: string) {
        return `CURSO #${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `Atualização do Curso#${id}`
    }

    @Delete(':id')
    remove(@Param('id') id: string, @Body() body) {
        return `Exclusão do Curso#${id}`
>>>>>>> 2cf2ed735d4afbadd22380a4ee414c3acb5faab8
    }
}
