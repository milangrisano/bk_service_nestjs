import { User } from "../../auth/entities";
import { PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, Entity } from "typeorm";

@Entity()
export class Shares {

    @PrimaryGeneratedColumn('uuid',{
        name: 'buy_id',
    })
    buyId: string;

    @Column({
        type: 'int',
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

    @ManyToOne(
        ()=> User,
        ( user )=> user.userShares,
        {eager: true }
    )
    user: User;
    
}
