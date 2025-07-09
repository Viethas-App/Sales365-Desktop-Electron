"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_bill-web-app_exchange-order-voucher_exchange-order-voucher_module_ts"],{

/***/ 62431:
/*!*************************************************************************************!*\
  !*** ./src/app/cafe/bill-web-app/exchange-order-voucher/detail/detail.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_cafe_components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/print/exchange-voucher/exchange-voucher-a4/exchange-voucher-a4.component */ 7805);
/* harmony import */ var src_app_cafe_components_print_exchange_voucher_exchange_voucher_a5_exchange_voucher_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/print/exchange-voucher/exchange-voucher-a5/exchange-voucher-a5.component */ 86202);
/* harmony import */ var src_app_cafe_components_print_exchange_voucher_exchange_voucher_k57_col3_exchange_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/print/exchange-voucher/exchange-voucher-k57-col3/exchange-voucher-k57-col3.component */ 77914);
/* harmony import */ var src_app_cafe_components_print_exchange_voucher_exchange_voucher_k80_col3_exchange_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/components/print/exchange-voucher/exchange-voucher-k80-col3/exchange-voucher-k80-col3.component */ 76114);
/* harmony import */ var src_app_cafe_components_print_exchange_voucher_exchange_voucher_k80_col4_exchange_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cafe/components/print/exchange-voucher/exchange-voucher-k80-col4/exchange-voucher-k80-col4.component */ 86304);
/* harmony import */ var src_app_cafe_interface_vh_sale_voucher_invoice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cafe/interface/vh-sale-voucher-invoice */ 10297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


























