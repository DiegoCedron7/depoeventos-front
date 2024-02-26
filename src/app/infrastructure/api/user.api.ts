import { User } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repositories/user.repository";

export class UserApi implements UserRepository {
  private API_URL: string = "http://localhost:8080";

  async signIn(email: string, password: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password: password }),
      });

      if (!response.ok) {
        console.error("Error en la solicitud:", response.statusText);
        return false;
      }

      const data = await response.json();
      console.log(data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  signOut(token: string): boolean {
    throw new Error("Method not implemented.");
  }
  signUp(user: User): boolean {
    throw new Error("Method not implemented.");
  }
}
