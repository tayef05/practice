import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css'],
})
export class FormationComponent implements OnInit {
  constructor() {}
  myForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
    });
  }
  // name = new FormControl('');
  // email = new FormControl('');
  // submit() {
  //   console.log(this.name.value);
  //   console.log(this.email.value);
  // }
  submit() {
    console.log(this.myForm.value);
  }
}
