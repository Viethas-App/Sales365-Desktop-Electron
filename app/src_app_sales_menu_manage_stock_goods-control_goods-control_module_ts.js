"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_stock_goods-control_goods-control_module_ts"],{

/***/ 3451:
/*!**********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/stock/goods-control/goods-control.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoodsControlComponent": () => (/* binding */ GoodsControlComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_bill_detail_sales_sales_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/bill-detail/sales/sales.component */ 47497);
/* harmony import */ var src_app_sales_components_bill_detail_warranty_warranty_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/bill-detail/warranty/warranty.component */ 88607);
/* harmony import */ var src_app_sales_components_bill_detail_customer_return_customer_return_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/bill-detail/customer-return/customer-return.component */ 1774);
/* harmony import */ var src_app_sales_components_bill_detail_openning_stock_openning_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/bill-detail/openning-stock/openning-stock.component */ 95042);
/* harmony import */ var src_app_sales_components_bill_detail_delivery_goods_delivery_goods_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/bill-detail/delivery-goods/delivery-goods.component */ 51627);
/* harmony import */ var src_app_sales_components_bill_detail_recieve_goods_recieve_goods_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/bill-detail/recieve-goods/recieve-goods.component */ 47905);
/* harmony import */ var src_app_sales_components_bill_detail_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/components/bill-detail/purchase/purchase.component */ 32274);
/* harmony import */ var src_app_sales_components_bill_detail_return_supplier_return_supplier_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/components/bill-detail/return-supplier/return-supplier.component */ 57096);
/* harmony import */ var src_app_sales_components_bill_detail_exchange_payment_card_exchange_payment_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sales/components/bill-detail/exchange-payment-card/exchange-payment-card.component */ 17465);
/* harmony import */ var src_app_sales_components_bill_detail_exchange_voucher_exchange_voucher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sales/components/bill-detail/exchange-voucher/exchange-voucher.component */ 67079);
/* harmony import */ var src_app_sales_components_bill_detail_destroy_product_destroy_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/sales/components/bill-detail/destroy-product/destroy-product.component */ 49949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



































function GoodsControlComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 19);
} }
function GoodsControlComponent_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzValue", item_r4.value)("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 2, item_r4.name));
} }
function GoodsControlComponent_nz_tab_29_b_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "Customer"));
} }
function GoodsControlComponent_nz_tab_29_b_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "Supplier"));
} }
function GoodsControlComponent_nz_tab_29_b_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "Branch"));
} }
function GoodsControlComponent_nz_tab_29_tr_42_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](invoice_r11.partner_name);
} }
function GoodsControlComponent_nz_tab_29_tr_42_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](invoice_r11.supplier_name);
} }
function GoodsControlComponent_nz_tab_29_tr_42_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](invoice_r11.branch_name);
} }
function GoodsControlComponent_nz_tab_29_tr_42_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "Rest"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r15.vhAlgorithm.vhcurrencyunit(invoice_r11.total * (1 + invoice_r11.tax / 100) - invoice_r11.payment));
} }
const _c0 = function () { return [0, 2, 5]; };
const _c1 = function () { return [1, 4]; };
const _c2 = function () { return [3, 6]; };
function GoodsControlComponent_nz_tab_29_tr_42_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function GoodsControlComponent_nz_tab_29_tr_42_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21); const invoice_r11 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r20.gotoDetail(invoice_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, GoodsControlComponent_nz_tab_29_tr_42_span_7_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, GoodsControlComponent_nz_tab_29_tr_42_span_8_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, GoodsControlComponent_nz_tab_29_tr_42_span_9_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, GoodsControlComponent_nz_tab_29_tr_42_span_12_Template, 5, 4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function GoodsControlComponent_nz_tab_29_tr_42_Template_label_ngModelChange_18_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21); const invoice_r11 = restoredCtx.$implicit; return invoice_r11.verify_status_bill = $event; })("ngModelChange", function GoodsControlComponent_nz_tab_29_tr_42_Template_label_ngModelChange_18_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21); const invoice_r11 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r23.checkedBill($event, invoice_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 13, invoice_r11.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](invoice_r11.bill_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](16, _c0).includes(ctx_r10.selectedIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](17, _c1).includes(ctx_r10.selectedIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](18, _c2).includes(ctx_r10.selectedIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", invoice_r11.payment_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", invoice_r11.payment - invoice_r11.total < 0 && invoice_r11.payment_type != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](invoice_r11.name_employee);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", ctx_r10.vhAlgorithm.vhcurrencyunit_symbol(invoice_r11["total"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", invoice_r11.verify_status_bill)("nzTooltipPlacement", "left")("nzTooltipColor", "var(--ion-color-vh-green)")("nzTooltipTitle", invoice_r11.verify_status_bill ? invoice_r11.control_info : "");
} }
const _c3 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c4 = function (a0) { return { y: a0 }; };
function GoodsControlComponent_nz_tab_29_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nz-tab", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "nz-table", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function GoodsControlComponent_nz_tab_29_Template_th_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); ctx_r24.dateCol = !ctx_r24.dateCol; return ctx_r24.sortTable("date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function GoodsControlComponent_nz_tab_29_Template_th_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); ctx_r26.bill_codeCol = !ctx_r26.bill_codeCol; return ctx_r26.sortTable("bill_code"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function GoodsControlComponent_nz_tab_29_Template_th_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); ctx_r27.customer_supplier_branchCol = !ctx_r27.customer_supplier_branchCol; return ctx_r27.sortTable("different", ctx_r27.selectedIndex); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, GoodsControlComponent_nz_tab_29_b_18_Template, 3, 3, "b", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](19, GoodsControlComponent_nz_tab_29_b_19_Template, 3, 3, "b", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, GoodsControlComponent_nz_tab_29_b_20_Template, 3, 3, "b", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function GoodsControlComponent_nz_tab_29_Template_th_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); ctx_r28.payment_nameCol = !ctx_r28.payment_nameCol; return ctx_r28.sortTable("payment_name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](26, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function GoodsControlComponent_nz_tab_29_Template_th_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); ctx_r29.name_employeeCol = !ctx_r29.name_employeeCol; return ctx_r29.sortTable("name_employee"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](31, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function GoodsControlComponent_nz_tab_29_Template_th_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r25); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); ctx_r30.totalCol = !ctx_r30.totalCol; return ctx_r30.sortTable("total"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](41, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, GoodsControlComponent_nz_tab_29_tr_42_Template, 19, 19, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](3);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 22, tab_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 24, "Not invoice yet"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](38, _c3))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](39, _c4, ctx_r3.tableHeight))("nzData", ctx_r3.invoiceShow);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](10, 26, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", ctx_r3.dateCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](15, 28, "Invoice code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", ctx_r3.bill_codeCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](41, _c0).includes(ctx_r3.selectedIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](42, _c1).includes(ctx_r3.selectedIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](43, _c2).includes(ctx_r3.selectedIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", ctx_r3.customer_supplier_branchCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](25, 30, "Payment method"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", ctx_r3.payment_nameCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](30, 32, "Employee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", ctx_r3.name_employeeCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](35, 34, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", ctx_r3.totalCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](40, 36, "For control"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _r6.data);
} }
class GoodsControlComponent {
    constructor(vhQuery, router, vhQuerySales, vhAlgorithm, vhComponent, lang, vhAuth, cdRef, nzModal, datePipe, fncService) {
        this.vhQuery = vhQuery;
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.lang = lang;
        this.vhAuth = vhAuth;
        this.cdRef = cdRef;
        this.nzModal = nzModal;
        this.datePipe = datePipe;
        this.fncService = fncService;
        this.date = [new Date(), new Date()];
        this.searchValue = '';
        this.invoiceShow = [];
        this.invoiceSegment = [];
        this.listFilter = [{ value: 1, name: "Latest" }, { value: 2, name: "Oldest" }, { value: 3, name: "Low to High value" }, { value: 4, name: "High to Low value" }];
        this.totalValInvoice = 0;
        this.listTabs = ['Sold', 'Return supplier', 'Output goods for warranty', 'Delivery goods to the branch', 'Input', 'Customer returned', 'Receive goods from the branch', 'Đổi voucher lấy hàng hóa', 'Đổi thẻ trả trước lấy hàng hóa'];
        this.dataRestore = null;
        this.filterType = 1;
        this.selectedIndex = 0;
        /** hàm sort cho các cột */
        this.dateCol = false;
        this.bill_codeCol = false;
        this.payment_nameCol = false;
        this.name_employeeCol = false;
        this.totalCol = false;
        this.customer_supplier_branchCol = false;
        this.date[0].setHours(0, 0, 0, 0);
        this.date[1].setHours(23, 59, 59, 59);
        this.dataRestore = this.router.getCurrentNavigation().extras.state;
    }
    ngOnInit() {
        if (this.dataRestore) {
            this.searchValue = this.dataRestore.searchValue;
            this.filterType = this.dataRestore.filterType;
            this.selectedIndex = this.dataRestore.selectedIndex;
            this.date = this.dataRestore.date;
            this.invoices = this.dataRestore.invoices;
            this.segmentChanged(this.selectedIndex);
        }
        else {
            this.filterType = 1;
        }
    }
    /**
     * get các hóa đơn liên quan xuất-nhập hàng
     */
    getInvoices() {
        this.vhComponent.showLoading("", "transparent-loading", null, 0, false).then(() => {
            this.vhQuerySales.getBills_byFields({ date: { $gte: new Date(this.date[0].setHours(0, 0, 0)), $lte: new Date(this.date[1].setHours(23, 59, 59, 59)) }, bill_type: { $in: [1, 10, 15, 30, 2, 3, 31, 41, 51] }, id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id } }, {})
                .then((invoice) => {
                this.invoices = invoice.map(item => {
                    if (item.verify_status_bill)
                        item['control_info'] = this.renderControl(item);
                    return Object.assign(Object.assign({}, item), { partner_name: item.id_customer ? this.renderPartner(item.id_customer) : null, supplier_name: item.id_supplier ? this.renderSupplier(item.id_supplier) : null, payment_name: (item.payment_type && item.id_wallet) ? this.renderPayment(item.payment_type, item.id_wallet) : null, name_employee: item.id_employee ? (this.vhAuth.getlocalEmployee(item.id_employee).name) : null, branch_name: (item.id_branch && (item.id_branch_send || item.id_branch_receive)) ? this.renderBranch(item) : null, total: item.total ? item.total * (1 + item.tax / 100) : 0 });
                });
                this.segmentChanged(this.selectedIndex);
                this.status = "Not found";
                this.vhComponent.hideLoading(0);
            }, err => {
                this.vhComponent.hideLoading(0);
            });
        });
    }
    /**
     * trả về tên ncc của bill
     * @param id_partner
     * @returns string
     * @example let supplier_name = this.renderSupplier('DNIKWUJHNBDUYWGU')
     */
    renderSupplier(id_partner) {
        let supplier = this.vhQuerySales.getlocalSupplier(id_partner).name;
        return supplier ? supplier : this.lang.translate("Not found");
    }
    /**
     * trả về tên kh của bill
     * @param id_partner
     * @returns string
     * @example let customer_name = this.renderPartner('DNIKWUJHNBDUYWGU')
     */
    renderPartner(id_partner) {
        var _a;
        let customer = this.lang.translate((_a = this.vhQuerySales.getlocalCustomer(id_partner)) === null || _a === void 0 ? void 0 : _a.name);
        return customer ? customer : this.lang.translate("Not found");
    }
    /**
     * xử lý chi nhánh cho bill chuyển/nhận hàng
     */
    renderBranch(bill) {
        if (bill.bill_type == 30)
            return this.vhQuerySales.getlocalBranch(bill.id_branch).name + " " + this.lang.translate('To branch').toLowerCase() + " " + this.vhQuerySales.getlocalBranch(bill.id_branch_receive).name;
        else if (bill.bill_type == 31)
            return this.vhQuerySales.getlocalBranch(bill.id_branch_send).name + " " + this.lang.translate('To branch').toLowerCase() + " " + this.vhQuerySales.getlocalBranch(bill.id_branch).name;
    }
    /**
     * trả về thông tin đối soát
     * @example let checked = this.renderControl(bill_selected)
     */
    renderControl(bill) {
        return (bill['id_verifier_bill'] && bill['verify_date_bill']) ? `${this.vhAuth.getlocalEmployee(bill['id_verifier_bill'])['name']} ${this.lang.translate('has checked on')} ${this.datePipe.transform(bill['verify_date_bill'], 'dd/MM/yyyy')}` : '';
    }
    sortFilter(filterType) {
        switch (filterType) {
            case 1:
                this.invoiceSegment.sort((prev, next) => Date.parse(next.date) - Date.parse(prev.date));
                break;
            case 2:
                this.invoiceSegment.sort((prev, next) => Date.parse(prev.date) - Date.parse(next.date));
                break;
            case 3:
                this.invoiceSegment.sort((prev, next) => (prev.total * (1 + prev.tax / 100)) - (next.total * (1 + next.tax / 100)));
                break;
            case 4:
                this.invoiceSegment.sort((prev, next) => (next.total * (1 + next.tax / 100)) - (prev.total * (1 + prev.tax / 100)));
                break;
        }
        this.searchBill(this.searchValue);
    }
    /**
     * lọc bill theo ['bill_code', 'partner_name', 'payment_name', 'status', 'name_employee']
     * @example this.searchBill('')
     */
    searchBill(value) {
        if (value.length) {
            let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
            this.invoiceShow = this.vhAlgorithm.searchList(val, this.invoiceSegment, ['bill_code', 'partner_name', 'payment_name', 'name_employee', 'status']);
        }
        else
            this.invoiceShow = [...this.invoiceSegment];
    }
    ngAfterViewChecked() {
        if (document.querySelector("#goods-control-invoice") && document.querySelector(".ant-table-thead") && document.querySelector(".ant-tabs-nav") && document.querySelector(".invoice-header")) {
            this.tableHeight = document.querySelector("#goods-control-invoice").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".invoice-header").clientHeight - document.querySelector(".ant-tabs-nav").clientHeight - 60 + "px";
            if (document.querySelector(".ant-table-pagination")) {
                this.tableHeight = document.querySelector("#goods-control-invoice").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                    - document.querySelector(".invoice-header").clientHeight - document.querySelector(".ant-tabs-nav").clientHeight - document.querySelector(".ant-table-pagination").clientHeight - 60 + "px";
            }
        }
        this.cdRef.detectChanges();
    }
    /**
     * trả về tên phương thức thanh toán của đơn
     * @example let payment_name= this.renderPayment(1)
     */
    renderPayment(payment_type, id_wallet = null) {
        switch (payment_type) {
            case 1: return this.lang.translate('Cash');
            case 2: return this.lang.translate('Debit');
            case 3: return this.vhQuerySales.getlocalWallet(id_wallet).name;
        }
    }
    goBack() {
        this.router.navigate(["/sales/dashboard/manage/stock"]);
    }
    /**
     * bắt sk thay đổi tab xem loại hóa đơn
     */
    segmentChanged(value) {
        if (this.invoices) {
            switch (value) {
                case 0:
                    this.invoiceSegment = this.invoices.filter(item => item.bill_type == 1);
                    break;
                case 1:
                    this.invoiceSegment = this.invoices.filter(item => item.bill_type == 10);
                    break;
                case 2:
                    this.invoiceSegment = this.invoices.filter(item => item.bill_type == 15);
                    break;
                case 3:
                    this.invoiceSegment = this.invoices.filter(item => item.bill_type == 30);
                    break;
                case 4:
                    this.invoiceSegment = this.invoices.filter(item => item.bill_type == 2);
                    break;
                case 5:
                    this.invoiceSegment = this.invoices.filter(item => item.bill_type == 3);
                    break;
                case 6:
                    this.invoiceSegment = this.invoices.filter(item => item.bill_type == 31);
                    break;
                case 7:
                    this.invoiceSegment = this.invoices.filter(item => item.bill_type == 41);
                    break;
                case 8:
                    this.invoiceSegment = this.invoices.filter(item => item.bill_type == 51);
                    break;
            }
            this.sortFilter(this.filterType);
        }
    }
    /**
     * bắt sk thay đổi thời gian xem báo cáo
     * @param event
     * @example this.changeTime(['2023-06-27T01:21:41.397Z','2023-06-27T01:21:41.397Z'])
     */
    changeTime(event) {
        if (new Date(event[1].setHours(0, 0, 0, 0)).getTime() - new Date(event[0].setHours(0, 0, 0, 0)).getTime() <= this.fncService.checkDateReport() * 86000000) {
            //this.getTransferList();
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.lang.translate("The time limit to view is") + " " + this.fncService.checkDateReport() + " " + this.lang.translate("days"));
            this.date = [new Date(event[0]), new Date(event[0].getTime() + this.fncService.checkDateReport() * 86000000)];
        }
    }
    /**
     * Đối soát bill
     */
    checkedBill(checked, bill) {
        this.nzModal.confirm({
            nzTitle: `<b>${this.lang.translate("Confirm")}?</b>`,
            nzContent: `<i>${checked ? this.lang.translate("Do you want to check this invoice") + "?" : this.lang.translate("Do you want to cancel this invoice check") + "?"}</i>`,
            nzOnOk: () => {
                this.updateBill(bill, checked);
            },
            nzOnCancel: () => {
                bill.verify_status_bill = !checked;
            }
        });
    }
    /**cập nhật đối soát */
    updateBill(bill, checked) {
        let value = {
            verify_status_bill: checked
        };
        if (checked) {
            value['id_verifier_bill'] = this.vhAuth.getUser()._id;
            value['verify_date_bill'] = new Date().toISOString();
        }
        this.vhQuerySales.updateBill(bill._id, value).then(() => {
            if (checked)
                bill['control_info'] = this.renderControl(value);
        });
    }
    /**Vào chi tiết của mỗi hóa đơn */
    gotoDetail(item) {
        switch (item.bill_type) {
            case 1: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_sales_sales_component__WEBPACK_IMPORTED_MODULE_0__.SalesComponent, { id_bill: item._id }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 2: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_6__.PurchaseComponent, { id_bill: item._id }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 3: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_customer_return_customer_return_component__WEBPACK_IMPORTED_MODULE_2__.CustomerReturnComponent, { id_bill: item._id }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 9: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_openning_stock_openning_stock_component__WEBPACK_IMPORTED_MODULE_3__.OpenningStockComponent, { id_bill: item._id }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 10: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_return_supplier_return_supplier_component__WEBPACK_IMPORTED_MODULE_7__.ReturnSupplierComponent, { id_bill: item._id }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 15: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_warranty_warranty_component__WEBPACK_IMPORTED_MODULE_1__.WarrantyComponent, { id_bill: item._id }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 30: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_delivery_goods_delivery_goods_component__WEBPACK_IMPORTED_MODULE_4__.DeliveryGoodsComponent, { id_bill: item._id }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 31: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_recieve_goods_recieve_goods_component__WEBPACK_IMPORTED_MODULE_5__.RecieveGoodsComponent, { id_bill: item._id }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 41: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_exchange_voucher_exchange_voucher_component__WEBPACK_IMPORTED_MODULE_9__.ExchangeVoucherComponent, { id_bill: item._id }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 51: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_exchange_payment_card_exchange_payment_card_component__WEBPACK_IMPORTED_MODULE_8__.ExchangePaymentCardComponent, { id_bill: item._id }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 38: {
                if (!item._id) {
                    this.vhComponent.alertMessageDesktop("warning", this.lang.translate("Xuất hủy hàng hóa từ cân bằng kho"));
                    break;
                }
                else {
                    return this.vhComponent.showModal(src_app_sales_components_bill_detail_destroy_product_destroy_product_component__WEBPACK_IMPORTED_MODULE_10__.DestroyProductComponent, { id_bill: item._id }, false, false, 'bill-detail')
                        .then(modal => {
                        modal.onWillDismiss().then(dataReturn => { });
                    });
                }
            }
            case 39: {
                this.vhComponent.alertMessageDesktop("warning", this.lang.translate("Nhập bù hàng hóa từ cân bằng kho"));
                break;
            }
        }
    }
    /** Hàm thực hiện sắp xếp theo collect
     *
     * @param colName       // tên cột muôn sắp xếp
     */
    sortTable(colName, selectedIndex) {
        switch (colName) {
            case 'date':
                if (this.dateCol) {
                    this.invoiceShow = this.vhAlgorithm.sortDatebyASC([...this.invoiceShow], colName);
                }
                else {
                    this.invoiceShow = this.vhAlgorithm.sortDatebyDESC([...this.invoiceShow], colName);
                }
                break;
            case 'bill_code':
                if (this.bill_codeCol) {
                    this.invoiceShow = this.vhAlgorithm.sortStringbyASC([...this.invoiceShow], colName);
                }
                else {
                    this.invoiceShow = this.vhAlgorithm.sortStringbyDESC([...this.invoiceShow], colName);
                }
                break;
            case 'payment_name':
                if (this.payment_nameCol) {
                    this.invoiceShow = this.vhAlgorithm.sortVietnamesebyASC([...this.invoiceShow], colName);
                }
                else {
                    this.invoiceShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.invoiceShow], colName);
                }
                break;
            case 'name_employee':
                if (this.name_employeeCol) {
                    this.invoiceShow = this.vhAlgorithm.sortVietnamesebyASC([...this.invoiceShow], colName);
                }
                else {
                    this.invoiceShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.invoiceShow], colName);
                }
                break;
            case 'total':
                if (this.totalCol) {
                    this.invoiceShow = this.vhAlgorithm.sortNumberbyASC([...this.invoiceShow], colName);
                }
                else {
                    this.invoiceShow = this.vhAlgorithm.sortNumberbyDESC([...this.invoiceShow], colName);
                }
                break;
            case 'different':
                if (this.customer_supplier_branchCol) {
                    if ([0, 2, 5].includes(selectedIndex))
                        this.invoiceShow = this.vhAlgorithm.sortVietnamesebyASC([...this.invoiceShow], 'partner_name');
                    if ([1, 4].includes(selectedIndex))
                        this.invoiceShow = this.vhAlgorithm.sortVietnamesebyASC([...this.invoiceShow], 'supplier_name');
                    if ([3, 6].includes(selectedIndex))
                        this.invoiceShow = this.vhAlgorithm.sortVietnamesebyASC([...this.invoiceShow], 'branch_name');
                }
                else {
                    if ([0, 2, 5].includes(selectedIndex))
                        this.invoiceShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.invoiceShow], 'partner_name');
                    if ([1, 4].includes(selectedIndex))
                        this.invoiceShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.invoiceShow], 'supplier_name');
                    if ([3, 6].includes(selectedIndex))
                        this.invoiceShow = this.vhAlgorithm.sortVietnamesebyDESC([...this.invoiceShow], 'branch_name');
                }
                break;
        }
    }
}
GoodsControlComponent.ɵfac = function GoodsControlComponent_Factory(t) { return new (t || GoodsControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_11__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_12__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_17__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_13__.FunctionService)); };
GoodsControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: GoodsControlComponent, selectors: [["app-goods-control"]], decls: 30, vars: 19, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "goods-control-invoice"], ["nz-row", "", 1, "invoice-header"], ["nz-col", "", "nzSpan", "5", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "6", 1, "title", "center-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "5", 1, "title", "center-all-content"], ["nzBorderless", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "6", 1, "date-picker-cus"], ["nzFormat", "dd/MM/yyyy", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "2", 1, "right-all-content", "button-group"], ["nz-button", "", "nzType", "default", 1, "btn-green", "center-all-content", "ml-3", 3, "click"], ["src", "assets/icon/management/view.svg"], [3, "nzSelectedIndex", "nzSelectedIndexChange", "nzSelectChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "search"], [3, "nzValue", "nzLabel"], [3, "nzTitle"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData", "nzNoResult"], ["tableSales", ""], ["nzWidth", "14%", "nzAlign", "left", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "20%", "nzAlign", "left", 2, "cursor", "pointer", 3, "click"], [4, "ngIf"], ["nzWidth", "17%", "nzAlign", "left", 2, "cursor", "pointer", 3, "click"], ["nzWidth", "15%", "nzAlign", "left", 2, "cursor", "pointer", 3, "click"], ["nzWidth", "10%", "nzAlign", "right", 2, "cursor", "pointer", 3, "click"], ["nzWidth", "10%", "nzAlign", "center"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], ["nzAlign", "left"], ["nzAlign", "right"], ["nzAlign", "center"], ["nzTooltipPlacement", "top", "nz-button", "", "nz-tooltip", "", "nz-checkbox", "", 3, "ngModel", "nzTooltipPlacement", "nzTooltipColor", "nzTooltipTitle", "ngModelChange"]], template: function GoodsControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function GoodsControlComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "nz-input-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function GoodsControlComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchValue = $event; })("ngModelChange", function GoodsControlComponent_Template_input_ngModelChange_12_listener($event) { return ctx.searchBill($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, GoodsControlComponent_ng_template_14_Template, 1, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "nz-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function GoodsControlComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.filterType = $event; })("ngModelChange", function GoodsControlComponent_Template_nz_select_ngModelChange_17_listener($event) { return ctx.sortFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, GoodsControlComponent_nz_option_18_Template, 2, 4, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "nz-range-picker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function GoodsControlComponent_Template_nz_range_picker_ngModelChange_20_listener($event) { return ctx.date = $event; })("ngModelChange", function GoodsControlComponent_Template_nz_range_picker_ngModelChange_20_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function GoodsControlComponent_Template_button_click_23_listener() { return ctx.getInvoices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "nz-tabset", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzSelectedIndexChange", function GoodsControlComponent_Template_nz_tabset_nzSelectedIndexChange_28_listener($event) { return ctx.selectedIndex = $event; })("nzSelectChange", function GoodsControlComponent_Template_nz_tabset_nzSelectChange_28_listener($event) { return ctx.segmentChanged($event.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](29, GoodsControlComponent_nz_tab_29_Template, 43, 44, "nz-tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 11, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 13, "Output-Input goods control"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](13, 15, "Search for invoice code, customer name, payment, status"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.filterType);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.listFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](26, 17, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSelectedIndex", ctx.selectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.listTabs);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_22__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_23__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_26__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_26__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_27__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_28__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonIcon, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_30__.NzTabSetComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_25__.NzOptionComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_30__.NzTabComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_31__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_31__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_31__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_31__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_31__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_31__.NzCellAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_31__.NzTbodyComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_32__.NzTooltipDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_33__.NzCheckboxComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .invoice-header[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .invoice-header[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .invoice-header[_ngcontent-%COMP%]   .date-picker-cus[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 45%;\n}\nnz-layout[_ngcontent-%COMP%]   .invoice-header[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 90%;\n}\nnz-layout[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   nz-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 95%;\n  padding-left: 3px;\n  padding-right: 3px;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzLWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDUTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFBWTtFQUNJLDBDQUFBO0FBRWhCO0FBQ1k7RUFDSSxVQUFBO0FBQ2hCO0FBRVE7RUFDSSxVQUFBO0FBQVo7QUFJUTs7RUFFSSxrQkFBQTtBQUZaO0FBS0k7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBSFI7QUFLSTtFQUNJLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSFI7QUFLSTtFQUNJLFdBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0FBSFI7QUFPQTs7RUFFSSxnQ0FBQTtBQUpKO0FBT0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBSkoiLCJmaWxlIjoiZ29vZHMtY29udHJvbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC5pbnZvaWNlLWhlYWRlciB7XHJcbiAgICAgICAgLmRhdGUtcGlja2VyLWN1cyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICAgICAgICAgIG56LWRhdGUtcGlja2VyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbnotc2VsZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBuei10YWJsZSB7XHJcbiAgICAgICAgdGQsXHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIC5idG4tZGF0YSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYW50LWJ0bjpmb2N1cyxcclxuLmFudC1idG46aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuXHJcbi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 11528:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/menu/manage/stock/goods-control/goods-control.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoodsControlModule": () => (/* binding */ GoodsControlModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _goods_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-control.component */ 3451);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: "",
        component: _goods_control_component__WEBPACK_IMPORTED_MODULE_0__.GoodsControlComponent
    },
];
class GoodsControlModule {
}
GoodsControlModule.ɵfac = function GoodsControlModule_Factory(t) { return new (t || GoodsControlModule)(); };
GoodsControlModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GoodsControlModule });
GoodsControlModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GoodsControlModule, { declarations: [_goods_control_component__WEBPACK_IMPORTED_MODULE_0__.GoodsControlComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_stock_goods-control_goods-control_module_ts.js.map