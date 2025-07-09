"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_sales-payment-card_sales-payment-card_module_ts"],{

/***/ 85543:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/sales-payment-card/create-bill/create-bill.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateBillComponent": () => (/* binding */ CreateBillComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_bill_type_bill_type_50_add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/bill-type/bill-type-50/add/add.component */ 63063);


class CreateBillComponent {
}
CreateBillComponent.ɵfac = function CreateBillComponent_Factory(t) { return new (t || CreateBillComponent)(); };
CreateBillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateBillComponent, selectors: [["app-create-bill"]], decls: 1, vars: 0, template: function CreateBillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "bill-type50-add");
    } }, directives: [_components_bill_type_bill_type_50_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYmlsbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 25154:
/*!*******************************************************************************!*\
  !*** ./src/app/sales/sales-payment-card/detail-bill/detail-bill.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailBillComponent": () => (/* binding */ DetailBillComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_bill_type_bill_type_50_detail_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/bill-type/bill-type-50/detail/detail.component */ 69250);


class DetailBillComponent {
}
DetailBillComponent.ɵfac = function DetailBillComponent_Factory(t) { return new (t || DetailBillComponent)(); };
DetailBillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailBillComponent, selectors: [["app-detail-bill"]], decls: 1, vars: 1, consts: [[3, "url"]], template: function DetailBillComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "bill-type50-detail", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("url", "/sales-payment-card");
    } }, directives: [_components_bill_type_bill_type_50_detail_detail_component__WEBPACK_IMPORTED_MODULE_0__.DetailComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwtYmlsbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 35290:
/*!**************************************************************************!*\
  !*** ./src/app/sales/sales-payment-card/sales-payment-card.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPaymentCardComponent": () => (/* binding */ SalesPaymentCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var _services_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/function.service */ 39);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/theme.service */ 68125);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ 8709);
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/avatar */ 37893);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/menu */ 3026);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _component_config_print_config_print_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/config-print/config-print.component */ 93022);
/* harmony import */ var _component_config_sales_config_sales_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/config-sales/config-sales.component */ 49724);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var _component_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/account-information/account-information.component */ 13411);





























function SalesPaymentCardComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 51);
} }
function SalesPaymentCardComponent_nz_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", item_r20.value)("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, item_r20.name));
} }
function SalesPaymentCardComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ion-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.vhQuerySales.getDefaultBranch().name);
} }
function SalesPaymentCardComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Sell voucher/card"), "");
} }
function SalesPaymentCardComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Exchange voucher/card"), "");
} }
function SalesPaymentCardComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Order from web/app"));
} }
function SalesPaymentCardComponent_li_90_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_li_90_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.change_branch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Change branch"), " ");
} }
function SalesPaymentCardComponent_ng_template_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 1, "Sales page settings"));
} }
function SalesPaymentCardComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 1, "No invoice today"));
} }
function SalesPaymentCardComponent_div_118_tr_41_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"]("(", invoice_r27.retail_name, " - ", invoice_r27.retail_phone, " - ", invoice_r27.retail_address, ")");
} }
const _c0 = function (a0) { return { "color": a0 }; };
function SalesPaymentCardComponent_div_118_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_div_118_tr_41_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const invoice_r27 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r30.goToDetail(invoice_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_div_118_tr_41_Template_i_click_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const invoice_r27 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); $event.stopPropagation(); return ctx_r32.vhComponent.copyValue(invoice_r27.bill_code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, SalesPaymentCardComponent_div_118_tr_41_span_11_Template, 2, 3, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r27 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 9, invoice_r27.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", invoice_r27.bill_code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 12, invoice_r27.partner_name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", invoice_r27.retail_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](invoice_r27.employee_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](invoice_r27.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](14, _c0, invoice_r27.bill_type == 4 ? "var(--ion-color-vh-red)" : "var(--ion-color-vh-black)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", invoice_r27.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r24.vhAlgorithm.vhcurrencyunit_symbol(invoice_r27.total * (1 + invoice_r27.tax / 100)), "");
} }
function SalesPaymentCardComponent_div_118_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "ion-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_div_118_ng_template_42_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r33.gotoSell(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 1, "Create sales invoice"), " ");
} }
const _c1 = function (a0) { return { y: a0 }; };
const _c2 = function () { return [20, 30, 40, 50, 100, 200]; };
function SalesPaymentCardComponent_div_118_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "nz-table", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzCurrentPageDataChange", function SalesPaymentCardComponent_div_118_Template_nz_table_nzCurrentPageDataChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r35.onCurrentPageDataChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, SalesPaymentCardComponent_div_118_tr_41_Template, 20, 16, "tr", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, SalesPaymentCardComponent_div_118_ng_template_42_Template, 8, 3, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](9);
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](43);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 16, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r15.invoiceShow.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 18, "invoices today"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](34, _c1, ctx_r15.tableHeight))("nzData", ctx_r15.invoiceShow)("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](36, _c2))("nzNoResult", _r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 20, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 22, "Invoice code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](23, 24, "Customer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 26, "Employee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](31, 28, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](35, 30, "Status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](39, 32, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _r23.data);
} }
function SalesPaymentCardComponent_ng_container_122_div_2_i_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "i", 90);
} }
function SalesPaymentCardComponent_ng_container_122_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_ng_container_122_div_2_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41); const template_r38 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r40.default_selling_page = template_r38.url; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, SalesPaymentCardComponent_ng_container_122_div_2_i_6_Template, 1, 0, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const template_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("active", ctx_r37.default_selling_page == template_r38.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", template_r38.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 5, template_r38.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r37.default_selling_page == template_r38.url);
} }
function SalesPaymentCardComponent_ng_container_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SalesPaymentCardComponent_ng_container_122_div_2_Template, 7, 7, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r16.templates);
} }
function SalesPaymentCardComponent_ng_container_125_nz_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzLabel", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 4, item_r47.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", item_r47.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", item_r47.img, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", item_r47.name, " ");
} }
function SalesPaymentCardComponent_ng_container_125_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
} if (rf & 2) {
    const selected_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("src", "assets/icon/settings/language/", selected_r48.nzValue, ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", selected_r48.nzLabel, " ");
} }
function SalesPaymentCardComponent_ng_container_125_nz_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 52);
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", item_r49)("nzLabel", item_r49);
} }
function SalesPaymentCardComponent_ng_container_125_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_ng_container_125_div_25_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r52); const color_r50 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r51.themeService.changeColor(color_r50.theme, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background-color", color_r50.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", color_r50.theme);
} }
function SalesPaymentCardComponent_ng_container_125_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "nz-list", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "nz-select", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SalesPaymentCardComponent_ng_container_125_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r53.lang = $event; })("ngModelChange", function SalesPaymentCardComponent_ng_container_125_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r55.selectLang($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, SalesPaymentCardComponent_ng_container_125_nz_option_8_Template, 4, 6, "nz-option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, SalesPaymentCardComponent_ng_container_125_ng_template_9_Template, 2, 2, "ng-template", null, 97, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "nz-list-item", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "nz-select", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SalesPaymentCardComponent_ng_container_125_Template_nz_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r56.fontSize = $event; })("ngModelChange", function SalesPaymentCardComponent_ng_container_125_Template_nz_select_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r57.setFontSize($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, SalesPaymentCardComponent_ng_container_125_nz_option_18_Template, 1, 2, "nz-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "nz-list-item", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, SalesPaymentCardComponent_ng_container_125_div_25_Template, 1, 3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 9, "Language"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r17.lang)("nzCustomTemplate", _r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r17.langList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 11, "Font size"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r17.fontSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r17.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 13, "Color"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r17.themeService.themeList);
} }
function SalesPaymentCardComponent_ng_container_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainer"](0);
} }
function SalesPaymentCardComponent_app_account_information_127_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-account-information", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closeAccount", function SalesPaymentCardComponent_app_account_information_127_Template_app_account_information_closeAccount_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r58.closeAccountInfo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("modalAccountInfo", ctx_r19.modalAccountInfo);
} }
const _c3 = function (a0) { return { "justify-content": a0 }; };
const _c4 = function () { return { top: "45%", transform: "translateY(-50%)" }; };
const _c5 = function () { return { "max-height": "70vh" }; };
class SalesPaymentCardComponent {
    constructor(vhQuery, router, vhQuerySales, vhAlgorithm, vhComponent, languageService, vhAuth, cdRef, functionService, http, translateService, themeService) {
        this.vhQuery = vhQuery;
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhAuth = vhAuth;
        this.cdRef = cdRef;
        this.functionService = functionService;
        this.http = http;
        this.translateService = translateService;
        this.themeService = themeService;
        this.useBranch = this.functionService.checkUsingBranch();
        this.langList = [
            { name: 'Vietnamese', value: 'vi', img: 'assets/icon/settings/language/vi.svg', country_code: 'VN' },
            { name: 'English', value: 'en', img: 'assets/icon/settings/language/en.svg', country_code: 'US' }
        ];
        this.lang = this.vhAuth.localStorageGET('language_code');
        this.searchValue = '';
        this.invoiceShow = [];
        this.startTime = new Date();
        this.endTime = new Date();
        this.filterType = 1;
        this.filterTitle = "Latest";
        this.showConfig = false; //  biến show modal cấu hình
        this.showConfigPrint = false; //  biến show modal cấu hình may in
        this.showConfigSales = false; //  biến show modal cấu hình trang bán hàng
        this.size = [12, 13, 14, 15, 16, 17, 18, 19, 20];
        this.show_modal_choose_interface = false;
        this.templates = [];
        this.store_main_sector = '';
        this.country_code = 'VN';
        this.language = 'vi';
        this.listFilter = [{ value: 1, name: "Latest" }, { value: 2, name: "Oldest" }, { value: 3, name: "Low to High value" }, { value: 4, name: "High to Low value" }];
        this.default_selling_page = this.vhAuth.getLocalMyPermissionName('default_selling_page');
        /////////////------------------------FONT_SIZE---------------------------//////////////
        this.fontSize = parseFloat(localStorage.getItem("vh-sales-system-fontsize"));
        /**Xử lý branches */
        this.branchList = [];
        this.branchDefault = {};
        this.modalAccountInfo = false; //show/hide moal thông tin tài khoản
        this.user = this.vhAuth.getUser(); // thông tin tài khoản hiện tại
        this.startTime.setHours(0, 0, 0, 0);
        this.endTime.setHours(23, 59, 59, 59);
    }
    /**
      * thiết lập lại ngôn ngữ hiển thị trên app
      * @param value biến giá trị language đã chọn
      * @example this.selectLang('vi')
      */
    selectLang(value) {
        let lang = this.langList.find(item => item.value == value);
        this.vhAuth.localStorageSET('language_code', value);
        this.vhAuth.localStorageSET('country_code', lang.country_code);
        localStorage.setItem("vh-sales-language", value);
        this.translateService.use(value);
        this.languageService.switchLanguage(value);
    }
    ngOnInit() {
        this.useBranch = this.functionService.checkUsingBranch();
        this.user = this.vhAuth.getlocalEmployee(this.vhAuth.getUser()._id);
        this.checkBranches();
        if (!this.invoiceToday) {
            this.vhComponent.showLoading("", "transparent-loading", null, 0, false).then(() => this.getInvoiceToday(this.filterType));
        }
        else {
            this.getInvoiceToday(this.filterType);
        }
        this.store_main_sector = this.vhAuth.getStore().main_sector; // Lấy main_sector của cửa hàng
        this.http.get(`assets/documents/configuration/template/${this.country_code}/${this.store_main_sector}.json`).subscribe((templates) => {
            this.templates = templates[this.language];
        }); // Lấy giao diện theo main_sector của cửa hàng
    }
    /**
     * hàm này để cập nhật trường default_selling_page dành cho tk cũ
     * nếu  check permission.desktop_display_page && pos_display_page
     * thì cập nhật trường default_selling_page = desktop_display_page và permission.selling_display_page = true
     * @example this.updateDefaultSellingPage()
     */
    updateDefaultSellingPage() {
        if (!this.vhAuth.getUser().default_selling_page) { // kiểm tra nếu chưa có trường này trong user thì mới tiếp tục check
            if (this.vhAuth.getUser().owner == 'boss' && !this.vhAuth.getUser().default_selling_page) {
                this.vhAuth.updateEmployee(this.vhAuth.getUser()._id, { default_selling_page: 'sales-desktop' });
            }
            else {
                if (this.vhAuth.checkMyPermission('desktop_display_page') && this.vhAuth.checkMyPermission('pos_display_page'))
                    Promise.all([this.vhAuth.updatePermission(this.vhAuth.getUser()._id, { selling_display_page: true }),
                        this.vhAuth.updateEmployee(this.vhAuth.getUser()._id, { default_selling_page: 'sales-desktop' })]);
                else {
                    if (this.vhAuth.checkMyPermission('desktop_display_page'))
                        Promise.all([this.vhAuth.updatePermission(this.vhAuth.getUser()._id, { selling_display_page: true }),
                            this.vhAuth.updateEmployee(this.vhAuth.getUser()._id, { default_selling_page: 'sales-desktop' })]);
                    else if (this.vhAuth.checkMyPermission('pos_display_page'))
                        Promise.all([this.vhAuth.updatePermission(this.vhAuth.getUser()._id, { selling_display_page: true }),
                            this.vhAuth.updateEmployee(this.vhAuth.getUser()._id, { default_selling_page: 'sales-pos' })]);
                }
            }
        }
    }
    /**
    * get hóa đơn trong ngày và gán vào biến invoiceToday
    * @example this.getInvoiceToday()
    */
    getInvoiceToday(filterType) {
        this.vhQuerySales.getBills_byFields({ date: { $gte: this.startTime, $lte: this.endTime }, bill_type: { $in: [50] }, id_branch: { $eq: this.vhQuerySales.getDefaultBranch()._id } }, {})
            .then((invoice) => {
            if (!this.invoiceToday) {
                this.vhComponent.hideLoading(0);
            }
            this.invoiceToday = invoice.map(item => {
                return Object.assign(Object.assign({}, item), { partner_name: this.renderPartner(item.id_customer), status: this.renderStatus(item.bill_type), employee_name: this.vhAuth.getlocalEmployee(item.id_employee).name, phone: this.vhAuth.getlocalEmployee(item.id_employee).phone, debt_value: this.getDebtValue(item.total, item.tax, item.payment) });
            });
            if (filterType)
                this.sortFilter(filterType);
            else
                this.sortFilter();
        });
    }
    /**
      * tính công nợ của hóa đơn
      * @param total
      * @param tax
      * @param payment
      * @example this.getDebtValue(100000,0,100000)
      * @returns number
      */
    getDebtValue(total, tax, payment) {
        return (parseFloat(parseFloat((total * (1 + tax / 100)).toString()).toFixed(0)) - payment);
    }
    /**
      * trả về tên của bill-type
      * @param bill_type
      * @example this.renderStatus(1)
      * @returns string : 'Temporary' | 'Sold'
      */
    renderStatus(bill_type) {
        switch (bill_type) {
            case 5: return this.languageService.translate('Temporary');
            case 4: return this.languageService.translate('Cancelled');
            default: return this.languageService.translate('Sold');
        }
    }
    /**
     * trả về tên của khách hàng
     * @param id_partner : id_customer của bill
     * @example this.renderPartner('JHIDUWHUYDWIUHUDY')
     * @returns string : customer_name | "Not found"
     */
    renderPartner(id_partner) {
        let customer = this.languageService.translate(this.vhQuerySales.getlocalCustomer(id_partner).name);
        return customer ? customer : this.languageService.translate("Not found");
    }
    /**
    * lọc invoiceToday theo các trường ['bill_code', 'partner_name', 'employee_name', 'payment_name', 'status', 'phone'] của bill so với giá trị truyền vào, gán vào biến invoiceShow để hiển thị
    * @param value
    * @example this.searchBill('040623A001')
    */
    searchBill(value) {
        if (value.length) {
            let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
            this.invoiceShow = this.vhAlgorithm.searchList(val, this.invoiceToday, ['bill_code', 'partner_name', 'employee_name', 'status', 'phone']);
        }
        else
            this.invoiceShow = [...this.invoiceToday];
    }
    /**
     * lọc bill theo giá trị của filterType
     * @param filterType
     * @example this.sortFilter(1)
     */
    sortFilter(filterType) {
        switch (filterType) {
            case 1:
                this.invoiceToday.sort((prev, next) => Date.parse(next.date) - Date.parse(prev.date));
                this.filterTitle = "Latest";
                break;
            case 2:
                this.invoiceToday.sort((prev, next) => Date.parse(prev.date) - Date.parse(next.date));
                this.filterTitle = "Oldest";
                break;
            case 3:
                this.invoiceToday.sort((prev, next) => (prev.total * (1 + prev.tax / 100)) - (next.total * (1 + next.tax / 100)));
                this.filterTitle = "Low to High value";
                break;
            case 4:
                this.invoiceToday.sort((prev, next) => (next.total * (1 + next.tax / 100)) - (prev.total * (1 + prev.tax / 100)));
                this.filterTitle = "High to Low value";
                break;
            default:
                this.invoiceToday.sort((prev, next) => prev.bill_type - next.bill_type);
                this.filterTitle = "Latest";
                break;
        }
        this.searchBill(this.searchValue);
    }
    /* -----Pagination----- */
    onCurrentPageDataChange(value) {
    }
    /**
     * router vào trang xem thi tiết thông tin đơn, nhận từ event click hóa đơn
     * @param bill
     * @example this.goToDetail(bill)
     */
    goToDetail(bill) {
        if (this.vhAuth.checkMyPermission("sales_enable_view_bill_today")) {
            this.router.navigate(["/sales/sales-payment-card/detail"], { state: { invoice: bill } });
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    ngAfterViewChecked() {
        if (document.querySelector("#sales-invoice-today") && document.querySelector(".ant-table-thead") && document.querySelector(".sales-invoice-today-header") && document.querySelector(".ant-table-pagination")) {
            this.tableHeight = document.querySelector("#sales-invoice-today").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".sales-invoice-today-header").clientHeight - 110 + "px";
        }
        this.cdRef.detectChanges();
    }
    /**
    * router vào trang tạo hóa đơn, nhận từ event click button tạo hóa đơn
    * @param bill
    * @example this.gotoSell()
    */
    gotoSell() {
        // if (this.vhAuth.checkMyPermission("sales_enable_create_bill"))
        this.router.navigate(["/sales/sales-payment-card/create"], { state: { invoice: null } });
        // else this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast")
    }
    /**
     * đăng xuất khỏi app
     * @example this.logout()
     */
    logout() {
        this.vhAuth.signOut().then(() => {
            this.vhQuerySales.closeSyncCollections();
            this.vhQuerySales.clearDefaultBranch(); //xóa branchDefault trước khi thoát app
            this.router.navigate(["/login"]);
        }, error => {
            console.error('error', error);
        });
    }
    /**
     * router vè trang quản trị
     * @example this.gotoOverview()
     */
    gotoOverview() {
        this.router.navigate(['/sales/dashboard'], { state: { isSync: true } });
    }
    /**
       * thiết lập giao diện trang bán hàng mặc định khi mở app : sale-pos | sale-desktop
       * @example this.updateSalesInterface()
       */
    updateSalesInterface() {
        if (this.vhAuth.checkMyPermission('selling_display_page')) {
            if (!this.default_selling_page)
                this.show_modal_choose_interface = true;
            else
                this.vhAuth
                    .updateEmployee(this.vhAuth.getUser()._id, {
                    default_display_page: 'selling_display_page',
                })
                    .then((bool) => {
                    this.router.navigate(['/sales/' + this.default_selling_page], {
                        state: { isSync: true },
                    });
                });
        }
        else
            this.vhComponent.alertMessageDesktop('error', this.languageService.translate('You do not have this rights'));
    }
    gotoChangeVoucher() {
        this.router.navigateByUrl('/sales/exchange-voucher');
        this.vhAuth.localStorageSET("isFirstTime_sales_desktop", true);
    }
    gotoPrepaidCard() {
        this.router.navigateByUrl('/sales/prepaid-card', { state: { url: this.router.url } });
        this.vhAuth.localStorageSET("isFirstTime_sales_desktop", true);
    }
    setFontSize(value) {
        localStorage.setItem("vh-sales-system-fontsize", JSON.stringify(value));
        this.fontSize = value;
        document.documentElement.style.fontSize = value + 'px';
    }
    /////////////------------------------COLOR---------------------------//////////////
    changeColor(theme, event) {
        this.vhAuth.changeTheme(theme, event);
    }
    /**
     * get danh sách chi nhánh đăng nhập của user
     */
    checkBranches() {
        // this.vhQuerySales.refreshLocalBranchs().then(() => {
        let branches = [...this.vhQuerySales.getlocalBranchs()];
        let employee = this.vhAuth.getUser();
        // check branch latest
        this.branchDefault = this.vhQuerySales.getDefaultBranch();
        let thisBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id);
        if (this.branchDefault.name != thisBranch.name) {
            this.vhQuerySales.clearDefaultBranch();
            this.vhQuerySales.setDefaultBranch(thisBranch._id);
            this.branchDefault = this.vhQuerySales.getDefaultBranch();
        }
        if (employee['owner'] == 'boss')
            this.branchList = branches;
        else {
            this.vhAuth.getPermission(employee['_id']).then(result => {
                branches.forEach(item => {
                    if (result[`${item._id}_login_branch`])
                        this.branchList.push(item);
                });
            });
        }
        // })
    }
    /**
       * nhận từ sk chọn thay đổi chi nhánh ở menu header, mở popup xác nhận và router qua trang login
       * @example this.change_branch()
       */
    change_branch() {
        this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Are you sure to change branch") + "?", "Ok", this.languageService.translate("Cancel"))
            .then(() => {
            this.vhQuerySales.clearDefaultBranch();
            this.router.navigate(['/login'], { state: { change_branch: true } });
        }).catch(() => { });
    }
    /**Đóng modal và get lại thông tin user */
    closeAccountInfo(event) {
        this.user = this.vhAuth.getlocalEmployee(this.vhAuth.getUser()._id);
        this.modalAccountInfo = false;
    }
    gotoSalesVoucher() {
        this.router.navigateByUrl('/sales/sales-voucher');
    }
    gotoSalesPrepaidCard() {
        this.router.navigateByUrl('/sales/sales-payment-card');
    }
    gotoSalesOrder() {
        this.router.navigateByUrl('/sales/bill-web-app/sales-order');
    }
    gotoSalesOrderVoucher() {
        this.router.navigateByUrl('/sales/bill-web-app/sales-order-voucher');
    }
    gotoExchangeOrderVoucher() {
        this.router.navigateByUrl('/sales/bill-web-app/exchange-order-voucher');
    }
    gotoSalesOrderPrepaidCard() {
        this.router.navigateByUrl('/sales/bill-web-app/sales-order-payment-card');
    }
    gotoExchangeOrderCard() {
        this.router.navigateByUrl('/sales/bill-web-app/exchange-order-payment-card');
    }
}
SalesPaymentCardComponent.ɵfac = function SalesPaymentCardComponent_Factory(t) { return new (t || SalesPaymentCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_function_service__WEBPACK_IMPORTED_MODULE_2__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_3__.ThemeService)); };
SalesPaymentCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SalesPaymentCardComponent, selectors: [["app-sales-payment-card"]], decls: 130, vars: 101, consts: [["id", "sales-invoice-today"], ["nz-row", "", 1, "sales-invoice-today-header", 2, "padding", "8px", "background", "white"], ["nz-col", "", "nzSpan", "3", 1, "title", "left-all-content"], ["nz-col", "", "nzSpan", "11", 1, "right-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nzBorderless", "", 3, "ngModel", "nzPlaceHolder", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "4", 1, "right-all-content", 2, "padding-right", "16px"], ["nz-button", "", "nzType", "default", 1, "btn-add", 3, "click"], ["src", "assets/icon/add.svg", 2, "color", "var(--ion-color-vh-white)", "margin-right", "8px"], ["nz-col", "", "nzSpan", "6", 1, "info", 3, "ngStyle"], ["class", "select-branch center-all-content", 4, "ngIf"], ["nz-dropdown", "", "nzTrigger", "click", 1, "center-div", 2, "cursor", "pointer", "height", "100%", 3, "nzDropdownMenu"], [2, "white-space", "nowrap", "font-size", "0.9rem", "margin-right", "4px", "text-transform", "capitalize"], [3, "nzSrc"], ["menu", "nzDropdownMenu"], ["nz-menu", "", "nzSelectable", ""], ["nz-menu-item", "", 3, "click"], ["nz-icon", "", "nzType", "dollar", "nzTheme", "outline"], ["nz-menu-item", "", 3, "nzDisabled", "click"], ["nz-icon", "", "nzType", "home", "nzTheme", "outline"], [2, "margin-left", "3px"], ["nz-submenu", "", 3, "nzTitle"], ["titleTplSalesVoucher", ""], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline"], ["nz-menu-item", "", 2, "color", "var(--ion-color-vh-green)", 3, "click"], ["nz-icon", "", "nzType", "credit-card", "nzTheme", "outline"], ["titleTpl", ""], ["titleTplWebAPp", ""], ["nz-icon", "", "nzType", "user", "nzTheme", "outline"], ["nz-menu-item", "", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "retweet", "nzTheme", "outline"], ["titleTplSetting", ""], [2, "min-width", "125px"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-icon", "", "nzType", "setting", "nzTheme", "outline"], ["nz-icon", "", "nzType", "logout", "nzTheme", "outline"], ["nz-row", "", 2, "height", "100%", "margin-top", "8px"], ["nz-col", "", "nzSpan", "24", 2, "padding", "0 160px"], ["nz-row", "", "style", "height: 100%;", 4, "ngIf"], ["style", "padding: 8px; background-color: white;height: 100%;border-radius: 5px;", 4, "ngIf"], ["nzWidth", "60vw", 3, "nzStyle", "nzBodyStyle", "nzVisible", "nzOkDisabled", "nzTitle", "nzCancelText", "nzVisibleChange", "nzOnOk", "nzOnCancel"], [4, "nzModalContent"], ["nzCentered", "", "nzWidth", "50vw", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel"], [4, "nzModalFooter"], [3, "modalAccountInfo", "closeAccount", 4, "ngIf"], [3, "showConfigPrint", "hide"], [3, "showConfigSales", "hide"], ["nz-icon", "", "nzType", "search"], [3, "nzValue", "nzLabel"], [1, "select-branch", "center-all-content"], ["src", "assets/icon/global/location.svg", 2, "margin-right", "8px"], [1, "select-branch-name"], [2, "margin-left", "-1px"], ["nz-icon", "", "nzType", "global", "nzTheme", "outline"], [2, "margin-left", "1px"], ["nz-icon", "", "nzType", "branches", "nzTheme", "outline"], ["nz-row", "", 2, "height", "100%"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], [2, "padding", "8px", "background-color", "white", "height", "100%", "border-radius", "5px"], [1, "total-item"], [2, "color", "var(--ion-color-vh-red)"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzPageSize", "nzPageSizeOptions", "nzNoResult", "nzCurrentPageDataChange"], ["tableSales", ""], ["nzWidth", "12%", "nzAlign", "left"], ["nzWidth", "15%", "nzAlign", "left"], ["nzWidth", "10%", "nzAlign", "center"], ["nzWidth", "15%", "nzAlign", "right"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], ["noBill", ""], [2, "cursor", "pointer", 3, "click"], ["nzAlign", "left"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click"], [4, "ngIf"], ["nzAlign", "left", 3, "ngStyle"], [1, "money-right"], [1, "pos-content-empty"], ["src", "assets/icon/pos/undraw_add_to_cart_vkjp.svg", 2, "font-size", "230px"], ["nz-button", "", 1, "create-order-btn", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline", 2, "margin-right", "8px"], ["nz-row", "", 1, "center-all-content", 2, "justify-content", "start !important"], ["nz-col", "", "nzSpan", "12", "class", "bottom-right", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "12", 1, "bottom-right"], [1, "thumbnail", 3, "click"], [2, "width", "100%", 3, "src"], [2, "text-align", "center"], ["style", "color: var(--ion-color-vh-green);", "nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 4, "ngIf"], ["nz-icon", "", "nzType", "check-circle", "nzTheme", "fill", 2, "color", "var(--ion-color-vh-green)"], ["nzSize", "default"], ["nz-row", "", 1, "row-interface-font"], ["nz-col", "", "nzSpan", "12"], [1, "sub-title"], [1, "select-lang", 2, "width", "100%", 3, "ngModel", "nzCustomTemplate", "ngModelChange"], ["nzCustomContent", "", 3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["defaultTemplate", ""], [1, "no-border"], [3, "ngModel", "ngModelChange"], ["nz-row", "", 1, "row"], ["id", "color-picker"], ["class", "color", 3, "ngClass", "background-color", "click", 4, "ngFor", "ngForOf"], ["nzCustomContent", "", 3, "nzLabel", "nzValue"], [2, "width", "24px", 3, "src"], [1, "color", 3, "ngClass", "click"], [3, "modalAccountInfo", "closeAccount"]], template: function SalesPaymentCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "nz-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "nz-input-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SalesPaymentCardComponent_Template_input_ngModelChange_8_listener($event) { return ctx.searchValue = $event; })("ngModelChange", function SalesPaymentCardComponent_Template_input_ngModelChange_8_listener($event) { return ctx.searchBill($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, SalesPaymentCardComponent_ng_template_10_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "nz-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SalesPaymentCardComponent_Template_nz_select_ngModelChange_12_listener($event) { return ctx.filterType = $event; })("ngModelChange", function SalesPaymentCardComponent_Template_nz_select_ngModelChange_12_listener($event) { return ctx.sortFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, SalesPaymentCardComponent_nz_option_14_Template, 2, 4, "nz-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_button_click_16_listener() { return ctx.gotoSell(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, SalesPaymentCardComponent_div_21_Template, 4, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "nz-avatar", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "nz-dropdown-menu", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_29_listener() { return ctx.updateSalesInterface(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_33_listener() { return ctx.gotoOverview(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](37, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, SalesPaymentCardComponent_ng_template_39_Template, 4, 3, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_42_listener() { return ctx.gotoSalesVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_46_listener() { return ctx.gotoSalesPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](47, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, SalesPaymentCardComponent_ng_template_51_Template, 4, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_54_listener() { return ctx.gotoChangeVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_58_listener() { return ctx.gotoPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](59, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, SalesPaymentCardComponent_ng_template_63_Template, 4, 3, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_66_listener() { return ctx.gotoSalesOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](67, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](69, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_70_listener() { return ctx.gotoSalesOrderVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](71, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_74_listener() { return ctx.gotoExchangeOrderVoucher(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](77, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_78_listener() { return ctx.gotoSalesOrderPrepaidCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](79, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](81, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](82, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_82_listener() { return ctx.gotoExchangeOrderCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](83, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](85, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_86_listener() { return ctx.modalAccountInfo = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](87, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](89, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](90, SalesPaymentCardComponent_li_90_Template, 4, 3, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](91, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_91_listener() { return ctx.show_modal_choose_interface = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](92, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](94, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](96, SalesPaymentCardComponent_ng_template_96_Template, 4, 3, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](99, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_99_listener() { return ctx.showConfigSales = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](100, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_103_listener() { return ctx.showConfigPrint = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](104, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](107, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_107_listener() { return ctx.showConfig = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](108, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](110, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](111, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SalesPaymentCardComponent_Template_li_click_111_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](112, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](114, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](117, SalesPaymentCardComponent_div_117_Template, 5, 3, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](118, SalesPaymentCardComponent_div_118_Template, 44, 37, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](119, "nz-modal", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzVisibleChange", function SalesPaymentCardComponent_Template_nz_modal_nzVisibleChange_119_listener($event) { return ctx.show_modal_choose_interface = $event; })("nzOnOk", function SalesPaymentCardComponent_Template_nz_modal_nzOnOk_119_listener() { return ctx.updateSalesInterface(); })("nzOnCancel", function SalesPaymentCardComponent_Template_nz_modal_nzOnCancel_119_listener() { return ctx.show_modal_choose_interface = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](121, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](122, SalesPaymentCardComponent_ng_container_122_Template, 3, 1, "ng-container", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](123, "nz-modal", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("nzVisibleChange", function SalesPaymentCardComponent_Template_nz_modal_nzVisibleChange_123_listener($event) { return ctx.showConfig = $event; })("nzOnCancel", function SalesPaymentCardComponent_Template_nz_modal_nzOnCancel_123_listener() { return ctx.showConfig = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](125, SalesPaymentCardComponent_ng_container_125_Template, 26, 15, "ng-container", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](126, SalesPaymentCardComponent_ng_container_126_Template, 1, 0, "ng-container", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](127, SalesPaymentCardComponent_app_account_information_127_Template, 1, 1, "app-account-information", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](128, "app-config-print", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("hide", function SalesPaymentCardComponent_Template_app_config_print_hide_128_listener() { return ctx.showConfigPrint = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "app-config-sales", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("hide", function SalesPaymentCardComponent_Template_app_config_sales_hide_129_listener() { return ctx.showConfigSales = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](11);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](27);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](40);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](52);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](64);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](97);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 49, "Sell prepaid card"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](9, 51, "Search for invoice code, customer name, payment, status,phone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 53, "Sort by"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.filterType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.listFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](19, 55, "Create invoice"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](97, _c3, ctx.useBranch ? "space-between" : "flex-end"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.useBranch);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzDropdownMenu", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx.user.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzSrc", ctx.user.img ? ctx.user.img : "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/template/avatar-shop.png");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](32, 57, "Sales"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzDisabled", !ctx.vhAuth.checkMyPermission("admin_display_page"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](37, 59, "Administrator"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzTitle", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](45, 61, "Sell voucher"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 63, "Sell prepaid card"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzTitle", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](57, 65, "Exchange voucher for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](61, 67, "Exchange prepaid card for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzTitle", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](69, 69, "Orders"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](73, 71, "Voucher purchase order"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](77, 73, "Voucher exchange order for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](81, 75, "Prepaid card purchase order"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](85, 77, "Prepaid card exchange order for goods"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](89, 79, "Account information"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.branchList.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](94, 81, "Change sales interface"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzTitle", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](102, 83, "Display"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](106, 85, "Print page"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](110, 87, "Others"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](114, 89, "Log out"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.invoiceShow.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.invoiceShow.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](121, 93, "Cancel"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](99, _c4))("nzBodyStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](100, _c5))("nzVisible", ctx.show_modal_choose_interface)("nzOkDisabled", !ctx.default_selling_page)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](120, 91, "Sales interface"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzVisible", ctx.showConfig)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](124, 95, "Other settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.modalAccountInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showConfigPrint", ctx.showConfigPrint);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showConfigSales", ctx.showConfigSales);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_19__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_20__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_21__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_22__.NzDropDownDirective, ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_23__.NzAvatarComponent, ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_22__.NzDropdownMenuComponent, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_24__.NzMenuDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_24__.NzMenuItemDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_25__.NzIconDirective, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_24__.NzSubMenuComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_26__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_26__.NzModalContentDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_26__.NzModalFooterDirective, _component_config_print_config_print_component__WEBPACK_IMPORTED_MODULE_4__.ConfigPrintComponent, _component_config_sales_config_sales_component__WEBPACK_IMPORTED_MODULE_5__.ConfigSalesComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_17__.NzOptionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_27__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_27__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_27__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_27__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_27__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_27__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_27__.NzTbodyComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_28__.NzListComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_28__.NzListItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _component_account_information_account_information_component__WEBPACK_IMPORTED_MODULE_6__.AccountInformationComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DatePipe], styles: ["@charset \"UTF-8\";\nnz-layout[_ngcontent-%COMP%] {\n  background: #f7f7f7 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\nnz-layout[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n}\n.ant-input-affix-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n}\n.active[_ngcontent-%COMP%] {\n  border: 3px solid var(--ion-color-vh-green) !important;\n  box-shadow: 0px 3px 6px #00000040;\n}\n\n.splash[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50vw;\n  height: 50vh;\n  top: 50%;\n  left: 50%;\n  margin-left: -25vw;\n  margin-top: -25vh;\n}\n@media only screen and (min-width: 768px) {\n  .splash[_ngcontent-%COMP%] {\n    width: 60vw;\n    height: 50vh;\n    top: 50%;\n    left: 50%;\n    margin-left: -30vw;\n    margin-top: -25vh;\n  }\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.row[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.row[_ngcontent-%COMP%]   #color-picker[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 auto;\n  max-width: 90%;\n}\n.row[_ngcontent-%COMP%]   #color-picker[_ngcontent-%COMP%]   .color[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  border-radius: 8px;\n  margin: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.row-interface-font[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n.row-interface-font[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green) !important;\n  border-bottom: 1px solid var(--ion-color-vh-green) !important;\n}\nli[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], nz-select-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\nli[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green) !important;\n}\nli[_ngcontent-%COMP%]:focus {\n  color: var(--ion-color-vh-green) !important;\n}\n  .ant-dropdown-menu-item-selected, .ant-dropdown-menu-item-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%], .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85) !important;\n  background-color: white !important;\n}\n  .ant-dropdown-menu-submenu-selected .ant-dropdown-menu-submenu-title {\n  color: var(--ion-color-vh-green) !important;\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  margin: 8px;\n  border-radius: 8px;\n}\n.thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGVzLXBheW1lbnQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRUo7QUFESTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQURJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBR047QUFESTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQUdOO0FBREk7RUFDRSxXQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHTjtBQUFFOztFQUVFLGdDQUFBO0FBR0o7QUFERTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQURFO0VBQ0Usc0RBQUE7RUFDQSxpQ0FBQTtBQUlKO0FBRkUsVUFBQTtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUlKO0FBSEk7RUFSRjtJQVNNLFdBQUE7SUFDQSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBTU47QUFDRjtBQUpFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFPSjtBQU5JO0VBQ0ksV0FBQTtBQVFSO0FBTkk7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFRUjtBQVBRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFTWjtBQUxFO0VBQ0UsOEJBQUE7QUFRSjtBQVBJO0VBQ0ksV0FBQTtBQVNSO0FBTkU7RUFDRSwyQ0FBQTtFQUNBLDZEQUFBO0FBU0o7QUFQRTs7RUFFRSxpQkFBQTtBQVVKO0FBVEk7Ozs7RUFFRSxpQkFBQTtBQWFOO0FBVEU7RUFDRSwyQ0FBQTtBQVlKO0FBVkU7RUFDRSwyQ0FBQTtBQWFKO0FBWEU7RUFDRSxxQ0FBQTtFQUNBLGtDQUFBO0FBY0o7QUFaRTtFQUNFLDJDQUFBO0FBZUo7QUFaRSx5QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBZUo7QUFkSTtFQUNFLGtCQUFBO0FBZ0JOIiwiZmlsZSI6InNhbGVzLXBheW1lbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbm56LWxheW91dCB7XG4gIGJhY2tncm91bmQ6ICNmN2Y3ZjcgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxubnotbGF5b3V0IC50aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbm56LWxheW91dCAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5uei1sYXlvdXQgbnotc2VsZWN0IHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubnotbGF5b3V0IC5idG4tYWRkIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFudC1idG46Zm9jdXMsXG4uYW50LWJ0bjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xufVxuXG4uYW50LWlucHV0LWFmZml4LXdyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDA0MDtcbn1cblxuLyoqIFNZTkMgKi9cbi5zcGxhc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHZ3O1xuICBoZWlnaHQ6IDUwdmg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjV2dztcbiAgbWFyZ2luLXRvcDogLTI1dmg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zcGxhc2gge1xuICAgIHdpZHRoOiA2MHZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IC0zMHZ3O1xuICAgIG1hcmdpbi10b3A6IC0yNXZoO1xuICB9XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4ucm93IG56LXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvdyAjY29sb3ItcGlja2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogOTAlO1xufVxuLnJvdyAjY29sb3ItcGlja2VyIC5jb2xvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yb3ctaW50ZXJmYWNlLWZvbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucm93LWludGVyZmFjZS1mb250IG56LXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VsZWN0ZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xufVxuXG5saSxcbm56LXNlbGVjdC1pdGVtIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5saSBzcGFuLFxubGkgaSxcbm56LXNlbGVjdC1pdGVtIHNwYW4sXG5uei1zZWxlY3QtaXRlbSBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbmxpOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcbn1cblxubGk6Zm9jdXMge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFudC1kcm9wZG93bi1tZW51LWl0ZW0tc2VsZWN0ZWQsIC5hbnQtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkID4gYSwgLmFudC1kcm9wZG93bi1tZW51LXN1Ym1lbnUtdGl0bGUtc2VsZWN0ZWQsIC5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXRpdGxlLXNlbGVjdGVkID4gYSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS1zZWxlY3RlZCAuYW50LWRyb3Bkb3duLW1lbnUtc3VibWVudS10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XG59XG5cbi8qIEtodW5nIGNo4bupYSB0aHVtYm5haWwgKi9cbi50aHVtYm5haWwge1xuICBtYXJnaW46IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnRodW1ibmFpbCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59Il19 */"] });


