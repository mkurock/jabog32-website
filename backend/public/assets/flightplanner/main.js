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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"hide-print\" style=\"text-align:center\">\n  <h1>\n    Flight Planning\n  </h1>\n</div>\n<div class=\"hide-print\">\n  <app-navigation></app-navigation>\n</div>\n<div>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _waypoints_waypoints_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./waypoints/waypoints.component */ "./src/app/waypoints/waypoints.component.ts");
/* harmony import */ var _planner_planner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./planner/planner.component */ "./src/app/planner/planner.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _planner_planner_component__WEBPACK_IMPORTED_MODULE_10__["PlannerComponent"]
    },
    {
        path: 'waypoints',
        component: _waypoints_waypoints_component__WEBPACK_IMPORTED_MODULE_9__["WaypointsComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _waypoints_waypoints_component__WEBPACK_IMPORTED_MODULE_9__["WaypointsComponent"],
                _planner_planner_component__WEBPACK_IMPORTED_MODULE_10__["PlannerComponent"]
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.mock = [
            {
                Id: 1,
                Name: 'FYTTR',
                Latitude: 36.5124,
                Longitude: -115.12523,
                Tacan: 'LSV',
                Radial: 267,
                dme: 33,
                TacanChl: '12X'
            },
            {
                Id: 2,
                Name: 'JAYSN',
                Latitude: 36.57083333,
                Longitude: -116.03777778,
                Tacan: 'BTY',
                Radial: 95,
                dme: 37,
                TacanChl: '76X'
            },
            {
                Id: 3,
                Name: 'JAYSN-Fake',
                Latitude: 36.57083333,
                Longitude: 116.03777778,
                Tacan: 'BTY',
                Radial: 95,
                dme: 37,
                TacanChl: '76X'
            }
        ];
        this.planningCache = [];
    }
    DataService.prototype.getWaypoints = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wpts, _i, wpts_1, w;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('/api/waypoints/getall').toPromise()];
                    case 1:
                        wpts = _a.sent();
                        for (_i = 0, wpts_1 = wpts; _i < wpts_1.length; _i++) {
                            w = wpts_1[_i];
                            this.getCoordinateFormats(w);
                        }
                        return [2 /*return*/, wpts];
                }
            });
        });
    };
    DataService.prototype.addWaypoint = function (wp) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                item = this.http.post('/api/waypoints', wp).toPromise();
                return [2 /*return*/, item];
            });
        });
    };
    DataService.prototype.updateWaypoint = function (wp) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                item = this.http.put('/api/waypoints/' + wp.Id, wp).toPromise();
                return [2 /*return*/, item];
            });
        });
    };
    DataService.prototype.getCoordinateFormats = function (wpt) {
        //Latitude
        var str = "";
        var dir = "N";
        wpt.Tacan = wpt.Tacan ? wpt.Tacan : "";
        wpt.TacanChl = wpt.TacanChl ? wpt.TacanChl : "";
        wpt.Radial = wpt.Radial ? wpt.Radial : 0;
        wpt.DME = wpt.DME ? wpt.DME : 0;
        var zeroedValue = Math.abs(wpt.Latitude);
        if (wpt.Latitude < 0) {
            dir = "S";
        }
        var deg = parseInt(zeroedValue);
        var mins = (zeroedValue - deg) * 60;
        var minZero = mins < 10 ? "0" : "";
        var secs = (mins - Math.floor(mins)) * 60;
        var secZero = secs < 10 ? "0" : "";
        wpt.LatDir = dir;
        wpt.LatD = deg;
        wpt.LatM = mins;
        wpt.LatitudeDecimalStr = dir + " " + deg + "\u00B0 " + minZero + mins.toFixed(2) + "'";
        wpt.LatitudeSecondsString = dir + " " + deg + "\u00B0 " + minZero + mins.toFixed(0) + "' " + secZero + secs.toFixed(0) + "''";
        //Logitude
        var strLong = "";
        var dirLong = "E";
        var zeroedLong = Math.abs(wpt.Longitude);
        if (wpt.Longitude < 0) {
            dirLong = "W";
        }
        var degLong = parseInt(zeroedLong);
        var minsLong = (zeroedLong - degLong) * 60;
        var minZeroLong = minsLong < 10 ? "0" : "";
        var secsLong = (minsLong - Math.floor(minsLong)) * 60;
        var secZeroLong = secsLong < 10 ? "0" : "";
        wpt.LongDir = dirLong;
        wpt.LongD = degLong;
        wpt.LongM = minsLong;
        wpt.LongitudeDecimalStr = dirLong + " " + degLong + "\u00B0 " + minZeroLong + minsLong.toFixed(2) + "'";
        wpt.LongitudeSecondsString = dirLong + " " + degLong + "\u00B0 " + minZeroLong + minsLong.toFixed(0) + "' " + secZeroLong + secsLong.toFixed(0) + "''";
        return wpt;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    background-color: #eee;\r\n}\r\nul{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nul li {\r\n    list-style: none;\r\n    display: inline-block;\r\n    border-right: 1px solid black;\r\n    padding: 15px;\r\n    cursor: pointer;\r\n}\r\nul li.active {\r\n    background-color: #ddd;\r\n}\r\nul li:hover {\r\n    background-color: #ddd;\r\n}\r\nul li:last-child {\r\n    border: none;\r\n}"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul>\n    <li  routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Planning</li>\n    <li  routerLink=\"/waypoints\" routerLinkActive=\"active\">Waypoint database</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.navigate = function (route) {
        this.router.navigate([route]);
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/planner/planner.component.css":
/*!***********************************************!*\
  !*** ./src/app/planner/planner.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog{\r\n    padding: 30px;\r\n    position: fixed;\r\n    top: 150px;\r\n    left:calc(50% - 300px);\r\n    width: 600px;\r\n    box-shadow: black 0 0 20px -2px;\r\n    background-color: white;\r\n    box-sizing: content-box;\r\n}\r\n\r\nmat-radio-button {\r\n    margin-right: 30px;\r\n}\r\n\r\ntable.planning-table {\r\n    width: 100% !important;\r\n}\r\n\r\n.planning-table td, .planning-table th {\r\n    padding-left: 5px;\r\n}\r\n\r\nbutton {\r\n    margin-right: 5px;\r\n}\r\n\r\nmat-form-field{\r\n    width: 100%;\r\n}\r\n\r\n.dialog table {\r\n    width: 100%;\r\n}\r\n\r\n.dialog table td {\r\n    border: none;\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n}\r\n\r\n.bottom-row {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.bottom-row div {\r\n    flex: 1;\r\n}\r\n\r\n.right {\r\n    text-align: right;\r\n}"

/***/ }),

