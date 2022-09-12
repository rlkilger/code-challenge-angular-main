import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as planets from '../planets.json';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {

  allPlanets = planets
  listOfPlanets = this.allPlanets.results
  planet: any

  constructor(private route: ActivatedRoute) { 
    this.route.paramMap
      .subscribe(params => {
        let planetName = params.get('planetName');
        this.planet = this.listOfPlanets.find(planet => planet.name === planetName);
        console.log('planet', this.planet);
      });
  }

  ngOnInit(): void {
  }


}
