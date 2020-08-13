(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/charts/chartjs/chartjs.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/charts/chartjs/chartjs.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\">\n  <h3 class=\"page-title\">\n    ChartJs\n  </h3>\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a href=\"javascript:;\">Charts</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">ChartJs</li>\n    </ol>\n  </nav>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Line chart</h4>\n        <canvas baseChart [chartType]=\"'line'\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\"></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Bar chart</h4>\n        <canvas baseChart [chartType]=\"'bar'\" [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [colors]=\"barChartColors\"></canvas>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Area chart</h4>\n        <canvas baseChart [chartType]=\"'line'\" [datasets]=\"areaChartData\" [labels]=\"areaChartLabels\" [options]=\"areaChartOptions\" [colors]=\"areaChartColors\"></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 grid-margin stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Doughnut chart</h4>\n        <canvas baseChart [chartType]=\"'doughnut'\" [datasets]=\"doughnutPieChartData\" [labels]=\"doughnutPieChartLabels\" [options]=\"doughnutPieChartOptions\" [colors]=\"doughnutPieChartColors\"></canvas>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6 grid-margin grid-margin-lg-0 stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Pie chart</h4>\n        <canvas baseChart [chartType]=\"'pie'\" [datasets]=\"doughnutPieChartData\" [labels]=\"doughnutPieChartLabels\" [options]=\"doughnutPieChartOptions\" [colors]=\"doughnutPieChartColors\"></canvas>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6 grid-margin grid-margin-lg-0 stretch-card\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Scatter chart</h4>\n        <canvas baseChart [chartType]=\"'scatter'\" [datasets]=\"scatterChartData\" [options]=\"scatterChartOptions\" [colors]=\"scatterChartColors\"></canvas>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/charts/chartjs/chartjs.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/charts/chartjs/chartjs.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jaGFydGpzL2NoYXJ0anMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/charts/chartjs/chartjs.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/charts/chartjs/chartjs.component.ts ***!
  \*****************************************************/
/*! exports provided: ChartjsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartjsComponent", function() { return ChartjsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChartjsComponent = class ChartjsComponent {
    constructor() {
        this.lineChartData = [{
                label: '# of Votes',
                data: [10, 19, 3, 5, 2, 3],
                borderWidth: 1,
                fill: false
            }];
        this.lineChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];
        this.lineChartOptions = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        };
        this.lineChartColors = [
            {
                borderColor: 'rgba(255,99,132,1)'
            }
        ];
        this.barChartData = [{
                label: '# of Votes',
                data: [10, 19, 3, 5, 2, 3],
                borderWidth: 1,
                fill: false
            }];
        this.barChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];
        this.barChartOptions = {
            scales: {
                yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
            },
            legend: {
                display: false
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        };
        this.barChartColors = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ]
            }
        ];
        this.areaChartData = [{
                label: '# of Votes',
                data: [10, 19, 3, 5, 2, 3],
                borderWidth: 1,
                fill: true
            }];
        this.areaChartLabels = ["2013", "2014", "2014", "2015", "2016", "2017"];
        this.areaChartOptions = {};
        this.areaChartColors = [
            {
                borderColor: 'rgba(255,99,132,1)',
                backgroundColor: 'rgba(255,99,132,.2)'
            }
        ];
        this.doughnutPieChartData = [
            {
                data: [30, 40, 30],
            }
        ];
        this.doughnutPieChartLabels = ["Pink", "Blue", "Yellow"];
        this.doughnutPieChartOptions = {
            responsive: true,
            animation: {
                animateScale: true,
                animateRotate: true
            }
        };
        this.doughnutPieChartColors = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ]
            }
        ];
        this.scatterChartData = [
            {
                label: 'First Dataset',
                data: [{
                        x: -10,
                        y: 0
                    },
                    {
                        x: 0,
                        y: 3
                    },
                    {
                        x: -25,
                        y: 5
                    },
                    {
                        x: 40,
                        y: 5
                    }
                ],
                borderWidth: 1
            },
            {
                label: 'Second Dataset',
                data: [{
                        x: 10,
                        y: 5
                    },
                    {
                        x: 20,
                        y: -30
                    },
                    {
                        x: -25,
                        y: 15
                    },
                    {
                        x: -10,
                        y: 5
                    }
                ],
                borderWidth: 1
            }
        ];
        this.scatterChartOptions = {
            scales: {
                xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
            }
        };
        this.scatterChartColors = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)'
                ]
            },
            {
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ]
            }
        ];
    }
    ngOnInit() {
    }
};
ChartjsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chartjs',
        template: __webpack_require__(/*! raw-loader!./chartjs.component.html */ "./node_modules/raw-loader/index.js!./src/app/charts/chartjs/chartjs.component.html"),
        styles: [__webpack_require__(/*! ./chartjs.component.scss */ "./src/app/charts/chartjs/chartjs.component.scss")]
    })
], ChartjsComponent);



/***/ }),

/***/ "./src/app/charts/charts.module.ts":
/*!*****************************************!*\
  !*** ./src/app/charts/charts.module.ts ***!
  \*****************************************/
/*! exports provided: ChartsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsDemoModule", function() { return ChartsDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartjs/chartjs.component */ "./src/app/charts/chartjs/chartjs.component.ts");






const routes = [
    { path: 'chartjs', component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__["ChartjsComponent"] },
];
let ChartsDemoModule = class ChartsDemoModule {
};
ChartsDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_5__["ChartjsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"]
        ]
    })
], ChartsDemoModule);



/***/ })

}]);
//# sourceMappingURL=charts-charts-module-es2015.js.map