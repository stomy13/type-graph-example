import { Resolver, Query, Arg, FieldResolver, Root } from 'type-graphql'
import { User } from '../entities/user'
import { Task } from '../entities/task'
import { usersCollection, tasksCollection } from '../infrastructure/repository'

@Resolver(of => User)
export class UserResolver {

  @Query(() => [User])
  async users() {
    return await usersCollection;
  }

  @Query(() => User)
  async user(@Arg('id') id: number) {
    return await usersCollection.find(user => user.id === id);
  }

  @FieldResolver(() => [Task])
  async tasks(@Root() user: User) {
    return await tasksCollection.filter(task => user.id === task.userId);
  }
}