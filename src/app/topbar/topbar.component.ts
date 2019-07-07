import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfoService } from 'src/services/user/userInfo.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  constructor(
    private router: Router,
    private userInfoService: UserInfoService
  ) {}

  ngOnInit() {}

  onSignInClick() {
    this.router.navigate([`login`]);
  }

  onSignOutClick() {
    this.router.navigate([`main`]);
    this.userInfoService.clearUserInfo();
  }

  isLogin() {
    return !!this.userInfoService.isLogin();
  }

  getUserInfo() {
    return this.userInfoService.getUserInfo();
  }

  createPost() {
    this.router.navigate([`create`]);
  }
}
