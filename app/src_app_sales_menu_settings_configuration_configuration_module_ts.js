"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_settings_configuration_configuration_module_ts"],{

/***/ 53327:
/*!******************************************************************************!*\
  !*** ./src/app/sales/menu/settings/configuration/configuration.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationComponent": () => (/* binding */ ConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report/report.component */ 6938);
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency/currency.component */ 72562);
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/display.component */ 15910);






class ConfigurationComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfigurationComponent.ɵfac = function ConfigurationComponent_Factory(t) { return new (t || ConfigurationComponent)(); };
ConfigurationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ConfigurationComponent, selectors: [["app-configuration"]], decls: 12, vars: 0, consts: [["nz-row", "", 1, "row"], ["nz-col", "", "nzSpan", "12", 1, "bottom-right"], [1, "background"], ["nz-col", "", "nzSpan", "12", 1, "bottom-left"], ["nz-col", "", "nzSpan", "12", 1, "top-right"]], template: function ConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-report");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "app-currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, _report_report_component__WEBPACK_IMPORTED_MODULE_0__.ReportComponent, _currency_currency_component__WEBPACK_IMPORTED_MODULE_1__.CurrencyComponent, _display_display_component__WEBPACK_IMPORTED_MODULE_2__.DisplayComponent], styles: ["nz-layout[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bottom-right[_ngcontent-%COMP%] {\n  padding: 0px 8px 8px 0px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bottom-left[_ngcontent-%COMP%] {\n  padding: 0px 0px 8px 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .top-right[_ngcontent-%COMP%] {\n  padding: 8px 8px 0px 0px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .top-left[_ngcontent-%COMP%] {\n  padding: 8px 0px 0px 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  height: 100%;\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtBQUVSO0FBRFE7RUFDSSx3QkFBQTtBQUdaO0FBRFE7RUFDSSx3QkFBQTtBQUdaO0FBRFE7RUFDSSx3QkFBQTtBQUdaO0FBRFE7RUFDSSx3QkFBQTtBQUdaO0FBRFE7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUdaIiwiZmlsZSI6ImNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1sYXlvdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnJvdyB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgLmJvdHRvbS1yaWdodCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHggOHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvdHRvbS1sZWZ0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCA4cHggOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9wLXJpZ2h0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweCAwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9wLWxlZnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMHB4IDBweCA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 88777:
/*!***************************************************************************!*\
  !*** ./src/app/sales/menu/settings/configuration/configuration.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationModule": () => (/* binding */ ConfigurationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _configuration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration.component */ 53327);
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency/currency.component */ 72562);
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/display.component */ 15910);
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report/report.component */ 6938);
/* harmony import */ var _sales_sales_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales/sales.component */ 51445);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoices/invoices.component */ 92177);
/* harmony import */ var _sync_data_sync_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sync-data/sync-data.component */ 187);
/* harmony import */ var _led_price_led_price_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./led-price/led-price.component */ 99286);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/products.component */ 47435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);

















