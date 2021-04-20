import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  stories$;
  page: number = 1;
  constructor(private newsService: NewsService) {
    this.stories$ = this.newsService.getTopStoriesObservable(this.page);
  }

  onCategoryChange($event) {
    this.stories$ = this.newsService.getTopStoriesObservable(this.page, $event.detail.value);
  }
}
