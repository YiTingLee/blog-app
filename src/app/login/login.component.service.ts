import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class LoginComponentService {
  constructor(private apollo: Apollo) {}

  public login(request): Promise<any> {
    return this.apollo
      .watchQuery({
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
      .valueChanges.toPromise();
  }
}
