import { Component, OnInit } from '@angular/core';
import { MainComponentService } from './main.component.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MainComponentService]
})
export class MainComponent implements OnInit {
  data = [];

  constructor(private mainService: MainComponentService) {}

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.mainService.getAllPosts().then(({ data }: any) => {
      this.data = data.getAllPosts;
    });
  }
}