/***/ "./src/app/planner/planner.component.html":
/*!************************************************!*\
  !*** ./src/app/planner/planner.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"planning-header\">\n    <h3>Coordinate format:</h3>\n    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"format\">\n      <mat-radio-button class=\"example-radio-button\" value=\"secs\">\n        Seconds\n      </mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" value=\"decs\">\n        Minute decimals\n      </mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" value=\"deg\">\n        Degree decimals\n      </mat-radio-button>\n    </mat-radio-group>\n</div>\n<table class=\"planning-table\">\n  <thead>\n    <tr>\n        <th>#</th>\n        <th>Name</th>\n        <th>Latitude</th>\n        <th>Longitude</th>\n        <th>Tacan</th>\n        <th>Chl</th>\n        <th>RAD</th>\n        <th>DME</th>\n        <th>Distance</th>\n        <th>HDG</th>\n        <th>ALT</th>\n        <th>SPD</th>\n        <th>DTOT</th>\n        <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let w of wpts; let i = index\">\n      <td>{{i + 1}}</td>\n      <td>{{w.Name}}</td>\n      <td>{{getLatStr(w)}}</td>\n      <td>{{getLongStr(w)}}</td>\n      <td>{{w.Tacan}}</td>\n      <td>{{w.TacanChl}}</td>\n      <td>{{w.Radial}}</td>\n      <td>{{w.DME}}</td>\n      <td>{{getDistance(w, i)}}</td>\n      <td>{{getHeading(w, i)}}</td>\n      <td>\n        <input placeholder=\"ft\" type=\"number\" [(ngModel)]=\"w.Altitude\" />\n      </td>\n      <td>\n          <input placeholder=\"kts\" type=\"number\" [(ngModel)]=\"w.Speed\" />\n      </td>\n      <td>\n          <input placeholder=\"hhmmss\" type=\"number\" [(ngModel)]=\"w.DTOT\" />\n      </td>\n      <td><a (click)=\"remove(i)\">remove</a></td>\n    </tr>\n  </tbody>\n</table>\n<div class=\"bottom-row\">\n  <div>\n    <a (click)=\"addNew()\">Add Waypoint to route</a>\n  </div>\n  <div class=\"right\">\n    <mat-form-field style=\"width: auto; margin-right: 15px;\">\n      <mat-select [(value)]=\"exportFormat\">\n        <mat-option value=\"csv\">CSV</mat-option>\n        <mat-option value=\"cdu\">CDU Dataloader</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button class=\"btn\" (click)=\"export()\">Export</button>\n  </div>\n</div>\n\n<div class=\"dialog\" [style.display]=\"dialogOpen ? 'block': 'none'\">\n  <h3>Add a waypoint to the route</h3>\n  <div>\n    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"waypointType\">\n      <mat-radio-button class=\"example-radio-button\" value=\"db\">\n        From database\n      </mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" value=\"custom\">\n        Custom\n      </mat-radio-button>\n    </mat-radio-group>\n  </div>\n  <div [style.display]=\"waypointType == 'db' ? 'block': 'none'\">\n    <mat-form-field class=\"example-full-width\">\n      <input type=\"text\" placeholder=\"Waypoint name\" aria-label=\"Waypoint\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n      <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n        <mat-option *ngFor=\"let option of filteredWpts | async\" [value]=\"option\">\n          {{ option.Name }}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </div>\n  <div class=\"custom-pane\" [style.display]=\"waypointType == 'custom' ? 'block': 'none'\">\n    <table width=\"100%\">\n        <tr>\n          <td colspan=\"3\">\n              <mat-form-field>\n                <input matInput placeholder=\"Name\" [(ngModel)]=\"diaName\">\n              </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <select [(ngModel)]=\"diaLat\">\n              <option value=\"N\">N</option>\n              <option value=\"S\">S</option>\n            </select>\n          </td>\n          <td class=\"coords\">\n              <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Degrees\" [(ngModel)]=\"diaLatD\">\n                <mat-hint>0 - 90 ganze Zahlen</mat-hint>\n              </mat-form-field>\n              °\n          </td>\n          <td class=\"coords\">\n              <mat-form-field>\n                <input matInput type=\"number\" placeholder=\"Minutes\" [(ngModel)]=\"diaLatM\">\n                <mat-hint>0 - 60 Dezimalstelle für Sekunden</mat-hint>\n              </mat-form-field>\n              '\n          </td>\n        </tr>\n        <tr>\n            <td>\n              <select [(ngModel)]=\"diaLong\">\n                <option value=\"E\">E</option>\n                <option value=\"W\">W</option>\n              </select>\n            </td>\n            <td class=\"coords\">\n                <mat-form-field>\n                  <input min=\"0\" max=\"180\" matInput placeholder=\"Degrees\" type=\"number\" [(ngModel)]=\"diaLongD\">\n                <mat-hint>0 - 180 ganze Zahlen</mat-hint>\n              </mat-form-field>\n                °\n            </td>\n            <td class=\"coords\">\n                <mat-form-field>\n                  <input matInput placeholder=\"Minutes\" type=\"number\" [(ngModel)]=\"diaLongM\">\n                <mat-hint>0 - 60 Dezimalstelle für Sekunden</mat-hint>\n              </mat-form-field>\n                '\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">\n                <mat-form-field>\n                  <input matInput placeholder=\"TACAN\" [(ngModel)]=\"Tacan\">\n                </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">\n                <mat-form-field>\n                  <input matInput placeholder=\"TACAN Channel\" [(ngModel)]=\"TacanCh\">\n                </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">\n                <mat-form-field>\n                  <input matInput min=\"0\" max=\"359\" type=\"number\" placeholder=\"Radial\" [(ngModel)]=\"Radial\">\n                </mat-form-field>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"3\">\n                <mat-form-field>\n                  <input matInput type=\"number\" min=\"0\" max=\"300\" placeholder=\"DME\" [(ngModel)]=\"Dme\">\n                </mat-form-field>\n            </td>\n          </tr>\n      </table>\n  </div>\n  <button class=\"btn btn-success\" (click)=\"dialogOk()\">Add</button>\n  <button class=\"btn btn-danger\" (click)=\"dialogCancel()\">Cancel</button>\n</div>"

/***/ }),

