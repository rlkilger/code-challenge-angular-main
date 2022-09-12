import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetListComponent,
    PlanetDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CardModule,
    DividerModule,
    PaginatorModule
  ],
  exports: [
    PlanetsComponent,
  ]
})
export class StarWarsModule { }
