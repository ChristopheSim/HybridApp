import { Component, OnInit } from '@angular/core';
import { Brewery } from '../classes/brewery/brewery';
import { ActivatedRoute, Router } from '@angular/router';
import { BreweriesServService } from '../services/breweries-serv.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-brewery-modify',
  templateUrl: './brewery-modify.page.html',
  styleUrls: ['./brewery-modify.page.scss'],
})
export class BreweryModifyPage implements OnInit {
  public breweryId: number;
  public brewery: Brewery;
  public newBrewery: Brewery;

  constructor(private route: ActivatedRoute,
              private breweriesServ: BreweriesServService,
              private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {
    this.breweryId = Number(this.route.snapshot.paramMap.get('id'));
    this.brewery = this.breweriesServ.getBrewery(this.breweryId);
    this.newBrewery = new Brewery(this.brewery.id,
                                  this.brewery.name,
                                  this.brewery.address);
  }

  modify() {
    this.breweriesServ.postBrewery(this.newBrewery);
    this.router.navigateByUrl('/breweries');
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: 'This beer have been modified !',
      duration: 2000
    });
    toast.present();
  }
}