/***/ "./src/app/planner/planner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/planner/planner.component.ts ***!
  \**********************************************/
/*! exports provided: PlannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlannerComponent", function() { return PlannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PlannerComponent = /** @class */ (function () {
    function PlannerComponent(ds) {
        this.ds = ds;
        this.wpts = [];
        this.selectedWpt = "-1";
        this.format = "secs";
        this.waypointType = "db";
        this.diaName = "";
        this.diaLat = "N";
        this.diaLatD = null;
        this.diaLatM = null;
        this.diaLong = "E";
        this.diaLongD = null;
        this.diaLongM = null;
        this.Tacan = "";
        this.TacanCh = "";
        this.Radial = null;
        this.Dme = null;
        this.dialogOpen = false;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.exportFormat = "csv";
    }
    PlannerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wpts = this.ds.planningCache;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.ds.getWaypoints()];
                    case 1:
                        _a.list = _b.sent();
                        this.filteredWpts = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value == 'string' ? value : value.Name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) { return name ? _this.filter(name) : _this.list.slice(); }));
                        console.log(this.list);
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    PlannerComponent.prototype.filter = function (name) {
        return this.list.filter(function (wpt) { return wpt.Name.toLowerCase().indexOf(name.toLowerCase()) == 0; });
    };
    PlannerComponent.prototype.displayFn = function (wpt) {
        return wpt ? wpt.Name : undefined;
    };
    PlannerComponent.prototype.addNew = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.myControl.setValue({});
                this.diaName = "";
                this.diaLat = "N";
                this.diaLatD = null;
                this.diaLatM = null;
                this.diaLong = "E";
                this.diaLongM = null;
                this.diaLongD = null;
                this.Tacan = "";
                this.TacanCh = "";
                this.Radial = null;
                this.Dme = null;
                this.dialogOpen = true;
                return [2 /*return*/];
            });
        });
    };
    PlannerComponent.prototype.dialogOk = function () {
        if (this.waypointType == "custom") {
            var lt = this.diaLatD;
            lt += (this.diaLatM / 60);
            if (this.diaLat == "S") {
                lt = lt * -1;
            }
            var ll = this.diaLongD;
            ll += (this.diaLongM / 60);
            if (this.diaLong == "W") {
                ll = ll * -1;
            }
            var newWP = {
                Id: -1,
                Name: this.diaName,
                Tacan: this.Tacan,
                TacanChl: this.TacanCh,
                Radial: this.Radial,
                DME: this.Dme,
                Latitude: lt,
                Longitude: ll
            };
            this.ds.getCoordinateFormats(newWP);
            this.wpts.push(newWP);
            this.ds.planningCache = this.wpts;
        }
        else {
            this.wpts.push(this.myControl.value);
            this.ds.planningCache = this.wpts;
        }
        this.selectedWpt = "-1";
        this.dialogOpen = false;
    };
    PlannerComponent.prototype.dialogCancel = function () {
        this.selectedWpt = "-1";
        this.dialogOpen = false;
    };
    PlannerComponent.prototype.remove = function (i) {
        this.wpts.splice(i, 1);
        this.ds.planningCache = this.wpts;
    };
    PlannerComponent.prototype.getLatStr = function (w) {
        if (this.format == "secs")
            return w.LatitudeSecondsString;
        else if (this.format == "decs")
            return w.LatitudeDecimalStr;
        else
            return w.Latitude.toFixed(5);
    };
    PlannerComponent.prototype.getLongStr = function (w) {
        if (this.format == "secs")
            return w.LongitudeSecondsString;
        else if (this.format == "decs")
            return w.LongitudeDecimalStr;
        else
            return w.Longitude.toFixed(5);
    };
    PlannerComponent.prototype.getDistance = function (w, i) {
        var prev = this.wpts[i - 1];
        if (prev != null) {
            return this.distance(w.Latitude, w.Longitude, prev.Latitude, prev.Longitude, "N");
        }
        else {
            return "";
        }
    };
    PlannerComponent.prototype.getHeading = function (w, i) {
        var prev = this.wpts[i - 1];
        if (prev != null) {
            return this.bearing(prev.Latitude, prev.Longitude, w.Latitude, w.Longitude);
        }
        else {
            return "";
        }
    };
    PlannerComponent.prototype.distance = function (lat1, lon1, lat2, lon2, unit) {
        if (!lat1 || !lat2 || !lon1 || !lon2)
            return "";
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
            dist = dist * 1.609344;
        }
        if (unit == "N") {
            dist = dist * 0.8684;
        }
        return dist.toFixed(1);
    };
    PlannerComponent.prototype._toRad = function (n) {
        return n * Math.PI / 180;
    };
    PlannerComponent.prototype._toDeg = function (n) {
        return n * 180 / Math.PI;
    };
    PlannerComponent.prototype.bearing = function (lat1, lng1, lat2, lng2) {
        if (!lat1 || !lat2 || !lng1 || !lng2)
            return "";
        var rlat1 = this._toRad(lat1);
        var rlng1 = this._toRad(lng1);
        var rlat2 = this._toRad(lat2);
        var rlng2 = this._toRad(lng2);
        var y = Math.sin(rlng2 - rlng1) * Math.cos(rlat2);
        var x = Math.cos(rlat1) * Math.sin(rlat2) -
            Math.sin(rlat1) * Math.cos(rlat2) * Math.cos(rlng2 - rlng1);
        var rhdg = Math.atan2(y, x);
        var hdg = this._toDeg(rhdg);
        return ((hdg + 360) % 360).toFixed(0);
    };
    PlannerComponent.prototype.export = function () {
        switch (this.exportFormat) {
            case "csv":
                this.exportCsv();
                break;
            case "cdu":
                this.exportCdu();
                break;
            default:
                break;
        }
    };
    PlannerComponent.prototype.exportCsv = function () {
        var csv = 'sep=;\n';
        csv += "#;Name;Latitude;Longitude;Tacan;Channel;Radial;DME;Distance;Heading;Alt;Speed;DTOT";
        var index = 0;
        for (var _i = 0, _a = this.wpts; _i < _a.length; _i++) {
            var w = _a[_i];
            var prev = this.wpts[index - 1];
            var dist = this.getDistance(w, index);
            var hdg = this.getHeading(w, index);
            var alt = w.Altitude ? w.Altitude.toString() : "";
            var spd = w.Speed ? w.Speed.toString() : "";
            var tot = w.DTOT ? w.DTOT.toString() : "";
            csv += "\n" + index + ";" + w.Name + ";" + this.getLatStr(w).replace('°', '') + ";" + this.getLongStr(w).replace('°', '') + ";" + w.Tacan + ";" + w.TacanChl + ";" + w.Radial + ";" + w.DME + ";" + dist + ";" + hdg + ";" + alt + ";" + spd + ";" + tot;
            index++;
        }
        console.log(csv);
        this.saveString(csv, 'text/csv', 'export.csv');
    };
    PlannerComponent.prototype.exportCdu = function () {
        console.log("Export CDU");
        var txt = "";
        for (var _i = 0, _a = this.wpts; _i < _a.length; _i++) {
            var w = _a[_i];
            var ltdz = w.LatD < 10 ? "0" : "";
            var ltmz = w.LatM < 10 ? "0" : "";
            var lodz = w.LongD < 10 ? "0" : "";
            var lomz = w.LongM < 10 ? "0" : "";
            var alt = w.Altitude ? w.Altitude.toString() : "00000";
            var tot = w.DTOT ? w.DTOT : "000000";
            while (alt.length < 5) {
                alt = "0" + alt;
            }
            txt += "" + w.LatDir + ltdz + w.LatD + ltmz + w.LatM.toFixed(3).replace('.', '') + " " + w.LongDir + lodz + w.LongD + lomz + w.LongM.toFixed(3).replace('.', '') + " EL" + alt + " T" + tot + " " + w.Name + "\r\n";
        }
        console.log(txt);
        this.saveString(txt, 'text/plain', 'cdu-export.txt');
    };
    PlannerComponent.prototype.saveString = function (data, mime, fileName) {
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:' + mime + ';charset=utf-8,' + encodeURI(data);
        hiddenElement.target = '_blank';
        hiddenElement.download = fileName;
        hiddenElement.click();
    };
    PlannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-planner',
            template: __webpack_require__(/*! ./planner.component.html */ "./src/app/planner/planner.component.html"),
            styles: [__webpack_require__(/*! ./planner.component.css */ "./src/app/planner/planner.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PlannerComponent);
    return PlannerComponent;
}());