/***/ }),

/***/ 12315:
/*!***********************************************************************!*\
  !*** ./src/app/sales/sales-payment-card/sales-payment-card.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPaymentCardModule": () => (/* binding */ SalesPaymentCardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _create_bill_create_bill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-bill/create-bill.component */ 85543);
/* harmony import */ var _detail_bill_detail_bill_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-bill/detail-bill.component */ 25154);
/* harmony import */ var _component_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/component.module */ 33057);
/* harmony import */ var _sales_payment_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sales-payment-card.component */ 35290);
/* harmony import */ var _components_bill_type_bill_type_50_bill_type_50_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/bill-type/bill-type-50/bill-type-50.module */ 54111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);













const routes = [
    {
        path: '',
        component: _sales_payment_card_component__WEBPACK_IMPORTED_MODULE_4__.SalesPaymentCardComponent
    },
    {
        path: 'create',
        component: _create_bill_create_bill_component__WEBPACK_IMPORTED_MODULE_1__.CreateBillComponent
    },
    {
        path: 'detail',
        component: _detail_bill_detail_bill_component__WEBPACK_IMPORTED_MODULE_2__.DetailBillComponent
    },
];
class SalesPaymentCardModule {
}
SalesPaymentCardModule.ɵfac = function SalesPaymentCardModule_Factory(t) { return new (t || SalesPaymentCardModule)(); };
SalesPaymentCardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SalesPaymentCardModule });
SalesPaymentCardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _components_bill_type_bill_type_50_bill_type_50_module__WEBPACK_IMPORTED_MODULE_5__.BillType50Module,
            _component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SalesPaymentCardModule, { declarations: [_sales_payment_card_component__WEBPACK_IMPORTED_MODULE_4__.SalesPaymentCardComponent, _create_bill_create_bill_component__WEBPACK_IMPORTED_MODULE_1__.CreateBillComponent, _detail_bill_detail_bill_component__WEBPACK_IMPORTED_MODULE_2__.DetailBillComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _components_bill_type_bill_type_50_bill_type_50_module__WEBPACK_IMPORTED_MODULE_5__.BillType50Module,
        _component_component_module__WEBPACK_IMPORTED_MODULE_3__.ComponentModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_sales-payment-card_sales-payment-card_module_ts.js.map