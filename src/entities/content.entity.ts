import { ContentType } from "src/enums/contentType.enum";
import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { UserDto } from "../../../nestjs-social-media-dtos/src/dtos/user.dto";
import { EntityBase } from "./entityBase";
import { User } from "./user.entity";

@Entity()
export class Content extends EntityBase{

    @Column(
        {nullable:false}
    )
    title: string;

    @Column({
        nullable:false,
        default:ContentType.POST
    })
    type:ContentType;

    @Column()
    body:string;

    @Column()
    imageUrls: string;

    @Column()
    videoUrls: string;

    @ManyToOne(()=>User,user=>user.content)
    user:UserDto;
}