function DetailComponent_table_20_ng_container_20_ng_container_7_span_1_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", e_r11.name, " x", e_r11.quantity, ", ");
} }
function DetailComponent_table_20_ng_container_20_ng_container_7_span_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DetailComponent_table_20_ng_container_20_ng_container_7_span_1_div_2_span_1_Template, 2, 2, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", product_r8.combos);
} }
function DetailComponent_table_20_ng_container_20_ng_container_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, DetailComponent_table_20_ng_container_20_ng_container_7_span_1_div_2_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" x", product_r8.quantity, " ", product_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", product_r8.combos);
} }
function DetailComponent_table_20_ng_container_20_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DetailComponent_table_20_ng_container_20_ng_container_7_span_1_Template, 4, 3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", data_r4.products);
} }
function DetailComponent_table_20_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, DetailComponent_table_20_ng_container_20_ng_container_7_Template, 2, 1, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r4.name_voucher);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", data_r4.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r4.name_voucher_release);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](15, 5, data_r4.date_validity, "dd/MM/yyyy HH:mm"), " ");
} }
function DetailComponent_table_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, DetailComponent_table_20_ng_container_20_Template, 16, 8, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 5, "Voucher name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 7, "Voucher code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](14, 9, "_Issuance name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](18, 11, "Release date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.listShow);
} }
function DetailComponent_nz_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "nz-option", 37);
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("nzValue", item_r14._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("nzLabel", item_r14.name);
} }
function DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_1_ng_container_4_tr_1_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "nz-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r27.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](1, 3, element_r27.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzValue", element_r27._id);
} }
function DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_1_ng_container_4_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "nz-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_1_ng_container_4_tr_1_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; return item_r24.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_1_ng_container_4_tr_1_nz_option_6_Template, 2, 6, "nz-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", item_r24.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", item_r24.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r25.getUnit(item_r24.units, item_r24.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](item_r24.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r25.vhAlgorithm.vhcurrencyunit(item_r24.price), " ");
} }
function DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_1_ng_container_4_tr_1_Template, 13, 9, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r24.lots);
} }
function DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_1_ng_container_4_Template, 2, 1, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", data_r20.combos);
} }
function DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_2_nz_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "nz-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r34.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](1, 3, element_r34.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzValue", element_r34._id);
} }
function DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "nz-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_2_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37); const data_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit; return data_r20.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_2_nz_option_7_Template, 2, 6, "nz-option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", data_r20.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", data_r20.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r22.getUnit(data_r20.units, data_r20.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r20.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r22.vhAlgorithm.vhcurrencyunit(data_r20.price), " ");
} }
function DetailComponent_nz_modal_54_ng_container_2_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_1_Template, 5, 2, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, DetailComponent_nz_modal_54_ng_container_2_ng_container_21_ng_container_2_Template, 14, 9, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", data_r20.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !data_r20.combos && data_r20.lots);
} }
const _c0 = function () { return { y: "400px" }; };
function DetailComponent_nz_modal_54_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "nz-table", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, DetailComponent_nz_modal_54_ng_container_2_ng_container_21_Template, 3, 2, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](2);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzData", ctx_r15.tempDetail)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 11, "Lot number"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 13, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 15, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 17, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _r18.data);
} }
function DetailComponent_nz_modal_54_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailComponent_nz_modal_54_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r39.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailComponent_nz_modal_54_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r41.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 4, "Ok"));
} }
function DetailComponent_nz_modal_54_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "nz-modal", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("nzVisibleChange", function DetailComponent_nz_modal_54_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r42.show_modal_select_lots_combo = $event; })("nzOnCancel", function DetailComponent_nz_modal_54_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r44.show_modal_select_lots_combo = false; })("nzOnOk", function DetailComponent_nz_modal_54_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r43); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r45.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, DetailComponent_nz_modal_54_ng_container_2_Template, 22, 20, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, DetailComponent_nz_modal_54_ng_template_3_Template, 6, 6, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](1, 4, "Select lot number for products in voucher"), ": ", ctx_r2.tempDetail.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzFooter", _r16)("nzVisible", ctx_r2.show_modal_select_lots_combo);
} }
const _c1 = function () { return { minRows: 2, maxRows: 4 }; };
class DetailComponent {
    constructor(router, vhComponent, languageService, vhQueryCafe, vhAlgorithm, vhAuth, nzModalService, fncService, cdf, vhQuery) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.nzModalService = nzModalService;
        this.fncService = fncService;
        this.cdf = cdf;
        this.vhQuery = vhQuery;
        this.listShow = [];
        this.invoice = new src_app_cafe_interface_vh_sale_voucher_invoice__WEBPACK_IMPORTED_MODULE_5__.VhSaleExchangeVoucherInvoices({}, []);
        this.employee = {};
        this.pickerTime = new Date();
        this.checkPrinter = false;
        this.id_product_delete = '';
        // -------set employee-------
        this.employees = this.vhAuth.getlocalEmployees();
        this.tempDetail = {};
        this.show_modal_select_lots_combo = false;
        this.root = this.router.getCurrentNavigation().extras.state;
        this.customer_online = this.root.customer;
        this.getDataInvoice(this.root.bill);
    }
    ngOnInit() {
    }
    getDataInvoice(bill) {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQueryCafe.getBill_details_byId_bill(bill._id)
            ]).then(([invoiceDetail]) => {
                console.log(invoiceDetail);
                if (!invoiceDetail.length)
                    this.init(bill, []);
                else {
                    // invoiceDetail = this.vhAlgorithm.sortVietnamesebyASC(invoiceDetail, 'name');
                    let promise = [];
                    for (let i in invoiceDetail) {
                        promise[i] = this.vhQueryCafe.getVoucher_Code_Name_Release(invoiceDetail[i].id_voucher_code);
                    }
                    Promise.all(promise).then((array) => {
                        invoiceDetail = invoiceDetail.map((e, index) => {
                            return Object.assign(Object.assign(Object.assign({}, e), { price: array[index].units[0].price }), array[index]);
                        });
                        this.init(bill, invoiceDetail);
                        this.listShow = invoiceDetail;
                        console.log(this.listShow);
                    });
                }
            });
        });
    }
    init(invoice = null, invoiceDetail = null) {
        this.vhComponent.hideLoading(0);
        this.invoice = new src_app_cafe_interface_vh_sale_voucher_invoice__WEBPACK_IMPORTED_MODULE_5__.VhSaleExchangeVoucherInvoices(invoice, invoiceDetail);
        if (invoice && invoiceDetail) {
            // set nhân viên mặc định
            if (!this.invoice.getIdEmployee())
                this.invoice.setIdEmployee(this.vhAuth.getUser()._id);
            this.invoice.setDate(new Date().toISOString());
            this.note = this.invoice.getNote();
            this.pickerTime = new Date(this.invoice.getDate());
            this.employee = this.vhAuth.getlocalEmployee(this.invoice.getIdEmployee());
        }
    }
    ngAfterViewInit() {
        let printer = this.vhQueryCafe.getLocalPrintPage('page_desktop_sales_voucher');
        if (printer)
            this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
    }
    ngAfterViewChecked() {
        this.cdf.detectChanges();
    }
    // chuổi danh sách sản phẩm
    getStringName(products) {
        let name = '';
        products.forEach(element => {
            let product = this.vhQueryCafe.getlocalDetailProduct(element.id_subproduct ? element.id_subproduct : element.id_product);
            name += '- ' + element.quantity + 'x ' + product.name + ' \n';
        });
        return name;
    }
    goBack() {
        this.router.navigate(['/cafe/bill-web-app/exchange-order-voucher']);
    }
    closeAndReceiveEmployee(event) {
        if (event) {
            this.invoice.setIdEmployee(event);
        }
    }
    setPickerTime(event) {
        if (new Date(event).getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime()) {
            this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the registration date (")} ${this.fncService.formatDate(this.vhAuth.getStore().registrationdate)} ${")"}`, 5000);
            this.pickerTime = new Date(this.invoice.getDate());
            this.invoice.setDate(new Date(this.pickerTime));
        }
        else
            this.vhQueryCafe.getValidityDate(new Date(event)).then((validitydate) => {
                if (validitydate == null) {
                    this.invoice.setDate(event);
                }
                else {
                    this.pickerTime = new Date(validitydate);
                    this.invoice.setDate(new Date(this.pickerTime));
                    this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 5000);
                }
            });
    }
    payInvoice(bill_type, print) {
        console.log(this.invoice.getCreateUpdateInvoiceDetail());
        console.log(this.checkBillDetailSave());
        if (this.checkBillDetailSave()) {
            if (this.vhAuth.checkMyPermission("sales_enable_payment")) {
                if (print) {
                    if (this.checkPrinter) {
                        this.vhComponent.showLoading("", "transparent-loading").then(() => {
                            this.createOrUpdate().then((bill) => {
                                this.vhComponent.hideLoading(0).then(() => {
                                    this.vhComponent.showToast(5000, `${this.languageService.translate("Invoice for exchanging voucher for goods (capitalized)")} ${this.invoice.getBillCode()} ${this.languageService.translate("has been created successfully")}`, "success-toast");
                                    this.handlePrint();
                                });
                            });
                        });
                    }
                    else {
                        this.nzModalService.confirm({
                            nzTitle: '<i>' + this.languageService.translate("Function") + '</i>',
                            nzContent: '<b>' + this.languageService.translate("Please open the function in") + ' ' + '<i>' + '"' + this.languageService.translate("Sales page settings") + '"' + '</i>' + ' ' + ' -> ' + '<i>' + '"' + this.languageService.translate('Print page') + '"' + '</i>' + '</b>',
                            nzIconType: "info-circle",
                            nzCancelText: null,
                            nzOnOk: () => { }
                        });
                    }
                }
                else {
                    this.vhComponent.showLoading("", "transparent-loading").then(() => {
                        this.createOrUpdate().then((bill) => {
                            this.vhComponent.hideLoading(0).then(() => {
                                this.vhComponent.showToast(5000, `${this.languageService.translate("Hóa Đơn đặt đổi voucher lấy hàng lấy hàng hóa")} ${this.invoice.getBillCode()} ${this.languageService.translate("has been created successfully")}`, "success-toast");
                                this.goBack();
                            });
                        });
                    });
                }
            }
            else
                this.vhComponent.showToast(5000, this.languageService.translate('You do not have this rights'), "alert-toast");
        }
        else
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate('Please select the lot number for the products in the voucher'));
    }
    checkBillDetailSave() {
        for (let i of this.invoice.getInvoiceDetail()) {
            if (i.products.find(item => (item.lots && !item.id_lotproduct) || (item.combos && item.combos.find(e => e.lots && !e.id_lotproduct))))
                return false;
        }
        return true;
    }
    createOrUpdate() {
        return new Promise(resolve => {
            let invoice = Object.assign({}, this.invoice.getCreateUpdateInvoice(43));
            console.log('bill', invoice);
            console.log('bill_details', this.invoice.getCreateUpdateInvoiceDetail());
            this.vhQueryCafe.updateBill_Billdetail(this.invoice.getID(), invoice, this.invoice.getCreateUpdateInvoiceDetail())
                .then(() => {
                resolve(this.vhQueryCafe.saveBill_Billdetail(this.invoice.getID(), 41));
            });
        });
    }
    getUnit(units, ratio) {
        return this.vhQueryCafe.getUnit_byRatio(units, ratio).unit;
    }
    deleteInvoice() {
        this.vhComponent.showLoading('')
            .then(() => {
            this.vhQueryCafe.deleteBill_Billdetail(this.invoice.getID())
                .then((bool) => {
                if (bool) {
                    this.vhComponent.hideLoading(0);
                    console.log('success');
                    this.goBack();
                }
                else {
                    console.log('no success');
                }
            }, (error) => {
                console.log('error ', error);
            });
        });
    }
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQueryCafe.getlocalPrinters().find(item => item.name == "DESKTOP");
            if (printer && printer.voucher.enable)
                resolve(printer.voucher);
            else
                resolve(false);
            if (!printer)
                rejects(false);
        });
    }
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_cafe_components_print_exchange_voucher_exchange_voucher_k57_col3_exchange_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_2__.ExchangeVoucherK57Col3Component;
            case 'print_size_k80_3c': return src_app_cafe_components_print_exchange_voucher_exchange_voucher_k80_col3_exchange_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__.ExchangeVoucherK80Col3Component;
            case 'print_size_k80_4c': return src_app_cafe_components_print_exchange_voucher_exchange_voucher_k80_col4_exchange_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_4__.ExchangeVoucherK80Col4Component;
            case 'print_size_a5': return src_app_cafe_components_print_exchange_voucher_exchange_voucher_a5_exchange_voucher_a5_component__WEBPACK_IMPORTED_MODULE_1__.ExchangeVoucherA5Component;
            case 'print_size_a4': return src_app_cafe_components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_0__.ExchangeVoucherA4Component;
            default: return src_app_cafe_components_print_exchange_voucher_exchange_voucher_a4_exchange_voucher_a4_component__WEBPACK_IMPORTED_MODULE_0__.ExchangeVoucherA4Component;
        }
    }
    handlePrint() {
        let print = this.vhQueryCafe.getLocalPrintPage('page_desktop_sales_voucher');
        if (print && print.print_sizes[print.print_sizes.findIndex(e => e._id == print.print_size_default)].enable) {
            let printer = print.print_sizes[print.print_sizes.findIndex(e => e._id == print.print_size_default)];
            if (printer) {
                let type = printer._id;
                this.vhComponent.showModal(this.renderPrintPage(type), { printer: printer, invoice: this.invoice }, false, false, `modal-print-${type}`).then((modal) => {
                    modal.onWillDismiss().then(() => this.goBack());
                });
            }
        }
    }
    edit_note() {
        if (this.note) {
            this.invoice.setNote(this.note);
        }
    }
    handleChooseLotCombo() {
        let check = false;
        for (let i of this.tempDetail) {
            if (i.ptype == 1 && i.lots && !i.id_lotproduct)
                check = true;
            if (i.ptype == 5 && i.combos.filter(item => item.lots && !item.id_lotproduct).length)
                check = true;
        }
        if (check)
            this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Please select the lot for the product!"));
        else {
            this.show_modal_select_lots_combo = false;
            // this.closeSearchProductList(this.tempDetail)
        }
    }
    deleteGoods(position) {
        if (this.listShow.length == 1) {
            this.listShow = [];
        }
        else {
            this.listShow.splice(position, 1);
        }
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_7__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_8__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_11__.VhQuery)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 55, vars: 45, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales", "hide-best-selling"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 3, "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], [1, "invoiceDetail-item"], ["style", "width: 100%", 4, "ngIf"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], [1, "sales-bills-staff-name"], ["nzBorderless", "", "nzShowSearch", "", 1, "cus-select", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar"], [1, "sales-bills-customer-title"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-input", "", 1, "nz-hover-border", 3, "ngModel", "placeholder", "nzAutosize", "ngModelChange", "blur"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 2, "margin", "auto", 3, "disabled", "click"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [2, "width", "100%"], ["nzWidth", "40%"], ["nzWidth", "15%"], ["nzWidth", "25%"], ["nzWidth", "20%", "nzAlign", "center"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["nzAlign", "center"], [3, "nzValue", "nzLabel"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditUnitPrice3", ""], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], ["nzWidth", "30%"], ["nzWidth", "10%"], ["nzAlign", "right", "nzWidth", "20%"], ["colspan", "4"], [2, "padding-left", "16px !important"], ["nzShowSearch", "", 2, "width", "100%", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nzAlign", "right"], [3, "nzLabel", "nzValue"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_14_listener() { return ctx.deleteInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](20, DetailComponent_table_20_Template, 21, 13, "table", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "nz-select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_nz_select_ngModelChange_28_listener($event) { return ctx.closeAndReceiveEmployee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](30, DetailComponent_nz_option_30_Template, 1, 2, "nz-option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "nz-date-picker", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_nz_date_picker_ngModelChange_35_listener($event) { return ctx.pickerTime = $event; })("ngModelChange", function DetailComponent_Template_nz_date_picker_ngModelChange_35_listener($event) { return ctx.setPickerTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](45, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function DetailComponent_Template_textarea_ngModelChange_45_listener($event) { return ctx.note = $event; })("blur", function DetailComponent_Template_textarea_blur_45_listener() { return ctx.edit_note(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_48_listener() { return ctx.payInvoice(41, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_51_listener() { return ctx.payInvoice(41, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](54, DetailComponent_nz_modal_54_Template, 5, 6, "nz-modal", 28);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 24, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 26, "Invoice for exchanging voucher for goods (capitalized)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](17, 28, "Delete"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.invoice.getInvoiceDetail().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](27, 30, "Salesman"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](29, 32, "Select employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.invoice.getIdEmployee());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.employees);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](34, 34, "Sales date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.pickerTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](40, 36, "Customer information"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate4"](" ", ctx.customer_online.name, " - ", ctx.customer_online.phone, " ", ctx.customer_online.address ? "-" : "", " ", ctx.invoice.getRetailAddress(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 38, "Enter note..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx.note)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](44, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.invoice.getInvoiceDetail().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](50, 40, "Complete & Print"), " (F2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.invoice.getInvoiceDetail().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](53, 42, "Complete"), " (F1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.show_modal_select_lots_combo);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_22__.NzDatePickerComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzAutosizeDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTbodyComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_20__.NzOptionComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalContentDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTableComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n  background-color: #f7f7f7;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-price[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 0.9rem;\n  border-bottom: solid 1px #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 93%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 1.1rem;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  grid-column: 1/3;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 13% 20% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-green) !important;\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .deactive[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   nz-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   app-delivery[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   app-customer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-gray);\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 35%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 80%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .show-best-selling[_ngcontent-%COMP%] {\n  grid-template-rows: 65% 35%;\n}\nnz-layout[_ngcontent-%COMP%]   .hide-best-selling[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n  grid-row-gap: 0px;\n  row-gap: 0px;\n}\nnz-layout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background: #fafafa;\n  transition: background 0.3s ease;\n  position: relative;\n  padding: 16px 8px;\n}\nnz-layout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n  position: relative;\n  padding: 16px 8px;\n}\n.title[_ngcontent-%COMP%] {\n  align-self: center;\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n  align-self: center;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n.border_bottom[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid #bebebe !important;\n}\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.text-end[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.beetween-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFBRTtFQUNJLGlCQUFBO0FBRU47QUFFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtFQUVBLHFCQUFBO0VBQUEsZ0JBQUE7RUFDQSx5QkFBQTtBQUNSO0FBQVE7Ozs7RUFLSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUNRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUFZO0VBQ0ksVUFBQTtBQUVoQjtBQURnQjtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFHcEI7QUFEZ0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUdwQjtBQUFZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBRWhCO0FBRGdCO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUdwQjtBQUZvQjtFQUNJLGVBQUE7QUFJeEI7QUFBb0I7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0FBRXhCO0FBR1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFEWjtBQUdRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUFEWjtBQUVZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBQWhCO0FBQ2dCO0VBRUksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFwQjtBQUNvQjs7O0VBRUksVUFBQTtFQUNBLGVBQUE7QUFFeEI7QUFDZ0I7RUFDSSxrQkFBQTtBQUNwQjtBQUVZO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQUNwQjtBQUFvQjtFQUNJLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FBRXhCO0FBQ2dCO0VBQ0ksZ0NBQUE7QUFDcEI7QUFDZ0I7RUFDSSxjQUFBO0FBQ3BCO0FBRW9CO0VBQ0ksaUJBQUE7QUFBeEI7QUFHZ0I7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRHBCO0FBR2dCO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFEcEI7QUFHZ0I7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFEcEI7QUFJWTtFQUVJLGFBQUE7RUFDQSw4QkFBQTtBQUhoQjtBQUtZO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFIaEI7QUFLb0I7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFIeEI7QUFRb0I7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFOeEI7QUFVb0I7RUFDSSxVQUFBO0FBUnhCO0FBWW9CO0VBQ0ksZUFBQTtBQVZ4QjtBQVlvQjtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFWeEI7QUFhZ0I7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQVhwQjtBQVlvQjtFQUNJLFdBQUE7QUFWeEI7QUFjb0I7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQVp4QjtBQWdCWTtFQUNJLHVCQUFBO0VBQ0EsOEJBQUE7QUFkaEI7QUFlZ0I7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFicEI7QUFlZ0I7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFFQSx1QkFBQTtBQWRwQjtBQW1CSTtFQUNJLDJCQUFBO0FBakJSO0FBbUJJO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUFBLFlBQUE7QUFqQlI7QUFxQlk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBbkJoQjtBQXVCWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXJCaEI7QUEyQkE7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXhCSjtBQTJCQTs7RUFFSSxpQkFBQTtBQXhCSjtBQTJCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQXhCSjtBQTRCQSxrQkFBQTtBQUVBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7QUExQko7QUE2QkE7RUFDSSxVQUFBO0VBQ0Esa0NBQUE7QUExQko7QUE2QkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtBQTFCSjtBQTZCQTtFQUNJLGVBQUE7QUExQko7QUE2QkE7RUFDSSxlQUFBO0FBMUJKO0FBNkJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUExQkoiLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBpIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG5uei1sYXlvdXQge1xyXG4gICAgcGFkZGluZzoxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAuc2FsZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xyXG4gICAgICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAgICAgLy8gcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICAmLWNhcnQsXHJcbiAgICAgICAgJi1iZXN0LXNlbGxpbmcsXHJcbiAgICAgICAgLnNhbGVzLWJpbGxzLXN0YWZmLFxyXG4gICAgICAgIC5zYWxlcy1iaWxscy1jdXN0b21lcixcclxuICAgICAgICAuc2FsZXMtYmlsbHMtY29udGVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY2FydCB7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNiU7XHJcbiAgICAgICAgICAgICAgICAuYnRuLWRhdGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ0bi1wcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzhjN2NjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaW52b2ljZURldGFpbCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkzJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgIC5pbnZvaWNlRGV0YWlsLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAmLXF1YW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZWNlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1iZXN0LXNlbGxpbmcge1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJpbGxzIHtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTMlIDIwJSA1NSUgMTAlO1xyXG4gICAgICAgICAgICAmLXN0YWZmIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgJi10aW1lLFxyXG4gICAgICAgICAgICAgICAgJi1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbnotZGF0ZS1waWNrZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLXN0YWZmIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWN1c3RvbWVyIHtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjOGM3Y2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuei1yYWRpby1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcHAtZGVsaXZlcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXBwLWN1c3RvbWVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY3VzdG9tZXI+ZGl2LFxyXG4gICAgICAgICAgICAmLWNvbnRlbnQ+ZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXY+IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLWRpc2NvdW50LFxyXG4gICAgICAgICAgICAgICAgJi1mZWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtdGF4IHtcclxuICAgICAgICAgICAgICAgICAgICAubm90LWZvdW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXBheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXBheW1lbnRfdHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwLXRheCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtbm90ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIC5vcmRlci1hbmQtcHJpbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2hvdy1iZXN0LXNlbGxpbmcge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDM1JTtcclxuICAgIH1cclxuICAgIC5oaWRlLWJlc3Qtc2VsbGluZyB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICAgICAgcm93LWdhcDogMHB4O1xyXG4gICAgfVxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIHRoZWFkIHtcclxuICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5jZW50ZXItY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLyogSGlkZSBzY3JvbGxiYXIqL1xyXG5cclxuLmhpZGVTY3JvbGxiYXIge1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gICAgLyogRm9yIEZpcmVmb3ggKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgIC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG59XHJcblxyXG4uaGlkZVNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIC8qIEZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXHJcbn1cclxuXHJcbi5ib3JkZXJfYm90dG9tIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5MCwgMTkwLCAxOTApICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC04IHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG5cclxuLnRleHQtZW5kIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLmJlZXR3ZWVuLWFsbC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 82417:
/*!**********************************************************************************************!*\
  !*** ./src/app/cafe/bill-web-app/exchange-order-voucher/exchange-order-voucher.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeOrderVoucherComponent": () => (/* binding */ ExchangeOrderVoucherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/notification */ 8175);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _header_account_info_header_account_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header-account-info/header-account-info.component */ 29730);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






















function ExchangeOrderVoucherComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 16);
  }
}

function ExchangeOrderVoucherComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "No invoice today"));
  }
}

