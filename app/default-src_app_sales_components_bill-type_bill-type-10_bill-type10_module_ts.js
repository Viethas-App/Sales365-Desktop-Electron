"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_sales_components_bill-type_bill-type-10_bill-type10_module_ts"],{

/***/ 35639:
/*!******************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-10/add/add.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComponent": () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-a4/return-supplier-a4.component */ 14425);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_a5_return_supplier_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-a5/return-supplier-a5.component */ 96215);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_k80_col4_return_supplier_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-k80-col4/return-supplier-k80-col4.component */ 34387);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_k80_col3_return_supplier_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-k80-col3/return-supplier-k80-col3.component */ 14770);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_k57_col3_return_supplier_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-k57-col3/return-supplier-k57-col3.component */ 87804);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _menu_manage_invoices_purchase_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../menu/manage/invoices/purchase/components/staff/staff.component */ 39276);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _menu_manage_invoices_purchase_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../menu/manage/invoices/purchase/components/tax/tax.component */ 28212);
/* harmony import */ var _search_search_product_import_search_product_import_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../search/search-product-import/search-product-import.component */ 75070);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _menu_manage_invoices_purchase_components_select_supplier_select_supplier_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../menu/manage/invoices/purchase/components/select-supplier/select-supplier.component */ 50156);
/* harmony import */ var _search_search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../search/search-supplier/search-supplier.component */ 53202);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _menu_manage_invoices_purchase_components_info_supplier_info_supplier_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../menu/manage/invoices/purchase/components/info-supplier/info-supplier.component */ 52981);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



































