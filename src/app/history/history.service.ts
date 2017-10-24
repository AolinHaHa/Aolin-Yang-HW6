import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {
  private History: string[] = [];

  constructor() { }

  addToHistory(searchEntry: string) {
    this.History.push(searchEntry);
  }

  getHistory() {
    return this.History;
  }
}
