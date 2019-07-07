import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { UserInfoService } from 'src/services/user/userInfo.service';

@Injectable()
export class LoginComponentService {
  constructor(
    private apollo: Apollo,
    private userInfoService: UserInfoService
  ) {}

  public login(request): Promise<any> {
    return this.apollo
      .query({
        query: gql`
          query($request: LoginReq!) {
            login(request: $request) {
              id
              name
              token
            }
          }
        `,
        variables: {
          request: request
        }
      })
      .toPromise()
      .then(({ data }: any) => {
        this.userInfoService.setUserInfo(data.login);
        return data;
      });
  }
}
