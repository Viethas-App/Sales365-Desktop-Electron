"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_tiktok_e-invoice-sales365_e-invoice-sales365_module_ts"],{

/***/ 3815:
/*!*******************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiktok/e-invoice-sales365/e-invoice-sales365.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceSales365Component": () => (/* binding */ EInvoiceSales365Component)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var src_app_sales_services_bill_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/services/bill.service */ 8942);
/* harmony import */ var src_app_sales_services_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/services/print.service */ 4097);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var _components_search_edit_customer_tax_edit_customer_tax_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/search/edit-customer-tax/edit-customer-tax.component */ 35086);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


























function EInvoiceSales365Component_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "i", 22);
  }
}

function EInvoiceSales365Component_div_32_tr_43_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EInvoiceSales365Component_div_32_tr_43_label_2_Template_label_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const invoice_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return invoice_r12.checked = $event;
    })("ngModelChange", function EInvoiceSales365Component_div_32_tr_43_label_2_Template_label_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return ctx_r21.refreshStatus();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const invoice_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", invoice_r12.checked);
  }
}

function EInvoiceSales365Component_div_32_tr_43_span_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_div_32_tr_43_span_17_Template_span_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const invoice_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return ctx_r23.printService.viewEInvoice(ctx_r23.infoBranch, invoice_r12);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, "View E-invoice"))("nzType", "eye");
  }
}

function EInvoiceSales365Component_div_32_tr_43_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_div_32_tr_43_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const invoice_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r26.sendCQTManual(invoice_r12);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const invoice_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLoading", invoice_r12.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "Send CQT"));
  }
}

function EInvoiceSales365Component_div_32_tr_43_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_div_32_tr_43_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const invoice_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r30.signatureManual(invoice_r12);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const invoice_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzLoading", invoice_r12.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, "Waiting for signature"));
  }
}

function EInvoiceSales365Component_div_32_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, EInvoiceSales365Component_div_32_tr_43_label_2_Template, 1, 1, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_div_32_tr_43_Template_td_click_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const invoice_r12 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return ctx_r34.vhComponent.copyValue(invoice_r12.bill_code);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_div_32_tr_43_Template_i_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const invoice_r12 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r36.editTax(invoice_r12);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, EInvoiceSales365Component_div_32_tr_43_span_17_Template, 2, 4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, EInvoiceSales365Component_div_32_tr_43_button_18_Template, 3, 4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, EInvoiceSales365Component_div_32_tr_43_button_19_Template, 3, 4, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const invoice_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r12.cqt_status != 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](7, 10, invoice_r12.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", invoice_r12.bill_code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", invoice_r12.order_number_ecommerce, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](invoice_r12.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r12.cqt_status == 2 || invoice_r12.cqt_status == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r12.cqt_status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", invoice_r12.cqt_status == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r11.vhAlgorithm.vhcurrencyunit_symbol(invoice_r12["total"]), " ");
  }
}

const _c0 = function (a0) {
  return {
    y: a0
  };
};

function EInvoiceSales365Component_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "nz-table", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("nzCheckedChange", function EInvoiceSales365Component_div_32_Template_th_nzCheckedChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r37.allChecked = $event;
    })("nzCheckedChange", function EInvoiceSales365Component_div_32_Template_th_nzCheckedChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r39.checkAll($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_div_32_Template_th_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r40.dateCol = !ctx_r40.dateCol;
      return ctx_r40.sortTable("date");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_div_32_Template_th_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r41.bill_codeCol = !ctx_r41.bill_codeCol;
      return ctx_r41.sortTable("bill_code");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_div_32_Template_th_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r42.partner_nameCol = !ctx_r42.partner_nameCol;
      return ctx_r42.sortTable("partner_name");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_div_32_Template_th_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r43.statusCol = !ctx_r43.statusCol;
      return ctx_r43.sortTable("status");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_div_32_Template_th_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r44.sum_priceCol = !ctx_r44.sum_priceCol;
      return ctx_r44.sortTable("sum_price");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, EInvoiceSales365Component_div_32_tr_43_Template, 22, 13, "tr", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzData", ctx_r2.salesOrder)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](37, _c0, ctx_r2.heightScroll))("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 21, "Kh\u00F4ng c\u00F3 h\u00F3a \u0111\u01A1n c\u1EA7n G\u1EEDi CQT"))("nzShowPagination", false)("nzFrontPagination", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzChecked", ctx_r2.allChecked)("nzIndeterminate", ctx_r2.indeterminate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" (", ctx_r2.countSelectedBill, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 23, "No."));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 25, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzType", ctx_r2.dateCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](21, 27, "Invoice code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzType", ctx_r2.bill_codeCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](26, 29, "Order number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzType", ctx_r2.partner_nameCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](31, 31, "Status CQT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzType", ctx_r2.statusCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 33, "Function"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](40, 35, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzType", ctx_r2.sum_priceCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _r10.data);
  }
}

