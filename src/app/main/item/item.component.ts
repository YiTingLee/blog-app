import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() body: string;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetailPage() {
    this.router.navigate([`detail/${this.id}`]);
  }

}
