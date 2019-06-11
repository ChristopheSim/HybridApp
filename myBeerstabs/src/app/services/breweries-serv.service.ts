import { Injectable } from '@angular/core';
import { Brewery } from '../classes/brewery/brewery';

@Injectable({
  providedIn: 'root'
})
export class BreweriesServService {
  public lastId = 3;

  private breweries: Brewery[] = [
    new Brewery(1, "BBP", "Test"),
    new Brewery(2, "Duvel Moortgat", "Test"),
    new Brewery(3, "Abbaye d'Orval", "Test")
  ]
  constructor() { }

  getBreweries(): Brewery[] {
    return this.breweries;
  }

  getBrewery(id: number): Brewery {
    let findBrewery: Brewery;
    this.breweries.forEach(brewery => {
      if (brewery.id === id) {
        findBrewery = brewery;
      }
    });

    return findBrewery;
  }

  postBrewery(newBrewery: Brewery) {
    this.breweries.forEach((brewery, index) => {
      if (brewery.id == newBrewery.id) {
        this.breweries[index] = newBrewery;
      }
    });
  }

  putBrewery(newBrewery: Brewery) {
    this.breweries.push(newBrewery);
    this.lastId ++;
  }

  deleteBrewery(id: number) {
    this.breweries.forEach((brewery, index) => {
      if (brewery.id === id) {
        this.breweries.splice(index, 1);
      }
    });
  }
}
