"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_sales_components_bill-type_bill-type-3_mange-invoice_bill-type3_module_ts-src-6a2ab5"],{

/***/ 24003:
/*!*******************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-3/mange-invoice/add/add.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComponent": () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_a4_customer_returned_a4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-a4/customer-returned-a4.component */ 40031);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_a5_customer_returned_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-a5/customer-returned-a5.component */ 81270);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_k80_col4_customer_returned_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-k80-col4/customer-returned-k80-col4.component */ 87247);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_k80_col3_customer_returned_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-k80-col3/customer-returned-k80-col3.component */ 64025);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_k57_col3_customer_returned_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-k57-col3/customer-returned-k57-col3.component */ 91934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../sale-desktop/components/staff/staff.component */ 88963);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _sale_desktop_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../sale-desktop/components/tax/tax.component */ 74330);
/* harmony import */ var _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../search/search-product/search-product.component */ 99767);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _sale_desktop_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../sale-desktop/components/customer/customer.component */ 70064);
/* harmony import */ var _search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../search/search-customer/search-customer.component */ 55846);
/* harmony import */ var _sale_desktop_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../sale-desktop/components/customer-profile/customer-profile.component */ 46156);
/* harmony import */ var _sale_desktop_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../sale-desktop/components/add-customer/add-customer.component */ 29519);
/* harmony import */ var _sale_desktop_components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../sale-desktop/components/retail-info/retail-info.component */ 626);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



































