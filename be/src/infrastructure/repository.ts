import { IUser, UserRole } from '../entities/types/userType'
import { ITask } from '../entities/types/taskType'

export let usersCollection: IUser[] = [
    {
        id: 10,
        name: 'stomy',
        email: 'stomy@example.com',
        role: UserRole.Admin,
    },
    {
        id: 11,
        name: 'stomy2',
        email: 'stomy2@example.com',
        role: UserRole.Staff,
    },
    {
        id: 12,
        name: 'stomy3',
        email: 'stomy3@example.com',
        role: UserRole.Staff,
    },
];

export let tasksCollection: ITask[] = [
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