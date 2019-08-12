(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <h1>proba</h1>\r\n  <app-table></app-table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sudoku';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/table.component */ "./src/app/table/table.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_and_div_input_and_div_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-and-div/input-and-div.component */ "./src/app/input-and-div/input-and-div.component.ts");
/* harmony import */ var _utilities_autofocusDirective__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utilities/autofocusDirective */ "./src/app/utilities/autofocusDirective.ts");
/* harmony import */ var _utilities_onlyNumbers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utilities/onlyNumbers */ "./src/app/utilities/onlyNumbers.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"],
                _input_and_div_input_and_div_component__WEBPACK_IMPORTED_MODULE_5__["InputAndDivComponent"],
                _utilities_autofocusDirective__WEBPACK_IMPORTED_MODULE_6__["AutofocusDirective"],
                _utilities_onlyNumbers__WEBPACK_IMPORTED_MODULE_7__["NumberOnlyDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/input-and-div/input-and-div.component.css":
/*!***********************************************************!*\
  !*** ./src/app/input-and-div/input-and-div.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  input {\r\n    line-height: 2.3em; \r\n    width: 2.5em;\r\n\r\n    color: transparent;\r\n    text-shadow: 0 0 0 #2196f3;\r\n    text-align: center; \r\n  \r\n    /* &:focus {\r\n        outline: none;\r\n    } */\r\n}"

/***/ }),

/***/ "./src/app/input-and-div/input-and-div.component.html":
/*!************************************************************!*\
  !*** ./src/app/input-and-div/input-and-div.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input *ngIf=\"openedId == elemId\"   type=\"text\"\r\n(keyup.enter)=\"openedId = null\"  [autofocus]=\"true\" size=\"2\"\r\n[ngModel]=\"tableArr[rowIndex][col]\"  (keydown)=\"onPressedKey($event)\" >\r\n<div *ngIf=\"openedId != elemId\"> {{tableArr[rowIndex][col]}}</div> "

/***/ }),

/***/ "./src/app/input-and-div/input-and-div.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/input-and-div/input-and-div.component.ts ***!
  \**********************************************************/
