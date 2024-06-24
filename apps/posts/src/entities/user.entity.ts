import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Post } from './post.entity';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class User {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

  @Field(() => [Post])
  @Column()
  posts?: Post[];
}