/***/ }),

/***/ "./src/app/waypoints/waypoints.component.css":
/*!***************************************************!*\
  !*** ./src/app/waypoints/waypoints.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table.app-wpts {\r\n    width: 100%;\r\n}\r\ntable.app-wpts tr{\r\n    height: 40px;\r\n}\r\ntable.app-wpts tr:nth-child(even){\r\n    background-color: #eee;\r\n}\r\ntable.app-wpts tr:hover{\r\n    background-color: #ddd;\r\n}\r\ntable.app-wpts tr{\r\n    height: 40px;\r\n}\r\ntable.app-wpts th, table.app-wpts td {\r\n    text-align: left;\r\n    padding: 0 0 0 15px;\r\n    margin: 0;\r\n    border: none;\r\n}\r\ntable.app-wpts thead > tr {\r\n    background-color: black;\r\n    color:white;\r\n}\r\n.options h3 {\r\n    display: inline-block;\r\n    margin-right: 30px;\r\n    margin-left: 30px;\r\n}\r\nmat-radio-button {\r\n    margin-left: 20px;\r\n}\r\na {\r\n    cursor: pointer;\r\n}\r\n.add-dialog{\r\n    padding: 30px;\r\n    position: fixed;\r\n    top: 150px;\r\n    left:calc(50% - 300px);\r\n    width: 600px;\r\n    box-shadow: black 0 0 20px -2px;\r\n    background-color: white;\r\n    box-sizing: content-box;\r\n}\r\n.add-dialog table td {\r\n    border:none;\r\n}\r\n.add-dialog mat-form-field{\r\n    width: 100%;\r\n}\r\n.coords mat-form-field {\r\n    width: calc(100% - 10px);\r\n}"

/***/ }),

