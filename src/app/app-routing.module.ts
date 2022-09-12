import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanetListComponent } from './star-wars/planet-list/planet-list.component';
import { PlanetDetailComponent } from './star-wars/planet-detail/planet-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetListComponent
  },
  {
    path: 'planet-details/:planetName',
    component: PlanetDetailComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
