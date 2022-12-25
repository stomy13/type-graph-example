import { Resolver, Query, Arg } from 'type-graphql'
import { IUser, UserRole } from '../entities/types/userType'
import { User } from '../entities/user'

@Resolver()
export class UserResolver {
  private usersCollection: IUser[] = [
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
  ];

  @Query(() => [User])
  async users() {
    return await this.usersCollection;
  }

  @Query(() => User)
  async user(@Arg('id') id: number) {
    return await this.usersCollection.find(user => user.id === id);
  }
}