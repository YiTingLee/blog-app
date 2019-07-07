import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponentService } from './login.component.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginComponentService]
})
export class LoginComponent implements OnInit {
  account = '';
  password = '';
  errorMessage = '';
  constructor(
    private router: Router,
    private loginService: LoginComponentService
  ) {}

  ngOnInit() {}

  onLoginClick() {
    this.loginService
      .login({ account: this.account, password: this.password })
      .then(() => {
        this.router.navigate([`/main`]);
      })
      .catch(() => {
        this.errorMessage = 'Login error';
      });
  }

  onCancelClick() {
    this.router.navigate([`/main`]);
  }
}
