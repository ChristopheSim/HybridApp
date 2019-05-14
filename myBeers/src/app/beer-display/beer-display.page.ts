import { Component, OnInit } from '@angular/core';
import { Beer } from '../classes/beer/beer';
import { ActivatedRoute, Router } from '@angular/router';
import { BeersServService } from '../services/beers/beers-serv.service';

@Component({
  selector: 'app-beer-display',
  templateUrl: './beer-display.page.html',
  styleUrls: ['./beer-display.page.scss'],
})
export class BeerDisplayPage implements OnInit {
  public beerId: number;
  public beer: Beer;

  constructor(private route: ActivatedRoute,
              private beersServ: BeersServService,
              private router: Router) { }

  ngOnInit() {
    this.beerId = Number(this.route.snapshot.paramMap.get('id'));
    this.beer = this.beersServ.getBeer(this.beerId);
  }

  delete(id: number) {
    this.beersServ.deleteBeer(id);
    this.router.navigateByUrl('/beers');
  }
}
