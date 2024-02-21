import { Campus } from "../entities/campus.entity";

export abstract class CampusRepository {

    abstract getCampuses(): Campus[]

    abstract getCampusById(idCampus: number): Campus
    
} 