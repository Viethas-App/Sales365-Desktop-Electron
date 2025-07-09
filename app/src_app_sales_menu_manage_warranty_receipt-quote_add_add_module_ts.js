"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_warranty_receipt-quote_add_add_module_ts"],{

/***/ 88702:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/menu/manage/warranty/receipt-quote/add/add.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComponent": () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_receipts_quote_receipts_quote_a4_receipts_quote_a4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/receipts-quote/receipts-quote-a4/receipts-quote-a4.component */ 10399);
/* harmony import */ var src_app_sales_components_print_receipts_quote_receipts_quote_a5_receipts_quote_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/receipts-quote/receipts-quote-a5/receipts-quote-a5.component */ 58444);
/* harmony import */ var src_app_sales_components_print_receipts_quote_receipts_quote_k57_col3_receipts_quote_k57_col3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/receipts-quote/receipts-quote-k57-col3/receipts-quote-k57-col3.component */ 73381);
/* harmony import */ var src_app_sales_components_print_receipts_quote_receipts_quote_k80_col3_receipts_quote_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/receipts-quote/receipts-quote-k80-col3/receipts-quote-k80-col3.component */ 67215);
/* harmony import */ var src_app_sales_components_print_receipts_quote_receipts_quote_k80_col4_receipts_quote_k80_col4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/receipts-quote/receipts-quote-k80-col4/receipts-quote-k80-col4.component */ 79498);
/* harmony import */ var src_app_sales_interface_vh_quote_receipt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/interface/vh-quote-receipt */ 37687);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/staff/staff.component */ 46824);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _components_tax_tax_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/tax/tax.component */ 30748);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/customer/customer.component */ 92225);
/* harmony import */ var _components_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/search-customer/search-customer.component */ 49333);
/* harmony import */ var _components_search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../components/search/search-customer/search-customer.component */ 55846);
/* harmony import */ var _components_search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../components/search/search-product/search-product.component */ 99767);
/* harmony import */ var _components_search_search_product_warranty_invoice_search_product_warranty_invoice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../components/search/search-product-warranty-invoice/search-product-warranty-invoice.component */ 48115);
/* harmony import */ var _components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/customer-profile/customer-profile.component */ 72213);
/* harmony import */ var _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/add-customer/add-customer.component */ 89355);
/* harmony import */ var _components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/retail-info/retail-info.component */ 9152);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







































