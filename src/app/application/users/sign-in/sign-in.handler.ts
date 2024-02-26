import { UserRepository } from "../../../domain/repositories/user.repository";
import { SignIn } from "./sign-in";

export class SignInHandler implements SignIn {

    constructor(
        private _userRepository: UserRepository
    ) { }

    signIn(email: string, password: string): boolean {

        var result = this._userRepository.signIn(email, password);

        return result;
    }

}