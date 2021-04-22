import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User

  constructor() { }

  login(displayName, email, photoURL, uid) {
    this.user = {
      displayName: displayName,
      email: email,
      photoURL: photoURL,
      uid: uid
    }
    console.log(this.user);
  }
}
