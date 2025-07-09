"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_sales-program_voucher_releases-voucher_releases-voucher_-915ef3"],{

/***/ 28137:
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/sales-program/voucher/releases-voucher/list-code-voucher/list-code-voucher.component.ts ***!
  \**************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCodeVoucherComponent": () => (/* binding */ ListCodeVoucherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/divider */ 72254);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print/print.component */ 17343);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
























function ListCodeVoucherComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 33);
} }
function ListCodeVoucherComponent_nz_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 34);
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", option_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzValue", option_r9.id);
} }
function ListCodeVoucherComponent_tr_66_span_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "_Issued"), "");
} }
function ListCodeVoucherComponent_tr_66_span_12_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Expired"), "");
} }
function ListCodeVoucherComponent_tr_66_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ListCodeVoucherComponent_tr_66_span_12_ng_container_1_Template, 4, 3, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ListCodeVoucherComponent_tr_66_span_12_ng_template_2_Template, 3, 3, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    const data_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r12.checkExpried(data_r10.date_expire))("ngIfElse", _r24);
} }
function ListCodeVoucherComponent_tr_66_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Sold"));
} }
function ListCodeVoucherComponent_tr_66_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Redeemed from points"));
} }
function ListCodeVoucherComponent_tr_66_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Used for goods exchange"));
} }
function ListCodeVoucherComponent_tr_66_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Selected for purchase from web/app"));
} }
function ListCodeVoucherComponent_tr_66_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Ordered from web/app"));
} }
function ListCodeVoucherComponent_tr_66_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Selected for goods exchange from web/app"));
} }
function ListCodeVoucherComponent_tr_66_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "b", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Ordered for goods exchange from web/app"));
} }
function ListCodeVoucherComponent_tr_66_nz_divider_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-divider", 47);
} }
function ListCodeVoucherComponent_tr_66_a_22_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnConfirm", function ListCodeVoucherComponent_tr_66_a_22_Template_a_nzOnConfirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const data_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.gotoDeleteCodeVoucher(data_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, "Delete this voucher code"), "?");
} }
function ListCodeVoucherComponent_tr_66_nz_divider_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-divider", 47);
} }
function ListCodeVoucherComponent_tr_66_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCheckedChange", function ListCodeVoucherComponent_tr_66_Template_td_nzCheckedChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const data_r10 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r30.onItemChecked(data_r10._id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListCodeVoucherComponent_tr_66_Template_i_click_4_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const data_r10 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); $event.stopPropagation(); return ctx_r32.vhComponent.copyValue(data_r10.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ListCodeVoucherComponent_tr_66_span_12_Template, 4, 2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ListCodeVoucherComponent_tr_66_span_13_Template, 4, 3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ListCodeVoucherComponent_tr_66_span_14_Template, 4, 3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ListCodeVoucherComponent_tr_66_span_15_Template, 4, 3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ListCodeVoucherComponent_tr_66_span_16_Template, 4, 3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ListCodeVoucherComponent_tr_66_span_17_Template, 4, 3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ListCodeVoucherComponent_tr_66_span_18_Template, 4, 3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ListCodeVoucherComponent_tr_66_span_19_Template, 4, 3, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ListCodeVoucherComponent_tr_66_nz_divider_21_Template, 1, 0, "nz-divider", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ListCodeVoucherComponent_tr_66_a_22_Template, 3, 3, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ListCodeVoucherComponent_tr_66_nz_divider_23_Template, 1, 0, "nz-divider", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListCodeVoucherComponent_tr_66_Template_a_click_24_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const data_r10 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.print([data_r10]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzChecked", ctx_r5.setOfCheckedId.has(data_r10._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r10.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 16, data_r10.date_validity, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 19, data_r10.date_expire, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", data_r10.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.checkAction(data_r10.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.checkAction(data_r10.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.checkAction(data_r10.status));
} }
function ListCodeVoucherComponent_ng_container_70_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "b", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-input-number", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ListCodeVoucherComponent_ng_container_70_Template_nz_input_number_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.settingCode.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 8, "Enter the number of vouchers issued"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.settingCode.quantity)("nzMin", 1)("nzMax", 200)("nzStep", 1);
} }
function ListCodeVoucherComponent_ng_container_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "b", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "nz-date-picker", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "b", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-form-item", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "nz-date-picker", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r7.formEditVoucher);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 5, "Start date of use"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 7, "Select date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 9, "Expiration date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 11, "Select date"));
} }
function ListCodeVoucherComponent_app_print_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-print", 58);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("stamp", ctx_r8.barcode_designs)("start_print", ctx_r8.start_print)("data", ctx_r8.list_print_data);
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a0) { return { y: a0 }; };
class ListCodeVoucherComponent {
    constructor(router, cdRef, vhAlgorithm, vhQueryCafe, vhQuery, vhComponent, languageService, nzModalService) {
        this.router = router;
        this.cdRef = cdRef;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.vhQuery = vhQuery;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.nzModalService = nzModalService;
        this.isVisible = false; // hiển thị modal lấy mã code
        this.isVisibleEdit = false; // hiển thị modal sửa mã code
        this.listCodeVoucher = []; // danh sách mã voucher
        this.settingCode = {
            quantity: 1,
            date_validity: new Date().setHours(0, 0, 0, 0),
            date_expire: new Date().setHours(23, 59, 59, 0),
        };
        this.statusList = [
            {
                id: '0',
                name: 'Tất cả'
            },
            {
                id: '1',
                name: 'Đã phát hành'
            },
            {
                id: '2',
                name: 'Đã bán'
            },
            {
                id: '3',
                name: 'Đã đổi từ tích điểm'
            },
            {
                id: '4',
                name: 'Đã sử dụng đổi hàng hóa'
            },
            {
                id: '5',
                name: 'Đã hết hạn'
            }
        ];
        this.keySearch = '';
        this.stateObj = {
            keySearch: '',
            selectedValue: '0',
            tab: 0
        };
        this.start_print = false;
        this.list_print_data = [];
        this.listBranch = [];
        this.dateCurrent = new Date();
        this.checked = false;
        this.loading = false;
        this.indeterminate = false;
        this.listOfCurrentPageData = [];
        this.setOfCheckedId = new Set();
        /** hàm sort cho các cột */
        this.nameCol = false;
        this.date_validityCol = false;
        this.date_expireCol = false;
        this.item = this.router.getCurrentNavigation().extras.state.data; // voucher details
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore; // release voucher == voucher_releases
        console.log(this.dataRestore);
    }
    ngAfterViewChecked() {
        if (document.querySelector("#product-list") &&
            document.querySelector(".ant-table-thead") &&
            document.querySelector(".product-list-header") &&
            document.querySelector(".left-all-content") &&
            document.querySelector(".ant-table-pagination")) {
            this.heightScroll =
                document.querySelector("#product-list").clientHeight -
                    document.querySelector(".ant-table-thead").clientHeight -
                    document.querySelector(".product-list-header").clientHeight -
                    document.querySelector(".left-all-content").clientHeight -
                    document.querySelector(".ant-table-pagination").clientHeight - 80 + "px";
        }
        this.cdRef.detectChanges();
    }
    ngOnInit() {
        if (this.item) {
            this.listBranch = this.vhQueryCafe.getlocalBranchs();
            this.branch = this.listBranch.find(item => item._id == this.dataRestore.release.id_branch);
        }
        Promise.all([
            this.getListProductCodes(),
            this.vhQueryCafe.getVoucher(this.item.id_voucher)
        ]).then((voucher) => {
            this.voucher = voucher[1];
        });
    }
    // lấy danh sách mã code theo id_voucher và id_release
    getListProductCodes() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhQuery.getDocsByFields("barcode_designs", { id_branch: { $eq: this.vhQueryCafe.getDefaultBranch()._id }, type: { $eq: 3 } })
                .then((barcode_designs) => {
                this.barcode_designs = barcode_designs.find(item => item._id == this.item.id_design_barcode);
            });
            //  lấy danh sách voucher release detail theo release, id_voucher
            this.vhQueryCafe.getVoucherRelaseDetail_byFields({
                id_voucher_release: { $eq: this.item.id_voucher_release },
                id_voucher: { $eq: this.item.id_voucher },
            }, {}, {}, 0).then((release_details) => {
                this.list_voucher_release_details = release_details[0];
                if (release_details) {
                    this.vhQueryCafe.getVoucherCodes_byIdCouponReleaseDetail(release_details[0]._id).then((listCodes) => {
                        this.listCodeVoucher = listCodes;
                        this.listCodeVoucherSearch = this.listCodeVoucher;
                        this.listCodeVoucherFilter = this.listCodeVoucher;
                        console.log(listCodes);
                        if (this.stateObj.selectedValue != "0") {
                            // this.searchByCategory()
                            this.filterCodeVoucher(this.stateObj.selectedValue);
                        }
                        this.vhComponent.hideLoading(0);
                    });
                }
            });
        });
    }
    //  Tìm kiểm mã voucher
    filterCodeVoucher(status) {
        switch (status) {
            case '0': {
                this.listCodeVoucherSearch = this.listCodeVoucherFilter;
                break;
            }
            case '1': {
                this.listCodeVoucherSearch = this.listCodeVoucherFilter.filter(item => item.status == status && new Date() < new Date(item.date_expire));
                break;
            }
            case '2':
            case '3':
            case '4': {
                this.listCodeVoucherSearch = this.listCodeVoucherFilter.filter(item => item.status == status);
                break;
            }
            case '5': {
                this.listCodeVoucherSearch = this.listCodeVoucherFilter.filter(item => new Date() > new Date(item.date_expire) && item.status == '1');
                break;
            }
        }
        this.searchCodeVoucher(this.keySearch);
    }
    searchCodeVoucher(value) {
        this.listCodeVoucher = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value), this.listCodeVoucherSearch, ['code']);
    }
    checkExpried(end_date) {
        return new Date() > new Date(end_date);
    }
    goBack() {
        let dataRestore = this.dataRestore.release;
        this.router.navigate(['/cafe/dashboard/management/sales-program/voucher/releases-voucher/release-detail'], {
            state: dataRestore
        });
    }
    checkCreateCode() {
        this.isVisible = true;
    }
    handleCancel() {
        this.isVisible = false;
    }
    handleOk() {
        this.createCodeVoucher();
    }
    // Xóa mã code
    gotoDeleteCodeVoucher(item) {
        this.vhQueryCafe.deleteVoucherCode(item._id, item.id_voucher_release_detail).then(bool => {
            if (bool) {
                this.listCodeVoucher = this.listCodeVoucher.filter(i => i._id != item._id);
                this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Xóa mã voucher thành công"));
            }
            else {
                this.listCodeVoucher = this.listCodeVoucher.filter(i => i._id != item._id);
            }
        }, error => {
            this.vhComponent.alertMessageDesktop("error", error);
        });
    }
    handleCancelEdit() {
        this.isVisibleEdit = false;
    }
    // chỉnh sửa mã code
    handleOkEdit(value) {
        if (value) {
            let data = Object.assign({}, value);
            if (this.checkDateUpdate(data.date_validity, data.date_expire) == true) {
                this.updateVoucherCode(data);
            }
            else {
                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Ngày không hợp lệ !"));
            }
        }
    }
    // Cập nhật voucher code
    updateVoucherCode(data) {
        this.vhQueryCafe.updateVoucherCode(data._id, data)
            .then(() => {
            // this.listCodeVoucher[index].status = data.status
            this.isVisibleEdit = false;
            this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Cập nhật thành công !"));
        }, error => {
            console.log('error', error);
        });
    }
    // Kiểm tra ngày hợp lệ
    checkDateUpdate(date_validity, date_expire) {
        if (new Date(date_validity) <= new Date(date_expire)) {
            return true;
        }
        else {
            return false;
        }
    }
    // tạo mã voucher
    createCodeVoucher() {
        if (new Date() < new Date(this.dataRestore.release.date_expire))
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                if (this.list_voucher_release_details) {
                    if (this.settingCode.quantity > 0) {
                        if (this.checkDateUpdate(this.settingCode.date_validity, this.settingCode.date_expire) == true) {
                            let dataCode = {
                                date_validity: new Date(this.dataRestore.release.date_validity),
                                date_expire: new Date(this.dataRestore.release.date_expire),
                                id_voucher_release_detail: this.list_voucher_release_details._id,
                                id_voucher: this.voucher._id,
                                ratio: 1
                            };
                            this.vhQueryCafe.createVoucherCodes(dataCode, this.settingCode.quantity).then((voucher_codes) => {
                                this.vhComponent.hideLoading(0).then(() => {
                                    this.isVisible = false;
                                    this.settingCode = { quantity: 1, date_validity: new Date().setHours(0, 0, 0, 0), date_expire: new Date().setHours(23, 59, 59) };
                                    this.listCodeVoucher = this.listCodeVoucher.concat(voucher_codes);
                                    this.listCodeVoucherSearch = this.listCodeVoucherSearch.concat(voucher_codes);
                                    this.listCodeVoucherFilter = this.listCodeVoucherFilter.concat(voucher_codes);
                                    this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Tạo mã thành công"));
                                });
                            }, error => {
                                this.vhComponent.hideLoading(0);
                                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Tạo mã thất bại"));
                            });
                        }
                        else {
                            this.vhComponent.hideLoading(0);
                            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Ngày không hợp lệ !"));
                        }
                    }
                    else {
                        this.vhComponent.hideLoading(0);
                        this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Số lượng không hợp lệ !"));
                    }
                }
            });
        else {
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Ngày hiện tại đang lớn hơn ngày hết hạn của đợt này!"));
        }
    }
    // kiểm tra trạng, ẩn các tính năng
    checkAction(status) {
        if (status == 3 || status == 2 || status == 4) {
            return false;
        }
        else {
            return true;
        }
    }
    print(data) {
        if (this.barcode_designs) {
            this.list_print_data = data;
            this.start_print = true;
            setTimeout(() => {
                this.start_print = false;
            }, 200);
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Bạn phải chọn mẫu in ở Sửa voucher trước!"));
        }
    }
    updateCheckedSet(id, checked) {
        if (checked) {
            this.setOfCheckedId.add(id);
        }
        else {
            this.setOfCheckedId.delete(id);
        }
    }
    onCurrentPageDataChange(listOfCurrentPageData) {
        this.listOfCurrentPageData = listOfCurrentPageData;
        this.refreshCheckedStatus();
    }
    refreshCheckedStatus() {
        const listOfEnabledData = this.listOfCurrentPageData;
        this.checked = listOfEnabledData.every(({ id }) => this.setOfCheckedId.has(id));
        this.indeterminate = listOfEnabledData.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
    }
    onItemChecked(id, checked) {
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
    }
    onAllChecked(checked) {
        this.listOfCurrentPageData
            .forEach(({ _id }) => this.updateCheckedSet(_id, checked));
        this.refreshCheckedStatus();
    }
    printAll() {
        this.loading = true;
        let requestData = this.listCodeVoucher.filter(data => this.setOfCheckedId.has(data._id));
        this.print(requestData);
    }
    /** Hàm thực hiện sắp xếp theo collection
     *
     * @param colName       // tên cột muôn sắp xếp
     */
    sortTable(colName) {
        switch (colName) {
            case 'name':
                if (this.nameCol) {
                    this.listCodeVoucher = this.vhAlgorithm.sortVietnamesebyASC([...this.listCodeVoucher], colName);
                }
                else {
                    this.listCodeVoucher = this.vhAlgorithm.sortVietnamesebyDESC([...this.listCodeVoucher], colName);
                }
                break;
            case 'date_validity':
                if (this.date_validityCol) {
                    this.listCodeVoucher = this.vhAlgorithm.sortDatebyASC([...this.listCodeVoucher], colName);
                }
                else {
                    this.listCodeVoucher = this.vhAlgorithm.sortDatebyDESC([...this.listCodeVoucher], colName);
                }
                break;
            case 'date_expire':
                if (this.date_expireCol) {
                    this.listCodeVoucher = this.vhAlgorithm.sortDatebyASC([...this.listCodeVoucher], colName);
                }
                else {
                    this.listCodeVoucher = this.vhAlgorithm.sortDatebyDESC([...this.listCodeVoucher], colName);
                }
                break;
        }
    }
}
ListCodeVoucherComponent.ɵfac = function ListCodeVoucherComponent_Factory(t) { return new (t || ListCodeVoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalService)); };
ListCodeVoucherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListCodeVoucherComponent, selectors: [["app-list-code-voucher"]], decls: 76, vars: 61, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "product-list"], ["nz-row", "", 1, "product-list-header"], ["nz-col", "", "nzSpan", "6", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["box", ""], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-col", "", "nzSpan", "8"], ["nzBorderless", "", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "8", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-add", 3, "click"], ["nz-icon", "", "nzType", "file-add", "nzTheme", "outline"], ["nz-row", "", 1, "left-all-content", 2, "margin", "8px 0px 0px"], [2, "color", "var(--ion-color-vh-red)"], [1, "voucher-products-codes", 2, "margin-top", "16px"], ["nzShowSizeChanger", "", "nzShowPagination", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData", "nzCurrentPageDataChange"], ["basicTable", ""], ["nzWidth", "5%", 3, "nzChecked", "nzIndeterminate", "nzCheckedChange"], [2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzAlign", "center"], [4, "ngFor", "ngForOf"], ["nzTitle", "L\u1EA5y m\u00E3 voucher", 3, "nzVisible", "nzCancelText", "nzOkText", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzTitle", "Ch\u1EC9nh s\u1EEDa th\u1EDDi gian c\u1EE7a voucher", 3, "nzVisible", "nzCancelText", "nzOkText", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["style", "display: none", 3, "stamp", "start_print", "data", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], [3, "nzLabel", "nzValue"], [3, "nzChecked", "nzCheckedChange"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 2, "cursor", "pointer", 3, "click"], ["nzAlign", "center", 3, "ngSwitch"], [4, "ngSwitchCase"], ["nzType", "vertical", 4, "ngIf"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottom", 3, "nzPopconfirmTitle", "nzOnConfirm", 4, "ngIf"], [3, "click"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [2, "color", "var(--ion-color-vh-gray)"], [2, "color", "var(--ion-color-vh-green)"], [2, "color", "var(--ion-color-vh-black)"], ["nzType", "vertical"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottom", 3, "nzPopconfirmTitle", "nzOnConfirm"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "label"], [2, "width", "100%", "display", "block"], ["required", "", 2, "width", "100%", 3, "ngModel", "nzPlaceHolder", "nzMin", "nzMax", "nzStep", "ngModelChange"], [3, "formGroup"], ["formControlName", "date_validity", "nzFormat", "dd/MM/yyyy", 2, "width", "100%", 3, "nzPlaceHolder"], ["formControlName", "date_expire", "nzFormat", "dd/MM/yyyy", 2, "width", "100%", 3, "nzPlaceHolder"], [2, "display", "none", 3, "stamp", "start_print", "data"]], template: function ListCodeVoucherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListCodeVoucherComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "nz-input-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ListCodeVoucherComponent_Template_input_ngModelChange_11_listener($event) { return ctx.keySearch = $event; })("keyup", function ListCodeVoucherComponent_Template_input_keyup_11_listener() { return ctx.searchCodeVoucher(ctx.keySearch); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ListCodeVoucherComponent_ng_template_14_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "nz-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ListCodeVoucherComponent_Template_nz_select_ngModelChange_18_listener($event) { return ctx.stateObj.selectedValue = $event; })("ngModelChange", function ListCodeVoucherComponent_Template_nz_select_ngModelChange_18_listener() { return ctx.filterCodeVoucher(ctx.stateObj.selectedValue); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ListCodeVoucherComponent_nz_option_19_Template, 1, 2, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListCodeVoucherComponent_Template_button_click_21_listener() { return ctx.printAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListCodeVoucherComponent_Template_button_click_26_listener() { return ctx.checkCreateCode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "T\u1ED5ng ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "b", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " m\u00E3 voucher");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "nz-table", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCurrentPageDataChange", function ListCodeVoucherComponent_Template_nz_table_nzCurrentPageDataChange_37_listener($event) { return ctx.onCurrentPageDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzCheckedChange", function ListCodeVoucherComponent_Template_th_nzCheckedChange_41_listener($event) { return ctx.onAllChecked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListCodeVoucherComponent_Template_th_click_42_listener() { ctx.nameCol = !ctx.nameCol; return ctx.sortTable("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListCodeVoucherComponent_Template_th_click_47_listener() { ctx.date_validityCol = !ctx.date_validityCol; return ctx.sortTable("date_validity"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ListCodeVoucherComponent_Template_th_click_52_listener() { ctx.date_expireCol = !ctx.date_expireCol; return ctx.sortTable("date_expire"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](66, ListCodeVoucherComponent_tr_66_Template, 26, 22, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "nz-modal", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function ListCodeVoucherComponent_Template_nz_modal_nzVisibleChange_67_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function ListCodeVoucherComponent_Template_nz_modal_nzOnCancel_67_listener() { return ctx.handleCancel(); })("nzOnOk", function ListCodeVoucherComponent_Template_nz_modal_nzOnOk_67_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](70, ListCodeVoucherComponent_ng_container_70_Template, 10, 10, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "nz-modal", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function ListCodeVoucherComponent_Template_nz_modal_nzVisibleChange_71_listener($event) { return ctx.isVisibleEdit = $event; })("nzOnCancel", function ListCodeVoucherComponent_Template_nz_modal_nzOnCancel_71_listener() { return ctx.handleCancelEdit(); })("nzOnOk", function ListCodeVoucherComponent_Template_nz_modal_nzOnOk_71_listener() { return ctx.handleOkEdit(ctx.formEditVoucher.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, ListCodeVoucherComponent_ng_container_74_Template, 19, 13, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ListCodeVoucherComponent_app_print_75_Template, 1, 3, "app-print", 32);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](15);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 32, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzSuffix", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 34, "Search voucher code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.keySearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.stateObj.selectedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.statusList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 36, "Bulk print"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 38, "Create voucher code"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.listCodeVoucher.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](58, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](59, _c1, ctx.heightScroll))("nzData", ctx.listCodeVoucher);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzChecked", ctx.checked)("nzIndeterminate", ctx.indeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](45, 40, "Voucher code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.nameCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 42, "Starting date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.date_validityCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](55, 44, "Expiration date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzType", ctx.date_expireCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](60, 46, "Voucher status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 48, "Action"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _r4.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](68, 50, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzOkText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](69, 52, "Release"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzVisible", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](72, 54, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzOkText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](73, 56, "Save"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzVisible", ctx.isVisibleEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.barcode_designs && ctx.list_print_data);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_10__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_11__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzThSelectionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTbodyComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_6__.NzModalContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_17__.NzTdAddOnComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_18__.NzDividerComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_19__.NzPopconfirmDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_20__.NzFormItemComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_21__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_22__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _print_print_component__WEBPACK_IMPORTED_MODULE_2__.PrintComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n  overflow-y: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 95%;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn_content[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  box-shadow: none;\n}\nth.ant-table-cell[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\nnz-modal[_ngcontent-%COMP%]   ng-container[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\nnz-modal[_ngcontent-%COMP%]   ng-container[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-modal[_ngcontent-%COMP%]   ng-container[_ngcontent-%COMP%]   nz-form-item[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n@media only screen and (max-width: 1200px) {\n  .btn-add[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n\n  .btn-data[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtY29kZS12b3VjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0ksaUJBQUE7QUFFTjtBQUVBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUdFO0VBQ0UsaUJBQUE7QUFBSjtBQUtRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFGWjtBQUdZO0VBQ0ksV0FBQTtBQURoQjtBQUVnQjtFQUNJLGtCQUFBO0FBQXBCO0FBT0E7O0VBRUksZ0NBQUE7QUFKSjtBQU9BO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUpKO0FBT0E7RUFDSTtJQUNJLDRCQUFBO0VBSk47O0VBTUU7SUFDSSw0QkFBQTtFQUhOO0FBQ0YiLCJmaWxlIjoibGlzdC1jb2RlLXZvdWNoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGkge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1kYXRhIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG4tYWRkIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0bl9jb250ZW50IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG50aC5hbnQtdGFibGUtY2VsbCB7XHJcbiAgYiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbn1cclxubnotbW9kYWwge1xyXG4gICAgbmctY29udGFpbmVyIHtcclxuICAgICAgICBuei1mb3JtLWl0ZW0ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG56LWRhdGUtcGlja2VyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFudC1idG46Zm9jdXMsXHJcbi5hbnQtYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcblxyXG4uYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5idG4tYWRkIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1kYXRhIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 17343:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/sales-program/voucher/releases-voucher/list-code-voucher/print/print.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintComponent": () => (/* binding */ PrintComponent)
/* harmony export */ });
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qrcode */ 17988);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsbarcode */ 37203);
/* harmony import */ var jsbarcode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsbarcode__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);









