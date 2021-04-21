import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

const apiKey = '563a5794042c457580326ddc1d8d139b';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getTopStoriesObservable(
    page: number = 1,
    category: string = ''
  ): Observable<any> {
    console.log(category);
    if (!category) {
      console.log('non-category search');
      return this.http.get(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&page=${page}&apiKey=${apiKey}`
      );
    }
    console.log('category search');
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=${category}&page=${page}&apiKey=${apiKey}`
    );
  }

  getStoriesBySearchObservable(search): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`);
  }
}
