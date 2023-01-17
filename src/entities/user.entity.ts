import { EntityBase } from "./entityBase";
import { Column, PrimaryGeneratedColumn } from "typeorm";
import { OneToMany } from "typeorm/decorator/relations/OneToMany";
import { Content } from "./content.entity";
import {ContentDto} from "../../../nestjs-social-media-dtos/src/dtos/ContentDto"

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

    @OneToMany(()=>Content,content=>content.user)
    content:ContentDto;

}