"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.__esModule = true;
exports.DashboardComponent = void 0;
var core_1 = require("@angular/core");
var Chartist = require("chartist");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(myUser, myProduct, renting) {
        this.myUser = myUser;
        this.myProduct = myProduct;
        this.renting = renting;
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on("draw", function (data) {
            if (data.type === "line" || data.type === "area") {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path
                            .clone()
                            .scale(1, 0)
                            .translate(0, data.chartRect.height())
                            .stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === "point") {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: "ease"
                    }
                });
            }
        });
        seq = 0;
    };
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on("draw", function (data) {
            if (data.type === "bar") {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: "ease"
                    }
                });
            }
        });
        seq2 = 0;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.countUser();
        this.countProduct();
        this.pendingProd();
        this.AcceptedProd();
        var dataDailySalesChart = {
            labels: ["M", "T", "W", "T", "F", "S", "S"],
            series: [[12, 17, 7, 17, 23, 18, 38]]
        };
        var optionsDailySalesChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var dailySalesChart = new Chartist.Line("#dailySalesChart", dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ["12p", "3p", "6p", "9p", "12p", "3a", "6a", "9a"],
            series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new Chartist.Line("#completedTasksChart", dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var datawebsiteViewsChart = {
            labels: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
            series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        };
        var optionswebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            [
                "screen and (max-width: 640px)",
                {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                },
            ],
        ];
        var websiteViewsChart = new Chartist.Bar("#websiteViewsChart", datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
        this.startAnimationForBarChart(websiteViewsChart);
    };
    ////////////////////////////////
    DashboardComponent.prototype.countUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.myUser.getAllUser().subscribe(function (res) {
                            _this.userCount = Object.keys(res).length;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.countProduct = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.myProduct.AllProduct().subscribe(function (res) {
                            _this.productCount = Object.keys(res).length;
                        }, function (err) {
                            console.log(err);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.pendingProd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        products = [];
                        return [4 /*yield*/, this.myProduct.AllProduct().subscribe(function (res) {
                                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                                    var pro = res_1[_i];
                                    if (pro.status_adminstaration == "pending") {
                                        products.push(pro);
                                    }
                                }
                                //console.log(produc.length)
                                _this.pendingCount = products.length;
                            }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent.prototype.AcceptedProd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        products = [];
                        return [4 /*yield*/, this.myProduct.AllProduct().subscribe(function (res) {
                                for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                                    var pro = res_2[_i];
                                    if (pro.status_adminstaration == "accepted") {
                                        console.log("ok");
                                        products.push(pro);
                                    }
                                }
                                _this.approvedCount = products.length;
                            }, function (err) {
                                console.log(err);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: "app-dashboard",
            templateUrl: "./dashboard.component.html",
            styleUrls: ["./dashboard.component.css"]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
