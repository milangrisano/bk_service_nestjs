import { IsIn, IsNumber, IsString, MaxLength, MinLength } from "class-validator";


export class CreateUserProfileDto {

    @IsIn(['men','female','others'])
    gender: string;

    @IsNumber()
    @MaxLength(7)
    phone: number;

    @IsString()
    estado: string;
    
    @IsString()
    ciudad: string;
    
    @IsString()
    @MinLength(3)
    bankName: string;

}
