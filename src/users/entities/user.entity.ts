import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BaseEntity } from '../../common/entity/base.entity';
import { PostEntity } from '../../posts/entities/post.entity';

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

  @Column('text', {nullable: true})
  phone: string;

  @Column('text')
  password: string;

  @Column('integer')
  age: number;

  @OneToMany(() => PostEntity, (entity) => entity.user)
  posts?: PostEntity[];
}
