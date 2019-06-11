import { Component, OnInit } from '@angular/core';
import { Brewery } from '../classes/brewery/brewery';
import { ActivatedRoute, Router } from '@angular/router';
import { BreweriesServService } from '../services/breweries-serv.service';

@Component({
  selector: 'app-brewery-create',
  templateUrl: './brewery-create.page.html',
  styleUrls: ['./brewery-create.page.scss'],
})
export class BreweryCreatePage implements OnInit {
  public newBrewery = new Brewery(this.breweriesServices.lastId + 1, '', '');

    constructor(private route: ActivatedRoute,
                private breweriesServices: BreweriesServService,
                private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.breweriesServices.putBrewery(this.newBrewery);
    this.router.navigateByUrl('/breweries');
  }

}
