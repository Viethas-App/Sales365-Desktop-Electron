"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_bill-web-app_sales-order-voucher_sales-order-voucher_module_ts"],{

/***/ 23484:
/*!*********************************************************************************************!*\
  !*** ./src/app/sales/bill-web-app/sales-order-voucher/create-bill/create-bill.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBillComponent": () => (/* binding */ CreateBillComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_sales_voucher_sales_voucher_k57_col3_sales_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/sales-voucher/sales-voucher-k57-col3/sales-voucher-k57-col3.component */ 87777);
/* harmony import */ var src_app_sales_components_print_sales_voucher_sales_voucher_k80_col3_sales_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/sales-voucher/sales-voucher-k80-col3/sales-voucher-k80-col3.component */ 55042);
/* harmony import */ var src_app_sales_components_print_sales_voucher_sales_voucher_k80_col4_sales_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/sales-voucher/sales-voucher-k80-col4/sales-voucher-k80-col4.component */ 56930);
/* harmony import */ var src_app_sales_components_print_sales_voucher_sales_voucher_a5_sales_voucher_a5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/sales-voucher/sales-voucher-a5/sales-voucher-a5.component */ 52504);
/* harmony import */ var src_app_sales_components_print_sales_voucher_sales_voucher_a4_sales_voucher_a4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/sales-voucher/sales-voucher-a4/sales-voucher-a4.component */ 10893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sales_voucher_component_search_voucher_search_voucher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../sales-voucher/component/search-voucher/search-voucher.component */ 9128);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _sale_desktop_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../sale-desktop/components/tax/tax.component */ 74330);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




























