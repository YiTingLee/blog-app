import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class MainComponentService {
  constructor(private apollo: Apollo) {}

  public getAllPosts(): Promise<any> {
    return this.apollo
      .query({
        query: gql`
          query {
            getAllPosts {
              id
              userId
              body
              title
            }
          }
        `
      })
      .toPromise();
  }
}
