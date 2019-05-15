import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'breweries',
        children: [
          {
            path: '',
            loadChildren: '../breweries/breweries.module#BreweriesPageModule'
          }
        ]
      },
      {
        path: 'beers',
        children: [
          {
            path: '',
            loadChildren: '../beers/beers.module#BeersPageModule'
          }
        ]
      },
      {
        path: 'brewery-display/:id',
        children: [
          {
            path: '',
            loadChildren: '../brewery-display/brewery-display.module#BreweryDisplayPageModule'
          }
        ]
      },
      {
        path: 'brewery-modify/:id',
        children: [
          {
            path: '',
            loadChildren: '../brewery-modify/brewery-modify.module#BreweryModifyPageModule'
          }
        ]
      },
      {
        path: 'beer-display/:id',
        children: [
          {
            path: '',
            loadChildren: '../beer-display/beer-display.module#BeerDisplayPageModule'
          }
        ]
      },
      {
        path: 'beer-modify/:id',
        children: [
          {
            path: '',
            loadChildren: '../beer-modify/beer-modify.module#BeerModifyPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}