function ExchangeOrderVoucherComponent_div_23_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExchangeOrderVoucherComponent_div_23_tr_37_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const invoice_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r9.goToDetail(invoice_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExchangeOrderVoucherComponent_div_23_tr_37_Template_i_click_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const invoice_r8 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return ctx_r11.vhComponent.copyValue(invoice_r8.bill_code);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const invoice_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 5, invoice_r8.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", invoice_r8.bill_code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 8, invoice_r8.customer ? invoice_r8.customer["name"] : "Not found"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](invoice_r8.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r5.vhAlgorithm.vhcurrencyunit_symbol(invoice_r8.total * (1 + invoice_r8.tax / 100)), "");
  }
}

function ExchangeOrderVoucherComponent_div_23_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 1, "No data"), " ");
  }
}

const _c0 = function (a0) {
  return {
    y: a0
  };
};

const _c1 = function () {
  return [20, 30, 40, 50, 100, 200];
};

function ExchangeOrderVoucherComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nz-table", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzCurrentPageDataChange", function ExchangeOrderVoucherComponent_div_23_Template_nz_table_nzCurrentPageDataChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r12.onCurrentPageDataChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExchangeOrderVoucherComponent_div_23_Template_th_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r14.dateCol = !ctx_r14.dateCol;
      return ctx_r14.sortTable("date");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExchangeOrderVoucherComponent_div_23_Template_th_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r15.bill_codeCol = !ctx_r15.bill_codeCol;
      return ctx_r15.sortTable("bill_code");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExchangeOrderVoucherComponent_div_23_Template_th_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r16.partner_nameCol = !ctx_r16.partner_nameCol;
      return ctx_r16.sortTable("partner_name");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExchangeOrderVoucherComponent_div_23_Template_th_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r17.sum_priceCol = !ctx_r17.sum_priceCol;
      return ctx_r17.sortTable("sum_price");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, ExchangeOrderVoucherComponent_div_23_tr_37_Template, 14, 10, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, ExchangeOrderVoucherComponent_div_23_ng_template_38_Template, 6, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);

    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](39);

    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 18, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.invoiceShow.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 20, "invoices today"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](32, _c0, ctx_r3.tableHeight))("nzData", ctx_r3.invoiceShow)("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](34, _c1))("nzNoResult", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 22, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r3.dateCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 24, "Invoice code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r3.bill_codeCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 26, "Customer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r3.partner_nameCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 28, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 30, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r3.sum_priceCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r4.data);
  }
}