const routes = [
    {
        path: '',
        component: _configuration_component__WEBPACK_IMPORTED_MODULE_0__.ConfigurationComponent
    },
    {
        path: 'theme',
        component: _display_display_component__WEBPACK_IMPORTED_MODULE_2__.DisplayComponent
    },
    {
        path: 'sale-report',
        component: _report_report_component__WEBPACK_IMPORTED_MODULE_3__.ReportComponent
    },
    {
        path: 'invoices',
        component: _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_6__.InvoicesComponent
    },
    {
        path: 'sync-data',
        component: _sync_data_sync_data_component__WEBPACK_IMPORTED_MODULE_7__.SyncDataComponent
    },
    {
        path: 'led-price',
        component: _led_price_led_price_component__WEBPACK_IMPORTED_MODULE_8__.LedPriceComponent
    },
    {
        path: 'sales-program',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_settings_configuration_sales-program_sales-program_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./sales-program/sales-program.module */ 62691)).then(m => m.SalesProgramModule)
    },
    {
        path: 'products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_9__.ProductsComponent
    },
];
class ConfigurationModule {
}
ConfigurationModule.ɵfac = function ConfigurationModule_Factory(t) { return new (t || ConfigurationModule)(); };
ConfigurationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ConfigurationModule });
ConfigurationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_5__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ConfigurationModule, { declarations: [_configuration_component__WEBPACK_IMPORTED_MODULE_0__.ConfigurationComponent,
        _currency_currency_component__WEBPACK_IMPORTED_MODULE_1__.CurrencyComponent,
        _display_display_component__WEBPACK_IMPORTED_MODULE_2__.DisplayComponent, _report_report_component__WEBPACK_IMPORTED_MODULE_3__.ReportComponent, _sales_sales_component__WEBPACK_IMPORTED_MODULE_4__.SalesComponent, _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_6__.InvoicesComponent, _sync_data_sync_data_component__WEBPACK_IMPORTED_MODULE_7__.SyncDataComponent, _led_price_led_price_component__WEBPACK_IMPORTED_MODULE_8__.LedPriceComponent, _products_products_component__WEBPACK_IMPORTED_MODULE_9__.ProductsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_5__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 72562:
/*!**********************************************************************************!*\
  !*** ./src/app/sales/menu/settings/configuration/currency/currency.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyComponent": () => (/* binding */ CurrencyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function CurrencyComponent_nz_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzLabel", item_r4.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r4.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.text, " ");
} }
function CurrencyComponent_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzLabel", item_r5.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r5.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.text, " ");
} }
function CurrencyComponent_nz_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 9);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzLabel", item_r6.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r6.text);
} }
function CurrencyComponent_nz_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzLabel", item_r7.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r7.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r7.text, " ");
} }
class CurrencyComponent {
    constructor() {
        this.position = [
            { text: 'VND' + ' 1', value: 0 },
            { text: '1 ' + 'VND', value: 1 },
            { text: '1', value: 2 }
        ];
        this.digitDecimal = [
            { text: '0', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 }
        ];
        this.digitGroup = [
            { text: '123456', value: 0 },
            { text: '123,456', value: 1 },
            { text: '12,3456', value: 2 },
            { text: '12,34,56', value: 3 }
        ];
        this.symbols = [
            { text: "AED", value: 0 }, { text: "AED(د.إ)", value: 1 }, { text: "AFN", value: 2 }, { text: "AFN(؋)", value: 3 }, { text: "ALL", value: 4 }, { text: "ALL(L)", value: 5 }, { text: "AMD", value: 6 }, { text: "AMD(֏)", value: 7 }, { text: "AMD", value: 8 }, { text: "AMD(դր)", value: 9 }, { text: "ANG", value: 10 },
            { text: "ANG(ƒ)", value: 11 }, { text: "AOA", value: 12 }, { text: "AOA(Kz)", value: 13 }, { text: "ARS", value: 14 }, { text: "ARS($)", value: 15 }, { text: "AUD", value: 16 }, { text: "AUD($)", value: 17 }, { text: "AWG", value: 18 }, { text: "AWG(ƒ)", value: 19 }, { text: "BAM", value: 20 },
            { text: "BAM(KM)", value: 21 }, { text: "BBD", value: 22 }, { text: "BBD($)", value: 23 }, { text: "BDT", value: 24 }, { text: "BDT(৳)", value: 25 }, { text: "BGN", value: 26 }, { text: "BGN(лв)", value: 27 }, { text: "BHD", value: 28 }, { text: "BHD(.ب)", value: 29 }, { text: "BIF", value: 30 },
            { text: "BIF(Fr)", value: 31 }, { text: "BMD", value: 32 }, { text: "BMD($)", value: 33 }, { text: "BND", value: 34 }, { text: "BND($)", value: 35 }, { text: "BOB", value: 36 }, { text: "BOB(Bs.)", value: 37 }, { text: "BRL", value: 38 }, { text: "BRL(R$)", value: 39 }, { text: "BSD", value: 40 },
            { text: "BSD($)", value: 41 }, { text: "BTN", value: 42 }, { text: "BTN(Nu.)", value: 43 }, { text: "BWP", value: 44 }, { text: "BWP(P)", value: 45 }, { text: "BYR", value: 46 }, { text: "BYR(Br)", value: 47 }, { text: "BZD", value: 48 }, { text: "BZD($)", value: 49 }, { text: "CAD", value: 50 },
            { text: "CAD($)", value: 51 }, { text: "CDF", value: 52 }, { text: "CDF(Fr)", value: 53 }, { text: "CHF", value: 54 }, { text: "CHF(Fr)", value: 55 }, { text: "CLP", value: 56 }, { text: "CLP($)", value: 57 }, { text: "CNY", value: 58 }, { text: "CNY(¥ )", value: 59 }, { text: "CNY", value: 60 },
            { text: "CNY(元)", value: 61 }, { text: "COP", value: 62 }, { text: "COP($)", value: 63 }, { text: "CRC", value: 64 }, { text: "CRC(₡)", value: 65 }, { text: "CUC", value: 66 }, { text: "CUC($)", value: 67 }, { text: "CUP", value: 68 }, { text: "CUP($)", value: 69 }, { text: "CVE", value: 70 },
            { text: "CVE($)", value: 71 }, { text: "CZK", value: 72 }, { text: "CZK(Kč)", value: 73 }, { text: "DJF", value: 74 }, { text: "DJF(Fr)", value: 75 }, { text: "DKK", value: 76 }, { text: "DKK(kr)", value: 77 }, { text: "DOP", value: 78 }, { text: "DOP($)", value: 79 }, { text: "DZD", value: 80 },
            { text: "DZD(د.ج)", value: 81 }, { text: "EGP", value: 82 }, { text: "EGP(£)", value: 83 }, { text: "EGP", value: 84 }, { text: "EGP(ج.م)", value: 85 }, { text: "ERN", value: 86 }, { text: "ERN(Nfk)", value: 87 }, { text: "ETB", value: 88 }, { text: "ETB(Br)", value: 89 }, { text: "EUR", value: 90 },
            { text: "EUR(€)", value: 91 }, { text: "FJD", value: 92 }, { text: "FJD($)", value: 93 }, { text: "FKP", value: 94 }, { text: "FKP(£)", value: 95 }, { text: "GBP", value: 96 }, { text: "GBP(£)", value: 97 }, { text: "GEL", value: 98 }, { text: "GEL(ლ)", value: 99 }, { text: "GHS", value: 100 },
            { text: "GHS(₵)", value: 101 }, { text: "GIP", value: 102 }, { text: "GIP(£)", value: 103 }, { text: "GMD", value: 104 }, { text: "GMD(D)", value: 105 }, { text: "GNF", value: 106 }, { text: "GNF(Fr)", value: 107 }, { text: "GTQ", value: 108 }, { text: "GTQ(Q)", value: 109 }, { text: "GYD", value: 110 },
            { text: "GYD($)", value: 111 }, { text: "HKD", value: 112 }, { text: "HKD($)", value: 113 }, { text: "HNL", value: 114 }, { text: "HNL(L)", value: 115 }, { text: "HRK", value: 116 }, { text: "HRK(kn)", value: 117 }, { text: "HTG", value: 118 }, { text: "HTG(G)", value: 119 }, { text: "HUF", value: 120 },
            { text: "HUF(Ft)", value: 121 }, { text: "IDR", value: 122 }, { text: "IDR(Rp)", value: 123 }, { text: "ILS", value: 124 }, { text: "ILS(₪)", value: 125 }, { text: "INR", value: 126 }, { text: "INR(₹)", value: 127 }, { text: "IQD", value: 128 }, { text: "IQD(ع.د)", value: 129 }, { text: "IRR", value: 130 },
            { text: "IRR(﷼)", value: 131 }, { text: "ISK", value: 132 }, { text: "ISK(kr)", value: 133 }, { text: "JMD", value: 134 }, { text: "JMD($)", value: 135 }, { text: "JOD", value: 136 }, { text: "JOD(د.ا)", value: 137 }, { text: "JPY", value: 138 }, { text: "JPY(¥)", value: 139 }, { text: "KES", value: 140 },
            { text: "KES(Sh)", value: 141 }, { text: "KGS", value: 142 }, { text: "KGS(лв)", value: 143 }, { text: "KHR", value: 144 }, { text: "KHR(៛)", value: 145 }, { text: "KMF", value: 146 }, { text: "KMF(Fr)", value: 147 }, { text: "KRW", value: 148 }, { text: "KRW(₩)", value: 149 }, { text: "KWD", value: 150 },
            { text: "KWD(د.ك)", value: 151 }, { text: "KYD", value: 152 }, { text: "KYD($)", value: 153 }, { text: "KZT", value: 154 }, { text: "KZT(₸)", value: 155 }, { text: "LAK", value: 156 }, { text: "LAK(₭)", value: 157 }, { text: "LBP", value: 158 }, { text: "LBP(ل.ل)", value: 159 }, { text: "LKR", value: 160 },
            { text: "LKR(Rs)", value: 161 }, { text: "LRD", value: 162 }, { text: "LRD($)", value: 163 }, { text: "LSL", value: 164 }, { text: "LSL(L)", value: 165 }, { text: "LYD", value: 166 }, { text: "LYD(ل.د)", value: 167 }, { text: "MAD", value: 168 }, { text: "MAD(د. م.)", value: 169 }, { text: "MDL", value: 170 },
            { text: "MDL(L)", value: 171 }, { text: "MGA", value: 172 }, { text: "MGA(Ar)", value: 173 }, { text: "MKD", value: 174 }, { text: "MKD(ден)", value: 175 }, { text: "MMK", value: 176 }, { text: "MMK(Ks)", value: 177 }, { text: "MNT", value: 178 }, { text: "MNT(₮)", value: 179 }, { text: "MOP", value: 180 },
            { text: "MOP(P)", value: 181 }, { text: "MRO", value: 182 }, { text: "MRO(UM)", value: 183 }, { text: "MUR", value: 184 }, { text: "MUR(₨)", value: 185 }, { text: "MVR", value: 186 }, { text: "MVR(.ރ)", value: 187 }, { text: "MWK", value: 188 }, { text: "MWK(MK)", value: 189 }, { text: "MXN", value: 190 },
            { text: "MXN($)", value: 191 }, { text: "MYR", value: 192 }, { text: "MYR(RM)", value: 193 }, { text: "MZN", value: 194 }, { text: "MZN(MT)", value: 195 }, { text: "NAD", value: 196 }, { text: "NAD($)", value: 197 }, { text: "NGN", value: 198 }, { text: "NGN(₦)", value: 199 }, { text: "NIO", value: 200 },
            { text: "NIO(C$)", value: 201 }, { text: "NOK", value: 202 }, { text: "NOK(kr)", value: 203 }, { text: "NPR", value: 204 }, { text: "NPR(₨)", value: 205 }, { text: "NZD", value: 206 }, { text: "NZD($)", value: 207 }, { text: "OMR", value: 208 }, { text: "OMR(ر.ع.)", value: 209 }, { text: "PAB", value: 210 },
            { text: "PAB(B/.)", value: 211 }, { text: "PEN", value: 212 }, { text: "PEN(S/.)", value: 213 }, { text: "PGK", value: 214 }, { text: "PGK(K)", value: 215 }, { text: "PHP", value: 216 }, { text: "PHP(₱)", value: 217 }, { text: "PKR", value: 218 }, { text: "PKR(₨)", value: 219 }, { text: "PLN", value: 220 },
            { text: "PLN(zł)", value: 221 }, { text: "PYG", value: 222 }, { text: "PYG(₲)", value: 223 }, { text: "QAR", value: 224 }, { text: "QAR(ر.ق)", value: 225 }, { text: "RON", value: 226 }, { text: "RON(L)", value: 227 }, { text: "RSD", value: 228 }, { text: "RSD(дин)", value: 229 }, { text: "RSD", value: 230 },
            { text: "RSD(din.)", value: 231 }, { text: "RUB", value: 232 }, { text: "RUB(р.)", value: 233 }, { text: "RUB", value: 234 }, { text: "RUB(руб.)", value: 235 }, { text: "RWF", value: 236 }, { text: "RWF(Fr)", value: 237 }, { text: "SAR", value: 238 }, { text: "SAR(ر.س)", value: 239 }, { text: "SBD", value: 240 },
            { text: "SBD($)", value: 241 }, { text: "SCR", value: 242 }, { text: "SCR(₨)", value: 243 }, { text: "SDG", value: 244 }, { text: "SDG(£)", value: 245 }, { text: "SEK", value: 246 }, { text: "SEK(kr)", value: 247 }, { text: "SGD", value: 248 }, { text: "SGD($)", value: 249 }, { text: "SHP", value: 250 },
            { text: "SHP(£)", value: 251 }, { text: "SLL", value: 252 }, { text: "SLL(Le)", value: 253 }, { text: "SOS", value: 254 }, { text: "SOS(Sh)", value: 255 }, { text: "SRD", value: 256 }, { text: "SRD($)", value: 257 }, { text: "SSP", value: 258 }, { text: "SSP(£)", value: 259 }, { text: "STD", value: 260 },
            { text: "STD(Db)", value: 261 }, { text: "SVC", value: 262 }, { text: "SVC(₡)", value: 263 }, { text: "SYP", value: 264 }, { text: "SYP(£)", value: 265 }, { text: "SYP", value: 266 }, { text: "SYP(ل.س)", value: 267 }, { text: "SZL", value: 268 }, { text: "SZL(L)", value: 269 }, { text: "TJS", value: 270 },
            { text: "TJS(ЅМ)", value: 271 }, { text: "TMT", value: 272 }, { text: "TMT", value: 273 }, { text: "TND(m)", value: 27 }, { text: "TOP", value: 275 }, { text: "TOP(T$)", value: 276 }, { text: "TTD", value: 277 }, { text: "TTD($)", value: 278 }, { text: "TWD", value: 279 }, { text: "TWD($)", value: 280 },
            { text: "TZS", value: 281 }, { text: "TZS(Sh)", value: 282 }, { text: "UAH", value: 283 }, { text: "UAH(₴)", value: 284 }, { text: "UGX", value: 285 }, { text: "UGX(Sh)", value: 286 }, { text: "USD", value: 287 }, { text: "USD($)", value: 288 }, { text: "UYU", value: 289 }, { text: "UYU($)", value: 290 },
            { text: "UZS", value: 291 }, { text: "UZS(лв)", value: 292 }, { text: "VEF", value: 293 }, { text: "VEF(BsF)", value: 294 }, { text: "VND", value: 295 }, { text: "VND(đ)", value: 296 }, { text: "VUV", value: 297 }, { text: "VUV(Vt)", value: 298 }, { text: "WST", value: 299 }, { text: "WST(T)", value: 300 },
            { text: "XAF", value: 301 }, { text: "XAF(Fr)", value: 302 }, { text: "XCD", value: 303 }, { text: "XCD($)", value: 304 }, { text: "XOF", value: 305 }, { text: "XOF(Fr)", value: 306 }, { text: "XPF", value: 307 }, { text: "XPF(Fr)", value: 308 }, { text: "YER", value: 309 }, { text: "YER(﷼)", value: 310 },
            { text: "ZAR", value: 311 }, { text: "ZAR(R)", value: 312 }, { text: "ZMW", value: 313 }, { text: "ZMW(ZK)", value: 314 }, { text: "ZWL", value: 315 }, { text: "ZWL($)", value: 316 }
        ];
        this.currencyFormat = {
            symbol: this.symbols[294],
            position: this.position[1],
            digitDecimal: this.digitDecimal[0],
            digitGroup: this.digitGroup[1]
        };
        let val = JSON.parse(localStorage.getItem('vhsales_currencyFormat'));
        if (val) {
            this.currencyFormat = val;
        }
        else
            localStorage.setItem("vhsales_currencyFormat", JSON.stringify(this.currencyFormat));
        this.initPosition(this.currencyFormat['position']['text']);
    }
    setSymbol(symbol) {
        this.currencyFormat['symbol'] = { text: symbol, value: this.symbols.filter(item => item.text === symbol)[0].value };
        this.initPosition(symbol);
        this.currencyFormat['position'] = { text: this.position[this.currencyFormat['position']['value']]['text'], value: this.currencyFormat['position']['value'] };
        localStorage.setItem("vhsales_currencyFormat", JSON.stringify(this.currencyFormat));
    }
    openSelect(options, text) {
        let arrVal = options.map((item) => { return { text: item.text, value: item.value }; });
        this.currencyFormat['position'] = { text: text, value: arrVal.filter(item => item.text === text)[0].value };
        localStorage.setItem("vhsales_currencyFormat", JSON.stringify(this.currencyFormat));
    }
    initPosition(symbol) {
        let regex = /\(([^)]+)\)/;
        let result = regex.exec(this.currencyFormat['symbol']['text']); // lấy các giá trị trong ()
        if (result)
            symbol = result[1];
        else
            symbol = this.currencyFormat['symbol']['text'];
        this.position = [{ text: symbol + ' 1', value: 0 }, { text: '1 ' + symbol, value: 1 }, { text: '1', value: 2 }];
    }
    openDecimal(value) {
        this.currencyFormat['digitDecimal'] = { text: value, value: this.digitDecimal.filter(item => item.text === value)[0].value };
        localStorage.setItem("vhsales_currencyFormat", JSON.stringify(this.currencyFormat));
    }
    openGroup(value) {
        this.currencyFormat['digitGroup'] = { text: value, value: this.digitGroup.filter(item => item.text === value)[0].value };
        localStorage.setItem("vhsales_currencyFormat", JSON.stringify(this.currencyFormat));
    }
}
CurrencyComponent.ɵfac = function CurrencyComponent_Factory(t) { return new (t || CurrencyComponent)(); };
CurrencyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencyComponent, selectors: [["app-currency"]], decls: 34, vars: 23, consts: [[1, "title"], ["nzSize", "default"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12"], [1, "sub-title"], [1, "no-border"], ["nzShowSearch", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel"]], template: function CurrencyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CurrencyComponent_Template_nz_select_ngModelChange_10_listener($event) { return (ctx.currencyFormat["symbol"]["text"] = $event); })("ngModelChange", function CurrencyComponent_Template_nz_select_ngModelChange_10_listener($event) { return ctx.setSymbol($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CurrencyComponent_nz_option_11_Template, 2, 3, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CurrencyComponent_Template_nz_select_ngModelChange_17_listener($event) { return (ctx.currencyFormat["position"]["text"] = $event); })("ngModelChange", function CurrencyComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.openSelect(ctx.position, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CurrencyComponent_nz_option_18_Template, 2, 3, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CurrencyComponent_Template_nz_select_ngModelChange_25_listener($event) { return (ctx.currencyFormat["digitDecimal"]["text"] = $event); })("ngModelChange", function CurrencyComponent_Template_nz_select_ngModelChange_25_listener($event) { return ctx.openDecimal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CurrencyComponent_nz_option_26_Template, 1, 2, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-list-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CurrencyComponent_Template_nz_select_ngModelChange_32_listener($event) { return (ctx.currencyFormat["digitGroup"]["text"] = $event); })("ngModelChange", function CurrencyComponent_Template_nz_select_ngModelChange_32_listener($event) { return ctx.openGroup($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CurrencyComponent_nz_option_33_Template, 2, 3, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 13, "Currency format"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 15, "Currency symbol"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currencyFormat["symbol"]["text"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.symbols);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, "Positive currency format"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currencyFormat["position"]["text"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.position);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 19, "No. of digits after decimal"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currencyFormat["digitDecimal"]["text"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.digitDecimal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 21, "Digit grouping"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currencyFormat["digitGroup"]["text"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.digitGroup);
    } }, directives: [ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_1__.NzListItemComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".no-border[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\nnz-select[_ngcontent-%COMP%] {\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbmN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7QUFHSjs7QUFEQTtFQUNJLFVBQUE7QUFJSiIsImZpbGUiOiJjdXJyZW5jeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxubnotc2VsZWN0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 15910:
/*!********************************************************************************!*\
  !*** ./src/app/sales/menu/settings/configuration/display/display.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayComponent": () => (/* binding */ DisplayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../services/language.service */ 26825);
/* harmony import */ var src_app_sales_services_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/theme.service */ 68125);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../currency/currency.component */ 72562);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);












function DisplayComponent_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", item_r2)("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 2, item_r2));
} }
function DisplayComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DisplayComponent_div_25_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const color_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.themeService.changeColor(color_r3.theme, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", color_r3.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", color_r3.theme);
} }
class DisplayComponent {
    constructor(vhAuth, languageService, themeService) {
        this.vhAuth = vhAuth;
        this.languageService = languageService;
        this.themeService = themeService;
        this.size = [12, 13, 14, 15, 16, 17, 18, 19, 20];
        this.interface = [
            { id: 'overview', name: this.languageService.translate("Overviews") },
            { id: 'pos', name: this.languageService.translate("Sales pos") }
        ];
        this.position = [
            { text: 'VND' + ' 1', value: 0 },
            { text: '1 ' + 'VND', value: 1 },
            { text: '1', value: 2 }
        ];
        this.digitDecimal = [
            { text: '0', value: 0 },
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 }
        ];
        this.digitGroup = [
            { text: '123456', value: 0 },
            { text: '123,456', value: 1 },
            { text: '12,3456', value: 2 },
            { text: '12,34,56', value: 3 }
        ];
        this.symbols = [
            { text: "AED", value: 0 }, { text: "AED(د.إ)", value: 1 }, { text: "AFN", value: 2 }, { text: "AFN(؋)", value: 3 }, { text: "ALL", value: 4 }, { text: "ALL(L)", value: 5 }, { text: "AMD", value: 6 }, { text: "AMD(֏)", value: 7 }, { text: "AMD", value: 8 }, { text: "AMD(դր)", value: 9 }, { text: "ANG", value: 10 },
            { text: "ANG(ƒ)", value: 11 }, { text: "AOA", value: 12 }, { text: "AOA(Kz)", value: 13 }, { text: "ARS", value: 14 }, { text: "ARS($)", value: 15 }, { text: "AUD", value: 16 }, { text: "AUD($)", value: 17 }, { text: "AWG", value: 18 }, { text: "AWG(ƒ)", value: 19 }, { text: "BAM", value: 20 },
            { text: "BAM(KM)", value: 21 }, { text: "BBD", value: 22 }, { text: "BBD($)", value: 23 }, { text: "BDT", value: 24 }, { text: "BDT(৳)", value: 25 }, { text: "BGN", value: 26 }, { text: "BGN(лв)", value: 27 }, { text: "BHD", value: 28 }, { text: "BHD(.ب)", value: 29 }, { text: "BIF", value: 30 },
            { text: "BIF(Fr)", value: 31 }, { text: "BMD", value: 32 }, { text: "BMD($)", value: 33 }, { text: "BND", value: 34 }, { text: "BND($)", value: 35 }, { text: "BOB", value: 36 }, { text: "BOB(Bs.)", value: 37 }, { text: "BRL", value: 38 }, { text: "BRL(R$)", value: 39 }, { text: "BSD", value: 40 },
            { text: "BSD($)", value: 41 }, { text: "BTN", value: 42 }, { text: "BTN(Nu.)", value: 43 }, { text: "BWP", value: 44 }, { text: "BWP(P)", value: 45 }, { text: "BYR", value: 46 }, { text: "BYR(Br)", value: 47 }, { text: "BZD", value: 48 }, { text: "BZD($)", value: 49 }, { text: "CAD", value: 50 },
            { text: "CAD($)", value: 51 }, { text: "CDF", value: 52 }, { text: "CDF(Fr)", value: 53 }, { text: "CHF", value: 54 }, { text: "CHF(Fr)", value: 55 }, { text: "CLP", value: 56 }, { text: "CLP($)", value: 57 }, { text: "CNY", value: 58 }, { text: "CNY(¥ )", value: 59 }, { text: "CNY", value: 60 },
            { text: "CNY(元)", value: 61 }, { text: "COP", value: 62 }, { text: "COP($)", value: 63 }, { text: "CRC", value: 64 }, { text: "CRC(₡)", value: 65 }, { text: "CUC", value: 66 }, { text: "CUC($)", value: 67 }, { text: "CUP", value: 68 }, { text: "CUP($)", value: 69 }, { text: "CVE", value: 70 },
            { text: "CVE($)", value: 71 }, { text: "CZK", value: 72 }, { text: "CZK(Kč)", value: 73 }, { text: "DJF", value: 74 }, { text: "DJF(Fr)", value: 75 }, { text: "DKK", value: 76 }, { text: "DKK(kr)", value: 77 }, { text: "DOP", value: 78 }, { text: "DOP($)", value: 79 }, { text: "DZD", value: 80 },
            { text: "DZD(د.ج)", value: 81 }, { text: "EGP", value: 82 }, { text: "EGP(£)", value: 83 }, { text: "EGP", value: 84 }, { text: "EGP(ج.م)", value: 85 }, { text: "ERN", value: 86 }, { text: "ERN(Nfk)", value: 87 }, { text: "ETB", value: 88 }, { text: "ETB(Br)", value: 89 }, { text: "EUR", value: 90 },
            { text: "EUR(€)", value: 91 }, { text: "FJD", value: 92 }, { text: "FJD($)", value: 93 }, { text: "FKP", value: 94 }, { text: "FKP(£)", value: 95 }, { text: "GBP", value: 96 }, { text: "GBP(£)", value: 97 }, { text: "GEL", value: 98 }, { text: "GEL(ლ)", value: 99 }, { text: "GHS", value: 100 },
            { text: "GHS(₵)", value: 101 }, { text: "GIP", value: 102 }, { text: "GIP(£)", value: 103 }, { text: "GMD", value: 104 }, { text: "GMD(D)", value: 105 }, { text: "GNF", value: 106 }, { text: "GNF(Fr)", value: 107 }, { text: "GTQ", value: 108 }, { text: "GTQ(Q)", value: 109 }, { text: "GYD", value: 110 },
            { text: "GYD($)", value: 111 }, { text: "HKD", value: 112 }, { text: "HKD($)", value: 113 }, { text: "HNL", value: 114 }, { text: "HNL(L)", value: 115 }, { text: "HRK", value: 116 }, { text: "HRK(kn)", value: 117 }, { text: "HTG", value: 118 }, { text: "HTG(G)", value: 119 }, { text: "HUF", value: 120 },
            { text: "HUF(Ft)", value: 121 }, { text: "IDR", value: 122 }, { text: "IDR(Rp)", value: 123 }, { text: "ILS", value: 124 }, { text: "ILS(₪)", value: 125 }, { text: "INR", value: 126 }, { text: "INR(₹)", value: 127 }, { text: "IQD", value: 128 }, { text: "IQD(ع.د)", value: 129 }, { text: "IRR", value: 130 },
            { text: "IRR(﷼)", value: 131 }, { text: "ISK", value: 132 }, { text: "ISK(kr)", value: 133 }, { text: "JMD", value: 134 }, { text: "JMD($)", value: 135 }, { text: "JOD", value: 136 }, { text: "JOD(د.ا)", value: 137 }, { text: "JPY", value: 138 }, { text: "JPY(¥)", value: 139 }, { text: "KES", value: 140 },
            { text: "KES(Sh)", value: 141 }, { text: "KGS", value: 142 }, { text: "KGS(лв)", value: 143 }, { text: "KHR", value: 144 }, { text: "KHR(៛)", value: 145 }, { text: "KMF", value: 146 }, { text: "KMF(Fr)", value: 147 }, { text: "KRW", value: 148 }, { text: "KRW(₩)", value: 149 }, { text: "KWD", value: 150 },
            { text: "KWD(د.ك)", value: 151 }, { text: "KYD", value: 152 }, { text: "KYD($)", value: 153 }, { text: "KZT", value: 154 }, { text: "KZT(₸)", value: 155 }, { text: "LAK", value: 156 }, { text: "LAK(₭)", value: 157 }, { text: "LBP", value: 158 }, { text: "LBP(ل.ل)", value: 159 }, { text: "LKR", value: 160 },
            { text: "LKR(Rs)", value: 161 }, { text: "LRD", value: 162 }, { text: "LRD($)", value: 163 }, { text: "LSL", value: 164 }, { text: "LSL(L)", value: 165 }, { text: "LYD", value: 166 }, { text: "LYD(ل.د)", value: 167 }, { text: "MAD", value: 168 }, { text: "MAD(د. م.)", value: 169 }, { text: "MDL", value: 170 },
            { text: "MDL(L)", value: 171 }, { text: "MGA", value: 172 }, { text: "MGA(Ar)", value: 173 }, { text: "MKD", value: 174 }, { text: "MKD(ден)", value: 175 }, { text: "MMK", value: 176 }, { text: "MMK(Ks)", value: 177 }, { text: "MNT", value: 178 }, { text: "MNT(₮)", value: 179 }, { text: "MOP", value: 180 },
            { text: "MOP(P)", value: 181 }, { text: "MRO", value: 182 }, { text: "MRO(UM)", value: 183 }, { text: "MUR", value: 184 }, { text: "MUR(₨)", value: 185 }, { text: "MVR", value: 186 }, { text: "MVR(.ރ)", value: 187 }, { text: "MWK", value: 188 }, { text: "MWK(MK)", value: 189 }, { text: "MXN", value: 190 },
            { text: "MXN($)", value: 191 }, { text: "MYR", value: 192 }, { text: "MYR(RM)", value: 193 }, { text: "MZN", value: 194 }, { text: "MZN(MT)", value: 195 }, { text: "NAD", value: 196 }, { text: "NAD($)", value: 197 }, { text: "NGN", value: 198 }, { text: "NGN(₦)", value: 199 }, { text: "NIO", value: 200 },
            { text: "NIO(C$)", value: 201 }, { text: "NOK", value: 202 }, { text: "NOK(kr)", value: 203 }, { text: "NPR", value: 204 }, { text: "NPR(₨)", value: 205 }, { text: "NZD", value: 206 }, { text: "NZD($)", value: 207 }, { text: "OMR", value: 208 }, { text: "OMR(ر.ع.)", value: 209 }, { text: "PAB", value: 210 },
            { text: "PAB(B/.)", value: 211 }, { text: "PEN", value: 212 }, { text: "PEN(S/.)", value: 213 }, { text: "PGK", value: 214 }, { text: "PGK(K)", value: 215 }, { text: "PHP", value: 216 }, { text: "PHP(₱)", value: 217 }, { text: "PKR", value: 218 }, { text: "PKR(₨)", value: 219 }, { text: "PLN", value: 220 },
            { text: "PLN(zł)", value: 221 }, { text: "PYG", value: 222 }, { text: "PYG(₲)", value: 223 }, { text: "QAR", value: 224 }, { text: "QAR(ر.ق)", value: 225 }, { text: "RON", value: 226 }, { text: "RON(L)", value: 227 }, { text: "RSD", value: 228 }, { text: "RSD(дин)", value: 229 }, { text: "RSD", value: 230 },
            { text: "RSD(din.)", value: 231 }, { text: "RUB", value: 232 }, { text: "RUB(р.)", value: 233 }, { text: "RUB", value: 234 }, { text: "RUB(руб.)", value: 235 }, { text: "RWF", value: 236 }, { text: "RWF(Fr)", value: 237 }, { text: "SAR", value: 238 }, { text: "SAR(ر.س)", value: 239 }, { text: "SBD", value: 240 },
            { text: "SBD($)", value: 241 }, { text: "SCR", value: 242 }, { text: "SCR(₨)", value: 243 }, { text: "SDG", value: 244 }, { text: "SDG(£)", value: 245 }, { text: "SEK", value: 246 }, { text: "SEK(kr)", value: 247 }, { text: "SGD", value: 248 }, { text: "SGD($)", value: 249 }, { text: "SHP", value: 250 },
            { text: "SHP(£)", value: 251 }, { text: "SLL", value: 252 }, { text: "SLL(Le)", value: 253 }, { text: "SOS", value: 254 }, { text: "SOS(Sh)", value: 255 }, { text: "SRD", value: 256 }, { text: "SRD($)", value: 257 }, { text: "SSP", value: 258 }, { text: "SSP(£)", value: 259 }, { text: "STD", value: 260 },
            { text: "STD(Db)", value: 261 }, { text: "SVC", value: 262 }, { text: "SVC(₡)", value: 263 }, { text: "SYP", value: 264 }, { text: "SYP(£)", value: 265 }, { text: "SYP", value: 266 }, { text: "SYP(ل.س)", value: 267 }, { text: "SZL", value: 268 }, { text: "SZL(L)", value: 269 }, { text: "TJS", value: 270 },
            { text: "TJS(ЅМ)", value: 271 }, { text: "TMT", value: 272 }, { text: "TMT", value: 273 }, { text: "TND(m)", value: 27 }, { text: "TOP", value: 275 }, { text: "TOP(T$)", value: 276 }, { text: "TTD", value: 277 }, { text: "TTD($)", value: 278 }, { text: "TWD", value: 279 }, { text: "TWD($)", value: 280 },
            { text: "TZS", value: 281 }, { text: "TZS(Sh)", value: 282 }, { text: "UAH", value: 283 }, { text: "UAH(₴)", value: 284 }, { text: "UGX", value: 285 }, { text: "UGX(Sh)", value: 286 }, { text: "USD", value: 287 }, { text: "USD($)", value: 288 }, { text: "UYU", value: 289 }, { text: "UYU($)", value: 290 },
            { text: "UZS", value: 291 }, { text: "UZS(лв)", value: 292 }, { text: "VEF", value: 293 }, { text: "VEF(BsF)", value: 294 }, { text: "VND", value: 295 }, { text: "VND(đ)", value: 296 }, { text: "VUV", value: 297 }, { text: "VUV(Vt)", value: 298 }, { text: "WST", value: 299 }, { text: "WST(T)", value: 300 },
            { text: "XAF", value: 301 }, { text: "XAF(Fr)", value: 302 }, { text: "XCD", value: 303 }, { text: "XCD($)", value: 304 }, { text: "XOF", value: 305 }, { text: "XOF(Fr)", value: 306 }, { text: "XPF", value: 307 }, { text: "XPF(Fr)", value: 308 }, { text: "YER", value: 309 }, { text: "YER(﷼)", value: 310 },
            { text: "ZAR", value: 311 }, { text: "ZAR(R)", value: 312 }, { text: "ZMW", value: 313 }, { text: "ZMW(ZK)", value: 314 }, { text: "ZWL", value: 315 }, { text: "ZWL($)", value: 316 }
        ];
        this.currencyFormat = {
            symbol: this.symbols[294],
            position: this.position[1],
            digitDecimal: this.digitDecimal[0],
            digitGroup: this.digitGroup[1]
        };
        /////////////------------------------FONT_SIZE---------------------------//////////////
        this.fontSize = parseFloat(localStorage.getItem("vh-sales-system-fontsize"));
        /////////////------------------------LOGIN INTERFACE---------------------------//////////////
        this.startInterface = localStorage.getItem("vh-sales-system-start-interface");
    }
    ngOnInit() {
        //this.vhAuth.changeThemeIcon();
        let val = JSON.parse(localStorage.getItem('vhsales_currencyFormat'));
        if (val) {
            this.currencyFormat = val;
        }
        else
            localStorage.setItem("vhsales_currencyFormat", JSON.stringify(this.currencyFormat));
        this.initPosition(this.currencyFormat['position']['text']);
    }
    ngAfterViewInit(event) {
        console.log(this.vhAuth.getThemeValue());
        if (this.vhAuth.getThemeValue())
            this.vhAuth.changeThemeIcon();
    }
    /////////////------------------------CURRENCY---------------------------//////////////
    setSymbol(symbol) {
        this.currencyFormat['symbol'] = { text: symbol, value: this.symbols.filter(item => item.text === symbol)[0].value };
        this.initPosition(symbol);
        this.currencyFormat['position'] = { text: this.position[this.currencyFormat['position']['value']]['text'], value: this.currencyFormat['position']['value'] };
        localStorage.setItem("vhsales_currencyFormat", JSON.stringify(this.currencyFormat));
    }
    openSelect(options, text) {
        let arrVal = options.map((item) => { return { text: item.text, value: item.value }; });
        this.currencyFormat['position'] = { text: text, value: arrVal.filter(item => item.text === text)[0].value };
        localStorage.setItem("vhsales_currencyFormat", JSON.stringify(this.currencyFormat));
    }
    initPosition(symbol) {
        let regex = /\(([^)]+)\)/;
        let result = regex.exec(this.currencyFormat['symbol']['text']); // lấy các giá trị trong ()
        if (result)
            symbol = result[1];
        else
            symbol = this.currencyFormat['symbol']['text'];
        this.position = [{ text: symbol + ' 1', value: 0 }, { text: '1 ' + symbol, value: 1 }, { text: '1', value: 2 }];
    }
    openDecimal(value) {
        this.currencyFormat['digitDecimal'] = { text: value, value: this.digitDecimal.filter(item => item.text === value)[0].value };
        localStorage.setItem("vhsales_currencyFormat", JSON.stringify(this.currencyFormat));
    }
    openGroup(value) {
        this.currencyFormat['digitGroup'] = { text: value, value: this.digitGroup.filter(item => item.text === value)[0].value };
        localStorage.setItem("vhsales_currencyFormat", JSON.stringify(this.currencyFormat));
    }
    setFontSize(value) {
        localStorage.setItem("vh-sales-system-fontsize", JSON.stringify(value));
        this.fontSize = value;
        document.documentElement.style.fontSize = value + 'px';
    }
    setInterface(value) {
        localStorage.setItem("vh-sales-system-start-interface", value);
        this.startInterface = value;
    }
    /////////////------------------------COLOR---------------------------//////////////
    changeColor(theme, event) {
        this.vhAuth.changeTheme(theme, event);
    }
}
DisplayComponent.ɵfac = function DisplayComponent_Factory(t) { return new (t || DisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_theme_service__WEBPACK_IMPORTED_MODULE_1__.ThemeService)); };
DisplayComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DisplayComponent, selectors: [["app-display"]], decls: 26, vars: 12, consts: [["nz-row", "", 1, "row"], ["nz-col", "", "nzSpan", "12", 1, "bottom-right"], [1, "background"], ["nz-col", "", "nzSpan", "12", 1, "bottom-left"], [1, "title"], ["nzSize", "default"], ["nz-row", "", 2, "justify-content", "space-between"], ["nz-col", "", "nzSpan", "12"], [1, "sub-title"], [1, "no-border"], [2, "width", "90%", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "no-border", 2, "width", "100%"], ["id", "color-picker"], ["class", "color", 3, "ngClass", "background-color", "click", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "color", 3, "ngClass", "click"]], template: function DisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "nz-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function DisplayComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.fontSize = $event; })("ngModelChange", function DisplayComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.setFontSize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, DisplayComponent_nz_option_18_Template, 2, 4, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, DisplayComponent_div_25_Template, 1, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 6, "Theme"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 8, "Font size"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.fontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 10, "Color"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.themeService.themeList);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, _currency_currency_component__WEBPACK_IMPORTED_MODULE_2__.CurrencyComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__.NzListItemComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: [".no-border[_ngcontent-%COMP%] {\n  border: none !important;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n}\n\n.row[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.row[_ngcontent-%COMP%]   #color-picker[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  max-width: 90%;\n}\n\n.row[_ngcontent-%COMP%]   #color-picker[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nnz-layout[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bottom-right[_ngcontent-%COMP%] {\n  padding: 0px 8px 8px 0px;\n}\n\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bottom-left[_ngcontent-%COMP%] {\n  padding: 0px 0px 8px 8px;\n}\n\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .top-right[_ngcontent-%COMP%] {\n  padding: 8px 8px 0px 0px;\n}\n\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .top-left[_ngcontent-%COMP%] {\n  padding: 8px 0px 0px 8px;\n}\n\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  height: 100%;\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtBQUdKOztBQURBO0VBQ0ksYUFBQTtFQUNBLDJCQUFBO0FBSUo7O0FBSEk7RUFDSSxXQUFBO0FBS1I7O0FBSEk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFLUjs7QUFKUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTVo7O0FBRkE7RUFDSSxnQkFBQTtBQUtKOztBQUhRO0VBQ0ksd0JBQUE7QUFLWjs7QUFIUTtFQUNJLHdCQUFBO0FBS1o7O0FBSFE7RUFDSSx3QkFBQTtBQUtaOztBQUhRO0VBQ0ksd0JBQUE7QUFLWjs7QUFIUTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBS1oiLCJmaWxlIjoiZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ib3JkZXIge1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zdWItdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4ucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbnotc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgICNjb2xvci1waWNrZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOjkwJTtcclxuICAgICAgICAuY29sb3Ige1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA4cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIC5yb3cge1xyXG4gICAgICAgIC5ib3R0b20tcmlnaHQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggOHB4IDhweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3R0b20tbGVmdCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggOHB4IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvcC1yaWdodCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCA4cHggMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvcC1sZWZ0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDBweCAwcHggOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 92177:
/*!**********************************************************************************!*\
  !*** ./src/app/sales/menu/settings/configuration/invoices/invoices.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicesComponent": () => (/* binding */ InvoicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);








