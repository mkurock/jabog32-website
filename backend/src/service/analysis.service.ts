import { Injectable } from "@nestjs/common";
import { InjectConnection } from "@nestjs/typeorm";
import { Connection } from "typeorm";

@Injectable()
export class AnalysisService {
    constructor(@InjectConnection() private connection: Connection) {}

    async getRanking(){
        return await this.connection.query('SELECT * FROM jabog32_website.V_Pilot_Rank ORDER BY total desc');
    }
}