class ExchangeOrderVoucherComponent {
  constructor(vhQuery, router, vhQueryCafe, vhAlgorithm, vhComponent, languageService, vhAuth, cdRef, functionService, notification, plaform, vhDisplayLEDService, fncService) {
    this.vhQuery = vhQuery;
    this.router = router;
    this.vhQueryCafe = vhQueryCafe;
    this.vhAlgorithm = vhAlgorithm;
    this.vhComponent = vhComponent;
    this.languageService = languageService;
    this.vhAuth = vhAuth;
    this.cdRef = cdRef;
    this.functionService = functionService;
    this.notification = notification;
    this.plaform = plaform;
    this.vhDisplayLEDService = vhDisplayLEDService;
    this.fncService = fncService;
    this.useBranch = this.functionService.checkUsingBranch();
    this.searchValue = '';
    this.invoiceShow = [];
    this.date = [new Date(), new Date()];
    /** hàm sort cho các cột */

    this.dateCol = false;
    this.bill_codeCol = false;
    this.partner_nameCol = false;
    this.payment_nameCol = false;
    this.name_employeeCol = false;
    this.sum_priceCol = false;
    this.date[0].setHours(0, 0, 0, 0);
    this.date[1].setHours(23, 59, 59, 59);
    let data = this.router.getCurrentNavigation().extras.state;

    if (data && data.invoiceToday) {
      this.invoiceToday = this.router.getCurrentNavigation().extras.state.invoiceToday;
      this.invoiceShow = this.invoiceToday;
    }
  }

