"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_sales_components_bill-type_bill-type-15_bill-type-15_module_ts-src_app_sales_-4b3184"],{

/***/ 75794:
/*!******************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-15/add/add.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComponent": () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_warranty_warranty_k57_col3_warranty_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-k57-col3/warranty-k57-col3.component */ 74810);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_k80_col3_warranty_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-k80-col3/warranty-k80-col3.component */ 96691);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_k80_col4_warranty_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-k80-col4/warranty-k80-col4.component */ 56485);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_a5_warranty_a5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-a5/warranty-a5.component */ 13625);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_a4_warranty_a4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-a4/warranty-a4.component */ 46846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../sale-desktop/components/staff/staff.component */ 88963);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _sale_desktop_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../sale-desktop/components/tax/tax.component */ 74330);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _sale_desktop_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../sale-desktop/components/customer/customer.component */ 70064);
/* harmony import */ var _search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../search/search-customer/search-customer.component */ 55846);
/* harmony import */ var _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../search/search-product/search-product.component */ 99767);
/* harmony import */ var _search_search_product_warranty_invoice_search_product_warranty_invoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../search/search-product-warranty-invoice/search-product-warranty-invoice.component */ 48115);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _sale_desktop_components_change_price_type_change_price_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../sale-desktop/components/change-price-type/change-price-type.component */ 28877);
/* harmony import */ var _sale_desktop_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../sale-desktop/components/customer-profile/customer-profile.component */ 46156);
/* harmony import */ var _sale_desktop_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../sale-desktop/components/add-customer/add-customer.component */ 29519);
/* harmony import */ var _sale_desktop_components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../sale-desktop/components/retail-info/retail-info.component */ 626);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngx-translate/core */ 70325);









































function AddComponent_div_32_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "nz-input-number", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_div_32_div_8_Template_nz_input_number_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r38); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return item_r33.quantity = $event; })("ngModelChange", function AddComponent_div_32_div_8_Template_nz_input_number_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r38); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r39.checkQuantityProduct(item_r33, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 1)("nzStep", 1)("ngModel", item_r33.quantity);
} }
function AddComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_32_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43); const i_r34 = restoredCtx.index; const item_r33 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r42.removeWarrantyProd(i_r34, item_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_div_32_Template_input_ngModelChange_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43); const item_r33 = restoredCtx.$implicit; return item_r33.content = $event; })("blur", function AddComponent_div_32_Template_input_blur_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43); const i_r34 = restoredCtx.index; const item_r33 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r45.editWarrantyProd(i_r34, item_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, AddComponent_div_32_div_8_Template, 2, 4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", item_r33.content)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 3, "Enter product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.warrantyProd.length == 1 && ctx_r0.warrantyProd[0].content || ctx_r0.warrantyProd.length > 1);
} }
function AddComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_42_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r49); const i_r47 = restoredCtx.index; const item_r46 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r48.invoice.removeWarrantyNote(i_r47, item_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_div_42_Template_input_ngModelChange_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r49); const item_r46 = restoredCtx.$implicit; return item_r46.content = $event; })("blur", function AddComponent_div_42_Template_input_blur_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r49); const i_r47 = restoredCtx.index; const item_r46 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r51.editWarrantyNote(i_r47, item_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", item_r46.content)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 2, "Enter note"));
} }
function AddComponent_div_63_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function AddComponent_div_63_ng_container_4_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r64.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
} }
function AddComponent_div_63_ng_container_4_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_4_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r73); const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r71.openModalChooseLot(data_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r68.getLotNumber(data_r67.lots, data_r67.id_lotproduct));
} }
function AddComponent_div_63_ng_container_4_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r76 = ctx.$implicit;
    const i_r77 = ctx.index;
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r77 == data_r67.combos.length - 1 ? combo_r76.quantity + "x " + combo_r76.name + " (" + ctx_r75.getUnit(combo_r76.units, combo_r76.ratio) + ") " : combo_r76.quantity + "x " + combo_r76.name + " (" + ctx_r75.getUnit(combo_r76.units, combo_r76.ratio) + ") " + " ,", " ");
} }
function AddComponent_div_63_ng_container_4_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_4_div_2_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r67.combos);
} }
function AddComponent_div_63_ng_container_4_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r67.price_origin > data_r67.price ? ctx_r70.vhAlgorithm.vhcurrencyunit(data_r67.price_origin) : "", " ");
} }
function AddComponent_div_63_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AddComponent_div_63_ng_container_4_div_2_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_div_63_ng_container_4_div_2_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_4_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r82); const data_r67 = restoredCtx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r81.openEditUnitPrice(data_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, AddComponent_div_63_ng_container_4_div_2_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r67 = ctx.$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r67.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r67.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r67.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r67.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r67.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r63.vhAlgorithm.vhcurrencyunit(data_r67.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r63.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r63.vhAlgorithm.vhcurrencyunit(data_r67.price * data_r67.quantity));
} }
function AddComponent_div_63_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_4_div_1_Template, 7, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AddComponent_div_63_ng_container_4_div_2_Template, 20, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products);
} }
function AddComponent_div_63_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function AddComponent_div_63_ng_container_5_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r86.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
} }
function AddComponent_div_63_ng_container_5_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_5_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r95); const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r93.openModalChooseLot(data_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r90.getLotNumber(data_r89.lots, data_r89.id_lotproduct));
} }
function AddComponent_div_63_ng_container_5_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r98 = ctx.$implicit;
    const i_r99 = ctx.index;
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r99 == data_r89.combos.length - 1 ? combo_r98.quantity + "x " + combo_r98.name + " (" + ctx_r97.getUnit(combo_r98.units, combo_r98.ratio) + ") " : combo_r98.quantity + "x " + combo_r98.name + " (" + ctx_r97.getUnit(combo_r98.units, combo_r98.ratio) + ") " + " ,", " ");
} }
function AddComponent_div_63_ng_container_5_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_5_div_2_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r89.combos);
} }
function AddComponent_div_63_ng_container_5_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r89.price_origin > data_r89.price ? ctx_r92.vhAlgorithm.vhcurrencyunit(data_r89.price_origin) : "", " ");
} }
function AddComponent_div_63_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AddComponent_div_63_ng_container_5_div_2_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_div_63_ng_container_5_div_2_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_5_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r104); const data_r89 = restoredCtx.$implicit; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r103.openEditUnitPrice(data_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, AddComponent_div_63_ng_container_5_div_2_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r89 = ctx.$implicit;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r89.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r89.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r89.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r89.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r89.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r85.vhAlgorithm.vhcurrencyunit(data_r89.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r85.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r85.vhAlgorithm.vhcurrencyunit(data_r89.price * data_r89.quantity));
} }
function AddComponent_div_63_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_5_div_1_Template, 7, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AddComponent_div_63_ng_container_5_div_2_Template, 20, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products);
} }
function AddComponent_div_63_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function AddComponent_div_63_ng_container_6_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r108.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
} }
function AddComponent_div_63_ng_container_6_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_6_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r117); const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r115.openModalChooseLot(data_r111); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r112.getLotNumber(data_r111.lots, data_r111.id_lotproduct));
} }
function AddComponent_div_63_ng_container_6_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r120 = ctx.$implicit;
    const i_r121 = ctx.index;
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r121 == data_r111.combos.length - 1 ? combo_r120.quantity + "x " + combo_r120.name + " (" + ctx_r119.getUnit(combo_r120.units, combo_r120.ratio) + ") " : combo_r120.quantity + "x " + combo_r120.name + " (" + ctx_r119.getUnit(combo_r120.units, combo_r120.ratio) + ") " + " ,", " ");
} }
function AddComponent_div_63_ng_container_6_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_6_div_2_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r111.combos);
} }
function AddComponent_div_63_ng_container_6_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r111.price_origin > data_r111.price ? ctx_r114.vhAlgorithm.vhcurrencyunit(data_r111.price_origin) : "", " ");
} }
function AddComponent_div_63_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AddComponent_div_63_ng_container_6_div_2_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_div_63_ng_container_6_div_2_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_6_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r126); const data_r111 = restoredCtx.$implicit; const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r125.openEditUnitPrice(data_r111); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, AddComponent_div_63_ng_container_6_div_2_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r111 = ctx.$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r111.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r111.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r111.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r111.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r111.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r107.vhAlgorithm.vhcurrencyunit(data_r111.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r107.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r107.vhAlgorithm.vhcurrencyunit(data_r111.price * data_r111.quantity));
} }
function AddComponent_div_63_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_6_div_1_Template, 7, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AddComponent_div_63_ng_container_6_div_2_Template, 20, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products);
} }
function AddComponent_div_63_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function AddComponent_div_63_ng_container_7_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r130.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
} }
function AddComponent_div_63_ng_container_7_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_7_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r139); const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r137.openModalChooseLot(data_r133); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r134.getLotNumber(data_r133.lots, data_r133.id_lotproduct));
} }
function AddComponent_div_63_ng_container_7_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r142 = ctx.$implicit;
    const i_r143 = ctx.index;
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r143 == data_r133.combos.length - 1 ? combo_r142.quantity + "x " + combo_r142.name + " (" + ctx_r141.getUnit(combo_r142.units, combo_r142.ratio) + ") " : combo_r142.quantity + "x " + combo_r142.name + " (" + ctx_r141.getUnit(combo_r142.units, combo_r142.ratio) + ") " + " ,", " ");
} }
function AddComponent_div_63_ng_container_7_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_7_div_2_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r133.combos);
} }
function AddComponent_div_63_ng_container_7_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r133.price_origin > data_r133.price ? ctx_r136.vhAlgorithm.vhcurrencyunit(data_r133.price_origin) : "", " ");
} }
function AddComponent_div_63_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AddComponent_div_63_ng_container_7_div_2_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_div_63_ng_container_7_div_2_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_7_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r148); const data_r133 = restoredCtx.$implicit; const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r147.openEditUnitPrice(data_r133); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, AddComponent_div_63_ng_container_7_div_2_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r133 = ctx.$implicit;
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r133.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r133.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r133.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r133.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r133.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r129.vhAlgorithm.vhcurrencyunit(data_r133.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r129.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r129.vhAlgorithm.vhcurrencyunit(data_r133.price * data_r133.quantity));
} }
function AddComponent_div_63_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_7_div_1_Template, 7, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AddComponent_div_63_ng_container_7_div_2_Template, 20, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products);
} }
function AddComponent_div_63_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function AddComponent_div_63_ng_container_8_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r152.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
} }
function AddComponent_div_63_ng_container_8_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_8_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r161); const data_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r159.openModalChooseLot(data_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r156.getLotNumber(data_r155.lots, data_r155.id_lotproduct));
} }
function AddComponent_div_63_ng_container_8_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r164 = ctx.$implicit;
    const i_r165 = ctx.index;
    const data_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r165 == data_r155.combos.length - 1 ? combo_r164.quantity + "x " + combo_r164.name + " (" + ctx_r163.getUnit(combo_r164.units, combo_r164.ratio) + ") " : combo_r164.quantity + "x " + combo_r164.name + " (" + ctx_r163.getUnit(combo_r164.units, combo_r164.ratio) + ") " + " ,", " ");
} }
function AddComponent_div_63_ng_container_8_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_8_div_2_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r155.combos);
} }
function AddComponent_div_63_ng_container_8_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r155.price_origin > data_r155.price ? ctx_r158.vhAlgorithm.vhcurrencyunit(data_r155.price_origin) : "", " ");
} }
function AddComponent_div_63_ng_container_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AddComponent_div_63_ng_container_8_div_2_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_div_63_ng_container_8_div_2_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_8_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r170); const data_r155 = restoredCtx.$implicit; const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r169.openEditUnitPrice(data_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, AddComponent_div_63_ng_container_8_div_2_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r155 = ctx.$implicit;
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r155.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r155.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r155.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r155.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r155.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r151.vhAlgorithm.vhcurrencyunit(data_r155.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r151.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r151.vhAlgorithm.vhcurrencyunit(data_r155.price * data_r155.quantity));
} }
function AddComponent_div_63_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_8_div_1_Template, 7, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AddComponent_div_63_ng_container_8_div_2_Template, 20, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products);
} }
function AddComponent_div_63_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function AddComponent_div_63_ng_container_9_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r175); const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r174.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_9_div_1_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r175); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r176.showProductGift = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", item_r52.name, " ");
} }
function AddComponent_div_63_ng_container_9_div_2_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_9_div_2_ng_container_1_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r185); const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit; const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r183.openModalChooseLot(data_r178); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r180.getLotNumber(data_r178.lots, data_r178.id_lotproduct));
} }
function AddComponent_div_63_ng_container_9_div_2_ng_container_1_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r188 = ctx.$implicit;
    const i_r189 = ctx.index;
    const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3).$implicit;
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r189 == data_r178.combos.length - 1 ? combo_r188.quantity + "x " + combo_r188.name + " (" + ctx_r187.getUnit(combo_r188.units, combo_r188.ratio) + ")" : combo_r188.quantity + "x " + combo_r188.name + " (" + ctx_r187.getUnit(combo_r188.units, combo_r188.ratio) + ") " + " ,", " ");
} }
function AddComponent_div_63_ng_container_9_div_2_ng_container_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_9_div_2_ng_container_1_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r178.combos);
} }
function AddComponent_div_63_ng_container_9_div_2_ng_container_1_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r178.price_origin > data_r178.price ? ctx_r182.vhAlgorithm.vhcurrencyunit(data_r178.price_origin) : "", " ");
} }
function AddComponent_div_63_ng_container_9_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AddComponent_div_63_ng_container_9_div_2_ng_container_1_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_div_63_ng_container_9_div_2_ng_container_1_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_9_div_2_ng_container_1_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r195); const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r193.openEditUnitPrice(data_r178); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, AddComponent_div_63_ng_container_9_div_2_ng_container_1_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r178.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r178.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r178.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r178.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r178.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r179.vhAlgorithm.vhcurrencyunit(data_r178.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r179.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r179.vhAlgorithm.vhcurrencyunit(data_r178.price * data_r178.quantity));
} }
function AddComponent_div_63_ng_container_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_9_div_2_ng_container_1_Template, 20, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r178 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r178.choose);
} }
function AddComponent_div_63_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_9_div_1_Template, 8, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AddComponent_div_63_ng_container_9_div_2_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products_gift);
} }
function AddComponent_div_63_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function AddComponent_div_63_ng_container_10_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r201); const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r200.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_10_div_1_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r201); const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r202.showProductGiftType7 = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", item_r52.name, " ");
} }
function AddComponent_div_63_ng_container_10_div_2_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_10_div_2_ng_container_1_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r211); const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit; const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r209.openModalChooseLot(data_r204); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r206.getLotNumber(data_r204.lots, data_r204.id_lotproduct));
} }
function AddComponent_div_63_ng_container_10_div_2_ng_container_1_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r214 = ctx.$implicit;
    const i_r215 = ctx.index;
    const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3).$implicit;
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r215 == data_r204.combos.length - 1 ? combo_r214.quantity + "x " + combo_r214.name + " (" + ctx_r213.getUnit(combo_r214.units, combo_r214.ratio) + ")" : combo_r214.quantity + "x " + combo_r214.name + " (" + ctx_r213.getUnit(combo_r214.units, combo_r214.ratio) + ") " + " ,", " ");
} }
function AddComponent_div_63_ng_container_10_div_2_ng_container_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_10_div_2_ng_container_1_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r204.combos);
} }
function AddComponent_div_63_ng_container_10_div_2_ng_container_1_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r204.price_origin > data_r204.price ? ctx_r208.vhAlgorithm.vhcurrencyunit(data_r204.price_origin) : "", " ");
} }
function AddComponent_div_63_ng_container_10_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r221 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AddComponent_div_63_ng_container_10_div_2_ng_container_1_ng_container_5_Template, 3, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_div_63_ng_container_10_div_2_ng_container_1_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_10_div_2_ng_container_1_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r221); const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r219.openEditUnitPrice(data_r204); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, AddComponent_div_63_ng_container_10_div_2_ng_container_1_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r204.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r204.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r204.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r204.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r204.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r205.vhAlgorithm.vhcurrencyunit(data_r204.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r205.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r205.vhAlgorithm.vhcurrencyunit(data_r204.price * data_r204.quantity));
} }
function AddComponent_div_63_ng_container_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_10_div_2_ng_container_1_Template, 20, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r204 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r204.choose);
} }
function AddComponent_div_63_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_10_div_1_Template, 8, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AddComponent_div_63_ng_container_10_div_2_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products_gift.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products_gift);
} }
function AddComponent_div_63_ng_container_11_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_11_ng_container_8_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r230); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit; const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r228.openModalChooseLot(item_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r224.getLotNumber(item_r52.lots, item_r52.id_lotproduct));
} }
function AddComponent_div_63_ng_container_11_p_9_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r238 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_11_p_9_span_1_ng_container_2_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r238); const combo_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r236.openModalChooseLot(combo_r233); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const combo_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r235.getLotNumber(combo_r233.lots, combo_r233.id_lotproduct));
} }
function AddComponent_div_63_ng_container_11_p_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AddComponent_div_63_ng_container_11_p_9_span_1_ng_container_2_Template, 3, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r233 = ctx.$implicit;
    const i_r234 = ctx.index;
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3).$implicit;
    const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r234 == item_r52.combos.length - 1 ? combo_r233.quantity + "x " + combo_r233.name + " (" + ctx_r232.getUnit(combo_r233.units, combo_r233.ratio) + ") " : combo_r233.quantity + "x " + combo_r233.name + " (" + ctx_r232.getUnit(combo_r233.units, combo_r233.ratio) + ") " + " ,", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", combo_r233.id_lotproduct);
} }
function AddComponent_div_63_ng_container_11_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_63_ng_container_11_p_9_span_1_Template, 3, 2, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.combos);
} }
function AddComponent_div_63_ng_container_11_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
} if (rf & 2) {
    const i_r242 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzLabel", i_r242.unit)("nzValue", i_r242.ratio);
} }
function AddComponent_div_63_ng_container_11_del_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r52.price_origin > item_r52.price ? ctx_r227.vhAlgorithm.vhcurrencyunit(item_r52.price_origin) : "", " ");
} }
function AddComponent_div_63_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function AddComponent_div_63_ng_container_11_Template_div_nzOnConfirm_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); const item_r52 = ctx_r245.$implicit; const i_r53 = ctx_r245.index; const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r244.deleteGoods(item_r52, i_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, AddComponent_div_63_ng_container_11_ng_container_8_Template, 3, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, AddComponent_div_63_ng_container_11_p_9_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "nz-select", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_div_63_ng_container_11_Template_nz_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return item_r52.ratio = $event; })("ngModelChange", function AddComponent_div_63_ng_container_11_Template_nz_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r249.changeUnit($event, item_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, AddComponent_div_63_ng_container_11_nz_option_12_Template, 1, 2, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "nz-input-number", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_div_63_ng_container_11_Template_nz_input_number_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return item_r52.quantity = $event; })("ngModelChange", function AddComponent_div_63_ng_container_11_Template_nz_input_number_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r253.checkQuantityProduct(item_r52, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_div_63_ng_container_11_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r255.openEditUnitPrice(item_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, AddComponent_div_63_ng_container_11_del_19_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 14, "Are you sure to delete"), " ", item_r52.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", item_r52.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", item_r52.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r61.vhAlgorithm.vhcurrencyunit(item_r52.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r61.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r61.vhAlgorithm.vhcurrencyunit(item_r52.price * item_r52.quantity));
} }
function AddComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](3, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AddComponent_div_63_ng_container_4_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AddComponent_div_63_ng_container_5_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_div_63_ng_container_6_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, AddComponent_div_63_ng_container_7_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, AddComponent_div_63_ng_container_8_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, AddComponent_div_63_ng_container_9_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, AddComponent_div_63_ng_container_10_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, AddComponent_div_63_ng_container_11_Template, 24, 16, "ng-container", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitch", item_r52.pmtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 7);
} }
function AddComponent_ng_container_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate4"](" ", ctx_r3.invoice.retail_name, " - ", ctx_r3.invoice.retail_phone, " ", ctx_r3.invoice.retail_address ? "-" : "", " ", ctx_r3.invoice.retail_address, " ");
} }
function AddComponent_ng_container_101_Template(rf, ctx) { if (rf & 1) {
    const _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "app-customer", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveCustomer", function AddComponent_ng_container_101_Template_app_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r259); const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r258.closeAndReceiveCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_ng_container_101_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r259); const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r260.openInfoCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_customer", ctx_r4.invoice.id_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r4.invoice.id_customer != "id_retail" ? "active" : "deactive");
} }
function AddComponent_ng_container_102_Template(rf, ctx) { if (rf & 1) {
    const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "app-search-customer", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveCustomer", function AddComponent_ng_container_102_Template_app_search_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r262); const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r261.closeAndReceiveCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_ng_container_102_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r262); const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r263.openInfoCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_customer", ctx_r5.invoice.id_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r5.invoice.id_customer != "id_retail" ? "active" : "deactive");
} }
function AddComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Accumulated points"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r6.point_validity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 6, "Plus"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r6.getTotalEarningPoint());
} }
function AddComponent_ng_container_119_Template(rf, ctx) { if (rf & 1) {
    const _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "input", 114, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("blur", function AddComponent_ng_container_119_Template_input_blur_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r266); const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7); const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r265.editPercentDiscount(_r264.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("blur", function AddComponent_ng_container_119_Template_input_blur_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r266); const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r267.editDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 3, "Discount value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](8, 5, ctx_r7.percent_discount_bill, "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r7.vhAlgorithm.vhcurrencyunit(ctx_r7.invoice.discount));
} }
function AddComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Discount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r8.vhAlgorithm.vhcurrencyunit(ctx_r8.discount_bill));
} }
function AddComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Point payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r9.vhAlgorithm.vhcurrencyunit(ctx_r9.invoice.payment_points));
} }
function AddComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Coupon payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r10.vhAlgorithm.vhcurrencyunit(ctx_r10.invoice.payment_coupons));
} }
function AddComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("blur", function AddComponent_div_123_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r269); const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r268.editFee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r11.vhAlgorithm.vhcurrencyunit(ctx_r11.invoice.fee));
} }
function AddComponent_div_124_nz_select_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 125);
} if (rf & 2) {
    const item_r273 = ctx.$implicit;
    const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzValue", item_r273._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r272.vhAlgorithm.vhpercent(item_r273.value / 100));
} }
function AddComponent_div_124_nz_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-select", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_div_124_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r275); const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r274.id_tax = $event; })("ngModelChange", function AddComponent_div_124_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r275); const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r276.changeTax($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_div_124_nz_select_5_nz_option_1_Template, 1, 2, "nz-option", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r270.id_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r270.listTax);
} }
function AddComponent_div_124_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "0.00%");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function AddComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, AddComponent_div_124_nz_select_5_Template, 2, 2, "nz-select", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_div_124_span_6_Template, 2, 0, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r12.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r12.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r12.vhAlgorithm.vhcurrencyunit(ctx_r12.taxValue), "");
} }
function AddComponent_ng_container_136_Template(rf, ctx) { if (rf & 1) {
    const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_ng_container_136_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r278); const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r277.showProductGiftType7 = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} }
