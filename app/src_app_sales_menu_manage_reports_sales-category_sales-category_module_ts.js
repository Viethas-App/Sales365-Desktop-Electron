"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_reports_sales-category_sales-category_module_ts"],{

/***/ 8688:
/*!**************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/reports/sales-category/sales-category.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesCategoryComponent": () => (/* binding */ SalesCategoryComponent)
/* harmony export */ });
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ 41488);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















const _c0 = function (a0) { return { color: a0 }; };
function SalesCategoryComponent_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesCategoryComponent_i_11_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.showChart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c0, ctx_r0.isChart ? "var(--ion-color-vh-green)" : "black"));
} }
function SalesCategoryComponent_nz_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 22);
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", option_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzValue", option_r7._id);
} }
function SalesCategoryComponent_div_19_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, option_r9.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzValue", option_r9._id);
} }
function SalesCategoryComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzOnSearch", function SalesCategoryComponent_div_19_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.search($event); })("ngModelChange", function SalesCategoryComponent_div_19_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.id_branch_report = $event; })("ngModelChange", function SalesCategoryComponent_div_19_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.changeBranch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SalesCategoryComponent_div_19_nz_option_3_Template, 2, 4, "nz-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, "Select branch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzServerSearch", true)("ngModel", ctx_r2.id_branch_report);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.branchList);
} }
const _c1 = function (a0) { return { display: a0 }; };
function SalesCategoryComponent_div_31_nz_table_1_th_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesCategoryComponent_div_31_nz_table_1_th_18_Template_th_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); ctx_r19.statusbSales = !ctx_r19.statusbSales; return ctx_r19.sort(ctx_r19.statusbSales, "sales_btax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, !ctx_r17.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "Sales before tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzType", ctx_r17.statusbSales == true ? "caret-down" : "caret-up");
} }
function SalesCategoryComponent_div_31_nz_table_1_tr_36_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesCategoryComponent_div_31_nz_table_1_tr_36_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const item_r21 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r23.gotoDetailProducts(item_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const i_r22 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r22 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r21.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r21.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c1, !ctx_r18.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r18.vhAlgorithm.vhcurrencyunit(item_r21.sales_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r18.vhAlgorithm.vhcurrencyunit(item_r21.sales_atax));
} }
const _c2 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c3 = function (a0) { return { y: a0 }; };
function SalesCategoryComponent_div_31_nz_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-table", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesCategoryComponent_div_31_nz_table_1_Template_th_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r25.statusName = !ctx_r25.statusName; return ctx_r25.sortName(ctx_r25.statusName, "name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesCategoryComponent_div_31_nz_table_1_Template_th_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r27.statusQuantity = !ctx_r27.statusQuantity; return ctx_r27.sort(ctx_r27.statusQuantity, "quantity"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, SalesCategoryComponent_div_31_nz_table_1_th_18_Template, 5, 7, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesCategoryComponent_div_31_nz_table_1_Template_th_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r28.statusSales = !ctx_r28.statusSales; return ctx_r28.sort(ctx_r28.statusSales, "sales_atax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, SalesCategoryComponent_div_31_nz_table_1_tr_36_Template, 11, 8, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](29, _c2))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](30, _c3, ctx_r14.heightScroll))("nzData", ctx_r14.dataReport["dataTable"]["docs"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 19, "No."));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 21, "Category name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzType", ctx_r14.statusName == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 23, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzType", ctx_r14.statusQuantity == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.reportConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzWidth", !ctx_r14.reportConfig ? "40%" : "20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 25, "Sales after tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzType", ctx_r14.statusSales == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](29, 27, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r14.dataReport["dataTable"].quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](32, _c1, !ctx_r14.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r14.vhAlgorithm.vhcurrencyunit_symbol(ctx_r14.dataReport["dataTable"].sales_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r14.vhAlgorithm.vhcurrencyunit_symbol(ctx_r14.dataReport["dataTable"].sales_atax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _r16.data);
} }
function SalesCategoryComponent_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "No data"));
} }
function SalesCategoryComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SalesCategoryComponent_div_31_nz_table_1_Template, 37, 34, "nz-table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SalesCategoryComponent_div_31_div_2_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.dataReport["dataTable"]["docs"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.dataReport["dataTable"]["docs"].length == 0);
} }
function SalesCategoryComponent_div_32_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", i_r30.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r30.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r29.vhAlgorithm.vhcurrencyunit(i_r30.value));
} }
function SalesCategoryComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SalesCategoryComponent_div_32_div_5_Template, 6, 4, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.dataReport["dataChart"]);
} }
class SalesCategoryComponent {
    constructor(vhAlgorithm, router, vhComponent, vhQuerySales, vhAuth, languageService, datePipe, cdRef, fncService) {
        this.vhAlgorithm = vhAlgorithm;
        this.router = router;
        this.vhComponent = vhComponent;
        this.vhQuerySales = vhQuerySales;
        this.vhAuth = vhAuth;
        this.languageService = languageService;
        this.datePipe = datePipe;
        this.cdRef = cdRef;
        this.fncService = fncService;
        this.date = [new Date(), new Date()];
        this.reportConfig = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_sales_category;
        this.selectedValue = 'all';
        this.isChart = false;
        this.dataColor = ["#Ffda45", "#48c0e3", "#f9be57", "#ee3d85", "#f8756d", "#c667ca", "#d6df3a", "#06467b", "#3c86c7", "#1fd2cd", "#373737"];
        this.list_show = [];
        this.dataReport = this.initDataReport();
        this.showDataTable = { docs: [], sales_atax: 0, sales_btax: 0, quantity: 0 };
        this.list_category = [
            { _id: 'all', name: this.languageService.translate('All') }
        ];
        this.list_search_category = [];
        this.stateObj = { startTime: '', endTime: '', selectedValue: '' };
        this.branchList = [];
        this.search_branchList = [];
        this.id_branch_report = '';
        this.useBranch = this.fncService.checkUsingBranch();
        //** hàm sort cho các cột */
        this.statusQuantity = false;
        this.statusSales = false;
        this.statusbSales = false;
        this.statusName = false;
        this.date[0].setHours(0, 0, 0, 0);
        this.date[1].setHours(23, 59, 59, 59);
        this.getListCategory();
        this.getBranches();
        let data = this.router.getCurrentNavigation().extras.state;
        if (data) {
            let stateSubObj = data.stateObj;
            this.dataReport = stateSubObj.dataReport;
            this.date = [this.dataReport.startTime, this.dataReport.endTime];
            this.selectedValue = stateSubObj.selectedValue;
            this.id_branch_report = stateSubObj.id_branch_report;
        }
    }
    /**
     * xem báo cáo
     * @example this.showReport()
     */
    showReport() {
        this.dataReport = this.initDataReport(this.date[0], this.date[1]);
        if (this.isChart)
            this.chart.updateOptions(this.initOption([], []));
        if (this.selectedValue != 'all') {
            this.isChart = false;
        }
        this.getSales(this.selectedValue, this.date[0], this.date[1]);
    }
    /**
     * bắt sk thay đổi chi nhánh xem báo cáo
     * @example this.changeBranch('DNWIHDIWUODHOQW')
     */
    changeBranch(event) {
        this.id_branch_report = event;
    }
    ngAfterViewChecked() {
        if (document.querySelector("#sales-category") && document.querySelector(".ant-table-thead") && document.querySelector(".sales-category-header") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.querySelector("#sales-category").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".sales-category-header").clientHeight - document.querySelector(".ant-table-pagination").clientHeight - 65 + "px";
        }
        this.cdRef.detectChanges();
    }
    /**
     * get danh sách danh mục và xữ lý _id
     */
    getListCategory() {
        for (let item of this.vhQuerySales.getlocalCategorys(src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.PRODUCT_SERVICE)) {
            this.list_category.push({ _id: item._id, name: item.name });
        }
        this.list_search_category = this.list_category;
    }
    /**
     * lọc danh mục theo tên
     * @example this.searchCategory('')
     */
    searchCategory(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.list_category = this.vhAlgorithm.searchList(tempVal, this.list_search_category, ['name']);
        else
            this.list_category = this.list_search_category;
    }
    /**
     * sort với trường là dạng số
     * @param sort
     * @param value tên trường cần sort
     * @example this.sort(1, 'total')
     */
    sort(sort, value) {
        if (sort) {
            this.dataReport.dataTable.docs = this.vhAlgorithm.sortNumberbyASC([...this.dataReport.dataTable.docs], value);
        }
        else {
            this.dataReport.dataTable.docs = this.vhAlgorithm.sortNumberbyDESC([...this.dataReport.dataTable.docs], value);
        }
    }
    /**
     * sort với trường là dạng chuỗi
     * @param sort
     * @param value tên trường cần sort
     * @example this.sort(1, 'name')
     */
    sortName(sort, value) {
        if (sort) {
            this.dataReport.dataTable.docs = this.vhAlgorithm.sortVietnamesebyASC([...this.dataReport.dataTable.docs], value);
        }
        else {
            this.dataReport.dataTable.docs = this.vhAlgorithm.sortVietnamesebyDESC([...this.dataReport.dataTable.docs], value);
        }
    }
    initDataReport(startTime = new Date(), endTime = new Date()) {
        startTime.setHours(0, 0, 0, 0);
        endTime.setHours(23, 59, 59, 59);
        return { startTime, endTime, dataChart: [], dataTable: { docs: [], sales_atax: 0, sales_btax: 0, quantity: 0 } };
    }
    /**
     * bắt sk thay đổi danh mục xem báo cáo
     */
    filterProducts(optionValue) {
        this.selectedValue = optionValue;
    }
    /**
     * bắt sk thay đổi thời gian xem báo cáo
     * @param event
     * @example this.changeTime(['2023-06-27T01:21:41.397Z','2023-06-27T01:21:41.397Z'])
     */
    changeTime(event) {
        if (new Date(event[1].setHours(0, 0, 0, 0)).getTime() - new Date(event[0].setHours(0, 0, 0, 0)).getTime() <= this.fncService.checkDateReport() * 86000000) {
            this.dataReport = this.initDataReport(event[0], event[1]);
            if (this.isChart)
                this.chart.updateOptions(this.initOption([], []));
        }
        else {
            this.vhComponent.showToast(4000, this.languageService.translate("The time limit to view is") + " " + this.fncService.checkDateReport() + " " + this.languageService.translate("days"), "alert-toast");
            this.date = [new Date(event[0]), new Date(event[0].getTime() + this.fncService.checkDateReport() * 86000000)];
            this.dataReport = this.initDataReport(new Date(this.date[0]), new Date(this.date[1]));
        }
    }
    /**
     * get dữ liệu báo cáo
     * @example this.getSales('DJKHWBDHWD','2023-06-27T02:09:03.729Z','2023-06-27T02:09:03.729Z')
     */
    getSales(id_category, startDate, endDate) {
        this.vhComponent.showLoadingNotDuration("", "transparent-loading").then(() => {
            this.vhQuerySales.getReportSales_Categorys_byCategorys(startDate, endDate, id_category, 12, this.id_branch_report)
                .then((res) => {
                if (res) {
                    if (!res.empty) {
                        //this.isChart = false
                        let data = res.docs;
                        // dữ liệu dạng chart (hiển thị dữ liệu sau thuế)
                        for (let i = 0; i < 10; i++) {
                            if (!data[i])
                                break;
                            else {
                                this.dataReport['dataChart'].push({
                                    color: this.dataColor[i],
                                    label: data[i]['name'],
                                    value: data[i]['sales_atax'],
                                });
                            }
                        }
                        this.dataReport['dataTable'] = Object.assign({}, res);
                        this.sort(this.statusQuantity, 'quantity');
                    }
                    if (this.isChart)
                        this.updateChart(this.dataReport['dataChart'], true);
                }
                this.vhComponent.hideLoading(0);
            });
        });
    }
    /**
     * hiển thị chart ra giao diện
     * @example this.initChart()
     */
    initChart(data_chart) {
        setTimeout(() => {
            this.chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sales-category-chart"), this.initOption([], []));
            this.chart.render();
            if (data_chart)
                this.updateChart(data_chart);
        }, 200);
    }
    /**
     * bắt sk thay đổi kiểu xem báo cáo (chart or table)
     */
    showChart() {
        this.isChart = !this.isChart;
        this.isChart ? this.initChart(this.dataReport['dataChart']) : this.chart.destroy();
    }
    /**
     * gán lại dữ liệu cho chart
     */
    updateChart(data_chart, initStatus = false) {
        this.chart.updateOptions(this.initOption(!data_chart.length || !data_chart[0].value ? [] : data_chart.map(item => item.value), !data_chart.length || !data_chart[0].value ? [] : data_chart.map(item => item.label), initStatus));
    }
    initOption(series, labels, initStatus = false) {
        return {
            series: series,
            chart: {
                height: "auto",
                type: "pie"
            },
            dataLabels: {
                dropShadow: {
                    enabled: false
                }
            },
            colors: this.dataColor,
            labels: labels,
            fill: {
                type: "solid",
                colors: this.dataColor,
            },
            legend: {
                show: false
            },
            yaxis: {
                labels: {
                    formatter: (value) => {
                        return this.vhAlgorithm.vhcurrencyunit(value);
                    }
                }
            },
            states: {
                active: {
                    filter: {
                        type: "none"
                    }
                },
                normal: {
                    filter: {
                        type: "none"
                    }
                },
                hover: {
                    filter: {
                        type: "none"
                    }
                }
            },
            noData: {
                text: (this.languageService.translate('No data!'))
            }
        };
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/reports']);
    }
    /**
     * get chi nhánh được xem báo cáo của user
     */
    getBranches() {
        let branches = [...this.vhQuerySales.getlocalBranchs()]; // danh sách toàn bộ chi nhánh
        let employee = this.vhAuth.getUser(); // thông tn nhân viên
        let defaultBranch = this.vhQuerySales.getDefaultBranch()._id; // chi nhánh mặc định khi đăng nhập (lấy id chi nhánh)
        if (this.useBranch) { // kiểm tra xem có 2 chi nhánh trở lên
            if (employee['owner'] == 'boss') { // kiểm tra tài khoản đăng nhập là boss
                this.branchList = branches; // gán danh sách chi nhánh show ra HTML
                if (this.branchList.length > 1)
                    this.branchList.unshift({ _id: "all", name: "All" });
                this.id_branch_report = defaultBranch; // gán mặc định chi nhánh mặc định xem báo cáo là chi nhánh đăng nhập vô
            }
            else { // trường hợp tài khoản là nhân viên
                this.vhAuth.getPermission(employee['_id']).then(result => {
                    branches.forEach(item => {
                        if (result[`${item._id}_view_report_branch`])
                            this.branchList.push(Object.assign({}, item)); // kiểm tra chi nhánh đc xem báo cáo, gán cho branchList show ra HMLT 
                    });
                    if (this.branchList.length > 1) { // trường hợp được xem báo cáo 2 chi nhánh trở lên
                        this.branchList.unshift({ _id: "all", name: "All" }); // đẩy xem tất cả vô, nếu có 2 chi nhánh trở lên
                        for (let i in this.branchList) {
                            if (this.branchList[i]._id == defaultBranch)
                                return this.id_branch_report = defaultBranch; // nếu có gán chi nhánh xem báo mặc định là chi nhánh mặc định (đăng nhập)
                            else
                                this.id_branch_report = this.branchList[1]._id; // ngược lại gán chi nhánh mặc định là chi nhánh thứ 1
                        }
                    }
                    else if (this.branchList.length == 1) { // nếu chỉ đc xem báo cáo 1 chi nhánh , lấy mặc định là chi nhánh đó
                        this.id_branch_report = this.branchList[0]._id;
                    }
                    else
                        this.vhComponent.alertMessageDesktop("warning", "Bạn không được chọn chi nhánh xem báo cáo"); // kg có chi nhánh xem báo cáo
                });
            }
            this.search_branchList = this.branchList;
        }
        else
            this.id_branch_report = defaultBranch; // chỉ xài 1 chi nhánh 
    }
    /**
     * lọc chi nhánh theo tên
     * @param value
     */
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.branchList = this.vhAlgorithm.searchList(tempVal, this.search_branchList, ['name']);
        else
            this.branchList = this.search_branchList;
    }
    /**--------------------- */
    gotoDetailProducts(data) {
        let stateObj = { selectedValue: this.selectedValue, id_branch_report: this.id_branch_report, dataReport: this.dataReport };
        this.router.navigate(['/sales/dashboard/manage/reports/sales-category/detail-category'], {
            state: { category: Object.assign({}, data), stateObj }
        });
    }
    /**
     * tải về báo cáo dưới dạng hình ảnh của chart
     * @example this.downloadImg()
     */
    downloadImg() {
        this.vhComponent.downloadImg("chart-image", `${this.languageService.translate("_category_sales_report")}_${this.languageService.translate("_from")}_${this.format_date(this.dataReport.startTime)}_${this.languageService.translate("_to")}_${this.format_date(this.dataReport.endTime)}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQuerySales.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}`).then(() => { });
    }
    /**
     *
     * @param date
     * @returns string
     * @example let date = this.format_date('2023-06-27T01:10:34.396Z') => output '27_06_2023'
     */
    format_date(date) {
        return this.datePipe.transform(date, "dd_MM_yyyy");
    }
    /**
     * xuất dữ liệu sang file excel và tải về
     */
    export() {
        let data = [];
        let name = `${this.languageService.translate("_category_sales_report")}_${this.languageService.translate("_from")}_${this.format_date(this.dataReport.startTime)}_${this.languageService.translate("_to")}_${this.format_date(this.dataReport.endTime)}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQuerySales.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}`;
        let total = new Object();
        // if (this.reportConfig.product_picture)
        //   total[this.languageService.translate('Image')] = "";
        total[this.languageService.translate('Category name')] = this.languageService.translate('Total');
        total[this.languageService.translate('Quantity')] = this.dataReport['dataTable'].quantity;
        if (this.reportConfig)
            total[this.languageService.translate('Sales before tax')] = this.dataReport['dataTable'].sales_btax;
        total[this.languageService.translate('Sales after tax')] = this.dataReport['dataTable'].sales_atax;
        data.push(total);
        for (let _row of this.dataReport['dataTable'].docs) {
            let item = new Object();
            // if (this.reportConfig.product_picture)
            //   item[this.languageService.translate('Image')] = _row.img;
            item[this.languageService.translate('Category name')] = _row.name;
            item[this.languageService.translate('Quantity')] = _row.quantity;
            if (this.reportConfig)
                item[this.languageService.translate('Sales before tax')] = _row.sales_btax;
            item[this.languageService.translate('Sales after tax')] = _row.sales_atax;
            data.push(item);
        }
        this.vhAlgorithm.exportXLSX(data, name).then(() => { }).catch(err => { });
    }
}
SalesCategoryComponent.ɵfac = function SalesCategoryComponent_Factory(t) { return new (t || SalesCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_4__.FunctionService)); };
SalesCategoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SalesCategoryComponent, selectors: [["app-sales-category"]], decls: 33, vars: 26, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "sales-category", 1, "height-header"], ["nz-row", "", 1, "height-layout", "sales-category-header"], ["nz-col", "", 1, "title", "left-all-content", 3, "nzSpan"], ["nz-col", "", "nzSpan", "1", 1, "center-all-content"], ["class", "size-icon", "nz-icon", "", "nzType", "pie-chart", "nzTheme", "outline", 3, "ngStyle", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "appstore", "nzTheme", "outline", 1, "size-icon", 3, "ngStyle", "click"], ["nz-col", "", "nzSpan", "5", 1, "title", "center-all-content"], ["nzShowSearch", "", "nzBorderless", "", 3, "nzServerSearch", "ngModel", "nzOnSearch", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", 1, "left-all-content", 3, "nzSpan"], ["nzFormat", "dd/MM/yyyy", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4", "class", "center-all-content", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "disabled", "click"], ["src", "assets/icon/management/view.svg"], ["style", "padding-top: 20px;", "class", "full-height", 4, "ngIf"], ["style", "padding-top: 20px;", "id", "chart-image", 4, "ngIf"], ["nz-icon", "", "nzType", "pie-chart", "nzTheme", "outline", 1, "size-icon", 3, "ngStyle", "click"], [3, "nzLabel", "nzValue"], ["nz-col", "", "nzSpan", "4", 1, "center-all-content"], ["nzShowSearch", "", "nzBorderless", "", 3, "nzServerSearch", "nzPlaceHolder", "ngModel", "nzOnSearch", "ngModelChange"], [1, "full-height", 2, "padding-top", "20px"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData", 4, "ngIf"], ["nz-row", "", "class", "full-height", 4, "ngIf"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData"], ["salesData", ""], ["nzWidth", "5%"], ["nzWidth", "30%", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "15%", "nzAlign", "center", 2, "cursor", "pointer", 3, "click"], ["style", "cursor: pointer;", "nzWidth", "20%", "nzAlign", "right", 3, "ngStyle", "click", 4, "ngIf"], ["nzAlign", "right", 2, "cursor", "pointer", 3, "nzWidth", "click"], [2, "color", "var(--ion-color-vh-green)"], ["nzAlign", "center", 2, "color", "var(--ion-color-vh-green)", "font-weight", "bold"], ["nzAlign", "right", 2, "color", "var(--ion-color-vh-green)", "font-weight", "bold", 3, "ngStyle"], ["nzAlign", "right", 2, "color", "var(--ion-color-vh-green)", "font-weight", "bold"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "20%", "nzAlign", "right", 2, "cursor", "pointer", 3, "ngStyle", "click"], [2, "cursor", "pointer", 3, "click"], ["nzAlign", "center"], ["nzAlign", "right", 3, "ngStyle"], ["nzAlign", "right"], ["nz-row", "", 1, "full-height"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["id", "chart-image", 2, "padding-top", "20px"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12"], ["id", "sales-category-chart"], ["class", "scroll", 4, "ngFor", "ngForOf"], [1, "scroll"], [1, "khung_l"], [1, "title_l"], [1, "total_l"]], template: function SalesCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesCategoryComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, SalesCategoryComponent_i_11_Template, 1, 3, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesCategoryComponent_Template_i_click_13_listener() { return ctx.isChart = !ctx.isChart; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "nz-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzOnSearch", function SalesCategoryComponent_Template_nz_select_nzOnSearch_15_listener($event) { return ctx.searchCategory($event); })("ngModelChange", function SalesCategoryComponent_Template_nz_select_ngModelChange_15_listener($event) { return ctx.selectedValue = $event; })("ngModelChange", function SalesCategoryComponent_Template_nz_select_ngModelChange_15_listener($event) { return ctx.filterProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, SalesCategoryComponent_nz_option_16_Template, 1, 2, "nz-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "nz-range-picker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SalesCategoryComponent_Template_nz_range_picker_ngModelChange_18_listener($event) { return ctx.date = $event; })("ngModelChange", function SalesCategoryComponent_Template_nz_range_picker_ngModelChange_18_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, SalesCategoryComponent_div_19_Template, 4, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesCategoryComponent_Template_button_click_22_listener() { return ctx.isChart ? ctx.downloadImg() : ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesCategoryComponent_Template_button_click_27_listener() { return ctx.showReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, SalesCategoryComponent_div_31_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, SalesCategoryComponent_div_32_Template, 6, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 16, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 3 : 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 18, "Category sales"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedValue == "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c0, !ctx.isChart ? "var(--ion-color-vh-green)" : "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzServerSearch", true)("ngModel", ctx.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.list_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 6 : 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.useBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 20, "Download"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.id_branch_report.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 22, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedValue == "all" && ctx.isChart);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTbodyComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   #chart-image[_ngcontent-%COMP%] {\n  padding: 0 80px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-category-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1rem auto auto;\n  padding: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .khung_l[_ngcontent-%COMP%] {\n  height: 1rem;\n  width: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .title_l[_ngcontent-%COMP%] {\n  color: var(--ion-color-defaut_black);\n  white-space: normal;\n  padding-left: 8px;\n  font-size: 0.8rem !important;\n}\nnz-layout[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .total_l[_ngcontent-%COMP%] {\n  color: var(--ion-color-defaut_black);\n  white-space: nowrap;\n  font-weight: bold;\n  font-size: 0.8rem !important;\n  text-align: right;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 0.9rem;\n  margin-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%]   .center-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.size-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n  cursor: pointer;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  width: 95% !important;\n}\nnz-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], nz-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBRUE7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7QUFFUjtBQURRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFHWjtBQURRO0VBQ0ksb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFHWjtBQURRO0VBQ0ksb0NBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtBQUdaO0FBQUk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVSO0FBQUk7RUFDSSxpRUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUVSO0FBRFE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBR1o7QUFBSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdaO0FBRUE7RUFDSSw0QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUVBOztFQUVJLGdDQUFBO0FBQ0o7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVBO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtBQUNKO0FBR0k7O0VBRUksdUJBQUE7QUFBUiIsImZpbGUiOiJzYWxlcy1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICB9XHJcbiAgICAjY2hhcnQtaW1hZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgODBweDtcclxuICAgIH1cclxuICAgIC5zYWxlcy1jYXRlZ29yeS1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zY3JvbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxcmVtIGF1dG8gYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgLmtodW5nX2wge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGVfbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGVmYXV0X2JsYWNrKTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b3RhbF9sIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kZWZhdXRfYmxhY2spO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1hZGQge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXZpZXcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iZy1mb290ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgLmNlbnRlci1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNpemUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYW50LWJ0bjpmb2N1cyxcclxuLmFudC1idG46aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuXHJcbi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm56LXRhYmxlIHtcclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 69277:
/*!***********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/reports/sales-category/sales-category.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesCategoryModule": () => (/* binding */ SalesCategoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sales_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-category.component */ 8688);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _sales_category_component__WEBPACK_IMPORTED_MODULE_0__.SalesCategoryComponent
    },
    {
        path: 'detail-category',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_components_bill-detail_customer-return_customer-return_component_ts-src-14e0ee"), __webpack_require__.e("default-src_app_sales_components_bill-detail_delivery-goods_delivery-goods_component_ts-src_a-3f4b1d"), __webpack_require__.e("default-src_app_sales_components_bill-detail_sales-payment-card_sales-payment-card_component_-13f1ad"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sales_menu_manage_reports_sales-category_detail-category_detail-category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./detail-category/detail-category.module */ 51030)).then(m => m.DetailCategoryModule)
    }
];
class SalesCategoryModule {
}
SalesCategoryModule.ɵfac = function SalesCategoryModule_Factory(t) { return new (t || SalesCategoryModule)(); };
SalesCategoryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SalesCategoryModule });
SalesCategoryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SalesCategoryModule, { declarations: [_sales_category_component__WEBPACK_IMPORTED_MODULE_0__.SalesCategoryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_reports_sales-category_sales-category_module_ts.js.map