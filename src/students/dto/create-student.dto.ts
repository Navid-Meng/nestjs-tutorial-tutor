import { IsEmail, IsInt, IsString, Max, Min } from 'class-validator'

export class CreateStudentDto {
    @IsString()
    name: string

    @IsEmail()
    email: string

    @IsInt()
    @Min(1)
    @Max(100)
    age: number
}
