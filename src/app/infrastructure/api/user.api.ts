import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

export class UserApi implements UserRepository {

    signIn(email: string, password: string): boolean {
        return true
    }

    signOut(token: string): boolean {
        throw new Error("Method not implemented.");
    }
    signUp(user: User): boolean {
        throw new Error("Method not implemented.");
    }

}