const _c0 = ["quantity"];
function AddComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "Please select a product"));
} }
function AddComponent_div_23_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "pre", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_div_23_ng_container_9_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r29.openModalChooseLot(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_div_23_ng_container_9_Template_i_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r31); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); $event.stopPropagation(); return ctx_r32.printLabel(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("                                        ", ctx_r26.getLotNumber(item_r24.lots, item_r24.id_lotproduct), "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 2, "_Print batch label"));
} }
function AddComponent_div_23_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "nz-option", 67);
} if (rf & 2) {
    const i_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzLabel", i_r35.unit)("nzValue", i_r35.ratio);
} }
function AddComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_div_23_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r38); const item_r24 = restoredCtx.$implicit; const i_r25 = restoredCtx.index; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r37.deleteGoods(item_r24, i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, AddComponent_div_23_ng_container_9_Template, 6, 4, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "nz-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddComponent_div_23_Template_nz_select_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r38); const item_r24 = restoredCtx.$implicit; return item_r24.ratio = $event; })("ngModelChange", function AddComponent_div_23_Template_nz_select_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r38); const item_r24 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r40.changeUnit($event, item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, AddComponent_div_23_nz_option_12_Template, 1, 2, "nz-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "input", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddComponent_div_23_Template_input_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r38); const item_r24 = restoredCtx.$implicit; return item_r24.quantity = $event; })("ngModelChange", function AddComponent_div_23_Template_input_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r38); const item_r24 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r42.checkQuantityProduct(item_r24, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_div_23_Template_div_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r38); const item_r24 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r43.openEditUnitPrice(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "del", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r24.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", item_r24.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", item_r24.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("min", 0.1)("max", 9999999999)("ngModel", item_r24.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(item_r24.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r24.price_origin > item_r24.price ? ctx_r1.vhAlgorithm.vhcurrencyunit(item_r24.price_origin) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(item_r24.price * item_r24.quantity));
} }
function AddComponent_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "app-select-supplier", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeAndReceiveSupplier", function AddComponent_ng_container_47_Template_app_select_supplier_closeAndReceiveSupplier_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r44.closeAndReceiveSupplier($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_ng_container_47_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r46.openInfoSupplier(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id_supplier", ctx_r2.invoice.id_supplier);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r2.invoice.id_supplier ? "active" : "deactive");
} }
function AddComponent_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "app-search-supplier", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeAndReceiveSupplier", function AddComponent_ng_container_48_Template_app_search_supplier_closeAndReceiveSupplier_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r47.closeAndReceiveSupplier($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id_supplier", ctx_r3.invoice.id_supplier);
} }
function AddComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("blur", function AddComponent_div_59_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r49.editDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "Discount value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r4.vhAlgorithm.vhcurrencyunit(ctx_r4.invoice.discount));
} }
function AddComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("blur", function AddComponent_div_60_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r51.editFee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r5.vhAlgorithm.vhcurrencyunit(ctx_r5.invoice.fee));
} }
function AddComponent_div_61_nz_select_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "nz-option", 80);
} if (rf & 2) {
    const item_r56 = ctx.$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzValue", item_r56._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r55.vhAlgorithm.vhpercent(item_r56.value / 100));
} }
function AddComponent_div_61_nz_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nz-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddComponent_div_61_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r57.id_tax = $event; })("ngModelChange", function AddComponent_div_61_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r59.changeTax($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AddComponent_div_61_nz_select_5_nz_option_1_Template, 1, 2, "nz-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r53.id_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r53.listTax);
} }
function AddComponent_div_61_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "0.00%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, AddComponent_div_61_nz_select_5_Template, 2, 2, "nz-select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, AddComponent_div_61_span_6_Template, 2, 0, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 4, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r6.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r6.vhAlgorithm.vhcurrencyunit(ctx_r6.taxValue), "");
} }
function AddComponent_img_75_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_img_75_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r60.showModalEditTotalPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function AddComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r8.vhAlgorithm.vhcurrencyunit_symbol(ctx_r8.getTotalATax() - ctx_r8.invoice.payment), " ");
} }
const _c1 = function () { return { minRows: 2, maxRows: 4 }; };
function AddComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "textarea", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddComponent_div_79_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r62.invoice.note = $event; })("blur", function AddComponent_div_79_Template_textarea_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r63); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r64.edit_note(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 3, "Enter note..."));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r9.invoice.note)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c1));
} }
function AddComponent_nz_modal_88_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r65.tempDetail.price);
} }
function AddComponent_nz_modal_88_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_nz_modal_88_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r68.handleCancelEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_nz_modal_88_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r70.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function AddComponent_nz_modal_88_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nz-modal", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_88_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r71.isVisibleEditUnitPrice = $event; })("nzOnCancel", function AddComponent_nz_modal_88_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r72); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r73.handleCancelEditUnit(); })("nzOnOk", function AddComponent_nz_modal_88_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r72); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r74.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddComponent_nz_modal_88_ng_container_2_Template, 8, 7, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, AddComponent_nz_modal_88_ng_template_3_Template, 6, 6, "ng-template", null, 86, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzFooter", _r66)("nzVisible", ctx_r10.isVisibleEditUnitPrice);
} }
function AddComponent_ng_container_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 2, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r11.vhAlgorithm.vhcurrencyunit(ctx_r11.invoice.payment));
} }
function AddComponent_ng_template_92_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_ng_template_92_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r76); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r75.handleCancelEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_ng_template_92_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r76); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r77.handleEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function AddComponent_app_info_supplier_94_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-info-supplier", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeInfoSupplier", function AddComponent_app_info_supplier_94_Template_app_info_supplier_closeInfoSupplier_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r78.closeInfoSupplier($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visibleInfoSupplier", ctx_r14.visibleInfoSupplier)("supplier", ctx_r14.supplier);
} }
function AddComponent_ng_container_97_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 99);
} }
function AddComponent_ng_container_97_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzValue", item_r85._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r85.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](8, 4, item_r85.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](11, 7, item_r85.date_exp, "dd/MM/yyyy"), " ");
} }
function AddComponent_ng_container_97_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "No data"));
} }
function AddComponent_ng_container_97_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "nz-input-group", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "input", 94, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function AddComponent_ng_container_97_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r87); const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r86.searchLot(_r80.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, AddComponent_ng_container_97_ng_template_6_Template, 1, 0, "ng-template", null, 96, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "nz-radio-group", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_97_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r87); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r88.tempDetail.id_lotproduct = $event; })("ngModelChange", function AddComponent_ng_container_97_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r87); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r89.changeLot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, AddComponent_ng_container_97_div_9_Template, 12, 10, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, AddComponent_ng_container_97_div_10_Template, 3, 3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](7);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSuffix", _r81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r15.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r15.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r15.tempDetail.lots.length);
} }
function AddComponent_ng_template_98_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_ng_template_98_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r90.openAddLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_ng_template_98_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r92.handleCancelChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_ng_template_98_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r91); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r93.handleChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 4, "Add"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 6, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r17.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](10, 8, "Ok"));
} }
function AddComponent_nz_modal_100_ng_container_2_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "Please enter lot number"), " ");
} }
function AddComponent_nz_modal_100_ng_container_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, AddComponent_nz_modal_100_ng_container_2_ng_template_12_ng_container_0_Template, 3, 3, "ng-container", 24);
} if (rf & 2) {
    const control_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", control_r100.hasError("required"));
} }
function AddComponent_nz_modal_100_ng_container_2_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "This barcode already exists"));
} }
function AddComponent_nz_modal_100_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "form", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "nz-form-item", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "nz-form-label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "nz-form-control", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "input", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, AddComponent_nz_modal_100_ng_container_2_ng_template_12_Template, 1, 1, "ng-template", null, 112, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "ion-text", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "nz-form-item", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "nz-form-label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "nz-form-control", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "nz-date-picker", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "nz-form-item", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "nz-form-label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "nz-form-control", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "nz-date-picker", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "nz-form-item", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "nz-form-label", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "nz-form-control", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function AddComponent_nz_modal_100_ng_container_2_Template_input_keyup_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r102.checkBarcode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](45, AddComponent_nz_modal_100_ng_container_2_ng_container_45_Template, 4, 3, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](13);
    const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r94.formAddLot);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 21, "Lot number"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24)("nzErrorTip", _r97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](11, 23, "Enter lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](19, 25, "Lot number already exists"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](26, 27, "Date of manufacture"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](34, 29, "Expiration date"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](41, 31, "Barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](44, 33, "Enter barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r94.exist_barcode);
} }
function AddComponent_nz_modal_100_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_nz_modal_100_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r104.show_modal_add_lot = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_nz_modal_100_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r105); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r106.handleAddLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r96.disabledAddLot || ctx_r96.formAddLot.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 5, "Save"));
} }
function AddComponent_nz_modal_100_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nz-modal", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_100_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r108); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r107.show_modal_add_lot = $event; })("nzOnCancel", function AddComponent_nz_modal_100_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r108); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r109.show_modal_add_lot = false; })("nzOnOk", function AddComponent_nz_modal_100_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r108); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r110.handleAddLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AddComponent_nz_modal_100_ng_container_2_Template, 46, 35, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, AddComponent_nz_modal_100_ng_template_3_Template, 6, 7, "ng-template", null, 105, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 3, "Add new lot"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzFooter", _r95)("nzVisible", ctx_r18.show_modal_add_lot);
} }
function AddComponent_app_print_one_col_lot_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-print-one-col-lot", 119);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("start_print", ctx_r19.start_print)("stamp", ctx_r19.data_print);
} }
function AddComponent_app_print_two_col_lot_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-print-two-col-lot", 119);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("start_print", ctx_r20.start_print)("stamp", ctx_r20.data_print);
} }
function AddComponent_app_print_three_col_lot_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-print-three-col-lot", 119);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("start_print", ctx_r21.start_print)("stamp", ctx_r21.data_print);
} }
function AddComponent_app_print_four_col_lot_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-print-four-col-lot", 119);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("start_print", ctx_r22.start_print)("stamp", ctx_r22.data_print);
} }
function AddComponent_app_print_five_col_lot_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-print-five-col-lot", 119);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("start_print", ctx_r23.start_print)("stamp", ctx_r23.data_print);
} }
class AddComponent {
    constructor(router, vhComponent, languageService, vhQuerySales, vhAlgorithm, vhAuth, fncService, cdRef, vhQuery, nzModalService) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.fncService = fncService;
        this.cdRef = cdRef;
        this.vhQuery = vhQuery;
        this.nzModalService = nzModalService;
        this.radioValue = 1;
        this.invoice = {
            bill_type: 10,
            payment_type: 1,
            id_supplier: '',
            id_branch: this.vhQuerySales.getDefaultBranch()._id,
            id_employee: this.vhAuth.getUser()._id,
            id_wallet: 'id_cash',
            date: new Date(),
            total: 0,
            payment: 0,
            tax: 0,
            discount: 0,
            fee: 0,
            note: ''
        };
        this.invoice_detail = [];
        this.subTotal = 0;
        this.taxValue = 0;
        this.listTax = this.vhQuerySales.getlocalTaxs().filter(tax => tax.status);
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.employee = {};
        this.pickerTime = new Date();
        this.listBarcodeLot = [];
        this.checkPrinter = false;
        this.searchProductList = false;
        // -------modal edit unit price-------
        this.isVisibleEditUnitPrice = false;
        this.searchList = [];
        // -------modal edit pay---------
        this.edit_pay = false;
        //--------------visible drawer info customer-----------
        this.visibleInfoSupplier = false;
        this.save_enable = true;
        // ------thoát trang-----
        this.isExit = false;
        this.barcode = '';
        this.barcode_array = [];
        this.show_modal_select_lots = false;
        this.show_modal_add_lot = false;
        this.disabledAddLot = false;
        this.list_search_lot = [];
        this.exist_barcode = false;
        this.product_selected = {};
        this.start_print = false;
        this.auto_active_quantity_input = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').auto_active_quantity_input;
    }
    ngOnInit() {
        this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
        // ------bắt sự kiện nhấn phím nóng-----
        this.eventKeypress();
        let tax = this.listTax.find(item => item.default);
        if (tax) {
            this.id_tax = tax._id;
            this.invoice.tax = (tax['value']);
        }
        let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_purchase');
        this.printer = printer ? printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)] : { discount_hidden: false, note_hidden: false, fee_hidden: false, tax_hidden: false, debt_hidden: false };
        // get dữ liệu in lô
        this.vhQuery.getDocsByFields("barcode_designs", { id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id }, type: { $eq: 5 } })
            .then((response) => {
            this.listBarcodeLot = response.map(item => { item.property = this.vhAlgorithm.sortNumberbyASC(item.property, 'index'); return Object.assign({}, item); });
        });
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
            else if (this.invoice_detail.length > 0 && this.invoice.id_supplier) {
                switch (keycode) {
                    case 112:
                        this.payInvoice(10, false);
                        break;
                    case 113: {
                        if (this.checkPrinter)
                            this.payInvoice(10, true);
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
    /**
     *  hàm xóa sp
     * @param detail
     * @example  this.deleteGoods(bill_detail_selected)
     */
    deleteGoods(detail, index) {
        this.vhComponent.alertConfirm("", "", `${this.languageService.translate("Delete")} ${detail.name}?`, "OK", this.languageService.translate("Cancel"))
            .then(() => {
            if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_purchase)
                this.removeInvoiceDetail(detail.id_product);
            else
                this.invoice_detail.splice(index, 1);
            this.setSubTotal();
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
     * nhận output từ component chọn sp (app-search-product-import)
     * @param data sp được chọn để thêm vào bill
     * @example this.closeSearchProductList(product_selected)
     */
    closeSearchProductList(data) {
        if (data) {
            if (data.manylot && !data.id_lotproduct)
                this.openModalChooseLot(data);
            else {
                if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_purchase)
                    this.addInvoiceDetail(data);
                else
                    this.addInvoiceDetailMutilLine(data);
            }
        }
        else
            this.searchProductList = false;
    }
    /**
     * trở về trang danh sách hóa đơn
     * @example this.goBack()
     */
    goBack() {
        this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Are you sure to cancel the purchase order")}?`, "OK", this.languageService.translate('Cancel'))
            .then(() => { this.isExit = true; this.router.navigate(["/sales/dashboard/manage/invoice/supplier-return"], { state: this.dataRestore }); }, () => { });
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
        this.setSubTotal();
    }
    /**
     * bắt sk thay đổi đơn vị của bill_detail
     * @param ev  ratio được chọn
     * @param item
     * @example  this.changeUnit(24, bill_detail_selected)
     */
    changeUnit(ev, item) {
        let unit = this.vhQuerySales.getUnit_byRatio(item.units, ev);
        if (unit) {
            item.unit = unit.unit;
            item.price = parseFloat(unit.price_import);
            item.ratio = parseFloat(unit.ratio);
            item.price_origin = parseFloat(unit.price_import);
        }
        this.setSubTotal();
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
            this.setSubTotal();
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
     * bắt sk thay đổi nv bán hàng
     * @param event id_employee selected
     */
    closeAndReceiveEmployee(event) {
        if (event) {
            this.invoice.id_employee = (event);
        }
    }
    // ----set supplier-----
    /**
    * bắt sk thay đổi ncc
    * @param event id_supplier selected
    */
    closeAndReceiveSupplier(event) {
        if (event) {
            this.invoice.id_supplier = (event);
        }
    }
    search(value) {
        clearTimeout(this.timer);
        // sau 500ms thì thực hiện
        this.timer = setTimeout(() => {
            let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
            console.log(tempVal);
            if (value.length >= 6) {
                this.vhQuerySales.searchKeyword_NamePhone('suppliers', tempVal).then((res) => {
                    this.searchList = res;
                });
            }
        }, 500);
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
    /**
     * bắt sk thay đổi date của hóa đơn , gán lại giá trị date mới cho đơn
     * @example this.setPickerTime('2023-06-12T08:02:27.697Z')
     */
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
    /**
    * bắt sk thay đổi thuế của bill
    * @param event
    */
    changeTax(event) {
        let tax = this.listTax.find(item => item._id == event);
        this.invoice.tax = (tax.value);
        this.setTaxValue();
    }
    /**
     * bắt sk thay đổi giảm giá của hóa đơn , gán lại giá trị giảm giá mới cho đơn
     * @example this.editDiscount()
     */
    editDiscount() {
        if (this.discount_price.getRawValue() && this.discount_price.getRawValue() >= 0) {
            this.invoice.discount = (parseFloat(this.discount_price.getRawValue()));
        }
        else {
            document.getElementById("discount-price")['value'] = this.invoice.discount;
            this.discount_price = this.vhAlgorithm.vhnumeral('.discount-price');
        }
        this.setTotal();
    }
    /**
    * bắt sk thay đổi phí của hóa đơn , gán lại giá trị phí mới cho đơn
    * @example this.editFee()
    */
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
    /**
    * mở modal chỉnh sửa thanh toán của bill
    * @example this.showModalEditTotalPay()
    */
    showModalEditTotalPay() {
        if (this.invoice.payment_type != 2) {
            this.vhAlgorithm.waitingStack().then(() => {
                this.edit_paytotal = this.vhAlgorithm.vhnumeral(".edit-pay");
            });
            this.edit_pay = true;
        }
    }
    /**
     * bắt sk nhấn nút ok modal chỉnh sửa thanh toán của bill
     * @example this.handleEditPay()
     */
    handleEditPay() {
        if (this.edit_paytotal.getRawValue() >= 0 && this.edit_paytotal.getRawValue() <= this.getTotalATax()) {
            this.invoice.payment = (parseFloat(this.edit_paytotal.getRawValue()));
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
     * trờ về trang danh sách hóa đơn sau khi đã thanh toán xong
     * @example this.handle()
     */
    handle() {
        this.isExit = true;
        this.router.navigate(['/sales/dashboard/manage/invoice/supplier-return'], { state: this.dataRestore });
    }
    /**
     * bắt sk thay đổi note của bill
     * @example this.edit_note()
     */
    edit_note() {
        if (this.note) {
            this.invoice.note = (this.note);
        }
    }
    /**
    * mở modal xem thông tin ncc
    * @example this.openInfoSupplier()
    */
    openInfoSupplier() {
        if (this.invoice.id_supplier) {
            this.supplier = this.vhQuerySales.getlocalSupplier(this.invoice.id_supplier);
            this.visibleInfoSupplier = true;
        }
    }
    /**
     * đóng modal xem thông tin ncc
     * @example this.closeInfoSupplier()
     */
    closeInfoSupplier(event) {
        this.visibleInfoSupplier = false;
    }
    /**
    * xử lý sk nhấn nút thanh toán hoặc lưu tạm
    * @param bill_type
    * @param print biến cờ để check in hay ko
    * @example this.payInvoice(2)
    */
    payInvoice(bill_type = 10, print) {
        if (this.vhAuth.checkMyPermission("purchase_enable_payment")) {
            this.vhComponent.alertConfirm(bill_type == 10 ? `${this.languageService.translate("Save")}?` : (!print ? `${this.languageService.translate("Pay")}?` : `${this.languageService.translate("Pay & Print")}?`), "", "", "OK", this.languageService.translate("Cancel")).then(() => {
                if (this.save_enable) {
                    this.save_enable = false;
                    this.vhComponent.showLoading("", "transparent-loading").then(() => {
                        var arrayProcess = [this.createOrUpdate(bill_type)];
                        // if (bill_type == 2)
                        //   this.updateProduct(this.invoice_detail.filter(item => item.price != item.price_origin), arrayProcess)
                        Promise.all(arrayProcess).then(bill => {
                            this.save_enable = true;
                            this.vhComponent.hideLoading(0).then(() => {
                                this.vhComponent.showToast(2000, `${this.languageService.translate("Purchase invoice")} ${bill[0].bill_code || this.invoice.bill_code} ${this.languageService.translate("has been created successfully")}`, "success-toast");
                                if (print)
                                    this.handlePrint();
                                else
                                    this.handle();
                            });
                        });
                    });
                }
            }, () => { });
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    /**
     * tạo bill lên DB
     * @param bill_type
     * @returns
     */
    createOrUpdate(bill_type) {
        return this.vhQuerySales.createBill_Billdetail(this.getCreateUpdateInvoice(bill_type), this.getCreateUpdateInvoiceDetail());
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_return_supplier');
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
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice_detail: this.invoice_detail, invoice: this.invoice }, false, false, `modal-print-${printer['_id']}`).then((modal) => {
                    modal.onWillDismiss().then(() => this.handle());
                });
        }, (err) => this.vhComponent.alertMessage(this.languageService.translate("Function"), "", this.languageService.translate("Please turn on the printer function"), "OK")
            .then(() => this.handle()));
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_return_supplier_return_supplier_k57_col3_return_supplier_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__.ReturnSupplierK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_return_supplier_return_supplier_k80_col3_return_supplier_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__.ReturnSupplierK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_return_supplier_return_supplier_k80_col4_return_supplier_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.ReturnSupplierK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_return_supplier_return_supplier_a5_return_supplier_a5_component__WEBPACK_IMPORTED_MODULE_1__.ReturnSupplierA5Component;
            case 'print_size_a4': return src_app_sales_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_0__.ReturnSupplierA4Component;
            default: return src_app_sales_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_0__.ReturnSupplierA4Component;
        }
    }
    /**
     * Sự kiện nhận barcode
     */
    getKeyUp(_event) {
        if (this.router.url === "/sales/dashboard/manage/invoice/supplier-return/add-return-supplier") {
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
        this.show_modal_select_lots = true;
        this.tempDetail = data;
        this.list_search_lot = this.tempDetail.lots;
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
        this.tempDetail.lots = this.list_search_lot;
        let lot = this.tempDetail.lots.find(e => e._id == this.tempDetail.id_lotproduct);
        if (lot && this.getNumberOfDay(new Date(lot.date_exp), new Date()) > this.tempDetail.days_import_warning) {
            if (!this.tempDetail.id_product)
                this.closeSearchProductList(this.tempDetail);
            this.show_modal_select_lots = false;
        }
        else {
            this.nzModalService.confirm({
                nzTitle: this.languageService.translate("Lô hàng chưa đủ điều kiện!"),
                nzContent: this.languageService.translate("Số lô hàng hiện tại chưa đáp ứng đủ điều kiện nhập hàng, yêu cầu lô hàng phải có hạn sử dụng còn lại tối thiểu là") + ' ' + this.tempDetail.days_import_warning + ' ' + this.languageService.translate("days") + '.' + this.languageService.translate("Xác nhận tiếp tục?"),
                nzOnCancel: () => { this.tempDetail.id_lotproduct = ''; },
                nzOnOk: () => {
                    this.show_modal_select_lots = false;
                    if (!this.tempDetail.id_product)
                        this.closeSearchProductList(this.tempDetail);
                }
            });
        }
    }
    /**
       * trả về khoảng cách giữa 2 ngày
       * vd : getNumberOfDay(15/02/2022, 10/02/2022) => return 5
       * */
    getNumberOfDay(date1, date2) {
        return (date1.getTime() - date2.getTime()) / (24 * 3600 * 1000) > 0 ? (date1.getTime() - date2.getTime()) / (24 * 3600 * 1000) : 0;
    }
    /**
     * bắt sk nhấn nút hủy modal chọn lô sp
     * @example this.handleCancelChooseLot()
     */
    handleCancelChooseLot() {
        this.show_modal_select_lots = false;
        this.tempDetail.lots = this.list_search_lot;
    }
    /**
     * mở modal thêm lô sản phẩm
     */
    openAddLot() {
        this.disabledAddLot = false;
        this.show_modal_add_lot = true;
        this.formAddLot = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
            date_mfg: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(new Date(new Date().setHours(0, 0, 0)), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])),
            date_exp: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(new Date(new Date().setHours(23, 59, 59)), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])),
            lot_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])),
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(false),
            barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(''),
        });
        this.vhAlgorithm.waitingStack().then(() => {
            document.getElementById('lotNumberError').style.display = 'none';
        });
    }
    /**
     * kiểm tra barcode ở form tạo có trùng hay ko
     * @example this.checkBarcode()
     */
    checkBarcode() {
        let detailproduct = this.vhQuerySales.getlocalDetailProduct_byBarcode(this.formAddLot.value.barcode);
        if (detailproduct) {
            this.exist_barcode = true;
            this.disabledAddLot = true;
        }
        else {
            this.disabledAddLot = false;
            this.exist_barcode = false;
        }
    }
    /**
     * bắt sk nhấn nút ok của modal tạo lô sp, dùng các trường trong form để tạo lô lên DB
     * @example this.handleAddLot()
     */
    handleAddLot() {
        if (!this.fncService.checkExitsLotNumber(this.formAddLot.value.lot_number)) {
            this.show_modal_add_lot = false;
            this.tempDetail.lots = this.tempDetail.lots.concat(this.formAddLot.value);
            if (this.tempDetail.id_subproduct) {
                this.vhQuerySales.addLotProduct(this.tempDetail.id_subproduct, this.formAddLot.value)
                    .then((lot) => {
                    setTimeout(() => {
                        this.tempDetail.lots[this.tempDetail.lots.length - 1]._id = lot;
                        this.tempDetail.lot_number = this.formAddLot.value.lot_number;
                        this.tempDetail.id_lotproduct = lot;
                        this.list_search_lot = this.tempDetail.lots;
                    }, 200);
                }, error => {
                });
            }
            else {
                this.vhQuerySales.addLotProduct(this.tempDetail.id_product, this.formAddLot.value)
                    .then((lot) => {
                    setTimeout(() => {
                        this.tempDetail.lots[this.tempDetail.lots.length - 1]._id = lot;
                        this.tempDetail.lot_number = this.formAddLot.value.lot_number;
                        this.tempDetail.id_lotproduct = lot;
                        this.list_search_lot = this.tempDetail.lots;
                    }, 200);
                }, error => {
                });
            }
        }
        else {
            document.getElementById('lotNumberError').style.display = 'block';
            this.vhComponent.alertMessageDesktop('error', this.languageService.translate("Số lô này đã tồn tại"));
        }
    }
    /**
    * in tem lô
    * @param item product_selected
    * @example  this.printLabel(product_selected)
    */
    printLabel(item) {
        let product = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product);
        let lot_data = product.lots.find(e => e._id == item.id_lotproduct);
        this.product_selected = product;
        let barcode_selected = this.listBarcodeLot.find(e => e._id == product.id_design_barcode_lot);
        if (barcode_selected) {
            this.start_print = true;
            let data = {
                formProduct: Object.assign({ name: this.product_selected.name }, lot_data),
                barcode: barcode_selected,
                col: this.product_selected.number_column_lot,
                number: this.product_selected.number_print_lot
            };
            this.data_print = data;
            setTimeout(() => {
                this.start_print = false;
            }, 2000);
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Bạn chưa chọn mẫu tem cho sản phẩm này!"));
        }
    }
    /**
     * trả về tổng tiền
     * @returns number
     * @example let total = this.getTotalATax()
     */
    getTotalATax() {
        return this.invoice.total + this.taxValue;
    }
    /**
     * xóa 1 bill_detail trong local
     * @param id id_bill_detail selected
     * @param notSetSub
     */
    removeInvoiceDetail(id, notSetSub) {
        let index = this.invoice_detail.findIndex(detail => detail['id_product'] == id);
        if (index != -1) {
            this.invoice_detail.splice(index, 1);
            if (!notSetSub)
                this.setSubTotal();
        }
    }
    /**
     * tính lại cộng tiền của bill khi có sự thay đổi (thêm xóa sửa bill_detail, đổi giá bán, khuyến mãi, phí ,thuế ,...)
     * @example this.setSubTotal()
     */
    setSubTotal() {
        this.subTotal = this.invoice_detail.reduce((prev, next) => prev + next.quantity * next.price, 0);
        this.setTotal();
    }
    /**
     * tính lại tổng tiền của bill để lưu trường total
     * @example this.setTotal();
     */
    setTotal() {
        this.invoice.total = this.subTotal - this.invoice.discount + this.invoice.fee;
        this.setTaxValue();
    }
    /**
     * tính giá trị thuế ra tiền
     * @example this.setTaxValue()
     */
    setTaxValue() {
        this.taxValue = this.invoice.total * (this.invoice.tax / 100);
        this.setPayment();
    }
    /**
     * tính lại thanh toán để lưu trường payment của bill
     * @param value : giá trị thanh toán tự nhập nếu có (trường hợp nợ lại 1 phần)
     * @example this.setPayment()
     */
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
    /**Thêm sản phẩm vô bill detail */
    addInvoiceDetail(value) {
        if (value['id_subproduct']) {
            if (value.lot_number) {
                let index = this.invoice_detail.findIndex(detail => detail['lot_number'] == value['lot_number'] && detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoice_detail[index]['quantity'] < 9999999999)
                        this.invoice_detail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
            else {
                let index = this.invoice_detail.findIndex(detail => detail['id_subproduct'] == value['id_subproduct'] && detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoice_detail[index]['quantity'] < 9999999999)
                        this.invoice_detail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
        }
        else {
            if (value.lot_number) {
                let index = this.invoice_detail.findIndex(detail => detail['lot_number'] == value['lot_number'] && detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoice_detail[index]['quantity'] < 9999999999)
                        this.invoice_detail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
            else {
                let index = this.invoice_detail.findIndex(detail => detail['id_product'] == value['_id'] && detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoice_detail[index]['quantity'] < 9999999999)
                        this.invoice_detail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
        }
    }
    /**
       * xử lý các trường của sp được chọn và thêm vào mảng local
       * @param value
       * @example  this.addBill_Detail(product_selected)
       */
    addBill_Detail(value) {
        this.invoice_detail.unshift({
            name: value.name,
            id_product: value._id,
            quantity: 1,
            unit: value.unit,
            units: value.units,
            ratio: value.ratio ? value.ratio : 1,
            ptype: value.type,
            price: value.price_import,
            price_origin: value.price_import,
            id_subproduct: value.id_subproduct,
            lots: value.lots,
            lot_number: value.lot_number,
            id_lotproduct: value.id_lotproduct,
            days_import_warning: value.days_import_warning
        });
        if (this.auto_active_quantity_input) {
            setTimeout(() => {
                this.quantity.nativeElement.focus();
                this.quantity.nativeElement.select();
            }, 0);
        }
        this.setSubTotal();
    }
    /**Thêm sản phẩm vô bill detail */
    addInvoiceDetailMutilLine(value) {
        this.invoice_detail.unshift({
            name: value.name,
            id_product: value._id,
            quantity: 1,
            unit: value.unit,
            units: value.units,
            ratio: value.ratio ? value.ratio : 1,
            ptype: value.type,
            price: value.price_import,
            price_origin: value.price_import,
            id_subproduct: value.id_subproduct,
            lots: value.lots,
            lot_number: value.lot_number,
            id_lotproduct: value.id_lotproduct,
            days_import_warning: value.days_import_warning
        });
        if (this.auto_active_quantity_input) {
            setTimeout(() => {
                this.quantity.nativeElement.focus();
                this.quantity.nativeElement.select();
            }, 0);
        }
        this.setSubTotal();
    }
    /** Lấy bill dùng để tạo cho database */
    getCreateUpdateInvoice(bill_type = null) {
        if (bill_type)
            this.invoice.bill_type = (bill_type);
        return this.invoice;
    }
    /** Lấy tất cả bill detail để tạo cho database */
    getCreateUpdateInvoiceDetail() {
        return this.invoice_detail.map(item => {
            let detail = {
                id_product: item.id_product,
                price: item.price,
                quantity: item.quantity,
                ptype: item.ptype,
                ratio: item.ratio ? item.ratio : 1,
                price_origin: item.price_origin
            };
            if (item['id_lotproduct'])
                detail['id_lotproduct'] = item.id_lotproduct;
            if (item['id_subproduct'])
                detail['id_subproduct'] = item.id_subproduct;
            return detail;
        });
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_17__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_17__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_17__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_17__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalService)); };
AddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["bill-type10-add"]], viewQuery: function AddComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.quantity = _t.first);
    } }, hostBindings: function AddComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keypress", function AddComponent_keypress_HostBindingHandler($event) { return ctx.getKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"]);
    } }, decls: 107, vars: 86, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], ["class", "no-data", 4, "ngIf"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], [1, "sales-bills-staff-name"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar", 2, "overflow", "visible"], ["nz-col", "", "nzSpan", "24", 2, "margin", "8px 0"], ["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], [2, "width", "100%", "display", "unset"], [4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["class", "sales-bills-content-discount", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-fee", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-tax", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["style", "width: 16px;margin-left:10px", "src", "assets/icon/Iconfeather-edit.svg", 3, "click", 4, "ngIf"], ["class", "sales-bills-content-rest", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], [3, "payment_type", "id_wallet", "id_supplier", "closeAndGetValuePayment"], ["class", "sales-bills-content-note", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "closeSearchProductList"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditPay", ""], [3, "visibleInfoSupplier", "supplier", "closeInfoSupplier", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice2", ""], [3, "ngSwitch"], ["style", "display: none;", 3, "start_print", "stamp", 4, "ngSwitchCase"], [1, "no-data"], [1, "invoiceDetail-item"], ["nz-row", ""], ["nz-col", "", "nzSpan", "1", 1, "center-col", 3, "click"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "8", 1, "center-col"], [1, "max-width-two-line"], ["nz-col", "", "nzSpan", "3", 2, "align-self", "center"], [2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "4", 1, "text-align-self"], ["id", "quantity", "placeholder", "Nh\u1EADp s\u1ED1 l\u01B0\u1EE3ng", "type", "number", 3, "min", "max", "ngModel", "ngModelChange"], ["quantity", ""], ["nz-col", "", "nzSpan", "4", 1, "invoiceDetail-item-quantity", "text-end", 3, "click"], [2, "font-size", "0.7rem"], ["nz-col", "", "nzSpan", "4", 1, "money-sub"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline", "nz-tooltip", "", 3, "nzTooltipTitle", "click"], [3, "nzLabel", "nzValue"], [2, "display", "flex", "justify-content", "space-between"], [3, "id_supplier", "closeAndReceiveSupplier"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "cursor", "pointer", 3, "ngClass", "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "nz-no-border", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "nz-no-border", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax"], ["nzBorderless", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], ["nzBorderless", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "not-found"], ["src", "assets/icon/Iconfeather-edit.svg", 2, "width", "16px", "margin-left", "10px", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-input", "", 1, "nz-hover-border", 3, "ngModel", "placeholder", "nzAutosize", "ngModelChange", "blur"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "edit-pay", 3, "value"], [3, "visibleInfoSupplier", "supplier", "closeInfoSupplier"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], ["nz-row", "", 4, "ngFor", "ngForOf"], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", "padding", "8px 0", 3, "nzValue"], ["nz-col", "", "nzSpan", "8"], [2, "text-align", "center"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], ["modalFooterEditUnitPrice3", ""], ["nz-form", "", 3, "formGroup"], ["nz-col", "", 3, "nzSpan"], [2, "margin", "0 0 4px"], [3, "nzSpan"], [3, "nzSpan", "nzErrorTip"], ["nz-input", "", "formControlName", "lot_number", 3, "placeholder"], ["errorSubsName", ""], ["id", "lotNumberError", 1, "validation-errors"], [1, "error-message"], ["color", "vh-red"], ["formControlName", "date_mfg"], ["formControlName", "date_exp"], ["nz-input", "", "formControlName", "barcode", 3, "placeholder", "keyup"], [2, "display", "none", 3, "start_print", "stamp"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_Template_button_click_17_listener() { return ctx.openSearchProductList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, AddComponent_div_21_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, AddComponent_div_23_Template, 26, 10, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "app-staff", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeAndReceiveEmployee", function AddComponent_Template_app_staff_closeAndReceiveEmployee_31_listener($event) { return ctx.closeAndReceiveEmployee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "nz-date-picker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_36_listener($event) { return ctx.pickerTime = $event; })("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_36_listener($event) { return ctx.setPickerTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "nz-radio-group", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_radio_group_ngModelChange_39_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](47, AddComponent_ng_container_47_Template, 4, 2, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](48, AddComponent_ng_container_48_Template, 2, 1, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, AddComponent_div_59_Template, 5, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, AddComponent_div_60_Template, 5, 4, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](61, AddComponent_div_61_Template, 9, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](75, AddComponent_img_75_Template, 1, 0, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](76, AddComponent_div_76_Template, 6, 4, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "app-tax", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeAndGetValuePayment", function AddComponent_Template_app_tax_closeAndGetValuePayment_78_listener($event) { return ctx.closeAndGetValuePayment($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](79, AddComponent_div_79_Template, 3, 6, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_Template_button_click_81_listener() { return ctx.payInvoice(10, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AddComponent_Template_button_click_84_listener() { return ctx.payInvoice(10, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "app-search-product-import", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeSearchProductList", function AddComponent_Template_app_search_product_import_closeSearchProductList_87_listener($event) { return ctx.closeSearchProductList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](88, AddComponent_nz_modal_88_Template, 5, 5, "nz-modal", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "nz-modal", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_89_listener($event) { return ctx.edit_pay = $event; })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_89_listener() { return ctx.handleCancelEditPay(); })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_89_listener() { return ctx.handleEditPay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](91, AddComponent_ng_container_91_Template, 7, 4, "ng-container", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](92, AddComponent_ng_template_92_Template, 6, 6, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](94, AddComponent_app_info_supplier_94_Template, 1, 2, "app-info-supplier", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "nz-modal", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_95_listener($event) { return ctx.show_modal_select_lots = $event; })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_95_listener() { return ctx.handleCancelChooseLot(); })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_95_listener() { return ctx.handleChooseLot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](97, AddComponent_ng_container_97_Template, 11, 7, "ng-container", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](98, AddComponent_ng_template_98_Template, 11, 10, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](100, AddComponent_nz_modal_100_Template, 5, 5, "nz-modal", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](101, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](102, AddComponent_app_print_one_col_lot_102_Template, 1, 2, "app-print-one-col-lot", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](103, AddComponent_app_print_two_col_lot_103_Template, 1, 2, "app-print-two-col-lot", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](104, AddComponent_app_print_three_col_lot_104_Template, 1, 2, "app-print-three-col-lot", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](105, AddComponent_app_print_four_col_lot_105_Template, 1, 2, "app-print-four-col-lot", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](106, AddComponent_app_print_five_col_lot_106_Template, 1, 2, "app-print-five-col-lot", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](93);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 54, "Back"), " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 56, "Create return supplier"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](14, 58, "Select product"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](20, 60, "Search (F4)"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.invoice_detail.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.invoice_detail);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](30, 62, "Employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id_employee", ctx.invoice.id_employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](35, 64, "Purchase date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.pickerTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](42, 66, "Supplier information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](45, 68, "Search supplier"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.radioValue == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.radioValue == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](52, 70, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](56, 72, "SubTotal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.subTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.printer.discount_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.printer.fee_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.printer.tax_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](65, 74, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.getTotalATax()));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](72, 76, "Pay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.payment), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.invoice.payment_type != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.printer.debt_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("payment_type", ctx.invoice.payment_type)("id_wallet", ctx.invoice.id_wallet)("id_supplier", ctx.invoice.id_supplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.printer.note_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.invoice_detail.length || !ctx.invoice.id_supplier || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](83, 78, "Pay & Print"), " (F2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.invoice_detail.length || !ctx.invoice.id_supplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](86, 80, "Pay"), " (F1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("searchProductList", ctx.searchProductList);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](90, 82, "Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzVisible", ctx.edit_pay)("nzFooter", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.visibleInfoSupplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](96, 84, "Select lot number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzFooter", _r16)("nzVisible", ctx.show_modal_select_lots);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.show_modal_add_lot);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx.product_selected.number_column);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 5);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_22__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_23__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _menu_manage_invoices_purchase_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_26__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_27__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_27__.NzRadioComponent, _menu_manage_invoices_purchase_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__.TaxComponent, _search_search_product_import_search_product_import_component__WEBPACK_IMPORTED_MODULE_10__.SearchProductImportComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchCase, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_29__.NzTooltipDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__.NzOptionComponent, _menu_manage_invoices_purchase_components_select_supplier_select_supplier_component__WEBPACK_IMPORTED_MODULE_11__.SelectSupplierComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _search_search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_12__.SearchSupplierComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__.NzInputDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__.NzAutosizeDirective, _menu_manage_invoices_purchase_components_info_supplier_info_supplier_component__WEBPACK_IMPORTED_MODULE_13__.InfoSupplierComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_30__.NzInputGroupWhitSuffixOrPrefixDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_31__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_31__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_31__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_31__.NzFormControlComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_32__.IonText], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n#quantity[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  padding: 4px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n  width: 97%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-price[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 0.9rem;\n  border-bottom: solid 1px #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 93%;\n  overflow-y: scroll;\n  padding-top: 2%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-bottom: 2px solid #edecee;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 15% 20% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n  align-items: flex-start;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   nz-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .deactive[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   app-select-supplier[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-gray);\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\npre[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\npre[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksYUFBQTtBQUVKO0FBQUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFHSjtBQURBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FBSUo7QUFISTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7QUFLUjtBQUpROzs7O0VBS0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBS1o7QUFIUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBS1o7QUFKWTtFQUNJLFVBQUE7QUFNaEI7QUFMZ0I7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQU9wQjtBQUxnQjtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBT3BCO0FBSlk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTWhCO0FBTGdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBT3BCO0FBTm9CO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFReEI7QUFOb0I7RUFDSSw2QkFBQTtFQUNBLDZCQUFBO0FBUXhCO0FBSFE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBQUtaO0FBSlk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFNaEI7QUFMZ0I7RUFFSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTXBCO0FBTG9COzs7RUFFSSxVQUFBO0VBQ0EsZUFBQTtBQVF4QjtBQUxnQjtFQUNJLGtCQUFBO0FBT3BCO0FBSlk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQU1oQjtBQUpvQjtFQUNJLGlCQUFBO0FBTXhCO0FBSGdCO0VBQ0ksZ0NBQUE7QUFLcEI7QUFIZ0I7RUFDSSxjQUFBO0FBS3BCO0FBSGdCO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFLcEI7QUFIZ0I7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFLcEI7QUFGWTtFQUVJLGFBQUE7RUFDQSw4QkFBQTtBQUdoQjtBQURZO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHaEI7QUFEb0I7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFHeEI7QUFFb0I7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFBeEI7QUFJb0I7RUFDSSxVQUFBO0FBRnhCO0FBTW9CO0VBQ0ksZUFBQTtBQUp4QjtBQU1vQjtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFKeEI7QUFPZ0I7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQUxwQjtBQU1vQjtFQUNJLFdBQUE7QUFKeEI7QUFRWTtFQUNJLHVCQUFBO0VBQ0EsOEJBQUE7QUFOaEI7QUFPZ0I7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFMcEI7QUFPZ0I7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUxwQjtBQVdBO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQVJKO0FBVUE7O0VBRUksaUJBQUE7QUFQSjtBQVNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTko7QUFRQSxrQkFBQTtBQUNBO0VBQ0kscUJBQUE7RUFBdUIsZ0JBQUE7RUFDdkIsd0JBQUE7RUFBMEIsbUNBQUE7QUFIOUI7QUFNQTtFQUNJLFVBQUE7RUFBWSxrQ0FBQTtBQUZoQjtBQUtBO0VBQ0ssV0FBQTtBQUZMO0FBR0k7RUFDSSwwQkFBQTtBQURSO0FBS0E7RUFDSSxXQUFBO0FBRko7QUFJQTtFQUlHLGFBQUE7RUFDQSxtQkFBQTtBQUpIO0FBQUc7RUFDQyxnQkFBQTtBQUVKIiwiZmlsZSI6ImFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jcXVhbnRpdHl7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnNhbGVzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDM1JTtcclxuICAgICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgICAgJi1jYXJ0LFxyXG4gICAgICAgICYtYmVzdC1zZWxsaW5nLFxyXG4gICAgICAgIC5zYWxlcy1iaWxscy1zdGFmZixcclxuICAgICAgICAuc2FsZXMtYmlsbHMtY3VzdG9tZXIsXHJcbiAgICAgICAgLnNhbGVzLWJpbGxzLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNhcnQge1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYlO1xyXG4gICAgICAgICAgICAgICAgLmJ0bi1kYXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTclO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ0bi1wcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzhjN2NjO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtaW52b2ljZURldGFpbCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDkzJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgICAgICAgICAgICAgIC5pbnZvaWNlRGV0YWlsLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAmLXF1YW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZWNlZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1iaWxscyB7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1JSAyMCUgNTUlIDEwJTtcclxuICAgICAgICAgICAgJi1zdGFmZiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgICYtdGltZSxcclxuICAgICAgICAgICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG56LWRhdGUtcGlja2VyLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwcC1zdGFmZiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1jdXN0b21lciB7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIG56LXJhZGlvLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRlYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2M4YzdjYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFwcC1zZWxlY3Qtc3VwcGxpZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1jdXN0b21lciA+IGRpdixcclxuICAgICAgICAgICAgJi1jb250ZW50ID4gZGl2IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXYgPiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1kaXNjb3VudCxcclxuICAgICAgICAgICAgICAgICYtZmVlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXRheCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1wYXkge1xyXG4gICAgICAgICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi1wYXltZW50X3R5cGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwcC10YXgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAub3JkZXItYW5kLXByaW50IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAub3JkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG4uY2VudGVyLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKiBIaWRlIHNjcm9sbGJhciovXHJcbi5oaWRlU2Nyb2xsYmFyIHtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXHJcbn1cclxuXHJcbi5oaWRlU2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4OyAvKiBGb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnJhZGlvLXB1cmNoYXNlICBzcGFue1xyXG4gICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmFudC1yYWRpb3tcclxuICAgICAgICBtYXgtd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5yYWRpby1wdXJjaGFzZSAgLmFudC1yYWRpb3tcclxuICAgIHdpZHRoOiAxNnB4OyBcclxufVxyXG5wcmV7XHJcbiAgIGl7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICB9XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 97758:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-10/bill-type10.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillType10Module": () => (/* binding */ BillType10Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 35639);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 98195);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ 28337);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/search/search.module */ 43818);
