import { Component } from '@angular/core';
import { NewsService } from '../services/news.service';
import { SavedNewsService } from '../services/saved-news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  stories$;
  search: string;
  constructor(private newsService: NewsService, private savedNewsService: SavedNewsService) {
    this.stories$ = this.newsService.getStoriesBySearchObservable();
  }

  searchNews(search) {
    console.log(search);
    this.stories$ = this.newsService.getStoriesBySearchObservable(search);
  }

  saveArticle(url, urlToImage) {
    this.savedNewsService.addSavedNews(
      {
        url: url,
        urlToImage: urlToImage
      }
    )
  }
}
