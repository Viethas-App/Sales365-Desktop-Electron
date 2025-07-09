"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_overview_overview_module_ts"],{

/***/ 68423:
/*!***********************************************************!*\
  !*** ./src/app/sales/menu/overview/overview.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewComponent": () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apexcharts */ 41488);
/* harmony import */ var apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apexcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _user_guide_user_guide_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-guide/user-guide.component */ 47280);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);















function OverviewComponent_span_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "No data"), " ");
} }
const _c0 = function (a0, a1) { return { "maxWidth": a0, "minWidth": a1 }; };
function OverviewComponent_table_90_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](8, _c0, ctx_r6.widthTable * 0.4 + "px", ctx_r6.widthTable * 0.4 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r7.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](11, _c0, ctx_r6.widthTable * 0.2 + "px", ctx_r6.widthTable * 0.2 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r7.barcode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](14, _c0, ctx_r6.widthTable * 0.15 + "px", ctx_r6.widthTable * 0.15 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r7.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](17, _c0, ctx_r6.widthTable * 0.25 + "px", ctx_r6.widthTable * 0.25 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.vhAlgorithm.vhcurrencyunit_symbol(item_r7.price));
} }
function OverviewComponent_table_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, OverviewComponent_table_90_tr_16_Template, 10, 20, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](17, _c0, ctx_r1.widthTable * 0.4 + "px", ctx_r1.widthTable * 0.4 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 9, "Product name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](20, _c0, ctx_r1.widthTable * 0.2 + "px", ctx_r1.widthTable * 0.2 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 11, "Barcode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](23, _c0, ctx_r1.widthTable * 0.15 + "px", ctx_r1.widthTable * 0.15 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 13, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](26, _c0, ctx_r1.widthTable * 0.25 + "px", ctx_r1.widthTable * 0.25 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 15, "Selling price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.lowInStock.slice(0, 3));
} }
function OverviewComponent_span_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "and"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.lowInStock.length - 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, "others"), " ");
} }
function OverviewComponent_span_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "No data"), " ");
} }
function OverviewComponent_table_103_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](8, _c0, ctx_r9.widthTable * 0.4 + "px", ctx_r9.widthTable * 0.4 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r10.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](11, _c0, ctx_r9.widthTable * 0.2 + "px", ctx_r9.widthTable * 0.2 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r10.barcode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](14, _c0, ctx_r9.widthTable * 0.15 + "px", ctx_r9.widthTable * 0.15 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r10.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](17, _c0, ctx_r9.widthTable * 0.25 + "px", ctx_r9.widthTable * 0.25 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.vhAlgorithm.vhcurrencyunit_symbol(item_r10.price));
} }
function OverviewComponent_table_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, OverviewComponent_table_103_tr_16_Template, 10, 20, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](17, _c0, ctx_r4.widthTable * 0.4 + "px", ctx_r4.widthTable * 0.4 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 9, "Product name"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](20, _c0, ctx_r4.widthTable * 0.2 + "px", ctx_r4.widthTable * 0.2 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 11, "Barcode"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](23, _c0, ctx_r4.widthTable * 0.15 + "px", ctx_r4.widthTable * 0.15 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 13, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](26, _c0, ctx_r4.widthTable * 0.25 + "px", ctx_r4.widthTable * 0.25 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 15, "Selling price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.outOfStock.slice(0, 3));
} }
function OverviewComponent_span_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 3, "and"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.outOfStock.length - 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, "others"), " ");
} }
class OverviewComponent {
    constructor(vhComponent, vhQuery, lang, vhAlgorithm, vhQuerySales, vhAuth, router, cdRef) {
        this.vhComponent = vhComponent;
        this.vhQuery = vhQuery;
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.vhQuerySales = vhQuerySales;
        this.vhAuth = vhAuth;
        this.router = router;
        this.cdRef = cdRef;
        this.startTime = new Date;
        this.endTime = new Date;
        this.widthTable = 0;
        this.typeChart = "bar";
        this.time = "today";
        this.initDataShow = () => { return { categories: [], sales_value: [], sales_atax: 0, sales_btax: 0, revenue_value: [], revenue: 0 }; };
        this.dataShow = this.initDataShow();
        this.data = {};
        /**Lấy báo cáo sắp hết hàng  và hết hàng */
        this.lowInStock = [];
        this.outOfStock = [];
        /**Get đơn */
        this.numberInvoice = {
            today: { sold: 0, returned: 0, cancelled: 0, member: 0 },
            week: { sold: 0, returned: 0, cancelled: 0, member: 0 },
            month: { sold: 0, returned: 0, cancelled: 0, member: 0 },
        };
    }
    ngOnInit() {
        this.initTime();
    }
    ngAfterViewInit() {
        this.doRefresh();
        this.chartOverviews = new (apexcharts__WEBPACK_IMPORTED_MODULE_0___default())(document.querySelector("#chart-overviews"), this.renderOption());
        this.chartOverviews.render();
    }
    ngAfterViewChecked() {
        this.widthTable = document.querySelector(".left").clientWidth - 24;
        this.cdRef.detectChanges();
    }
    /**
     * khởi tạo mốc thời gian xem báo cáo
     */
    initTime() {
        this.startTime.setHours(0, 0, 0, 0);
        this.endTime.setHours(23, 59, 59, 59);
        // thứ 2 đầu tuần
        this.monOfWeek = new Date(this.startTime.getFullYear(), this.startTime.getMonth(), this.startTime.getDate() - (this.startTime.getDay() == 0 ? 6 : this.startTime.getDay() - 1), 0, 0, 0, 0);
        this.sunOfWeek = new Date(this.monOfWeek.getTime() + 604800000 - 1);
        // ngày đầu tiên của tháng
        this.firstDayOfMonth = new Date(this.startTime.getFullYear(), this.startTime.getMonth(), 1, 0, 0, 0, 0);
        this.lastDayOfMonth = new Date(this.firstDayOfMonth.getTime() + 86400000 * this.vhAlgorithm.getNumberOfDaysInMonth(this.startTime.getFullYear(), this.startTime.getMonth() + 1) - 1);
    }
    //khởi tạo các trường cho chart
    renderOption(categories = [], revenue_value = [], sales_value = []) {
        return {
            chart: {
                id: 'chart-overviews',
                type: this.typeChart,
                toolbar: { show: false },
                zoom: { enabled: false },
                animations: { speed: 1000 },
                height: 300,
            },
            series: [
                { name: this.lang.translate("Revenue"), data: revenue_value },
                { name: this.lang.translate("sales"), data: sales_value }
            ],
            colors: ["var(--ion-color-vh-green)", "var(--ion-color-vh-green-chart)"],
            stroke: { width: this.typeChart == "bar" ? 0 : 2, curve: "smooth" },
            xaxis: { categories, labels: { rotate: 0, trim: false, hideOverlappingLabels: true }, axisBorder: { show: false }, tickPlacement: "on", axisTicks: { show: false } },
            yaxis: {
                show: true,
                labels: {
                    formatter: (val) => this.vhAlgorithm.vhcurrencyunit(val),
                    style: {
                        fontSize: '0.9rem',
                        fontWeight: 400,
                    }
                },
            },
            dataLabels: { enabled: false },
            states: {
                active: { filter: { type: "none" } },
                normal: { filter: { type: "none" } },
                hover: { filter: { type: "none" } }
            },
            plotOptions: {
                bar: { columnWidth: categories.length < 5 ? "20%" : "30%" }
            },
            noData: { text: this.lang.translate(this.data[this.time] ? "No data" : "Syncing ...") },
            fill: this.typeChart == "area" ? {
                type: "gradient",
                gradient: {
                    shade: 'dark', type: 'vertical', shadeIntensity: 1, stops: [0, 25, 75, 100],
                    colorStops: [
                        [
                            { offset: 0, color: "var(--ion-color-vh-green)", opacity: 1 },
                            { offset: 25, color: "var(--ion-color-vh-green)", opacity: 0.9 },
                            { offset: 75, color: "var(--ion-color-vh-green)", opacity: 0.6 },
                            { offset: 100, color: "var(--ion-color-vh-green)", opacity: 0.3 }
                        ],
                        [
                            { offset: 0, color: "var(--ion-color-vh-green-chart)", opacity: 1 },
                            { offset: 25, color: "var(--ion-color-vh-green-chart)", opacity: 0.9 },
                            { offset: 75, color: "var(--ion-color-vh-green-chart)", opacity: 0.6 },
                            { offset: 100, color: "var(--ion-color-vh-green-chart)", opacity: 0.3 }
                        ]
                    ]
                }
            } : { type: "solid" },
        };
    }
    /**
     * cập nhật lại giá trị cho chart
     */
    updateChart(typeChart) {
        this.chartOverviews.updateOptions(this.renderOption(this.dataShow['categories'], this.dataShow['revenue_value'], this.dataShow['sales_value']));
    }
    doRefresh() {
        Promise.all([this.getData(this.time), this.getLowOutStock()]).then((res) => {
            this.changeTime(this.time);
        });
    }
    /**
     * bắt sk thay đổi mốc thời gian xem báo cáo
     */
    changeTime(value) {
        if (this.vhAuth.checkLocalMyPermissionName('report_enable_sales_profit')) {
            if (this.data[value]) {
                this.dataShow = this.data[value];
            }
            else {
                this.dataShow = this.initDataShow();
                this.getData(this.time).then(() => this.changeTime(this.time));
            }
            this.updateChart();
        }
        else {
            this.data['today'] = [];
            this.data['week'] = [];
            this.data['month'] = [];
            this.updateChart();
        }
    }
    /**
     * check mốc thời gian để get dữ liệu
     */
    getData(time) {
        switch (time) {
            case "week": return this.getWeek();
            case "month": return this.getMonth();
            default: return this.getToday();
        }
    }
    /**
     * get dữ liệu theo mốc thời gian ngày hiện tại
     */
    getToday() {
        return new Promise(resolve => {
            let arrayHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            Promise.all([
                this.vhQuerySales.getReportRevenue_byHoursOut_hourArray(this.startTime, this.endTime, arrayHours, this.vhQuerySales.getDefaultBranch()._id),
                this.vhQuerySales.getReportSales_byHoursOut_hourArray(this.startTime, this.endTime, arrayHours, this.vhQuerySales.getDefaultBranch()._id)
            ]).then(([{ docs: docs_revenue, revenue }, { docs: docs_sales, sales_atax, sales_btax }]) => {
                this.data['today'] = {
                    categories: arrayHours.map(item => ` ${item}h `),
                    revenue_value: docs_revenue.map((item) => { return { revenue: item.revenue }; }), revenue,
                    sales_value: docs_sales.map((item) => { return { sales_atax: item.sales_atax, sales_btax: item.sales_btax }; }), sales_btax, sales_atax,
                };
                this.data['today'] = this.freshValue(this.data['today']);
                this.getNumberInvoice(this.startTime, this.endTime);
                resolve(this.data['today']);
            });
        });
    }
    /**
     * get dữ liệu theo mốc thời gian tuần
     */
    getWeek() {
        return new Promise(resolve => {
            let arrayDayWeek = [];
            let key = [this.lang.translate("Mon"), this.lang.translate("Tue"), this.lang.translate("Wed"), this.lang.translate("Thu"), this.lang.translate("Fri"), this.lang.translate("Sat"), this.lang.translate("Sun")];
            for (let i = 0; i < 7; i++) {
                let numberOfDayPrevMonth = this.vhAlgorithm.getNumberOfDaysInMonth(this.monOfWeek.getFullYear(), this.monOfWeek.getMonth() + 1);
                let numberDay = this.monOfWeek.getDate() + i;
                arrayDayWeek.push(numberDay > numberOfDayPrevMonth ? numberDay - numberOfDayPrevMonth : numberDay);
            }
            Promise.all([
                this.vhQuerySales.getReportRevenue_byDaysOut_dayArray(this.monOfWeek, this.sunOfWeek, arrayDayWeek, this.vhQuerySales.getDefaultBranch()._id),
                this.vhQuerySales.getReportSales_byDaysOut_dayArray(this.monOfWeek, this.sunOfWeek, arrayDayWeek, this.vhQuerySales.getDefaultBranch()._id)
            ]).then(([{ docs: docs_revenue, revenue, }, { docs: docs_sales, sales_atax, sales_btax }]) => {
                this.data['week'] = {
                    categories: key,
                    revenue_value: docs_revenue.map((item) => { return { revenue: item.revenue }; }), revenue,
                    sales_value: docs_sales.map((item) => { return { sales_atax: item.sales_atax, sales_btax: item.sales_btax }; }), sales_btax, sales_atax,
                };
                this.data['week'] = this.freshValue(this.data['week']);
                this.getNumberInvoice(this.monOfWeek, this.sunOfWeek);
                resolve(this.data['week']);
            });
        });
    }
    /**
     * get dữ liệu theo mốc thời gian tháng
     */
    getMonth() {
        return new Promise(resolve => {
            let dayOfMonth = this.vhAlgorithm.getNumberOfDaysInMonth(this.monOfWeek.getFullYear(), this.monOfWeek.getMonth() + 1);
            let arrayDayMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
                .slice(0, dayOfMonth);
            Promise.all([
                this.vhQuerySales.getReportRevenue_byDaysOut_dayArray(this.firstDayOfMonth, this.lastDayOfMonth, arrayDayMonth, this.vhQuerySales.getDefaultBranch()._id),
                this.vhQuerySales.getReportSales_byDaysOut_dayArray(this.firstDayOfMonth, this.lastDayOfMonth, arrayDayMonth, this.vhQuerySales.getDefaultBranch()._id)
            ]).then(([{ docs: docs_revenue, revenue, }, { docs: docs_sales, sales_atax, sales_btax }]) => {
                this.data['month'] = {
                    categories: arrayDayMonth,
                    revenue_value: docs_revenue.map((item) => { return { revenue: item.revenue }; }), revenue,
                    sales_value: docs_sales.map((item) => { return { sales_atax: item.sales_atax, sales_btax: item.sales_btax }; }), sales_btax, sales_atax,
                };
                this.data['month'] = this.freshValue(this.data['month']);
                this.getNumberInvoice(this.firstDayOfMonth, this.lastDayOfMonth);
                resolve(this.data['month']);
            });
        });
    }
    /**
     * xử lý trả về dữ liệu chuẩn cấu trúc để show ra giao diện
     */
    freshValue(data) {
        let dataShow = { categories: [], sales_value: [], revenue_value: [], revenue: data.revenue, sales_btax: data.sales_btax, sales_atax: data.sales_atax };
        if (data.revenue_value.length && data.sales_value.length) {
            for (let i = 0, len = data.revenue_value.length; i < len; i++) {
                if (data.sales_value[i].sales_atax || data.revenue_value[i].revenue) {
                    dataShow.categories.push(data.categories[i]);
                    dataShow.sales_value.push(data.sales_value[i].sales_atax);
                    dataShow.revenue_value.push(data.revenue_value[i].revenue);
                }
            }
        }
        else {
            if (data.sales_value.length) {
                for (let i = 0, len = data.sales_value.length; i < len; i++) {
                    if (data.sales_value[i].sales_atax) {
                        dataShow.categories.push(data.categories[i]);
                        dataShow.sales_value.push(data.sales_value[i].sales_atax);
                        dataShow.revenue_value.push(0);
                    }
                }
            }
            else {
                for (let i = 0, len = data.revenue_value.length; i < len; i++) {
                    if (data.revenue_value[i].revenue) {
                        dataShow.categories.push(data.categories[i]);
                        dataShow.sales_value.push(0);
                        dataShow.revenue_value.push(data.revenue_value[i].revenue);
                    }
                }
            }
        }
        return dataShow;
    }
    getLowOutStock() {
        return new Promise(resolve => {
            Promise.all([
                this.vhQuerySales.getReportProducts_byLowInStock(this.vhQuerySales.getDefaultBranch()._id),
                this.vhQuerySales.getReportProducts_byOutOfStock(this.vhQuerySales.getDefaultBranch()._id)
            ]).then(([lowIn, outOf]) => {
                this.lowInStock = lowIn.filter(item => item.quantity > 0).sort((a, b) => a.quantity < b.quantity);
                this.outOfStock = outOf.sort((a, b) => a.quantity < b.quantity);
                resolve({ lowIn, outOf });
            });
        });
    }
    /**
     * get số lượng khách hàng, đơn bán , đơn trả, đơn hủy
     */
    getNumberInvoice(startTime, endTime) {
        this.vhQuery.getDocsByFields("customers", { date: { $gte: startTime, $lte: endTime } }, {}).then((member) => this.numberInvoice[this.time]['member'] = member.length);
        this.vhQuerySales.getBills_byFields({ bill_type: { $in: [1, 15, 40, 50] }, date: { $gte: startTime, $lte: endTime }, id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id } }, {}).then((_sales) => this.numberInvoice[this.time]['sold'] = _sales.length);
        this.vhQuerySales.getBills_byFields({ bill_type: { $eq: 3 }, date: { $gte: startTime, $lte: endTime }, id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id } }, {}).then((_return) => { this.numberInvoice[this.time]['returned'] = _return.length; });
        this.vhQuerySales.getBills_byFields({ bill_type: { $in: [4, 23] }, date: { $gte: startTime, $lte: endTime }, id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id } }, {}).then((_cancel) => this.numberInvoice[this.time]['cancelled'] = _cancel.length);
    }
    gotoLowInStock() {
        if (this.vhAuth.checkMyPermission("report_enable_out_of_stock"))
            this.router.navigate(["/sales/dashboard/manage/reports/out-of-stock"]);
        else
            this.vhComponent.showToast(1500, this.lang.translate('You do not have this rights'), "alert-toast");
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_5__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
OverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], decls: 106, vars: 56, consts: [["nz-row", "", 1, "chart"], ["nz-col", "", "nzSpan", "24"], ["id", "heightChart", 1, "chart-background"], ["id", "segment", 1, "info"], ["mode", "ios", 3, "ngModel", "ngModelChange"], ["value", "bar"], ["name", "bar-chart-outline"], ["value", "line"], ["src", "assets/icon/global/line-chart.svg"], ["value", "area"], ["src", "assets/icon/global/area-chart.svg"], [3, "ngModel", "ngModelChange"], ["nzValue", "today", 3, "nzLabel"], ["nzValue", "week", 3, "nzLabel"], ["nzValue", "month", 3, "nzLabel"], ["id", "chart-overviews"], ["nz-row", "", 1, "sales"], ["nz-col", "", "nzSpan", "4", 1, "right"], [1, "sales-background", 2, "border-bottom", "5px solid var(--ion-color-vh-green)"], [1, "title"], ["src", "assets/icon/overviews/revenue.svg", "color", "vh-green"], [1, "number"], [1, "sales-background", 2, "border-bottom", "5px solid var(--ion-color-vh-orange)"], ["src", "assets/icon/overviews/sales.svg", "color", "vh-orange"], [1, "sales-background", 2, "border-bottom", "5px solid var(--ion-color-vh-turquoise)"], ["src", "assets/icon/overviews/stock.svg", "color", "vh-turquoise"], [1, "sales-background", 2, "border-bottom", "5px solid var(--ion-color-vh-pink)"], ["src", "assets/icon/overviews/complete.svg", "color", "vh-pink"], [1, "sales-background", 2, "border-bottom", "5px solid var(--ion-color-vh-pink-light)"], ["src", "assets/icon/overviews/return.svg", "color", "vh-pink-light"], ["nz-col", "", "nzSpan", "4"], ["src", "assets/icon/overviews/cancel.svg", "color", "vh-orange"], ["nz-row", "", 1, "out-of"], ["nz-col", "", "nzSpan", "12", 1, "right"], [1, "out-of-background"], [1, "more", 3, "click"], [1, "info"], ["color", "vh-gray", "class", "no-data", 4, "ngIf"], ["style", "width: 100%;", 4, "ngIf"], ["class", "others", 4, "ngIf"], ["nz-col", "", "nzSpan", "12", 1, "left"], ["color", "vh-gray", 1, "no-data"], [2, "width", "100%"], [3, "ngStyle"], [2, "text-align", "center", 3, "ngStyle"], [2, "text-align", "right", 3, "ngStyle"], [4, "ngFor", "ngForOf"], [1, "others"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-segment", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_ion_segment_ngModelChange_8_listener($event) { return ctx.typeChart = $event; })("ngModelChange", function OverviewComponent_Template_ion_segment_ngModelChange_8_listener($event) { return ctx.updateChart($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-segment-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-segment-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-segment-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "nz-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function OverviewComponent_Template_nz_select_ngModelChange_15_listener($event) { return ctx.time = $event; })("ngModelChange", function OverviewComponent_Template_nz_select_ngModelChange_15_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "nz-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "nz-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "ion-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "ion-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "ion-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](57, "ion-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](66, "ion-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "ion-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](84, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OverviewComponent_Template_span_click_85_listener() { return ctx.gotoLowInStock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](89, OverviewComponent_span_89_Template, 3, 3, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](90, OverviewComponent_table_90_Template, 17, 29, "table", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](91, OverviewComponent_span_91_Template, 7, 7, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OverviewComponent_Template_span_click_98_listener() { return ctx.gotoLowInStock(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](102, OverviewComponent_span_102_Template, 3, 3, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](103, OverviewComponent_table_103_Template, 17, 29, "table", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](104, OverviewComponent_span_104_Template, 7, 7, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "app-user-guide");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 28, "Overviews"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.typeChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](17, 30, "Today"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 32, "The week"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 34, "The month"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](29, 36, "Revenue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.dataShow.revenue), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 38, "sales"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit(ctx.dataShow.sales_atax), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](47, 40, "New customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.numberInvoice[ctx.time].member, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](56, 42, "Sold"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.numberInvoice[ctx.time].sold, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](65, 44, "Returned"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.numberInvoice[ctx.time].returned, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](74, 46, "Cancelled"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.numberInvoice[ctx.time].cancelled, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](84, 48, "Low in stock"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](87, 50, "See more"), ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.lowInStock.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.lowInStock.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.lowInStock.length > 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](97, 52, "Out of stock"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](100, 54, "See more"), ">");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.outOfStock.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.outOfStock.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.outOfStock.length > 3);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_7__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__.NzColDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.SelectValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonIcon, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _user_guide_user_guide_component__WEBPACK_IMPORTED_MODULE_3__.UserGuideComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThMeasureDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe], styles: ["nz-layout[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  padding-bottom: 30px;\n}\nnz-layout[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%] {\n  height: 50%;\n  padding-bottom: 16px;\n}\nnz-layout[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .chart-background[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  height: 100%;\n  padding: 16px;\n}\nnz-layout[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .chart-background[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .chart-background[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 130px;\n}\nnz-layout[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 100%;\n  --background: none;\n}\nnz-layout[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --indicator-color: none;\n  --background: none;\n  --background-checked: none;\n  font-size: 0.9rem;\n  --indicator-box-shadow: none;\n}\nnz-layout[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   ion-segment-button.segment-button-checked[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .chart[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #chart-overviews[_ngcontent-%COMP%] {\n  width: 100% !important;\n  max-width: 100% !important;\n  min-width: 100% !important;\n  max-height: 30vw !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  height: 130px;\n  padding-bottom: 16px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-background[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 45%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  height: 55%;\n  text-align: center;\n  font-size: 1.4rem;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .out-of[_ngcontent-%COMP%] {\n  height: 30%;\n}\nnz-layout[_ngcontent-%COMP%]   .out-of[_ngcontent-%COMP%]   .out-of-background[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .out-of[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 20%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: bold;\n  font-size: 1rem;\n  padding: 16px;\n}\nnz-layout[_ngcontent-%COMP%]   .out-of[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  border-bottom: 1px solid;\n  font-weight: 300;\n  font-size: 0.9rem;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .out-of[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  padding: 8px 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .out-of[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  font-size: 0.9rem;\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .out-of[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .out-of[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .out-of[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f5f5f5;\n  padding: 5px;\n  font-size: 0.9rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\nnz-layout[_ngcontent-%COMP%]   .out-of[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .others[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-style: italic;\n  float: right;\n  margin-right: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFFQSxvQkFBQTtBQUFGO0FBQ0U7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQUFJO0VBQ0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFTjtBQURNO0VBQ0UsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBR1I7QUFETTtFQUNFLFlBQUE7QUFHUjtBQUFJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBRU47QUFETTtFQUNFLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHUjtBQUZRO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQUlWO0FBSFU7RUFDRSxlQUFBO0FBS1o7QUFIVTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7QUFLWjtBQURNO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFHUjtBQUNFO0VBRUUsYUFBQTtFQUNBLG9CQUFBO0FBQUo7QUFDSTtFQUNFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDTjtBQUNJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQUNOO0FBQU07RUFDRSxpQkFBQTtBQUVSO0FBQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ047QUFDSTtFQUNFLGtCQUFBO0FBQ047QUFFRTtFQUNFLFdBQUE7QUFBSjtBQUNJO0VBQ0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNOO0FBQ0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDTjtBQUFNO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRVI7QUFDSTtFQUNFLGdCQUFBO0FBQ047QUFBTTtFQUNFLHlCQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtBQUNSO0FBQ007OztFQUdFLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUdFO0VBQ0Usa0JBQUE7QUFESjtBQUdFO0VBQ0UsaUJBQUE7QUFESiIsImZpbGUiOiJvdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWxheW91dCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICAvLyBoZWlnaHQ6IDk1JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAuY2hhcnQge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIC5jaGFydC1iYWNrZ3JvdW5kIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICAtLWluZGljYXRvci1jb2xvcjogbm9uZTtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBub25lO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICNjaGFydC1vdmVydmlld3Mge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzB2dyAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zYWxlcyB7XHJcbiAgICAvLyBoZWlnaHQ6IDIwJTtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIC5zYWxlcy1iYWNrZ3JvdW5kIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICBoZWlnaHQ6IDQ1JTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5udW1iZXIge1xyXG4gICAgICBoZWlnaHQ6IDU1JTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5vdXQtb2Yge1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAub3V0LW9mLWJhY2tncm91bmQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIC5tb3JlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbmZvIHtcclxuICAgICAgcGFkZGluZzogOHB4IDhweDtcclxuICAgICAgdGhlYWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgLy90ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgdGgsXHJcbiAgICAgIHRyLFxyXG4gICAgICB0ZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgfVxyXG4gICAgICAub3RoZXJzIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIC5sZWZ0IHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIH1cclxufVxyXG4vLyAubW9kYWwtYnJhbmNoIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgbWFyZ2luLXRvcDogMjBweDtcclxuLy8gICAmLWNvbXBsZXRlIHtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHBhZGRpbmc6IDhweDtcclxuLy8gICAgIGxlZnQ6IDA7XHJcbi8vICAgICBib3R0b206IDA7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4vLyAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICB9XHJcbi8vICAgZGl2IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4vLyAgIH1cclxuLy8gICBoMyB7XHJcbi8vICAgICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICB9XHJcbi8vICAgaW1nIHtcclxuLy8gICAgIHdpZHRoOiAxNTBweDtcclxuLy8gICAgIGhlaWdodDogYXV0bztcclxuLy8gICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4vLyAgIH1cclxuLy8gICBuei1zZWxlY3Qge1xyXG4vLyAgICAgd2lkdGg6IDkwJTtcclxuLy8gICB9XHJcbi8vIH1cclxuIl19 */"] });


