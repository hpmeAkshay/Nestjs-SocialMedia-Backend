import { EntityBase } from "./entityBase";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User extends EntityBase{

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string

    @Column()
    password: string;

}