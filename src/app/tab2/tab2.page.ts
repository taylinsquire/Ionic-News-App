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
  currentSearch: string = '';
  currentCategory: string = '';
  search: string;
  constructor(private newsService: NewsService, private savedNewsService: SavedNewsService) {
    this.stories$ = this.newsService.getStoriesBySearchObservable();
  }

  onCategoryChange(category) {
    this.currentCategory = category
    this.searchNews(this.currentSearch, category);
  }

  searchNews(search, category = this.currentCategory) {
    this.currentSearch = search;
    this.stories$ = this.newsService.getStoriesBySearchObservable(search, category);
  }

  saveArticle(article) {
    this.savedNewsService.addSavedNews(
      {
        title: article.title,
        url: article.url,
        urlToImage: article.urlToImage
      }
    )
  }
}