function EInvoiceSales365Component_ng_template_33_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 1, "Kh\u00F4ng c\u00F3 h\u00F3a \u0111\u01A1n c\u1EA7n G\u1EEDi CQT"));
  }
}

function EInvoiceSales365Component_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, EInvoiceSales365Component_ng_template_33_div_0_Template, 4, 3, "div", 47);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.load_status);
  }
}

function EInvoiceSales365Component_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 1, "Please click the view button"), " ");
  }
}

function EInvoiceSales365Component_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "nz-date-picker", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EInvoiceSales365Component_ng_template_37_Template_nz_date_picker_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r47.bill_selected.verify_date_delivered_goods = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 2, "Date"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r8.bill_selected.verify_date_delivered_goods);
  }
}

function EInvoiceSales365Component_app_edit_customer_tax_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-edit-customer-tax", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClose", function EInvoiceSales365Component_app_edit_customer_tax_39_Template_app_edit_customer_tax_onClose_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r49.isShowModalEditCustomerTax = false;
    })("onOk", function EInvoiceSales365Component_app_edit_customer_tax_39_Template_app_edit_customer_tax_onOk_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      ctx_r51.isShowModalEditCustomerTax = false;
      return ctx_r51.onOkEditTax($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("invoice", ctx_r9.tempCustomerTax);
  }
}

class EInvoiceSales365Component {
  constructor(router, lang, vhComponent, vhAlgorithm, vhEcommerce, cdRef, modal, vhAuth, datePipe, vhQuerySales, vhQuery, vhEinvoice, billService, printService) {
    this.router = router;
    this.lang = lang;
    this.vhComponent = vhComponent;
    this.vhAlgorithm = vhAlgorithm;
    this.vhEcommerce = vhEcommerce;
    this.cdRef = cdRef;
    this.modal = modal;
    this.vhAuth = vhAuth;
    this.datePipe = datePipe;
    this.vhQuerySales = vhQuerySales;
    this.vhQuery = vhQuery;
    this.vhEinvoice = vhEinvoice;
    this.billService = billService;
    this.printService = printService;
    this.salesOrder = [];
    this.salesSubOrder = [];
    this.date = [new Date(), new Date()];
    this.load_status = false; // dataRestore: any;

    this.bill_selected = {};
    /**Giới hạn thời gian cho xem bill */

    this.disabledDate = current => {
      if (current.getTime() < this.minDate.getTime() - 24 * 60 * 60 * 1000) return true;
      return false;
    };

    this.minDate = new Date(Date.now() - 24 * 60 * 60 * 1000 * 30);
    this.infoShop = {};
    this.infoBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id);
    /** hàm sort cho các cột */