  ngOnInit() {}

  changeTime(event) {
    if (new Date(event[1].setHours(0, 0, 0, 0)).getTime() - new Date(event[0].setHours(0, 0, 0, 0)).getTime() <= this.fncService.checkDateReport() * 86000000) {//this.getTransferList();
    } else {
      this.vhComponent.showToast(4000, this.languageService.translate("The time limit to view is") + " " + this.fncService.checkDateReport() + " " + this.languageService.translate("days"), "alert-toast");
      this.date = [new Date(event[0]), new Date(event[0].getTime() + this.fncService.checkDateReport() * 86000000)];
    }
  }

  getInvoiceToday() {
    this.vhComponent.showLoading('').then(() => {
      this.vhQueryCafe.getBills_byFields({
        date: {
          $gte: new Date(this.date[0].setHours(0, 0, 0)).toISOString(),
          $lte: new Date(this.date[1].setHours(23, 59, 59, 59)).toISOString()
        },
        bill_type: {
          $in: [43]
        },
        id_branch: {
          $eq: this.vhQueryCafe.getDefaultBranch()._id
        }
      }, {}).then(invoice => {
        console.log(invoice);
        let promise = new Array();

        for (let i = 0; i < invoice.length; i++) {
          promise[i] = this.vhQueryCafe.getCustomer(invoice[i].id_customer);
        }

        this.vhQuery.asyncPromiseAll(promise).then(array => {
          this.invoiceToday = invoice.map((item, index) => {
            return Object.assign(Object.assign({}, item), {
              customer: array[index],
              sum_price: item.total * (1 + item.tax / 100)
            });
          });
          this.searchBill(this.searchValue);
        }, error => {
          console.log(error);
        });
        this.vhComponent.hideLoading(0);
      });
    });
  }

