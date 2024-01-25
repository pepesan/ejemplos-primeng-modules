import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({ // <- another group of element
      street: [''],
      postCode: ['', Validators.required]
    })
  });

  constructor(private fb: FormBuilder) { };

  addUser() {
    console.log(this.userForm.value);
  }

}
