import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
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


}
