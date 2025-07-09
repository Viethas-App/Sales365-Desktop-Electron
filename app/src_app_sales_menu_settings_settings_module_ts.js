"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_settings_settings_module_ts"],{

/***/ 37878:
/*!***********************************************************!*\
  !*** ./src/app/sales/menu/settings/settings.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 2, vars: 0, template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "settings works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 70935:
/*!********************************************************!*\
  !*** ./src/app/sales/menu/settings/settings.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsModule": () => (/* binding */ SettingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _settings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.component */ 37878);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        component: _settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent,
    },
    {
        path: 'configuration',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_settings_configuration_configuration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./configuration/configuration.module */ 88777)).then(m => m.ConfigurationModule)
    },
    {
        path: 'store-info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_settings_store-info_store-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./store-info/store-info.module */ 66517)).then(m => m.StoreInfoModule)
    },
    {
        path: 'chat',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_settings_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./chat/chat.module */ 37610)).then(m => m.ChatModule)
    },
    {
        path: 'video',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_settings_video_video_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./video/video.module */ 85321)).then(m => m.VideoModule)
    },
    {
        path: 'branch',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_settings_branch_branch_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./branch/branch.module */ 84055)).then(m => m.BranchModule)
    },
    {
        path: 'e-invoice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_settings_e-invoice_e-invoice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./e-invoice/e-invoice.module */ 98694)).then(m => m.EInvoiceModule)
    }
];
class SettingsModule {
}
SettingsModule.ɵfac = function SettingsModule_Factory(t) { return new (t || SettingsModule)(); };
SettingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettingsModule });
SettingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsModule, { declarations: [_settings_component__WEBPACK_IMPORTED_MODULE_0__.SettingsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_settings_settings_module_ts.js.map