function AddComponent_img_139_Template(rf, ctx) { if (rf & 1) {
    const _r280 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_img_139_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r280); const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r279.showModalEditTotalPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function AddComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r15.vhAlgorithm.vhcurrencyunit_symbol(ctx_r15.getTotalATax() - ctx_r15.invoice.payment), " ");
} }
function AddComponent_app_search_product_150_Template(rf, ctx) { if (rf & 1) {
    const _r282 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-search-product", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeSearchProductList", function AddComponent_app_search_product_150_Template_app_search_product_closeSearchProductList_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r282); const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r281.closeSearchProductList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("searchProductList", ctx_r16.searchProductList)("default_price_type", ctx_r16.default_price_type);
} }
function AddComponent_app_search_product_warranty_invoice_151_Template(rf, ctx) { if (rf & 1) {
    const _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-search-product-warranty-invoice", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeSearchProductListWarranty", function AddComponent_app_search_product_warranty_invoice_151_Template_app_search_product_warranty_invoice_closeSearchProductListWarranty_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r284); const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r283.closeSearchProductListWarranty($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("searchProductListWarranty", ctx_r17.searchProductListWarranty);
} }
function AddComponent_nz_modal_152_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r285.tempDetail.price);
} }
function AddComponent_nz_modal_152_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r289 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_nz_modal_152_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r289); const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r288.handleCancelEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_nz_modal_152_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r289); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r290.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function AddComponent_nz_modal_152_Template(rf, ctx) { if (rf & 1) {
    const _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-modal", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_152_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r292); const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r291.isVisibleEditUnitPrice = $event; })("nzOnCancel", function AddComponent_nz_modal_152_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r292); const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r293.handleCancelEditUnit(); })("nzOnOk", function AddComponent_nz_modal_152_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r292); const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r294.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AddComponent_nz_modal_152_ng_container_2_Template, 8, 7, "ng-container", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, AddComponent_nz_modal_152_ng_template_3_Template, 6, 6, "ng-template", null, 132, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r286 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](4);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzFooter", _r286)("nzVisible", ctx_r18.isVisibleEditUnitPrice);
} }
function AddComponent_ng_container_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 2, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r19.vhAlgorithm.vhcurrencyunit(ctx_r19.invoice.payment));
} }
function AddComponent_ng_template_156_Template(rf, ctx) { if (rf & 1) {
    const _r296 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_ng_template_156_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r296); const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r295.handleCancelEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_ng_template_156_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r296); const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r297.handleEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function AddComponent_ng_container_160_nz_tag_17_Template(rf, ctx) { if (rf & 1) {
    const _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-tag", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnClose", function AddComponent_ng_container_160_nz_tag_17_Template_nz_tag_nzOnClose_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r303); const item_r301 = restoredCtx.$implicit; const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r302.onCloseProductCode(item_r301); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r301 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzColor", "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r301.code);
} }
function AddComponent_ng_container_160_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r306 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "nz-input-number", 152, 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_160_ng_container_18_Template_nz_input_number_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r306); const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r305.value_discount_point = $event; })("keyup", function AddComponent_ng_container_160_ng_container_18_Template_nz_input_number_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r306); const _r304 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7); const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r307.calculatePoint2Money(_r304["value"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 12, "Accumulated points"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 14, "Enter points"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r300.value_discount_point)("nzMin", 0)("nzMax", ctx_r300.point_validity)("nzStep", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r300.vhAlgorithm.vhcurrencyunit(ctx_r300.invoice.payment_points), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](15, 16, "Point conversion rate"), ": ", ctx_r300.customer_class.payment.points, " \u0110i\u1EC3m = ", ctx_r300.vhAlgorithm.vhcurrencyunit_symbol(ctx_r300.customer_class.payment.money), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](18, 18, "Current accumulated points"), " : ", ctx_r300.point_validity, " ");
} }
function AddComponent_ng_container_160_Template(rf, ctx) { if (rf & 1) {
    const _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "input", 142, 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keyup.enter", function AddComponent_ng_container_160_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r309); const _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7); const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r308.getDiscountOfCoupon(_r298.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_ng_container_160_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r309); const _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7); const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r310.getDiscountOfCoupon(_r298.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](17, AddComponent_ng_container_160_nz_tag_17_Template, 2, 2, "nz-tag", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](18, AddComponent_ng_container_160_ng_container_18_Template, 19, 20, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 8, "Coupon"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 10, "Enter or scan code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 12, "Apply"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r22.vhAlgorithm.vhcurrencyunit(ctx_r22.invoice.payment_coupons), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r22.product_codes);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r22.customer_class == null ? null : ctx_r22.customer_class.payment.enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](22, 14, "Total discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r22.vhAlgorithm.vhcurrencyunit(ctx_r22.invoice.payment_points + ctx_r22.invoice.payment_coupons));
} }
function AddComponent_ng_container_162_ng_container_21_ng_container_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r317 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate3"](" ", data_r317.name, "(", data_r317.unit, ") x", data_r317.quantity, " ");
} }
function AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_4_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r322 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r322.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 3, element_r322.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r322._id);
} }
function AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "nz-select", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_4_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r325); const data_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return data_r318.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_4_nz_option_6_Template, 2, 6, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r318.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r318.lots);
} }
function AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r331 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r331.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 3, element_r331.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r331._id);
} }
function AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r334 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "nz-select", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r334); const combo_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return combo_r328.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_nz_option_6_Template, 2, 6, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const combo_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", combo_r328.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", combo_r328.lots);
} }
function AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_Template, 7, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r328 = ctx.$implicit;
    const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("- ", combo_r328.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", combo_r328.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r327.getUnit(combo_r328.units, combo_r328.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](combo_r328.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r327.vhAlgorithm.vhcurrencyunit(combo_r328.price), " ");
} }
function AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_Template, 11, 5, "tr", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r318.combos);
} }
function AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_4_Template, 7, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "nz-switch", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_Template_nz_switch_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r338); const data_r318 = restoredCtx.$implicit; return data_r318.choose = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_Template, 2, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r318 = ctx.$implicit;
    const item_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r318.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r318.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r316.getUnit(data_r318.units, data_r318.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r318.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r316.vhAlgorithm.vhcurrencyunit(data_r318.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r316.vhAlgorithm.vhcurrencyunit(data_r318.price_origin));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r318.choose)("nzDisabled", ctx_r316.checkDisableChooseProductGift(item_r313) && !data_r318.choose);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r318.ptype == 5);
} }
function AddComponent_ng_container_162_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, AddComponent_ng_container_162_ng_container_21_ng_container_1_span_13_Template, 3, 3, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "td", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, AddComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_Template, 16, 9, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r313.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 7, "_Selected gift quantity"), ": ", item_r313.promotions_maximum, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 9, "List of purchased products"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r313.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](18, 11, "List of gifted products"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r313.products_gift);
} }
function AddComponent_ng_container_162_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_ng_container_162_ng_container_21_ng_container_1_Template, 20, 13, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r313 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r313.pmtype == 6);
} }
const _c0 = function () { return { y: "400px" }; };
function AddComponent_ng_container_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "nz-table", 157, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, AddComponent_ng_container_162_ng_container_21_Template, 2, 1, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r311 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzData", ctx_r23.invoiceDetail)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 11, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 13, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 15, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 17, "Functions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _r311.data);
} }
function AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_4_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r350 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r350.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 3, element_r350.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r350._id);
} }
function AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r353 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "nz-select", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_4_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r353); const data_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return data_r346.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_4_nz_option_6_Template, 2, 6, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r346.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r346.lots);
} }
function AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r359 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r359.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 3, element_r359.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r359._id);
} }
function AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r362 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "nz-select", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r362); const combo_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return combo_r356.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_nz_option_6_Template, 2, 6, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const combo_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", combo_r356.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", combo_r356.lots);
} }
function AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_Template, 7, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r356 = ctx.$implicit;
    const ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("- ", combo_r356.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", combo_r356.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r355.getUnit(combo_r356.units, combo_r356.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](combo_r356.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r355.vhAlgorithm.vhcurrencyunit(combo_r356.price), " ");
} }
function AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_Template, 11, 5, "tr", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r346.combos);
} }
function AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r366 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_4_Template, 7, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "nz-switch", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_Template_nz_switch_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r366); const data_r346 = restoredCtx.$implicit; return data_r346.choose = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_Template, 2, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r346 = ctx.$implicit;
    const item_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r346.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r346.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r345.getUnit(data_r346.units, data_r346.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r346.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r345.vhAlgorithm.vhcurrencyunit(data_r346.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r345.vhAlgorithm.vhcurrencyunit(data_r346.price_origin));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r346.choose)("nzDisabled", ctx_r345.checkDisableChooseProductGift(item_r343) && !data_r346.choose);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r346.ptype == 5);
} }
function AddComponent_ng_container_164_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, AddComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_Template, 16, 9, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r343.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 4, "_Selected gift quantity"), ": ", item_r343.promotions_maximum, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r343.products_gift);
} }
function AddComponent_ng_container_164_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_ng_container_164_ng_container_21_ng_container_1_Template, 8, 6, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r343 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r343.products_gift);
} }
function AddComponent_ng_container_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "nz-table", 157, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, AddComponent_ng_container_164_ng_container_21_Template, 2, 1, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r341 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzData", ctx_r24.product_gift_type7)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 11, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 13, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 15, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 17, "Functions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _r341.data);
} }
function AddComponent_ng_container_167_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "i", 169);
} }
function AddComponent_ng_container_167_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r374 = ctx.$implicit;
    const ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", item_r374._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r374.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](8, 6, item_r374.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](11, 9, item_r374.date_exp, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 12, "Stock"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](17, 14, item_r374.quantity_branch[ctx_r372.id_branch] / ctx_r372.tempDetail.ratio, "1.0-2"));
} }
function AddComponent_ng_container_167_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "No data"));
} }
function AddComponent_ng_container_167_Template(rf, ctx) { if (rf & 1) {
    const _r376 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "nz-input-group", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "input", 164, 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keyup", function AddComponent_ng_container_167_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r376); const _r369 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](4); const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r375.searchLot(_r369.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, AddComponent_ng_container_167_ng_template_6_Template, 1, 0, "ng-template", null, 166, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "nz-radio-group", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_167_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r376); const ctx_r377 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r377.tempDetail.id_lotproduct = $event; })("ngModelChange", function AddComponent_ng_container_167_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r376); const ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r378.changeLot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, AddComponent_ng_container_167_div_9_Template, 18, 17, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, AddComponent_ng_container_167_div_10_Template, 3, 3, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r370 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzSuffix", _r370);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r25.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r25.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r25.tempDetail.lots.length);
} }
function AddComponent_ng_template_168_Template(rf, ctx) { if (rf & 1) {
    const _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_ng_template_168_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r380); const ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r379.handleCancelChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_ng_template_168_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r380); const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r381.handleChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r27.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 5, "Ok"));
} }
function AddComponent_nz_modal_170_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r390 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r390.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 3, element_r390.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r390._id);
} }
function AddComponent_nz_modal_170_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "nz-select", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_nz_modal_170_ng_container_2_ng_container_21_ng_container_1_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r393); const data_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return data_r387.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, AddComponent_nz_modal_170_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template, 2, 6, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "td", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r387.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r387.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r387.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r388.getUnit(data_r387.units, data_r387.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r387.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r388.vhAlgorithm.vhcurrencyunit(data_r387.price), " ");
} }
function AddComponent_nz_modal_170_ng_container_2_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, AddComponent_nz_modal_170_ng_container_2_ng_container_21_ng_container_1_Template, 14, 9, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r387 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r387.lots);
} }
function AddComponent_nz_modal_170_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "nz-table", 157, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "th", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "th", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "th", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "th", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, AddComponent_nz_modal_170_ng_container_2_ng_container_21_Template, 2, 1, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r385 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
    const ctx_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzData", ctx_r382.tempDetail.combos)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 11, "Lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 13, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 15, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 17, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _r385.data);
} }
function AddComponent_nz_modal_170_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r396 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_nz_modal_170_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r396); const ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r395.show_modal_select_lots_combo = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_nz_modal_170_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r396); const ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r397.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "Ok"));
} }
function AddComponent_nz_modal_170_Template(rf, ctx) { if (rf & 1) {
    const _r399 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-modal", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_170_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r399); const ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r398.show_modal_select_lots_combo = $event; })("nzOnCancel", function AddComponent_nz_modal_170_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r399); const ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r400.show_modal_select_lots_combo = false; })("nzOnOk", function AddComponent_nz_modal_170_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r399); const ctx_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r401.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, AddComponent_nz_modal_170_ng_container_2_Template, 22, 20, "ng-container", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, AddComponent_nz_modal_170_ng_template_3_Template, 6, 6, "ng-template", null, 176, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r383 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](4);
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 4, "Select lot number for products in combo"), ": ", ctx_r28.tempDetail.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzFooter", _r383)("nzVisible", ctx_r28.show_modal_select_lots_combo);
} }
function AddComponent_app_change_price_type_171_Template(rf, ctx) { if (rf & 1) {
    const _r403 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-change-price-type", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("changePriceType", function AddComponent_app_change_price_type_171_Template_app_change_price_type_changePriceType_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r403); const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r402.changePriceType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("showModalChangePriceType", ctx_r29.showModalChangePriceType)("default_price_type", ctx_r29.default_price_type);
} }
function AddComponent_app_customer_profile_172_Template(rf, ctx) { if (rf & 1) {
    const _r405 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-customer-profile", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeInfoCustomer", function AddComponent_app_customer_profile_172_Template_app_customer_profile_closeInfoCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r405); const ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r404.closeInfoCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visibleInfoCustomer", ctx_r30.visibleInfoCustomer)("customer", ctx_r30.customer);
} }
function AddComponent_app_add_customer_173_Template(rf, ctx) { if (rf & 1) {
    const _r407 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-add-customer", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAddCustomer", function AddComponent_app_add_customer_173_Template_app_add_customer_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r407); const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r406.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("showDrawerAddCusomer", ctx_r31.showDrawerAddCusomer);
} }
function AddComponent_app_retail_info_174_Template(rf, ctx) { if (rf & 1) {
    const _r409 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-retail-info", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAddCustomer", function AddComponent_app_retail_info_174_Template_app_retail_info_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r409); const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r408.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("showDrawerAddRetail", ctx_r32.showDrawerAddRetail)("retail_name", ctx_r32.invoice.retail_name)("retail_phone", ctx_r32.invoice.retail_phone)("retail_address", ctx_r32.invoice.retail_address);
} }
class AddComponent {
    constructor(router, vhComponent, languageService, vhQuerySales, vhAlgorithm, vhAuth, cdRef, fncService, nzModalService) {
        // set nhân viên mặc định
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
        this.warning_lot_expried = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').warning_lot_expried;
        this.invoice = {
            bill_type: 15,
            payment_type: 1,
            id_customer: 'id_retail',
            id_branch: this.vhQuerySales.getDefaultBranch()._id,
            id_employee: this.vhAuth.getUser()._id,
            id_wallet: 'id_cash',
            date: new Date(),
            total: 0,
            payment: 0,
            tax: 0,
            discount: 0,
            fee: 0,
            note: '',
            price_type: 1,
            payment_points: 0,
            payment_coupons: 0,
            discount_bill: 0,
            earning_points_bill: 0,
            use_points: 0,
            id_technician: ''
        };
        this.subTotal = 0;
        this.taxValue = 0;
        this.invoiceDetail = [];
        this.warrantyProd = [];
        this.warrantyNote = [];
        this.warrantyDel = [];
        this.listTax = this.vhQuerySales.getlocalTaxs().filter(tax => tax.status);
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.employee = {};
        this.pickerTime = new Date();
        this.discount_bill = 0;
        this.percent_discount_bill = 0;
        this.is_discount_bill = false;
        this.list_earning_point_bills = [];
        this.list_earning_points_products = [];
        this.customer_group = [];
        this.point_validity = 0;
        this.showModalChangePriceType = false;
        this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
        this.checkPrinter = false;
        this.searchProductList = false;
        // -------modal edit unit price-------
        this.isVisibleEditUnitPrice = false;
        // ----set customer-----
        this.radioValue = 1;
        this.showModalOtherDiscount = false;
        this.value_discount_point = 0;
        this.product_codes = [];
        // -------modal edit pay---------
        this.edit_pay = false;
        this.save_enable = true;
        //--------------visible drawer info customer-----------
        this.visibleInfoCustomer = false;
        // // ------thoát trang-----
        this.isExit = false;
        // -------------xử lý warranty-----------
        this.searchProductListWarranty = false;
        /**add customer */
        this.showDrawerAddCusomer = false;
        this.showDrawerAddRetail = false;
        this.isGotPromotion = false;
        this.showProductGift = false;
        this.product_gift_type7 = [];
        this.showProductGiftType7 = false;
        this.gotten_gift_type7 = false;
        this.bill_details_pmtype_7 = [];
        this.show_modal_select_lots = false;
        this.list_search_lot = [];
        this.earning_point = 0;
        this.show_modal_select_lots_combo = false;
        this.invoice.id_technician = (this.vhAuth.getUser()._id);
        this.invoice.id_employee = (this.vhAuth.getUser()._id);
        this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
        this.invoice.id_branch = (this.vhQuerySales.getDefaultBranch()._id);
        if (this.vhAuth.checkMyPermission('default_price_type_1'))
            this.default_price_type = 1;
        else if (this.vhAuth.checkMyPermission('default_price_type_2'))
            this.default_price_type = 2;
        this.invoice.price_type = (this.default_price_type);
        if (!this.warrantyProd.length)
            this.addWarrantyProd();
        if (!this.warrantyNote.length)
            this.addWarrantyNote();
        // ------bắt sự kiện nhấn phím nóng-----
        this.eventKeypress();
    }
    ngOnInit() {
        let tax = this.listTax.find(item => item.default);
        if (tax) {
            this.id_tax = tax._id;
            this.invoice.tax = (tax['value']);
        }
        let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_warranty');
        this.printer = printer ? printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)] : { discount_hidden: false, note_hidden: false, fee_hidden: false, tax_hidden: false, debt_hidden: false };
        this.checkPrinter = this.printer.enable;
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
            else if (this.invoiceDetail.length > 0) {
                switch (keycode) {
                    case 114:
                        this.payInvoice(16);
                        break;
                    case 112:
                        this.payInvoice(15, false);
                        break;
                    case 113: {
                        if (this.checkPrinter)
                            this.payInvoice(15, true);
                        break;
                    }
                }
            }
        };
        document.addEventListener('keydown', this.event, false);
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            if (document.querySelector(".discount-price"))
                this.discount_price = this.vhAlgorithm.vhnumeral(".discount-price");
            if (document.querySelector(".invoice-fee"))
                this.invoice_fee = this.vhAlgorithm.vhnumeral(".invoice-fee");
        });
        // get các loại chương trình tích điểm
        Promise.all([
            this.vhQuerySales.getEarningPointsBills(),
            this.vhQuerySales.getEarningPointsProducts(),
        ])
            .then(([earning_point_bills, earning_points_products]) => {
            // this.list_earning_point_bills = this.vhQuerySales.getLocalAppSettingNameStation('sales_program').enable_sales_method_all_branch ? earning_point_bills.filter( item => item.id_branch == this.vhQuerySales.getDefaultBranch()._id) : earning_point_bills;
            // this.list_earning_points_products =  this.vhQuerySales.getLocalAppSettingNameStation('sales_program').enable_sales_method_all_branch ? earning_points_products.filter( item => item.id_branch == this.vhQuerySales.getDefaultBranch()._id) : earning_points_products;
            this.list_earning_point_bills = earning_point_bills;
            this.list_earning_points_products = earning_points_products;
            this.customer_group = this.vhQuerySales.getlocalCustomerClasss();
        });
    }
    /**
     *  hàm xóa sp
     * @param detail
     * @example  this.deleteGoods(bill_detail_selected)
     */
    deleteGoods(detail, index) {
        this.vhComponent.alertConfirm("", "", `${this.languageService.translate("Delete")} ${detail.name}?`, "OK", this.languageService.translate("Cancel"))
            .then(() => {
            if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_warranty)
                this.removeInvoiceDetail(detail.id_product);
            else {
                this.invoiceDetail.splice(index, 1);
            }
            if (this.is_discount_bill) {
                setTimeout(() => {
                    this.getDiscountBillOfCustomer();
                }, 200);
            }
            else {
                setTimeout(() => {
                    this.invoice.discount = ((this.percent_discount_bill / 100) * this.subTotal);
                    if (!this.gotten_gift_type7)
                        this.handlePromotionType7(this.bill_details_pmtype_7);
                }, 200);
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
     * nhận output từ component chọn sp (app-search-product-import)
     * @param data sp được chọn để thêm vào bill
     * @example this.closeSearchProductList(product_selected)
     */
    closeSearchProductList(data) {
        if (data) {
            if (data.manylot && !data.lot_number)
                this.openModalChooseLot(data);
            else {
                if (data.combos && data.combos.filter(e => e.lots && !e.id_lotproduct).length) {
                    this.tempDetail = data;
                    this.show_modal_select_lots_combo = true;
                }
                else {
                    let price = this.default_price_type == 1 ? data.price : data.price2 ? data.price2 : data.price; // check 2 đk là kiểu giá bán và có giá bán sỉ hay ko
                    if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_warranty)
                        this.addInvoiceDetail(Object.assign(Object.assign({}, data), { price: price, earning_points_product: this.getTotalEarningPointProduct(data, null) }), null);
                    else
                        this.addInvoiceDetailMutilLine(Object.assign(Object.assign({}, data), { price: price, earning_points_product: this.getTotalEarningPointProduct(data, null) }), null);
                }
            }
        }
        if (this.is_discount_bill) {
            setTimeout(() => {
                this.getDiscountBillOfCustomer();
            }, 200);
        }
        else {
            setTimeout(() => {
                if (!this.gotten_gift_type7)
                    this.handlePromotionType7(this.bill_details_pmtype_7);
                this.invoice.discount = ((this.percent_discount_bill / 100) * this.subTotal);
            }, 200);
        }
        this.searchProductList = false;
    }
    goBack() {
        this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Are you sure to cancel the sales order")}?`, "OK", this.languageService.translate('Cancel'))
            .then(() => { this.isExit = true; this.router.navigate(["/sales/dashboard/manage/warranty/invoices"], { state: this.dataRestore }); }, () => { });
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
        if (this.is_discount_bill) {
            setTimeout(() => {
                this.getDiscountBillOfCustomer();
            }, 200);
        }
        else {
            setTimeout(() => {
                this.invoice.discount = ((this.percent_discount_bill / 100) * this.subTotal);
                if (!this.gotten_gift_type7)
                    this.handlePromotionType7(this.bill_details_pmtype_7);
            }, 200);
        }
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
        this.setSubTotal();
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
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
            if (this.is_discount_bill) {
                setTimeout(() => {
                    this.getDiscountBillOfCustomer();
                }, 200);
            }
            else {
                setTimeout(() => {
                    this.invoice.discount = ((this.percent_discount_bill / 100) * this.subTotal);
                    if (!this.gotten_gift_type7)
                        this.handlePromotionType7(this.bill_details_pmtype_7);
                }, 200);
            }
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
    /**
    *  sự kiện nhận thay đổi giá từ output component app-change-price-type
    * @event : boolean | null
    */
    changePriceType(event) {
        this.showModalChangePriceType = false;
        if (event != null) { // nếu có thay đổi kiểu giá bán thì cập nhật lại giá các sản phẩm thành giá bán sỉ
            this.default_price_type = event;
            if (this.invoiceDetail.length) { // nếu có  length mơi update
                let bill_details = this.invoiceDetail;
                for (let i in bill_details) {
                    let price_update = 0;
                    let product = this.vhQuerySales.getlocalDetailProduct(bill_details[i].id_subproduct ? bill_details[i].id_subproduct : bill_details[i].id_product);
                    product = Object.assign(Object.assign({}, product), this.vhQuerySales.getUnit_byRatio(product.units, bill_details[i].ratio));
                    if (event == 1) {
                        price_update = product.price;
                    }
                    else {
                        price_update = product.price2 ? product.price2 : product.price;
                    }
                    bill_details[i].price = price_update;
                    bill_details[i].price_origin = price_update;
                }
                this.setSubTotal();
                if (this.is_discount_bill) {
                    setTimeout(() => {
                        this.getDiscountBillOfCustomer();
                    }, 200);
                }
                else {
                    setTimeout(() => {
                        if (!this.gotten_gift_type7)
                            this.handlePromotionType7(this.bill_details_pmtype_7);
                    }, 200);
                }
            }
            this.invoice.price_type = (event);
        }
    }
    // -------set employee-------
    /**
    * bắt sk thay đổi phụ trách bảo hành
    * @param event id_employee selected
    */
    closeAndReceiveTechnician(event) {
        if (event) {
            this.invoice.id_technician = (event);
        }
    }
    /**
    * bắt sk thay đổi nv bán hàng
    * @param event id_employee selected
    */
    closeAndReceiveReceptionist(event) {
        if (event) {
            this.invoice.id_employee = (event);
        }
    }
    /**
    * bắt sk thay đổi khách hàng
    * @param event id_customer
    */
    closeAndReceiveCustomer(event) {
        if (event) {
            this.invoice.id_customer = (event);
            if (!this.vhQuerySales.getlocalCustomer(event).debt_enable)
                this.invoice.payment = (this.getTotalATax());
            this.invoice.retail_name = ('');
            this.invoice.retail_phone = ('');
            this.invoice.retail_address = ('');
            this.getClassAndProgram(event);
        }
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    /**
     * bắt sk thay đổi loại khách hàng (member or retail)
     * @param event
     * @example this.changeCustomerType(1)
     */
    changeCustomerType(event) {
        if (this.radioValue == 1)
            this.invoice.id_customer = ("id_retail");
        if (event == 2 && this.invoice.retail_name) {
            this.nzModalService.confirm({
                nzTitle: `${this.languageService.translate('Retail customer information will be lost')}?`,
                nzCancelText: this.languageService.translate("Cancel"),
                nzOkText: "Ok",
                nzOnOk: () => { this.clearRetailCustomer(); },
                nzOnCancel: () => { this.radioValue = 1; },
            });
        }
        this.getClassAndProgram(this.invoice.id_customer);
    }
    /**
     * hàm này để gán chương trình tich diem hóa đơn và sản phẩm của khách hàng
     */
    getClassAndProgram(id_customer) {
        this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
        this.customer_class = this.customer_group.find(item => item._id == this.vhQuerySales.getlocalCustomer(id_customer).id_customer_class);
        if (this.customer_class && this.customer_class.id_earning_points_bill) {
            this.program_bill = this.list_earning_point_bills.find(item => item._id == this.customer_class.id_earning_points_bill);
        }
        if (this.customer_class && this.customer_class.id_earning_points_product) {
            this.program_product = this.list_earning_points_products.find(item => item._id == this.customer_class.id_earning_points_product);
        }
        if (!this.customer_class) {
            this.program_bill = null;
            this.program_product = null;
        }
        this.point_validity = this.vhQuerySales.getlocalCustomerPoints(this.invoice.id_customer);
        this.getDiscountMethodCustomer();
    }
    /**
     * kiểm tra khách hàng có chương trình tích điểm nào ko
     * @param id_customer
     * @example this.getDiscountMethodCustomer()
     */
    getDiscountMethodCustomer() {
        var _a;
        let check = this.vhQuerySales.getlocalDiscount_bill((_a = this.customer_class) === null || _a === void 0 ? void 0 : _a.id_discount_bill);
        if (check) {
            this.is_discount_bill = true;
            this.getDiscountBillOfCustomer();
            this.vhComponent.alertMessageDesktop('success', this.languageService.translate("This customer applies the discount calculation formula ") + check.name, 5000);
        }
        else {
            this.is_discount_bill = false;
            this.invoice.discount_bill = (0);
        }
    }
    /**
     * tính lại chiết khấu hóa đơn
     * @example this.getDiscountBillOfCustomer()
     */
    getDiscountBillOfCustomer() {
        this.discount_bill = this.vhQuerySales.getDiscount_bill_byCustomer(this.subTotal, this.invoice.id_customer) ? this.vhQuerySales.getDiscount_bill_byCustomer(this.subTotal, this.invoice.id_customer).discount : 0;
        this.invoice.discount_bill = (this.discount_bill);
        this.setTotal();
    }
    /**
     * clear dữ liệu khách lẻ trong bill trường hợp thay đổi thành khách thành viên
     * @example this.clearRetailCustomer()
     */
    clearRetailCustomer() {
        this.invoice.retail_address = ('');
        this.invoice.retail_name = ('');
        this.invoice.retail_phone = ('');
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
    } /**
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
        if (this.isGotPromotion)
            this.getPromotions();
    }
    /**
     * bắt sk thay đổi thuế của bill
     * @param event
     */
    changeTax(event) {
        let tax = this.listTax.find(item => item._id == event);
        this.invoice.tax = (tax.value);
        this.setTaxValue();
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    /**
     * bắt sk thay đổi giảm giá của hóa đơn , gán lại giá trị giảm giá mới cho đơn
     * @example this.editDiscount()
     */
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
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    /**
     * bắt sk thay đổi giảm giá bill theo %
     * @param value % giảm
     * @example this.editPercentDiscount(10)
     */
    editPercentDiscount(value) {
        if (parseFloat(value) > 100)
            document.getElementById("percent-discount-price")['value'] = 0;
        else
            this.percent_discount_bill = value;
        this.invoice.discount = this.subTotal * (this.percent_discount_bill / 100);
        this.setTotal();
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    /**
     * mở modal thanh toán bằng điểm hoặc coupon
     * @example openModalOtherDiscount()
     */
    openModalOtherDiscount() {
        this.showModalOtherDiscount = true;
    }
    /**
     * bắt sk nhấn ok modal thanh toán bằng điểm hoặc coupon
     * @example handleOkOtherDiscount()
     */
    handleOkOtherDiscount() {
        if (this.invoice.payment < this.invoice.payment_points + this.invoice.payment_coupons)
            this.invoice.payment = (0);
        this.showModalOtherDiscount = false;
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    /**
     * tính lại giá trị thanh toán bằng tiền với số điểm sử dụng tương úng trong chương trình tích điểm
     * @param value điểm sử dụng
     * @example this.calculatePoint2Money(10)
     */
    calculatePoint2Money(value) {
        if (value <= this.point_validity) {
            this.value_discount_point = value;
            this.invoice.payment_points = ((value / this.customer_class.payment.points) * this.customer_class.payment.money);
            this.invoice.use_points = (value);
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vượt quá giới hạn điểm cho phép"));
        }
    }
    /**
     * kiểm tra mã coupon hợp lệ hay ko , tính số tiền thanh toán theo coupon tương ứng
     * @param code
     * @example getDiscountOfCoupon('KDJWOIHA')
     */
    getDiscountOfCoupon(code) {
        if (code)
            this.vhQuerySales.getCoupon_Code_Name_Release_byCode(code)
                .then((product_codes) => {
                if (product_codes && !this.product_codes.find(item => item.code == code)) {
                    switch (product_codes.status) {
                        case 1: {
                            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Phiếu này chưa được quy đổi"));
                            break;
                        }
                        case 3: {
                            if (new Date() < new Date(product_codes.date_expire)) {
                                this.product_codes.push(product_codes);
                                this.invoice.payment_coupons = (product_codes.value);
                                this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Sử dụng coupon thành công"));
                            }
                            else {
                                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Phiếu này đã hết hạn sử dụng"), 8000);
                            }
                            break;
                        }
                        case 4: {
                            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Phiếu này đã được sử dụng"), 8000);
                            break;
                        }
                    }
                }
                if (!product_codes)
                    this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Không tìm thấy phiếu này"), 8000);
                setTimeout(() => {
                    document.getElementById('coupon').getElementsByTagName("input")[0].value = '';
                }, 200);
            });
    }
    /**
     * xóa coupon đã thêm, tính lại tiền thanh toán bằng coupon
     * @param item
     * @example this.onCloseProductCode(coupon_selected)
     */
    onCloseProductCode(item) {
        this.product_codes.splice(this.product_codes.findIndex(i => i._id == item._id), 1);
        this.invoice.payment_coupons = (-item.value);
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
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    /**
     * mở modal chỉnh sửa thanh toán của bill
     * @example this.showModalEditTotalPay()
     */
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
    /**
     * trả về tổng tiền
     * @returns number
     * @example let total = this.getTotalATax()
     */
    getTotalATax() {
        return this.invoice.total + this.taxValue;
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
     * xử lý sk nhấn nút thanh toán hoặc lưu tạm
     * @param bill_type
     * @param print biến cờ để check in hay ko
     * @example this.payInvoice(1)
     */
    payInvoice(bill_type = 16, print) {
        if (this.vhAuth.checkMyPermission("warranty_enable_payment") || bill_type == 16) {
            if (bill_type == 16) {
                this.invoice.payment_coupons = 0;
                this.invoice.payment_points = (0);
                this.invoice.use_points = (0);
            }
            if (this.getTotalEarningPoint() && bill_type != 16) {
                let earned_points = this.getTotalEarningPoint() - this.value_discount_point;
                this.vhQuerySales.updateCustomer_byEarnedPoints(this.invoice.id_customer, earned_points);
                this.invoice.earning_points_bill = (this.getTotalEarningPoint());
            }
            if (this.warrantyProd.length == 1 && !this.warrantyProd[0].content) {
                this.vhComponent.showToast(2000, this.languageService.translate("Please add a product warranty"), "alert-toast");
            }
            else {
                this.vhComponent.alertConfirm(bill_type == 16 ? `${this.languageService.translate("Save")}?` : `${this.languageService.translate("Pay")}?`, "", "", "OK", this.languageService.translate("Cancel")).then(() => {
                    if (this.save_enable) {
                        this.save_enable = false;
                        this.vhComponent.showLoading("", "transparent-loading").then(() => {
                            this.createOrUpdate(bill_type).then(bill => {
                                this.save_enable = true;
                                this.vhComponent.hideLoading(0).then(() => {
                                    if (bill == "create")
                                        this.vhComponent.showToast(2000, `${this.languageService.translate("Warranty invoice")} ${this.invoice.bill_code} ${this.languageService.translate("has been created successfully")}`, "success-toast");
                                    else
                                        this.vhComponent.showToast(2000, `${this.languageService.translate("Warranty invoice")} ${this.invoice.bill_code} ${this.languageService.translate("has been updated successfully")}`, "success-toast");
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
        return new Promise(resolve => {
            this.vhQuerySales.createBill_Billdetail(this.getCreateUpdateInvoice(bill_type), this.getCreateUpdateInvoiceDetail()).then((res) => {
                this.invoice._id = (res._id);
                this.invoice.bill_code = (res.bill_code);
                this.createWarranty(this.getCreateWarranty()).then(() => resolve('create'));
            });
        });
    }
    ///////////////////////////////////////////XỬ LÝ WARRANTY///////////////////////////////////////
    /**
     * tạo sản phẩm bảo hành lên DB
     * @param bill_type
     * @returns Promise<any[]>
     * @example  this.createWarranty([<array_warranty_product>]).then(() =>
     */
    createWarranty(array) {
        const promiseAddWarranty = [];
        for (let i = 0; i < array.length; i++) {
            promiseAddWarranty.push(this.vhQuerySales.addWarranty(array[i]));
        }
        return Promise.all(promiseAddWarranty);
    }
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
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_warranty_warranty_k57_col3_warranty_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__.WarrantyK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_warranty_warranty_k80_col3_warranty_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__.WarrantyK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_warranty_warranty_k80_col4_warranty_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.WarrantyK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_warranty_warranty_a5_warranty_a5_component__WEBPACK_IMPORTED_MODULE_3__.WarrantyA5Component;
            case 'print_size_a4': return src_app_sales_components_print_warranty_warranty_a4_warranty_a4_component__WEBPACK_IMPORTED_MODULE_4__.WarrantyA4Component;
            default: return src_app_sales_components_print_warranty_warranty_a4_warranty_a4_component__WEBPACK_IMPORTED_MODULE_4__.WarrantyA4Component;
        }
    }
    /**
     * trờ về trang danh sách hóa đơn sau khi đã thanh toán xong
     * @example this.handle(true)
     */
    handle() {
        this.isExit = true;
        this.router.navigate(['/sales/dashboard/manage/warranty/invoices'], { state: this.dataRestore });
    }
    /**
     * kiểm tra dữ liệu thông tin máy in và mở component in
     * @example this.handlePrint()
     */
    handlePrint() {
        this.checkPrint().then((printer) => {
            if (printer)
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice: this.invoice, invoice_detail: this.invoiceDetail, warrantyProd: this.warrantyProd, warrantyNote: this.warrantyNote }, false, false, `modal-print-${printer['_id']}`).then((modal) => {
                    modal.onWillDismiss().then(() => this.handle());
                });
        }, (err) => this.vhComponent.alertMessage(this.languageService.translate("Function"), "", this.languageService.translate("Please turn on the printer function"), "OK")
            .then(() => this.handle()));
    }
    /**
    * mở modal xem thông tin khách hàng
    * @example this.openInfoCustomer()
    */
    openInfoCustomer() {
        if (this.invoice.id_customer != 'id_retail') {
            this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
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
     * mở drawer chọn sản phẩm bảo hành
     * @example this.openSearchProductListWarranty()
     */
    openSearchProductListWarranty() {
        this.searchProductListWarranty = !this.searchProductListWarranty;
    }
    /**
     * bắt sk đóng drawer chọn sản phẩm bảo hành
     * @param event sản phẩm trả về nếu có
     * @example this.closeSearchProductListWarranty(null)
     */
    closeSearchProductListWarranty(event) {
        if (event) {
            this.addWarrantyProd();
            this.warrantyProd[0].content = event.name;
        }
        this.searchProductListWarranty = false;
    }
    /**
     * bắt sk thay đổi tên sp bảo hành
     * @param index
     * @param item
     * @example this.editWarrantyProd(1,)
     */
    editWarrantyProd(index, item) {
        if (this.warrantyProd.length > 1 && item.content == '')
            this.removeWarrantyProd(index, item);
    }
    editWarrantyNote(index, item) {
        if (this.warrantyNote.length > 1 && item.content == '')
            this.removeWarrantyNote(index, item);
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
     * bắt sk đóng drawer thêm khách hàng
     * @param result nhận về từ output
     * @example this.closeAddCustomer('FDNIWUHDWUDHUWYDG')
     */
    closeAddCustomer(result) {
        if (this.radioValue == 1) {
            if (result) {
                this.invoice.retail_name = (result.retail_name);
                this.invoice.retail_phone = (result.retail_phone);
                this.invoice.retail_address = (result.retail_address);
            }
            this.showDrawerAddRetail = false;
        }
        else {
            this.showDrawerAddCusomer = false;
            if (result)
                this.invoice.id_customer = (result);
        }
    }
    /**
     * bắt sk nhấn nút ok chọn quà của promotion type = 7, gán các sp được chọn trong CTKM vào bill_detail
     * @example this.handleAddGiftType7()
     */
    handleAddGiftType7() {
        this.showProductGiftType7 = false;
        if (!this.gotten_gift_type7)
            for (let i in this.product_gift_type7) {
                // this.product_gift_type7[i].products_gift = this.product_gift_type7[i].products_gift.filter(item => item.choose).map(e => { return { ...e } })
                if (this.product_gift_type7[i].products_gift.length)
                    this.invoiceDetail.push(this.product_gift_type7[i]);
            }
        this.gotten_gift_type7 = true;
    }
    /**
    * hàm lấy quà
    */
    getPromotions() {
        this.gotten_gift_type7 = false;
        this.vhComponent.showLoading('')
            .then(() => {
            this.vhQuerySales.changeBillDetails_withPromotions(this.invoiceDetail, this.invoice.date).then((bill_details_display) => {
                this.handleChooseLotForPromotion(bill_details_display.bill_details_pmtype_0to6);
                this.handleChooseLotForPromotion(bill_details_display.bill_details_pmtype_7);
                this.bill_details_pmtype_7 = this.vhAlgorithm.sortNumberbyASC([...bill_details_display.bill_details_pmtype_7], 'total_bill_value');
                this.isGotPromotion = true;
                this.vhComponent.hideLoading(0);
                this.invoiceDetail = [...bill_details_display.bill_details_pmtype_0to6,];
                // if (bill_details_display.filter(item => item.products_gift).length) this.showProductGift = true;
                this.getEarningpointPromotion();
                // this.product_gift_type7 = [...bill_details_display.bill_details_pmtype_7]
                this.handlePromotionType7(this.bill_details_pmtype_7);
                this.setSubTotal();
            }, error => {
                this.vhComponent.hideLoading(0).then(() => {
                    this.vhComponent.showToast(5000, error, "alert-toast");
                });
            });
        });
    }
    /**
     * xử lý dữ liệu sản phẩm sau khi lấy quả của prmotion_type = 7
     * @param bill_details_pmtype_7
     */
    handlePromotionType7(bill_details_pmtype_7) {
        if (bill_details_pmtype_7.length)
            if (bill_details_pmtype_7.findLastIndex(e => e.total_bill_value <= this.getTotalATax()) != -1)
                this.product_gift_type7 = [bill_details_pmtype_7[bill_details_pmtype_7.findLastIndex(e => e.total_bill_value <= this.getTotalATax())]];
            else
                this.product_gift_type7 = [];
        else
            this.product_gift_type7 = [];
        // 
    }
    /**
     * xử lý chọn lô tự động cho sản phẩm chọn trong khuyến mãi
     * @param promotion array product promotion
     * @example this.handleChooseLotForPromotion([])
     */
    handleChooseLotForPromotion(promotion) {
        for (let i of promotion) {
            if (i.products_gift) {
                for (let product of i.products_gift) {
                    if (product.lots && product.lots.length) {
                        let min_date_exp = this.vhAlgorithm.sortDatebyASC(product.lots, 'date_exp');
                        product['id_lotproduct'] = min_date_exp[0]._id;
                        product['lot_number'] = min_date_exp[0].lot_number;
                    }
                    if (product.combos) {
                        product.combos.forEach(element => {
                            if (element.lots && element.lots.length) {
                                let min_date_exp = this.vhAlgorithm.sortDatebyASC(element.lots, 'date_exp');
                                element['id_lotproduct'] = min_date_exp[0]._id;
                                element['lot_number'] = min_date_exp[0].lot_number;
                            }
                        });
                    }
                }
            }
        }
    }
    /**
     * hàm này để get SubTotal mới của mảng đã lấy quà
     * đồng thời gán điểm tích lũy sản phẩm mới của các sản phẩm trong khuyến mãi nếu có
     */
    getEarningpointPromotion() {
        for (let i of this.invoiceDetail) {
            if (i.products_gift) {
                for (let product of i.products_gift) {
                    product.earning_points_product = this.getTotalEarningPointProduct(i, true);
                }
            }
            if (i.products) {
                for (let product of i.products) {
                    product.earning_points_product = this.getTotalEarningPointProduct(i, true);
                }
            }
            if (!i.id_promotion)
                i.earning_points_product = this.getTotalEarningPointProduct(i, null);
        }
        this.setSubTotal();
    }
    /**
     * hàm này để kiểm tra disable sản phẩm tặng hay ko
     * @param data phần tử trong mảng đã lấy quà
     * @returns
     */
    checkDisableChooseProductGift(data) {
        if (data.products_gift.filter(item => item.choose).length == data.promotions_maximum)
            return true;
        else
            return false;
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
        if (this.warning_lot_expried) {
            let lot_select = this.list_search_lot.find(e => e._id == this.tempDetail.id_lotproduct);
            if (new Date().getTime() >= new Date(lot_select.date_exp).getTime()) {
                this.nzModalService.confirm({
                    nzTitle: this.languageService.translate("Lô này đã hết hạn! Tiếp tục bán sản phẩm này?"),
                    nzOnOk: () => {
                        this.show_modal_select_lots = false;
                        this.tempDetail.lots = this.list_search_lot;
                        if (!this.tempDetail.id_product)
                            this.closeSearchProductList(this.tempDetail);
                    },
                    nzOnCancel: () => {
                        // this.show_modal_select_lots = false;
                        // this.tempDetail.lots = this.list_search_lot;
                    }
                });
            }
            else {
                this.show_modal_select_lots = false;
                this.tempDetail.lots = this.list_search_lot;
                if (!this.tempDetail.id_product)
                    this.closeSearchProductList(this.tempDetail);
            }
        }
        else {
            this.show_modal_select_lots = false;
            this.tempDetail.lots = this.list_search_lot;
            if (!this.tempDetail.id_product)
                this.closeSearchProductList(this.tempDetail);
        }
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
     * hàm get điểm tích lũy theo hóa đơn
     * 1. get hạng khách hàng
     * 2. từ hạng khách hàng get tích điểm theo bill
     * 3. check các điều kiện của chương trình
     * a check sản phẩm khuyến mãi include_promotion_product
     * b  check giảm giá/ chiết khấu include_discount
     * c check thanh toán = điểm thưởng include_paid_points
     * d check phí  include_fee
     * e check thuế include_tax
     * @returns 0 | number
     */
    getEarningBill() {
        if (this.program_bill && this.subTotal > this.program_bill.bill_total_minimum) {
            let subTotal = this.subTotal;
            if (!this.program_bill.include_promotion_product) { // ko tích điểm sp có km =>  tính lại subTotal
                subTotal = this.getSubTotalNotPromotion();
                if (this.program_bill.include_discount)
                    subTotal = subTotal - this.invoice.discount - this.invoice.discount_bill;
                if (this.program_bill.include_paid_points && this.invoice.payment_points)
                    subTotal = subTotal - this.invoice.payment_points;
                if (this.program_bill.include_fee)
                    subTotal += this.invoice.fee;
                if (this.program_bill.include_tax)
                    subTotal += subTotal * (this.invoice.tax / 100);
                return ((subTotal - subTotal % this.program_bill.exchange.money) / this.program_bill.exchange.money) * this.program_bill.exchange.points;
            }
            else {
                subTotal = this.subTotal;
                if (this.program_bill.include_discount)
                    subTotal = subTotal - this.invoice.discount - this.invoice.discount_bill;
                if (this.program_bill.include_paid_points && this.invoice.payment_points)
                    subTotal = subTotal - this.invoice.payment_points;
                if (this.program_bill.include_fee)
                    subTotal += this.invoice.fee;
                if (this.program_bill.include_tax)
                    subTotal += subTotal * (this.invoice.tax / 100);
                return ((subTotal - subTotal % this.program_bill.exchange.money) / this.program_bill.exchange.money) * this.program_bill.exchange.points;
            }
        }
        else
            return 0;
    }
    /**
    * hàm này trả về tổng tiền của sản phẩm ko có chương trình khuyến mãi
    * return : number
    */
    getSubTotalNotPromotion() {
        return this.invoiceDetail.filter(item => item.price_origin == item.price).reduce((prev, next) => prev + next.quantity * next.price, 0);
    }
    /**
     * hàm này trả về tổng tiền của sản phẩm  ko có chương trình khuyến mãi thuộc chương trình tích điểm sản phẩm
     * return : number
     */
    getSubTotalNotPromotionOFProduct(products_of_program_earnig_product) {
        return this.invoiceDetail
            .filter(item => item.price_origin == item.price && products_of_program_earnig_product.find(i => i == item.id_product))
            .reduce((prev, next) => prev + next.quantity * next.price, 0);
    }
    /**
     * hàm này trả về tổng điểm được tích của tất cả sản phẩm
     * @returns 0 | number
     */
    getEarningProduct(products) {
        if (this.program_product) {
            let subTotal = 0;
            if (!this.program_product.include_promotion_product) { // tích điểm sp có km =>  tính lại subTotal
                subTotal = this.getSubTotalNotPromotionOFProduct(this.program_product.products);
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
            else {
                subTotal = products.filter(item => item.price_origin == item.price && this.program_product.products.find(i => i == item.id_product)).reduce((prev, next) => prev + next.quantity * next.price, 0);
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
        }
        else
            return 0;
    }
    /**
     * hàm này trả về tổng điểm được tích của đơn và sản phẩm
     * @returns 0 | number
     */
    getTotalEarningPoint() {
        this.earning_point = this.getEarningProduct(this.invoiceDetail) + this.getEarningBill();
        return this.earning_point;
    }
    /**
     * hàm này trả về điểm được tích của sản phẩm được thêm
     * @param product sản phẩm được thêm
     * @returns 0 | number
     */
    getTotalEarningPointProduct(product, promotion) {
        if (this.program_product) {
            let subTotal = 0;
            if (!this.program_product.include_promotion_product && promotion) { // tích điểm sp có km =>  tính lại subTotal
                subTotal = this.program_product.products.find(i => i == product._id) ? product.price : 0;
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
            else {
                subTotal = this.program_product.products.find(i => i == product._id) ? product.price : 0;
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
        }
        else
            return 0;
    }
    /**
     * bắt sk nhấn nút ok của modal chọn lô cho combo
     * @example this.handleChooseLotCombo()
     */
    handleChooseLotCombo() {
        if (this.tempDetail.combos.filter(item => item.lots && !item.id_lotproduct).length)
            this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Vui lòng chọn lô cho sản phẩm thuộc combo này"));
        else {
            this.show_modal_select_lots_combo = false;
            this.closeSearchProductList(this.tempDetail);
        }
    }
    /******************************Xu ly warranty note *******************************/
    /** Thêm sản phẩm bảo hành */
    addWarrantyProd() {
        const add = () => {
            let item = { content: '', quantity: 1, type: 1, id_bill: this.invoice._id };
            if (this.invoice._id)
                item['id_bill'] = this.invoice._id;
            this.warrantyProd.unshift(item);
        };
        if (this.warrantyProd.length) {
            if (this.warrantyProd[0].content)
                add();
        }
        else
            add();
    }
    /** xóa sản phẩm bảo hành */
    removeWarrantyProd(index, item) {
        if (index == 0) {
            if (this.warrantyProd.length > 1)
                this.warrantyProd.splice(index, 1);
            else if (this.warrantyProd[index].content.length)
                this.warrantyProd[0].content = '';
        }
        else
            this.warrantyProd.splice(index, 1);
        if (item._id)
            this.warrantyDel.push(item);
    }
    /** Thêm ghi chú bảo hành */
    addWarrantyNote() {
        const add = () => {
            let item = { content: '', type: 2, id_bill: this.invoice._id };
            if (this.invoice._id)
                item['id_bill'] = this.invoice._id;
            this.warrantyNote.unshift(item);
        };
        if (this.warrantyNote.length) {
            if (this.warrantyNote[0].content)
                add();
        }
        else
            add();
    }
    /** Xóa ghi chú bảo hành */
    removeWarrantyNote(index, item) {
        if (index == 0) {
            if (this.warrantyNote.length > 1)
                this.warrantyNote.splice(index, 1);
            else if (this.warrantyNote[index].content.length)
                this.warrantyNote[0].content = '';
        }
        else
            this.warrantyNote.splice(index, 1);
        if (item._id)
            this.warrantyDel.push(item);
    }
    /** Lấy toàn bộ sản phẩm và ghi chú bảo hành */
    getWarranty() {
        return this.warrantyNote.concat(this.warrantyProd).filter(item => {
            if (item.content) {
                item.id_bill = this.invoice._id;
                return true;
            }
            else
                return false;
        });
    }
    /** Lấy toàn bộ các sản phẩm và ghi chú bảo hành */
    getCreateWarranty() {
        return this.warrantyNote.concat(this.warrantyProd).filter(item => {
            if (!item.id_bill)
                item.id_bill = this.invoice._id;
            if (item.content && !item._id)
                return true;
            else
                return false;
        });
    }
    /******************************Xu ly invoice detail *******************************/
    /** Thêm sản phẩm vào bill detail */
    addInvoiceDetail(value, new_price) {
        if (value['id_subproduct']) {
            let index = this.invoiceDetail.findIndex(detail => detail['id_subproduct'] == value['id_subproduct'] && detail['ratio'] == value['ratio']);
            if (index != -1) {
                if (this.invoiceDetail[index]['quantity'] < 9999999999)
                    this.invoiceDetail[index]['quantity'] += 1;
            }
            else {
                this.addBill_Detail(value, new_price);
            }
        }
        else {
            let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id'] && detail['ratio'] == value['ratio']);
            if (index != -1) {
                if (this.invoiceDetail[index]['quantity'] < 9999999999)
                    this.invoiceDetail[index]['quantity'] += 1;
            }
            else {
                this.addBill_Detail(value, new_price);
            }
        }
        this.setSubTotal();
    }
    /**
     * xử lý các trường của sp được chọn và thêm vào mảng local
     * @param value
     * @param new_price
     * @example  this.addBill_Detail(product_selected)
     */
    addBill_Detail(value, new_price) {
        let detail = {
            name: value.name,
            id_product: value._id,
            quantity: 1,
            ptype: value.type,
            unit: value.unit,
            units: value.units ? value.units : [],
            ratio: value.ratio ? value.ratio : 1,
            price: new_price != null ? new_price : value.price,
            price_origin: value.price,
            earning_points_product: value.earning_points_product ? value.earning_points_product : 0,
        };
        if (value.type == 5) {
            detail['cbtype'] = 5;
            detail['combos'] = [...value.combos.map(item => {
                    let product = {
                        id_product: item.id_product,
                        name: item.name,
                        ptype: item.type,
                        price: item.price,
                        quantity: item.quantity,
                        unit: item.unit,
                        units: item.units,
                        ratio: item.ratio ? item.ratio : 1
                    };
                    if (item.lots)
                        product['lots'] = item.lots;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item.id_subproduct)
                        product['id_subproduct'] = item.id_subproduct;
                    return product;
                })];
        }
        if (value.lot_number)
            detail['lot_number'] = value.lot_number;
        if (value.lots)
            detail['lots'] = value.lots;
        if (value.id_lotproduct)
            detail['id_lotproduct'] = value.id_lotproduct;
        if (value.id_subproduct)
            detail['id_subproduct'] = value.id_subproduct;
        this.invoiceDetail.unshift(detail);
    }
    /** Thêm sản phẩm vào bill detail */
    addInvoiceDetailMutilLine(value, new_price) {
        let detail = {
            name: value.name,
            id_product: value._id,
            quantity: 1,
            ptype: value.type,
            unit: value.unit,
            price: new_price != null ? new_price : value.price,
            price_origin: value.price,
            units: value.units,
            ratio: value.ratio ? value.ratio : 1,
        };
        if (value.type == 5) {
            detail['subComboName'] = value.subComboName;
            detail['combos'] = [...value.combos.map(item => {
                    let product = {
                        id_product: item.id_product, name: item.name, ptype: item.type,
                        price: item.price, quantity: item.quantity,
                        units: item.units,
                        unit: item.unit, ratio: item.ratio ? item.ratio : 1
                    };
                    if (item.lots)
                        product['lots'] = item.lots;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item.id_subproduct)
                        product['id_subproduct'] = item.id_subproduct;
                    return product;
                })];
        }
        if (value.lot_number)
            detail['lot_number'] = value.lot_number;
        if (value.lots)
            detail['lots'] = value.lots;
        if (value.id_lotproduct)
            detail['id_lotproduct'] = value.id_lotproduct;
        if (value.id_subproduct)
            detail['id_subproduct'] = value.id_subproduct;
        this.invoiceDetail.unshift(detail);
        this.setSubTotal();
    }
    /** Xóa sản phẩm khỏi bill detail */
    removeInvoiceDetail(id) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == id);
        if (index != -1) {
            this.invoiceDetail.splice(index, 1);
            this.setSubTotal();
        }
    }
    /**
     * tính lại cộng tiền của bill khi có sự thay đổi (thêm xóa sửa bill_detail, đổi giá bán, khuyến mãi, phí ,thuế ,...)
     * @example this.setSubTotal()
     */
    setSubTotal() {
        // this.subTotal = this.invoiceDetail.reduce((prev: number, next) => prev + next.quantity * next.price, 0)
        let subTotal = 0;
        for (let i of this.invoiceDetail) {
            let total_product_gift = 0;
            let total_products = 0;
            if (i.products_gift) {
                total_product_gift = i.products_gift.filter(item => item.choose).reduce((prev, next) => prev + next.quantity * next.price, 0);
            }
            if (i.products) {
                total_products = i.products.reduce((prev, next) => prev + next.quantity * next.price, 0);
            }
            subTotal += total_products + total_product_gift + (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
        this.setTotal();
    }
    /**
     * tính lại tổng tiền của bill để lưu trường total
     * @example this.setTotal();
     */
    setTotal() {
        this.invoice.total = this.subTotal - this.invoice.discount - this.invoice.discount_bill - (this.invoice.payment_coupons + this.invoice.payment_points) + this.invoice.fee > 0 ? this.subTotal - this.invoice.discount - this.invoice.discount_bill - (this.invoice.payment_coupons + this.invoice.payment_points) + this.invoice.fee : 0;
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
    /** Lấy bill dùng cho database */
    getCreateUpdateInvoice(bill_type = null) {
        if (bill_type)
            this.invoice.bill_type = (bill_type);
        return this.invoice;
    }
    /** Lấy tất cả bill detail dùng cho database */
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map(item => {
            if (!item.pmtype) {
                let detail = {
                    id_product: item.id_product,
                    ptype: item.ptype,
                    price: item.price,
                    quantity: item.quantity,
                    earning_points_product: item.earning_points_product,
                    ratio: item.ratio,
                };
                if (item.id_lotproduct)
                    detail['id_lotproduct'] = item.id_lotproduct;
                if (item.id_subproduct)
                    detail['id_subproduct'] = item.id_subproduct;
                if (item.price < item.price_origin)
                    detail['price_origin'] = item.price_origin;
                if (item.price == item.price_origin)
                    detail['price_origin'] = item.price;
                if (item.ptype == 5) {
                    detail['combos'] = item.combos.map(combo => {
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
                return detail;
            }
            else {
                let detail = {
                    id_promotion: item.id_promotion,
                    pmtype: item.pmtype,
                };
                if (item.products_gift) {
                    if (item.products_gift.filter(ele => ele.choose).length) {
                        detail['products_gift'] = item.products_gift.filter(ele => ele.choose).map(e => {
                            let prod = {
                                id_product: e.id_product,
                                price: e.price,
                                price_origin: e.price_origin,
                                quantity: e.quantity,
                                ptype: e.ptype,
                                earning_points_product: e.earning_points_product,
                                ratio: e.ratio
                            };
                            if (e.ptype == 5) {
                                prod['combos'] = e.combos.map(combo => {
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
                            if (e.id_lotproduct)
                                prod['id_lotproduct'] = e.id_lotproduct;
                            if (e.id_subproduct)
                                prod['id_subproduct'] = e.id_subproduct;
                            return prod;
                        });
                        return detail;
                    }
                }
                else {
                    detail['products'] = item.products.map(e => {
                        let prod = {
                            id_product: e.id_product,
                            price: e.price,
                            price_origin: e.price_origin,
                            quantity: e.quantity,
                            ptype: e.ptype,
                            id_category: e.id_category,
                            earning_points_product: e.earning_points_product,
                            ratio: e.ratio
                        };
                        if (e.ptype == 5) {
                            prod['combos'] = e.combos.map(combo => {
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
                        if (e.id_lotproduct)
                            prod['id_lotproduct'] = e.id_lotproduct;
                        if (e.id_subproduct)
                            prod['id_subproduct'] = e.id_subproduct;
                        return prod;
                    });
                    return detail;
                }
            }
        }).filter(item => item);
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_20__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_20__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_20__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalService)); };
AddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["bill-type15-add"]], decls: 175, vars: 133, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "18", 1, "title", "sales-cart-header-title"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 3, "disabled", "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["id", "waranty-invoice-prodAndnote-invoiceDetail", "nz-col", "", "nzSpan", "24", 1, "waranty-invoice-prodAndnote-invoiceDetail", "hideScrollbar"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "search-product-warrany"], ["slot", "end", "name", "search-outline", 2, "color", "var(--ion-color-vh-green)", "margin-right", "10px", "font-size", "1.3rem", "text-align", "end", "cursor", "pointer", 3, "click"], ["slot", "end", "src", "assets/icon/add.svg", 2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem", "text-align", "end", "cursor", "pointer", 3, "click"], ["nz-col", "", "nzSpan", "24"], [1, "hideScrollbar", "waranty-invoice-prod-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-best-selling"], ["nz-row", "", 1, "waranty-invoice-quote"], ["nz-col", "", "nzSpan", "8", 1, "waranty-invoice-quote-header"], ["nz-col", "", "nzSpan", "16", 1, "waranty-invoice-quote-header", 2, "text-align", "end"], ["nz-button", "", "nzType", "primary", 2, "margin-right", "8px", 3, "click"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 2, "margin-right", "8px", 3, "click"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 2, "font-size", "0.9rem", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], ["id", "waranty-invoice-quote-invoiceDetail", 1, "hideScrollbar", "waranty-invoice-quote-invoiceDetail"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], [1, "sales-bills-staff-name"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar", 2, "overflow", "visible"], [1, "sales-bills-customer-title"], [2, "color", "var(--ion-color-vh-white)", "padding-right", "5px", 3, "src", "click"], ["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], [4, "ngIf"], ["nz-col", "", "nzSpan", "24", "style", "display: flex; justify-content: space-between;margin: 8px 0;", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 2, "display", "flex", "justify-content", "space-between"], [2, "cursor", "pointer", "color", "var(--ion-color-vh-green)", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["class", "sales-bills-content-discount", "style", "display: flex;justify-content: space-between;align-items: center;", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-total", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-fee", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-tax", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["style", "width: 16px;margin-left:10px", "src", "assets/icon/Iconfeather-edit.svg", 3, "click", 4, "ngIf"], ["class", "sales-bills-content-rest", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], [3, "payment_type", "id_wallet", "id_customer", "closeAndGetValuePayment"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], [3, "searchProductListWarranty", "closeSearchProductListWarranty", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditPay", ""], ["nzWidth", "50vw", "nzCancelText", "", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["nzWidth", "70vw", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice2", ""], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "showModalChangePriceType", "default_price_type", "changePriceType", 4, "ngIf"], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer", 4, "ngIf"], [3, "showDrawerAddCusomer", "closeAddCustomer", 4, "ngIf"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer", 4, "ngIf"], [1, "invoiceDetail-item"], ["nz-col", "", "nzSpan", "2", 1, "center-col", 3, "click"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "18", 1, "center-col"], [1, "max-width-two-line", 2, "width", "100%"], ["nz-input", "", 1, "nz-no-border", 3, "ngModel", "placeholder", "ngModelChange", "blur"], ["nz-col", "", "nzSpan", "4", 4, "ngIf"], ["nz-col", "", "nzSpan", "4"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["nz-row", "", 4, "ngIf"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottomLeft", "nz-col", "", "nzSpan", "1", 3, "nzPopconfirmTitle", "nzOnConfirm"], ["nz-col", "", "nzSpan", "23"], [2, "font-weight", "bold", "margin-bottom", "0"], ["nz-col", "", "nzSpan", "1"], ["nz-col", "", "nzSpan", "8"], [2, "margin-bottom", "0"], ["nz-col", "", "nzSpan", "3", 2, "text-align", "center"], ["nz-col", "", "nzSpan", "4", 2, "text-align", "center"], ["nz-col", "", "nzSpan", "4", 1, "invoiceDetail-item-quantity", "text-end", 3, "click"], [1, "max-width-two-line", 2, "border-bottom", "1px var(--ion-color-vh-gray) solid", "margin-left", "16px"], ["style", "margin-left:5px;font-size: 0.8rem;", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", 2, "text-align", "right"], [1, "max-width-two-line"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["style", "font-size: 0.75rem; color: var(--ion-color-vh-black); font-weight: normal;", 4, "ngFor", "ngForOf"], [2, "font-size", "0.75rem", "color", "var(--ion-color-vh-black)", "font-weight", "normal"], [2, "margin-left", "5px", "font-size", "0.8rem"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline", 2, "cursor", "pointer", 3, "click"], ["nz-col", "", "nzSpan", "3"], [2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["id", "quantity", 3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue"], [3, "id_customer", "closeAndReceiveCustomer"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "cursor", "pointer", 3, "ngClass", "click"], ["nz-col", "", "nzSpan", "24", 2, "display", "flex", "justify-content", "space-between", "margin", "8px 0"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "width", "auto"], ["id", "percent-discount-price", "type", "number", "max", "100", "min", "0", "step", "1", "maxlength", "3", "nz-input", "", 1, "border_bottom", 2, "width", "50px", 3, "ngModel", "blur"], ["percentDiscount", ""], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "border_bottom", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "border_bottom", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax"], ["nzBorderless", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], ["nz-col", "", "nzSpan", "7", 2, "text-align", "end"], ["nzBorderless", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "not-found"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline", 2, "font-size", "1rem", "margin-left", "8px", "cursor", "pointer", "color", "var(--ion-color-vh-green)", 3, "click"], ["src", "assets/icon/Iconfeather-edit.svg", 2, "width", "16px", "margin-left", "10px", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], [3, "searchProductListWarranty", "closeSearchProductListWarranty"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "8", 1, "center-col"], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "edit-pay", 3, "value"], ["nz-row", "", 1, "center-all-content"], ["nz-col", "", "nzSpan", "6"], ["nz-col", "", "nzSpan", "12", "id", "coupon", 2, "display", "flex"], ["nz-input", "", 3, "placeholder", "keyup.enter"], ["coupon", ""], ["nz-button", "", "nzType", "primary", 2, "margin-left", "8px", 3, "click"], ["nz-col", "", "nzSpan", "6", 1, "text-end"], ["nz-col", "", "nzSpan", "18"], ["nzMode", "closeable", 3, "nzColor", "nzOnClose", 4, "ngFor", "ngForOf"], ["nz-row", "", 1, "mt-8", "beetween-all-content"], ["nzMode", "closeable", 3, "nzColor", "nzOnClose"], ["nz-row", "", 1, "center-all-content", "mt-8"], ["nz-col", "", "nzSpan", "12"], [2, "width", "100%", 3, "ngModel", "nzPlaceHolder", "nzMin", "nzMax", "nzStep", "ngModelChange", "keyup"], ["point", ""], ["nz-row", "", 1, "mt-8"], ["nz-col", "", "nzSpan", "14"], ["nz-col", "", "nzSpan", "10", 1, "text-end"], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["colspan", "5"], [3, "ngModel", "nzDisabled", "ngModelChange"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], [2, "width", "100%", "padding", "8px 0", 3, "ngModel", "ngModelChange"], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], ["nz-col", "", "nzSpan", "6", 1, "ion-text-end"], [2, "color", "var(--ion-color-vh-orange)"], [2, "text-align", "center"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice3", ""], ["nzWidth", "30%"], ["nzWidth", "10%"], ["nzWidth", "20%", "nzAlign", "right"], ["nzShowSearch", "", 2, "width", "100%", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], ["nzAlign", "right"], [3, "showModalChangePriceType", "default_price_type", "changePriceType"], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer"], [3, "showDrawerAddCusomer", "closeAddCustomer"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_button_click_16_listener() { return ctx.payInvoice(16); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_ion_icon_click_28_listener() { return ctx.openSearchProductListWarranty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_ion_icon_click_29_listener() { return ctx.addWarrantyProd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](32, AddComponent_div_32_Template, 9, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_ion_icon_click_39_listener() { return ctx.addWarrantyNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](42, AddComponent_div_42_Template, 7, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](50, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_button_click_50_listener() { return ctx.getPromotions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](51, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_button_click_54_listener() { return ctx.showModalChangePriceType = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](57, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_button_click_57_listener() { return ctx.openSearchProductList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](58, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](63, AddComponent_div_63_Template, 12, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](71, "app-staff", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveEmployee", function AddComponent_Template_app_staff_closeAndReceiveEmployee_71_listener($event) { return ctx.closeAndReceiveReceptionist($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](76, "app-staff", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveEmployee", function AddComponent_Template_app_staff_closeAndReceiveEmployee_76_listener($event) { return ctx.closeAndReceiveTechnician($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](81, "nz-date-picker", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_81_listener($event) { return ctx.pickerTime = $event; })("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_81_listener($event) { return ctx.setPickerTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](87, "ion-icon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_ion_icon_click_87_listener() { return ctx.openDrawerAddCustomerOrRetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](88, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](89, "nz-radio-group", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_radio_group_ngModelChange_89_listener($event) { return ctx.radioValue = $event; })("ngModelChange", function AddComponent_Template_nz_radio_group_ngModelChange_89_listener($event) { return ctx.changeCustomerType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](90, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](93, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](96, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](99, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](100, AddComponent_ng_container_100_Template, 2, 4, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](101, AddComponent_ng_container_101_Template, 3, 2, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](102, AddComponent_ng_container_102_Template, 3, 2, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](103, AddComponent_div_103_Template, 11, 8, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](104, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](105, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](109, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_span_click_109_listener() { return ctx.openModalOtherDiscount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](110, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](113, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](119, AddComponent_ng_container_119_Template, 11, 8, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](120, AddComponent_div_120_Template, 6, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](121, AddComponent_div_121_Template, 6, 4, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](122, AddComponent_div_122_Template, 6, 4, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](123, AddComponent_div_123_Template, 5, 4, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](124, AddComponent_div_124_Template, 9, 6, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](125, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](126, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](131, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](132, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](136, AddComponent_ng_container_136_Template, 2, 0, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](137, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](139, AddComponent_img_139_Template, 1, 0, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](140, AddComponent_div_140_Template, 6, 4, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](141, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](142, "app-tax", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndGetValuePayment", function AddComponent_Template_app_tax_closeAndGetValuePayment_142_listener($event) { return ctx.closeAndGetValuePayment($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](143, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](144, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_button_click_144_listener() { return ctx.payInvoice(15, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](146, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](147, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function AddComponent_Template_button_click_147_listener() { return ctx.payInvoice(15, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](149, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](150, AddComponent_app_search_product_150_Template, 1, 2, "app-search-product", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](151, AddComponent_app_search_product_warranty_invoice_151_Template, 1, 1, "app-search-product-warranty-invoice", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](152, AddComponent_nz_modal_152_Template, 5, 5, "nz-modal", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](153, "nz-modal", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_153_listener($event) { return ctx.edit_pay = $event; })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_153_listener() { return ctx.handleCancelEditPay(); })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_153_listener() { return ctx.handleEditPay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](155, AddComponent_ng_container_155_Template, 7, 4, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](156, AddComponent_ng_template_156_Template, 6, 6, "ng-template", null, 62, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](158, "nz-modal", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_158_listener($event) { return ctx.showModalOtherDiscount = $event; })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_158_listener() { return ctx.showModalOtherDiscount = false; })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_158_listener() { return ctx.handleOkOtherDiscount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](159, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](160, AddComponent_ng_container_160_Template, 25, 16, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](161, "nz-modal", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_161_listener($event) { return ctx.showProductGift = $event; })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_161_listener() { return ctx.showProductGift = false; })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_161_listener() { ctx.showProductGift = false; return ctx.getEarningpointPromotion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](162, AddComponent_ng_container_162_Template, 22, 20, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](163, "nz-modal", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_163_listener($event) { return ctx.showProductGiftType7 = $event; })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_163_listener() { return ctx.showProductGiftType7 = false; })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_163_listener() { ctx.showProductGiftType7 = false; return ctx.handleAddGiftType7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](164, AddComponent_ng_container_164_Template, 22, 20, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](165, "nz-modal", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_165_listener($event) { return ctx.show_modal_select_lots = $event; })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_165_listener() { return ctx.handleCancelChooseLot(); })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_165_listener() { return ctx.handleChooseLot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](166, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](167, AddComponent_ng_container_167_Template, 11, 7, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](168, AddComponent_ng_template_168_Template, 6, 7, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](170, AddComponent_nz_modal_170_Template, 5, 6, "nz-modal", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](171, AddComponent_app_change_price_type_171_Template, 1, 2, "app-change-price-type", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](172, AddComponent_app_customer_profile_172_Template, 1, 2, "app-customer-profile", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](173, AddComponent_app_add_customer_173_Template, 1, 1, "app-add-customer", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](174, AddComponent_app_retail_info_174_Template, 1, 4, "app-retail-info", 71);
    } if (rf & 2) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](157);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 79, "Back"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 81, "Create warranty invoice"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 83, "Create warranty invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.invoiceDetail.length)("disabled", !ctx.invoiceDetail.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 85, "Temporary"), " (F3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](26, 87, "Warranty, repair products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.warrantyProd);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](37, 89, "Note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.warrantyNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](48, 91, "Quote"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](53, 93, "Promotions"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](56, 95, "Choose selling price"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](60, 97, "Search (F4)"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.invoiceDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](70, 99, "Receptionist"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_employee", ctx.invoice.id_employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](75, 101, "Technician"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_employee", ctx.invoice.id_technician);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](80, 103, "Issued date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx.pickerTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](86, 105, "Customer information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", ctx.invoice.retail_name ? "assets/icon/eye.svg" : "assets/icon/add.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](92, 107, "Retail customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](95, 109, "Member"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](98, 111, "Search customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.radioValue == 1 && ctx.invoice.retail_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.radioValue == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.radioValue == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.radioValue == 2 && ctx.invoice.id_customer != "id_retail");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](108, 113, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](112, 115, "Add other payment"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](116, 117, "SubTotal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.subTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_discount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.discount_bill > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.invoice.payment_points);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.invoice.payment_coupons);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_tax"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](128, 119, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.getTotalATax()));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](135, 121, "Pay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.product_gift_type7.length && !ctx.gotten_gift_type7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.payment), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.invoice.payment_type != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_rest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("payment_type", ctx.invoice.payment_type)("id_wallet", ctx.invoice.id_wallet)("id_customer", ctx.invoice.id_customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.invoiceDetail.length || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](146, 123, "Pay & Print"), " (F2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.invoiceDetail.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](149, 125, "Pay"), " (F1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.searchProductList);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.searchProductListWarranty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](154, 127, "Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.edit_pay)("nzFooter", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](159, 129, "Other payment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.showModalOtherDiscount);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", "Ch\u1ECDn qu\u00E0 t\u1EB7ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.showProductGift);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", "Ch\u1ECDn qu\u00E0 t\u1EB7ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.showProductGiftType7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](166, 131, "Select lot number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzFooter", _r26)("nzVisible", ctx.show_modal_select_lots);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.show_modal_select_lots_combo);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showModalChangePriceType);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.visibleInfoCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showDrawerAddCusomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showDrawerAddRetail);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_25__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_27__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_30__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__.NzRadioComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _sale_desktop_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__.TaxComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalContentDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.DefaultValueAccessor, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_34__.NzInputNumberComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgSwitchDefault, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_35__.NzPopconfirmDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_36__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_36__.NzOptionComponent, _sale_desktop_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_10__.CustomerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgClass, _search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_11__.SearchCustomerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.MaxLengthValidator, _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_12__.SearchProductComponent, _search_search_product_warranty_invoice_search_product_warranty_invoice_component__WEBPACK_IMPORTED_MODULE_13__.SearchProductWarrantyInvoiceComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_37__.NzTagComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTbodyComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_39__.NzSwitchComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzCellAlignDirective, _sale_desktop_components_change_price_type_change_price_type_component__WEBPACK_IMPORTED_MODULE_14__.ChangePriceTypeComponent, _sale_desktop_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_15__.CustomerProfileComponent, _sale_desktop_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_16__.AddCustomerComponent, _sale_desktop_components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_17__.RetailInfoComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 13%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-price[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 0.9rem;\n  border-bottom: solid 1px #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .search-product-warrany[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .search-product-warrany[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .waranty-invoice-prod-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .waranty-invoice-prodAndnote-invoiceDetail[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  grid-column: 1/3;\n  overflow-y: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-header[_ngcontent-%COMP%] {\n  height: 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 20% 20% 50% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-green) !important;\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .deactive[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   nz-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   app-customer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-gray);\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n.beetween-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNFLGVBQUE7QUFFTjtBQUNFO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7QUFHTjtBQUZNOzs7O0VBS0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBR1I7QUFETTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR1I7QUFGUTtFQUNFLFdBQUE7QUFJVjtBQUhVO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUtaO0FBSFU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUtaO0FBRlE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUlWO0FBSFU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBS1o7QUFEVTtFQUNFLGNBQUE7QUFHWjtBQUFRO0VBQ0Usa0JBQUE7QUFFVjtBQUNNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUNVO0VBQ0Usa0JBQUE7QUFDWjtBQUFZO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUVkO0FBQ1U7RUFDRSxXQUFBO0FBQ1o7QUFDVTtFQUNFLGtCQUFBO0FBQ1o7QUFBWTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUVkO0FBRGM7RUFDRSxlQUFBO0FBR2hCO0FBQWM7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0FBRWhCO0FBSU07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBQUZSO0FBR1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFEVjtBQUVVO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURaO0FBRVk7RUFDRSxVQUFBO0FBQWQ7QUFHVTtFQUNFLGtCQUFBO0FBRFo7QUFJUTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZWO0FBR1U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBRFo7QUFFWTtFQUNFLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0FBQWQ7QUFHVTtFQUNFLGdDQUFBO0FBRFo7QUFHVTtFQUNFLGNBQUE7QUFEWjtBQUlZO0VBQ0UsaUJBQUE7QUFGZDtBQUtVO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFIWjtBQUtVO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBSFo7QUFNUTtFQUVFLGFBQUE7RUFDQSw4QkFBQTtBQUxWO0FBT1E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxWO0FBT1k7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFMZDtBQVVZO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBUmQ7QUFZWTtFQUNFLFVBQUE7QUFWZDtBQWNZO0VBQ0UsZUFBQTtBQVpkO0FBY1k7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBWmQ7QUFlVTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBYlo7QUFjWTtFQUNFLFdBQUE7QUFaZDtBQWdCUTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7QUFkVjtBQWVVO0VBQ0UsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBYlo7QUFlVTtFQUNFLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FBZFo7QUFvQkU7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FBakJKO0FBbUJFOztFQUVFLGlCQUFBO0FBaEJKO0FBa0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBZko7QUFpQkUsa0JBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQXVCLGdCQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLG1DQUFBO0FBWjlCO0FBZUU7RUFDRSxVQUFBO0VBQVksa0NBQUE7QUFYaEI7QUFjRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBWEo7QUFhRTtFQUNJLFdBQUE7QUFWTjtBQVdLO0VBQ0ksMEJBQUE7QUFUVDtBQWFFO0VBQ0csV0FBQTtBQVZMIiwiZmlsZSI6ImFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBuei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC5zYWxlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xyXG4gICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICAmLWNhcnQsXHJcbiAgICAgICYtYmVzdC1zZWxsaW5nLFxyXG4gICAgICAuc2FsZXMtYmlsbHMtc3RhZmYsXHJcbiAgICAgIC5zYWxlcy1iaWxscy1jdXN0b21lcixcclxuICAgICAgLnNhbGVzLWJpbGxzLWNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgJi1jYXJ0IHtcclxuICAgICAgICBncmlkLXJvdzogMS8yO1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEzJTtcclxuICAgICAgICAgIC5idG4tZGF0YSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1wcmljZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzhjN2NjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLXByb2R1Y3Qtd2FycmFueSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAud2FyYW50eS1pbnZvaWNlLXByb2QtaW52b2ljZURldGFpbCB7XHJcbiAgICAgICAgICAuaW52b2ljZURldGFpbC1pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53YXJhbnR5LWludm9pY2UtcHJvZEFuZG5vdGUtaW52b2ljZURldGFpbCB7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYtYmVzdC1zZWxsaW5nIHtcclxuICAgICAgICBncmlkLXJvdzogMi8zO1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgICAgIC53YXJhbnR5LWludm9pY2UtcXVvdGUge1xyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLndhcmFudHktaW52b2ljZS1xdW90ZS1oZWFkZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC53YXJhbnR5LWludm9pY2UtcXVvdGUtaW52b2ljZURldGFpbCB7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICAgLmludm9pY2VEZXRhaWwtaXRlbSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgICYtcXVhbnRpdHkge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZGVjZWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYtYmlsbHMge1xyXG4gICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDIwJSA1MCUgMTAlO1xyXG4gICAgICAgICYtc3RhZmYge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAmLXRpbWUsXHJcbiAgICAgICAgICAmLW5hbWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG56LWRhdGUtcGlja2VyIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWN1c3RvbWVyIHtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZWFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYzhjN2NjO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbnotcmFkaW8tZ3JvdXAge1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFwcC1jdXN0b21lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWN1c3RvbWVyID4gZGl2LFxyXG4gICAgICAgICYtY29udGVudCA+IGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIGRpdiA+IHtcclxuICAgICAgICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLWRpc2NvdW50LFxyXG4gICAgICAgICAgJi1mZWUge1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi10YXgge1xyXG4gICAgICAgICAgICAubm90LWZvdW5kIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLXBheSB7XHJcbiAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLXBheW1lbnRfdHlwZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgYXBwLXRheCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAub3JkZXItYW5kLXByaW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgICAgICAgLy9tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgaW5wdXQsXHJcbiAgdGV4dGFyZWEge1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIC5jZW50ZXItY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAvKiBIaWRlIHNjcm9sbGJhciovXHJcbiAgLmhpZGVTY3JvbGxiYXIge1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGb3IgRmlyZWZveCAqL1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cclxuICB9XHJcbiAgXHJcbiAgLmhpZGVTY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwcHg7IC8qIEZvciBDaHJvbWUsIFNhZmFyaSwgYW5kIE9wZXJhICovXHJcbiAgfVxyXG4gIFxyXG4gIC5iZWV0d2Vlbi1hbGwtY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLnJhZGlvLXB1cmNoYXNlICBzcGFue1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAuYW50LXJhZGlve1xyXG4gICAgICAgICBtYXgtd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCAucmFkaW8tcHVyY2hhc2UgIC5hbnQtcmFkaW97XHJcbiAgICAgd2lkdGg6IDE2cHg7IFxyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 74686:
/*!********************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-15/bill-type-15.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillType15Module": () => (/* binding */ BillType15Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 75794);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 66546);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ 46124);
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../search/search.module */ 43818);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/sale-desktop/components/components.module */ 50682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);











class BillType15Module {
}
BillType15Module.ɵfac = function BillType15Module_Factory(t) { return new (t || BillType15Module)(); };
BillType15Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BillType15Module });
BillType15Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _search_search_module__WEBPACK_IMPORTED_MODULE_3__.SearchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BillType15Module, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_5__.ComponentsModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _search_search_module__WEBPACK_IMPORTED_MODULE_3__.SearchModule], exports: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent] }); })();


/***/ }),

/***/ 46124:
/*!************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-15/detail/detail.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_warranty_warranty_k57_col3_warranty_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-k57-col3/warranty-k57-col3.component */ 74810);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_k80_col3_warranty_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-k80-col3/warranty-k80-col3.component */ 96691);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_k80_col4_warranty_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-k80-col4/warranty-k80-col4.component */ 56485);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_a5_warranty_a5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-a5/warranty-a5.component */ 13625);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_a4_warranty_a4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-a4/warranty-a4.component */ 46846);
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function DetailComponent_nz_layout_4_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r13.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 3, "Quantity"), ": ", item_r13.quantity, " ");
} }
function DetailComponent_nz_layout_4_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r14.content, " ");
} }
function DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r21.getLotNumber(data_r20.lots, data_r20.id_lotproduct));
} }
function DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_5_ng_container_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r26 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", combo_r26.quantity, "x ", combo_r26.name, " (", ctx_r25.getUnit(combo_r26.units, combo_r26.ratio), "), ");
} }
function DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_5_ng_container_5_span_1_Template, 2, 3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", data_r20.combos);
} }
function DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_5_del_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "del", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r20.price_origin > data_r20.price ? ctx_r23.vhAlgorithm.vhcurrencyunit(data_r20.price_origin) : "", " ");
} }
function DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_5_ng_container_4_Template, 4, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_5_ng_container_5_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_5_del_12_Template, 2, 1, "del", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r20 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", data_r20.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r20.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r20.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r18.getUnit(data_r20.units, data_r20.ratio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r20.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r18.vhAlgorithm.vhcurrencyunit(data_r20.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r18.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r18.vhAlgorithm.vhcurrencyunit(data_r20.quantity * data_r20.price));
} }
function DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_6_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r30.getLotNumber(data_r29.lots, data_r29.id_lotproduct), " ");
} }
function DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_6_ng_container_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r35 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", combo_r35.quantity, "x ", combo_r35.name, " (", ctx_r34.getUnit(combo_r35.units, combo_r35.ratio), "), ");
} }
function DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_6_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_6_ng_container_8_span_1_Template, 2, 3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", data_r29.combos);
} }
function DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_6_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "del", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r29.price_origin > data_r29.price ? ctx_r32.vhAlgorithm.vhcurrencyunit(data_r29.price_origin) : "", " ");
} }
function DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_6_ng_container_7_Template, 3, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_6_ng_container_8_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_6_del_15_Template, 2, 1, "del", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r29 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", data_r29.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 9, "Gift"), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r29.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r29.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r19.getUnit(data_r29.units, data_r29.ratio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r29.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r19.vhAlgorithm.vhcurrencyunit(data_r29.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r19.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r19.vhAlgorithm.vhcurrencyunit(data_r29.quantity * data_r29.price));
} }
function DetailComponent_nz_layout_4_ng_container_74_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_5_Template, 16, 8, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, DetailComponent_nz_layout_4_ng_container_74_ng_container_1_tr_6_Template, 19, 11, "tr", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r15.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r15.products_gift);
} }
function DetailComponent_nz_layout_4_ng_container_74_tr_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r39.getLotNumber(item_r15.lots, item_r15.id_lotproduct), " ");
} }
function DetailComponent_nz_layout_4_ng_container_74_tr_2_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r44 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", combo_r44.quantity, "x ", combo_r44.name, " (", ctx_r43.getUnit(combo_r44.units, combo_r44.ratio), "), ");
} }
function DetailComponent_nz_layout_4_ng_container_74_tr_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DetailComponent_nz_layout_4_ng_container_74_tr_2_ng_container_4_span_1_Template, 2, 3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r15.combos);
} }
function DetailComponent_nz_layout_4_ng_container_74_tr_2_del_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "del", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r15.price_origin > item_r15.price ? ctx_r41.vhAlgorithm.vhcurrencyunit(item_r15.price_origin) : "", " ");
} }
function DetailComponent_nz_layout_4_ng_container_74_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, DetailComponent_nz_layout_4_ng_container_74_tr_2_ng_container_3_Template, 3, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DetailComponent_nz_layout_4_ng_container_74_tr_2_ng_container_4_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, DetailComponent_nz_layout_4_ng_container_74_tr_2_del_11_Template, 2, 1, "del", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r15.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r15.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r15.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r17.getUnit(item_r15.units, item_r15.ratio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r15.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r17.vhAlgorithm.vhcurrencyunit(item_r15.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r17.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r17.vhAlgorithm.vhcurrencyunit(item_r15.quantity * item_r15.price));
} }
function DetailComponent_nz_layout_4_ng_container_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DetailComponent_nz_layout_4_ng_container_74_ng_container_1_Template, 7, 3, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, DetailComponent_nz_layout_4_ng_container_74_tr_2_Template, 15, 8, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r15.id_promotion);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r15.id_promotion);
} }
function DetailComponent_nz_layout_4_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r5.invoiceInfo.partner.name), " ");
} }
function DetailComponent_nz_layout_4_div_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r6.invoiceInfo.partner.name), " - ", ctx_r6.invoiceInfo.partner.phone, " ");
} }
function DetailComponent_nz_layout_4_div_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r7.renderAddress(ctx_r7.invoiceInfo.partner), " ");
} }
function DetailComponent_nz_layout_4_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate4"](" ", ctx_r8.invoice.retail_name, " - ", ctx_r8.invoice.retail_phone, " ", ctx_r8.invoice.retail_address ? "-" : "", " ", ctx_r8.invoice.retail_address, " ");
} }
function DetailComponent_nz_layout_4_div_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Discount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r9.vhAlgorithm.vhcurrencyunit(ctx_r9.invoice.discount_bill));
} }
function DetailComponent_nz_layout_4_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Point payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r10.vhAlgorithm.vhcurrencyunit(ctx_r10.invoice.payment_points));
} }
function DetailComponent_nz_layout_4_div_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Coupon payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r11.vhAlgorithm.vhcurrencyunit(ctx_r11.invoice.payment_coupons));
} }
function DetailComponent_nz_layout_4_div_170_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_div_170_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r48.goToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 1, "Continue to sell..."));
} }
const _c0 = function (a0) { return { y: a0 }; };
function DetailComponent_nz_layout_4_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r50.goToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r52.printInvoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r53.deleteInvoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, DetailComponent_nz_layout_4_div_31_Template, 7, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, DetailComponent_nz_layout_4_div_38_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "nz-table", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](50, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](56, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](64, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](68, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](72, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, DetailComponent_nz_layout_4_ng_container_74_Template, 3, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](80, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](92, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](95, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](99, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](100, DetailComponent_nz_layout_4_div_100_Template, 3, 3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](101, DetailComponent_nz_layout_4_div_101_Template, 3, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](102, DetailComponent_nz_layout_4_div_102_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](103, DetailComponent_nz_layout_4_div_103_Template, 2, 4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](107, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](111, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](114, DetailComponent_nz_layout_4_div_114_Template, 6, 4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](115, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](118, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](119, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](121, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](124, DetailComponent_nz_layout_4_div_124_Template, 6, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](125, DetailComponent_nz_layout_4_div_125_Template, 6, 4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](129, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](131);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](133, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](134);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](135, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](143, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](144, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](145);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](146, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](147, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](148);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](149, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](150, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](155, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](156, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](157);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](158, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](159, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](160);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](161, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](163);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](164, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](166);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](167, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](168, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](169);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](170, DetailComponent_nz_layout_4_div_170_Template, 5, 3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](49);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 58, "Invoice"), ": ", ctx_r0.invoice.bill_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 60, "Edit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 62, "Print"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.invoice.bill_type == 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](20, 64, "Delete"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 66, "Warranty, repair products"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.warrantyProd);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](35, 68, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.warrantyNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 70, "Quote"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](50, 72, "No data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](118, _c0, ctx_r0.tableHeight))("nzData", ctx_r0.invoice_detail);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](56, 74, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](60, 76, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](64, 78, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](68, 80, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](72, 82, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _r3.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx_r0.invoice.bill_type == 16 ? "continue-sell" : "not-continue-sell");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](80, 84, "Receptionist"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.invoiceInfo.employee.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](86, 86, "Technician"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.invoiceInfo.technician.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](92, 88, "Issued date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](95, 90, ctx_r0.invoice.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](99, 93, "Customer information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoiceInfo.partner._id == "id_retail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoiceInfo.partner._id != "id_retail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoiceInfo.partner._id != "id_retail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoiceInfo.partner._id == "id_retail" && ctx_r0.invoice.retail_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](107, 95, "Payment information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](111, 97, "SubTotal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.subTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoice.discount_bill);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](118, 99, "Discount value"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](121, 101, ctx_r0.invoice.discount / ctx_r0.subTotal * 100 || 0, "1.0-2"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.discount));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoice.payment_points);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoice.payment_coupons);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](129, 104, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](135, 106, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhpercent(ctx_r0.invoice.tax / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.total * (ctx_r0.invoice.tax / 100)), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](143, 108, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](149, 110, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.invoice.payment));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](155, 112, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.invoice.total * (1 + ctx_r0.invoice.tax / 100) - ctx_r0.invoice.payment));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](161, 114, "Payment method"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.setPaymentName(ctx_r0.invoice.payment_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](167, 116, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.invoice.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoice.bill_type == 16);
} }
class DetailComponent {
    constructor(router, vhQuerySales, languageService, vhAuth, vhComponent, vhAlgorithm, cdRef, fncService) {
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.languageService = languageService;
        this.vhAuth = vhAuth;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.fncService = fncService;
        this.url = '';
        this.display_promotion_selling_price = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').display_promotion_selling_price;
        this.subTotal = 0;
        this.invoice_detail = [];
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.warrantyProd = [];
        this.warrantyNote = [];
        this.getDataInvoice(this.router.getCurrentNavigation().extras.state.id);
    }
    /**
     * gán bill và bill-detail get được vào biến và get các thông tin của nv, khách hàng, phương thức thanh toán
     * @example this.init(bill, bill-deails)
     */
    init(invoice = null, invoiceDetail = null, warranty = null) {
        this.invoice = invoice;
        this.invoice_detail = invoiceDetail;
        this.warrantyProd = warranty.filter(e => e.type == 1);
        this.warrantyNote = warranty.filter(e => e.type == 2);
        if (invoice && invoiceDetail) {
            this.invoiceInfo = {
                employee: this.vhAuth.getlocalEmployee(this.invoice.id_employee),
                partner: this.vhQuerySales.getlocalCustomer(this.invoice.id_customer),
                paymentName: this.setPaymentName(this.invoice.payment_type),
                technician: this.vhAuth.getlocalEmployee(this.invoice.id_technician),
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
                this.vhQuerySales.getWarrantys_byFields({ id_bill: { $eq: id } })
            ]).then(([invoice, invoiceDetail, warranty]) => {
                if (!invoiceDetail.length)
                    this.init(invoice, [], []);
                else {
                    invoiceDetail = this.vhAlgorithm.sortVietnamesebyASC(invoiceDetail, 'name');
                    this.init(invoice, invoiceDetail, warranty);
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
        return lot.lot_number + '\n' + this.fncService.formatDate(lot.date_mfg) + ' - ' + this.fncService.formatDate(lot.date_exp);
    }
    /**
     * xóa hóa đơn lên DB
     * @example this.deleteInvoice()
     */
    deleteInvoice() {
        this.vhQuerySales.getValidityDate(this.invoice.date).then((validitydate) => {
            if (validitydate == null) {
                if (this.vhAuth.checkMyPermission("warranty_enable_cancel_bill")) {
                    this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", `${this.languageService.translate("Are you sure to cancel the sales invoice")}?`, "OK", this.languageService.translate("Cancel"))
                        .then(() => {
                        this.vhComponent.showLoading("", "transparent-loading").then(() => {
                            this.vhQuerySales.deleteBill_Billdetail(this.invoice._id).then(() => {
                                this.vhComponent.hideLoading(0).then(() => {
                                    this.dataRestore.invoice = this.dataRestore.invoice.filter(e => e._id != this.invoice._id);
                                    this.vhComponent.showToast(2000, `${this.languageService.translate("Warranty, Repair invoices")} ${this.invoice.bill_code} ${this.languageService.translate("has been cancelled successfully")}`, "success-toast");
                                    this.router.navigate([this.url], { state: this.dataRestore });
                                });
                            });
                        });
                    }, () => { });
                }
                else
                    this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
            }
            else {
                this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 5000);
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
                this.router.navigate([this.url + '/edit'], { state: { invoiceDetail: this.invoice_detail, invoice: this.invoice, warrantyProd: this.warrantyProd, warrantyNote: this.warrantyNote } });
            }
            else {
                this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 5000);
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
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_warranty');
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
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice: this.invoice, invoice_detail: this.invoice_detail, warrantyProd: this.warrantyProd, warrantyNote: this.warrantyNote }, false, false, `modal-print-${printer['_id']}`);
        }, (err) => {
            this.vhComponent.alertMessage(this.languageService.translate("Function"), "", this.languageService.translate("Please turn on the printer function"), "OK");
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_warranty_warranty_k57_col3_warranty_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__.WarrantyK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_warranty_warranty_k80_col3_warranty_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__.WarrantyK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_warranty_warranty_k80_col4_warranty_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.WarrantyK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_warranty_warranty_a5_warranty_a5_component__WEBPACK_IMPORTED_MODULE_3__.WarrantyA5Component;
            case 'print_size_a4': return src_app_sales_components_print_warranty_warranty_a4_warranty_a4_component__WEBPACK_IMPORTED_MODULE_4__.WarrantyA4Component;
            default: return src_app_sales_components_print_warranty_warranty_a4_warranty_a4_component__WEBPACK_IMPORTED_MODULE_4__.WarrantyA4Component;
        }
    }
    goBack() {
        this.router.navigate([this.url], { state: this.dataRestore });
    }
    ngAfterViewChecked() {
        if (document.querySelector(".sales-best-selling") && document.querySelector(".waranty-invoice-quote-header") && document.querySelector(".ant-table-thead")) {
            this.tableHeight = document.querySelector(".sales-best-selling").clientHeight
                - document.querySelector(".waranty-invoice-quote-header").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - 35 + "px";
        }
        if (document.getElementById("receipt-invoice-prodAndnote-invoiceDetail") && document.querySelector(".sales-cart") && document.querySelector(".sales-cart-header")) {
            document.getElementById("receipt-invoice-prodAndnote-invoiceDetail").style.height = document.querySelector(".sales-cart").clientHeight - document.querySelector(".sales-cart-header").clientHeight - 10 + 'px';
        }
        this.cdRef.detectChanges();
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["bill-type15-detail"]], inputs: { url: "url" }, decls: 5, vars: 4, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [4, "ngIf"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title", "sales-cart-header-title"], ["nz-col", "", "nzSpan", "12", 1, "center-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 3, "click"], ["src", "assets/icon/management/printer.svg", 2, "margin-right", "5px"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 3, "disabled", "click"], ["name", "trash-outline", 2, "margin-right", "5px"], ["id", "receipt-invoice-prodAndnote-invoiceDetail", "nz-col", "", "nzSpan", "24", 1, "receipt-invoice-prodAndnote-invoiceDetail", "hideScrollbar"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "search-product-warrany"], ["nz-col", "", "nzSpan", "24"], [1, "hideScrollbar", "waranty-invoice-prod-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-best-selling"], ["nz-row", "", 1, "waranty-invoice-quote"], ["nz-col", "", "nzSpan", "24", 1, "waranty-invoice-quote-header"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], [1, "invoiceDetail-item"], ["nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzNoResult"], ["rowSelectionTable", ""], ["nzWidth", "35%"], ["nzWidth", "15%", "nzAlign", "center"], ["nzWidth", "15%", "nzAlign", "right"], ["nzWidth", "20%", "nzAlign", "right"], [4, "ngFor", "ngForOf"], [1, "sales-bills", 3, "ngClass"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["class", "sales-bills-content-discount", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["class", "sales-bills-content-total", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], [2, "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-row", "", "class", "sales-bills-button", 4, "ngIf"], ["nz-col", "", "nzSpan", "20", 1, "invoiceDetail-item-content"], ["nz-col", "", "nzSpan", "4", 1, "ion-text-end", "invoiceDetail-item-quantity", 2, "font-weight", "bold"], ["nz-col", "", "nzSpan", "24", 1, "center-col"], ["style", "cursor: pointer;", 4, "ngIf"], [2, "cursor", "pointer"], ["colspan", "5"], ["style", "cursor: pointer;", 4, "ngFor", "ngForOf"], ["nzAlign", "center"], ["nzAlign", "right"], ["style", "font-size: 0.7rem;", 4, "ngIf"], ["class", "sub-name", 4, "ngFor", "ngForOf"], [1, "sub-name"], [2, "font-size", "0.7rem"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "button", "payment-print", 3, "click"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DetailComponent_nz_layout_4_Template, 171, 120, "nz-layout", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.invoice);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DecimalPipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 50% 50%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills.continue-sell[_ngcontent-%COMP%] {\n  grid-template-rows: 20% 15% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills.not-continue-sell[_ngcontent-%COMP%] {\n  grid-template-rows: 20% 15% 65%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 13%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-price[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 0.9rem;\n  border-bottom: solid 1px #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .search-product-warrany[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .search-product-warrany[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .waranty-invoice-prod-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .waranty-invoice-prod-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-content[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .waranty-invoice-prodAndnote-invoiceDetail[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  grid-column: 1/3;\n  overflow-y: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-header[_ngcontent-%COMP%] {\n  height: 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 15% 20% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   nz-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-gray);\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .payment-print[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  color: #fff;\n  border: none;\n  font-size: 0.9rem;\n  width: 100%;\n  height: 50px;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n.sub-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ion-color-vh-gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQUo7QUFDSTtFQUNFLGVBQUE7QUFDTjtBQUVFO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7QUFFTjtBQURNOzs7O0VBS0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFBTTtFQUNFLG1DQUFBO0FBRVI7QUFBTTtFQUNFLCtCQUFBO0FBRVI7QUFBTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRVI7QUFEUTtFQUNFLFdBQUE7QUFHVjtBQUZVO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUlaO0FBRlU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQUlaO0FBRFE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUdWO0FBRlU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBSVo7QUFBVTtFQUNFLGNBQUE7QUFFWjtBQURZO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBR2Q7QUFDUTtFQUNFLGtCQUFBO0FBQ1Y7QUFFTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFVTtFQUNFLGtCQUFBO0FBQVo7QUFDWTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDZDtBQUVVO0VBQ0UsV0FBQTtBQUFaO0FBRVU7RUFDRSxrQkFBQTtBQUFaO0FBQ1k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDZDtBQUFjO0VBQ0UsZUFBQTtBQUVoQjtBQUFjO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtBQUVoQjtBQUlNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUFGUjtBQUdRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQURWO0FBR1E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFEVjtBQUdZO0VBQ0UsaUJBQUE7QUFEZDtBQUlVO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBRlo7QUFLUTtFQUVFLGFBQUE7RUFDQSw4QkFBQTtBQUpWO0FBTVE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUpWO0FBTVk7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFKZDtBQVNZO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBUGQ7QUFXWTtFQUNFLFVBQUE7QUFUZDtBQWFZO0VBQ0UsZUFBQTtBQVhkO0FBYVk7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBWGQ7QUFjVTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBWlo7QUFhWTtFQUNFLFdBQUE7QUFYZDtBQWVRO0VBQ0UsdUJBQUE7QUFiVjtBQWNVO0VBQ0UsaUVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFaWjtBQWtCRTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUFmSjtBQWlCRTs7RUFFRSxpQkFBQTtBQWRKO0FBZ0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBYko7QUFlRSxrQkFBQTtBQUNBO0VBQ0UscUJBQUE7RUFBdUIsZ0JBQUE7RUFDdkIsd0JBQUE7RUFBMEIsbUNBQUE7QUFWOUI7QUFhRTtFQUNFLFVBQUE7RUFBWSxrQ0FBQTtBQVRoQjtBQVlFO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtBQVRKIiwiZmlsZSI6ImRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxuICB9XHJcbiAgbnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAuc2FsZXMge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTAlIDUwJTtcclxuICAgICAgcm93LWdhcDogMTBweDtcclxuICAgICAgY29sdW1uLWdhcDogMTBweDtcclxuICAgICAgJi1jYXJ0LFxyXG4gICAgICAmLWJlc3Qtc2VsbGluZyxcclxuICAgICAgLnNhbGVzLWJpbGxzLXN0YWZmLFxyXG4gICAgICAuc2FsZXMtYmlsbHMtY3VzdG9tZXIsXHJcbiAgICAgIC5zYWxlcy1iaWxscy1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgICYtYmlsbHMuY29udGludWUtc2VsbCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgMTUlIDU1JSAxMCU7XHJcbiAgICAgIH1cclxuICAgICAgJi1iaWxscy5ub3QtY29udGludWUtc2VsbCB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgMTUlIDY1JTtcclxuICAgICAgfVxyXG4gICAgICAmLWNhcnQge1xyXG4gICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICAgIGhlaWdodDogMTMlO1xyXG4gICAgICAgICAgLmJ0bi1kYXRhIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLXByaWNlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjOGM3Y2M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gtcHJvZHVjdC13YXJyYW55IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53YXJhbnR5LWludm9pY2UtcHJvZC1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICAgIC5pbnZvaWNlRGV0YWlsLWl0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLndhcmFudHktaW52b2ljZS1wcm9kQW5kbm90ZS1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1iZXN0LXNlbGxpbmcge1xyXG4gICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgLndhcmFudHktaW52b2ljZS1xdW90ZSB7XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAud2FyYW50eS1pbnZvaWNlLXF1b3RlLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLndhcmFudHktaW52b2ljZS1xdW90ZS1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAuaW52b2ljZURldGFpbC1pdGVtIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgJi1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYtYmlsbHMge1xyXG4gICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTUlIDIwJSA1NSUgMTAlO1xyXG4gICAgICAgICYtc3RhZmYgPiBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWN1c3RvbWVyIHtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIG56LXJhZGlvLWdyb3VwIHtcclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jdXN0b21lciA+IGRpdixcclxuICAgICAgICAmLWNvbnRlbnQgPiBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBkaXYgPiB7XHJcbiAgICAgICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1kaXNjb3VudCxcclxuICAgICAgICAgICYtZmVlIHtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtdGF4IHtcclxuICAgICAgICAgICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1wYXkge1xyXG4gICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1wYXltZW50X3R5cGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGFwcC10YXgge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgLnBheW1lbnQtcHJpbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICBpbnB1dCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgLmNlbnRlci1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC8qIEhpZGUgc2Nyb2xsYmFyKi9cclxuICAuaGlkZVNjcm9sbGJhciB7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG4gIH1cclxuICBcclxuICAuaGlkZVNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDsgLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxuICB9XHJcbiAgXHJcbiAgLnN1Yi1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 66546:
/*!********************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-15/edit/edit.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_warranty_warranty_k57_col3_warranty_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-k57-col3/warranty-k57-col3.component */ 74810);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_k80_col3_warranty_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-k80-col3/warranty-k80-col3.component */ 96691);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_k80_col4_warranty_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-k80-col4/warranty-k80-col4.component */ 56485);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_a5_warranty_a5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-a5/warranty-a5.component */ 13625);
/* harmony import */ var src_app_sales_components_print_warranty_warranty_a4_warranty_a4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/warranty/warranty-a4/warranty-a4.component */ 46846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../sale-desktop/components/staff/staff.component */ 88963);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _sale_desktop_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../sale-desktop/components/tax/tax.component */ 74330);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _sale_desktop_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../sale-desktop/components/customer/customer.component */ 70064);
/* harmony import */ var _search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../search/search-customer/search-customer.component */ 55846);
/* harmony import */ var _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../search/search-product/search-product.component */ 99767);
/* harmony import */ var _search_search_product_warranty_invoice_search_product_warranty_invoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../search/search-product-warranty-invoice/search-product-warranty-invoice.component */ 48115);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _sale_desktop_components_change_price_type_change_price_type_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../sale-desktop/components/change-price-type/change-price-type.component */ 28877);
/* harmony import */ var _sale_desktop_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../sale-desktop/components/customer-profile/customer-profile.component */ 46156);
/* harmony import */ var _sale_desktop_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../sale-desktop/components/add-customer/add-customer.component */ 29519);
/* harmony import */ var _sale_desktop_components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../sale-desktop/components/retail-info/retail-info.component */ 626);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ngx-translate/core */ 70325);









































