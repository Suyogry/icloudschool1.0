import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { AuthData} from '../models/auth-data.model';
import { LoginData} from '../models//login-data.model';
import { EmailValidator } from '@angular/forms';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated=false;
  private authStatusListener=new Subject<boolean>();
  private token:string;
  private _registerUrl = "/api/register";
  private _loginUrl = "/api/login";
  private tokenTimer: any;
  constructor(private http: HttpClient,
    private _router: Router) { }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable()
  }
  getIsAuth(){
    return this.isAuthenticated;
  }
  registerUser(user) {
    const authData: AuthData={userType:user.userType.utId, firstName:user.firstName, lastName:user.lastName,Class:user.Class,email: user.email,password: user.password };
    return this.http.post<any>(this._registerUrl, authData)
  }
  
  loginUser(user) {
    const val:String=user.selectedValue;
    const loginData: LoginData={userType:user.userType.utId, email: user.email, password: user.password };
    return this.http.post<{token: string,expiresIn: number}>(this._loginUrl, loginData).subscribe(response=>{

      const token= response.token;
      this.token=token;
      if(token){
        const expiresInDuration=response.expiresIn;
        console.log(expiresInDuration);
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated=true;
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        console.log(expirationDate);
        this.saveAuthData(token, expirationDate);
        this.authStatusListener.next(true);
      
      }
     // console.log(val);
      //console.log(user.selectedValue);
      if(user.userType.utId =="student"){
        this._router.navigate(['/user/student'])
      }
      if(user.userType.utId =="parent"){
        this._router.navigate(['/buploader'])
      }
      if(user.userType.utId =="faculty"){
        this._router.navigate(['/staffProfile'])
      }
      if(user.userType.utId =="admin"){
        this._router.navigate(['/user/student'])
      }

    })
  }
  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  logoutUser(){
    //localStorage.removeItem('token')
    //this._router.navigate(['/aboutSchool'])
    this.token=null;
    this.isAuthenticated= false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this._router.navigate(['/homepage']);
  }
  getToken(){
    //return localStorage.getItem('token')
    return this.token;
  }
  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }
  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logoutUser();
    }, duration * 1000);
  }
  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }
}
