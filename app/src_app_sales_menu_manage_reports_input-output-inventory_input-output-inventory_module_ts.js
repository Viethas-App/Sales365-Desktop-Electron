"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_reports_input-output-inventory_input-output-inventory_module_ts"],{

/***/ 89658:
/*!*********************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/reports/input-output-inventory/detail/detail.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

























const _c0 = function (a0) { return { display: a0 }; };
function DetailComponent_nz_table_15_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](4, _c0, !ctx_r3.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 2, "Unit price before tax"));
} }
function DetailComponent_nz_table_15_tr_81_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", data_r5.lots[0].lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](7, 3, data_r5.lots[0].date_mfg, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](8, 6, data_r5.lots[0].date_exp, "dd/MM/yyyy"), "");
} }
function DetailComponent_nz_table_15_tr_81_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DetailComponent_nz_table_15_tr_81_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10); const data_r5 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r9.goToDetail(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, DetailComponent_nz_table_15_tr_81_ng_container_8_Template, 9, 9, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r5.bill_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](5, 16, data_r5.date, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", data_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", data_r5.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r5.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](19, _c0, !ctx_r4.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit(data_r5.price_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit(data_r5.price_atax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r5.type == "input" ? data_r5.quantity : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](21, _c0, !ctx_r4.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit(data_r5.type == "input" ? data_r5.payment_btax : 0), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.vhAlgorithm.vhcurrencyunit(data_r5.type == "input" ? data_r5.payment_atax : 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r5.type == "output" ? data_r5.quantity : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](23, _c0, !ctx_r4.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit(data_r5.type == "output" ? data_r5.payment_btax : 0), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r4.vhAlgorithm.vhcurrencyunit(data_r5.type == "output" ? data_r5.payment_atax : 0));
} }
const _c1 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c2 = function (a0) { return { y: a0 }; };
function DetailComponent_nz_table_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nz-table", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, DetailComponent_nz_table_15_th_21_Template, 4, 6, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](52, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](61, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](62, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](63, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](67, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](73, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](75, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](79, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](81, DetailComponent_nz_table_15_tr_81_Template, 27, 25, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 35, "No data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](65, _c1))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](66, _c2, ctx_r0.heightScroll))("nzData", ctx_r0.inOutStockDetail.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](8, 37, "Invoice code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](12, 39, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](16, 41, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](20, 43, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.reportConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzWidth", !ctx_r0.reportConfig ? "14%" : "7%");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](25, 45, "Unit price after tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("colspan", !ctx_r0.reportConfig ? "2" : "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](29, 47, "Input"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("colspan", !ctx_r0.reportConfig ? "2" : "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](33, 49, "Output"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](38, 51, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](68, _c0, !ctx_r0.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](42, 53, "Amount before tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](46, 55, "Amount after tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](50, 57, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](70, _c0, !ctx_r0.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](54, 59, "Amount before tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](58, 61, "Amount after tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](65, 63, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](72, _c0, !ctx_r0.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.inOutStockDetail.inquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](74, _c0, !ctx_r0.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.inOutStockDetail.cost_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.inOutStockDetail.cost_atax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.inOutStockDetail.outquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](76, _c0, !ctx_r0.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.inOutStockDetail.revenue_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.inOutStockDetail.revenue_atax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _r2.data);
} }
function DetailComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 1, "No data"));
} }
class DetailComponent {
    constructor(router, vhQuerySales, cdRef, vhAlgorithm, languageService, datePipe, vhComponent, vhAuth) {
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.cdRef = cdRef;
        this.vhAlgorithm = vhAlgorithm;
        this.languageService = languageService;
        this.datePipe = datePipe;
        this.vhComponent = vhComponent;
        this.vhAuth = vhAuth;
        this.inOutStockDetail = this.init();
        this.reportConfig = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_input_output_inventory;
        this.status = false;
        let data = this.router.getCurrentNavigation().extras.state;
        if (data) {
            this.stateObj = data.stateObj;
            this.detail = data.detail;
            if (data.inOutStockDetail)
                this.inOutStockDetail = data.inOutStockDetail;
            else
                this.doRefresh();
        }
    }
    init() {
        return { outquantity: 0, inquantity: 0, cost_atax: 0, cost_btax: 0, revenue_atax: 0, revenue_btax: 0, list: [] };
    }
    ngAfterViewChecked() {
        if (document.querySelector(".height-layout") && document.querySelector(".height-header") && document.querySelector(".ant-table-thead")) {
            this.heightScroll = (document.querySelector(".height-layout").clientHeight -
                document.querySelector(".height-header").clientHeight -
                document.querySelector(".ant-table-thead").clientHeight) - 90 + "px";
        }
        this.cdRef.detectChanges();
    }
    /**
     * xem báo cáo
     * @example this.doRefresh()
     */
    doRefresh() {
        this.vhComponent.showLoadingNotDuration("", "transparent-loading").then(() => {
            this.getInOutStockDetail()
                .then(res => {
                this.inOutStockDetail['list'] = res['docs'];
                // .map(item => {
                //   let element = {
                //     id_bill: item['id_bill'],
                //     name: item['name'],
                //     date: item['date'],
                //     bill_type: item['bill_type'],
                //     bill_code: item['bill_code'],
                //     price_atax: item['price_atax'],
                //     price_btax: item['price_btax'],
                //     unit: item['unit'],
                //     lots: item['lots']
                //   }
                //   if ([2, 3, 9, 31,39].includes(item.bill_type)) {
                //     element['inquantity'] = item.quantity
                //     element['outquantity'] = 0
                //     element['cost_btax'] = item.payment_btax
                //     element['cost_atax'] = item.payment_atax
                //     element['revenue_btax'] = 0
                //     element['revenue_atax'] = 0
                //   } else {
                //     element['inquantity'] = 0
                //     element['outquantity'] = item.quantity
                //     element['revenue_btax'] = item.payment_btax
                //     element['revenue_atax'] = item.payment_atax
                //     element['cost_btax'] = 0
                //     element['cost_atax'] = 0
                //   }
                //   return element
                // })
                this.inOutStockDetail['outquantity'] = res['outquantity'];
                this.inOutStockDetail['inquantity'] = res['inquantity'];
                this.inOutStockDetail['cost_atax'] = res['cost_atax'];
                this.inOutStockDetail['cost_btax'] = res['cost_btax'];
                this.inOutStockDetail['revenue_atax'] = res['revenue_atax'];
                this.inOutStockDetail['revenue_btax'] = res['revenue_btax'];
            }).finally(() => this.vhComponent.hideLoading(0));
        });
    }
    /**
     * get dữ liệu báo cáo
     * @example this.getInOutStockDetail()
     */
    getInOutStockDetail() {
        return new Promise((resolve, rejects) => {
            if (this.detail['type_report'] !== 0) {
                this.vhQuerySales.getReportInputOutputInventory_Detail_byTime_byIDProduct(this.stateObj.inOutStock.startTime, this.stateObj.inOutStock.endTime, this.detail.id_subproduct ? this.detail.id_subproduct : this.detail.id_product, this.stateObj.id_branch_report)
                    .then(res => resolve(res)).catch(err => rejects(err));
            }
            else {
                this.vhQuerySales.getReportInputOutput_Detail_byTime_byIDProduct(this.stateObj.inOutStock.startTime, this.stateObj.inOutStock.endTime, this.detail.id_subproduct ? this.detail.id_subproduct : this.detail.id_product, this.stateObj.id_branch_report)
                    .then(res => resolve(res)).catch(err => rejects(err));
            }
        });
    }
    /**
     * mở modal component xem thông tin bill của từng loại bill-type tương ứng
     * @param item
     * @example this.goToDetail(bill_selected)
     */
    goToDetail(item) {
        switch (item.bill_type) {
            case 1: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_sales_sales_component__WEBPACK_IMPORTED_MODULE_0__.SalesComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 2: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_6__.PurchaseComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 3: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_customer_return_customer_return_component__WEBPACK_IMPORTED_MODULE_2__.CustomerReturnComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 9: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_openning_stock_openning_stock_component__WEBPACK_IMPORTED_MODULE_3__.OpenningStockComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 10: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_return_supplier_return_supplier_component__WEBPACK_IMPORTED_MODULE_7__.ReturnSupplierComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 15: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_warranty_warranty_component__WEBPACK_IMPORTED_MODULE_1__.WarrantyComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 30: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_delivery_goods_delivery_goods_component__WEBPACK_IMPORTED_MODULE_4__.DeliveryGoodsComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 31: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_recieve_goods_recieve_goods_component__WEBPACK_IMPORTED_MODULE_5__.RecieveGoodsComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 41: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_exchange_voucher_exchange_voucher_component__WEBPACK_IMPORTED_MODULE_9__.ExchangeVoucherComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 51: {
                return this.vhComponent.showModal(src_app_sales_components_bill_detail_exchange_payment_card_exchange_payment_card_component__WEBPACK_IMPORTED_MODULE_8__.ExchangePaymentCardComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                    .then(modal => {
                    modal.onWillDismiss().then(dataReturn => { });
                });
            }
            case 38: {
                if (!item.id_bill) {
                    this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Xuất hủy hàng hóa từ cân bằng kho"));
                    break;
                }
                else {
                    return this.vhComponent.showModal(src_app_sales_components_bill_detail_destroy_product_destroy_product_component__WEBPACK_IMPORTED_MODULE_10__.DestroyProductComponent, { id_bill: item.id_bill }, false, false, 'bill-detail')
                        .then(modal => {
                        modal.onWillDismiss().then(dataReturn => { });
                    });
                }
            }
            case 39: {
                this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Nhập bù hàng hóa từ cân bằng kho"));
                break;
            }
        }
        // setTimeout(() => {
        //   let state: any = { id: bill.id_bill, bill_type: bill.bill_type, stateObj: this.stateObj, detail: this.detail, inOutStockDetail: this.inOutStockDetail }
        //   if (bill.bill_type == 9) this.router.navigate([`/dashboard/manage/reports/input-output-inventory/detail-opening-stock`], { state: state })
        //   else if (bill.bill_type == 30 || bill.bill_type == 31) this.router.navigate([`/dashboard/manage/reports/input-output-inventory/detail-bill-delivery-receive`], { state: state })
        //   else this.router.navigate([`/dashboard/manage/reports/input-output-inventory/detail-bill${bill.bill_type == 15 ? '-warranty' : ([1, 3].includes(bill.bill_type) ? '-export' : '-import')}`], { state: state })
        // }, 100)
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/reports/input-output-inventory'], {
            state: {
                stateObj: this.stateObj
            }
        });
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
     *
     * @param date
     * @returns string
     * @example let date = this.format_date('2023-06-27T01:10:34.396Z') => output '27_06_2023 08:11'
     */
    format_full_date(date) {
        return this.datePipe.transform(date, "dd_MM_yyyy HH:mm");
    }
    /**
     * xuất dữ liệu ra file excel và tải về
     */
    export() {
        this.status = true;
        // xử lý tạo tên file
        let data = new Array();
        let date = this.languageService.translate("_from") + "_" +
            this.format_date(this.stateObj.inOutStock['startTime']) + "_" +
            this.languageService.translate("_to") + "_" +
            this.format_date(this.stateObj.inOutStock['endTime']);
        let name = `${this.languageService.translate(this.detail.type_report == 1 ? "_input_output_inventory_report" : "_input_output_items_report")}_${this.vhAlgorithm.changeAlias(this.detail.name).replace(/\s/g, "_")}_${date}_${this.stateObj.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQuerySales.getlocalBranch(this.stateObj.id_branch_report).name).replace(/\s/g, "_")}`;
        // thêm dòng đầu tiên 
        let title = new Object();
        title[this.languageService.translate("Invoice code")] = "";
        title[this.languageService.translate("Date")] = "";
        title[this.languageService.translate("Product name")] = "";
        title[this.languageService.translate("Unit")] = "";
        title[this.languageService.translate("Unit price before tax")] = "";
        title[this.languageService.translate("Unit price after tax")] = "";
        title[this.languageService.translate("Input")] = this.languageService.translate("Quantity");
        title["  "] = this.languageService.translate("Amount before tax");
        title["   "] = this.languageService.translate("Amount after tax");
        title[this.languageService.translate("Output")] = this.languageService.translate("Quantity");
        title["    "] = this.languageService.translate("Amount before tax");
        title["     "] = this.languageService.translate("Amount after tax");
        data.push(title);
        // dòng dữ liệu tổng
        let total = new Object();
        total[this.languageService.translate("Invoice code")] = "";
        total[this.languageService.translate("Date")] = "";
        total[this.languageService.translate("Product name")] = this.languageService.translate("Total");
        total[this.languageService.translate("Unit")] = "";
        title[this.languageService.translate("Unit price before tax")] = "";
        title[this.languageService.translate("Unit price after tax")] = "";
        total[this.languageService.translate("Input")] = this.inOutStockDetail.inquantity;
        total["  "] = this.inOutStockDetail.cost_btax;
        total["   "] = this.inOutStockDetail.cost_atax;
        total[this.languageService.translate("Output")] = this.inOutStockDetail.outquantity;
        total["    "] = this.inOutStockDetail.revenue_btax;
        total["     "] = this.inOutStockDetail.revenue_atax;
        data.push(total);
        // dữ liệu mảng
        for (let _rows of this.inOutStockDetail.list) {
            let item = new Object();
            item[this.languageService.translate("Invoice code")] = _rows.bill_code;
            item[this.languageService.translate("Date")] = this.format_full_date(_rows.date);
            item[this.languageService.translate("Product name")] = _rows.lots ? _rows.name + ' - ' + _rows.lots[0].lot_number : _rows.name;
            item[this.languageService.translate("Unit")] = _rows.unit;
            item[this.languageService.translate("Unit price before tax")] = _rows.price_btax;
            item[this.languageService.translate("Unit price after tax")] = _rows.price_atax;
            item[this.languageService.translate("Input")] = _rows.type == 'input' ? _rows.quantity : 0;
            item["  "] = _rows.type == 'input' ? _rows.payment_btax : 0;
            item["   "] = _rows.type == 'input' ? _rows.payment_atax : 0;
            item[this.languageService.translate("Output")] = _rows.type == 'output' ? _rows.quantity : 0;
            item["    "] = _rows.type == 'output' ? _rows.payment_btax : 0;
            item["     "] = _rows.type == 'output' ? _rows.payment_atax : 0;
            data.push(item);
        }
        this.vhAlgorithm.exportXLSX(data, name).then(() => this.status = false).catch(err => this.status = false);
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_11__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_12__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhAuth)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 17, vars: 9, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "height-layout"], ["nz-row", "", 1, "height-header"], ["nz-col", "", "nzSpan", "21", 1, "title", "max-width-overflow"], ["nz-col", "", "nzSpan", "3", 1, "title", "center-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", 3, "click"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], [2, "padding-top", "8px"], ["nzBordered", "", "nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData", "nzNoResult", 4, "ngIf"], ["nz-row", "", "class", "full-height", 4, "ngIf"], ["nzBordered", "", "nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData", "nzNoResult"], ["detailStock", ""], ["nzLeft", "", "nzWidth", "7%", "rowspan", "2", 1, "center"], ["nzLeft", "", "nzWidth", "8%", "rowspan", "2", 1, "center"], ["nzLeft", "", "nzWidth", "15%", "rowspan", "2", 1, "left"], ["nzWidth", "5%", "rowspan", "2", 1, "left"], ["nzWidth", "7%", "rowspan", "2", "class", "center", 3, "ngStyle", 4, "ngIf"], ["rowspan", "2", 1, "center", 3, "nzWidth"], [3, "colspan"], [1, "center"], [1, "right", 3, "ngStyle"], ["nzLeft", ""], ["nzLeft", "", 2, "color", "var(--ion-color-vh-green)"], [3, "ngStyle"], [1, "center", 2, "color", "var(--ion-color-vh-green)"], [1, "center", 2, "color", "var(--ion-color-vh-green)", 3, "ngStyle"], [1, "right", 2, "color", "var(--ion-color-vh-green)"], [1, "right", 2, "color", "var(--ion-color-vh-green)", 3, "ngStyle"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["nzWidth", "7%", "rowspan", "2", 1, "center", 3, "ngStyle"], [2, "cursor", "pointer", 3, "click"], ["nzLeft", "", 1, "center"], ["nzLeft", "", 1, "left"], [4, "ngIf"], [1, "left"], [1, "right"], ["nz-row", "", 1, "full-height"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function DetailComponent_Template_button_click_10_listener() { return ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, DetailComponent_nz_table_15_Template, 82, 78, "nz-table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, DetailComponent_div_16_Template, 5, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 5, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.detail.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](13, 7, "Download"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.inOutStockDetail.list.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.inOutStockDetail.list.length == 0);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_20__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzCellFixedDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_23__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.size-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n  cursor: pointer;\n}\n@media only screen and (max-width: 1200px) {\n  .btn-data[_ngcontent-%COMP%] {\n    font-size: 0.8rem !important;\n  }\n}\nnz-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], nz-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\nnz-table[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  text-align: left;\n}\nnz-table[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  text-align: right;\n}\nnz-table[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNFLGVBQUE7QUFFTjtBQUNFO0VBQ0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQUdOO0FBQ0U7O0VBRUUsZ0NBQUE7QUFFSjtBQUFFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQUdKO0FBREU7RUFDRSw0QkFBQTtFQUNBLGVBQUE7QUFJSjtBQUZFO0VBQ0U7SUFDRSw0QkFBQTtFQUtKO0FBQ0Y7QUFGSTs7RUFFRSx1QkFBQTtBQUlOO0FBRkk7RUFDRSxnQkFBQTtBQUlOO0FBRkk7RUFDRSxpQkFBQTtBQUlOO0FBRkk7RUFDRSxrQkFBQTtBQUlOIiwiZmlsZSI6ImRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBuei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5hbnQtYnRuOmZvY3VzLFxyXG4gIC5hbnQtYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gIH1cclxuICAuYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgLnNpemUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmJ0bi1kYXRhIHtcclxuICAgICAgZm9udC1zaXplOiAwLjhyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgbnotdGFibGUge1xyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmxlZnQge1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuY2VudGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 31737:
/*!******************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/reports/input-output-inventory/input-output-inventory.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputOutputInventoryComponent": () => (/* binding */ InputOutputInventoryComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function InputOutputInventoryComponent_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 21);
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", option_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzValue", option_r6._id);
} }
function InputOutputInventoryComponent_div_15_nz_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 2, option_r8.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzValue", option_r8._id);
} }
function InputOutputInventoryComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nz-select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnSearch", function InputOutputInventoryComponent_div_15_Template_nz_select_nzOnSearch_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.search($event); })("ngModelChange", function InputOutputInventoryComponent_div_15_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.setIdBranch($event); })("ngModelChange", function InputOutputInventoryComponent_div_15_Template_nz_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r12.id_branch_report = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, InputOutputInventoryComponent_div_15_nz_option_3_Template, 2, 4, "nz-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 4, "Select branch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzServerSearch", true)("ngModel", ctx_r1.id_branch_report);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.branchList);
} }
function InputOutputInventoryComponent_nz_table_31_ng_container_75_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_31_ng_container_75_i_5_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; $event.stopPropagation(); return data_r15.expand = !data_r15.expand; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", data_r15.expand ? "minus" : "plus");
} }
const _c0 = function (a0) { return { display: a0 }; };
function InputOutputInventoryComponent_nz_table_31_ng_container_75_ng_container_23_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 12, "Lot number"), ": ", item_r24.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 14, item_r24.date_mfg, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 17, item_r24.date_exp, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.inquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c0, !ctx_r23.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r23.vhAlgorithm.vhcurrencyunit(item_r24.cost_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r23.vhAlgorithm.vhcurrencyunit(item_r24.cost_atax));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r24.outquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c0, !ctx_r23.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r23.vhAlgorithm.vhcurrencyunit(item_r24.revenue_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r23.vhAlgorithm.vhcurrencyunit(item_r24.revenue_atax));
} }
function InputOutputInventoryComponent_nz_table_31_ng_container_75_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InputOutputInventoryComponent_nz_table_31_ng_container_75_ng_container_23_tr_1_Template, 21, 24, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", data_r15.lots);
} }
function InputOutputInventoryComponent_nz_table_31_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_31_ng_container_75_Template_tr_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const data_r15 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r26.goToDetail(data_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputOutputInventoryComponent_nz_table_31_ng_container_75_i_5_Template, 1, 1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, InputOutputInventoryComponent_nz_table_31_ng_container_75_ng_container_23_Template, 2, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r15.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r15.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Barcode : ", data_r15.barcode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r15.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r15.inquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, !ctx_r14.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r14.vhAlgorithm.vhcurrencyunit(data_r15.cost_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r14.vhAlgorithm.vhcurrencyunit(data_r15.cost_atax));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r15.outquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c0, !ctx_r14.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r14.vhAlgorithm.vhcurrencyunit(data_r15.revenue_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r14.vhAlgorithm.vhcurrencyunit(data_r15.revenue_atax));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r15.expand);
} }
const _c1 = function (a0) { return { y: a0, x: "0" }; };
const _c2 = function () { return [20, 30, 40, 50, 100, 200]; };
function InputOutputInventoryComponent_nz_table_31_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_31_Template_th_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r28.statusName = !ctx_r28.statusName; return ctx_r28.sortName(ctx_r28.statusName, "name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_31_Template_th_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r30.statusInquantity = !ctx_r30.statusInquantity; return ctx_r30.sort(ctx_r30.statusInquantity, "inquantity"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_31_Template_th_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r31.statusBtaxIn = !ctx_r31.statusBtaxIn; return ctx_r31.sort(ctx_r31.statusBtaxIn, "cost_btax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_31_Template_th_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r32.statusAtaxIn = !ctx_r32.statusAtaxIn; return ctx_r32.sort(ctx_r32.statusAtaxIn, "cost_atax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_31_Template_th_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r33.statusOutquantity = !ctx_r33.statusOutquantity; return ctx_r33.sort(ctx_r33.statusOutquantity, "outquantity"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_31_Template_th_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r34.statusAtaxOut = !ctx_r34.statusAtaxOut; return ctx_r34.sort(ctx_r34.statusAtaxOut, "revenue_btax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](49, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_31_Template_th_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r35.statusBtaxOut = !ctx_r35.statusBtaxOut; return ctx_r35.sort(ctx_r35.statusBtaxOut, "revenue_atax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](75, InputOutputInventoryComponent_nz_table_31_ng_container_75_Template, 24, 18, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzPageSize", 20)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](60, _c1, ctx_r2.heightScroll))("nzData", ctx_r2.inOutStock1.list)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](62, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 36, "No."));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 38, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r2.statusName == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 40, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", !ctx_r2.reportConfig ? "2" : "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 42, "Purchased in period"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", !ctx_r2.reportConfig ? "2" : "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 44, "Issued in period"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 46, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r2.statusInquantity == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](63, _c0, !ctx_r2.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 48, "Amount before tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r2.statusBtaxIn == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](39, 50, "Amount after tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r2.statusAtaxIn == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](44, 52, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r2.statusOutquantity == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](65, _c0, !ctx_r2.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](49, 54, "Amount before tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r2.statusAtaxOut == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](54, 56, "Amount after tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r2.statusBtaxOut == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](61, 58, "Total"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.inOutStock1.num_total_in, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](67, _c0, !ctx_r2.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.vhAlgorithm.vhcurrencyunit_symbol(ctx_r2.inOutStock1.total_in_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.vhAlgorithm.vhcurrencyunit_symbol(ctx_r2.inOutStock1.total_in_atax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.inOutStock1.num_total_out, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](69, _c0, !ctx_r2.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.vhAlgorithm.vhcurrencyunit_symbol(ctx_r2.inOutStock1.total_out_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.vhAlgorithm.vhcurrencyunit_symbol(ctx_r2.inOutStock1.total_out_atax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r13.data);
} }
function InputOutputInventoryComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "No data"));
} }
function InputOutputInventoryComponent_nz_table_35_ng_container_125_i_5_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_ng_container_125_i_5_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r44); const data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; $event.stopPropagation(); return data_r38.expand = !data_r38.expand; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", data_r38.expand ? "minus" : "plus");
} }
function InputOutputInventoryComponent_nz_table_35_ng_container_125_ng_container_35_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r47 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 20, "Lot number"), ": ", item_r47.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 22, item_r47.date_mfg, "dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 25, item_r47.date_exp, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r47.stock_first);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c0, !ctx_r46.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r46.vhAlgorithm.vhcurrencyunit(item_r47.first.cost_stock_first_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r46.vhAlgorithm.vhcurrencyunit(item_r47.first.cost_stock_first_atax));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r47.inquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c0, !ctx_r46.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r46.vhAlgorithm.vhcurrencyunit(item_r47.cost_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r46.vhAlgorithm.vhcurrencyunit(item_r47.cost_atax));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r47.outquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](32, _c0, !ctx_r46.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r46.vhAlgorithm.vhcurrencyunit(item_r47.revenue_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r46.vhAlgorithm.vhcurrencyunit(item_r47.revenue_atax));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r47.stock_last);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](34, _c0, !ctx_r46.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r46.vhAlgorithm.vhcurrencyunit(item_r47.cost_stock_last_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r46.vhAlgorithm.vhcurrencyunit(item_r47.cost_stock_last_atax));
} }
function InputOutputInventoryComponent_nz_table_35_ng_container_125_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InputOutputInventoryComponent_nz_table_35_ng_container_125_ng_container_35_tr_1_Template, 34, 36, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", data_r38.lots);
} }
function InputOutputInventoryComponent_nz_table_35_ng_container_125_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_ng_container_125_Template_tr_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50); const data_r38 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r49.goToDetail(data_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, InputOutputInventoryComponent_nz_table_35_ng_container_125_i_5_Template, 1, 1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, InputOutputInventoryComponent_nz_table_35_ng_container_125_ng_container_35_Template, 2, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r38.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r38.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r38.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Barcode : ", data_r38.barcode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r38.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r38.stock_first);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](22, _c0, !ctx_r37.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r37.vhAlgorithm.vhcurrencyunit(data_r38.cost_stock_first_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r37.vhAlgorithm.vhcurrencyunit(data_r38.cost_stock_first_atax));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r38.inquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](24, _c0, !ctx_r37.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r37.vhAlgorithm.vhcurrencyunit(data_r38.cost_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r37.vhAlgorithm.vhcurrencyunit(data_r38.cost_atax));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r38.outquantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](26, _c0, !ctx_r37.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r37.vhAlgorithm.vhcurrencyunit(data_r38.revenue_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r37.vhAlgorithm.vhcurrencyunit(data_r38.revenue_atax));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r38.stock_last);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](28, _c0, !ctx_r37.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r37.vhAlgorithm.vhcurrencyunit(data_r38.cost_stock_last_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r37.vhAlgorithm.vhcurrencyunit(data_r38.cost_stock_last_atax));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", data_r38.expand);
} }
const _c3 = function (a0) { return { y: a0, x: "1800px" }; };
function InputOutputInventoryComponent_nz_table_35_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r51.statusName = !ctx_r51.statusName; return ctx_r51.sortName1(ctx_r51.statusName, "name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r53.statusInquantityS = !ctx_r53.statusInquantityS; return ctx_r53.sort1(ctx_r53.statusInquantityS, "stock_first"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r54.statusAtaxInS = !ctx_r54.statusAtaxInS; return ctx_r54.sort1(ctx_r54.statusAtaxInS, "cost_stock_first_btax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_44_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r55.statusBtaxInS = !ctx_r55.statusBtaxInS; return ctx_r55.sort1(ctx_r55.statusBtaxInS, "cost_stock_first_atax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r56.statusInquantity = !ctx_r56.statusInquantity; return ctx_r56.sort1(ctx_r56.statusInquantity, "inquantity"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](52, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r57.statusAtaxIn = !ctx_r57.statusAtaxIn; return ctx_r57.sort1(ctx_r57.statusAtaxIn, "cost_btax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r58.statusBtaxIn = !ctx_r58.statusBtaxIn; return ctx_r58.sort1(ctx_r58.statusBtaxIn, "cost_atax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](62, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r59.statusOutquantity = !ctx_r59.statusOutquantity; return ctx_r59.sort1(ctx_r59.statusOutquantity, "outquantity"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r60.statusAtaxOut = !ctx_r60.statusAtaxOut; return ctx_r60.sort1(ctx_r60.statusAtaxOut, "revenue_btax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](72, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r61.statusBtaxOut = !ctx_r61.statusBtaxOut; return ctx_r61.sort1(ctx_r61.statusBtaxOut, "revenue_atax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_79_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r62.statusOutquantityS = !ctx_r62.statusOutquantityS; return ctx_r62.sort1(ctx_r62.statusOutquantityS, "stock_last"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](82, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r63.statusBtaxOutS = !ctx_r63.statusBtaxOutS; return ctx_r63.sort1(ctx_r63.statusBtaxOutS, "cost_stock_last_btax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](87, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_nz_table_35_Template_th_click_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r52); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r64.statusAtaxOutS = !ctx_r64.statusAtaxOutS; return ctx_r64.sort1(ctx_r64.statusAtaxOutS, "cost_stock_last_atax"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](93, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](125, InputOutputInventoryComponent_nz_table_35_ng_container_125_Template, 36, 30, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](102, _c2))("nzData", ctx_r4.inOutStock2.list)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](103, _c3, ctx_r4.heightScroll));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 62, "No."));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 64, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusName == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 66, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", !ctx_r4.reportConfig ? "2" : "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 68, "Opening stock"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", !ctx_r4.reportConfig ? "2" : "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 70, "Input"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", !ctx_r4.reportConfig ? "2" : "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 72, "Output"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("colspan", !ctx_r4.reportConfig ? "2" : "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](32, 74, "Closing stock"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](37, 76, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusInquantityS == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](105, _c0, !ctx_r4.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](42, 78, "Amount before tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusAtaxInS == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](47, 80, "Amount after tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusBtaxInS == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](52, 82, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusInquantity == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](107, _c0, !ctx_r4.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](57, 84, "Amount before tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusAtaxIn == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](62, 86, "Amount after tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusBtaxIn == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](67, 88, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusOutquantity == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](109, _c0, !ctx_r4.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](72, 90, "Amount before tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusAtaxOut == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](77, 92, "Amount after tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusBtaxOut == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](82, 94, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusOutquantityS == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](111, _c0, !ctx_r4.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](87, 96, "Amount before tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusBtaxOutS == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](92, 98, "Amount after tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r4.statusAtaxOutS == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](99, 100, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.inOutStock2.num_total_first, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](113, _c0, !ctx_r4.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit_symbol(ctx_r4.inOutStock2.total_first_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit_symbol(ctx_r4.inOutStock2.total_first_atax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r4.inOutStock2.num_total_in, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](115, _c0, !ctx_r4.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit_symbol(ctx_r4.inOutStock2.total_in_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit_symbol(ctx_r4.inOutStock2.total_in_atax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r4.inOutStock2.num_total_out, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](117, _c0, !ctx_r4.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit_symbol(ctx_r4.inOutStock2.total_out_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit_symbol(ctx_r4.inOutStock2.total_out_atax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.inOutStock2.num_total_last, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](119, _c0, !ctx_r4.reportConfig ? "none" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit_symbol(ctx_r4.inOutStock2.total_last_btax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4.vhAlgorithm.vhcurrencyunit_symbol(ctx_r4.inOutStock2.total_last_atax), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r36.data);
} }
function InputOutputInventoryComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "No data"));
} }
class InputOutputInventoryComponent {
    constructor(languageService, vhQuerySales, vhComponent, router, vhAlgorithm, cdRef, datePipe, vhAuth, fncService) {
        this.languageService = languageService;
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.router = router;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.datePipe = datePipe;
        this.vhAuth = vhAuth;
        this.fncService = fncService;
        this.pageSize = [20, 30, 40, 50, 100, 200];
        this.date = [new Date(), new Date()];
        this.selectedValue = 'all';
        this.filter_value = {
            type_product: 'all',
            id_product: 'all',
            type_report: 0
        };
        this.reportConfig = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_btax_report_input_output_inventory;
        this.inOutStock = this.init();
        this.inOutStock1 = this.init();
        this.inOutStock2 = this.init();
        this.branchList = []; // danh sách chi nhánh show ra HTML;
        this.search_branchList = [];
        this.useBranch = this.fncService.checkUsingBranch();
        this.listGoods = [];
        this.list_searchGoods = [];
        this.goods = '1';
        this.tabs = 0;
        //** hàm sort cho các cột */
        this.statusInquantity = false; // các biến thay đổi mũi tên sort lên xuống
        this.statusAtaxIn = false;
        this.statusBtaxIn = false;
        this.statusOutquantity = false;
        this.statusAtaxOut = false;
        this.statusBtaxOut = false;
        this.statusInquantityS = false;
        this.statusAtaxInS = false;
        this.statusBtaxInS = false;
        this.statusOutquantityS = false;
        this.statusAtaxOutS = false;
        this.statusBtaxOutS = false;
        this.statusName = false;
        /**--------------------- */
        /**zorro modal */
        this.checked = true;
        this.isVisible = false;
        this.status = false;
        this.date[0].setHours(0, 0, 0, 0);
        this.date[1].setHours(23, 59, 59, 59);
        this.getListProduct();
        this.getBranches();
        if (this.router.getCurrentNavigation().extras.state) {
            let stateSubObj = this.router.getCurrentNavigation().extras.state.stateObj;
            this.inOutStock = stateSubObj.inOutStock;
            this.date = [this.inOutStock.startTime, this.inOutStock.endTime];
            this.id_branch_report = stateSubObj.id_branch_report;
            this.filter_value['id_product'] = stateSubObj.selectedValue;
            this.filter_value['type_report'] = stateSubObj.type_report;
            // đổ dữ liệu về lại báo cáo
            if (this.filter_value['type_report'] === 0)
                this.inOutStock1 = this.inOutStock;
            else
                this.inOutStock2 = this.inOutStock;
        }
    }
    ngAfterViewChecked() {
        if (document.querySelector(".height-layout") && document.querySelector(".height-header") && document.querySelector(".ant-table-thead") && document.querySelector(".ant-tabs-nav")) {
            this.heightScroll = (document.querySelector(".height-layout").clientHeight -
                document.querySelector(".height-header").clientHeight -
                document.querySelector(".ant-table-thead").clientHeight -
                document.querySelector(".ant-tabs-nav").clientHeight) - 90 + "px";
        }
        if (document.querySelector(".height-layout")) {
            this.widthScroll = document.querySelector(".height-layout").clientWidth + "px";
        }
        this.cdRef.detectChanges();
    }
    /**
     * get dử liệu sp và xử lý phần _id để chọn xem report
     * @example this.getListProduct()
     */
    getListProduct() {
        this.listGoods = [{ _id: 'all', name: this.languageService.translate('All') }, ...this.vhAlgorithm.sortStringbyASC(this.vhQuerySales.getlocalDetailProducts(src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.PRODUCT).filter(e => !e.delete_hidden), 'name')].map(e => { return Object.assign(Object.assign({}, e), { _id: e.id_subproduct ? e.id_subproduct : e._id }); });
        this.list_searchGoods = this.listGoods;
    }
    /**
     * xử lý thay đổi chi nhánh xem báo cáo
     * @example this.setIdBranch('FDKJWNDIUWHIUDH')
     */
    setIdBranch(value) {
        if (value == "all") {
            this.id_branch_report = [];
            for (let i in this.branchList) {
                if (this.branchList[i]._id != 'all')
                    this.id_branch_report.push(this.branchList[i]._id);
            }
        }
        else
            this.id_branch_report = [value];
    }
    /**
     * lọc sp theo tên và barcode
     * @example this.searchProducts('')
     */
    searchProducts(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.listGoods = this.vhAlgorithm.searchList(tempVal, this.list_searchGoods, ['name', 'barcode']);
        else
            this.listGoods = this.list_searchGoods;
    }
    /**
     * set lại id_product xem báo cáo
     */
    filterProducts(id_product) {
        this.filter_value['id_product'] = id_product;
        //this.getDataInventory()
    }
    init(startTime = new Date, endTime = new Date) {
        startTime.setHours(0, 0, 0, 0);
        endTime.setHours(23, 59, 59, 59);
        return {
            list: [],
            num_total_first: 0,
            total_first_btax: 0,
            total_first_atax: 0,
            num_total_last: 0,
            total_last_btax: 0,
            total_last_atax: 0,
            num_total_in: 0,
            total_in_btax: 0,
            total_in_atax: 0,
            num_total_out: 0,
            total_out_btax: 0,
            total_out_atax: 0,
            startTime,
            endTime
        };
    }
    /**
     * bắt sk thay đổi thời gian xem báo cáo
     * @param event
     * @example this.changeTime(['2023-06-27T01:21:41.397Z','2023-06-27T01:21:41.397Z'])
     */
    changeTime(event) {
        if (new Date(event[1].setHours(0, 0, 0, 0)).getTime() - new Date(event[0].setHours(0, 0, 0, 0)).getTime() <= this.fncService.checkDateReport() * 86000000) {
            this.inOutStock['startTime'] = event[0];
            this.inOutStock['endTime'] = event[1];
        }
        else {
            this.vhComponent.showToast(4000, this.languageService.translate("The time limit to view is") + " " + this.fncService.checkDateReport() + " " + this.languageService.translate("days"), "alert-toast");
            this.date = [new Date(event[0]), new Date(event[0].getTime() + this.fncService.checkDateReport() * 86000000)];
            this.inOutStock['startTime'] = new Date(this.date[0]);
            this.inOutStock['endTime'] = new Date(this.date[1]);
        }
        this.inOutStock['endTime'].setHours(23, 59, 59, 59);
    }
    /**
     * thay đổi tab xem báo cáo nhap-xuat-hang or nhap-xuat-ton
     */
    segmentChanged(value) {
        this.filter_value['type_report'] = value;
        this.inOutStock = this.init(this.date[0], this.date[1]);
    }
    /**
     * get dữ liệu báo cáo  nhap-xuat-hang or nhap-xuat-ton
     */
    getInventory() {
        return new Promise((resolve, rejects) => {
            if (this.filter_value['type_report'] !== 0) {
                this.vhQuerySales.getReportInputOutputInventory_byTime_byIDProduct(this.inOutStock['startTime'], this.inOutStock['endTime'], this.filter_value['id_product'], this.id_branch_report)
                    .then(res => resolve(res)).catch(err => rejects(err));
            }
            else {
                this.vhQuerySales.getReportInputOutput_byTime_byIDProduct(this.inOutStock['startTime'], this.inOutStock['endTime'], this.filter_value['id_product'], this.id_branch_report)
                    .then(res => resolve(res)).catch(err => rejects(err));
            }
        });
    }
    /**
     * xem báo cáo
     */
    getInOutReturnData() {
        this.vhComponent.showLoadingNotDuration("", "transparent-loading").then(() => {
            this.getInventory()
                .then(res => {
                this.inOutStock['list'] = res['docs'].map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
                if (this.filter_value['type_report'] !== 0) {
                    this.inOutStock['num_total_first'] = res['stock_first'];
                    this.inOutStock['num_total_last'] = res['stock_last'];
                    this.inOutStock['total_first_atax'] = res['cost_stock_first_atax'];
                    this.inOutStock['total_first_btax'] = res['cost_stock_first_btax'];
                    this.inOutStock['total_last_atax'] = res['cost_stock_last_atax'];
                    this.inOutStock['total_last_btax'] = res['cost_stock_last_btax'];
                }
                this.inOutStock['num_total_in'] = res['inquantity'];
                this.inOutStock['num_total_out'] = res['outquantity'];
                this.inOutStock['total_out_atax'] = res['revenue_atax'];
                this.inOutStock['total_out_btax'] = res['revenue_btax'];
                this.inOutStock['total_in_atax'] = res['cost_atax'];
                this.inOutStock['total_in_btax'] = res['cost_btax'];
                if (this.filter_value['type_report'] == 1) {
                    this.inOutStock2 = this.inOutStock;
                    this.sort1(this.statusInquantity, 'inquantity');
                }
                else {
                    this.inOutStock1 = this.inOutStock;
                    this.sort(this.statusInquantity, 'inquantity');
                }
            }).finally(() => this.vhComponent.hideLoading(0));
        });
    }
    sort(sort, value) {
        if (sort) {
            this.inOutStock1['list'] = this.vhAlgorithm.sortNumberbyASC([...this.inOutStock1['list']], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
        }
        else {
            this.inOutStock1['list'] = this.vhAlgorithm.sortNumberbyDESC([...this.inOutStock1['list']], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
        }
    }
    sortName(sort, value) {
        if (sort) {
            this.inOutStock1['list'] = this.vhAlgorithm.sortVietnamesebyASC([...this.inOutStock1['list']], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
        }
        else {
            this.inOutStock1['list'] = this.vhAlgorithm.sortVietnamesebyDESC([...this.inOutStock1['list']], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
        }
    }
    sort1(sort, value) {
        if (sort) {
            this.inOutStock2['list'] = this.vhAlgorithm.sortNumberbyASC([...this.inOutStock2['list']], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
        }
        else {
            this.inOutStock2['list'] = this.vhAlgorithm.sortNumberbyDESC([...this.inOutStock2['list']], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
        }
    }
    sortName1(sort, value) {
        if (sort) {
            this.inOutStock2['list'] = this.vhAlgorithm.sortVietnamesebyASC([...this.inOutStock2['list']], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
        }
        else {
            this.inOutStock2['list'] = this.vhAlgorithm.sortVietnamesebyDESC([...this.inOutStock2['list']], value).map((item, index) => { return Object.assign(Object.assign({}, item), { index: index + 1 }); });
        }
    }
    goToDetail(item) {
        let stateObj = {
            id_branch_report: this.id_branch_report,
            selectedValue: this.filter_value['id_product'], type_report: this.filter_value.type_report, inOutStock: this.inOutStock
        };
        setTimeout(() => {
            this.router.navigate(["/sales/dashboard/manage/reports/input-output-inventory/detail"], {
                state: {
                    detail: Object.assign(Object.assign({}, item), { type_report: this.filter_value['type_report'] }),
                    stateObj: stateObj
                }
            });
        }, 100);
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/reports']);
    }
    onCurrentPageDataChange(value) {
    }
    showModal() {
        this.filter_value['goods'] = this.goods;
        this.filter_value['id_product'] = 'all';
        this.isVisible = true;
    }
    handleOk() {
        this.getListProduct();
        this.isVisible = false;
    }
    handleCancel() {
        this.isVisible = false;
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
    /**
     * xuất dữ liệu sang file excel và tải về
     */
    export() {
        // xử lý tạo tên file
        let data = new Array();
        let date = this.languageService.translate("_from") + "_" +
            this.format_date(this.inOutStock['startTime']) + "_" +
            this.languageService.translate("_to") + "_" +
            this.format_date(this.inOutStock['endTime']);
        let name = `${this.languageService.translate(this.filter_value.type_report == 1 ? "_input_output_inventory_report" : "_input_output_items_report")}_${date}_${this.id_branch_report == "all" ? "" : this.vhAlgorithm.changeAlias(this.vhQuerySales.getlocalBranch(this.id_branch_report).name).replace(/\s/g, "_")}`;
        // thêm dòng đầu tiên 
        let title = new Object();
        title[this.languageService.translate("No.")] = "";
        title[this.languageService.translate("Product name")] = "";
        title[this.languageService.translate("Unit")] = "";
        title[this.languageService.translate("Barcode")] = "";
        if (this.filter_value['type_report'] == 1) {
            title[this.languageService.translate("Opening stock")] = this.languageService.translate("Quantity");
            if (this.reportConfig)
                title[""] = this.languageService.translate("Amount before tax");
            title[" "] = this.languageService.translate("Amount after tax");
        }
        title[this.languageService.translate("Purchased in period")] = this.languageService.translate("Quantity");
        if (this.reportConfig)
            title["  "] = this.languageService.translate("Amount before tax");
        title["   "] = this.languageService.translate("Amount after tax");
        title[this.languageService.translate("Issued in period")] = this.languageService.translate("Quantity");
        if (this.reportConfig)
            title["    "] = this.languageService.translate("Amount before tax");
        title["     "] = this.languageService.translate("Amount after tax");
        if (this.filter_value['type_report'] == 1) {
            title[this.languageService.translate("Closing stock")] = this.languageService.translate("Quantity");
            if (this.reportConfig)
                title["      "] = this.languageService.translate("Amount before tax");
            title["       "] = this.languageService.translate("Amount after tax");
            // name = this.languageService.translate("Stock out/in Report") + "_" + this.languageService.translate("From") + "_" + date;
        }
        data.push(title);
        // dòng hiển thị tổng
        let total = new Object();
        total[this.languageService.translate("No.")] = "";
        total[this.languageService.translate("Product name")] = this.languageService.translate("Total");
        total[this.languageService.translate("Unit")] = "";
        total[this.languageService.translate("Barcode")] = "";
        if (this.filter_value['type_report'] == 1) {
            total[this.languageService.translate("Opening stock")] = this.inOutStock.num_total_first;
            if (this.reportConfig)
                total[""] = this.inOutStock.total_first_btax;
            total[" "] = this.inOutStock.total_first_atax;
        }
        total[this.languageService.translate("Purchased in period")] = this.inOutStock.num_total_in;
        if (this.reportConfig)
            total["  "] = this.inOutStock.total_in_btax;
        total["   "] = this.inOutStock.total_in_atax;
        total[this.languageService.translate("Issued in period")] = this.inOutStock.num_total_out;
        if (this.reportConfig)
            total["    "] = this.inOutStock.total_out_btax;
        total["     "] = this.inOutStock.total_out_atax;
        if (this.filter_value['type_report'] == 1) {
            total[this.languageService.translate("Closing stock")] = this.inOutStock.num_total_last;
            if (this.reportConfig)
                total["      "] = this.inOutStock.total_last_btax;
            total["       "] = this.inOutStock.total_last_atax;
        }
        data.push(total);
        for (let _rows of this.inOutStock.list) {
            let item = new Object();
            item[this.languageService.translate("No.")] = _rows.index;
            item[this.languageService.translate("Product name")] = _rows.name;
            item[this.languageService.translate("Unit")] = _rows.unit;
            item[this.languageService.translate("Barcode")] = _rows.barcode;
            if (this.filter_value['type_report'] == 1) {
                item[this.languageService.translate("Opening stock")] = _rows.stock_first;
                if (this.reportConfig)
                    item[""] = _rows.cost_stock_first_btax;
                item[" "] = _rows.cost_stock_first_atax;
            }
            item[this.languageService.translate("Purchased in period")] = _rows.inquantity;
            if (this.reportConfig)
                item["  "] = _rows.cost_btax;
            item["   "] = _rows.cost_atax;
            item[this.languageService.translate("Issued in period")] = _rows.outquantity;
            if (this.reportConfig)
                item["    "] = _rows.revenue_btax;
            item["     "] = _rows.revenue_atax;
            if (this.filter_value['type_report'] == 1) {
                item[this.languageService.translate("Closing stock")] = _rows.stock_last;
                if (this.reportConfig)
                    item["      "] = _rows.cost_stock_last_btax;
                item["       "] = _rows.cost_stock_last_atax;
            }
            data.push(item);
            for (let lot of _rows.lots ? _rows.lots : []) {
                let data_lot = new Object();
                data_lot[this.languageService.translate("No.")] = "";
                data_lot[this.languageService.translate("Product name")] = lot.lot_number;
                data_lot[this.languageService.translate("Unit")] = this.format_date(new Date(lot.date_mfg)) + ' - ' + this.format_date(new Date(lot.date_exp));
                data_lot[this.languageService.translate("Barcode")] = lot.barcode;
                if (this.filter_value['type_report'] == 1) {
                    data_lot[this.languageService.translate("Opening stock")] = lot.stock_first;
                    if (this.reportConfig)
                        data_lot[""] = lot.cost_stock_first_btax;
                    data_lot[" "] = lot.cost_stock_first_atax;
                }
                data_lot[this.languageService.translate("Purchased in period")] = lot.inquantity;
                if (this.reportConfig)
                    data_lot["  "] = lot.cost_btax;
                data_lot["   "] = lot.cost_atax;
                data_lot[this.languageService.translate("Issued in period")] = lot.outquantity;
                if (this.reportConfig)
                    data_lot["    "] = lot.revenue_btax;
                data_lot["     "] = lot.revenue_atax;
                if (this.filter_value['type_report'] == 1) {
                    data_lot[this.languageService.translate("Closing stock")] = lot.stock_last;
                    if (this.reportConfig)
                        data_lot["      "] = lot.cost_stock_last_btax;
                    data_lot["       "] = lot.cost_stock_last_atax;
                }
                data.push(data_lot);
            }
        }
        this.vhAlgorithm.exportXLSX(data, name);
    }
}
InputOutputInventoryComponent.ɵfac = function InputOutputInventoryComponent_Factory(t) { return new (t || InputOutputInventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_3__.FunctionService)); };
InputOutputInventoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: InputOutputInventoryComponent, selectors: [["app-input-output-inventory"]], decls: 37, vars: 32, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "height-layout"], ["nz-row", "", 1, "height-header"], ["nz-col", "", 1, "title", "left-all-content", 3, "nzSpan"], ["nz-col", "", "nzSpan", "7", 1, "title", "center-all-content"], ["nzShowSearch", "", "nzBorderless", "", 2, "text-align", "center", 3, "nzServerSearch", "ngModel", "nzOnSearch", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", 3, "nzSpan"], ["nzFormat", "dd/MM/yyyy", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4", "class", "center-all-content", 4, "ngIf"], ["nz-col", "", 1, "right-all-content", 3, "nzSpan"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "download", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "disabled", "click"], ["src", "assets/icon/management/view.svg"], [3, "nzSelectedIndex", "nzSelectedIndexChange", "nzSelectChange"], [3, "nzTitle"], ["nzBordered", "", "nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzScroll", "nzData", "nzPageSizeOptions", 4, "ngIf"], ["nz-row", "", "class", "full-height", 4, "ngIf"], ["nzBordered", "", "nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzData", "nzScroll", 4, "ngIf"], [3, "nzLabel", "nzValue"], ["nz-col", "", "nzSpan", "4", 1, "center-all-content"], ["nzShowSearch", "", "nzBorderless", "", 3, "nzServerSearch", "nzPlaceHolder", "ngModel", "nzOnSearch", "ngModelChange"], ["nzBordered", "", "nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzScroll", "nzData", "nzPageSizeOptions"], ["inout", ""], ["nzLeft", "", "nzWidth", "4%", "rowspan", "2", "nzAlign", "center"], ["nzLeft", "", "nzWidth", "20%", "rowspan", "2", 1, "left", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzLeft", "", "nzWidth", "6%", "rowspan", "2", 1, "left"], [3, "colspan"], ["nzAlign", "center", 2, "cursor", "pointer", 3, "click"], ["nzAlign", "center", 2, "cursor", "pointer", 3, "ngStyle", "click"], ["nzWidth", "5%", "nzLeft", ""], ["nzWidth", "20%", "nzLeft", "", 2, "color", "var(--ion-color-vh-green)"], ["nzWidth", "9%", "nzAlign", "center", 2, "color", "var(--ion-color-vh-green)"], ["nzWidth", "13%", "nzAlign", "right", 2, "color", "var(--ion-color-vh-green)", 3, "ngStyle"], ["nzWidth", "13%", "nzAlign", "right", 2, "color", "var(--ion-color-vh-green)"], [4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], ["nzLeft", "", "nzAlign", "center"], ["nzLeft", "", 1, "left"], ["style", "cursor: pointer;font-size:0.7rem;", "nz-icon", "", "nzTheme", "outline", 3, "nzType", "click", 4, "ngIf"], ["nzAlign", "center"], ["nzAlign", "right", 3, "ngStyle"], ["nzAlign", "right"], [4, "ngIf"], ["nz-icon", "", "nzTheme", "outline", 2, "cursor", "pointer", "font-size", "0.7rem", 3, "nzType", "click"], ["colspan", "2", 2, "padding-left", "24px !important"], ["nz-row", "", 1, "full-height"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["nzBordered", "", "nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzData", "nzScroll"], ["inventory", ""], ["nzLeft", "", "nzWidth", "3%", "nzAlign", "center", "rowspan", "2"], ["nzLeft", "", "nzWidth", "15%", "rowspan", "2", 2, "cursor", "pointer", 3, "click"], ["nzLeft", "", "rowspan", "2", "nzWidth", "5%"], ["nzcenter", "", 3, "colspan"], ["nzAlign", "right", 2, "cursor", "pointer", 3, "ngStyle", "click"], ["nzAlign", "right", 2, "cursor", "pointer", 3, "click"], ["nzLeft", ""], ["nzLeft", "", 2, "color", "var(--ion-color-vh-green)"], ["nzAlign", "center", 2, "color", "var(--ion-color-vh-green)"], ["nzAlign", "right", 2, "color", "var(--ion-color-vh-green)", 3, "ngStyle"], ["nzAlign", "right", 2, "color", "var(--ion-color-vh-green)"], ["style", "cursor: pointer;font-size: 0.7rem;", "nz-icon", "", "nzTheme", "outline", 3, "nzType", "click", 4, "ngIf"], ["nzLeft", "", 2, "padding-left", "24px !important"]], template: function InputOutputInventoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "nz-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzOnSearch", function InputOutputInventoryComponent_Template_nz_select_nzOnSearch_11_listener($event) { return ctx.searchProducts($event); })("ngModelChange", function InputOutputInventoryComponent_Template_nz_select_ngModelChange_11_listener($event) { return (ctx.filter_value["id_product"] = $event); })("ngModelChange", function InputOutputInventoryComponent_Template_nz_select_ngModelChange_11_listener($event) { return ctx.filterProducts($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, InputOutputInventoryComponent_nz_option_12_Template, 1, 2, "nz-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "nz-range-picker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function InputOutputInventoryComponent_Template_nz_range_picker_ngModelChange_14_listener($event) { return ctx.date = $event; })("ngModelChange", function InputOutputInventoryComponent_Template_nz_range_picker_ngModelChange_14_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, InputOutputInventoryComponent_div_15_Template, 4, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_Template_button_click_18_listener() { return ctx.export(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InputOutputInventoryComponent_Template_button_click_23_listener() { return ctx.getInOutReturnData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "nz-tabset", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzSelectedIndexChange", function InputOutputInventoryComponent_Template_nz_tabset_nzSelectedIndexChange_28_listener($event) { return ctx.filter_value.type_report = $event; })("nzSelectChange", function InputOutputInventoryComponent_Template_nz_tabset_nzSelectChange_28_listener($event) { return ctx.segmentChanged($event.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "nz-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, InputOutputInventoryComponent_nz_table_31_Template, 76, 71, "nz-table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, InputOutputInventoryComponent_div_32_Template, 5, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "nz-tab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, InputOutputInventoryComponent_nz_table_35_Template, 126, 121, "nz-table", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, InputOutputInventoryComponent_div_36_Template, 5, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 20, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpan", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 22, "Input-output-inventory"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzServerSearch", true)("ngModel", ctx.filter_value["id_product"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listGoods);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 6 : 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.useBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSpan", ctx.useBranch ? 4 : 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 24, "Download"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.id_branch_report);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 26, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSelectedIndex", ctx.filter_value.type_report);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 28, "Input-output-items"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.inOutStock1.list.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.inOutStock1.list.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 30, "Input-output-inventory"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.inOutStock2.list.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.inOutStock2.list.length == 0);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_14__.NzRangePickerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_15__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_16__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonIcon, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_18__.NzTabSetComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_18__.NzTabComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__.NzOptionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzCellFixedDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzCellAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTbodyComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .height-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  width: 95%;\n  font-size: 0.9rem;\n  margin-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  height: 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .bg-footer[_ngcontent-%COMP%]   .center-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.size-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem !important;\n  cursor: pointer;\n}\nnz-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], nz-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n[nz-radio][_ngcontent-%COMP%] {\n  display: block;\n  height: 32px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LW91dHB1dC1pbnZlbnRvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQUU7RUFDSSxlQUFBO0FBRU47QUFFQTtFQUNFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBQ0Y7QUFBRTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQUFFO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFFTjtBQUFFO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFTjtBQUFFO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFTjtBQUFFO0VBQ0ksaUVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFFTjtBQURNO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUdWO0FBQUU7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUFFTjtBQURNO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFHVjtBQUVBOztFQUVFLGdDQUFBO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFHRTs7RUFFSSx1QkFBQTtBQUFOO0FBSUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBREYiLCJmaWxlIjoiaW5wdXQtb3V0cHV0LWludmVudG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5cclxubnotbGF5b3V0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgLnRpdGxlIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIH1cclxuICAuaGVpZ2h0LWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgbnotc2VsZWN0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICB9XHJcbiAgLmJ0bi1hZGQge1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5idG4tdmlldyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgfVxyXG4gIH1cclxuICAuYmctZm9vdGVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgIC5jZW50ZXItbGVmdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFudC1idG46Zm9jdXMsXHJcbi5hbnQtYnRuOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxufVxyXG5cclxuLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnNpemUtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW0gIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm56LXRhYmxlIHtcclxuICB0aCxcclxuICB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuW256LXJhZGlvXSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 36458:
/*!***************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/reports/input-output-inventory/input-output-inventory.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputOutputInventoryModule": () => (/* binding */ InputOutputInventoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _input_output_inventory_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-output-inventory.component */ 31737);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ 89658);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_sales_components_bill_detail_bill_detail_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/bill-detail/bill-detail.module */ 58105);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);












const routes = [
    {
        path: '',
        component: _input_output_inventory_component__WEBPACK_IMPORTED_MODULE_0__.InputOutputInventoryComponent
    },
    {
        path: 'detail',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent
    },
];
class InputOutputInventoryModule {
}
InputOutputInventoryModule.ɵfac = function InputOutputInventoryModule_Factory(t) { return new (t || InputOutputInventoryModule)(); };
InputOutputInventoryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: InputOutputInventoryModule });
InputOutputInventoryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_4__.VhComponent], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_sales_components_bill_detail_bill_detail_module__WEBPACK_IMPORTED_MODULE_3__.BillDetailModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InputOutputInventoryModule, { declarations: [_input_output_inventory_component__WEBPACK_IMPORTED_MODULE_0__.InputOutputInventoryComponent, _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
        src_app_sales_components_bill_detail_bill_detail_module__WEBPACK_IMPORTED_MODULE_3__.BillDetailModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_reports_input-output-inventory_input-output-inventory_module_ts.js.map