/***/ }),

/***/ 3264:
/*!********************************************************!*\
  !*** ./src/app/sales/menu/overview/overview.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewModule": () => (/* binding */ OverviewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.component */ 68423);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _user_guide_user_guide_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-guide/user-guide.component */ 47280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    {
        path: '',
        component: _overview_component__WEBPACK_IMPORTED_MODULE_0__.OverviewComponent
    }
];
class OverviewModule {
}
OverviewModule.ɵfac = function OverviewModule_Factory(t) { return new (t || OverviewModule)(); };
OverviewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: OverviewModule });
OverviewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OverviewModule, { declarations: [_overview_component__WEBPACK_IMPORTED_MODULE_0__.OverviewComponent,
        _user_guide_user_guide_component__WEBPACK_IMPORTED_MODULE_2__.UserGuideComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule] }); })();


/***/ }),

/***/ 47280:
/*!************************************************************************!*\
  !*** ./src/app/sales/menu/overview/user-guide/user-guide.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserGuideComponent": () => (/* binding */ UserGuideComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);







function UserGuideComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Chuy\u1EC3n \u0111\u1ED5i giao di\u1EC7n, xem th\u00F4ng tin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Click chu\u1ED9t \u0111\u1EC3 chuy\u1EC3n qua c\u00E1c giao di\u1EC7n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " - Giao di\u1EC7n b\u00E1n h\u00E0ng ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " - B\u00E1n/\u0110\u1ED5i Voucher ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " - B\u00E1n/\u0110\u1ED5i Th\u1EBB tr\u1EA3 tr\u01B0\u1EDBc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " - Xem video h\u01B0\u1EDBng d\u1EABn ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " - Xem th\u00F4ng tin ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " - Thay \u0111\u1ED5i chi nh\u00E1nh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserGuideComponent_div_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.done(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0110\u00E3 hi\u1EC3u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserGuideComponent {
    constructor(vhAuth) {
        this.vhAuth = vhAuth;
    }
    ngOnInit() {
        let isFirstTime = this.vhAuth.localStorageGET("isFirstTime_management");
        if (isFirstTime)
            this.isFirstTime = false;
        else
            this.isFirstTime = true;
    }
    done() {
        this.isFirstTime = false;
        this.vhAuth.localStorageSET("isFirstTime_management", true);
    }
}
UserGuideComponent.ɵfac = function UserGuideComponent_Factory(t) { return new (t || UserGuideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAuth)); };
UserGuideComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserGuideComponent, selectors: [["app-user-guide"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [2, "position", "fixed", "z-index", "1", "height", "100%", "width", "100%", "bottom", "0", "right", "170px", "background-color", "black", "opacity", "0.55"], [2, "position", "fixed", "border-top", "2px solid gray", "z-index", "1", "height", "100%", "width", "170px", "top", "64px", "right", "0", "background-color", "black", "opacity", "0.55"], ["src", "assets/icon/arrow_intro.svg", 2, "z-index", "3", "right", "72px", "top", "46px", "position", "fixed", "font-size", "3rem"], [2, "background-color", "white", "padding", "16px", "height", "300px", "z-index", "2", "width", "300px", "position", "fixed", "border-radius", "12px", "right", "100px", "display", "flex", "flex-direction", "column", "border", "1px solid #00a859", "top", "72px"], [2, "height", "90%"], [2, "text-transform", "uppercase"], [2, "text-align", "end"], ["nz-button", "", 3, "click"]], template: function UserGuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserGuideComponent_div_0_Template, 25, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFirstTime);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_4__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_5__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWd1aWRlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_overview_overview_module_ts.js.map