function PrintComponent_div_4_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.stamp.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1) { return { "text-align": a0, "height.mm": a1 }; };
function PrintComponent_div_4_div_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c0, ele_r5.text_align, ele_r5.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, "Release date"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 5, item_r1.date_validity, "dd/MM/yyyy"), "");
} }
function PrintComponent_div_4_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c0, ele_r5.text_align, ele_r5.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, "_Expiration date"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 5, item_r1.date_expire, "dd/MM/yyyy"), " ");
} }
function PrintComponent_div_4_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c0, ele_r5.text_align, ele_r5.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r1.code, " ");
} }
const _c1 = function (a0, a1) { return { "height.mm": a0, "width.mm": a1 }; };
function PrintComponent_div_4_div_3_canvas_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 14);
} if (rf & 2) {
    const ele_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ele_r5.height, ele_r5.width))("id", "canvas" + i_r2);
} }
function PrintComponent_div_4_div_3_canvas_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
} if (rf & 2) {
    const ele_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](1, _c1, ele_r5.height, ele_r5.width));
} }
const _c2 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { "font-size.px": a0, "font-weight": a1, "text-decoration": a2, "font-style": a3, "top.px": a4, "width.mm": a5, "left.px": a6, "height.mm": a7, "justify-content": a8 }; };
function PrintComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintComponent_div_4_div_3_span_1_Template, 5, 11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintComponent_div_4_div_3_span_2_Template, 4, 11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintComponent_div_4_div_3_span_3_Template, 2, 5, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintComponent_div_4_div_3_canvas_4_Template, 1, 5, "canvas", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PrintComponent_div_4_div_3_canvas_5_Template, 1, 4, "canvas", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ele_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](6, _c2, [ele_r5.font_size, ele_r5.font_weight, ele_r5.text_decoration, ele_r5.font_style, ele_r5.y, ele_r5.width, ele_r5.x, ele_r5.height, ele_r5.type == "barcode" ? ele_r5.justify_content : ""]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ele_r5.type == "date_validity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ele_r5.type == "date_expire");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ele_r5.type == "barcode-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ele_r5.type == "qr" && ele_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ele_r5.type == "barcode" && ele_r5.status);
} }
const _c3 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
const _c4 = function (a0, a1) { return { "width.mm": a0, "height.mm": a1 }; };
function PrintComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintComponent_div_4_img_2_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintComponent_div_4_div_3_Template, 6, 16, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](4, _c3, ctx_r0.stamp.width * ctx_r0.stamp.col, ctx_r0.stamp.height, i_r2 == ctx_r0.data.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](8, _c4, ctx_r0.stamp.width, ctx_r0.stamp.height));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.stamp.display_img);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.stamp.property);
} }
const _c5 = function (a0) { return { "height.px": a0 }; };
class PrintComponent {
    constructor(router, cdf) {
        // this.stamp = this.router.getCurrentNavigation().extras.state;
        // console.log(this.stamp);
        this.router = router;
        this.cdf = cdf;
    }
    ngOnInit() {
    }
    ngOnChanges({ start_print }) {
        if (start_print && start_print.currentValue) {
            // this.renderBarcode();
            setTimeout(() => {
                this.printBrowser();
            }, 100);
        }
    }
    changeNummber() {
        // this.listRowBarcode = []
        // for (let i = 0; i < this.stamp.number; i++) {
        //   this.listRowBarcode.push(true);
        // }
    }
    ngAfterViewChecked() {
        if (this.data) {
            if (document.querySelector(".barcode"))
                this.renderBarcode();
            if (document.querySelector('#scroll'))
                this.heightScroll = document.querySelector('#scroll').clientHeight - 32;
            this.cdf.detectChanges();
        }
    }
    renderBarcode() {
        for (let i in this.data) {
            if (this.data[i].code)
                qrcode__WEBPACK_IMPORTED_MODULE_0__.toCanvas(document.getElementById(this.data[i].code), this.data[i].code, { width: parseInt(this.stamp.property[3].height) * 3.78 }, function (error) {
                    if (error)
                        console.error(error);
                });
            if (this.data[i].code)
                jsbarcode__WEBPACK_IMPORTED_MODULE_1___default()(".barcode", this.data[i].code, {
                    displayValue: false,
                });
        }
    }
    printBrowser() {
        print_js__WEBPACK_IMPORTED_MODULE_2___default()({
            printable: "stamp-barcode",
            type: "html",
            scanStyles: false,
            maxWidth: this.stamp.width,
            style: '@page { margin: 0 !important;padding: 0 !important;}' +
                '.stamp {margin-bottom: 3mm; width: ' + this.stamp.width + 'mm;height: ' + (this.stamp.height - 4) + 'mm;}' +
                '.center-all-content { display: flex;align-items: center;justify-content: center;}'
        });
    }
}
PrintComponent.ɵfac = function PrintComponent_Factory(t) { return new (t || PrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
PrintComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintComponent, selectors: [["app-print"]], inputs: { stamp: "stamp", start_print: "start_print", data: "data" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 4, consts: [["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px", 3, "ngStyle"], ["id", "stamp-barcode", 2, "height", "100%", "margin-top", "-1.5mm"], ["class", "stamp ", "style", "display: flex;margin-bottom: 4mm;", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "stamp", 2, "display", "flex", "margin-bottom", "4mm", 3, "ngStyle"], [1, "border-top", 2, "position", "relative", 3, "ngStyle"], ["width", "100%", "alt", "assets/img/default_voucher.jpg", "onerror", "this.src='./assets/img/default_voucher.jpg'", 3, "src", 4, "ngIf"], ["style", "display: flex;position: absolute;overflow: hidden; ", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["width", "100%", "alt", "assets/img/default_voucher.jpg", "onerror", "this.src='./assets/img/default_voucher.jpg'", 3, "src"], [2, "display", "flex", "position", "absolute", "overflow", "hidden", 3, "ngStyle"], ["style", " overflow: hidden;line-height: 1;width: 100%;z-index: 2;padding-right: 8px;padding-left: 8px;", 3, "ngStyle", 4, "ngIf"], [3, "ngStyle", "id", 4, "ngIf"], ["class", "barcode", 3, "ngStyle", 4, "ngIf"], [2, "overflow", "hidden", "line-height", "1", "width", "100%", "z-index", "2", "padding-right", "8px", "padding-left", "8px", 3, "ngStyle"], [3, "ngStyle", "id"], [1, "barcode", 3, "ngStyle"]], template: function PrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintComponent_div_4_Template, 4, 11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c5, ctx.heightScroll));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_5__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n  margin-top: 1mm;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.p-lr-8[_ngcontent-%COMP%] {\n  padding: 0 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0ksaUJBQUE7QUFFTjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxrQkFBQTtBQUdSO0FBQUk7RUFDSSx5QkFBQTtBQUVSO0FBQUk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHWjtBQURRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBR1o7QUFGWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUloQjtBQUhnQjtFQUVJLFlBQUE7RUFDQSxhQUFBO0FBSXBCO0FBQVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBRVo7QUFEWTtFQUNJLGlCQUFBO0FBR2hCO0FBRFk7RUFDSSxrQkFBQTtBQUdoQjtBQURZO0VBQ0ksMEJBQUE7QUFHaEI7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7QUFDQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7QUFFSjtBQUFBO0VBQ0ksa0JBQUE7QUFHSjtBQURBO0VBQ0ksZ0NBQUE7QUFJSjtBQUZBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBS0o7QUFERTtFQUNJLGNBQUE7QUFJTiIsImZpbGUiOiJwcmludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfSBcclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm9yZGVye1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2NSwgNjUsIDY1KTtcclxuICAgIH1cclxuICAgIC5mb250LXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAmLWZhbWlseSB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLXNpemUge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29sb3Ige1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDksIDkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idG4ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgJi1ib2xkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaXRhbGljIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXVuZGVybGluZSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYm9yZGVyLWJvdHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQ7XHJcbn1cclxuLmJvcmRlci10b3B7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxbW07XHJcbn1cclxuLm1iLTZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2bW07XHJcbn1cclxuLnNlbGVjdGVke1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIH1cclxuICAucC1sci04e1xyXG4gICAgICBwYWRkaW5nOiAwIDhweDtcclxuICB9Il19 */"] });


/***/ }),

/***/ 24501:
/*!********************************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/sales-program/voucher/releases-voucher/release-detail/release-detail.component.ts ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReleaseDetailComponent": () => (/* binding */ ReleaseDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/empty */ 36641);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function ReleaseDetailComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 25);
} }
function ReleaseDetailComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleaseDetailComponent_tr_48_Template_i_click_2_listener($event) { return $event.stopPropagation(); })("nzOnConfirm", function ReleaseDetailComponent_tr_48_Template_i_nzOnConfirm_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const data_r8 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.deleteVoucher_Release(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleaseDetailComponent_tr_48_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const data_r8 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.gotoGetListCodeVoucher(data_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", "X\u00F3a voucher " + data_r8.name + " kh\u1ECFi \u0111\u1EE3t n\u00E0y?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r8.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r8.quantity_released);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 5, "Release"), " ");
} }
const _c0 = function (a0) { return { "display": a0 }; };
function ReleaseDetailComponent_ng_container_50_nz_list_item_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-list-item", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleaseDetailComponent_ng_container_50_nz_list_item_8_Template_nz_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const i_r16 = restoredCtx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.chooseVoucherInRelease(i_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "nz-list-item-meta", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReleaseDetailComponent_ng_container_50_nz_list_item_8_Template_label_ngModelChange_2_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const item_r15 = restoredCtx.$implicit; return item_r15.choose = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, item_r15.display));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzDescription", item_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", item_r15.choose);
} }
function ReleaseDetailComponent_ng_container_50_nz_empty_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "nz-empty", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzNotFoundContent", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 1, "No voucher!"));
} }
const _c1 = function () { return { standalone: true }; };
function ReleaseDetailComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReleaseDetailComponent_ng_container_50_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.keyVoucher = $event; })("ngModelChange", function ReleaseDetailComponent_ng_container_50_Template_input_ngModelChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.searchVoucherModal(ctx_r22.keyVoucher); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-list", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ReleaseDetailComponent_ng_container_50_nz_list_item_8_Template, 3, 5, "nz-list-item", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ReleaseDetailComponent_ng_container_50_nz_empty_9_Template, 2, 3, "nz-empty", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 5, "Voucher to find"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.keyVoucher)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.showVoucherModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.showVoucherModal.length);
} }
function ReleaseDetailComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleaseDetailComponent_ng_template_51_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleaseDetailComponent_ng_template_51_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.handleOk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 4, "Add"));
} }
const _c2 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c3 = function (a0) { return { y: a0 }; };
class ReleaseDetailComponent {
    constructor(router, languageService, vhQueryCafe, vhComponent, vhAlgorithm, cdRef) {
        this.router = router;
        this.languageService = languageService;
        this.vhQueryCafe = vhQueryCafe;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.itemReleases = {};
        this.isVisible = false;
        this.listVoucher = []; // danh sách voucher
        this.listVoucherChoosed = []; // danh sách voucher đã chọn
        this.listVoucherNotChoose = [];
        this.listShow = []; // danh sách voucher hiển thị
        this.listShowSearch = []; // danh sách voucher ban đầu dùng để tìm kiếm
        this.showVoucherModal = [];
        /** hàm sort cho các cột */
        this.nameCol = false;
        this.quantity_releasedCol = false;
        this.itemReleases = this.router.getCurrentNavigation().extras.state;
    }
    ngOnInit() {
        if (this.itemReleases) {
            this.getListVoucher();
            this.getVoucherReleaseDetails(this.itemReleases._id);
        }
    }
    ngAfterViewChecked() {
        if (document.querySelector("#product-list") &&
            document.querySelector(".ant-table-thead") &&
            document.querySelector(".product-list-header") &&
            document.querySelector(".ant-table-pagination")) {
            this.heightScroll =
                document.querySelector("#product-list").clientHeight -
                    document.querySelector(".ant-table-thead").clientHeight -
                    document.querySelector(".ant-table-pagination").clientHeight -
                    document.querySelector(".product-list-header").clientHeight - 80 + "px";
        }
        this.cdRef.detectChanges();
    }
    // lấy danh sách voucher
    getListVoucher() {
        this.vhQueryCafe.getVouchers().then((vouchers) => {
            let data = vouchers;
            this.listVoucher = data.map(item => {
                return Object.assign(Object.assign({}, item), { choose: false, display: 'flex' });
            });
            this.showVoucherModal = this.vhAlgorithm.sortStringbyDESC(this.listVoucher, ['name']);
        });
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/sales-program/voucher/releases-voucher']);
    }
    //  xem danh sách mã voucher
    gotoGetListCodeVoucher(item) {
        let dataRestore = { release: this.itemReleases };
        this.router.navigate(['/cafe/dashboard/management/sales-program/voucher/releases-voucher/list-code-voucher'], {
            state: {
                data: item,
                dataRestore
            },
        });
    }
    //  thực hiện  cập nhật hiển thị đã chọn
    gotoAddVoucherToReleases() {
        if (this.listShow.length) {
            for (let itemShow of this.listShow) {
                let index = this.showVoucherModal.findIndex(item => itemShow.id_voucher == item._id);
                this.showVoucherModal[index].choose = false;
                this.showVoucherModal[index].display = 'none';
            }
        }
        this.isVisible = true;
    }
    // xử lí thêm voucher vào đợt phát hành
    handleOk() {
        this.listVoucherChoosed = this.listVoucher.filter(item => item.choose == true); // lọc voucher đã chọn
        if (!this.listShow.length) { // dữ liệu hiển thị không có
            this.listVoucherChoosed.forEach(element => {
                this.addVoucher_ReleaseDetails(element, this.itemReleases._id);
            });
        }
        else if (this.listShow.length) { // dữ liệu đã có
            if (this.listVoucherChoosed.length) { // thực hiện thêm dữ liệu voucher chưa có vào, còn đã tồn tại thì không cần thêm nữa
                this.listVoucherChoosed.forEach(element => {
                    if (!this.listShow.filter(item => item.id_voucher === element._id).length) {
                        this.addVoucher_ReleaseDetails(element, this.itemReleases._id);
                    }
                });
            }
        }
        this.isVisible = false;
    }
    handleCancel() {
        this.isVisible = false;
    }
    // Tìm kiếm voucher tại danh sách hiển thị
    searchVoucher(key) {
        if (key.length > 0) {
            this.listShow = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(key.toLowerCase()), this.listShowSearch, ["name"]);
        }
        else {
            this.listShow = this.listShowSearch;
        }
    }
    // Tèm kiếm voucher để thêm vào đợt phát hành
    searchVoucherModal(key) {
        if (key.length > 0) {
            this.showVoucherModal = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(key.toLowerCase()), this.listVoucher, ["name"]);
        }
        else {
            this.showVoucherModal = this.listVoucher;
        }
    }
    // Thêm voucher vào release_details
    addVoucher_ReleaseDetails(item, id_release) {
        //  dữ liệu thêm vào voucher_release_details
        let data = {
            id_voucher: item._id,
            id_voucher_release: id_release,
            quantity_released: 0
        };
        this.vhQueryCafe.addVoucherReleaseDetail(data).then((response) => {
            if (response) {
                response['id_release'] = id_release;
                response['id_design_barcode'] = item.id_design_barcode;
                response['name'] = item.name;
                response['products'] = this.getStringName(item.products);
                this.listShow = this.listShow.concat(response);
                this.listShowSearch = this.listShow;
            }
        }, error => {
            console.log('error', error);
        });
    }
    // lấy danh sách voucher theo đợt và cusomize dữ liệu để hiển thị
    getVoucherReleaseDetails(id_release) {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            //  lấy danh sách release_detail của đợt đang chọn
            this.vhQueryCafe.getVoucherRelaseDetail_byFields({ id_voucher_release: { $eq: id_release } }, {}, {}, 0).then((release_details) => {
                if (release_details.length) {
                    //  thự hiện kiểm tra có bao nhiêu voucher trong đợt phát hành
                    for (let releaseDetail of release_details) {
                        let voucher = this.listVoucher.find(item => item._id == releaseDetail.id_voucher);
                        if (voucher) {
                            // config dữ liệu hiện thị
                            releaseDetail['id_design_barcode'] = voucher.id_design_barcode;
                            releaseDetail['name'] = voucher.name;
                            releaseDetail['products'] = this.getStringName(voucher.products); // vouchers là danh sách sản phẩm trong 1 voucher
                        }
                    }
                    this.listShow = this.listShow.concat(release_details);
                    this.listShowSearch = this.listShow;
                    this.vhComponent.hideLoading(0);
                }
                else {
                    this.listShow = [];
                    this.listShowSearch = this.listShow;
                    this.vhComponent.hideLoading(0);
                }
            });
        });
    }
    // chuổi sản phẩm trong có trong voucher
    getStringName(products) {
        let result = '';
        products.forEach(element => {
            let product = this.vhQueryCafe.getlocalProduct(element.id_product);
            if (product) {
                if (result.length == 0) {
                    if (element.id_subproduct)
                        product.name = product.name + ' (' + product.subs.find(sub => sub._id == element.id_subproduct).name + ')';
                    result = product.name + ' x' + element.quantity;
                }
                else {
                    if (element.id_subproduct)
                        product.name = product.name + ' (' + product.subs.find(sub => sub._id == element.id_subproduct).name + ')';
                    result = result + ', ' + product.name + ' x' + element.quantity;
                }
            }
        });
        return result;
    }
    // chọn voucher vào đợt phát hành
    chooseVoucherInRelease(position) {
        let voucher = this.showVoucherModal[position];
        if (voucher.choose == false) {
            this.showVoucherModal[position].choose = true;
        }
        else if (voucher.choose == true) {
            this.showVoucherModal[position].choose = false;
        }
    }
    // xóa voucher từ đợt phát hành
    deleteVoucher_Release(data) {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhQueryCafe.deleteVoucherReleaseDetail(data._id)
                .then((rsp) => {
                this.vhComponent.hideLoading(0);
                if (rsp.vcode == 0) {
                    this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Xóa thành công"));
                    this.listShow = this.listShow.filter(item => item._id != data._id);
                    this.listShowSearch = this.listShow;
                }
                else if (rsp.vcode == 1) {
                    this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Không thể xóa vì có Voucher liên quan đã được đổi điểm, bán hoặc sử dụng lấy hàng hóa"));
                }
            }, error => {
                this.vhComponent.hideLoading(0);
                console.log('error', error);
            });
        });
    }
    /** Hàm thực hiện sắp xếp theo collection
     *
     * @param colName       // tên cột muôn sắp xếp
     */
    sortTable(colName) {
        switch (colName) {
            case 'name':
                if (this.nameCol) {
                    this.listShow = this.vhAlgorithm.sortVietnamesebyASC([...this.listShow], colName);
                }
                else {
                    this.listShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.listShow], colName);
                }
                break;
            case 'quantity_released':
                if (this.quantity_releasedCol) {
                    this.listShow = this.vhAlgorithm.sortNumberbyASC([...this.listShow], colName);
                }
                else {
                    this.listShow = this.vhAlgorithm.sortNumberbyDESC([...this.listShow], colName);
                }
                break;
        }
    }
}
ReleaseDetailComponent.ɵfac = function ReleaseDetailComponent_Factory(t) { return new (t || ReleaseDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
ReleaseDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReleaseDetailComponent, selectors: [["app-release-detail"]], decls: 53, vars: 40, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "product-list", 1, "height-layout"], ["nz-row", "", 1, "product-list-header"], ["nz-col", "", "nzSpan", "6", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "ngModel", "ngModelChange", "keyup"], ["box", ""], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-add", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [2, "margin-top", "16px"], ["nzShowSizeChanger", "", "nzShowPagination", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData"], ["dataReleaseDetail", ""], ["nzWidth", "5%"], ["nzWidth", "30%;", "nzAlign", "left", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "25%;", "nzAlign", "right", 2, "cursor", "pointer", 3, "click"], ["nzAlign", "center"], [4, "ngFor", "ngForOf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzMaskClosable", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [4, "nzModalContent"], ["modalFooterEditUnitPrice", ""], ["nz-icon", "", "nzType", "search"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "topLeft", "nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "color", "var(--ion-color-vh-red)", 3, "nzPopconfirmTitle", "click", "nzOnConfirm"], ["nzAlign", "left"], ["nzAlign", "right"], ["nz-button", "", "nzType", "default", 1, "btn-add", 2, "margin", "auto", 3, "click"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], ["id", "inputSearchDishes", "nz-input", "", 1, "nz-hover-border", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], ["id", "list_voucher"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["nzNotFoundImage", "simple", 3, "nzNotFoundContent", 4, "ngIf"], [3, "ngStyle", "click"], [3, "nzDescription"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nzNotFoundImage", "simple", 3, "nzNotFoundContent"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"]], template: function ReleaseDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleaseDetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nz-input-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ReleaseDetailComponent_Template_input_ngModelChange_12_listener($event) { return ctx.tempVal = $event; })("keyup", function ReleaseDetailComponent_Template_input_keyup_12_listener() { return ctx.searchVoucher(ctx.tempVal); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ReleaseDetailComponent_ng_template_15_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleaseDetailComponent_Template_button_click_19_listener() { return ctx.gotoAddVoucherToReleases(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "nz-table", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleaseDetailComponent_Template_th_click_29_listener() { ctx.nameCol = !ctx.nameCol; return ctx.sortTable("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleaseDetailComponent_Template_th_click_38_listener() { ctx.quantity_releasedCol = !ctx.quantity_releasedCol; return ctx.sortTable("quantity_released"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, ReleaseDetailComponent_tr_48_Template, 13, 7, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "nz-modal", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function ReleaseDetailComponent_Template_nz_modal_nzVisibleChange_49_listener($event) { return ctx.isVisible = $event; })("nzOnOk", function ReleaseDetailComponent_Template_nz_modal_nzOnOk_49_listener() { return ctx.handleOk(); })("nzOnCancel", function ReleaseDetailComponent_Template_nz_modal_nzOnCancel_49_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, ReleaseDetailComponent_ng_container_50_Template, 10, 8, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, ReleaseDetailComponent_ng_template_51_Template, 6, 6, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 21, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 23, ctx.itemReleases.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSuffix", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 25, "Search voucher"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.tempVal);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 27, "Select issued Voucher"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](37, _c2))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](38, _c3, ctx.heightScroll))("nzData", ctx.listShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](32, 29, "Voucher name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.nameCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 31, "Products in voucher"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 33, "Issued voucher quantity"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.quantity_releasedCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 35, "Release"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r3.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", ctx.languageService.translate("Ch\u1ECDn voucher v\u00E0o \u0111\u1EE3t"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzFooter", _r6)("nzVisible", ctx.isVisible)("nzMaskClosable", false);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_8__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_9__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__.NzWaveDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalContentDirective, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_16__.NzPopconfirmDirective, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__.NzListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__.NzListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgStyle, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_17__.NzListItemMetaComponent, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_18__.NzCheckboxComponent, ng_zorro_antd_empty__WEBPACK_IMPORTED_MODULE_19__.NzEmptyComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n  overflow-y: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 95%;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nth.ant-table-cell[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n#list_voucher[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  overflow: hidden;\n  overflow-y: scroll;\n  height: 285px;\n}\n#list_voucher[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n@media only screen and (max-width: 1200px) {\n  .btn-add[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n\n  .btn-data[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGVhc2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0ksaUJBQUE7QUFFTjtBQUVBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKO0FBQUk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUVFO0VBQ0UsaUJBQUE7QUFDSjtBQUlBOztFQUVJLGdDQUFBO0FBREo7QUFJQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBREo7QUFFSTtFQUNJLGFBQUE7QUFBUjtBQU1RO0VBQ0ksZUFBQTtBQUhaO0FBUUE7RUFDSTtJQUNJLDRCQUFBO0VBTE47O0VBT0U7SUFDSSw0QkFBQTtFQUpOO0FBQ0YiLCJmaWxlIjoicmVsZWFzZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGkge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1kYXRhIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5idG4tYWRkIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbnRoLmFudC10YWJsZS1jZWxsIHtcclxuICBiIHtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5hbnQtYnRuOmZvY3VzLFxyXG4uYW50LWJ0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG5cclxuLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiNsaXN0X3ZvdWNoZXIge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogMjg1cHg7XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxudGJvZHkge1xyXG4gICAgdHIge1xyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC5idG4tYWRkIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ0bi1kYXRhIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 21989:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/sales-program/voucher/releases-voucher/releases-voucher.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReleasesVoucherComponent": () => (/* binding */ ReleasesVoucherComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function ReleasesVoucherComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleasesVoucherComponent_tr_41_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const data_r4 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.gotoDetail(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleasesVoucherComponent_tr_41_Template_td_click_9_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleasesVoucherComponent_tr_41_Template_i_click_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const data_r4 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); $event.stopPropagation(); return ctx_r9.editReleaseVoucher(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnConfirm", function ReleasesVoucherComponent_tr_41_Template_i_nzOnConfirm_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const data_r4 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.deleteRelease(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r4.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 4, data_r4.date_validity, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 7, data_r4.date_expire, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 10, "Delete this coupon issuance"), "?");
} }
function ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_10_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Voucher issuance name is required"), " ");
} }
function ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_10_ng_container_0_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r18.hasError("required"));
} }
function ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_19_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Name is requied"), " ");
} }
function ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_19_ng_container_0_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r20.hasError("required"));
} }
function ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_28_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Name is requied"), " ");
} }
function ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_28_ng_container_0_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r22.hasError("required"));
} }
function ReleasesVoucherComponent_nz_modal_42_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-form-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-form-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_10_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-form-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-form-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "nz-date-picker", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_19_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nz-form-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "nz-form-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "nz-date-picker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ReleasesVoucherComponent_nz_modal_42_ng_container_2_ng_template_28_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r11.addVoucherReleases);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 14, "Voucher issuance name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24)("nzErrorTip", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 16, "Enter name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 18, "Start date of use"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24)("nzErrorTip", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 20, "Expiration date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24)("nzErrorTip", _r12);
} }
function ReleasesVoucherComponent_nz_modal_42_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-modal", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function ReleasesVoucherComponent_nz_modal_42_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.isVisibleModalAdd = $event; })("nzOnCancel", function ReleasesVoucherComponent_nz_modal_42_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.isVisibleModalAdd = false; })("nzOnOk", function ReleasesVoucherComponent_nz_modal_42_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r27.addRelease(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ReleasesVoucherComponent_nz_modal_42_ng_container_2_Template, 30, 22, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, "Add issuance"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx_r2.isVisibleModalAdd);
} }
function ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_10_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Name is requied"), " ");
} }
function ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_10_ng_container_0_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r35.hasError("required"));
} }
function ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_19_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Name is requied"), " ");
} }
function ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_19_ng_container_0_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r37.hasError("required"));
} }
function ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_28_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "Name is requied"), " ");
} }
function ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_28_ng_container_0_Template, 3, 3, "ng-container", 31);
} if (rf & 2) {
    const control_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", control_r39.hasError("required"));
} }
function ReleasesVoucherComponent_nz_modal_43_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "nz-form-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "nz-form-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_10_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "nz-form-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "nz-form-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "nz-date-picker", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_19_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "nz-form-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "nz-form-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "nz-form-control", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "nz-date-picker", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ReleasesVoucherComponent_nz_modal_43_ng_container_2_ng_template_28_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r28.editReleaseVoucherForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 14, "Voucher issuance name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24)("nzErrorTip", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 16, "Enter name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 18, "Start date of use"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24)("nzErrorTip", _r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 20, "Expiration date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", 24)("nzErrorTip", _r29);
} }
function ReleasesVoucherComponent_nz_modal_43_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-modal", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function ReleasesVoucherComponent_nz_modal_43_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r41.isVisibleModalEdit = $event; })("nzOnCancel", function ReleasesVoucherComponent_nz_modal_43_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r43.nzOnCancelEdit(); })("nzOnOk", function ReleasesVoucherComponent_nz_modal_43_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r44.saveEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ReleasesVoucherComponent_nz_modal_43_ng_container_2_Template, 30, 22, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, "Update issuance"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzVisible", ctx_r3.isVisibleModalEdit);
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a0) { return { y: a0 }; };
class ReleasesVoucherComponent {
    constructor(router, cdRef, vhAlgorithm, vhQuery, vhComponent, languageService, vhQueryCafe) {
        this.router = router;
        this.cdRef = cdRef;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuery = vhQuery;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQueryCafe = vhQueryCafe;
        this.isVisibleModalAdd = false; // show/hide modal thêm release
        this.isVisibleModalEdit = false; // show/hide modal sửa release
        this.list_data = []; // danh sách release
        this.data_selected = {}; // item đợt đươc chọn
        this.name = ''; // tên đợt
        this.name_old = ''; // tên đợt cũ
        /** hàm sort cho các cột */
        this.nameCol = false;
        this.date_validityCol = false;
        this.date_expireCol = false;
    }
    ngOnInit() {
        this.getListRelease();
        this.initForm();
    }
    /**
     * khởi tạo form lưu các trường của đợt phát hành để thêm
     */
    initForm() {
        this.addVoucherReleases = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            date_validity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date(new Date().setHours(0, 0, 0)), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            date_expire: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date(new Date().setHours(23, 59, 59)), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
        });
    }
    /**
     * get dữ liệu đợt phát hành voucher
     */
    getListRelease() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhQueryCafe.getVoucherRelases().then((voucher_releases) => {
                this.list_data = this.vhAlgorithm.sortStringbyDESC(voucher_releases, ['name']);
                this.vhComponent.hideLoading(0);
            }, (err) => {
                console.error(err);
                this.vhComponent.hideLoading(0);
            });
        });
    }
    ngAfterViewChecked() {
        if (document.querySelector("#product-list") &&
            document.querySelector(".ant-table-thead") &&
            document.querySelector(".product-list-header") &&
            document.querySelector(".ant-table-pagination")) {
            this.heightScroll =
                document.querySelector("#product-list").clientHeight -
                    document.querySelector(".ant-table-thead").clientHeight -
                    document.querySelector(".ant-table-pagination").clientHeight -
                    document.querySelector(".product-list-header").clientHeight - 80 + "px";
        }
        this.cdRef.detectChanges();
    }
    //  Thêm đợt phát hành
    addRelease() {
        if (this.addVoucherReleases.valid) {
            this.vhQueryCafe.addVoucherRelease(this.addVoucherReleases.value).then((response) => {
                this.isVisibleModalAdd = false;
                this.list_data = this.vhAlgorithm.sortStringbyDESC(this.list_data.concat(response), ['name']);
                this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Thêm đợt phát hành thành công"));
            }, error => {
                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Thêm đợt phát hành thất bại"));
            });
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vui lòng nhập đủ thông tin"));
        }
    }
    nzOnCancelEdit() {
        this.isVisibleModalEdit = false;
    }
    // Cập nhật tên đợt phát hành
    saveEdit() {
        if (this.editReleaseVoucherForm.valid) {
            this.vhComponent.showLoading('').then(() => {
                let data = this.editReleaseVoucherForm.value;
                this.vhQueryCafe.updateVoucherRelease(data._id, data).then((bool) => {
                    if (bool) {
                        this.isVisibleModalEdit = false;
                        const index = this.list_data.findIndex(item => item._id == data._id);
                        this.list_data[index].name = data.name;
                        this.list_data[index].date_validity = data.date_validity;
                        this.list_data[index].date_expire = data.date_expire;
                    }
                    this.vhComponent.hideLoading(0);
                }, error => {
                    console.log('error', error);
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Cập nhật đợt phát hành thất bại"));
                });
            });
        }
    }
    goBack() {
        this.router.navigate(['/cafe/dashboard/management/sales-program/voucher']);
    }
    gotoDetail(item) {
        this.router.navigate(['/cafe/dashboard/management/sales-program/voucher/releases-voucher/release-detail'], {
            state: item
        });
    }
    /**
     * xóa đợt phát hành khỏi DB
     */
    deleteRelease(data) {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhQueryCafe.deleteVoucherRelease(data._id)
                .then((rsp) => {
                this.vhComponent.hideLoading(0);
                if (rsp.vcode == 0) {
                    this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Xóa đợt phát hành thành công"));
                    this.list_data = this.list_data.filter(item => item._id != data._id);
                }
                else if (rsp.vcode == 1) {
                    this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Xóa không thành công, vui lòng xóa các thành phần trong đợt phát hành này trước!"));
                }
            }, error => {
                this.vhComponent.hideLoading(0);
                console.log('error', error);
            });
        });
    }
    // mở form sửa đợt voucher và khởi tạo form sửa đởt
    editReleaseVoucher(data) {
        this.editReleaseVoucherForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(data._id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            date_validity: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date(data.date_validity), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            date_expire: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date(data.date_expire), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            id_branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(data.id_branch, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required])
        });
        this.isVisibleModalEdit = true;
    }
    /** Hàm thực hiện sắp xếp theo collection
     *
     * @param colName       // tên cột muôn sắp xếp
     */
    sortTable(colName) {
        switch (colName) {
            case 'date_validity':
                if (this.date_validityCol) {
                    this.list_data = this.vhAlgorithm.sortDatebyASC([...this.list_data], colName);
                }
                else {
                    this.list_data = this.vhAlgorithm.sortDatebyDESC([...this.list_data], colName);
                }
                break;
            case 'date_expire':
                if (this.date_expireCol) {
                    this.list_data = this.vhAlgorithm.sortDatebyASC([...this.list_data], colName);
                }
                else {
                    this.list_data = this.vhAlgorithm.sortDatebyDESC([...this.list_data], colName);
                }
                break;
            case 'name':
                if (this.nameCol) {
                    this.list_data = this.vhAlgorithm.sortVietnamesebyASC([...this.list_data], colName);
                }
                else {
                    this.list_data = this.vhAlgorithm.sortVietnamesebyDESC([...this.list_data], colName);
                }
                break;
        }
    }
}
ReleasesVoucherComponent.ɵfac = function ReleasesVoucherComponent_Factory(t) { return new (t || ReleasesVoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQueryCafe)); };
ReleasesVoucherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ReleasesVoucherComponent, selectors: [["app-releases-voucher"]], decls: 44, vars: 34, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "product-list", 1, "height-layout"], ["nz-row", "", 1, "product-list-header"], ["nz-col", "", "nzSpan", "14", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "10", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-add", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], [2, "margin-top", "16px"], ["nzShowSizeChanger", "", "nzShowPagination", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData"], ["dataReleases", ""], ["nzWidth", "30%", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "25%", 2, "cursor", "pointer", 3, "click"], ["nzAlign", "center", "nzWidth", "20%"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], [1, "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline", 2, "margin-right", "16px", "font-size", "1.2rem", 3, "click"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", "nz-popconfirm", "", "nzPopconfirmPlacement", "bottom", 2, "font-size", "1.2rem", 3, "nzPopconfirmTitle", "nzOnConfirm"], [3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nz-form", "", 3, "formGroup"], [2, "margin", "0 0 8px"], [3, "nzSpan"], [3, "nzSpan", "nzErrorTip"], ["nz-input", "", "formControlName", "name", 2, "text-align", "start", 3, "placeholder"], ["userErrorTpl", ""], ["nzFormat", "dd/MM/yyyy", "formControlName", "date_validity", 2, "width", "100%"], ["nzFormat", "dd/MM/yyyy", "formControlName", "date_expire", 2, "width", "100%"], [4, "ngIf"]], template: function ReleasesVoucherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleasesVoucherComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleasesVoucherComponent_Template_button_click_12_listener() { ctx.isVisibleModalAdd = true; return ctx.name = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "nz-table", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleasesVoucherComponent_Template_th_click_21_listener() { ctx.nameCol = !ctx.nameCol; return ctx.sortTable("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleasesVoucherComponent_Template_th_click_26_listener() { ctx.date_validityCol = !ctx.date_validityCol; return ctx.sortTable("date_validity"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ReleasesVoucherComponent_Template_th_click_31_listener() { ctx.date_expireCol = !ctx.date_expireCol; return ctx.sortTable("date_expire"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ReleasesVoucherComponent_tr_41_Template, 13, 12, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, ReleasesVoucherComponent_nz_modal_42_Template, 3, 4, "nz-modal", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ReleasesVoucherComponent_nz_modal_43_Template, 3, 4, "nz-modal", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 17, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 19, "Voucher issuance list"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 21, "Create issuance"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](32, _c1, ctx.heightScroll))("nzData", ctx.list_data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 23, "Issuance name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.nameCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 25, "Starting date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.date_validityCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 27, "Ending date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzType", ctx.date_expireCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](39, 29, "Functions"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.list_data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isVisibleModalAdd);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isVisibleModalEdit);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_12__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_14__.NzPopconfirmDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_16__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_18__.NzDatePickerComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n  overflow-y: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  cursor: pointer;\n}\nth.ant-table-cell[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n@media only screen and (max-width: 1200px) {\n  .btn-add[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n\n  .btn-data[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\ni[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGVhc2VzLXZvdWNoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDSSxpQkFBQTtBQUVOO0FBRUE7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGlFQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUtZO0VBQ0ksZUFBQTtBQUZoQjtBQVFFO0VBQ0UsaUJBQUE7QUFMSjtBQVNBO0VBQ0k7SUFDSSw0QkFBQTtFQU5OOztFQVFFO0lBQ0ksNEJBQUE7RUFMTjtBQUNGO0FBU0EsZ0NBQUE7QUFFQTs7RUFFSSx3QkFBQTtFQUNBLFNBQUE7QUFSSjtBQVlBLFlBQUE7QUFFQTtFQUNJLDBCQUFBO0FBVko7QUFhQTtFQUNJLGVBQUE7QUFWSiIsImZpbGUiOiJyZWxlYXNlcy12b3VjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1hZGQge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG50Ym9keSB7XHJcbiAgICB0ciB7XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG50aC5hbnQtdGFibGUtY2VsbCB7XHJcbiAgYiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5idG4tZGF0YSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG5cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi8qIEZpcmVmb3ggKi9cclxuXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbmkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 42140:
/*!****************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/sales-program/voucher/releases-voucher/releases-voucher.module.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReleasesVoucherModule": () => (/* binding */ ReleasesVoucherModule)
/* harmony export */ });
/* harmony import */ var _list_code_voucher_print_print_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-code-voucher/print/print.component */ 17343);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _releases_voucher_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./releases-voucher.component */ 21989);
/* harmony import */ var _release_detail_release_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./release-detail/release-detail.component */ 24501);
/* harmony import */ var _list_code_voucher_list_code_voucher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-code-voucher/list-code-voucher.component */ 28137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);













