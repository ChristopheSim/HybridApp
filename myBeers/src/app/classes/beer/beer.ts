import { Brewery } from '../brewery/brewery';
import { BreweriesServService } from 'src/app/services/breweries-serv.service';

export class Beer {
    private breweriesServ: BreweriesServService = new BreweriesServService();

    public id: number;
    public name: string;
    public volume: number;
    public description: string;
    public fkBrewery: Brewery;

    constructor(id: number,
                name: string,
                volume: number,
                description: string,
                breweryId: number) {

        this.id = id;
        this.name = name;
        this.volume = volume;
        this.description = description;
        this.fkBrewery = this.breweriesServ.getBrewery(breweryId);
    }
}
