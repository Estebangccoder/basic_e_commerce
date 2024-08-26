import { Product } from "src/products/entities/products.entity";
import { User } from "src/users/entities/users.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";

@Entity()
export class Order {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=> User, user => user.idOrder)
    userId: number;
    
    @ManyToMany(()=> Product)
    products: Product[];


    @Column('float', {
        default: 0
    })
    totalPrice: number;
}