const routes = [
    {
        path: '',
        component: _releases_voucher_component__WEBPACK_IMPORTED_MODULE_2__.ReleasesVoucherComponent
    },
    {
        path: 'release-detail',
        component: _release_detail_release_detail_component__WEBPACK_IMPORTED_MODULE_3__.ReleaseDetailComponent
    },
    {
        path: 'list-code-voucher',
        component: _list_code_voucher_list_code_voucher_component__WEBPACK_IMPORTED_MODULE_4__.ListCodeVoucherComponent
    }
];
class ReleasesVoucherModule {
}
ReleasesVoucherModule.ɵfac = function ReleasesVoucherModule_Factory(t) { return new (t || ReleasesVoucherModule)(); };
ReleasesVoucherModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ReleasesVoucherModule });
ReleasesVoucherModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ReleasesVoucherModule, { declarations: [_releases_voucher_component__WEBPACK_IMPORTED_MODULE_2__.ReleasesVoucherComponent, _release_detail_release_detail_component__WEBPACK_IMPORTED_MODULE_3__.ReleaseDetailComponent, _list_code_voucher_list_code_voucher_component__WEBPACK_IMPORTED_MODULE_4__.ListCodeVoucherComponent, _list_code_voucher_print_print_component__WEBPACK_IMPORTED_MODULE_0__.PrintComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_sales-program_voucher_releases-voucher_releases-voucher_-915ef3.js.map