function AddComponent_div_24_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "nz-input-number", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function AddComponent_div_24_div_7_Template_nz_input_number_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r26); const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; return item_r21.quantity = $event; })("ngModelChange", function AddComponent_div_24_div_7_Template_nz_input_number_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r26); const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r27.checkQuantityProduct(item_r21, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 1)("nzStep", 1)("ngModel", item_r21.quantity);
} }
function AddComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_div_24_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31); const i_r22 = restoredCtx.index; const item_r21 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r30.invoice.removeWarrantyProd(i_r22, item_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function AddComponent_div_24_Template_input_ngModelChange_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31); const item_r21 = restoredCtx.$implicit; return item_r21.content = $event; })("blur", function AddComponent_div_24_Template_input_blur_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r31); const i_r22 = restoredCtx.index; const item_r21 = restoredCtx.$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r33.editWarrantyProd(i_r22, item_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, AddComponent_div_24_div_7_Template, 2, 4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", item_r21.content)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 3, "Enter product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.invoice.getWarrantyProd().length == 1 && ctx_r0.invoice.getWarrantyProd()[0].content || ctx_r0.invoice.getWarrantyProd().length > 1);
} }
function AddComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_div_34_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r37); const i_r35 = restoredCtx.index; const item_r34 = restoredCtx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r36.invoice.removeWarrantyNote(i_r35, item_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function AddComponent_div_34_Template_input_ngModelChange_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r37); const item_r34 = restoredCtx.$implicit; return item_r34.content = $event; })("blur", function AddComponent_div_34_Template_input_blur_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r37); const i_r35 = restoredCtx.index; const item_r34 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r39.editWarrantyNote(i_r35, item_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", item_r34.content)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 2, "Enter note"));
} }
function AddComponent_div_48_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "pre", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_div_48_ng_container_8_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r48); const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r46.openModalChooseLot(item_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r42.getLotNumber(item_r40.lots, item_r40.id_lotproduct));
} }
function AddComponent_div_48_p_9_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "pre", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_div_48_p_9_span_1_ng_container_2_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56); const combo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3); return ctx_r54.openModalChooseLot(combo_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const combo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r53.getLotNumber(combo_r51.lots, combo_r51.id_lotproduct));
} }
function AddComponent_div_48_p_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, AddComponent_div_48_p_9_span_1_ng_container_2_Template, 3, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r51 = ctx.$implicit;
    const i_r52 = ctx.index;
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2).$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", i_r52 == item_r40.combos.length - 1 ? combo_r51.quantity + "x " + combo_r51.name + " (" + ctx_r50.getUnit(combo_r51.units, combo_r51.ratio) + ") " : combo_r51.quantity + "x " + combo_r51.name + " (" + ctx_r50.getUnit(combo_r51.units, combo_r51.ratio) + ") " + " ,", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", combo_r51.id_lotproduct);
} }
function AddComponent_div_48_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, AddComponent_div_48_p_9_span_1_Template, 3, 2, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", item_r40.combos);
} }
function AddComponent_div_48_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "nz-option", 84);
} if (rf & 2) {
    const i_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzLabel", i_r60.unit)("nzValue", i_r60.ratio);
} }
function AddComponent_div_48_del_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "del", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r40.price_origin > item_r40.price ? ctx_r45.vhAlgorithm.vhcurrencyunit(item_r40.price_origin) : "", " ");
} }
function AddComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("nzOnConfirm", function AddComponent_div_48_Template_div_nzOnConfirm_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63); const item_r40 = restoredCtx.$implicit; const i_r41 = restoredCtx.index; const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r62.deleteGoods(item_r40, i_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, AddComponent_div_48_ng_container_8_Template, 3, 1, "ng-container", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, AddComponent_div_48_p_9_Template, 2, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](11, "nz-select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function AddComponent_div_48_Template_nz_select_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63); const item_r40 = restoredCtx.$implicit; return item_r40.ratio = $event; })("ngModelChange", function AddComponent_div_48_Template_nz_select_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63); const item_r40 = restoredCtx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r65.changeUnit($event, item_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, AddComponent_div_48_nz_option_12_Template, 1, 2, "nz-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "nz-input-number", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function AddComponent_div_48_Template_nz_input_number_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63); const item_r40 = restoredCtx.$implicit; return item_r40.quantity = $event; })("ngModelChange", function AddComponent_div_48_Template_nz_input_number_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63); const item_r40 = restoredCtx.$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r67.checkQuantityProduct(item_r40, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_div_48_Template_div_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r63); const item_r40 = restoredCtx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r68.openEditUnitPrice(item_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, AddComponent_div_48_del_19_Template, 2, 1, "del", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate2"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 14, "Are you sure to delete"), " ", item_r40.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](item_r40.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r40.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", item_r40.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", item_r40.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", item_r40.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", item_r40.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r2.vhAlgorithm.vhcurrencyunit(item_r40.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r2.vhAlgorithm.vhcurrencyunit(item_r40.price * item_r40.quantity));
} }
function AddComponent_ng_container_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate4"](" ", ctx_r3.invoice.getRetailName(), " - ", ctx_r3.invoice.getRetailPhone(), " ", ctx_r3.invoice.getRetailAddress() ? "-" : "", " ", ctx_r3.invoice.getRetailAddress(), " ");
} }
function AddComponent_ng_container_96_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "app-customer", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeAndReceiveCustomer", function AddComponent_ng_container_96_Template_app_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r70); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r69.closeAndReceiveCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_ng_container_96_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r70); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r71.openInfoCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id_customer", ctx_r4.invoice.getIdPartner());
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", ctx_r4.invoice.getIdPartner() != "id_retail" ? "active" : "deactive");
} }
function AddComponent_ng_container_97_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "app-search-customer", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeAndReceiveCustomer", function AddComponent_ng_container_97_Template_app_search_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r72.closeAndReceiveCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_ng_container_97_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r73); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r74.openInfoCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id_customer", ctx_r5.invoice.id_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", ctx_r5.invoice.id_customer != "id_retail" ? "active" : "deactive");
} }
function AddComponent_nz_select_123_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "nz-option", 90);
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("nzValue", item_r76._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r75.vhAlgorithm.vhpercent(item_r76.value / 100));
} }
function AddComponent_nz_select_123_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "nz-select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function AddComponent_nz_select_123_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r77.id_tax = $event; })("ngModelChange", function AddComponent_nz_select_123_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r78); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r79.changeTax($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, AddComponent_nz_select_123_nz_option_1_Template, 1, 2, "nz-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r6.id_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r6.listTax);
} }
function AddComponent_span_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "0.00%");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function AddComponent_img_140_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_img_140_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r80.showModalEditTotalPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} }
function AddComponent_app_search_product_156_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-search-product", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeSearchProductList", function AddComponent_app_search_product_156_Template_app_search_product_closeSearchProductList_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r82.closeSearchProductList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("searchProductList", ctx_r9.searchProductList)("default_price_type", ctx_r9.default_price_type);
} }
function AddComponent_app_search_product_warranty_invoice_157_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-search-product-warranty-invoice", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeSearchProductListWarranty", function AddComponent_app_search_product_warranty_invoice_157_Template_app_search_product_warranty_invoice_closeSearchProductListWarranty_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r84.closeSearchProductListWarranty($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("searchProductListWarranty", ctx_r10.searchProductListWarranty);
} }
function AddComponent_nz_modal_158_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", ctx_r86.tempDetail.price);
} }
function AddComponent_nz_modal_158_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_nz_modal_158_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r89.handleCancelEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_nz_modal_158_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r90); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2); return ctx_r91.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function AddComponent_nz_modal_158_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "nz-modal", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_158_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r92.isVisibleEditUnitPrice = $event; })("nzOnCancel", function AddComponent_nz_modal_158_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r93); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r94.handleCancelEditUnit(); })("nzOnOk", function AddComponent_nz_modal_158_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r93); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r95.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, AddComponent_nz_modal_158_ng_container_2_Template, 8, 7, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, AddComponent_nz_modal_158_ng_template_3_Template, 6, 6, "ng-template", null, 95, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](4);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzFooter", _r87)("nzVisible", ctx_r11.isVisibleEditUnitPrice);
} }
function AddComponent_ng_container_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](6, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 2, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", ctx_r12.vhAlgorithm.vhcurrencyunit(ctx_r12.invoice.getPayment()));
} }
function AddComponent_ng_template_162_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_ng_template_162_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r96.handleCancelEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_ng_template_162_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r97); const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r98.handleEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function AddComponent_ng_container_166_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "i", 108);
} }
function AddComponent_ng_container_166_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzValue", item_r104._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", item_r104.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](8, 4, item_r104.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](11, 7, item_r104.date_exp, "dd/MM/yyyy"), " ");
} }
function AddComponent_ng_container_166_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "No data"));
} }
function AddComponent_ng_container_166_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "nz-input-group", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "input", 103, 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("keyup", function AddComponent_ng_container_166_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r106); const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](4); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r105.searchLot(_r99.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, AddComponent_ng_container_166_ng_template_6_Template, 1, 0, "ng-template", null, 105, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "nz-radio-group", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_166_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r106); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r107.tempDetail.id_lotproduct = $event; })("ngModelChange", function AddComponent_ng_container_166_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r106); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r108.changeLot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, AddComponent_ng_container_166_div_9_Template, 12, 10, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, AddComponent_ng_container_166_div_10_Template, 3, 3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](7);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzSuffix", _r100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx_r15.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r15.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r15.tempDetail.lots.length);
} }
function AddComponent_ng_template_167_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_ng_template_167_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r109.handleCancelChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_ng_template_167_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r110); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r111.handleChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", !ctx_r17.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 5, "Ok"));
} }
function AddComponent_app_customer_profile_169_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-customer-profile", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeInfoCustomer", function AddComponent_app_customer_profile_169_Template_app_customer_profile_closeInfoCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r113); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r112.closeInfoCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("visibleInfoCustomer", ctx_r18.visibleInfoCustomer)("customer", ctx_r18.customer);
} }
function AddComponent_app_add_customer_170_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-add-customer", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeAddCustomer", function AddComponent_app_add_customer_170_Template_app_add_customer_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r114.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("showDrawerAddCusomer", ctx_r19.showDrawerAddCusomer);
} }
function AddComponent_app_retail_info_171_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "app-retail-info", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeAddCustomer", function AddComponent_app_retail_info_171_Template_app_retail_info_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](); return ctx_r116.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("showDrawerAddRetail", ctx_r20.showDrawerAddRetail)("retail_name", ctx_r20.invoice.getRetailName())("retail_phone", ctx_r20.invoice.getRetailPhone())("retail_address", ctx_r20.invoice.getRetailAddress());
} }
class AddComponent {
    constructor(router, vhComponent, languageService, vhQuerySales, vhAlgorithm, vhAuth, cdRef, fncService, nzModalService) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.cdRef = cdRef;
        this.fncService = fncService;
        this.nzModalService = nzModalService;
        this.display_promotion_selling_price = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').display_promotion_selling_price;
        this.invoice = new src_app_sales_interface_vh_quote_receipt__WEBPACK_IMPORTED_MODULE_5__.VhQuoteReceipts();
        this.listTax = this.vhQuerySales.getlocalTaxs().filter(tax => tax.status);
        this.promotions = [];
        this.employee = {};
        this.pickerTime = new Date();
        this.dateReminder = new Date;
        this.dateSchedule = new Date;
        this.default_price_type = 1;
        this.checkPrinter = false;
        this.searchProductList = false;
        // -------modal edit unit price-------
        this.isVisibleEditUnitPrice = false;
        // ----set customer-----
        this.radioValue = 1;
        // -------modal edit pay---------
        this.edit_pay = false;
        //--------------visible drawer info customer-----------
        this.visibleInfoCustomer = false;
        // // ------thoát trang-----
        this.isExit = false;
        // -------------xử lý warranty-----------
        this.searchProductListWarranty = false;
        /**add customer */
        this.showDrawerAddCusomer = false;
        this.showDrawerAddRetail = false;
        this.show_modal_select_lots = false;
        this.list_search_lot = [];
        let invoice = this.router.getCurrentNavigation().extras.state;
        this.dataRestore = invoice;
        if (invoice.invoice) {
            this.invoice = new src_app_sales_interface_vh_quote_receipt__WEBPACK_IMPORTED_MODULE_5__.VhQuoteReceipts(invoice.invoice, invoice.invoiceDetail, invoice.warranty);
            this.pickerTime = new Date(this.invoice.getDate());
            this.dateReminder = new Date(this.invoice.getDateReminder());
            this.dateSchedule = new Date(this.invoice.getDateSchedule());
            if (this.invoice.getIdPartner() == 'id_retail') {
                this.radioValue = 1;
            }
            else
                this.radioValue = 2;
        }
        else {
            this.dateReminder = new Date(this.invoice.getDateReminder());
            this.dateSchedule = new Date(this.invoice.getDateSchedule());
            // set nhân viên mặc định
            if (!this.invoice.getIdTechnician())
                this.invoice.setIdTechnician(this.vhAuth.getUser()._id);
            if (!this.invoice.getIdEmployee())
                this.invoice.setIdEmployee(this.vhAuth.getUser()._id);
            this.employee = this.vhAuth.getlocalEmployee(this.invoice.getIdEmployee());
            this.invoice.setIdBranch(this.vhQuerySales.getDefaultBranch()._id);
        }
        // khởi tạo mặc định 1 sp bảo hành và ghi chú
        if (!this.invoice.getWarrantyProd().length)
            this.invoice.addWarrantyProd();
        if (!this.invoice.getWarrantyNote().length)
            this.invoice.addWarrantyNote();
        // check giá bán mặc định
        if (this.vhAuth.checkMyPermission('default_price_type_1'))
            this.default_price_type = 1;
        else if (this.vhAuth.checkMyPermission('default_price_type_2'))
            this.default_price_type = 2;
        this.eventKeypress();
    }
    ngOnInit() {
        // check thuế
        if (this.invoice.getID() && this.listTax.length > 0) {
            this.id_tax = this.listTax.find(item => item.value == this.invoice.getTax())._id;
        }
        else {
            let tax = this.listTax.find(item => item.default);
            if (tax) {
                this.id_tax = tax._id;
                this.invoice.setTax(tax['value']);
            }
        }
        // check in bill
        let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_warranty');
        this.checkPrinter = printer ? printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable : false;
    }
    ngOnDestroy() {
        document.removeEventListener('keydown', this.event, false);
    }
    /**
     * lắng nghe sk nhấn f1 f2 f3 f4 trên bàn phím
     * @example
     */
    eventKeypress() {
        this.event = (event) => {
            const keycode = event.keyCode;
            if (keycode === 112 || keycode === 113 || keycode === 114)
                event.preventDefault();
            if (keycode === 115)
                this.searchProductList = !this.searchProductList;
            else if (this.invoice.getInvoiceDetail().length > 0) {
                switch (keycode) {
                    case 112:
                        this.payInvoice(false);
                        break;
                    case 113: {
                        if (this.checkPrinter)
                            this.payInvoice(true);
                        break;
                    }
                }
            }
        };
        document.addEventListener('keydown', this.event, false);
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.discount_price = this.vhAlgorithm.vhnumeral(".discount-price");
            this.invoice_fee = this.vhAlgorithm.vhnumeral(".invoice-fee");
        });
    }
    /**
     *  hàm xóa sp thanh toán trong local
     * @param detail
     * @example  this.deleteGoods(bill_detail_selected)
     */
    deleteGoods(detail, index) {
        this.vhComponent.alertConfirm("", "", `${this.languageService.translate("Delete")} ${detail.name}?`, "OK", this.languageService.translate("Cancel"))
            .then(() => {
            if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_warranty)
                this.invoice.removeInvoiceDetail(detail.id_product);
            else {
                this.invoice.getInvoiceDetail().splice(index, 1);
            }
        }, () => { });
    }
    /**
     * mở component chọn sp
     * @example this.openSearchProductList()
     */
    openSearchProductList() {
        this.searchProductList = true;
    }
    /**
     * nhận output từ component chọn sp (app-search-product)
     * @param data sp được chọn để thêm vào bill
     * @example this.closeSearchProductList(product_selected)
     */
    closeSearchProductList(data) {
        if (data) {
            if (data.manylot && !data.lot_number)
                this.openModalChooseLot(data);
            else {
                let price = this.default_price_type == 1 ? data.price : data.price2 ? data.price2 : data.price; // check 2 đk là kiểu giá bán và có giá bán sỉ hay ko
                if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_warranty)
                    this.invoice.addInvoiceDetail(Object.assign(Object.assign({}, data), { price: price }), null);
                else
                    this.invoice.addInvoiceDetailMutilLine(Object.assign(Object.assign({}, data), { price: price }), null);
            }
        }
        this.searchProductList = false;
    }
    goBack() {
        this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Are you sure to cancel the sales order")}?`, "OK", this.languageService.translate('Cancel'))
            .then(() => { this.isExit = true; this.handle(); }, () => { });
    }
    /**
     * bắt sk thay đổi số lượng sp trong bill
     * @param product
     * @param event : giá trị thay đổi
     * @example this.checkQuantityProduct(bill_detail_selected, 1)
     */
    checkQuantityProduct(product, event) {
        if (!event)
            product.quantity = 1;
        this.invoice.setSubTotal();
    }
    /**
     * bắt sk thay đổi đơn vị của bill_detail
     * @param ev  ratio được chọn
     * @param item
     * @example  this.changeUnit(24, bill_detail_selected)
     */
    changeUnit(ev, item) {
        if (this.default_price_type == 1) {
            let unit = this.vhQuerySales.getUnit_byRatio(item.units, ev);
            if (unit) {
                item.unit = unit.unit;
                item.price = parseFloat(unit.price);
                item.ratio = parseFloat(unit.ratio);
                item.price_origin = parseFloat(unit.price);
            }
        }
        else {
            let unit = this.vhQuerySales.getUnit_byRatio(item.units, ev);
            if (unit) {
                item.unit = unit.unit;
                item.price = parseFloat(unit.price2);
                item.ratio = parseFloat(unit.ratio);
                item.price_origin = parseFloat(unit.price2);
            }
        }
        this.invoice.setSubTotal();
    }
    /**
     * mở modal thay đổi giá bán sản phẩm trong bill
     * @param detail
     * @example this.openEditUnitPrice(bilL_detail_selected)
     */
    openEditUnitPrice(detail) {
        this.tempDetail = detail;
        this.isVisibleEditUnitPrice = true;
        this.vhAlgorithm.waitingStack().then(() => {
            this.unit_price = this.vhAlgorithm.vhnumeral('.unit_price');
        });
    }
    /**
     * bắt sk nhấn nút Ok modal giảm giá sp
     * @example this.handleEditUnit()
     */
    handleEditUnit() {
        if (this.unit_price.getRawValue() != '' && this.unit_price.getRawValue() >= 0) {
            this.tempDetail.price = parseFloat(this.unit_price.getRawValue());
            this.invoice.setSubTotal();
            this.isVisibleEditUnitPrice = false;
        }
        else {
            this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
        }
    }
    /**
     * tắt modal giảm giá sp
     * @example this.handleCancelEditUnit()
     */
    handleCancelEditUnit() { this.isVisibleEditUnitPrice = false; }
    // -------set employee-------
    /**
     * bắt sk thay đổi nv kỹ thuật
     * @param event
     */
    closeAndReceiveTechnician(event) {
        if (event) {
            this.invoice.setIdTechnician(event);
        }
    }
    /**
     * bắt sk thay đổi nv tạo bill
     * @param event
     */
    closeAndReceiveReceptionist(event) {
        if (event) {
            this.invoice.setIdEmployee(event);
        }
    }
    /**
     * bắt sk thay đổi khách hàng
     * @param event
     */
    closeAndReceiveCustomer(event) {
        if (event) {
            this.invoice.setIdPartner(event);
        }
    }
    /**
     * bắt sk thay đổi loại khách hàng
     * @param event
     */
    changeCustomerType(event) {
        if (this.radioValue == 1)
            this.invoice.setIdPartner("id_retail");
        if (event == 2 && this.invoice.getRetailName()) {
            this.nzModalService.confirm({
                nzTitle: `${this.languageService.translate('Retail customer information will be lost')}?`,
                nzCancelText: this.languageService.translate("Cancel"),
                nzOkText: "Ok",
                nzOnOk: () => { this.clearRetailCustomer(); },
                nzOnCancel: () => { this.radioValue = 1; },
            });
        }
    }
    /**
     * clear dữ liệu khách lẻ trong bill trường hợp thay đổi thành khách thành viên
     * @example this.clearRetailCustomer()
     */
    clearRetailCustomer() {
        this.invoice.setRetailName('');
        this.invoice.setRetailPhone('');
        this.invoice.setRetailAddress('');
    }
    /**
     * bắt sk thay đổi phương thức thanh toán
     * @param event
     * @example this.closeAndGetValuePayment(event)
     */
    closeAndGetValuePayment(event) {
        if (event[0] == 1 || event[0] == 2) {
            this.setPaymentType(event[0]);
        }
        else if (event[0] == 3) {
            this.setPaymentType(event[0], event[1]);
        }
    }
    /**
     * cập nhật payment_type cho bill
     * @param type
     * @param id_wallet
     * @example  this.setPaymentType(1)
     */
    setPaymentType(type, id_wallet) {
        this.invoice.setPaymentType(type);
        switch (type) {
            case 1:
                this.invoice.setIdWallet('id_cash');
                this.invoice.setPayment();
                break;
            case 2:
                this.invoice.setPayment(0);
                this.invoice.setIdWallet(null);
                break;
            case 3: {
                if (id_wallet) {
                    this.invoice.setIdWallet(id_wallet);
                    this.invoice.setPayment();
                }
            }
        }
    }
    /**
     * bắt sk thay đổi date của hóa đơn , gán lại giá trị date mới cho đơn
     * @example this.setPickerTime('2023-06-12T08:02:27.697Z')
     */
    setPickerTime(event) {
        if (event.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime()) {
            this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the registration date (")} ${this.fncService.formatDate(this.vhAuth.getStore().registrationdate)} ${")"}`, 8000);
            this.pickerTime = new Date(this.invoice.getDate());
            this.invoice.setDate(this.pickerTime);
        }
        else
            this.vhQuerySales.getValidityDate(new Date(event)).then((validitydate) => {
                if (validitydate == null)
                    this.invoice.setDate(event);
                else {
                    this.pickerTime = new Date(this.invoice.getDate());
                    this.invoice.setDate(this.pickerTime);
                    this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 8000);
                }
            });
    }
    /**
     * bắt sk thay đổi ngày hẹn
     * @param event
     */
    setDateSchedule(event) {
        this.invoice.setDateSchedule(event);
    }
    /**
     * bắt sk thay đổi ngày nhắc hẹn
     * @param event
     */
    setDateReminder(event) {
        this.invoice.setDateReminder(event);
    }
    /**
     * bắt sk thay đổi thuế
     * @param event
     */
    changeTax(event) {
        let tax = this.listTax.find(item => item._id == event);
        this.invoice.setTax(tax.value);
    }
    /**
     * bắt sk thay đổi giảm giá của hóa đơn , gán lại giá trị giảm giá mới cho đơn
     * @example this.editDiscount()
     */
    editDiscount() {
        if (this.discount_price.getRawValue() && this.discount_price.getRawValue() >= 0) {
            this.invoice.setDiscount(parseFloat(this.discount_price.getRawValue()));
        }
        else {
            document.getElementById("discount-price")['value'] = this.invoice.getDiscount();
            this.discount_price = this.vhAlgorithm.vhnumeral('.discount-price');
        }
    }
    /**
     * bắt sk thay đổi phí của hóa đơn , gán lại giá trị phí mới cho đơn
     * @example this.editFee()
     */
    editFee() {
        if (this.invoice_fee.getRawValue() && this.invoice_fee.getRawValue() >= 0) {
            this.invoice.setFee(parseFloat(this.invoice_fee.getRawValue()));
        }
        else {
            document.getElementById("invoice-fee")['value'] = this.invoice.getFee();
            this.invoice_fee = this.vhAlgorithm.vhnumeral('.invoice-fee');
        }
    }
    /**
     * mở modal chỉnh sửa thanh toán của bill
     * @example this.showModalEditTotalPay()
     */
    showModalEditTotalPay() {
        if (this.invoice.getPaymentType() != 2 && this.vhQuerySales.getlocalCustomer(this.invoice.getIdPartner()).debt_enable) {
            this.vhAlgorithm.waitingStack().then(() => {
                this.edit_paytotal = this.vhAlgorithm.vhnumeral(".edit-pay");
            });
            this.edit_pay = true;
        }
        else if (!this.vhQuerySales.getlocalCustomer(this.invoice.getIdPartner()).debt_enable) {
            this.vhComponent.showToast(2000, this.languageService.translate("This customer is not allowed to debt"), "alert-toast");
        }
    }
    /**
     * bắt sk nhấn nút ok modal chỉnh sửa thanh toán của bill
     * @example this.handleEditPay()
     */
    handleEditPay() {
        if (this.edit_paytotal.getRawValue() >= 0 && this.edit_paytotal.getRawValue() <= this.invoice.getTotalATax()) {
            this.invoice.setPayment(parseFloat(this.edit_paytotal.getRawValue()));
        }
        this.edit_pay = false;
    }
    /**
     * bắt sk nhấn nút hủy modal chỉnh sửa thanh toán của bill
     * @example this.handleCancelEditPay()
     */
    handleCancelEditPay() {
        this.edit_pay = false;
    }
    /**
     * xử lý sk nhấn nút thanh toán hoặc lưu tạm
     * @param bill_type
     * @param print biến cờ để check in hay ko
     * @example this.payInvoice(1)
     */
    payInvoice(print) {
        if (this.invoice.getWarrantyProd().length == 1 && !this.invoice.getWarrantyProd()[0].content) {
            this.vhComponent.showToast(2000, this.languageService.translate("Please add a product warranty"), "alert-toast");
        }
        else {
            this.vhComponent.alertConfirm(`${this.languageService.translate("Save")}?`, "", "", "OK", this.languageService.translate("Cancel")).then(() => {
                this.vhComponent.showLoading("", "transparent-loading").then(() => {
                    this.createOrUpdate().then(bill => {
                        this.vhComponent.hideLoading(0).then(() => {
                            if (bill == "create")
                                this.vhComponent.showToast(2000, `${this.languageService.translate("Recepits, quote")} ${this.invoice.getBillCode()} ${this.languageService.translate("has been created successfully")}`, "success-toast");
                            else
                                this.vhComponent.showToast(2000, `${this.languageService.translate("Recepits, quote")} ${this.invoice.getBillCode()} ${this.languageService.translate("has been updated successfully")}`, "success-toast");
                            if (print)
                                this.handlePrint();
                            else
                                this.handle();
                        });
                    });
                });
            }, () => { });
        }
    }
    createOrUpdate() {
        if (!this.invoice.getID())
            return new Promise(resolve => {
                this.vhQuerySales.createBill_Billdetail(this.invoice.getCreateUpdateInvoice(18), this.invoice.getCreateUpdateInvoiceDetail()).then((res) => {
                    this.invoice.setID(res._id);
                    this.invoice.setBillCode(res.bill_code);
                    this.createWarranty(this.invoice.getCreateWarranty()).then(() => resolve('create'));
                });
            });
        else {
            return new Promise(resolve => {
                this.vhQuerySales.updateBill_Billdetail(this.invoice.getID(), this.invoice.getCreateUpdateInvoice(this.invoice.getBillType()), this.invoice.getCreateUpdateInvoiceDetail()).then((res) => {
                    Promise.all([
                        this.createWarranty(this.invoice.getCreateWarranty()),
                        this.updateWarranty(this.invoice.getUpdateWarranty()),
                        this.delWarranty(this.invoice.getDelWarranty())
                    ]).then(() => resolve('update'));
                });
            });
        }
    }
    ///////////////////////////////////////////XỬ LÝ WARRANTY///////////////////////////////////////
    /**
     * tạo sp bảo hành cho bill lên DB
     * @param array
     * @returns
     */
    createWarranty(array) {
        const promiseAddWarranty = [];
        for (let i = 0; i < array.length; i++) {
            promiseAddWarranty.push(this.vhQuerySales.addWarranty(array[i]));
        }
        return Promise.all(promiseAddWarranty);
    }
    /**
     * cập nhật sp bảo hành cho bill lên DB
     * @param array
     * @returns
     */
    updateWarranty(array) {
        const promiseUpdateWarranty = [];
        for (let i = 0; i < array.length; i++) {
            promiseUpdateWarranty.push(this.vhQuerySales.updateWarranty(array[i]._id, array[i]));
        }
        return Promise.all(promiseUpdateWarranty);
    }
    /**
     * xóa sp bảo hành cho bill khỏi DB
     * @param array
     * @returns
     */
    delWarranty(array) {
        const promiseDelWarranty = [];
        for (let i = 0; i < array.length; i++) {
            promiseDelWarranty.push(this.vhQuerySales.deleteWarranty(array[i]._id));
        }
        return Promise.all(promiseDelWarranty);
    }
    ///////////////////////////////////////////XỬ LÝ WARRANTY///////////////////////////////////////
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_warranty');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    /**
     * kiểm tra dữ liệu thông tin máy in và mở component in
     * @example this.handlePrint()
     */
    handlePrint() {
        this.checkPrint().then((printer) => {
            if (printer)
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice: this.invoice }, false, false, `modal-print-${printer['_id']}`).then((modal) => {
                    modal.onWillDismiss().then(() => this.handle());
                });
        }, (err) => this.handle());
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_receipts_quote_receipts_quote_k57_col3_receipts_quote_k57_col3_component__WEBPACK_IMPORTED_MODULE_2__.ReceiptsQuoteK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_receipts_quote_receipts_quote_k80_col3_receipts_quote_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__.ReceiptsQuoteK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_receipts_quote_receipts_quote_k80_col4_receipts_quote_k80_col4_component__WEBPACK_IMPORTED_MODULE_4__.ReceiptsQuoteK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_receipts_quote_receipts_quote_a5_receipts_quote_a5_component__WEBPACK_IMPORTED_MODULE_1__.ReceiptsQuoteA5Component;
            case 'print_size_a4': return src_app_sales_components_print_receipts_quote_receipts_quote_a4_receipts_quote_a4_component__WEBPACK_IMPORTED_MODULE_0__.ReceiptsQuoteA4Component;
            default: return src_app_sales_components_print_receipts_quote_receipts_quote_a4_receipts_quote_a4_component__WEBPACK_IMPORTED_MODULE_0__.ReceiptsQuoteA4Component;
        }
    }
    /**
     * trờ về trang danh sách hóa đơn sau khi đã thanh toán xong
     * @example this.handle(true)
     */
    handle() {
        this.isExit = true;
        this.router.navigate(['/sales/dashboard/manage/warranty/receipt-quote'], { state: this.dataRestore['dataRestore'] || this.dataRestore });
    }
    /**
     * mở modal xem thông tin khách hàng
     * @example this.openInfoCustomer()
     */
    openInfoCustomer() {
        if (this.invoice.getIdPartner() != 'id_retail') {
            this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.getIdPartner());
            this.visibleInfoCustomer = true;
        }
    }
    /**
     * đóng modal xem thông tin khách hàng
     * @example this.openInfoCustomer()
     */
    closeInfoCustomer(event) {
        this.visibleInfoCustomer = false;
    }
    checkDeactivate(currentRoute, currentState, nextState) {
        return nextState.url == '/login' ? true : (this.isExit ? this.isExit : this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Are you sure to cancel the sales order"), "OK", (this.languageService.translate("Cancel"))).then(() => { return true; }).catch(() => { return false; }));
    }
    ngAfterViewChecked() {
        if (document.querySelector(".sales-best-selling") && document.querySelector(".waranty-invoice-quote-header") && document.querySelector("#waranty-invoice-quote-invoiceDetail")) {
            document.getElementById("waranty-invoice-quote-invoiceDetail").style.height = document.querySelector(".sales-best-selling").clientHeight
                - document.querySelector(".waranty-invoice-quote-header").clientHeight - 10 + "px";
        }
        if (document.getElementById("waranty-invoice-prodAndnote-invoiceDetail") && document.querySelector(".sales-cart") && document.querySelector(".sales-cart-header")) {
            document.getElementById("waranty-invoice-prodAndnote-invoiceDetail").style.height = document.querySelector(".sales-cart").clientHeight - document.querySelector(".sales-cart-header").clientHeight - 10 + 'px';
        }
        this.cdRef.detectChanges();
    }
    /**
     * mở/đóng component chọn sản phẩm bảo hành
     * @example this.openSearchProductListWarranty()
     */
    openSearchProductListWarranty() {
        this.searchProductListWarranty = !this.searchProductListWarranty;
    }
    /**
     * xử lý thêm dữ liệu nhận dc từ component chọn sản phẩm bảo hành
     * @param event
     */
    closeSearchProductListWarranty(event) {
        if (event) {
            this.invoice.addWarrantyProd();
            this.invoice.getWarrantyProd()[0].content = event.name;
        }
        this.searchProductListWarranty = false;
    }
    /**
     * bắt sk thay đổi tên sp bảo hành
     * @param index
     * @param item
     */
    editWarrantyProd(index, item) {
        if (this.invoice.getWarrantyProd().length > 1 && item.content == '')
            this.invoice.removeWarrantyProd(index, item);
    }
    /**
     * bắt sk thay đổi ghi chú sp bảo hành
     * @param index
     * @param item
     */
    editWarrantyNote(index, item) {
        if (this.invoice.getWarrantyNote().length > 1 && item.content == '')
            this.invoice.removeWarrantyNote(index, item);
    }
    /**
     * mở modal thêm khách hàng thành viên mới hoặc thêm thông tin khách lẻ
     * @example this.openDrawerAddCustomerOrRetail()
     */
    openDrawerAddCustomerOrRetail() {
        if (this.radioValue == 1)
            this.showDrawerAddRetail = true;
        else
            this.showDrawerAddCusomer = true;
    }
    /**
     * bắt sk tắt drawer thêm khách hàng
     * @param result output kết quả trả về
     * @example this.closeAddCustomer('NDWOIUHDIUWQHSIOQUH')
     */
    closeAddCustomer(result) {
        if (this.radioValue == 1) {
            if (result) {
                this.invoice.setRetailName(result.retail_name);
                this.invoice.setRetailPhone(result.retail_phone);
                this.invoice.setRetailAddress(result.retail_address);
            }
            this.showDrawerAddRetail = false;
        }
        else {
            this.showDrawerAddCusomer = false;
            if (result)
                this.invoice.setIdPartner(result);
        }
    }
    /**
     * trả về tên unit theo ratio truyền vào
     * @param units mảng units của sp
     * @param ratio ratio được chọn
     * @returns string
     * @example let unit_name = this.getUnit([], 1)
     */
    getUnit(units, ratio) {
        return this.vhQuerySales.getUnit_byRatio(units, ratio).unit;
    }
    /**
     * trả về tên lô theo id_lot được chọn
     * @param lots
     * @param _id
     * @returns string
     * @example this.getLotNumber([], 'DJWOIDHIEUGHWDSJDNWIHD')
     */
    getLotNumber(lots, _id) {
        let lot = lots.find(item => item._id == _id);
        return lot.lot_number;
    }
    /**
     * lọc danh sách lô của sp theo số lô (lot_number)
     * @param value
     */
    searchLot(value) {
        this.tempDetail.lots = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value), this.list_search_lot, ['lot_number']);
    }
    /**
     * mở modal chọn lô cho sp
     * @param data
     * @example this.openModalChooseLot(bill_detail_selected)
     */
    openModalChooseLot(data) {
        this.tempDetail = data;
        this.list_search_lot = this.tempDetail.lots;
        if (!this.list_search_lot.length)
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Sản phẩm này không có lô khả dụng để bán!"));
        else
            this.show_modal_select_lots = true;
    }
    /**
     * bắt sk thay đổi id_lotnumber của bill-detail
     * @param e id_lotnumber thay đổi
     * @example this.changeLot('DNIUHWIDCHBIQOHSDOIHW')
     */
    changeLot(e) {
        this.tempDetail.lot_number = this.tempDetail.lots.find(item => item._id == e).lot_number;
    }
    /**
     * bắt sk nhấn nút ok của modal chọn lô sp
     * @example this.handleChooseLot()
     */
    handleChooseLot() {
        this.show_modal_select_lots = false;
        this.tempDetail.lots = this.list_search_lot;
        if (!this.tempDetail.id_product)
            this.closeSearchProductList(this.tempDetail);
    }
    /**
     * bắt sk nhấn nút hủy modal chọn lô sp
     * @example this.handleCancelChooseLot()
     */
    handleCancelChooseLot() {
        this.show_modal_select_lots = false;
        this.tempDetail.lots = this.list_search_lot;
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_7__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_21__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_21__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_21__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_8__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__.NzModalService)); };
AddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 172, vars: 122, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "24", 1, "title", "sales-cart-header-title"], ["id", "waranty-invoice-prodAndnote-invoiceDetail", "nz-col", "", "nzSpan", "24", 1, "waranty-invoice-prodAndnote-invoiceDetail", "hideScrollbar"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "search-product-warrany"], ["slot", "end", "name", "search-outline", 2, "color", "var(--ion-color-vh-green)", "margin-right", "10px", "font-size", "1.3rem", "text-align", "end", "cursor", "pointer", 3, "click"], ["slot", "end", "src", "assets/icon/add.svg", 2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem", "text-align", "end", "cursor", "pointer", 3, "click"], ["nz-col", "", "nzSpan", "24"], [1, "hideScrollbar", "waranty-invoice-prod-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-best-selling"], ["nz-row", "", 1, "waranty-invoice-quote"], ["nz-col", "", "nzSpan", "16", 1, "waranty-invoice-quote-header"], ["nz-col", "", "nzSpan", "8", 1, "waranty-invoice-quote-header", 2, "text-align", "end"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 2, "font-size", "0.9rem", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], ["id", "waranty-invoice-quote-invoiceDetail", 1, "hideScrollbar", "waranty-invoice-quote-invoiceDetail"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], [1, "sales-bills-staff-name"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar", 2, "overflow", "visible"], [1, "sales-bills-customer-title"], [2, "color", "var(--ion-color-vh-white)", "padding-right", "5px", 3, "src", "click"], ["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], [4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "nz-no-border", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "nz-no-border", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax"], ["nzBorderless", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["style", "width: 16px;margin-left:10px", "src", "assets/icon/Iconfeather-edit.svg", 3, "click", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], [3, "payment_type", "id_wallet", "id_customer", "closeAndGetValuePayment"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], [3, "searchProductListWarranty", "closeSearchProductListWarranty", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditPay", ""], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice2", ""], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer", 4, "ngIf"], [3, "showDrawerAddCusomer", "closeAddCustomer", 4, "ngIf"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer", 4, "ngIf"], [1, "invoiceDetail-item"], ["nz-col", "", "nzSpan", "2", 1, "center-col", 3, "click"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "18", 1, "center-col"], ["nz-input", "", 1, "nz-no-border", 3, "ngModel", "placeholder", "ngModelChange", "blur"], ["nz-col", "", "nzSpan", "4", 4, "ngIf"], ["nz-col", "", "nzSpan", "4"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottomLeft", "nz-col", "", "nzSpan", "1", 3, "nzPopconfirmTitle", "nzOnConfirm"], ["nz-col", "", "nzSpan", "8"], [2, "margin-bottom", "0"], ["nz-col", "", "nzSpan", "3"], [2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "4", 2, "text-align", "right"], ["id", "quantity", 3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4", 1, "invoiceDetail-item-quantity", "text-end", 3, "click"], [1, "max-width-two-line", 2, "border-bottom", "1px var(--ion-color-vh-gray) solid", "margin-left", "16px"], ["style", "margin-left:5px;font-size: 0.8rem;", 4, "ngIf"], [1, "max-width-two-line"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["style", "font-size: 0.75rem; color: var(--ion-color-vh-black); font-weight: normal;", 4, "ngFor", "ngForOf"], [2, "font-size", "0.75rem", "color", "var(--ion-color-vh-black)", "font-weight", "normal"], [3, "nzLabel", "nzValue"], [2, "margin-left", "5px", "font-size", "0.8rem"], [3, "id_customer", "closeAndReceiveCustomer"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "cursor", "pointer", 3, "ngClass", "click"], ["nzBorderless", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "not-found"], ["src", "assets/icon/Iconfeather-edit.svg", 2, "width", "16px", "margin-left", "10px", 3, "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], [3, "searchProductListWarranty", "closeSearchProductListWarranty"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "8", 1, "center-col"], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "edit-pay", 3, "value"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], ["nz-row", "", 4, "ngFor", "ngForOf"], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", "padding", "8px 0", 3, "nzValue"], [2, "text-align", "center"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer"], [3, "showDrawerAddCusomer", "closeAddCustomer"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](16, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](20, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_Template_ion_icon_click_20_listener() { return ctx.openSearchProductListWarranty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](21, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_Template_ion_icon_click_21_listener() { return ctx.invoice.addWarrantyProd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](24, AddComponent_div_24_Template, 8, 5, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](31, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_Template_ion_icon_click_31_listener() { return ctx.invoice.addWarrantyNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](34, AddComponent_div_34_Template, 7, 4, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](37, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](42, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_Template_button_click_42_listener() { return ctx.openSearchProductList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](43, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](48, AddComponent_div_48_Template, 24, 16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](52, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](53, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](56, "app-staff", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeAndReceiveEmployee", function AddComponent_Template_app_staff_closeAndReceiveEmployee_56_listener($event) { return ctx.closeAndReceiveReceptionist($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](61, "app-staff", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeAndReceiveEmployee", function AddComponent_Template_app_staff_closeAndReceiveEmployee_61_listener($event) { return ctx.closeAndReceiveTechnician($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](63, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](66, "nz-date-picker", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_66_listener($event) { return ctx.pickerTime = $event; })("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_66_listener($event) { return ctx.setPickerTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](67, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](71, "nz-date-picker", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_71_listener($event) { return ctx.dateReminder = $event; })("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_71_listener($event) { return ctx.setDateReminder($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](72, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](76, "nz-date-picker", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_76_listener($event) { return ctx.dateSchedule = $event; })("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_76_listener($event) { return ctx.setDateSchedule($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](79, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](82, "ion-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_Template_ion_icon_click_82_listener() { return ctx.openDrawerAddCustomerOrRetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](83, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](84, "nz-radio-group", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_radio_group_ngModelChange_84_listener($event) { return ctx.radioValue = $event; })("ngModelChange", function AddComponent_Template_nz_radio_group_ngModelChange_84_listener($event) { return ctx.changeCustomerType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](85, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](88, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](91, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](94, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](95, AddComponent_ng_container_95_Template, 2, 4, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](96, AddComponent_ng_container_96_Template, 3, 2, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](97, AddComponent_ng_container_97_Template, 3, 2, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](98, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](99, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](102, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](103, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](105, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](106, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](108, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](109, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](111, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](112, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("blur", function AddComponent_Template_input_blur_112_listener() { return ctx.editDiscount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](113, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](117, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("blur", function AddComponent_Template_input_blur_117_listener() { return ctx.editFee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](118, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](121, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](122, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](123, AddComponent_nz_select_123_Template, 2, 2, "nz-select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](124, AddComponent_span_124_Template, 2, 0, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](125, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](127, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](133, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](134, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](135, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](137, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](139);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](140, AddComponent_img_140_Template, 1, 0, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](141, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](142, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](144, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](145, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](147, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](148, "app-tax", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("closeAndGetValuePayment", function AddComponent_Template_app_tax_closeAndGetValuePayment_148_listener($event) { return ctx.closeAndGetValuePayment($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](149, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](150, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_Template_button_click_150_listener() { return ctx.payInvoice(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](151);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](152, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](153, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AddComponent_Template_button_click_153_listener() { return ctx.payInvoice(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](155, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](156, AddComponent_app_search_product_156_Template, 1, 2, "app-search-product", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](157, AddComponent_app_search_product_warranty_invoice_157_Template, 1, 1, "app-search-product-warranty-invoice", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](158, AddComponent_nz_modal_158_Template, 5, 5, "nz-modal", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](159, "nz-modal", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_159_listener($event) { return ctx.edit_pay = $event; })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_159_listener() { return ctx.handleCancelEditPay(); })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_159_listener() { return ctx.handleEditPay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](160, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](161, AddComponent_ng_container_161_Template, 7, 4, "ng-container", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](162, AddComponent_ng_template_162_Template, 6, 6, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](164, "nz-modal", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_164_listener($event) { return ctx.show_modal_select_lots = $event; })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_164_listener() { return ctx.handleCancelChooseLot(); })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_164_listener() { return ctx.handleChooseLot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](165, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](166, AddComponent_ng_container_166_Template, 11, 7, "ng-container", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](167, AddComponent_ng_template_167_Template, 6, 7, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](169, AddComponent_app_customer_profile_169_Template, 1, 2, "app-customer-profile", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](170, AddComponent_app_add_customer_170_Template, 1, 1, "app-add-customer", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](171, AddComponent_app_retail_info_171_Template, 1, 4, "app-retail-info", 60);
    } if (rf & 2) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](163);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵreference"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 68, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](11, 70, "Create receipts & quote"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 72, "Warranty, repair products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.invoice.getWarrantyProd());
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](29, 74, "Note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.invoice.getWarrantyNote());
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](40, 76, "Quote"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](45, 78, "Search (F4)"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx.invoice.getInvoiceDetail());
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](55, 80, "Receptionist"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id_employee", ctx.invoice.getIdEmployee());
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](60, 82, "Technician"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id_employee", ctx.invoice.getIdTechnician());
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](65, 84, "Issued date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.pickerTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](70, 86, "Date reminder"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.dateReminder);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](75, 88, "Date schedule"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.dateSchedule);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](81, 90, "Customer information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("src", ctx.invoice.getRetailName() ? "assets/icon/eye.svg" : "assets/icon/add.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](87, 92, "Retail customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](90, 94, "Member"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzValue", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](93, 96, "Search customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.radioValue == 1 && ctx.invoice.getRetailName());
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.radioValue == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.radioValue == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](101, 98, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](105, 100, "SubTotal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.getSubTotal()));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](111, 102, "Discount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.getDiscount()));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](116, 104, "Fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("value", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.getFee()));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](121, 106, "Tax"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.listTax.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.listTax.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.getTaxValue()), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](130, 108, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.getTotalATax()));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](137, 110, "Pay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.getPayment()), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.invoice.getPaymentType() != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](144, 112, "Rest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.invoice.getTotalATax() - ctx.invoice.getPayment()), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("payment_type", ctx.invoice.getPaymentType())("id_wallet", ctx.invoice.getIdWallet())("id_customer", ctx.invoice.getIdPartner());
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("disabled", !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](152, 114, "Complete & Print"), " (F2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](155, 116, "Complete"), " (F1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.searchProductList);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.searchProductListWarranty);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](160, 118, "Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzVisible", ctx.edit_pay)("nzFooter", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](165, 120, "Select lot number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("nzFooter", _r16)("nzVisible", ctx.show_modal_select_lots);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.visibleInfoCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.showDrawerAddCusomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.showDrawerAddRetail);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_23__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_24__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_25__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_26__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_23__.NzColDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_27__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_29__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_30__.NzWaveDirective, _components_staff_staff_component__WEBPACK_IMPORTED_MODULE_9__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_31__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_33__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_33__.NzRadioComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_34__.NzInputDirective, _components_tax_tax_component__WEBPACK_IMPORTED_MODULE_10__.TaxComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_22__.NzModalContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_32__.DefaultValueAccessor, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_35__.NzInputNumberComponent, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_36__.NzPopconfirmDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_37__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_37__.NzOptionComponent, _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_11__.CustomerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _components_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_12__.SearchCustomerComponent, _components_search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_13__.SearchCustomerComponent, _components_search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_14__.SearchProductComponent, _components_search_search_product_warranty_invoice_search_product_warranty_invoice_component__WEBPACK_IMPORTED_MODULE_15__.SearchProductWarrantyInvoiceComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_34__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_34__.NzInputGroupWhitSuffixOrPrefixDirective, _components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_16__.CustomerProfileComponent, _components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_17__.AddCustomerComponent, _components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_18__.RetailInfoComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 13%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-price[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 0.9rem;\n  border-bottom: solid 1px #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .search-product-warrany[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .search-product-warrany[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .waranty-invoice-prod-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .waranty-invoice-prodAndnote-invoiceDetail[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  grid-column: 1/3;\n  overflow-y: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-header[_ngcontent-%COMP%] {\n  height: 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 30% 20% 40% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-green) !important;\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .deactive[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   nz-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   app-customer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-gray);\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7QUFFSjtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FBRUY7QUFERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7QUFHSjtBQUZJOzs7O0VBS0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBR047QUFESTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR047QUFGTTtFQUNFLFdBQUE7QUFJUjtBQUhRO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUtWO0FBSFE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUtWO0FBRk07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUlSO0FBSFE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBS1Y7QUFEUTtFQUNFLGNBQUE7QUFHVjtBQUFNO0VBQ0Usa0JBQUE7QUFFUjtBQUNJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUNRO0VBQ0Usa0JBQUE7QUFDVjtBQUFVO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUVaO0FBQ1E7RUFDRSxXQUFBO0FBQ1Y7QUFDUTtFQUNFLGtCQUFBO0FBQ1Y7QUFBVTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVaO0FBRFk7RUFDRSxlQUFBO0FBR2Q7QUFBWTtFQUNFLDZCQUFBO0VBQ0EsNkJBQUE7QUFFZDtBQUlJO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUFGTjtBQUdNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBRFI7QUFFUTtFQUVFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFEVjtBQUVVO0VBQ0UsVUFBQTtBQUFaO0FBR1E7RUFDRSxrQkFBQTtBQURWO0FBSU07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUdRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQURWO0FBRVU7RUFDRSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtBQUFaO0FBR1E7RUFDRSxnQ0FBQTtBQURWO0FBR1E7RUFDRSxjQUFBO0FBRFY7QUFJVTtFQUNFLGlCQUFBO0FBRlo7QUFLUTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBSFY7QUFLUTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUhWO0FBTU07RUFFRSxhQUFBO0VBQ0EsOEJBQUE7QUFMUjtBQU9NO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMUjtBQU9VO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBTFo7QUFVVTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVJaO0FBWVU7RUFDRSxVQUFBO0FBVlo7QUFjVTtFQUNFLGVBQUE7QUFaWjtBQWNVO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQVpaO0FBZVE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQWJWO0FBY1U7RUFDRSxXQUFBO0FBWlo7QUFnQk07RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0FBZFI7QUFlUTtFQUNFLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQWJWO0FBZVE7RUFDRSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFFQSx1QkFBQTtBQWRWO0FBb0JBO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQWpCRjtBQW1CQTs7RUFFRSxpQkFBQTtBQWhCRjtBQWtCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWZGO0FBaUJBLGtCQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUF1QixnQkFBQTtFQUN2Qix3QkFBQTtFQUEwQixtQ0FBQTtBQVo1QjtBQWVBO0VBQ0UsVUFBQTtFQUFZLGtDQUFBO0FBWGQ7QUFjQTtFQUNFLFdBQUE7QUFYRjtBQVlDO0VBQ0ksMEJBQUE7QUFWTDtBQWNBO0VBQ0MsV0FBQTtBQVhEIiwiZmlsZSI6ImFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBpIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICAuc2FsZXMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY1JSAzNSU7XHJcbiAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgICYtY2FydCxcclxuICAgICYtYmVzdC1zZWxsaW5nLFxyXG4gICAgLnNhbGVzLWJpbGxzLXN0YWZmLFxyXG4gICAgLnNhbGVzLWJpbGxzLWN1c3RvbWVyLFxyXG4gICAgLnNhbGVzLWJpbGxzLWNvbnRlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgJi1jYXJ0IHtcclxuICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgJi1oZWFkZXIge1xyXG4gICAgICAgIGhlaWdodDogMTMlO1xyXG4gICAgICAgIC5idG4tZGF0YSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1wcmljZSB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzhjN2NjO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc2VhcmNoLXByb2R1Y3Qtd2FycmFueSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAud2FyYW50eS1pbnZvaWNlLXByb2QtaW52b2ljZURldGFpbCB7XHJcbiAgICAgICAgLmludm9pY2VEZXRhaWwtaXRlbSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLndhcmFudHktaW52b2ljZS1wcm9kQW5kbm90ZS1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtYmVzdC1zZWxsaW5nIHtcclxuICAgICAgZ3JpZC1yb3c6IDIvMztcclxuICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAud2FyYW50eS1pbnZvaWNlLXF1b3RlIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLndhcmFudHktaW52b2ljZS1xdW90ZS1oZWFkZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53YXJhbnR5LWludm9pY2UtcXVvdGUtaW52b2ljZURldGFpbCB7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAuaW52b2ljZURldGFpbC1pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgJi1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWRlY2VlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1iaWxscyB7XHJcbiAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSAyMCUgNDAlIDEwJTtcclxuICAgICAgJi1zdGFmZiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICYtdGltZSxcclxuICAgICAgICAmLW5hbWUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgbnotZGF0ZS1waWNrZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBiIHtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1jdXN0b21lciB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogI2M4YzdjYztcclxuICAgICAgICB9XHJcbiAgICAgICAgbnotcmFkaW8tZ3JvdXAge1xyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXBwLWN1c3RvbWVyIHtcclxuICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLWN1c3RvbWVyID4gZGl2LFxyXG4gICAgICAmLWNvbnRlbnQgPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB9XHJcbiAgICAgICYtY29udGVudCB7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBkaXYgPiB7XHJcbiAgICAgICAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1kaXNjb3VudCxcclxuICAgICAgICAmLWZlZSB7XHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi10YXgge1xyXG4gICAgICAgICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtcGF5IHtcclxuICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLXBheW1lbnRfdHlwZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgYXBwLXRheCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIC5vcmRlci1hbmQtcHJpbnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgICAgICAgLy9tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbi5jZW50ZXItY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLyogSGlkZSBzY3JvbGxiYXIqL1xyXG4uaGlkZVNjcm9sbGJhciB7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGb3IgRmlyZWZveCAqL1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXHJcbn1cclxuXHJcbi5oaWRlU2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDsgLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxufVxyXG5cclxuOjpuZy1kZWVwIC5yYWRpby1wdXJjaGFzZSAgc3BhbntcclxuICB3aWR0aDogMTAwJTtcclxuIC5hbnQtcmFkaW97XHJcbiAgICAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucmFkaW8tcHVyY2hhc2UgIC5hbnQtcmFkaW97XHJcbiB3aWR0aDogMTZweDsgXHJcbn0iXX0= */"] });


