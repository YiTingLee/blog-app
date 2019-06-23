import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  mockData = [{
    id: 1,
    title: 'title1....',
    body: 'some content....'
  }, {
    id: 2,
    title: 'title2....',
    body: 'some content....'
  }];

  constructor() { }

  ngOnInit() {
  }

}