function CreateBillComponent_nz_layout_4_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "Please select a product"));
} }
function CreateBillComponent_nz_layout_4_table_22_ng_container_20_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "pre", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r18.getStringName(item_r16.products), "\n                                            ");
} }
function CreateBillComponent_nz_layout_4_table_22_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("nzOnConfirm", function CreateBillComponent_nz_layout_4_table_22_ng_container_20_Template_div_nzOnConfirm_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const item_r16 = restoredCtx.$implicit; const i_r17 = restoredCtx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r20.deleteGoods(item_r16, i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function CreateBillComponent_nz_layout_4_table_22_ng_container_20_Template_input_keyup_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21); const i_r17 = restoredCtx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r22.editVoucherPrice("voucher-price" + i_r17, i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, CreateBillComponent_nz_layout_4_table_22_ng_container_20_ng_container_19_Template, 3, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const i_r17 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate2"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 9, "Are you sure to delete"), " ", item_r16.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", item_r16.name_voucher_release, " (", item_r16.name, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](item_r16.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r15.vhAlgorithm.vhcurrencyunit(item_r16.price))("id", "voucher-price" + i_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r15.vhAlgorithm.vhcurrencyunit(item_r16.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", item_r16.products);
} }
function CreateBillComponent_nz_layout_4_table_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "table", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, CreateBillComponent_nz_layout_4_table_22_ng_container_20_Template, 20, 11, "ng-container", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 5, "Voucher name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](10, 7, "Voucher code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 9, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 11, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r5.invoice_detail);
} }
function CreateBillComponent_nz_layout_4_nz_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "nz-option", 65);
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("nzValue", item_r23._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("nzLabel", item_r23.name);
} }
function CreateBillComponent_nz_layout_4_div_67_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("blur", function CreateBillComponent_nz_layout_4_div_67_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r24.editFee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r8.vhAlgorithm.vhcurrencyunit(ctx_r8.invoice.fee));
} }
function CreateBillComponent_nz_layout_4_div_68_nz_select_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "nz-option", 65);
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("nzValue", item_r29._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r28.vhAlgorithm.vhpercent(item_r29.value / 100));
} }
function CreateBillComponent_nz_layout_4_div_68_nz_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nz-select", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CreateBillComponent_nz_layout_4_div_68_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r30.id_tax = $event; })("ngModelChange", function CreateBillComponent_nz_layout_4_div_68_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3); return ctx_r32.changeTax($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, CreateBillComponent_nz_layout_4_div_68_nz_select_5_nz_option_1_Template, 1, 2, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r26.id_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r26.listTax);
} }
function CreateBillComponent_nz_layout_4_div_68_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "0.00%");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CreateBillComponent_nz_layout_4_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, CreateBillComponent_nz_layout_4_div_68_nz_select_5_Template, 2, 2, "nz-select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, CreateBillComponent_nz_layout_4_div_68_span_6_Template, 2, 0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 4, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r9.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r9.vhAlgorithm.vhcurrencyunit(ctx_r9.taxValue), "");
} }
function CreateBillComponent_nz_layout_4_img_82_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CreateBillComponent_nz_layout_4_img_82_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r33.showModalEditTotalPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function CreateBillComponent_nz_layout_4_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r11.vhAlgorithm.vhcurrencyunit_symbol(ctx_r11.getTotalATax() - ctx_r11.invoice.payment), " ");
} }
function CreateBillComponent_nz_layout_4_div_86_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 77, 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keyup", function CreateBillComponent_nz_layout_4_div_86_Template_input_keyup_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r37); const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](5); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r36.updateCash(_r35.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 3, "cash"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r12.invoice.payment_type == 2)("value", ctx_r12.vhAlgorithm.vhcurrencyunit(ctx_r12.invoice.cash));
} }
function CreateBillComponent_nz_layout_4_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 2, "Change"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r13.vhAlgorithm.vhcurrencyunit(ctx_r13.invoice.cash - ctx_r13.invoice.payment > 0 ? ctx_r13.invoice.cash - ctx_r13.invoice.payment : 0));
} }
const _c0 = function () { return { minRows: 2, maxRows: 4 }; };
function CreateBillComponent_nz_layout_4_div_88_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "textarea", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CreateBillComponent_nz_layout_4_div_88_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r38.note = $event; })("blur", function CreateBillComponent_nz_layout_4_div_88_Template_textarea_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2); return ctx_r40.edit_note(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 3, "Enter note..."));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r14.note)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](5, _c0));
} }
function CreateBillComponent_nz_layout_4_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "nz-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CreateBillComponent_nz_layout_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r41.openSearchProductList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CreateBillComponent_nz_layout_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r43.deleteInvoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, CreateBillComponent_nz_layout_4_div_19_Template, 4, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](22, CreateBillComponent_nz_layout_4_table_22_Template, 21, 13, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "nz-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CreateBillComponent_nz_layout_4_Template_nz_select_ngModelChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r44.closeAndReceiveEmployee($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](32, CreateBillComponent_nz_layout_4_nz_option_32_Template, 1, 2, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "nz-date-picker", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function CreateBillComponent_nz_layout_4_Template_nz_date_picker_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r45.pickerTime = $event; })("ngModelChange", function CreateBillComponent_nz_layout_4_Template_nz_date_picker_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r46.setPickerTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](61, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "input", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("blur", function CreateBillComponent_nz_layout_4_Template_input_blur_62_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](63); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r47.editPercentDiscount(_r7.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](64, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("blur", function CreateBillComponent_nz_layout_4_Template_input_blur_66_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r48.editDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](67, CreateBillComponent_nz_layout_4_div_67_Template, 5, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](68, CreateBillComponent_nz_layout_4_div_68_Template, 9, 6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](72, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](82, CreateBillComponent_nz_layout_4_img_82_Template, 1, 0, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](83, CreateBillComponent_nz_layout_4_div_83_Template, 6, 4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "app-tax", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("closeAndGetValuePayment", function CreateBillComponent_nz_layout_4_Template_app_tax_closeAndGetValuePayment_85_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r49.closeAndGetValuePayment($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](86, CreateBillComponent_nz_layout_4_div_86_Template, 6, 5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](87, CreateBillComponent_nz_layout_4_div_87_Template, 6, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](88, CreateBillComponent_nz_layout_4_div_88_Template, 3, 6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](90, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CreateBillComponent_nz_layout_4_Template_button_click_90_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r50.payInvoice(40, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](93, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CreateBillComponent_nz_layout_4_Template_button_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r42); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r51.payInvoice(40, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](95, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzGutter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 40, "Select voucher"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](13, 42, "Search voucher (F4)"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 44, "Delete"), " (F3)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.invoice_detail.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.invoice_detail.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](29, 46, "Salesman"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](31, 48, "Select employee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.invoice.id_employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.employees);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](36, 50, "Sales date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r0.pickerTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](42, 52, "Customer information"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"](" ", ctx_r0.customer_online.name, " - ", ctx_r0.customer_online.phone, " ", ctx_r0.customer_online.address ? "-" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 54, "Payment information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](53, 56, "SubTotal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.subTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](60, 58, "Discount value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](64, 60, ctx_r0.percent_discount_bill, "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.discount));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.vhAuth.localStorageGET("show_fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.vhAuth.localStorageGET("show_tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](72, 63, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.getTotalATax()));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](79, 65, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.payment), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.invoice.payment_type != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.vhAuth.localStorageGET("show_rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("payment_type", ctx_r0.invoice.payment_type)("id_wallet", ctx_r0.invoice.id_wallet)("id_customer", ctx_r0.invoice.id_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.vhAuth.localStorageGET("show_cash"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.vhAuth.localStorageGET("show_cash"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.vhAuth.localStorageGET("show_note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r0.invoice_detail.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](92, 67, "Complete & Print"), " (F2) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r0.invoice_detail.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](95, 69, "Complete"), " (F1)");
} }
function CreateBillComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 2, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", ctx_r1.vhAlgorithm.vhcurrencyunit(ctx_r1.invoice.payment));
} }
function CreateBillComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CreateBillComponent_ng_template_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r52.handleCancelEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CreateBillComponent_ng_template_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r54.handleEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 4, "Save"));
} }
class CreateBillComponent {
    constructor(router, vhComponent, languageService, vhQuerySales, vhAlgorithm, vhAuth, nzModalService, fncService, cdf, vhQuery) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.nzModalService = nzModalService;
        this.fncService = fncService;
        this.cdf = cdf;
        this.vhQuery = vhQuery;
        this.invoice_detail = [];
        this.listTax = this.vhQuerySales.getlocalTaxs().filter(tax => tax.status);
        this.employee = {};
        this.pickerTime = new Date();
        this.checkPrinter = false;
        this.id_product_delete = '';
        this.percent_discount_bill = 0;
        this.subTotal = 0;
        this.taxValue = 0;
        this.searchProductList = false;
        // -------modal edit unit price-------
        this.isVisibleEditUnitPrice = false;
        // -------set employee-------
        this.employees = this.vhAuth.getlocalEmployees();
        // ----set customer-----
        this.radioValue = 1;
        // -------modal edit pay---------
        this.edit_pay = false;
        //--------------visible drawer info customer-----------
        this.visibleInfoCustomer = false;
        /**add customer */
        this.showDrawerAddCusomer = false;
        this.showDrawerAddRetail = false;
        this.barcode = '';
        this.barcode_array = [];
        this.root = this.router.getCurrentNavigation().extras.state;
        this.customer_online = this.root.customer;
        this.invoiceToday = this.root.invoiceToday;
        this.getDataInvoice(this.root.bill);
    }
    ngOnInit() {
    }
    getDataInvoice(bill) {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQuerySales.getBill_details_byId_bill(bill._id)
            ]).then(([invoiceDetail]) => {
                if (!invoiceDetail.length)
                    this.init(bill, []);
                else {
                    let promise = [];
                    for (let i in invoiceDetail) {
                        promise[i] = this.vhQuerySales.getVoucher_Code_Name_Release(invoiceDetail[i].id_voucher_code);
                    }
                    Promise.all(promise).then((array) => {
                        invoiceDetail = invoiceDetail.map((e, index) => {
                            return Object.assign(Object.assign(Object.assign(Object.assign({}, e), { price: array[index].units[0].price }), array[index]), { name: array[index].name_voucher });
                        });
                        this.init(bill, invoiceDetail);
                    });
                }
            });
        });
    }
    init(invoice = null, invoiceDetail = null) {
        this.vhComponent.hideLoading(0);
        this.invoice = invoice;
        this.invoice_detail = invoiceDetail;
        if (invoice && invoiceDetail) {
            // set nhân viên mặc định
            if (!this.invoice.id_employee)
                this.invoice.id_employee = (this.vhAuth.getUser()._id);
            this.invoice.date = new Date();
            this.invoice.payment = (invoice.total);
            this.invoice.discount = 0;
            this.invoice.cash = 0;
            this.note = this.invoice.note;
            this.pickerTime = new Date();
            this.percent_discount_bill = this.subTotal ? (this.invoice.discount / this.subTotal) * 100 : 0;
            this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
            let tax = this.listTax.find(item => item.default);
            if (tax) {
                this.id_tax = tax._id;
                this.invoice.tax = (tax['value']);
            }
            this.subTotal = this.invoice_detail.reduce((prev, next) => prev + 1 * next.price, 0);
            this.vhAlgorithm.waitingStack().then(() => {
                this.invoice_fee = document.querySelector(".invoice-fee") ? this.vhAlgorithm.vhnumeral(".invoice-fee") : 0;
                this.discount_price = document.querySelector(".discount-price") ? this.vhAlgorithm.vhnumeral(".discount-price") : 0;
            });
        }
    }
    ngOnDestroy() {
        document.removeEventListener('keydown', this.event, false);
        // window.removeEventListener('beforeunload', this.closerBrower, false)
    }
    eventKeypress() {
        this.event = (event) => {
            const keycode = event.keyCode;
            if (keycode === 112 || keycode === 113 || keycode === 114)
                event.preventDefault();
            if (keycode === 115)
                this.searchProductList = !this.searchProductList;
            else if (this.invoice_detail.length > 0) {
                switch (keycode) {
                    case 113: {
                        if (this.checkPrinter)
                            this.payInvoice(40, true);
                        break;
                    }
                }
            }
        };
        document.addEventListener('keydown', this.event, false);
    }
    ngAfterViewInit() {
        let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales_voucher');
        if (printer)
            this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
        // ------bắt sự kiện nhấn phím nóng-----
        this.eventKeypress();
    }
    ngAfterViewChecked() {
        this.cdf.detectChanges();
    }
    // chuổi danh sách sản phẩm
    getStringName(products) {
        let name = '';
        products.forEach(element => {
            let product = this.vhQuerySales.getlocalDetailProduct(element.id_subproduct ? element.id_subproduct : element.id_product);
            name += '- ' + element.quantity + 'x ' + product.name + ' (' + this.vhQuerySales.getUnit_byRatio(product.units, element.ratio).unit + ') \n';
        });
        return name;
    }
    // edit giá voucher
    editVoucherPrice(nameClass, position) {
        let price = this.vhAlgorithm.vhnumeral("#" + nameClass);
        this.invoice_detail[position].price = parseFloat(price.getRawValue() ? price.getRawValue() : 0);
        this.setSubTotal();
    }
    deleteGoods(detail, index) {
        if (detail) {
            this.id_product_delete = detail.id_voucher_code;
            this.removeInvoiceDetail(detail.id_voucher_code);
        }
    }
    changeTax(event) {
        let tax = this.listTax.find(item => item._id == event);
        this.invoice.tax = (tax.value);
        this.setTaxValue();
    }
    openSearchProductList() {
        this.searchProductList = true;
    }
    // tạo danh sách voucher bán
    closeSearchProductList(data) {
        if (typeof data === 'boolean') {
            this.searchProductList = false;
        }
        else {
            if (data) {
                if (!this.invoice_detail.includes(data)) {
                    this.addInvoiceDetail(data);
                    this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Thêm voucher thành công"));
                }
                else {
                    this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Mã voucher đã được chọn !"));
                }
            }
        }
    }
    setPaymentName(type) {
        switch (type) {
            case 1: return this.languageService.translate("Cash");
            case 2: return this.languageService.translate("Debit");
            case 3: return this.vhQuerySales.getlocalWallet(this.invoice.id_wallet).name;
        }
    }
    goBack() {
        this.router.navigate(['/sales/bill-web-app/sales-order-voucher'], { state: { invoiceToday: this.invoiceToday } });
    }
    openEditUnitPrice(detail) {
        this.tempDetail = detail;
        this.isVisibleEditUnitPrice = true;
        this.vhAlgorithm.waitingStack().then(() => {
            this.unit_price = this.vhAlgorithm.vhnumeral('.unit_price');
        });
    }
    handleEditUnit() {
        if (this.unit_price.getRawValue() != '' && this.unit_price.getRawValue() >= 0) {
            this.tempDetail.price = parseFloat(this.unit_price.getRawValue());
            this.setSubTotal();
            this.isVisibleEditUnitPrice = false;
        }
        else {
            this.vhComponent.showToast(5000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
        }
    }
    handleCancelEditUnit() { this.isVisibleEditUnitPrice = false; }
    closeAndReceiveEmployee(event) {
        if (event) {
            this.invoice.id_employee = (event);
        }
    }
    closeAndReceiveCustomer(event) {
        if (event) {
            this.invoice.id_customer = (event);
            if (!this.vhQuerySales.getlocalCustomer(event).debt_enable)
                this.invoice.payment = (this.getTotalATax());
        }
        this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
    }
    changeCustomerType(event) {
        if (this.radioValue == 1) {
            this.invoice.id_customer = ("id_retail");
            this.invoice.payment = (this.getTotalATax());
        }
        if (event == 2) {
            this.clearRetailCustomer();
            this.radioValue = 2;
        }
    }
    clearRetailCustomer() {
        this.invoice.retail_address = ('');
        this.invoice.retail_name = ('');
        this.invoice.retail_phone = ('');
    }
    closeAndGetValuePayment(event) {
        if (event[0] == 1 || event[0] == 2) {
            this.setPaymentType(event[0]);
        }
        else if (event[0] == 3) {
            this.setPaymentType(event[0], event[1]);
        }
    }
    setPaymentType(type, id_wallet) {
        this.invoice.payment_type = (type);
        switch (type) {
            case 1: {
                this.invoice.id_wallet = ('id_cash');
                this.invoice.payment = (this.invoice.payment ? this.invoice.payment : this.invoice.total + this.taxValue);
                break;
            }
            case 2: {
                this.invoice.payment = (0);
                this.invoice.id_wallet = (null);
                this.invoice.cash = (0);
                break;
            }
            case 3: {
                if (id_wallet) {
                    this.invoice.id_wallet = (id_wallet);
                    this.invoice.payment = (this.invoice.payment ? this.invoice.payment : this.invoice.total + this.taxValue);
                    break;
                }
            }
        }
        ;
    }
    setPickerTime(event) {
        if (new Date(event).getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime()) {
            this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the registration date (")} ${this.fncService.formatDate(this.vhAuth.getStore().registrationdate)} ${")"}`, 5000);
            this.pickerTime = new Date(this.invoice.date);
            this.invoice.date = (new Date(this.pickerTime));
        }
        else
            this.vhQuerySales.getValidityDate(new Date(event)).then((validitydate) => {
                if (validitydate == null) {
                    this.invoice.date = (event);
                }
                else {
                    this.pickerTime = new Date(validitydate);
                    this.invoice.date = (new Date(this.pickerTime));
                    this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 5000);
                }
            });
    }
    editDiscount() {
        if (this.discount_price.getRawValue() && this.discount_price.getRawValue() >= 0 && this.discount_price.getRawValue() <= this.subTotal) {
            this.invoice.discount = (parseFloat(this.discount_price.getRawValue()));
            this.percent_discount_bill = this.subTotal ? (this.invoice.discount / this.subTotal) * 100 : 0;
        }
        else {
            document.getElementById("discount-price")['value'] = this.invoice.discount;
            this.discount_price = this.vhAlgorithm.vhnumeral('.discount-price');
        }
        this.setTotal();
    }
    editFee() {
        if (this.invoice_fee.getRawValue() && this.invoice_fee.getRawValue() >= 0) {
            this.invoice.fee = (parseFloat(this.invoice_fee.getRawValue()));
        }
        else {
            document.getElementById("invoice-fee")['value'] = this.invoice.fee;
            this.invoice_fee = this.vhAlgorithm.vhnumeral('.invoice-fee');
        }
        this.setTotal();
    }
    showModalEditTotalPay() {
        if (this.invoice.payment_type != 2 && this.vhQuerySales.getlocalCustomer(this.invoice.id_customer).debt_enable) {
            this.vhAlgorithm.waitingStack().then(() => {
                this.edit_paytotal = this.vhAlgorithm.vhnumeral(".edit-pay");
            });
            this.edit_pay = true;
        }
        else if (!this.vhQuerySales.getlocalCustomer(this.invoice.id_customer).debt_enable) {
            this.vhComponent.showToast(5000, this.languageService.translate("This customer is not allowed to debt"), "alert-toast");
        }
    }
    handleEditPay() {
        if (this.edit_paytotal.getRawValue() >= 0 && this.edit_paytotal.getRawValue() <= this.getTotalATax()) {
            this.invoice.payment = (parseFloat(this.edit_paytotal.getRawValue()));
        }
        this.edit_pay = false;
    }
    handleCancelEditPay() {
        this.edit_pay = false;
    }
    updateCash(cash) {
        this.invoice.cash = parseFloat(cash.replaceAll(',', ''));
    }
    editPercentDiscount(value) {
        if (parseFloat(value) > 100)
            document.getElementById("percent-discount-price")['value'] = 0;
        else
            this.percent_discount_bill = value;
        this.invoice.discount = this.subTotal * (this.percent_discount_bill / 100);
        this.setTotal();
    }
    payInvoice(bill_type, print) {
        if (this.vhAuth.checkMyPermission("sales_enable_payment")) {
            if (print) {
                if (this.checkPrinter) {
                    this.vhComponent.showLoading("", "transparent-loading").then(() => {
                        this.createOrUpdate();
                        // .then(() => {
                        //   this.vhComponent.hideLoading(0).then(() => {
                        //     this.vhComponent.showToast(5000,
                        //       `${this.languageService.translate("Sales invoice")} ${this.invoice.getBillCode()} ${this.languageService.translate("has been created successfully")}`, "success-toast"
                        //     )
                        //     this.handlePrint()
                        //   })
                        // })
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
                    this.createOrUpdate();
                    // .then(() => {
                    //   this.vhComponent.hideLoading(0).then(() => {
                    //     this.vhComponent.showToast(5000,
                    //       `${this.languageService.translate("Sales invoice")} ${this.invoice.getBillCode()} ${this.languageService.translate("has been created successfully")}`, "success-toast"
                    //     )
                    //     this.goBack()
                    //   })
                    // })
                });
            }
        }
        else
            this.vhComponent.showToast(5000, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    createOrUpdate() {
        // let invoice = { ...this.invoice.getCreateUpdateInvoice(40) }
        // return this.vhQuerySales.saveBill_Billdetail(this.invoice.getID(),40)
        // return new Promise(resolve => {
        let invoice = Object.assign({}, this.invoice);
        this.vhQuerySales.updateBill_Billdetail(this.invoice._id, invoice, this.getCreateUpdateInvoiceDetail())
            .then(() => {
            this.vhQuerySales.saveBill_Billdetail(this.invoice._id, 40)
                .then(() => {
                this.invoiceToday = this.invoiceToday.filter(item => item._id != this.invoice._id);
                this.vhComponent.hideLoading(0).then(() => {
                    this.vhComponent.showToast(5000, `${this.languageService.translate("Hóa đơn bán voucher")} ${this.invoice.bill_code} ${this.languageService.translate("has been created successfully")}`, "success-toast");
                    this.goBack();
                });
            });
        });
        // })
    }
    deleteInvoice() {
        this.vhComponent.showLoading('')
            .then(() => {
            this.vhQuerySales.deleteBill_Billdetail(this.invoice._id)
                .then((bool) => {
                if (bool) {
                    this.vhComponent.hideLoading(0);
                    this.invoiceToday = this.invoiceToday.filter(item => item._id != this.invoice._id);
                    this.goBack();
                }
                else {
                }
            }, (error) => {
            });
        });
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getlocalPrinters().find(item => item.name == "DESKTOP");
            if (printer && printer.voucher.enable)
                resolve(printer.voucher);
            else
                resolve(false);
            if (!printer)
                rejects(false);
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_sales_voucher_sales_voucher_k57_col3_sales_voucher_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__.SalesVoucherK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_sales_voucher_sales_voucher_k80_col3_sales_voucher_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__.SalesVoucherK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_sales_voucher_sales_voucher_k80_col4_sales_voucher_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.SalesVoucherK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_sales_voucher_sales_voucher_a5_sales_voucher_a5_component__WEBPACK_IMPORTED_MODULE_3__.SalesVoucherA5Component;
            case 'print_size_a4': return src_app_sales_components_print_sales_voucher_sales_voucher_a4_sales_voucher_a4_component__WEBPACK_IMPORTED_MODULE_4__.SalesVoucherA4Component;
            default: return src_app_sales_components_print_sales_voucher_sales_voucher_a4_sales_voucher_a4_component__WEBPACK_IMPORTED_MODULE_4__.SalesVoucherA4Component;
        }
    }
    handlePrint() {
        let print = this.vhQuerySales.getLocalPrintPage('page_desktop_sales_voucher');
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
            this.invoice.note = (this.note);
        }
    }
    openInfoCustomer() {
        if (this.invoice.id_customer != 'id_retail') {
            this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
            this.visibleInfoCustomer = true;
        }
    }
    closeInfoCustomer(event) {
        this.visibleInfoCustomer = false;
    }
    openDrawerAddCustomerOrRetail() {
        if (this.radioValue == 1)
            this.showDrawerAddRetail = true;
        else
            this.showDrawerAddCusomer = true;
    }
    closeAddCustomer(result) {
        if (this.radioValue == 1) {
            if (result) {
                this.invoice.retail_name = (result.retail_name);
                this.invoice.retail_phone = (result.retail_phone);
                this.invoice.retail_address = (result.retail_address);
            }
            this.showDrawerAddRetail = false;
        }
        else
            this.showDrawerAddCusomer = false;
    }
    /**
     * Sự kiện nhận barcode
     */
    getKeyUp(_event) {
        if (this.router.url === "/sales/bill-web-app/sales-order-voucher/add") {
            // if (!this.showSearchBar && !this.showPayInfo) {
            if (_event.key == "Enter") {
                this.barcode_array.forEach((i, index) => {
                    if (i == "Shift") {
                        this.barcode_array[index + 1] = this.barcode_array[index + 1].toUpperCase();
                        this.barcode_array.splice(index, 1);
                    }
                });
                // this.scanBarcode(this.barcode_array.join(""));
                this.barcode = this.barcode_array.join("");
                setTimeout(() => {
                    this.barcode_array = [];
                }, 100);
            }
            else {
                this.barcode_array.push(_event.key);
            }
            // }
        }
    }
    setSubTotal() {
        this.subTotal = this.invoice_detail.reduce((prev, next) => prev + 1 * next.price, 0);
        this.setTotal();
    }
    setTotal() {
        this.invoice.total = this.subTotal - this.invoice.discount + this.invoice.fee;
        this.setTaxValue();
    }
    setTaxValue() {
        this.taxValue = this.invoice.total * (this.invoice.tax / 100);
        this.setPayment();
    }
    setPayment(value) {
        if (this.invoice.payment_type == 2) {
            this.invoice.payment = 0;
        }
        else {
            if (value != null)
                this.invoice.payment = value;
            else
                this.invoice.payment = this.invoice.total + this.taxValue;
        }
        this.setCash(this.invoice.cash);
    }
    setCash(value) {
        if (this.invoice.payment_type == 2)
            this.invoice.cash = 0;
        else {
            if (value)
                this.invoice.cash = parseFloat(value);
            else
                this.invoice.cash = 0;
        }
    }
    getTotalATax() {
        return this.invoice.total + this.taxValue;
    }
    addInvoiceDetail(value) {
        let detail = {
            id_voucher_code: value.id_voucher_code,
            name: value.name,
            id_voucher: value.id_voucher,
            code: value.code,
            id_bill: value.id_bill,
            vtype: 1,
            price: value.price,
            products: value.products,
            name_voucher_release: value.name_voucher_release
        };
        this.invoice_detail.push(detail);
        this.setSubTotal();
    }
    removeInvoiceDetail(id, notSetSub) {
        let index = this.invoice_detail.findIndex(detail => detail.id_voucher_code == id);
        if (index != -1) {
            this.invoice_detail.splice(index, 1);
        }
        this.setSubTotal();
    }
    getCreateUpdateInvoiceDetail() {
        return this.invoice_detail.map(item => {
            let detail = {
                _id: item._id,
                id_bill: item.id_bill,
                id_voucher_code: item.id_voucher_code,
                id_voucher: item.id_voucher,
                code: item.code,
                vtype: 1,
                ratio: 1,
                quantity: 1,
                price: item.price,
                products: item.products.map(pro => {
                    let data = {
                        id_product: pro.id_product,
                        ptype: pro.ptype,
                        ratio: pro.ratio,
                        quantity: pro.quantity,
                        price: 0,
                    };
                    if (pro.id_subproduct)
                        data['id_subproduct'] = pro.id_subproduct;
                    if (pro.combos) {
                        data['combos'] = pro.combos.map(combo => {
                            let product = {
                                id_product: combo.id_product,
                                price: combo.price,
                                quantity: combo.quantity,
                                ptype: combo.ptype,
                                ratio: combo.ratio ? combo.ratio : 1,
                            };
                            if (combo.id_lotproduct)
                                product['id_lotproduct'] = combo.id_lotproduct;
                            if (combo.id_subproduct)
                                product['id_subproduct'] = combo.id_subproduct;
                            return product;
                        });
                    }
                    return data;
                }),
            };
            return detail;
        });
    }
}
CreateBillComponent.ɵfac = function CreateBillComponent_Factory(t) { return new (t || CreateBillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_12__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_12__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_12__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_12__.VhQuery)); };
CreateBillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: CreateBillComponent, selectors: [["app-create-bill"]], hostBindings: function CreateBillComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function CreateBillComponent_keypress_HostBindingHandler($event) { return ctx.getKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
    } }, decls: 11, vars: 12, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [4, "ngIf"], [3, "searchProductList", "barcode", "id_product_delete", "clearBarcode", "closeSearchProductList"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditPay", ""], [1, "sales", "hide-best-selling"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 2, "width", "97%", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 3, "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["class", "no-data", 4, "ngIf"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], [1, "invoiceDetail-item"], ["style", "width: 100%", 4, "ngIf"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], [1, "sales-bills-staff-name"], ["nzBorderless", "", "nzShowSearch", "", 1, "cus-select", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar"], [1, "sales-bills-customer-title"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 2, "display", "flex", "justify-content", "space-between"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "width", "auto"], ["id", "percent-discount-price", "type", "number", "max", "100", "min", "0", "step", "1", "maxlength", "3", "nz-input", "", 1, "border_bottom", 2, "width", "50px", 3, "value", "blur"], ["percentDiscount", ""], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "border_bottom", "discount-price", 3, "value", "blur"], ["class", "sales-bills-content-fee", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-tax", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["style", "width: 16px;margin-left:10px", "src", "assets/icon/Iconfeather-edit.svg", 3, "click", 4, "ngIf"], ["class", "sales-bills-content-rest", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], [3, "payment_type", "id_wallet", "id_customer", "closeAndGetValuePayment"], ["class", "sales-bills-content-discount", "nz-col", "", "nzSpan", "24", "style", "margin-top: 10px;", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-note", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 2, "margin", "auto", 3, "disabled", "click"], [1, "no-data"], [2, "width", "100%"], [2, "width", "5%"], [2, "width", "35%"], [2, "width", "15%"], ["nzAlign", "right", 2, "width", "15%"], ["nzAlign", "right", 2, "width", "30%"], [4, "ngFor", "ngForOf"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottomLeft", "nz-col", "", "nzSpan", "1", 3, "nzPopconfirmTitle", "nzOnConfirm"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nzAlign", "right"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "border_bottom", 2, "text-align", "right !important", 3, "value", "id", "keyup"], ["colspan", "5", 2, "padding", "0 8px"], [2, "white-space", "pre-line", "font-family", "Roboto", "margin", "0"], [3, "nzValue", "nzLabel"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "border_bottom", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax"], ["nzBorderless", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], ["nz-col", "", "nzSpan", "7", 2, "text-align", "end"], ["nzBorderless", "", 3, "ngModel", "ngModelChange"], [1, "not-found"], ["src", "assets/icon/Iconfeather-edit.svg", 2, "width", "16px", "margin-left", "10px", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount", 2, "margin-top", "10px"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "customerPay", "border_bottom", 2, "text-align", "end", "width", "35%", 3, "disabled", "value", "keyup"], ["cash", ""], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-input", "", 1, "nz-hover-border", 3, "ngModel", "placeholder", "nzAutosize", "ngModelChange", "blur"], ["nz-row", ""], ["nz-col", "", "nzSpan", "8", 1, "center-col"], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "edit-pay", 3, "value"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"]], template: function CreateBillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function CreateBillComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, CreateBillComponent_nz_layout_4_Template, 96, 71, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "app-search-voucher", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("clearBarcode", function CreateBillComponent_Template_app_search_voucher_clearBarcode_5_listener() { return ctx.barcode = ""; })("closeSearchProductList", function CreateBillComponent_Template_app_search_voucher_closeSearchProductList_5_listener($event) { return ctx.closeSearchProductList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "nz-modal", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("nzVisibleChange", function CreateBillComponent_Template_nz_modal_nzVisibleChange_6_listener($event) { return ctx.edit_pay = $event; })("nzOnCancel", function CreateBillComponent_Template_nz_modal_nzOnCancel_6_listener() { return ctx.handleCancelEditPay(); })("nzOnOk", function CreateBillComponent_Template_nz_modal_nzOnOk_6_listener() { return ctx.handleEditPay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, CreateBillComponent_ng_container_8_Template, 7, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, CreateBillComponent_ng_template_9_Template, 6, 6, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 8, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.invoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("searchProductList", ctx.searchProductList)("barcode", ctx.barcode)("id_product_delete", ctx.id_product_delete);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 10, "Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("nzVisible", ctx.edit_pay)("nzFooter", _r2);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_16__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _sales_voucher_component_search_voucher_search_voucher_component__WEBPACK_IMPORTED_MODULE_8__.SearchVoucherComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__.NzModalContentDirective, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_18__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_14__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__.NzWaveDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__.NzDatePickerComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__.NzInputDirective, _sale_desktop_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__.TaxComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzTbodyComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_25__.NzTrDirective, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_26__.NzPopconfirmDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_21__.NzOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__.NzAutosizeDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DecimalPipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n  background-color: #f7f7f7;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-price[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 0.9rem;\n  border-bottom: solid 1px #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 93%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 1.1rem;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  grid-column: 1/3;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 13% 20% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-green) !important;\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .deactive[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   nz-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   app-delivery[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   app-customer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-gray);\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 35%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 80%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .show-best-selling[_ngcontent-%COMP%] {\n  grid-template-rows: 65% 35%;\n}\nnz-layout[_ngcontent-%COMP%]   .hide-best-selling[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n  grid-row-gap: 0px;\n  row-gap: 0px;\n}\nnz-layout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 500;\n  background: #fafafa;\n  transition: background 0.3s ease;\n  position: relative;\n  padding: 16px 8px;\n}\nnz-layout[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n  position: relative;\n  padding: 16px 8px;\n}\n.title[_ngcontent-%COMP%] {\n  align-self: center;\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n  align-self: center;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n.border_bottom[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border: none;\n  border-bottom: 1px solid #bebebe !important;\n}\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.text-end[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.beetween-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1iaWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBRUE7RUFDSSw2QkFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFBQSxhQUFBO0VBRUEscUJBQUE7RUFBQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ1I7QUFBUTs7OztFQUtJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNaO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNaO0FBQVk7RUFDSSxVQUFBO0FBRWhCO0FBRGdCO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUdwQjtBQURnQjtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBR3BCO0FBQVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFFaEI7QUFEZ0I7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBR3BCO0FBRm9CO0VBQ0ksZUFBQTtBQUl4QjtBQUFvQjtFQUNJLDZCQUFBO0VBQ0EsNkJBQUE7QUFFeEI7QUFHUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQURaO0FBR1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBQURaO0FBRVk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFBaEI7QUFDZ0I7RUFFSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQXBCO0FBQ29COzs7RUFFSSxVQUFBO0VBQ0EsZUFBQTtBQUV4QjtBQUNnQjtFQUNJLGtCQUFBO0FBQ3BCO0FBRVk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFBaEI7QUFDZ0I7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBQ3BCO0FBQW9CO0VBQ0ksZUFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7QUFFeEI7QUFDZ0I7RUFDSSxnQ0FBQTtBQUNwQjtBQUNnQjtFQUNJLGNBQUE7QUFDcEI7QUFFb0I7RUFDSSxpQkFBQTtBQUF4QjtBQUdnQjtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFEcEI7QUFHZ0I7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQURwQjtBQUdnQjtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQURwQjtBQUlZO0VBRUksYUFBQTtFQUNBLDhCQUFBO0FBSGhCO0FBS1k7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUhoQjtBQUtvQjtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQUh4QjtBQVFvQjtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQU54QjtBQVVvQjtFQUNJLFVBQUE7QUFSeEI7QUFZb0I7RUFDSSxlQUFBO0FBVnhCO0FBWW9CO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQVZ4QjtBQWFnQjtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBWHBCO0FBWW9CO0VBQ0ksV0FBQTtBQVZ4QjtBQWNvQjtFQUNJLGVBQUE7RUFDQSxVQUFBO0FBWnhCO0FBZ0JZO0VBQ0ksdUJBQUE7RUFDQSw4QkFBQTtBQWRoQjtBQWVnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQWJwQjtBQWVnQjtFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FBZHBCO0FBbUJJO0VBQ0ksMkJBQUE7QUFqQlI7QUFtQkk7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQUEsWUFBQTtBQWpCUjtBQXFCWTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFuQmhCO0FBdUJZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBckJoQjtBQTJCQTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBeEJKO0FBMkJBOztFQUVJLGlCQUFBO0FBeEJKO0FBMkJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBeEJKO0FBNEJBLGtCQUFBO0FBRUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtBQTFCSjtBQTZCQTtFQUNJLFVBQUE7RUFDQSxrQ0FBQTtBQTFCSjtBQTZCQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FBMUJKO0FBNkJBO0VBQ0ksZUFBQTtBQTFCSjtBQTZCQTtFQUNJLGVBQUE7QUExQko7QUE2QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQTFCSiIsImZpbGUiOiJjcmVhdGUtYmlsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnNhbGVzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDM1JTtcclxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICAgIC8vIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAgICAgJi1jYXJ0LFxyXG4gICAgICAgICYtYmVzdC1zZWxsaW5nLFxyXG4gICAgICAgIC5zYWxlcy1iaWxscy1zdGFmZixcclxuICAgICAgICAuc2FsZXMtYmlsbHMtY3VzdG9tZXIsXHJcbiAgICAgICAgLnNhbGVzLWJpbGxzLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNhcnQge1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYlO1xyXG4gICAgICAgICAgICAgICAgLmJ0bi1kYXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4tcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M4YzdjYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWludm9pY2VEZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MyU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICAuaW52b2ljZURldGFpbC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgJi1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVjZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYmVzdC1zZWxsaW5nIHtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1iaWxscyB7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEzJSAyMCUgNTUlIDEwJTtcclxuICAgICAgICAgICAgJi1zdGFmZiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgICYtdGltZSxcclxuICAgICAgICAgICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG56LWRhdGUtcGlja2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcC1zdGFmZiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1jdXN0b21lciB7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGVhY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzhjN2NjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbnotcmFkaW8tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXBwLWRlbGl2ZXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFwcC1jdXN0b21lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWN1c3RvbWVyPmRpdixcclxuICAgICAgICAgICAgJi1jb250ZW50PmRpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGl2PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1kaXNjb3VudCxcclxuICAgICAgICAgICAgICAgICYtZmVlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXRheCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1wYXkge1xyXG4gICAgICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1wYXltZW50X3R5cGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC10YXgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW5vdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAub3JkZXItYW5kLXByaW50IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAub3JkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNob3ctYmVzdC1zZWxsaW5nIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY1JSAzNSU7XHJcbiAgICB9XHJcbiAgICAuaGlkZS1iZXN0LXNlbGxpbmcge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgICAgIHJvdy1nYXA6IDBweDtcclxuICAgIH1cclxuICAgIHRhYmxlIHtcclxuICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuM3MgZWFzZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRib2R5IHtcclxuICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uY2VudGVyLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi8qIEhpZGUgc2Nyb2xsYmFyKi9cclxuXHJcbi5oaWRlU2Nyb2xsYmFyIHtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxuICAgIC8qIEZvciBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XHJcbiAgICAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cclxufVxyXG5cclxuLmhpZGVTY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICAvKiBGb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG59XHJcblxyXG4uYm9yZGVyX2JvdHRvbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxOTAsIDE5MCwgMTkwKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXQtOCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi50ZXh0LWVuZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi5iZWV0d2Vlbi1hbGwtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSJdfQ== */"] });


/***/ }),

