"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_cashflow_money-control_money-control_module_ts"],{

/***/ 57229:
/*!*************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/cashflow/money-control/money-control.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyControlComponent": () => (/* binding */ MoneyControlComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_bill_detail_sales_sales_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/bill-detail/sales/sales.component */ 47497);
/* harmony import */ var src_app_sales_components_bill_detail_warranty_warranty_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/bill-detail/warranty/warranty.component */ 88607);
/* harmony import */ var src_app_sales_components_bill_detail_customer_return_customer_return_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/bill-detail/customer-return/customer-return.component */ 1774);
/* harmony import */ var src_app_sales_components_bill_detail_openning_stock_openning_stock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/bill-detail/openning-stock/openning-stock.component */ 95042);
/* harmony import */ var src_app_sales_components_bill_detail_delivery_goods_delivery_goods_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/bill-detail/delivery-goods/delivery-goods.component */ 51627);
/* harmony import */ var src_app_sales_components_bill_detail_recieve_goods_recieve_goods_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/bill-detail/recieve-goods/recieve-goods.component */ 47905);
/* harmony import */ var src_app_sales_components_bill_detail_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/components/bill-detail/purchase/purchase.component */ 32274);
/* harmony import */ var src_app_sales_components_bill_detail_return_supplier_return_supplier_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/components/bill-detail/return-supplier/return-supplier.component */ 57096);
/* harmony import */ var src_app_sales_components_bill_detail_destroy_product_destroy_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sales/components/bill-detail/destroy-product/destroy-product.component */ 49949);
/* harmony import */ var src_app_sales_components_bill_detail_sales_voucher_sales_voucher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sales/components/bill-detail/sales-voucher/sales-voucher.component */ 85554);
/* harmony import */ var src_app_sales_components_bill_detail_sales_payment_card_sales_payment_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/sales/components/bill-detail/sales-payment-card/sales-payment-card.component */ 94975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 39370);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



































