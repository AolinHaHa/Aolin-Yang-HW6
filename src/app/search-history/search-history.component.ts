import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history/history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})

export class HistoryComponent implements OnInit {
  History: string[];
  constructor(private HistoryService: HistoryService) { }
  ngOnInit() {
    this.History = this.HistoryService.getHistory();
  }
}
