"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_tiki_e-invoice-tiki_e-invoice-tiki_module_ts"],{

/***/ 81495:
/*!*********************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/e-invoice-tiki/e-invoice-tiki.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceTikiComponent": () => (/* binding */ EInvoiceTikiComponent)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var src_app_sales_services_bill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/services/bill.service */ 8942);
/* harmony import */ var src_app_sales_services_print_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/services/print.service */ 4097);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _components_modal_link_product_ecommerce_modal_link_product_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/modal-link-product-ecommerce/modal-link-product-ecommerce.component */ 68886);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var _components_edit_customer_tax_edit_customer_tax_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/edit-customer-tax/edit-customer-tax.component */ 67476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





























function EInvoiceTikiComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 19);
  }
}

function EInvoiceTikiComponent_div_31_nz_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-tab", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
  }

  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, item_r10.name), " (", ctx_r6.orderCountByStatus[item_r10.name], ")");
  }
}

function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_10_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_10_i_2_Template_i_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      $event.stopPropagation();
      return ctx_r24.openModelSelectProductsTiki(item_r22);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_10_i_2_Template, 1, 0, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("color", ctx_r15.isLinkedToProduct(item_r22) ? "" : "var(--ion-color-vh-red)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r15.isLinkedToProduct(item_r22) ? ctx_r15.findProductLinked(item_r22).name : item_r22.product.name, " (SL: ", item_r22.qty, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r15.isLinkedToProduct(item_r22));
  }
}

function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_td_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const bill_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzTooltipTitle", ctx_r27.getUpdateTimeFormat(bill_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, bill_r13.main_substate_text));
  }
}

function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_td_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bill_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzTooltipTitle", ctx_r29.getUpdateTimeFormat(bill_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, bill_r13.main_state_text));
  }
}

function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EInvoiceTikiComponent_div_31_nz_table_4_tr_35_td_11_ng_container_1_Template, 4, 4, "ng-container", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EInvoiceTikiComponent_div_31_nz_table_4_tr_35_td_11_ng_template_2_Template, 3, 4, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

    const bill_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", bill_r13.main_substate_text)("ngIfElse", _r28);
  }
}

function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_td_12_Template_button_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const bill_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return ctx_r33.updateStatusComfirm(bill_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bill_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzTooltipTitle", ctx_r17.getUpdateTimeFormat(bill_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", "XN c\u00F2n h\u00E0ng", "");
  }
}

function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_14_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const bill_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return ctx_r37.printService.viewEInvoice(ctx_r37.infoBranch, {
        _id: bill_r13.code
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, "Sent to CQT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 5, "View E-invoice"))("nzType", "eye");
  }
}

function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_15_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41);
      const bill_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return ctx_r40.printService.viewEInvoice(ctx_r40.infoBranch, {
        _id: bill_r13.code
      });
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, "Waiting for signature"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 5, "View E-invoice"))("nzType", "eye");
  }
}

function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, "Not sent to CQT"));
  }
}

function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_label_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_label_21_Template_label_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const bill_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      return bill_r13.checked = $event;
    })("ngModelChange", function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_label_21_Template_label_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return ctx_r46.refreshStatus;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bill_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", bill_r13.checked);
  }
}

function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const bill_r13 = restoredCtx.$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r48.gotoDetail(bill_r13);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_Template_i_click_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49);
      const bill_r13 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return ctx_r50.vhComponent.copyValue(bill_r13.code);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_10_Template, 4, 5, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, EInvoiceTikiComponent_div_31_nz_table_4_tr_35_td_11_Template, 4, 2, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, EInvoiceTikiComponent_div_31_nz_table_4_tr_35_td_12_Template, 4, 2, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_14_Template, 5, 7, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_15_Template, 5, 7, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, EInvoiceTikiComponent_div_31_nz_table_4_tr_35_span_16_Template, 3, 3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceTikiComponent_div_31_nz_table_4_tr_35_Template_td_click_20_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, EInvoiceTikiComponent_div_31_nz_table_4_tr_35_label_21_Template, 1, 1, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bill_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);

    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((_r11.nzPageIndex - 1) * _r11.nzPageSize + i_r14 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 11, bill_r13.created_at, "dd/MM/yyyy HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", bill_r13.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", bill_r13.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", bill_r13.status != "queueing");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", bill_r13.status == "queueing");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", bill_r13.cqt_status == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", bill_r13.cqt_status == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !bill_r13.cqt_status || bill_r13.cqt_status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r12.vhAlgorithm.vhcurrencyunit(bill_r13.invoice.total_seller_income));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", bill_r13.cqt_status == 1 || !bill_r13.cqt_status);
  }
}

const _c0 = function (a0) {
  return {
    y: a0
  };
};

const _c1 = function () {
  return [20, 30, 40, 50, 100, 200];
};

function EInvoiceTikiComponent_div_31_nz_table_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-table", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzCheckedChange", function EInvoiceTikiComponent_div_31_nz_table_4_Template_th_nzCheckedChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r52.allChecked = $event;
    })("nzCheckedChange", function EInvoiceTikiComponent_div_31_nz_table_4_Template_th_nzCheckedChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r54.checkAll($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, EInvoiceTikiComponent_div_31_nz_table_4_tr_35_Template, 22, 14, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);

    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](29, _c0, ctx_r7.heightScroll))("nzData", ctx_r7.salesOrder)("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](31, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 15, "No."));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 17, "Date order"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 19, "Order number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 21, "Product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 23, "Status on Tiki"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 25, "Status CQT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 27, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzChecked", ctx_r7.allChecked)("nzIndeterminate", ctx_r7.indeterminate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (", ctx_r7.countSelectedBill, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _r11.data);
  }
}

function EInvoiceTikiComponent_div_31_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 1, "No data"));
  }
}

function EInvoiceTikiComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "nz-tabset", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzSelectedIndexChange", function EInvoiceTikiComponent_div_31_Template_nz_tabset_nzSelectedIndexChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r55.selectedIndex = $event;
    })("nzSelectChange", function EInvoiceTikiComponent_div_31_Template_nz_tabset_nzSelectChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r57.segmentChanged($event.index);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, EInvoiceTikiComponent_div_31_nz_tab_3_Template, 2, 4, "nz-tab", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, EInvoiceTikiComponent_div_31_nz_table_4_Template, 36, 32, "nz-table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, EInvoiceTikiComponent_div_31_ng_template_5_Template, 4, 3, "ng-template", 25, 26, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](6);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSelectedIndex", ctx_r2.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.list_status_bill);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.salesOrder.length > 0)("ngIfElse", _r8);
  }
}

function EInvoiceTikiComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, "Please click the view button"));
  }
}

function EInvoiceTikiComponent_app_edit_customer_tax_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-edit-customer-tax", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClose", function EInvoiceTikiComponent_app_edit_customer_tax_34_Template_app_edit_customer_tax_onClose_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r58.isShowModalEditCustomerTax = false;
    })("onOk", function EInvoiceTikiComponent_app_edit_customer_tax_34_Template_app_edit_customer_tax_onOk_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r60.isShowModalEditCustomerTax = false;
      return ctx_r60.onOkEditTax($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("invoice", ctx_r5.tempCustomerTax)("infoShop", ctx_r5.infoShop);
  }
}