/***/ }),

/***/ 49040:
/*!****************************************************************************!*\
  !*** ./src/app/sales/menu/manage/warranty/receipt-quote/add/add.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddModule": () => (/* binding */ AddModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.component */ 88702);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 34261);
/* harmony import */ var src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/search/search.module */ 43818);
/* harmony import */ var src_app_canLeavePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/canLeavePage */ 50495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);












const routes = [
    {
        path: '',
        component: _add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        canDeactivate: [src_app_canLeavePage__WEBPACK_IMPORTED_MODULE_4__.CanLeavePage]
    }
];
class AddModule {
}
AddModule.ɵfac = function AddModule_Factory(t) { return new (t || AddModule)(); };
AddModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AddModule });
AddModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_3__.SearchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AddModule, { declarations: [_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_3__.SearchModule] }); })();


/***/ }),

/***/ 89355:
/*!************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/warranty/receipt-quote/components/add-customer/add-customer.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomerComponent": () => (/* binding */ AddCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/function.service */ 96781);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function AddCustomerComponent_ng_container_2_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Customer name is required"), " ");
} }
function AddCustomerComponent_ng_container_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddCustomerComponent_ng_container_2_ng_template_12_ng_container_0_Template, 3, 3, "ng-container", 16);
} if (rf & 2) {
    const control_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r12.hasError("required"));
} }
function AddCustomerComponent_ng_container_2_ng_template_28_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "_Invalid phone number"));
} }
function AddCustomerComponent_ng_container_2_ng_template_28_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Phone number is required"));
} }
function AddCustomerComponent_ng_container_2_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddCustomerComponent_ng_container_2_ng_template_28_ng_container_0_Template, 3, 3, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddCustomerComponent_ng_container_2_ng_template_28_ng_container_1_Template, 3, 3, "ng-container", 16);
} if (rf & 2) {
    const control_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r14.hasError("invalidPhone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r14.hasError("required"));
} }
function AddCustomerComponent_ng_container_2_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Phone number already exists"), " ");
} }
function AddCustomerComponent_ng_container_2_ng_container_42_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Tax code is required"), " ");
} }
function AddCustomerComponent_ng_container_2_ng_container_42_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddCustomerComponent_ng_container_2_ng_container_42_ng_template_11_ng_container_0_Template, 3, 3, "ng-container", 16);
} if (rf & 2) {
    const control_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r19.hasError("required"));
} }
function AddCustomerComponent_ng_container_2_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddCustomerComponent_ng_container_2_ng_container_42_ng_template_11_Template, 1, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 3, "Tax code"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 5, "Enter tax code"));
} }
function AddCustomerComponent_ng_container_2_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_ng_container_2_ng_container_43_Template_nz_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r21.selectedValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "nz-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "nz-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "nz-date-picker", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, "Gender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 9, "Select gender"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r9.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 11, "Female"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 13, "Male"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 15, "Date of birth"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 17, "Select date of birth"));
} }
function AddCustomerComponent_ng_container_2_nz_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 19);
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", item_r23._id)("nzLabel", item_r23.name);
} }
function AddCustomerComponent_ng_container_2_div_118_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "This field is required"), " ");
} }
function AddCustomerComponent_ng_container_2_div_118_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddCustomerComponent_ng_container_2_div_118_ng_template_12_ng_container_0_Template, 3, 3, "ng-container", 16);
} if (rf & 2) {
    const control_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", control_r26.hasError("required"));
} }
function AddCustomerComponent_ng_container_2_div_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddCustomerComponent_ng_container_2_div_118_ng_template_12_Template, 1, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, "Payment term"), "(", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "day"), ")*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 8, "Enter number of days"));
} }
const _c0 = function () { return { minRows: 3, maxRows: 5 }; };
function AddCustomerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AddCustomerComponent_ng_container_2_ng_template_12_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomerComponent_ng_container_2_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.openSearchCountryCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function AddCustomerComponent_ng_container_2_Template_input_input_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r30.formatPhoneNumber($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddCustomerComponent_ng_container_2_ng_template_28_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddCustomerComponent_ng_container_2_div_30_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "nz-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_ng_container_2_Template_nz_select_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.changeBusiness($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "nz-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "nz-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, AddCustomerComponent_ng_container_2_ng_container_42_Template, 13, 7, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, AddCustomerComponent_ng_container_2_ng_container_43_Template, 21, 19, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "nz-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "nz-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, AddCustomerComponent_ng_container_2_nz_option_65_Template, 1, 2, "nz-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](85, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](95, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](105, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](110, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](112, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddCustomerComponent_ng_container_2_Template_label_ngModelChange_115_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.changeDebt(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](117, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](118, AddCustomerComponent_ng_container_2_div_118_Template, 14, 10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](13);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.addCustomerForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 39, "Customer name"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 41, "Enter customer name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 43, "Phone number"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzErrorTip", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+", ctx_r0.callingCode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r0.formattedPhone)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 45, "Enter customer phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isExitsPhone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](35, 47, "Customer type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 49, "Select customer type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](39, 51, "Individual"))("nzValue", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](41, 53, "Business/Business household"))("nzValue", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.addCustomerForm.value.isBusiness);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.addCustomerForm.value.isBusiness);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 55, "Email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzErrorTip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](51, 57, "Email is not correct"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 59, "Enter customer mail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](59, 61, "Customer tier"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAllowClear", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](64, 63, "Undefined"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.customerGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](70, 65, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](75, 67, "Enter address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 69, "Country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](85, 71, "Enter country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](90, 73, "Province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](95, 75, "Enter province"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](100, 77, "District"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](105, 79, "Enter district"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](110, 81, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](112, 83, "Enter note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](87, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](117, 85, "Debit permission"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.addCustomerForm.value.debt_enable);
} }
const _c1 = function (a0) { return { opacity: a0 }; };
function AddCustomerComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomerComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddCustomerComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.addCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 4, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.addCustomerForm.invalid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, ctx_r2.addCustomerForm.invalid ? 0.5 : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, "Add"));
} }
class AddCustomerComponent {
    constructor(vhComponent, lang, vhQuerySales, functionService) {
        this.vhComponent = vhComponent;
        this.lang = lang;
        this.vhQuerySales = vhQuerySales;
        this.functionService = functionService;
        this.customerGroups = this.vhQuerySales.getlocalCustomerClasss();
        this.showDrawerAddCusomer = false;
        this.closeAddCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        /** Kiểm tra số điện thoại đã tồn tại ha chưa để hiển thị thông báo */
        this.isExitsPhone = false;
        /** Mã quốc gia */
        this.countryCode = this.functionService.defaultCountryCode;
        /** Calling code */
        this.callingCode = this.functionService.defaultCallingCode;
        /** Số điện thoại đã format. VD: 333 333 333 */
        this.formattedPhone = '';
    }
    ngOnInit() {
        this.initaddCustomerForm();
    }
    close(success) {
        this.closeAddCustomer.emit(success ? true : false);
    }
    initaddCustomerForm() {
        this.addCustomerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email])),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            datebirth: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                this.functionService.phoneValidator(() => this.countryCode),
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            note: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            debt_enable: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(true),
            id_customer_class: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(1),
            id_branch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.vhQuerySales.getDefaultBranch()._id),
            time_for_payment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])),
            delete_hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            isBusiness: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(false),
            taxcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
        });
    }
    addCustomer() {
        this.vhComponent.showLoading("").then(() => {
            let customer = Object.assign({}, this.addCustomerForm.value);
            const phoneNumberValue = customer.phone;
            customer.countryCode = this.countryCode;
            customer.phone = this.functionService.getNationalPhoneNumber(phoneNumberValue, this.countryCode);
            customer.phoneNumber = this.functionService.getInternationalPhoneNumber(phoneNumberValue, this.countryCode);
            customer.date = new Date();
            if (customer.isBusiness) {
                delete customer.gender;
                delete customer.datebirth;
            }
            else {
                delete customer.taxcode;
            }
            this.vhQuerySales.addCustomer(customer)
                .then((res) => {
                if (res.vcode == 0) {
                    this.vhComponent.hideLoading(0);
                    setTimeout(() => {
                        this.vhComponent.showToast(1500, `${this.lang.translate("Customer")} ${customer.name} ${this.lang.translate("has been added successfully")}`, "success-toast");
                        this.closeAddCustomer.emit(res['_id']);
                    }, 300);
                }
                else if (res.vcode == 1) {
                    //This phone number is already in use with another customer
                    this.vhComponent.hideLoading(0);
                    this.vhComponent.showToast(1500, this.lang.translate("This phone number is already in use with another customer"), 'alert-toast');
                }
            }, error => {
                this.vhComponent.hideLoading(0);
                this.vhComponent.showToast(1500, this.lang.translate("An eror occured while adding customer. Please try again"), 'alert-toast');
            });
        });
    }
    changeDebt() {
        if (this.addCustomerForm.value.debt_enable)
            this.addCustomerForm.addControl('time_for_payment', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]));
        else
            this.addCustomerForm.removeControl('time_for_payment');
    }
    /**
     * Khi thay đổi Loại khách hàng
     */
    changeBusiness(event) {
        var _a, _b, _c, _d;
        // taxcode required khi isBusiness = true
        if (event) {
            (_a = this.addCustomerForm.get('taxcode')) === null || _a === void 0 ? void 0 : _a.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
            (_b = this.addCustomerForm.get('taxcode')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
        }
        else {
            (_c = this.addCustomerForm.get('taxcode')) === null || _c === void 0 ? void 0 : _c.clearValidators();
            (_d = this.addCustomerForm.get('taxcode')) === null || _d === void 0 ? void 0 : _d.updateValueAndValidity();
        }
    }
    /**
     * Mở modal chọn mã quốc gia
     */
    openSearchCountryCode() {
        this.functionService.openSearchCountryCode().then((data) => {
            var _a, _b, _c;
            this.countryCode = data.code;
            this.callingCode = data.callingCode;
            this.formattedPhone = this.functionService.getFormattedPhoneNumber(this.addCustomerForm.value.phone, this.countryCode);
            (_a = this.addCustomerForm.get('phone')) === null || _a === void 0 ? void 0 : _a.markAsTouched();
            (_b = this.addCustomerForm.get('phone')) === null || _b === void 0 ? void 0 : _b.markAsDirty();
            (_c = this.addCustomerForm.get('phone')) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
        }).catch((error) => {
            console.error('Error opening country code search:', error);
        });
    }
    /**
     * Format số điện thoại khi nhập và set vào form
     * @param event Sự kiện khi nhập số điện thoại
     */
    formatPhoneNumber(event) {
        var _a;
        // Lấy số điện thoại đã format
        const input = event.target.value;
        this.formattedPhone = this.functionService.getFormattedPhoneNumber(input, this.countryCode);
        // Cập nhật vào form
        (_a = this.addCustomerForm.get('phone')) === null || _a === void 0 ? void 0 : _a.setValue(this.formattedPhone, { emitEvent: false });
    }
}
AddCustomerComponent.ɵfac = function AddCustomerComponent_Factory(t) { return new (t || AddCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService)); };
AddCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddCustomerComponent, selectors: [["app-add-customer"]], inputs: { showDrawerAddCusomer: "showDrawerAddCusomer" }, outputs: { closeAddCustomer: "closeAddCustomer" }, decls: 5, vars: 7, consts: [[3, "nzMaskClosable", "nzWidth", "nzTitle", "nzVisible", "nzFooter", "nzOnClose"], [4, "nzDrawerContent"], ["footerAddCustomer", ""], ["nz-form", "", 3, "formGroup"], ["nz-col", "", "nzSpan", "24"], [1, "label"], [3, "nzErrorTip"], ["formControlName", "name", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplName", ""], [1, "calling-code", 3, "click"], ["nz-icon", "", "nzType", "caret-down", "nzTheme", "outline"], ["formControlName", "phone", "type", "tel", "nz-input", "", "required", "", 3, "value", "placeholder", "input"], ["combineTplPhone", ""], ["class", "ng-tns-c300-27 ant-form-item-explain ant-form-item-explain-error ng-star-inserted", "ng-reflect-ng-class", "ant-form-item-explain,ant-form", 4, "ngIf"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "isBusiness", 3, "nzPlaceHolder", "ngModelChange"], [3, "nzLabel", "nzValue"], [4, "ngIf"], ["type", "email", "formControlName", "email", "nz-input", "", 3, "placeholder"], ["nzShowSearch", "", "formControlName", "id_customer_class", 3, "nzAllowClear"], [3, "nzValue", "nzLabel"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["formControlName", "address", "nz-input", "", 3, "placeholder"], ["formControlName", "country", "nz-input", "", 3, "placeholder"], ["formControlName", "province", "nz-input", "", 3, "placeholder"], ["formControlName", "district", "nz-input", "", 3, "placeholder"], ["nz-input", "", "formControlName", "note", 3, "placeholder", "nzAutosize"], ["nz-col", "", "nzSpan", "12", 2, "padding-top", "22px"], ["nz-checkbox", "", "formControlName", "debt_enable", 3, "ngModelChange"], ["nz-row", "", 4, "ngIf"], ["ng-reflect-ng-class", "ant-form-item-explain,ant-form", 1, "ng-tns-c300-27", "ant-form-item-explain", "ant-form-item-explain-error", "ng-star-inserted"], [1, "ng-tns-c300-27", "ng-trigger", "ng-trigger-helpMotion"], ["formControlName", "taxcode", "nz-input", "", 3, "placeholder"], ["taxcode", ""], ["nz-row", "", "nzGutter", "16"], ["nz-col", "", "nzSpan", "12"], ["nzShowSearch", "", "nzAllowClear", "", "formControlName", "gender", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], ["nzValue", "Female", 3, "nzLabel"], ["nzValue", "Male", 3, "nzLabel"], ["formControlName", "datebirth", 3, "nzPlaceHolder"], ["nz-row", ""], ["formControlName", "time_for_payment", "nz-input", "", "required", "", "type", "number", "min", "0", 3, "placeholder"], ["combineTplTime", ""], [1, "footerAddCustomer", 2, "float", "right"], ["nz-button", "", 2, "margin-right", "8px", 3, "click"], ["nz-button", "", 3, "disabled", "ngStyle", "click"]], template: function AddCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function AddCustomerComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddCustomerComponent_ng_container_2_Template, 119, 88, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddCustomerComponent_ng_template_3_Template, 7, 10, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, "Add customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 400)("nzVisible", ctx.showDrawerAddCusomer)("nzFooter", _r1);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_6__.NzDrawerContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_7__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_13__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzAutosizeDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_14__.NzCheckboxComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: [".ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n\n.footerAddCustomer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-gray);\n  border: 1px solid var(--ion-color-vh-gray);\n  background-color: var(--ion-color-vh-white);\n}\n\n.footerAddCustomer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-white);\n  border: 1px solid var(--ion-color-vh-green);\n  background-color: var(--ion-color-vh-green);\n}\n\nnz-date-picker[_ngcontent-%COMP%], nz-select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 100%;\n}\n\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code) {\n  position: relative;\n}\n\nnz-input-group[_ngcontent-%COMP%]:has(.calling-code)   input[_ngcontent-%COMP%] {\n  padding-left: 60px;\n}\n\n.calling-code[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 60px;\n  color: var(--ion-color-vh-gray);\n  cursor: pointer;\n  grid-gap: 2px;\n  gap: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTs7RUFFRSxvQ0FBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtBQUVKOztBQUFFO0VBQ0UsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsMkNBQUE7QUFFSjs7QUFDQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0FBRUYiLCJmaWxlIjoiYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1mb3JtLWl0ZW0ge1xyXG4gIG1hcmdpbjogMCAwIDVweDtcclxufVxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2MgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyQWRkQ3VzdG9tZXIge1xyXG4gIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICB9XHJcbiAgYnV0dG9uOm50aC1jaGlsZCgyKSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgfVxyXG59XHJcbm56LWRhdGUtcGlja2VyLFxyXG5uei1zZWxlY3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubnotaW5wdXQtZ3JvdXA6aGFzKC5jYWxsaW5nLWNvZGUpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm56LWlucHV0LWdyb3VwOmhhcyguY2FsbGluZy1jb2RlKSBpbnB1dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xyXG59XHJcblxyXG4uY2FsbGluZy1jb2RlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 408:
/*!********************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/warranty/receipt-quote/components/bill/bill.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillComponent": () => (/* binding */ BillComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 92131);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);










