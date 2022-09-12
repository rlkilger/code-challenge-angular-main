import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import * as planets from '../planets.json';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {
  allPlanets = planets
  listOfPlanets = this.sortPlanets()

  constructor() { }

  ngOnInit(): void {
    console.log(this.listOfPlanets);
  }

  //Function to sort planets alphbetically
  sortPlanets() {
    return this.allPlanets.results.sort((a, b) => a.name.localeCompare(b.name))
  }

}


