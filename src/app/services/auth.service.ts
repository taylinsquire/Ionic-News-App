import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Observable, concat } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFirestore
  ) {
    this.user$ = this.firebaseAuth.authState.pipe(
      map((authState) => {
        return this.db
          .doc(`users/${authState.uid}`)
          .valueChanges()
          .pipe(catchError(this.errorHandler));
      })
    );
  }

  getUserObservable(): Observable<any> {
    return this.user$;
  }

  private errorHandler(error) {
    console.log(error);
    return throwError(error);
  }
}
