import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

enum Mode {
  CREATE,
  EDIT,
  VIEW
}
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() content = `# Loading...`;

  mode: Mode;

  constructor(private router: Router) {}

  ngOnInit() {
    this.initMode();
  }

  initMode() {
    const url = this.router.url;
    if (url.includes('create')) {
      this.mode = Mode.CREATE;
    } else if (url.includes('detail')) {
      this.mode = Mode.VIEW;
    } else if (url.includes('edit')) {
      this.mode = Mode.EDIT;
    }
  }
}
