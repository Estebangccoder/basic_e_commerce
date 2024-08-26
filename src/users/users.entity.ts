import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name:'users'})
export class User {

    @PrimaryGeneratedColumn() //Este decorador lo hará autoincrementable y como llave primaria
    id: number

    @Column()
    email: string

    @Column()
    password: string

   
}