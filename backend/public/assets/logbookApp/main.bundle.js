webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<div>\n  <h1>\n    Einsatzberichte\n  </h1>\n  <router-outlet></router-outlet>\n </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.myDate = new Date(2017, 7, 20);
    }
    AppComponent.prototype.dateChanged = function (ev) {
        console.log(ev);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_edit_component__ = __webpack_require__("../../../../../src/app/edit/edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_10__edit_edit_component__["a" /* EditComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_10__edit_edit_component__["a" /* EditComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_10__edit_edit_component__["a" /* EditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true }),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdInputModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdTableModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdDatepickerModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MdSelectModule */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MdNativeDateModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = "/api/";
        this.aircrafts = [];
        this.pilots = [];
    }
    DataService.prototype.getAllLogbooks = function () {
        return this.http.get(this.baseUrl + "logbook/getall")
            .toPromise()
            .then(function (json) {
            var results = json.json();
            for (var i = 0; i < results.length; i++) {
                var res = results[i];
                res.Departure = new Date(res.Departure.replace("Z", ""));
                res.Landing = new Date(res.Landing.replace("Z", ""));
                return results;
            }
        })
            .catch(function (err) { return err.json(); });
    };
    DataService.prototype.getSingleLogbook = function (id) {
        return this.http.get(this.baseUrl + "logbook/get/" + id)
            .toPromise()
            .then(function (json) {
            var res = json.json();
            res.Departure = new Date(res.Departure.replace("Z", ""));
            res.Landing = new Date(res.Landing.replace("Z", ""));
            return res;
        })
            .catch(function (err) { return err.json(); });
    };
    DataService.prototype.getPilots = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            if (_this.pilots.length == 0) {
                _this.http.get(_this.baseUrl + "logbook/pilots")
                    .toPromise()
                    .then(function (result) {
                    _this.pilots = result.json();
                    res(_this.pilots);
                })
                    .catch(function (err) {
                    rej(err);
                });
            }
            else {
                res(_this.pilots);
            }
        });
    };
    DataService.prototype.getAircrafts = function () {
        var _this = this;
        return new Promise(function (res, rej) {
            if (_this.pilots.length == 0) {
                _this.http.get(_this.baseUrl + "logbook/aircrafts")
                    .toPromise()
                    .then(function (result) {
                    _this.aircrafts = result.json();
                    res(_this.aircrafts);
                })
                    .catch(function (err) {
                    rej(err);
                });
            }
            else {
                res(_this.aircrafts);
            }
        });
    };
    DataService.prototype.saveLogbook = function (payload) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            "content-type": "application/json"
        });
        return this.http.post(this.baseUrl + "logbook/update/" + payload.Id, payload, { headers: header })
            .toPromise();
    };
    DataService.prototype.createLogbook = function (payload) {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            "content-type": "application/json"
        });
        return this.http.post(this.baseUrl + "logbook/create", payload, { headers: header })
            .toPromise();
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".actionIndicator {\n    display: inline-block;\n    height: 13px;\n    width: 40px;\n    position: relative;\n}\n\n.ball-scale-ripple-multiple{\n    float: right;\n    margin-right: -35px;\n    margin-top: 21px;\n}\n.ball-scale-ripple-multiple > div {\n    /* border-color: #777; */\n    width: 30px;\n    height: 30px;\n}\n.actionIndicator > .ball-scale-ripple-multiple {\n    position: absolute;\n    right: 10px;\n    top: 21px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%\">\n  <div style=\"width: 700px; margin:auto;\">\n    <a routerLink=\"/\"><span class=\"glyphicon glyphicon-chevron-left\"></span> Übersicht</a>\n    <h3>Daten</h3>\n    <md-input-container style='width:100%'>\n      <input mdInput placeholder=\"Titel\" [(ngModel)]=\"data.Title\" />\n    </md-input-container>\n    <md-input-container style='width:100%'>\n      <input mdInput placeholder=\"Einsatzort\" [(ngModel)]=\"data.Einsatzort\" />\n    </md-input-container>\n    <md-input-container style='width:100%'>\n      <input mdInput placeholder=\"Einsatzart\" [(ngModel)]=\"data.Einsatzart\" />\n    </md-input-container>\n\n    <div>\n      <div style=\"display: inline-block;width: calc(100% - 240px);\">\n        <md-input-container style='width:100%'>\n          <input disabled mdInput [mdDatepicker]=\"dep\" placeholder=\"Abflug\" [(ngModel)]=\"data.Departure\" />\n          <button mdSuffix [mdDatepickerToggle]=\"dep\"></button>\n        </md-input-container>\n        <md-datepicker #dep></md-datepicker>\n      </div>\n      <div style=\"display: inline-block;\">\n        <md-select placeholder=\"Uhr\" [(ngModel)]=\"selectedHourDeparture\">\n          <md-option *ngFor=\"let hh of hours\" [value]=\"hh\">\n            {{hh}}\n          </md-option>\n        </md-select>\n      </div>\n      :\n      <div style=\"display: inline-block\">\n        <md-select placeholder=\"Uhr\" style=\"width:100px\" [(ngModel)]=\"selectedMinutesDeparture\">\n          <md-option *ngFor=\"let mm of minutes\" [value]=\"mm\">\n            {{mm}}\n          </md-option>\n        </md-select>\n      </div>\n    </div>\n\n    <div>\n      <div style=\"display: inline-block;width: calc(100% - 240px);\">\n        <md-input-container style='width:100%'>\n          <input disabled mdInput [mdDatepicker]=\"arr\" placeholder=\"Ankunft\" [(ngModel)]=\"data.Landing\" />\n          <button mdSuffix [mdDatepickerToggle]=\"arr\"></button>\n        </md-input-container>\n        <md-datepicker #arr></md-datepicker>\n      </div>\n      <div style=\"display: inline-block;\">\n        <md-select placeholder=\"Uhr\" [(ngModel)]=\"selectedHourLanding\">\n          <md-option *ngFor=\"let hh of hours\" [value]=\"hh\">\n            {{hh}}\n          </md-option>\n        </md-select>\n      </div>\n      :\n      <div style=\"display: inline-block\">\n        <md-select placeholder=\"Uhr\" style=\"width:100px\" [(ngModel)]=\"selectedMinutesLanding\">\n          <md-option *ngFor=\"let mm of minutes\" [value]=\"mm\">\n            {{mm}}\n          </md-option>\n        </md-select>\n      </div>\n    </div>\n    <h3>Teilnehmer</h3>\n    <table class=\"table table-striped\"> \n      <tr *ngFor=\"let entry of data.Entries let i = index\">\n        <td>\n          <md-select placeholder=\"Pilot\" [(ngModel)]=\"entry.PilotId\" style=\"margin-top: 14px; width:100%\">\n            <md-option *ngFor=\"let pilot of pilots\" [value]=\"pilot.Id\">\n              {{ pilot.Name }}\n            </md-option>\n          </md-select>\n        </td>\n        <td>\n           <md-select placeholder=\"Luftfahrzeug\" [(ngModel)]=\"entry.AircraftId\" style=\"margin-top: 14px; width:100%\">\n            <md-option *ngFor=\"let ac of aircrafts\" [value]=\"ac.Id\">\n              {{ ac.Name }}\n            </md-option>\n          </md-select>\n        </td>\n        <td style=\"width:100px;\">\n          <md-input-container style='width:100%'>\n            <input mdInput placeholder=\"Luftziele\" [(ngModel)]=\"entry.AirTargets\" />\n          </md-input-container>\n        </td>\n        <td style=\"width:100px;\">\n          <md-input-container style='width:100%'>\n            <input mdInput placeholder=\"Bodenziele\" [(ngModel)]=\"entry.GroundTargets\" />\n          </md-input-container>\n        </td>\n        <td style=\"width:100px;\">\n          <md-input-container style='width:100%'>\n            <input mdInput placeholder=\"Strategische Ziele\" [(ngModel)]=\"entry.StrategicTargets\" />\n          </md-input-container>\n        </td>\n        <td>\n          <a (click)=\"remove(i)\"><span class=\"glyphicon glyphicon-trash\"></span></a>\n        </td>\n      </tr>\n    </table>\n    <a (click)=\"addPilot()\"><span class=\"glyphicon glyphicon-pencil\"></span> Neuer Teilnehmer</a>\n    <br><br>\n    <button [style.paddingRight]=\"performingAction ? '45px' : ''\" [disabled]=\"performingAction\" class=\"btn btn-primary\" (click)=\"save()\">Speichern\n        <div [style.display]=\"performingAction ? 'block' : 'none'\" class=\"ball-scale-ripple-multiple\">\n            <div></div>\n            <div></div>\n            <div></div>\n          </div>\n    </button>\n    <button class=\"btn btn-danger\" (click)=\"cancel()\">Abbrechen</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = (function () {
    function EditComponent(route, dataService, router, dateAdapter) {
        this.route = route;
        this.dataService = dataService;
        this.router = router;
        this.dateAdapter = dateAdapter;
        this.data = {};
        this.pilots = [];
        this.aircrafts = [];
        this.hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.minutes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        this.performingAction = false;
        this.dateAdapter.setLocale('de');
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAircrafts().then(function (res) {
            _this.aircrafts = res;
        });
        this.dataService.getPilots().then(function (res) {
            _this.pilots = res;
        });
        this.route.paramMap.subscribe(function (s) {
            var id = +s.get('id');
            if (id != null && id != 0) {
                _this.dataService.getSingleLogbook(id).then(function (res) {
                    _this.data = res;
                    console.log(res);
                    _this.selectedHourDeparture = _this.data.Departure.getHours();
                    _this.selectedMinutesDeparture = _this.data.Departure.getMinutes();
                    _this.selectedHourLanding = _this.data.Landing.getHours();
                    _this.selectedMinutesLanding = _this.data.Landing.getMinutes();
                });
            }
            else {
                _this.data = {
                    Id: 0,
                    Entries: []
                };
                _this.addPilot();
            }
        });
    };
    EditComponent.prototype.Test = function () {
        console.log(this.data);
    };
    EditComponent.prototype.addPilot = function () {
        this.data.Entries.push({
            Id: 0,
            AirTargets: 0,
            GroundTargets: 0,
            StrategicTargets: 0
        });
    };
    EditComponent.prototype.remove = function (i) {
        this.data.Entries.splice(i, 1);
    };
    EditComponent.prototype.save = function () {
        var _this = this;
        this.performingAction = true;
        this.updateDatesWithTimes();
        if (this.data.Id == 0) {
            this.dataService.createLogbook(this.data).then(function () {
                _this.router.navigate(["/"]);
            }).catch(function (err) {
                console.error(err);
                alert("Fehler beim Speichern. Bitte erneut versuchen.");
            });
        }
        else {
            this.dataService.saveLogbook(this.data).then(function () {
                _this.router.navigate(["/"]);
            }).catch(function (err) {
                console.error(err);
                alert("Fehler beim Speichern. Bitte erneut versuchen.");
            });
        }
    };
    EditComponent.prototype.updateDatesWithTimes = function () {
        this.data.Departure.setHours(this.selectedHourDeparture);
        this.data.Departure.setMinutes(this.selectedMinutesDeparture);
        this.data.Landing.setHours(this.selectedHourLanding);
        this.data.Landing.setMinutes(this.selectedMinutesLanding);
    };
    EditComponent.prototype.cancel = function () {
        this.router.navigate(["/"]);
    };
    return EditComponent;
}());
EditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-edit',
        template: __webpack_require__("../../../../../src/app/edit/edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/edit/edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* DateAdapter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* DateAdapter */]) === "function" && _d || Object])
], EditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loadingContainer {\n    position: relative;\n    height: 480px;\n    width: 100%;\n}\n.loadingContainer > .ball-scale-ripple-multiple > div {\n    border-color: #777;\n}\n.loadingContainer > .ball-scale-ripple-multiple {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loadingContainer\" [style.display]=\"loading ? 'block': 'none'\">\n  <div class=\"ball-scale-ripple-multiple\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n<div [style.display]=\"loading ? 'none' : 'block'\">\n  <a routerLink=\"/create\"><span class=\"glyphicon glyphicon-plus\"></span> Neuer Bericht</a>\n  <table class=\"table table-striped\">\n      <tr>\n        <th>Einsatz-Nr.</th>\n        <th>Title</th>\n        <th>Einsatzdatum</th>\n        <th>Piloten</th>\n        <th></th>\n      </tr>\n    <tr *ngFor=\"let ops of pageData\">\n      <td>{{ops.Id}}</td>\n      <td>{{ops.Title}}</td>\n      <td>{{ops.Departure | date: 'dd.MM.yyyy'}}</td>\n      <td>\n        <ul style=\"list-style: none;\">\n          <li *ngFor=\"let p of ops.Entries\">{{p.PilotName}}</li>\n        </ul>\n      </td>\n      <td><a routerLink=\"/edit/{{ops.Id}}\"><span class=\"glyphicon glyphicon-pencil\"></span></a></td>\n    </tr>\n  </table>\n  <div style=\"text-align: center\">\n    <ul class=\"pagination\">\n      <li [class]=\"currentPage == 0 ? 'disabled' : ''\">\n        <a href=\"#\" (click)=\"prevPage()\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a>\n      </li>\n\n      <li [class]=\"index == currentPage ? 'active' : ''\" *ngFor=\"let p of pages(), let index = index\"><a style=\"cursor: pointer\" (click)=\"selectPage(index)\">{{index + 1}} <span class=\"sr-only\">(current)</span></a></li>\n      \n      <li [class]=\"currentPage + 1 == pageCount ? 'disabled' : ''\">\n        <a href=\"#\" (click)=\"nextPage()\" aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent(dataService) {
        this.dataService = dataService;
        this.data = [];
        this.pageData = [];
        this.perPage = 5;
        this.pageCount = 1;
        this.loading = true;
        this.displayedColumns = ["Id", "Title"];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getAllLogbooks().then(function (res) {
            _this.data = res;
            _this.loading = false;
            _this.pageCount = Math.ceil(res.length / _this.perPage);
            _this.currentPage = 0;
            _this.updatePage();
        });
    };
    MainComponent.prototype.pages = function () {
        return new Array(this.pageCount);
    };
    MainComponent.prototype.updatePage = function () {
        var start = this.currentPage * this.perPage;
        var end = start + this.perPage;
        this.pageData = this.data.slice(start, end);
    };
    MainComponent.prototype.selectPage = function (index) {
        this.currentPage = index;
        this.updatePage();
    };
    MainComponent.prototype.prevPage = function () {
        if (this.currentPage > 0) {
            this.currentPage--;
            this.updatePage();
        }
        return false;
    };
    MainComponent.prototype.nextPage = function () {
        if (this.currentPage + 1 < this.pageCount) {
            this.currentPage++;
            this.updatePage();
        }
        return false;
    };
    return MainComponent;
}());
MainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], MainComponent);

var _a;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map