function EditComponent_div_32_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "nz-input-number", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_div_32_div_8_Template_nz_input_number_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r38); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return item_r33.quantity = $event; })("ngModelChange", function EditComponent_div_32_div_8_Template_nz_input_number_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r38); const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r39.checkQuantityProduct(item_r33, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 1)("nzStep", 1)("ngModel", item_r33.quantity);
} }
function EditComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_32_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43); const i_r34 = restoredCtx.index; const item_r33 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r42.removeWarrantyProd(i_r34, item_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_div_32_Template_input_ngModelChange_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43); const item_r33 = restoredCtx.$implicit; return item_r33.content = $event; })("blur", function EditComponent_div_32_Template_input_blur_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r43); const i_r34 = restoredCtx.index; const item_r33 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r45.editWarrantyProd(i_r34, item_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, EditComponent_div_32_div_8_Template, 2, 4, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", item_r33.content)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 3, "Enter product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r0.warrantyProd.length == 1 && ctx_r0.warrantyProd[0].content || ctx_r0.warrantyProd.length > 1);
} }
function EditComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_42_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r49); const i_r47 = restoredCtx.index; const item_r46 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r48.invoice.removeWarrantyNote(i_r47, item_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_div_42_Template_input_ngModelChange_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r49); const item_r46 = restoredCtx.$implicit; return item_r46.content = $event; })("blur", function EditComponent_div_42_Template_input_blur_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r49); const i_r47 = restoredCtx.index; const item_r46 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r51.editWarrantyNote(i_r47, item_r46); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", item_r46.content)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 2, "Enter note"));
} }
function EditComponent_div_63_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function EditComponent_div_63_ng_container_4_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r64.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
} }
function EditComponent_div_63_ng_container_4_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_4_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r73); const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r71.openModalChooseLot(data_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r68.getLotNumber(data_r67.lots, data_r67.id_lotproduct));
} }
function EditComponent_div_63_ng_container_4_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r76 = ctx.$implicit;
    const i_r77 = ctx.index;
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r77 == data_r67.combos.length - 1 ? combo_r76.quantity + "x " + combo_r76.name + " (" + ctx_r75.getUnit(combo_r76.units, combo_r76.ratio) + ") " : combo_r76.quantity + "x " + combo_r76.name + " (" + ctx_r75.getUnit(combo_r76.units, combo_r76.ratio) + ") " + " ,", " ");
} }
function EditComponent_div_63_ng_container_4_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_4_div_2_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r67.combos);
} }
function EditComponent_div_63_ng_container_4_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r67.price_origin > data_r67.price ? ctx_r70.vhAlgorithm.vhcurrencyunit(data_r67.price_origin) : "", " ");
} }
function EditComponent_div_63_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, EditComponent_div_63_ng_container_4_div_2_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_div_63_ng_container_4_div_2_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_4_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r82); const data_r67 = restoredCtx.$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r81.openEditUnitPrice(data_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, EditComponent_div_63_ng_container_4_div_2_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r67 = ctx.$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r67.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r67.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r67.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r67.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r67.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r63.vhAlgorithm.vhcurrencyunit(data_r67.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r63.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r63.vhAlgorithm.vhcurrencyunit(data_r67.price * data_r67.quantity));
} }
function EditComponent_div_63_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_4_div_1_Template, 7, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, EditComponent_div_63_ng_container_4_div_2_Template, 20, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products);
} }
function EditComponent_div_63_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function EditComponent_div_63_ng_container_5_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r86.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
} }
function EditComponent_div_63_ng_container_5_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_5_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r95); const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r93.openModalChooseLot(data_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r90.getLotNumber(data_r89.lots, data_r89.id_lotproduct));
} }
function EditComponent_div_63_ng_container_5_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r98 = ctx.$implicit;
    const i_r99 = ctx.index;
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r99 == data_r89.combos.length - 1 ? combo_r98.quantity + "x " + combo_r98.name + " (" + ctx_r97.getUnit(combo_r98.units, combo_r98.ratio) + ") " : combo_r98.quantity + "x " + combo_r98.name + " (" + ctx_r97.getUnit(combo_r98.units, combo_r98.ratio) + ") " + " ,", " ");
} }
function EditComponent_div_63_ng_container_5_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_5_div_2_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r89.combos);
} }
function EditComponent_div_63_ng_container_5_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r89.price_origin > data_r89.price ? ctx_r92.vhAlgorithm.vhcurrencyunit(data_r89.price_origin) : "", " ");
} }
function EditComponent_div_63_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, EditComponent_div_63_ng_container_5_div_2_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_div_63_ng_container_5_div_2_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_5_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r104); const data_r89 = restoredCtx.$implicit; const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r103.openEditUnitPrice(data_r89); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, EditComponent_div_63_ng_container_5_div_2_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r89 = ctx.$implicit;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r89.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r89.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r89.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r89.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r89.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r85.vhAlgorithm.vhcurrencyunit(data_r89.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r85.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r85.vhAlgorithm.vhcurrencyunit(data_r89.price * data_r89.quantity));
} }
function EditComponent_div_63_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_5_div_1_Template, 7, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, EditComponent_div_63_ng_container_5_div_2_Template, 20, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products);
} }
function EditComponent_div_63_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function EditComponent_div_63_ng_container_6_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r108.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
} }
function EditComponent_div_63_ng_container_6_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_6_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r117); const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r115.openModalChooseLot(data_r111); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r112.getLotNumber(data_r111.lots, data_r111.id_lotproduct));
} }
function EditComponent_div_63_ng_container_6_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r120 = ctx.$implicit;
    const i_r121 = ctx.index;
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r121 == data_r111.combos.length - 1 ? combo_r120.quantity + "x " + combo_r120.name + " (" + ctx_r119.getUnit(combo_r120.units, combo_r120.ratio) + ") " : combo_r120.quantity + "x " + combo_r120.name + " (" + ctx_r119.getUnit(combo_r120.units, combo_r120.ratio) + ") " + " ,", " ");
} }
function EditComponent_div_63_ng_container_6_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_6_div_2_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r111.combos);
} }
function EditComponent_div_63_ng_container_6_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r111.price_origin > data_r111.price ? ctx_r114.vhAlgorithm.vhcurrencyunit(data_r111.price_origin) : "", " ");
} }
function EditComponent_div_63_ng_container_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, EditComponent_div_63_ng_container_6_div_2_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_div_63_ng_container_6_div_2_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_6_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r126); const data_r111 = restoredCtx.$implicit; const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r125.openEditUnitPrice(data_r111); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, EditComponent_div_63_ng_container_6_div_2_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r111 = ctx.$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r111.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r111.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r111.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r111.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r111.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r107.vhAlgorithm.vhcurrencyunit(data_r111.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r107.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r107.vhAlgorithm.vhcurrencyunit(data_r111.price * data_r111.quantity));
} }
function EditComponent_div_63_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_6_div_1_Template, 7, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, EditComponent_div_63_ng_container_6_div_2_Template, 20, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products);
} }
function EditComponent_div_63_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function EditComponent_div_63_ng_container_7_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r131); const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r130.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
} }
function EditComponent_div_63_ng_container_7_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_7_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r139); const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r137.openModalChooseLot(data_r133); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r134.getLotNumber(data_r133.lots, data_r133.id_lotproduct));
} }
function EditComponent_div_63_ng_container_7_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r142 = ctx.$implicit;
    const i_r143 = ctx.index;
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r143 == data_r133.combos.length - 1 ? combo_r142.quantity + "x " + combo_r142.name + " (" + ctx_r141.getUnit(combo_r142.units, combo_r142.ratio) + ") " : combo_r142.quantity + "x " + combo_r142.name + " (" + ctx_r141.getUnit(combo_r142.units, combo_r142.ratio) + ") " + " ,", " ");
} }
function EditComponent_div_63_ng_container_7_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_7_div_2_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r133.combos);
} }
function EditComponent_div_63_ng_container_7_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r133.price_origin > data_r133.price ? ctx_r136.vhAlgorithm.vhcurrencyunit(data_r133.price_origin) : "", " ");
} }
function EditComponent_div_63_ng_container_7_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r148 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, EditComponent_div_63_ng_container_7_div_2_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_div_63_ng_container_7_div_2_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_7_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r148); const data_r133 = restoredCtx.$implicit; const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r147.openEditUnitPrice(data_r133); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, EditComponent_div_63_ng_container_7_div_2_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r133 = ctx.$implicit;
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r133.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r133.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r133.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r133.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r133.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r129.vhAlgorithm.vhcurrencyunit(data_r133.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r129.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r129.vhAlgorithm.vhcurrencyunit(data_r133.price * data_r133.quantity));
} }
function EditComponent_div_63_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_7_div_1_Template, 7, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, EditComponent_div_63_ng_container_7_div_2_Template, 20, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products);
} }
function EditComponent_div_63_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function EditComponent_div_63_ng_container_8_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r153); const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r152.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
} }
function EditComponent_div_63_ng_container_8_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_8_div_2_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r161); const data_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r159.openModalChooseLot(data_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r156.getLotNumber(data_r155.lots, data_r155.id_lotproduct));
} }
function EditComponent_div_63_ng_container_8_div_2_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r164 = ctx.$implicit;
    const i_r165 = ctx.index;
    const data_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r165 == data_r155.combos.length - 1 ? combo_r164.quantity + "x " + combo_r164.name + " (" + ctx_r163.getUnit(combo_r164.units, combo_r164.ratio) + ") " : combo_r164.quantity + "x " + combo_r164.name + " (" + ctx_r163.getUnit(combo_r164.units, combo_r164.ratio) + ") " + " ,", " ");
} }
function EditComponent_div_63_ng_container_8_div_2_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_8_div_2_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r155.combos);
} }
function EditComponent_div_63_ng_container_8_div_2_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r155.price_origin > data_r155.price ? ctx_r158.vhAlgorithm.vhcurrencyunit(data_r155.price_origin) : "", " ");
} }
function EditComponent_div_63_ng_container_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, EditComponent_div_63_ng_container_8_div_2_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_div_63_ng_container_8_div_2_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_8_div_2_Template_div_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r170); const data_r155 = restoredCtx.$implicit; const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r169.openEditUnitPrice(data_r155); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, EditComponent_div_63_ng_container_8_div_2_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r155 = ctx.$implicit;
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r155.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r155.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r155.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r155.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r155.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r151.vhAlgorithm.vhcurrencyunit(data_r155.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r151.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r151.vhAlgorithm.vhcurrencyunit(data_r155.price * data_r155.quantity));
} }
function EditComponent_div_63_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_8_div_1_Template, 7, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, EditComponent_div_63_ng_container_8_div_2_Template, 20, 8, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products);
} }
function EditComponent_div_63_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r175 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function EditComponent_div_63_ng_container_9_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r175); const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r174.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_9_div_1_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r175); const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r176.showProductGift = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", item_r52.name, " ");
} }
function EditComponent_div_63_ng_container_9_div_2_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r185 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_9_div_2_ng_container_1_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r185); const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit; const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r183.openModalChooseLot(data_r178); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r180.getLotNumber(data_r178.lots, data_r178.id_lotproduct));
} }
function EditComponent_div_63_ng_container_9_div_2_ng_container_1_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r188 = ctx.$implicit;
    const i_r189 = ctx.index;
    const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3).$implicit;
    const ctx_r187 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r189 == data_r178.combos.length - 1 ? combo_r188.quantity + "x " + combo_r188.name + " (" + ctx_r187.getUnit(combo_r188.units, combo_r188.ratio) + ")" : combo_r188.quantity + "x " + combo_r188.name + " (" + ctx_r187.getUnit(combo_r188.units, combo_r188.ratio) + ") " + " ,", " ");
} }
function EditComponent_div_63_ng_container_9_div_2_ng_container_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_9_div_2_ng_container_1_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r178.combos);
} }
function EditComponent_div_63_ng_container_9_div_2_ng_container_1_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r178.price_origin > data_r178.price ? ctx_r182.vhAlgorithm.vhcurrencyunit(data_r178.price_origin) : "", " ");
} }
function EditComponent_div_63_ng_container_9_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, EditComponent_div_63_ng_container_9_div_2_ng_container_1_ng_container_5_Template, 4, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_div_63_ng_container_9_div_2_ng_container_1_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_9_div_2_ng_container_1_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r195); const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r193.openEditUnitPrice(data_r178); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, EditComponent_div_63_ng_container_9_div_2_ng_container_1_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r178.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r178.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r178.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r178.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r178.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r179.vhAlgorithm.vhcurrencyunit(data_r178.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r179.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r179.vhAlgorithm.vhcurrencyunit(data_r178.price * data_r178.quantity));
} }
function EditComponent_div_63_ng_container_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_9_div_2_ng_container_1_Template, 20, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r178 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r178.choose);
} }
function EditComponent_div_63_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_9_div_1_Template, 8, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, EditComponent_div_63_ng_container_9_div_2_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products_gift);
} }
function EditComponent_div_63_ng_container_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r201 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function EditComponent_div_63_ng_container_10_div_1_Template_div_nzOnConfirm_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r201); const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r200.deletePromotion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](3, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_10_div_1_Template_i_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r201); const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r202.showProductGiftType7 = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", item_r52.name, " ");
} }
function EditComponent_div_63_ng_container_10_div_2_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_10_div_2_ng_container_1_ng_container_5_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r211); const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit; const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r209.openModalChooseLot(data_r204); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r206.getLotNumber(data_r204.lots, data_r204.id_lotproduct));
} }
function EditComponent_div_63_ng_container_10_div_2_ng_container_1_p_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r214 = ctx.$implicit;
    const i_r215 = ctx.index;
    const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3).$implicit;
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r215 == data_r204.combos.length - 1 ? combo_r214.quantity + "x " + combo_r214.name + " (" + ctx_r213.getUnit(combo_r214.units, combo_r214.ratio) + ")" : combo_r214.quantity + "x " + combo_r214.name + " (" + ctx_r213.getUnit(combo_r214.units, combo_r214.ratio) + ") " + " ,", " ");
} }
function EditComponent_div_63_ng_container_10_div_2_ng_container_1_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_10_div_2_ng_container_1_p_6_span_1_Template, 2, 1, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r204.combos);
} }
function EditComponent_div_63_ng_container_10_div_2_ng_container_1_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r204.price_origin > data_r204.price ? ctx_r208.vhAlgorithm.vhcurrencyunit(data_r204.price_origin) : "", " ");
} }
function EditComponent_div_63_ng_container_10_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r221 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, EditComponent_div_63_ng_container_10_div_2_ng_container_1_ng_container_5_Template, 3, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_div_63_ng_container_10_div_2_ng_container_1_p_6_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_10_div_2_ng_container_1_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r221); const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3); return ctx_r219.openEditUnitPrice(data_r204); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, EditComponent_div_63_ng_container_10_div_2_ng_container_1_del_15_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r204.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r204.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r204.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r204.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r204.quantity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r205.vhAlgorithm.vhcurrencyunit(data_r204.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r205.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r205.vhAlgorithm.vhcurrencyunit(data_r204.price * data_r204.quantity));
} }
function EditComponent_div_63_ng_container_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_10_div_2_ng_container_1_Template, 20, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r204 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r204.choose);
} }
function EditComponent_div_63_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_10_div_1_Template, 8, 4, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, EditComponent_div_63_ng_container_10_div_2_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.products_gift.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.products_gift);
} }
function EditComponent_div_63_ng_container_11_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_11_ng_container_8_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r230); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit; const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r228.openModalChooseLot(item_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r224.getLotNumber(item_r52.lots, item_r52.id_lotproduct));
} }
function EditComponent_div_63_ng_container_11_p_9_span_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r238 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "pre", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_11_p_9_span_1_ng_container_2_Template_pre_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r238); const combo_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4); return ctx_r236.openModalChooseLot(combo_r233); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const combo_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r235.getLotNumber(combo_r233.lots, combo_r233.id_lotproduct));
} }
function EditComponent_div_63_ng_container_11_p_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, EditComponent_div_63_ng_container_11_p_9_span_1_ng_container_2_Template, 3, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r233 = ctx.$implicit;
    const i_r234 = ctx.index;
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3).$implicit;
    const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", i_r234 == item_r52.combos.length - 1 ? combo_r233.quantity + "x " + combo_r233.name + " (" + ctx_r232.getUnit(combo_r233.units, combo_r233.ratio) + ") " : combo_r233.quantity + "x " + combo_r233.name + " (" + ctx_r232.getUnit(combo_r233.units, combo_r233.ratio) + ") " + " ,", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", combo_r233.id_lotproduct);
} }
function EditComponent_div_63_ng_container_11_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_63_ng_container_11_p_9_span_1_Template, 3, 2, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.combos);
} }
function EditComponent_div_63_ng_container_11_nz_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
} if (rf & 2) {
    const i_r242 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzLabel", i_r242.unit)("nzValue", i_r242.ratio);
} }
function EditComponent_div_63_ng_container_11_del_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "del", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r52.price_origin > item_r52.price ? ctx_r227.vhAlgorithm.vhcurrencyunit(item_r52.price_origin) : "", " ");
} }
function EditComponent_div_63_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnConfirm", function EditComponent_div_63_ng_container_11_Template_div_nzOnConfirm_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); const item_r52 = ctx_r245.$implicit; const i_r53 = ctx_r245.index; const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r244.deleteGoods(item_r52, i_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, EditComponent_div_63_ng_container_11_ng_container_8_Template, 3, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, EditComponent_div_63_ng_container_11_p_9_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "nz-select", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_div_63_ng_container_11_Template_nz_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return item_r52.ratio = $event; })("ngModelChange", function EditComponent_div_63_ng_container_11_Template_nz_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r249.changeUnit($event, item_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](12, EditComponent_div_63_ng_container_11_nz_option_12_Template, 1, 2, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "nz-input-number", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_div_63_ng_container_11_Template_nz_input_number_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return item_r52.quantity = $event; })("ngModelChange", function EditComponent_div_63_ng_container_11_Template_nz_input_number_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r253.checkQuantityProduct(item_r52, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_div_63_ng_container_11_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r246); const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r255.openEditUnitPrice(item_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "p", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, EditComponent_div_63_ng_container_11_del_19_Template, 2, 1, "del", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "p", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 14, "Are you sure to delete"), " ", item_r52.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r52.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r52.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", item_r52.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r52.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", item_r52.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r61.vhAlgorithm.vhcurrencyunit(item_r52.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r61.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r61.vhAlgorithm.vhcurrencyunit(item_r52.price * item_r52.quantity));
} }
function EditComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](3, 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, EditComponent_div_63_ng_container_4_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, EditComponent_div_63_ng_container_5_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_div_63_ng_container_6_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, EditComponent_div_63_ng_container_7_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](8, EditComponent_div_63_ng_container_8_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, EditComponent_div_63_ng_container_9_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, EditComponent_div_63_ng_container_10_Template, 3, 2, "ng-container", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](11, EditComponent_div_63_ng_container_11_Template, 24, 16, "ng-container", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitch", item_r52.pmtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngSwitchCase", 7);
} }
function EditComponent_ng_container_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate4"](" ", ctx_r3.invoice.retail_name, " - ", ctx_r3.invoice.retail_phone, " ", ctx_r3.invoice.retail_address ? "-" : "", " ", ctx_r3.invoice.retail_address, " ");
} }
function EditComponent_ng_container_101_Template(rf, ctx) { if (rf & 1) {
    const _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "app-customer", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveCustomer", function EditComponent_ng_container_101_Template_app_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r259); const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r258.closeAndReceiveCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_ng_container_101_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r259); const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r260.openInfoCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_customer", ctx_r4.invoice.id_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r4.invoice.id_customer != "id_retail" ? "active" : "deactive");
} }
function EditComponent_ng_container_102_Template(rf, ctx) { if (rf & 1) {
    const _r262 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "app-search-customer", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveCustomer", function EditComponent_ng_container_102_Template_app_search_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r262); const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r261.closeAndReceiveCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_ng_container_102_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r262); const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r263.openInfoCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_customer", ctx_r5.invoice.id_customer);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngClass", ctx_r5.invoice.id_customer != "id_retail" ? "active" : "deactive");
} }
function EditComponent_div_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Accumulated points"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r6.point_validity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 6, "Plus"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r6.getTotalEarningPoint());
} }
function EditComponent_ng_container_119_Template(rf, ctx) { if (rf & 1) {
    const _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "input", 114, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("blur", function EditComponent_ng_container_119_Template_input_blur_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r266); const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7); const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r265.editPercentDiscount(_r264.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("blur", function EditComponent_ng_container_119_Template_input_blur_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r266); const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r267.editDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 3, "Discount value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](8, 5, ctx_r7.percent_discount_bill, "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r7.vhAlgorithm.vhcurrencyunit(ctx_r7.invoice.discount));
} }
function EditComponent_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Discount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r8.vhAlgorithm.vhcurrencyunit(ctx_r8.discount_bill));
} }
function EditComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Point payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r9.vhAlgorithm.vhcurrencyunit(ctx_r9.invoice.payment_points));
} }
function EditComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Coupon payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r10.vhAlgorithm.vhcurrencyunit(ctx_r10.invoice.payment_coupons));
} }
function EditComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "input", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("blur", function EditComponent_div_123_Template_input_blur_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r269); const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r268.editFee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r11.vhAlgorithm.vhcurrencyunit(ctx_r11.invoice.fee));
} }
function EditComponent_div_124_nz_select_5_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 125);
} if (rf & 2) {
    const item_r273 = ctx.$implicit;
    const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzValue", item_r273._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r272.vhAlgorithm.vhpercent(item_r273.value / 100));
} }
function EditComponent_div_124_nz_select_5_Template(rf, ctx) { if (rf & 1) {
    const _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-select", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_div_124_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r275); const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r274.id_tax = $event; })("ngModelChange", function EditComponent_div_124_nz_select_5_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r275); const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r276.changeTax($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_div_124_nz_select_5_nz_option_1_Template, 1, 2, "nz-option", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r270.id_tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r270.listTax);
} }
function EditComponent_div_124_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1, "0.00%");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function EditComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](5, EditComponent_div_124_nz_select_5_Template, 2, 2, "nz-select", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_div_124_span_6_Template, 2, 0, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r12.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r12.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r12.vhAlgorithm.vhcurrencyunit(ctx_r12.taxValue), "");
} }
function EditComponent_ng_container_136_Template(rf, ctx) { if (rf & 1) {
    const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_ng_container_136_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r278); const ctx_r277 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r277.showProductGiftType7 = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} }
