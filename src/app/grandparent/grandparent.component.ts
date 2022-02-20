import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css'],
})
export class GrandparentComponent implements OnInit {
  message: string = 'Message from GrandParent Component';
  constructor() {}

  ngOnInit(): void {}
}