/*! exports provided: InputAndDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputAndDivComponent", function() { return InputAndDivComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputAndDivComponent = /** @class */ (function () {
    function InputAndDivComponent() {
        this.openedId = null;
        this.elemId = null;
        this.rowIndex = null;
        this.col = null;
        this.updateOpenedId = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    InputAndDivComponent.prototype.onPressedKey = function (e) {
        if (!Number(e.key)) {
            e.preventDefault();
        }
        var newValue = Number(e.key);
        if (newValue === 0) {
            this.tableArr[this.rowIndex][this.col] = "";
        }
        if (newValue) {
            this.tableArr[this.rowIndex][this.col] = Number(newValue);
            e.preventDefault();
        }
        var newOpenedId;
        if (e.shiftKey && (e.key === "Tab")) {
            newOpenedId = this.rowIndex + '_' + (this.col - 1);
            if (this.col == 0) {
                if (this.rowIndex == 0) {
                    newOpenedId = this.rowIndex + '_' + 0;
                }
                else {
                    newOpenedId = (this.rowIndex - 1) + '_' + 8;
                }
            }
            this.updateOpenedId.emit(newOpenedId);
        }
        else if (e.key === "Tab") {
            newOpenedId = this.rowIndex + '_' + (this.col + 1);
            if (this.col == 8) {
                if (this.rowIndex == 8) {
                    newOpenedId = this.rowIndex + '_' + 8;
                }
                else {
                    newOpenedId = (this.rowIndex + 1) + '_' + 0;
                }
            }
            this.updateOpenedId.emit(newOpenedId);
        }
        switch (e.key) {
            case "ArrowUp":
                this.rowIndex == 0 ? null : this.updateOpenedId.emit((this.rowIndex - 1) + '_' + this.col);
                break;
            case "ArrowDown":
                this.rowIndex == 8 ? null : this.updateOpenedId.emit((this.rowIndex + 1) + '_' + this.col);
                break;
            case "ArrowLeft":
                this.col == 0 ? null : this.updateOpenedId.emit(this.rowIndex + '_' + (this.col - 1));
                break;
            case "ArrowRight":
                this.col == 8 ? null : this.updateOpenedId.emit(this.rowIndex + '_' + (this.col + 1));
                break;
            default:
                null;
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputAndDivComponent.prototype, "openedId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], InputAndDivComponent.prototype, "elemId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InputAndDivComponent.prototype, "rowIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], InputAndDivComponent.prototype, "col", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], InputAndDivComponent.prototype, "tableArr", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], InputAndDivComponent.prototype, "updateOpenedId", void 0);
    InputAndDivComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'inputAndDiv',
            template: __webpack_require__(/*! ./input-and-div.component.html */ "./src/app/input-and-div/input-and-div.component.html"),
            styles: [__webpack_require__(/*! ./input-and-div.component.css */ "./src/app/input-and-div/input-and-div.component.css")]
        })
    ], InputAndDivComponent);
    return InputAndDivComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiService = /** @class */ (function () {
    function ApiService(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'https://cors-anywhere.herokuapp.com/http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=9';
    }
    ApiService.prototype.getSudoku = function (level) {
        if (!level) {
            level = 1;
        }
        return this.httpClient.get(this.apiURL + "/?level=" + level);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/table/table.component.html":
/*!********************************************!*\
  !*** ./src/app/table/table.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Hello from Baar</h2>\r\n\r\n<h1>TABLE</h1>\r\n<!-- tableArr: {{tableArr | json}}\r\n  <br>  ------------ <br> -->\r\n  <!-- solvedArr: {{solvedArr | json}} -->\r\n\r\n<table id=\"customers\" [ngClass]=\"{'normalState': !hasError && !showSuccess, 'alert alert-danger': hasError, 'alert alert-success': showSuccess}\">\r\n  <tbody>\r\n    <tr *ngFor=\"let row of emptyNineCellsArr, let rowIndex = index\">\r\n      <ng-container *ngFor=\"let el of emptyNineCellsArr , let col =  index\">\r\n        <td id=\"{{rowIndex + '_' + col}}\" attr.data-el=\"{{el}}\" (click)=\"showInput(rowIndex + '_' + col)\" >\r\n          <inputAndDiv elemId=\"{{rowIndex + '_' + col}}\" [tableArr]=\"tableArr\" [rowIndex]=\"rowIndex\" [col]=\"col\"\r\n            [(openedId)]=\"openedId\" (updateOpenedId)=\"showInput($event)\"></inputAndDiv>\r\n        </td>\r\n      </ng-container>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n<button type=\"button\" class=\"btn btn-secondary\" (click)=\"checkUserSolution()\">check my solution</button>\r\n<button type=\"button\" class=\"btn btn-success\" (click)=\"showSolvedSudoku()\">solve it for me please</button>\r\n<button type=\"button\" class=\"btn btn-warning\" (click)=\"fillUpInitialTable()\">clear table</button>\r\n<br>\r\n<button type=\"button\" class=\"btn btn-light\" (click)=\"loadPreparedData(1)\">load level 1</button>\r\n<button type=\"button\" class=\"btn btn-info\" (click)=\"loadPreparedData(2)\">load level 2\r\n</button>\r\n<button type=\"button\" class=\"btn btn-danger\" (click)=\"loadPreparedData(3)\">load level 3</button>\r\n<br>\r\n<ng-container *ngIf=\"isLoading\">\r\n  <div class=\"spinner-grow text-success\" role=\"status\"></div>\r\n  <div class=\"spinner-grow text-danger\" role=\"status\"></div>\r\n  <div class=\"spinner-grow text-warning\" role=\"status\"></div>\r\n</ng-container>"

/***/ }),

/***/ "./src/app/table/table.component.scss":
/*!********************************************!*\
  !*** ./src/app/table/table.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#customers {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  margin: auto;\n  border-bottom: 3px solid #080808;\n  border-right: 3px solid #080808;\n  border-top: 3px solid #080808;\n  border-left: 3px solid #080808; }\n\ntd, th {\n  border: 1px solid #ddd;\n  padding: 8px;\n  width: 60px;\n  height: 60px; }\n\ntr td:nth-child(3n) {\n  border-right: 3px solid #080808; }\n\ntr:nth-child(3n) td {\n  border-bottom: 3px solid #080808; }\n\n.normalState tr:nth-child(n+4):nth-child(-n+6) {\n  background-color: #ebebeb; }\n\n.normalState td:nth-child(n+4):nth-child(-n+6) {\n  background-color: #ebebeb; }\n\n.normalState tr:nth-child(n+4):nth-child(-n+6) td:nth-child(n+4):nth-child(-n+6) {\n  background-color: white; }\n\ntd:hover {\n  background-color: #8ac1db !important; }\n"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/*!******************************************!*\
  !*** ./src/app/table/table.component.ts ***!
  \******************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _utilities_valueLimits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/valueLimits */ "./src/app/utilities/valueLimits.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableComponent = /** @class */ (function () {
    function TableComponent(toastr, apiService) {
        this.toastr = toastr;
        this.apiService = apiService;
        this.isLoading = false;
        this.tableArr = [];
        this.solvedArr = [];
        this.emptyNineCellsArr = new Array(9);
        this.emptyElement = '';
        this.calledTimes = 0;
        this.hasError = false;
        this.showSuccess = false;
        this.hasGotPreparedGame = false;
        this.isSolved = false;
        this.openedId = null;
        this.isUserCheck = false;
    }
    TableComponent.prototype.ngOnInit = function () {
        this.fillUpInitialTable();
        // this.loadPreparedData(1);
        // this.check()
    };
    TableComponent.prototype.fillUpInitialTable = function () {
        this.calledTimes = 0;
        this.hasError = false;
        this.showSuccess = false;
        this.isSolved = false;
        this.tableArr = [];
        for (var i = 0; i < 9; i++) {
            var currentarrArr = [];
            for (var y = 0; y < 9; y++) {
                currentarrArr.push('');
            }
            this.tableArr.push(currentarrArr);
        }
        this.solvedArr = this.tableArr.map(function (currentArr) {
            return currentArr.slice(0);
        });
    };
    TableComponent.prototype.checkUserSolution = function () {
        var _this = this;
        if (!this.hasGotPreparedGame && !this.isSolved) {
            this.solvedArr = this.tableArr.map(function (currentArr) {
                return currentArr.slice(0);
            });
            this.isUserCheck = true;
            this.solveSudoku(this.solvedArr);
        }
        for (var row = 0; row < this.tableArr.length; row++) {
            for (var col = 0; col < this.tableArr.length; col++) {
                if (this.tableArr[row][col]) {
                    if (Number(this.tableArr[row][col]) !== Number(this.solvedArr[row][col])) {
                        this.hasError = true;
                        this.toastr.error("We are sorry to say... your solution has errors !");
                        setTimeout(function () {
                            _this.hasError = false;
                        }, 5000);
                        return;
                    }
                }
            }
        }
        this.showSuccess = true;
        this.toastr.success("your solution has no errors");
        setTimeout(function () {
            _this.showSuccess = false;
        }, 2000);
        return;
    };
    TableComponent.prototype.loadPreparedData = function (level) {
        var _this = this;
        this.hasGotPreparedGame = true;
        this.isLoading = true;
        this.fillUpInitialTable();
        this.apiService.getSudoku(level).subscribe(function (res) {
            var currentX = 0;
            res["squares"].map(function (data) {
                var x = data.x, y = data.y, value = data.value;
                if (currentX == x) {
                    _this.tableArr[x][y] = value;
                }
                else {
                    currentX = x;
                    _this.tableArr[x][y] = value;
                }
            });
            _this.solvedArr = _this.tableArr.map(function (currentArr) {
                return currentArr.slice(0);
            });
            _this.isLoading = false;
            _this.solveSudoku(_this.solvedArr);
        });
    };
    TableComponent.prototype.showSolvedSudoku = function () {
        var _this = this;
        if (this.hasGotPreparedGame && this.isSolved) {
            this.tableArr = this.solvedArr.map(function (currentArr) {
                return currentArr.slice(0);
            });
            this.toastr.success("We solved your Sudoku successfully !", "Success");
        }
        else {
            this.solveSudoku(this.tableArr);
            if (this.isSolved) {
                this.showSuccess = true;
                this.toastr.success("We successfully solved your Sudoku !", "Success");
            }
            setTimeout(function () {
                _this.showSuccess = false;
            }, 2000);
        }
    };
    TableComponent.prototype.showInput = function (newOpenedId) {
        this.openedId = newOpenedId;
    };
    //////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    /*
      Authorship: ALL credit for the code in this file goes to the authors of the
      book "Elements of Programming Interviews" by Adnan Aziz, Amit Prakash, and
      Tsung-Hsien Lee.
      
      I have just adapted the solution to pass on Leetcode, added explanatory
      comments, reformatted the code, & changed variable names for understanding.
      Sudoku Solver - LeetCode: https://leetcode.com/problems/sudoku-solver/
      This code passes all Leetcode test cases as of Jan. 8 2019 (12:18 am)
      Runtime: 11 ms*, faster than 73.28% of Java online submissions for Sudoku Solver.
      * Funny Note: Took me 30 minutes of unchecked code editing (no IDE) to get the code
      in working order before I first ran it. IT WORKED FIRST RUN IN LEETCODE. No syntax
      errors, no out of bounds exceptions. That is so impossible, but I'll take it.
      The video to explain this code is here: https://www.youtube.com/watch?v=JzONv5kaPJM
    */
    /*
      Driver function to kick off the recursion
    */
    TableComponent.prototype.solveSudoku = function (table) {
        return this.solveSudokuCell(0, 0, table);
    };
    /*
      This function chooses a placement for the cell at (row, col)
      and continues solving based on the rules we define.
      
      Our strategy:
      We will start at row 0.
      We will solve every column in that row.
      When we reach the last column we move to the next row.
      If this is past the last row (row == board.length) we are done.
      The whole board has been solved.
    */
    TableComponent.prototype.solveSudokuCell = function (row, col, table) {
        var _this = this;
        this.isLoading = true;
        ++this.calledTimes;
        if (this.calledTimes >= _utilities_valueLimits__WEBPACK_IMPORTED_MODULE_3__["ValueLimits"].maxTrials) {
            this.hasError = true;
            this.isLoading = false;
            this.toastr.error("We coudn't solve your Sudoku. Please check again your initial numbers input !");
            setTimeout(function () {
                _this.hasError = false;
            }, 5000);
            return true;
        }
        /*
          Have we finished placements in all columns for
          the row we are working on?
        */
        if (col == table[row].length) {
            /*
              Yes. Reset to col 0 and advance the row by 1.
              We will work on the next row.
            */
            col = 0;
            row++;
            /*
              Have we completed placements in all rows? If so then we are done.
              If not, drop through to the logic below and keep solving things.
            */
            if (row == table.length) {
                // if (!this.hasGotPreparedGame) {
                // }
                this.isSolved = true;
                this.isLoading = false;
                return true; // Entire board has been filled without conflict.
            }
        }
        // Skip non-empty entries. They already have a value in them.
        if (table[row][col] != this.emptyElement) {
            return this.solveSudokuCell(row, col + 1, table);
        }
        /*
          Try all values 1 through 9 in the cell at (row, col).
          Recurse on the placement if it doesn't break the constraints of Sudoku.
        */
        for (var value = 1; value <= table.length; value++) {
            var charToPlace = value; // convert int value to char
            /*
              Apply constraints. We will only add the value to the cell if
              adding it won't cause us to break sudoku rules.
            */
            if (this.canPlaceValue(table, row, col, charToPlace)) {
                table[row][col] = charToPlace;
                if (this.solveSudokuCell(row, col + 1, table)) { // recurse with our VALID placement
                    return true;
                }
            }
        }
        /*
          Undo assignment to this cell. No values worked in it meaning that
          previous states put us in a position we cannot solve from. Hence,
          we backtrack by returning "false" to our caller.
        */
        table[row][col] = this.emptyElement;
        return false; // No valid placement was found, this path is faulty, return false
    };
    /*
      Will the placement at (row, col) break the Sudoku properties?
    */
    TableComponent.prototype.canPlaceValue = function (board, row, col, charToPlace) {
        // Check column constraint. For each row, we do a check on column "col".
        for (var i = 0; i < board.length; i++) {
            if (charToPlace == board[i][col]) {
                return false;
            }
        }
        // Check row constraint. For each column in row "row", we do a check.
        for (var i = 0; i < board.length; i++) {
            if (charToPlace == board[row][i]) {
                return false;
            }
        }
        /*
          Check region constraints.
          
          In a 9 x 9 board, we will have 9 sub-boxes (3 rows of 3 sub-boxes).
          
          The "I" tells us that we are in the Ith sub-box row. (there are 3 sub-box rows)
          The "J" tells us that we are in the Jth sub-box column. (there are 3 sub-box columns)
          
          Integer properties will truncate the decimal place so we just know the sub-box number we are in.
          Each coordinate we touch will be found by an offset from topLeftOfSubBoxRow and topLeftOfSubBoxCol.
        */
        var regionSize = Number(Math.sqrt(board.length)); // gives us the size of a sub-box
        var I = Math.floor(row / regionSize);
        var J = Math.floor(col / regionSize);
        /*
          This multiplication takes us to the EXACT top left of the sub-box. We keep the (row, col)
          of these values because it is important. It lets us traverse the sub-box with our double for loop.
        */
        var topLeftOfSubBoxRow = regionSize * I; // the row of the top left of the block
        var topLeftOfSubBoxCol = regionSize * J; // the column of the tol left of the block
        // console.log('topLeftOfSubBoxRow', topLeftOfSubBoxRow);
        for (var i = 0; i < regionSize; i++) {
            for (var j = 0; j < regionSize; j++) {
                /*
                  i and j just define our offsets from topLeftOfBlockRow
                  and topLeftOfBlockCol respectively
                */
                //  console.log('stop', board[topLeftOfSubBoxRow + i]);
                if (!board[topLeftOfSubBoxRow + i]) {
                    debugger;
                }
                if (charToPlace == board[topLeftOfSubBoxRow + i][topLeftOfSubBoxCol + j]) {
                    return false;
                }
            }
        }
        return true; // placement is valid
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/utilities/autofocusDirective.ts":
/*!*************************************************!*\
  !*** ./src/app/utilities/autofocusDirective.ts ***!
  \*************************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(el) {
        this.el = el;
        this.focus = true;
    }
    AutofocusDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.focus) {
            //Otherwise Angular throws error: Expression has changed after it was checked.
            window.setTimeout(function () {
                _this.el.nativeElement.focus(); //For SSR (server side rendering) this is not safe. Use: https://github.com/angular/angular/issues/15008#issuecomment-285141070)
            });
        }
    };
    Object.defineProperty(AutofocusDirective.prototype, "autofocus", {
        set: function (condition) {
            this.focus = condition !== false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AutofocusDirective.prototype, "autofocus", null);
    AutofocusDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[autofocus]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "./src/app/utilities/onlyNumbers.ts":
/*!******************************************!*\
  !*** ./src/app/utilities/onlyNumbers.ts ***!
  \******************************************/
/*! exports provided: NumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function() { return NumberOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^[\d]$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[myNumberOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());



/***/ }),

/***/ "./src/app/utilities/valueLimits.ts":
/*!******************************************!*\
  !*** ./src/app/utilities/valueLimits.ts ***!
  \******************************************/
/*! exports provided: ValueLimits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueLimits", function() { return ValueLimits; });
var ValueLimits;
(function (ValueLimits) {
    ValueLimits[ValueLimits["maxTrials"] = 1000] = "maxTrials";
    ValueLimits[ValueLimits["maxFilledPositions"] = 81] = "maxFilledPositions";
})(ValueLimits || (ValueLimits = {}));


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stsonev\source\repos\sudoku\sudokuApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map