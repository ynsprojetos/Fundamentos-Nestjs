import { Controller, Get, Param } from '@nestjs/common';

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


}