const _c0 = function () { return { minRows: 2, maxRows: 4 }; };
class BillComponent {
    constructor(vhAlgorithm) {
        this.vhAlgorithm = vhAlgorithm;
        this.type_payment = '1';
        this.id_tax = 'a';
        this.options = [
            {
                value: '1',
                label: 'Tiền mặt',
                isLeaf: true
            },
            {
                value: '2',
                label: 'Công nợ',
                isLeaf: true
            },
            {
                value: '3',
                label: 'Tài khoản',
                children: [
                    {
                        value: 'vietcombank',
                        label: 'Vietcombank',
                        isLeaf: true
                    },
                    {
                        value: 'sacombank',
                        label: 'Sacombank',
                        isLeaf: true
                    }
                ]
            }
        ];
        this.nzOptions = this.options;
        this.value1 = null;
        this.value = 0;
        this.valuetax = 0;
        this.editStr = '0';
    }
    ngOnInit() {
        this.intStr = parseInt(this.editStr);
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            this.discount = this.vhAlgorithm.vhnumeral(".discount");
            this.tax = this.vhAlgorithm.vhnumeral(".tax");
            this.payment = this.vhAlgorithm.vhnumeral(".payment-price");
        });
    }
    onChanges(values) {
    }
}
BillComponent.ɵfac = function BillComponent_Factory(t) { return new (t || BillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAlgorithm)); };
BillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BillComponent, selectors: [["app-bill"]], decls: 83, vars: 42, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "24"], [1, "content"], ["nz-row", "", 1, "cus-padd"], ["nz-col", "", "nzSpan", "12"], ["nz-col", "", "nzSpan", "12", 1, "right-div"], ["nz-col", "", "nzSpan", "12", 1, "center-div"], ["type", "text", "maxlength", "15", "nz-input", "", "placeholder", "0", 1, "no-border", "discount"], ["type", "text", "maxlength", "15", "nz-input", "", "placeholder", "0", 1, "no-border", "tax"], ["nz-col", "", "nzSpan", "8", 1, "center-div"], ["nz-col", "", "nzSpan", "8"], ["nzBorderless", "", 3, "ngModel"], ["nzValue", "a", "nzLabel", "10%"], ["nzValue", "b", "nzLabel", "5%"], ["nz-col", "", "nzSpan", "8", 1, "right-div", 2, "align-items", "center"], [2, "font-size", "0.9rem"], ["nz-col", "", "nzSpan", "10", 1, "right-div", "payment"], ["type", "text", "maxlength", "15", "nz-input", "", "placeholder", "0", 1, "no-border", "payment-price", "payment"], ["nz-col", "", "nzSpan", "2", 1, "ion-price"], ["src", "assets/icon/Iconfeather-edit.svg", 2, "width", "16px"], ["nz-col", "", "nzSpan", "12", 1, "right-div", "payment"], [3, "nzOptions", "ngModel", "nzPlaceHolder", "ngModelChange"], ["nz-input", "", 3, "placeholder", "nzAutosize"]], template: function BillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "15,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "1,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "16,500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "16,500 \u0111");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "nz-cascader", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BillComponent_Template_nz_cascader_ngModelChange_67_listener($event) { return ctx.value1 = $event; })("ngModelChange", function BillComponent_Template_nz_cascader_ngModelChange_67_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Ti\u1EC1n kh\u00E1ch tr\u1EA3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Ti\u1EC1n th\u1EEBa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 15, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 17, "Quantity"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 19, "SubTotal"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 21, "Discount"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 23, "Fee"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 25, "Tax"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.id_tax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 27, "Total"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 31, "Pay")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 35, "Rest")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 37, "Payment method"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("ngModel", ctx.value1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](82, 39, "Enter note..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_5__.NzOptionComponent, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_7__.NzCascaderComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_4__.NzAutosizeDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.UpperCasePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-white) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 5px 10px 5px 10px;\n  height: 100%;\n  width: 95%;\n  margin-left: 20px;\n}\nnz-layout[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  padding: 5px 0 5px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cus-padd[_ngcontent-%COMP%] {\n  padding-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .cus-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #C8C7CC;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .no-border[_ngcontent-%COMP%] {\n  border: none !important;\n  text-align: end;\n  padding-right: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .ion-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 5px;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\nnz-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpRUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtBQUVKO0FBQUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0FBRUo7QUFESTtFQUNFLGdCQUFBO0FBR047QUFETTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtBQUdSO0FBRE07RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUdSO0FBRE07RUFDRSxXQUFBO0FBR1I7QUFETTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBR1I7QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUU7RUFDRSxxQkFBQTtFQUF1QixnQkFBQTtFQUN2Qix3QkFBQTtFQUEwQixtQ0FBQTtBQUk5QjtBQURFO0VBQ0UsVUFBQTtFQUFZLGtDQUFBO0FBSWhCIiwiZmlsZSI6ImJpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1sYXlvdXQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgYntcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgLmNvbnRlbnR7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMDtcclxuICAgIC5jdXMtcGFkZHtcclxuICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIH1cclxuICAgICAgLnBheW1lbnR7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5jdXMtc2VsZWN0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOEM3Q0M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0YXJlYXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAubm8tYm9yZGVye1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIC5pb24tcHJpY2V7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwcHg7IC8qIEZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 34261:
/*!******************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/warranty/receipt-quote/components/components.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./staff/staff.component */ 46824);
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer/customer.component */ 92225);
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill/bill.component */ 408);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-customer/add-customer.component */ 89355);
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-profile/customer-profile.component */ 72213);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _tax_tax_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tax/tax.component */ 30748);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./retail-info/retail-info.component */ 9152);
/* harmony import */ var _search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-customer/search-customer.component */ 49333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);















