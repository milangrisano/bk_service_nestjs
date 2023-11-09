import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterUserDto {
    
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches( /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name: string;
    
    @IsString()
    @MinLength(3)
    lastName: string;

}