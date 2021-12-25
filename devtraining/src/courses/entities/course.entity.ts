import { Tag } from './tag.entity';
import { type } from "os";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
    // a entidade principal da relação recebe @JoinTable 
    // primeiro parâmetro é o alvo, segundo é a propriedade
    @JoinTable()
    @ManyToMany(() => Tag, (tag: Tag) => tag.courses, {
        cascade: true,
    })
    tags: Tag[];
}