import { Component, OnInit } from '@angular/core';
import { Brewery } from '../classes/brewery/brewery';
import { BreweriesServService } from '../services/breweries-serv.service';

@Component({
  selector: 'app-breweries',
  templateUrl: 'breweries.page.html',
  styleUrls: ['breweries.page.scss']
})

export class BreweriesPage implements OnInit {
  breweries: Brewery[]

  constructor(private breweriesServ: BreweriesServService) {
   }

  ngOnInit() {
    this.breweries = this.breweriesServ.getBreweries();
  }

}
