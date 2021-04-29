import { Component } from '@angular/core';
import { SavedNewsService } from '../services/saved-news.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  savedNews;
  user$;

  constructor(
    private savedNewsService: SavedNewsService,
    private authService: AuthService
  ) {
    this.user$ = this.savedNewsService.getSavedNews();
    this.user$.subscribe((user) => {
      this.savedNews = user.savedNews;
    });
  }

  ngOnInit() {}

  unsaveArticle(article) {
    this.savedNewsService.addSavedNews({
      title: article.title,
      url: article.url,
      urlToImage: article.urlToImage,
    });
    this.user$.subscribe((user) => {
      this.savedNews = user.savedNews;
    });
  }

  articleSaved(article) {
    return this.savedNewsService.isArticleSaved(article);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