    this.dateCol = false;
    this.bill_codeCol = false;
    this.partner_nameCol = false;
    this.payment_nameCol = false;
    this.statusCol = false;
    this.sum_priceCol = false;
    this.allChecked = true;
    this.indeterminate = true;
    this.currentBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id);
    /** Có hiển thị modal chỉnh sửa customer tax hay không */

    this.isShowModalEditCustomerTax = false;
    this.tempCustomerTax = null; // this.date[0].setHours(0, 0, 0, 0)
    // this.date[1].setHours(23, 59, 59, 59)
    // this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore
  }

  ngOnInit() {
    // if (this.dataRestore.id_shop_selected) {
    //   this.searchValue = this.dataRestore.searchValue
    //   this.salesOrder = this.dataRestore.salesOrder
    //   this.salesSubOrder = this.dataRestore.salesSubOrder
    //   this.load_status = true;
    //   this.date = this.dataRestore.date;
    // }
    this.infoShop = this.vhEcommerce.getlocalShopListTiktok()[0];
    console.log(this.infoShop);
    this.getMinDate();
  }
  /**
   * Lấy ngày giới hạn được xem báo cáo
  */


  getMinDate() {
    let date = new Date(Date.now() - 24 * 60 * 60 * 1000 * 100);
    this.vhQuerySales.getValidityDate(date).then(validitydate => {
      this.minDate = validitydate;

      if (this.minDate.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime()) {
        this.disabledDate = current => {
          if (current.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime() - 24 * 60 * 60 * 1000) return true;
          return false;
        };
      }
    });
  }
  /**Tìm kiếm hóa đơn */


  search(value) {
    if (value.length) {
      let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
      this.salesOrder = this.vhAlgorithm.searchList(val, this.salesSubOrder, ['bill_code', 'order_number_ecommerce']);
    } else this.salesOrder = [...this.salesSubOrder];
  }

  goBack() {
    this.router.navigate(['/sales/dashboard/manage/ecommerce/tiktok']);
  }

  changeTime(event) {
    if (event[1].getTime() - event[0].getTime() <= 2678400000) {} else {
      this.vhComponent.showToast(2000, this.lang.translate("The time to view no more than 30 days"), "alert-toast");
      this.date = [event[0], event[0].getTime() + 2678400000];
    }
  }

  showReport() {
    //cqt_status: { $in: [1, 2] },
    this.load_status = true;
    this.salesOrder = [];
    this.salesSubOrder = [];
    this.vhComponent.showLoading("", "transparent-loading").then(() => {
      this.vhQuerySales.getBills_byFields({
        date: {
          $gte: new Date(this.date[0].setHours(0, 0, 0)),
          $lte: new Date(this.date[1].setHours(23, 59, 59, 59))
        },
        bill_type: {
          $in: [1]
        },
        id_customer: {
          $eq: this.infoShop.data.id_customer
        },
        id_branch: {
          $eq: this.vhQuerySales.getDefaultBranch()._id
        },
        id_shop: {
          $eq: this.infoShop._id
        }
      }, {}).then(result => {
        console.log(result);
        this.salesOrder = result.map(item => {
          return Object.assign(Object.assign({}, item), {
            status: this.renderStatus(item.cqt_status),
            checked: item.cqt_status != 3 ? true : false,
            note: this.handleNote(item.note)
          });
        });
        this.salesSubOrder = this.salesOrder;
        this.vhComponent.hideLoading(0);
      }, error => this.vhComponent.hideLoading(0)).catch(err => this.vhComponent.hideLoading(0));
    });
  }
  /** Hàm thực hiện sắp xếp theo collection
   *
   * @param colName       // tên cột muôn sắp xếp
   */


  sortTable(colName) {
    switch (colName) {
      case 'date':
        if (this.dateCol) {
          this.salesOrder = this.vhAlgorithm.sortDatebyASC([...this.salesOrder], colName);
        } else {
          this.salesOrder = this.vhAlgorithm.sortDatebyDESC([...this.salesOrder], colName);
        }

        break;

      case 'status':
        if (this.statusCol) {
          this.salesOrder = this.vhAlgorithm.sortNumberbyASC([...this.salesOrder], 'cqt_status');
        } else {
          this.salesOrder = this.vhAlgorithm.sortNumberbyDESC([...this.salesOrder], 'cqt_status');
        }

        console.log(this.salesOrder);
        break;
    }
  }

  handleNote(note) {
    const match = note.match(/\d+\w*/);
    return match ? match[0] : null;
  }
  /**
   * trả về tên loại trạng thái bill
   * @param bill_type
   * @returns string
   * @example let bill_name = this.renderStatus(2)
   */


  renderStatus(cqt_status) {
    switch (cqt_status) {
      case 1:
        return this.lang.translate('Not sent to CQT');

      case 2:
        return this.lang.translate('Waiting for signature');

      case 3:
        return this.lang.translate('Sent to CQT');

      default:
        return this.lang.translate('Not sent to CQT');
    }
  }

  changeShop(event) {
    this.salesOrder = [];
    this.salesSubOrder = [];
  }

  ngAfterViewChecked() {
    if (document.querySelector("#control-export-goods") && document.querySelector(".ant-table-thead") && document.querySelector(".control-export-goods-header")) {
      this.heightScroll = document.querySelector("#control-export-goods").clientHeight - document.querySelector(".ant-table-thead").clientHeight - document.querySelector(".control-export-goods-header").clientHeight - 90 + "px";
    }

    this.cdRef.detectChanges();
  }
  /**Render date theo định dạng ngày/tháng/năm */


  format_date(date) {
    return this.datePipe.transform(date, "dd/MM/yyyy");
  }

  gotoDetail(bill) {// this.router.navigate(['/sales/dashboard/manage/ecommerce/tiktok/control/export-goods/detail'], { state: { bill: bill, dataRestore: { salesOrder: this.salesOrder, searchValue: this.searchValue, id_shop_selected: this.infoShop._id, listProduct: this.dataRestore.listProduct, date: this.date, salesSubOrder: this.salesSubOrder } } })
  }
  /**
   * Check tất cả
   * @param value
   */


  checkAll(value) {
    this.salesOrder.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }
  /**
   * Check 1 cái
   */


  refreshStatus() {
    const validData = this.salesOrder.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }
  /**
   * Khi nhấn nút gửi
   */


  send() {
    var _this = this;

    return (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let bills = _this.salesOrder.filter(data => data.checked);

      const batchSize = 1;
      const totalBatches = Math.ceil(bills.length / batchSize);

      if (!bills.length) {
        _this.vhComponent.alertMessageDesktop('error', _this.lang.translate("Please select at least one invoice"));

        return;
      }

      yield _this.vhComponent.showLoadingNotDuration(_this.lang.translate("Sending..."));

      for (let i = 0; i < bills.length; i += batchSize) {
        // tạo mỗi lần 1 request gửi hóa đơn
        const batch = bills.slice(i, i + batchSize);
        const currentBatchIndex = Math.floor(i / batchSize) + 1;
        const promises = batch.map(bill => {
          if (bill.cqt_status == 1 || !bill.cqt_status) return _this.sendCQT(bill);
          if (bill.cqt_status == 2) return _this.signature(bill);
          return Promise.resolve(); // nếu không thuộc 1 hoặc 2 thì skip
        });

        try {
          const results = yield _this.vhQuery.asyncPromiseAll(promises);

          if (currentBatchIndex == totalBatches) {
            _this.vhComponent.hideLoading();
          }
        } catch (error) {
          // trường hợp 1 vài đơn bị lỗi ko gửi dc
          if (currentBatchIndex == totalBatches) {
            _this.vhComponent.hideLoading();
          }

          console.error(`Error in batch ${i / batchSize + 1}:`, error);
        }
      }
    })();
  }
  /**
   * hàm này gửi hóa đơn lên cqt và ký luôn
   * @param invoice
   */


  sendCQT(invoice) {
    var _this2 = this;

    return new Promise((resolve, reject) => {
      var _a; // trường hợp chưa có tạo kết nối hóa đơn điện tử


      if (!((_a = this.currentBranch.einvoices) === null || _a === void 0 ? void 0 : _a.length)) {
        this.vhComponent.alertMessageDesktop("error", this.lang.translate("Please connect e-invoice for this branch"));
        resolve('');
        return;
      } // trường hợp chỉ có 1 kết nối hóa đơn điện tử thì tạo thẳng luôn


      if (this.currentBranch.einvoices.length && this.currentBranch.einvoices.length == 1) {
        // trường hợp ncc hóa đơn điện tử là M-invoice
        if (this.currentBranch.einvoices[0].invoice_provider == 'M-invoice') {
          if (!this.currentBranch.einvoices[0].invoiceSeries.length) {
            this.vhComponent.alertMessageDesktop("error", this.lang.translate("Please connect e-invoice for this branch"));
            resolve('');
            return;
          }
        }

        this.billService.changeBill_byLocal_toInvoice_byMinvoice(invoice._id, this.currentBranch.einvoices[0].invoiceSeries[0], 'TIKTOK', this.infoShop).then(rsp => {
          if (rsp.vcode == 0) {
            this.vhEinvoice.saveInvoice_Sign_byMinvoice(this.currentBranch.taxcode, this.currentBranch.einvoices[0].token, 1, rsp.data).then( /*#__PURE__*/function () {
              var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
                if (res.code == '00') {
                  invoice.cqt_status = 3;
                  invoice.status = _this2.lang.translate("Sent to CQT");
                  yield _this2.vhQuerySales.updateBill(invoice._id, {
                    cqt_status: 3
                  });
                  resolve(''); // this.vhComponent.alertMessageDesktop("success", this.lang.translate('Send invoice to CQT successfully'))
                } else if (res.code == '9999') {
                  reject(invoice._id);

                  _this2.vhComponent.alertMessageDesktop("error", invoice.bill_code + ' ' + _this2.lang.translate("Vui lòng kiểm tra lại thông tin hóa đơn đẩy lên CQT chưa phù hợp"));
                } else {
                  reject(invoice._id);

                  _this2.vhComponent.alertMessageDesktop("error", invoice.bill_code + ' ' + _this2.lang.translate(res.message));
                }
              });

              return function (_x) {
                return _ref.apply(this, arguments);
              };
            }());
          }
        }, error => {
          console.log('error', error);
        });
      }
    });
  }
  /**
   * hàm này ký hóa đơn lên cqt
   * @param invoice
   */


  signature(invoice) {
    return new Promise((resolve, reject) => {
      var _a; // trường hợp chưa có tạo kết nối hóa đơn điện tử


      if (!((_a = this.currentBranch.einvoices) === null || _a === void 0 ? void 0 : _a.length)) {
        this.vhComponent.alertMessageDesktop("error", this.lang.translate("Please connect e-invoice for this branch"));
        resolve('');
        return;
      } // trường hợp chỉ có 1 kết nối hóa đơn điện tử thì tạo thẳng luôn


      if (this.currentBranch.einvoices.length && this.currentBranch.einvoices.length == 1) {
        // trường hợp ncc hóa đơn điện tử là M-invoice
        if (this.currentBranch.einvoices[0].invoice_provider == 'M-invoice') {
          if (!this.currentBranch.einvoices[0].invoiceSeries.length) {
            this.vhComponent.alertMessageDesktop("error", this.lang.translate("Please connect e-invoice for this branch"));
            resolve('');
            return;
          }
        }

        this.billService.changeBill_byLocal_toInvoice_byMinvoice(invoice._id, this.currentBranch.einvoices[0].invoiceSeries[0], 'TIKTOK', this.infoShop).then(rsp => {
          if (rsp.vcode == 0) {
            this.vhEinvoice.saveInvoice_Sign_byMinvoice(this.currentBranch.taxcode, this.currentBranch.einvoices[0].token, 2, rsp.data).then(res => {
              if (res.code == '00') {
                invoice.cqt_status = 3;
                invoice.status = this.lang.translate("Sent to CQT"); // this.vhComponent.alertMessageDesktop("success", this.lang.translate('Update invoice to CQT successfully'))

                this.vhQuerySales.updateBill(invoice._id, {
                  cqt_status: 3
                });
                resolve('');
              } else if (res.code == '9999') {
                reject(invoice._id);
                this.vhComponent.alertMessageDesktop("error", invoice.bill_code + ' ' + this.lang.translate("Vui lòng kiểm tra lại thông tin hóa đơn đẩy lên CQT chưa phù hợp"));
              } else {
                reject(invoice._id);
                this.vhComponent.alertMessageDesktop("error", invoice.bill_code + ' ' + this.lang.translate(res.message));
              }
            });
          }
        }, error => {
          console.log('error', error);
        });
      }
    });
  }
  /**
   * hàm này gửi hóa đơn lên cqt
   * @param invoice
   */


  sendCQTManual(invoice) {
    var _a; // lấy ra chi nhánh hiện tại


    let currentBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id);
    console.log(currentBranch); // trường hợp chưa có tạo kết nối hóa đơn điện tử

    if (!((_a = currentBranch.einvoices) === null || _a === void 0 ? void 0 : _a.length)) {
      this.vhComponent.alertMessageDesktop("error", this.lang.translate("Please connect e-invoice for this branch"));
      return;
    } // trường hợp chỉ có 1 kết nối hóa đơn điện tử thì tạo thẳng luôn


    if (currentBranch.einvoices.length && currentBranch.einvoices.length == 1) {
      // trường hợp ncc hóa đơn điện tử là M-invoice
      if (currentBranch.einvoices[0].invoice_provider == 'M-invoice') {
        if (!currentBranch.einvoices[0].invoiceSeries.length) {
          this.vhComponent.alertMessageDesktop("error", this.lang.translate("Please connect e-invoice for this branch"));
          return;
        }

        invoice.isLoading = true;
        this.billService.changeBill_byLocal_toInvoice_byMinvoice(invoice._id, currentBranch.einvoices[0].invoiceSeries[0], 'TIKTOK', this.infoShop).then(rsp => {
          if (rsp.vcode == 0) {
            this.vhEinvoice.saveInvoice_Sign_byMinvoice(currentBranch.taxcode, currentBranch.einvoices[0].token, 1, rsp.data).then(res => {
              invoice.isLoading = false;
              console.log(res);

              if (res.code == '00') {
                invoice.cqt_status = 3;
                invoice.status = this.lang.translate("Sent to CQT");
                this.vhQuerySales.updateBill(invoice._id, {
                  cqt_status: 3
                });
                this.vhComponent.alertMessageDesktop("success", this.lang.translate('Send invoice to CQT successfully'));
              } else if (res.code == '9999') {
                this.vhComponent.alertMessageDesktop("error", this.lang.translate("Vui lòng kiểm tra lại thông tin hóa đơn đẩy lên CQT chưa phù hợp"));
              } else {
                this.vhComponent.alertMessageDesktop("error", this.lang.translate(res.message));
              }
            }, error => {
              invoice.isLoading = true;
              this.vhComponent.alertMessageDesktop("error", this.lang.translate("Có lỗi xảy ra khi khởi tạo hóa đơn đẩy lên CQT"));
              console.log('error', error);
            });
          } else {
            invoice.isLoading = true;
            this.vhComponent.alertMessageDesktop("error", this.lang.translate("Có lỗi xảy ra khi khởi tạo hóa đơn đẩy lên CQT"));
          }
        }, error => {
          this.vhComponent.alertMessageDesktop("error", this.lang.translate("Có lỗi xảy ra khi khởi tạo hóa đơn đẩy lên CQT"));
          invoice.isLoading = true;
          console.log('error', error);
        });
      }
    } // trường hợp chỉ có 2 kết nối hóa đơn điện tử trở lên thì hiện modal chọn ncc  hóa đơn điện tử


    if (currentBranch.einvoices.length && currentBranch.einvoices.length > 1) {}
  }
  /**
   * hàm này ký hóa đơn lên cqt
   * @param invoice
   */


  signatureManual(invoice) {
    var _a; // lấy ra chi nhánh hiện tại


    let currentBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id);
    console.log(currentBranch); // trường hợp chưa có tạo kết nối hóa đơn điện tử

    if (!((_a = currentBranch.einvoices) === null || _a === void 0 ? void 0 : _a.length)) {
      this.vhComponent.alertMessageDesktop("error", this.lang.translate("Please connect e-invoice for this branch"));
      return;
    } // trường hợp chỉ có 1 kết nối hóa đơn điện tử thì tạo thẳng luôn


    if (currentBranch.einvoices.length && currentBranch.einvoices.length == 1) {
      // trường hợp ncc hóa đơn điện tử là M-invoice
      if (currentBranch.einvoices[0].invoice_provider == 'M-invoice') {
        if (!currentBranch.einvoices[0].invoiceSeries.length) {
          this.vhComponent.alertMessageDesktop("error", this.lang.translate("Please connect e-invoice for this branch"));
          return;
        }

        invoice.isLoading = true;
        this.billService.changeBill_byLocal_toInvoice_byMinvoice(invoice._id, currentBranch.einvoices[0].invoiceSeries[0], 'TIKTOK', this.infoShop).then(rsp => {
          if (rsp.vcode == 0) {
            this.vhEinvoice.saveInvoice_Sign_byMinvoice(currentBranch.taxcode, currentBranch.einvoices[0].token, 2, rsp.data).then(res => {
              console.log(res);
              invoice.isLoading = false;

              if (res.code == '00') {
                invoice.cqt_status = 3;
                invoice.status = this.lang.translate("Sent to CQT");
                this.vhComponent.alertMessageDesktop("success", this.lang.translate('Update invoice to CQT successfully'));
                this.vhQuerySales.updateBill(invoice._id, {
                  cqt_status: 3
                });
              } else if (res.code == '9999') {
                this.vhComponent.alertMessageDesktop("error", this.lang.translate("Vui lòng kiểm tra lại thông tin hóa đơn đẩy lên CQT chưa phù hợp"));
              } else {
                this.vhComponent.alertMessageDesktop("error", this.lang.translate(res.message));
              }
            }, error => {
              invoice.isLoading = true;
              this.vhComponent.alertMessageDesktop("error", this.lang.translate("Có lỗi xảy ra khi khởi tạo hóa đơn đẩy lên CQT"));
              console.log('error', error);
            });
          } else {
            invoice.isLoading = true;
            this.vhComponent.alertMessageDesktop("error", this.lang.translate("Có lỗi xảy ra khi khởi tạo hóa đơn đẩy lên CQT"));
          }
        }, error => {
          this.vhComponent.alertMessageDesktop("error", this.lang.translate("Có lỗi xảy ra khi khởi tạo hóa đơn đẩy lên CQT"));
          invoice.isLoading = true;
          console.log('error', error);
        });
      }
    } // trường hợp chỉ có 2 kết nối hóa đơn điện tử trở lên thì hiện modal chọn ncc  hóa đơn điện tử


    if (currentBranch.einvoices.length && currentBranch.einvoices.length > 1) {}
  }
  /**
   * Khi nhấn edit cột thông tin khách hàng
   */


  editTax(invoice) {
    this.tempCustomerTax = invoice;
    this.isShowModalEditCustomerTax = true;
  }
  /**
   * Khi ok trong modal chỉnh sửa customer tax
   * @param customerTaxInfo
   */


  onOkEditTax(customerTaxInfo) {
    this.isShowModalEditCustomerTax = false;
    Object.assign(this.tempCustomerTax, customerTaxInfo);
  }
  /**
   * Đếm số lượng bill đang check
   */


  get countSelectedBill() {
    var _a, _b, _c;

    return (_c = (_b = (_a = this.salesOrder) === null || _a === void 0 ? void 0 : _a.filter(e => e.checked)) === null || _b === void 0 ? void 0 : _b.filter(data => data.cqt_status != 3)) === null || _c === void 0 ? void 0 : _c.length;
  }

}

