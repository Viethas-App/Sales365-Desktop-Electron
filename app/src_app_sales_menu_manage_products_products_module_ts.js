"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_products_products_module_ts"],{

/***/ 3987:
/*!******************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/products.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);









class ProductsComponent {
    constructor(router, vhAuth, languageService, vhComponent) {
        this.router = router;
        this.vhAuth = vhAuth;
        this.languageService = languageService;
        this.vhComponent = vhComponent;
    }
    ngOnInit() {
    }
    gotoProductsList() {
        if (this.vhAuth.checkMyPermission("product_enable_manage_product"))
            this.router.navigate(['/sales/dashboard/manage/products/products-list']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoProductCategory() {
        if (this.vhAuth.checkMyPermission("product_enable_manage_product_category"))
            this.router.navigate(['/sales/dashboard/manage/products/product-category']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoServicesList() {
        if (this.vhAuth.checkMyPermission("product_enable_manage_service"))
            this.router.navigate(['/sales/dashboard/manage/products/services-list']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoServiceCategory() {
        if (this.vhAuth.checkMyPermission("product_enable_manage_service_category"))
            this.router.navigate(['/sales/dashboard/manage/products/service-category']);
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoCombo() {
        if (this.vhAuth.checkMyPermission('product_enable_manage_combo')) {
            this.router.navigate(['/sales/dashboard/manage/products/combo']);
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoComboCategory() {
        if (this.vhAuth.checkMyPermission('product_enable_manage_combo')) {
            this.router.navigate(['/sales/dashboard/manage/products/combo-category']);
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    gotoPrintBarcodeQick() {
        this.router.navigate(['/sales/dashboard/manage/products/print-barcode']);
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent)); };
ProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 81, vars: 24, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "title"], ["nz-row", "", 1, "cus-row"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content", "item-cus"], [1, "ng-item", "center-all-content", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["src", "assets/icon/management/product_list _desk.svg"], [1, "center-text"], ["src", "assets/icon/management/icon-category-product.svg"], ["src", "assets/icon/management/service_list.svg"], ["src", "assets/icon/management/category_service.svg"], ["xmlns", "http://www.w3.org/2000/svg", "id", "Outline", "viewBox", "0 0 512 512", "width", "512", "height", "512", 2, "height", "4rem", "width", "4rem"], ["fill", "var(--ion-color-vh-green)", "d", "M408,192a40,40,0,1,0,40,40A40.045,40.045,0,0,0,408,192Zm0,16a24.024,24.024,0,0,1,23.989,23.563l-42.909-14.3A23.964,23.964,0,0,1,408,208Zm0,48a24.024,24.024,0,0,1-23.989-23.563l42.909,14.3A23.964,23.964,0,0,1,408,256Z", 1, "a"], ["fill", "var(--ion-color-vh-green)", "d", "M495.887,296a8,8,0,0,0-1.344-4.433l-14.656-21.984V210.422l14.656-21.984A8,8,0,0,0,495.887,184V128c0-30.191-35.353-53.388-48-60.72V64H448a8,8,0,0,0,8-8V24a8,8,0,0,0-8-8H368a8,8,0,0,0-8,8V56a8,8,0,0,0,8,8h.113v3.28c-12.647,7.332-48,30.529-48,60.72v13.035a44,44,0,0,0-27.586-1.159c-.74-10.888-4.866-25.692-20.25-34.63A22.04,22.04,0,0,0,280,88a32.036,32.036,0,0,0-32-32,24.3,24.3,0,0,0-17.336,7.655,25.145,25.145,0,0,0-2.573,3.155A29.692,29.692,0,0,0,216,64a32.009,32.009,0,0,0-27.7,16.008c-.106,0-.209-.008-.315-.008-26.57,0-40.353,10.348-47.237,19.029a43.373,43.373,0,0,0-4.372,6.7,38.426,38.426,0,0,0-9.647-4.813A32.04,32.04,0,0,0,95,73a29.692,29.692,0,0,0-12.091,2.81,25.145,25.145,0,0,0-2.573-3.155A24.3,24.3,0,0,0,63,65,32.036,32.036,0,0,0,31,97a22.128,22.128,0,0,0,10.291,19.184A32.547,32.547,0,0,0,39,129a31.789,31.789,0,0,0,3.375,14.279,35.75,35.75,0,0,0-3.636,2.682c-.059.052-.118.1-.176.158-11.325,10.442-15.892,23.139-13.192,36.192A39.813,39.813,0,0,0,16,208c0,2.426,17.431,154.1,32.053,280.917A8,8,0,0,0,56,496H312a8,8,0,0,0,7.947-7.083s.408-3.54,1.131-9.808A24.028,24.028,0,0,0,344.01,496H471.99a24,24,0,0,0,24-24.014ZM465.23,203.562A8,8,0,0,0,463.887,208v64a8,8,0,0,0,1.343,4.438l14.658,21.986,0,5.576H336.109l0-5.576,14.658-21.986A8,8,0,0,0,352.113,272V208a8,8,0,0,0-1.343-4.438l-14.657-21.984V176H479.887v5.578ZM479.887,136v24H336.113V136ZM376,32h64V48H376Zm3.75,47.125A8,8,0,0,0,384.113,72V64h47.774v8a8,8,0,0,0,4.363,7.125c10.641,5.432,36.161,22.134,42.292,40.875H337.465C343.61,101.31,369.117,84.576,379.75,79.125ZM216,80c2.171,0,7.3,1.327,9.314,4.393a8,8,0,0,0,14.679-4.719,7.148,7.148,0,0,1,2.213-4.939A8.38,8.38,0,0,1,248,72a16.019,16.019,0,0,1,16,16c0,1.583,0,6.4-9.442,8.131a8,8,0,0,0-1.292,15.388c2.016.732,2.734,4.861,2.734,8.481a16,16,0,0,1-32,0,8,8,0,0,0-8-8,16,16,0,0,1,0-32Zm-82.562,44.594a8.061,8.061,0,0,0,6.581,3.446,7.832,7.832,0,0,0,2.043-.271,7.939,7.939,0,0,0,5.886-7,25.846,25.846,0,0,1,5.821-12.394C160.07,100.873,170.237,96.76,184,96.1a32.059,32.059,0,0,0,24.811,31.083,32,32,0,0,0,62.68-1.551c7.353,10.229,4.792,24.062,4.656,24.759a8.015,8.015,0,0,0,12.107,8.37c.663-.411,16.373-9.97,31.319-.091.188.124.357.271.538.4v9.762A39.908,39.908,0,0,0,280,184.025a39.963,39.963,0,0,0-64,0,39.96,39.96,0,0,0-64,0,39.958,39.958,0,0,0-64,0,39.933,39.933,0,0,0-46.945-13.121c1.025-4.473,3.753-8.747,8.216-12.9a27.606,27.606,0,0,1,3.808-2.512,31.987,31.987,0,0,0,49.108-19.311,32.132,32.132,0,0,0,22.355-18.9A27.381,27.381,0,0,1,133.438,124.594Zm15.979,273.135L151.768,480H111.556l-5.3-92.853C118.71,392.078,133.635,395.626,149.417,397.729Zm16.053,1.622c6.162.43,12.367.649,18.53.649s12.368-.219,18.53-.649L200.225,480h-32.45Zm53.113-1.622c15.782-2.1,30.707-5.651,43.166-10.582L256.444,480H216.232ZM184,384c-59.479,0-96-18.638-96-32s36.521-32,96-32,96,18.638,96,32S243.479,384,184,384ZM96,207.838A24,24,0,0,1,144,208c0,.077.009.152.011.228H144l2.812,98.4c-16.5,2.38-31.956,6.356-44.488,11.855Zm109.225,97.014C198.184,304.287,191.064,304,184,304s-14.184.287-21.229.852L160,207.933a24,24,0,0,1,48,0Zm15.956,1.78,2.812-98.4h-.008c0-.076.011-.151.011-.228a24,24,0,0,1,48-.162l-6.323,110.649C253.141,312.988,237.686,309.011,221.185,306.632ZM63,81a8.38,8.38,0,0,1,5.794,2.735,7.148,7.148,0,0,1,2.213,4.939,8,8,0,0,0,14.679,4.719C87.7,90.327,92.829,89,95,89a16,16,0,0,1,0,32,8,8,0,0,0-8,8,16,16,0,0,1-32,0c0-3.62.718-7.749,2.734-8.481a8,8,0,0,0-1.292-15.388C47,103.4,47,98.583,47,97A16.019,16.019,0,0,1,63,81ZM32,207.721A24,24,0,0,1,80,208c0,.154.014.3.023.456h-.01L86.8,327.233C77.542,334.063,72,342.342,72,352c0,10.644,6.729,19.613,17.748,26.812L95.53,480h-32.4C52.189,385.091,32.792,216.355,32,207.721ZM319.931,349.073C313.5,405.122,307.089,460.744,304.869,480h-32.4l5.782-101.188C289.271,371.613,296,362.644,296,352c0-9.658-5.542-17.937-14.8-24.767l6.787-118.776h-.01c.009-.152.023-.3.023-.456a23.984,23.984,0,0,1,32.268-22.524,7.993,7.993,0,0,0,1.189,2.962l14.656,21.984v59.156l-14.656,21.984A8,8,0,0,0,320.113,296l-.031,53.1ZM477.649,477.655A7.948,7.948,0,0,1,471.99,480H344.01a8,8,0,0,1-8-8l.09-152H479.9l.09,152A7.948,7.948,0,0,1,477.649,477.655Z", 1, "a"], ["src", "assets/icon/management/barcode-product.svg"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_8_listener() { return ctx.gotoProductsList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_18_listener() { return ctx.gotoProductCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_28_listener() { return ctx.gotoServicesList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_38_listener() { return ctx.gotoServiceCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_48_listener() { return ctx.gotoCombo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_60_listener() { return ctx.gotoComboCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductsComponent_Template_div_click_72_listener() { return ctx.gotoPrintBarcodeQick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 8, "Products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 10, "Products list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 12, "Product category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 14, "Services list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 16, "Service category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](58, 18, "List of combos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 20, "Combo category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](80, 22, "Print labels in bulk"));
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  margin-top: 30px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%] {\n  width: 95%;\n  max-width: 1366px;\n  margin: auto;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  box-shadow: 0px 3px 6px #00000040;\n  border-radius: 15px;\n  cursor: pointer;\n  flex-direction: column;\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .cus-row[_ngcontent-%COMP%]   .ng-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--ion-color-vh-green);\n}\n.item-cus[_ngcontent-%COMP%] {\n  padding: 16px;\n  height: 24vh;\n}\n.center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FBRUo7QUFBRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRUo7QUFESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUdOO0FBRk07RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUFJUjtBQUZNO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FBSVI7QUFDQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FBRUY7QUFBQTtFQUNFLGtCQUFBO0FBR0YiLCJmaWxlIjoicHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1sYXlvdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogOTUlO1xyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxuICAuY3VzLXJvdyB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAubmctaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDA0MDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICB9XHJcbiAgICAgIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uaXRlbS1jdXMge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgaGVpZ2h0OiAyNHZoO1xyXG59XHJcbi5jZW50ZXItdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 98088:
/*!***************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/products.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.component */ 3987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);








const routes = [
    {
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent
    },
    {
        path: 'products-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_products_products-list_products-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./products-list/products-list.module */ 79640)).then(m => m.ProductsListModule)
    },
    {
        path: 'product-category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_products_product-category_product-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./product-category/product-category.module */ 83041)).then(m => m.ProductCategoryModule)
    },
    {
        path: 'services-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_sales_menu_manage_products_services-list_services-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./services-list/services-list.module */ 77252)).then(m => m.ServicesListModule)
    },
    {
        path: 'service-category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_products_service-category_service-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./service-category/service-category.module */ 20625)).then(m => m.ServiceCategoryModule)
    },
    {
        path: 'combo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_products_combo_combo_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./combo/combo.module */ 25180)).then(m => m.ComboModule)
    },
    {
        path: 'combo-category',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_products_combo-category_combo-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./combo-category/combo-category.module */ 83679)).then(m => m.ComboCategoryModule)
    },
    {
        path: 'print-barcode',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_products_print-barcode_print-barcode_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./print-barcode/print-barcode.module */ 1906)).then(m => m.PrintBarcodeModule)
    },
];
class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_products_products_module_ts.js.map