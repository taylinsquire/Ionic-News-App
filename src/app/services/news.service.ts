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
    if (!category) {
      return this.http.get(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&page=${page}&apiKey=${apiKey}`
      ).pipe(shareReplay());
    }
    return this.http.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=${category}&page=${page}&apiKey=${apiKey}`
    ).pipe(shareReplay());
  }

  getStoriesBySearchObservable(search: string = 'news'): Observable<any> {
    if (search === '') {
    return this.http.get(`https://newsapi.org/v2/everything?q=news&apiKey=${apiKey}`).pipe(shareReplay());
    }
    return this.http.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`).pipe(shareReplay());
  }
}