class InvoicesComponent {
    constructor(vhQuerySales) {
        this.vhQuerySales = vhQuerySales;
        this.show_product_mutil_line_purchase = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_purchase;
        this.show_product_mutil_line_customer_return = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_customer_return;
        this.show_product_mutil_line_supplier_return = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_supplier_return;
        this.show_product_mutil_line_warranty = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_warranty;
        this.show_product_mutil_line_sales = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_sales;
        this.show_product_mutil_line_delivery_goods = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_delivery_goods;
    }
    ngOnInit() {
    }
    /**
     * update phân quyền chi nhánh lên DB
     */
    updateSetting(value) {
        this.vhQuerySales.updateAppSettingNameBranch('permission_branch', value).then((bool) => {
        });
    }
}
InvoicesComponent.ɵfac = function InvoicesComponent_Factory(t) { return new (t || InvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQuerySales)); };
InvoicesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvoicesComponent, selectors: [["app-invoices"]], decls: 68, vars: 42, consts: [["nz-row", "", 1, "row"], ["nz-col", "", "nzSpan", "12", 1, "top-right"], [1, "background"], [1, "title"], ["nzSize", "default"], [1, "sub-title"], ["mode", "ios", 3, "ngModel", "ngModelChange", "click"], ["nz-col", "", "nzSpan", "12", 1, "top-left"]], template: function InvoicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_12_listener($event) { return ctx.show_product_mutil_line_purchase = $event; })("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_12_listener($event) { return ctx.updateSetting({ show_product_mutil_line_purchase: $event }); })("click", function InvoicesComponent_Template_ion_toggle_click_12_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_23_listener($event) { return ctx.show_product_mutil_line_sales = $event; })("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_23_listener($event) { return ctx.updateSetting({ show_product_mutil_line_sales: $event }); })("click", function InvoicesComponent_Template_ion_toggle_click_23_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_34_listener($event) { return ctx.show_product_mutil_line_supplier_return = $event; })("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_34_listener($event) { return ctx.updateSetting({ show_product_mutil_line_supplier_return: $event }); })("click", function InvoicesComponent_Template_ion_toggle_click_34_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_45_listener($event) { return ctx.show_product_mutil_line_warranty = $event; })("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_45_listener($event) { return ctx.updateSetting({ show_product_mutil_line_warranty: $event }); })("click", function InvoicesComponent_Template_ion_toggle_click_45_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_56_listener($event) { return ctx.show_product_mutil_line_delivery_goods = $event; })("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_56_listener($event) { return ctx.updateSetting({ show_product_mutil_line_delivery_goods: $event }); })("click", function InvoicesComponent_Template_ion_toggle_click_56_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_67_listener($event) { return ctx.show_product_mutil_line_customer_return = $event; })("ngModelChange", function InvoicesComponent_Template_ion_toggle_ngModelChange_67_listener($event) { return ctx.updateSetting({ show_product_mutil_line_customer_return: $event }); })("click", function InvoicesComponent_Template_ion_toggle_click_67_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, "Purchase/Import invoice"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 20, "Show one product on multiple lines"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_product_mutil_line_purchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 22, "Sales invoice"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 24, "Show one product on multiple lines"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_product_mutil_line_sales);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 26, "Supplier return invoice"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 28, "Show one product on multiple lines"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_product_mutil_line_supplier_return);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 30, "Warranty, Repair invoices"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 32, "Show one product on multiple lines"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_product_mutil_line_warranty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 34, "Transfer invoice"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 36, "Show one product on multiple lines"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_product_mutil_line_delivery_goods);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 38, "Customer return invoice"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 40, "Show one product on multiple lines"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_product_mutil_line_customer_return);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__.NzListItemComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.BooleanValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\nnz-layout[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  height: 95%;\n}\n\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bottom-right[_ngcontent-%COMP%] {\n  padding: 0px 8px 8px 0px;\n}\n\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bottom-left[_ngcontent-%COMP%] {\n  padding: 0px 0px 8px 8px;\n}\n\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .top-right[_ngcontent-%COMP%] {\n  padding: 8px 8px 0px 0px;\n}\n\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .top-left[_ngcontent-%COMP%] {\n  padding: 8px 0px 0px 8px;\n}\n\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n}\n\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%] {\n  zoom: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBR0o7O0FBRFE7RUFDSSx3QkFBQTtBQUdaOztBQURRO0VBQ0ksd0JBQUE7QUFHWjs7QUFEUTtFQUNJLHdCQUFBO0FBR1o7O0FBRFE7RUFDSSx3QkFBQTtBQUdaOztBQURRO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUdaOztBQURRO0VBQ0ksU0FBQTtBQUdaIiwiZmlsZSI6Imludm9pY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zdWItdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnJvdyB7XHJcbiAgICAgICAgLmJvdHRvbS1yaWdodCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHggOHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvdHRvbS1sZWZ0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDBweCA4cHggOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9wLXJpZ2h0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDhweCAwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9wLWxlZnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMHB4IDBweCA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tdG9nZ2xle1xyXG4gICAgICAgICAgICB6b29tOiAwLjk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 99286:
/*!************************************************************************************!*\
  !*** ./src/app/sales/menu/settings/configuration/led-price/led-price.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LedPriceComponent": () => (/* binding */ LedPriceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../components/vh-component/vh-component */ 20411);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/divider */ 72254);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 70325);























