import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Roles } from './roles.entity';
import { Order } from 'src/orders/entities/order.entity';

@Entity({name:'users'})
export class User {

    @PrimaryGeneratedColumn() //Este decorador lo hará autoincrementable y como llave primaria
    id: number

    @Column({unique:true})
    email: string

    @Column()
    password: string

   @OneToMany(()=>Order, order =>order.userId)
   idOrder: Order[]
   
}