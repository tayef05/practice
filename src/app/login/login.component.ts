import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  user: { [name: string]: Object } = {
    name: '',
  };
  // name: string = '';
  ngOnInit(): void {}
  userSubmit(item: any) {
    // if (item.name.length > 0 && item.password.length > 0) {
    console.warn(item);
    // }
  }
}
