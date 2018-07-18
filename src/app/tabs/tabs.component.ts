import { Component, OnInit, Input } from '@angular/core';
import { GemModel } from '../gem-model';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  tab: number;
  @Input()
  gem: GemModel;
  constructor() { }
  ngOnInit() {
    this.tab = 1; 
  }
  setTab(selectedTab: number) {
      this.tab = selectedTab;
  }
      
}

