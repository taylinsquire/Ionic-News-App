import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavedNewsService {

  constructor() { }

  savedNews = [];

  addSavedNews(save) {
    var match = false;
    for (let i = 0; i < this.savedNews.length; i++) {
      if (save.url == this.savedNews[i].url) {
        match = true;
      }
    }
    if (!match) {
      this.savedNews.push(save);
    }
  }

  getSavedNews() {
    return this.savedNews;
  }
}
