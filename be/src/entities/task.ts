import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ObjectType, ID } from 'type-graphql'
import { MaxLength, IsNumber } from 'class-validator'
import { ITask } from './types/taskType'

@Entity()
@ObjectType()
export class Task implements ITask {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    @IsNumber()
    readonly id: number

    @Column({ type: 'varchar', length: 200 })
    @Field()
    @MaxLength(200)
    title: string

    @Column()
    @Field()
    @IsNumber()
    userId: number
}