const _c0 = ["quantity"];
function AddComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "Please select a product"));
} }
function AddComponent_div_23_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "pre", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_div_23_ng_container_7_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r34); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r32.openModalChooseLot(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r26.getLotNumber(item_r24.lots, item_r24.id_lotproduct));
} }
function AddComponent_div_23_ng_container_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate3"]("", combo_r37.quantity, "x ", combo_r37.name, " (", ctx_r36.getUnit(combo_r37.units, combo_r37.ratio), "), ");
} }
function AddComponent_div_23_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, AddComponent_div_23_ng_container_8_span_1_Template, 2, 3, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", item_r24.combos);
} }
function AddComponent_div_23_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AddComponent_div_23_div_9_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r41); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; return item_r24.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "Note"))("ngModel", item_r24.note);
} }
function AddComponent_div_23_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "nz-option", 73);
} if (rf & 2) {
    const i_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzLabel", i_r43.unit)("nzValue", i_r43.ratio);
} }
function AddComponent_div_23_del_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "del", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", item_r24.price_origin > item_r24.price ? ctx_r31.vhAlgorithm.vhcurrencyunit(item_r24.price_origin) : "", " ");
} }
function AddComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_div_23_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r47); const item_r24 = restoredCtx.$implicit; const i_r25 = restoredCtx.index; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r46.deleteGoods(item_r24, i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, AddComponent_div_23_ng_container_7_Template, 3, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, AddComponent_div_23_ng_container_8_Template, 3, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, AddComponent_div_23_div_9_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "nz-select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AddComponent_div_23_Template_nz_select_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r47); const item_r24 = restoredCtx.$implicit; return item_r24.ratio = $event; })("ngModelChange", function AddComponent_div_23_Template_nz_select_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r47); const item_r24 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r49.changeUnit($event, item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, AddComponent_div_23_nz_option_12_Template, 1, 2, "nz-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "input", 63, 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AddComponent_div_23_Template_input_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r47); const item_r24 = restoredCtx.$implicit; return item_r24.quantity = $event; })("ngModelChange", function AddComponent_div_23_Template_input_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r47); const item_r24 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r51.checkQuantityProduct(item_r24, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_div_23_Template_div_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r47); const item_r24 = restoredCtx.$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r52.openEditUnitPrice(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, AddComponent_div_23_del_20_Template, 2, 1, "del", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "p", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r24.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r24.ptype == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.vhAuth.localStorageGET("show_note_for_each_product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", item_r24.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", item_r24.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("min", 0.1)("max", 9999999999)("ngModel", item_r24.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(item_r24.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(item_r24.price * item_r24.quantity));
} }
function AddComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate4"](" ", ctx_r2.invoice.retail_name, " - ", ctx_r2.invoice.retail_phone, " ", ctx_r2.invoice.retail_address ? "-" : "", " ", ctx_r2.invoice.retail_address, " ");
} }
function AddComponent_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "app-customer", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAndReceiveCustomer", function AddComponent_ng_container_56_Template_app_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r53.closeAndReceiveCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_ng_container_56_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r55.openInfoCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id_customer", ctx_r3.invoice.id_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", ctx_r3.invoice.id_customer != "id_retail" ? "active" : "deactive");
} }
function AddComponent_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "app-search-customer", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAndReceiveCustomer", function AddComponent_ng_container_57_Template_app_search_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r56.closeAndReceiveCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_ng_container_57_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r58.openInfoCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id_customer", ctx_r4.invoice.id_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", ctx_r4.invoice.id_customer != "id_retail" ? "active" : "deactive");
} }
function AddComponent_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("blur", function AddComponent_ng_container_68_Template_input_blur_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r59.editDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 2, "Platform fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r5.vhAlgorithm.vhcurrencyunit(ctx_r5.invoice.discount));
} }
function AddComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "input", 81, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("blur", function AddComponent_ng_template_69_Template_input_blur_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](6); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r62.editPercentDiscount(_r61.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("blur", function AddComponent_ng_template_69_Template_input_blur_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r63); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r64.editDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 3, "Discount value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](7, 5, ctx_r7.percent_discount_bill, "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r7.vhAlgorithm.vhcurrencyunit(ctx_r7.invoice.discount));
} }
function AddComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("blur", function AddComponent_div_71_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r65.editFee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r8.vhAlgorithm.vhcurrencyunit(ctx_r8.invoice.fee));
} }
function AddComponent_div_72_nz_select_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "nz-option", 92);
} if (rf & 2) {
    const item_r70 = ctx.$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzValue", item_r70._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r69.vhAlgorithm.vhpercent(item_r70.value / 100));
} }
function AddComponent_div_72_nz_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "nz-select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AddComponent_div_72_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r71.id_tax = $event; })("ngModelChange", function AddComponent_div_72_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r73.changeTax($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, AddComponent_div_72_nz_select_5_nz_option_1_Template, 1, 2, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r67.id_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r67.listTax);
} }
function AddComponent_div_72_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "0.00%");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function AddComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, AddComponent_div_72_nz_select_5_Template, 2, 2, "nz-select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, AddComponent_div_72_span_6_Template, 2, 0, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 4, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r9.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r9.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r9.vhAlgorithm.vhcurrencyunit(ctx_r9.taxValue), "");
} }
function AddComponent_img_86_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_img_86_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r74.showModalEditTotalPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function AddComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r11.vhAlgorithm.vhcurrencyunit_symbol(ctx_r11.getTotalATax() - ctx_r11.invoice.payment), " ");
} }
const _c1 = function () { return { minRows: 2, maxRows: 4 }; };
function AddComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "textarea", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AddComponent_div_90_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r76.note = $event; })("blur", function AddComponent_div_90_Template_textarea_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r77); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r78.edit_note(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 3, "Enter note..."));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r12.note)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](5, _c1));
} }
function AddComponent_nz_modal_99_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r79.tempDetail.price);
} }
function AddComponent_nz_modal_99_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_nz_modal_99_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r82.handleCancelEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_nz_modal_99_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r83); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r84.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function AddComponent_nz_modal_99_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "nz-modal", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_99_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r85.isVisibleEditUnitPrice = $event; })("nzOnCancel", function AddComponent_nz_modal_99_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r87.handleCancelEditUnit(); })("nzOnOk", function AddComponent_nz_modal_99_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r86); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r88.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, AddComponent_nz_modal_99_ng_container_2_Template, 8, 7, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, AddComponent_nz_modal_99_ng_template_3_Template, 6, 6, "ng-template", null, 98, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzFooter", _r80)("nzVisible", ctx_r13.isVisibleEditUnitPrice);
} }
function AddComponent_ng_container_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 2, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r14.vhAlgorithm.vhcurrencyunit(ctx_r14.invoice.payment));
} }
function AddComponent_ng_template_103_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_ng_template_103_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r89.handleCancelEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_ng_template_103_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r90); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r91.handleEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function AddComponent_app_customer_profile_105_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-customer-profile", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeInfoCustomer", function AddComponent_app_customer_profile_105_Template_app_customer_profile_closeInfoCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r92.closeInfoCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visibleInfoCustomer", ctx_r17.visibleInfoCustomer)("customer", ctx_r17.customer);
} }
function AddComponent_app_add_customer_106_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-add-customer", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAddCustomer", function AddComponent_app_add_customer_106_Template_app_add_customer_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r94.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showDrawerAddCusomer", ctx_r18.showDrawerAddCusomer);
} }
function AddComponent_app_retail_info_107_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-retail-info", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAddCustomer", function AddComponent_app_retail_info_107_Template_app_retail_info_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r97); const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r96.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showDrawerAddRetail", ctx_r19.showDrawerAddRetail)("retail_name", ctx_r19.invoice.retail_name)("retail_phone", ctx_r19.invoice.getRetailPhone())("retail_address", ctx_r19.invoice.getRetailAddress());
} }
function AddComponent_ng_container_110_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "i", 115);
} }
function AddComponent_ng_container_110_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "label", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzValue", item_r103._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", item_r103.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](8, 4, item_r103.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](11, 7, item_r103.date_exp, "dd/MM/yyyy"), " ");
} }
function AddComponent_ng_container_110_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, AddComponent_ng_container_110_ng_container_9_div_1_Template, 12, 10, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !item_r103.hidden);
} }
function AddComponent_ng_container_110_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "No data"));
} }
function AddComponent_ng_container_110_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "nz-input-group", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "input", 109, 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup", function AddComponent_ng_container_110_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r107); const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r106.searchLot(_r98.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, AddComponent_ng_container_110_ng_template_6_Template, 1, 0, "ng-template", null, 111, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "nz-radio-group", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_110_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r107); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r108.tempDetail.id_lotproduct = $event; })("ngModelChange", function AddComponent_ng_container_110_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r107); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r109.changeLot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, AddComponent_ng_container_110_ng_container_9_Template, 2, 1, "ng-container", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, AddComponent_ng_container_110_div_10_Template, 3, 3, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](7);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzSuffix", _r99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r20.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r20.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r20.tempDetail.lots.length);
} }
function AddComponent_ng_template_111_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_ng_template_111_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r110.handleCancelChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_ng_template_111_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r111); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r112.handleChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r22.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 5, "Ok"));
} }
function AddComponent_nz_modal_113_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "nz-option", 73);
} if (rf & 2) {
    const element_r121 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate1"]("nzLabel", "", element_r121.lot_number, " - HSD: {{element.date_exp | date: 'dd/MM/yyyy'}");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzValue", element_r121._id);
} }
function AddComponent_nz_modal_113_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "nz-select", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AddComponent_nz_modal_113_ng_container_2_ng_container_21_ng_container_1_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r124); const data_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; return data_r118.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, AddComponent_nz_modal_113_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template, 1, 2, "nz-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](data_r118.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", data_r118.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", data_r118.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r119.getUnit(data_r118.units, data_r118.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](data_r118.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r119.vhAlgorithm.vhcurrencyunit(data_r118.price), " ");
} }
function AddComponent_nz_modal_113_ng_container_2_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, AddComponent_nz_modal_113_ng_container_2_ng_container_21_ng_container_1_Template, 14, 9, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", data_r118.lots);
} }
const _c2 = function () { return { y: "400px" }; };
function AddComponent_nz_modal_113_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "nz-table", 122, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, AddComponent_nz_modal_113_ng_container_2_ng_container_21_Template, 2, 1, "ng-container", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](2);
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzData", ctx_r113.tempDetail.combos)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](19, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 11, "Lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 13, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 15, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](19, 17, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _r116.data);
} }
function AddComponent_nz_modal_113_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_nz_modal_113_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r126.show_modal_select_lots_combo = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_nz_modal_113_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r127); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r128.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 4, "Ok"));
} }
function AddComponent_nz_modal_113_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "nz-modal", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_113_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r130); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r129.show_modal_select_lots_combo = $event; })("nzOnCancel", function AddComponent_nz_modal_113_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r130); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r131.show_modal_select_lots_combo = false; })("nzOnOk", function AddComponent_nz_modal_113_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r130); const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r132.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, AddComponent_nz_modal_113_ng_container_2_Template, 22, 20, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, AddComponent_nz_modal_113_ng_template_3_Template, 6, 6, "ng-template", null, 121, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 4, "Select lot number for products in combo"), ": ", ctx_r23.tempDetail.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzFooter", _r114)("nzVisible", ctx_r23.show_modal_select_lots_combo);
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
        this.invoice = {
            bill_type: 3,
            payment_type: 1,
            id_customer: 'id_retail',
            id_branch: '',
            id_employee: '',
            id_wallet: 'id_cash',
            date: new Date(),
            total: 0,
            payment: 0,
            tax: 0,
            discount: 0,
            fee: 0,
            note: '',
            price_type: 1,
        };
        this.invoiceDetail = [];
        this.subTotal = 0;
        this.taxValue = 0;
        this.listTax = this.vhQuerySales.getlocalTaxs().filter(tax => tax.status);
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.employee = {};
        this.pickerTime = new Date();
        this.percent_discount_bill = 0;
        this.is_discount_bill = false;
        this.showModalChangePriceType = false;
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
        this.save_enable = true;
        // ------thoát trang-----
        this.isExit = false;
        /**add customer */
        this.showDrawerAddCusomer = false;
        this.showDrawerAddRetail = false;
        this.barcode = '';
        this.barcode_array = [];
        this.show_modal_select_lots = false;
        this.list_search_lot = [];
        this.show_modal_select_lots_combo = false;
        this.auto_active_quantity_input = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').auto_active_quantity_input;
        this.invoice.id_employee = this.vhAuth.getUser()._id;
        this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
        this.invoice.id_branch = (this.vhQuerySales.getDefaultBranch()._id);
        if (this.vhAuth.checkMyPermission('default_price_type_1'))
            this.default_price_type = 1;
        else if (this.vhAuth.checkMyPermission('default_price_type_2'))
            this.default_price_type = 2;
        // ------bắt sự kiện nhấn phím nóng-----
        this.eventKeypress();
    }
    ngOnInit() {
        let tax = this.listTax.find(item => item.default);
        if (tax) {
            this.id_tax = tax._id;
            this.invoice.tax = (tax['value']);
        }
        let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_customer_returned');
        this.printer = printer ? printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)] : { discount_hidden: false, note_hidden: false, fee_hidden: false, tax_hidden: false, debt_hidden: false };
    }
    ngOnDestroy() {
        document.removeEventListener('keydown', this.event, false);
    }
    eventKeypress() {
        this.event = (event) => {
            const keycode = event.keyCode;
            if (keycode === 112 || keycode === 113 || keycode === 114)
                event.preventDefault();
            if (keycode === 115)
                this.searchProductList = !this.searchProductList;
            else if (this.invoiceDetail.length > 0) {
                switch (keycode) {
                    case 112:
                        this.payInvoice(3, false);
                        break;
                    case 113: {
                        if (this.checkPrinter)
                            this.payInvoice(3, true);
                        break;
                    }
                }
            }
        };
        document.addEventListener('keydown', this.event, false);
    }
    ngAfterViewInit() {
        this.checkPrinter = this.printer.enable;
        this.vhAlgorithm.waitingStack().then(() => {
            if (document.querySelector(".discount-price"))
                this.discount_price = this.vhAlgorithm.vhnumeral(".discount-price");
            if (document.querySelector(".invoice-fee"))
                this.invoice_fee = this.vhAlgorithm.vhnumeral(".invoice-fee");
        });
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    deleteGoods(detail, index) {
        this.vhComponent.alertConfirm("", "", `${this.languageService.translate("Delete")} ${detail.name}?`, "OK", this.languageService.translate("Cancel"))
            .then(() => {
            this.invoiceDetail.splice(index, 1);
            this.setSubTotal();
        }, () => { });
    }
    openSearchProductList() {
        this.searchProductList = true;
    }
    getUnit(units, ratio) {
        return this.vhQuerySales.getUnit_byRatio(units, ratio).unit;
    }
    closeSearchProductList(data) {
        if (data) {
            if (data.manylot && !data.id_lotproduct)
                this.openModalChooseLot(data);
            else if (data.combos && data.combos.filter(e => e.lots && !e.id_lotproduct).length) {
                this.tempDetail = data;
                this.show_modal_select_lots_combo = true;
            }
            else if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_customer_return)
                this.addInvoiceDetail(data);
            else
                this.addInvoiceDetailMultiLine(data);
        }
        this.searchProductList = false;
    }
    checkQuantityProduct(product, event) {
        if (!event)
            product.quantity = 1;
        this.setSubTotal();
    }
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
        this.setSubTotal();
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
            this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
        }
    }
    handleCancelEditUnit() { this.isVisibleEditUnitPrice = false; }
    // -------set employee-------
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
    }
    changeCustomerType(event) {
        if (this.radioValue == 1) {
            this.invoice.id_customer = ("id_retail");
            this.invoice.payment = (this.getTotalATax());
        }
        if (event == 2 && this.invoice.retail_name) {
            this.nzModalService.confirm({
                nzTitle: `${this.languageService.translate('Retail customer information will be lost')}?`,
                nzCancelText: this.languageService.translate("Cancel"),
                nzOkText: "Ok",
                nzOnOk: () => { this.clearRetailCustomer(); },
                nzOnCancel: () => { this.radioValue = 1; },
            });
        }
    }
    clearRetailCustomer() {
        this.invoice.retail_address = ('');
        this.invoice.retail_name = ('');
        this.invoice.retail_phone = ('');
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
    changeTax(event) {
        let tax = this.listTax.find(item => item._id == event);
        this.invoice.tax = (tax.value);
        this.setTaxValue();
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
    editPercentDiscount(value) {
        if (parseFloat(value) > 100)
            document.getElementById("percent-discount-price")['value'] = 0;
        else
            this.percent_discount_bill = value;
        this.invoice.discount = this.subTotal * (this.percent_discount_bill / 100);
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
    goBack() {
        this.isExit = true;
        this.router.navigate(['/sales/dashboard/manage/invoice/customer-return'], { state: this.dataRestore });
    }
    handleGoBack() {
        this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Are you sure to cancel the customer returned order")}?`, "OK", this.languageService.translate('Cancel'))
            .then(() => { this.isExit = true, this.router.navigate(['/sales/dashboard/manage/invoice/customer-return'], { state: this.dataRestore }); }, () => { });
    }
    edit_note() {
        if (this.note) {
            this.invoice.note = (this.note);
        }
    }
    openInfoSupplier() {
        if (this.invoice.id_customer) {
            this.customer = this.vhQuerySales.getlocalSupplier(this.invoice.id_customer);
            this.visibleInfoCustomer = true;
        }
    }
    closeInfoSupplier(event) {
        this.visibleInfoCustomer = false;
    }
    payInvoice(bill_type, print) {
        this.vhComponent.alertConfirm((!print ? `${this.languageService.translate("Pay")}?` : `${this.languageService.translate("Pay & Print")}?`), "", "", "OK", this.languageService.translate("Cancel"))
            .then(() => {
            if (this.save_enable) {
                this.save_enable = false;
                this.vhComponent.showLoading("", "transparent-loading").then(() => {
                    this.createOrUpdate(bill_type).then(bill => {
                        this.save_enable = true;
                        this.vhComponent.hideLoading(0).then(() => {
                            this.vhComponent.showToast(2000, `${this.languageService.translate("Customer returned invoice")} ${bill.bill_code} ${this.languageService.translate("has been created successfully")}`, "success-toast");
                            if (print)
                                this.handlePrint();
                            else
                                this.goBack();
                        });
                    });
                });
            }
        }, () => { });
    }
    createOrUpdate(bill_type) {
        return this.vhQuerySales.createBill_Billdetail(Object.assign(Object.assign({}, this.getCreateUpdateInvoice(bill_type)), { id_shop: 'local' }), this.getCreateUpdateInvoiceDetail());
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_customer_returned');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    handlePrint() {
        this.checkPrint().then((printer) => {
            if (printer)
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice: this.invoice, invoice_detail: this.invoiceDetail }, false, false, `modal-print-${printer['_id']}`).then((modal) => {
                    modal.onWillDismiss().then(() => this.goBack());
                });
        }, (err) => {
            this.vhComponent.alertMessage(this.languageService.translate("Function"), "", this.languageService.translate("Please turn on the printer function"), "OK")
                .then(() => this.goBack());
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_customer_returned_customer_returned_k57_col3_customer_returned_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__.CustomerReturnedK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_customer_returned_customer_returned_k80_col3_customer_returned_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__.CustomerReturnedK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_customer_returned_customer_returned_k80_col4_customer_returned_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.CustomerReturnedK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_customer_returned_customer_returned_a5_customer_returned_a5_component__WEBPACK_IMPORTED_MODULE_1__.CustomerReturnedA5Component;
            case 'print_size_a4': return src_app_sales_components_print_customer_returned_customer_returned_a4_customer_returned_a4_component__WEBPACK_IMPORTED_MODULE_0__.CustomerReturnedA4Component;
            default: return src_app_sales_components_print_customer_returned_customer_returned_a4_customer_returned_a4_component__WEBPACK_IMPORTED_MODULE_0__.CustomerReturnedA4Component;
        }
    }
    //--------------visible drawer info customer-----------
    openInfoCustomer() {
        if (this.invoice.id_customer != 'id_retail') {
            this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
            this.visibleInfoCustomer = true;
        }
    }
    closeInfoCustomer(event) {
        this.visibleInfoCustomer = false;
    }
    checkDeactivate(currentRoute, currentState, nextState) {
        return nextState.url == '/login' ? true : (this.isExit ? this.isExit : this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Are you sure to cancel the sales order"), "OK", (this.languageService.translate("Cancel"))).then(() => { return true; }).catch(() => { return false; }));
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
        if (this.router.url === "/sales/dashboard/manage/invoice/customer-return/add-customer-return") {
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
                    var _a, _b;
                    if (this.barcode) {
                        let detailproduct = this.vhQuerySales.getlocalDetailProduct_byBarcode(this.barcode);
                        if (detailproduct) {
                            this.closeSearchProductList(Object.assign(Object.assign({}, detailproduct), this.vhQuerySales.getUnit_byRatio(detailproduct.units, detailproduct.ratio)));
                        }
                        else {
                            (_a = this.quantity) === null || _a === void 0 ? void 0 : _a.nativeElement.blur();
                            if (this.barcode.length > 3)
                                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Not found"));
                        }
                    }
                    else
                        (_b = this.quantity) === null || _b === void 0 ? void 0 : _b.nativeElement.blur();
                    this.barcode_array = [];
                }, 100);
            }
            else {
                this.barcode_array.push(_event.key);
            }
            // }
        }
    }
    getLotNumber(lots, _id) {
        let lot = lots.find(item => item._id == _id);
        return lot.lot_number;
    }
    searchLot(value) {
        this.tempDetail.lots = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value), this.list_search_lot, ['lot_number']);
    }
    openModalChooseLot(data) {
        this.tempDetail = data;
        this.list_search_lot = this.tempDetail.lots;
        if (!this.list_search_lot.length)
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Sản phẩm này không có lô khả dụng để bán!"));
        else
            this.show_modal_select_lots = true;
    }
    changeLot(e) {
        this.tempDetail.lot_number = this.tempDetail.lots.find(item => item._id == e).lot_number;
    }
    handleChooseLot() {
        this.show_modal_select_lots = false;
        this.tempDetail.lots = this.list_search_lot;
        if (!this.tempDetail.id_product)
            this.closeSearchProductList(this.tempDetail);
    }
    handleCancelChooseLot() {
        this.show_modal_select_lots = false;
        this.tempDetail.lots = this.list_search_lot;
    }
    handleChooseLotCombo() {
        if (this.tempDetail.combos.filter(item => item.lots && !item.id_lotproduct).length)
            this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Vui lòng chọn lô cho sản phẩm thuộc combo này"));
        else {
            this.show_modal_select_lots_combo = false;
            this.closeSearchProductList(this.tempDetail);
        }
    }
    getTotalATax() {
        return this.invoice.total + this.taxValue;
    }
    removeInvoiceDetail(id, notSetSub) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == id);
        if (index != -1) {
            this.invoiceDetail.splice(index, 1);
            if (!notSetSub)
                this.setSubTotal();
        }
    }
    setSubTotal() {
        this.subTotal = this.invoiceDetail.reduce((prev, next) => prev + next.quantity * next.price, 0);
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
    }
    getCreateUpdateInvoice(bill_type) {
        if (bill_type)
            this.invoice.bill_type = (bill_type);
        return this.invoice;
    }
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map(item => {
            let detail = {
                id_product: item.id_product, price: item.price, quantity: item.quantity,
                ptype: item.ptype,
                ratio: item.ratio,
                note: item.note,
            };
            if (item.ptype == 5)
                detail['combos'] = item.combos.map(e => {
                    let product = {
                        id_product: e.id_product,
                        price: e.price, quantity: e.quantity, ptype: e.ptype,
                        ratio: e.ratio ? e.ratio : 1
                    };
                    if (e.id_lotproduct)
                        product['id_lotproduct'] = e.id_lotproduct;
                    if (e['id_subproduct'])
                        product['id_subproduct'] = e.id_subproduct;
                    return product;
                });
            if (item.id_lotproduct)
                detail['id_lotproduct'] = item.id_lotproduct;
            if (item['id_subproduct'])
                detail['id_subproduct'] = item.id_subproduct;
            if (item.price < item.price_origin)
                detail['price_origin'] = item.price_origin;
            return detail;
        });
    }
    addInvoiceDetail(value) {
        if (value['id_subproduct']) {
            if (value.lot_number) {
                let index = this.invoiceDetail.findIndex(detail => detail['lot_number'] == value['lot_number'] && detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
            else {
                let index = this.invoiceDetail.findIndex(detail => detail['id_subproduct'] == value['id_subproduct'] && detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
        }
        else {
            if (value.lot_number) {
                let index = this.invoiceDetail.findIndex(detail => detail['lot_number'] == value['lot_number'] && detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
            else {
                let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id'] && detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
        }
    }
    addBill_Detail(value) {
        let detail = {
            name: value.name,
            id_product: value._id,
            quantity: 1,
            unit: value.unit,
            units: value.units,
            ratio: value.ratio,
            ptype: value.type,
            price: value.price,
            price_origin: value.price,
            id_category: value.id_category
        };
        if (value.lot_number)
            detail['lot_number'] = value.lot_number;
        if (value.lots)
            detail['lots'] = value.lots;
        if (value.id_lotproduct)
            detail['id_lotproduct'] = value.id_lotproduct;
        if (value['id_subproduct'])
            detail['id_subproduct'] = value.id_subproduct;
        if (value.type == 5) {
            detail['subComboName'] = value.subComboName;
            detail['combos'] = [...value.combos.map(item => {
                    let product = {
                        id_product: item.id_product, name: item.name, ptype: item.type,
                        price: item.price, quantity: item.quantity,
                        unit: item.unit, units: item.units, ratio: item.ratio ? item.ratio : 1,
                        lots: item.lots ? item.lots : [],
                        id_lotproduct: item.id_lotproduct,
                    };
                    if (item.lot_number)
                        product['lot_number'] = item.lot_number;
                    if (item.lots)
                        product['lots'] = item.lots;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item['id_subproduct'])
                        product['id_subproduct'] = item.id_subproduct;
                    return product;
                })];
        }
        this.invoiceDetail.unshift(detail);
        if (this.auto_active_quantity_input) {
            setTimeout(() => {
                this.quantity.nativeElement.focus();
                this.quantity.nativeElement.select();
            }, 0);
        }
        this.setSubTotal();
    }
    addInvoiceDetailMultiLine(value) {
        let detail = {
            name: value.name,
            id_product: value._id,
            quantity: 1,
            unit: value.unit,
            units: value.units,
            ratio: value.ratio,
            ptype: value.type,
            price: value.price,
            price_origin: value.price,
            id_category: value.id_category
        };
        if (value.lot_number)
            detail['lot_number'] = value.lot_number;
        if (value.lots)
            detail['lots'] = value.lots;
        if (value.id_lotproduct)
            detail['id_lotproduct'] = value.id_lotproduct;
        if (value['id_subproduct'])
            detail['id_subproduct'] = value.id_subproduct;
        if (value.type == 5) {
            detail['subComboName'] = value.subComboName;
            detail['combos'] = [...value.combos.map(item => {
                    let product = {
                        id_product: item.id_product, name: item.name, ptype: item.type,
                        price: item.price, quantity: item.quantity,
                        unit: item.unit, units: item.units, ratio: item.ratio ? item.ratio : 1,
                        lots: item.lots ? item.lots : [],
                        id_lotproduct: item.id_lotproduct,
                    };
                    if (item.lot_number)
                        product['lot_number'] = item.lot_number;
                    if (item.lots)
                        product['lots'] = item.lots;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item['id_subproduct'])
                        product['id_subproduct'] = item.id_subproduct;
                    return product;
                })];
        }
        this.invoiceDetail.unshift(detail);
        if (this.auto_active_quantity_input) {
            setTimeout(() => {
                this.quantity.nativeElement.focus();
                this.quantity.nativeElement.select();
            }, 0);
        }
        this.setSubTotal();
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__.NzModalService)); };
AddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["bill-type3-add"]], viewQuery: function AddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.quantity = _t.first);
    } }, hostBindings: function AddComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keypress", function AddComponent_keypress_HostBindingHandler($event) { return ctx.getKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresolveWindow"]);
    } }, decls: 114, vars: 93, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["nz-col", "", "nzSpan", "4", 1, "center-all-content"], ["nz-col", "", "nzSpan", "8", 1, "center-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], ["class", "no-data", 4, "ngIf"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], [1, "sales-bills-staff-name"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar", 2, "overflow", "visible"], [1, "sales-bills-customer-title"], [2, "color", "var(--ion-color-vh-white)", "padding-right", "5px", 3, "src", "click"], ["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], [4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["class", "sales-bills-content-fee", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-tax", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["style", "width: 16px;margin-left:10px", "src", "assets/icon/Iconfeather-edit.svg", 3, "click", 4, "ngIf"], ["class", "sales-bills-content-rest", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], [3, "payment_type", "id_wallet", "id_customer", "closeAndGetValuePayment"], ["class", "sales-bills-content-note", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditPay", ""], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer", 4, "ngIf"], [3, "showDrawerAddCusomer", "closeAddCustomer", 4, "ngIf"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice2", ""], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [1, "no-data"], [1, "invoiceDetail-item"], ["nz-row", ""], ["nz-col", "", "nzSpan", "1", 3, "click"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "8"], [2, "font-weight", "bold", "margin-bottom", "0"], ["nz-col", "", "nzSpan", "3"], [2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "4", 2, "text-align", "right"], ["id", "quantity", "placeholder", "Nh\u1EADp s\u1ED1 l\u01B0\u1EE3ng", "type", "number", 3, "min", "max", "ngModel", "ngModelChange"], ["quantity", ""], ["nz-col", "", "nzSpan", "4", 1, "invoiceDetail-item-quantity", "text-end", 3, "click"], [1, "max-width-two-line", 2, "border-bottom", "1px var(--ion-color-vh-gray) solid", "margin-left", "16px"], ["style", "font-size: 0.7rem;", 4, "ngIf"], [1, "max-width-two-line"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["class", "sub-name", 4, "ngFor", "ngForOf"], [1, "sub-name"], ["nz-input", "", "nzBorderless", "", 1, "bill-detail-note", 2, "text-align", "left !important", 3, "placeholder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue"], [2, "font-size", "0.7rem"], [3, "id_customer", "closeAndReceiveCustomer"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "cursor", "pointer", 3, "ngClass", "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "nz-no-border", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "width", "auto"], ["id", "percent-discount-price", "type", "number", "max", "100", "min", "0", "step", "0.01", "maxlength", "3", "nz-input", "", 1, "border_bottom", 2, "width", "50px", 3, "value", "blur"], ["percentDiscount", ""], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "border_bottom", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "border_bottom", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax"], ["nzBorderless", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], ["nz-col", "", "nzSpan", "7", 2, "text-align", "end"], ["nzBorderless", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "not-found"], ["src", "assets/icon/Iconfeather-edit.svg", 2, "width", "16px", "margin-left", "10px", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-input", "", 1, "nz-hover-border", 3, "ngModel", "placeholder", "nzAutosize", "ngModelChange", "blur"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "8", 1, "center-col"], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "edit-pay", 3, "value"], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer"], [3, "showDrawerAddCusomer", "closeAddCustomer"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], [2, "width", "100%", "padding", "8px 0", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-row", "", 4, "ngIf"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], [2, "text-align", "center"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice3", ""], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_Template_div_click_0_listener() { return ctx.handleGoBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_Template_button_click_17_listener() { return ctx.openSearchProductList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, AddComponent_div_21_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, AddComponent_div_23_Template, 25, 12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "app-staff", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAndReceiveEmployee", function AddComponent_Template_app_staff_closeAndReceiveEmployee_31_listener($event) { return ctx.closeAndReceiveEmployee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "nz-date-picker", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_36_listener($event) { return ctx.pickerTime = $event; })("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_36_listener($event) { return ctx.setPickerTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "ion-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_Template_ion_icon_click_42_listener() { return ctx.openDrawerAddCustomerOrRetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "nz-radio-group", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_radio_group_ngModelChange_44_listener($event) { return ctx.radioValue = $event; })("ngModelChange", function AddComponent_Template_nz_radio_group_ngModelChange_44_listener($event) { return ctx.changeCustomerType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](55, AddComponent_ng_container_55_Template, 2, 4, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](56, AddComponent_ng_container_56_Template, 3, 2, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](57, AddComponent_ng_container_57_Template, 3, 2, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](62, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](68, AddComponent_ng_container_68_Template, 6, 4, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](69, AddComponent_ng_template_69_Template, 10, 8, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](71, AddComponent_div_71_Template, 5, 4, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](72, AddComponent_div_72_Template, 9, 6, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](86, AddComponent_img_86_Template, 1, 0, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](87, AddComponent_div_87_Template, 6, 4, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](88, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](89, "app-tax", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAndGetValuePayment", function AddComponent_Template_app_tax_closeAndGetValuePayment_89_listener($event) { return ctx.closeAndGetValuePayment($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](90, AddComponent_div_90_Template, 3, 6, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](91, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](92, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_Template_button_click_92_listener() { return ctx.payInvoice(3, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](95, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AddComponent_Template_button_click_95_listener() { return ctx.payInvoice(3, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](98, "app-search-product", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeSearchProductList", function AddComponent_Template_app_search_product_closeSearchProductList_98_listener($event) { return ctx.closeSearchProductList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](99, AddComponent_nz_modal_99_Template, 5, 5, "nz-modal", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](100, "nz-modal", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_100_listener($event) { return ctx.edit_pay = $event; })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_100_listener() { return ctx.handleCancelEditPay(); })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_100_listener() { return ctx.handleEditPay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](102, AddComponent_ng_container_102_Template, 7, 4, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](103, AddComponent_ng_template_103_Template, 6, 6, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](105, AddComponent_app_customer_profile_105_Template, 1, 2, "app-customer-profile", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](106, AddComponent_app_add_customer_106_Template, 1, 1, "app-add-customer", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](107, AddComponent_app_retail_info_107_Template, 1, 4, "app-retail-info", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](108, "nz-modal", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_108_listener($event) { return ctx.show_modal_select_lots = $event; })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_108_listener() { return ctx.handleCancelChooseLot(); })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_108_listener() { return ctx.handleChooseLot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](110, AddComponent_ng_container_110_Template, 11, 7, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](111, AddComponent_ng_template_111_Template, 6, 7, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](113, AddComponent_nz_modal_113_Template, 5, 6, "nz-modal", 51);
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](70);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](104);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 57, "Back"), " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 59, "Create customer returned"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 61, "Select product"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](20, 63, "Search (F4)"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.invoiceDetail.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.invoiceDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](30, 65, "Employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id_employee", ctx.invoice.id_employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](35, 67, "Return date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.pickerTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](41, 69, "Customer information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx.invoice.retail_name ? "assets/icon/eye.svg" : "assets/icon/add.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](47, 71, "Retail customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](50, 73, "Member"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzValue", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](53, 75, "Search customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.radioValue == 1 && ctx.invoice.retail_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.radioValue == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.radioValue == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](61, 77, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](65, 79, "SubTotal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.subTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.invoice.order_number_ecommerce)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_tax"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](76, 81, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.getTotalATax()));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](83, 83, "Pay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.payment), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.invoice.payment_type != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_rest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("payment_type", ctx.invoice.payment_type)("id_wallet", ctx.invoice.id_wallet)("id_customer", ctx.invoice.id_customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.printer.note_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.invoiceDetail.length || !ctx.invoice.id_customer || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](94, 85, "Pay & Print"), " (F2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.invoiceDetail.length || !ctx.invoice.id_customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](97, 87, "Pay"), " (F1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("searchProductList", ctx.searchProductList)("default_price_type", ctx.default_price_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](101, 89, "Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzVisible", ctx.edit_pay)("nzFooter", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.visibleInfoCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showDrawerAddCusomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showDrawerAddRetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](109, 91, "Select lot number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzFooter", _r21)("nzVisible", ctx.show_modal_select_lots);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.show_modal_select_lots_combo);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_27__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonIcon, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_30__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_30__.NzRadioComponent, _sale_desktop_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__.TaxComponent, _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_10__.SearchProductComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__.NzOptionComponent, _sale_desktop_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_11__.CustomerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_12__.SearchCustomerComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__.NzAutosizeDirective, _sale_desktop_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_13__.CustomerProfileComponent, _sale_desktop_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_14__.AddCustomerComponent, _sale_desktop_components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_15__.RetailInfoComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_32__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_33__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_33__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_33__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_33__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_33__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_33__.NzTbodyComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n#quantity[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  padding: 4px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-price[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 0.9rem;\n  border-bottom: solid 1px #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 93%;\n  overflow-y: scroll;\n  padding-top: 2%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 15% 20% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-green) !important;\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   nz-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .deactive[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   app-customer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-gray);\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n.bill-detail-note[_ngcontent-%COMP%] {\n  font-size: 0.7rem !important;\n  color: var(--ion-color-vh-gray);\n  font-weight: normal;\n  font-style: italic;\n  padding: 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNJLGVBQUE7QUFFTjtBQUNBO0VBQ0ksYUFBQTtBQUVKO0FBQUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFHSjtBQURBO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FBSUY7QUFIRTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7QUFLTjtBQUpNOzs7O0VBS0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBS1Y7QUFITTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBS1Y7QUFKVTtFQUNJLFVBQUE7QUFNZDtBQUxjO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU9sQjtBQUxjO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFPbEI7QUFKVTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFNZDtBQUxjO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBT2xCO0FBTmtCO0VBQ0ksZUFBQTtBQVF0QjtBQUprQjtFQUNJLDZCQUFBO0VBQ0EsNkJBQUE7QUFNdEI7QUFETTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FBR1Y7QUFGVTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUlkO0FBSGM7RUFFSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSWxCO0FBSGtCOzs7RUFFSSxVQUFBO0VBQ0EsZUFBQTtBQU10QjtBQUhjO0VBQ0ksa0JBQUE7QUFLbEI7QUFGVTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUlkO0FBSGM7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBS2xCO0FBSmtCO0VBQ0ksZUFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7QUFNdEI7QUFGa0I7RUFDSSxpQkFBQTtBQUl0QjtBQURjO0VBQ0ksZ0NBQUE7QUFHbEI7QUFEYztFQUNJLGNBQUE7QUFHbEI7QUFEYztFQUNJLFVBQUE7RUFDQSxlQUFBO0FBR2xCO0FBRGM7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFHbEI7QUFBVTtFQUVJLGFBQUE7RUFDQSw4QkFBQTtBQUNkO0FBQ1U7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNkO0FBQ2tCO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBQ3RCO0FBSWtCO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBRnRCO0FBTWtCO0VBQ0ksVUFBQTtBQUp0QjtBQVFrQjtFQUNJLGVBQUE7QUFOdEI7QUFRa0I7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBTnRCO0FBU2M7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQVBsQjtBQVFrQjtFQUNJLFdBQUE7QUFOdEI7QUFVVTtFQUNJLHVCQUFBO0VBQ0EsOEJBQUE7QUFSZDtBQVNjO0VBQ0ksMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBUGxCO0FBU2M7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQVBsQjtBQWFBO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQVZGO0FBWUE7O0VBRUUsaUJBQUE7QUFURjtBQVdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBUkY7QUFVQSxrQkFBQTtBQUNBO0VBQ0UscUJBQUE7RUFBdUIsZ0JBQUE7RUFDdkIsd0JBQUE7RUFBMEIsbUNBQUE7QUFMNUI7QUFRQTtFQUNFLFVBQUE7RUFBWSxrQ0FBQTtBQUpkO0FBUUE7RUFDRSxXQUFBO0FBTEY7QUFNQztFQUNJLDBCQUFBO0FBSkw7QUFRQTtFQUNDLFdBQUE7QUFMRDtBQVFBO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTEoiLCJmaWxlIjoiYWRkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgfVxyXG59XHJcbmlucHV0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuI3F1YW50aXR5e1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG5uei1sYXlvdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogOTUlO1xyXG4gIC5zYWxlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xyXG4gICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICAmLWNhcnQsXHJcbiAgICAgICYtYmVzdC1zZWxsaW5nLFxyXG4gICAgICAuc2FsZXMtYmlsbHMtc3RhZmYsXHJcbiAgICAgIC5zYWxlcy1iaWxscy1jdXN0b21lcixcclxuICAgICAgLnNhbGVzLWJpbGxzLWNvbnRlbnQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICAmLWNhcnQge1xyXG4gICAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgJi1oZWFkZXIge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNiU7XHJcbiAgICAgICAgICAgICAgLmJ0bi1kYXRhIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5idG4tcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M4YzdjYztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLWludm9pY2VEZXRhaWwge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogOTMlO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgLmludm9pY2VEZXRhaWwtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICYtcXVhbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVjZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLWJpbGxzIHtcclxuICAgICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgMjAlIDU1JSAxMCU7XHJcbiAgICAgICAgICAmLXN0YWZmIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgJi10aW1lLFxyXG4gICAgICAgICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgbnotZGF0ZS1waWNrZXIsXHJcbiAgICAgICAgICAgICAgICAgIGFwcC1zdGFmZiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1jdXN0b21lciB7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBuei1yYWRpby1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmRlYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNjOGM3Y2M7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGFwcC1jdXN0b21lciB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1jdXN0b21lciA+IGRpdixcclxuICAgICAgICAgICYtY29udGVudCA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgZGl2ID4ge1xyXG4gICAgICAgICAgICAgICAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICYtZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgJi1mZWUge1xyXG4gICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmLXRheCB7XHJcbiAgICAgICAgICAgICAgICAgIC5ub3QtZm91bmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmLXBheSB7XHJcbiAgICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJi1wYXltZW50X3R5cGUge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgIGFwcC10YXgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgIC5vcmRlci1hbmQtcHJpbnQge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAub3JkZXIge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuLmNlbnRlci1jb2wge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKiBIaWRlIHNjcm9sbGJhciovXHJcbi5oaWRlU2Nyb2xsYmFyIHtcclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cclxufVxyXG5cclxuLmhpZGVTY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMHB4OyAvKiBGb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwIC5yYWRpby1wdXJjaGFzZSAgc3BhbntcclxuICB3aWR0aDogMTAwJTtcclxuIC5hbnQtcmFkaW97XHJcbiAgICAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucmFkaW8tcHVyY2hhc2UgIC5hbnQtcmFkaW97XHJcbiB3aWR0aDogMTZweDsgXHJcbn1cclxuXHJcbi5iaWxsLWRldGFpbC1ub3RlIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIHBhZGRpbmc6IDRweCAwOztcclxufSJdfQ== */"] });