class EInvoiceTikiComponent {
  constructor(router, lang, vhComponent, vhAlgorithm, vhQuerySales, cdRef, datePipe, nzModalService, vhAuth, vhQuery, vhEinvoice, billService, printService) {
    var _a;

    this.router = router;
    this.lang = lang;
    this.vhComponent = vhComponent;
    this.vhAlgorithm = vhAlgorithm;
    this.vhQuerySales = vhQuerySales;
    this.cdRef = cdRef;
    this.datePipe = datePipe;
    this.nzModalService = nzModalService;
    this.vhAuth = vhAuth;
    this.vhQuery = vhQuery;
    this.vhEinvoice = vhEinvoice;
    this.billService = billService;
    this.printService = printService;
    this.searchProductAppValue = '';
    this.salesOrder = [];
    this.salesSubOrder = [];
    this.selectedIndex = 0;
    this.loadingPickup = false;
    this.loadingConfirm = false;
    this.isVisibleConfirm = false;
    this.billSelected = {};
    this.list_status_bill = [{
      name: "All",
      status: "all"
    }, {
      name: "Wait for confirmation",
      status: "queueing",
      main_state: 'awaiting_confirmation'
    }, {
      name: "Đang đóng gói",
      status: "queueing",
      main_state: 'processing'
    }, {
      name: "Lấy hàng",
      main_state: 'processing',
      main_substate: "picked_up_from_seller",
      main_substate1: "picking_up_from_seller"
    }, {
      name: "Lấy hàng thất bại",
      main_substate1: "pickup_failed_2",
      main_substate: 'pickup_failed_1'
    }, {
      name: "Tình trạng giao hàng",
      status: "ready_to_ship",
      status2: "shipping",
      main_state: 'shipping'
    }, {
      name: "Giao hàng thành công",
      status: "successful_delivery"
    }, {
      name: "Giao hàng thất bại",
      status: "handover_to_partner",
      main_state: 'shipping',
      main_substate: "3pl_delivery_failed_1",
      main_substate2: "3pl_delivery_failed_2",
      main_substate3: "3pl_delivery_failed_3"
    }, {
      name: "Đang trả hàng về cho nhà bán",
      status: "handover_to_partner",
      main_substate: "3pl_returning_to_seller",
      main_state: 'shipping'
    }, {
      name: "Đã hủy (Chưa giao hàng)",
      status: "canceled",
      main_state: 'canceled',
      confirmation_status: 'waiting',
      confirmation_status1: 'seller_confirmed'
    }, {
      name: "Trả hàng thành công",
      status: "canceled",
      main_state: 'canceled',
      confirmation_status: 'ready_to_pick'
    }];
    this.date = [new Date(), new Date()];
    this.load_status = false;
    /**Giới hạn thời gian cho xem bill */

    this.disabledDate = current => {
      if (current.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime() - 24 * 60 * 60 * 1000) return true;
      return false;
    };

    this.listAddress = [];
    this.listTimes = [];
    this.infoShop = {};
    this.listProductOfBranch = []; // sp của phần mềm có liên kết với tiki

    this.listProductApp = []; //sp của phần mềm

    this.listSubProductApp = []; //sp của app chứa tiki[]

    this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
    this.arrayHidden = []; //mảng này chứa id của những sp đang tạm ẩn

    this.currentBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id);
    this.infoBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id);
    /** Map chứa số lượng đơn hàng theo trạng thái */

    this.orderCountByStatus = {
      'All': 0,
      'Wait for confirmation': 0,
      'Đang đóng gói': 0,
      'Lấy hàng': 0,
      'Lấy hàng thất bại': 0,
      'Tình trạng giao hàng': 0,
      'Giao hàng thành công': 0,
      'Giao hàng thất bại': 0,
      'Đang trả hàng về cho nhà bán': 0,
      'Đã hủy (Chưa giao hàng)': 0,
      'Trả hàng thành công': 0
    };
    this.allChecked = true;
    this.indeterminate = true;
    /** Có hiển thị modal chỉnh sửa customer tax hay không */

    this.isShowModalEditCustomerTax = false;
    this.tempCustomerTax = null;
    this.visible_affiliate = false; // hiển thị modal chọn sản phẩm phần mềm liên kết

    this.productTikiSelected = null; // sản phẩm tiki được chọn để lien kết

    /** Gửi hóa đơn lên Cơ quan thuế kèm phí vận chuyển */

    this.cqt_submit_invoice_with_shipping_fee = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_submit_invoice_with_shipping_fee;
    /** Gửi hóa đơn lên Cơ quan thuế kèm phí giao dịch/phí sàn */

    this.cqt_submit_invoice_with_ecommerce_fee = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_submit_invoice_with_ecommerce_fee;
    /** Giá bán hàng hóa, dịch vụ... trên sàn đã bao gồm thuế VAT */

    this.cqt_vat_ecommerce_already_Included = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_already_Included;
    /** % thuế VAT */

    this.cqt_vat_ecommerce_rate = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_rate;
    /** Ký tự động ngay khi gửi hóa đơn lên Cơ quan thuế */

    this.cqt_invoice_auto_sign = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_invoice_auto_sign;
    /** Giá bán hàng hóa, dịch vụ trên sàn đã bao gồm VAT, tính theo VAT hàng hóa, dịch vụ liên kết */

    this.cqt_vat_ecommerce_by_linked_product = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_by_linked_product;
    /** Hàng khuyến mãi được phép xuất 0đ. Nếu là true thì tchat2 sẽ có các cột = 0, ma_thue vẫn là số bình thường */

    this.cqt_vat_ecommerce_allow_promotional_items_zero_price = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_allow_promotional_items_zero_price;
    /** Xuất riêng chiết khấu/giảm giá của sản phẩm thành 1 dòng riêng khi gửi CQT */

    this.cqt_vat_ecommerce_separate_discount_line = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_separate_discount_line;
    /** Vẫn giữ hàng xuất bán cho sản phẩm tặng/khuyến mãi khi gửi CQT */

    this.cqt_vat_ecommerce_keep_promotional_items_as_sold = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_keep_promotional_items_as_sold;
    /** Sử dụng thời gian cập nhật trạng thái gần nhất của đơn hàng từ sàn để thiết lập ngày lập hóa đơn */

    this.cqt_vat_ecommerce_use_latest_order_update_time = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_use_latest_order_update_time;
    /** Xuất hóa đơn từ sàn với thông tin người mua kèm theo tên sàn và mã đơn hàng */

    this.cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an;
    /** Xuất hóa đơn từ sàn với thông tin thanh toán mặc định là 'Chuyển khoản' */

    this.cqt_vat_ecommerce_default_payment_method_chuyen_khoan = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_default_payment_method_chuyen_khoan;
    /** Mã sản phẩm khi gửi CQT là mã vạch sản phẩm */

    this.cqt_vat_ecommerce_item_code_is_barcode = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_item_code_is_barcode;
    /** Giá hàng hóa, dịch vụ... gửi CQT là giá bán đã giảm */

    this.cqt_vat_ecommerce_item_price_is_discounted = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').cqt_vat_ecommerce_item_price_is_discounted;
    this.dataRestore = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.dataRestore;
  }

  ngOnInit() {
    this.disabledDate(new Date());

    if (this.dataRestore) {
      this.searchValue = this.dataRestore.searchValue;
      this.salesOrder = this.dataRestore.salesOrder;
      this.salesSubOrder = this.dataRestore.salesSubOrder;
      this.countOrderByStatus(this.salesOrder);
      this.load_status = true;
      this.selectedIndex = this.dataRestore.selectedIndex;
      this.date = this.dataRestore.date;
    }

    this.infoShop = this.vhQuerySales.getlocalShopListTiki()[0];
    this.listProductOfBranch = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].tikis && item[this.id_branch].tikis.length >= 0);
    let localProducts = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden);
    this.listProductApp = localProducts.map(item => {
      if (item[this.id_branch] && item[this.id_branch].tikis && item[this.id_branch].tikis.length) {
        //filter những sp tiki thuộc id tiki đã chọn
        item[this.id_branch].tikis = [...item[this.id_branch].tikis.filter(prod => prod.id_shop == this.infoShop._id)];
      }

      return Object.assign(Object.assign({}, item), this.vhQuerySales.getUnit_byRatio(item.units, 1));
    });
    this.listSubProductApp = [...this.listProductApp];
  }

  changeTime(event) {
    if (event[1].getTime() - event[0].getTime() <= 1209600000) {} else {
      this.vhComponent.showToast(2000, this.lang.translate("Thời gian xem không quá 15 ngày"), "alert-toast");
      this.date = [event[0], new Date(event[0].getTime() + 1209600000)];
    }
  }

  search(value) {
    this.segmentChanged(this.selectedIndex);
    /** Mảng bill cần search */

    let valArray = value.split(',').map(val => this.vhAlgorithm.changeAlias(val === null || val === void 0 ? void 0 : val.toString().trim().toLowerCase())).filter(val => (val === null || val === void 0 ? void 0 : val.length) > 0);

    if ((valArray === null || valArray === void 0 ? void 0 : valArray.length) > 0) {
      // search theo code
      this.salesOrder = this.salesOrder.filter(item => {
        return valArray.some(val => {
          var _a, _b;

          return (_b = this.vhAlgorithm.changeAlias((_a = item === null || item === void 0 ? void 0 : item.code) === null || _a === void 0 ? void 0 : _a.toString())) === null || _b === void 0 ? void 0 : _b.includes(val);
        });
      });
    }
  }
  /**
   * search tên sản phẩm trong app viethas
   * @example this.search('Sản phẩm A')
   */


  searchProductApp(value) {
    let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
    this.listProductApp = this.vhAlgorithm.searchList(val, [...this.listSubProductApp], ['name', 'barcode', 'item_code']);
  }

  segmentChanged(event) {
    if (event == 0) this.salesOrder = this.salesSubOrder;else {
      switch (event) {
        case 1:
        case 2:
        case 5:
          {
            this.salesOrder = this.salesSubOrder.filter(item => (item.status == this.list_status_bill[event].status || item.status == this.list_status_bill[event].status2) && item.main_state == this.list_status_bill[event].main_state);
            break;
          }
          ;

        case 3:
          {
            this.salesOrder = this.salesSubOrder.filter(item => item.main_state == this.list_status_bill[event].main_state && (item.main_substate == this.list_status_bill[event].main_substate || item.main_substate == this.list_status_bill[event].main_substate1));
            break;
          }
          ;

        case 4:
          {
            this.salesOrder = this.salesSubOrder.filter(item => item.main_substate == this.list_status_bill[event].main_substate1 || item.main_substate == this.list_status_bill[event].main_substate);
            break;
          }

        case 6:
          {
            this.salesOrder = this.salesSubOrder.filter(item => item.status == this.list_status_bill[event].status);
            break;
          }
          ;

        case 8:
        case 7:
          {
            this.salesOrder = this.salesSubOrder.filter(item => item.status == this.list_status_bill[event].status && item.main_state == this.list_status_bill[event].main_state && (item.main_substate == this.list_status_bill[event].main_substate || item.main_substate == this.list_status_bill[event].main_substate2 || item.main_substate == this.list_status_bill[event].main_substate3));
            break;
          }

        case 9:
        case 10:
          {
            this.salesOrder = this.salesSubOrder.filter(item => item.status == this.list_status_bill[event].status && item.main_state == this.list_status_bill[event].main_state && (item.items[0].confirmation.status == this.list_status_bill[event].confirmation_status || item.items[0].confirmation.status == this.list_status_bill[event].confirmation_status1));
            break;
          }
      }
    }
  }
  /**
   * Đếm số lượng đơn hàng theo trạng thái
   * @param orders
   */


  countOrderByStatus(orders) {
    this.orderCountByStatus['All'] = orders.length;
    this.orderCountByStatus['Wait for confirmation'] = orders.filter(order => order.status === 'queueing' && order.main_state === 'awaiting_confirmation').length;
    this.orderCountByStatus['Đang đóng gói'] = orders.filter(order => order.status === 'queueing' && order.main_state === 'processing').length;
    this.orderCountByStatus['Lấy hàng'] = orders.filter(order => order.main_state === 'processing' && (order.main_substate === 'picked_up_from_seller' || order.main_substate === 'picking_up_from_seller')).length;
    this.orderCountByStatus['Lấy hàng thất bại'] = orders.filter(order => order.main_substate === 'pickup_failed_1' || order.main_substate === 'pickup_failed_2').length;
    this.orderCountByStatus['Tình trạng giao hàng'] = orders.filter(order => (order.status === 'ready_to_ship' || order.status === 'shipping') && order.main_state === 'shipping').length;
    this.orderCountByStatus['Giao hàng thành công'] = orders.filter(order => order.status === 'successful_delivery').length;
    this.orderCountByStatus['Giao hàng thất bại'] = orders.filter(order => order.status === 'handover_to_partner' && order.main_state === 'shipping' && (order.main_substate === '3pl_delivery_failed_1' || order.main_substate === '3pl_delivery_failed_2' || order.main_substate === '3pl_delivery_failed_3')).length;
    this.orderCountByStatus['Đang trả hàng về cho nhà bán'] = orders.filter(order => order.status === 'handover_to_partner' && order.main_substate === '3pl_returning_to_seller' && order.main_state === 'shipping').length;
    this.orderCountByStatus['Đã hủy (Chưa giao hàng)'] = orders.filter(order => order.status === 'canceled' && order.main_state === 'canceled' && (order.items[0].confirmation.status === 'waiting' || order.items[0].confirmation.status === 'seller_confirmed')).length;
    this.orderCountByStatus['Trả hàng thành công'] = orders.filter(order => order.status === 'canceled' && order.main_state === 'canceled' && order.items[0].confirmation.status === 'ready_to_pick').length;
  }

  goBack() {
    this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki'], {
      state: {
        dataRestore: {
          dataRestore: this.dataRestore
        }
      }
    });
  }

  showReport() {
    this.load_status = true;
    this.salesOrder = [];
    this.vhComponent.showLoading("", "transparent-loading").then(() => {
      this.vhQuerySales.getSalesOrderListTiki(new Date(this.datePipe.transform(new Date(this.date[0].setHours(0, 0, 0)), "yyyy-MM-dd HH:mm:ss").toString()), new Date(this.datePipe.transform(new Date(this.date[1].setHours(23, 59, 59)), "yyyy-MM-dd HH:mm:ss").toString()), this.infoShop.access_token.toString(), this.infoShop._id.toString()).then(result => {
        this.vhComponent.hideLoading(0);
        this.salesOrder = result.map(item => {
          return Object.assign(Object.assign({}, item), {
            create_at: new Date(item.create_time * 1000),
            checked: true
          });
        });
        this.salesSubOrder = this.salesOrder;
        this.countOrderByStatus(this.salesOrder);
        this.segmentChanged(this.selectedIndex);
      }).catch(err => this.vhComponent.hideLoading(0));
    });
  }

  calculateTotal(bill) {
    return +bill['price'] - bill['voucher'] + bill['shipping_fee'];
  }

  ngAfterViewChecked() {
    if (document.querySelector("#order-status-tiki") && document.querySelector(".ant-tabs-tab") && document.querySelector(".ant-table-thead") && document.querySelector(".order-status-tiki-header") && document.querySelector(".ant-table-pagination")) {
      this.heightScroll = document.querySelector("#order-status-tiki").clientHeight - document.querySelector(".ant-table-thead").clientHeight - document.querySelector(".order-status-tiki-header").clientHeight - document.querySelector(".ant-tabs-tab").clientHeight - 90 + "px";
    }

    if (document.getElementById("order-status-tiki")) this.widthScroll = document.getElementById("order-status-tiki").clientWidth + "px";
    this.cdRef.detectChanges();
  }

  gotoDetail(bill) {
    this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/order-status/detail'], {
      state: {
        bill: bill,
        dataRestore: {
          salesOrder: this.salesOrder,
          searchValue: this.searchValue,
          id_shop_selected: this.infoShop._id,
          date: this.date,
          salesSubOrder: this.salesSubOrder,
          selectedIndex: this.selectedIndex
        }
      }
    });
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

  findProductLinked(item) {
    for (let productOfBranch of this.listProductOfBranch) {
      let findProduct = productOfBranch[this.id_branch].tikis.find(data => data.product_id == item.product.id);

      if (findProduct) {
        return productOfBranch;
      }
    }

    return null;
  }
  /**
   * Kiểm tra sản phẩm đã được lien kết hay chưa
   *
   */


  isLinkedToProduct(item) {
    for (let productOfBranch of this.listProductOfBranch) {
      let findProduct = productOfBranch[this.id_branch].tikis.find(data => data.product_id == item.product.id);

      if (findProduct) {
        return true;
      }
    }

    ;
    return false;
  }

  openModelSelectProductsTiki(productTiki) {
    this.productTikiSelected = productTiki;
    this.visible_affiliate = true;
  }
  /**
   * Tắt modal và clone mảng product ra một mảng mới để tránh nhớ lại product cũ bị checked
   */


  cancelAffiliate() {
    this.visible_affiliate = false;
  }
  /**
    * Liên kết sản phẩm từ tiki với sản phẩm tại cửa hàng.
    * @param product Sản phẩm của cửa hàng
    */


  acceptAfiliate(product) {
    const isZeroPriceCombo = product.type === src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.COMBO && product.units[0].price === 0;
    const confirmZeroPriceComboMessage = this.lang.translate("This product is a combo with a price of 0. Do you still want to link it with the product", {
      platform: 'Tiki'
    }) + "?";
    this.nzModalService.confirm({
      nzTitle: '<i>' + (isZeroPriceCombo ? confirmZeroPriceComboMessage : this.lang.translate("Confirm")) + '</i>',
      nzIconType: "info-circle",
      nzCancelText: this.lang.translate("Cancel"),
      nzOnOk: () => {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
          const id_product_selected = product.id_subproduct ? product.id_subproduct : product['_id'];
          this.vhQuerySales.addMergeTikiProduct(id_product_selected, [this.productTikiSelected.product.id], this.infoShop['_id']).then(bool => {
            this.vhComponent.hideLoading().then(() => {
              setTimeout(() => {
                this.visible_affiliate = false;
                this.listProductOfBranch = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].tikis && item[this.id_branch].tikis.length >= 0);
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
  /**Xóa những sp đã được liên kết rồi ra khỏi mảng của modal danh sách sp liên kết
   * @param listProduct : danh sách sp đã lk với sàn
   * @param listProductApp : toàn bộ danh sách sp của app
   * @example let daa =  this.clearProductShow([], [])
   *
  */


  clearProductShow(listProduct, listProductApp) {
    for (let prodApp of listProductApp) {
      if (prodApp[this.id_branch] && prodApp[this.id_branch].tikis && prodApp[this.id_branch].tikis.length) {
        for (let item of prodApp[this.id_branch].tikis) {
          let indexProd = listProduct.findIndex(prod => prod.product_id == item.product_id);
          if (indexProd >= 0) listProduct.splice(indexProd, 1);
        }
      }
    }

    return listProduct;
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

  send() {
    var _this = this;

    return (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let bills = _this.salesOrder.filter(data => data.checked).filter(data => !data.cqt_status || data.cqt_status == 1); // lọc ra những hóa đơn đã chọn và chưa gửi lên CQT;


      const batchSize = 1;
      const totalBatches = Math.ceil(bills.length / batchSize);

      if (!bills.length) {
        _this.vhComponent.alertMessageDesktop('error', _this.lang.translate("Please select at least one invoice"));

        return;
      } // Nếu có bật cqt_vat_ecommerce_use_latest_order_update_time thì sắp xếp theo thời gian cập nhật trạng thái gần nhất của đơn hàng từ sàn, 
      // cũ gửi trước, mới gửi sau


      if (_this.cqt_vat_ecommerce_use_latest_order_update_time) {
        bills = bills.sort((a, b) => a.update_time - b.update_time);
      }

      yield _this.vhComponent.showLoadingNotDuration(_this.lang.translate("Sending..."));

      try {
        for (let i = 0; i < bills.length; i += batchSize) {
          const batch = bills.slice(i, i + batchSize);
          const currentBatchIndex = Math.floor(i / batchSize) + 1;
          const promises = batch.map(bill => {
            console.log(`Processing bill: ${bill.code}`);
            return _this.sendCQT(bill);
          });

          try {
            const results = yield _this.vhQuery.asyncPromiseAll(promises);
            console.log(`Batch ${currentBatchIndex}/${totalBatches} done`, results);
          } catch (batchError) {
            console.error(`Error in batch ${currentBatchIndex}:`, batchError);
          }
        }
      } finally {
        // ✅ luôn được gọi sau khi xử lý xong mọi batch
        yield _this.vhComponent.hideLoading();
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

        this.changeBill_byLocal_toInvoice_byMinvoice(invoice, this.currentBranch.einvoices[0].invoiceSeries[0]).then(rsp => {
          if (rsp.vcode == 0) {
            // Ký tự động ngay khi gửi hóa đơn lên Cơ quan thuế
            if (this.cqt_invoice_auto_sign) {
              this.vhEinvoice.saveInvoice_Sign_byMinvoice(this.currentBranch.taxcode, this.currentBranch.einvoices[0].token, 1, rsp.data).then( /*#__PURE__*/function () {
                var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
                  console.log('res', res);

                  if (res.code == '00') {
                    invoice.cqt_status = 3;
                    invoice.status = _this2.lang.translate("Sent to CQT");

                    _this2.vhQuerySales.updateSalesOrderTiki_byFile([invoice.code.toString()], {
                      cqt_status: 3
                    }, _this2.infoShop.access_token, _this2.infoShop._id).then(array => {
                      console.log('updateSalesOrderTiki_byFile', array);
                      resolve(true);
                    }, error => {
                      console.log(error);
                    });

                    resolve('');
                  } else if (res.code == '9999') {
                    reject(invoice._id);

                    _this2.vhComponent.alertMessageDesktop("error", invoice.bill_code + ' ' + _this2.lang.translate("Vui lòng kiểm tra lại thông tin hóa đơn đẩy lên CQT chưa phù hợp"));
                  } else if (res.code == '296') {
                    resolve(true);

                    _this2.vhComponent.alertMessageDesktop("error", _this2.lang.translate("Không thể gửi những hóa đơn có ngày lập hóa đơn nhỏ hơn ngày lập hóa đơn cuối cùng đã gửi lên Cơ quan thuế. <br> Nếu cần gửi những hóa đơn cũ hơn, bạn cần tắt cấu hình 'Sử dụng thời gian cập nhật trạng thái gần nhất của đơn hàng từ sàn để thiết lập ngày lập hóa đơn' trong Cài đặt"), 4000);
                  } else {
                    reject(invoice._id);

                    _this2.vhComponent.alertMessageDesktop("error", invoice.bill_code + ' ' + _this2.lang.translate(res.message));
                  }
                });

                return function (_x2) {
                  return _ref.apply(this, arguments);
                };
              }()).catch(error => {
                console.error('Error saving invoice:', error);
                reject(invoice._id);
                this.vhComponent.alertMessageDesktop("error", invoice.bill_code + ' ' + this.lang.translate("An error occurred while sending the invoice to CQT. Please try again later."));
              });
            } else {
              this.vhEinvoice.saveInvoice_noSign_byMinvoice(this.currentBranch.taxcode, this.currentBranch.einvoices[0].token, 1, rsp.data).then( /*#__PURE__*/function () {
                var _ref2 = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
                  console.log('res', res);

                  if (res.code == '00') {
                    invoice.cqt_status = 2;
                    invoice.status = _this2.lang.translate("Sent to CQT");

                    _this2.vhQuerySales.updateSalesOrderTiki_byFile([invoice.code.toString()], {
                      cqt_status: 2
                    }, _this2.infoShop.access_token, _this2.infoShop._id).then(array => {
                      console.log('updateSalesOrderTiki_byFile', array);
                      resolve(true);
                    }, error => {
                      console.log(error);
                    });

                    resolve('');
                  } else if (res.code == '9999') {
                    reject(invoice._id);

                    _this2.vhComponent.alertMessageDesktop("error", invoice.bill_code + ' ' + _this2.lang.translate("Vui lòng kiểm tra lại thông tin hóa đơn đẩy lên CQT chưa phù hợp"));
                  } else if (res.code == '296') {
                    resolve(true);

                    _this2.vhComponent.alertMessageDesktop("error", _this2.lang.translate("Không thể gửi những hóa đơn có ngày lập hóa đơn nhỏ hơn ngày lập hóa đơn cuối cùng đã gửi lên Cơ quan thuế. <br> Nếu cần gửi những hóa đơn cũ hơn, bạn cần tắt cấu hình 'Sử dụng thời gian cập nhật trạng thái gần nhất của đơn hàng từ sàn để thiết lập ngày lập hóa đơn' trong Cài đặt"), 4000);
                  } else {
                    reject(invoice._id);

                    _this2.vhComponent.alertMessageDesktop("error", invoice.bill_code + ' ' + _this2.lang.translate(res.message));
                  }
                });

                return function (_x3) {
                  return _ref2.apply(this, arguments);
                };
              }()).catch(error => {
                console.error('Error saving invoice:', error);
                reject(invoice._id);
                this.vhComponent.alertMessageDesktop("error", invoice.bill_code + ' ' + this.lang.translate("An error occurred while sending the invoice to CQT. Please try again later."));
              });
            }
          }
        }, error => {
          console.log('error', error);
        });
      }
    });
  }
  /**
   * @example
   * this.vhQuerySales.changeBill_byLocal_toInvoice_byMinvoice(id_bill, invoiceSeries)
      .then((rsp) => {
        //-----------your code here-----------
      }, (error: any) => {
          console.log('error', error);
      });
   * @param id_bill
   * @param invoiceSeries
   * @returns Promise => {vcode, msg, data(array)}
   *
   *
   * Cấu trúc cần xử lý 3 cái:
   *  - Danh sách hóa đơn chi tiết:
   *    + Check trường hợp combo
   *  - Phí vận chuyển
   *  - Chiết khấu thương mại
   *
   *
   * Ghi chú:
   *  - Trường hợp có bật cqt_vat_ecommerce_already_Included, thì phải tính lại Giá để total sau khi áp thuế (thuế từ phần cài đặt của app mình) và Chiết khấu là không thay đổi.
   *  - tchat2 và tchat3 thì discountAmount và discountPercentage sẽ = 0
   *  - Chiết khấu thương mại thì Thuế = 0
   *  - Combo sẽ không có trường hợp tất cả các sản phẩm bên trong có giá = 0 (đã bắt khi liên kết sản phẩm) nên có thể bỏ qua trường hợp này
   *  - Đối với combo liên kết, Trường hợp cqt_vat_ecommerce_by_linked_product thì bắt ở combo nhưng vẫn giữ code ở invoice_detail cha để logic không bị thay đổi. Trường hợp cqt_vat_ecommerce_already_Included thì bắt ở invoice_detail cha, không cần bắt ở combo nữa, vì khi chia ra tỷ lệ vẫn sẽ đảm bảo do đã tính ở cha
   */


  changeBill_byLocal_toInvoice_byMinvoice(bill, invoiceSeries) {
    var _this3 = this;

    return new Promise((resolve, reject) => {
      (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;

        try {
          /** Chứa thông tin hóa đơn và bill details sẽ gửi lên cqt */
          let invoices = new Array();
          /** Danh sách bill details */

          var invoice_details = new Array();
          console.log('bill', bill);
          /* ---------------------------------------------------------- Khởi tạo invoice ---------------------------------------------------------- */

          const invoice = {
            inv_invoiceSeries: invoiceSeries,
            inv_invoiceIssuedDate: _this3.vhAlgorithm.formatDateToString(new Date()),
            inv_currencyCode: "VND",
            inv_exchangeRate: 1,
            inv_discountAmount: 0,
            inv_TotalAmountWithoutVat: 0,
            inv_vatAmount: 0,
            inv_TotalAmount: 0,
            key_api: bill.code,
            so_benh_an: bill.code
          };
          /* --------- Xử lý cqt_vat_ecommerce_use_latest_order_update_time thì lấy ngày cập nhật trạng thái gần nhất của đơn hàng từ sàn --------- */

          if (_this3.cqt_vat_ecommerce_use_latest_order_update_time) {
            invoice.inv_invoiceIssuedDate = _this3.vhAlgorithm.formatDateToString(new Date(bill.updated_at));
          }
          /* --------------------------------------------------------- Thông tin người mua -------------------------------------------------------- */

          /** Tên người mua mặc định nếu không có thông tin trong hóa đơn */


          let buyerDisplayNameDefault = 'Người mua không lấy hóa đơn';
          /* ------ Xử lý cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an --------------------------------------------------------------- */
          // Nếu bật thì sẽ thành: Tên sàn - Người mua không lấy hóa đơn - Mã đơn hàng

          if (_this3.cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an) {
            buyerDisplayNameDefault = `Tiki - ${buyerDisplayNameDefault} - ${invoice.so_benh_an}`;
          }
          /* ------ Xử lý cqt_vat_ecommerce_default_payment_method_chuyen_khoan ------------------------------------------------------------------- */
          // Nếu có bật thì luôn là 'Chuyển khoản', nếu không thì sẽ lấy theo của đơn hàng


          if (_this3.cqt_vat_ecommerce_default_payment_method_chuyen_khoan) {
            invoice.inv_paymentMethodName = 'Chuyển khoản';
          } else {
            invoice.inv_paymentMethodName = bill.payment.method == 'cod' ? 'Tiền mặt' : 'Chuyển khoản';
          }

          invoice.inv_buyerDisplayName = ((_b = (_a = bill.invoice) === null || _a === void 0 ? void 0 : _a.tax_info) === null || _b === void 0 ? void 0 : _b.company_name) ? (_d = (_c = bill.invoice) === null || _c === void 0 ? void 0 : _c.tax_info) === null || _d === void 0 ? void 0 : _d.company_name : bill.tax_buyerDisplayName ? bill.tax_buyerDisplayName : buyerDisplayNameDefault;
          invoice.inv_buyerLegalName = ((_f = (_e = bill.invoice) === null || _e === void 0 ? void 0 : _e.tax_info) === null || _f === void 0 ? void 0 : _f.company_name) ? (_h = (_g = bill.invoice) === null || _g === void 0 ? void 0 : _g.tax_info) === null || _h === void 0 ? void 0 : _h.company_name : bill.tax_buyerLegalName ? bill.tax_buyerLegalName : '';
          invoice.inv_buyerTaxCode = ((_k = (_j = bill.invoice) === null || _j === void 0 ? void 0 : _j.tax_info) === null || _k === void 0 ? void 0 : _k.code) ? (_m = (_l = bill.invoice) === null || _l === void 0 ? void 0 : _l.tax_info) === null || _m === void 0 ? void 0 : _m.code : bill.tax_buyerTaxCode ? bill.tax_buyerTaxCode : '';
          invoice.inv_buyerAddressLine = ((_p = (_o = bill.invoice) === null || _o === void 0 ? void 0 : _o.tax_info) === null || _p === void 0 ? void 0 : _p.address) ? (_r = (_q = bill.invoice) === null || _q === void 0 ? void 0 : _q.tax_info) === null || _r === void 0 ? void 0 : _r.address : bill.tax_buyerAddressLine ? bill.tax_buyerAddressLine : '';
          invoice.inv_buyerEmail = ((_t = (_s = bill.invoice) === null || _s === void 0 ? void 0 : _s.tax_info) === null || _t === void 0 ? void 0 : _t.email) ? (_v = (_u = bill.invoice) === null || _u === void 0 ? void 0 : _u.tax_info) === null || _v === void 0 ? void 0 : _v.email : bill.tax_buyerEmail ? bill.tax_buyerEmail : '';
          /* ------------------------------------------------------ Tính toán invoice details ----------------------------------------------------- */

          /** Thuế sàn */

          let platformTax = 0;
          /** Thuế của hóa đơn (lấy từ sàn / từ cài đặt) */

          let billTax = 0; // nếu bật cqt_vat_ecommerce_already_Included thì lấy thuế từ cài đặt

          if (_this3.cqt_vat_ecommerce_already_Included) {
            billTax = _this3.cqt_vat_ecommerce_rate || 0;
          } else {
            billTax = platformTax;
          }
          /** Để cộng dồn tiền seller giảm giá phí ship trong từng bill detail shipping_fee_discountAmount để trừ vào phí sản trả Tiki vì total_seller_fee là bao gồm giảm giá phí vận chuyển */


          let shipping_fee_discountAmount = 0; // Lăp qua bill details

          for (let i = 0; i < bill['items'].length; i++) {
            let product = bill['items'][i];
            /** Sản phẩm liên kết với sản phẩm của sàn */

            const productLinked = _this3.findProductLinked(product); // Khởi tạo chi tiết hóa đơn


            let invoice_detail = _this3.billService.createEInvoiceDetailTemplate();
            /** Đơn giá */


            let unitPrice = product.price;
            /** Số lượng */

            const quantity = product.qty;
            /** Giảm giá của seller (không tính sàn) */

            let discountAmount = ((_y = (_x = (_w = product.seller_income_detail) === null || _w === void 0 ? void 0 : _w.discount) === null || _x === void 0 ? void 0 : _x.discount_coupon) === null || _y === void 0 ? void 0 : _y.seller_discount) || 0;
            /** Total chưa có thuế */

            let totalAmountWithoutVat = unitPrice * quantity - discountAmount;
            /** Tính chất hàng hóa. Nếu inv_TotalAmountWithoutVat = 0 thì tchat = 2, nếu không thì tchat = 1 */

            const tchat = totalAmountWithoutVat === 0 ? 2 : 1;
            /** Thuế của bill detail này. Nếu có sản phẩm liên kết và bật setting cqt_vat_ecommerce_by_linked_product thì sẽ lấy thuế từ sản phẩm liên kết, ngược lại thì vẫn lấy từ billTâx như cũ  */

            const invoiceDetailTax = _this3.cqt_vat_ecommerce_by_linked_product && productLinked && productLinked.tax !== undefined ? productLinked.tax : billTax; // Gán các giá trị chung

            invoice_detail.tchat = tchat; // Tính chất hàng hóa: Hàng hóa dịch vụ (giá trị tchat là 1); Khuyến mại (giá trị tchat là 2); Chiết khấu thương mại (giá trị tchat là 3); Ghi chú/ diễn giải (giá trị tchat là 4); Hàng hóa đăc trưng (giá trị tchat là 5)

            invoice_detail.stt_rec0 = invoice_details.length + 1;
            invoice_detail.inv_itemCode = product.product.id;
            invoice_detail.inv_unitCode = 'Cái';
            invoice_detail.inv_quantity = quantity;
            invoice_detail.inv_unitPrice = unitPrice; // Đơn giá

            invoice_detail.ma_thue = invoiceDetailTax; // % thuế

            /* ------ Xử lý tchat --------------------------------------------------------------------------- */

            if (tchat === 2) {
              // Gán lại tên
              invoice_detail.inv_itemName = 'Hàng khuyến mãi/hàng tặng ' + product.product.name; // Tính lại giá trị trợ giá (chiết khấu) của chi tiết hóa đơn trường hợp tchat2

              invoice_detail.inv_discountAmount = 0;
              /* ------ Xử lý cqt_vat_ecommerce_already_Included cqt_vat_ecommerce_by_linked_product --------- */

              if (_this3.cqt_vat_ecommerce_already_Included || _this3.cqt_vat_ecommerce_by_linked_product) {
                // Tính lại giá
                invoice_detail.inv_unitPrice = _this3.billService.calculateNewPriceToUseSettingTax(invoice_detail.inv_unitPrice, invoice_detail.inv_quantity, invoice_detail.inv_discountAmount, invoice_detail.ma_thue, platformTax);
              }
              /* ------ Xử lý Hàng khuyến mãi được phép xuất 0đ ----------------------------------------------- */
              // Nếu có bật cqt_vat_ecommerce_allow_promotional_items_zero_price và là tchat2 thì cần gán lại giá = 0, để các phép tính cho những trường khác bên dưới cũng sẽ tự tính = 0


              if (_this3.cqt_vat_ecommerce_allow_promotional_items_zero_price) {
                invoice_detail.inv_unitPrice = 0;
              }
              /* ------ Xử lý Vẫn giữ hàng xuất bán cho sản phẩm tặng/khuyến mãi khi gửi CQT ------------------ */
              // Nếu có bật cqt_vat_ecommerce_keep_promotional_items_as_sold và là tchat2 thì sẽ set lại nso thành tchat1, discountAmount và discountPercentage vẫn là 0


              if (_this3.cqt_vat_ecommerce_keep_promotional_items_as_sold) {
                // Gán lại tchat
                invoice_detail.tchat = 1; // Gán lại tchat thành 1
                // Gán lại tên

                invoice_detail.inv_itemName = product.product.name;
              } // Trợ giá (chiết khấu) tính theo %


              invoice_detail.inv_discountPercentage = 0;
            } else {
              // Gán lại tên
              invoice_detail.inv_itemName = product.product.name; // Trợ giá (chiết khấu) của nhà bán hàng trên mỗi chi tiết hóa đơn = seller_discount + shopee_discount

              invoice_detail.inv_discountAmount = discountAmount;
              /* ------ Xử lý Giá hàng hóa, dịch vụ... gửi CQT là giá bán đã giảm ----------------------------------------- */

              if (_this3.cqt_vat_ecommerce_item_price_is_discounted) {
                // Gán lại thành giá đã giảm
                invoice_detail.inv_unitPrice = invoice_detail.inv_unitPrice - invoice_detail.inv_discountAmount / invoice_detail.inv_quantity; // Gán lại Chiết khấu = 0

                invoice_detail.inv_discountAmount = 0;
              }
              /* ------ Xử lý cqt_vat_ecommerce_already_Included cqt_vat_ecommerce_by_linked_product --------- */


              if (_this3.cqt_vat_ecommerce_already_Included || _this3.cqt_vat_ecommerce_by_linked_product) {
                // Tính lại giá
                invoice_detail.inv_unitPrice = _this3.billService.calculateNewPriceToUseSettingTax(invoice_detail.inv_unitPrice, invoice_detail.inv_quantity, invoice_detail.inv_discountAmount, invoice_detail.ma_thue, platformTax);
              } // Trợ giá (chiết khấu) tính theo %


              invoice_detail.inv_discountPercentage = invoice_detail.inv_discountAmount / (invoice_detail.inv_unitPrice * invoice_detail.inv_quantity) * 100;
            } // Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn


            invoice_detail.inv_TotalAmountWithoutVat = invoice_detail.inv_unitPrice * invoice_detail.inv_quantity - invoice_detail.inv_discountAmount; //Thuế VAT được tính theo chi tiết hóa đơn

            invoice_detail.inv_vatAmount = invoice_detail.inv_TotalAmountWithoutVat * invoice_detail.ma_thue / 100; //Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

            invoice_detail.inv_TotalAmount = invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_vatAmount; // Nếu như có liên kết

            if (productLinked) {
              // Nểu liên kết với sản phẩm
              if (productLinked.type === src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.PRODUCT) {
                // Thay đổi inv_itemName và inv_itemCode
                invoice_detail.inv_itemName = productLinked.name;
                /* ------ Xử lý cqt_vat_ecommerce_item_code_is_barcode ------------------------------------------ */

                if (_this3.cqt_vat_ecommerce_item_code_is_barcode) {
                  const barcode = (_z = _this3.vhQuerySales.getUnit_byRatio(productLinked.units, 1)) === null || _z === void 0 ? void 0 : _z.barcode; // Nếu có barcode thì dùng barcode

                  if (barcode) {
                    invoice_detail.inv_itemCode = barcode;
                  } // Nếu không có barcode thì thông báo
                  else {
                    _this3.vhComponent.hideLoading();

                    _this3.vhComponent.alertMessageDesktop("error", _this3.lang.translate("Gửi hóa đơn lên CQT thất bại. Hóa đơn có chứa sản phẩm chưa có mã vạch, vui lòng bổ sung và thử lại. Hoặc bỏ chọn cấu hình Mã sản phẩm khi xuất hóa đơn là mã vạch để tiếp tục"), 5000);

                    return;
                  }
                } else {
                  invoice_detail.inv_itemCode = productLinked.id_subproduct ? productLinked.id_subproduct : productLinked['_id'];
                }

                invoice_details = _this3.billService.addEInvoiceDetail(invoice_detail, invoice_details, {
                  cqt_vat_ecommerce_separate_discount_line: _this3.cqt_vat_ecommerce_separate_discount_line
                });
              } // Nếu liên kết với combo
              else if (productLinked.type === src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.COMBO) {
                const priceCombo = productLinked.units[0].price;

                if (priceCombo == 0) {
                  const errorZeroPriceComboMessage = _this3.lang.translate("Unable to issue the invoice because a linked combo product has a price of 0", {
                    invoice: bill.code
                  });

                  _this3.vhComponent.hideLoading();

                  _this3.vhComponent.alertMessageDesktop("error", errorZeroPriceComboMessage);

                  return;
                } // loop qua combo rồi tính lại chi tiết hóa đơn


                for (let j = 0; j < productLinked.combos.length; j++) {
                  const combo = productLinked.combos[j]; // Khởi tạo chi tiết hóa đơn

                  let combo_detail = _this3.billService.createEInvoiceDetailTemplate();
                  /** Tỉ lệ phần trăm của giá sản phẩm và tổng giá combo */


                  const percentRate = combo.price * combo.quantity / priceCombo;
                  /** Tính chất hàng hóa. Nếu inv_TotalAmountWithoutVat = 0 thì tchat = 2, nếu không thì tchat = 1 */

                  const tchatCombo = !percentRate || combo.price == 0 || invoice_detail.inv_TotalAmountWithoutVat * percentRate == 0 ? 2 : 1;
                  /** Sản phẩm trong combo, get lại để lấy tax */

                  let detailproduct = _this3.vhQuerySales.getlocalDetailProduct(combo.id_subproduct ? combo.id_subproduct : combo.id_product);
                  /** Thuế của bill detail này. Nếu có sản phẩm liên kết và bật setting cqt_vat_ecommerce_by_linked_product thì sẽ lấy thuế từ sản phẩm liên kết, ngược lại thì vẫn lấy từ billTâx như cũ  */


                  const invoiceDetailComboTax = _this3.cqt_vat_ecommerce_by_linked_product && detailproduct && detailproduct.tax !== undefined ? detailproduct.tax : invoice_detail.ma_thue;
                  /** Đơn giá */

                  const unitPrice = (invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_discountAmount) * percentRate / (combo.quantity * invoice_detail.inv_quantity); // Gán các giá trị chung

                  combo_detail.tchat = tchatCombo;
                  combo_detail.stt_rec0 = invoice_details.length + 1;
                  combo_detail.inv_unitCode = 'Cái';
                  combo_detail.inv_quantity = combo.quantity * invoice_detail.inv_quantity;
                  combo_detail.inv_unitPrice = unitPrice; // Giá gốc bán sản phẩm trên sàn shopee

                  combo_detail.ma_thue = invoiceDetailComboTax;
                  /* ------ Xử lý cqt_vat_ecommerce_item_code_is_barcode ------------------------------------------ */

                  if (_this3.cqt_vat_ecommerce_item_code_is_barcode) {
                    const barcode = (_0 = _this3.vhQuerySales.getUnit_byRatio(combo.units, combo.ratio)) === null || _0 === void 0 ? void 0 : _0.barcode; // Nếu có barcode thì dùng barcode

                    if (barcode) {
                      combo_detail.inv_itemCode = barcode;
                    } // Nếu không có barcode thì thông báo
                    else {
                      _this3.vhComponent.hideLoading();

                      _this3.vhComponent.alertMessageDesktop("error", _this3.lang.translate("Gửi hóa đơn lên CQT thất bại. Hóa đơn có chứa sản phẩm chưa có mã vạch, vui lòng bổ sung và thử lại. Hoặc bỏ chọn cấu hình Mã sản phẩm khi xuất hóa đơn là mã vạch để tiếp tục"), 5000);

                      return;
                    }
                  } else {
                    combo_detail.inv_itemCode = combo.id_subproduct ? combo.id_subproduct : combo.id_product;
                  }
                  /* ------ Xử lý tchat --------------------------------------------------------------------------- */


                  if (tchatCombo === 2) {
                    // Gán lại tên
                    combo_detail.inv_itemName = 'Hàng khuyến mãi/hàng tặng ' + combo.name; // Tính lại giá trị trợ giá (chiết khấu) của chi tiết hóa đơn trường hợp tchat2

                    combo_detail.inv_discountAmount = 0;
                    /* ------ Xử lý cqt_vat_ecommerce_by_linked_product --------- */

                    if (_this3.cqt_vat_ecommerce_by_linked_product) {
                      // Tính lại giá
                      combo_detail.inv_unitPrice = _this3.billService.calculateNewPriceToUseSettingTax(combo_detail.inv_unitPrice, combo_detail.inv_quantity, combo_detail.inv_discountAmount, combo_detail.ma_thue, platformTax);
                    }
                    /* ------ Xử lý Hàng khuyến mãi được phép xuất 0đ ----------------------------------------------- */
                    // Nếu có bật cqt_vat_ecommerce_allow_promotional_items_zero_price và là tchat2 thì cần gán lại giá = 0, để các phép tính cho những trường khác bên dưới cũng sẽ tự tính = 0


                    if (_this3.cqt_vat_ecommerce_allow_promotional_items_zero_price) {
                      combo_detail.inv_unitPrice = 0;
                    }
                    /* ------ Xử lý Vẫn giữ hàng xuất bán cho sản phẩm tặng/khuyến mãi khi gửi CQT ------------------ */
                    // Nếu có bật cqt_vat_ecommerce_keep_promotional_items_as_sold và là tchat2 thì sẽ set lại nso thành tchat1, discountAmount và discountPercentage vẫn là 0


                    if (_this3.cqt_vat_ecommerce_keep_promotional_items_as_sold) {
                      // Gán lại tchat
                      combo_detail.tchat = 1; // Gán lại tchat thành 1
                      // Gán lại tên

                      combo_detail.inv_itemName = combo.name;
                    } // Trợ giá (chiết khấu) tính theo %


                    combo_detail.inv_discountPercentage = 0;
                  } else {
                    // Gán lại tên
                    combo_detail.inv_itemName = combo.name; // Trợ giá (chiết khấu) của nhà bán hàng trên mỗi chi tiết hóa đơn = seller_discount + shopee_discount

                    combo_detail.inv_discountAmount = _this3.billService.roundTo4Decimal(invoice_detail.inv_discountAmount * percentRate);
                    /* ------ Xử lý Giá hàng hóa, dịch vụ... gửi CQT là giá bán đã giảm ----------------------------------------- */

                    if (_this3.cqt_vat_ecommerce_item_price_is_discounted) {
                      // Gán lại thành giá đã giảm
                      combo_detail.inv_unitPrice = combo_detail.inv_unitPrice - combo_detail.inv_discountAmount / combo_detail.inv_quantity; // Gán lại Chiết khấu = 0

                      combo_detail.inv_discountAmount = 0;
                    }
                    /* ------ Xử lý cqt_vat_ecommerce_by_linked_product --------- */


                    if (_this3.cqt_vat_ecommerce_by_linked_product) {
                      // Tính lại giá
                      combo_detail.inv_unitPrice = _this3.billService.calculateNewPriceToUseSettingTax(combo_detail.inv_unitPrice, combo_detail.inv_quantity, combo_detail.inv_discountAmount, combo_detail.ma_thue, platformTax);
                    } // Trợ giá (chiết khấu) tính theo %


                    combo_detail.inv_discountPercentage = combo_detail.inv_discountAmount / (combo_detail.inv_unitPrice * combo_detail.inv_quantity) * 100;
                  } // Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn


                  combo_detail.inv_TotalAmountWithoutVat = combo_detail.inv_unitPrice * combo_detail.inv_quantity - combo_detail.inv_discountAmount; // Thuế VAT được tính theo chi tiết hóa đơn

                  combo_detail.inv_vatAmount = combo_detail.inv_TotalAmountWithoutVat * combo_detail.ma_thue / 100; // Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

                  combo_detail.inv_TotalAmount = combo_detail.inv_TotalAmountWithoutVat + combo_detail.inv_vatAmount; // Thêm vào mảng

                  invoice_details = _this3.billService.addEInvoiceDetail(combo_detail, invoice_details, {
                    cqt_vat_ecommerce_separate_discount_line: _this3.cqt_vat_ecommerce_separate_discount_line
                  });
                }
              }
            } else {
              invoice_details = _this3.billService.addEInvoiceDetail(invoice_detail, invoice_details, {
                cqt_vat_ecommerce_separate_discount_line: _this3.cqt_vat_ecommerce_separate_discount_line
              });
            }

            if (tchat === 1) {
              // Cộng dồn tiền seller giảm giá phí ship
              shipping_fee_discountAmount += ((_2 = (_1 = product.seller_income_detail.discount) === null || _1 === void 0 ? void 0 : _1.discount_shipping_fee) === null || _2 === void 0 ? void 0 : _2.seller_subsidy) || 0;
            }
          }
          /* -------------------------------------------------------- Xử lý Phí vận chuyển -------------------------------------------------------- */
          // Xử lý cho phí


          if (_this3.cqt_submit_invoice_with_shipping_fee && bill.invoice.shipping_amount_after_discount + shipping_fee_discountAmount > 0) {
            // Khởi tạo chi tiết hóa đơn
            let invoice_detail = _this3.billService.createEInvoiceDetailTemplate();
            /** Giảm giá (chỉ lấy giảm giá của Tiki) */


            const discountAmount = bill.invoice.shipping_discount_amount - shipping_fee_discountAmount;
            /** Đơn giá */

            let unitPrice = bill.invoice.shipping_amount_after_discount + discountAmount + shipping_fee_discountAmount;
            /** Số lượng */

            const quantity = 1;
            /** Total chưa có thuế */

            let totalAmountWithoutVat = unitPrice * quantity - discountAmount; // Gán các giá trị chung

            invoice_detail.tchat = 1;
            invoice_detail.stt_rec0 = invoice_details.length + 1;
            invoice_detail.inv_itemCode = 'phi_van_chuyen';
            invoice_detail.inv_itemName = 'Phí vận chuyển';
            invoice_detail.inv_unitCode = 'Lần';
            invoice_detail.inv_quantity = quantity;
            invoice_detail.inv_unitPrice = unitPrice;
            invoice_detail.inv_discountAmount = discountAmount; // giảm giá (Tiền chiết khấu)

            invoice_detail.inv_TotalAmountWithoutVat = totalAmountWithoutVat; // Thành tiền trước thuế

            invoice_detail.ma_thue = billTax; // % thuế

            /* ------ Xử lý cqt_vat_ecommerce_already_Included ---------------------------------------------- */

            if (_this3.cqt_vat_ecommerce_already_Included) {
              // Tính lại giá
              invoice_detail.inv_unitPrice = _this3.billService.calculateNewPriceToUseSettingTax(invoice_detail.inv_unitPrice, invoice_detail.inv_quantity, invoice_detail.inv_discountAmount, invoice_detail.ma_thue, platformTax);
            } // Trợ giá (chiết khấu) tính theo %


            invoice_detail.inv_discountPercentage = invoice_detail.inv_discountAmount / (invoice_detail.inv_unitPrice * invoice_detail.inv_quantity) * 100; // Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn

            invoice_detail.inv_TotalAmountWithoutVat = invoice_detail.inv_unitPrice - invoice_detail.inv_discountAmount; // Thuế VAT được tính theo chi tiết hóa đơn

            invoice_detail.inv_vatAmount = invoice_detail.inv_TotalAmountWithoutVat * invoice_detail.ma_thue / 100; // Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

            invoice_detail.inv_TotalAmount = invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_vatAmount; // Thêm vào mảng

            invoice_details = _this3.billService.addEInvoiceDetail(invoice_detail, invoice_details, {
              cqt_vat_ecommerce_separate_discount_line: _this3.cqt_vat_ecommerce_separate_discount_line
            });
          }
          /* --------------------------------------------------------- Xử lý phí trả Tiki --------------------------------------------------------- */


          if (_this3.cqt_submit_invoice_with_ecommerce_fee) {
            /** Phí trả Tiki */
            const total_seller_fee = Math.abs((_3 = bill.invoice) === null || _3 === void 0 ? void 0 : _3.total_seller_fee) - shipping_fee_discountAmount || 0; // total_seller_fee là số âm (treated as statement entry in seller account: -25000 means expense, charge or cost)

            if (total_seller_fee > 0) {
              // Khởi tạo chi tiết hóa đơn
              let invoice_detail = _this3.billService.createEInvoiceDetailTemplate();
              /** Giảm giá */


              const discountAmount = 0;
              /** Đơn giá */

              let unitPrice = total_seller_fee;
              /** Số lượng */

              const quantity = 1;
              /** Total chưa có thuế */

              let totalAmountWithoutVat = unitPrice * quantity - discountAmount; // Gán các giá trị chung

              invoice_detail.tchat = 3;
              invoice_detail.stt_rec0 = invoice_details.length + 1, invoice_detail.inv_itemCode = 'chiet_khau_thuong_mai', invoice_detail.inv_itemName = 'Chiết khấu thương mại', invoice_detail.inv_unitCode = 'Phần', invoice_detail.inv_quantity = quantity, invoice_detail.inv_unitPrice = unitPrice, invoice_detail.inv_TotalAmountWithoutVat = totalAmountWithoutVat, // Thành tiền trước thuế
              invoice_detail.ma_thue = 0, // Không có thuế cho chiết khấu thương mại
              invoice_detail.inv_TotalAmount = total_seller_fee + 0; // tổng tiền sau thuế (Thành tiền sau thuế)
              // Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn

              invoice_detail.inv_TotalAmountWithoutVat = invoice_detail.inv_unitPrice - invoice_detail.inv_discountAmount; // Thuế VAT được tính theo chi tiết hóa đơn

              invoice_detail.inv_vatAmount = invoice_detail.inv_TotalAmountWithoutVat * invoice_detail.ma_thue / 100; // Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

              invoice_detail.inv_TotalAmount = invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_vatAmount; // Thêm vào mảng

              invoice_details = _this3.billService.addEInvoiceDetail(invoice_detail, invoice_details, {
                cqt_vat_ecommerce_separate_discount_line: _this3.cqt_vat_ecommerce_separate_discount_line
              });
            }
          }
          /* ---------------------------------------------- Gán lại các trường tính toán cho invoice ---------------------------------------------- */


          for (let i = 0; i < invoice_details.length; i++) {
            if (invoice_details[i].tchat == 1) {
              // tchat 1 thì cộng dồn
              invoice.inv_discountAmount += invoice_details[i].inv_discountAmount;
              invoice.inv_vatAmount += invoice_details[i].inv_vatAmount;
              invoice.inv_TotalAmountWithoutVat += invoice_details[i].inv_TotalAmountWithoutVat;
              invoice.inv_TotalAmount += invoice_details[i].inv_TotalAmount;
            } else if (invoice_details[i].tchat == 2) {// tchat 2 thì bỏ qua
            } else if (invoice_details[i].tchat == 3) {
              // tchat 3 thì phải trừ lại
              invoice.inv_discountAmount -= invoice_details[i].inv_discountAmount;
              invoice.inv_vatAmount -= invoice_details[i].inv_vatAmount;
              invoice.inv_TotalAmountWithoutVat -= invoice_details[i].inv_TotalAmountWithoutVat;
              invoice.inv_TotalAmount -= invoice_details[i].inv_TotalAmount;
            }
          }
          /* ----------------------------------------------------------- Trả về giá trị ----------------------------------------------------------- */


          invoices = [Object.assign(Object.assign({}, invoice), {
            details: [{
              data: invoice_details
            }]
          })];
          console.log('data', invoices);
          resolve({
            vcode: 0,
            msg: 'success',
            data: invoices
          });
        } catch (err) {
          console.error('❌ Lỗi saveInvoice_noSign_byMinvoice:', err);
          reject(err);
        }
      })();
    });
  }
  /**
   * Đếm số lượng bill đang check
   */


  get countSelectedBill() {
    var _a, _b, _c;

    return (_c = (_b = (_a = this.salesOrder) === null || _a === void 0 ? void 0 : _a.filter(e => e.checked)) === null || _b === void 0 ? void 0 : _b.filter(data => !data.cqt_status || data.cqt_status == 1)) === null || _c === void 0 ? void 0 : _c.length;
  }
  /**
   * Lấy ngày cập nhật của đơn hàng theo định dạng 2025-06-25
   */


  getUpdateTimeFormat(order) {
    return this.vhAlgorithm.formatDateToString(new Date(order.updated_at));
  }

}

EInvoiceTikiComponent.ɵfac = function EInvoiceTikiComponent_Factory(t) {
  return new (t || EInvoiceTikiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhEinvoice), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_bill_service__WEBPACK_IMPORTED_MODULE_4__.BillService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_print_service__WEBPACK_IMPORTED_MODULE_5__.PrintService));
};

EInvoiceTikiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: EInvoiceTikiComponent,
  selectors: [["app-e-invoice-tiki"]],
  decls: 37,
  vars: 32,
  consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "order-status-tiki"], ["nz-row", "", "nzGutter", "4", 1, "order-status-tiki-header"], ["nz-col", "", "nzSpan", "8", 1, "title"], [1, "color-green"], ["nz-col", "", "nzSpan", "6", 1, "title", "center-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "6"], ["nzFormat", "dd/MM/yyyy", "nzFormat", "dd/MM/yyyy", 3, "nzDisabledDate", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "click"], ["src", "assets/icon/management/view.svg"], ["nz-row", "", "nzGutter", "16", "class", "order-status-tiki-body", 4, "ngIf", "ngIfElse"], ["no_data", ""], ["ecommerce_platform", "tiki", 3, "invoice", "infoShop", "onClose", "onOk", 4, "ngIf"], [3, "title", "visible_affiliate", "listProductApp", "searchProductAppValue", "cancelAffiliate", "searchProductApp", "acceptAfiliate"], ["nz-icon", "", "nzType", "search"], ["nz-row", "", "nzGutter", "16", 1, "order-status-tiki-body"], ["nz-col", "", "nzSpan", "24"], [3, "nzSelectedIndex", "nzSelectedIndexChange", "nzSelectChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzPageSize", "nzPageSizeOptions", 4, "ngIf", "ngIfElse"], ["class", "full-height"], ["no_bill", ""], [3, "nzTitle"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzPageSize", "nzPageSizeOptions"], ["salesOrder_show", ""], ["nzAlign", "center", "nzWidth", "6%"], ["nzLeft", "", "nzWidth", "17%"], ["nzWidth", "15%"], ["nzWidth", "17%", 2, "text-align", "right"], ["nzAlign", "center", 3, "nzChecked", "nzIndeterminate", "nzCheckedChange"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], ["nzAlign", "center"], ["nzLeft", ""], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click"], ["style", "font-size: 0.8rem;", 3, "color", 4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "text-align", "right"], ["nzAlign", "center", 3, "click"], ["nz-button", "", "nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [2, "font-size", "0.8rem"], ["class", "icon-link green", "nz-icon", "", "nzType", "link", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "link", "nzTheme", "outline", 1, "icon-link", "green", 3, "click"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["nz-tooltip", "", 3, "nzTooltipTitle"], ["nz-tooltip", "", 1, "left-all-content", 3, "nzTooltipTitle"], ["nz-button", "", 1, "btn-confirm", 3, "click"], ["nz-tooltip", "", "nz-icon", "", 1, "ant-input-password-icon", 3, "nzTooltipTitle", "nzType", "click"], ["nz-button", "", "nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["nz-row", "", 1, "no-affiliate"], ["nz-col", "", "nzSpan", "24", 1, "text-center"], ["src", "assets/icon/management/ecommerce/no-data-orderstatus.svg", "alt", ""], ["ecommerce_platform", "tiki", 3, "invoice", "infoShop", "onClose", "onOk"]],
  template: function EInvoiceTikiComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceTikiComponent_Template_div_click_0_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "nz-layout", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "b", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "nz-input-group", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EInvoiceTikiComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.searchValue = $event;
      })("ngModelChange", function EInvoiceTikiComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.search($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, EInvoiceTikiComponent_ng_template_19_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "nz-range-picker", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EInvoiceTikiComponent_Template_nz_range_picker_ngModelChange_22_listener($event) {
        return ctx.date = $event;
      })("ngModelChange", function EInvoiceTikiComponent_Template_nz_range_picker_ngModelChange_22_listener($event) {
        return ctx.changeTime($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceTikiComponent_Template_button_click_24_listener() {
        return ctx.showReport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceTikiComponent_Template_button_click_28_listener() {
        return ctx.send();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, EInvoiceTikiComponent_div_31_Template, 7, 4, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, EInvoiceTikiComponent_ng_template_32_Template, 6, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, EInvoiceTikiComponent_app_edit_customer_tax_34_Template, 1, 2, "app-edit-customer-tax", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "app-modal-link-product-ecommerce", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancelAffiliate", function EInvoiceTikiComponent_Template_app_modal_link_product_ecommerce_cancelAffiliate_35_listener() {
        return ctx.cancelAffiliate();
      })("searchProductApp", function EInvoiceTikiComponent_Template_app_modal_link_product_ecommerce_searchProductApp_35_listener($event) {
        return ctx.searchProductApp($event);
      })("acceptAfiliate", function EInvoiceTikiComponent_Template_app_modal_link_product_ecommerce_acceptAfiliate_35_listener($event) {
        return ctx.acceptAfiliate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](20);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](33);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 18, "Back"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 20, "Xu\u1EA5t h\u00F3a \u0111\u01A1n \u0111i\u1EC7n t\u1EED t\u1EEB s\u00E0n"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 22, "Shop name"), ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.infoShop.data == null ? null : ctx.infoShop.data.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSuffix", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchValue)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 24, "T\u00ECm m\u00E3 \u0111\u01A1n h\u00E0ng (ph\u00E2n t\u00E1ch b\u1EDFi d\u1EA5u ph\u1EA9y)"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzDisabledDate", ctx.disabledDate)("ngModel", ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 26, "View"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 28, "G\u1EEDi CQT"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.load_status)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isShowModalEditCustomerTax);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 30, "Select Tiki linked products"))("visible_affiliate", ctx.visible_affiliate)("listProductApp", ctx.listProductApp)("searchProductAppValue", ctx.searchProductAppValue);
    }
  },
  directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _components_modal_link_product_ecommerce_modal_link_product_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__.ModalLinkProductEcommerceComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__.NzTabSetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__.NzTabComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzCellFixedDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzThSelectionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTbodyComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__.NzTooltipDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_26__.NzCheckboxComponent, _components_edit_customer_tax_edit_customer_tax_component__WEBPACK_IMPORTED_MODULE_7__.EditCustomerTaxComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .order-status-tiki-header[_ngcontent-%COMP%] {\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .order-status-tiki-header[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25vh;\n  max-width: 250px;\n  height: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-black);\n  margin-top: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-link[_ngcontent-%COMP%] {\n  padding: 1px;\n  font-size: 12px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-link.green[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n  color: var(--ion-color-vh-green);\n}\n.seller-inventory[_ngcontent-%COMP%], .seller-time-pickup[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 12px auto;\n}\n.modal-confirm[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtaW52b2ljZS10aWtpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFESTtFQUNJLGtCQUFBO0FBR1I7QUFESTtFQUlJLG1CQUFBO0FBQVI7QUFIUTtFQUNJLFVBQUE7QUFLWjtBQURJO0VBQ0ksaUVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFHUjtBQUZRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUlaO0FBREk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR1I7QUFGUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFJWjtBQUZRO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFJWjtBQUZRO0VBQ0ksa0JBQUE7QUFJWjtBQURJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHUjtBQURJO0VBQ0ksMkNBQUE7RUFDQSxnQ0FBQTtBQUdSO0FBQUE7O0VBRUksVUFBQTtFQUNBLGlCQUFBO0FBR0o7QUFBSTtFQUNJLGlCQUFBO0FBR1IiLCJmaWxlIjoiZS1pbnZvaWNlLXRpa2kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5vcmRlci1zdGF0dXMtdGlraS1oZWFkZXIge1xyXG4gICAgICAgIG56LXNlbGVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYnRuLXZpZXcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5uby1hZmZpbGlhdGUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1dmg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1jZW50ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmljb24tbGluayB7XHJcbiAgICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLmljb24tbGluay5ncmVlbiB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIH1cclxufVxyXG4uc2VsbGVyLWludmVudG9yeSxcclxuLnNlbGxlci10aW1lLXBpY2t1cCB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiAxMnB4IGF1dG87XHJcbn1cclxuLm1vZGFsLWNvbmZpcm0ge1xyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 26196:
/*!******************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/e-invoice-tiki/e-invoice-tiki.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceTikiModule": () => (/* binding */ EInvoiceTikiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_menu_manage_ecommerce_components_edit_customer_tax_edit_customer_tax_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/menu/manage/ecommerce/components/edit-customer-tax/edit-customer-tax.module */ 52701);
/* harmony import */ var src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/menu/manage/ecommerce/components/modal-link-product-ecommerce/modal-link-product-ecommerce.module */ 14774);
/* harmony import */ var _e_invoice_tiki_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./e-invoice-tiki.component */ 81495);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);











const routes = [
    {
        path: "",
        component: _e_invoice_tiki_component__WEBPACK_IMPORTED_MODULE_3__.EInvoiceTikiComponent
    },
];
class EInvoiceTikiModule {
}
EInvoiceTikiModule.ɵfac = function EInvoiceTikiModule_Factory(t) { return new (t || EInvoiceTikiModule)(); };
EInvoiceTikiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EInvoiceTikiModule });
EInvoiceTikiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            src_app_sales_menu_manage_ecommerce_components_edit_customer_tax_edit_customer_tax_module__WEBPACK_IMPORTED_MODULE_1__.EditCustomerTaxModule,
            src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_2__.ModalLinkProductEcommerceModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EInvoiceTikiModule, { declarations: [_e_invoice_tiki_component__WEBPACK_IMPORTED_MODULE_3__.EInvoiceTikiComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        src_app_sales_menu_manage_ecommerce_components_edit_customer_tax_edit_customer_tax_module__WEBPACK_IMPORTED_MODULE_1__.EditCustomerTaxModule,
        src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_2__.ModalLinkProductEcommerceModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_tiki_e-invoice-tiki_e-invoice-tiki_module_ts.js.map