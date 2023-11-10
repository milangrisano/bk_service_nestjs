import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Shares {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('int',{
        default: 0
    })
    shares: number;

    @CreateDateColumn({
        name: 'create_on',
    })
    createOn: Date;

    @Column({
         type: 'bool',
         default: false,
    })
    status: boolean;
}
