import { Body, Controller, Get, Param, Post, Query, ParseIntPipe, Patch, Delete } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { StudentsService } from './students.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Student } from './entities/student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('students')
export class StudentsController {

    constructor(private readonly studentsService: StudentsService) { }

    @Get()
    findAll(): Student[]{
        return this.studentsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Student {
        return this.studentsService.findOne(id)
    }

    @Post() 
    create(@Body() createStudentDto: CreateStudentDto): Student{
        return this.studentsService.create(createStudentDto)
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateStudentDto: UpdateStudentDto
    ): Student {
        return this.studentsService.update(id, updateStudentDto)
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): object {
        return this.studentsService.remove(id)
         
    }
}

