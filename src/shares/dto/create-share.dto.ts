import { IsInt, IsPositive } from "class-validator";

export class CreateShareDto {
    
    @IsInt()
    @IsPositive()
    shares: number;

}
