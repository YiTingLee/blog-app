import { Injectable } from '@angular/core';

interface UserInfo {
  id: string;
  name: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class UserInfoService {
  private userInfo: UserInfo;
  constructor() {}

  public setUserInfo(reqeust: UserInfo): void {
    this.userInfo = { ...reqeust };
  }

  public getUserInfo(): UserInfo {
    return this.userInfo;
  }
}
