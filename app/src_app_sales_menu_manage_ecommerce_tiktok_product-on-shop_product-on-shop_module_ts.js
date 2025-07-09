"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_tiktok_product-on-shop_product-on-shop_module_ts"],{

/***/ 8940:
/*!*************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiktok/product-on-shop/product-on-shop.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOnShopComponent": () => (/* binding */ ProductOnShopComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _components_modal_link_product_ecommerce_modal_link_product_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal-link-product-ecommerce/modal-link-product-ecommerce.component */ 68886);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function ProductOnShopComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 17);
} }
function ProductOnShopComponent_nz_tab_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nz-tab", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, item_r4));
} }
function ProductOnShopComponent_nz_table_25_ng_container_35_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductOnShopComponent_nz_table_25_ng_container_35_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; return item_r7.expandModal = !item_r7.expandModal; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", item_r7.expand ? "up" : "down");
} }
function ProductOnShopComponent_nz_table_25_ng_container_35_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r7.image == null ? null : item_r7.image.image_url_list[0], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function ProductOnShopComponent_nz_table_25_ng_container_35_div_19_del_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r18.vhAlgorithm.vhcurrencyunit(item_r7.price_info[0] == null ? null : item_r7.price_info[0].original_price), " ");
} }
function ProductOnShopComponent_nz_table_25_ng_container_35_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductOnShopComponent_nz_table_25_ng_container_35_div_19_del_1_Template, 2, 1, "del", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (item_r7.price_info[0] == null ? null : item_r7.price_info[0].original_price) != (item_r7.price_info[0] == null ? null : item_r7.price_info[0].current_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r11.vhAlgorithm.vhcurrencyunit(item_r7.price_info[0] == null ? null : item_r7.price_info[0].current_price), " ");
} }
function ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_i_7_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_i_7_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); $event.stopPropagation(); return ctx_r28.openModelSelectProductsTiktok(product_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_i_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_i_8_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); $event.stopPropagation(); return ctx_r31.removeAffiliate(item_r7.id, product_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "S\u1EA3n ph\u1EA9m li\u00EAn k\u1EBFt"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r25.findProductLinked(item_r7.id, product_r22.id).name);
} }
function ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_del_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r26.vhAlgorithm.vhcurrencyunit(product_r22.price.tax_exclusive_price), " ");
} }
function ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stock_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "Kho Tiktok"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](stock_r38.quantity);
} }
function ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_i_7_Template, 1, 0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_i_8_Template, 1, 0, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_span_9_Template, 5, 4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "b", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_del_15_Template, 2, 1, "del", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_div_19_Template, 6, 4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r22 = ctx.$implicit;
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r7.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r21.isLinkedToProduct(item_r7.id, product_r22.id) && !item_r7.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r21.isLinkedToProduct(item_r7.id, product_r22.id) && !item_r7.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r21.isLinkedToProduct(item_r7.id, product_r22.id) && !item_r7.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", "SKU ph\u00E2n lo\u1EA1i", ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r22.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", product_r22.price.tax_exclusive_price != product_r22.price.tax_exclusive_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r21.vhAlgorithm.vhcurrencyunit(product_r22.price.tax_exclusive_price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", product_r22.inventory);
} }
function ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_tr_1_Template, 21, 9, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r7.skus);
} }
const _c0 = function (a0) { return { width: a0 }; };
const _c1 = function (a0) { return { "product-status-success": a0 }; };
function ProductOnShopComponent_nz_table_25_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ProductOnShopComponent_nz_table_25_ng_container_35_i_3_Template, 1, 1, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ProductOnShopComponent_nz_table_25_ng_container_35_ng_template_6_Template, 2, 1, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductOnShopComponent_nz_table_25_ng_container_35_Template_i_click_12_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const item_r7 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); $event.stopPropagation(); return ctx_r41.vhComponent.copyValue(item_r7.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "b", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductOnShopComponent_nz_table_25_ng_container_35_Template_i_click_17_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const item_r7 = restoredCtx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); $event.stopPropagation(); return ctx_r43.vhComponent.copyValue(item_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ProductOnShopComponent_nz_table_25_ng_container_35_div_19_Template, 3, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "nz-switch", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProductOnShopComponent_nz_table_25_ng_container_35_Template_nz_switch_ngModelChange_26_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const item_r7 = restoredCtx.$implicit; return item_r7.hidden = $event; })("ngModelChange", function ProductOnShopComponent_nz_table_25_ng_container_35_Template_nz_switch_ngModelChange_26_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const item_r7 = restoredCtx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r45.hiddenProduct(item_r7, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ProductOnShopComponent_nz_table_25_ng_container_35_ng_container_27_Template, 2, 1, "ng-container", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.skus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzTooltipTitle", _r9)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, (item_r7.image == null ? null : item_r7.image.image_url_list) ? "40px" : "30px"))("src", item_r7.image == null ? null : item_r7.image.image_url_list[0], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", "SKU", ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !item_r7.skus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](16, _c1, item_r7.status == "ACTIVATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 12, item_r7.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", item_r7.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r7.expandModal);
} }
const _c2 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c3 = function (a0) { return { y: a0 }; };
function ProductOnShopComponent_nz_table_25_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductOnShopComponent_nz_table_25_Template_i_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r46.sortNameTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductOnShopComponent_nz_table_25_Template_i_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r48.sortStatusTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ProductOnShopComponent_nz_table_25_ng_container_35_Template, 28, 18, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 15, "No data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](29, _c2))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](30, _c3, ctx_r3.heightScroll))("nzData", ctx_r3.listProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 17, "Image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 19, "Product information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r3.sortName == "asc" ? "arrow-down" : "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 21, "Selling price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 23, "Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 25, "Quantity"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzType", ctx_r3.sortQuantity == "asc" ? "arrow-down" : "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](33, 27, "Temporarily hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r5.data)("ngForTrackBy", ctx_r3.trackByFn);
} }
class ProductOnShopComponent {
    constructor(router, lang, vhComponent, vhAlgorithm, vhQuerySales, cdRef, modal, vhEcommerce) {
        this.router = router;
        this.lang = lang;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.cdRef = cdRef;
        this.modal = modal;
        this.vhEcommerce = vhEcommerce;
        this.listProduct = []; //danh sách product theo từng id_shop
        this.listSubProduct = []; //danh sách product theo từng id_shop
        /**----------------------------------- */
        this.infoShop = {};
        this.searchValue = '';
        this.setHeight = { "max-height": "500px", "height": "500px" };
        this.sortQuantity = 'asc';
        this.sortName = 'asc';
        this.listTabs = ["Status", "Temporarily hidden"];
        this.indexSegment = 0;
        this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
        this.arrayHidden = []; //mảng này chứa id của những sp đang tạm ẩn
        /** Liên kết sản phẩm */
        this.visible_affiliate = false;
        this.listProductApp = []; // sp trong phần mềm chứa tiktok[]
        this.listSubProductApp = []; //sp của app để search
        this.productTiktokSelected = null;
        this.listProductOfBranch = []; // sp của phần mềm có liên kết với sp tiktok
        this.searchProductAppValue = '';
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.infoShop = this.vhEcommerce.getlocalShopListTiktok()[0];
        this.changeShop(this.infoShop._id);
    }
    /**Chọn shop và lọc sản phẩm theo shop đó */
    changeShop(id) {
        this.listProductOfBranch = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].tiktoks && item[this.id_branch].tiktoks.length >= 0);
        let localProducts = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden);
        this.listProductApp = localProducts.map(item => {
            let unit = this.vhQuerySales.getUnit_byRatio(item.units, 1);
            if (item[this.id_branch] && item[this.id_branch].tiktoks && item[this.id_branch].tiktoks.length) { //filter những sp tiktok thuộc id tiktok đã chọn
                item[this.id_branch].product_tiktoks = [...item[this.id_branch].tiktoks.filter(prod => prod.id_shop == id)];
            }
            return Object.assign(Object.assign({}, item), unit);
        });
        this.listSubProductApp = this.listProductApp;
        this.listProduct = [];
        this.vhEcommerce.getlocalProductListTiktok(this.infoShop._id).forEach(item => {
            item.total_stock = 0;
            // if (!item.has_model) {
            //   item.stock_info.forEach(data => {
            //     item.total_stock += data.normal_stock
            //   })
            // } else item.model.forEach(model => { model.stock_info.forEach(data => item.total_stock += data.normal_stock) })
            item.hidden = item.status == 'ACTIVATE' ? false : true;
            this.listProduct.push(item);
        });
        this.listSubProduct = [...this.listProduct];
        this.segmentChanged(this.indexSegment);
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiktok']);
    }
    searchTiktok(value, products) {
        let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
        this.listProduct = this.vhAlgorithm.searchList(val, products ? [...products] : [...this.listSubProduct], ['title']);
    }
    ngAfterViewChecked() {
        if (document.querySelector("#product-on-shop") && document.querySelector(".ant-tabs-tab") && document.querySelector(".ant-table-thead") && document.querySelector(".product-on-shop-header")) {
            this.heightScroll = document.querySelector("#product-on-shop").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".product-on-shop-header").clientHeight - document.querySelector(".ant-tabs-tab").clientHeight - 100 + "px";
        }
        this.cdRef.detectChanges();
    }
    sortStatusTable() {
        this.searchTiktok(this.searchValue);
        if (this.sortQuantity == 'asc') {
            this.listProduct = this.vhAlgorithm.sortNumberbyASC([...this.listProduct], 'total_stock');
            this.sortQuantity = 'desc';
        }
        else {
            this.listProduct = this.vhAlgorithm.sortNumberbyDESC([...this.listProduct], 'total_stock');
            this.sortQuantity = 'asc';
        }
    }
    /**
     * sắp xếp theo tên
     */
    sortNameTable() {
        this.searchTiktok(this.searchValue);
        if (this.sortName == "asc") {
            this.listProduct = [...this.listProduct].sort((a, b) => {
                return a.item_name > b.item_name ? 1 : -1;
            });
            this.sortName = "desc";
        }
        else {
            this.listProduct = [...this.listProduct].sort((a, b) => {
                return a.item_name > b.item_name ? -1 : 1;
            });
            this.sortName = "asc";
        }
    }
    trackByFn(index, item) {
        return index;
    }
    segmentChanged(event) {
        this.indexSegment = event;
        if (event == 0)
            this.listProduct = this.listSubProduct.filter(item => !item.hidden);
        else
            this.listProduct = this.listSubProduct.filter(item => item.hidden);
        this.searchTiktok(this.searchValue, this.listProduct);
    }
    /**
     * modal hide product
     */
    hiddenProduct(product, hidden) {
        this.modal.confirm({
            nzTitle: this.lang.translate("Confirm"),
            nzContent: `<p>${hidden ? this.lang.translate('Tạm ẩn sản phẩm này') : this.lang.translate('Hủy tạm ẩn sản phẩm này')}?${!hidden ? '</p><p>Sản phẩm được chỉnh sửa sẽ cần chờ Tiktok xét duyệt trong vòng 24 tiếng trước khi hiển thị trên trang chủ Shop</p>' : ''}`,
            nzClosable: false,
            nzOnOk: () => new Promise((resolve) => {
                // this.vhEcommerce.updateProductInfoByJSONshopee(this.renderFormUpdate(product, hidden), this.infoShop['access_token'], this.infoShop['_id']).then((bool: boolean) => {
                //   this.vhEcommerce.getProductByItem_idTiktok(this.infoShop['access_token'], product.item_id, this.infoShop['_id']).then((productshopee: any) => {
                //     if (bool && productshopee)
                //       this.vhComponent.alertMessageDesktop('success', hidden ? this.lang.translate('Sản phẩm được tạm ẩn thành công') : this.lang.translate('Hủy tạm ẩn thành công'))
                //     else {
                //       product.hidden = !product.hidden
                //       this.vhComponent.alertMessageDesktop('error', this.lang.translate('An error occurred while updating'))
                //     }
                //     this.changeShop(this.infoShop._id)
                //     resolve(true)
                //   })
                // })
            }),
            nzOnCancel: () => {
                product.hidden = !product.hidden;
                this.modal.closeAll();
            }
        });
    }
    /**Render chuỗi json để bật tắt sản phẩm */
    renderFormUpdate(product, hidden) {
        let json = {
            "item_id": product.item_id,
            "item_status": hidden ? 'UNLIST' : 'NORMAL'
        };
        return json;
    }
    /**
     * search tên sản phẩm trong app viethas
     * @example this.search('Sản phẩm A')
     */
    searchProductApp(value) {
        let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
        this.listProductApp = this.vhAlgorithm.searchList(val, [...this.listSubProductApp], ['name', 'barcode', 'item_code']);
    }
    findProductLinked(item_id, sku_id) {
        var _a;
        for (let productOfBranch of this.listProductOfBranch) {
            const tiktoks = ((_a = productOfBranch[this.id_branch]) === null || _a === void 0 ? void 0 : _a.tiktoks) || [];
            const found = tiktoks.find(data => {
                var _a, _b;
                if (data.id !== item_id)
                    return false;
                if ((_a = data.skus) === null || _a === void 0 ? void 0 : _a.length) {
                    return data.skus.some(skus => skus.id === sku_id);
                }
                return ((_b = data.skus) === null || _b === void 0 ? void 0 : _b.length) ? false : true;
            });
            if (found) {
                return productOfBranch;
            }
        }
        return null;
    }
    /**
     * Kiểm tra sản phẩm đã được lien kết hay chưa
     *
     */
    isLinkedToProduct(item_id, sku_id) {
        if (!item_id || !sku_id)
            return false;
        for (let productOfBranch of this.listProductOfBranch) {
            let findProduct = productOfBranch[this.id_branch].tiktoks.find(data => data.id === item_id);
            if (findProduct) {
                if (findProduct.skus && findProduct.skus.length) {
                    let indexSku = findProduct.skus.findIndex(sku => sku.id === sku_id);
                    if (indexSku >= 0) {
                        return true;
                    }
                }
                else {
                    return true;
                }
            }
        }
        ;
        return false;
    }
    openModelSelectProductsTiktok(productTiktok) {
        this.productTiktokSelected = productTiktok;
        this.visible_affiliate = true;
    }
    /**
     * Tắt modal và clone mảng product ra một mảng mới để tránh nhớ lại product cũ bị checked
     */
    cancelAffiliate() {
        this.visible_affiliate = false;
    }
    /**
      * Liên kết sản phẩm từ lazada với sản phẩm tại cửa hàng.
      * @param product Sản phẩm của cửa hàng
      */
    acceptAfiliate(product) {
        const isZeroPriceCombo = product.type === src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO && product.units[0].price === 0;
        const confirmZeroPriceComboMessage = this.lang.translate("This product is a combo with a price of 0. Do you still want to link it with the product", { platform: 'Tiktok' }) + "?";
        this.modal.confirm({
            nzTitle: '<i>' + (isZeroPriceCombo ? confirmZeroPriceComboMessage : this.lang.translate("Confirm")) + '</i>',
            nzIconType: "info-circle",
            nzCancelText: this.lang.translate("Cancel"),
            nzOnOk: () => {
                this.vhComponent.showLoading("", "transparent-loading").then(() => {
                    // Tìm sản phẩm tiktok
                    const currentProductTiktok = this.listProduct.find(product => { var _a; return (_a = product.skus) === null || _a === void 0 ? void 0 : _a.some(sku => sku.id === this.productTiktokSelected.id); });
                    const id_product_selected = product.id_subproduct ? product.id_subproduct : product['_id'];
                    if (!currentProductTiktok) {
                        this.vhComponent.hideLoading().then(() => {
                            this.vhComponent.alertMessageDesktop('error', this.lang.translate("The product link failed"));
                        });
                        return;
                    }
                    let productTiktok = {
                        id: currentProductTiktok.id,
                        id_shop: this.infoShop._id,
                        SkuIds: [],
                    };
                    // Nếu sản phẩm tiktok có model thì thêm vào mảng
                    if (currentProductTiktok && currentProductTiktok.skus.length > 0) {
                        const sku = currentProductTiktok.skus.find(item => item.id == this.productTiktokSelected.id);
                        productTiktok.SkuIds.push({ id: sku.id });
                    }
                    this.vhEcommerce.addMergeTiktokProduct_skus(this.vhQuerySales.getlocalDetailProduct(id_product_selected), productTiktok.id, productTiktok.SkuIds, this.infoShop['_id'], this.id_branch).then((bool) => {
                        this.vhComponent.hideLoading().then(() => {
                            setTimeout(() => {
                                this.visible_affiliate = false;
                                this.listProductOfBranch = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].tiktoks && item[this.id_branch].tiktoks.length >= 0);
                                this.vhComponent.alertMessageDesktop('success', this.lang.translate("Product linked successfully"));
                            }, 300);
                        });
                    }).catch(err => {
                        console.error(err);
                        this.visible_affiliate = false;
                        this.vhComponent.alertMessageDesktop('error', this.lang.translate("The product link failed"));
                        this.vhComponent.hideLoading(0);
                    });
                });
            }
        });
    }
    /**
     * Gỡ sản phẩm liên kết trên sàn mới sản phẩm trong app sales
     * @param id_product
     * @param item_id
     * @param SkuId
     */
    removeAffiliate(item_id, SkuId) {
        const productLinked = this.findProductLinked(item_id, SkuId);
        if (!productLinked) {
            this.vhComponent.alertMessageDesktop('error', this.lang.translate("The product link failed"));
            return;
        }
        this.vhComponent.alertConfirm(this.lang.translate("Confirm"), "", this.lang.translate("Are you sure to remove this product") + "?", "Ok", this.lang.translate("Cancel")).then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                this.vhEcommerce.deleteMergeTiktokProduct_skus(productLinked, item_id, SkuId, this.infoShop['_id'], this.id_branch).then((bool) => {
                    if (bool) {
                        this.vhComponent.hideLoading(0).then(() => {
                            setTimeout(() => {
                                this.changeShop(this.infoShop._id);
                                this.vhComponent.showToast(1500, this.lang.translate("The product has been successfully unlinked"), 'success-toast');
                            }, 500);
                        });
                    }
                    else {
                        this.vhComponent.showToast(1500, this.lang.translate("The product link failed"), 'alert-toast');
                        this.vhComponent.hideLoading(0);
                    }
                }).catch((err) => { console.error(err); this.vhComponent.hideLoading(0); });
            });
        }).catch(() => { });
    }
}
ProductOnShopComponent.ɵfac = function ProductOnShopComponent_Factory(t) { return new (t || ProductOnShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhEcommerce)); };
ProductOnShopComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ProductOnShopComponent, selectors: [["app-product-on-shop"]], decls: 28, vars: 24, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "product-on-shop"], ["nz-row", "", "nzGutter", "8", 1, "product-on-shop-header"], ["nz-col", "", "nzSpan", "4", 1, "title"], ["nz-col", "", "nzSpan", "6"], [1, "color-green"], ["nz-col", "", "nzSpan", "6", 1, "title", "center-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-row", "", "nzGutter", "16", 1, "product-on-shop-body"], ["nz-col", "", "nzSpan", "24"], [3, "nzSelectedIndex", "nzSelectedIndexChange", "nzSelectChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzNoResult", "nzData", 4, "ngIf"], [3, "title", "visible_affiliate", "listProductApp", "searchProductAppValue", "cancelAffiliate", "searchProductApp", "acceptAfiliate"], ["nz-icon", "", "nzType", "search"], [3, "nzTitle"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzNoResult", "nzData"], ["list_product_show", ""], ["nzWidth", "3%"], ["nzWidth", "10%"], ["nzAlign", "left", "nzWidth", "27%"], [1, "sortTable"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType", "click"], ["nzAlign", "right", "nzWidth", "15%"], ["nzWidth", "15%"], ["nzAlign", "right", "nzWidth", "20%"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "icon-expand", "nz-icon", "", "nzTheme", "outline", 3, "nzType", "click", 4, "ngIf"], ["nz-tooltip", "", "nzTooltipColor", "white", "nzPopoverTrigger", "hover", "onerror", "this.src='./assets/icon/management/image_default.svg'", "width", "40px", "height", "40px", 3, "nzTooltipTitle", "ngStyle", "src"], ["zoomImage", ""], [1, "product-info"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click"], ["nzAlign", "right", 1, "product-price"], [4, "ngIf"], [1, "product-status"], [3, "ngClass"], ["nzAlign", "left", 1, "product-stock"], [3, "ngModel", "ngModelChange"], ["nz-icon", "", "nzTheme", "outline", 1, "icon-expand", 3, "nzType", "click"], ["onerror", "this.src='./assets/icon/management/image_default.svg'", "width", "150px", "height", "150px", 3, "src"], [4, "ngFor", "ngForOf"], ["class", "icon-link green", "nz-icon", "", "nzType", "link", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["class", "icon-link red", "nz-icon", "", "nzType", "link", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nzAlign", "right"], ["nzAlign", "left"], ["class", "product-stock-no-model-item", 4, "ngFor", "ngForOf"], ["nzAlign", "center"], ["nz-icon", "", "nzType", "link", "nzTheme", "outline", 1, "icon-link", "green", 3, "click"], ["nz-icon", "", "nzType", "link", "nzTheme", "outline", 1, "icon-link", "red", 3, "click"], [1, "product-stock-no-model-item"]], template: function ProductOnShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductOnShopComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "nz-input-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ProductOnShopComponent_Template_input_ngModelChange_17_listener($event) { return ctx.searchValue = $event; })("ngModelChange", function ProductOnShopComponent_Template_input_ngModelChange_17_listener($event) { return ctx.searchTiktok($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ProductOnShopComponent_ng_template_19_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "nz-tabset", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("nzSelectedIndexChange", function ProductOnShopComponent_Template_nz_tabset_nzSelectedIndexChange_23_listener($event) { return ctx.indexSegment = $event; })("nzSelectChange", function ProductOnShopComponent_Template_nz_tabset_nzSelectChange_23_listener($event) { return ctx.segmentChanged($event.index); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ProductOnShopComponent_nz_tab_24_Template, 2, 3, "nz-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ProductOnShopComponent_nz_table_25_Template, 36, 32, "nz-table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "app-modal-link-product-ecommerce", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancelAffiliate", function ProductOnShopComponent_Template_app_modal_link_product_ecommerce_cancelAffiliate_26_listener() { return ctx.cancelAffiliate(); })("searchProductApp", function ProductOnShopComponent_Template_app_modal_link_product_ecommerce_searchProductApp_26_listener($event) { return ctx.searchProductApp($event); })("acceptAfiliate", function ProductOnShopComponent_Template_app_modal_link_product_ecommerce_acceptAfiliate_26_listener($event) { return ctx.acceptAfiliate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 14, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 16, "Product on Tiktok"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 18, "Shop name"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.infoShop.data == null ? null : ctx.infoShop.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 20, "Search for product name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSelectedIndex", ctx.indexSegment);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.indexSegment == 0 || ctx.indexSegment == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 22, "Select Tiktok linked products"))("visible_affiliate", ctx.visible_affiliate)("listProductApp", ctx.listProductApp)("searchProductAppValue", ctx.searchProductAppValue);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_9__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_11__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabSetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _components_modal_link_product_ecommerce_modal_link_product_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__.ModalLinkProductEcommerceComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_14__.NzTabComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_16__.NzTbodyComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_17__.NzTooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_18__.NzSwitchComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .product-on-shop-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 12px;\n}\nnz-layout[_ngcontent-%COMP%]   .product-on-shop-header[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sortTable[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sortTable[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .icon-expand[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 12px;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-info[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-info-category[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-stock[_ngcontent-%COMP%] {\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-stock[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .product-status-success[_ngcontent-%COMP%] {\n  color: #55ba78;\n  background-color: #eaf6ee;\n  border-color: #99d5ae;\n  padding: 4px 12px;\n  border-radius: 8px;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-vh-gray);\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25vh;\n  max-width: 250px;\n  height: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-black);\n  margin-top: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-link[_ngcontent-%COMP%] {\n  padding: 1px;\n  font-size: 12px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-link.green[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .icon-link.red[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-red);\n  color: var(--ion-color-vh-red);\n}\nnz-spin[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1000;\n}\n.color-green[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.color-orange[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-orange);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtb24tc2hvcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNJLGVBQUE7QUFDUjtBQUdBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFBSjtBQUVJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUFSO0FBR0k7RUFDSSxrQkFBQTtBQURSO0FBSUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFNQSxtQkFBQTtBQVBSO0FBR1E7RUFDSSxVQUFBO0FBRFo7QUFPSTtFQUNJLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBTFI7QUFPUTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtBQUxaO0FBVVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFSWjtBQVlZO0VBQ0ksY0FBQTtBQVZoQjtBQWFZO0VBQ0ksK0JBQUE7QUFYaEI7QUFlUTtFQUNJLGVBQUE7QUFiWjtBQWVZO0VBQ0ksY0FBQTtBQWJoQjtBQWtCWTtFQUNJLGNBQUE7QUFoQmhCO0FBb0JRO0VBQ0ksbUJBQUE7QUFsQlo7QUFvQlk7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWxCaEI7QUFzQlE7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0FBcEJaO0FBd0JJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXRCUjtBQXdCUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUF0Qlo7QUF5QlE7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQXZCWjtBQTBCUTtFQUNJLGtCQUFBO0FBeEJaO0FBNEJJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUExQlI7QUE2Qkk7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0FBM0JSO0FBOEJJO0VBQ0kseUNBQUE7RUFDQSw4QkFBQTtBQTVCUjtBQWdDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FBN0JKO0FBZ0NBO0VBQ0ksZ0NBQUE7QUE3Qko7QUFnQ0E7RUFDSSxpQ0FBQTtBQTdCSiIsImZpbGUiOiJwcm9kdWN0LW9uLXNob3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNlbnRlci10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2R1Y3Qtb24tc2hvcC1oZWFkZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgbnotc2VsZWN0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvcnRUYWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRib2R5IHtcclxuICAgICAgICAuaWNvbi1leHBhbmQge1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZHVjdC1pbmZvIHtcclxuICAgICAgICAgICAgPnNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYtY2F0ZWdvcnkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2R1Y3Qtc3RvY2sge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvZHVjdC1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9kdWN0LXN0YXR1cyB7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICAgICAgICAmLXN1Y2Nlc3Mge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM1NWJhNzg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFmNmVlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOTlkNWFlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uby1hZmZpbGlhdGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXZoO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dC1jZW50ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pY29uLWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbi1saW5rLmdyZWVuIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29uLWxpbmsucmVkIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtcmVkKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXJlZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm56LXNwaW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4uY29sb3ItZ3JlZW4ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbn1cclxuXHJcbi5jb2xvci1vcmFuZ2Uge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1vcmFuZ2UpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 65494:
/*!**********************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiktok/product-on-shop/product-on-shop.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOnShopModule": () => (/* binding */ ProductOnShopModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _product_on_shop_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-on-shop.component */ 8940);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/menu/manage/ecommerce/components/modal-link-product-ecommerce/modal-link-product-ecommerce.module */ 14774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);











const routes = [
    {
        path: '',
        component: _product_on_shop_component__WEBPACK_IMPORTED_MODULE_0__.ProductOnShopComponent
    },
];
class ProductOnShopModule {
}
ProductOnShopModule.ɵfac = function ProductOnShopModule_Factory(t) { return new (t || ProductOnShopModule)(); };
ProductOnShopModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ProductOnShopModule });
ProductOnShopModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.ScrollingModule,
            src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_2__.ModalLinkProductEcommerceModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProductOnShopModule, { declarations: [_product_on_shop_component__WEBPACK_IMPORTED_MODULE_0__.ProductOnShopComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.ScrollingModule,
        src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_2__.ModalLinkProductEcommerceModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_tiktok_product-on-shop_product-on-shop_module_ts.js.map