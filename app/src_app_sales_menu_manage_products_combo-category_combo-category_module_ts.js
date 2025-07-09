"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_products_combo-category_combo-category_module_ts"],{

/***/ 53154:
/*!***************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/combo-category/combo-category.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComboCategoryComponent": () => (/* binding */ ComboCategoryComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/divider */ 72254);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






















function ComboCategoryComponent_cdk_virtual_scroll_viewport_16_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-list", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-list-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-list-item-meta-title", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboCategoryComponent_cdk_virtual_scroll_viewport_16_div_1_div_2_Template_nz_list_item_meta_title_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const data_r12 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r13.gotoDetailCategory(data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboCategoryComponent_cdk_virtual_scroll_viewport_16_div_1_div_2_Template_i_click_15_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const data_r12 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r15.openEdit(data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "nz-list-item-action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboCategoryComponent_cdk_virtual_scroll_viewport_16_div_1_div_2_Template_i_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const data_r12 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r16.showModal(data_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](7, 4, data_r12.name, 0, 100), " ", data_r12.name.length > 100 ? "..." : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 8, "Quantity"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r12.products_count);
} }
function ComboCategoryComponent_cdk_virtual_scroll_viewport_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ComboCategoryComponent_cdk_virtual_scroll_viewport_16_div_1_div_2_Template, 19, 10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r10);
} }
function ComboCategoryComponent_cdk_virtual_scroll_viewport_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "cdk-virtual-scroll-viewport", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ComboCategoryComponent_cdk_virtual_scroll_viewport_16_div_1_Template, 3, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cdkVirtualForOf", ctx_r0.list_category_scroll);
} }
function ComboCategoryComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "Not category yet"));
} }
function ComboCategoryComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "Are you sure to delete this category?"));
} }
function ComboCategoryComponent_form_25_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "b", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ComboCategoryComponent_form_25_Template_input_blur_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.getValue(_r17.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGutter", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 3, "Category name"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 5, "Enter category name"));
} }
function ComboCategoryComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboCategoryComponent_ng_template_26_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.closeAdd(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboCategoryComponent_ng_template_26_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.addCategoryProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Cancel"));
} }
function ComboCategoryComponent_form_30_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 36, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function ComboCategoryComponent_form_30_Template_input_blur_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.getValue(_r23.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzGutter", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 4, "Edit category"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 6, "Enter category name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r6.name_category);
} }
function ComboCategoryComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboCategoryComponent_ng_template_31_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.closeEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboCategoryComponent_ng_template_31_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.editCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "OK");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Cancel"));
} }
const _c0 = function () { return { overflow: "auto" }; };
class ComboCategoryComponent {
    constructor(router, vhQuerySales, vhAlgorithm, vhComponent, languageService) {
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.list_category = [];
        this.list_category_scroll = [];
        this.visible_add = false; //biến cờ trạng thái show/hide popup thêm danh mục
        /** ----Edit category product----- */
        this.visible_detail = false;
        /**------------------------------------- */
        /** ------ Modal Zorro Delete Category---- */
        this.isVisible = false;
    }
    ngOnInit() {
        this.getLocalCategory();
    }
    ngOnDestroy() {
        this.observableCategory.unsubscribe();
    }
    /**
     * get danh sách danh mục combo mới nhất
     * @example  this.getLocalCategory();
     */
    getLocalCategory() {
        // this.vhComponent.showLoading("", "transparent-loading", null, 0, false).then(()=>{
        this.observableCategory = this.vhQuerySales.getObservableLocalCategorys(src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO).subscribe((localCategorys) => {
            this.list_category = localCategorys.filter(res => res.type == src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO);
            if (this.list_category.length) {
                this.list_category.forEach((item, index) => {
                    this.countProductOfCategory(item._id).then((number) => item.products_count = number);
                });
                this.list_category = this.vhAlgorithm.sortVietnamesebyASC(this.list_category, 'name');
                this.list_category_scroll = this.renderCategory(this.list_category);
            }
            // this.vhComponent.hideLoading(0)
        });
        // })
    }
    /**
     * xử lý mảng danh sách category thành mảng 2 chiều (1 hàng 2 cột) để làm virtualscroll
     * @example this.renderCategory([])
     */
    renderCategory(categorys) {
        let k = 0;
        let data = [];
        for (let i = 0; i < categorys.length; i++) {
            if (!data[k])
                data[k] = new Array(categorys[i]);
            else
                data[k].push(categorys[i]);
            if (data[k].length == 2)
                k++;
        }
        return data;
    }
    /**
     * đếm sl combo trong danh mục
     * @example this.countProductOfCategory('DNIWUJDNHIWDIWDHU')
     */
    countProductOfCategory(id_category) {
        return new Promise((resolve, rejects) => {
            let products = this.vhQuerySales.getlocalProducts(src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO).filter(item => item.id_category == id_category);
            resolve(products.length);
        });
    }
    /**Kiểm tra tồn tại tên danh mục */
    checkExistCategory(categoryName) {
        return new Promise((resolve, reject) => {
            let index = this.vhQuerySales.getlocalCategorys().filter(res => res.type == src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO).findIndex(item => this.vhAlgorithm.changeAlias(item.name).toLowerCase() == this.vhAlgorithm.changeAlias(categoryName).toLowerCase());
            if (index == -1)
                resolve(false);
            else
                resolve(true);
        });
    }
    /**
     * mở drawer thêm danh mục combo
     * @example this.openAdd()
     */
    openAdd() {
        this.visible_add = true;
    }
    /**
     * đóng drawer thêm danh mục combo
     * @example this.openAdd()
     */
    closeAdd() {
        this.visible_add = false;
    }
    /**
     * gán tên combo từ input tên combo (ko thể dùng ngModal nên phải dùng cách này)
     * @example this.getValue('danh muc combo')
     */
    getValue(value) {
        this.newNameCategory = value;
    }
    /**
     * thêm danh mục combo lên DB
     * this.addCategoryProduct()
     */
    addCategoryProduct() {
        this.newNameCategory = this.newNameCategory ? this.newNameCategory.toString().trim() : '';
        if (this.newNameCategory) {
            this.checkExistCategory(this.newNameCategory)
                .then((res) => {
                if (res) {
                    this.vhComponent.showToast(1500, this.languageService.translate("Category existed"), 'alert-toast');
                    return;
                }
                else {
                    this.vhComponent.showLoading('').then(() => {
                        this.vhQuerySales.addCategory({ name: this.newNameCategory.toString().trim(), type: src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO })
                            .then((res) => {
                            this.vhComponent.hideLoading(0);
                            this.closeAdd();
                            this.getLocalCategory();
                            this.vhComponent.showToast(2000, (this.languageService.translate("Category has been added successfully")), 'success-toast');
                        }, err => {
                            this.vhComponent.hideLoading(0);
                            this.vhComponent.showToast(1500, this.languageService.translate("An eror occured while adding category. Please try again"), 'alert-toast');
                        });
                    });
                }
            }, err => { });
        }
        else {
            this.vhComponent.showToast(1500, this.languageService.translate('Name is required'), 'alert-toast');
        }
    }
    /**
     * mở drawer edit danh mục combo
     * @example this.openEdit()
     */
    openEdit(item) {
        this.visible_detail = true;
        this.name_category = item.name;
        this._id = item._id;
    }
    /**
     * đóng drawer edit danh mục combo
     * @example this.closeEdit()
     */
    closeEdit() {
        this.visible_detail = false;
    }
    /**
     * bắt sk nhấn nút lưu của drawer edit danh mục
     */
    editCategory() {
        this.newNameCategory = this.newNameCategory ? this.newNameCategory.toString().trim() : '';
        if (this.newNameCategory) {
            this.checkExistCategory(this.newNameCategory)
                .then((res) => {
                if (res) {
                    if (this.newNameCategory != this.name_category) {
                        this.vhComponent.showToast(1500, this.languageService.translate("Category existed"), 'alert-toast');
                    }
                    this.closeEdit();
                    return;
                }
                else {
                    this.vhQuerySales.updateCategory(this._id, { name: this.newNameCategory.toString().trim() })
                        .then((bool) => {
                        if (bool) {
                            this.closeEdit();
                            this.getLocalCategory();
                            this.name_category = this.newNameCategory;
                            this.vhComponent.showToast(2000, `${this.languageService.translate("Product category")} ${this.languageService.translate("has been updated successfully")}`, 'success-toast');
                        }
                    }, err => {
                        this.vhComponent.showToast(1500, this.languageService.translate("An eror occured while adding category. Please try again"), 'alert-toast');
                    });
                }
            });
        }
        else
            this.closeEdit();
    }
    /**
     * mở modal xác nhận xóa danh mục combo
     * @example this.openEdit()
     */
    showModal(item) {
        this.isVisible = true;
        this._id_delete = item._id;
    }
    /**
     * băt sk nhấn nút ok modal xác nhận xóa danh mục combo
     * @example this.handleOk()
     */
    handleOk() {
        this.deleteCategory(this._id_delete);
        this.handleCancel();
    }
    /**
     * đóng modal xác nhận xóa danh mục combo
     * @example this.handleCancel()
     */
    handleCancel() {
        this.isVisible = false;
    }
    /** ------------------------- */
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/products']);
    }
    /**
     * xóa danh mục combo khỏi DB
     * @example this.deleteCategory()
     */
    deleteCategory(id) {
        this.vhComponent.showLoading('').then(() => {
            this.vhQuerySales.deleteCategory(id)
                .then((res) => {
                this.vhComponent.hideLoading(0);
                if (res) {
                    this.vhComponent.showToast(2000, (this.languageService.translate("Category has been deleted successfully")), 'success-toast');
                    this.getLocalCategory();
                }
                else {
                    this.vhComponent.showToast(2000, (this.languageService.translate("Can't delete this category")), 'alert-toast');
                }
            }).catch(err => {
                this.vhComponent.hideLoading(0);
                this.vhComponent.showToast(1500, this.languageService.translate("An error occurred while deleting category. Please try again"), 'alert-toast');
            });
        });
    }
    gotoDetailCategory(data) {
        this.router.navigate(['/sales/dashboard/manage/products/combo-category/detail'], {
            state: { category: data }
        });
    }
}
ComboCategoryComponent.ɵfac = function ComboCategoryComponent_Factory(t) { return new (t || ComboCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService)); };
ComboCategoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ComboCategoryComponent, selectors: [["app-combo-category"]], decls: 33, vars: 36, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", ""], ["nz-col", "", "nzSpan", "21", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "3", 1, "add-button"], ["nz-button", "", "nzType", "default", 1, "btn-add", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["itemSize", "67.2", "class", "infinite-container", 4, "ngIf"], ["nz-row", "", 4, "ngIf"], [3, "nzVisible", "nzTitle", "nzCancelText", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [3, "nzBodyStyle", "nzMaskClosable", "nzWidth", "nzVisible", "nzTitle", "nzFooter", "nzOnClose"], ["nz-form", "", 4, "nzDrawerContent"], ["footerTplAdd", ""], ["footerTplDetail", ""], ["itemSize", "67.2", 1, "infinite-container"], ["nz-col", "", "nzSpan", "24", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzSpan", "12", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12"], [2, "width", "95%"], [2, "cursor", "pointer"], [2, "width", "95%", "overflow", "hidden", 3, "click"], [1, "quantity"], ["nz-list-item-actions", ""], ["nz-icon", "", "nzType", "form", "nzTheme", "outline", 1, "cus-icon", 3, "click"], ["nz-icon", "", "nzType", "delete", "nzTheme", "outline", 1, "cus-icon", 3, "click"], ["nz-col", "", "nzSpan", "24", 2, "text-align", "center", "margin-top", "100px"], ["nz-form", ""], ["nz-row", "", 3, "nzGutter"], [2, "font-size", "0.9rem"], ["nz-input", "", 3, "placeholder", "blur"], ["box", ""], [2, "float", "right"], ["nz-button", "", 1, "btn-cancel", 2, "margin-right", "8px", 3, "click"], ["nz-button", "", 1, "btn-add", 3, "click"], ["nz-input", "", 3, "value", "placeholder", "blur"]], template: function ComboCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboCategoryComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ComboCategoryComponent_Template_button_click_11_listener() { return ctx.openAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ComboCategoryComponent_cdk_virtual_scroll_viewport_16_Template, 2, 1, "cdk-virtual-scroll-viewport", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ComboCategoryComponent_div_17_Template, 5, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "nz-modal", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function ComboCategoryComponent_Template_nz_modal_nzVisibleChange_19_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function ComboCategoryComponent_Template_nz_modal_nzOnCancel_19_listener() { return ctx.handleCancel(); })("nzOnOk", function ComboCategoryComponent_Template_nz_modal_nzOnOk_19_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ComboCategoryComponent_p_22_Template, 3, 3, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "nz-drawer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function ComboCategoryComponent_Template_nz_drawer_nzOnClose_23_listener() { return ctx.closeAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ComboCategoryComponent_form_25_Template, 13, 7, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ComboCategoryComponent_ng_template_26_Template, 6, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "nz-drawer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function ComboCategoryComponent_Template_nz_drawer_nzOnClose_28_listener() { return ctx.closeEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ComboCategoryComponent_form_30_Template, 11, 8, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ComboCategoryComponent_ng_template_31_Template, 6, 3, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](27);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 20, "Back"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 22, "Combo category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 24, "Add"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.list_category_scroll.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.list_category);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 26, "Confirm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 28, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzVisible", ctx.isVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 30, "Add category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](34, _c0))("nzMaskClosable", false)("nzWidth", 380)("nzVisible", ctx.visible_add)("nzFooter", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 32, "Edit category"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](35, _c0))("nzMaskClosable", false)("nzWidth", 380)("nzVisible", ctx.visible_detail)("nzFooter", _r7);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_13__.NzModalContentDirective, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_14__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_14__.NzDrawerContentDirective, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__.CdkVirtualForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListItemMetaTitleComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListItemActionsComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_16__.NzListItemActionComponent, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_17__.NzDividerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_19__.NzFormControlComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_20__.NzInputDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.SlicePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-divider-horizontal[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: black !important;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n  font-style: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%]   .ant-list-item[_ngcontent-%COMP%]   .cus-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  cursor: pointer;\n}\ninput[_ngcontent-%COMP%] {\n  width: 90%;\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n.btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green);\n  border-radius: 5px;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #fff 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  border-color: #c8c7cc;\n}\n.infinite-container[_ngcontent-%COMP%] {\n  height: 80vh;\n  width: 100%;\n  padding-bottom: 8px;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.infinite-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px !important;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWJvLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0UsZUFBQTtBQUVOO0FBQ0U7RUFDRSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRUo7QUFESTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0Usb0JBQUE7QUFHTjtBQURJO0VBQ0UsNEJBQUE7QUFHTjtBQUZNO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQUlSO0FBRk07RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FBSVI7QUFGTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBSVI7QUFBRTtFQUNFLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0FBR0o7QUFERTtFQUNFLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FBSUo7QUFERTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUlKO0FBRkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFBdUIsZ0JBQUE7RUFDdkIsd0JBQUE7RUFBMEIsbUNBQUE7QUFPOUI7QUFMRTtFQUNFLHFCQUFBO0VBQXVCLGtDQUFBO0FBUzNCIiwiZmlsZSI6ImNvbWJvLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICAuYW50LWRpdmlkZXItaG9yaXpvbnRhbCB7XHJcbiAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFudC1saXN0LWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICBiIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAucXVhbnRpdHkge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgZm9udC1zdHlsZTogMC44cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5jdXMtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M4YzdjYyAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG4tYWRkIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1jYW5jZWwge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICNjOGM3Y2M7XHJcbiAgfVxyXG4gIC5pbmZpbml0ZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGb3IgRmlyZWZveCAqL1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cclxuICB9XHJcbiAgLmluZmluaXRlLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweCAhaW1wb3J0YW50OyAvKiBGb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG4gIH1cclxuICAiXX0= */"] });


