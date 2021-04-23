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

  
}
