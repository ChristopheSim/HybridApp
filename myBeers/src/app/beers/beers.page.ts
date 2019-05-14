import { Component, OnInit } from '@angular/core';
import { Beer } from '../classes/beer/beer';
import { BeersServService } from '../services/beers/beers-serv.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.page.html',
  styleUrls: ['./beers.page.scss'],
})
export class BeersPage implements OnInit {
  beers: Beer[]

  constructor(private beersServ: BeersServService) {
   }

  ngOnInit() {
    this.beers = this.beersServ.getBeers();
  }
}
