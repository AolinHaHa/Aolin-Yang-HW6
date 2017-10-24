import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history/history.service';
import { WikiService } from '../wiki/wiki.service';
import { GiphyService } from '../giphy/giphy.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class indexComponent implements OnInit {
  giphySearchResults = [];
  wikiSearchResults = [];
  searchText: string;
  constructor(
    private HistoryService: HistoryService,
    private WikiService: WikiService,
    private GiphyService: GiphyService
  ) { }

  ngOnInit() {}

  Giphy() {
    this.resetSearchResults()
    this.HistoryService.addToHistory(this.searchText + '  SEARCHED VIA GIPHY ON ' + this.getTimeStamp());
    this.GiphyService.Giphy(this.searchText).then(searchResults => this.giphySearchResults = searchResults.data);
  }
  Wiki() {
    this.resetSearchResults();
    this.HistoryService.addToHistory(this.searchText + ' SEARCHED VIA WIKI ON ' + this.getTimeStamp());
    this.WikiService.Wiki(this.searchText).then(searchResults => this.wikiSearchResults = searchResults);
  }
  getTimeStamp(): string {
    return (new Date().toUTCString());
  }
  resetSearchResults() {
    this.wikiSearchResults = [];
    this.giphySearchResults = [];
  }
}