  searchBill(value) {
    if (value.length) {
      let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
      this.invoiceShow = this.vhAlgorithm.searchList(val, this.invoiceToday, ['bill_code', 'partner_name', 'employee_name', 'payment_name', 'status', 'phone']);
    } else this.invoiceShow = [...this.invoiceToday];

    console.log(this.invoiceShow);
  }
  /* -----Pagination----- */


  onCurrentPageDataChange(value) {}

  goToDetail(bill) {
    console.log(bill);

    if (this.vhAuth.checkMyPermission("sales_enable_view_bill_today")) {
      this.router.navigate(["/cafe/bill-web-app/exchange-order-voucher/detail"], {
        state: {
          bill: bill,
          invoiceToday: this.invoiceToday,
          customer: bill.customer
        }
      });
    } else this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
  }

  goToCart() {
    this.router.navigate(['/cafe/sales-desktop/add']);
  }

  renderAddress(partner) {
    return (partner.address ? partner.address : '') + (partner.district ? ', ' + partner.district : '') + (partner.province ? ', ' + partner.province : '') + (partner.country ? ', ' + partner.country : '');
  }

  ngAfterViewChecked() {
    if (document.querySelector("#sales-invoice-today") && document.querySelector(".ant-table-thead") && document.querySelector(".sales-invoice-today-header") && document.querySelector(".ant-table-pagination")) {
      this.tableHeight = document.querySelector("#sales-invoice-today").clientHeight - document.querySelector(".ant-table-thead").clientHeight - document.querySelector(".sales-invoice-today-header").clientHeight - 110 + "px";
    }

    this.cdRef.detectChanges();
  }

