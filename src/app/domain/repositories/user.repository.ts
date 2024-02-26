import { User } from "../entities/user.entity"

export interface UserRepository {

    signIn(email: string, password: string): boolean

    signOut(token: string): boolean

    signUp(user: User): boolean
    
}