/***/ "./src/app/waypoints/waypoints.component.html":
/*!****************************************************!*\
  !*** ./src/app/waypoints/waypoints.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"options\">\n  <a (click)=\"openDialog()\"> + Waypoint</a>\n  <h3>Coordinate format:</h3>\n  <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"format\">\n    <mat-radio-button class=\"example-radio-button\" value=\"secs\">\n      Seconds\n    </mat-radio-button>\n    <mat-radio-button class=\"example-radio-button\" value=\"decs\">\n      Minute decimals\n    </mat-radio-button>\n    <mat-radio-button class=\"example-radio-button\" value=\"deg\">\n      Degree decimals\n    </mat-radio-button>\n  </mat-radio-group>\n  <div style=\"float:right;margin-right: 25px;width: 300px;\">\n    <mat-form-field style=\"width:100%;\">\n      <input matInput placeholder=\"Search by name\" (keyup)=\"onSearch($event)\" [(ngModel)]=\"search\">\n    </mat-form-field>\n  </div>\n</div>\n<table class=\"app-wpts\" cellspacing=0>\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>Name</th>\n      <th>Latitude</th>\n      <th>Longitude</th>\n      <th>Tacan</th>\n      <th>Chl</th>\n      <th>RAD</th>\n      <th>DME</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let w of wpts\">\n      <td>{{w.Id}}</td>\n      <td>{{w.Name}}</td>\n      <td>{{getLatStr(w)}}</td>\n      <td>{{getLongStr(w)}}</td>\n      <td>{{w.Tacan}}</td>\n      <td>{{w.TacanChl}}</td>\n      <td>{{w.Radial}}</td>\n      <td>{{w.DME}}</td>\n      <td><a (click)=\"openEdit(w)\">edit</a></td>\n    </tr>\n  </tbody>\n</table>\n\n<div class=\"add-dialog\" [style.display]=\"dialogOpen ? 'block' : 'none'\">\n  <h3>Add a waypoint</h3>\n  <table width=\"100%\">\n    <tr>\n      <td colspan=\"3\">\n          <mat-form-field>\n            <input matInput placeholder=\"Name\" [(ngModel)]=\"diaName\">\n          </mat-form-field>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <select [(ngModel)]=\"diaLat\">\n          <option value=\"N\">N</option>\n          <option value=\"S\">S</option>\n        </select>\n      </td>\n      <td class=\"coords\">\n          <mat-form-field>\n            <input matInput type=\"number\" placeholder=\"Degrees\" [(ngModel)]=\"diaLatD\">\n            <mat-hint>0 - 90 ganze Zahlen</mat-hint>\n          </mat-form-field>\n          °\n      </td>\n      <td class=\"coords\">\n          <mat-form-field>\n            <input matInput type=\"number\" placeholder=\"Minutes\" [(ngModel)]=\"diaLatM\">\n            <mat-hint>0 - 60 Dezimalstelle für Sekunden</mat-hint>\n          </mat-form-field>\n          '\n      </td>\n    </tr>\n    <tr>\n        <td>\n          <select [(ngModel)]=\"diaLong\">\n            <option value=\"E\">E</option>\n            <option value=\"W\">W</option>\n          </select>\n        </td>\n        <td class=\"coords\">\n            <mat-form-field>\n              <input min=\"0\" max=\"180\" matInput placeholder=\"Degrees\" type=\"number\" [(ngModel)]=\"diaLongD\">\n            <mat-hint>0 - 180 ganze Zahlen</mat-hint>\n          </mat-form-field>\n            °\n        </td>\n        <td class=\"coords\">\n            <mat-form-field>\n              <input matInput placeholder=\"Minutes\" type=\"number\" [(ngModel)]=\"diaLongM\">\n            <mat-hint>0 - 60 Dezimalstelle für Sekunden</mat-hint>\n          </mat-form-field>\n            '\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"3\">\n            <mat-form-field>\n              <input matInput placeholder=\"TACAN\" [(ngModel)]=\"Tacan\">\n            </mat-form-field>\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"3\">\n            <mat-form-field>\n              <input matInput placeholder=\"TACAN Channel\" [(ngModel)]=\"TacanCh\">\n            </mat-form-field>\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"3\">\n            <mat-form-field>\n              <input matInput min=\"0\" max=\"359\" type=\"number\" placeholder=\"Radial\" [(ngModel)]=\"Radial\">\n            </mat-form-field>\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"3\">\n            <mat-form-field>\n              <input matInput type=\"number\" min=\"0\" max=\"300\" placeholder=\"DME\" [(ngModel)]=\"Dme\">\n            </mat-form-field>\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"3\">\n            <button (click)=\"dialogOk()\">Save</button>\n            <button (click)=\"dialogCancel()\">Cancel</button>\n        </td>\n      </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/waypoints/waypoints.component.ts":
/*!**************************************************!*\
  !*** ./src/app/waypoints/waypoints.component.ts ***!
  \**************************************************/