  deleteBill() {
    let bill = Object.assign({}, this.invoice);
    this.invoiceShow = this.invoiceShow.filter(item => item._id != bill._id);
  }
  /** Hàm thực hiện sắp xếp theo collection
   *
   * @param colName       // tên cột muôn sắp xếp
   */


  sortTable(colName) {
    switch (colName) {
      case 'date':
        if (this.dateCol) {
          this.invoiceShow = this.vhAlgorithm.sortDatebyASC([...this.invoiceShow], colName);
        } else {
          this.invoiceShow = this.vhAlgorithm.sortDatebyDESC([...this.invoiceShow], colName);
        }

        break;

      case 'bill_code':
        if (this.bill_codeCol) {
          this.invoiceShow = this.vhAlgorithm.sortVietnamesebyASC([...this.invoiceShow], colName);
        } else {
          this.invoiceShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.invoiceShow], colName);
        }

        break;

      case 'partner_name':
        if (this.partner_nameCol) {
          this.invoiceShow = this.vhAlgorithm.sortVietnamesebyASC([...this.invoiceShow], colName);
        } else {
          this.invoiceShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.invoiceShow], colName);
        }

        break;

      case 'payment_name':
        if (this.payment_nameCol) {
          this.invoiceShow = this.vhAlgorithm.sortVietnamesebyASC([...this.invoiceShow], colName);
        } else {
          this.invoiceShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.invoiceShow], colName);
        }

        break;

      case 'sum_price':
        if (this.sum_priceCol) {
          this.invoiceShow = this.vhAlgorithm.sortNumberbyASC([...this.invoiceShow], colName);
        } else {
          this.invoiceShow = this.vhAlgorithm.sortNumberbyDESC([...this.invoiceShow], colName);
        }

        break;
    }
  }

}

ExchangeOrderVoucherComponent.ɵfac = function ExchangeOrderVoucherComponent_Factory(t) {
  return new (t || ExchangeOrderVoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_7__.NzNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhDisplayLEDService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService));
};

ExchangeOrderVoucherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ExchangeOrderVoucherComponent,
  selectors: [["app-exchange-order-voucher"]],
  decls: 24,
  vars: 14,
  consts: [["id", "sales-invoice-today"], ["nz-row", "", 1, "sales-invoice-today-header", 2, "padding", "8px", "background", "white"], ["nz-col", "", "nzSpan", "6", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "6", 1, "right-all-content", 2, "padding-right", "16px"], ["nzFormat", "dd/MM/yyyy", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "default", 1, "btn-add", 3, "click"], ["src", "assets/icon/management/view.svg"], ["nz-col", "", "nzSpan", "6"], ["nz-row", "", 2, "height", "100%", "margin-top", "8px"], ["nz-col", "", "nzSpan", "24", 2, "padding", "0 160px"], ["nz-row", "", "style", "height: 100%;", 4, "ngIf"], ["style", "padding: 8px; background-color: white;height: 100%;border-radius: 5px;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-row", "", 2, "height", "100%"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], [2, "padding", "8px", "background-color", "white", "height", "100%", "border-radius", "5px"], [1, "total-item"], [2, "color", "var(--ion-color-vh-red)"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzPageSize", "nzPageSizeOptions", "nzNoResult", "nzCurrentPageDataChange"], ["tableSales", ""], ["nzWidth", "14%", "nzAlign", "left", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "15%", "nzAlign", "left"], ["nzWidth", "15%", "nzAlign", "right", 2, "cursor", "pointer", 3, "click"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["noBill", ""], [2, "cursor", "pointer", 3, "click"], ["nzAlign", "left"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click"], [1, "money-right"], [1, "pos-content-empty"], ["src", "assets/icon/pos/undraw_add_to_cart_vkjp.svg", 2, "font-size", "230px"]],
  template: function ExchangeOrderVoucherComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-layout", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "nz-input-group", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExchangeOrderVoucherComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.searchValue = $event;
      })("ngModelChange", function ExchangeOrderVoucherComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.searchBill($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExchangeOrderVoucherComponent_ng_template_10_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "nz-range-picker", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExchangeOrderVoucherComponent_Template_nz_range_picker_ngModelChange_13_listener($event) {
        return ctx.date = $event;
      })("ngModelChange", function ExchangeOrderVoucherComponent_Template_nz_range_picker_ngModelChange_13_listener($event) {
        return ctx.changeTime($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExchangeOrderVoucherComponent_Template_button_click_14_listener() {
        return ctx.getInvoiceToday();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-header-account-info");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ExchangeOrderVoucherComponent_div_22_Template, 5, 3, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, ExchangeOrderVoucherComponent_div_23_Template, 40, 35, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 8, "Order for exchanging voucher for goods"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSuffix", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 10, "Search for invoice code, customer name, payment, status,phone"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 12, "View"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.invoiceShow.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.invoiceShow.length);
    }
  },
  directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__.NzColDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _header_account_info_header_account_info_component__WEBPACK_IMPORTED_MODULE_3__.HeaderAccountInfoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe],
  styles: ["@charset \"UTF-8\";\nnz-layout[_ngcontent-%COMP%] {\n  background: #f7f7f7 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.active[_ngcontent-%COMP%] {\n  border: 3px solid var(--ion-color-vh-green) !important;\n  box-shadow: 0px 3px 6px #00000040;\n}\n\n.splash[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  top: 50%;\n  left: 50%;\n  margin-left: -25vw;\n  margin-top: -25vh;\n}\n@media only screen and (min-width: 768px) {\n  .splash[_ngcontent-%COMP%] {\n    width: 60vw;\n    height: 50vh;\n    top: 50%;\n    left: 50%;\n    margin-left: -30vw;\n    margin-top: -25vh;\n  }\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.row[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.row[_ngcontent-%COMP%]   #color-picker[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  max-width: 90%;\n}\n.row[_ngcontent-%COMP%]   #color-picker[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.row-interface-font[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.row-interface-font[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green) !important;\n  border-bottom: 1px solid var(--ion-color-vh-green) !important;\n}\nli[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green) !important;\n}\nli[_ngcontent-%COMP%]:focus {\n  color: var(--ion-color-vh-green) !important;\n}\n  .ant-dropdown-menu-item-selected, .ant-dropdown-menu-item-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85) !important;\n  background-color: white !important;\n}\n  .ant-dropdown-menu-submenu-selected .ant-dropdown-menu-submenu-title {\n  color: var(--ion-color-vh-green) !important;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  margin: 8px;\n  border-radius: 8px;\n}\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2hhbmdlLW9yZGVyLXZvdWNoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUtBOztFQUVJLGdDQUFBO0FBRko7QUFLQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtBO0VBQ0ksc0RBQUE7RUFDQSxpQ0FBQTtBQUZKO0FBS0EsVUFBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUhKO0FBS0k7RUFUSjtJQVVRLFdBQUE7SUFDQSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBRk47QUFDRjtBQUtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFGSjtBQUlJO0VBQ0ksV0FBQTtBQUZSO0FBS0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFIUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIWjtBQVFBO0VBQ0ksOEJBQUE7QUFMSjtBQU9JO0VBQ0ksV0FBQTtBQUxSO0FBU0E7RUFDSSwyQ0FBQTtFQUNBLDZEQUFBO0FBTko7QUFTQTtFQUNJLDJDQUFBO0FBTko7QUFTQTtFQUNJLDJDQUFBO0FBTko7QUFTQTs7OztFQUlJLHFDQUFBO0VBQ0Esa0NBQUE7QUFOSjtBQVNBO0VBQ0ksMkNBQUE7QUFOSjtBQVNBLHlCQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFJO0VBQ0ksa0JBQUE7QUFOUiIsImZpbGUiOiJleGNoYW5nZS1vcmRlci12b3VjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xubnotbGF5b3V0IHtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5uei1sYXlvdXQgLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxubnotbGF5b3V0IC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm56LWxheW91dCBuei1zZWxlY3Qge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5uei1sYXlvdXQgLmJ0bi1hZGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW50LWJ0bjpmb2N1cyxcbi5hbnQtYnRuOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XG59XG5cbi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDQwO1xufVxuXG4vKiogU1lOQyAqL1xuLnNwbGFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNTB2aDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yNXZ3O1xuICBtYXJnaW4tdG9wOiAtMjV2aDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNwbGFzaCB7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTMwdnc7XG4gICAgbWFyZ2luLXRvcDogLTI1dmg7XG4gIH1cbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5yb3cgbnotc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucm93ICNjb2xvci1waWNrZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG4ucm93ICNjb2xvci1waWNrZXIgLmNvbG9yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdy1pbnRlcmZhY2UtZm9udCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yb3ctaW50ZXJmYWNlLWZvbnQgbnotc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG59XG5cbmxpOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcbn1cblxubGk6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQsXG4uYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZCA+IGEsXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZS1zZWxlY3RlZCxcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlLXNlbGVjdGVkID4gYSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1zZWxlY3RlZCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG59XG5cbi8qIEtodW5nIGNo4bupYSB0aHVtYm5haWwgKi9cbi50aHVtYm5haWwge1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnRodW1ibmFpbCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59Il19 */"]
});

/***/ }),

/***/ 24645:
/*!*******************************************************************************************!*\
  !*** ./src/app/cafe/bill-web-app/exchange-order-voucher/exchange-order-voucher.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExchangeOrderVoucherModule": () => (/* binding */ ExchangeOrderVoucherModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _exchange_order_voucher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exchange-order-voucher.component */ 82417);
/* harmony import */ var _header_account_info_header_account_info_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-account-info/header-account-info.module */ 92759);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ 62431);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);











const routes = [
    {
        path: '',
        component: _exchange_order_voucher_component__WEBPACK_IMPORTED_MODULE_0__.ExchangeOrderVoucherComponent,
    },
    {
        path: 'detail',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent,
    }
];
class ExchangeOrderVoucherModule {
}
ExchangeOrderVoucherModule.ɵfac = function ExchangeOrderVoucherModule_Factory(t) { return new (t || ExchangeOrderVoucherModule)(); };
ExchangeOrderVoucherModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ExchangeOrderVoucherModule });
ExchangeOrderVoucherModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes),
            _header_account_info_header_account_info_module__WEBPACK_IMPORTED_MODULE_1__.HeaderAccountInfoModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ExchangeOrderVoucherModule, { declarations: [_exchange_order_voucher_component__WEBPACK_IMPORTED_MODULE_0__.ExchangeOrderVoucherComponent, _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _header_account_info_header_account_info_module__WEBPACK_IMPORTED_MODULE_1__.HeaderAccountInfoModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_bill-web-app_exchange-order-voucher_exchange-order-voucher_module_ts.js.map