class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_6__.NgZorroAntModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.ScrollingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_staff_staff_component__WEBPACK_IMPORTED_MODULE_0__.StaffComponent,
        _customer_customer_component__WEBPACK_IMPORTED_MODULE_1__.CustomerComponent,
        _bill_bill_component__WEBPACK_IMPORTED_MODULE_2__.BillComponent,
        _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_3__.AddCustomerComponent,
        _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_4__.CustomerProfileComponent,
        _tax_tax_component__WEBPACK_IMPORTED_MODULE_5__.TaxComponent,
        _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_4__.CustomerProfileComponent,
        _retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_7__.RetailInfoComponent,
        _search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_8__.SearchCustomerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_6__.NgZorroAntModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__.ScrollingModule], exports: [_staff_staff_component__WEBPACK_IMPORTED_MODULE_0__.StaffComponent,
        _customer_customer_component__WEBPACK_IMPORTED_MODULE_1__.CustomerComponent,
        _bill_bill_component__WEBPACK_IMPORTED_MODULE_2__.BillComponent,
        _tax_tax_component__WEBPACK_IMPORTED_MODULE_5__.TaxComponent,
        _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_4__.CustomerProfileComponent,
        _retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_7__.RetailInfoComponent,
        _add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_3__.AddCustomerComponent,
        _search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_8__.SearchCustomerComponent] }); })();


