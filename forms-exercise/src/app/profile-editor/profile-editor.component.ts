import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  profileForm1 = this.fb.group({
    username: ['', Validators.required ],
    contact: this.fb.group({
      phone: [''],
      email: [''],
    }),
  });

  constructor(private fb: FormBuilder) { }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Jenna',
      lastName: 'James',
      address: {
        street: '123 Sesame Street',
        city: 'Denver',
        state: 'Colorado',
        zip: 80220
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
