import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BreweryDisplayPage } from './brewery-display.page';

const routes: Routes = [
  {
    path: '',
    component: BreweryDisplayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BreweryDisplayPage]
})
export class BreweryDisplayPageModule {}