function LedPriceComponent_tr_44_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nz-switch", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LedPriceComponent_tr_44_Template_nz_switch_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const displayLED_r4 = restoredCtx.$implicit; return displayLED_r4.enable = $event; })("ngModelChange", function LedPriceComponent_tr_44_Template_nz_switch_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const displayLED_r4 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.updateEnable(displayLED_r4._id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LedPriceComponent_tr_44_Template_a_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const displayLED_r4 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.openEditDisplayLED(displayLED_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "nz-divider", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnConfirm", function LedPriceComponent_tr_44_Template_a_nzOnConfirm_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const displayLED_r4 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.deleteLED(displayLED_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const displayLED_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](displayLED_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](displayLED_r4.mode_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](displayLED_r4.model_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](displayLED_r4.port);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](displayLED_r4.baundrate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", displayLED_r4.enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPopconfirmTitle", "X\u00F3a b\u1EA3n LED " + displayLED_r4.name + " ?");
} }
function LedPriceComponent_ng_container_47_nz_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const mode_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", mode_r19.type)("nzLabel", mode_r19.name);
} }
function LedPriceComponent_ng_container_47_nz_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const mode_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", mode_r20.type)("nzLabel", mode_r20.name);
} }
function LedPriceComponent_ng_container_47_nz_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const com_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", com_r21.path)("nzLabel", com_r21.path);
} }
function LedPriceComponent_ng_container_47_nz_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const baundrate_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", baundrate_r22)("nzLabel", baundrate_r22);
} }
function LedPriceComponent_ng_container_47_nz_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const databit_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", databit_r23)("nzLabel", databit_r23);
} }
function LedPriceComponent_ng_container_47_nz_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const parity_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", parity_r24)("nzLabel", parity_r24);
} }
function LedPriceComponent_ng_container_47_nz_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const stopbit_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", stopbit_r25)("nzLabel", stopbit_r25);
} }
function LedPriceComponent_ng_container_47_nz_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const flow_control_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", flow_control_r26)("nzLabel", flow_control_r26);
} }
function LedPriceComponent_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "nz-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LedPriceComponent_ng_container_47_Template_nz_select_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.selectModel("add", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LedPriceComponent_ng_container_47_nz_option_19_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "nz-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, LedPriceComponent_ng_container_47_nz_option_27_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "nz-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, LedPriceComponent_ng_container_47_nz_option_35_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "nz-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, LedPriceComponent_ng_container_47_nz_option_44_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "nz-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, LedPriceComponent_ng_container_47_nz_option_53_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "nz-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, LedPriceComponent_ng_container_47_nz_option_61_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "nz-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, LedPriceComponent_ng_container_47_nz_option_69_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](74, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "nz-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, LedPriceComponent_ng_container_47_nz_option_77_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "nz-switch", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.formAddLED);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 43, "LED display board name"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 45, "Enter name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 47, "Display model"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.display_models);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 49, "Display mode"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.display_modes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 51, "Port"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.comGates);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 53, "Baud rate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.baundrates);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 55, "Data bits"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.databits);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 57, "Parity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.parities);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 59, "Stop bits"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.stopbits);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](74, 61, "Flow controls"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.flow_controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 63, "Allow connection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
} }
function LedPriceComponent_ng_container_50_nz_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const mode_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", mode_r37.type)("nzLabel", mode_r37.name);
} }
function LedPriceComponent_ng_container_50_nz_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const mode_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", mode_r38.type)("nzLabel", mode_r38.name);
} }
function LedPriceComponent_ng_container_50_nz_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const com_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", com_r39.path)("nzLabel", com_r39.path);
} }
function LedPriceComponent_ng_container_50_nz_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const baundrate_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", baundrate_r40)("nzLabel", baundrate_r40);
} }
function LedPriceComponent_ng_container_50_nz_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const databit_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", databit_r41)("nzLabel", databit_r41);
} }
function LedPriceComponent_ng_container_50_nz_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const parity_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", parity_r42)("nzLabel", parity_r42);
} }
function LedPriceComponent_ng_container_50_nz_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const stopbit_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", stopbit_r43)("nzLabel", stopbit_r43);
} }
function LedPriceComponent_ng_container_50_nz_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-option", 41);
} if (rf & 2) {
    const flow_control_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", flow_control_r44)("nzLabel", flow_control_r44);
} }
function LedPriceComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "nz-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LedPriceComponent_ng_container_50_Template_nz_select_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r45.selectModel("edit", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LedPriceComponent_ng_container_50_nz_option_19_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "nz-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, LedPriceComponent_ng_container_50_nz_option_27_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "nz-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, LedPriceComponent_ng_container_50_nz_option_35_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "nz-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, LedPriceComponent_ng_container_50_nz_option_44_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "nz-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, LedPriceComponent_ng_container_50_nz_option_53_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "nz-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, LedPriceComponent_ng_container_50_nz_option_61_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "nz-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, LedPriceComponent_ng_container_50_nz_option_69_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](74, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "nz-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, LedPriceComponent_ng_container_50_nz_option_77_Template, 1, 2, "nz-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "nz-form-item", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "nz-form-label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "nz-form-control", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "nz-switch", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.formEditLED);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 43, "LED display board name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 45, "Enter name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 47, "Display model"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.display_models);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 49, "Display mode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.display_modes);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 51, "Port"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.comGates);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 53, "Baud rate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.baundrates);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 55, "Data bits"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.databits);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 57, "Parity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.parities);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 59, "Stop bits"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.stopbits);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](74, 61, "Flow controls"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.flow_controls);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 63, "Allow connection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
} }
const _c0 = function (a0) { return { opacity: a0 }; };
class LedPriceComponent {
    constructor(platform, vhQuerySales, vhDisplayLEDService, vhComponent, languageService) {
        this.platform = platform;
        this.vhQuerySales = vhQuerySales;
        this.vhDisplayLEDService = vhDisplayLEDService;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.displayLEDs = []; // danh sách màn hình LED
        this.comGates = [];
        this.data = "";
        this.status = true;
        this.baund_current = 2400;
        this.baundrates = [600, 1200, 2400, 4800, 9600, 14400, 19200, 38400, 56000, 57600, 115200, 128000];
        this.isOpenAddLed = false; // Ẩn/ hiện popup thêm led
        this.display_modes = [];
        this.display_models = [];
        this.databits = [5, 6, 7, 8];
        this.parities = ['None', 'Even', 'Odd', 'Mark', 'Space'];
        this.stopbits = [1, 2];
        this.flow_controls = ['None', 'CTS', 'RTS', 'XON', 'XOFF'];
        this.isOpenEditLED = false; // Ẩn/ hiển popup sửa màn hình led
        if (this.platform.is("electron"))
            this.scan();
    }
    ngOnInit() {
        this.display_models = this.vhDisplayLEDService.getlocalDisplayModels();
        this.getData();
    }
    scan() {
        this.vhDisplayLEDService.scanPorts().then((data) => {
            this.comGates = data;
        });
    }
    /**
     * get dữ liệu bảng Led hiển thị giá
     */
    getData() {
        this.vhDisplayLEDService.refreshLocalDisplayLEDs().then(() => {
            this.displayLEDs = this.vhDisplayLEDService.getlocalDisplayLEDs().map(item => {
                let display_models = this.display_models.find(mode => mode.type == item.type_display_mode);
                return Object.assign(Object.assign({}, item), { mode_name: display_models.modes.find(f => f.type == item.type_display_mode).name, model_name: this.display_models.find(f => f.type == item.type_display_model).name });
            });
        });
    }
    /**
     * bắt sk thay đổi model
     */
    selectModel(type, event) {
        if (type == 'add')
            this.formAddLED.controls['type_display_mode'].setValue(null);
        else
            this.formEditLED.controls['type_display_mode'].setValue(null);
        this.display_modes = this.display_models.find(item => item.type == event).modes;
    }
    // Khởi tạo form thêm LED
    initFormAddLed() {
        this.formAddLED = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            type_display_mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            type_display_model: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            port: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            baundrate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(9600, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            databits: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(8, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            parity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("None", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            stopbits: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(1, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            flow_control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("None", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            enable: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(false, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
        this.isOpenAddLed = true;
    }
    // Khởi tạo form sửa LED
    initFormEditLed(item) {
        this.formEditLED = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item._id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            type_display_mode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item.type_display_mode, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            type_display_model: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item.type_display_model, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            port: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item.port),
            baundrate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item.baundrate, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            databits: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item.databits, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            parity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item.parity, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            stopbits: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item.stopbits, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            flow_control: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item.flow_control, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            enable: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(item.enable, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
        });
    }
    // Thêm LED
    saveLED(data) {
        if (this.formAddLED.valid) {
            this.vhDisplayLEDService.addDisplayLED(data).then((displayLED) => {
                if (displayLED) {
                    displayLED = Object.assign(Object.assign({}, displayLED), { mode_name: this.display_modes.find(f => f.type == displayLED.type_display_mode).name, model_name: this.display_models.find(f => f.type == displayLED.type_display_model).name });
                    this.displayLEDs = [...this.displayLEDs, displayLED];
                    this.isOpenAddLed = false;
                    this.vhComponent.showToast(3000, displayLED.name + " " + (this.languageService.translate("Has been added successfully")), "success-toast");
                }
            }, error => {
                this.isOpenAddLed = false;
                this.vhComponent.showToast(3000, error, "alert-toast");
            });
        }
    }
    /**
     * mở modal chỉnh sửa LED
     */
    openEditDisplayLED(item) {
        this.display_modes = this.display_models.find(mode => mode.type == item.type_display_mode).modes;
        this.initFormEditLed(item);
        this.isOpenEditLED = true;
    }
    /**
     * cập nhật trường enable
     * @param id
     * @param value
     */
    updateEnable(id, value) {
        this.vhDisplayLEDService.updateDisplayLED(id, { enable: value }).then((bool) => {
            if (bool) {
                this.vhComponent.showToast(3000, "Lưu thành công", "success-toast");
            }
        }, error => {
            this.vhComponent.showToast(3000, error, "alert-toast");
            this.isOpenEditLED = false;
        });
    }
    /**
     * xử lý khi nhấn lưu ở modal chỉnh sửa LED
     * @param item
     */
    saveEditLED(item) {
        if (this.formEditLED.valid) {
            this.vhDisplayLEDService.updateDisplayLED(item._id, item).then((bool) => {
                if (bool) {
                    item = Object.assign(Object.assign({}, item), { mode_name: this.display_modes.find(f => f.type == item.type_display_mode).name, model_name: this.display_models.find(f => f.type == item.type_display_model).name });
                    this.displayLEDs = this.displayLEDs.filter(f => f._id != item._id);
                    this.displayLEDs = [...this.displayLEDs, item];
                    this.isOpenEditLED = false;
                    this.vhComponent.showToast(3000, "Lưu thành công", "success-toast");
                }
            }, error => {
                this.vhComponent.showToast(3000, error, "alert-toast");
                this.isOpenEditLED = false;
            });
        }
    }
    /**
     * xóa LED khỏi DB
     * @param item
     */
    deleteLED(item) {
        this.vhDisplayLEDService.deleteDisplayLED(item._id).then((bool) => {
            if (bool) {
                this.displayLEDs = this.displayLEDs.filter(f => f._id != item._id);
            }
        }, error => {
            this.vhComponent.showToast(3000, error, "alert-toast");
        });
    }
}
LedPriceComponent.ɵfac = function LedPriceComponent_Factory(t) { return new (t || LedPriceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhDisplayLEDService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
LedPriceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LedPriceComponent, selectors: [["app-led-price"]], decls: 51, vars: 41, consts: [["id", "sales-return-invoice"], ["nz-row", "", 1, "invoice-header"], ["nz-col", "", "nzSpan", "10", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "14", 1, "right-all-content", "button-group"], ["nz-button", "", "nzType", "default", 1, "btn-green", "center-all-content", "ml-3", 3, "disabled", "ngStyle", "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzData", "nzNoResult"], ["tableSales", ""], ["nzWidth", "5%", "nzAlign", "left"], ["nzWidth", "20%", "nzAlign", "left"], ["nzWidth", "15%", "nzAlign", "left"], ["nzWidth", "10%", "nzAlign", "left"], [4, "ngFor", "ngForOf"], ["nzWidth", "80vw", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzWidth", "80vw", "nzTileOk", "L\u01B0u", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["nzAlign", "left"], ["nzAlign", "center", 2, "display", "flex", "justify-content", "space-between"], [3, "ngModel", "ngModelChange"], [3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline"], ["nzType", "vertical"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottom", 3, "nzPopconfirmTitle", "nzOnConfirm"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline"], ["nz-form", "", 3, "formGroup"], ["nz-row", ""], ["nz-col", "", 3, "nzSpan"], [2, "margin", "0 0 8px"], [3, "nzSpan"], ["nz-input", "", "formControlName", "name", 3, "placeholder"], ["formControlName", "type_display_model", "nzPlaceHolder", "Choose Model", 3, "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["formControlName", "type_display_mode", "nzPlaceHolder", "Choose Mode"], ["formControlName", "port", "nzPlaceHolder", "Choose port"], ["formControlName", "baundrate", "nzPlaceHolder", "Choose port"], ["nz-col", "", 2, "padding-left", "8px", 3, "nzSpan"], ["formControlName", "databits", "nzPlaceHolder", "Choose bit"], ["formControlName", "parity", "nzPlaceHolder", "Choose parity"], ["formControlName", "stopbits", "nzPlaceHolder", "Choose stopbit"], ["formControlName", "flow_control", "nzPlaceHolder", "Choose flow_control"], ["formControlName", "enable"], [3, "nzValue", "nzLabel"]], template: function LedPriceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LedPriceComponent_Template_button_click_8_listener() { return ctx.initFormAddLed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-table", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, LedPriceComponent_tr_44_Template, 20, 8, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "nz-modal", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function LedPriceComponent_Template_nz_modal_nzVisibleChange_45_listener($event) { return ctx.isOpenAddLed = $event; })("nzOnCancel", function LedPriceComponent_Template_nz_modal_nzOnCancel_45_listener() { return ctx.isOpenAddLed = false; })("nzOnOk", function LedPriceComponent_Template_nz_modal_nzOnOk_45_listener() { return ctx.saveLED(ctx.formAddLED.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, LedPriceComponent_ng_container_47_Template, 85, 65, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "nz-modal", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function LedPriceComponent_Template_nz_modal_nzVisibleChange_48_listener($event) { return ctx.isOpenEditLED = $event; })("nzOnCancel", function LedPriceComponent_Template_nz_modal_nzOnCancel_48_listener() { return ctx.isOpenEditLED = false; })("nzOnOk", function LedPriceComponent_Template_nz_modal_nzOnOk_48_listener() { return ctx.saveEditLED(ctx.formEditLED.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, LedPriceComponent_ng_container_50_Template, 85, 65, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 17, "LED screen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.displayLEDs.length == 2)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](39, _c0, ctx.displayLEDs.length == 2 ? 0.5 : 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 19, "Add LED"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 21, "No data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx.displayLEDs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 23, "#"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 25, "LED name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 27, "Mode name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 29, "Model name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 31, "Port"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 33, "Baud rate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r0.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 35, "Add LED screen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.isOpenAddLed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 37, "Edit LED screen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx.isOpenEditLED);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgStyle, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_14__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_14__.NzModalContentDirective, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_15__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_16__.NzDividerComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_17__.NzPopconfirmDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_19__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .invoice-header[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .invoice-header[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .invoice-header[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 45%;\n}\nnz-layout[_ngcontent-%COMP%]   .invoice-header[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-confirm[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZC1wcmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNaO0FBQVk7RUFDSSwwQ0FBQTtBQUVoQjtBQUFZO0VBQ0ksVUFBQTtBQUVoQjtBQUNRO0VBQ0ksVUFBQTtBQUNaO0FBRUk7RUFDSSxnQkFBQTtBQUFSO0FBQ1E7O0VBRUksa0JBQUE7QUFDWjtBQUVJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUFSO0FBRUk7RUFDSSxpQkFBQTtBQUFSO0FBSUE7O0VBRUksZ0NBQUE7QUFESjtBQUlBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQURKIiwiZmlsZSI6ImxlZC1wcmljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWxheW91dCB7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLmludm9pY2UtaGVhZGVyIHtcclxuICAgICAgICAuZGF0ZS1waWNrZXItY3VzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG56LWRhdGUtcGlja2VyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbnotc2VsZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuei10YWJsZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICB0ZCxcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1jb25maXJtIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmFudC1idG46Zm9jdXMsXHJcbi5hbnQtYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcblxyXG4uYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 47435:
/*!**********************************************************************************!*\
  !*** ./src/app/sales/menu/settings/configuration/products/products.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);













function ProductsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "Back"), "\n");
} }
class ProductsComponent {
    constructor(vhAlgorithm, vhQuerySales, lang, router) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.lang = lang;
        this.router = router;
        this.is_go_back = false;
        this.display_promotion_selling_price = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').display_promotion_selling_price;
        // tạm comment lại phần này enable_quantity_export_exceed_quantity_stock
        // enable_quantity_export_exceed_quantity_stock: boolean = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').enable_quantity_export_exceed_quantity_stock
        this.auto_select_lot = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').auto_select_lot;
        this.auto_hidden_lot = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').auto_hidden_lot;
        this.warning_lot_expried = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').warning_lot_expried;
        this.management_product_manysize = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').management_product_manysize;
        this.management_product_lot = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').management_product_lot;
        this.management_product_price2 = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').management_product_price2;
        this.management_product_tax = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').management_product_tax;
        if (this.router.getCurrentNavigation().extras.state)
            this.is_go_back = true;
    }
    ngOnInit() {
    }
    /**
     * update phân quyền chi nhánh lên DB
     */
    updateShowTypePrice(value) {
        this.vhQuerySales.updateAppSettingNameBranch('permission_branch', value).then((bool) => {
        });
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/products/products-list']);
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 56, vars: 39, consts: [["nz-row", "", "class", "row-back medium-size", 3, "click", 4, "ngIf"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12"], [1, "no-border"], ["mode", "ios", 3, "ngModel", "click", "ngModelChange"], ["nz-col", "", "nzSpan", "12", 2, "padding-left", "16px"], ["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ProductsComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "nz-switch", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_nz_switch_click_14_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_14_listener($event) { return ctx.display_promotion_selling_price = $event; })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_14_listener($event) { return ctx.updateShowTypePrice({ display_promotion_selling_price: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-switch", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_nz_switch_click_19_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_19_listener($event) { return ctx.auto_hidden_lot = $event; })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_19_listener($event) { return ctx.updateShowTypePrice({ auto_hidden_lot: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "nz-switch", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_nz_switch_click_24_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_24_listener($event) { return ctx.auto_select_lot = $event; })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_24_listener($event) { return ctx.updateShowTypePrice({ auto_select_lot: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "nz-switch", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_nz_switch_click_29_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_29_listener($event) { return ctx.warning_lot_expried = $event; })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_29_listener($event) { return ctx.updateShowTypePrice({ warning_lot_expried: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "nz-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "nz-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nz-switch", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_nz_switch_click_40_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_40_listener($event) { return ctx.management_product_manysize = $event; })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_40_listener($event) { return ctx.updateShowTypePrice({ management_product_manysize: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "nz-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-switch", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_nz_switch_click_45_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_45_listener($event) { return ctx.management_product_lot = $event; })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_45_listener($event) { return ctx.updateShowTypePrice({ management_product_lot: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "nz-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nz-switch", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_nz_switch_click_50_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_50_listener($event) { return ctx.management_product_price2 = $event; })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_50_listener($event) { return ctx.updateShowTypePrice({ management_product_price2: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "nz-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "nz-switch", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProductsComponent_Template_nz_switch_click_55_listener($event) { return $event.stopPropagation(); })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_55_listener($event) { return ctx.management_product_tax = $event; })("ngModelChange", function ProductsComponent_Template_nz_switch_ngModelChange_55_listener($event) { return ctx.updateShowTypePrice({ management_product_tax: $event }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.is_go_back);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 19, "Display configuration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 21, "Display both selling price and promotional price"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.display_promotion_selling_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 23, "Automatically hide lots when expired"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.auto_hidden_lot);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](23, 25, "Automatically select the nearest expiry lot when selling"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.auto_select_lot);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 27, "Notify when selling expired products"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.warning_lot_expried);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 29, "Product configuration"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](39, 31, "Classify products by attributes"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.management_product_manysize);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](44, 33, "Manage products by lot and expiry date"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.management_product_lot);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 35, "Allow creating and selling a second price (wholesale price) for products/ingredients"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.management_product_price2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 37, "Calculate tax separately for each product"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.management_product_tax);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_7__.NzListItemComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_8__.NzSwitchComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  margin-top: 30px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .margin[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n.row-back[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFKO0FBQ0k7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBQ1I7QUFFUTtFQUNJLGFBQUE7QUFBWjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBREo7QUFFSTtFQUNJLGVBQUE7QUFBUiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIH1cclxuICAgIC5tYXJnaW4ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5yb3ctYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6938:
/*!******************************************************************************!*\
  !*** ./src/app/sales/menu/settings/configuration/report/report.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportComponent": () => (/* binding */ ReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);








class ReportComponent {
    constructor(vhQuerySales) {
        this.vhQuerySales = vhQuerySales;
        // doanh số danh mục report_sales_category
        this.show_btax_report_sales_category = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_sales_category;
        this.show_image_report_sales_category = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_image_report_sales_category;
        // doanh số KH report_sales_customer
        this.show_btax_report_sales_customer = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_sales_customer;
        //  doanh số  NV report_sales_employee
        this.show_btax_report_sales_employee = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_sales_employee;
        //  doanh số  SP report_sales_product
        this.show_btax_report_sales_product = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_sales_product;
        //  doanh số  dịch vụ report_sales_service
        this.show_btax_report_sales_service = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_sales_service;
        //  doanh số  dịch vụ report_sales_combo
        this.show_btax_report_sales_combo = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_sales_combo;
        //nhập xuất tồn input_output_inventory
        this.show_btax_report_input_output_inventory = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_input_output_inventory;
        //nhập xuất trả input_output_return
        this.show_btax_report_input_output_return = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_input_output_return;
        //tồn kho warehouse
        this.show_btax_report_warehouse = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_warehouse;
    }
    ngOnInit() {
    }
    /**
     * update phân quyền chi nhánh lên DB
     */
    updateSetting(value) {
        this.vhQuerySales.updateAppSettingNameBranch('permission_branch', value).then((bool) => {
        });
    }
}
ReportComponent.ɵfac = function ReportComponent_Factory(t) { return new (t || ReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQuerySales)); };
ReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportComponent, selectors: [["app-report"]], decls: 105, vars: 63, consts: [["nz-row", "", 1, "row"], ["nz-col", "", "nzSpan", "12", 1, "top-right"], [1, "background"], [1, "title"], ["nzSize", "default"], [1, "sub-title"], ["mode", "ios", 3, "ngModel", "ngModelChange", "click"], ["nz-col", "", "nzSpan", "12", 1, "top-left"], ["nz-row", "", 1, "row", 2, "padding-bottom", "16px"]], template: function ReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_12_listener($event) { return ctx.show_btax_report_sales_category = $event; })("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_12_listener($event) { return ctx.updateSetting({ show_btax_report_sales_category: $event }); })("click", function ReportComponent_Template_ion_toggle_click_12_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_23_listener($event) { return ctx.show_btax_report_sales_customer = $event; })("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_23_listener($event) { return ctx.updateSetting({ show_btax_report_sales_customer: $event }); })("click", function ReportComponent_Template_ion_toggle_click_23_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_35_listener($event) { return ctx.show_btax_report_sales_employee = $event; })("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_35_listener($event) { return ctx.updateSetting({ show_btax_report_sales_employee: $event }); })("click", function ReportComponent_Template_ion_toggle_click_35_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_46_listener($event) { return ctx.show_btax_report_sales_product = $event; })("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_46_listener($event) { return ctx.updateSetting({ show_btax_report_sales_product: $event }); })("click", function ReportComponent_Template_ion_toggle_click_46_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_58_listener($event) { return ctx.show_btax_report_sales_service = $event; })("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_58_listener($event) { return ctx.updateSetting({ show_btax_report_sales_service: $event }); })("click", function ReportComponent_Template_ion_toggle_click_58_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_69_listener($event) { return ctx.show_btax_report_sales_combo = $event; })("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_69_listener($event) { return ctx.updateSetting({ show_btax_report_sales_combo: $event }); })("click", function ReportComponent_Template_ion_toggle_click_69_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_81_listener($event) { return ctx.show_btax_report_input_output_inventory = $event; })("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_81_listener($event) { return ctx.updateSetting({ show_btax_report_input_output_inventory: $event }); })("click", function ReportComponent_Template_ion_toggle_click_81_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_92_listener($event) { return ctx.show_btax_report_input_output_return = $event; })("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_92_listener($event) { return ctx.updateSetting({ show_btax_report_input_output_return: $event }); })("click", function ReportComponent_Template_ion_toggle_click_92_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "nz-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](103, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "ion-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_104_listener($event) { return ctx.show_btax_report_warehouse = $event; })("ngModelChange", function ReportComponent_Template_ion_toggle_ngModelChange_104_listener($event) { return ctx.updateSetting({ show_btax_report_warehouse: $event }); })("click", function ReportComponent_Template_ion_toggle_click_104_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 27, "Category sales"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 29, "Show value before tax"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_btax_report_sales_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 31, "Customer sales"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 33, "Show value before tax"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_btax_report_sales_customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 35, "Employee sales"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 37, "Show value before tax"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_btax_report_sales_employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 39, "Product sales"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 41, "Show value before tax"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_btax_report_sales_product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 43, "Service sales"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 45, "Show value before tax"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_btax_report_sales_service);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 47, "Combo sales"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 49, "Show value before tax"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_btax_report_sales_combo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 51, "Input-output-inventory"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 53, "Show value before tax"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_btax_report_input_output_inventory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](86, 55, "Input-output-return"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](91, 57, "Show value before tax"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_btax_report_input_output_return);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](98, 59, "Stock"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](103, 61, "Show value before tax"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_btax_report_warehouse);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_4__.NzListItemComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.BooleanValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%] {\n  zoom: 0.9;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bottom-right[_ngcontent-%COMP%] {\n  padding: 0px 8px 8px 0px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .bottom-left[_ngcontent-%COMP%] {\n  padding: 0px 0px 8px 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .top-right[_ngcontent-%COMP%] {\n  padding: 8px 8px 0px 0px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .top-left[_ngcontent-%COMP%] {\n  padding: 8px 0px 0px 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  height: 100%;\n  padding: 8px 8px 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUFDSjtBQUFJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRU47QUFBSTtFQUNFLFNBQUE7QUFFTjtBQUFJO0VBQ0UsV0FBQTtBQUVOO0FBRE07RUFDRSx3QkFBQTtBQUdSO0FBRE07RUFDRSx3QkFBQTtBQUdSO0FBRE07RUFDRSx3QkFBQTtBQUdSO0FBRE07RUFDRSx3QkFBQTtBQUdSO0FBRE07RUFDRSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFHUiIsImZpbGUiOiJyZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1sYXlvdXQge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaW9uLXRvZ2dsZXtcclxuICAgICAgem9vbTogMC45O1xyXG4gICAgfVxyXG4gICAgLnJvdyB7XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAuYm90dG9tLXJpZ2h0IHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggOHB4IDhweCAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJvdHRvbS1sZWZ0IHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDhweCA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRvcC1yaWdodCB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDhweCAwcHggMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50b3AtbGVmdCB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDBweCAwcHggOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAgOHB4IDhweCAwIDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 51445:
/*!****************************************************************************!*\
  !*** ./src/app/sales/menu/settings/configuration/sales/sales.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesComponent": () => (/* binding */ SalesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






class SalesComponent {
    constructor(vhAuth) {
        this.vhAuth = vhAuth;
        this.sales = JSON.parse(localStorage.getItem("vhsales-sales"));
    }
    /**
     * update phân quyền chi nhánh lên DB
     */
    updateSetting(title, event) {
        this.sales[title] = event;
        localStorage.setItem("vhsales-sales", JSON.stringify(this.sales));
    }
}
SalesComponent.ɵfac = function SalesComponent_Factory(t) { return new (t || SalesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAuth)); };
SalesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SalesComponent, selectors: [["app-sales"]], decls: 9, vars: 7, consts: [[1, "title"], ["nzSize", "default"], [1, "sub-title"], ["mode", "ios", 3, "ngModel", "ngModelChange", "click"]], template: function SalesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SalesComponent_Template_ion_toggle_ngModelChange_8_listener($event) { return ctx.sales.selling_product = $event; })("ngModelChange", function SalesComponent_Template_ion_toggle_ngModelChange_8_listener($event) { return ctx.updateSetting("selling_product", $event); })("click", function SalesComponent_Template_ion_toggle_click_8_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "Sales"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "Show quick-sell products"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sales.selling_product);
    } }, directives: [ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_2__.NzListItemComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.BooleanValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtBQUVKIiwiZmlsZSI6InNhbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5zdWItdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 187:
/*!************************************************************************************!*\
  !*** ./src/app/sales/menu/settings/configuration/sync-data/sync-data.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncDataComponent": () => (/* binding */ SyncDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/progress */ 67077);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);












function SyncDataComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 8);
} }
function SyncDataComponent_nz_progress_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-progress", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPercent", ctx_r1.percent);
} }
function SyncDataComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "This process may take a few minutes!!!"), " ");
} }
function SyncDataComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 10);
} }
class SyncDataComponent {
    constructor(vhComponent, vhQuerySales, ls) {
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.ls = ls;
        this.finishSync = false;
        this.startSync = false;
        this.percent = 0;
    }
    ngOnInit() {
    }
    /**
     * đồng bộ dữ liệu
     */
    syncData() {
        this.percent = 0;
        this.startSync = true;
        this.vhQuerySales.makeCorrectQuantityProducts_byShop()
            .then((bool) => {
            this.vhComponent.alertMessageDesktop("success", this.ls.translate("Đồng bộ thành công"));
            this.finishSync = true;
            this.startSync = false;
            this.percent = 100;
            clearInterval(interval);
        });
        let interval = setInterval(() => {
            if (this.percent < 99)
                this.percent++;
        }, 500);
    }
}
SyncDataComponent.ɵfac = function SyncDataComponent_Factory(t) { return new (t || SyncDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
SyncDataComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SyncDataComponent, selectors: [["app-sync-data"]], decls: 13, vars: 10, consts: [[1, "grid"], [1, "title"], ["width", "50%", "src", "assets/img/sync_data.jpg", "alt", "", 4, "ngIf"], ["style", "text-align: center;", "nzType", "circle", 3, "nzPercent", 4, "ngIf"], ["nz-button", "", "nzType", "primary", 3, "click"], ["nz-icon", "", "nzType", "cloud-sync", "nzTheme", "outline"], [4, "ngIf"], ["class", "fullscreen", 4, "ngIf"], ["width", "50%", "src", "assets/img/sync_data.jpg", "alt", ""], ["nzType", "circle", 2, "text-align", "center", 3, "nzPercent"], [1, "fullscreen"]], template: function SyncDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SyncDataComponent_img_5_Template, 1, 0, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SyncDataComponent_nz_progress_6_Template, 1, 1, "nz-progress", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SyncDataComponent_Template_button_click_7_listener() { return ctx.syncData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SyncDataComponent_div_11_Template, 3, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SyncDataComponent_div_12_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 6, "Sync data"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.startSync && !ctx.finishSync);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.startSync || ctx.finishSync);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 8, !ctx.startSync ? "Sync now" : "Syncing data..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.startSync);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.startSync);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__.NzLayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_10__.NzProgressComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n  text-align: center;\n  color: var(--ion-color-vh-green);\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.5;\n  left: 0;\n  top: 0;\n  z-index: 3;\n}\n\nnz-layout[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  height: 95%;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.grid[_ngcontent-%COMP%] {\n  align-items: center;\n  height: 65%;\n  grid-template-rows: 10% 80% 10%;\n  display: grid;\n  justify-items: center;\n}\n\n.grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5bmMtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFHRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBSUY7O0FBSEU7RUFDRSx1QkFBQTtFQUFBLGtCQUFBO0FBS0oiLCJmaWxlIjoic3luYy1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcbi5zdWItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbi5mdWxsc2NyZWVuIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMztcclxuXHJcbn1cclxubnotbGF5b3V0IHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogOTUlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZ3JpZCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDY1JTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSA4MCUgMTAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGJ1dHRvbntcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 68125:
/*!*************************************************!*\
  !*** ./src/app/sales/services/theme.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



class ThemeService {
    constructor(vhAuth, http) {
        this.vhAuth = vhAuth;
        this.http = http;
        /** Danh sách font-size để chọn */
        this.fontSizeList = [12, 13, 14, 15, 16, 17, 18, 19, 20];
        /** Font-size đang được chọn */
        this.selectedFontSize = parseFloat(localStorage.getItem('vh-sales-system-fontsize')) || 14;
        /** Danh sách màu để chọn */
        this.themeList = [
            { theme: 'gray-theme', color: '#7F7F7F' },
            { theme: 'orange-theme', color: '#FF7F26' },
            { theme: 'yellow-theme', color: '#f1c40f' },
            { theme: 'green-theme', color: '#23B14D' },
            { theme: 'sky-blue-theme', color: '#00A2E8' },
            { theme: 'blue-theme', color: '#1877F2' },
            { theme: 'dark-blue-theme', color: '#3F47CC' },
            { theme: 'purple-theme', color: '#A349A3' },
            { theme: 'red-theme', color: '#DA2127' },
            // { theme: 'sapo-theme', color: '#0088FF' },
        ];
        /** Danh sách giao diện của cửa hàng */
        this.salesTemplates = [];
        this.country_code = 'VN';
        this.language = 'vi';
        this.getSalesTemplate()
            .then((templates) => {
            this.salesTemplates = templates;
        })
            .catch((error) => {
            console.error('Error loading templates:', error);
        });
    }
    /**
     * Thiết lập lại font-size hiển thị trên app
     * @param fontSize Font-size cần thay đổi
     */
    changeFontSize(fontSize) {
        localStorage.setItem('vh-sales-system-fontsize', JSON.stringify(fontSize));
        this.selectedFontSize = fontSize;
        document.documentElement.style.fontSize = fontSize + 'px';
    }
    /**
     * Thiết lập lại màu theme hiển thị trên app
     * @param theme Tên theme cần thay đổi
     * @param event
     */
    changeColor(theme, event) {
        this.vhAuth.changeTheme(theme, event);
    }
    /**
     * Lấy main_sector của cửa hàng
     * @returns main_sector của cửa hàng
     */
    getStoreMainSector() {
        return this.vhAuth.getStore().main_sector;
    }
    /**
     * Lấy giao diện theo main_sector của cửa hàng
     * @returns Giao diện của cửa hàng
     */
    getSalesTemplate() {
        return new Promise((resolve, reject) => {
            this.http
                .get(`assets/documents/configuration/template/${this.country_code}/${this.getStoreMainSector()}.json`)
                .subscribe({
                next: (templates) => {
                    if (templates && templates[this.language]) {
                        resolve(templates[this.language]); // ✅ Resolve with the data
                    }
                    else {
                        reject('No templates found for this language');
                    }
                },
                error: (error) => {
                    reject(error); // ❌ Reject on HTTP error
                },
            });
        });
    }
    getThemeValue() {
        return this.vhAuth.getThemeValue() || 'sky-blue-theme';
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_settings_configuration_configuration_module_ts.js.map