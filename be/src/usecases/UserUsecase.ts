import { injectable } from "inversify";
import { DataSource, EntityManager } from "typeorm";
import { User } from "../entities/user";

export class UserDomain {
    public async getUsers(
        manager: EntityManager,
    ) {
        return manager
            .createQueryBuilder(User, "user")
            .getMany();
    }
}

@injectable()
export class UserUsecase {
    private domain: UserDomain
    constructor(
        private readonly conn: DataSource,
    ) {
        this.domain = new UserDomain();
    }

    public async getUsers(
    ) {
        const qR = this.conn.createQueryRunner()
        qR.connect()
        qR.startTransaction()
        try {
            const users = await this.domain.getUsers(qR.manager)
            await qR.commitTransaction()
            await qR.release()
            return users
        } catch (e: unknown) {
            await qR.rollbackTransaction()
            await qR.release()
            throw e
        }
    }
}