function EditComponent_img_139_Template(rf, ctx) { if (rf & 1) {
    const _r280 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_img_139_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r280); const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r279.showModalEditTotalPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function EditComponent_div_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 2, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r15.vhAlgorithm.vhcurrencyunit_symbol(ctx_r15.getTotalATax() - ctx_r15.invoice.payment), " ");
} }
function EditComponent_app_search_product_150_Template(rf, ctx) { if (rf & 1) {
    const _r282 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-search-product", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeSearchProductList", function EditComponent_app_search_product_150_Template_app_search_product_closeSearchProductList_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r282); const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r281.closeSearchProductList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("searchProductList", ctx_r16.searchProductList)("default_price_type", ctx_r16.default_price_type);
} }
function EditComponent_app_search_product_warranty_invoice_151_Template(rf, ctx) { if (rf & 1) {
    const _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-search-product-warranty-invoice", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeSearchProductListWarranty", function EditComponent_app_search_product_warranty_invoice_151_Template_app_search_product_warranty_invoice_closeSearchProductListWarranty_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r284); const ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r283.closeSearchProductListWarranty($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("searchProductListWarranty", ctx_r17.searchProductListWarranty);
} }
function EditComponent_nz_modal_152_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r285.tempDetail.price);
} }
function EditComponent_nz_modal_152_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r289 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_nz_modal_152_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r289); const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r288.handleCancelEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_nz_modal_152_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r289); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r290.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function EditComponent_nz_modal_152_Template(rf, ctx) { if (rf & 1) {
    const _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-modal", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function EditComponent_nz_modal_152_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r292); const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r291.isVisibleEditUnitPrice = $event; })("nzOnCancel", function EditComponent_nz_modal_152_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r292); const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r293.handleCancelEditUnit(); })("nzOnOk", function EditComponent_nz_modal_152_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r292); const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r294.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, EditComponent_nz_modal_152_ng_container_2_Template, 8, 7, "ng-container", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, EditComponent_nz_modal_152_ng_template_3_Template, 6, 6, "ng-template", null, 132, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r286 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](4);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzFooter", _r286)("nzVisible", ctx_r18.isVisibleEditUnitPrice);
} }
function EditComponent_ng_container_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](6, "input", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 2, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("value", ctx_r19.vhAlgorithm.vhcurrencyunit(ctx_r19.invoice.payment));
} }
function EditComponent_ng_template_156_Template(rf, ctx) { if (rf & 1) {
    const _r296 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_ng_template_156_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r296); const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r295.handleCancelEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_ng_template_156_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r296); const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r297.handleEditPay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function EditComponent_ng_container_160_nz_tag_17_Template(rf, ctx) { if (rf & 1) {
    const _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-tag", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzOnClose", function EditComponent_ng_container_160_nz_tag_17_Template_nz_tag_nzOnClose_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r303); const item_r301 = restoredCtx.$implicit; const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r302.onCloseProductCode(item_r301); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r301 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzColor", "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r301.code);
} }
function EditComponent_ng_container_160_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r306 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "nz-input-number", 152, 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_160_ng_container_18_Template_nz_input_number_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r306); const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r305.value_discount_point = $event; })("keyup", function EditComponent_ng_container_160_ng_container_18_Template_nz_input_number_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r306); const _r304 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7); const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r307.calculatePoint2Money(_r304["value"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 12, "Accumulated points"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 14, "Enter points"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r300.value_discount_point)("nzMin", 0)("nzMax", ctx_r300.point_validity)("nzStep", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r300.vhAlgorithm.vhcurrencyunit(ctx_r300.invoice.payment_points), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](15, 16, "Point conversion rate"), ": ", ctx_r300.customer_class.payment.points, " \u0110i\u1EC3m = ", ctx_r300.vhAlgorithm.vhcurrencyunit_symbol(ctx_r300.customer_class.payment.money), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](18, 18, "Current accumulated points"), " : ", ctx_r300.point_validity, " ");
} }
function EditComponent_ng_container_160_Template(rf, ctx) { if (rf & 1) {
    const _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "input", 142, 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keyup.enter", function EditComponent_ng_container_160_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r309); const _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7); const ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r308.getDiscountOfCoupon(_r298.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_ng_container_160_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r309); const _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7); const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r310.getDiscountOfCoupon(_r298.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](15, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](17, EditComponent_ng_container_160_nz_tag_17_Template, 2, 2, "nz-tag", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](18, EditComponent_ng_container_160_ng_container_18_Template, 19, 20, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](4, 8, "Coupon"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](8, 10, "Enter or scan code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 12, "Apply"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r22.vhAlgorithm.vhcurrencyunit(ctx_r22.invoice.payment_coupons), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r22.product_codes);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx_r22.customer_class == null ? null : ctx_r22.customer_class.payment.enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](22, 14, "Total discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r22.vhAlgorithm.vhcurrencyunit(ctx_r22.invoice.payment_points + ctx_r22.invoice.payment_coupons));
} }
function EditComponent_ng_container_162_ng_container_21_ng_container_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r317 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate3"](" ", data_r317.name, "(", data_r317.unit, ") x", data_r317.quantity, " ");
} }
function EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_4_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r322 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r322.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 3, element_r322.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r322._id);
} }
function EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "nz-select", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_4_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r325); const data_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return data_r318.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_4_nz_option_6_Template, 2, 6, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r318.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r318.lots);
} }
function EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r331 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r331.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 3, element_r331.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r331._id);
} }
function EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r334 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "nz-select", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r334); const combo_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return combo_r328.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_nz_option_6_Template, 2, 6, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const combo_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", combo_r328.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", combo_r328.lots);
} }
function EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_Template, 7, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r328 = ctx.$implicit;
    const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("- ", combo_r328.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", combo_r328.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r327.getUnit(combo_r328.units, combo_r328.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](combo_r328.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r327.vhAlgorithm.vhcurrencyunit(combo_r328.price), " ");
} }
function EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_Template, 11, 5, "tr", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r318.combos);
} }
function EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_4_Template, 7, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "nz-switch", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_Template_nz_switch_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r338); const data_r318 = restoredCtx.$implicit; return data_r318.choose = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_ng_container_15_Template, 2, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r318 = ctx.$implicit;
    const item_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r318.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r318.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r316.getUnit(data_r318.units, data_r318.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r318.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r316.vhAlgorithm.vhcurrencyunit(data_r318.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r316.vhAlgorithm.vhcurrencyunit(data_r318.price_origin));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r318.choose)("nzDisabled", ctx_r316.checkDisableChooseProductGift(item_r313) && !data_r318.choose);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r318.ptype == 5);
} }
function EditComponent_ng_container_162_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](13, EditComponent_ng_container_162_ng_container_21_ng_container_1_span_13_Template, 3, 3, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "td", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](19, EditComponent_ng_container_162_ng_container_21_ng_container_1_ng_container_19_Template, 16, 9, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r313.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 7, "_Selected gift quantity"), ": ", item_r313.promotions_maximum, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](11, 9, "List of purchased products"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r313.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](18, 11, "List of gifted products"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r313.products_gift);
} }
function EditComponent_ng_container_162_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_ng_container_162_ng_container_21_ng_container_1_Template, 20, 13, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r313 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r313.pmtype == 6);
} }
const _c0 = function () { return { y: "400px" }; };
function EditComponent_ng_container_162_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "nz-table", 157, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, EditComponent_ng_container_162_ng_container_21_Template, 2, 1, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r311 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzData", ctx_r23.invoiceDetail)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 11, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 13, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 15, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 17, "Functions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _r311.data);
} }
function EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_4_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r350 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r350.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 3, element_r350.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r350._id);
} }
function EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r353 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "nz-select", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_4_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r353); const data_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return data_r346.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_4_nz_option_6_Template, 2, 6, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r346.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r346.lots);
} }
function EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_nz_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r359 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r359.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 3, element_r359.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r359._id);
} }
function EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r362 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "nz-select", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_Template_nz_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r362); const combo_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return combo_r356.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_nz_option_6_Template, 2, 6, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const combo_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", combo_r356.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", combo_r356.lots);
} }
function EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_Template, 7, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r356 = ctx.$implicit;
    const ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("- ", combo_r356.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", combo_r356.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r355.getUnit(combo_r356.units, combo_r356.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](combo_r356.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r355.vhAlgorithm.vhcurrencyunit(combo_r356.price), " ");
} }
function EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_Template, 11, 5, "tr", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r346.combos);
} }
function EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r366 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](4, EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_4_Template, 7, 8, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "nz-switch", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_Template_nz_switch_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r366); const data_r346 = restoredCtx.$implicit; return data_r346.choose = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](15, EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_ng_container_15_Template, 2, 1, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r346 = ctx.$implicit;
    const item_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2).$implicit;
    const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r346.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r346.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r345.getUnit(data_r346.units, data_r346.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r346.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r345.vhAlgorithm.vhcurrencyunit(data_r346.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r345.vhAlgorithm.vhcurrencyunit(data_r346.price_origin));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r346.choose)("nzDisabled", ctx_r345.checkDisableChooseProductGift(item_r343) && !data_r346.choose);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r346.ptype == 5);
} }
function EditComponent_ng_container_164_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, EditComponent_ng_container_164_ng_container_21_ng_container_1_ng_container_7_Template, 16, 9, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](item_r343.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate2"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 4, "_Selected gift quantity"), ": ", item_r343.promotions_maximum, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", item_r343.products_gift);
} }
function EditComponent_ng_container_164_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_ng_container_164_ng_container_21_ng_container_1_Template, 8, 6, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r343 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", item_r343.products_gift);
} }
function EditComponent_ng_container_164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "nz-table", 157, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, EditComponent_ng_container_164_ng_container_21_Template, 2, 1, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r341 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzData", ctx_r24.product_gift_type7)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 11, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 13, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 15, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 17, "Functions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _r341.data);
} }
function EditComponent_ng_container_167_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "i", 169);
} }
function EditComponent_ng_container_167_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "span", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r374 = ctx.$implicit;
    const ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", item_r374._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", item_r374.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](8, 6, item_r374.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](11, 9, item_r374.date_exp, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 12, "Stock"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](17, 14, item_r374.quantity_branch[ctx_r372.id_branch] / ctx_r372.tempDetail.ratio, "1.0-2"));
} }
function EditComponent_ng_container_167_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 1, "No data"));
} }
function EditComponent_ng_container_167_Template(rf, ctx) { if (rf & 1) {
    const _r376 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "nz-input-group", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "input", 164, 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("keyup", function EditComponent_ng_container_167_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r376); const _r369 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](4); const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r375.searchLot(_r369.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](6, EditComponent_ng_container_167_ng_template_6_Template, 1, 0, "ng-template", null, 166, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "nz-radio-group", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_167_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r376); const ctx_r377 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r377.tempDetail.id_lotproduct = $event; })("ngModelChange", function EditComponent_ng_container_167_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r376); const ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r378.changeLot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](9, EditComponent_ng_container_167_div_9_Template, 18, 17, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, EditComponent_ng_container_167_div_10_Template, 3, 3, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r370 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](7);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzSuffix", _r370);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx_r25.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx_r25.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx_r25.tempDetail.lots.length);
} }
function EditComponent_ng_template_168_Template(rf, ctx) { if (rf & 1) {
    const _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_ng_template_168_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r380); const ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r379.handleCancelChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_ng_template_168_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r380); const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r381.handleChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx_r27.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 5, "Ok"));
} }
function EditComponent_nz_modal_170_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](0, "nz-option", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r390 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r390.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind2"](1, 3, element_r390.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", element_r390._id);
} }
function EditComponent_nz_modal_170_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "nz-select", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_nz_modal_170_ng_container_2_ng_container_21_ng_container_1_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r393); const data_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit; return data_r387.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](7, EditComponent_nz_modal_170_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template, 2, 6, "nz-option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "td", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]().$implicit;
    const ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r387.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", data_r387.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", data_r387.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx_r388.getUnit(data_r387.units, data_r387.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r387.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r388.vhAlgorithm.vhcurrencyunit(data_r387.price), " ");
} }
function EditComponent_nz_modal_170_ng_container_2_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](1, EditComponent_nz_modal_170_ng_container_2_ng_container_21_ng_container_1_Template, 14, 9, "ng-container", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r387 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", data_r387.lots);
} }
function EditComponent_nz_modal_170_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "nz-table", 157, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "th", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "th", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "th", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "th", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "th", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, EditComponent_nz_modal_170_ng_container_2_ng_container_21_Template, 2, 1, "ng-container", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r385 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](2);
    const ctx_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzData", ctx_r382.tempDetail.combos)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](10, 11, "Lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](13, 13, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](16, 15, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 17, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", _r385.data);
} }
function EditComponent_nz_modal_170_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r396 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_nz_modal_170_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r396); const ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r395.show_modal_select_lots_combo = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_nz_modal_170_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r396); const ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](2); return ctx_r397.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](5, 4, "Ok"));
} }
function EditComponent_nz_modal_170_Template(rf, ctx) { if (rf & 1) {
    const _r399 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "nz-modal", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function EditComponent_nz_modal_170_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r399); const ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r398.show_modal_select_lots_combo = $event; })("nzOnCancel", function EditComponent_nz_modal_170_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r399); const ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r400.show_modal_select_lots_combo = false; })("nzOnOk", function EditComponent_nz_modal_170_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r399); const ctx_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r401.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](2, EditComponent_nz_modal_170_ng_container_2_Template, 22, 20, "ng-container", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](3, EditComponent_nz_modal_170_ng_template_3_Template, 6, 6, "ng-template", null, 176, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r383 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](4);
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](1, 4, "Select lot number for products in combo"), ": ", ctx_r28.tempDetail.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzFooter", _r383)("nzVisible", ctx_r28.show_modal_select_lots_combo);
} }
function EditComponent_app_change_price_type_171_Template(rf, ctx) { if (rf & 1) {
    const _r403 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-change-price-type", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("changePriceType", function EditComponent_app_change_price_type_171_Template_app_change_price_type_changePriceType_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r403); const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r402.changePriceType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("showModalChangePriceType", ctx_r29.showModalChangePriceType)("default_price_type", ctx_r29.default_price_type);
} }
function EditComponent_app_customer_profile_172_Template(rf, ctx) { if (rf & 1) {
    const _r405 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-customer-profile", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeInfoCustomer", function EditComponent_app_customer_profile_172_Template_app_customer_profile_closeInfoCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r405); const ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r404.closeInfoCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visibleInfoCustomer", ctx_r30.visibleInfoCustomer)("customer", ctx_r30.customer);
} }
function EditComponent_app_add_customer_173_Template(rf, ctx) { if (rf & 1) {
    const _r407 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-add-customer", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAddCustomer", function EditComponent_app_add_customer_173_Template_app_add_customer_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r407); const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r406.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("showDrawerAddCusomer", ctx_r31.showDrawerAddCusomer);
} }
function EditComponent_app_retail_info_174_Template(rf, ctx) { if (rf & 1) {
    const _r409 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "app-retail-info", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAddCustomer", function EditComponent_app_retail_info_174_Template_app_retail_info_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r409); const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r408.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("showDrawerAddRetail", ctx_r32.showDrawerAddRetail)("retail_name", ctx_r32.invoice.retail_name)("retail_phone", ctx_r32.invoice.retail_phone)("retail_address", ctx_r32.invoice.retail_address);
} }
class EditComponent {
    constructor(router, vhComponent, languageService, vhQuerySales, vhAlgorithm, vhAuth, cdRef, fncService, nzModalService) {
        // set nhân viên mặc định
        this.router = router;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.cdRef = cdRef;
        this.fncService = fncService;
        this.nzModalService = nzModalService;
        this.url = '';
        this.display_promotion_selling_price = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').display_promotion_selling_price;
        this.warning_lot_expried = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').warning_lot_expried;
        this.invoice = this.router.getCurrentNavigation().extras.state.invoice;
        this.subTotal = 0;
        this.taxValue = 0;
        this.invoiceDetail = this.router.getCurrentNavigation().extras.state.invoiceDetail;
        this.warrantyProd = this.router.getCurrentNavigation().extras.state.warrantyProd;
        this.warrantyNote = this.router.getCurrentNavigation().extras.state.warrantyNote;
        this.warrantyDel = [];
        this.id_receipt = this.router.getCurrentNavigation().extras.state.id_receipt;
        this.listTax = this.vhQuerySales.getlocalTaxs().filter(tax => tax.status);
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.employee = {};
        this.pickerTime = new Date();
        this.discount_bill = 0;
        this.percent_discount_bill = 0;
        this.is_discount_bill = false;
        this.list_earning_point_bills = [];
        this.list_earning_points_products = [];
        this.customer_group = [];
        this.point_validity = 0;
        this.showModalChangePriceType = false;
        this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
        this.checkPrinter = false;
        this.searchProductList = false;
        // -------modal edit unit price-------
        this.isVisibleEditUnitPrice = false;
        // ----set customer-----
        this.radioValue = 1;
        this.showModalOtherDiscount = false;
        this.value_discount_point = 0;
        this.product_codes = [];
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
        this.isGotPromotion = false;
        this.showProductGift = false;
        this.product_gift_type7 = [];
        this.showProductGiftType7 = false;
        this.gotten_gift_type7 = false;
        this.bill_details_pmtype_7 = [];
        this.show_modal_select_lots = false;
        this.list_search_lot = [];
        this.earning_point = 0;
        this.show_modal_select_lots_combo = false;
        this.invoice.id_technician = (this.vhAuth.getUser()._id);
        this.invoice.id_employee = (this.vhAuth.getUser()._id);
        this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
        this.invoice.id_branch = (this.vhQuerySales.getDefaultBranch()._id);
        if (this.vhAuth.checkMyPermission('default_price_type_1'))
            this.default_price_type = 1;
        else if (this.vhAuth.checkMyPermission('default_price_type_2'))
            this.default_price_type = 2;
        this.invoice.price_type = (this.default_price_type);
        if (!this.warrantyProd.length)
            this.addWarrantyProd();
        if (!this.warrantyNote.length)
            this.addWarrantyNote();
        // ------bắt sự kiện nhấn phím nóng-----
        this.eventKeypress();
    }
    ngOnInit() {
        if (!this.invoice.payment_coupons)
            this.invoice.payment_coupons = 0;
        if (!this.invoice.payment_points)
            this.invoice.payment_points = 0;
        let tax = this.listTax.find(item => item.default);
        if (tax) {
            this.id_tax = tax._id;
            this.invoice.tax = (tax['value']);
        }
        let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_warranty');
        this.printer = printer ? printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)] : { discount_hidden: false, note_hidden: false, fee_hidden: false, tax_hidden: false, debt_hidden: false };
        this.checkPrinter = this.printer.enable;
        //tính tổng tiền
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
            else if (this.invoiceDetail.length > 0) {
                switch (keycode) {
                    case 114:
                        this.payInvoice(16);
                        break;
                    case 112:
                        this.payInvoice(15, false);
                        break;
                    case 113: {
                        if (this.checkPrinter)
                            this.payInvoice(15, true);
                        break;
                    }
                }
            }
        };
        document.addEventListener('keydown', this.event, false);
    }
    ngAfterViewInit() {
        this.vhAlgorithm.waitingStack().then(() => {
            if (document.querySelector(".discount-price"))
                this.discount_price = this.vhAlgorithm.vhnumeral(".discount-price");
            if (document.querySelector(".invoice-fee"))
                this.invoice_fee = this.vhAlgorithm.vhnumeral(".invoice-fee");
        });
        // get các loại chương trình tích điểm
        Promise.all([
            this.vhQuerySales.getEarningPointsBills(),
            this.vhQuerySales.getEarningPointsProducts(),
        ])
            .then(([earning_point_bills, earning_points_products]) => {
            // this.list_earning_point_bills = this.vhQuerySales.getLocalAppSettingNameStation('sales_program').enable_sales_method_all_branch ? earning_point_bills.filter( item => item.id_branch == this.vhQuerySales.getDefaultBranch()._id) : earning_point_bills;
            // this.list_earning_points_products =  this.vhQuerySales.getLocalAppSettingNameStation('sales_program').enable_sales_method_all_branch ? earning_points_products.filter( item => item.id_branch == this.vhQuerySales.getDefaultBranch()._id) : earning_points_products;
            this.list_earning_point_bills = earning_point_bills;
            this.list_earning_points_products = earning_points_products;
            this.customer_group = this.vhQuerySales.getlocalCustomerClasss();
        });
    }
    deleteGoods(detail, index) {
        this.vhComponent.alertConfirm("", "", `${this.languageService.translate("Delete")} ${detail.name}?`, "OK", this.languageService.translate("Cancel"))
            .then(() => {
            if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_warranty)
                this.removeInvoiceDetail(detail.id_product);
            else {
                this.invoiceDetail.splice(index, 1);
            }
            if (this.is_discount_bill) {
                setTimeout(() => {
                    this.getDiscountBillOfCustomer();
                }, 200);
            }
            else {
                setTimeout(() => {
                    this.invoice.discount = ((this.percent_discount_bill / 100) * this.subTotal);
                    if (!this.gotten_gift_type7)
                        this.handlePromotionType7(this.bill_details_pmtype_7);
                }, 200);
            }
        }, () => { });
    }
    openSearchProductList() {
        this.searchProductList = true;
    }
    closeSearchProductList(data) {
        if (data) {
            if (data.manylot && !data.lot_number)
                this.openModalChooseLot(data);
            else {
                if (data.combos && data.combos.filter(e => e.lots && !e.id_lotproduct).length) {
                    this.tempDetail = data;
                    this.show_modal_select_lots_combo = true;
                }
                else {
                    let price = this.default_price_type == 1 ? data.price : data.price2 ? data.price2 : data.price; // check 2 đk là kiểu giá bán và có giá bán sỉ hay ko
                    if (!this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').show_product_mutil_line_warranty)
                        this.addInvoiceDetail(Object.assign(Object.assign({}, data), { price: price, earning_points_product: this.getTotalEarningPointProduct(data, null) }), null);
                    else
                        this.addInvoiceDetailMutilLine(Object.assign(Object.assign({}, data), { price: price, earning_points_product: this.getTotalEarningPointProduct(data, null) }), null);
                }
            }
        }
        if (this.is_discount_bill) {
            setTimeout(() => {
                this.getDiscountBillOfCustomer();
            }, 200);
        }
        else {
            setTimeout(() => {
                if (!this.gotten_gift_type7)
                    this.handlePromotionType7(this.bill_details_pmtype_7);
                this.invoice.discount = ((this.percent_discount_bill / 100) * this.subTotal);
            }, 200);
        }
        this.searchProductList = false;
    }
    goBack() {
        this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Are you sure to cancel the sales order")}?`, "OK", this.languageService.translate('Cancel'))
            .then(() => { this.isExit = true; this.router.navigate([this.url], { state: this.dataRestore }); }, () => { });
    }
    checkQuantityProduct(product, event) {
        if (!event)
            product.quantity = 1;
        this.setSubTotal();
        if (this.is_discount_bill) {
            setTimeout(() => {
                this.getDiscountBillOfCustomer();
            }, 200);
        }
        else {
            setTimeout(() => {
                this.invoice.discount = ((this.percent_discount_bill / 100) * this.subTotal);
                if (!this.gotten_gift_type7)
                    this.handlePromotionType7(this.bill_details_pmtype_7);
            }, 200);
        }
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
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
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
            if (this.is_discount_bill) {
                setTimeout(() => {
                    this.getDiscountBillOfCustomer();
                }, 200);
            }
            else {
                setTimeout(() => {
                    this.invoice.discount = ((this.percent_discount_bill / 100) * this.subTotal);
                    if (!this.gotten_gift_type7)
                        this.handlePromotionType7(this.bill_details_pmtype_7);
                }, 200);
            }
        }
        else {
            this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
        }
    }
    handleCancelEditUnit() { this.isVisibleEditUnitPrice = false; }
    /**
    *  sự kiện nhận thay đổi giá từ output component app-change-price-type
    * @event : boolean | null
    */
    changePriceType(event) {
        this.showModalChangePriceType = false;
        if (event != null) { // nếu có thay đổi kiểu giá bán thì cập nhật lại giá các sản phẩm thành giá bán sỉ
            this.default_price_type = event;
            if (this.invoiceDetail.length) { // nếu có  length mơi update
                let bill_details = this.invoiceDetail;
                for (let i in bill_details) {
                    let price_update = 0;
                    let product = this.vhQuerySales.getlocalDetailProduct(bill_details[i].id_subproduct ? bill_details[i].id_subproduct : bill_details[i].id_product);
                    product = Object.assign(Object.assign({}, product), this.vhQuerySales.getUnit_byRatio(product.units, bill_details[i].ratio));
                    if (event == 1) {
                        price_update = product.price;
                    }
                    else {
                        price_update = product.price2 ? product.price2 : product.price;
                    }
                    bill_details[i].price = price_update;
                    bill_details[i].price_origin = price_update;
                }
                this.setSubTotal();
                if (this.is_discount_bill) {
                    setTimeout(() => {
                        this.getDiscountBillOfCustomer();
                    }, 200);
                }
                else {
                    setTimeout(() => {
                        if (!this.gotten_gift_type7)
                            this.handlePromotionType7(this.bill_details_pmtype_7);
                    }, 200);
                }
            }
            this.invoice.price_type = (event);
        }
    }
    // -------set employee-------
    closeAndReceiveTechnician(event) {
        if (event) {
            this.invoice.id_technician = (event);
        }
    }
    closeAndReceiveReceptionist(event) {
        if (event) {
            this.invoice.id_employee = (event);
        }
    }
    closeAndReceiveCustomer(event) {
        if (event) {
            this.invoice.id_customer = (event);
            this.getClassAndProgram(event);
        }
    }
    changeCustomerType(event) {
        if (this.radioValue == 1)
            this.invoice.id_customer = ("id_retail");
        if (event == 2 && this.invoice.retail_name) {
            this.nzModalService.confirm({
                nzTitle: `${this.languageService.translate('Retail customer information will be lost')}?`,
                nzCancelText: this.languageService.translate("Cancel"),
                nzOkText: "Ok",
                nzOnOk: () => { this.clearRetailCustomer(); },
                nzOnCancel: () => { this.radioValue = 1; },
            });
        }
        this.getClassAndProgram(this.invoice.id_customer);
    }
    /**
     * hàm này để gán chương trình tich diem hóa đơn và sản phẩm của khách hàng
     */
    getClassAndProgram(id_customer) {
        this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
        this.customer_class = this.customer_group.find(item => item._id == this.vhQuerySales.getlocalCustomer(id_customer).id_customer_class);
        if (this.customer_class && this.customer_class.id_earning_points_bill) {
            this.program_bill = this.list_earning_point_bills.find(item => item._id == this.customer_class.id_earning_points_bill);
        }
        if (this.customer_class && this.customer_class.id_earning_points_product) {
            this.program_product = this.list_earning_points_products.find(item => item._id == this.customer_class.id_earning_points_product);
        }
        if (!this.customer_class) {
            this.program_bill = null;
            this.program_product = null;
        }
        this.point_validity = this.vhQuerySales.getlocalCustomerPoints(this.invoice.id_customer);
        this.getDiscountMethodCustomer(this.invoice.id_customer);
    }
    getDiscountMethodCustomer(id_customer) {
        var _a;
        let check = this.vhQuerySales.getlocalDiscount_bill((_a = this.customer_class) === null || _a === void 0 ? void 0 : _a.id_discount_bill);
        if (check) {
            this.is_discount_bill = true;
            this.getDiscountBillOfCustomer();
            this.vhComponent.alertMessageDesktop('success', this.languageService.translate("This customer applies the discount calculation formula ") + check.name, 5000);
        }
        else {
            this.is_discount_bill = false;
            this.invoice.discount_bill = (0);
        }
    }
    getDiscountBillOfCustomer() {
        this.discount_bill = this.vhQuerySales.getDiscount_bill_byCustomer(this.subTotal, this.invoice.id_customer) ? this.vhQuerySales.getDiscount_bill_byCustomer(this.subTotal, this.invoice.id_customer).discount : 0;
        this.invoice.discount_bill = (this.discount_bill);
        this.setTotal();
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
        if (this.isGotPromotion)
            this.getPromotions();
    }
    changeTax(event) {
        let tax = this.listTax.find(item => item._id == event);
        this.invoice.tax = (tax.value);
        this.setTaxValue();
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
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
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    editPercentDiscount(value) {
        if (parseFloat(value) > 100)
            document.getElementById("percent-discount-price")['value'] = 0;
        else
            this.percent_discount_bill = value;
        this.invoice.discount = this.subTotal * (this.percent_discount_bill / 100);
        this.setTotal();
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    openModalOtherDiscount() {
        this.showModalOtherDiscount = true;
    }
    handleOkOtherDiscount() {
        if (this.invoice.payment < this.invoice.payment_points + this.invoice.payment_coupons)
            this.invoice.payment = (0);
        this.showModalOtherDiscount = false;
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
    }
    calculatePoint2Money(value) {
        if (value <= this.point_validity) {
            this.value_discount_point = value;
            this.invoice.payment_points = ((value / this.customer_class.payment.points) * this.customer_class.payment.money);
            this.invoice.use_points = (value);
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vượt quá giới hạn điểm cho phép"));
        }
    }
    getDiscountOfCoupon(code) {
        if (code)
            this.vhQuerySales.getCoupon_Code_Name_Release_byCode(code)
                .then((product_codes) => {
                if (product_codes && !this.product_codes.find(item => item.code == code)) {
                    switch (product_codes.status) {
                        case 1: {
                            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Phiếu này chưa được quy đổi"));
                            break;
                        }
                        case 3: {
                            if (new Date() < new Date(product_codes.date_expire)) {
                                this.product_codes.push(product_codes);
                                this.invoice.payment_coupons = (product_codes.value);
                                this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Sử dụng coupon thành công"));
                            }
                            else {
                                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Phiếu này đã hết hạn sử dụng"), 8000);
                            }
                            break;
                        }
                        case 4: {
                            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Phiếu này đã được sử dụng"), 8000);
                            break;
                        }
                    }
                }
                if (!product_codes)
                    this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Không tìm thấy phiếu này"), 8000);
                setTimeout(() => {
                    document.getElementById('coupon').getElementsByTagName("input")[0].value = '';
                }, 200);
            });
    }
    onCloseProductCode(item) {
        this.product_codes.splice(this.product_codes.findIndex(i => i._id == item._id), 1);
        this.invoice.payment_coupons = (-item.value);
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
        if (!this.gotten_gift_type7)
            this.handlePromotionType7(this.bill_details_pmtype_7);
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
    getTotalATax() {
        return this.invoice.total + this.taxValue;
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
    payInvoice(bill_type = 16, print) {
        if (this.vhAuth.checkMyPermission("warranty_enable_payment") || bill_type == 16) {
            if (bill_type == 16) {
                this.invoice.payment_coupons = 0;
                this.invoice.payment_points = (0);
                this.invoice.use_points = (0);
            }
            if (this.getTotalEarningPoint() && bill_type != 16) {
                let earned_points = this.getTotalEarningPoint() - this.value_discount_point;
                this.vhQuerySales.updateCustomer_byEarnedPoints(this.invoice.id_customer, earned_points);
                this.invoice.earning_points_bill = (this.getTotalEarningPoint());
            }
            if (this.warrantyProd.length == 1 && !this.warrantyProd[0].content) {
                this.vhComponent.showToast(2000, this.languageService.translate("Please add a product warranty"), "alert-toast");
            }
            else {
                this.vhComponent.alertConfirm(bill_type == 16 ? `${this.languageService.translate("Save")}?` : `${this.languageService.translate("Pay")}?`, "", "", "OK", this.languageService.translate("Cancel")).then(() => {
                    this.vhComponent.showLoading("", "transparent-loading").then(() => {
                        this.createOrUpdate(bill_type).then(bill => {
                            this.vhComponent.hideLoading(0).then(() => {
                                if (bill == "create")
                                    this.vhComponent.showToast(2000, `${this.languageService.translate("Warranty invoice")} ${this.invoice.bill_code} ${this.languageService.translate("has been created successfully")}`, "success-toast");
                                else
                                    this.vhComponent.showToast(2000, `${this.languageService.translate("Warranty invoice")} ${this.invoice.bill_code} ${this.languageService.translate("has been updated successfully")}`, "success-toast");
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
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    createOrUpdate(bill_type) {
        return new Promise(resolve => {
            this.vhQuerySales.updateBill_Billdetail(this.invoice._id || this.id_receipt, this.getCreateUpdateInvoice(bill_type), this.getCreateUpdateInvoiceDetail()).then((res) => {
                Promise.all([
                    this.createWarranty(this.getCreateWarranty()),
                    this.updateWarranty(this.getUpdateWarranty()),
                    this.delWarranty(this.getDelWarranty())
                ]).then(() => resolve('update')).catch(err => {
                    this.vhComponent.hideLoading(0);
                });
            }).catch(err => {
                this.vhComponent.hideLoading(0);
            });
        });
    }
    ///////////////////////////////////////////XỬ LÝ WARRANTY///////////////////////////////////////
    createWarranty(array) {
        const promiseAddWarranty = [];
        for (let i = 0; i < array.length; i++) {
            promiseAddWarranty.push(this.vhQuerySales.addWarranty(array[i]));
        }
        return Promise.all(promiseAddWarranty);
    }
    updateWarranty(array) {
        const promiseUpdateWarranty = [];
        for (let i = 0; i < array.length; i++) {
            promiseUpdateWarranty.push(this.vhQuerySales.updateWarranty(array[i]._id, array[i]));
        }
        return Promise.all(promiseUpdateWarranty);
    }
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
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_warranty_warranty_k57_col3_warranty_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__.WarrantyK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_warranty_warranty_k80_col3_warranty_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__.WarrantyK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_warranty_warranty_k80_col4_warranty_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.WarrantyK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_warranty_warranty_a5_warranty_a5_component__WEBPACK_IMPORTED_MODULE_3__.WarrantyA5Component;
            case 'print_size_a4': return src_app_sales_components_print_warranty_warranty_a4_warranty_a4_component__WEBPACK_IMPORTED_MODULE_4__.WarrantyA4Component;
            default: return src_app_sales_components_print_warranty_warranty_a4_warranty_a4_component__WEBPACK_IMPORTED_MODULE_4__.WarrantyA4Component;
        }
    }
    handle() {
        this.isExit = true;
        this.router.navigate([this.url], { state: this.dataRestore });
    }
    handlePrint() {
        this.checkPrint().then((printer) => {
            if (printer)
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice: this.invoice, invoice_detail: this.invoiceDetail, warrantyProd: this.warrantyProd, warrantyNote: this.warrantyNote }, false, false, `modal-print-${printer['_id']}`).then((modal) => {
                    modal.onWillDismiss().then(() => this.handle());
                });
        }, (err) => this.vhComponent.alertMessage(this.languageService.translate("Function"), "", this.languageService.translate("Please turn on the printer function"), "OK")
            .then(() => this.handle()));
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
    // checkDeactivate(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return nextState.url == '/login' ? true : (this.isExit ? this.isExit : this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Are you sure to cancel the sales order"), "OK", (this.languageService.translate("Cancel"))).then(() => { return true }).catch(() => { return false }))
    // }
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
    openSearchProductListWarranty() {
        this.searchProductListWarranty = !this.searchProductListWarranty;
    }
    closeSearchProductListWarranty(event) {
        if (event) {
            this.addWarrantyProd();
            this.warrantyProd[0].content = event.name;
        }
        this.searchProductListWarranty = false;
    }
    editWarrantyProd(index, item) {
        if (this.warrantyProd.length > 1 && item.content == '')
            this.removeWarrantyProd(index, item);
    }
    editWarrantyNote(index, item) {
        if (this.warrantyNote.length > 1 && item.content == '')
            this.removeWarrantyNote(index, item);
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
        else {
            this.showDrawerAddCusomer = false;
            if (result)
                this.invoice.id_customer = (result);
        }
    }
    handleAddGiftType7() {
        this.showProductGiftType7 = false;
        if (!this.gotten_gift_type7)
            for (let i in this.product_gift_type7) {
                // this.product_gift_type7[i].products_gift = this.product_gift_type7[i].products_gift.filter(item => item.choose).map(e => { return { ...e } })
                if (this.product_gift_type7[i].products_gift.length)
                    this.addBill_detail_promotion(this.product_gift_type7[i]);
            }
        this.gotten_gift_type7 = true;
    }
    /**
    * hàm lấy quà
    */
    getPromotions() {
        this.gotten_gift_type7 = false;
        this.vhComponent.showLoading('')
            .then(() => {
            this.vhQuerySales.changeBillDetails_withPromotions(this.invoiceDetail, this.invoice.date).then((bill_details_display) => {
                this.handleChooseLotForPromotion(bill_details_display.bill_details_pmtype_0to6);
                this.handleChooseLotForPromotion(bill_details_display.bill_details_pmtype_7);
                this.bill_details_pmtype_7 = this.vhAlgorithm.sortNumberbyASC([...bill_details_display.bill_details_pmtype_7], 'total_bill_value');
                this.isGotPromotion = true;
                this.vhComponent.hideLoading(0);
                this.invoiceDetail = [...bill_details_display.bill_details_pmtype_0to6,];
                // if (bill_details_display.filter(item => item.products_gift).length) this.showProductGift = true;
                this.getEarningpointPromotion();
                // this.product_gift_type7 = [...bill_details_display.bill_details_pmtype_7]
                this.handlePromotionType7(this.bill_details_pmtype_7);
                this.setSubTotal();
            }, error => {
                this.vhComponent.hideLoading(0).then(() => {
                    this.vhComponent.showToast(5000, error, "alert-toast");
                });
            });
        });
    }
    handlePromotionType7(bill_details_pmtype_7) {
        if (bill_details_pmtype_7.length)
            if (bill_details_pmtype_7.findLastIndex(e => e.total_bill_value <= this.getTotalATax()) != -1)
                this.product_gift_type7 = [bill_details_pmtype_7[bill_details_pmtype_7.findLastIndex(e => e.total_bill_value <= this.getTotalATax())]];
            else
                this.product_gift_type7 = [];
        else
            this.product_gift_type7 = [];
        // 
    }
    handleChooseLotForPromotion(promotion) {
        for (let i of promotion) {
            if (i.products_gift) {
                for (let product of i.products_gift) {
                    if (product.lots && product.lots.length) {
                        let min_date_exp = this.vhAlgorithm.sortDatebyASC(product.lots, 'date_exp');
                        product['id_lotproduct'] = min_date_exp[0]._id;
                        product['lot_number'] = min_date_exp[0].lot_number;
                    }
                    if (product.combos) {
                        product.combos.forEach(element => {
                            if (element.lots && element.lots.length) {
                                let min_date_exp = this.vhAlgorithm.sortDatebyASC(element.lots, 'date_exp');
                                element['id_lotproduct'] = min_date_exp[0]._id;
                                element['lot_number'] = min_date_exp[0].lot_number;
                            }
                        });
                    }
                }
            }
        }
    }
    /**
     * hàm này để get SubTotal mới của mảng đã lấy quà
     * đồng thời gán điểm tích lũy sản phẩm mới của các sản phẩm trong khuyến mãi nếu có
     */
    getEarningpointPromotion() {
        for (let i of this.invoiceDetail) {
            if (i.products_gift) {
                for (let product of i.products_gift) {
                    product.earning_points_product = this.getTotalEarningPointProduct(i, true);
                }
            }
            if (i.products) {
                for (let product of i.products) {
                    product.earning_points_product = this.getTotalEarningPointProduct(i, true);
                }
            }
            if (!i.id_promotion)
                i.earning_points_product = this.getTotalEarningPointProduct(i, null);
        }
        this.setSubTotal();
    }
    /**
     * hàm này để kiểm tra disable sản phẩm tặng hay ko
     * @param data phần tử trong mảng đã lấy quà
     * @returns
     */
    checkDisableChooseProductGift(data) {
        if (data.products_gift.filter(item => item.choose).length == data.promotions_maximum)
            return true;
        else
            return false;
    }
    getUnit(units, ratio) {
        return this.vhQuerySales.getUnit_byRatio(units, ratio).unit;
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
        if (this.warning_lot_expried) {
            let lot_select = this.list_search_lot.find(e => e._id == this.tempDetail.id_lotproduct);
            if (new Date().getTime() >= new Date(lot_select.date_exp).getTime()) {
                this.nzModalService.confirm({
                    nzTitle: this.languageService.translate("Lô này đã hết hạn! Tiếp tục bán sản phẩm này?"),
                    nzOnOk: () => {
                        this.show_modal_select_lots = false;
                        this.tempDetail.lots = this.list_search_lot;
                        if (!this.tempDetail.id_product)
                            this.closeSearchProductList(this.tempDetail);
                    },
                    nzOnCancel: () => {
                        // this.show_modal_select_lots = false;
                        // this.tempDetail.lots = this.list_search_lot;
                    }
                });
            }
            else {
                this.show_modal_select_lots = false;
                this.tempDetail.lots = this.list_search_lot;
                if (!this.tempDetail.id_product)
                    this.closeSearchProductList(this.tempDetail);
            }
        }
        else {
            this.show_modal_select_lots = false;
            this.tempDetail.lots = this.list_search_lot;
            if (!this.tempDetail.id_product)
                this.closeSearchProductList(this.tempDetail);
        }
    }
    handleCancelChooseLot() {
        this.show_modal_select_lots = false;
        this.tempDetail.lots = this.list_search_lot;
    }
    /**
     * hàm get điểm tích lũy theo hóa đơn
     * 1. get hạng khách hàng
     * 2. từ hạng khách hàng get tích điểm theo bill
     * 3. check các điều kiện của chương trình
     * a check sản phẩm khuyến mãi include_promotion_product
     * b  check giảm giá/ chiết khấu include_discount
     * c check thanh toán = điểm thưởng include_paid_points
     * d check phí  include_fee
     * e check thuế include_tax
     * @returns 0 | number
     */
    getEarningBill() {
        if (this.program_bill && this.subTotal > this.program_bill.bill_total_minimum) {
            let subTotal = this.subTotal;
            if (!this.program_bill.include_promotion_product) { // ko tích điểm sp có km =>  tính lại subTotal
                subTotal = this.getSubTotalNotPromotion();
                if (this.program_bill.include_discount)
                    subTotal = subTotal - this.invoice.discount - this.invoice.discount_bill;
                if (this.program_bill.include_paid_points && this.invoice.payment_points)
                    subTotal = subTotal - this.invoice.payment_points;
                if (this.program_bill.include_fee)
                    subTotal += this.invoice.fee;
                if (this.program_bill.include_tax)
                    subTotal += subTotal * (this.invoice.tax / 100);
                return ((subTotal - subTotal % this.program_bill.exchange.money) / this.program_bill.exchange.money) * this.program_bill.exchange.points;
            }
            else {
                subTotal = this.subTotal;
                if (this.program_bill.include_discount)
                    subTotal = subTotal - this.invoice.discount - this.invoice.discount_bill;
                if (this.program_bill.include_paid_points && this.invoice.payment_points)
                    subTotal = subTotal - this.invoice.payment_points;
                if (this.program_bill.include_fee)
                    subTotal += this.invoice.fee;
                if (this.program_bill.include_tax)
                    subTotal += subTotal * (this.invoice.tax / 100);
                return ((subTotal - subTotal % this.program_bill.exchange.money) / this.program_bill.exchange.money) * this.program_bill.exchange.points;
            }
        }
        else
            return 0;
    }
    /**
    * hàm này trả về tổng tiền của sản phẩm ko có chương trình khuyến mãi
    * return : number
    */
    getSubTotalNotPromotion() {
        return this.invoiceDetail.filter(item => item.price_origin == item.price).reduce((prev, next) => prev + next.quantity * next.price, 0);
    }
    /**
     * hàm này trả về tổng tiền của sản phẩm  ko có chương trình khuyến mãi thuộc chương trình tích điểm sản phẩm
     * return : number
     */
    getSubTotalNotPromotionOFProduct(products_of_program_earnig_product) {
        return this.invoiceDetail
            .filter(item => item.price_origin == item.price && products_of_program_earnig_product.find(i => i == item.id_product))
            .reduce((prev, next) => prev + next.quantity * next.price, 0);
    }
    /**
     * hàm này trả về tổng điểm được tích của tất cả sản phẩm
     * @returns 0 | number
     */
    getEarningProduct(products) {
        if (this.program_product) {
            let subTotal = 0;
            if (!this.program_product.include_promotion_product) { // tích điểm sp có km =>  tính lại subTotal
                subTotal = this.getSubTotalNotPromotionOFProduct(this.program_product.products);
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
            else {
                subTotal = products.filter(item => item.price_origin == item.price && this.program_product.products.find(i => i == item.id_product)).reduce((prev, next) => prev + next.quantity * next.price, 0);
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
        }
        else
            return 0;
    }
    /**
     * hàm này trả về tổng điểm được tích của đơn và sản phẩm
     * @returns 0 | number
     */
    getTotalEarningPoint() {
        this.earning_point = this.getEarningProduct(this.invoiceDetail) + this.getEarningBill();
        return this.earning_point;
    }
    /**
     * hàm này trả về điểm được tích của sản phẩm được thêm
     * @param product sản phẩm được thêm
     * @returns 0 | number
     */
    getTotalEarningPointProduct(product, promotion) {
        if (this.program_product) {
            let subTotal = 0;
            if (!this.program_product.include_promotion_product && promotion) { // tích điểm sp có km =>  tính lại subTotal
                subTotal = this.program_product.products.find(i => i == product._id) ? product.price : 0;
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
            else {
                subTotal = this.program_product.products.find(i => i == product._id) ? product.price : 0;
                return ((subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money) * this.program_product.exchange.points;
            }
        }
        else
            return 0;
    }
    handleChooseLotCombo() {
        if (this.tempDetail.combos.filter(item => item.lots && !item.id_lotproduct).length)
            this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Vui lòng chọn lô cho sản phẩm thuộc combo này"));
        else {
            this.show_modal_select_lots_combo = false;
            this.closeSearchProductList(this.tempDetail);
        }
    }
    /******************************Xu ly warranty note *******************************/
    /** Thêm sản phẩm bảo hành */
    addWarrantyProd() {
        const add = () => {
            let item = { content: '', quantity: 1, type: 1, id_bill: this.invoice._id };
            if (this.invoice._id)
                item['id_bill'] = this.invoice._id;
            this.warrantyProd.unshift(item);
        };
        if (this.warrantyProd.length) {
            if (this.warrantyProd[0].content)
                add();
        }
        else
            add();
    }
    /** xóa sản phẩm bảo hành */
    removeWarrantyProd(index, item) {
        if (index == 0) {
            if (this.warrantyProd.length > 1)
                this.warrantyProd.splice(index, 1);
            else if (this.warrantyProd[index].content.length)
                this.warrantyProd[0].content = '';
        }
        else
            this.warrantyProd.splice(index, 1);
        if (item._id)
            this.warrantyDel.push(item);
    }
    /** Thêm ghi chú bảo hành */
    addWarrantyNote() {
        const add = () => {
            let item = { content: '', type: 2, id_bill: this.invoice._id };
            if (this.invoice._id)
                item['id_bill'] = this.invoice._id;
            this.warrantyNote.unshift(item);
        };
        if (this.warrantyNote.length) {
            if (this.warrantyNote[0].content)
                add();
        }
        else
            add();
    }
    /** Xóa ghi chú bảo hành */
    removeWarrantyNote(index, item) {
        if (index == 0) {
            if (this.warrantyNote.length > 1)
                this.warrantyNote.splice(index, 1);
            else if (this.warrantyNote[index].content.length)
                this.warrantyNote[0].content = '';
        }
        else
            this.warrantyNote.splice(index, 1);
        if (item._id)
            this.warrantyDel.push(item);
    }
    /** Lấy toàn bộ sản phẩm và ghi chú bảo hành */
    getWarranty() {
        return this.warrantyNote.concat(this.warrantyProd).filter(item => {
            if (item.content) {
                item.id_bill = this.invoice._id;
                return true;
            }
            else
                return false;
        });
    }
    getWarrantyProd() {
        return this.warrantyProd;
    }
    getWarrantyNote() {
        return this.warrantyNote;
    }
    getDelWarranty() {
        return this.warrantyDel;
    }
    getUpdateWarranty() {
        return this.warrantyNote.concat(this.warrantyProd).filter(item => item.content && item._id);
    }
    /** Lấy toàn bộ các sản phẩm và ghi chú bảo hành */
    getCreateWarranty() {
        return this.warrantyNote.concat(this.warrantyProd).filter(item => {
            if (!item.id_bill)
                item.id_bill = this.invoice._id;
            if (item.content && !item._id)
                return true;
            else
                return false;
        });
    }
    getInvoiceDetailCombos(idDetail) {
        let detailBill = this.invoiceDetail.find(detail => detail._id == idDetail);
        return detailBill ? detailBill.combos : null;
    }
    /******************************Xu ly invoice detail *******************************/
    /** Thêm sản phẩm vào bill detail */
    addInvoiceDetail(value, new_price) {
        if (value['id_subproduct']) {
            let index = this.invoiceDetail.findIndex(detail => detail['id_subproduct'] == value['id_subproduct'] && detail['ratio'] == value['ratio']);
            if (index != -1) {
                if (this.invoiceDetail[index]['quantity'] < 9999999999)
                    this.invoiceDetail[index]['quantity'] += 1;
            }
            else {
                this.addBill_Detail(value, new_price);
            }
        }
        else {
            let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id'] && detail['ratio'] == value['ratio']);
            if (index != -1) {
                if (this.invoiceDetail[index]['quantity'] < 9999999999)
                    this.invoiceDetail[index]['quantity'] += 1;
            }
            else {
                this.addBill_Detail(value, new_price);
            }
        }
        this.setSubTotal();
    }
    addBill_Detail(value, new_price) {
        let detail = {
            name: value.name,
            id_product: value._id,
            quantity: 1,
            ptype: value.type,
            unit: value.unit,
            units: value.units ? value.units : [],
            ratio: value.ratio ? value.ratio : 1,
            price: new_price != null ? new_price : value.price,
            price_origin: value.price,
            earning_points_product: value.earning_points_product ? value.earning_points_product : 0,
        };
        if (value.type == 5) {
            detail['cbtype'] = 5;
            detail['combos'] = [...value.combos.map(item => {
                    let product = {
                        id_product: item.id_product,
                        name: item.name,
                        ptype: item.type,
                        price: item.price,
                        quantity: item.quantity,
                        unit: item.unit,
                        units: item.units,
                        ratio: item.ratio ? item.ratio : 1
                    };
                    if (item.lots)
                        product['lots'] = item.lots;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item.id_subproduct)
                        product['id_subproduct'] = item.id_subproduct;
                    return product;
                })];
        }
        if (value.lot_number)
            detail['lot_number'] = value.lot_number;
        if (value.lots)
            detail['lots'] = value.lots;
        if (value.id_lotproduct)
            detail['id_lotproduct'] = value.id_lotproduct;
        if (value.id_subproduct)
            detail['id_subproduct'] = value.id_subproduct;
        this.invoiceDetail.unshift(detail);
    }
    addBill_detail_promotion(value) {
        this.invoiceDetail.push(value);
    }
    /** Thêm sản phẩm vào bill detail */
    addInvoiceDetailMutilLine(value, new_price) {
        let detail = {
            name: value.name,
            id_product: value._id,
            quantity: 1,
            ptype: value.type,
            unit: value.unit,
            price: new_price != null ? new_price : value.price,
            price_origin: value.price,
            units: value.units,
            ratio: value.ratio ? value.ratio : 1,
        };
        if (value.type == 5) {
            detail['subComboName'] = value.subComboName;
            detail['combos'] = [...value.combos.map(item => {
                    let product = {
                        id_product: item.id_product, name: item.name, ptype: item.type,
                        price: item.price, quantity: item.quantity,
                        units: item.units,
                        unit: item.unit, ratio: item.ratio ? item.ratio : 1
                    };
                    if (item.lots)
                        product['lots'] = item.lots;
                    if (item.id_lotproduct)
                        product['id_lotproduct'] = item.id_lotproduct;
                    if (item.id_subproduct)
                        product['id_subproduct'] = item.id_subproduct;
                    return product;
                })];
        }
        if (value.lot_number)
            detail['lot_number'] = value.lot_number;
        if (value.lots)
            detail['lots'] = value.lots;
        if (value.id_lotproduct)
            detail['id_lotproduct'] = value.id_lotproduct;
        if (value.id_subproduct)
            detail['id_subproduct'] = value.id_subproduct;
        this.invoiceDetail.unshift(detail);
        this.setSubTotal();
    }
    /** Xóa sản phẩm khỏi bill detail */
    removeInvoiceDetail(id) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == id);
        if (index != -1) {
            this.invoiceDetail.splice(index, 1);
            this.setSubTotal();
        }
    }
    setSubTotal() {
        // this.subTotal = this.invoiceDetail.reduce((prev: number, next) => prev + next.quantity * next.price, 0)
        let subTotal = 0;
        for (let i of this.invoiceDetail) {
            let total_product_gift = 0;
            let total_products = 0;
            if (i.products_gift) {
                total_product_gift = i.products_gift.filter(item => item.choose).reduce((prev, next) => prev + next.quantity * next.price, 0);
            }
            if (i.products) {
                total_products = i.products.reduce((prev, next) => prev + next.quantity * next.price, 0);
            }
            subTotal += total_products + total_product_gift + (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
        this.setTotal();
    }
    setTotal() {
        this.invoice.total = this.subTotal - this.invoice.discount - this.invoice.discount_bill - (this.invoice.payment_coupons + this.invoice.payment_points) + this.invoice.fee > 0 ? this.subTotal - this.invoice.discount - this.invoice.discount_bill - (this.invoice.payment_coupons + this.invoice.payment_points) + this.invoice.fee : 0;
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
    /** Lấy bill dùng cho database */
    getCreateUpdateInvoice(bill_type = null) {
        if (bill_type)
            this.invoice.bill_type = (bill_type);
        return this.invoice;
    }
    /** Lấy tất cả bill detail dùng cho database */
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map(item => {
            if (!item.pmtype) {
                let detail = {
                    id_product: item.id_product,
                    ptype: item.ptype,
                    price: item.price,
                    quantity: item.quantity,
                    earning_points_product: item.earning_points_product,
                    ratio: item.ratio,
                };
                if (item.id_lotproduct)
                    detail['id_lotproduct'] = item.id_lotproduct;
                if (item.id_subproduct)
                    detail['id_subproduct'] = item.id_subproduct;
                if (item.price < item.price_origin)
                    detail['price_origin'] = item.price_origin;
                if (item.price == item.price_origin)
                    detail['price_origin'] = item.price;
                if (item.ptype == 5) {
                    detail['combos'] = item.combos.map(combo => {
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
                return detail;
            }
            else {
                let detail = {
                    id_promotion: item.id_promotion,
                    pmtype: item.pmtype,
                };
                if (item.products_gift) {
                    if (item.products_gift.filter(ele => ele.choose).length) {
                        detail['products_gift'] = item.products_gift.filter(ele => ele.choose).map(e => {
                            let prod = {
                                id_product: e.id_product,
                                price: e.price,
                                price_origin: e.price_origin,
                                quantity: e.quantity,
                                ptype: e.ptype,
                                earning_points_product: e.earning_points_product,
                                ratio: e.ratio
                            };
                            if (e.ptype == 5) {
                                prod['combos'] = e.combos.map(combo => {
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
                            if (e.id_lotproduct)
                                prod['id_lotproduct'] = e.id_lotproduct;
                            if (e.id_subproduct)
                                prod['id_subproduct'] = e.id_subproduct;
                            return prod;
                        });
                        return detail;
                    }
                }
                else {
                    detail['products'] = item.products.map(e => {
                        let prod = {
                            id_product: e.id_product,
                            price: e.price,
                            price_origin: e.price_origin,
                            quantity: e.quantity,
                            ptype: e.ptype,
                            id_category: e.id_category,
                            earning_points_product: e.earning_points_product,
                            ratio: e.ratio
                        };
                        if (e.ptype == 5) {
                            prod['combos'] = e.combos.map(combo => {
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
                        if (e.id_lotproduct)
                            prod['id_lotproduct'] = e.id_lotproduct;
                        if (e.id_subproduct)
                            prod['id_subproduct'] = e.id_subproduct;
                        return prod;
                    });
                    return detail;
                }
            }
        }).filter(item => item);
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_5__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_6__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_20__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_20__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_20__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalService)); };
EditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["bill-type15-edit"]], inputs: { url: "url" }, decls: 175, vars: 133, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "18", 1, "title", "sales-cart-header-title"], ["nz-col", "", "nzSpan", "6", 1, "center-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 3, "disabled", "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["id", "waranty-invoice-prodAndnote-invoiceDetail", "nz-col", "", "nzSpan", "24", 1, "waranty-invoice-prodAndnote-invoiceDetail", "hideScrollbar"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "search-product-warrany"], ["slot", "end", "name", "search-outline", 2, "color", "var(--ion-color-vh-green)", "margin-right", "10px", "font-size", "1.3rem", "text-align", "end", "cursor", "pointer", 3, "click"], ["slot", "end", "src", "assets/icon/add.svg", 2, "color", "var(--ion-color-vh-green)", "font-size", "1.2rem", "text-align", "end", "cursor", "pointer", 3, "click"], ["nz-col", "", "nzSpan", "24"], [1, "hideScrollbar", "waranty-invoice-prod-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-best-selling"], ["nz-row", "", 1, "waranty-invoice-quote"], ["nz-col", "", "nzSpan", "8", 1, "waranty-invoice-quote-header"], ["nz-col", "", "nzSpan", "16", 1, "waranty-invoice-quote-header", 2, "text-align", "end"], ["nz-button", "", "nzType", "primary", 2, "margin-right", "8px", 3, "click"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 2, "margin-right", "8px", 3, "click"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 2, "font-size", "0.9rem", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], ["id", "waranty-invoice-quote-invoiceDetail", 1, "hideScrollbar", "waranty-invoice-quote-invoiceDetail"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], [1, "sales-bills-staff-name"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar", 2, "overflow", "visible"], [1, "sales-bills-customer-title"], [2, "color", "var(--ion-color-vh-white)", "padding-right", "5px", 3, "src", "click"], ["nzName", "radiogroup", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], [4, "ngIf"], ["nz-col", "", "nzSpan", "24", "style", "display: flex; justify-content: space-between;margin: 8px 0;", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 2, "display", "flex", "justify-content", "space-between"], [2, "cursor", "pointer", "color", "var(--ion-color-vh-green)", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["class", "sales-bills-content-discount", "style", "display: flex;justify-content: space-between;align-items: center;", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-total", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-fee", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-tax", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["style", "width: 16px;margin-left:10px", "src", "assets/icon/Iconfeather-edit.svg", 3, "click", 4, "ngIf"], ["class", "sales-bills-content-rest", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], [3, "payment_type", "id_wallet", "id_customer", "closeAndGetValuePayment"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], [3, "searchProductListWarranty", "closeSearchProductListWarranty", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditPay", ""], ["nzWidth", "50vw", "nzCancelText", "", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["nzWidth", "70vw", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice2", ""], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "showModalChangePriceType", "default_price_type", "changePriceType", 4, "ngIf"], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer", 4, "ngIf"], [3, "showDrawerAddCusomer", "closeAddCustomer", 4, "ngIf"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer", 4, "ngIf"], [1, "invoiceDetail-item"], ["nz-col", "", "nzSpan", "2", 1, "center-col", 3, "click"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "18", 1, "center-col"], [1, "max-width-two-line", 2, "width", "100%"], ["nz-input", "", 1, "nz-no-border", 3, "ngModel", "placeholder", "ngModelChange", "blur"], ["nz-col", "", "nzSpan", "4", 4, "ngIf"], ["nz-col", "", "nzSpan", "4"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["nz-row", "", 4, "ngIf"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["nz-popconfirm", "", "nzPopconfirmPlacement", "bottomLeft", "nz-col", "", "nzSpan", "1", 3, "nzPopconfirmTitle", "nzOnConfirm"], ["nz-col", "", "nzSpan", "23"], [2, "font-weight", "bold", "margin-bottom", "0"], ["nz-col", "", "nzSpan", "1"], ["nz-col", "", "nzSpan", "8"], [2, "margin-bottom", "0"], ["nz-col", "", "nzSpan", "3", 2, "text-align", "center"], ["nz-col", "", "nzSpan", "4", 2, "text-align", "center"], ["nz-col", "", "nzSpan", "4", 1, "invoiceDetail-item-quantity", "text-end", 3, "click"], [1, "max-width-two-line", 2, "border-bottom", "1px var(--ion-color-vh-gray) solid", "margin-left", "16px"], ["style", "margin-left:5px;font-size: 0.8rem;", 4, "ngIf"], ["nz-col", "", "nzSpan", "4", 2, "text-align", "right"], [1, "max-width-two-line"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["style", "font-size: 0.75rem; color: var(--ion-color-vh-black); font-weight: normal;", 4, "ngFor", "ngForOf"], [2, "font-size", "0.75rem", "color", "var(--ion-color-vh-black)", "font-weight", "normal"], [2, "margin-left", "5px", "font-size", "0.8rem"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline", 2, "cursor", "pointer", 3, "click"], ["nz-col", "", "nzSpan", "3"], [2, "width", "100%", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["id", "quantity", 3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue"], [3, "id_customer", "closeAndReceiveCustomer"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "cursor", "pointer", 3, "ngClass", "click"], ["nz-col", "", "nzSpan", "24", 2, "display", "flex", "justify-content", "space-between", "margin", "8px 0"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [2, "width", "auto"], ["id", "percent-discount-price", "type", "number", "max", "100", "min", "0", "step", "1", "maxlength", "3", "nz-input", "", 1, "border_bottom", 2, "width", "50px", 3, "ngModel", "blur"], ["percentDiscount", ""], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "border_bottom", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "border_bottom", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-tax"], ["nzBorderless", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "not-found", 4, "ngIf"], ["nz-col", "", "nzSpan", "7", 2, "text-align", "end"], ["nzBorderless", "", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], [1, "not-found"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline", 2, "font-size", "1rem", "margin-left", "8px", "cursor", "pointer", "color", "var(--ion-color-vh-green)", 3, "click"], ["src", "assets/icon/Iconfeather-edit.svg", 2, "width", "16px", "margin-left", "10px", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], [3, "searchProductListWarranty", "closeSearchProductListWarranty"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "8", 1, "center-col"], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "edit-pay", 3, "value"], ["nz-row", "", 1, "center-all-content"], ["nz-col", "", "nzSpan", "6"], ["nz-col", "", "nzSpan", "12", "id", "coupon", 2, "display", "flex"], ["nz-input", "", 3, "placeholder", "keyup.enter"], ["coupon", ""], ["nz-button", "", "nzType", "primary", 2, "margin-left", "8px", 3, "click"], ["nz-col", "", "nzSpan", "6", 1, "text-end"], ["nz-col", "", "nzSpan", "18"], ["nzMode", "closeable", 3, "nzColor", "nzOnClose", 4, "ngFor", "ngForOf"], ["nz-row", "", 1, "mt-8", "beetween-all-content"], ["nzMode", "closeable", 3, "nzColor", "nzOnClose"], ["nz-row", "", 1, "center-all-content", "mt-8"], ["nz-col", "", "nzSpan", "12"], [2, "width", "100%", 3, "ngModel", "nzPlaceHolder", "nzMin", "nzMax", "nzStep", "ngModelChange", "keyup"], ["point", ""], ["nz-row", "", 1, "mt-8"], ["nz-col", "", "nzSpan", "14"], ["nz-col", "", "nzSpan", "10", 1, "text-end"], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["colspan", "5"], [3, "ngModel", "nzDisabled", "ngModelChange"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], [2, "width", "100%", "padding", "8px 0", 3, "ngModel", "ngModelChange"], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], ["nz-col", "", "nzSpan", "6", 1, "ion-text-end"], [2, "color", "var(--ion-color-vh-orange)"], [2, "text-align", "center"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice3", ""], ["nzWidth", "30%"], ["nzWidth", "10%"], ["nzWidth", "20%", "nzAlign", "right"], ["nzShowSearch", "", 2, "width", "100%", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], ["nzAlign", "right"], [3, "showModalChangePriceType", "default_price_type", "changePriceType"], [3, "visibleInfoCustomer", "customer", "closeInfoCustomer"], [3, "showDrawerAddCusomer", "closeAddCustomer"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_button_click_16_listener() { return ctx.payInvoice(16); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](17, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](28, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_ion_icon_click_28_listener() { return ctx.openSearchProductListWarranty(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_ion_icon_click_29_listener() { return ctx.addWarrantyProd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](32, EditComponent_div_32_Template, 9, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_ion_icon_click_39_listener() { return ctx.addWarrantyNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](42, EditComponent_div_42_Template, 7, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](50, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_button_click_50_listener() { return ctx.getPromotions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](51, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_button_click_54_listener() { return ctx.showModalChangePriceType = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](57, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_button_click_57_listener() { return ctx.openSearchProductList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](58, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](60, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](63, EditComponent_div_63_Template, 12, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](64, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](65, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](71, "app-staff", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveEmployee", function EditComponent_Template_app_staff_closeAndReceiveEmployee_71_listener($event) { return ctx.closeAndReceiveReceptionist($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](72, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](73, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](76, "app-staff", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndReceiveEmployee", function EditComponent_Template_app_staff_closeAndReceiveEmployee_76_listener($event) { return ctx.closeAndReceiveTechnician($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](81, "nz-date-picker", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_nz_date_picker_ngModelChange_81_listener($event) { return ctx.pickerTime = $event; })("ngModelChange", function EditComponent_Template_nz_date_picker_ngModelChange_81_listener($event) { return ctx.setPickerTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](83, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](86, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](87, "ion-icon", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_ion_icon_click_87_listener() { return ctx.openDrawerAddCustomerOrRetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](88, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](89, "nz-radio-group", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_nz_radio_group_ngModelChange_89_listener($event) { return ctx.radioValue = $event; })("ngModelChange", function EditComponent_Template_nz_radio_group_ngModelChange_89_listener($event) { return ctx.changeCustomerType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](90, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](92, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](93, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](96, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](98, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](99, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](100, EditComponent_ng_container_100_Template, 2, 4, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](101, EditComponent_ng_container_101_Template, 3, 2, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](102, EditComponent_ng_container_102_Template, 3, 2, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](103, EditComponent_div_103_Template, 11, 8, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](104, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](105, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](106, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](109, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_span_click_109_listener() { return ctx.openModalOtherDiscount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](110, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](113, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](118);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](119, EditComponent_ng_container_119_Template, 11, 8, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](120, EditComponent_div_120_Template, 6, 4, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](121, EditComponent_div_121_Template, 6, 4, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](122, EditComponent_div_122_Template, 6, 4, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](123, EditComponent_div_123_Template, 5, 4, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](124, EditComponent_div_124_Template, 9, 6, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](125, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](126, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](128, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](131, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](132, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](133, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](136, EditComponent_ng_container_136_Template, 2, 0, "ng-container", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](137, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](139, EditComponent_img_139_Template, 1, 0, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](140, EditComponent_div_140_Template, 6, 4, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](141, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](142, "app-tax", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("closeAndGetValuePayment", function EditComponent_Template_app_tax_closeAndGetValuePayment_142_listener($event) { return ctx.closeAndGetValuePayment($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](143, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](144, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_button_click_144_listener() { return ctx.payInvoice(15, true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](146, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](147, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function EditComponent_Template_button_click_147_listener() { return ctx.payInvoice(15, false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](148);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](149, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](150, EditComponent_app_search_product_150_Template, 1, 2, "app-search-product", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](151, EditComponent_app_search_product_warranty_invoice_151_Template, 1, 1, "app-search-product-warranty-invoice", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](152, EditComponent_nz_modal_152_Template, 5, 5, "nz-modal", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](153, "nz-modal", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function EditComponent_Template_nz_modal_nzVisibleChange_153_listener($event) { return ctx.edit_pay = $event; })("nzOnCancel", function EditComponent_Template_nz_modal_nzOnCancel_153_listener() { return ctx.handleCancelEditPay(); })("nzOnOk", function EditComponent_Template_nz_modal_nzOnOk_153_listener() { return ctx.handleEditPay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](155, EditComponent_ng_container_155_Template, 7, 4, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](156, EditComponent_ng_template_156_Template, 6, 6, "ng-template", null, 62, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](158, "nz-modal", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function EditComponent_Template_nz_modal_nzVisibleChange_158_listener($event) { return ctx.showModalOtherDiscount = $event; })("nzOnCancel", function EditComponent_Template_nz_modal_nzOnCancel_158_listener() { return ctx.showModalOtherDiscount = false; })("nzOnOk", function EditComponent_Template_nz_modal_nzOnOk_158_listener() { return ctx.handleOkOtherDiscount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](159, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](160, EditComponent_ng_container_160_Template, 25, 16, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](161, "nz-modal", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function EditComponent_Template_nz_modal_nzVisibleChange_161_listener($event) { return ctx.showProductGift = $event; })("nzOnCancel", function EditComponent_Template_nz_modal_nzOnCancel_161_listener() { return ctx.showProductGift = false; })("nzOnOk", function EditComponent_Template_nz_modal_nzOnOk_161_listener() { ctx.showProductGift = false; return ctx.getEarningpointPromotion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](162, EditComponent_ng_container_162_Template, 22, 20, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](163, "nz-modal", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function EditComponent_Template_nz_modal_nzVisibleChange_163_listener($event) { return ctx.showProductGiftType7 = $event; })("nzOnCancel", function EditComponent_Template_nz_modal_nzOnCancel_163_listener() { return ctx.showProductGiftType7 = false; })("nzOnOk", function EditComponent_Template_nz_modal_nzOnOk_163_listener() { ctx.showProductGiftType7 = false; return ctx.handleAddGiftType7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](164, EditComponent_ng_container_164_Template, 22, 20, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](165, "nz-modal", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("nzVisibleChange", function EditComponent_Template_nz_modal_nzVisibleChange_165_listener($event) { return ctx.show_modal_select_lots = $event; })("nzOnCancel", function EditComponent_Template_nz_modal_nzOnCancel_165_listener() { return ctx.handleCancelChooseLot(); })("nzOnOk", function EditComponent_Template_nz_modal_nzOnOk_165_listener() { return ctx.handleChooseLot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](166, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](167, EditComponent_ng_container_167_Template, 11, 7, "ng-container", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](168, EditComponent_ng_template_168_Template, 6, 7, "ng-template", null, 66, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](170, EditComponent_nz_modal_170_Template, 5, 6, "nz-modal", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](171, EditComponent_app_change_price_type_171_Template, 1, 2, "app-change-price-type", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](172, EditComponent_app_customer_profile_172_Template, 1, 2, "app-customer-profile", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](173, EditComponent_app_add_customer_173_Template, 1, 1, "app-add-customer", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](174, EditComponent_app_retail_info_174_Template, 1, 4, "app-retail-info", 71);
    } if (rf & 2) {
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](157);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵreference"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](3, 79, "Back"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](6, 81, "Edit warranty invoice"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](14, 83, "Create warranty invoice"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.invoiceDetail.length)("disabled", !ctx.invoiceDetail.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](19, 85, "Temporary"), " (F3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](26, 87, "Warranty, repair products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.warrantyProd);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](37, 89, "Note"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.warrantyNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](48, 91, "Quote"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](53, 93, "Promotions"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](56, 95, "Choose selling price"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](60, 97, "Search (F4)"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngForOf", ctx.invoiceDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](70, 99, "Receptionist"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_employee", ctx.invoice.id_employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](75, 101, "Technician"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("id_employee", ctx.invoice.id_technician);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](80, 103, "Issued date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx.pickerTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](86, 105, "Customer information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("src", ctx.invoice.retail_name ? "assets/icon/eye.svg" : "assets/icon/add.svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngModel", ctx.radioValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](92, 107, "Retail customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](95, 109, "Member"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzValue", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](98, 111, "Search customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.radioValue == 1 && ctx.invoice.retail_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.radioValue == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.radioValue == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.radioValue == 2 && ctx.invoice.id_customer != "id_retail");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](108, 113, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](112, 115, "Add other payment"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](116, 117, "SubTotal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.subTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_discount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.discount_bill > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.invoice.payment_points);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.invoice.payment_coupons);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_tax"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](128, 119, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.getTotalATax()));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](135, 121, "Pay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.product_gift_type7.length && !ctx.gotten_gift_type7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.payment), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.invoice.payment_type != 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_rest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("payment_type", ctx.invoice.payment_type)("id_wallet", ctx.invoice.id_wallet)("id_customer", ctx.invoice.id_customer);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.invoiceDetail.length || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](146, 123, "Pay & Print"), " (F2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", !ctx.invoiceDetail.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](149, 125, "Pay"), " (F1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.searchProductList);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.searchProductListWarranty);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](154, 127, "Edit"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.edit_pay)("nzFooter", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](159, 129, "Other payment"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.showModalOtherDiscount);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", "Ch\u1ECDn qu\u00E0 t\u1EB7ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.showProductGift);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", "Ch\u1ECDn qu\u00E0 t\u1EB7ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzVisible", ctx.showProductGiftType7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](166, 131, "Select lot number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("nzFooter", _r26)("nzVisible", ctx.show_modal_select_lots);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.show_modal_select_lots_combo);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showModalChangePriceType);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.visibleInfoCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showDrawerAddCusomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.showDrawerAddRetail);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_23__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_24__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_25__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_22__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_26__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_27__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_28__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_8__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_30__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_32__.NzRadioComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _sale_desktop_components_tax_tax_component__WEBPACK_IMPORTED_MODULE_9__.TaxComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalContentDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.DefaultValueAccessor, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_34__.NzInputNumberComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgSwitchDefault, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_35__.NzPopconfirmDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_36__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_36__.NzOptionComponent, _sale_desktop_components_customer_customer_component__WEBPACK_IMPORTED_MODULE_10__.CustomerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgClass, _search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_11__.SearchCustomerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.MaxLengthValidator, _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_12__.SearchProductComponent, _search_search_product_warranty_invoice_search_product_warranty_invoice_component__WEBPACK_IMPORTED_MODULE_13__.SearchProductWarrantyInvoiceComponent, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_37__.NzTagComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzTbodyComponent, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_39__.NzSwitchComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_33__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_38__.NzCellAlignDirective, _sale_desktop_components_change_price_type_change_price_type_component__WEBPACK_IMPORTED_MODULE_14__.ChangePriceTypeComponent, _sale_desktop_components_customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_15__.CustomerProfileComponent, _sale_desktop_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_16__.AddCustomerComponent, _sale_desktop_components_retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_17__.RetailInfoComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_40__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_29__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 13%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-price[_ngcontent-%COMP%] {\n  border: none;\n  font-size: 0.9rem;\n  border-bottom: solid 1px #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .search-product-warrany[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .search-product-warrany[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .waranty-invoice-prod-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%]   .waranty-invoice-prodAndnote-invoiceDetail[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%] {\n  grid-row: 2/3;\n  grid-column: 1/3;\n  overflow-y: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-header[_ngcontent-%COMP%] {\n  height: 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-best-selling[_ngcontent-%COMP%]   .waranty-invoice-quote[_ngcontent-%COMP%]   .waranty-invoice-quote-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 20% 20% 50% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%] {\n  width: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-green) !important;\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   .deactive[_ngcontent-%COMP%] {\n  color: #c8c7cc;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   nz-radio-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   app-customer[_ngcontent-%COMP%] {\n  width: 90%;\n  margin-top: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  color: var(--ion-color-vh-gray);\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 10px 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-payment_type[_ngcontent-%COMP%]   app-tax[_ngcontent-%COMP%] {\n  width: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n.beetween-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDRSxlQUFBO0FBRU47QUFDRTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0FBR047QUFGTTs7OztFQUtFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdSO0FBRE07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUdSO0FBRlE7RUFDRSxXQUFBO0FBSVY7QUFIVTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFLWjtBQUhVO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFLWjtBQUZRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFJVjtBQUhVO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUtaO0FBRFU7RUFDRSxjQUFBO0FBR1o7QUFBUTtFQUNFLGtCQUFBO0FBRVY7QUFDTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFDVTtFQUNFLGtCQUFBO0FBQ1o7QUFBWTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFFZDtBQUNVO0VBQ0UsV0FBQTtBQUNaO0FBQ1U7RUFDRSxrQkFBQTtBQUNaO0FBQVk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFZDtBQURjO0VBQ0UsZUFBQTtBQUdoQjtBQUFjO0VBQ0UsNkJBQUE7RUFDQSw2QkFBQTtBQUVoQjtBQUlNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUFGUjtBQUdRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBRFY7QUFFVTtFQUVFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUVZO0VBQ0UsVUFBQTtBQUFkO0FBR1U7RUFDRSxrQkFBQTtBQURaO0FBSVE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGVjtBQUdVO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQURaO0FBRVk7RUFDRSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtBQUFkO0FBR1U7RUFDRSxnQ0FBQTtBQURaO0FBR1U7RUFDRSxjQUFBO0FBRFo7QUFJWTtFQUNFLGlCQUFBO0FBRmQ7QUFLVTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBSFo7QUFLVTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQUhaO0FBTVE7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7QUFMVjtBQU9RO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMVjtBQU9ZO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBTGQ7QUFVWTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQVJkO0FBWVk7RUFDRSxVQUFBO0FBVmQ7QUFjWTtFQUNFLGVBQUE7QUFaZDtBQWNZO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQVpkO0FBZVU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQWJaO0FBY1k7RUFDRSxXQUFBO0FBWmQ7QUFnQlE7RUFDRSx1QkFBQTtFQUNBLDhCQUFBO0FBZFY7QUFlVTtFQUNFLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQWJaO0FBZVU7RUFDRSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFFQSx1QkFBQTtBQWRaO0FBb0JFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQWpCSjtBQW1CRTs7RUFFRSxpQkFBQTtBQWhCSjtBQWtCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQWZKO0FBaUJFLGtCQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUF1QixnQkFBQTtFQUN2Qix3QkFBQTtFQUEwQixtQ0FBQTtBQVo5QjtBQWVFO0VBQ0UsVUFBQTtFQUFZLGtDQUFBO0FBWGhCO0FBY0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQVhKO0FBYUU7RUFDSSxXQUFBO0FBVk47QUFXSztFQUNJLDBCQUFBO0FBVFQ7QUFhRTtFQUNHLFdBQUE7QUFWTCIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnNhbGVzIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY1JSAzNSU7XHJcbiAgICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgICYtY2FydCxcclxuICAgICAgJi1iZXN0LXNlbGxpbmcsXHJcbiAgICAgIC5zYWxlcy1iaWxscy1zdGFmZixcclxuICAgICAgLnNhbGVzLWJpbGxzLWN1c3RvbWVyLFxyXG4gICAgICAuc2FsZXMtYmlsbHMtY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICAmLWNhcnQge1xyXG4gICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICAgIGhlaWdodDogMTMlO1xyXG4gICAgICAgICAgLmJ0bi1kYXRhIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuLXByaWNlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjOGM3Y2M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gtcHJvZHVjdC13YXJyYW55IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53YXJhbnR5LWludm9pY2UtcHJvZC1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICAgIC5pbnZvaWNlRGV0YWlsLWl0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLndhcmFudHktaW52b2ljZS1wcm9kQW5kbm90ZS1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1iZXN0LXNlbGxpbmcge1xyXG4gICAgICAgIGdyaWQtcm93OiAyLzM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgLndhcmFudHktaW52b2ljZS1xdW90ZSB7XHJcbiAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAud2FyYW50eS1pbnZvaWNlLXF1b3RlLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLndhcmFudHktaW52b2ljZS1xdW90ZS1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgICAuaW52b2ljZURldGFpbC1pdGVtIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgJi1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZWNlZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1iaWxscyB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgMjAlIDUwJSAxMCU7XHJcbiAgICAgICAgJi1zdGFmZiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICYtdGltZSxcclxuICAgICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgbnotZGF0ZS1waWNrZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY3VzdG9tZXIge1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRlYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6ICNjOGM3Y2M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuei1yYWRpby1ncm91cCB7XHJcbiAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXBwLWN1c3RvbWVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY3VzdG9tZXIgPiBkaXYsXHJcbiAgICAgICAgJi1jb250ZW50ID4gZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29udGVudCB7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgZGl2ID4ge1xyXG4gICAgICAgICAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtZGlzY291bnQsXHJcbiAgICAgICAgICAmLWZlZSB7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLXRheCB7XHJcbiAgICAgICAgICAgIC5ub3QtZm91bmQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtcGF5IHtcclxuICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtcGF5bWVudF90eXBlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICBhcHAtdGF4IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIC5vcmRlci1hbmQtcHJpbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm9yZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgICAgICAgICAvL21hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICBpbnB1dCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgLmNlbnRlci1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC8qIEhpZGUgc2Nyb2xsYmFyKi9cclxuICAuaGlkZVNjcm9sbGJhciB7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG4gIH1cclxuICBcclxuICAuaGlkZVNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDsgLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxuICB9XHJcbiAgXHJcbiAgLmJlZXR3ZWVuLWFsbC1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAucmFkaW8tcHVyY2hhc2UgIHNwYW57XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgIC5hbnQtcmFkaW97XHJcbiAgICAgICAgIG1heC13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5yYWRpby1wdXJjaGFzZSAgLmFudC1yYWRpb3tcclxuICAgICB3aWR0aDogMTZweDsgXHJcbiAgfSJdfQ== */"] });


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
//# sourceMappingURL=default-src_app_sales_components_bill-type_bill-type-15_bill-type-15_module_ts-src_app_sales_-4b3184.js.map