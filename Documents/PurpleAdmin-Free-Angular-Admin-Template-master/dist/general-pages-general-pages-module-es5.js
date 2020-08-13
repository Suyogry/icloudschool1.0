(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-pages-general-pages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/general-pages/blank-page/blank-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/general-pages/blank-page/blank-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/general-pages/blank-page/blank-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/general-pages/blank-page/blank-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwtcGFnZXMvYmxhbmstcGFnZS9ibGFuay1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/general-pages/blank-page/blank-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/general-pages/blank-page/blank-page.component.ts ***!
  \******************************************************************/
/*! exports provided: BlankPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageComponent", function() { return BlankPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlankPageComponent = /** @class */ (function () {
    function BlankPageComponent() {
    }
    BlankPageComponent.prototype.ngOnInit = function () {
    };
    BlankPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blank-page',
            template: __webpack_require__(/*! raw-loader!./blank-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/general-pages/blank-page/blank-page.component.html"),
            styles: [__webpack_require__(/*! ./blank-page.component.scss */ "./src/app/general-pages/blank-page/blank-page.component.scss")]
        })
    ], BlankPageComponent);
    return BlankPageComponent;
}());



/***/ }),

/***/ "./src/app/general-pages/general-pages.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/general-pages/general-pages.module.ts ***!
  \*******************************************************/
/*! exports provided: GeneralPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralPagesModule", function() { return GeneralPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blank-page/blank-page.component */ "./src/app/general-pages/blank-page/blank-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");






var routes = [
    { path: 'blank-page', component: _blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_3__["BlankPageComponent"] }
];
var GeneralPagesModule = /** @class */ (function () {
    function GeneralPagesModule() {
    }
    GeneralPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_blank_page_blank_page_component__WEBPACK_IMPORTED_MODULE_3__["BlankPageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ]
        })
    ], GeneralPagesModule);
    return GeneralPagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=general-pages-general-pages-module-es5.js.map