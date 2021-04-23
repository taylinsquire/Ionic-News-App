import { Injectable } from '@angular/core';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentChangeAction,
  CollectionReference,
} from '@angular/fire/firestore';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SavedNewsService {
  usersRef;
  user$;
  savedNews;
  userId;

  constructor(private db: AngularFirestore, private authService: AuthService) {
    this.usersRef = this.db.collection('users');
    this.user$ = this.authService.getUserObservable();
    this.user$.subscribe((user$) => {
      user$.subscribe((user) => {
        this.userId = user.uid;
      });
    });
  }

  addSavedNews(save) {
    var match = false;
    if (!this.savedNews) {
      this.savedNews = [];
    }
    for (let i = 0; i < this.savedNews.length; i++) {
      if (save.url == this.savedNews[i].url) {
        match = true;
        this.savedNews.splice(i, 1);
        console.log('match');
      }
    }
    if (!match) {
      this.savedNews.push(save);
    }
    this.usersRef
      .doc(this.userId)
      .update({
        savedNews: this.savedNews,
      })
      .then(() => {
        console.log('Success on save');
      })
      .catch(this.errorHandler);
  }

  removeSave(url) {
    if (!this.savedNews) {
      this.savedNews = [];
    }
    for (let i = 0; i < this.savedNews.length; i++) {
      if (url == this.savedNews[i].url) {
        this.savedNews.splice(i, 1);
        this.usersRef
        .doc(this.userId)
        .update({
          savedNews: this.savedNews,
        })
        .then(() => {
          console.log('Success on save');
        })
        .catch(this.errorHandler);
      }
    }
  }

  getSavedNews() {
    return this.user$;
  }

  private errorHandler(error) {
    console.log(error);
    return throwError(error);
  }
}
