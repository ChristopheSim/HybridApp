import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BeerDisplayPage } from './beer-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{path: '', component: BeerDisplayPage}])
  ],
  declarations: [BeerDisplayPage]
})
export class BeerDisplayPageModule {}
