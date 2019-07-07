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

  public createPost(request: {
    userId: string;
    title: string;
    body: string;
  }): Promise<any> {
    return this.apollo
      .mutate({
        mutation: gql`
          mutation($request: PostInfoReq!) {
            createPost(request: $request)
          }
        `,
        variables: {
          request: request
        }
      })
      .toPromise();
  }

  public getPost(request: { id: string }): Promise<any> {
    return this.apollo
      .query({
        query: gql`
          query($request: IdReq!) {
            getPost(request: $request) {
              id
              userId
              body
              title
            }
          }
        `,
        variables: { request: request },
        fetchPolicy: 'network-only'
      })
      .toPromise();
  }
}
