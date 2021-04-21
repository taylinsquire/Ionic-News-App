import { Component } from '@angular/core';
import { SavedNewsService } from '../services/saved-news.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private savedNewsService: SavedNewsService) {}

  savedNews = {};

  ngOnInit() {
    this.savedNews = this.savedNewsService.getSavedNews();
  }
}