/***/ }),

/***/ 72213:
/*!********************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/warranty/receipt-quote/components/customer-profile/customer-profile.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerProfileComponent": () => (/* binding */ CustomerProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






function CustomerProfileComponent_ng_container_1_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 2, "Tax code"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.customer.taxcode, "");
} }
function CustomerProfileComponent_ng_container_1_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "Gender"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx_r2.customer.gender), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, "Date of birth"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 10, ctx_r2.customer.datebirth, "dd/MM/yyyy"), "");
} }
function CustomerProfileComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CustomerProfileComponent_ng_container_1_ng_container_24_Template, 7, 4, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CustomerProfileComponent_ng_container_1_ng_container_25_Template, 15, 13, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 21, "Customer information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 23, "Customer name"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 25, "Phone number"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 27, "Customer type"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 29, ctx_r0.customer.isBusiness ? "Business/Business household" : "Individual"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.customer.isBusiness);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.customer.isBusiness);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 31, "Email"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 33, "Address"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 35, "Country"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 37, "Province"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.province, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 39, "District"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.district, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 41, "Note"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.note, "");
} }
class CustomerProfileComponent {
    constructor() {
        this.visibleInfoCustomer = false;
        this.closeInfoCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    goBack() {
        this.closeInfoCustomer.emit(false);
    }
}
CustomerProfileComponent.ɵfac = function CustomerProfileComponent_Factory(t) { return new (t || CustomerProfileComponent)(); };
CustomerProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerProfileComponent, selectors: [["app-customer-profile"]], inputs: { visibleInfoCustomer: "visibleInfoCustomer", customer: "customer" }, outputs: { closeInfoCustomer: "closeInfoCustomer" }, decls: 2, vars: 4, consts: [[3, "nzMaskClosable", "nzWidth", "nzTitle", "nzVisible", "nzOnClose"], [4, "nzDrawerContent"], ["nz-row", "", 1, "info-customer"], ["nz-col", "", "nzSpan", "24"], [4, "ngIf"]], template: function CustomerProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function CustomerProfileComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerProfileComponent_ng_container_1_Template, 62, 43, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 400)("nzTitle", false)("nzVisible", ctx.visibleInfoCustomer);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_1__.NzDrawerContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".info-customer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 5px 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.2 rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJjdXN0b21lci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tY3VzdG9tZXIge1xyXG4gIGRpdiB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG59XHJcbmgzIHtcclxuICBmb250LXNpemU6IDEuMiByZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 92225:
/*!****************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/warranty/receipt-quote/components/customer/customer.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerComponent": () => (/* binding */ CustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function CustomerComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzValue", item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("nzLabel", "", item_r1.name, " - ", item_r1.phone, " ");
} }
class CustomerComponent {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.closeAndReceiveCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.debt = null;
        this.customerList = [];
        this.searchList = [];
        this.searchList = [...this.customerList];
    }
    ngOnInit() {
        this.getData();
    }
    ngOnDestroy() {
        this.observableCustomers.unsubscribe();
    }
    getData() {
        this.observableCustomers = this.vhQuerySales.getObservableLocalCustomers().subscribe((localCustomers) => {
            this.customerList = localCustomers.filter(customer => {
                if (customer['_id'] != "id_retail") {
                    if (this.debt == null)
                        return true;
                    else if (customer['debt_enable'] == this.debt)
                        return true;
                    else
                        return false;
                }
                return false;
            }).map(item => { return Object.assign(Object.assign({}, item), { earning_point: item.earning_point ? item.earning_point : 0 }); });
            this.id_customer = this.id_customer ? this.id_customer : this.customerList[0]._id;
            this.searchList = this.customerList;
        });
    }
    cancel(value) {
        this.closeAndReceiveCustomer.emit(value);
    }
    search(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.customerList, ['name', 'phone']);
        else
            this.searchList = this.customerList;
    }
}
CustomerComponent.ɵfac = function CustomerComponent_Factory(t) { return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQuerySales)); };
CustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerComponent, selectors: [["app-customer"]], inputs: { id_customer: "id_customer" }, outputs: { closeAndReceiveCustomer: "closeAndReceiveCustomer" }, decls: 3, vars: 6, consts: [["nzShowSearch", "", 1, "cus-select", 3, "ngModel", "nzServerSearch", "nzPlaceHolder", "ngModelChange", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function CustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.cancel($event); })("nzOnSearch", function CustomerComponent_Template_nz_select_nzOnSearch_0_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomerComponent_nz_option_2_Template, 1, 3, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "Select customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.id_customer)("nzServerSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--ion-color-vh-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoiY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuei1zZWxlY3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9152:
/*!**********************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/warranty/receipt-quote/components/retail-info/retail-info.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RetailInfoComponent": () => (/* binding */ RetailInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);













