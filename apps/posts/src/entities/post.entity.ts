import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Post {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

  @Field()
  @Column()
  body: string;

  @Field()
  @Column()
  authorId: string;
}