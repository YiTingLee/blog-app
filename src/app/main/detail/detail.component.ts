import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MainComponentService } from '../main.component.service';
import { UserInfoService } from 'src/services/user/userInfo.service';

enum Mode {
  CREATE = 'create',
  EDIT = 'edit',
  VIEW = 'view'
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [MainComponentService]
})
export class DetailComponent implements OnInit {
  @Input() content = ``;
  @Input() title = ``;

  mode: Mode;

  constructor(
    private router: Router,
    private mainService: MainComponentService,
    private userInfoService: UserInfoService
  ) {}

  ngOnInit() {
    this.initMode();
  }

  initMode() {
    const url = this.router.url;
    if (url.includes('create')) {
      this.mode = Mode.CREATE;
    } else if (url.includes('detail')) {
      this.mode = Mode.VIEW;
      this.getPost();
    } else if (url.includes('edit')) {
      this.mode = Mode.EDIT;
    }
  }

  onSaveClick() {
    switch (this.mode) {
      case Mode.CREATE:
        this.mainService
          .createPost({
            userId: this.userInfoService.getUserInfo().id,
            title: this.title,
            body: this.content
          })
          .then(({ data }: any) => {
            this.router.navigate([`detail/${data.createPost}`]);
          });
        break;
    }
  }

  onCancelClick() {
    this.router.navigate(['main']);
  }

  private getPost() {
    const postId = this.router.url.split('detail/')[1];
    this.mainService
      .getPost({
        id: postId
      })
      .then(({ data }: any) => {
        this.title = data.getPost.title;
        this.content = data.getPost.body;
      });
  }
}
