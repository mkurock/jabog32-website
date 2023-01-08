import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PilotEntity } from "src/models/pilot.entity";
import { SquadronEntity } from "src/models/squadron.entity";
import { Repository } from "typeorm";

@Injectable()
export class PilotService {
  constructor(
    @InjectRepository(PilotEntity) private pilotRepo: Repository<PilotEntity>,
    @InjectRepository(SquadronEntity) private squadronRepo: Repository<SquadronEntity>,
  ) { }

  async getPilots() {
    let reserve = await this.pilotRepo.createQueryBuilder("pilot")
      .leftJoinAndSelect("pilot.user", "user")
      .leftJoinAndSelect("pilot.rank", "rank")
      .leftJoinAndSelect("pilot.firstAircraft", "firstAircraft")
      .where("pilot.reserve = 1")
      .andWhere("pilot.deleted = 0")
      .orderBy("firstAircraft.name", 'ASC')
      .addOrderBy("user.userName", 'ASC')
      .getMany();


    // let squads = await this.squadronRepo.find({ relations: ['flights', 'flights.leadPilot'], order: { number: 'ASC' } });
    let squadrons = await this.squadronRepo.createQueryBuilder("squadron")
      .leftJoinAndSelect("squadron.flights", 'flights')

      .leftJoinAndSelect("flights.leadPilot", "leadPilot")
      .leftJoinAndSelect("leadPilot.user", "lUser")
      .leftJoinAndSelect("leadPilot.firstAircraft", "lfirstAircraft")
      .leftJoinAndSelect("leadPilot.rank", "lRank")

      .leftJoinAndSelect("flights.leadRio", "leadRio")
      .leftJoinAndSelect("leadRio.user", "lrUser")
      .leftJoinAndSelect("leadRio.rank", "lrRank")

      .leftJoinAndSelect("flights.leadWingPilot", "leadWingPilot")
      .leftJoinAndSelect("leadWingPilot.firstAircraft", "lwfirstAircraft")
      .leftJoinAndSelect("leadWingPilot.user", "lwUser")
      .leftJoinAndSelect("leadWingPilot.rank", "lwRank")

      .leftJoinAndSelect("flights.leadWingRio", "leadWingRio")
      .leftJoinAndSelect("leadWingRio.user", "lwrUser")
      .leftJoinAndSelect("leadWingRio.rank", "lwrRank")

      .leftJoinAndSelect("flights.secondElementLeadPilot", "secondElementLeadPilot")
      .leftJoinAndSelect("secondElementLeadPilot.firstAircraft", "sepfirstAircraft")
      .leftJoinAndSelect("secondElementLeadPilot.user", "sepUser")
      .leftJoinAndSelect("secondElementLeadPilot.rank", "sepRank")

      .leftJoinAndSelect("flights.secondElementLeadRio", "secondElementLeadRio")
      .leftJoinAndSelect("secondElementLeadRio.user", "lsrUser")
      .leftJoinAndSelect("secondElementLeadRio.rank", "lsrRank")

      .leftJoinAndSelect("flights.secondElementWingPilot", "secondElementWingPilot")
      .leftJoinAndSelect("secondElementWingPilot.firstAircraft", "firstAircraft")
      .leftJoinAndSelect("secondElementWingPilot.user", "user")
      .leftJoinAndSelect("secondElementWingPilot.rank", "rank")

      .leftJoinAndSelect("flights.secondElementWingRio", "secondElementWingRio")
      .leftJoinAndSelect("secondElementWingRio.user", "lswrUser")
      .leftJoinAndSelect("secondElementWingRio.rank", "lswrRank")

      .orderBy("squadron.number", "ASC")
      .addOrderBy("flights.name", "ASC")
      .getMany();


    let edelweiss = await this.pilotRepo.createQueryBuilder("pilot")
      .leftJoinAndSelect("pilot.user", "user")
      .leftJoinAndSelect("pilot.rank", "rank")
      .leftJoinAndSelect("pilot.firstAircraft", "firstAircraft")

      .leftJoinAndSelect("pilot.leadPilotFlights", 'leadPilotFlights')
      .leftJoinAndSelect("pilot.leadRioFlights", 'leadRioFlights')

      .leftJoinAndSelect("pilot.leadWingPilotFlights", 'leadWingPilotFlights')
      .leftJoinAndSelect("pilot.leadWingRioFlights", 'leadWingRioFlights')

      .leftJoinAndSelect("pilot.secondElementLeadPilotFlights", 'secondElementLeadPilotFlights')
      .leftJoinAndSelect("pilot.secondElementLeadRioFlights", 'secondElementLeadRioFlights')

      .leftJoinAndSelect("pilot.secondElementWingPilotFlights", 'secondElementWingPilotFlights')
      .leftJoinAndSelect("pilot.secondElementWingRioFlights", 'secondElementWingRioFlights')
      .where("pilot.deleted = 0")
      .andWhere("pilot.reserve = 0")
      .andWhere('leadPilotFlights.id IS NULL')
      .andWhere('leadRioFlights.id IS NULL')
      .andWhere('leadWingPilotFlights.id IS NULL')
      .andWhere('leadWingRioFlights.id IS NULL')
      .andWhere('secondElementLeadPilotFlights.id IS NULL')
      .andWhere('secondElementLeadRioFlights.id IS NULL')
      .andWhere('secondElementWingPilotFlights.id IS NULL')
      .andWhere('secondElementWingRioFlights.id IS NULL')
      .orderBy("firstAircraft.Name", 'ASC')
      .addOrderBy("user.userName", 'ASC')
      .getMany();
    return {
      squadrons,
      reserve,
      edelweiss
    }
  }

  async getPilotDetail(id: number) {
    return await this.pilotRepo.findOne(id, {
      relations: [
        'logbookDetails',
        'logbookDetails.logbook',
        'badges',
        'firstAircraft',
        'secondAircraft',
        'user',
        'rank',
        'leadPilotFlights',
        'leadPilotFlights.squadron',
        'leadRioFlights',
        'leadRioFlights.squadron',
        'leadWingPilotFlights',
        'leadWingPilotFlights.squadron',
        'leadWingRioFlights',
        'leadWingRioFlights.squadron',
        'secondElementLeadPilotFlights',
        'secondElementLeadPilotFlights.squadron',
        'secondElementLeadRioFlights',
        'secondElementLeadRioFlights.squadron',
        'secondElementWingPilotFlights',
        'secondElementWingPilotFlights.squadron',
        'secondElementWingRioFlights',
        'secondElementWingRioFlights.squadron',
      ]
    });
  }
}
