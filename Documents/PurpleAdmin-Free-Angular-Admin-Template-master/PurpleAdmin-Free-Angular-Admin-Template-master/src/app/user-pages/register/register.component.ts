import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
export class userType { 
  constructor(public utId:string, public utName:string) {
  }	
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    Class: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)]),
    userType:new FormControl('',[Validators.required])
  });
  alluserTypes=[
    new userType('admin','Administrator'),
    new userType('student','Student'),
    new userType('faculty','Faculty'),
    new userType('parent','Parent')
];

  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.form.value.userType.utId);
    this._auth.registerUser(this.form.value)
      .subscribe(
        res => {
          console.log(res);
          //localStorage.setItem('token', res.token)
          this._router.navigate(['/login']);
        },
        err =>console.log(err)
      )
  }

}
