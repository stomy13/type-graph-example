import { Resolver, Query, Arg, FieldResolver, Root } from 'type-graphql'
import { ITask } from '../entities/types/taskType'
import { Task } from '../entities/task'
import { User } from '../entities/user'
import { usersCollection } from './user.resolver'

@Resolver(of => Task)
export class TaskResolver {
    private tasksCollection: ITask[] = [
        {
            id: 1,
            title: 'jog',
            userId: 10,
        },
        {
            id: 2,
            title: 'programming',
            userId: 11,
        },
        {
            id: 3,
            title: 'shopping',
            userId: 10,
        },
    ];

    @Query(() => [Task])
    async tasks() {
        return await this.tasksCollection;
    }

    @Query(() => Task)
    async task(@Arg('id') id: number) {
        return await this.tasksCollection.find(task => task.id === id);
    }

    @FieldResolver(() => User)
    async assignee(@Root() task: Task) {
        // return await usersCollection.find(user => user.id === task.userId);
        return await usersCollection.find(user => user.id === task.userId);
    }
}