/* harmony import */ var src_app_sales_menu_manage_invoices_purchase_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/menu/manage/invoices/purchase/components/components.module */ 1006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);











class BillType10Module {
}
BillType10Module.ɵfac = function BillType10Module_Factory(t) { return new (t || BillType10Module)(); };
BillType10Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BillType10Module });
BillType10Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
            src_app_sales_menu_manage_invoices_purchase_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsBillType2Module,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_4__.SearchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BillType10Module, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
        src_app_sales_menu_manage_invoices_purchase_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsBillType2Module,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
        src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_4__.SearchModule], exports: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent] }); })();


/***/ }),

/***/ 28337:
/*!************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-10/detail/detail.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-a4/return-supplier-a4.component */ 14425);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_a5_return_supplier_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-a5/return-supplier-a5.component */ 96215);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_k80_col4_return_supplier_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-k80-col4/return-supplier-k80-col4.component */ 34387);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_k80_col3_return_supplier_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-k80-col3/return-supplier-k80-col3.component */ 14770);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_k57_col3_return_supplier_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-k57-col3/return-supplier-k57-col3.component */ 87804);
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






















function DetailComponent_nz_layout_4_tr_49_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_tr_49_ng_container_4_Template_i_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); $event.stopPropagation(); return ctx_r16.printLabel(item_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r15.getLotNumber(item_r14.lots, item_r14.id_lotproduct), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, "_Print batch label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r15.getDateLotNumber(item_r14.lots, item_r14.id_lotproduct), " ");
} }
function DetailComponent_nz_layout_4_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DetailComponent_nz_layout_4_tr_49_ng_container_4_Template, 8, 5, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "del", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r14.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r14.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.getUnit(item_r14.units, item_r14.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r14.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r7.vhAlgorithm.vhcurrencyunit(item_r14.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r14.price_origin > item_r14.price ? ctx_r7.vhAlgorithm.vhcurrencyunit(item_r14.price_origin) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.vhAlgorithm.vhcurrencyunit(item_r14.quantity * item_r14.price));
} }
function DetailComponent_nz_layout_4_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 3, ctx_r8.invoiceInfo.partner.name), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 5, ctx_r8.invoiceInfo.partner.phone), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r8.renderAddress(ctx_r8.invoiceInfo.partner));
} }
function DetailComponent_nz_layout_4_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Discount value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r9.vhAlgorithm.vhcurrencyunit(ctx_r9.invoice.discount));
} }
function DetailComponent_nz_layout_4_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r10.vhAlgorithm.vhcurrencyunit(ctx_r10.invoice.fee));
} }
function DetailComponent_nz_layout_4_div_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 3, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r11.vhAlgorithm.vhpercent(ctx_r11.invoice.tax / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r11.vhAlgorithm.vhcurrencyunit(ctx_r11.invoice.total * (ctx_r11.invoice.tax / 100)), "");
} }
function DetailComponent_nz_layout_4_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r12.vhAlgorithm.vhcurrencyunit_symbol(ctx_r12.invoice.total * (1 + ctx_r12.invoice.tax / 100) - ctx_r12.invoice.payment), "");
} }
function DetailComponent_nz_layout_4_div_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r13.invoice.note);
} }
const _c0 = function (a0) { return { y: a0 }; };
function DetailComponent_nz_layout_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-layout", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r20.goToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r22.printInvoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r23.deleteInvoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "nz-table", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, DetailComponent_nz_layout_4_tr_49_Template, 16, 7, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](55, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](61, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](70, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](74, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, DetailComponent_nz_layout_4_div_75_Template, 8, 7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](86, DetailComponent_nz_layout_4_div_86_Template, 6, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](87, DetailComponent_nz_layout_4_div_87_Template, 6, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](88, DetailComponent_nz_layout_4_div_88_Template, 8, 5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](98, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](101, DetailComponent_nz_layout_4_div_101_Template, 6, 4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](105, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](108, DetailComponent_nz_layout_4_div_108_Template, 6, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](24);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 36, "Return supplier invoice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 38, "Edit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 40, "Print"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 42, "Delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 44, "No data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](77, _c0, ctx_r0.tableHeight))("nzData", ctx_r0.invoice_detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 46, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 48, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 50, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](43, 52, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](47, 54, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _r6.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](55, 56, "Invoice code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.invoice.bill_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](61, 58, "Employee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.invoiceInfo.employee.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](67, 60, "Purchase date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](70, 62, ctx_r0.invoice.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](74, 65, "Supplier information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoiceInfo.partner);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](79, 67, "Payment information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](83, 69, "SubTotal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.subTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.printer.discount_hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.printer.fee_hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.printer.tax_hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](92, 71, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](98, 73, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.invoice.payment));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.printer.debt_hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](105, 75, "Payment method"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.setPaymentName(ctx_r0.invoice.payment_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r0.printer.note_hidden);
} }
function DetailComponent_app_print_one_col_lot_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-print-one-col-lot", 50);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("start_print", ctx_r1.start_print)("stamp", ctx_r1.data_print);
} }
function DetailComponent_app_print_two_col_lot_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-print-two-col-lot", 50);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("start_print", ctx_r2.start_print)("stamp", ctx_r2.data_print);
} }
function DetailComponent_app_print_three_col_lot_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-print-three-col-lot", 50);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("start_print", ctx_r3.start_print)("stamp", ctx_r3.data_print);
} }
function DetailComponent_app_print_four_col_lot_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-print-four-col-lot", 50);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("start_print", ctx_r4.start_print)("stamp", ctx_r4.data_print);
} }
function DetailComponent_app_print_five_col_lot_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-print-five-col-lot", 50);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("start_print", ctx_r5.start_print)("stamp", ctx_r5.data_print);
} }
class DetailComponent {
    constructor(router, vhQuerySales, languageService, vhAuth, vhComponent, vhAlgorithm, cdRef, functionService, vhQuery) {
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.languageService = languageService;
        this.vhAuth = vhAuth;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.functionService = functionService;
        this.vhQuery = vhQuery;
        this.url = '';
        this.invoice_detail = [];
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.listBarcodeLot = [];
        this.subTotal = 0;
        this.product_selected = {};
        this.start_print = false;
        this.getDataInvoice(this.router.getCurrentNavigation().extras.state.id);
        let print = this.vhQuerySales.getlocalPrinters().find(item => item.desktop);
        this.printer = print ? print.desktop.purchase[print.desktop.purchase.type] : { discount_hidden: false, note_hidden: false, fee_hidden: false, tax_hidden: false, debt_hidden: false };
    }
    /**
     * gán bill và bill-detail get được vào biến và get các thông tin của nv, khách hàng, phương thức thanh toán
     * @example this.init(bill, bill-deails)
     */
    init(invoice = null, invoiceDetail = null) {
        this.invoice = invoice;
        this.invoice_detail = invoiceDetail;
        if (invoice && invoiceDetail) {
            this.invoiceInfo = {
                employee: this.vhAuth.getlocalEmployee(this.invoice.id_employee),
                partner: this.vhQuerySales.getlocalSupplier(this.invoice.id_supplier),
                paymentName: this.setPaymentName(this.invoice.payment_type)
            };
        }
        else
            this.invoiceInfo = { employee: {}, partner: {}, paymentName: '' };
        this.setSubTotal();
    }
    /**
     * tính cộng tiền hóa đơn
     * @example this.setSubTotal()
     */
    setSubTotal() {
        let subTotal = 0;
        for (let i of this.invoice_detail) {
            subTotal += (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
    }
    /**
     * get dữ liệu bill từ DB
     * @param id : nhận từ state truyền qua
     * @example this.getDataInvoice('DHIWHNXDIWODUHIWDHOWID')
     */
    getDataInvoice(id) {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            Promise.all([
                this.vhQuerySales.getBill(id),
                this.vhQuerySales.getBill_details_byId_bill(id),
                this.vhQuery.getDocsByFields("barcode_designs", { id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id }, type: { $eq: 5 } })
            ]).then(([invoice, invoiceDetail, list_barcode]) => {
                this.listBarcodeLot = list_barcode.map(item => { item.property = this.vhAlgorithm.sortNumberbyASC(item.property, 'index'); return Object.assign({}, item); });
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
    /**
     * trả về tên unit của sản phẩm theo ratio truyền vào
     * @param units
     * @param ratio
     * @returns string
     * @example let unit_name = this.getUnit([object], 1)
     */
    getUnit(units, ratio) {
        return this.vhQuerySales.getUnit_byRatio(units, ratio).unit;
    }
    /**
     * trả về chuỗi thông tin lô theo id lô truyền vào
     * @param lots
     * @param _id
     * @returns string
     * @example let lot = this.getLotNumber([], 'DNIWUHNDKLJWHDIWUOH')
     */
    getLotNumber(lots, _id) {
        let lot = lots.find(item => item._id == _id);
        return lot.lot_number;
    }
    /**
     * trả về chuỗi ngày sx - ngày hết hạn của lôtheo id lô truyền vào
     * @param lots
     * @param _id
     * @returns string
     * @example let date_lot = this.getDateLotNumber([], 'DNIWUHNDKLJWHDIWUOH')
     */
    getDateLotNumber(lots, _id) {
        let lot = lots.find(item => item._id == _id);
        return this.functionService.formatDate(lot.date_mfg) + ' - ' + this.functionService.formatDate(lot.date_exp);
    }
    /**
     * xóa hóa đơn lên DB
     * @example this.deleteInvoice()
     */
    deleteInvoice() {
        this.vhQuerySales.getValidityDate(this.invoice.date).then((validitydate) => {
            if (validitydate == null) {
                if (this.vhAuth.checkMyPermission("purchase_enable_cancel_bill")) {
                    this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", `${this.languageService.translate("Are you sure to cancel the purchase invoice")}?`, "OK", this.languageService.translate("Cancel"))
                        .then(() => {
                        this.vhComponent.showLoading("", "transparent-loading").then(() => {
                            this.vhQuerySales.deleteBill_Billdetail(this.invoice._id).then(() => {
                                this.vhComponent.hideLoading(0).then(() => {
                                    this.vhComponent.showToast(2000, `${this.languageService.translate("Purchase invoice")} ${this.invoice.bill_code} ${this.languageService.translate("has been cancelled successfully")}`, "success-toast");
                                    this.goBack();
                                });
                            });
                        });
                    }, () => { });
                }
                else
                    this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
            }
            else {
                this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the date")} ${this.functionService.formatDate(validitydate)}`, 5000);
            }
        });
    }
    /**
     * trả về tên phương thức thanh toán
     * @param type
     * @returns string
     * @example this.setPaymentName(1)
     */
    setPaymentName(type) {
        switch (type) {
            case 1: return this.languageService.translate("Cash");
            case 2: return this.languageService.translate("Debit");
            case 3: return this.vhQuerySales.getlocalWallet(this.invoice.id_wallet).name;
        }
    }
    /**
     * trả về chuỗi thông tin địa chỉ của supplier
     * @param partner
     * @returns string
     * @example let addr = this.renderAddress(supplier_info)
     */
    renderAddress(partner) {
        return (partner.address ? partner.address : '') +
            (partner.district ? ', ' + partner.district : '') +
            (partner.province ? ', ' + partner.province : '') +
            (partner.country ? ', ' + partner.country : '');
    }
    goToCart() {
        this.vhQuerySales.getValidityDate(this.invoice.date).then((validitydate) => {
            if (validitydate == null) {
                this.router.navigate([this.url + '/edit-return-supplier'], { state: { invoiceDetail: this.invoice_detail, invoice: this.invoice, dataRestore: this.dataRestore } });
            }
            else {
                this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the date")} ${this.functionService.formatDate(validitydate)}`, 5000);
            }
        });
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_return_supplier');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    /**
     * kiểm tra thông tin dữ liệu trang in và mở component in
     * @example this.printInvoice()
     */
    printInvoice() {
        this.checkPrint().then((printer) => {
            if (printer)
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice_detail: this.invoice_detail, invoice: this.invoice }, false, false, `modal-print-${printer['_id']}`).then((modal) => {
                    modal.onWillDismiss().then(() => { });
                });
        }, (err) => this.vhComponent.alertMessage(this.languageService.translate("Function"), "", this.languageService.translate("Please turn on the printer function"), "OK")
            .then(() => { }));
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_return_supplier_return_supplier_k57_col3_return_supplier_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__.ReturnSupplierK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_return_supplier_return_supplier_k80_col3_return_supplier_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__.ReturnSupplierK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_return_supplier_return_supplier_k80_col4_return_supplier_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.ReturnSupplierK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_return_supplier_return_supplier_a5_return_supplier_a5_component__WEBPACK_IMPORTED_MODULE_1__.ReturnSupplierA5Component;
            case 'print_size_a4': return src_app_sales_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_0__.ReturnSupplierA4Component;
            default: return src_app_sales_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_0__.ReturnSupplierA4Component;
        }
    }
    goBack() {
        this.router.navigate([this.url], { state: this.dataRestore });
    }
    ngAfterViewChecked() {
        if (document.querySelector("#purchase-invoice-detail-today") && document.querySelector(".ant-table-thead") && document.querySelector(".sales-invoice-detail-today-header") && document.querySelector(".ant-table-pagination")) {
            this.tableHeight = document.querySelector("#purchase-invoice-detail-today").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".sales-invoice-detail-today-header").clientHeight - document.querySelector(".ant-table-pagination").clientHeight - 40 + "px";
        }
        this.cdRef.detectChanges();
    }
    /**
     * in tem lô của sản phẩm được chọn
     * @param item
     * @example this.printLabel(product_selected)
     */
    printLabel(item) {
        let product = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product);
        let lot_data = product.lots.find(e => e._id == item.id_lotproduct);
        this.product_selected = product;
        let barcode_selected = this.listBarcodeLot.find(e => e._id == product.id_design_barcode_lot);
        if (barcode_selected) {
            this.start_print = true;
            this.data_print = {
                formProduct: Object.assign({ name: this.product_selected.name }, lot_data),
                barcode: barcode_selected,
                col: this.product_selected.number_column,
                number: this.product_selected.number_print
            };
            setTimeout(() => {
                this.start_print = false;
            }, 2000);
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Bạn chưa chọn mẫu tem cho sản phẩm này!"));
        }
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuery)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["bill-type10-detail"]], inputs: { url: "url" }, decls: 11, vars: 10, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "purchase-invoice-detail-today", 4, "ngIf"], [3, "ngSwitch"], ["style", "display: none;", 3, "start_print", "stamp", 4, "ngSwitchCase"], ["id", "purchase-invoice-detail-today"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", "sales-invoice-detail-today-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["nz-col", "", "nzSpan", "12", 1, "center-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline"], ["src", "assets/icon/management/printer.svg", 2, "margin-right", "5px"], ["name", "trash-outline", 2, "margin-right", "5px"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], [1, "invoiceDetail-item"], ["nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzNoResult"], ["rowSelectionTable", ""], ["nzWidth", "30%"], ["nzWidth", "15%", "nzAlign", "center"], ["nzWidth", "20%", "nzAlign", "right"], ["style", "cursor: pointer;", 4, "ngFor", "ngForOf"], [1, "sales-bills", "not-continue-sell"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], ["class", "sales-bills-content-discount", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-fee", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-tax", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["class", "sales-bills-content-rest", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], ["class", "sales-bills-content-note", "nz-col", "", "nzSpan", "24", 4, "ngIf"], [2, "cursor", "pointer"], [4, "ngIf"], ["nzAlign", "center"], ["nzAlign", "right"], [2, "font-size", "0.7rem"], [2, "font-size", "0.85rem"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline", "nz-tooltip", "", 2, "font-size", "1rem", 3, "nzTooltipTitle", "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], [2, "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], [2, "display", "none", 3, "start_print", "stamp"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DetailComponent_nz_layout_4_Template, 109, 79, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](5, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, DetailComponent_app_print_one_col_lot_6_Template, 1, 2, "app-print-one-col-lot", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, DetailComponent_app_print_two_col_lot_7_Template, 1, 2, "app-print-two-col-lot", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, DetailComponent_app_print_three_col_lot_8_Template, 1, 2, "app-print-three-col-lot", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, DetailComponent_app_print_four_col_lot_9_Template, 1, 2, "app-print-four-col-lot", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, DetailComponent_app_print_five_col_lot_10_Template, 1, 2, "app-print-five-col-lot", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 8, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.invoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitch", ctx.product_selected.number_column);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngSwitchCase", 5);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgSwitchCase, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_20__.NzTooltipDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 66% 33%;\n  grid-template-rows: 65% 35%;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 1/2;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 92%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills.not-continue-sell[_ngcontent-%COMP%] {\n  grid-template-rows: 20% 15% 63%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills.continue-sell[_ngcontent-%COMP%] {\n  grid-template-rows: 20% 15% 53% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 2/3;\n  display: grid;\n  grid-template-columns: 100%;\n  align-content: space-between;\n  line-height: 1.8;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 80%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .payment-print[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  color: #fff;\n  border: none;\n  font-size: 0.9rem;\n  width: 100%;\n  height: 50px;\n}\npre[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBR1I7QUFGUTs7OztFQUlJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUlaO0FBRlE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlaO0FBSFk7RUFDSSxVQUFBO0FBS2hCO0FBSmdCO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQU1wQjtBQUpnQjtFQUNJLGtCQUFBO0FBTXBCO0FBSFk7RUFDSSxXQUFBO0FBS2hCO0FBSmdCO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBTXBCO0FBTG9CO0VBQ0ksZUFBQTtBQU94QjtBQUxvQjtFQUNJLDZCQUFBO0VBQ0EsNkJBQUE7QUFPeEI7QUFGUTtFQUNJLCtCQUFBO0FBSVo7QUFGUTtFQUNJLG1DQUFBO0FBSVo7QUFGUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFJWjtBQUhZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBS2hCO0FBSmdCO0VBQ0ksa0JBQUE7QUFNcEI7QUFIWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFLaEI7QUFIWTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFLaEI7QUFKZ0I7RUFDSSxTQUFBO0FBTXBCO0FBSFk7RUFFSSxhQUFBO0VBQ0EsOEJBQUE7QUFJaEI7QUFGWTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUloQjtBQUhnQjtFQUNJLGlCQUFBO0FBS3BCO0FBRm9CO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0FBSXhCO0FBQW9CO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFFeEI7QUFFWTtFQUNJLHVCQUFBO0FBQWhCO0FBQ2dCO0VBQ0ksaUVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDcEI7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBRko7QUFJQTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFQSxrQkFBQTtBQUNBO0VBQ0kscUJBQUE7RUFBdUIsZ0JBQUE7RUFDdkIsd0JBQUE7RUFBMEIsbUNBQUE7QUFHOUI7QUFBQTtFQUNJLFVBQUE7RUFBWSxrQ0FBQTtBQUloQiIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnNhbGVzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY2JSAzMyU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAmLWNhcnQsXHJcbiAgICAgICAgLnNhbGVzLWJpbGxzLXN0YWZmLFxyXG4gICAgICAgIC5zYWxlcy1iaWxscy1jdXN0b21lcixcclxuICAgICAgICAuc2FsZXMtYmlsbHMtY29udGVudCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY2FydCB7XHJcbiAgICAgICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNiU7XHJcbiAgICAgICAgICAgICAgICAuYnRuLWRhdGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTIlO1xyXG4gICAgICAgICAgICAgICAgLmludm9pY2VEZXRhaWwtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICYtcXVhbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJpbGxzLm5vdC1jb250aW51ZS1zZWxsIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgMTUlIDYzJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1iaWxscy5jb250aW51ZS1zZWxsIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgMTUlIDUzJSAxMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYmlsbHMge1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgICAgICYtc3RhZmYge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1zdGFmZiA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1jdXN0b21lciB7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWN1c3RvbWVyID4gZGl2LFxyXG4gICAgICAgICAgICAmLWNvbnRlbnQgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXBheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLW5vdGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAucGF5bWVudC1wcmludCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5wcmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4uY2VudGVyLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKiBIaWRlIHNjcm9sbGJhciovXHJcbi5oaWRlU2Nyb2xsYmFyIHtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXHJcbn1cclxuXHJcbi5oaWRlU2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4OyAvKiBGb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 98195:
/*!********************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-10/edit/edit.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-a4/return-supplier-a4.component */ 14425);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_a5_return_supplier_a5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-a5/return-supplier-a5.component */ 96215);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_k80_col4_return_supplier_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-k80-col4/return-supplier-k80-col4.component */ 34387);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_k80_col3_return_supplier_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-k80-col3/return-supplier-k80-col3.component */ 14770);
/* harmony import */ var src_app_sales_components_print_return_supplier_return_supplier_k57_col3_return_supplier_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/return-supplier/return-supplier-k57-col3/return-supplier-k57-col3.component */ 87804);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _menu_manage_invoices_purchase_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../menu/manage/invoices/purchase/components/staff/staff.component */ 39276);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _menu_manage_invoices_purchase_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../menu/manage/invoices/purchase/components/tax/tax.component */ 28212);
/* harmony import */ var _search_search_product_import_search_product_import_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../search/search-product-import/search-product-import.component */ 75070);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _menu_manage_invoices_purchase_components_select_supplier_select_supplier_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../menu/manage/invoices/purchase/components/select-supplier/select-supplier.component */ 50156);
/* harmony import */ var _search_search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../search/search-supplier/search-supplier.component */ 53202);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _menu_manage_invoices_purchase_components_info_supplier_info_supplier_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../menu/manage/invoices/purchase/components/info-supplier/info-supplier.component */ 52981);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




































function EditComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "Please select a product"));
} }
function EditComponent_div_23_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "pre", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_div_23_ng_container_9_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r28.openModalChooseLot(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_div_23_ng_container_9_Template_i_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r30); const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); $event.stopPropagation(); return ctx_r31.printLabel(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "\n                                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("                                        ", ctx_r26.getLotNumber(item_r24.lots, item_r24.id_lotproduct), "\n                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 2, "_Print batch label"));
} }
function EditComponent_div_23_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "nz-option", 66);
} if (rf & 2) {
    const i_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzLabel", i_r34.unit)("nzValue", i_r34.ratio);
} }
function EditComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_div_23_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const item_r24 = restoredCtx.$implicit; const i_r25 = restoredCtx.index; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r36.deleteGoods(item_r24, i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, EditComponent_div_23_ng_container_9_Template, 6, 4, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "nz-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function EditComponent_div_23_Template_nz_select_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const item_r24 = restoredCtx.$implicit; return item_r24.ratio = $event; })("ngModelChange", function EditComponent_div_23_Template_nz_select_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const item_r24 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r39.changeUnit($event, item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, EditComponent_div_23_nz_option_12_Template, 1, 2, "nz-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "nz-input-number", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function EditComponent_div_23_Template_nz_input_number_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const item_r24 = restoredCtx.$implicit; return item_r24.quantity = $event; })("ngModelChange", function EditComponent_div_23_Template_nz_input_number_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const item_r24 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r41.checkQuantityProduct(item_r24, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_div_23_Template_div_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37); const item_r24 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r42.openEditUnitPrice(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "del", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", item_r24.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", item_r24.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", item_r24.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", item_r24.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(item_r24.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r24.price_origin > item_r24.price ? ctx_r1.vhAlgorithm.vhcurrencyunit(item_r24.price_origin) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(item_r24.price * item_r24.quantity));
} }
function EditComponent_ng_container_47_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "app-select-supplier", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeAndReceiveSupplier", function EditComponent_ng_container_47_Template_app_select_supplier_closeAndReceiveSupplier_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r43.closeAndReceiveSupplier($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_ng_container_47_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r45.openInfoSupplier(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id_supplier", ctx_r2.invoice.id_supplier);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ctx_r2.invoice.id_supplier ? "active" : "deactive");
} }
function EditComponent_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "app-search-supplier", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeAndReceiveSupplier", function EditComponent_ng_container_48_Template_app_search_supplier_closeAndReceiveSupplier_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r46.closeAndReceiveSupplier($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id_supplier", ctx_r3.invoice.id_supplier);
} }
function EditComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("blur", function EditComponent_div_59_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r48.editDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "Discount value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r4.vhAlgorithm.vhcurrencyunit(ctx_r4.invoice.discount));
} }
function EditComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("blur", function EditComponent_div_60_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r50.editFee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r5.vhAlgorithm.vhcurrencyunit(ctx_r5.invoice.fee));
} }
function EditComponent_div_61_nz_select_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "nz-option", 79);
} if (rf & 2) {
    const item_r55 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzValue", item_r55._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r54.vhAlgorithm.vhpercent(item_r55.value / 100));
} }
function EditComponent_div_61_nz_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nz-select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function EditComponent_div_61_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r56.id_tax = $event; })("ngModelChange", function EditComponent_div_61_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r57); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r58.changeTax($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, EditComponent_div_61_nz_select_5_nz_option_1_Template, 1, 2, "nz-option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r52.id_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r52.listTax);
} }
function EditComponent_div_61_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "0.00%");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function EditComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, EditComponent_div_61_nz_select_5_Template, 2, 2, "nz-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, EditComponent_div_61_span_6_Template, 2, 0, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 4, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r6.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r6.vhAlgorithm.vhcurrencyunit(ctx_r6.taxValue), "");
} }
function EditComponent_img_75_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_img_75_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r59.showModalEditTotalPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function EditComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r8.vhAlgorithm.vhcurrencyunit_symbol(ctx_r8.getTotalATax() - ctx_r8.invoice.payment), " ");
} }
const _c0 = function () { return { minRows: 2, maxRows: 4 }; };
function EditComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "textarea", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function EditComponent_div_79_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r61.invoice.note = $event; })("blur", function EditComponent_div_79_Template_textarea_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r63.edit_note(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 3, "Enter note..."));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r9.invoice.note)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](5, _c0));
} }
function EditComponent_nz_modal_88_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r64.tempDetail.price);
} }
function EditComponent_nz_modal_88_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_nz_modal_88_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r68); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r67.handleCancelEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_nz_modal_88_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r68); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r69.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function EditComponent_nz_modal_88_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nz-modal", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzVisibleChange", function EditComponent_nz_modal_88_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r70.isVisibleEditUnitPrice = $event; })("nzOnCancel", function EditComponent_nz_modal_88_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r71); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r72.handleCancelEditUnit(); })("nzOnOk", function EditComponent_nz_modal_88_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r71); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r73.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, EditComponent_nz_modal_88_ng_container_2_Template, 8, 7, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, EditComponent_nz_modal_88_ng_template_3_Template, 6, 6, "ng-template", null, 85, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzFooter", _r65)("nzVisible", ctx_r10.isVisibleEditUnitPrice);
} }
function EditComponent_ng_container_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 2, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r11.vhAlgorithm.vhcurrencyunit(ctx_r11.invoice.payment));
} }
function EditComponent_ng_template_92_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_ng_template_92_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r74.handleCancelEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_ng_template_92_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r76.handleEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function EditComponent_app_info_supplier_94_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "app-info-supplier", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeInfoSupplier", function EditComponent_app_info_supplier_94_Template_app_info_supplier_closeInfoSupplier_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r77.closeInfoSupplier($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visibleInfoSupplier", ctx_r14.visibleInfoSupplier)("supplier", ctx_r14.supplier);
} }
function EditComponent_ng_container_97_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "i", 98);
} }
function EditComponent_ng_container_97_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "label", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzValue", item_r84._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", item_r84.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](8, 4, item_r84.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](11, 7, item_r84.date_exp, "dd/MM/yyyy"), " ");
} }
function EditComponent_ng_container_97_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "No data"));
} }
function EditComponent_ng_container_97_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "nz-input-group", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "input", 93, 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function EditComponent_ng_container_97_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r86); const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r85.searchLot(_r79.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, EditComponent_ng_container_97_ng_template_6_Template, 1, 0, "ng-template", null, 95, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "nz-radio-group", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_97_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r87.tempDetail.id_lotproduct = $event; })("ngModelChange", function EditComponent_ng_container_97_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r86); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r88.changeLot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, EditComponent_ng_container_97_div_9_Template, 12, 10, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, EditComponent_ng_container_97_div_10_Template, 3, 3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](7);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSuffix", _r80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r15.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r15.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r15.tempDetail.lots.length);
} }
function EditComponent_ng_template_98_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_ng_template_98_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r90); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r89.openAddLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_ng_template_98_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r90); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r91.handleCancelChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_ng_template_98_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r90); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r92.handleChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 4, "Add"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 6, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx_r17.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](10, 8, "Ok"));
} }
function EditComponent_nz_modal_100_ng_container_2_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "Please enter lot number"), " ");
} }
function EditComponent_nz_modal_100_ng_container_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, EditComponent_nz_modal_100_ng_container_2_ng_template_12_ng_container_0_Template, 3, 3, "ng-container", 24);
} if (rf & 2) {
    const control_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", control_r99.hasError("required"));
} }
function EditComponent_nz_modal_100_ng_container_2_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 1, "This barcode already exists"));
} }
function EditComponent_nz_modal_100_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "form", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "nz-form-item", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "nz-form-label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "nz-form-control", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](10, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, EditComponent_nz_modal_100_ng_container_2_ng_template_12_Template, 1, 1, "ng-template", null, 111, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "ion-text", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](21, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "nz-form-item", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](23, "nz-form-label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "nz-form-control", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "nz-date-picker", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "nz-form-item", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "nz-form-label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "nz-form-control", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "nz-date-picker", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "nz-form-item", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "nz-form-label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "nz-form-control", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keyup", function EditComponent_nz_modal_100_ng_container_2_Template_input_keyup_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r102); const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r101.checkBarcode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](45, EditComponent_nz_modal_100_ng_container_2_ng_container_45_Template, 4, 3, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](13);
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx_r93.formAddLot);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 21, "Lot number"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24)("nzErrorTip", _r96);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](11, 23, "Enter lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](19, 25, "Lot number already exists"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](26, 27, "Date of manufacture"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](34, 29, "Expiration date"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](41, 31, "Barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzSpan", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](44, 33, "Enter barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r93.exist_barcode);
} }
function EditComponent_nz_modal_100_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_nz_modal_100_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r103.show_modal_add_lot = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_nz_modal_100_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r104); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r105.handleAddLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", ctx_r95.disabledAddLot || ctx_r95.formAddLot.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 5, "Save"));
} }
function EditComponent_nz_modal_100_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "nz-modal", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzVisibleChange", function EditComponent_nz_modal_100_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r106.show_modal_add_lot = $event; })("nzOnCancel", function EditComponent_nz_modal_100_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r107); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r108.show_modal_add_lot = false; })("nzOnOk", function EditComponent_nz_modal_100_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r107); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r109.handleAddLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, EditComponent_nz_modal_100_ng_container_2_Template, 46, 35, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, EditComponent_nz_modal_100_ng_template_3_Template, 6, 7, "ng-template", null, 104, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](1, 3, "Add new lot"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzFooter", _r94)("nzVisible", ctx_r18.show_modal_add_lot);
} }
function EditComponent_app_print_one_col_lot_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-print-one-col-lot", 118);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("start_print", ctx_r19.start_print)("stamp", ctx_r19.data_print);
} }
function EditComponent_app_print_two_col_lot_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-print-two-col-lot", 118);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("start_print", ctx_r20.start_print)("stamp", ctx_r20.data_print);
} }
function EditComponent_app_print_three_col_lot_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-print-three-col-lot", 118);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("start_print", ctx_r21.start_print)("stamp", ctx_r21.data_print);
} }
function EditComponent_app_print_four_col_lot_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-print-four-col-lot", 118);
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("start_print", ctx_r22.start_print)("stamp", ctx_r22.data_print);
} }
function EditComponent_app_print_five_col_lot_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "app-print-five-col-lot", 118);
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("start_print", ctx_r23.start_print)("stamp", ctx_r23.data_print);
} }
class EditComponent {
    constructor(router, vhComponent, languageService, vhQuerySales, vhAlgorithm, vhAuth, fncService, cdRef, vhQuery, nzModalService) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.fncService = fncService;
        this.cdRef = cdRef;
        this.vhQuery = vhQuery;
        this.nzModalService = nzModalService;
        this.radioValue = 1;
        this.url = '';
        this.invoice = this.router.getCurrentNavigation().extras.state.invoice;
        this.invoice_detail = this.router.getCurrentNavigation().extras.state.invoiceDetail;
        this.subTotal = 0;
        this.taxValue = 0;
        this.listTax = this.vhQuerySales.getlocalTaxs().filter(tax => tax.status);
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.employee = {};
        this.pickerTime = new Date();
        this.listBarcodeLot = [];
        this.checkPrinter = false;
        this.searchProductList = false;
        // -------modal edit unit price-------
        this.isVisibleEditUnitPrice = false;
        this.searchList = [];
        // -------modal edit pay---------
        this.edit_pay = false;
        //--------------visible drawer info customer-----------
        this.visibleInfoSupplier = false;
        // ------thoát trang-----
        this.isExit = false;
        this.barcode = '';
        this.barcode_array = [];
        this.show_modal_select_lots = false;
        this.show_modal_add_lot = false;
        this.disabledAddLot = false;
        this.list_search_lot = [];
        this.exist_barcode = false;
        this.product_selected = {};
        this.start_print = false;
    }
    ngOnInit() {
        this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
        this.pickerTime = new Date(this.invoice.date);
        // ------bắt sự kiện nhấn phím nóng-----
        this.eventKeypress();
        let tax = this.listTax.find(item => item.value == this.invoice.tax);
        if (tax) {
            this.id_tax = tax._id;
        }
        let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_purchase');
        this.printer = printer ? printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)] : { discount_hidden: false, note_hidden: false, fee_hidden: false, tax_hidden: false, debt_hidden: false };
        // get dữ liệu in lô
        this.vhQuery.getDocsByFields("barcode_designs", { id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id }, type: { $eq: 5 } })
            .then((response) => {
            this.listBarcodeLot = response.map(item => { item.property = this.vhAlgorithm.sortNumberbyASC(item.property, 'index'); return Object.assign({}, item); });
        });
        //tính tổng tiền
        let subTotal = 0;
        for (let i of this.invoice_detail) {
            subTotal += (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
        this.taxValue = this.invoice.total * (this.invoice.tax / 100);
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
            else if (this.invoice_detail.length > 0 && this.invoice.id_supplier) {
                switch (keycode) {
                    case 112:
                        this.payInvoice(10, false);
                        break;
                    case 113: {
                        if (this.checkPrinter)
                            this.payInvoice(10, true);
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
            if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_purchase)
                this.removeInvoiceDetail(detail.id_product);
            else
                this.invoice_detail.splice(index, 1);
            this.setSubTotal();
        }, () => { });
    }
    openSearchProductList() {
        this.searchProductList = true;
    }
    closeSearchProductList(data) {
        if (data) {
            if (data.manylot && !data.id_lotproduct)
                this.openModalChooseLot(data);
            else {
                if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_purchase)
                    this.addInvoiceDetail(data);
                else
                    this.addInvoiceDetailMutilLine(data);
            }
        }
        else
            this.searchProductList = false;
    }
    goBack() {
        this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Are you sure to cancel the purchase order")}?`, "OK", this.languageService.translate('Cancel'))
            .then(() => { this.isExit = true; this.router.navigate([this.url], { state: this.dataRestore }); }, () => { });
    }
    checkQuantityProduct(product, event) {
        if (!event)
            product.quantity = 1;
        this.setSubTotal();
    }
    changeUnit(ev, item) {
        let unit = this.vhQuerySales.getUnit_byRatio(item.units, ev);
        if (unit) {
            item.unit = unit.unit;
            item.price = parseFloat(unit.price_import);
            item.ratio = parseFloat(unit.ratio);
            item.price_origin = parseFloat(unit.price_import);
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
    // ----set supplier-----
    closeAndReceiveSupplier(event) {
        if (event) {
            this.invoice.id_supplier = (event);
        }
    }
    search(value) {
        clearTimeout(this.timer);
        // sau 500ms thì thực hiện
        this.timer = setTimeout(() => {
            let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
            console.log(tempVal);
            if (value.length >= 6) {
                this.vhQuerySales.searchKeyword_NamePhone('suppliers', tempVal).then((res) => {
                    this.searchList = res;
                });
            }
        }, 500);
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
    editDiscount() {
        if (this.discount_price.getRawValue() && this.discount_price.getRawValue() >= 0) {
            this.invoice.discount = (parseFloat(this.discount_price.getRawValue()));
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
        if (this.invoice.payment_type != 2) {
            this.vhAlgorithm.waitingStack().then(() => {
                this.edit_paytotal = this.vhAlgorithm.vhnumeral(".edit-pay");
            });
            this.edit_pay = true;
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
    handle() {
        this.isExit = true;
        this.router.navigate([this.url], { state: this.dataRestore });
    }
    edit_note() {
        if (this.note) {
            this.invoice.note = (this.note);
        }
    }
    openInfoSupplier() {
        if (this.invoice.id_supplier) {
            this.supplier = this.vhQuerySales.getlocalSupplier(this.invoice.id_supplier);
            this.visibleInfoSupplier = true;
        }
    }
    closeInfoSupplier(event) {
        this.visibleInfoSupplier = false;
    }
    payInvoice(bill_type, print) {
        if (this.vhAuth.checkMyPermission("purchase_enable_payment")) {
            this.vhComponent.alertConfirm(bill_type == 10 ? `${this.languageService.translate("Save")}?` : (!print ? `${this.languageService.translate("Pay")}?` : `${this.languageService.translate("Pay & Print")}?`), "", "", "OK", this.languageService.translate("Cancel")).then(() => {
                this.vhComponent.showLoading("", "transparent-loading").then(() => {
                    var arrayProcess = [this.createOrUpdate(10)];
                    Promise.all(arrayProcess).then(bill => {
                        this.vhComponent.hideLoading(0).then(() => {
                            this.vhComponent.showToast(2000, `${this.languageService.translate("Purchase invoice")} ${bill[0].bill_code || this.invoice.bill_code} ${this.languageService.translate("has been updated successfully")}`, "success-toast");
                            if (print)
                                this.handlePrint();
                            else
                                this.handle();
                        });
                    });
                });
            }, () => { });
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    createOrUpdate(bill_type) {
        return this.vhQuerySales.updateBill_Billdetail(this.invoice._id, this.getCreateUpdateInvoice(10), this.getCreateUpdateInvoiceDetail());
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_return_supplier');
            if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable)
                resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);
            else
                rejects("No");
        });
    }
    handlePrint() {
        this.checkPrint().then((printer) => {
            if (printer)
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice_detail: this.invoice_detail, invoice: this.invoice }, false, false, `modal-print-${printer['_id']}`).then((modal) => {
                    modal.onWillDismiss().then(() => this.handle());
                });
        }, (err) => this.vhComponent.alertMessage(this.languageService.translate("Function"), "", this.languageService.translate("Please turn on the printer function"), "OK")
            .then(() => this.handle()));
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_return_supplier_return_supplier_k57_col3_return_supplier_k57_col3_component__WEBPACK_IMPORTED_MODULE_4__.ReturnSupplierK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_return_supplier_return_supplier_k80_col3_return_supplier_k80_col3_component__WEBPACK_IMPORTED_MODULE_3__.ReturnSupplierK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_return_supplier_return_supplier_k80_col4_return_supplier_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.ReturnSupplierK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_return_supplier_return_supplier_a5_return_supplier_a5_component__WEBPACK_IMPORTED_MODULE_1__.ReturnSupplierA5Component;
            case 'print_size_a4': return src_app_sales_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_0__.ReturnSupplierA4Component;
            default: return src_app_sales_components_print_return_supplier_return_supplier_a4_return_supplier_a4_component__WEBPACK_IMPORTED_MODULE_0__.ReturnSupplierA4Component;
        }
    }
    /**
     * Sự kiện nhận barcode
     */
    getKeyUp(_event) {
        if (this.router.url === this.url + "/edit-return-supplier") {
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
                    if (detailproduct) {
                        this.closeSearchProductList(Object.assign(Object.assign({}, detailproduct), this.vhQuerySales.getUnit_byRatio(detailproduct.units, detailproduct.ratio)));
                    }
                    else
                        this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Not found"));
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
        this.show_modal_select_lots = true;
        this.tempDetail = data;
        this.list_search_lot = this.tempDetail.lots;
    }
    changeLot(e) {
        this.tempDetail.lot_number = this.tempDetail.lots.find(item => item._id == e).lot_number;
    }
    handleChooseLot() {
        this.tempDetail.lots = this.list_search_lot;
        let lot = this.tempDetail.lots.find(e => e._id == this.tempDetail.id_lotproduct);
        if (lot && this.getNumberOfDay(new Date(lot.date_exp), new Date()) > this.tempDetail.days_import_warning) {
            if (!this.tempDetail.id_product)
                this.closeSearchProductList(this.tempDetail);
            this.show_modal_select_lots = false;
        }
        else {
            this.nzModalService.confirm({
                nzTitle: this.languageService.translate("Lô hàng chưa đủ điều kiện!"),
                nzContent: this.languageService.translate("Số lô hàng hiện tại chưa đáp ứng đủ điều kiện nhập hàng, yêu cầu lô hàng phải có hạn sử dụng còn lại tối thiểu là") + ' ' + this.tempDetail.days_import_warning + ' ' + this.languageService.translate("days") + '.' + this.languageService.translate("Xác nhận tiếp tục?"),
                nzOnCancel: () => { this.tempDetail.id_lotproduct = ''; },
                nzOnOk: () => {
                    this.show_modal_select_lots = false;
                    if (!this.tempDetail.id_product)
                        this.closeSearchProductList(this.tempDetail);
                }
            });
        }
    }
    /**
       * trả về khoảng cách giữa 2 ngày
       * vd : getNumberOfDay(15/02/2022, 10/02/2022) => return 5
       * */
    getNumberOfDay(date1, date2) {
        return (date1.getTime() - date2.getTime()) / (24 * 3600 * 1000) > 0 ? (date1.getTime() - date2.getTime()) / (24 * 3600 * 1000) : 0;
    }
    handleCancelChooseLot() {
        this.show_modal_select_lots = false;
        this.tempDetail.lots = this.list_search_lot;
    }
    openAddLot() {
        this.disabledAddLot = false;
        this.show_modal_add_lot = true;
        this.formAddLot = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
            date_mfg: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(new Date(new Date().setHours(0, 0, 0)), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])),
            date_exp: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(new Date(new Date().setHours(23, 59, 59)), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])),
            lot_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])),
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(false),
            barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(''),
        });
        this.vhAlgorithm.waitingStack().then(() => {
            document.getElementById('lotNumberError').style.display = 'none';
        });
    }
    checkBarcode() {
        let detailproduct = this.vhQuerySales.getlocalDetailProduct_byBarcode(this.formAddLot.value.barcode);
        if (detailproduct) {
            this.exist_barcode = true;
            this.disabledAddLot = true;
        }
        else {
            this.disabledAddLot = false;
            this.exist_barcode = false;
        }
    }
    handleAddLot() {
        if (!this.fncService.checkExitsLotNumber(this.formAddLot.value.lot_number)) {
            this.show_modal_add_lot = false;
            this.tempDetail.lots = this.tempDetail.lots.concat(this.formAddLot.value);
            if (this.tempDetail.id_subproduct) {
                this.vhQuerySales.addLotProduct(this.tempDetail.id_subproduct, this.formAddLot.value)
                    .then((lot) => {
                    setTimeout(() => {
                        this.tempDetail.lots[this.tempDetail.lots.length - 1]._id = lot;
                        this.tempDetail.lot_number = this.formAddLot.value.lot_number;
                        this.tempDetail.id_lotproduct = lot;
                        this.list_search_lot = this.tempDetail.lots;
                    }, 200);
                }, error => {
                });
            }
            else {
                this.vhQuerySales.addLotProduct(this.tempDetail.id_product, this.formAddLot.value)
                    .then((lot) => {
                    setTimeout(() => {
                        this.tempDetail.lots[this.tempDetail.lots.length - 1]._id = lot;
                        this.tempDetail.lot_number = this.formAddLot.value.lot_number;
                        this.tempDetail.id_lotproduct = lot;
                        this.list_search_lot = this.tempDetail.lots;
                    }, 200);
                }, error => {
                });
            }
        }
        else {
            document.getElementById('lotNumberError').style.display = 'block';
            this.vhComponent.alertMessageDesktop('error', this.languageService.translate("Số lô này đã tồn tại"));
        }
    }
    printLabel(item) {
        let product = this.vhQuerySales.getlocalDetailProduct(item.id_subproduct ? item.id_subproduct : item.id_product);
        let lot_data = product.lots.find(e => e._id == item.id_lotproduct);
        this.product_selected = product;
        let barcode_selected = this.listBarcodeLot.find(e => e._id == product.id_design_barcode_lot);
        if (barcode_selected) {
            this.start_print = true;
            let data = {
                formProduct: Object.assign({ name: this.product_selected.name }, lot_data),
                barcode: barcode_selected,
                col: this.product_selected.number_column_lot,
                number: this.product_selected.number_print_lot
            };
            this.data_print = data;
            setTimeout(() => {
                this.start_print = false;
            }, 2000);
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Bạn chưa chọn mẫu tem cho sản phẩm này!"));
        }
    }
    getTotalATax() {
        return this.invoice.total + this.taxValue;
    }
    removeInvoiceDetail(id, notSetSub) {
        let index = this.invoice_detail.findIndex(detail => detail['id_product'] == id);
        if (index != -1) {
            this.invoice_detail.splice(index, 1);
            if (!notSetSub)
                this.setSubTotal();
        }
    }
    setSubTotal() {
        this.subTotal = this.invoice_detail.reduce((prev, next) => prev + next.quantity * next.price, 0);
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
    /**Thêm sản phẩm vô bill detail */
    addInvoiceDetail(value) {
        if (value['id_subproduct']) {
            if (value.lot_number) {
                let index = this.invoice_detail.findIndex(detail => detail['lot_number'] == value['lot_number'] && detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoice_detail[index]['quantity'] < 9999999999)
                        this.invoice_detail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
            else {
                let index = this.invoice_detail.findIndex(detail => detail['id_subproduct'] == value['id_subproduct'] && detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoice_detail[index]['quantity'] < 9999999999)
                        this.invoice_detail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
        }
        else {
            if (value.lot_number) {
                let index = this.invoice_detail.findIndex(detail => detail['lot_number'] == value['lot_number'] && detail['id_lotproduct'] == value['id_lotproduct']);
                if (index != -1) {
                    if (this.invoice_detail[index]['quantity'] < 9999999999)
                        this.invoice_detail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
            else {
                let index = this.invoice_detail.findIndex(detail => detail['id_product'] == value['_id'] && detail['ratio'] == value['ratio']);
                if (index != -1) {
                    if (this.invoice_detail[index]['quantity'] < 9999999999)
                        this.invoice_detail[index]['quantity'] += 1;
                    this.setSubTotal();
                }
                else {
                    this.addBill_Detail(value);
                }
            }
        }
    }
    addBill_Detail(value) {
        this.invoice_detail.unshift({
            name: value.name,
            id_product: value._id,
            quantity: 1,
            unit: value.unit,
            units: value.units,
            ratio: value.ratio ? value.ratio : 1,
            ptype: value.type,
            price: value.price_import,
            price_origin: value.price_import,
            id_subproduct: value.id_subproduct,
            lots: value.lots,
            lot_number: value.lot_number,
            id_lotproduct: value.id_lotproduct,
            days_import_warning: value.days_import_warning
        });
        this.setSubTotal();
    }
    /**Thêm sản phẩm vô bill detail */
    addInvoiceDetailMutilLine(value) {
        this.invoice_detail.push({
            name: value.name,
            id_product: value._id,
            quantity: 1,
            unit: value.unit,
            units: value.units,
            ratio: value.ratio ? value.ratio : 1,
            ptype: value.type,
            price: value.price_import,
            price_origin: value.price_import,
            id_subproduct: value.id_subproduct,
            lots: value.lots,
            lot_number: value.lot_number,
            id_lotproduct: value.id_lotproduct,
            days_import_warning: value.days_import_warning
        });
        this.setSubTotal();
    }
    /** Lấy bill dùng để tạo cho database */
    getCreateUpdateInvoice(bill_type = 10) {
        if (bill_type)
            this.invoice.bill_type = (bill_type);
        return this.invoice;
    }
    /** Lấy tất cả bill detail để tạo cho database */
    getCreateUpdateInvoiceDetail() {
        return this.invoice_detail.map(item => {
            let detail = {
                id_product: item.id_product,
                price: item.price,
                quantity: item.quantity,
                ptype: item.ptype,
                ratio: item.ratio ? item.ratio : 1,
                price_origin: item.price_origin
            };
            if (item['id_lotproduct'])
                detail['id_lotproduct'] = item.id_lotproduct;
            if (item['id_subproduct'])
                detail['id_subproduct'] = item.id_subproduct;
            return detail;
        });
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_17__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_17__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_17__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_17__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalService)); };
EditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["bill-type10-edit"]], hostBindings: function EditComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keypress", function EditComponent_keypress_HostBindingHandler($event) { return ctx.getKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresolveWindow"]);
    } }, inputs: { url: "url" }, decls: 107, vars: 86, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], ["class", "no-data", 4, "ngIf"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], [1, "sales-bills-staff-name"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar", 2, "overflow", "visible"], ["nz-col", "", "nzSpan", "24", 2, "margin", "8px 0"], ["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], [2, "width", "100%", "display", "unset"], [4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["class", "sales-bills-content-discount", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-fee", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-tax", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["style", "width: 16px;margin-left:10px", "src", "assets/icon/Iconfeather-edit.svg", 3, "click", 4, "ngIf"], ["class", "sales-bills-content-rest", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], [3, "payment_type", "id_wallet", "id_supplier", "closeAndGetValuePayment"], ["class", "sales-bills-content-note", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "closeSearchProductList"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditPay", ""], [3, "visibleInfoSupplier", "supplier", "closeInfoSupplier", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice2", ""], [3, "ngSwitch"], ["style", "display: none;", 3, "start_print", "stamp", 4, "ngSwitchCase"], [1, "no-data"], [1, "invoiceDetail-item"], ["nz-row", ""], ["nz-col", "", "nzSpan", "1", 1, "center-col", 3, "click"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "8", 1, "center-col"], [1, "max-width-two-line"], ["nz-col", "", "nzSpan", "3", 2, "align-self", "center"], [2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "4", 1, "text-align-self"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4", 1, "invoiceDetail-item-quantity", "text-end", 3, "click"], [2, "font-size", "0.7rem"], ["nz-col", "", "nzSpan", "4", 1, "money-sub"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline", "nz-tooltip", "", 3, "nzTooltipTitle", "click"], [3, "nzLabel", "nzValue"], [2, "display", "flex", "justify-content", "space-between"], [3, "id_supplier", "closeAndReceiveSupplier"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "cursor", "pointer", 3, "ngClass", "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "nz-no-border", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "nz-no-border", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax"], ["nzBorderless", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], ["nzBorderless", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "not-found"], ["src", "assets/icon/Iconfeather-edit.svg", 2, "width", "16px", "margin-left", "10px", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-input", "", 1, "nz-hover-border", 3, "ngModel", "placeholder", "nzAutosize", "ngModelChange", "blur"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "edit-pay", 3, "value"], [3, "visibleInfoSupplier", "supplier", "closeInfoSupplier"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], ["nz-row", "", 4, "ngFor", "ngForOf"], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", "padding", "8px 0", 3, "nzValue"], ["nz-col", "", "nzSpan", "8"], [2, "text-align", "center"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], ["modalFooterEditUnitPrice3", ""], ["nz-form", "", 3, "formGroup"], ["nz-col", "", 3, "nzSpan"], [2, "margin", "0 0 4px"], [3, "nzSpan"], [3, "nzSpan", "nzErrorTip"], ["nz-input", "", "formControlName", "lot_number", 3, "placeholder"], ["errorSubsName", ""], ["id", "lotNumberError", 1, "validation-errors"], [1, "error-message"], ["color", "vh-red"], ["formControlName", "date_mfg"], ["formControlName", "date_exp"], ["nz-input", "", "formControlName", "barcode", 3, "placeholder", "keyup"], [2, "display", "none", 3, "start_print", "stamp"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_Template_button_click_17_listener() { return ctx.openSearchProductList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, EditComponent_div_21_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, EditComponent_div_23_Template, 25, 11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "app-staff", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeAndReceiveEmployee", function EditComponent_Template_app_staff_closeAndReceiveEmployee_31_listener($event) { return ctx.closeAndReceiveEmployee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "nz-date-picker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_nz_date_picker_ngModelChange_36_listener($event) { return ctx.pickerTime = $event; })("ngModelChange", function EditComponent_Template_nz_date_picker_ngModelChange_36_listener($event) { return ctx.setPickerTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "nz-radio-group", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_nz_radio_group_ngModelChange_39_listener($event) { return ctx.radioValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](47, EditComponent_ng_container_47_Template, 4, 2, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](48, EditComponent_ng_container_48_Template, 2, 1, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](59, EditComponent_div_59_Template, 5, 4, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](60, EditComponent_div_60_Template, 5, 4, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](61, EditComponent_div_61_Template, 9, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](70, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](75, EditComponent_img_75_Template, 1, 0, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](76, EditComponent_div_76_Template, 6, 4, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](78, "app-tax", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeAndGetValuePayment", function EditComponent_Template_app_tax_closeAndGetValuePayment_78_listener($event) { return ctx.closeAndGetValuePayment($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](79, EditComponent_div_79_Template, 3, 6, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](81, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_Template_button_click_81_listener() { return ctx.payInvoice(10, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](84, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function EditComponent_Template_button_click_84_listener() { return ctx.payInvoice(10, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](87, "app-search-product-import", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("closeSearchProductList", function EditComponent_Template_app_search_product_import_closeSearchProductList_87_listener($event) { return ctx.closeSearchProductList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](88, EditComponent_nz_modal_88_Template, 5, 5, "nz-modal", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](89, "nz-modal", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzVisibleChange", function EditComponent_Template_nz_modal_nzVisibleChange_89_listener($event) { return ctx.edit_pay = $event; })("nzOnCancel", function EditComponent_Template_nz_modal_nzOnCancel_89_listener() { return ctx.handleCancelEditPay(); })("nzOnOk", function EditComponent_Template_nz_modal_nzOnOk_89_listener() { return ctx.handleEditPay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](90, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](91, EditComponent_ng_container_91_Template, 7, 4, "ng-container", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](92, EditComponent_ng_template_92_Template, 6, 6, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](94, EditComponent_app_info_supplier_94_Template, 1, 2, "app-info-supplier", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](95, "nz-modal", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("nzVisibleChange", function EditComponent_Template_nz_modal_nzVisibleChange_95_listener($event) { return ctx.show_modal_select_lots = $event; })("nzOnCancel", function EditComponent_Template_nz_modal_nzOnCancel_95_listener() { return ctx.handleCancelChooseLot(); })("nzOnOk", function EditComponent_Template_nz_modal_nzOnOk_95_listener() { return ctx.handleChooseLot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](96, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](97, EditComponent_ng_container_97_Template, 11, 7, "ng-container", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](98, EditComponent_ng_template_98_Template, 11, 10, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](100, EditComponent_nz_modal_100_Template, 5, 5, "nz-modal", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](101, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](102, EditComponent_app_print_one_col_lot_102_Template, 1, 2, "app-print-one-col-lot", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](103, EditComponent_app_print_two_col_lot_103_Template, 1, 2, "app-print-two-col-lot", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](104, EditComponent_app_print_three_col_lot_104_Template, 1, 2, "app-print-three-col-lot", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](105, EditComponent_app_print_four_col_lot_105_Template, 1, 2, "app-print-four-col-lot", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](106, EditComponent_app_print_five_col_lot_106_Template, 1, 2, "app-print-five-col-lot", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](93);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 54, "Back"), " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 56, "Edit return supplier"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](14, 58, "Select product"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](20, 60, "Search (F4)"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.invoice_detail.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.invoice_detail);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](30, 62, "Employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id_employee", ctx.invoice.id_employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](35, 64, "Purchase date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.pickerTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](42, 66, "Supplier information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](45, 68, "Search supplier"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.radioValue == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.radioValue == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](52, 70, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](56, 72, "SubTotal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.subTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.printer.discount_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.printer.fee_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.printer.tax_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](65, 74, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.getTotalATax()));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](72, 76, "Pay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.payment), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.invoice.payment_type != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.printer.debt_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("payment_type", ctx.invoice.payment_type)("id_wallet", ctx.invoice.id_wallet)("id_supplier", ctx.invoice.id_supplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.printer.note_hidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.invoice_detail.length || !ctx.invoice.id_supplier || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](83, 78, "Pay & Print"), " (F2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("disabled", !ctx.invoice_detail.length || !ctx.invoice.id_supplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](86, 80, "Pay"), " (F1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("searchProductList", ctx.searchProductList);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](90, 82, "Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzVisible", ctx.edit_pay)("nzFooter", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.visibleInfoSupplier);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](96, 84, "Select lot number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("nzFooter", _r16)("nzVisible", ctx.show_modal_select_lots);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.show_modal_add_lot);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitch", ctx.product_selected.number_column);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngSwitchCase", 5);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_21__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_22__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_23__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_24__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _menu_manage_invoices_purchase_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_26__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_27__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_27__.NzRadioComponent, _menu_manage_invoices_purchase_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__.TaxComponent, _search_search_product_import_search_product_import_component__WEBPACK_IMPORTED_MODULE_10__.SearchProductImportComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_18__.NzModalContentDirective, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgSwitchCase, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__.NzSelectComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_29__.NzInputNumberComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_30__.NzTooltipDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_28__.NzOptionComponent, _menu_manage_invoices_purchase_components_select_supplier_select_supplier_component__WEBPACK_IMPORTED_MODULE_11__.SelectSupplierComponent, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _search_search_supplier_search_supplier_component__WEBPACK_IMPORTED_MODULE_12__.SearchSupplierComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__.NzAutosizeDirective, _menu_manage_invoices_purchase_components_info_supplier_info_supplier_component__WEBPACK_IMPORTED_MODULE_13__.InfoSupplierComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__.NzInputGroupWhitSuffixOrPrefixDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_32__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_32__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_32__.NzFormLabelComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_32__.NzFormControlComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_33__.IonText], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_34__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n  width: 97%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-price[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 0.9rem;\n  border-bottom: solid 1px #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 93%;\n  overflow-y: scroll;\n  padding-top: 2%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-bottom: 2px solid #edecee;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 15% 20% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n  align-items: flex-start;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   nz-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .deactive[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   app-select-supplier[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-gray);\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 48%;\n  height: 50px !important;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\npre[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\npre[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0FBR1I7QUFGUTs7OztFQUtJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRlk7RUFDSSxVQUFBO0FBSWhCO0FBSGdCO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFLcEI7QUFIZ0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUtwQjtBQUZZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUloQjtBQUhnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUtwQjtBQUpvQjtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBTXhCO0FBSm9CO0VBQ0ksNkJBQUE7RUFDQSw2QkFBQTtBQU14QjtBQURRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUFHWjtBQUZZO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBSWhCO0FBSGdCO0VBRUksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUlwQjtBQUhvQjs7O0VBRUksVUFBQTtFQUNBLGVBQUE7QUFNeEI7QUFIZ0I7RUFDSSxrQkFBQTtBQUtwQjtBQUZZO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFJaEI7QUFGb0I7RUFDSSxpQkFBQTtBQUl4QjtBQURnQjtFQUNJLGdDQUFBO0FBR3BCO0FBRGdCO0VBQ0ksY0FBQTtBQUdwQjtBQURnQjtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBR3BCO0FBRGdCO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBR3BCO0FBQVk7RUFFSSxhQUFBO0VBQ0EsOEJBQUE7QUFDaEI7QUFDWTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ2hCO0FBQ29CO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBQ3hCO0FBSW9CO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBRnhCO0FBTW9CO0VBQ0ksVUFBQTtBQUp4QjtBQVFvQjtFQUNJLGVBQUE7QUFOeEI7QUFRb0I7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBTnhCO0FBU2dCO0VBQ0ksV0FBQTtFQUNBLGNBQUE7QUFQcEI7QUFRb0I7RUFDSSxXQUFBO0FBTnhCO0FBVVk7RUFDSSx1QkFBQTtFQUNBLDhCQUFBO0FBUmhCO0FBU2dCO0VBQ0ksMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBUHBCO0FBU2dCO0VBQ0ksMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFQcEI7QUFhQTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQVlBOztFQUVJLGlCQUFBO0FBVEo7QUFXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQVJKO0FBVUEsa0JBQUE7QUFDQTtFQUNJLHFCQUFBO0VBQXVCLGdCQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLG1DQUFBO0FBTDlCO0FBUUE7RUFDSSxVQUFBO0VBQVksa0NBQUE7QUFKaEI7QUFPQTtFQUNLLFdBQUE7QUFKTDtBQUtJO0VBQ0ksMEJBQUE7QUFIUjtBQU9BO0VBQ0ksV0FBQTtBQUpKO0FBTUE7RUFJRyxhQUFBO0VBQ0EsbUJBQUE7QUFOSDtBQUVHO0VBQ0MsZ0JBQUE7QUFBSiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC5zYWxlcyB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY1JSAzNSU7XHJcbiAgICAgICAgcm93LWdhcDogMTBweDtcclxuICAgICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICAgICYtY2FydCxcclxuICAgICAgICAmLWJlc3Qtc2VsbGluZyxcclxuICAgICAgICAuc2FsZXMtYmlsbHMtc3RhZmYsXHJcbiAgICAgICAgLnNhbGVzLWJpbGxzLWN1c3RvbWVyLFxyXG4gICAgICAgIC5zYWxlcy1iaWxscy1jb250ZW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jYXJ0IHtcclxuICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgJi1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2JTtcclxuICAgICAgICAgICAgICAgIC5idG4tZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4tcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M4YzdjYztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWludm9pY2VEZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MyU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMiU7XHJcbiAgICAgICAgICAgICAgICAuaW52b2ljZURldGFpbC1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgJi1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVjZWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYmlsbHMge1xyXG4gICAgICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxNSUgMjAlIDU1JSAxMCU7XHJcbiAgICAgICAgICAgICYtc3RhZmYge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgICAgICAmLXRpbWUsXHJcbiAgICAgICAgICAgICAgICAmLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBuei1kYXRlLXBpY2tlcixcclxuICAgICAgICAgICAgICAgICAgICBhcHAtc3RhZmYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY3VzdG9tZXIge1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBuei1yYWRpby1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjOGM3Y2M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcHAtc2VsZWN0LXN1cHBsaWVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY3VzdG9tZXIgPiBkaXYsXHJcbiAgICAgICAgICAgICYtY29udGVudCA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZGl2ID4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICAmLWZlZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi10YXgge1xyXG4gICAgICAgICAgICAgICAgICAgIC5ub3QtZm91bmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtcGF5IHtcclxuICAgICAgICAgICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYtcGF5bWVudF90eXBlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBhcHAtdGF4IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgLm9yZGVyLWFuZC1wcmludCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLm9yZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4udGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5pbnB1dCxcclxudGV4dGFyZWEge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuLmNlbnRlci1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLyogSGlkZSBzY3JvbGxiYXIqL1xyXG4uaGlkZVNjcm9sbGJhciB7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG59XHJcblxyXG4uaGlkZVNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDsgLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxufVxyXG5cclxuOjpuZy1kZWVwIC5yYWRpby1wdXJjaGFzZSAgc3BhbntcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgIC5hbnQtcmFkaW97XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucmFkaW8tcHVyY2hhc2UgIC5hbnQtcmFkaW97XHJcbiAgICB3aWR0aDogMTZweDsgXHJcbn1cclxucHJle1xyXG4gICBpe1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgfVxyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_sales_components_bill-type_bill-type-10_bill-type10_module_ts.js.map