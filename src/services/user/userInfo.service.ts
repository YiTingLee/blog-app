import { Injectable } from '@angular/core';
import * as store from 'store';

interface UserInfo {
  id: string;
  name: string;
  token: string;
}

@Injectable({ providedIn: 'root' })
export class UserInfoService {
  private userInfo: UserInfo;
  constructor() {
    this.getInfoFromLocalStorage();
  }

  public setUserInfo(reqeust: UserInfo): void {
    this.userInfo = { ...reqeust };
    this.setInfoToLocalStorage(reqeust);
  }

  public getUserInfo(): UserInfo {
    return this.userInfo;
  }

  public isLogin(): boolean {
    return !!this.userInfo;
  }

  public clearUserInfo() {
    this.userInfo = undefined;
    store.remove('user');
  }

  private setInfoToLocalStorage(request: UserInfo) {
    store.set('user', {
      id: request.id,
      name: request.name,
      token: request.token
    });
  }

  private getInfoFromLocalStorage() {
    const info = store.get('user');
    if (info) {
      this.userInfo = { ...info };
    }
  }
}
