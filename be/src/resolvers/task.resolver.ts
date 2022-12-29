import { Resolver, Query, Arg, FieldResolver, Root } from 'type-graphql'
import { Task } from '../entities/task'
import { User } from '../entities/user'
import { usersCollection, tasksCollection } from '../infrastructure/repository'

@Resolver(of => Task)
export class TaskResolver {

    @Query(() => [Task])
    async tasks() {
        return await tasksCollection;
    }

    @Query(() => Task)
    async task(@Arg('id') id: number) {
        return await tasksCollection.find(task => task.id === id);
    }

    @FieldResolver(() => User)
    async assignee(@Root() task: Task) {
        return await usersCollection.find(user => user.id === task.userId);
    }
}