import { Campus } from "../../domain/entities/campus.entity";
import { CampusRepository } from "../../domain/repositories/campus.repository";

export class CampusLocalStorage implements CampusRepository {
    
    getCampuses(): Campus[] {
        throw new Error("Method not implemented.");
    }

    getCampusById(idCampus: number): Campus {
        throw new Error("Method not implemented.");
    }

}