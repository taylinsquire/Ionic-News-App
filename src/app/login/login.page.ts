import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from 'ngx-auth-firebaseui';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  themes = Theme;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  // login(event) {
  //   var displayName = event.user.displayName;
  //   var email = event.user.email;
  //   var photoURL = event.user.photoURL;
  //   var uid = event.user.uid;
  //   this.authService.login(displayName, email, photoURL, uid);
  //   this.router.navigate(['tabs/tab1']);
  // }
}
