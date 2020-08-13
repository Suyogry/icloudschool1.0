import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
export class userType { 
  constructor(public utId:string, public utName:string) { }	
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading=false;
  form = new FormGroup({
    userType:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)])
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

  onLogin(form: NgForm){

  }

  email = new FormControl('', [Validators.required, Validators.email]);
  onSubmit(){
    this.isLoading=true;
    this._auth.loginUser(this.form.value)
  }

}
