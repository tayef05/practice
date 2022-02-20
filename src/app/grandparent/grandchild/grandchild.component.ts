import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css'],
})
export class GrandchildComponent implements OnInit {
  @Input() message: string = '';

  constructor() {}

  ngOnInit(): void {}
}
