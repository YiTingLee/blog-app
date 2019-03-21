import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.sass']
})
export class BodyComponent implements OnInit {
  mockData = [{
    id: 1,
    title: 'title1....',
    body: 'some content....'
  }, {
    id: 2,
    title: 'title1....',
    body: 'some content....'
  }];

  constructor() { }

  ngOnInit() {
  }

}
