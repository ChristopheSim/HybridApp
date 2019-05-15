import { Injectable } from '@angular/core';
import { Beer } from 'src/app/classes/beer/beer';
import { Brewery } from 'src/app/classes/brewery/brewery';

@Injectable({
  providedIn: 'root'
})
export class BeersServService {
  private beers: Beer[] = [
    new Beer(1, "Delta IPA", 7.6, "Bière amère", 1),
    new Beer(2, "Orval", 6.5, "Bière de l'abbaye d'Orval", 3)
  ]

  constructor() { }

  getBeers(): Beer[] {
    console.log(this.beers);
    return this.beers;
  }

  getBeer(id: number): Beer {
    let findBeers: Beer;
    this.beers.forEach(beer => {
      if (beer.id === id) {
        findBeers = beer;
      }
    });

    return findBeers;
  }

  postBeer(newBeer: Beer) {
    this.beers.forEach((beer, index) => {
      if (beer.id == newBeer.id) {
        this.beers[index] = newBeer;
      }
    });
  }

  deleteBeer(id: number) {
    this.beers.forEach((beer, index) => {
      if (beer.id === id) {
        this.beers.splice(index, 1);
      }
    });
  }
}
