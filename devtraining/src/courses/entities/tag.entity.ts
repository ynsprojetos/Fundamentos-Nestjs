import { Course } from './course.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    // primeiro parâmetro é o alvo, segundo é a propriedade
    @ManyToMany(() => Course, (course: Course) => course.tags)
    courses: Course[]
}
