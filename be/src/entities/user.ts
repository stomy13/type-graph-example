import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Field, ObjectType, ID } from 'type-graphql'
import { MaxLength, IsEnum, IsEmail, IsNumber } from 'class-validator'
import { IUser, UserRole } from './types/userType'

@Entity()
@ObjectType()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  @IsNumber()
  readonly id: number

  @Column({ type: 'varchar', length: 191 })
  @Field()
  @MaxLength(191)
  name: string

  @Column()
  @Field()
  @IsEmail()
  email: string

  @Column({ type: 'enum', enum: UserRole, default: UserRole.Staff })
  @Field(() => UserRole)
  @IsEnum(UserRole)
  role: UserRole
}