import { Component, OnInit } from '@angular/core';
import { Beer } from '../classes/beer/beer';
import { ActivatedRoute, Router } from '@angular/router';
import { BeersServService } from '../services/beers/beers-serv.service';
import { Brewery } from '../classes/brewery/brewery';
import { BreweriesServService } from '../services/breweries-serv.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-beer-modify',
  templateUrl: './beer-modify.page.html',
  styleUrls: ['./beer-modify.page.scss'],
})
export class BeerModifyPage implements OnInit {
  public beerId: number;
  public beer: Beer;
  public newBeer: Beer;
  public breweries: Brewery[]

  constructor(private route: ActivatedRoute,
              private beerServ: BeersServService,
              private breweryServ: BreweriesServService,
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {
    this.beerId = Number(this.route.snapshot.paramMap.get('id'));
    this.beer = this.beerServ.getBeer(this.beerId);
    this.breweries = this.breweryServ.getBreweries();
    this.newBeer = new Beer(this.beer.id,
                            this.beer.name,
                            this.beer.volume,
                            this.beer.description,
                            this.beer.fkBrewery.id);
     console.log(this.newBeer);
  }

  modify() {
    console.log(this.newBeer);
    this.beerServ.postBeer(this.newBeer);
    this.router.navigateByUrl('/beers');
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'This beer have been modified !',
      duration: 2000
    });
    toast.present();
  }
}