/***/ 98628:
/*!*****************************************************************************************!*\
  !*** ./src/app/sales/bill-web-app/sales-order-voucher/sales-order-voucher.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderVoucherComponent": () => (/* binding */ SalesOrderVoucherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
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
/* harmony import */ var _header_account_info_header_account_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header-account-info/header-account-info.component */ 1412);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






















function SalesOrderVoucherComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 16);
  }
}

function SalesOrderVoucherComponent_div_22_Template(rf, ctx) {
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

function SalesOrderVoucherComponent_div_23_tr_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesOrderVoucherComponent_div_23_tr_37_Template_tr_click_0_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesOrderVoucherComponent_div_23_tr_37_Template_i_click_6_listener($event) {
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

function SalesOrderVoucherComponent_div_23_ng_template_38_Template(rf, ctx) {
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

function SalesOrderVoucherComponent_div_23_Template(rf, ctx) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzCurrentPageDataChange", function SalesOrderVoucherComponent_div_23_Template_nz_table_nzCurrentPageDataChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r12.onCurrentPageDataChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesOrderVoucherComponent_div_23_Template_th_click_12_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesOrderVoucherComponent_div_23_Template_th_click_17_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesOrderVoucherComponent_div_23_Template_th_click_22_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesOrderVoucherComponent_div_23_Template_th_click_31_listener() {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, SalesOrderVoucherComponent_div_23_tr_37_Template, 14, 10, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, SalesOrderVoucherComponent_div_23_ng_template_38_Template, 6, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
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

class SalesOrderVoucherComponent {
  constructor(vhQuery, router, vhQuerySales, vhAlgorithm, vhComponent, languageService, vhAuth, cdRef, functionService, notification, plaform, vhDisplayLEDService, fncService) {
    this.vhQuery = vhQuery;
    this.router = router;
    this.vhQuerySales = vhQuerySales;
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

    if (this.router.getCurrentNavigation().extras.state) {
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
      this.vhQuerySales.getBills_byFields({
        date: {
          $gte: new Date(this.date[0].setHours(0, 0, 0)),
          $lte: new Date(this.date[1].setHours(23, 59, 59, 59))
        },
        bill_type: {
          $in: [42]
        },
        id_branch: {
          $eq: this.vhQuerySales.getDefaultBranch()._id
        }
      }, {}).then(invoice => {
        let promise = new Array();

        for (let i = 0; i < invoice.length; i++) {
          promise[i] = this.vhQuerySales.getCustomer(invoice[i].id_customer);
        }

        this.vhQuery.asyncPromiseAll(promise).then(array => {
          this.invoiceToday = invoice.map((item, index) => {
            return Object.assign(Object.assign({}, item), {
              customer: array[index],
              sum_price: item.total * (1 + item.tax / 100)
            });
          });
          this.searchBill(this.searchValue);
        }, error => {});
        this.vhComponent.hideLoading(0);
      });
    });
  }

  searchBill(value) {
    if (value.length) {
      let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
      this.invoiceShow = this.vhAlgorithm.searchList(val, this.invoiceToday, ['bill_code', 'partner_name', 'employee_name', 'payment_name', 'status', 'phone']);
    } else this.invoiceShow = [...this.invoiceToday];
  }
  /* -----Pagination----- */


  onCurrentPageDataChange(value) {}

  goToDetail(bill) {
    if (this.vhAuth.checkMyPermission("sales_enable_view_bill_today")) {
      this.router.navigate(["/bill-web-app/sales-order-voucher/add"], {
        state: {
          bill: bill,
          invoiceToday: this.invoiceToday,
          customer: bill.customer
        }
      });
    } else this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
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

SalesOrderVoucherComponent.ɵfac = function SalesOrderVoucherComponent_Factory(t) {
  return new (t || SalesOrderVoucherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_7__.NzNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhDisplayLEDService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService));
};

SalesOrderVoucherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SalesOrderVoucherComponent,
  selectors: [["app-sales-order-voucher"]],
  decls: 24,
  vars: 14,
  consts: [["id", "sales-invoice-today"], ["nz-row", "", 1, "sales-invoice-today-header", 2, "padding", "8px", "background", "white"], ["nz-col", "", "nzSpan", "4", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "8", 1, "right-all-content", 2, "padding-right", "16px"], ["nzFormat", "dd/MM/yyyy", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "default", 1, "btn-add", 3, "click"], ["src", "assets/icon/management/view.svg"], ["nz-col", "", "nzSpan", "6"], ["nz-row", "", 2, "height", "100%", "margin-top", "8px"], ["nz-col", "", "nzSpan", "24", 2, "padding", "0 160px"], ["nz-row", "", "style", "height: 100%;", 4, "ngIf"], ["style", "padding: 8px; background-color: white;height: 100%;border-radius: 5px;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-row", "", 2, "height", "100%"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], [2, "padding", "8px", "background-color", "white", "height", "100%", "border-radius", "5px"], [1, "total-item"], [2, "color", "var(--ion-color-vh-red)"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzPageSize", "nzPageSizeOptions", "nzNoResult", "nzCurrentPageDataChange"], ["tableSales", ""], ["nzWidth", "14%", "nzAlign", "left", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "15%", "nzAlign", "left"], ["nzWidth", "15%", "nzAlign", "right", 2, "cursor", "pointer", 3, "click"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["noBill", ""], [2, "cursor", "pointer", 3, "click"], ["nzAlign", "left"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click"], [1, "money-right"], [1, "pos-content-empty"], ["src", "assets/icon/pos/undraw_add_to_cart_vkjp.svg", 2, "font-size", "230px"]],
  template: function SalesOrderVoucherComponent_Template(rf, ctx) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SalesOrderVoucherComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.searchValue = $event;
      })("ngModelChange", function SalesOrderVoucherComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.searchBill($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SalesOrderVoucherComponent_ng_template_10_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "nz-range-picker", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SalesOrderVoucherComponent_Template_nz_range_picker_ngModelChange_13_listener($event) {
        return ctx.date = $event;
      })("ngModelChange", function SalesOrderVoucherComponent_Template_nz_range_picker_ngModelChange_13_listener($event) {
        return ctx.changeTime($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SalesOrderVoucherComponent_Template_button_click_14_listener() {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, SalesOrderVoucherComponent_div_22_Template, 5, 3, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SalesOrderVoucherComponent_div_23_Template, 40, 35, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 8, "Voucher purchase order"));
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
  styles: ["@charset \"UTF-8\";\nnz-layout[_ngcontent-%COMP%] {\n  background: #f7f7f7 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.active[_ngcontent-%COMP%] {\n  border: 3px solid var(--ion-color-vh-green) !important;\n  box-shadow: 0px 3px 6px #00000040;\n}\n\n.splash[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  top: 50%;\n  left: 50%;\n  margin-left: -25vw;\n  margin-top: -25vh;\n}\n@media only screen and (min-width: 768px) {\n  .splash[_ngcontent-%COMP%] {\n    width: 60vw;\n    height: 50vh;\n    top: 50%;\n    left: 50%;\n    margin-left: -30vw;\n    margin-top: -25vh;\n  }\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.row[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.row[_ngcontent-%COMP%]   #color-picker[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  max-width: 90%;\n}\n.row[_ngcontent-%COMP%]   #color-picker[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.row-interface-font[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.row-interface-font[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green) !important;\n  border-bottom: 1px solid var(--ion-color-vh-green) !important;\n}\nli[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green) !important;\n}\nli[_ngcontent-%COMP%]:focus {\n  color: var(--ion-color-vh-green) !important;\n}\n  .ant-dropdown-menu-item-selected, .ant-dropdown-menu-item-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85) !important;\n  background-color: white !important;\n}\n  .ant-dropdown-menu-submenu-selected .ant-dropdown-menu-submenu-title {\n  color: var(--ion-color-vh-green) !important;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  margin: 8px;\n  border-radius: 8px;\n}\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLW9yZGVyLXZvdWNoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNSO0FBRUk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUtBOztFQUVJLGdDQUFBO0FBRko7QUFLQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtBO0VBQ0ksc0RBQUE7RUFDQSxpQ0FBQTtBQUZKO0FBS0EsVUFBQTtBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUhKO0FBS0k7RUFUSjtJQVVRLFdBQUE7SUFDQSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBRk47QUFDRjtBQUtBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFGSjtBQUlJO0VBQ0ksV0FBQTtBQUZSO0FBS0k7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFIUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFIWjtBQVFBO0VBQ0ksOEJBQUE7QUFMSjtBQU9JO0VBQ0ksV0FBQTtBQUxSO0FBU0E7RUFDSSwyQ0FBQTtFQUNBLDZEQUFBO0FBTko7QUFTQTtFQUNJLDJDQUFBO0FBTko7QUFTQTtFQUNJLDJDQUFBO0FBTko7QUFTQTs7OztFQUlJLHFDQUFBO0VBQ0Esa0NBQUE7QUFOSjtBQVNBO0VBQ0ksMkNBQUE7QUFOSjtBQVNBLHlCQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFOSjtBQVFJO0VBQ0ksa0JBQUE7QUFOUiIsImZpbGUiOiJzYWxlcy1vcmRlci12b3VjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xubnotbGF5b3V0IHtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5uei1sYXlvdXQgLnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxubnotbGF5b3V0IC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm56LWxheW91dCBuei1zZWxlY3Qge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5uei1sYXlvdXQgLmJ0bi1hZGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYW50LWJ0bjpmb2N1cyxcbi5hbnQtYnRuOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XG59XG5cbi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmFjdGl2ZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDQwO1xufVxuXG4vKiogU1lOQyAqL1xuLnNwbGFzaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDUwdnc7XG4gIGhlaWdodDogNTB2aDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0yNXZ3O1xuICBtYXJnaW4tdG9wOiAtMjV2aDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnNwbGFzaCB7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTMwdnc7XG4gICAgbWFyZ2luLXRvcDogLTI1dmg7XG4gIH1cbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5yb3cgbnotc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucm93ICNjb2xvci1waWNrZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA5MCU7XG59XG4ucm93ICNjb2xvci1waWNrZXIgLmNvbG9yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJvdy1pbnRlcmZhY2UtZm9udCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yb3ctaW50ZXJmYWNlLWZvbnQgbnotc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWxlY3RlZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG59XG5cbmxpOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcbn1cblxubGk6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQsXG4uYW50LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZCA+IGEsXG4uYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZS1zZWxlY3RlZCxcbi5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlLXNlbGVjdGVkID4gYSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1zZWxlY3RlZCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG59XG5cbi8qIEtodW5nIGNo4bupYSB0aHVtYm5haWwgKi9cbi50aHVtYm5haWwge1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnRodW1ibmFpbCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59Il19 */"]
});

/***/ }),

