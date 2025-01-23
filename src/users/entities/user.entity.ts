import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from "../../common/entity/base.entity";

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  firstName: string;

  @Column('text', { unique: true })
  email: string;

  @Column('text')
  city: string;

  @Column('text')
  password: string;

  @Column('integer')
  age: number;
}
