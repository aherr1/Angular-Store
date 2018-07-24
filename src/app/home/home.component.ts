import { Component, OnInit } from '@angular/core';
import {GemModel} from '../gem-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
homeGems : GemModel[];
    
 	constructor(private httpClient: HttpClient) { }
 	ngOnInit() {
		this.httpClient.get<GemModel[]>('http://localhost:51500/gem').subscribe((results) => { this.homeGems = results });
 	}
 
 }