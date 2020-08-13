(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-pages-user-pages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user-pages/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-pages/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center auth px-0\">\n  <div class=\"row w-100 mx-0\">\n    <div class=\"col-lg-4 mx-auto\">\n      <div class=\"auth-form-light text-left py-5 px-4 px-sm-5\">\n        <div class=\"brand-logo center\">\n          <img src=\"assets/images/logo.png\" alt=\"logo\">\n        </div>\n        <h4>Hello! let's get started</h4>\n        <h6 class=\"font-weight-light\">Sign in to continue.</h6>\n        <form class=\"pt-3\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"form.valid && onSubmit()\">\n          <div>\n            <select formControlName=\"userType\" class=\"custom-select\">\n              <option [ngValue]=\"null\" disabled>Choose User Type</option>\n              <option *ngFor=\"let ut of alluserTypes\" [ngValue]=\"ut\">\n               {{ ut.utName }}\n              </option>\n            </select> \n          </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':form.get('email').touched && form.get('email').invalid}\"   />\n          <div *ngIf=\"form.get('email').touched && form.get('email').invalid\"  class=\"invalid-feedback\">\n            <div *ngIf=\"form.get('email').errors.required\">Email is required</div>\n            <div *ngIf=\"form.get('email').errors.email\">Email must be a valid email Address</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\"  formControlName=\"password\" [ngClass]=\"{'is-invalid':form.get('password').touched && form.get('password').invalid}\" />\n          <div *ngIf=\"form.get('password').touched && form.get('password').invalid\"  class=\"invalid-feedback\">\n            <div *ngIf=\"form.get('password').errors.required\">Password is required</div>\n          </div>\n         \n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-primary btn-block btn-lg\"  [disabled]=\"!form.valid\">Log In</button>\n        </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-pages/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-pages/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center auth px-0\">\n  <div class=\"row w-100 mx-0\">\n    <div class=\"col-lg-4 mx-auto\">\n      <div class=\"auth-form-light text-left py-5 px-4 px-sm-5\">\n        <div class=\"brand-logo\">\n          <img src=\"assets/images/logo.png\" alt=\"logo\">\n        </div>\n        <h4>New here?</h4>\n        <h6 class=\"font-weight-light\">Signing up is easy. It only takes a few steps</h6>\n        <form class=\"pt-3\" name=\"form\" [formGroup]=\"form\" (ngSubmit)=\"form.valid && onSubmit()\">\n          <div>\n            <select formControlName=\"userType\">\n              <option [ngValue]=\"null\" disabled>Choose User Type</option>\n              <option *ngFor=\"let ut of alluserTypes\" [ngValue]=\"ut\">\n               {{ ut.utName }}\n              </option>\n            </select> \n          </div>\n          <div class=\"form-group\">\n          <label for=\"firstName\">First Name</label>\n          <input type=\"text\"  class=\"form-control\" formControlName=\"firstName\" [ngClass]=\"{'is-invalid':form.get('firstName').touched && form.get('firstName').invalid}\" required />\n          <div class=\"invalid-feedback\">\n            <div>First Name is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" [ngClass]=\"{'is-invalid':form.get('lastName').touched && form.get('lastName').invalid}\" required />\n          <div class=\"invalid-feedback\">\n            <div>Last Name is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"Class\">Class</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"Class\" [ngClass]=\"{'is-invalid':form.get('Class').touched && form.get('Class').invalid}\" required />\n          <div class=\"invalid-feedback\">\n            <div>Last Name is required</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"email\" [ngClass]=\"{'is-invalid':form.get('email').touched && form.get('email').invalid}\"   />\n          <div *ngIf=\"form.get('email').touched && form.get('email').invalid\"  class=\"invalid-feedback\">\n            <div *ngIf=\"form.get('email').errors.required\">Email Name is required</div>\n            <div *ngIf=\"form.get('email').errors.email\">Email must be a valid email Address</div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\"  formControlName=\"password\" [ngClass]=\"{'is-invalid':form.get('password').touched && form.get('password').invalid}\" />\n          <div *ngIf=\"form.get('password').touched && form.get('password').invalid\"  class=\"invalid-feedback\">\n            <div *ngIf=\"form.get('password').errors.required\">Password is required</div>\n            <div *ngIf=\"form.get('password').errors.minlength\">Password  must be a letaset 6 charector</div>\n          </div>\n         \n        </div>\n        <div class=\"form-group\">\n          <button class=\"btn btn-primary\"  [disabled]=\"!form.valid\">Register</button>\n        </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-pages/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user-pages/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-pages/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-pages/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: userType, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userType", function() { return userType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





class userType {
    constructor(utId, utName) {
        this.utId = utId;
        this.utName = utName;
    }
}
userType.ctorParameters = () => [
    { type: String },
    { type: String }
];
let LoginComponent = class LoginComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.isLoading = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)])
        });
        this.alluserTypes = [
            new userType('admin', 'Administrator'),
            new userType('student', 'Student'),
            new userType('faculty', 'Faculty'),
            new userType('parent', 'Parent')
        ];
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
    }
    ngOnInit() {
    }
    onLogin(form) {
    }
    onSubmit() {
        this.isLoading = true;
        this._auth.loginUser(this.form.value);
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/user-pages/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/user-pages/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/user-pages/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-pages/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-pages/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: userType, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userType", function() { return userType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





class userType {
    constructor(utId, utName) {
        this.utId = utId;
        this.utName = utName;
    }
}
userType.ctorParameters = () => [
    { type: String },
    { type: String }
];
let RegisterComponent = class RegisterComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Class: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]),
            userType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.alluserTypes = [
            new userType('admin', 'Administrator'),
            new userType('student', 'Student'),
            new userType('faculty', 'Faculty'),
            new userType('parent', 'Parent')
        ];
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.form.value.userType.utId);
        this._auth.registerUser(this.form.value)
            .subscribe(res => {
            console.log(res);
            //localStorage.setItem('token', res.token)
            this._router.navigate(['/login']);
        }, err => console.log(err));
    }
};
RegisterComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-pages/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/user-pages/register/register.component.scss")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/user-pages/user-pages.module.ts":
/*!*************************************************!*\
  !*** ./src/app/user-pages/user-pages.module.ts ***!
  \*************************************************/
/*! exports provided: UserPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPagesModule", function() { return UserPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user-pages/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user-pages/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
];
let UserPagesModule = class UserPagesModule {
};
UserPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ]
    })
], UserPagesModule);



/***/ })

}]);
//# sourceMappingURL=user-pages-user-pages-module-es2015.js.map