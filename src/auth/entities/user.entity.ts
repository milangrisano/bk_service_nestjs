import { Shares } from "src/shares/entities/share.entity";
import { 
    BeforeInsert, BeforeUpdate, Column, 
    CreateDateColumn, Entity, OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";


@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;
    
    @Column('text', {
        name: 'last_name',
    })
    lastName: string;

    @Column('text', {
        unique: true //!OJO: esto permite que los correos electronicos no se repitan,
                     //! verificar si es conveniente, tiene que haber un key que puede ser el telef o email
    })
    email: string;

    @Column('text',{
        select: false
    })
    password: string;

    @Column({
         type: 'bool',
         default: false,
         name: 'is_active'
     })
    isActive: boolean;

    @Column({
        name: 'ramdon_token',
    })
    activationToken: string;

    @CreateDateColumn({
        name: 'create_on'
    })
    createOn: Date;


    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];

    @OneToMany(
        ()=> Shares,
        (shares)=> shares.user,
        { cascade: true }
    )
    userShares: Shares;

    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate() 
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();
    }
}