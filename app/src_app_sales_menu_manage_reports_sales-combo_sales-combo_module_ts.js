"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_reports_sales-combo_sales-combo_module_ts"],{

/***/ 71880:
/*!********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/reports/sales-combo/sales-combo.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesComboComponent": () => (/* binding */ SalesComboComponent)
/* harmony export */ });
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ 41488);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
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
function SalesComboComponent_i_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesComboComponent_i_11_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.showChart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c0, ctx_r0.isChart ? "var(--ion-color-vh-green)" : "black"));
} }
function SalesComboComponent_nz_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 22);
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", option_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzValue", option_r7._id);
} }
function SalesComboComponent_div_19_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, option_r9.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzValue", option_r9._id);
} }
function SalesComboComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("nzOnSearch", function SalesComboComponent_div_19_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.search($event); })("ngModelChange", function SalesComboComponent_div_19_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.id_branch_report = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SalesComboComponent_div_19_nz_option_3_Template, 2, 4, "nz-option", 10);
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
function SalesComboComponent_div_31_nz_table_1_th_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesComboComponent_div_31_nz_table_1_th_19_Template_th_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); ctx_r18.statusbSales = !ctx_r18.statusbSales; return ctx_r18.sort(ctx_r18.statusbSales, "sales_btax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, !ctx_r16.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, "Sales before tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzType", ctx_r16.statusbSales == true ? "caret-down" : "caret-up");
} }
function SalesComboComponent_div_31_nz_table_1_tr_37_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesComboComponent_div_31_nz_table_1_tr_37_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const item_r20 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r21.gotoDetailProducts(item_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r20.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", item_r20.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r20.comboName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r20.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c1, !ctx_r17.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r17.vhAlgorithm.vhcurrencyunit(item_r20.sales_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r17.vhAlgorithm.vhcurrencyunit(item_r20.sales_atax));
} }
const _c2 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c3 = function (a0) { return { y: a0 }; };
function SalesComboComponent_div_31_nz_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "nz-table", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesComboComponent_div_31_nz_table_1_Template_th_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r23.statusName = !ctx_r23.statusName; return ctx_r23.sortName(ctx_r23.statusName, "name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesComboComponent_div_31_nz_table_1_Template_th_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r25.statusQuantity = !ctx_r25.statusQuantity; return ctx_r25.sort(ctx_r25.statusQuantity, "quantity"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, SalesComboComponent_div_31_nz_table_1_th_19_Template, 5, 7, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesComboComponent_div_31_nz_table_1_Template_th_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r26.statusSales = !ctx_r26.statusSales; return ctx_r26.sort(ctx_r26.statusSales, "sales_atax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, SalesComboComponent_div_31_nz_table_1_tr_37_Template, 14, 9, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 20, "No data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](32, _c2))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](33, _c3, ctx_r13.heightScroll))("nzData", ctx_r13.dataReport["dataTable"].docs);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 22, "No."));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 24, "Combo name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzType", ctx_r13.statusName == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 26, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzType", ctx_r13.statusQuantity == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r13.reportConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzWidth", !ctx_r13.reportConfig ? "40%" : "20%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 28, "Sales after tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzType", ctx_r13.statusSales == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 30, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r13.dataReport["dataTable"]["quantity"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](35, _c1, !ctx_r13.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r13.vhAlgorithm.vhcurrencyunit_symbol(ctx_r13.dataReport["dataTable"]["sales_btax"] || 0), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r13.vhAlgorithm.vhcurrencyunit_symbol(ctx_r13.dataReport["dataTable"]["sales_atax"] || 0), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _r15.data);
} }
function SalesComboComponent_div_31_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 48);
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
function SalesComboComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SalesComboComponent_div_31_nz_table_1_Template, 38, 37, "nz-table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SalesComboComponent_div_31_div_2_Template, 5, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.dataReport["dataTable"]["docs"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.dataReport["dataTable"]["docs"].length == 0);
} }
function SalesComboComponent_div_32_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", i_r28.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r28.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r27.vhAlgorithm.vhcurrencyunit(i_r28.value));
} }
function SalesComboComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SalesComboComponent_div_32_div_5_Template, 6, 4, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.dataReport["dataChart"]);
} }
class SalesComboComponent {
    constructor(router, vhAlgorithm, languageService, vhQuerySales, vhComponent, datePipe, cdRef, fncService, vhAuth) {
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.languageService = languageService;
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.datePipe = datePipe;
        this.cdRef = cdRef;
        this.fncService = fncService;
        this.vhAuth = vhAuth;
        this.date = [new Date(), new Date()];
        this.selectedValue = 'all';
        this.listCombo = [{ _id: 'all', name: this.languageService.translate('All') }];
        this.list_search_products = [];
        this.listData = [];
        this.reportConfig = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_sales_combo;
        this.dataReport = this.initDataReport();
        this.isChart = false; // false là bảng true là chart
        this.sales_combo = new Object({ _id: 'all' });
        this.dataColor = ["#Ffda45", "#48c0e3", "#f9be57", "#ee3d85", "#f8756d", "#c667ca", "#d6df3a", "#06467b", "#3c86c7", "#1fd2cd", "#373737"];
        this.useBranch = this.fncService.checkUsingBranch();
        this.branchList = [];
        this.search_branchList = [];
        this.id_branch_report = '';
        //** hàm sort cho các cột */
        this.statusQuantity = false;
        this.statusSales = false;
        this.statusbSales = false;
        this.statusName = false;
        this.date[0].setHours(0, 0, 0, 0);
        this.date[1].setHours(23, 59, 59, 59);
        this.getBranches();
        let data = this.router.getCurrentNavigation().extras.state;
        if (data) {
            let stateSubObj = data.stateObj;
            this.dataReport = stateSubObj.dataReport;
            this.date = [this.dataReport.startTime, this.dataReport.endTime];
            this.selectedValue = stateSubObj.selectedValue;
            this.id_branch_report = stateSubObj.id_branch_report;
        }
        this.getListCombo();
    }
    /**
     * get danh sách combo và xử lý _id
     * @example this.getListCombo()
     */
    getListCombo() {
        let combos = this.vhQuerySales.getlocalProducts(src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.COMBO);
        for (let item of combos) {
            this.listCombo.push({ _id: item._id, name: item.name });
        }
        this.list_search_products = this.listCombo;
    }
    /**
     * lọc sp theo tên và barcode
     * @example this.searchProducts('')
     */
    searchProducts(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.listCombo = this.vhAlgorithm.searchList(tempVal, this.list_search_products, ['name', 'barcode']);
        else
            this.listCombo = this.list_search_products;
    }
    /**
     * bắt sk thay đổi combo xem báo cáo
     * @example this.filterProducts('DHWIDHWIUDHWIUHDW')
     */
    filterProducts(id_combo) {
        this.sales_combo['_id'] = id_combo;
        if (this.sales_combo['_id'] != 'all')
            this.isChart = false;
        this.dataReport = this.initDataReport(this.date[0], this.date[1]);
    }
    /**
     * sort với trường là dạng số
     * @param sort
     * @param value tên trường cần sort
     * @example this.sort(1, 'total')
     */
    sort(sort, value) {
        if (sort) {
            this.dataReport.dataTable.docs = this.vhAlgorithm.sortNumberbyASC([...this.dataReport.dataTable.docs], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
        }
        else {
            this.dataReport.dataTable.docs = this.vhAlgorithm.sortNumberbyDESC([...this.dataReport.dataTable.docs], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
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
            this.dataReport.dataTable.docs = this.vhAlgorithm.sortVietnamesebyASC([...this.dataReport.dataTable.docs], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
        }
        else {
            this.dataReport.dataTable.docs = this.vhAlgorithm.sortVietnamesebyDESC([...this.dataReport.dataTable.docs], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
        }
    }
    initDataReport(startTime = new Date(), endTime = new Date()) {
        startTime.setHours(0, 0, 0, 0);
        endTime.setHours(23, 59, 59, 59);
        return { startTime, endTime, dataChart: [], dataTable: { docs: [], sales_atax: 0, sales_btax: 0, quantity: 0 } };
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
                text: this.languageService.translate('No data!')
            }
        };
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
     * xem báo cáo
     * @example this.getSales('2023-06-27T02:09:03.729Z','2023-06-27T02:09:03.729Z')
     */
    getSales(startTime, endTime) {
        this.vhComponent.showLoadingNotDuration("", "transparent-loading").then(() => {
            this.dataReport = this.initDataReport(startTime, endTime);
            this.vhQuerySales.getReportSales_Combos_byProducts(startTime, endTime, this.sales_combo['_id'], this.id_branch_report)
                .then((res) => {
                this.vhComponent.hideLoading(0);
                if (res) {
                    if (!res.empty) {
                        let data = res.docs;
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
                        this.dataReport['dataTable']['sales_atax'] = res['sales_atax'];
                        this.dataReport['dataTable']['sales_btax'] = res['sales_btax'];
                        this.dataReport['dataTable']['quantity'] = res['quantity'];
                        this.dataReport['dataTable']['docs'] = res.docs;
                        this.sort(this.statusQuantity, 'quantity');
                    }
                    if (this.isChart)
                        this.updateChart(this.dataReport['dataChart'], false);
                }
            }).catch(() => this.vhComponent.hideLoading(0));
        });
    }
    /**
     * gán dữ liệu cho chart
     */
    updateChart(data_chart, initStatus = false) {
        this.chart.updateOptions(this.initOption(!data_chart.length || !data_chart[0].value ? [] : data_chart.map(item => item.value), !data_chart.length || !data_chart[0].value ? [] : data_chart.map(item => item.label), initStatus));
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
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/reports']);
    }
    /**
     * hiển thị chart ra giao diện
     * @example this.initChart()
     */
    initChart(data_chart) {
        setTimeout(() => {
            this.chart = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#sales-combo-chart"), this.initOption([], []));
            this.chart.render();
            if (data_chart)
                this.updateChart(data_chart);
        }, 200);
    }
    /**
     * bắt sk thay đổi kiểu xem báo cáo (chart or table)
     */
    showChart() {
        if (this.sales_combo['_id'] == 'all')
            this.isChart = !this.isChart;
        else
            this.isChart = false;
        this.isChart ? this.initChart(this.dataReport['dataChart']) : this.chart.destroy();
    }
    gotoDetailProducts(data) {
        let stateObj = { selectedValue: this.selectedValue, id_branch_report: this.id_branch_report, dataReport: this.dataReport };
        this.router.navigate(['/sales/dashboard/manage/reports/sales-combo/detail-combo'], { state: { product: Object.assign({}, data), stateObj } });
    }
    /**
     * tải về báo cáo dưới dạng hình ảnh của chart
     * @example this.downloadImg()
     */
    downloadImg() {
        this.vhComponent.downloadImg("chart-image", `${this.languageService.translate("_combo_sales_report")}_${this.languageService.translate("_from")}_${this.format_date(this.dataReport.startTime)}_${this.languageService.translate("_to")}_${this.format_date(this.dataReport.endTime)}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQuerySales.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}`).then(() => { });
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
        let name = `${this.languageService.translate("_combo_sales_report")}_${this.languageService.translate("_from")}_${this.format_date(this.dataReport.startTime)}_${this.languageService.translate("_to")}_${this.format_date(this.dataReport.endTime)}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQuerySales.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}`;
        let total = new Object();
        // if (this.reportConfig.product_picture)
        //   total[this.languageService.translate('Image')] = "";
        total[this.languageService.translate('Combo name')] = this.languageService.translate('Total');
        total[this.languageService.translate('Quantity')] = this.dataReport['dataTable'].quantity;
        if (this.reportConfig)
            total[this.languageService.translate('Sales before tax')] = this.dataReport['dataTable'].sales_btax;
        total[this.languageService.translate('Sales after tax')] = this.dataReport['dataTable'].sales_atax;
        data.push(total);
        for (let _row of this.dataReport['dataTable'].docs) {
            let item = new Object();
            // if (this.reportConfig.product_picture)
            //   item[this.languageService.translate('Image')] = _row.img;
            item[this.languageService.translate('Combo name')] = _row.name + "(" + _row.comboName + ")";
            item[this.languageService.translate('Quantity')] = _row.quantity;
            if (this.reportConfig)
                item[this.languageService.translate('Sales before tax')] = _row.sales_btax;
            item[this.languageService.translate('Sales after tax')] = _row.sales_atax;
            data.push(item);
        }
        this.vhAlgorithm.exportXLSX(data, name);
    }
    ngAfterViewChecked() {
        if (document.querySelector("#sales-combo") && document.querySelector(".sales-combo-header") && document.querySelector(".ant-table-thead")) {
            this.heightScroll = (document.querySelector("#sales-combo").clientHeight -
                document.querySelector(".sales-combo-header").clientHeight -
                document.querySelector(".ant-table-thead").clientHeight) - 90 + "px";
        }
        this.cdRef.detectChanges();
    }
}
SalesComboComponent.ɵfac = function SalesComboComponent_Factory(t) { return new (t || SalesComboComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_4__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAuth)); };
SalesComboComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SalesComboComponent, selectors: [["app-sales-combo"]], decls: 33, vars: 26, consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "sales-combo", 1, "height-header"], ["nz-row", "", 1, "height-layout", "sales-combo-header"], ["nz-col", "", 1, "title", "left-all-content", 3, "nzSpan"], ["nz-col", "", "nzSpan", "1", 1, "center-all-content"], ["class", "size-icon", "nz-icon", "", "nzType", "pie-chart", "nzTheme", "outline", 3, "ngStyle", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "appstore", "nzTheme", "outline", 1, "size-icon", 3, "ngStyle", "click"], ["nz-col", "", "nzSpan", "5", 1, "center-all-content"], ["nzShowSearch", "", "nzBorderless", "", 3, "nzServerSearch", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", 1, "center-all-content", 3, "nzSpan"], ["nzFormat", "dd/MM/yyyy", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4", "class", "center-all-content", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", 1, "right-all-content", "button-group"], ["nz-button", "", "nzType", "default", 1, "btn-white", "mr-3", 3, "click"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-green", "center-all-content", "ml-3", 3, "disabled", "click"], ["src", "assets/icon/management/view.svg"], ["style", "padding-top: 20px;", 4, "ngIf"], ["style", "padding-top: 20px;", "id", "chart-image", 4, "ngIf"], ["nz-icon", "", "nzType", "pie-chart", "nzTheme", "outline", 1, "size-icon", 3, "ngStyle", "click"], [3, "nzLabel", "nzValue"], ["nz-col", "", "nzSpan", "4", 1, "center-all-content"], ["nzShowSearch", "", "nzBorderless", "", 3, "nzServerSearch", "nzPlaceHolder", "ngModel", "nzOnSearch", "ngModelChange"], [2, "padding-top", "20px"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzNoResult", "nzData", 4, "ngIf"], ["nz-row", "", "class", "full-height", 4, "ngIf"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzNoResult", "nzData"], ["reportData", ""], ["nzWidth", "5%"], ["nzWidth", "30%", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "15%", "nzAlign", "center", 2, "cursor", "pointer", 3, "click"], ["style", "cursor: pointer;", "nzWidth", "20%", "nzAlign", "right", 3, "ngStyle", "click", 4, "ngIf"], ["nzAlign", "right", 2, "cursor", "pointer", 3, "nzWidth", "click"], [2, "color", "var(--ion-color-vh-green)"], ["nzAlign", "center", 2, "color", "var(--ion-color-vh-green)", "font-weight", "bold"], ["nzAlign", "right", 2, "color", "var(--ion-color-vh-green)", "font-weight", "bold", 3, "ngStyle"], ["nzAlign", "right", 2, "color", "var(--ion-color-vh-green)", "font-weight", "bold"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "20%", "nzAlign", "right", 2, "cursor", "pointer", 3, "ngStyle", "click"], [2, "cursor", "pointer", 3, "click"], [2, "color", "var(--ion-color-vh-gray)"], ["nzAlign", "center"], ["nzAlign", "right", 3, "ngStyle"], ["nzAlign", "right"], ["nz-row", "", 1, "full-height"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["id", "chart-image", 2, "padding-top", "20px"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12"], ["id", "sales-combo-chart"], ["class", "scroll", 4, "ngFor", "ngForOf"], [1, "scroll"], [1, "khung_l"], [1, "title_l", "max-width-overflow"], [1, "total_l"]], template: function SalesComboComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesComboComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, SalesComboComponent_i_11_Template, 1, 3, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesComboComponent_Template_i_click_13_listener() { return ctx.showChart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "nz-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SalesComboComponent_Template_nz_select_ngModelChange_15_listener($event) { return ctx.selectedValue = $event; })("ngModelChange", function SalesComboComponent_Template_nz_select_ngModelChange_15_listener($event) { return ctx.filterProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, SalesComboComponent_nz_option_16_Template, 1, 2, "nz-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "nz-range-picker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SalesComboComponent_Template_nz_range_picker_ngModelChange_18_listener($event) { return ctx.date = $event; })("ngModelChange", function SalesComboComponent_Template_nz_range_picker_ngModelChange_18_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, SalesComboComponent_div_19_Template, 4, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesComboComponent_Template_button_click_22_listener() { return ctx.isChart ? ctx.downloadImg() : ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SalesComboComponent_Template_button_click_27_listener() { return ctx.getSales(ctx.dataReport["startTime"], ctx.dataReport["endTime"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, SalesComboComponent_div_31_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, SalesComboComponent_div_32_Template, 6, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 16, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 3 : 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 18, "Combo sales"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedValue == "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](24, _c0, !ctx.isChart ? "var(--ion-color-vh-green)" : "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzServerSearch", true)("ngModel", ctx.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.listCombo);
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
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTbodyComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n  overflow-y: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   #chart-image[_ngcontent-%COMP%] {\n  padding: 0 80px;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]   .ml-3[_ngcontent-%COMP%] {\n  margin-left: 3px;\n}\nnz-layout[_ngcontent-%COMP%]   .button-group[_ngcontent-%COMP%]   .mr-3[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-combo-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1rem auto auto;\n  padding: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .khung_l[_ngcontent-%COMP%] {\n  height: 1rem;\n  width: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .title_l[_ngcontent-%COMP%] {\n  color: var(--ion-color-defaut_black);\n  white-space: normal;\n  padding-left: 8px;\n  font-size: 0.8rem !important;\n}\nnz-layout[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%]   .total_l[_ngcontent-%COMP%] {\n  color: var(--ion-color-defaut_black);\n  white-space: nowrap;\n  font-weight: bold;\n  font-size: 0.8rem !important;\n  text-align: right;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%]   .center-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.size-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n  cursor: pointer;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  width: 95% !important;\n}\nnz-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], nz-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLWNvbWJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQUk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFDUTtFQUNJLGdCQUFBO0FBQ1o7QUFDUTtFQUNJLGlCQUFBO0FBQ1o7QUFFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQVI7QUFFSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUFSO0FBRUk7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0FBQVI7QUFDUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ1o7QUFDUTtFQUNJLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBQ1o7QUFDUTtFQUNJLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUFDWjtBQUVJO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FBQVI7QUFDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ1o7QUFJQTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUE7O0VBRUksZ0NBQUE7QUFESjtBQUlBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBSUE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FBREo7QUFLSTs7RUFFSSx1QkFBQTtBQUZSIiwiZmlsZSI6InNhbGVzLWNvbWJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgI2NoYXJ0LWltYWdlIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDgwcHg7XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi1ncm91cCB7XHJcbiAgICAgICAgLm1sLTMge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubXItMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zYWxlcy1jb21iby1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zY3JvbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxcmVtIGF1dG8gYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgLmtodW5nX2wge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGVfbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGVmYXV0X2JsYWNrKTtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50b3RhbF9sIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kZWZhdXRfYmxhY2spO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bi1hZGQge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJnLWZvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICAuY2VudGVyLWxlZnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2l6ZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hbnQtYnRuOmZvY3VzLFxyXG4uYW50LWJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG5cclxuLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XHJcbiAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxufVxyXG5cclxubnotdGFibGUge1xyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ 75322:
/*!*****************************************************************************!*\
  !*** ./src/app/sales/menu/manage/reports/sales-combo/sales-combo.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesComboModule": () => (/* binding */ SalesComboModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sales_combo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-combo.component */ 71880);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: '',
        component: _sales_combo_component__WEBPACK_IMPORTED_MODULE_0__.SalesComboComponent
    },
    {
        path: 'detail-combo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_sales_components_bill-detail_customer-return_customer-return_component_ts-src-14e0ee"), __webpack_require__.e("default-src_app_sales_components_bill-detail_delivery-goods_delivery-goods_component_ts-src_a-3f4b1d"), __webpack_require__.e("default-src_app_sales_components_bill-detail_sales-payment-card_sales-payment-card_component_-13f1ad"), __webpack_require__.e("common"), __webpack_require__.e("src_app_sales_menu_manage_reports_sales-combo_detail_detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./detail/detail.module */ 18298)).then(m => m.DetailModule)
    }
];
class SalesComboModule {
}
SalesComboModule.ɵfac = function SalesComboModule_Factory(t) { return new (t || SalesComboModule)(); };
SalesComboModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SalesComboModule });
SalesComboModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SalesComboModule, { declarations: [_sales_combo_component__WEBPACK_IMPORTED_MODULE_0__.SalesComboComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_reports_sales-combo_sales-combo_module_ts.js.map