import { Component, OnInit } from '@angular/core';
import { SearchFacade } from 'geonetwork-ui';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  constructor(private searchFacade: SearchFacade) {}

  ngOnInit() {
    this.searchFacade.setResultsLayout('ROW');
  }
}