/***/ 11061:
/*!**************************************************************************************!*\
  !*** ./src/app/sales/bill-web-app/sales-order-voucher/sales-order-voucher.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesOrderVoucherModule": () => (/* binding */ SalesOrderVoucherModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sales_order_voucher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sales-order-voucher.component */ 98628);
/* harmony import */ var _create_bill_create_bill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-bill/create-bill.component */ 23484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _header_account_info_header_account_info_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header-account-info/header-account-info.module */ 28049);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var src_app_sales_sales_voucher_component_component_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/sales-voucher/component/component.module */ 76181);
/* harmony import */ var src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/sale-desktop/components/components.module */ 50682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);














const routes = [
    {
        path: '',
        component: _sales_order_voucher_component__WEBPACK_IMPORTED_MODULE_0__.SalesOrderVoucherComponent,
    },
    {
        path: 'add',
        component: _create_bill_create_bill_component__WEBPACK_IMPORTED_MODULE_1__.CreateBillComponent,
    }
];
class SalesOrderVoucherModule {
}
SalesOrderVoucherModule.ɵfac = function SalesOrderVoucherModule_Factory(t) { return new (t || SalesOrderVoucherModule)(); };
SalesOrderVoucherModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SalesOrderVoucherModule });
SalesOrderVoucherModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
            _header_account_info_header_account_info_module__WEBPACK_IMPORTED_MODULE_3__.HeaderAccountInfoModule,
            src_app_sales_sales_voucher_component_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule,
            src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SalesOrderVoucherModule, { declarations: [_sales_order_voucher_component__WEBPACK_IMPORTED_MODULE_0__.SalesOrderVoucherComponent, _create_bill_create_bill_component__WEBPACK_IMPORTED_MODULE_1__.CreateBillComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule,
        _header_account_info_header_account_info_module__WEBPACK_IMPORTED_MODULE_3__.HeaderAccountInfoModule,
        src_app_sales_sales_voucher_component_component_module__WEBPACK_IMPORTED_MODULE_4__.ComponentModule,
        src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_bill-web-app_sales-order-voucher_sales-order-voucher_module_ts.js.map