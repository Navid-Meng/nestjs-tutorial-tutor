import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
    private students: Student[] = [
        new Student(1, 'John', 'john@gmail.com', 14),
        new Student(2, 'Jane', 'jane@gmail.com', 15)
    ]
    private nextId = 3

    findAll() {
        return this.students
    }

    findOne(id: number): Student {
        const student = this.students.find(student => student.id === id)
        if (!student) {
            throw new NotFoundException(`Student with id ${id} not found`)
        }
        return student
    }

    create(createStudentDto: CreateStudentDto): Student{
        const student = new Student(
            this.nextId++,
            createStudentDto.name,
            createStudentDto.email,
            createStudentDto.age
        )
        this.students.push(student)
        return student
    }

    update(id: number, updateStudentDto: UpdateStudentDto): Student {
        const student = this.findOne(id)
        Object.assign(student, updateStudentDto)
        return student
    }

    remove(id: number): object {
        const index = this.students.findIndex(s => s.id === id)
        if (index === -1) {
            throw new NotFoundException(`Student with id ${id} not found`)
        }
        this.students.splice(index, 1)
        return {
            message: `Student with id ${id} deleted`
        }
    }
}
