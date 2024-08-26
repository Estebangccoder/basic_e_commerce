import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('role_users')
export class Roles {
    @PrimaryColumn()
    id: string;
    
    @Column({unique: true})
    rol: string;
}