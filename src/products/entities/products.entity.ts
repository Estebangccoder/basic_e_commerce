import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')

export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column('float', {
        default: 0
    })
    price: number;

    @Column()
    description: string;

    
}