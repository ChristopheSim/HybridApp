import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreweriesServService } from '../services/breweries-serv.service';
import { Brewery } from '../classes/brewery/brewery';

@Component({
  selector: 'app-brewery-display',
  templateUrl: './brewery-display.page.html',
  styleUrls: ['./brewery-display.page.scss'],
})
export class BreweryDisplayPage implements OnInit {

  public breweryId: number;
  public brewery: Brewery;

  constructor(private route: ActivatedRoute,
              private breweriesServ: BreweriesServService,
              private router: Router) { }

  ngOnInit() {
    this.breweryId = Number(this.route.snapshot.paramMap.get('id'));
    this.brewery = this.breweriesServ.getBrewery(this.breweryId);
  }

  delete(id: number) {
    this.breweriesServ.deleteBrewery(id);
    this.router.navigateByUrl('/breweries');
  }

}
