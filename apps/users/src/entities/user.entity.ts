import { Entity, ObjectIdColumn, Column, ObjectId } from 'typeorm';
import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
@Entity()
export class User {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;
}
