import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, ValidatorFn, FormArray } from '@angular/forms';

// function passwordCompare():ValidatorFn {
//   return (c: AbstractControl): { [key: string]: boolean } | null => c.get('password').value === c.get('cPassWord').value ? null : { match: true }
// }
function passwordCompare(c: AbstractControl): { [key: string]: boolean } | null {
  return c.get('password').value === c.get('cPassWord').value ? null : { match: true }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: null,
      lastName: null,
      gender: ['Female'],
      passwordGroup: this.fb.group({
        password: [null, Validators.required],
        cPassWord: [null, Validators.required],
      }, { validator: passwordCompare }),
      email: [null, [Validators.email, Validators.required]],
      phoneNumbers: this.fb.array([this.buildPhoneNumbers()])
    })
  }

  onSubmit(): void {
    console.log(this.signupForm.get('passwordGroup').errors)
  }

  buildPhoneNumbers(): FormGroup {
    return this.fb.group({
      phone: ''
    })
  }

  get phoneNumbers(): FormArray {
    return <FormArray>this.signupForm.get('phoneNumbers');
  }

  addPhoneNumbers(): void {
    (<FormArray>this.signupForm.get('phoneNumbers')).push(this.buildPhoneNumbers());
  }
}