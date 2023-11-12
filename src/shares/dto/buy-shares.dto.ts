import { IsInt } from "class-validator";
import { Entity, PrimaryGeneratedColumn } from "typeorm";


export class BuySharesDto {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @IsInt()
    shares: number;
}