/*! exports provided: WaypointsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaypointsComponent", function() { return WaypointsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var WaypointsComponent = /** @class */ (function () {
    function WaypointsComponent(ds) {
        this.ds = ds;
        this.wpts = [];
        this.format = "secs";
        this.diaId = -1;
        this.dialogOpen = false;
        this.diaName = "";
        this.diaLat = "N";
        this.diaLatD = null;
        this.diaLatM = null;
        this.diaLong = "E";
        this.diaLongD = null;
        this.diaLongM = null;
        this.Tacan = "";
        this.TacanCh = "";
        this.Radial = null;
        this.Dme = null;
        this.seasons = [
            'Winter',
            'Spring',
            'Summer',
            'Autumn',
        ];
    }
    WaypointsComponent.prototype.ngOnInit = function () {
        this.load();
    };
    WaypointsComponent.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.ds.getWaypoints()];
                    case 1:
                        _a.wpts = _b.sent();
                        this.cache = JSON.parse(JSON.stringify(this.wpts));
                        console.log(this.wpts);
                        return [2 /*return*/];
                }
            });
        });
    };
    WaypointsComponent.prototype.openDialog = function () {
        this.diaId = -1;
        this.diaName = "";
        this.diaLat = "N";
        this.diaLatD = null;
        this.diaLatM = null;
        this.diaLong = "E";
        this.diaLongM = null;
        this.diaLongD = null;
        this.Tacan = "";
        this.TacanCh = "";
        this.Radial = null;
        this.Dme = null;
        this.dialogOpen = true;
    };
    WaypointsComponent.prototype.openEdit = function (wpt) {
        this.diaId = wpt.Id;
        this.diaName = wpt.Name;
        this.diaLat = wpt.LatDir;
        this.diaLatD = wpt.LatD;
        this.diaLatM = wpt.LatM;
        this.diaLong = wpt.LongDir;
        this.diaLongM = wpt.LongM;
        this.diaLongD = wpt.LongD;
        this.Tacan = wpt.Tacan;
        this.TacanCh = wpt.TacanChl;
        this.Radial = wpt.Radial;
        this.Dme = wpt.DME;
        this.dialogOpen = true;
    };
    WaypointsComponent.prototype.dialogOk = function () {
        return __awaiter(this, void 0, void 0, function () {
            var valid, msg, lt, ll, newWP, newItem;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valid = true;
                        msg = "";
                        if (typeof (this.diaLatD) != "number") {
                            valid = false;
                            msg += "Latitude Degrees must be a number \n";
                        }
                        if (typeof (this.diaLatM) != "number") {
                            valid = false;
                            msg += "Latitude Minutes must be a number \n";
                        }
                        if (typeof (this.diaLongD) != "number") {
                            valid = false;
                            msg += "Longitude Degrees must be a number \n";
                        }
                        if (typeof (this.diaLongM) != "number") {
                            valid = false;
                            msg += "Longitude Minutes must be a number \n";
                        }
                        if (this.diaLatD > 90 || this.diaLatD < 0) {
                            valid = false;
                            msg += "Latitude degrees not valid \n";
                        }
                        if (this.diaLatM >= 60 || this.diaLatM < 0) {
                            valid = false;
                            msg += "Latitude minutes not valid \n";
                        }
                        if (this.diaLongD > 180 || this.diaLongD < 0) {
                            valid = false;
                            msg += "Longitude degrees not valid \n";
                        }
                        if (this.diaLongM >= 60 || this.diaLongM < 0) {
                            valid = false;
                            msg += "Longitude minutes not valid \n";
                        }
                        if (this.Radial >= 360 || this.diaLongM < 0) {
                            valid = false;
                            msg += "Radial not valid \n";
                        }
                        if (this.Dme < 0) {
                            valid = false;
                            msg += "DME value not valid \n";
                        }
                        if (!valid) return [3 /*break*/, 5];
                        lt = this.diaLatD;
                        lt += (this.diaLatM / 60);
                        if (this.diaLat == "S") {
                            lt = lt * -1;
                        }
                        ll = this.diaLongD;
                        ll += (this.diaLongM / 60);
                        if (this.diaLong == "W") {
                            ll = ll * -1;
                        }
                        newWP = {
                            Id: this.diaId,
                            Name: this.diaName,
                            Tacan: this.Tacan,
                            TacanChl: this.TacanCh,
                            Radial: this.Radial,
                            DME: this.Dme,
                            Latitude: lt,
                            Longitude: ll
                        };
                        if (!(newWP.Id < 1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ds.addWaypoint(newWP)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.ds.updateWaypoint(newWP)];
                    case 3:
                        newItem = _a.sent();
                        console.log(newItem);
                        _a.label = 4;
                    case 4:
                        this.load();
                        this.diaId = -1;
                        this.dialogOpen = false;
                        return [3 /*break*/, 6];
                    case 5:
                        alert(msg);
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    WaypointsComponent.prototype.dialogCancel = function () {
        this.dialogOpen = false;
    };
    WaypointsComponent.prototype.getLatStr = function (w) {
        if (this.format == "secs")
            return w.LatitudeSecondsString;
        else if (this.format == "decs")
            return w.LatitudeDecimalStr;
        else
            return w.Latitude.toFixed(5);
    };
    WaypointsComponent.prototype.getLongStr = function (w) {
        if (this.format == "secs")
            return w.LongitudeSecondsString;
        else if (this.format == "decs")
            return w.LongitudeDecimalStr;
        else
            return w.Longitude.toFixed(5);
    };
    WaypointsComponent.prototype.onSearch = function (ev) {
        var newWpts = [];
        for (var _i = 0, _a = this.cache; _i < _a.length; _i++) {
            var w = _a[_i];
            var name_1 = w.Name ? w.Name.toLowerCase() : "";
            if (name_1.indexOf(this.search.toLowerCase()) != -1) {
                newWpts.push(w);
            }
        }
        this.wpts = newWpts;
    };
    WaypointsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-waypoints',
            template: __webpack_require__(/*! ./waypoints.component.html */ "./src/app/waypoints/waypoints.component.html"),
            styles: [__webpack_require__(/*! ./waypoints.component.css */ "./src/app/waypoints/waypoints.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], WaypointsComponent);
    return WaypointsComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/marvi/source/node/dcsplannerWeb/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map