import { Component, OnInit } from '@angular/core';
import { Beer } from '../classes/beer/beer';
import { ActivatedRoute, Router } from '@angular/router';
import { BeersServService } from '../services/beers/beers-serv.service';
import { Brewery } from '../classes/brewery/brewery';
import { BreweriesServService } from '../services/breweries-serv.service';

@Component({
  selector: 'app-beer-create',
  templateUrl: './beer-create.page.html',
  styleUrls: ['./beer-create.page.scss'],
})
export class BeerCreatePage implements OnInit {
  public newBeer = new Beer(this.beerServices.lastId +1, '', 0, '', 1);
  public breweries: Brewery[]

  constructor(private route: ActivatedRoute,
              private beerServices: BeersServService,
              private breweryServices: BreweriesServService,
              private router: Router) { }

  ngOnInit() {
    this.breweries = this.breweryServices.getBreweries();
  }

  create() {
    this.beerServices.putBeer(this.newBeer);
    this.router.navigateByUrl('/beers');
  }

}
