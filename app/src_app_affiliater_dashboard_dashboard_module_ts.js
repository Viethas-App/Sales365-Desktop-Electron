"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_affiliater_dashboard_dashboard_module_ts"],{

/***/ 88221:
/*!*************************************************************!*\
  !*** ./src/app/affiliater/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic/angular */ 7602);
















function DashboardComponent_nz_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, item_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzValue", item_r5.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r5.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r5.name, " ");
} }
function DashboardComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
} if (rf & 2) {
    const selected_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "assets/icon/settings/language/", selected_r6.nzValue, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", selected_r6.nzLabel, " ");
} }
function DashboardComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "Qu\u1EA3n l\u00ED t\u00E0i kho\u1EA3n"));
} }
const _c0 = function (a0) { return { "sider-icon": a0 }; };
class DashboardComponent {
    constructor(router, translateService, vhAuth, languageService, vhComponent) {
        this.router = router;
        this.translateService = translateService;
        this.vhAuth = vhAuth;
        this.languageService = languageService;
        this.vhComponent = vhComponent;
        this.lang = this.vhAuth.localStorageGET('language_code');
        this.langList = [
            { name: 'Vietnamese', value: 'vi', img: 'assets/icon/settings/language/vi.svg', country_code: 'VN' },
            { name: 'English', value: 'en', img: 'assets/icon/settings/language/en.svg', country_code: 'US' }
        ];
        this.user = this.vhAuth.getUser(); // thông tin tài khoản hiện tại
        /**Expand */
        this.isExpand = false;
        this.openSubMap = {
            sub1: false,
            sub2: false,
            sub4: false,
            sub5: false,
        };
    }
    ngOnInit() {
    }
    expand() {
        this.isExpand = !this.isExpand;
    }
    /**
     * xử lý mở ra hoặc thu lại thanh sub-menu cấp 2
     * @param value : vị trí cần mở
     * @example this.openHandler('sub1')
     */
    openSubHandler(value) {
        for (const key in this.openSubMap) {
            if (key !== value) {
                this.openSubMap[key] = false;
            }
        }
    }
    /**
     * thiết lập lại ngôn ngữ hiển thị trên app
     * @param value biến giá trị language đã chọn
     * @example this.selectLang('vi')
     */
    selectLang(value) {
        let lang = this.langList.find(item => item.value == value);
        this.vhAuth.localStorageSET('language_code', value);
        this.vhAuth.localStorageSET('country_code', lang.country_code);
        localStorage.setItem("vh-sales-language", value);
        this.translateService.use(value);
        this.languageService.switchLanguage(value);
    }
    gotoOverview() {
        this.router.navigate(['/affiliater/dashboard/overviews']);
    }
    gotoMangeShopFree() {
        this.router.navigate(['/affiliater/dashboard/manage-shop-free']);
    }
    gotoMangeShopPayment() {
        this.router.navigate(['/affiliater/dashboard/manage-shop-payment']);
    }
    gotoManageProduct() {
        this.router.navigate(['/affiliater/dashboard/manage-product']);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 50, vars: 34, consts: [[2, "height", "100%"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12", 1, "logo", 2, "height", "100%"], ["src", "assets/img/logo_sky-blue-theme.png", 2, "height", "50px"], ["target", "_blank", "href", "https://zalo.me/0934606060"], ["src", "assets/Hotline a.Huy.png", 2, "height", "36px", "margin-left", "20px"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content", "info"], ["nzBorderless", "", 1, "select-lang", 3, "ngModel", "nzCustomTemplate", "ngModelChange"], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["defaultTemplate", ""], [1, "center-col", 2, "cursor", "pointer", "height", "100%"], [2, "white-space", "nowrap", "font-size", "0.9rem", "margin-right", "4px", "text-transform", "capitalize"], [3, "nzSrc"], ["nzTheme", "light", 1, "ant-table-body", "not-expand"], ["nz-menu", "", "nzMode", "inline", 1, "sider-menu", "ant-table-body", 2, "width", "100%"], ["nzSelected", "", "nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", 2, "margin", "0", 3, "nzTooltipTitle", "click"], ["src", "assets/icon/overviews/overviews.svg"], ["nz-menu-item", "", "nz-tooltip", "", "nzTooltipPlacement", "right", 2, "margin", "0", 3, "nzTooltipTitle", "click"], ["name", "cube"], ["nz-submenu", "", 2, "margin", "0", 3, "nzTitle", "ngClass", "nzOpen", "nzOpenChange"], ["titleTplPrintSetting", ""], ["name", "key-outline"], [1, "inner-layout"], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [2, "width", "24px", 3, "src"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_nz_select_ngModelChange_9_listener($event) { return ctx.lang = $event; })("ngModelChange", function DashboardComponent_Template_nz_select_ngModelChange_9_listener($event) { return ctx.selectLang($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DashboardComponent_nz_option_10_Template, 4, 6, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, DashboardComponent_ng_template_11_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "nz-avatar", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "nz-sider", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_20_listener() { return ctx.gotoOverview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_26_listener() { return ctx.gotoManageProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_32_listener($event) { return ctx.openSubMap.sub4 = $event; })("nzOpenChange", function DashboardComponent_Template_li_nzOpenChange_32_listener() { return ctx.openSubHandler("sub1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, DashboardComponent_ng_template_33_Template, 4, 3, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_36_listener() { return ctx.gotoMangeShopFree(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DashboardComponent_Template_li_click_42_listener() { return ctx.gotoMangeShopPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "ion-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "nz-layout", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.lang)("nzCustomTemplate", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.langList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.user.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSrc", ctx.user.img ? ctx.user.img : "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/template/avatar-shop.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 16, "Overviews"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 18, "Overviews"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 20, "Qu\u1EA3n l\u00ED s\u1EA3n ph\u1EA9m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 22, "Qu\u1EA3n l\u00ED s\u1EA3n ph\u1EA9m"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzTitle", _r3)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](32, _c0, ctx.isExpand))("nzOpen", ctx.openSubMap.sub4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 24, "Kh\u00E1ch h\u00E0ng \u0111ang d\u00F9ng th\u1EED, ch\u01B0a thanh to\u00E1n"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 26, "Kh\u00E1ch h\u00E0ng \u0111ang d\u00F9ng th\u1EED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 28, "Kh\u00E1ch h\u00E0ng \u0111\u00E3 thanh to\u00E1n"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 30, "Kh\u00E1ch h\u00E0ng \u0111\u00E3 thanh to\u00E1n"));
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__.NzLayoutComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__.NzHeaderComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_11__.NzAvatarComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__.NzSiderComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_12__.NzMenuDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_12__.NzMenuItemDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__.NzTooltipDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_15__.IonIcon, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_12__.NzSubMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_8__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".logo[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  float: left;\n}\n\nul[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n}\n\nspan[_ngcontent-%COMP%], li[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\nspan[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\nnz-sider[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nnz-sider[_ngcontent-%COMP%]   ul.sider-menu[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  height: calc(100% - 40px);\n  overflow-y: auto;\n}\n\nnz-sider[_ngcontent-%COMP%]   .btn_banhang[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 8px 0;\n  text-align: center;\n}\n\nnz-sider[_ngcontent-%COMP%]   .btn_banhang[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-right: 0;\n  margin: auto;\n}\n\nnz-sider[_ngcontent-%COMP%]   .btn_banhang[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.sider-menu-ion[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.header-menu[_ngcontent-%COMP%] {\n  line-height: 64px;\n  background-color: #fff;\n}\n\n.inner-layout[_ngcontent-%COMP%] {\n  padding: 0px 24px 24px 24px;\n  overflow-y: auto;\n}\n\nnz-breadcrumb[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n\nnz-content[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 24px;\n  min-height: 280px;\n}\n\n.ant-layout-header[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding-right: 0;\n  border-bottom: 1px solid #00000014;\n  box-shadow: 0px 2px 6px #00000014;\n}\n\nnz-select[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 134px;\n}\n\n.select-branch[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.select-branch[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-green);\n  margin-right: 5px;\n}\n\n.select-branch-name[_ngcontent-%COMP%] {\n  max-width: 600px;\n  min-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.info[_ngcontent-%COMP%] {\n  height: 100%;\n  padding-right: 24px;\n}\n\nnz-select-top-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.center-col[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  width: 0.5px;\n  height: 70%;\n  background-color: gray;\n}\n\nnz-badge[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\nion-icon[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.center[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  line-height: 4vh !important;\n  align-items: center;\n}\n\n.modal-branch[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.modal-branch-complete[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 8px;\n  left: 0;\n  bottom: 0;\n  background: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  width: 100%;\n  cursor: pointer;\n}\n\n.modal-branch[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.modal-branch[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.modal-branch[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: auto;\n  margin-top: 30px;\n  margin-bottom: 20px;\n}\n\n.modal-branch[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.expand[_ngcontent-%COMP%] {\n  flex: 0 0 5vw !important;\n  min-width: 5vw !important;\n  max-width: 5vw !important;\n}\n\n.not-expand[_ngcontent-%COMP%] {\n  min-width: 20vw !important;\n  flex: 0 0 20vw !important;\n  max-width: 20vw !important;\n}\n\n.button-collapse[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  margin-bottom: 12px;\n  border-radius: 100px !important;\n  width: 33px;\n  height: 33px;\n  box-shadow: 0px 2px 6px #00000014;\n}\n\n.ant-table-body.sub-nz-sider[_ngcontent-%COMP%] {\n  height: 70vh !important;\n}\n\n\n\n.splash[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  top: 50%;\n  left: 50%;\n  margin-left: -25vw;\n  margin-top: -25vh;\n}\n\n@media only screen and (min-width: 768px) {\n  .splash[_ngcontent-%COMP%] {\n    width: 60vw;\n    height: 50vh;\n    top: 50%;\n    left: 50%;\n    margin-left: -30vw;\n    margin-top: -25vh;\n  }\n}\n\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green) !important;\n  border-bottom: 1px solid var(--ion-color-vh-green) !important;\n}\n\nh4[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nli[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green) !important;\n}\n\nli[_ngcontent-%COMP%]:focus {\n  color: var(--ion-color-vh-green) !important;\n}\n\n  .ant-dropdown-menu-item-selected, .ant-dropdown-menu-item-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85) !important;\n  background-color: white !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  border: 3px solid var(--ion-color-vh-green) !important;\n  box-shadow: 0px 3px 6px #00000040;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  margin: 8px;\n  border-radius: 8px;\n}\n\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n\n  .ant-dropdown-menu-submenu-selected .ant-dropdown-menu-submenu-title {\n  color: var(--ion-color-vh-green) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVFO0VBQ0UsZ0NBQUE7QUFDSjs7QUFFRTs7O0VBR0UsaUJBQUE7QUFDSjs7QUFBSTs7Ozs7O0VBRUUsaUJBQUE7QUFNTjs7QUFGRTtFQUNFLFlBQUE7QUFLSjs7QUFKSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQU1OOztBQUpJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQU1OOztBQUxNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFPUjs7QUFOUTtFQUNFLGVBQUE7QUFRVjs7QUFBSTtFQUNFLGlCQUFBO0FBR047O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQ0U7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0FBRUo7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNFO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7QUFFSjs7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFESTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUdOOztBQURJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUdOOztBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQURJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQUdOOztBQUNFO0VBQ0Usa0JBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0FBRUo7O0FBRUk7RUFDRSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDTjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFFSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQU47O0FBRUk7RUFDRSxpQkFBQTtBQUFOOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQU47O0FBRUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFFSTtFQUNFLFVBQUE7QUFBTjs7QUFJRTtFQUNFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQURKOztBQUlFO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBREo7O0FBSUU7RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQURKOztBQUlFO0VBQ0UsdUJBQUE7QUFESjs7QUFJRSxVQUFBOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUdJO0VBUkY7SUFTSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQUFKO0FBQ0Y7O0FBR0U7RUFDRSwyQ0FBQTtFQUNBLDZEQUFBO0FBQUo7O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsMkNBQUE7QUFDSjs7QUFFRTtFQUNFLDJDQUFBO0FBQ0o7O0FBRUU7Ozs7RUFJRSxxQ0FBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBQ0U7RUFDRSxzREFBQTtFQUNBLGlDQUFBO0FBRUo7O0FBQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFESTtFQUNFLGtCQUFBO0FBR047O0FBQ0U7RUFDRSwyQ0FBQTtBQUVKIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgfVxyXG5cclxuICBzcGFuLFxyXG4gIGxpLFxyXG4gIG56LXNlbGVjdC1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgc3BhbixcclxuICAgIGl7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbnotc2lkZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdWwuc2lkZXItbWVudSB7XHJcbiAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIH1cclxuICAgIC5idG5fYmFuaGFuZyB7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNpZGVyLW1lbnUtaW9uIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLW1lbnUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLmlubmVyLWxheW91dCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjRweCAyNHB4IDI0cHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgbnotYnJlYWRjcnVtYiB7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxuICB9XHJcblxyXG4gIG56LWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyODBweDtcclxuICB9XHJcblxyXG4gIC5hbnQtbGF5b3V0LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwMDAwMTQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgfVxyXG5cclxuICBuei1zZWxlY3Qge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtaW4td2lkdGg6IDEzNHB4O1xyXG4gIH1cclxuXHJcbiAgLnNlbGVjdC1icmFuY2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAmLW5hbWUge1xyXG4gICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbmZvIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICBuei1zZWxlY3QtdG9wLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlci1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC5zZXBhcmF0b3Ige1xyXG4gICAgICB3aWR0aDogMC41cHg7XHJcbiAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbnotYmFkZ2Uge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNlbnRlciB7XHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogNHZoICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL21vZGFsIGJyYW5jaFxyXG4gIC5tb2RhbC1icmFuY2gge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICYtY29tcGxldGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGRpdiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgICBuei1zZWxlY3Qge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmV4cGFuZCB7XHJcbiAgICBmbGV4OiAwIDAgNXZ3ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDV2dyAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA1dncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5ub3QtZXhwYW5kIHtcclxuICAgIG1pbi13aWR0aDogMjB2dyAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMCAwIDIwdncgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMjB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1jb2xsYXBzZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDMzcHg7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgfVxyXG5cclxuICAuYW50LXRhYmxlLWJvZHkuc3ViLW56LXNpZGVyIHtcclxuICAgIGhlaWdodDogNzB2aCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIFNZTkMgKi9cclxuXHJcbiAgLnNwbGFzaCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNXZ3O1xyXG4gICAgbWFyZ2luLXRvcDogLTI1dmg7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMzB2dztcclxuICAgICAgbWFyZ2luLXRvcDogLTI1dmg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGg0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGxpOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBsaTpmb2N1cyB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5hbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkLFxyXG4gIC5hbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkID4gYSxcclxuICAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZS1zZWxlY3RlZCxcclxuICAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZS1zZWxlY3RlZCA+IGEge1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSkgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5hY3RpdmUge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDQwO1xyXG4gIH1cclxuXHJcbiAgLnRodW1ibmFpbCB7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1zZWxlY3RlZCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ 59326:
/*!**********************************************************!*\
  !*** ./src/app/affiliater/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ 88221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
        children: [
            {
                path: 'overviews',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_affiliater_dashboard_overviews_overviews_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./overviews/overviews.module */ 4857)).then(m => m.OverviewsModule)
            },
            {
                path: 'manage-shop-free',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_affiliater_dashboard_manage-shop-free_manage-shop-free_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./manage-shop-free/manage-shop-free.module */ 24857)).then(m => m.ManageShopFreeModule)
            },
            {
                path: 'manage-shop-payment',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_affiliater_dashboard_manage-shop-payment_manage-shop-payment_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./manage-shop-payment/manage-shop-payment.module */ 86600)).then(m => m.ManageShopPaymentModule)
            },
            {
                path: 'manage-product',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_affiliater_dashboard_manage-product_manage-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./manage-product/manage-product.module */ 2950)).then(m => m.ManageProductModule)
            },
            // {
            //   path: 'history-payment',
            //   loadChildren: () => import('./history-payment/history-payment.module').then(m => m.HistoryPaymentModule)
            // },
            // {
            //   path: 'manage-keys',
            //   loadChildren: () => import('./manage-keys/manage-keys.module').then(m => m.ManageKeysModule)
            // },
        ]
    },
];
class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_affiliater_dashboard_dashboard_module_ts.js.map