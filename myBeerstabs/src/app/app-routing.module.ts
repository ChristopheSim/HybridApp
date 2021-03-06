import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',loadChildren: './home/home.module#HomePageModule'},
  { path: 'breweries', loadChildren: './breweries/breweries.module#BreweriesPageModule' },
  { path: 'brewery-create', loadChildren: './brewery-create/brewery-create.module#BreweryCreatePageModule' },
  { path: 'brewery-display/:id', loadChildren: './brewery-display/brewery-display.module#BreweryDisplayPageModule' },
  { path: 'brewery-modify/:id', loadChildren: './brewery-modify/brewery-modify.module#BreweryModifyPageModule' },
  { path: 'beers', loadChildren: './beers/beers.module#BeersPageModule' },
  { path: 'beer-create', loadChildren: './beer-create/beer-create.module#BeerCreatePageModule' },
  { path: 'beer-display/:id', loadChildren: './beer-display/beer-display.module#BeerDisplayPageModule' },
  { path: 'beer-modify/:id', loadChildren: './beer-modify/beer-modify.module#BeerModifyPageModule' },
  { path: 'beer-create', loadChildren: './beer-create/beer-create.module#BeerCreatePageModule' },
  { path: 'brewery-create', loadChildren: './brewery-create/brewery-create.module#BreweryCreatePageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
