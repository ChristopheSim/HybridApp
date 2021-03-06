import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BreweryDisplayPage } from './brewery-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: '', component: BreweryDisplayPage}])
  ],
  declarations: [BreweryDisplayPage]
})
export class BreweryDisplayPageModule {}