function RetailInfoComponent_ng_container_2_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Retail name is required"), " ");
} }
function RetailInfoComponent_ng_container_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RetailInfoComponent_ng_container_2_ng_template_12_ng_container_0_Template, 3, 3, "ng-container", 12);
} if (rf & 2) {
    const control_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r7.hasError("required"));
} }
function RetailInfoComponent_ng_container_2_ng_template_24_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function RetailInfoComponent_ng_container_2_ng_template_24_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function RetailInfoComponent_ng_container_2_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RetailInfoComponent_ng_container_2_ng_template_24_ng_container_0_Template, 3, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RetailInfoComponent_ng_container_2_ng_template_24_ng_container_1_Template, 3, 3, "ng-container", 12);
} if (rf & 2) {
    const control_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r9.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r9.hasError("required"));
} }
function RetailInfoComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RetailInfoComponent_ng_container_2_ng_template_12_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RetailInfoComponent_ng_container_2_ng_template_24_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.addRetailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "Name"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzErrorTip", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "Enter customer name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 13, "Phone number"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzErrorTip", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 15, "Enter customer phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 17, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 19, "Enter address"));
} }
const _c0 = function (a0) { return { opacity: a0 }; };
function RetailInfoComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RetailInfoComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RetailInfoComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.close(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.addRetailForm.invalid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r2.addRetailForm.invalid ? 0.5 : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "Add"));
} }
class RetailInfoComponent {
    constructor() {
        this.showDrawerAddRetail = false;
        this.retail_name = '';
        this.retail_phone = '';
        this.retail_address = '';
        this.closeAddCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.initaddRetailForm();
    }
    close(success) {
        this.closeAddCustomer.emit(success ? this.addRetailForm.value : false);
    }
    initaddRetailForm() {
        this.addRetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            retail_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.retail_name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])),
            retail_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.retail_phone, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)])),
            retail_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.retail_address),
        });
    }
}
RetailInfoComponent.ɵfac = function RetailInfoComponent_Factory(t) { return new (t || RetailInfoComponent)(); };
RetailInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RetailInfoComponent, selectors: [["app-retail-info"]], inputs: { showDrawerAddRetail: "showDrawerAddRetail", retail_name: "retail_name", retail_phone: "retail_phone", retail_address: "retail_address" }, outputs: { closeAddCustomer: "closeAddCustomer" }, decls: 5, vars: 7, consts: [[3, "nzMaskClosable", "nzWidth", "nzTitle", "nzVisible", "nzFooter", "nzOnClose"], [4, "nzDrawerContent"], ["footerAddRetail", ""], ["nz-form", "", 3, "formGroup"], ["nz-col", "", "nzSpan", "24"], [1, "label"], [3, "nzErrorTip"], ["formControlName", "retail_name", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplName", ""], ["formControlName", "retail_phone", "type", "tel", "nz-input", "", "minlength", "6", "required", "", 1, "phone", 3, "placeholder"], ["combineTplPhone", ""], ["formControlName", "retail_address", "nz-input", "", 3, "placeholder"], [4, "ngIf"], [1, "footerAddRetail", 2, "float", "right"], ["nz-button", "", 2, "margin-right", "8px", 3, "click"], ["nz-button", "", 3, "disabled", "ngStyle", "click"]], template: function RetailInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function RetailInfoComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RetailInfoComponent_ng_container_2_Template, 36, 21, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RetailInfoComponent_ng_template_3_Template, 7, 10, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, "Add customer retail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 400)("nzVisible", ctx.showDrawerAddRetail)("nzFooter", _r1);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n\n.footerAddRetail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-gray);\n  border: 1px solid var(--ion-color-vh-gray);\n  background-color: var(--ion-color-vh-white);\n}\n\n.footerAddRetail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-white);\n  border: 1px solid var(--ion-color-vh-green);\n  background-color: var(--ion-color-vh-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldGFpbC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNBOztFQUVJLG9DQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0FBRVI7O0FBQUk7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQ0FBQTtBQUVSIiwiZmlsZSI6InJldGFpbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1mb3JtLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwIDAgNXB4O1xyXG59XHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyQWRkUmV0YWlsIHtcclxuICAgIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICB9XHJcbiAgICBidXR0b246bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 49333:
/*!******************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/warranty/receipt-quote/components/search-customer/search-customer.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchCustomerComponent": () => (/* binding */ SearchCustomerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function SearchCustomerComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzValue", item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("nzLabel", "", item_r1.name, " - ", item_r1.phone, "");
} }
class SearchCustomerComponent {
    constructor(vhAlgorithm, vhQuerySales) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.closeAndReceiveCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.debt = null;
        this.customerList = [];
        this.searchList = [];
        this.searchList = [...this.customerList];
    }
    ngOnInit() {
    }
    cancel(value) {
        this.closeAndReceiveCustomer.emit(value);
    }
    search(value) {
        clearTimeout(this.timer);
        // sau 500ms thì thực hiện
        this.timer = setTimeout(() => {
            let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
            if (value.length >= 6) {
                this.vhQuerySales.searchKeyword_NamePhone('customers', tempVal).then((res) => {
                    this.searchList = res.map(item => {
                        return Object.assign(Object.assign({}, item), { earning_point: item.earning_point ? item.earning_point : 0 });
                    });
                });
            }
        }, 500);
    }
}
SearchCustomerComponent.ɵfac = function SearchCustomerComponent_Factory(t) { return new (t || SearchCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQuerySales)); };
SearchCustomerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchCustomerComponent, selectors: [["app-search-customer"]], inputs: { id_customer: "id_customer" }, outputs: { closeAndReceiveCustomer: "closeAndReceiveCustomer" }, decls: 3, vars: 6, consts: [["nzShowSearch", "", 1, "cus-select", 3, "ngModel", "nzServerSearch", "nzPlaceHolder", "ngModelChange", "nzOnSearch"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function SearchCustomerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchCustomerComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.cancel($event); })("nzOnSearch", function SearchCustomerComponent_Template_nz_select_nzOnSearch_0_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchCustomerComponent_nz_option_2_Template, 1, 3, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 4, "Enter name or phone number to search ..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.id_customer)("nzServerSearch", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--ion-color-vh-black);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQ0FBQTtBQUNKIiwiZmlsZSI6InNlYXJjaC1jdXN0b21lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 46824:
/*!**********************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/warranty/receipt-quote/components/staff/staff.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaffComponent": () => (/* binding */ StaffComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);