/***/ }),

/***/ 20841:
/*!*******************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-3/mange-invoice/bill-type3.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillType3Module": () => (/* binding */ BillType3Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 24003);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 20801);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ 71019);
/* harmony import */ var src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/sale-desktop/components/components.module */ 50682);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../search/search.module */ 43818);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);











class BillType3Module {
}
BillType3Module.ɵfac = function BillType3Module_Factory(t) { return new (t || BillType3Module)(); };
BillType3Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BillType3Module });
BillType3Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _search_search_module__WEBPACK_IMPORTED_MODULE_5__.SearchModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BillType3Module, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _search_search_module__WEBPACK_IMPORTED_MODULE_5__.SearchModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule], exports: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent] }); })();


/***/ }),

/***/ 71019:
/*!*************************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-3/mange-invoice/detail/detail.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_a4_customer_returned_a4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-a4/customer-returned-a4.component */ 40031);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_a5_customer_returned_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-a5/customer-returned-a5.component */ 81270);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_k80_col4_customer_returned_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-k80-col4/customer-returned-k80-col4.component */ 87247);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_k80_col3_customer_returned_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-k80-col3/customer-returned-k80-col3.component */ 64025);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_k57_col3_customer_returned_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-k57-col3/customer-returned-k57-col3.component */ 91934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function DetailComponent_nz_layout_4_tr_52_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.getLotNumber(item_r6.lots, item_r6.id_lotproduct));
} }
function DetailComponent_nz_layout_4_tr_52_ng_container_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", combo_r11.quantity, "x ", combo_r11.name, " (", ctx_r10.getUnit(combo_r11.units, combo_r11.ratio), "), ");
} }
function DetailComponent_nz_layout_4_tr_52_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DetailComponent_nz_layout_4_tr_52_ng_container_5_span_1_Template, 2, 3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r6.combos);
} }
function DetailComponent_nz_layout_4_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DetailComponent_nz_layout_4_tr_52_ng_container_4_Template, 3, 1, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, DetailComponent_nz_layout_4_tr_52_ng_container_5_Template, 3, 1, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "del", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r6.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r6.ptype == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.getUnit(item_r6.units, item_r6.ratio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r6.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r2.vhAlgorithm.vhcurrencyunit(item_r6.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r6.price_origin > item_r6.price ? ctx_r2.vhAlgorithm.vhcurrencyunit(item_r6.price_origin) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.vhAlgorithm.vhcurrencyunit(item_r6.quantity * item_r6.price));
} }
function DetailComponent_nz_layout_4_div_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r3.invoiceInfo.partner.name), " ");
} }
function DetailComponent_nz_layout_4_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r4.invoiceInfo.partner.name), " - ", ctx_r4.invoiceInfo.partner.phone, " ");
} }
function DetailComponent_nz_layout_4_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r5.renderAddress(ctx_r5.invoiceInfo.partner), " ");
} }
const _c0 = function (a0) { return { y: a0 }; };
const _c1 = function () { return []; };
function DetailComponent_nz_layout_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-layout", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r13.goToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r15.printInvoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r16.deleteInvoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "nz-table", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, DetailComponent_nz_layout_4_tr_52_Template, 17, 8, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](73, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](77, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, DetailComponent_nz_layout_4_div_78_Template, 3, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](79, DetailComponent_nz_layout_4_div_79_Template, 3, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](80, DetailComponent_nz_layout_4_div_80_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](84, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](88, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](94, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](106, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](107, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](114, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](116);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](120, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](122);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](126, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](132, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](138, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](139, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](140);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](27);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 44, "Customer returned"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 46, "Edit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 48, "Print"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 50, "Delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](28, 52, "No data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](95, _c0, ctx_r0.tableHeight))("nzData", ctx_r0.invoice_detail || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](97, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](34, 54, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](38, 56, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](42, 58, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](46, 60, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](50, 62, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](58, 64, "Invoice code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.invoice.bill_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](64, 66, "Salesman"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.invoiceInfo.employee.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](70, 68, "Sales date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](73, 70, ctx_r0.invoice.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](77, 73, "Customer information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoiceInfo.partner._id == "id_retail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoiceInfo.partner._id != "id_retail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoiceInfo.partner._id != "id_retail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](84, 75, "Payment information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](88, 77, "SubTotal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.subTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](94, 79, "Discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.discount));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](100, 81, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](106, 83, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhpercent(ctx_r0.invoice.tax / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.total * (ctx_r0.invoice.tax / 100)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](114, 85, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.total + ctx_r0.invoice.total * (ctx_r0.invoice.tax / 100)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](120, 87, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.invoice.payment));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](126, 89, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.invoice.total * (1 + ctx_r0.invoice.tax / 100) - ctx_r0.invoice.payment));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](132, 91, "Payment method"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.setPaymentName(ctx_r0.invoice.payment_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](138, 93, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.invoice.note);
} }
class DetailComponent {
    constructor(router, vhQuerySales, lang, vhAuth, vhComponent, vhAlgorithm, cdRef, fncService) {
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.lang = lang;
        this.vhAuth = vhAuth;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.fncService = fncService;
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.url = '';
        this.invoice = null;
        this.subTotal = 0;
        this.getDataInvoice(this.router.getCurrentNavigation().extras.state.id);
    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
    init(invoice = null, invoiceDetail = null) {
        this.invoice = invoice;
        this.invoice_detail = invoiceDetail;
        if (invoice && invoiceDetail) {
            this.invoiceInfo = {
                employee: this.vhAuth.getlocalEmployee(this.invoice.id_employee),
                partner: this.vhQuerySales.getlocalCustomer(this.invoice.id_customer),
                paymentName: this.setPaymentName(this.invoice.payment_type)
            };
        }
        else
            this.invoiceInfo = { employee: {}, partner: {}, paymentName: '' };
        this.setSubTotal();
    }
    getDataInvoice(id) {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQuerySales.getBill(id),
                this.vhQuerySales.getBill_details_byId_bill(id)
            ]).then(([invoice, invoiceDetail]) => {
                if (!invoiceDetail.length)
                    this.init(invoice, []);
                else {
                    invoiceDetail = this.vhAlgorithm.sortVietnamesebyASC(invoiceDetail, 'name');
                    this.init(invoice, invoiceDetail);
                }
                this.vhComponent.hideLoading(0);
            });
        });
    }
    setSubTotal() {
        let subTotal = 0;
        for (let i of this.invoice_detail) {
            subTotal += (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
    }
    setPaymentName(type) {
        switch (type) {
            case 1: return this.lang.translate("Cash");
            case 2: return this.lang.translate("Debit");
            case 3: return this.vhQuerySales.getlocalWallet(this.invoice.id_wallet).name;
        }
    }
    getUnit(units, ratio) {
        return this.vhQuerySales.getUnit_byRatio(units, ratio).unit;
    }
    getLotNumber(lots, _id) {
        let lot = lots.find(item => item._id == _id);
        return lot.lot_number + '\n' + this.fncService.formatDate(lot.date_mfg) + ' - ' + this.fncService.formatDate(lot.date_exp);
    }
    renderAddress(partner) {
        return (partner.address ? partner.address : '') +
            (partner.district ? ', ' + partner.district : '') +
            (partner.province ? ', ' + partner.province : '') +
            (partner.country ? ', ' + partner.country : '');
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_customer_returned');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    printInvoice() {
        this.checkPrint().then((printer) => {
            if (printer)
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice: this.invoice, invoice_detail: this.invoice_detail }, false, false, `modal-print-${printer['_id']}`).then((modal) => {
                    modal.onWillDismiss().then(() => this.goBack());
                });
        }, (err) => {
            this.vhComponent.alertMessage(this.lang.translate("Function"), "", this.lang.translate("Please turn on the printer function"), "OK")
                .then(() => this.goBack());
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_customer_returned_customer_returned_k57_col3_customer_returned_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__.CustomerReturnedK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_customer_returned_customer_returned_k80_col3_customer_returned_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__.CustomerReturnedK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_customer_returned_customer_returned_k80_col4_customer_returned_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.CustomerReturnedK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_customer_returned_customer_returned_a5_customer_returned_a5_component__WEBPACK_IMPORTED_MODULE_1__.CustomerReturnedA5Component;
            case 'print_size_a4': return src_app_sales_components_print_customer_returned_customer_returned_a4_customer_returned_a4_component__WEBPACK_IMPORTED_MODULE_0__.CustomerReturnedA4Component;
            default: return src_app_sales_components_print_customer_returned_customer_returned_a4_customer_returned_a4_component__WEBPACK_IMPORTED_MODULE_0__.CustomerReturnedA4Component;
        }
    }
    goBack() {
        this.router.navigate([this.url], { state: this.dataRestore });
    }
    ngAfterViewChecked() {
        if (document.getElementById('sales-invoice-detail-today') && document.querySelector(".sales-cart-header") && document.querySelector(".ant-table-thead") && document.querySelector(".ant-table-pagination")) {
            this.tableHeight = document.getElementById('sales-invoice-detail-today').clientHeight - document.querySelector(".sales-cart-header").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".ant-table-pagination").clientHeight - 40 + "px";
        }
        this.cdRef.detectChanges();
    }
    goToCart() {
        this.vhQuerySales.getValidityDate(this.invoice.date).then((validitydate) => {
            if (validitydate == null) {
                if (this.vhAuth.checkMyPermission("customer_return_enable_edit_bill"))
                    this.router.navigate([this.url + '/edit-customer-return'], { state: { dataRestore: this.dataRestore, invoiceDetail: this.invoice_detail, invoice: this.invoice, } });
                else
                    this.vhComponent.showToast(1500, this.lang.translate('You do not have this rights'), "alert-toast");
            }
            else {
                this.vhComponent.alertMessageDesktop("warning", `${this.lang.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 5000);
            }
        });
    }
    deleteInvoice() {
        this.vhQuerySales.getValidityDate(this.invoice.date).then((validitydate) => {
            if (validitydate == null) {
                if (this.vhAuth.checkMyPermission("return_enable_cancel_customer")) {
                    this.vhComponent.alertConfirm(this.lang.translate("Confirm"), "", `${this.lang.translate("Are you sure to cancel the purchase invoice")}?`, "OK", this.lang.translate("Cancel"))
                        .then(() => {
                        this.vhComponent.showLoading("", "transparent-loading").then(() => {
                            this.dataRestore.invoice = this.dataRestore.invoice.filter(e => e._id != this.invoice._id);
                            this.vhQuerySales.deleteBill_Billdetail(this.invoice._id).then(() => {
                                this.vhComponent.hideLoading(0).then(() => {
                                    this.vhComponent.showToast(2000, `${this.lang.translate("Customer returned invoice")} ${this.invoice.bill_code} ${this.lang.translate("has been cancelled successfully")}`, "success-toast");
                                    this.goBack();
                                });
                            });
                        });
                    }, () => { });
                }
                else
                    this.vhComponent.showToast(1500, this.lang.translate('You do not have this rights'), "alert-toast");
            }
            else {
                this.vhComponent.alertMessageDesktop("warning", `${this.lang.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 5000);
            }
        });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["bill-type3-detail"]], inputs: { url: "url" }, decls: 5, vars: 4, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "sales-invoice-detail-today", 4, "ngIf"], ["id", "sales-invoice-detail-today"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline"], [2, "margin-left", "4px"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], [1, "invoiceDetail-item"], ["nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzNoResult"], ["rowSelectionTable", ""], ["nzWidth", "35%"], ["nzWidth", "15%", "nzAlign", "center"], ["nzWidth", "15%", "nzAlign", "right"], ["nzWidth", "20%", "nzAlign", "right"], ["style", "cursor: pointer;", 4, "ngFor", "ngForOf"], [1, "sales-bills", "not-continue-sell"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], [2, "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], [2, "cursor", "pointer"], [4, "ngIf"], ["nzAlign", "center"], ["nzAlign", "right"], [2, "font-size", "0.7rem"], ["class", "sub-name", 4, "ngFor", "ngForOf"], [1, "sub-name"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DetailComponent_nz_layout_4_Template, 141, 98, "nz-layout", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.invoice);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 66% 33%;\n  grid-template-rows: 65% 35%;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 1/2;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 92%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills.not-continue-sell[_ngcontent-%COMP%] {\n  grid-template-rows: 20% 15% 63%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 2/3;\n  display: grid;\n  grid-template-columns: 100%;\n  align-content: space-between;\n  line-height: 1.8;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 80%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .payment-print[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  color: #fff;\n  border: none;\n  font-size: 0.9rem;\n  width: 100%;\n  height: 50px;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n.sub-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ion-color-vh-gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNFLGVBQUE7QUFFTjtBQUNFO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBR047QUFGTTs7OztFQUlFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUlSO0FBRk07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlSO0FBSFE7RUFDRSxVQUFBO0FBS1Y7QUFKVTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFNWjtBQUpVO0VBQ0Usa0JBQUE7QUFNWjtBQUhRO0VBQ0UsV0FBQTtBQUtWO0FBSlU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFNWjtBQUxZO0VBQ0UsZUFBQTtBQU9kO0FBTFk7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0FBT2Q7QUFGTTtFQUNFLCtCQUFBO0FBSVI7QUFGTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFJUjtBQUhRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBS1Y7QUFKVTtFQUNFLGtCQUFBO0FBTVo7QUFIUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFLVjtBQUhRO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUtWO0FBSFE7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7QUFJVjtBQUZRO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSVY7QUFIVTtFQUNFLGlCQUFBO0FBS1o7QUFGWTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQUlkO0FBQVk7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQUVkO0FBRVE7RUFDRSx1QkFBQTtBQUFWO0FBQ1U7RUFDRSxpRUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNaO0FBS0U7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FBRko7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0Usa0JBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQXVCLGdCQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLG1DQUFBO0FBRTlCO0FBQ0U7RUFDRSxVQUFBO0VBQVksa0NBQUE7QUFHaEI7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7QUFHSiIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxuICB9XHJcbiAgbnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAuc2FsZXMge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjYlIDMzJTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICYtY2FydCxcclxuICAgICAgLnNhbGVzLWJpbGxzLXN0YWZmLFxyXG4gICAgICAuc2FsZXMtYmlsbHMtY3VzdG9tZXIsXHJcbiAgICAgIC5zYWxlcy1iaWxscy1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgICYtY2FydCB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJi1oZWFkZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2JTtcclxuICAgICAgICAgIC5idG4tZGF0YSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWludm9pY2VEZXRhaWwge1xyXG4gICAgICAgICAgaGVpZ2h0OiA5MiU7XHJcbiAgICAgICAgICAuaW52b2ljZURldGFpbC1pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgJi1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLWJpbGxzLm5vdC1jb250aW51ZS1zZWxsIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSAxNSUgNjMlO1xyXG4gICAgICB9XHJcbiAgICAgICYtYmlsbHMge1xyXG4gICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgJi1zdGFmZiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc3RhZmYgPiBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWN1c3RvbWVyIHtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWN1c3RvbWVyID4gZGl2LFxyXG4gICAgICAgICYtY29udGVudCA+IGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1wYXkge1xyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1ub3RlIHtcclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIC5wYXltZW50LXByaW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgLmNlbnRlci1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC8qIEhpZGUgc2Nyb2xsYmFyKi9cclxuICAuaGlkZVNjcm9sbGJhciB7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG4gIH1cclxuICBcclxuICAuaGlkZVNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDsgLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxuICB9XHJcbiAgXHJcbiAgLnN1Yi1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 20801:
/*!*********************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-3/mange-invoice/edit/edit.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_a4_customer_returned_a4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-a4/customer-returned-a4.component */ 40031);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_a5_customer_returned_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-a5/customer-returned-a5.component */ 81270);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_k80_col4_customer_returned_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-k80-col4/customer-returned-k80-col4.component */ 87247);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_k80_col3_customer_returned_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-k80-col3/customer-returned-k80-col3.component */ 64025);
/* harmony import */ var src_app_sales_components_print_customer_returned_customer_returned_k57_col3_customer_returned_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/customer-returned/customer-returned-k57-col3/customer-returned-k57-col3.component */ 91934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../sale-desktop/components/staff/staff.component */ 88963);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _sale_desktop_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../sale-desktop/components/tax/tax.component */ 74330);
/* harmony import */ var _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../search/search-product/search-product.component */ 99767);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _sale_desktop_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../sale-desktop/components/customer/customer.component */ 70064);
/* harmony import */ var _search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../search/search-customer/search-customer.component */ 55846);
/* harmony import */ var _sale_desktop_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../sale-desktop/components/customer-profile/customer-profile.component */ 46156);
/* harmony import */ var _sale_desktop_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../sale-desktop/components/add-customer/add-customer.component */ 29519);
/* harmony import */ var _sale_desktop_components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../sale-desktop/components/retail-info/retail-info.component */ 626);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




































function EditComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 1, "Please select a product"));
} }
function EditComponent_div_23_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "pre", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_div_23_ng_container_7_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r33); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r31.openModalChooseLot(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r26.getLotNumber(item_r24.lots, item_r24.id_lotproduct));
} }
function EditComponent_div_23_ng_container_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r36 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate3"]("", combo_r36.quantity, "x ", combo_r36.name, " (", ctx_r35.getUnit(combo_r36.units, combo_r36.ratio), "), ");
} }
function EditComponent_div_23_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, EditComponent_div_23_ng_container_8_span_1_Template, 2, 3, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", item_r24.combos);
} }
function EditComponent_div_23_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditComponent_div_23_div_9_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r40); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; return item_r24.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "Note"))("ngModel", item_r24.note);
} }
function EditComponent_div_23_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "nz-option", 72);
} if (rf & 2) {
    const i_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzLabel", i_r42.unit)("nzValue", i_r42.ratio);
} }
function EditComponent_div_23_del_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "del", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", item_r24.price_origin > item_r24.price ? ctx_r30.vhAlgorithm.vhcurrencyunit(item_r24.price_origin) : "", " ");
} }
function EditComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_div_23_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46); const item_r24 = restoredCtx.$implicit; const i_r25 = restoredCtx.index; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r45.deleteGoods(item_r24, i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, EditComponent_div_23_ng_container_7_Template, 3, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](8, EditComponent_div_23_ng_container_8_Template, 3, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, EditComponent_div_23_div_9_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "nz-select", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditComponent_div_23_Template_nz_select_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46); const item_r24 = restoredCtx.$implicit; return item_r24.ratio = $event; })("ngModelChange", function EditComponent_div_23_Template_nz_select_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46); const item_r24 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r48.changeUnit($event, item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](12, EditComponent_div_23_nz_option_12_Template, 1, 2, "nz-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](13, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "nz-input-number", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditComponent_div_23_Template_nz_input_number_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46); const item_r24 = restoredCtx.$implicit; return item_r24.quantity = $event; })("ngModelChange", function EditComponent_div_23_Template_nz_input_number_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46); const item_r24 = restoredCtx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r50.checkQuantityProduct(item_r24, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](15, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_div_23_Template_div_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r46); const item_r24 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r51.openEditUnitPrice(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](19, EditComponent_div_23_del_19_Template, 2, 1, "del", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r24.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r24.ptype == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.vhAuth.localStorageGET("show_note_for_each_product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", item_r24.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", item_r24.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", item_r24.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(item_r24.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(item_r24.price * item_r24.quantity));
} }
function EditComponent_ng_container_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate4"](" ", ctx_r2.invoice.retail_name, " - ", ctx_r2.invoice.retail_phone, " ", ctx_r2.invoice.retail_address ? "-" : "", " ", ctx_r2.invoice.retail_address, " ");
} }
function EditComponent_ng_container_56_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "app-customer", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAndReceiveCustomer", function EditComponent_ng_container_56_Template_app_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r52.closeAndReceiveCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_ng_container_56_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r54.openInfoCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id_customer", ctx_r3.invoice.id_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", ctx_r3.invoice.id_customer != "id_retail" ? "active" : "deactive");
} }
function EditComponent_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "app-search-customer", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAndReceiveCustomer", function EditComponent_ng_container_57_Template_app_search_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r55.closeAndReceiveCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_ng_container_57_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r56); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r57.openInfoCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id_customer", ctx_r4.invoice.id_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", ctx_r4.invoice.id_customer != "id_retail" ? "active" : "deactive");
} }
function EditComponent_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("blur", function EditComponent_ng_container_68_Template_input_blur_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r58.editDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 2, "Platform fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r5.vhAlgorithm.vhcurrencyunit(ctx_r5.invoice.discount));
} }
function EditComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "input", 80, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("blur", function EditComponent_ng_template_69_Template_input_blur_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62); const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](6); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r61.editPercentDiscount(_r60.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "input", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("blur", function EditComponent_ng_template_69_Template_input_blur_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r63.editDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 3, "Discount value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](7, 5, ctx_r7.percent_discount_bill, "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r7.vhAlgorithm.vhcurrencyunit(ctx_r7.invoice.discount));
} }
function EditComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("blur", function EditComponent_div_71_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r64.editFee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r8.vhAlgorithm.vhcurrencyunit(ctx_r8.invoice.fee));
} }
function EditComponent_div_72_nz_select_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "nz-option", 91);
} if (rf & 2) {
    const item_r69 = ctx.$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzValue", item_r69._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r68.vhAlgorithm.vhpercent(item_r69.value / 100));
} }
function EditComponent_div_72_nz_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "nz-select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditComponent_div_72_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r70.id_tax = $event; })("ngModelChange", function EditComponent_div_72_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r72.changeTax($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, EditComponent_div_72_nz_select_5_nz_option_1_Template, 1, 2, "nz-option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r66.id_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r66.listTax);
} }
function EditComponent_div_72_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "0.00%");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function EditComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, EditComponent_div_72_nz_select_5_Template, 2, 2, "nz-select", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, EditComponent_div_72_span_6_Template, 2, 0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 4, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r9.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r9.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r9.vhAlgorithm.vhcurrencyunit(ctx_r9.taxValue), "");
} }
function EditComponent_img_86_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_img_86_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r73.showModalEditTotalPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} }
function EditComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 2, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r11.vhAlgorithm.vhcurrencyunit_symbol(ctx_r11.getTotalATax() - ctx_r11.invoice.payment), " ");
} }
const _c0 = function () { return { minRows: 2, maxRows: 4 }; };
function EditComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "textarea", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditComponent_div_90_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r75.note = $event; })("blur", function EditComponent_div_90_Template_textarea_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r77.edit_note(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 3, "Enter note..."));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r12.note)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](5, _c0));
} }
function EditComponent_nz_modal_99_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r78.tempDetail.price);
} }
function EditComponent_nz_modal_99_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_nz_modal_99_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r81.handleCancelEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_nz_modal_99_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r82); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r83.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function EditComponent_nz_modal_99_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "nz-modal", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("nzVisibleChange", function EditComponent_nz_modal_99_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r85); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r84.isVisibleEditUnitPrice = $event; })("nzOnCancel", function EditComponent_nz_modal_99_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r85); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r86.handleCancelEditUnit(); })("nzOnOk", function EditComponent_nz_modal_99_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r85); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r87.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, EditComponent_nz_modal_99_ng_container_2_Template, 8, 7, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, EditComponent_nz_modal_99_ng_template_3_Template, 6, 6, "ng-template", null, 97, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzFooter", _r79)("nzVisible", ctx_r13.isVisibleEditUnitPrice);
} }
function EditComponent_ng_container_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 2, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx_r14.vhAlgorithm.vhcurrencyunit(ctx_r14.invoice.payment));
} }
function EditComponent_ng_template_103_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_ng_template_103_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r88.handleCancelEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_ng_template_103_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r89); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r90.handleEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function EditComponent_app_customer_profile_105_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-customer-profile", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeInfoCustomer", function EditComponent_app_customer_profile_105_Template_app_customer_profile_closeInfoCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r92); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r91.closeInfoCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("visibleInfoCustomer", ctx_r17.visibleInfoCustomer)("customer", ctx_r17.customer);
} }
function EditComponent_app_add_customer_106_Template(rf, ctx) { if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-add-customer", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAddCustomer", function EditComponent_app_add_customer_106_Template_app_add_customer_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r94); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r93.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showDrawerAddCusomer", ctx_r18.showDrawerAddCusomer);
} }
function EditComponent_app_retail_info_107_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "app-retail-info", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAddCustomer", function EditComponent_app_retail_info_107_Template_app_retail_info_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r95.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("showDrawerAddRetail", ctx_r19.showDrawerAddRetail)("retail_name", ctx_r19.invoice.retail_name)("retail_phone", ctx_r19.invoice.getRetailPhone())("retail_address", ctx_r19.invoice.getRetailAddress());
} }
function EditComponent_ng_container_110_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "i", 114);
} }
function EditComponent_ng_container_110_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](6, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzValue", item_r102._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", item_r102.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](8, 4, item_r102.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](11, 7, item_r102.date_exp, "dd/MM/yyyy"), " ");
} }
function EditComponent_ng_container_110_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 1, "No data"));
} }
function EditComponent_ng_container_110_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "nz-input-group", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "input", 108, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keyup", function EditComponent_ng_container_110_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r104); const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r103.searchLot(_r97.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](6, EditComponent_ng_container_110_ng_template_6_Template, 1, 0, "ng-template", null, 110, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "nz-radio-group", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_110_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r104); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r105.tempDetail.id_lotproduct = $event; })("ngModelChange", function EditComponent_ng_container_110_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r104); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r106.changeLot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](9, EditComponent_ng_container_110_div_9_Template, 12, 10, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](10, EditComponent_ng_container_110_div_10_Template, 3, 3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](7);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzSuffix", _r98);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx_r20.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r20.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx_r20.tempDetail.lots.length);
} }
function EditComponent_ng_template_111_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_ng_template_111_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r107.handleCancelChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_ng_template_111_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r108); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r109.handleChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx_r22.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 5, "Ok"));
} }
function EditComponent_nz_modal_113_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "nz-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r118 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r118.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](1, 3, element_r118.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzValue", element_r118._id);
} }
function EditComponent_nz_modal_113_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "nz-select", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditComponent_nz_modal_113_ng_container_2_ng_container_21_ng_container_1_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r121); const data_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit; return data_r115.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, EditComponent_nz_modal_113_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template, 2, 6, "nz-option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](data_r115.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", data_r115.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", data_r115.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r116.getUnit(data_r115.units, data_r115.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](data_r115.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx_r116.vhAlgorithm.vhcurrencyunit(data_r115.price), " ");
} }
function EditComponent_nz_modal_113_ng_container_2_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, EditComponent_nz_modal_113_ng_container_2_ng_container_21_ng_container_1_Template, 14, 9, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r115 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", data_r115.lots);
} }
const _c1 = function () { return { y: "400px" }; };
function EditComponent_nz_modal_113_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "nz-table", 120, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, EditComponent_nz_modal_113_ng_container_2_ng_container_21_Template, 2, 1, "ng-container", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](2);
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzData", ctx_r110.tempDetail.combos)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](19, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](10, 11, "Lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](13, 13, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](16, 15, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](19, 17, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _r113.data);
} }
function EditComponent_nz_modal_113_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_nz_modal_113_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r123.show_modal_select_lots_combo = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](3, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_nz_modal_113_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r124); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2); return ctx_r125.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](5, 4, "Ok"));
} }
function EditComponent_nz_modal_113_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "nz-modal", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("nzVisibleChange", function EditComponent_nz_modal_113_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r126.show_modal_select_lots_combo = $event; })("nzOnCancel", function EditComponent_nz_modal_113_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r127); const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r128.show_modal_select_lots_combo = false; })("nzOnOk", function EditComponent_nz_modal_113_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r127); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](); return ctx_r129.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, EditComponent_nz_modal_113_ng_container_2_Template, 22, 20, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, EditComponent_nz_modal_113_ng_template_3_Template, 6, 6, "ng-template", null, 119, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](4);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](1, 4, "Select lot number for products in combo"), ": ", ctx_r23.tempDetail.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzFooter", _r111)("nzVisible", ctx_r23.show_modal_select_lots_combo);
} }
class EditComponent {
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
        this.invoice = this.router.getCurrentNavigation().extras.state.invoice;
        this.invoiceDetail = this.router.getCurrentNavigation().extras.state.invoiceDetail;
        this.subTotal = 0;
        this.taxValue = 0;
        this.listTax = this.vhQuerySales.getlocalTaxs().filter(tax => tax.status);
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.employee = {};
        this.pickerTime = new Date();
        this.percent_discount_bill = 0;
        this.is_discount_bill = false;
        this.showModalChangePriceType = false;
        this.url = '';
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
        // ------thoát trang-----
        this.isExit = false;
        /**add customer */
        this.showDrawerAddCusomer = false;
        this.showDrawerAddRetail = false;
        this.barcode = '';
        this.barcode_array = [];
        this.show_modal_select_lots = false;
        this.list_search_lot = [];
        this.show_modal_select_lots_combo = false;
    }
    ngOnInit() {
        // this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
        this.default_price_type = this.invoice.price_type;
        this.pickerTime = new Date(this.invoice.date);
        this.id_tax = this.listTax.find(item => item.value == this.invoice.tax)._id;
        let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_customer_returned');
        this.printer = printer ? printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)] : { discount_hidden: false, note_hidden: false, fee_hidden: false, tax_hidden: false, debt_hidden: false };
        //tính tổng tiền
        let subTotal = 0;
        for (let i of this.invoiceDetail) {
            subTotal += (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
        this.taxValue = this.invoice.total * (this.invoice.tax / 100);
        this.radioValue = this.invoice.id_customer == 'id_retail' ? 1 : 2;
    }
    ngOnDestroy() {
        document.removeEventListener('keydown', this.event, false);
    }
    eventKeypress() {
        this.event = (event) => {
            const keycode = event.keyCode;
            if (keycode === 112 || keycode === 113 || keycode === 114)
                event.preventDefault();
            if (keycode === 115)
                this.searchProductList = !this.searchProductList;
            else if (this.invoiceDetail.length > 0) {
                switch (keycode) {
                    case 112:
                        this.payInvoice(3, false);
                        break;
                    case 113: {
                        if (this.checkPrinter)
                            this.payInvoice(3, true);
                        break;
                    }
                }
            }
        };
        document.addEventListener('keydown', this.event, false);
    }
    ngAfterViewInit() {
        this.checkPrinter = this.printer.enable;
        this.vhAlgorithm.waitingStack().then(() => {
            if (document.querySelector(".discount-price"))
                this.discount_price = this.vhAlgorithm.vhnumeral(".discount-price");
            if (document.querySelector(".invoice-fee"))
                this.invoice_fee = this.vhAlgorithm.vhnumeral(".invoice-fee");
        });
        // ------bắt sự kiện nhấn phím nóng-----
        this.eventKeypress();
    }
    ngAfterViewChecked() {
        this.cdRef.detectChanges();
    }
    deleteGoods(detail, index) {
        this.vhComponent.alertConfirm("", "", `${this.languageService.translate("Delete")} ${detail.name}?`, "OK", this.languageService.translate("Cancel"))
            .then(() => {
            this.invoiceDetail.splice(index, 1);
            this.setSubTotal();
        }, () => { });
    }
    openSearchProductList() {
        this.searchProductList = true;
    }
    getUnit(units, ratio) {
        return this.vhQuerySales.getUnit_byRatio(units, ratio).unit;
    }
    closeSearchProductList(data) {
        if (data) {
            if (data.manylot && !data.id_lotproduct)
                this.openModalChooseLot(data);
            else if (data.combos && data.combos.filter(e => e.lots && !e.id_lotproduct).length) {
                this.tempDetail = data;
                this.show_modal_select_lots_combo = true;
            }
            else if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_customer_return)
                this.addInvoiceDetail(data);
            else
                this.addInvoiceDetailMultiLine(data);
        }
        this.searchProductList = false;
    }
    checkQuantityProduct(product, event) {
        if (!event)
            product.quantity = 1;
        this.setSubTotal();
    }
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
        this.setSubTotal();
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
            this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
        }
    }
    handleCancelEditUnit() { this.isVisibleEditUnitPrice = false; }
    // -------set employee-------
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
    }
    changeCustomerType(event) {
        if (this.radioValue == 1) {
            this.invoice.id_customer = ("id_retail");
            this.invoice.payment = (this.getTotalATax());
        }
        if (event == 2 && this.invoice.retail_name) {
            this.nzModalService.confirm({
                nzTitle: `${this.languageService.translate('Retail customer information will be lost')}?`,
                nzCancelText: this.languageService.translate("Cancel"),
                nzOkText: "Ok",
                nzOnOk: () => { this.clearRetailCustomer(); },
                nzOnCancel: () => { this.radioValue = 1; },
            });
        }
    }
    clearRetailCustomer() {
        this.invoice.retail_address = ('');
        this.invoice.retail_name = ('');
        this.invoice.retail_phone = ('');
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
    changeTax(event) {
        let tax = this.listTax.find(item => item._id == event);
        this.invoice.tax = (tax.value);
        this.setTaxValue();
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
    editPercentDiscount(value) {
        if (parseFloat(value) > 100)
            document.getElementById("percent-discount-price")['value'] = 0;
        else
            this.percent_discount_bill = value;
        this.invoice.discount = this.subTotal * (this.percent_discount_bill / 100);
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
    goBack() {
        this.isExit = true;
        this.router.navigate([this.url], { state: this.dataRestore });
    }
    handleGoBack() {
        this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Bạn muốn thoát và không lưu hóa đơn này")}?`, "OK", this.languageService.translate('Cancel'))
            .then(() => { this.isExit = true, this.router.navigate([this.url], { state: this.dataRestore }); }, () => { });
    }
    edit_note() {
        if (this.note) {
            this.invoice.note = (this.note);
        }
    }
    openInfoSupplier() {
        if (this.invoice.id_customer) {
            this.customer = this.vhQuerySales.getlocalSupplier(this.invoice.id_customer);
            this.visibleInfoCustomer = true;
        }
    }
    closeInfoSupplier(event) {
        this.visibleInfoCustomer = false;
    }
    payInvoice(bill_type, print) {
        this.vhComponent.alertConfirm((!print ? `${this.languageService.translate("Pay")}?` : `${this.languageService.translate("Pay & Print")}?`), "", "", "OK", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.createOrUpdate(bill_type).then(bill => {
                    this.vhComponent.hideLoading(0).then(() => {
                        this.vhComponent.showToast(2000, `${this.languageService.translate("Customer returned invoice")} ${this.invoice.bill_code} ${this.languageService.translate("has been updated successfully")}`, "success-toast");
                        if (print)
                            this.handlePrint();
                        else
                            this.goBack();
                    });
                });
            });
        }, () => { });
    }
    createOrUpdate(bill_type) {
        return this.vhQuerySales.updateBill_Billdetail(this.invoice._id, this.getCreateUpdateInvoice(bill_type), this.getCreateUpdateInvoiceDetail());
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_customer_returned');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    handlePrint() {
        this.checkPrint().then((printer) => {
            if (printer)
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice: this.invoice, invoice_detail: this.invoiceDetail }, false, false, `modal-print-${printer['_id']}`).then((modal) => {
                    modal.onWillDismiss().then(() => this.goBack());
                });
        }, (err) => {
            this.vhComponent.alertMessage(this.languageService.translate("Function"), "", this.languageService.translate("Please turn on the printer function"), "OK")
                .then(() => this.goBack());
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_customer_returned_customer_returned_k57_col3_customer_returned_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__.CustomerReturnedK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_customer_returned_customer_returned_k80_col3_customer_returned_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__.CustomerReturnedK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_customer_returned_customer_returned_k80_col4_customer_returned_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.CustomerReturnedK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_customer_returned_customer_returned_a5_customer_returned_a5_component__WEBPACK_IMPORTED_MODULE_1__.CustomerReturnedA5Component;
            case 'print_size_a4': return src_app_sales_components_print_customer_returned_customer_returned_a4_customer_returned_a4_component__WEBPACK_IMPORTED_MODULE_0__.CustomerReturnedA4Component;
            default: return src_app_sales_components_print_customer_returned_customer_returned_a4_customer_returned_a4_component__WEBPACK_IMPORTED_MODULE_0__.CustomerReturnedA4Component;
        }
    }
    //--------------visible drawer info customer-----------
    openInfoCustomer() {
        if (this.invoice.id_customer != 'id_retail') {
            this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
            this.visibleInfoCustomer = true;
        }
    }
    closeInfoCustomer(event) {
        this.visibleInfoCustomer = false;
    }
    checkDeactivate(currentRoute, currentState, nextState) {
        return nextState.url == '/login' ? true : (this.isExit ? this.isExit : this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Are you sure to cancel the sales order"), "OK", (this.languageService.translate("Cancel"))).then(() => { return true; }).catch(() => { return false; }));
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
        if (this.router.url === "/sales/dashboard/manage/invoice/customer-return/add-customer-return") {
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
                    let detailproduct = this.vhQuerySales.getlocalDetailProduct_byBarcode(this.barcode);
                    if (detailproduct)
                        this.closeSearchProductList(Object.assign(Object.assign({}, detailproduct), this.vhQuerySales.getUnit_byRatio(detailproduct.units, detailproduct.ratio)));
                    this.barcode_array = [];
                }, 100);
            }
            else {
                this.barcode_array.push(_event.key);
            }
            // }
        }
    }
    getLotNumber(lots, _id) {
        let lot = lots.find(item => item._id == _id);
        return lot.lot_number;
    }
    searchLot(value) {
        this.tempDetail.lots = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value), this.list_search_lot, ['lot_number']);
    }
    openModalChooseLot(data) {
        this.tempDetail = data;
        this.list_search_lot = this.tempDetail.lots;
        if (!this.list_search_lot.length)
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Sản phẩm này không có lô khả dụng để bán!"));
        else
            this.show_modal_select_lots = true;
    }
    changeLot(e) {
        this.tempDetail.lot_number = this.tempDetail.lots.find(item => item._id == e).lot_number;
    }
    handleChooseLot() {
        this.show_modal_select_lots = false;
        this.tempDetail.lots = this.list_search_lot;
        if (!this.tempDetail.id_product)
            this.closeSearchProductList(this.tempDetail);
    }
    handleCancelChooseLot() {
        this.show_modal_select_lots = false;
        this.tempDetail.lots = this.list_search_lot;
    }
    handleChooseLotCombo() {
        if (this.tempDetail.combos.filter(item => item.lots && !item.id_lotproduct).length)
            this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Vui lòng chọn lô cho sản phẩm thuộc combo này"));
        else {
            this.show_modal_select_lots_combo = false;
            this.closeSearchProductList(this.tempDetail);
        }
    }
    getTotalATax() {
        return this.invoice.total + this.taxValue;
    }
    removeInvoiceDetail(id, notSetSub) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == id);
        if (index != -1) {
            this.invoiceDetail.splice(index, 1);
            if (!notSetSub)
                this.setSubTotal();
        }
    }
    setSubTotal() {
        let subTotal = 0;
        for (let i of this.invoiceDetail) {
            let total_product_gift = 0;
            let total_products = 0;
            if (i.products_gift) {
                total_product_gift = i.products_gift.filter(item => item.choose).reduce((prev, next) => prev + next.quantity * next.price, 0);
            }
            else if (i.products) {
                total_products = i.products.reduce((prev, next) => prev + next.quantity * next.price, 0);
            }
            subTotal += total_products + total_product_gift + (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
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
    }
    getCreateUpdateInvoice(bill_type) {
        if (bill_type)
            this.invoice.bill_type = (bill_type);
        return this.invoice;
    }
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map(item => {
            let detail = {
                id_product: item.id_product, price: item.price, quantity: item.quantity,
                ptype: item.ptype,
                ratio: item.ratio,
                note: item.note,
            };
            if (item.ptype == 5)
                detail['combos'] = item.combos.map(e => {
                    let product = {
                        id_product: e.id_product,
                        price: e.price, quantity: e.quantity, ptype: e.ptype,
                        ratio: e.ratio ? e.ratio : 1
                    };
                    if (e.id_lotproduct)
                        product['id_lotproduct'] = e.id_lotproduct;
                    if (e['id_subproduct'])
                        product['id_subproduct'] = e.id_subproduct;
                    return product;
                });
            if (item.id_lotproduct)
                detail['id_lotproduct'] = item.id_lotproduct;
            if (item['id_subproduct'])
                detail['id_subproduct'] = item.id_subproduct;
            if (item.price < item.price_origin)
                detail['price_origin'] = item.price_origin;
            return detail;
        });
    }
    addInvoiceDetail(value) {
        if (value['id_subproduct']) {
            if (value.lot_number) {
                let index = this.invoiceDetail.findIndex(detail => detail['lot_number'] == value['lot_number'] && detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
            else {
                let index = this.invoiceDetail.findIndex(detail => detail['id_subproduct'] == value['id_subproduct'] && detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
        }
        else {
            if (value.lot_number) {
                let index = this.invoiceDetail.findIndex(detail => detail['lot_number'] == value['lot_number'] && detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
            else {
                let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id'] && detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoiceDetail[index]['quantity'] < 9999999999)
                        this.invoiceDetail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
        }
    }
    addBill_Detail(value) {
        let detail = {
            name: value.name,
            id_product: value._id,
            quantity: 1,
            unit: value.unit,
            units: value.units,
            ratio: value.ratio,
            ptype: value.type,
            price: value.price,
            price_origin: value.price,
            id_category: value.id_category
        };
        if (value.lot_number)
            detail['lot_number'] = value.lot_number;
        if (value.lots)
            detail['lots'] = value.lots;
        if (value.id_lotproduct)
            detail['id_lotproduct'] = value.id_lotproduct;
        if (value['id_subproduct'])
            detail['id_subproduct'] = value.id_subproduct;
        if (value.type == 5) {
            detail['subComboName'] = value.subComboName;
            detail['combos'] = [...value.combos.map(item => {
                    let product = {
                        id_product: item.id_product, name: item.name, ptype: item.type,
                        price: item.price, quantity: item.quantity,
                        unit: item.unit, units: item.units, ratio: item.ratio ? item.ratio : 1,
                        lots: item.lots ? item.lots : [],
                        id_lotproduct: item.id_lotproduct,
                    };
                    if (item.lot_number)
                        product['lot_number'] = item.lot_number;
                    if (item.lots)
                        product['lots'] = item.lots;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item['id_subproduct'])
                        product['id_subproduct'] = item.id_subproduct;
                    return product;
                })];
        }
        this.invoiceDetail.unshift(detail);
        this.setSubTotal();
    }
    addInvoiceDetailMultiLine(value) {
        let detail = {
            name: value.name,
            id_product: value._id,
            quantity: 1,
            unit: value.unit,
            units: value.units,
            ratio: value.ratio,
            ptype: value.type,
            price: value.price,
            price_origin: value.price,
            id_category: value.id_category
        };
        if (value.lot_number)
            detail['lot_number'] = value.lot_number;
        if (value.lots)
            detail['lots'] = value.lots;
        if (value.id_lotproduct)
            detail['id_lotproduct'] = value.id_lotproduct;
        if (value['id_subproduct'])
            detail['id_subproduct'] = value.id_subproduct;
        if (value.type == 5) {
            detail['subComboName'] = value.subComboName;
            detail['combos'] = [...value.combos.map(item => {
                    let product = {
                        id_product: item.id_product, name: item.name, ptype: item.type,
                        price: item.price, quantity: item.quantity,
                        unit: item.unit, units: item.units, ratio: item.ratio ? item.ratio : 1,
                        lots: item.lots ? item.lots : [],
                        id_lotproduct: item.id_lotproduct,
                    };
                    if (item.lot_number)
                        product['lot_number'] = item.lot_number;
                    if (item.lots)
                        product['lots'] = item.lots;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item['id_subproduct'])
                        product['id_subproduct'] = item.id_subproduct;
                    return product;
                })];
        }
        this.invoiceDetail.unshift(detail);
        this.setSubTotal();
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__.NzModalService)); };
EditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["bill-type3-edit"]], hostBindings: function EditComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("keypress", function EditComponent_keypress_HostBindingHandler($event) { return ctx.getKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresolveWindow"]);
    } }, inputs: { url: "url" }, decls: 114, vars: 93, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["nz-col", "", "nzSpan", "4", 1, "center-all-content"], ["nz-col", "", "nzSpan", "8", 1, "center-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], ["class", "no-data", 4, "ngIf"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], [1, "sales-bills-staff-name"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar", 2, "overflow", "visible"], [1, "sales-bills-customer-title"], [2, "color", "var(--ion-color-vh-white)", "padding-right", "5px", 3, "src", "click"], ["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], [4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["class", "sales-bills-content-fee", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-tax", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["style", "width: 16px;margin-left:10px", "src", "assets/icon/Iconfeather-edit.svg", 3, "click", 4, "ngIf"], ["class", "sales-bills-content-rest", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], [3, "payment_type", "id_wallet", "id_customer", "closeAndGetValuePayment"], ["class", "sales-bills-content-note", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditPay", ""], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer", 4, "ngIf"], [3, "showDrawerAddCusomer", "closeAddCustomer", 4, "ngIf"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice2", ""], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [1, "no-data"], [1, "invoiceDetail-item"], ["nz-row", ""], ["nz-col", "", "nzSpan", "1", 3, "click"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "8"], [2, "font-weight", "bold", "margin-bottom", "0"], ["nz-col", "", "nzSpan", "3"], [2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "4", 2, "text-align", "right"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4", 1, "invoiceDetail-item-quantity", "text-end", 3, "click"], [1, "max-width-two-line", 2, "border-bottom", "1px var(--ion-color-vh-gray) solid", "margin-left", "16px"], ["style", "font-size: 0.7rem;", 4, "ngIf"], [1, "max-width-two-line"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["class", "sub-name", 4, "ngFor", "ngForOf"], [1, "sub-name"], ["nz-input", "", "nzBorderless", "", 1, "bill-detail-note", 2, "text-align", "left !important", 3, "placeholder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue"], [2, "font-size", "0.7rem"], [3, "id_customer", "closeAndReceiveCustomer"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "cursor", "pointer", 3, "ngClass", "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "nz-no-border", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "width", "auto"], ["id", "percent-discount-price", "type", "number", "max", "100", "min", "0", "step", "0.01", "maxlength", "3", "nz-input", "", 1, "border_bottom", 2, "width", "50px", 3, "value", "blur"], ["percentDiscount", ""], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "border_bottom", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "border_bottom", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax"], ["nzBorderless", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], ["nz-col", "", "nzSpan", "7", 2, "text-align", "end"], ["nzBorderless", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "not-found"], ["src", "assets/icon/Iconfeather-edit.svg", 2, "width", "16px", "margin-left", "10px", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-input", "", 1, "nz-hover-border", 3, "ngModel", "placeholder", "nzAutosize", "ngModelChange", "blur"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "8", 1, "center-col"], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "edit-pay", 3, "value"], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer"], [3, "showDrawerAddCusomer", "closeAddCustomer"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], [2, "width", "100%", "padding", "8px 0", 3, "ngModel", "ngModelChange"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], [2, "text-align", "center"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice3", ""], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_Template_div_click_0_listener() { return ctx.handleGoBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](7, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_Template_button_click_17_listener() { return ctx.openSearchProductList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](18, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](21, EditComponent_div_21_Template, 4, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](23, EditComponent_div_23_Template, 24, 13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "app-staff", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAndReceiveEmployee", function EditComponent_Template_app_staff_closeAndReceiveEmployee_31_listener($event) { return ctx.closeAndReceiveEmployee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](36, "nz-date-picker", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_nz_date_picker_ngModelChange_36_listener($event) { return ctx.pickerTime = $event; })("ngModelChange", function EditComponent_Template_nz_date_picker_ngModelChange_36_listener($event) { return ctx.setPickerTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](42, "ion-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_Template_ion_icon_click_42_listener() { return ctx.openDrawerAddCustomerOrRetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "nz-radio-group", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_nz_radio_group_ngModelChange_44_listener($event) { return ctx.radioValue = $event; })("ngModelChange", function EditComponent_Template_nz_radio_group_ngModelChange_44_listener($event) { return ctx.changeCustomerType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](54, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](55, EditComponent_ng_container_55_Template, 2, 4, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](56, EditComponent_ng_container_56_Template, 3, 2, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](57, EditComponent_ng_container_57_Template, 3, 2, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](62, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](68, EditComponent_ng_container_68_Template, 6, 4, "ng-container", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](69, EditComponent_ng_template_69_Template, 10, 8, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](71, EditComponent_div_71_Template, 5, 4, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](72, EditComponent_div_72_Template, 9, 6, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](79, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](81, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](84, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](86, EditComponent_img_86_Template, 1, 0, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](87, EditComponent_div_87_Template, 6, 4, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](88, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](89, "app-tax", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeAndGetValuePayment", function EditComponent_Template_app_tax_closeAndGetValuePayment_89_listener($event) { return ctx.closeAndGetValuePayment($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](90, EditComponent_div_90_Template, 3, 6, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](91, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](92, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_Template_button_click_92_listener() { return ctx.payInvoice(3, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](95, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function EditComponent_Template_button_click_95_listener() { return ctx.payInvoice(3, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](98, "app-search-product", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("closeSearchProductList", function EditComponent_Template_app_search_product_closeSearchProductList_98_listener($event) { return ctx.closeSearchProductList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](99, EditComponent_nz_modal_99_Template, 5, 5, "nz-modal", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](100, "nz-modal", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("nzVisibleChange", function EditComponent_Template_nz_modal_nzVisibleChange_100_listener($event) { return ctx.edit_pay = $event; })("nzOnCancel", function EditComponent_Template_nz_modal_nzOnCancel_100_listener() { return ctx.handleCancelEditPay(); })("nzOnOk", function EditComponent_Template_nz_modal_nzOnOk_100_listener() { return ctx.handleEditPay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](101, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](102, EditComponent_ng_container_102_Template, 7, 4, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](103, EditComponent_ng_template_103_Template, 6, 6, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](105, EditComponent_app_customer_profile_105_Template, 1, 2, "app-customer-profile", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](106, EditComponent_app_add_customer_106_Template, 1, 1, "app-add-customer", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](107, EditComponent_app_retail_info_107_Template, 1, 4, "app-retail-info", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](108, "nz-modal", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("nzVisibleChange", function EditComponent_Template_nz_modal_nzVisibleChange_108_listener($event) { return ctx.show_modal_select_lots = $event; })("nzOnCancel", function EditComponent_Template_nz_modal_nzOnCancel_108_listener() { return ctx.handleCancelChooseLot(); })("nzOnOk", function EditComponent_Template_nz_modal_nzOnOk_108_listener() { return ctx.handleChooseLot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](109, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](110, EditComponent_ng_container_110_Template, 11, 7, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](111, EditComponent_ng_template_111_Template, 6, 7, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](113, EditComponent_nz_modal_113_Template, 5, 6, "nz-modal", 51);
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](70);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](104);
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 57, "Back"), " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](6, 59, "Edit customer returned"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](14, 61, "Select product"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](20, 63, "Search (F4)"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.invoiceDetail.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.invoiceDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](30, 65, "Employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("id_employee", ctx.invoice.id_employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](35, 67, "Return date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.pickerTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](41, 69, "Customer information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", ctx.invoice.retail_name ? "assets/icon/eye.svg" : "assets/icon/add.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](47, 71, "Retail customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](50, 73, "Member"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzValue", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](53, 75, "Search customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.radioValue == 1 && ctx.invoice.retail_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.radioValue == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.radioValue == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](61, 77, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](65, 79, "SubTotal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.subTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.invoice.order_number_ecommerce)("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_tax"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](76, 81, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.getTotalATax()));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](83, 83, "Pay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.payment), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.invoice.payment_type != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_rest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("payment_type", ctx.invoice.payment_type)("id_wallet", ctx.invoice.id_wallet)("id_customer", ctx.invoice.id_customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !ctx.printer.note_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.invoiceDetail.length || !ctx.invoice.id_customer || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](94, 85, "Save & Print"), " (F2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.invoiceDetail.length || !ctx.invoice.id_customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](97, 87, "Save"), " (F1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("searchProductList", ctx.searchProductList)("default_price_type", ctx.default_price_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](101, 89, "Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzVisible", ctx.edit_pay)("nzFooter", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.visibleInfoCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showDrawerAddCusomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.showDrawerAddRetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](109, 91, "Select lot number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("nzFooter", _r21)("nzVisible", ctx.show_modal_select_lots);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.show_modal_select_lots_combo);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_21__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_22__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_23__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_20__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_24__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_25__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgForOf, _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_27__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_29__.IonIcon, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_30__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_30__.NzRadioComponent, _sale_desktop_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__.TaxComponent, _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_10__.SearchProductComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_19__.NzModalContentDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__.NzSelectComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_32__.NzInputNumberComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.DefaultValueAccessor, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__.NzOptionComponent, _sale_desktop_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_11__.CustomerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgClass, _search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_12__.SearchCustomerComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__.NzAutosizeDirective, _sale_desktop_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_13__.CustomerProfileComponent, _sale_desktop_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_14__.AddCustomerComponent, _sale_desktop_components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_15__.RetailInfoComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_34__.NzTbodyComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_26__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-price[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 0.9rem;\n  border-bottom: solid 1px #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 93%;\n  overflow-y: scroll;\n  padding-top: 2%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 15% 20% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-green) !important;\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   nz-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .deactive[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   app-customer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-gray);\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n.bill-detail-note[_ngcontent-%COMP%] {\n  font-size: 0.7rem !important;\n  color: var(--ion-color-vh-gray);\n  font-weight: normal;\n  font-style: italic;\n  padding: 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUNGO0FBQUU7RUFDSSxlQUFBO0FBRU47QUFDQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBQUVGO0FBREU7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0FBR047QUFGTTs7OztFQUtJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdWO0FBRE07RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdWO0FBRlU7RUFDSSxVQUFBO0FBSWQ7QUFIYztFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFLbEI7QUFIYztFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBS2xCO0FBRlU7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSWQ7QUFIYztFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUtsQjtBQUprQjtFQUNJLGVBQUE7QUFNdEI7QUFGa0I7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0FBSXRCO0FBQ007RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBQUNWO0FBQVU7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFFZDtBQURjO0VBRUksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVsQjtBQURrQjs7O0VBRUksVUFBQTtFQUNBLGVBQUE7QUFJdEI7QUFEYztFQUNJLGtCQUFBO0FBR2xCO0FBQVU7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFZDtBQURjO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQUdsQjtBQUZrQjtFQUNJLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FBSXRCO0FBQWtCO0VBQ0ksaUJBQUE7QUFFdEI7QUFDYztFQUNJLGdDQUFBO0FBQ2xCO0FBQ2M7RUFDSSxjQUFBO0FBQ2xCO0FBQ2M7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBQUNsQjtBQUNjO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBQ2xCO0FBRVU7RUFFSSxhQUFBO0VBQ0EsOEJBQUE7QUFEZDtBQUdVO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFEZDtBQUdrQjtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQUR0QjtBQU1rQjtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQUp0QjtBQVFrQjtFQUNJLFVBQUE7QUFOdEI7QUFVa0I7RUFDSSxlQUFBO0FBUnRCO0FBVWtCO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQVJ0QjtBQVdjO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFUbEI7QUFVa0I7RUFDSSxXQUFBO0FBUnRCO0FBWVU7RUFDSSx1QkFBQTtFQUNBLDhCQUFBO0FBVmQ7QUFXYztFQUNJLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQVRsQjtBQVdjO0VBQ0ksMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFUbEI7QUFlQTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUFaRjtBQWNBOztFQUVFLGlCQUFBO0FBWEY7QUFhQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVZGO0FBWUEsa0JBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQXVCLGdCQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLG1DQUFBO0FBUDVCO0FBVUE7RUFDRSxVQUFBO0VBQVksa0NBQUE7QUFOZDtBQVVBO0VBQ0UsV0FBQTtBQVBGO0FBUUM7RUFDSSwwQkFBQTtBQU5MO0FBVUE7RUFDQyxXQUFBO0FBUEQ7QUFVQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVBKIiwiZmlsZSI6ImVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICAuc2FsZXMge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDM1JTtcclxuICAgICAgcm93LWdhcDogMTBweDtcclxuICAgICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgICAgJi1jYXJ0LFxyXG4gICAgICAmLWJlc3Qtc2VsbGluZyxcclxuICAgICAgLnNhbGVzLWJpbGxzLXN0YWZmLFxyXG4gICAgICAuc2FsZXMtYmlsbHMtY3VzdG9tZXIsXHJcbiAgICAgIC5zYWxlcy1iaWxscy1jb250ZW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgJi1jYXJ0IHtcclxuICAgICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDYlO1xyXG4gICAgICAgICAgICAgIC5idG4tZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYnRuLXByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjOGM3Y2M7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDkzJTtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICAgICAgICAgIC5pbnZvaWNlRGV0YWlsLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAmLXF1YW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWRlY2VlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8gYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1iaWxscyB7XHJcbiAgICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDIwJSA1NSUgMTAlO1xyXG4gICAgICAgICAgJi1zdGFmZiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICYtdGltZSxcclxuICAgICAgICAgICAgICAmLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIG56LWRhdGUtcGlja2VyLFxyXG4gICAgICAgICAgICAgICAgICBhcHAtc3RhZmYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtY3VzdG9tZXIge1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgbnotcmFkaW8tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5kZWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzhjN2NjO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBhcHAtY3VzdG9tZXIge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtY3VzdG9tZXIgPiBkaXYsXHJcbiAgICAgICAgICAmLWNvbnRlbnQgPiBkaXYge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgIGRpdiA+IHtcclxuICAgICAgICAgICAgICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmLWRpc2NvdW50LFxyXG4gICAgICAgICAgICAgICYtZmVlIHtcclxuICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJi10YXgge1xyXG4gICAgICAgICAgICAgICAgICAubm90LWZvdW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJi1wYXkge1xyXG4gICAgICAgICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICYtcGF5bWVudF90eXBlIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICBhcHAtdGF4IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAub3JkZXItYW5kLXByaW50IHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLm9yZGVyIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuLnRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbi5jZW50ZXItY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLyogSGlkZSBzY3JvbGxiYXIqL1xyXG4uaGlkZVNjcm9sbGJhciB7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGb3IgRmlyZWZveCAqL1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXHJcbn1cclxuXHJcbi5oaWRlU2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDsgLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAucmFkaW8tcHVyY2hhc2UgIHNwYW57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAuYW50LXJhZGlve1xyXG4gICAgIG1heC13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLnJhZGlvLXB1cmNoYXNlICAuYW50LXJhZGlve1xyXG4gd2lkdGg6IDE2cHg7IFxyXG59XHJcblxyXG4uYmlsbC1kZXRhaWwtbm90ZSB7XHJcbiAgICBmb250LXNpemU6IDAuN3JlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBwYWRkaW5nOiA0cHggMDs7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 29021:
/*!***************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/ahamoveService/ahamove.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AhamoveService": () => (/* binding */ AhamoveService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);



class AhamoveService {
    constructor(http, vhQuerySales) {
        this.http = http;
        this.vhQuerySales = vhQuerySales;
        this.URL = this.vhQuerySales.getShippingAhamoveURL();
        // api_key = '183a9baa5176ebbaa9c10fe67fc02161d63f6849'; //dev
        this.api_key = 'fc0ee646897ef09f19fd61075337728c61bc9480'; //production
    }
    getTokenAhaMove(phone) {
        const options = {
            params: {
                "url": 'https://api.ahamove.com/v1/partner/register_account',
                "mobile": phone,
                "api_key": this.api_key,
                "name": "Viethas",
                "address": "Khách hàng"
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    getAllServiceAhaMove(city_id) {
        const options = {
            params: {
                "url": `https://api.ahamove.com/v1/order/service_types?city_id=${city_id}`,
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    calculateFeeAhamove(data) {
        const options = {
            params: {
                "url": "https://api.ahamove.com/v2/order/estimated_fee",
            }
        };
        const body = {
            "token": data.token,
            "order_time": 0,
            "path": data.path,
            "services": data.services,
            "payment_method": "CASH"
        };
        return this.http.post(this.URL, body, options).toPromise();
    }
    createOrderAhamove(data) {
        let x = `[{"address":"${data.pick_address}","name":"${data.pick_name}","mobile":"${data.pick_tel}"},{"address":"${data.address}","name":"${data.name}","mobile":"${data.phone}","cod":${data.cod},"remarks":"${data.note}"}]`;
        const options = {
            params: {
                "url": "https://api.ahamove.com/v1/order/create",
                "token": data.token,
                "order_time": data.order_time,
                "service_id": data.service_id,
                "payment_method": "CASH",
                "path": x
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    getDetailBillAhamove(token, order_id) {
        const options = {
            params: {
                "url": `https://api.ahamove.com/v1/order/detail`,
                "token": token,
                "order_id": order_id
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
    cancelOrderAhamove(token, order_id) {
        const options = {
            params: {
                "url": `https://api.ahamove.com/v1/order/cancel`,
                "token": token,
                "order_id": order_id,
                "comment": "No comment"
            }
        };
        return this.http.get(this.URL, options).toPromise();
    }
}
AhamoveService.ɵfac = function AhamoveService_Factory(t) { return new (t || AhamoveService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQuerySales)); };
AhamoveService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AhamoveService, factory: AhamoveService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 586:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/ghnService/ghn.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GhnService": () => (/* binding */ GhnService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class GhnService {
    constructor(http) {
        this.http = http;
    }
    /**
    * kiểm tra token của giao hàng nhanh có hợp lệ hay không
    * @example : this.transportService.connectTokenGhn(token).then(res =>{
    * @param : tokenName
    * @return :
    **/
    connectTokenGhn(token) {
        let urlGhn = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shop/all';
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            })
        };
        return this.http.get(urlGhn, options).toPromise();
    }
    /**
    * get các tỉnh trong nước Việt Nam
    * @param token
    * @example this.transportService.getProvinceGhn().then(res =>{})
    * @return
    **/
    getProvinceGhn(token) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/province';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            })
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * get các huyện trong tỉnh của Việt Nam
    * @param token ,province_id
    * @example this.transportService.getDistrictGhn().then(res =>{})
    * @return
    **/
    getDistrictGhn(token, province_id) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/master-data/district';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
            params: {
                "province_id": province_id ? province_id : 0
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * get các xã trong huyện của Việt Nam
    * @param token ,district_id
    * @example this.transportService.getWardGhn().then(res =>{})
    * @return
    **/
    getWardGhn(token, district_id) {
        let url = `https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?${district_id}`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
            params: {
                "district_id": district_id
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * tính phí vận chuyển
    * @param token,data
    * @example this.transportService.calculate_delivery_fee().then(res =>{})
    * @return
    **/
    calculate_delivery_fee(token, data) {
        let url = "https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee";
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
                "ShopId": data.shop_id.toString()
            }),
            params: {
                "service_id": data.service_id,
                "to_ward_code": data.to_ward_code,
                "from_district_id": data.from_district_id,
                "height": data.height,
                "length": data.length,
                "weight": data.weight,
                "width": data.width,
                "insurance_value": data.insurance_value,
                "to_district_id": data.to_district_id
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * chọn service : đi bộ, bay...
    * @param token,data
    * @example this.transportService.calculate_delivery_fee().then(res =>{})
    * @return result { data : [service_id,short_name,service_type_id]}
    **/
    getServiceDelivery(token, data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/available-services';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
            params: {
                "shop_id": data.shop_id,
                "from_district": data.from_district_id,
                "to_district": data.to_district_id
            }
        };
        return this.http.get(url, opptions).toPromise();
    }
    /**
    * tạo đơn giao hàng
    * @param data
    * @example this.transportService.createOrderGhn().then(res =>{})
    * @return
    **/
    createOrderGhn(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Token": data.token,
                "Content-Type": "application/json",
                "ShopId": data.shop_id.toString()
            }),
        };
        let params = {
            "to_name": data.to_name,
            "to_phone": data.to_phone,
            "to_address": data.to_address,
            "to_ward_code": data.to_ward_code,
            "to_district_id": data.to_district_id,
            "weight": data.weight,
            "height": data.height,
            "length": data.length,
            "width": data.width,
            "payment_type_id": data.payment_type_id,
            "required_note": data.required_note,
            "items": data.items,
            "service_id": data.service_id,
            "cod_amount": data.cod_amount,
            "insurance_value": data.insurance_value,
            "note": data.note ? data.note : ''
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    /**
     * Tính (đoán) ngày vận chuyển hàng hoàn thành
    * @param data;
    * @example : this.transportService.calculateTheExpectedDeliveryTime().then(res =>{})
    * @return :
    **/
    calculateTheExpectedDeliveryTime(token, data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/leadtime';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
                "ShopId": data.shop_id.toString()
            }),
        };
        let params = {
            "from_district_id": data.from_district_id,
            "from_ward_code": data.from_ward_code,
            "to_district_id": data.to_district_id,
            "to_ward_code": data.to_ward_code,
            "service_id": data.service_id
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    getInfoOrder(token, order_code) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": token,
            }),
        };
        let params = {
            "order_code": order_code
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    cancelOrder(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/switch-status/cancel';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": data.token,
                "ShopId": data.shop_id.toString(),
            }),
        };
        let params = {
            "order_codes": data.order_code
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    getOtpGhn(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shop/affiliateOTP';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": "5c8844f1-17f6-11eb-afc8-92a278719a56", //gán cứng token
            }),
        };
        let params = {
            "phone": data.phone
        };
        return this.http.post(url, params, opptions).toPromise();
    }
    addStaffToStore(data) {
        let url = 'https://online-gateway.ghn.vn/shiip/public-api/v2/shop/affiliateCreateWithShop';
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
                "Token": "5c8844f1-17f6-11eb-afc8-92a278719a56", //gán cứng token
            }),
        };
        let params = {
            "phone": data.phone,
            "otp": data.otp,
            "shop_id": data.shop_id
        };
        return this.http.post(url, params, opptions).toPromise();
    }
}
GhnService.ɵfac = function GhnService_Factory(t) { return new (t || GhnService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
GhnService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GhnService, factory: GhnService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43089:
/*!*********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/ghtkService/ghtk.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GhtkService": () => (/* binding */ GhtkService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);



class GhtkService {
    constructor(http, vhQuerySales) {
        this.http = http;
        this.vhQuerySales = vhQuerySales;
        this.URL = this.vhQuerySales.getShippingGHTKURL();
    }
    /**
    * kiểm tra token của giao hàng tiết kiệm có hợp lệ hay không và lấy thông tin kho
    * @example : this.transportService.connectTokenGhtk(token).then(res =>{
    * @param : tokenName
    * @return :
    **/
    getWareHouseGhtk(token) {
        // let options:any = {
        //   method: 'GET',
        //   url: 'http://115.78.100.57:8013/miscellaneous/ghtk',                       
        //   params: {
        //     token:token,
        //     url: 'https://services.giaohangtietkiem.vn/services/shipment/list_pick_add'
        //   }            
        // };          
        // return axios.request(options);
        const opptions = {
            params: {
                "token": token,
                "url": 'https://services.giaohangtietkiem.vn/services/shipment/list_pick_add'
            }
        };
        return this.http.get(this.URL, opptions).toPromise();
    }
    /**
    * tính toán phí vận chuyển
    * @example : this.transportService.calculateFeeGhtk(data,transport).then(res =>{
    * @param : data,transport
    * @return :
    **/
    calculateFeeGhtk(data, transport) {
        const opptions = {
            params: {
                "token": data.token,
                "url": "https://services.giaohangtietkiem.vn/services/shipment/fee"
            }
        };
        let params = {
            "pick_address_id": data.shop_id,
            "province": data.province,
            "district": data.district,
            "weight": data.weight * 1000,
            "value": data.insurance_value,
            "transport": transport
        };
        return this.http.post(this.URL, params, opptions).toPromise();
    }
    /**
    * tính toán phí vận chuyển
    * @example : this.transportService.calculateFeeGhtk(data,transport).then(res =>{
    * @param : data,transport
    * @return :
    **/
    createOrderGhtk(token, products, order) {
        const opptions = {
            params: {
                "token": token,
                "url": "https://services.giaohangtietkiem.vn/services/shipment/order/?ver=1.6.3"
            }
        };
        let params = {
            "products": products,
            "order": order
        };
        return this.http.post(this.URL, params, opptions).toPromise();
    }
    getStatusBill(token, order_code) {
        const opptions = {
            params: {
                "token": token,
                "url": `https://services.giaohangtietkiem.vn/services/shipment/v2/${order_code}`
            }
        };
        return this.http.get(this.URL, opptions).toPromise();
    }
    cancelOrder(token, order_code) {
        const opptions = {
            params: {
                "token": token,
                "url": `https://services.giaohangtietkiem.vn/services/shipment/cancel/${order_code}`
            }
        };
        let params = {};
        return this.http.post(this.URL, params, opptions).toPromise();
    }
}
GhtkService.ɵfac = function GhtkService_Factory(t) { return new (t || GhtkService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQuerySales)); };
GhtkService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GhtkService, factory: GhtkService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 96057:
/*!******************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/delivery/services/vnpostPost/vnpost-service.service.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VnpostService": () => (/* binding */ VnpostService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class VnpostService {
    constructor(http) {
        this.http = http;
        this.URL_TEST = 'https://donhang-uat.vnpost.vn/api/api';
        this.URL_PRODUCT = 'https://donhang.vnpost.vn/api/api';
        this.URL_SERVER = 'https://us-central1-servers-1b3fe.cloudfunctions.net/app/shippingclouds/vietnampost';
        this.TenDangNhap = '0909925354';
        this.MatKhau = '123456';
    }
    getTokenVnpost() {
        let url = `${this.URL_PRODUCT}/MobileAuthentication/GetAccessToken`;
        let json = {
            TenDangNhap: this.TenDangNhap,
            MatKhau: this.MatKhau
        };
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': 'none' }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Kiểm tra xem liệu khách hàng đã có mã CRM và đã ủy quyền cho Viethas đẩy đơn hay chưa
     * @param token
     * @param customer_code
     * @returns
     */
    checkCustomerCode(token, customer_code) {
        let url = `${this.URL_PRODUCT}/DoiTac/CheckCustomerCode`;
        let json = { CustomerCode: customer_code };
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Lấy danh sách tỉnh / thành phố theo Vnpost
     * @returns
     */
    getProvinceVnpost() {
        let url = `${this.URL_PRODUCT}/TinhThanh/GetAll`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Lấy danh sách quận/huyện theo Vnpost
     * @returns
     */
    getDistrictVnpost() {
        let url = `${this.URL_PRODUCT}/QuanHuyen/GetAll`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Lấy danh sách phường/xã theo Vnpost
     * @returns
     */
    getWardVnpost() {
        let url = `${this.URL_PRODUCT}/PhuongXa/GetAll`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url }
        };
        return this.http.get(this.URL_SERVER, opptions).toPromise();
    }
    /**
     * Hàm này lấy danh sách tên các phương thức vận chuyển
     */
    getServiceNameVnpost(token, json) {
        let url = `${this.URL_PRODUCT}/DoiTac/TinhCuocTatCaDichVu`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Tạo order vnpost
     */
    createOrderVnpost(token, json) {
        let url = `${this.URL_PRODUCT}/DoiTac/CreateOrder`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    /**
     * Tạo order vnpost
     */
    getDetailOrderById(token, Id) {
        let url = `${this.URL_PRODUCT}/Order/GetOrder/${Id}`;
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, null, opptions).toPromise();
    }
    /**
     * Delelte order vnpost
     */
    deleteOrderVnpostByID(token, Id) {
        let url = `${this.URL_PRODUCT}/DoiTac/CancelOrder`;
        let json = { OrderId: Id };
        const opptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
                "Content-Type": "application/json",
            }),
            params: { 'url': url, 'h-token': token }
        };
        return this.http.post(this.URL_SERVER, json, opptions).toPromise();
    }
    // --------------------------------CÁC HÀM XỬ LÝ DỮ LIỆU-------------------------------------------
    /**
     * Hàm này để custom dữ liệu cho hàm getServiceNameVnpost
     */
    renderFormatService(infoSend, infoRecei, infoProd, infoDeli, CustomerCode) {
        return {
            SenderDistrictId: infoSend.SenderDistrictId, SenderProvinceId: infoSend.SenderProvinceId,
            ReceiverDistrictId: infoRecei.ReceiverDistrictId, ReceiverProvinceId: infoRecei.ReceiverProvinceId,
            Weight: infoProd.WeightEvaluation, Width: infoProd.WidthEvaluation,
            Length: infoProd.LengthEvaluation, Height: infoProd.HeightEvaluation,
            CodAmount: +infoDeli.CodAmountEvaluation, IsReceiverPayFreight: infoDeli.IsReceiverPayFreight,
            OrderAmount: +infoDeli.OrderAmountEvaluation, UseBaoPhat: false, UseHoaDon: false,
            UseNhanTinSmsNguoiNhanTruocPhat: false, UseNhanTinSmsNguoiNhanSauPhat: false,
            CustomerCode: CustomerCode
        };
    }
    /**
     * Hàm này để custom dữ liệu cho hàm createOrderVnpost
     */
    renderFormatCreateOrder(infoSend, infoRecei, infoProd, infoDeli, CustomerCode, bill_code) {
        return {
            SenderDistrictId: infoSend.SenderDistrictId, SenderProvinceId: infoSend.SenderProvinceId,
            SenderTel: infoSend.SenderTel, SenderFullname: infoSend.SenderFullname, SenderAddress: infoSend.SenderAddress,
            SenderWardId: infoSend.SenderWardId, ReceiverTel: infoRecei.ReceiverTel, ReceiverFullname: infoRecei.ReceiverFullname,
            ReceiverAddress: infoRecei.ReceiverAddress, ReceiverWardId: infoRecei.ReceiverWardId,
            ReceiverAddressType: infoDeli.ReceiverAddressType == 0 ? null : infoDeli.ReceiverAddressType, ServiceName: infoDeli.ServiceName, OrderCode: bill_code,
            CustomerNote: infoDeli.CustomerNote, PickupType: 1,
            ReceiverDistrictId: infoRecei.ReceiverDistrictId, ReceiverProvinceId: infoRecei.ReceiverProvinceId,
            WeightEvaluation: infoProd.WeightEvaluation, WidthEvaluation: infoProd.WidthEvaluation,
            LengthEvaluation: infoProd.LengthEvaluation, HeightEvaluation: infoProd.HeightEvaluation,
            CodAmountEvaluation: +infoDeli.CodAmountEvaluation, IsReceiverPayFreight: infoDeli.IsReceiverPayFreight,
            OrderAmountEvaluation: +infoDeli.OrderAmountEvaluation, UseBaoPhat: false, UseHoaDon: false,
            PickupPoscode: "", CustomerCode: CustomerCode,
            UseNhanTinSmsNguoiNhanTruocPhat: false, UseNhanTinSmsNguoiNhanSauPhat: false
        };
    }
    renderFormatPrintOrder(delivery) {
        return {
            created: delivery.CreateTime, customer_fullname: delivery.ReceiverFullname,
            customer_tel: delivery.ReceiverTel, address: delivery.ReceiverFullAddress,
            ship_money: delivery.TotalFreightIncludeVatEvaluation, insurance: 0,
            is_freeship: delivery.IsReceiverPayFreight ? 0 : 1, CodAmountEvaluation: delivery.CodAmountEvaluation
        };
    }
}
VnpostService.ɵfac = function VnpostService_Factory(t) { return new (t || VnpostService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
VnpostService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VnpostService, factory: VnpostService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_sales_components_bill-type_bill-type-3_mange-invoice_bill-type3_module_ts-src-6a2ab5.js.map