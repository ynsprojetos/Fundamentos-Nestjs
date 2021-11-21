import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
    @Get('list')
    findAll() {
        return 'Listagem de cursos'
    }

    @Get(':id')
    findoOne(@Param('id') id: string) {
        return `CURSO #${id}`;
    }

    @Post()
    create(@Body() body) {
        return body;
    }


}
