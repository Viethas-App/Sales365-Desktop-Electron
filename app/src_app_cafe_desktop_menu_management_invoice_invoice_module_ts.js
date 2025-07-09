"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_invoice_invoice_module_ts"],{

/***/ 91045:
/*!***************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/invoice/invoice.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceComponent": () => (/* binding */ InvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);









class InvoiceComponent {
    constructor(router, vhAuth, vhComponent, languageService) {
        this.router = router;
        this.vhAuth = vhAuth;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
    }
    ngOnInit() {
    }
    gotoOrderInvoice() {
        if (this.vhAuth.checkMyPermission('sell_enable_view_bill'))
            this.router.navigate(['/cafe/dashboard/management/invoice/order-invoice']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoIngredient() {
        if (this.vhAuth.checkMyPermission('purchase_enable_view_bill'))
            this.router.navigate(['/cafe/dashboard/management/invoice/ingredient']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoImportSupplier() {
        this.router.navigate(['/cafe/dashboard/management/invoice/purchase']);
    }
    gotoKitchenReturn() {
        this.router.navigate(['/cafe/dashboard/management/invoice/import-kitchen']);
    }
    gotoForTheKitchen() {
        this.router.navigate(['/cafe/dashboard/management/invoice/export-kitchen']);
    }
    gotoIngradientReturn() {
        this.router.navigate(['/cafe/dashboard/management/invoice/return-supplier']);
    }
    gotoOpeningStock() {
        this.router.navigate(['/cafe/dashboard/management/invoice/opening-stock']);
    }
    gotoTemporary() {
        this.router.navigate(['/cafe/dashboard/management/invoice/temporary-sales-invoice']);
    }
    gotoTemporaryPurchase() {
        this.router.navigate(['/cafe/dashboard/management/invoice/temporary-purchase-invoice']);
    }
    gotoTemporaryOrder() {
        this.router.navigate(['/cafe/dashboard/management/invoice/temporary-order-invoice']);
    }
    gotoDestroyProduct() {
        this.router.navigate(['/cafe/dashboard/management/invoice/destroy-product']);
    }
    gotoInvoiceEInvoice() {
        this.router.navigate(['/cafe/dashboard/management/invoice/e-invoice']);
    }
}
InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) { return new (t || InvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService)); };
InvoiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InvoiceComponent, selectors: [["app-invoice"]], decls: 161, vars: 36, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "title"], ["nz-row", "", 1, "cus-row"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content", "item-cus"], [1, "ng-item", "center-all-content", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["xmlns", "http://www.w3.org/2000/svg", "width", "59.999", "height", "60", "viewBox", "0 0 59.999 60"], ["id", "Group_12747", "data-name", "Group 12747", "transform", "translate(-29.177 -332.395)"], ["fill", "var(--ion-color-vh-green)", "id", "Path_31150", "data-name", "Path 31150", "d", "M47.278,353.163h8a1.5,1.5,0,0,0,0-3h-8a1.5,1.5,0,0,0,0,3Z"], ["fill", "var(--ion-color-vh-green)", "id", "Ellipse_891", "data-name", "Ellipse 891", "cx", "1.5", "cy", "1.5", "r", "1.5", "transform", "translate(40.778 350.163)"], ["fill", "var(--ion-color-vh-green)", "id", "Path_31151", "data-name", "Path 31151", "d", "M62.278,357.516h-15a1.5,1.5,0,0,0,0,3h15a1.5,1.5,0,0,0,0-3Z"], ["fill", "var(--ion-color-vh-green)", "id", "Ellipse_892", "data-name", "Ellipse 892", "cx", "1.5", "cy", "1.5", "r", "1.5", "transform", "translate(40.778 357.516)"], ["fill", "var(--ion-color-vh-green)", "id", "Path_31152", "data-name", "Path 31152", "d", "M62.278,364.869h-15a1.5,1.5,0,0,0,0,3h15a1.5,1.5,0,0,0,0-3Z"], ["fill", "var(--ion-color-vh-green)", "id", "Ellipse_893", "data-name", "Ellipse 893", "cx", "1.5", "cy", "1.5", "r", "1.5", "transform", "translate(40.778 364.869)"], ["fill", "var(--ion-color-vh-green)", "id", "Path_31153", "data-name", "Path 31153", "d", "M62.278,372.222h-15a1.5,1.5,0,0,0,0,3h15a1.5,1.5,0,0,0,0-3Z"], ["fill", "var(--ion-color-vh-green)", "id", "Ellipse_894", "data-name", "Ellipse 894", "cx", "1.5", "cy", "1.5", "r", "1.5", "transform", "translate(40.778 372.222)"], ["fill", "var(--ion-color-vh-green)", "id", "Path_31154", "data-name", "Path 31154", "d", "M74.676,332.395a14.505,14.505,0,0,0-12.943,8H40.679a6.524,6.524,0,0,0-6.5,6.51v35.084H30.611a1.434,1.434,0,0,0-1.434,1.434v2.472s-.065,6.5,3.185,6.5H63.875a6.523,6.523,0,0,0,6.5-6.509V360.745a14.5,14.5,0,1,0,4.3-28.35Zm-41.46,57c-1.039-.619-1.037-2.214-1.039-3.5v-.9H57.365v.9c0,1.291-.039,2.71,1.039,3.5Zm34.163-3.509a3.506,3.506,0,1,1-7.013,0v-1.892a1.966,1.966,0,0,0-2.007-2H37.176V346.9a3.519,3.519,0,0,1,3.507-3.509H60.621A14.376,14.376,0,0,0,67.379,359.4Zm7.3-27.491a11.5,11.5,0,1,1,11.5-11.5A11.514,11.514,0,0,1,74.676,358.395Z"], ["fill", "var(--ion-color-vh-green)", "id", "Path_31155", "data-name", "Path 31155", "d", "M75.766,345.235l-1.143-.34a5.437,5.437,0,0,1-.977-.4,1.346,1.346,0,0,1-.786-1.268,1.46,1.46,0,0,1,.532-1.263,1.965,1.965,0,0,1,3.023.618,1.546,1.546,0,0,0,1.5,1.5,1.5,1.5,0,0,0,1.5-1.5,4.489,4.489,0,0,0-3.239-3.766v-.923a1.5,1.5,0,0,0-3,0v1a4.713,4.713,0,0,0-1.835,1.046,4.4,4.4,0,0,0-1.435,3.351,3.946,3.946,0,0,0,1.386,3.209,5.584,5.584,0,0,0,1.367.794,13.316,13.316,0,0,0,1.541.54c.444.132.814.257,1.093.37a4.158,4.158,0,0,1,.87.489,1.776,1.776,0,0,1,.732,1.509,2.029,2.029,0,0,1-.634,1.519,2.088,2.088,0,0,1-1.531.609,1.917,1.917,0,0,1-2.225-1.893v-.6a1.5,1.5,0,0,0-3,0l.01.261a4.833,4.833,0,0,0,3.661,4.834v.967a1.5,1.5,0,0,0,3,0v-.964a4.967,4.967,0,0,0,2.15-1.218,4.765,4.765,0,0,0,1.522-3.572,4.61,4.61,0,0,0-1.19-3.212A6.28,6.28,0,0,0,75.766,345.235Z"], [1, "center-text"], ["height", "60", "viewBox", "0 0 64 64", "width", "60", "xmlns", "http://www.w3.org/2000/svg"], ["id", "Invoice"], ["fill", "var(--ion-color-vh-green)", "d", "m12 25h2v2h-2z"], ["fill", "var(--ion-color-vh-green)", "d", "m16 25h28v2h-28z"], ["fill", "var(--ion-color-vh-green)", "d", "m12 29h2v2h-2z"], ["fill", "var(--ion-color-vh-green)", "d", "m16 29h28v2h-28z"], ["fill", "var(--ion-color-vh-green)", "d", "m12 33h2v2h-2z"], ["fill", "var(--ion-color-vh-green)", "d", "m16 33h28v2h-28z"], ["fill", "var(--ion-color-vh-green)", "d", "m12 37h2v2h-2z"], ["fill", "var(--ion-color-vh-green)", "d", "m16 37h28v2h-28z"], ["fill", "var(--ion-color-vh-green)", "d", "m54 8a1 1 0 0 0 1-1 5.006 5.006 0 0 0 -5-5h-37a5.006 5.006 0 0 0 -5 5v49h-5a1 1 0 0 0 -1 1c0 5 5.269 5 7 5h38a1 1 0 0 0 1-1v-53zm-1.171-2h-4.829v-2h2a3.006 3.006 0 0 1 2.829 2zm-43.829 54c-3.323 0-4.53-.769-4.879-2h33a3.889 3.889 0 0 0 1.246 2zm37 0c-1.642 0-7-.216-7-3a1 1 0 0 0 -1-1h-28v-49a3 3 0 0 1 3-3h33z"], ["fill", "var(--ion-color-vh-green)", "d", "m32 50h12v2h-12z"], ["fill", "var(--ion-color-vh-green)", "d", "m36 46h8v2h-8z"], ["fill", "var(--ion-color-vh-green)", "d", "m22 8h12v2h-12z"], ["fill", "var(--ion-color-vh-green)", "d", "m16 12h28v2h-28z"], ["fill", "var(--ion-color-vh-green)", "d", "m12 16h32v2h-32z"], ["fill", "var(--ion-color-vh-green)", "d", "m61 15h-2v-3a1 1 0 0 0 -1-1h-4a1 1 0 0 0 -1 1v29a1 1 0 0 0 .1.447l2 4a1 1 0 0 0 1.79 0l2-4a1 1 0 0 0 .11-.447v-24h1v7h2v-8a1 1 0 0 0 -1-1zm-4-2v2h-2v-2zm0 27.764-1 2-1-2v-23.764h2z"], ["fill", "var(--ion-color-vh-green)", "d", "m55 50h-5v2h6a1 1 0 0 0 1-1v-3h-2z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "60", "height", "60", "viewBox", "0 0 25 31.836"], ["id", "Group_1859", "data-name", "Group 1859", "transform", "translate(-55.001)"], ["fill", "var(--ion-color-vh-green)", "id", "Path_1837", "data-name", "Path 1837", "d", "M79.778,13.91l-1.551-2.648a.579.579,0,0,0-.3-.261l-.037-.014L70.437,8.494l.93-1.432a.622.622,0,0,0-.521-.96H69.823V.622A.622.622,0,0,0,69.2,0H65.8a.622.622,0,0,0-.622.622V6.1H64.156a.622.622,0,0,0-.522.96l.93,1.432L57.081,11a.487.487,0,0,0-.25.182L55.224,13.91a1.628,1.628,0,0,0,.8,2.336l.661.263v10.07a1.8,1.8,0,0,0,1.159,1.673L67.282,31.8a.624.624,0,0,0,.437,0l9.435-3.545a1.8,1.8,0,0,0,1.159-1.673V16.508l.661-.263a1.628,1.628,0,0,0,.8-2.336ZM65.8,7.345a.622.622,0,0,0,.622-.622V1.244H68.58v5.48a.622.622,0,0,0,.622.622h.5l-2.2,3.388L65.3,7.345Zm1.179,4.869a.622.622,0,0,0,1.043,0l1.716-2.643,6.117,2.047L67.5,14.838l-8.354-3.219,6.117-2.047ZM56.265,14.858a.38.38,0,0,1,.032-.319l1.283-2.191,8.974,3.458L65,18.144a.386.386,0,0,1-.462.145l-8.051-3.2A.379.379,0,0,1,56.265,14.858Zm20.8,11.721a.546.546,0,0,1-.352.509l-8.594,3.229V27.242a.622.622,0,1,0-1.244,0v3.074l-8.595-3.229a.546.546,0,0,1-.352-.509V17l6.147,2.442a1.613,1.613,0,0,0,.6.114,1.636,1.636,0,0,0,1.361-.726l.843-1.268v4.054a.622.622,0,0,0,1.244,0V17.564l.843,1.268a1.636,1.636,0,0,0,1.361.726,1.61,1.61,0,0,0,.6-.114L77.069,17Zm1.667-11.721a.379.379,0,0,1-.222.232l-8.051,3.2A.386.386,0,0,1,70,18.144l-1.553-2.339,8.974-3.458L78.7,14.538A.379.379,0,0,1,78.736,14.858Z"], ["fill", "var(--ion-color-vh-green)", "id", "Path_1838", "data-name", "Path 1838", "d", "M246.678,383.984a.623.623,0,1,1,.611-.5A.628.628,0,0,1,246.678,383.984Z", "transform", "translate(-179.178 -358.944)", "fill", "#00a859"], ["id", "Group_1860", "data-name", "Group 1860", "transform", "translate(-55.89 0.998)"], ["fill", "var(--ion-color-vh-green)", "id", "Path_1835", "data-name", "Path 1835", "d", "M80.666,12.912l-1.55-2.647-.065-.091A.619.619,0,0,0,78.8,10L70.712,7.29V5.4h1.022a.622.622,0,0,0,.522-.961L68.911-.715A.622.622,0,0,0,68.39-1a.622.622,0,0,0-.522.283L64.523,4.437a.622.622,0,0,0,.521.96h1.022V7.29L57.964,10a.618.618,0,0,0-.3.263l-1.549,2.645a1.628,1.628,0,0,0,.8,2.335l.661.263V25.58a1.8,1.8,0,0,0,1.159,1.673L68.171,30.8a.621.621,0,0,0,.437,0l9.435-3.545A1.8,1.8,0,0,0,79.2,25.58V15.51l.661-.263a1.628,1.628,0,0,0,.8-2.336ZM68.39.766l2.2,3.388h-.5a.622.622,0,0,0-.622.622v5.48H67.311V4.776a.622.622,0,0,0-.622-.622h-.5ZM66.689,11.5h3.4a.622.622,0,0,0,.622-.622V8.6l6.032,2.019L68.39,13.84,60.035,10.62,66.067,8.6v2.276A.622.622,0,0,0,66.689,11.5Zm-9.534,2.36a.381.381,0,0,1,.032-.319l1.283-2.191,8.974,3.458-1.553,2.338a.386.386,0,0,1-.462.145l-8.051-3.2A.379.379,0,0,1,57.154,13.86Zm20.8,11.721a.546.546,0,0,1-.352.509l-8.594,3.229V26.244a.622.622,0,0,0-1.244,0v3.074l-8.594-3.229a.546.546,0,0,1-.352-.509V16l6.147,2.442a1.61,1.61,0,0,0,.6.114,1.636,1.636,0,0,0,1.361-.726l.843-1.269V20.62a.622.622,0,1,0,1.244,0V16.566l.843,1.269a1.636,1.636,0,0,0,1.361.726,1.611,1.611,0,0,0,.6-.114L77.958,16ZM79.625,13.86a.379.379,0,0,1-.222.232l-8.051,3.2a.387.387,0,0,1-.462-.145l-1.554-2.338L78.31,11.35l1.283,2.191A.38.38,0,0,1,79.625,13.86Z", "transform", "translate(0 0)"], ["fill", "var(--ion-color-vh-green)", "id", "Path_1836", "data-name", "Path 1836", "d", "M247.181,382.236a.62.62,0,1,1,.612-.519A.626.626,0,0,1,247.181,382.236Z", "transform", "translate(-178.791 -358.194)"], ["xmlns", "http://www.w3.org/2000/svg", "width", "60", "height", "60", "viewBox", "0 0 60 60"], ["id", "Group_12500", "data-name", "Group 12500", "transform", "translate(-1128 -32.387)"], ["fill", "var(--ion-color-vh-green)", "id", "Path_30949", "data-name", "Path 30949", "d", "M1177.332,75.886A3.672,3.672,0,0,0,1181,72.217V59.055a3.672,3.672,0,0,0-3.668-3.668h-6.664A3.672,3.672,0,0,0,1167,59.055V72.218a3.672,3.672,0,0,0,3.668,3.668ZM1170,72.218V59.055a.668.668,0,0,1,.668-.668h6.664a.668.668,0,0,1,.668.668V72.217a.668.668,0,0,1-.668.669h-6.665A.668.668,0,0,1,1170,72.218Z"], ["fill", "var(--ion-color-vh-green)", "id", "Path_30950", "data-name", "Path 30950", "d", "M1186.448,47.15,1161.408,33.6a5.39,5.39,0,0,0-6.816,0l-25.04,13.549A3,3,0,0,0,1128,49.777v.169h.016a1.493,1.493,0,0,0,2.984-.081c0-.028-.014-.051-.016-.079L1156.02,36.24l.233-.127.208-.165a2.391,2.391,0,0,1,3.078,0l.208.165.233.127,24.234,13.112a1.5,1.5,0,0,1,.786,1.319V87.887a1.5,1.5,0,0,1-1.5,1.5h-18a1.5,1.5,0,0,0,0,3h18a4.5,4.5,0,0,0,4.5-4.5V49.777A3,3,0,0,0,1186.448,47.15Z"], ["fill", "var(--ion-color-vh-green)", "id", "Path_30951", "data-name", "Path 30951", "d", "M1164,81.886h16.5a1.5,1.5,0,0,0,0-3H1164v-22a1.5,1.5,0,1,0-3,0V69.939a3.551,3.551,0,0,0-.529-.053h-7.851l-7.265-11.851c-1.878-3.612-4.617-3.568-4.865-3.56H1129.5a1.5,1.5,0,0,0-1.5,1.5V84.357a3.534,3.534,0,0,0,3.529,3.529h1.684a5.971,5.971,0,0,0,11.575,0h2.425a5.971,5.971,0,0,0,11.575,0h1.683A3.534,3.534,0,0,0,1164,84.357Zm-33-24.411h9.51c.049,0,1.2.062,2.236,2.036l6.356,10.376h-17.573a3.551,3.551,0,0,0-.529.053Zm8,31.912a3,3,0,1,1,3-3A3,3,0,0,1,1139,89.387Zm14,0a3,3,0,1,1,3-3A3,3,0,0,1,1153,89.387Zm8-15.376V84.357a.53.53,0,0,1-.529.529h-1.684a5.971,5.971,0,0,0-11.574,0h-2.426a5.971,5.971,0,0,0-11.574,0h-1.684a.53.53,0,0,1-.529-.529V79.112h0v-5.1h0v-.6a.53.53,0,0,1,.529-.529h28.942a.53.53,0,0,1,.529.529Z"], ["src", "./assets/icon/management/temporary-purchase.svg"], ["src", "./assets/icon/management/invoice_temp.svg"], ["src", "assets/icon/management/stock/xuat_huy.svg"], ["src", "./assets/icon/management/einvoice.svg"]], template: function InvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvoiceComponent_Template_div_click_8_listener() { return ctx.gotoOrderInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "circle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "circle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "circle", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "circle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvoiceComponent_Template_div_click_29_listener() { return ctx.gotoIngredient(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "path", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvoiceComponent_Template_div_click_56_listener() { return ctx.gotoImportSupplier(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvoiceComponent_Template_div_click_69_listener() { return ctx.gotoKitchenReturn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "g", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvoiceComponent_Template_div_click_82_listener() { return ctx.gotoIngradientReturn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "g", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvoiceComponent_Template_div_click_95_listener() { return ctx.gotoForTheKitchen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "g", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "path", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvoiceComponent_Template_div_click_108_listener() { return ctx.gotoOpeningStock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "svg", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "g", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "path", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "path", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvoiceComponent_Template_div_click_122_listener() { return ctx.gotoTemporaryPurchase(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](125, "ion-icon", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvoiceComponent_Template_div_click_132_listener() { return ctx.gotoTemporaryOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "ion-icon", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](140, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvoiceComponent_Template_div_click_142_listener() { return ctx.gotoDestroyProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](145, "ion-icon", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](150, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InvoiceComponent_Template_div_click_152_listener() { return ctx.gotoInvoiceEInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "ion-icon", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, "Invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 14, "Sales invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 16, "Ingredient invoices"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](67, 18, "Purchase ingredient"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](80, 20, "Entering ingredient from kitchen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](93, 22, "Return ingredient for supplier"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](106, 24, "Issuing ingredient for kitchen"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](120, 26, "Create opening stock"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](130, 28, "Temporary purchase invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](140, 30, "Temporary sales invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](150, 32, "Destroy invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](160, 34, "E-Invoice"));
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  margin-top: 30px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%] {\n  max-width: 1366px;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 3px 6px #00000040;\n  border-radius: 15px;\n  flex-direction: column;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .item-cus[_ngcontent-%COMP%] {\n  padding: 16px;\n  height: 24vh;\n}\n.center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludm9pY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFBRTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUFFO0VBQ0UsaUJBQUE7RUFFQSxlQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUVOO0FBRE07RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUFHUjtBQUNFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUFDSjtBQUVBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJpbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibnotbGF5b3V0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBoZWlnaHQ6OTUlO1xyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxuICAuY3VzLXJvdyB7XHJcbiAgICBtYXgtd2lkdGg6IDEzNjZweDtcclxuICAgXHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAubmctaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDA0MDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pdGVtLWN1cyB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAyNHZoO1xyXG4gIH1cclxufVxyXG4uY2VudGVyLXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 13022:
/*!************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/invoice/invoice.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceModule": () => (/* binding */ InvoiceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.component */ 91045);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: '',
        component: _invoice_component__WEBPACK_IMPORTED_MODULE_0__.InvoiceComponent
    },
    {
        path: 'order-invoice',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_interface_vh-order-invoice_ts"), __webpack_require__.e("src_app_cafe_desktop_menu_management_invoice_order-invoice_order-invoice_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./order-invoice/order-invoice.module */ 6600)).then(m => m.OrderInvoiceModule)
    },
    {
        path: 'ingredient',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_cafe_desktop_menu_management_invoice_ingredient_ingredient_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./ingredient/ingredient.module */ 41037)).then(m => m.IngredientModule)
    },
    {
        path: 'import-kitchen',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_components_search_search_module_ts"), __webpack_require__.e("default-src_app_cafe_desktop_menu_management_invoice_purchase_add_components_component_module_ts"), __webpack_require__.e("default-src_app_cafe_components_bill-type_bill-type-16_bill-type16_module_ts"), __webpack_require__.e("src_app_cafe_desktop_menu_management_invoice_import-kitchen_import-kitchen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./import-kitchen/import-kitchen.module */ 72253)).then(m => m.ImportKitchenModule)
    },
    {
        path: 'purchase',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_components_search_search_module_ts"), __webpack_require__.e("default-src_app_cafe_desktop_menu_management_invoice_purchase_add_components_component_module_ts"), __webpack_require__.e("default-src_app_cafe_components_bill-type_bill-type-2_bill-type2_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_menu_management_invoice_purchase_purchase_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./purchase/purchase.module */ 82674)).then(m => m.PurchaseModule)
    },
    {
        path: 'export-kitchen',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_components_search_search_module_ts"), __webpack_require__.e("default-src_app_cafe_desktop_menu_management_invoice_purchase_add_components_component_module_ts"), __webpack_require__.e("default-src_app_cafe_components_bill-type_bill-type-3_bill-type3_module_ts"), __webpack_require__.e("src_app_cafe_desktop_menu_management_invoice_export-kitchen_export-kitchen_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./export-kitchen/export-kitchen.module */ 18364)).then(m => m.ExportKitchenModule)
    },
    {
        path: 'return-supplier',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_components_search_search_module_ts"), __webpack_require__.e("default-src_app_cafe_desktop_menu_management_invoice_purchase_add_components_component_module_ts"), __webpack_require__.e("default-src_app_cafe_components_bill-type_bill-type-10_bill-type10_module_ts"), __webpack_require__.e("src_app_cafe_desktop_menu_management_invoice_return-supplier_return-supplier_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./return-supplier/return-supplier.module */ 19366)).then(m => m.ReturnSupplierModule)
    },
    {
        path: 'opening-stock',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_components_search_search_module_ts"), __webpack_require__.e("default-src_app_cafe_desktop_menu_management_invoice_purchase_add_components_component_module_ts"), __webpack_require__.e("src_app_cafe_desktop_menu_management_invoice_opening-stock_opening-stock_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./opening-stock/opening-stock.module */ 21569)).then(m => m.OpeningStockModule)
    },
    {
        path: 'temporary-order-invoice',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_interface_vh-order-invoice_ts"), __webpack_require__.e("src_app_cafe_desktop_menu_management_invoice_temporary-order-invoice_temporary-order-invoice_-c310f0")]).then(__webpack_require__.bind(__webpack_require__, /*! ./temporary-order-invoice/temporary-order-invoice.module */ 48088)).then(m => m.TemporaryOrderInvoiceModule)
    },
    {
        path: 'temporary-purchase-invoice',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_components_search_search_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cafe_desktop_menu_management_invoice_temporary-purchase-invoice_temporary-purchase-in-77d7bc")]).then(__webpack_require__.bind(__webpack_require__, /*! ./temporary-purchase-invoice/temporary-purchase-invoice.module */ 8338)).then(m => m.TemporaryPurchaseInvoiceModule)
    },
    {
        path: 'destroy-product',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_components_search_search_module_ts"), __webpack_require__.e("default-src_app_cafe_desktop_menu_management_invoice_purchase_add_components_component_module_ts"), __webpack_require__.e("default-src_app_cafe_components_bill-type_bill-type-38_bill-type-38_module_ts"), __webpack_require__.e("src_app_cafe_desktop_menu_management_invoice_destroy-product_destroy-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./destroy-product/destroy-product.module */ 25858)).then(m => m.DestroyProductModule)
    },
    {
        path: 'e-invoice',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_cafe_services_bill_service_ts"), __webpack_require__.e("src_app_cafe_desktop_menu_management_invoice_e-invoice_e-invoice_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./e-invoice/e-invoice.module */ 28368)).then(m => m.EInvoiceModule)
    },
];
class InvoiceModule {
}
InvoiceModule.ɵfac = function InvoiceModule_Factory(t) { return new (t || InvoiceModule)(); };
InvoiceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InvoiceModule });
InvoiceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InvoiceModule, { declarations: [_invoice_component__WEBPACK_IMPORTED_MODULE_0__.InvoiceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_invoice_invoice_module_ts.js.map