EInvoiceSales365Component.ɵfac = function EInvoiceSales365Component_Factory(t) {
  return new (t || EInvoiceSales365Component)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhEcommerce), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhEinvoice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_sales_services_bill_service__WEBPACK_IMPORTED_MODULE_3__.BillService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_sales_services_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService));
};

EInvoiceSales365Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: EInvoiceSales365Component,
  selectors: [["app-e-invoice-sales365"]],
  decls: 40,
  vars: 26,
  consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "control-export-goods"], ["nz-row", "", "nzGutter", "4", 1, "control-export-goods-header"], ["nz-col", "", "nzSpan", "8", 1, "title"], [1, "color-green"], ["nz-col", "", "nzSpan", "6", 1, "title", "center-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "6"], ["nzFormat", "dd/MM/yyyy", "nzFormat", "dd/MM/yyyy", 3, "nzDisabledDate", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 2, "margin-right", "10px", 3, "click"], ["src", "assets/icon/management/view.svg"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "click"], ["nz-row", "", "nzGutter", "16", "class", "control-export-goods-body", 4, "ngIf", "ngIfElse"], ["class", "full-height"], ["no_bill", ""], ["no_data", ""], ["updateForControl", ""], [3, "invoice", "onClose", "onOk", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-row", "", "nzGutter", "16", 1, "control-export-goods-body"], ["nz-col", "", "nzSpan", "24"], [3, "nzData", "nzScroll", "nzNoResult", "nzShowPagination", "nzFrontPagination"], ["tableSales", ""], ["nzWidth", "60px", 3, "nzChecked", "nzIndeterminate", "nzCheckedChange"], ["nzAlign", "center", "nzWidth", "6%"], ["nzAlign", "left", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzAlign", "left", 2, "cursor", "pointer"], ["nzWidth", "15%", "nzAlign", "right", 2, "cursor", "pointer", 3, "click"], ["style", "cursor: pointer;", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer"], ["nz-button", "", "nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nzAlign", "center"], ["nzAlign", "left"], ["nzAlign", "left", 3, "click"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 1, "cus-icon", 2, "cursor", "pointer", "margin-right", "10px", 3, "click"], ["nz-tooltip", "", "nz-icon", "", "class", "ant-input-password-icon", 3, "nzTooltipTitle", "nzType", "click", 4, "ngIf"], ["style", "margin-right: 10px;color: white !important;", "nz-button", "", "nzType", "primary", 3, "nzLoading", "click", 4, "ngIf"], ["nzAlign", "right", 1, "money-right"], ["nz-button", "", "nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-tooltip", "", "nz-icon", "", 1, "ant-input-password-icon", 3, "nzTooltipTitle", "nzType", "click"], ["nz-button", "", "nzType", "primary", 2, "margin-right", "10px", "color", "white !important", 3, "nzLoading", "click"], ["nz-col", "", "nzSpan", "24", "style", "height: 60vh;", "class", "center-all-content", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", 2, "height", "60vh"], ["nz-row", "", 1, "no-affiliate"], ["nz-col", "", "nzSpan", "24", 1, "text-center"], ["src", "assets/icon/management/ecommerce/no-data-orderstatus.svg", "alt", ""], ["nz-row", ""], ["nzFormat", "dd/MM/yyyy", 2, "margin-left", "20px", 3, "ngModel", "ngModelChange"], [3, "invoice", "onClose", "onOk"]],
  template: function EInvoiceSales365Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_Template_div_click_0_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "nz-layout", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "b", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "nz-input-group", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EInvoiceSales365Component_Template_input_ngModelChange_17_listener($event) {
        return ctx.searchValue = $event;
      })("ngModelChange", function EInvoiceSales365Component_Template_input_ngModelChange_17_listener($event) {
        return ctx.search($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, EInvoiceSales365Component_ng_template_19_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "nz-range-picker", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function EInvoiceSales365Component_Template_nz_range_picker_ngModelChange_22_listener($event) {
        return ctx.date = $event;
      })("ngModelChange", function EInvoiceSales365Component_Template_nz_range_picker_ngModelChange_22_listener($event) {
        return ctx.changeTime($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_Template_button_click_24_listener() {
        return ctx.showReport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function EInvoiceSales365Component_Template_button_click_28_listener() {
        return ctx.send();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, EInvoiceSales365Component_div_32_Template, 44, 39, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, EInvoiceSales365Component_ng_template_33_Template, 1, 1, "ng-template", 17, 18, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, EInvoiceSales365Component_ng_template_35_Template, 6, 3, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, EInvoiceSales365Component_ng_template_37_Template, 6, 4, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, EInvoiceSales365Component_app_edit_customer_tax_39_Template, 1, 1, "app-edit-customer-tax", 21);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](36);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 14, "Back"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 16, "Xu\u1EA5t h\u00F3a \u0111\u01A1n \u0111i\u1EC7n t\u1EED t\u1EEB ph\u1EA7n m\u1EC1m"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 18, "Shop name"), " : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.infoShop.data == null ? null : ctx.infoShop.data.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzSuffix", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](18, 20, "Search for order code"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.searchValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("nzDisabledDate", ctx.disabledDate)("ngModel", ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 22, "View"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](31, 24, "G\u1EEDi CQT"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.load_status)("ngIfElse", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isShowModalEditCustomerTax);
    }
  },
  directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_14__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_17__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzThSelectionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_21__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_22__.NzCheckboxComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_23__.NzTooltipDirective, _components_search_edit_customer_tax_edit_customer_tax_component__WEBPACK_IMPORTED_MODULE_5__.EditCustomerTaxComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .control-export-goods-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .control-export-goods-header[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25vh;\n  max-width: 250px;\n  height: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-black);\n  margin-top: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.date-picker-cus[_ngcontent-%COMP%] {\n  width: 97%;\n  border: 1px solid #d9d9d9;\n}\n.date-picker-cus[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtaW52b2ljZS1zYWxlczM2NS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxrQkFBQTtBQUdSO0FBREk7RUFDSSxtQkFBQTtFQUlBLG1CQUFBO0FBQVI7QUFIUTtFQUNJLFVBQUE7QUFLWjtBQURJO0VBQ0ksaUVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFHUjtBQUZRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUlaO0FBREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR1I7QUFGUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFJWjtBQUZRO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFJWjtBQUZRO0VBQ0ksa0JBQUE7QUFJWjtBQUFBO0VBQ0ksVUFBQTtFQUlBLHlCQUFBO0FBQUo7QUFISTtFQUNJLDBDQUFBO0FBS1IiLCJmaWxlIjoiZS1pbnZvaWNlLXNhbGVzMzY1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgLmNlbnRlci10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY29udHJvbC1leHBvcnQtZ29vZHMtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRuLXZpZXcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uby1hZmZpbGlhdGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1dmg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1jZW50ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5kYXRlLXBpY2tlci1jdXMge1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 51871:
/*!****************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiktok/e-invoice-sales365/e-invoice-sales365.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceSales365Module": () => (/* binding */ EInvoiceSales365Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _e_invoice_sales365_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-invoice-sales365.component */ 3815);
/* harmony import */ var src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/search/search.module */ 43818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);










const routes = [
    {
        path: "",
        component: _e_invoice_sales365_component__WEBPACK_IMPORTED_MODULE_1__.EInvoiceSales365Component
    },
];
class EInvoiceSales365Module {
}
EInvoiceSales365Module.ɵfac = function EInvoiceSales365Module_Factory(t) { return new (t || EInvoiceSales365Module)(); };
EInvoiceSales365Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: EInvoiceSales365Module });
EInvoiceSales365Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_2__.SearchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EInvoiceSales365Module, { declarations: [_e_invoice_sales365_component__WEBPACK_IMPORTED_MODULE_1__.EInvoiceSales365Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_2__.SearchModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_tiktok_e-invoice-sales365_e-invoice-sales365_module_ts.js.map