/***/ }),

/***/ 83679:
/*!************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/combo-category/combo-category.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComboCategoryModule": () => (/* binding */ ComboCategoryModule)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _combo_category_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combo-category.component */ 53154);
/* harmony import */ var _detail_category_products_detail_category_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-category-products/detail-category-products.component */ 20248);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);












const routes = [
    {
        path: '',
        component: _combo_category_component__WEBPACK_IMPORTED_MODULE_0__.ComboCategoryComponent
    },
    {
        path: 'detail',
        component: _detail_category_products_detail_category_products_component__WEBPACK_IMPORTED_MODULE_1__.DetailCategoryProductsComponent
    },
];
class ComboCategoryModule {
}
ComboCategoryModule.ɵfac = function ComboCategoryModule_Factory(t) { return new (t || ComboCategoryModule)(); };
ComboCategoryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ComboCategoryModule });
ComboCategoryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.ScrollingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComboCategoryModule, { declarations: [_combo_category_component__WEBPACK_IMPORTED_MODULE_0__.ComboCategoryComponent, _detail_category_products_detail_category_products_component__WEBPACK_IMPORTED_MODULE_1__.DetailCategoryProductsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.ScrollingModule] }); })();


/***/ }),

/***/ 20248:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/products/combo-category/detail-category-products/detail-category-products.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailCategoryProductsComponent": () => (/* binding */ DetailCategoryProductsComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);











function DetailCategoryProductsComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", data_r2.img ? data_r2.img : "./assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r2.combos.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(data_r2.units[0].price));
} }
const _c0 = function (a0) { return { y: a0 }; };
class DetailCategoryProductsComponent {
    constructor(router, vhQuerySales, vhAlgorithm, cdRef) {
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.list_product = [];
        this.loading = false;
        //** hàm sort cho các cột */
        this.productCol = false; // chọn sort cột tên sản phẩm
        this.unitCol = false; // Chọn sắp xếp theo đơn vị
        this.barcodeCol = false; // Chọn sắp xếp theo barcode
        this.nameCategoryCol = false; // Chọn sắp xếp theo tên danh mục
        this.brandCol = false; // Chọn sắp xếp theo chi nhánh
        this.priceCol = false; // Chọn sắp xếp theo giá
        this.category = this.router.getCurrentNavigation().extras.state.category;
    }
    ngAfterViewInit() {
        this.doRefreshData();
    }
    /**get data product combo theo id_combo nhận từ state*/
    doRefreshData() {
        this.list_product =
            this.vhQuerySales.getlocalProducts(src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO).filter(item => item.id_category == this.category._id).map(item => {
                let arr = []; // sắp xếp subproduct theo tiền
                if (item.manysize && item.subs.length) {
                    arr = this.vhAlgorithm.sortNumberbyASC(item.subs, 'price');
                    if (item.subs.length > 1) {
                        item['price_low'] = arr[0].price,
                            item['price_high'] = arr[arr.length - 1].price;
                    }
                    else {
                        item['price_low'] = 0,
                            item['price_high'] = arr[0].price;
                    }
                }
                else {
                    item['price_low'] = 0,
                        item['price_high'] = item.price;
                }
                return Object.assign({}, item);
            });
    }
    ngAfterViewChecked() {
        if (document.querySelector("#detail-category-products") && document.querySelector(".ant-table-thead") && document.querySelector(".detail-category-products-header") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.querySelector("#detail-category-products").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".detail-category-products-header").clientHeight - document.querySelector(".ant-table-pagination").clientHeight - 80 + "px";
        }
        this.cdRef.detectChanges();
    }
    gotoProductDetail(item) {
        // this.router.navigate(['/sales/dashboard/manage/products/product-category/edit'], {
        //   state: {
        //     formProduct: item,
        //     category: this.category
        //   }
        // });
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/products/product-category']);
    }
    sortTable(colName) {
        switch (colName) {
            case 'name':
                if (this.productCol) {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyASC([...this.list_product], colName);
                }
                else {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyDESC([...this.list_product], colName);
                }
                break;
            case 'unit':
                if (this.unitCol) {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyASC([...this.list_product], colName);
                }
                else {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyDESC([...this.list_product], colName);
                }
                break;
            case 'barcode':
                if (this.barcodeCol) {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyASC([...this.list_product], colName);
                }
                else {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyDESC([...this.list_product], colName);
                }
                break;
            case 'name_category':
                if (this.nameCategoryCol) {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyASC([...this.list_product], colName);
                }
                else {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyDESC([...this.list_product], colName);
                }
                break;
            case 'brand':
                if (this.brandCol) {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyASC([...this.list_product], colName);
                }
                else {
                    this.list_product = this.vhAlgorithm.sortVietnamesebyDESC([...this.list_product], colName);
                }
                break;
            case 'price':
                if (this.priceCol) {
                    this.list_product = this.vhAlgorithm.sortNumberbyASC([...this.list_product], colName);
                }
                else {
                    this.list_product = this.vhAlgorithm.sortNumberbyDESC([...this.list_product], colName);
                }
                break;
        }
    }
}
DetailCategoryProductsComponent.ɵfac = function DetailCategoryProductsComponent_Factory(t) { return new (t || DetailCategoryProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
DetailCategoryProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailCategoryProductsComponent, selectors: [["app-detail-category-products"]], decls: 40, vars: 30, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "detail-category-products"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "title", "max-width-overflow", "detail-category-products-header"], ["nz-row", "", 1, "total-item"], [2, "color", "var(--ion-color-vh-red)"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzScroll", "nzNoResult", "nzData"], ["allowSale", ""], ["nzWidth", "10%", "nzAlign", "center"], ["nzWidth", "40%", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzAlign", "center", "nzWidth", "25%", 2, "cursor", "pointer"], ["nzAlign", "right", "nzWidth", "25%", 2, "cursor", "pointer", 3, "click"], ["style", "cursor: pointer;", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer"], ["nzAlign", "center", 2, "padding", "0"], [2, "width", "36px", 3, "src"], [2, "color", "var(--ion-color-vh-green)"], ["nzAlign", "center"], ["nzAlign", "right"]], template: function DetailCategoryProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailCategoryProductsComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nz-layout", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "nz-table", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailCategoryProductsComponent_Template_th_click_24_listener() { ctx.productCol = !ctx.productCol; return ctx.sortTable("name"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailCategoryProductsComponent_Template_th_click_33_listener() { ctx.priceCol = !ctx.priceCol; return ctx.sortTable("price"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, DetailCategoryProductsComponent_tr_39_Template, 9, 4, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 14, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.category.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 16, "Total"), " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.list_product.length, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 18, "products"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 20, "No data"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c0, ctx.heightScroll))("nzData", ctx.list_product);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 22, "Combo name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx.productCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 24, "Number of components"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 26, "Selling price"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", ctx.priceCol == true ? "caret-down" : "caret-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _r0.data);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_5__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_8__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .total-item[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1jYXRlZ29yeS1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7QUFFSjtBQUNBO0VBQ0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFRjtBQURFO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtBQUdKO0FBREU7RUFDRSxnQkFBQTtBQUdKIiwiZmlsZSI6ImRldGFpbC1jYXRlZ29yeS1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBpIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgaGVpZ2h0OiA5NSU7XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgfVxyXG4gIC50b3RhbC1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_products_combo-category_combo-category_module_ts.js.map