function StaffComponent_nz_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzValue", item_r1._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzLabel", item_r1.name);
} }
class StaffComponent {
    constructor(vhComponent, vhAlgorithm, vhAuth) {
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.closeAndReceiveEmployee = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.employeeList = this.vhAuth.getlocalEmployees();
        this.searchList = [];
        this.searchList = [...this.employeeList];
        if (!this.id_employee && this.searchList.length) {
            this.id_employee = this.searchList[0]._id;
        }
    }
    cancel(value) {
        if (value)
            this.closeAndReceiveEmployee.emit(value);
    }
    selectEmployees(value) {
        if (value)
            this.vhComponent.hideModal(value);
    }
    searchBar(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.employeeList, ['name']);
        else
            this.searchList = this.employeeList;
    }
    goBack() {
        this.closeAndReceiveEmployee.emit(false);
    }
}
StaffComponent.ɵfac = function StaffComponent_Factory(t) { return new (t || StaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAuth)); };
StaffComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StaffComponent, selectors: [["app-staff"]], inputs: { id_employee: "id_employee" }, outputs: { closeAndReceiveEmployee: "closeAndReceiveEmployee" }, decls: 3, vars: 5, consts: [["nzBorderless", "", "nzShowSearch", "", 1, "cus-select", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"]], template: function StaffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StaffComponent_Template_nz_select_ngModelChange_0_listener($event) { return ctx.cancel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StaffComponent_nz_option_2_Template, 1, 2, "nz-option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 3, "Select employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.id_employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.searchList);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["nz-select[_ngcontent-%COMP%] {\n  width: 55%;\n}\n\n.cus-select[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWZmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUNJLFVBQUE7QUFwQko7O0FBc0JBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBbkJKIiwiZmlsZSI6InN0YWZmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbnotbGlzdCB7XHJcbi8vICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbi8vICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuLy8gICAgIGhlaWdodDogNDAwcHg7XHJcbi8vICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXHJcbi8vICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG4vLyAgICAgbnotbGlzdC1pdGVtLW1ldGEtdGl0bGUge1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIG56LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuLy8gICAgIHdpZHRoOiAwcHg7IC8qIEZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXHJcbi8vIH1cclxuLy8gbnotaW5wdXQtZ3JvdXAge1xyXG4vLyAgICAgd2lkdGg6IDgwJTtcclxuLy8gICAgIGlucHV0IHtcclxuLy8gICAgICAgICB3aWR0aDogODAlO1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbi8vICAgICB9XHJcbi8vIH1cclxubnotc2VsZWN0IHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbn1cclxuLmN1cy1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 30748:
/*!******************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/warranty/receipt-quote/components/tax/tax.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxComponent": () => (/* binding */ TaxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 92131);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







class TaxComponent {
    constructor(vhQuerySales, languageService, vhAuth) {
        this.vhQuerySales = vhQuerySales;
        this.languageService = languageService;
        this.vhAuth = vhAuth;
        this.id_customer = 'id_retail';
        this.payment_type = 1;
        this.id_wallet = 'id_cash';
        this.closeAndGetValuePayment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.listWallets = [];
        this.nzOptions = [
            { value: 1, label: this.languageService.translate("Cash"), isLeaf: true },
            { value: 2, label: this.languageService.translate("Debit"), disabled: true, isLeaf: true },
            { value: 3, label: this.languageService.translate("Account"), children: [] }
        ];
    }
    ngOnInit() {
        this.listWallets = this.vhQuerySales.getlocalWallets().filter(wallet => wallet._id != 'id_cash' && wallet.id_branch == this.vhQuerySales.getDefaultBranch()._id)
            .map(wallet => { return { label: wallet.name, value: wallet._id, isLeaf: true }; });
        this.nzOptions[2].children = this.listWallets;
        if (this.payment_type) {
            if (this.payment_type == 2 || this.payment_type == 1)
                this.type_payment = [this.payment_type];
            else if (this.payment_type == 3)
                this.type_payment = [3, this.id_wallet];
        }
    }
    onChanges(event) {
        this.closeAndGetValuePayment.emit(event);
    }
    ngOnChanges(valueChange) {
        if (valueChange.payment_type) {
            let type = valueChange.payment_type.currentValue;
            if (type == 2 || type == 1)
                this.type_payment = [this.payment_type];
            else if (type == 3)
                this.type_payment = [3, this.id_wallet];
        }
        if (valueChange.id_customer) {
            if (valueChange.id_customer.currentValue == "id_retail" || (valueChange.id_customer.currentValue != "id_retail" && !this.vhQuerySales.getlocalCustomer(valueChange.id_customer.currentValue).debt_enable)) {
                this.disableDebt();
            }
            else
                this.nzOptions[1].disabled = false;
        }
        if (this.id_customer == 'id_retail' && this.payment_type == 2) {
            this.disableDebt();
        }
    }
    disableDebt() {
        this.nzOptions[1].disabled = true;
        this.closeAndGetValuePayment.emit([1]);
        this.type_payment = [this.payment_type];
    }
}
TaxComponent.ɵfac = function TaxComponent_Factory(t) { return new (t || TaxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAuth)); };
TaxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TaxComponent, selectors: [["app-tax"]], inputs: { id_customer: "id_customer", payment_type: "payment_type", id_wallet: "id_wallet" }, outputs: { closeAndGetValuePayment: "closeAndGetValuePayment" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 6, consts: [[3, "nzOptions", "nzAllowClear", "ngModel", "nzPlaceHolder", "ngModelChange"]], template: function TaxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-cascader", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TaxComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.type_payment = $event; })("ngModelChange", function TaxComponent_Template_nz_cascader_ngModelChange_0_listener($event) { return ctx.onChanges($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 4, "Payment method"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzOptions", ctx.nzOptions)("nzAllowClear", false)("ngModel", ctx.type_payment);
    } }, directives: [ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_3__.NzCascaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".ant-cascader-input[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRheC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJDQUFBO0FBQ0oiLCJmaWxlIjoidGF4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1jYXNjYWRlci1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_warranty_receipt-quote_add_add_module_ts.js.map