function MoneyControlComponent_div_10_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "nz-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 2, option_r5.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzValue", option_r5._id);
} }
function MoneyControlComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "nz-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzOnSearch", function MoneyControlComponent_div_10_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r6.search($event); })("ngModelChange", function MoneyControlComponent_div_10_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r8.id_branch_report = $event; })("ngModelChange", function MoneyControlComponent_div_10_Template_nz_select_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r9.getPaymentBankList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, MoneyControlComponent_div_10_nz_option_3_Template, 2, 4, "nz-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 4, "Select branch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzServerSearch", true)("ngModel", ctx_r0.id_branch_report);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r0.branchList);
} }
function MoneyControlComponent_tr_85_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MoneyControlComponent_tr_85_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13); const item_r10 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r12.gotoDetail(item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MoneyControlComponent_tr_85_Template_i_click_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13); const item_r10 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); $event.stopPropagation(); return ctx_r14.vhComponent.copyValue(item_r10["bill_code"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function MoneyControlComponent_tr_85_Template_label_ngModelChange_18_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13); const item_r10 = restoredCtx.$implicit; return item_r10.verify_status_money = $event; })("ngModelChange", function MoneyControlComponent_tr_85_Template_label_ngModelChange_18_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r13); const item_r10 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r16.checkedBill($event, item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](i_r11 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](5, 11, item_r10.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r2.renderContent(item_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r10["bill_code"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.vhAlgorithm.vhcurrencyunit(item_r10["receipt"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r2.vhAlgorithm.vhcurrencyunit(item_r10["expense"]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r10.account_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", item_r10.verify_status_money)("nzTooltipPlacement", "left")("nzTooltipColor", "var(--ion-color-vh-green)")("nzTooltipTitle", item_r10.verify_status_money ? item_r10.control_info : "");
} }
function MoneyControlComponent_ng_container_99_label_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzValue", item_r20._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, item_r20.name));
} }
function MoneyControlComponent_ng_container_99_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzValue", item_r21._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, item_r21.name));
} }
function MoneyControlComponent_ng_container_99_label_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzValue", item_r22._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, item_r22.name));
} }
function MoneyControlComponent_ng_container_99_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "nz-collapse");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "nz-collapse-panel", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "nz-radio-group", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function MoneyControlComponent_ng_container_99_Template_nz_radio_group_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r23.radioValueInvoice = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, MoneyControlComponent_ng_container_99_label_5_Template, 3, 4, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "nz-collapse-panel", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "nz-radio-group", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function MoneyControlComponent_ng_container_99_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r25.radioValueAccount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, MoneyControlComponent_ng_container_99_label_9_Template, 3, 4, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "nz-collapse-panel", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "nz-radio-group", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function MoneyControlComponent_ng_container_99_Template_nz_radio_group_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r26.radioValueCashier = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, MoneyControlComponent_ng_container_99_label_13_Template, 3, 4, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzHeader", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 9, "Invoices"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r3.radioValueInvoice);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r3.listBill);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzHeader", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 11, "Account"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r3.radioValueAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r3.listAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzHeader", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](11, 13, "Employee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r3.radioValueCashier);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r3.listEmployee);
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a0) { return { y: a0 }; };
const _c2 = function () { return { height: "450px" }; };
class MoneyControlComponent {
    constructor(vhAlgorithm, router, vhAuth, vhQuerySales, lang, vhComponent, datePipe, cdRef, fncService, nzModal) {
        this.vhAlgorithm = vhAlgorithm;
        this.router = router;
        this.vhAuth = vhAuth;
        this.vhQuerySales = vhQuerySales;
        this.lang = lang;
        this.vhComponent = vhComponent;
        this.datePipe = datePipe;
        this.cdRef = cdRef;
        this.fncService = fncService;
        this.nzModal = nzModal;
        /**Chưa dịch
         * Đối soát hóa đơn này
         * Hủy đối soát hóa đơn này
         */
        this.date = [new Date(), new Date()];
        this.loadStatus = "Drag to sync...";
        this.diary = this.init();
        this.selectedValue = '1';
        this.list_category = [];
        this.list_show = [];
        this.branchList = [];
        this.search_branchList = [];
        this.id_branch_report = '';
        this.useBranch = this.fncService.checkUsingBranch();
        /**Xử lý lấy dữ liệu từ modal để filter */
        this.radioValueInvoice = 'all';
        this.radioValueAccount = 'all';
        this.radioValueCashier = 'all';
        this.datafilter = {
            bill_type: [1, 2, 3, 7, 8, 10, 11, 12, 15, 33, 34, 40, 50],
            id_wallet: "all",
            id_employee: "all"
        };
        this.listEmployee = [{ _id: 'all', name: this.lang.translate('All') }];
        this.listAccountDefault = [{ _id: 'id_cash', name: this.lang.translate('Cash') }];
        this.listAccount = [{ _id: 'id_cash', name: this.lang.translate('Cash') }];
        this.listBill = [{ _id: 'all', name: this.lang.translate('All') }, { _id: '1', name: "Receipt" }, { _id: '2', name: "Expense" }];
        this.dataRestore = null;
        /** Zorro modal */
        this.isVisible = false;
        /** biến cờ để check mỗi lần chỉ tải về 1 lần  */
        this.status = false;
        /** hàm sort cho các cột */
        this.dateCol = false;
        this.receiptCol = false;
        this.expenseCol = false;
        this.account_nameCol = false;
        this.date[0].setHours(0, 0, 0, 0);
        this.date[1].setHours(23, 59, 59, 59);
        this.dataRestore = this.router.getCurrentNavigation().extras.state;
        this.listEmployee = this.listEmployee.concat(this.vhAuth.getlocalEmployees());
        this.getBranches();
    }
    ngOnInit() {
        //nhớ lại trạng thái
        if (this.dataRestore) {
            this.id_branch_report = this.dataRestore.id_branch_report;
            this.selectedValue = this.dataRestore.selectedValue;
            this.date = this.dataRestore.date;
            this.radioValueInvoice = this.dataRestore.radioValueInvoice;
            this.radioValueAccount = this.dataRestore.radioValueAccount;
            this.radioValueCashier = this.dataRestore.radioValueCashier;
            this.diary = this.dataRestore.diary;
        }
    }
    /**
    * get danh sách chi nhánh khả dụng của nv và gán vào biến branchList
    * @example this.getBranches()
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
        this.getPaymentBankList();
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.branchList = this.vhAlgorithm.searchList(tempVal, this.search_branchList, ['name']);
        else
            this.branchList = this.search_branchList;
    }
    /**
     * nhận từ sk nhấn nút 'Xem' trên giao diện
     * @example this.showReport()
     */
    showReport() {
        this.getData();
    }
    ngAfterViewChecked() {
        if (document.querySelector("#product-list") && document.querySelector("#footer-cashbook") && document.querySelector(".ant-table-thead") && document.querySelector(".product-list-header")) {
            this.heightScroll = document.querySelector("#product-list").clientHeight - document.querySelector(".ant-table-thead").clientHeight - document.querySelector("#footer-cashbook").clientHeight
                - document.querySelector(".product-list-header").clientHeight - 110 + "px";
        }
        this.cdRef.detectChanges();
    }
    init(startTime = new Date(), endTime = new Date()) {
        this.loadStatus = "Drag to sync...";
        startTime.setHours(0, 0, 0, 0);
        endTime.setHours(23, 59, 59, 59);
        return { startTime, endTime, cashbook_first: 0, cashbook_last: 0, list: [], income: 0, expenditure: 0 };
    }
    /**
    * bắt sk khi thay đổi ngày xem báo cáo , kiểm tra hợp lệ và gán vào trường startTime,endTime của cashbook
    * @example this.changeTime(['2023-06-07T01:33:38.033Z','2023-06-07T01:33:38.033Z'])
    */
    changeTime(event) {
        if (new Date(event[1].setHours(0, 0, 0, 0)).getTime() - new Date(event[0].setHours(0, 0, 0, 0)).getTime() <= this.fncService.checkDateReport() * 86000000) {
            this.diary = this.init(event[0], event[1]);
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.lang.translate("The time limit to view is") + " " + this.fncService.checkDateReport() + " " + this.lang.translate("days"));
            this.date = [new Date(event[0]), new Date(event[0].getTime() + this.fncService.checkDateReport() * 86000000)];
            this.diary = this.init(this.date[0], this.date[1]);
        }
    }
    /**
     * get báo cáo nhật kí thu chi để đối soát, gán vào biến diary show ra giao diện
     * @example this.getData()
     */
    getData() {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhQuerySales.getReportIncomeExpenditureDiary(this.diary['startTime'], this.diary['endTime'], this.datafilter['id_wallet'], this.datafilter['id_employee'], [...this.datafilter['bill_type']], this.id_branch_report)
                .then((res) => {
                this.diary['expenditure'] = res['expenditure'];
                this.diary['income'] = res['income'];
                this.diary['cashbook_first'] = res['cashbook_first'];
                this.diary['cashbook_last'] = res['cashbook_last'];
                this.diary['list'] = res.docs.map((item) => {
                    // xử lý các trường trong bill
                    let row = Object.assign(Object.assign({ verify_status_money: false }, item), { receipt: [1, 7, 10, 11, 15, 34, 40, 50].includes(item.bill_type) ? item.payment : 0, expense: [2, 3, 8, 12, 33].includes(item.bill_type) ? item.payment : 0, cashier_name: this.vhAuth.getlocalEmployee(item.id_employee)['name'], account_name: item.payment_type == 1 ? this.lang.translate("Cash") : (this.vhQuerySales.getlocalWallet(item.id_wallet)['name']) });
                    if (!row['id_wallet'])
                        row['id_wallet'] = 'id_cash';
                    if (row['id_wallet'] && (row['payment_type'] == 1))
                        row['id_wallet'] = 'id_cash';
                    if (row['id_customer'])
                        row['customer'] = this.vhQuerySales.getlocalCustomer(item.id_customer);
                    if (row['id_supplier'])
                        row['supplier'] = this.vhQuerySales.getlocalSupplier(item.id_supplier);
                    if (row['id_verifier_money'] && row['verify_date_money'])
                        row['control_info'] =
                            `${this.vhAuth.getlocalEmployee(row['id_verifier_money'])['name']} ${this.lang.translate('has checked on')} ${this.datePipe.transform(row['verify_date_money'], 'dd/MM/yyyy')}`;
                    return row;
                });
            }).catch(err => console.error(err)).finally(() => {
                this.loadStatus = "No data!";
                this.vhComponent.hideLoading(0);
            });
        });
    }
    /**
     * trả về nội dung của bill truyền vào thông qua bill-type
     * @param data: bill được chọn
     * @example let content = this.renderContent(bill)
     */
    renderContent(data) {
        switch (data['bill_type']) {
            case 1:
                return this.lang.translate('Receipts from sales invoices') + " " + " (" + this.lang.translate(data['customer'].name) + ")";
            case 2:
                return this.lang.translate('Expenses for purchase invoices') + " " + " (" + data['supplier'].name + ")";
            case 3:
                return this.lang.translate('Expenses for customer returned invoices') + " " + " (" + this.lang.translate(data['customer'].name) + ")";
            case 7:
            case 8:
                return data['content'];
            case 10:
                return this.lang.translate("Receipts from return supplier invoices") + " " + " (" + data['supplier'].name + ")";
            case 11:
                return data['content'] + " (" + this.lang.translate(data['customer'].name) + ")";
            case 12:
                return data['content'] + " (" + data['supplier'].name + ")";
            case 15:
                return this.lang.translate('Receipts from warranty, repair invoices') + " " + " (" + this.lang.translate(data['customer'].name) + ")";
            case 33: return this.vhQuerySales.getlocalBranch(data.id_branch).name + " " + this.lang.translate('transfers money to') + " " + this.vhQuerySales.getlocalBranch(data.id_branch_receive).name;
            case 34: return this.vhQuerySales.getlocalBranch(data.id_branch).name + " " + this.lang.translate('receive money from') + " " + this.vhQuerySales.getlocalBranch(data.id_branch_send).name;
            case 40:
                return this.lang.translate('Thu hóa đơn bán voucher') + " " + " (" + this.lang.translate(data['customer'].name) + ")";
            case 50:
                return this.lang.translate('Thu hóa đơn bán thẻ trả trước') + " " + " (" + this.lang.translate(data['customer'].name) + ")";
        }
    }
    /**
     * set lại loại bill-type cần get
     * @param valueType : 'all' || 1 : thu || 2: chi
     * @example this.checkTypeBill('all')
     */
    checkTypeBill(valueType) {
        switch (valueType) {
            case 'all':
                this.datafilter['bill_type'] = [1, 2, 3, 7, 8, 10, 11, 12, 15, 33, 34];
                break;
            case '1':
                this.datafilter['bill_type'] = [1, 10, 7, 11, 34];
                break;
            case '2':
                this.datafilter['bill_type'] = [2, 3, 8, 12, 33];
                break;
        }
    }
    /**
     * router về trang dòng tiền
     * @example this.goBack()
     */
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/cashflow']);
    }
    /**
     * mở modal bộ lọc
     * @example this.showModal()
     */
    showModal() {
        this.isVisible = true;
    }
    /**
    * bắt sk nhấn nút ok modal bộ lọc
    * @example this.showModal()
    */
    handleOk() {
        this.isVisible = false;
        this.checkTypeBill(this.radioValueInvoice);
        this.datafilter['id_wallet'] = this.radioValueAccount;
        this.datafilter['id_employee'] = this.radioValueCashier;
        //this.getData();
    }
    /**
    * bắt sk nhấn nút hủy modal bộ lọc
    * @example this.showModal()
    */
    handleCancel() {
        this.isVisible = false;
    }
    ////////////////////////////////////////EXPORT REPORT/////////////////////////////////////////
    /**
   * chuyển dạng date '2023-06-07T01:33:38.033Z' sang string với format '07_06_2023'
   * @param date
   * @returns string date dạng dd_MM_yyyy
   * @example let date =  this.format_date('2023-06-07T01:33:38.033Z')
   */
    format_date(date) {
        return this.datePipe.transform(date, "dd_MM_yyyy");
    }
    /**
    * Xuát ra file .xlxs và tải xuống máy
    * @example this.exportCSV()
    */
    exportCSV() {
        this.status = true;
        let data = [];
        // tên file tải xuống 
        let name = `${this.lang.translate('_diary')}_${this.lang.translate("_from")}_${this.format_date(this.diary['startTime'])}_${this.lang.translate("_to")}_${this.format_date(this.diary['endTime'])}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQuerySales.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}`;
        // dòng đầu tiên của file
        let total = new Object();
        total[this.lang.translate('No.')] = "";
        total[this.lang.translate('Date')] = this.lang.translate('Total');
        total[this.lang.translate('Particulars')] = "";
        total[this.lang.translate('Bill code')] = "";
        total[this.lang.translate('Receipt')] = this.diary.income == null ? 0 : this.diary.income;
        total[this.lang.translate('Expense')] = this.diary.expenditure == null ? 0 : this.diary.expenditure;
        total[this.lang.translate('Cashier')] = "";
        total[this.lang.translate('Account')] = "";
        data.push(total);
        // danh sách dữ liệu cho các dòng tiếp theo
        for (let i in this.diary.list) {
            let item = new Object();
            item[this.lang.translate('No.')] = parseInt(i) + 1;
            item[this.lang.translate('Date')] = this.format_date(this.diary.list[i].date);
            item[this.lang.translate('Particulars')] = this.renderContent(this.diary.list[i]);
            item[this.lang.translate('Bill code')] = (this.diary.list[i].bill_code);
            item[this.lang.translate('Receipt')] = [1, 10, 11, 34].includes(this.diary.list[i].bill_type) ? this.diary.list[i].payment : 0;
            item[this.lang.translate('Expense')] = [2, 3, 12, 33].includes(this.diary.list[i].bill_type) ? this.diary.list[i].payment : 0;
            item[this.lang.translate('Cashier')] = this.diary.list[i].cashier_name;
            item[this.lang.translate('Account')] = this.diary.list[i].account_name;
            data.push(item);
            if (parseInt(i) == this.diary.list.length - 1)
                this.vhAlgorithm.exportXLSX(data, name).then(() => this.status = false).catch(err => this.status = false);
        }
        if (!this.diary.list.length)
            this.vhAlgorithm.exportXLSX(data, name).then(() => this.status = false).catch(err => this.status = false);
    }
    /**Get tk ngân hàng và gán váo biến list_type_payment
     * @example this.getPaymentBankList()
    */
    getPaymentBankList() {
        this.listAccount = [...this.listAccountDefault];
        this.selectedValue = '';
        let all = { _id: 'all', name: this.lang.translate('All') };
        if (this.id_branch_report == 'all') {
            this.listAccount = [all];
            this.selectedValue = 'all';
        }
        else {
            let listPayment = this.vhQuerySales.getlocalWallets().filter(item => item._id != 'id_cash' && item.id_branch == this.id_branch_report);
            for (let i in listPayment) {
                this.listAccount.push({
                    _id: listPayment[i]._id,
                    name: listPayment[i].name
                });
            }
            this.listAccount.unshift(all);
        }
    }
    /**
     * mở modal xác nhận đói soát bill
     * @example this.checkedBill(true, bill)
     */
    checkedBill(checked, bill) {
        this.nzModal.confirm({
            nzTitle: `<b>${this.lang.translate("Confirm")}?</b>`,
            nzContent: `<i>${checked ? this.lang.translate("Do you want to check this invoice") + "?" : this.lang.translate("Do you want to cancel this invoice check") + "?"}</i>`,
            nzOnOk: () => {
                this.updateBill(bill);
            },
            nzOnCancel: () => {
                bill.verify_status_money = !checked;
            }
        });
    }
    /**cập nhật đối soát lên DB
     * @param bill : bill đã chọn
     * @example this.updateBill(bill)
     */
    updateBill(bill) {
        let value = {
            verify_status_money: bill.verify_status_money
        };
        if (bill.verify_status_money) {
            value['id_verifier_money'] = this.vhAuth.getUser()._id;
            value['verify_date_money'] = new Date().toISOString();
        }
        this.vhQuerySales.updateBill(bill._id, value).then(() => {
            if (bill.verify_status_money)
                bill['control_info'] =
                    `${this.vhAuth.getlocalEmployee(value['id_verifier_money'])['name']} ${this.lang.translate('checked in')} ${this.datePipe.transform(value['verify_date_money'], 'dd/MM/yyyy')}`;
        });
    }
    /**xem chi tiết hóa đơn
     * @param item : bill đã chọn
     * @example this.gotoDetail(bill)
    */
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
            case 40: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_sales_voucher_sales_voucher_component__WEBPACK_IMPORTED_MODULE_9__.SalesVoucherComponent, { id_bill: item._id }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 50: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_sales_payment_card_sales_payment_card_component__WEBPACK_IMPORTED_MODULE_10__.SalesPaymentCardComponent, { id_bill: item._id }, false, false, 'bill-detail')
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
                    return this.vhComponent.showModal(src_app_sales_components_bill_detail_destroy_product_destroy_product_component__WEBPACK_IMPORTED_MODULE_8__.DestroyProductComponent, { id_bill: item._id }, false, false, 'bill-detail')
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
    /** Hàm thực hiện sắp xếp theo tên trường cần sort
    *
    * @param colName       // tên cột muôn sắp xếp
    * @example this.sortTable('name')
    */
    sortTable(colName) {
        switch (colName) {
            case 'date':
                if (this.dateCol) {
                    this.diary.list = this.vhAlgorithm.sortDatebyASC([...this.diary.list], colName);
                }
                else {
                    this.diary.list = this.vhAlgorithm.sortDatebyDESC([...this.diary.list], colName);
                }
                break;
            case 'receipt':
                if (this.receiptCol) {
                    this.diary.list = this.vhAlgorithm.sortNumberbyASC([...this.diary.list], colName);
                }
                else {
                    this.diary.list = this.vhAlgorithm.sortNumberbyDESC([...this.diary.list], colName);
                }
                break;
            case 'expense':
                if (this.expenseCol) {
                    this.diary.list = this.vhAlgorithm.sortNumberbyASC([...this.diary.list], colName);
                }
                else {
                    this.diary.list = this.vhAlgorithm.sortNumberbyDESC([...this.diary.list], colName);
                }
                break;
            case 'account_name':
                if (this.account_nameCol) {
                    this.diary.list = this.vhAlgorithm.sortVietnamesebyASC([...this.diary.list], colName);
                }
                else {
                    this.diary.list = this.vhAlgorithm.sortVietnamesebyDESC([...this.diary.list], colName);
                }
                break;
        }
    }
}
MoneyControlComponent.ɵfac = function MoneyControlComponent_Factory(t) { return new (t || MoneyControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_11__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_12__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_13__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalService)); };
MoneyControlComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: MoneyControlComponent, selectors: [["app-money-control"]], decls: 100, vars: 78, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "product-list", 1, "height-layout"], ["nz-row", "", 1, "product-list-header"], ["nz-col", "", 1, "title", "left-all-content", 3, "nzSpan"], ["nz-col", "", "nzSpan", "5", "class", "center-all-content", 4, "ngIf"], ["nz-col", "", 3, "nzSpan"], [1, "center-all-content", "date-picker-cus"], ["nzFormat", "dd/MM/yyyy", 3, "ngModel", "ngModelChange"], ["nz-col", "", 1, "right-all-content", 3, "nzSpan"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "disabled", "click"], ["nz-icon", "", "nzType", "filter", "nzTheme", "outline"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "disabled", "click"], ["src", "assets/icon/management/view.svg"], ["nz-row", "", 2, "padding-top", "20px", "height", "85%"], ["nzShowPagination", "", "nzShowSizeChanger", "", 2, "width", "100%", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzNoResult", "nzData"], ["diaryData", ""], ["nzWidth", "5%"], ["nzWidth", "15%", 1, "medium-size", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "20%", 1, "medium-size"], ["nzWidth", "10%", 1, "medium-size"], ["nzWidth", "15%", "nzAlign", "right", 1, "medium-size", 2, "cursor", "pointer", 3, "click"], ["nzWidth", "10%", "nzAlign", "left", 1, "medium-size", 2, "cursor", "pointer", 3, "click"], ["nzWidth", "10%", "nzAlign", "center", 1, "medium-size"], [1, "medium-size", 2, "color", "var(--ion-color-vh-green)"], ["nzAlign", "right", 1, "medium-size", 2, "color", "var(--ion-color-vh-green)"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["nz-row", "", "id", "footer-cashbook", 1, "bg-footer"], ["nz-col", "", "nzSpan", "12", 1, "center-left", "medium-size"], [2, "color", "var(--ion-color-vh-green)"], [3, "nzVisible", "nzTitle", "nzBodyStyle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nz-col", "", "nzSpan", "5", 1, "center-all-content"], ["nzShowSearch", "", "nzBorderless", "", 3, "nzServerSearch", "nzPlaceHolder", "ngModel", "nzOnSearch", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], [2, "cursor", "pointer", 3, "click"], [1, "medium-size"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click"], ["nzAlign", "right", 1, "medium-size"], ["nzAlign", "center", 1, "medium-size"], ["nzTooltipPlacement", "top", "nz-button", "", "nz-tooltip", "", "nz-checkbox", "", 3, "ngModel", "nzTooltipPlacement", "nzTooltipColor", "nzTooltipTitle", "ngModelChange"], [3, "nzHeader"], [3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-radio", "", 3, "nzValue"]], template: function MoneyControlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MoneyControlComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, MoneyControlComponent_div_10_Template, 4, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "nz-range-picker", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function MoneyControlComponent_Template_nz_range_picker_ngModelChange_13_listener($event) { return ctx.date = $event; })("ngModelChange", function MoneyControlComponent_Template_nz_range_picker_ngModelChange_13_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MoneyControlComponent_Template_button_click_16_listener() { return ctx.showModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](17, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MoneyControlComponent_Template_button_click_21_listener() { return ctx.exportCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MoneyControlComponent_Template_button_click_26_listener() { return ctx.showReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "nz-table", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](34, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MoneyControlComponent_Template_th_click_39_listener() { ctx.dateCol = !ctx.dateCol; return ctx.sortTable("date"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](43, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](44, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](52, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MoneyControlComponent_Template_th_click_52_listener() { ctx.receiptCol = !ctx.receiptCol; return ctx.sortTable("receipt"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](56, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MoneyControlComponent_Template_th_click_57_listener() { ctx.expenseCol = !ctx.expenseCol; return ctx.sortTable("expense"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](61, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MoneyControlComponent_Template_th_click_62_listener() { ctx.account_nameCol = !ctx.account_nameCol; return ctx.sortTable("account_name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](66, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](67, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](72, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](75, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](79, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](83, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](84, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](85, MoneyControlComponent_tr_85_Template, 19, 14, "tr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](86, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "b", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "b", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](97, "nz-modal", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzVisibleChange", function MoneyControlComponent_Template_nz_modal_nzVisibleChange_97_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function MoneyControlComponent_Template_nz_modal_nzOnCancel_97_listener() { return ctx.handleCancel(); })("nzOnOk", function MoneyControlComponent_Template_nz_modal_nzOnOk_97_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](99, MoneyControlComponent_ng_container_99_Template, 14, 15, "ng-container", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 40, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 4 : 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 42, "Revenue and expenditure control"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.useBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 7 : 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 8 : 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.id_branch_report.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](19, 44, "Filter"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.diary.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](24, 46, "Download"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.id_branch_report.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](29, 48, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](33, 50, "No data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](74, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](75, _c1, ctx.heightScroll))("nzData", ctx.diary.list);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](42, 52, "Date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", ctx.dateCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](47, 54, "Content"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](51, 56, "Invoice code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](55, 58, "Receipt"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", ctx.receiptCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](60, 60, "Expense"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", ctx.expenseCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](65, 62, "Account"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzType", ctx.account_nameCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](70, 64, "For control"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](77, 66, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit_symbol(!ctx.diary ? 0 : ctx.diary.income), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit_symbol(!ctx.diary ? 0 : ctx.diary.expenditure), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _r1.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](89, 68, "Receipt total"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0 ", ctx.vhAlgorithm.vhcurrencyunit_symbol(!ctx.diary.income ? 0 : ctx.diary.income), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](94, 70, "Expense total"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("\u00A0 ", ctx.vhAlgorithm.vhcurrencyunit_symbol(!ctx.diary.expenditure ? 0 : ctx.diary.expenditure), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](98, 72, "Please select the filter"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](77, _c2));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_22__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__.NzRangePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_25__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_26__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_27__.IonIcon, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_28__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_28__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_28__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_28__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_28__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_28__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_28__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_29__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_29__.NzOptionComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_30__.NzTooltipDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_31__.NzCheckboxComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_32__.NzCollapseComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_32__.NzCollapsePanelComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_33__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_33__.NzRadioComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .product-list-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 0.9rem;\n  margin-right: 5px;\n  border: 1px solid var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10%;\n  margin: auto;\n  position: sticky;\n  z-index: 2;\n  background: #f5f5f5 0% 0% no-repeat padding-box;\n  border-radius: 10px;\n  opacity: 1;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%]   .center-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  width: 95% !important;\n}\n.date-picker-cus[_ngcontent-%COMP%] {\n  width: 97%;\n}\n.date-picker-cus[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray) !important;\n}\n[nz-radio][_ngcontent-%COMP%] {\n  display: block;\n  height: 32px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbmV5LWNvbnRyb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFFQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFFUjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7QUFFUjtBQUFJO0VBQ0ksaUVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFFUjtBQURRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUdaO0FBQUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdaO0FBRUE7O0VBRUksZ0NBQUE7QUFDSjtBQUVBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FBQ0o7QUFFQTtFQUNJLFVBQUE7QUFDSjtBQUFJO0VBQ0ksMENBQUE7QUFFUjtBQUdBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFKIiwiZmlsZSI6Im1vbmV5LWNvbnRyb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3QtbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1hZGQge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIH1cclxuICAgIC5idG4tdmlldyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJnLWZvb3RlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLmNlbnRlci1sZWZ0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFudC1idG46Zm9jdXMsXHJcbi5hbnQtYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcblxyXG4uYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGF0ZS1waWNrZXItY3VzIHtcclxuICAgIHdpZHRoOiA5NyU7XHJcbiAgICBpIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAvL2JvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbn1cclxuXHJcbltuei1yYWRpb10ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 45611:
/*!**********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/cashflow/money-control/money-control.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoneyControlModule": () => (/* binding */ MoneyControlModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _money_control_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./money-control.component */ 57229);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_sales_components_bill_detail_bill_detail_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/bill-detail/bill-detail.module */ 58105);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);











const routes = [
    {
        path: "",
        component: _money_control_component__WEBPACK_IMPORTED_MODULE_0__.MoneyControlComponent
    },
];
class MoneyControlModule {
}
MoneyControlModule.ɵfac = function MoneyControlModule_Factory(t) { return new (t || MoneyControlModule)(); };
MoneyControlModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MoneyControlModule });
MoneyControlModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            src_app_sales_components_bill_detail_bill_detail_module__WEBPACK_IMPORTED_MODULE_2__.BillDetailModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MoneyControlModule, { declarations: [_money_control_component__WEBPACK_IMPORTED_MODULE_0__.MoneyControlComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        src_app_sales_components_bill_detail_bill_detail_module__WEBPACK_IMPORTED_MODULE_2__.BillDetailModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_cashflow_money-control_money-control_module_ts.js.map