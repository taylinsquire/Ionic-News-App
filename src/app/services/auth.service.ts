import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
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

  signOut(): void {
    this.firebaseAuth.signOut().then(() => {
      this.router.navigate(['']);
    })
  }

  private errorHandler(error) {
    console.log(error);
    return throwError(error);
  }
}
