import { Component, OnInit } from '@angular/core';
import {GemModel} from '../gem-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
homeGems : GemModel[] = [{
		id: 1,
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Some gems have hidden qualities beyond their lustre, beyond their shine... Dodecahedron is one of those gems',
		fullImagePath: './assets/gem-01.gif',
        inventory: 10,
        colors: ["red", "green", "blue"]
	},
						{
		id: 2,
		name: 'Pentagonal',
		price: 5.95,
		description: 'The origin of the pentagonal gem is unknown, hence it\'s low value',
		fullImagePath: './assets/gem-02.gif',
        inventory: 0,
        colors: ["yellow", "purple", "green"]

	},{
		id: 3,
		name: 'Hexagonal',
		price: 12.95,
		description: 'The hexagonal gem is one of our best sellers',
		fullImagePath: './assets/gem-03.gif',
        inventory: 5,
        colors: ["pink", "grey", "black"]

	}]
  constructor() { }

  ngOnInit() {
  }

}
