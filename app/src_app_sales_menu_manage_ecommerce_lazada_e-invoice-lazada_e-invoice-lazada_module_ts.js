"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_lazada_e-invoice-lazada_e-invoice-lazada_module_ts"],{

/***/ 72938:
/*!***************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/e-invoice-lazada/e-invoice-lazada.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceLazadaComponent": () => (/* binding */ EInvoiceLazadaComponent)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var src_app_sales_services_bill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/services/bill.service */ 8942);
/* harmony import */ var src_app_sales_services_print_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/services/print.service */ 4097);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 54364);
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





























function EInvoiceLazadaComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 19);
  }
}

function EInvoiceLazadaComponent_div_34_nz_tab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-tab", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
  }

  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, item_r11.name), " (", ctx_r6.orderCountByStatus[item_r11.name], ")");
  }
}

function EInvoiceLazadaComponent_div_34_nz_tab_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-tab", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, "Other"), " (", ctx_r7.orderOthersCountByStatus, ")");
  }
}

function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_11_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_11_i_2_Template_i_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const item_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      $event.stopPropagation();
      return ctx_r24.openModelSelectProductsLazada(item_r22);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_11_i_2_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r22 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("color", ctx_r16.isLinkedToProduct(item_r22) ? "" : "var(--ion-color-vh-red)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r16.isLinkedToProduct(item_r22) ? ctx_r16.findProductLinked(item_r22).name : item_r22.name, " (SL: ", item_r22.quantity, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r16.isLinkedToProduct(item_r22));
  }
}

function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bill_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, bill_r14.statuses[0]));
  }
}

function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_13_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " sp giao th\u00E0nh c\u00F4ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " sp giao th\u1EA5t b\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bill_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](bill_r14.deliveredProduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](bill_r14.canceledProduct);
  }
}

function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_13_span_1_Template, 3, 3, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_13_ng_template_2_Template, 8, 2, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](3);

    const bill_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzTooltipTitle", ctx_r17.getUpdateTimeFormat(bill_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", bill_r14.statuses.length < 2)("ngIfElse", _r28);
  }
}

function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_15_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      const bill_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return ctx_r33.printService.viewEInvoice(ctx_r33.infoBranch, {
        _id: bill_r14.order_id
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

function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_16_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37);
      const bill_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return ctx_r36.printService.viewEInvoice(ctx_r36.infoBranch, {
        _id: bill_r14.order_id
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

function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_17_Template(rf, ctx) {
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

function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_label_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_label_23_Template_label_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41);
      const bill_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      return bill_r14.checked = $event;
    })("ngModelChange", function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_label_23_Template_label_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return ctx_r42.refreshStatus();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bill_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", bill_r14.checked);
  }
}

function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const bill_r14 = restoredCtx.$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r44.gotoDetail(bill_r14);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_Template_i_click_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const bill_r14 = restoredCtx.$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return ctx_r46.vhComponent.copyValue(bill_r14.order_id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_11_Template, 4, 5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_13_Template, 4, 3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_15_Template, 5, 7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_16_Template, 5, 7, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_span_17_Template, 3, 3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_Template_td_click_21_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_Template_i_click_22_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const bill_r14 = restoredCtx.$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r48.editTax(bill_r14);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_label_23_Template, 1, 1, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bill_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);

    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"]((_r12.nzPageIndex - 1) * _r12.nzPageSize + i_r15 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 12, bill_r14.created_at, "dd/MM/yyyy HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("href", "https://sellercenter.lazada.vn/apps/order/detail?spm=a1zawf.20980230.order_table_", i_r15, ".1.77a14edf58FSge&tradeOrderId=", bill_r14.order_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", bill_r14.order_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r13.getGroupedItemsCached(bill_r14.order_items));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", bill_r14.statuses[0] != "pending" && bill_r14.statuses[0] != "packed");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", bill_r14.cqt_status == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", bill_r14.cqt_status == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !bill_r14.cqt_status || bill_r14.cqt_status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r13.vhAlgorithm.vhcurrencyunit(bill_r14.total_amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", bill_r14.cqt_status == 1 || !bill_r14.cqt_status);
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

function EInvoiceLazadaComponent_div_34_nz_table_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-table", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th", 32);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_div_34_nz_table_5_Template_th_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r49.statusCol = !ctx_r49.statusCol;
      return ctx_r49.sortTable("status");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](28, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzCheckedChange", function EInvoiceLazadaComponent_div_34_nz_table_5_Template_th_nzCheckedChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r51.allChecked = $event;
    })("nzCheckedChange", function EInvoiceLazadaComponent_div_34_nz_table_5_Template_th_nzCheckedChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r52.checkAll($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, EInvoiceLazadaComponent_div_34_nz_table_5_tr_36_Template, 24, 15, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);

    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](30, _c0, ctx_r8.heightScroll))("nzData", ctx_r8.salesOrder)("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](32, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 16, "No."));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 18, "Date order"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 20, "Order number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 22, "Product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 24, "Status on Lazada"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 26, "Status CQT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzType", ctx_r8.statusCol == true ? "caret-down" : "caret-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](32, 28, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzChecked", ctx_r8.allChecked)("nzIndeterminate", ctx_r8.indeterminate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" (", ctx_r8.countSelectedBill, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _r12.data);
  }
}

function EInvoiceLazadaComponent_div_34_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 61);
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

function EInvoiceLazadaComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "nz-tabset", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzSelectedIndexChange", function EInvoiceLazadaComponent_div_34_Template_nz_tabset_nzSelectedIndexChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r53.selectedIndex = $event;
    })("nzSelectChange", function EInvoiceLazadaComponent_div_34_Template_nz_tabset_nzSelectChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r55.segmentChanged($event.index);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, EInvoiceLazadaComponent_div_34_nz_tab_3_Template, 2, 4, "nz-tab", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, EInvoiceLazadaComponent_div_34_nz_tab_4_Template, 2, 4, "nz-tab", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, EInvoiceLazadaComponent_div_34_nz_table_5_Template, 37, 33, "nz-table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, EInvoiceLazadaComponent_div_34_ng_template_6_Template, 4, 3, "ng-template", 26, 27, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](7);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSelectedIndex", ctx_r2.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.list_status_bill);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.orderOthersCountByStatus > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.salesOrder.length > 0)("ngIfElse", _r9);
  }
}

function EInvoiceLazadaComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "img", 64);
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

function EInvoiceLazadaComponent_app_edit_customer_tax_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-edit-customer-tax", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClose", function EInvoiceLazadaComponent_app_edit_customer_tax_37_Template_app_edit_customer_tax_onClose_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r56.isShowModalEditCustomerTax = false;
    })("onOk", function EInvoiceLazadaComponent_app_edit_customer_tax_37_Template_app_edit_customer_tax_onOk_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r58.isShowModalEditCustomerTax = false;
      return ctx_r58.onOkEditTax($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("invoice", ctx_r5.tempCustomerTax)("infoShop", ctx_r5.infoShop);
  }
}

class EInvoiceLazadaComponent {
  constructor(router, lang, vhComponent, vhAlgorithm, vhQuerySales, cdRef, modal, vhAuth, vhEinvoice, vhQuery, vhEcommerce, billService, printService, datePipe) {
    var _a;

    this.router = router;
    this.lang = lang;
    this.vhComponent = vhComponent;
    this.vhAlgorithm = vhAlgorithm;
    this.vhQuerySales = vhQuerySales;
    this.cdRef = cdRef;
    this.modal = modal;
    this.vhAuth = vhAuth;
    this.vhEinvoice = vhEinvoice;
    this.vhQuery = vhQuery;
    this.vhEcommerce = vhEcommerce;
    this.billService = billService;
    this.printService = printService;
    this.datePipe = datePipe;
    this.searchProductAppValue = '';
    this.salesOrder = [];
    this.salesSubOrder = [];
    this.selectedIndex = 0;
    this.list_status_bill = [{
      name: "All",
      value: "all"
    }, {
      name: "Unpaid",
      value: "unpaid"
    }, {
      name: "Wait for confirmation",
      value: "pending"
    }, {
      name: "To ship",
      value: "packed",
      value2: 'ready_to_ship'
    }, {
      name: "Shipping",
      value: "shipped"
    }, {
      name: "Delivered",
      value: "delivered"
    }, {
      name: "Cancellation",
      value: "canceled"
    }, {
      name: "Trouble",
      value: "package_scrapped"
    }, {
      name: "Return or refund",
      value: "returned"
    }, {
      name: "Failed Delivered",
      value: "shipped_back",
      value2: "shipped_back_success",
      value3: "failed_delivery"
    }, {
      name: "Lost & Damaged",
      value: "lost_by_3pl",
      value2: "damaged_by_3pl"
    }, {
      name: "Confirmed",
      value: "confirmed"
    }];
    this.date = [new Date(), new Date()];
    this.load_status = false;
    /**Giới hạn thời gian cho xem bill */

    this.disabledDate = current => {
      if (current.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime() - 24 * 60 * 60 * 1000) return true;
      return false;
    };

    this.listProductOfBranch = []; // sp của phần mềm có liên kết với lazada

    this.listProductApp = []; //sp của phần mềm

    this.listSubProductApp = []; //sp của app chứa lazada[]

    this.listProductLazada = [];
    this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
    this.infoShop = {};
    this.arrayHidden = []; //mảng này chứa id của những sp đang tạm ẩn

    this.infoBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id);
    /** Map chứa số lượng đơn hàng theo trạng thái */

    this.orderCountByStatus = {
      'All': 0,
      'Unpaid': 0,
      'Wait for confirmation': 0,
      'To ship': 0,
      'Shipping': 0,
      'Delivered': 0,
      'Cancellation': 0,
      'Trouble': 0,
      'Return or refund': 0,
      'Failed Delivered': 0,
      'Lost & Damaged': 0,
      'Confirmed': 0
    };
    /** Số lượng đơn hàng không nằm trong danh sách trạng thái */

    this.orderOthersCountByStatus = 0;
    /** hàm sort cho các cột */

    this.dateCol = false;
    this.bill_codeCol = false;
    this.partner_nameCol = false;
    this.payment_nameCol = false;
    this.statusCol = false;
    this.sum_priceCol = false;
    this.allChecked = true;
    this.indeterminate = true;
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
    this.groupedItemsMap = new Map();
    this.visible_affiliate = false; // hiển thị modal chọn sản phẩm phần mềm liên kết

    this.productLazadaSelected = null; // sản phẩm lazada được chọn để lien kết

    /** Có hiển thị modal chỉnh sửa customer tax hay không */

    this.isShowModalEditCustomerTax = false;
    this.tempCustomerTax = null;
    this.dataRestore = (_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.dataRestore;
  }

  ngOnInit() {
    if (this.dataRestore) {
      this.searchValue = this.dataRestore.searchValue;
      this.salesOrder = this.dataRestore.salesOrder;
      this.salesSubOrder = this.dataRestore.salesSubOrder;
      this.countOrderByStatus(this.salesOrder);
      this.load_status = true;
      this.selectedIndex = this.dataRestore.selectedIndex;
      this.date = this.dataRestore.date;
      this.segmentChanged(this.selectedIndex);
    }

    this.infoShop = this.vhQuerySales.getlocalShopListLazada()[0];
    this.listProductOfBranch = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].lazadas && item[this.id_branch].lazadas.length >= 0);
    let localProducts = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden);
    this.listProductApp = localProducts.filter(e => !e.delete_hidden).map(item => {
      if (item[this.id_branch] && item[this.id_branch].lazadas && item[this.id_branch].lazadas.length) {
        //filter những sp lazada thuộc id lazada đã chọn
        item[this.id_branch].lazadas = [...item[this.id_branch].lazadas.filter(prod => prod.id_shop == this.infoShop._id)];
      }

      return Object.assign(Object.assign({}, item), this.vhQuerySales.getUnit_byRatio(item.units, 1));
    });
    this.listSubProductApp = [...this.listProductApp];
    this.returnArrayHiddenProduct();
    this.listProductLazada = this.clearProductShow(this.vhQuerySales.getlocalProductListLazada(this.infoShop['_id']).filter(item => {
      if (item && !this.arrayHidden.includes(item.item_id)) return item;
    }), this.listProductApp);
    this.listProductLazada.forEach(item => item.name = item.attributes.name);
  }
  /**
    * Lấy ra những id của các sản phẩm bị tạm ẩn
    * @example this.returnArrayHiddenProduct()
    */


  returnArrayHiddenProduct() {
    let arr = [];
    this.arrayHidden = [];
    let localProduct = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden);

    for (let product of localProduct) {
      if (product[this.id_branch] && product[this.id_branch].lazadas && product[this.id_branch].lazadas.length) {
        for (let prod of product[this.id_branch].lazadas) if (prod.hidden == true && prod.id_shop == this.infoShop['_id']) arr.push(prod.item_id);
      }
    }

    this.arrayHidden = arr;
  }
  /**Xóa những sp đã được liên kết rồi ra khỏi mảng của modal danh sách sp liên kết
  * @param listProduct : danh sách sp đã lk với sàn
  * @param listProductApp : toàn bộ danh sách sp của app
  * @example let daa =  this.clearProductShow([], [])
  *
  */


  clearProductShow(listProduct, listProductApp) {
    for (let prodApp of listProductApp) {
      if (prodApp[this.id_branch] && prodApp[this.id_branch].lazadas && prodApp[this.id_branch].lazadas.length) {
        for (let item of prodApp[this.id_branch].lazadas) {
          let indexProd = listProduct.findIndex(prod => prod.item_id == item.item_id);

          if (indexProd >= 0) {
            for (let indexSku in item.skus) {
              let indexSub = listProduct[indexProd].skus.findIndex(sku => sku.SkuId == item.skus[indexSku].SkuId);

              if (indexSub >= 0) {
                listProduct[indexProd].skus.splice(indexSub, 1);
                if (listProduct[indexProd].skus.length == 0) listProduct.splice(indexProd, 1);
              }
            }
          }
        }
      }
    }

    return listProduct;
  }
  /**
   * bắt sk thay đổi ngày xem hóa đơn
   * @example this.changeTime('2023-06-09T04:14:30.367Z')
   */


  changeTime(event) {
    if (event[1].getTime() - event[0].getTime() <= 2678400000) {} else {
      this.vhComponent.showToast(2000, this.lang.translate("The time to view no more than 30 days"), "alert-toast");
      this.date = [new Date(event[0]), new Date(event[0].getTime() + 2678313600)];
    }
  }
  /**
   * lọc salesOrder theo order_id
   * @param value
   * @example this.search('060623A001')
   */


  search(value) {
    this.segmentChanged(this.selectedIndex);
    /** Mảng bill cần search */

    let valArray = value.split(',').map(val => this.vhAlgorithm.changeAlias(val === null || val === void 0 ? void 0 : val.toString().trim().toLowerCase())).filter(val => (val === null || val === void 0 ? void 0 : val.length) > 0);

    if ((valArray === null || valArray === void 0 ? void 0 : valArray.length) > 0) {
      // search theo order_id
      this.salesOrder = this.salesOrder.filter(item => {
        return valArray.some(val => {
          var _a, _b;

          return (_b = this.vhAlgorithm.changeAlias((_a = item === null || item === void 0 ? void 0 : item.order_id) === null || _a === void 0 ? void 0 : _a.toString())) === null || _b === void 0 ? void 0 : _b.includes(val);
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
  /**
   * bắt sk thay đổi tab xem trạng thái đơn
   * @param event
   */


  segmentChanged(event) {
    // Nếu chọn tab Khác thì hiện những đơn không có trong danh sách trạng thái
    if (event === this.list_status_bill.length) {
      this.salesOrder = this.salesSubOrder.filter(item => {
        return !this.list_status_bill.some(status => status.value === item.statuses[0] || status.value2 === item.statuses[0] || status.value3 === item.statuses[0]);
      });
      return;
    }

    if (event == 0) this.salesOrder = this.salesSubOrder;else this.salesOrder = this.salesSubOrder.filter(item => item.statuses[0] == this.list_status_bill[event].value || item.statuses[0] == this.list_status_bill[event].value2 || item.statuses[0] == this.list_status_bill[event].value3);
  }
  /**
   * Đếm số lượng đơn hàng theo trạng thái
   * @param orders
   */


  countOrderByStatus(orders) {
    this.orderOthersCountByStatus = orders.filter(order => {
      return !this.list_status_bill.some(status => status.value === order.statuses[0] || status.value2 === order.statuses[0] || status.value3 === order.statuses[0]);
    }).length;

    for (const key in this.orderCountByStatus) {
      if (key === 'All') {
        this.orderCountByStatus[key] = orders.length;
      } else {
        this.orderCountByStatus[key] = orders.filter(order => {
          return order.statuses[0] === this.list_status_bill.find(status => status.name === key).value || order.statuses[0] === this.list_status_bill.find(status => status.name === key).value2 || order.statuses[0] === this.list_status_bill.find(status => status.name === key).value3;
        }).length;
      }
    }
  }
  /**
   * trở về trang quản lý lazada
   * @example this.goBack()
   */


  goBack() {
    this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada'], {
      state: {
        dataRestore: {
          dataRestore: this.dataRestore
        }
      }
    });
  }
  /**
   * get hóa đơn lazada
   * @example this.showReport()
   */


  showReport() {
    this.load_status = true;
    this.salesOrder = [];
    this.vhComponent.showLoading("", "transparent-loading").then(() => {
      this.vhQuerySales.getSalesOrderDetailListLazada(new Date(this.date[0].setHours(0, 0, 0)).toISOString(), new Date(this.date[1].setHours(23, 59, 59, 59)).toISOString(), this.infoShop.access_token, this.infoShop._id).then(result => {
        this.vhComponent.hideLoading(0);
        result.forEach(item => {
          var _a;

          if (item.statuses.length > 1) {
            let count = 0;
            item.order_items.forEach(product => {
              if (product.status == 'canceled') count++;
            });
            item.deliveredProduct = item.order_items.length - count;
            item.canceledProduct = count;
          }

          this.salesOrder.push(Object.assign(Object.assign({}, item), {
            checked: true,
            total_amount: this.calculateTotal(item),
            created_at: new Date(item.created_at),
            id_shop: this.infoShop._id,
            cqt_status: (_a = item.cqt_status) !== null && _a !== void 0 ? _a : 1
          }));
        }); // this.salesOrder = result.map(item => { return { ...item, id_shop: this.infoShop._id, shop_name: shop.account }})

        this.salesSubOrder = this.salesOrder;
        this.countOrderByStatus(this.salesOrder);
        this.segmentChanged(this.selectedIndex);
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
  /**
   * tính lại tổng tiền
   * @param bill
   * @returns number
   * @example let total = this.calculateTotal(bill)
   */


  calculateTotal(bill) {
    return +bill['price'] - bill['voucher'] + bill['shipping_fee'];
  }

  ngAfterViewChecked() {
    if (document.querySelector("#order-status-lazada") && document.querySelector(".ant-tabs-tab") && document.querySelector(".ant-table-thead") && document.querySelector(".order-status-lazada-header") && document.querySelector(".ant-table-pagination")) {
      this.heightScroll = document.querySelector("#order-status-lazada").clientHeight - document.querySelector(".ant-table-thead").clientHeight - document.querySelector(".order-status-lazada-header").clientHeight - document.querySelector(".ant-tabs-tab").clientHeight - 90 + "px";
    }

    if (document.getElementById("order-status-lazada")) this.widthScroll = document.getElementById("order-status-lazada").clientWidth + "px";
    this.cdRef.detectChanges();
  }

  gotoDetail(bill) {
    this.router.navigate(['/sales/dashboard/manage/ecommerce/lazada/order-status/detail'], {
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
   * Check 1 cái
   */


  refreshStatus() {
    const validData = this.salesOrder.filter(value => !value.disabled);
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }

  sendCQT() {
    var _this = this;

    return (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let bill_checked = _this.salesOrder.filter(item => item.checked).filter(data => !data.cqt_status || data.cqt_status == 1); // lọc ra những hóa đơn đã chọn và chưa gửi lên CQT


      if (bill_checked.length == 0) {
        _this.vhComponent.alertMessageDesktop("error", _this.lang.translate("Vui lòng chọn hóa đơn cần gửi CQT"));

        return;
      } // Nếu có bật cqt_vat_ecommerce_use_latest_order_update_time thì sắp xếp theo thời gian cập nhật trạng thái gần nhất của đơn hàng từ sàn, 
      // cũ gửi trước, mới gửi sau


      if (_this.cqt_vat_ecommerce_use_latest_order_update_time) {
        bill_checked = bill_checked.sort((a, b) => a.update_time - b.update_time);
      }

      const batchSize = 1;
      const totalBatches = Math.ceil(bill_checked.length / batchSize);

      if (!bill_checked.length) {
        _this.vhComponent.alertMessageDesktop('error', _this.lang.translate("Please select at least one invoice"));

        return;
      }

      yield _this.vhComponent.showLoadingNotDuration(_this.lang.translate("Sending..."));

      for (let i = 0; i < bill_checked.length; i += batchSize) {
        // tạo mỗi lần 1 request gửi hóa đơn
        const batch = bill_checked.slice(i, i + batchSize);
        const currentBatchIndex = Math.floor(i / batchSize) + 1;
        const promises = batch.map(bill => {
          return _this.signatureManual(bill);
        });

        try {
          const results = yield _this.vhQuery.asyncPromiseAll(promises);
          console.log(`Batch ${i / batchSize + 1}:`, results);

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
   * hàm này ký hóa đơn lên cqt
   * @param invoice
   */


  signatureManual(invoice) {
    return new Promise((resolve, reject) => {
      var _a; // lấy ra chi nhánh hiện tại


      let currentBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id);
      console.log('currentBranch', currentBranch); // trường hợp chưa có tạo kết nối hóa đơn điện tử

      if (!((_a = currentBranch.einvoices) === null || _a === void 0 ? void 0 : _a.length)) {
        this.vhComponent.alertMessageDesktop("error", this.lang.translate("Please connect e-invoice for this branch"));
        resolve(true);
        return;
      } // trường hợp chỉ có 1 kết nối hóa đơn điện tử thì tạo thẳng luôn


      if (currentBranch.einvoices.length && currentBranch.einvoices.length == 1) {
        // trường hợp ncc hóa đơn điện tử là M-invoice
        if (currentBranch.einvoices[0].invoice_provider == 'M-invoice') {
          if (!currentBranch.einvoices[0].invoiceSeries.length) {
            this.vhComponent.alertMessageDesktop("error", this.lang.translate("Please connect e-invoice for this branch"));
            resolve(true);
            return;
          }

          invoice.isLoading = true;
          this.changeLazada_toInvoice_byMinvoice(invoice, currentBranch.einvoices[0].invoiceSeries[0]).then(rsp => {
            if (rsp.vcode == 0) {
              // Ký tự động ngay khi gửi hóa đơn lên Cơ quan thuế
              if (this.cqt_invoice_auto_sign) {
                this.vhEinvoice.saveInvoice_Sign_byMinvoice(currentBranch.taxcode, currentBranch.einvoices[0].token, 1, rsp.data).then(res => {
                  console.log(res);
                  invoice.isLoading = false;

                  if (res.code == '00') {
                    invoice.cqt_status = 3;
                    invoice.status = this.lang.translate("Sent to CQT");
                    this.vhComponent.alertMessageDesktop("success", this.lang.translate('Update invoice to CQT successfully'));
                    this.vhQuerySales.updateSalesOrderLazada_byFile([invoice.order_id.toString()], {
                      cqt_status: 3
                    }, this.infoShop.access_token, this.infoShop._id).then(array => {
                      console.log('updateSalesOrderLazada_byFile', array);
                      resolve(true);
                    }, error => {
                      console.log(error);
                    });
                  } else if (res.code == '9999') {
                    resolve(true);
                    this.vhComponent.alertMessageDesktop("error", this.lang.translate("Vui lòng kiểm tra lại thông tin hóa đơn đẩy lên CQT chưa phù hợp"));
                  } else if (res.code == '296') {
                    resolve(true);
                    this.vhComponent.alertMessageDesktop("error", this.lang.translate("Không thể gửi những hóa đơn có ngày lập hóa đơn nhỏ hơn ngày lập hóa đơn cuối cùng đã gửi lên Cơ quan thuế. <br> Nếu cần gửi những hóa đơn cũ hơn, bạn cần tắt cấu hình 'Sử dụng thời gian cập nhật trạng thái gần nhất của đơn hàng từ sàn để thiết lập ngày lập hóa đơn' trong Cài đặt"), 4000);
                  } else {
                    resolve(true);
                    this.vhComponent.alertMessageDesktop("error", this.lang.translate(res.message));
                  }
                }, error => {
                  invoice.isLoading = true;
                  this.vhComponent.alertMessageDesktop("error", this.lang.translate("Có lỗi xảy ra khi khởi tạo hóa đơn đẩy lên CQT"));
                  console.log('error', error);
                });
              } else {
                this.vhEinvoice.saveInvoice_noSign_byMinvoice(currentBranch.taxcode, currentBranch.einvoices[0].token, 1, rsp.data).then(res => {
                  console.log(res);
                  invoice.isLoading = false;

                  if (res.code == '00') {
                    invoice.cqt_status = 2;
                    invoice.status = this.lang.translate("Sent to CQT");
                    this.vhComponent.alertMessageDesktop("success", this.lang.translate('Update invoice to CQT successfully'));
                    this.vhQuerySales.updateSalesOrderLazada_byFile([invoice.order_id.toString()], {
                      cqt_status: 2
                    }, this.infoShop.access_token, this.infoShop._id).then(array => {
                      console.log('updateSalesOrderLazada_byFile', array);
                      resolve(true);
                    }, error => {
                      console.log(error);
                    });
                  } else if (res.code == '9999') {
                    resolve(true);
                    this.vhComponent.alertMessageDesktop("error", this.lang.translate("Vui lòng kiểm tra lại thông tin hóa đơn đẩy lên CQT chưa phù hợp"));
                  } else if (res.code == '296') {
                    resolve(true);
                    this.vhComponent.alertMessageDesktop("error", this.lang.translate("Không thể gửi những hóa đơn có ngày lập hóa đơn nhỏ hơn ngày lập hóa đơn cuối cùng đã gửi lên Cơ quan thuế. <br> Nếu cần gửi những hóa đơn cũ hơn, bạn cần tắt cấu hình 'Sử dụng thời gian cập nhật trạng thái gần nhất của đơn hàng từ sàn để thiết lập ngày lập hóa đơn' trong Cài đặt"), 4000);
                  } else {
                    resolve(true);
                    this.vhComponent.alertMessageDesktop("error", this.lang.translate(res.message));
                  }
                }, error => {
                  invoice.isLoading = true;
                  this.vhComponent.alertMessageDesktop("error", this.lang.translate("Có lỗi xảy ra khi khởi tạo hóa đơn đẩy lên CQT"));
                  console.log('error', error);
                });
              }
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
    });
  }
  /**
  * @example
  * this.vhQuerySales.changeLazada_toInvoice_byMinvoice(order, invoiceSeries)
    .then((rsp) => {
      //-----------your code here-----------
    },(error: any) => {
      console.log('error', error);
    });
      * @param order : hóa đơn lấy từ lazada về
  * @param invoiceSeries : ký hiệu hóa đơn
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
   *  - Lazada đã bao gồm thuế nên sẽ bỏ qua platformTax
   *  - Nếu KHÔNG bật cqt_vat_ecommerce_already_Included thì sẽ set mặc định là 0, bỏ qua platformTax
   *  - Trường hợp có bật cqt_vat_ecommerce_already_Included, thì phải tính lại Giá để total sau khi áp thuế (thuế từ phần cài đặt của app mình) và Chiết khấu là không thay đổi.
   *  - tchat2 và tchat3 thì discountAmount và discountPercentage sẽ = 0
   *  - Chiết khấu thương mại thì Thuế = 0
   *  - Combo sẽ không có trường hợp tất cả các sản phẩm bên trong có giá = 0 (đã bắt khi liên kết sản phẩm) nên có thể bỏ qua trường hợp này
   *  - Đối với combo liên kết, Trường hợp cqt_vat_ecommerce_by_linked_product thì bắt ở combo nhưng vẫn giữ code ở invoice_detail cha để logic không bị thay đổi. Trường hợp cqt_vat_ecommerce_already_Included thì bắt ở invoice_detail cha, không cần bắt ở combo nữa, vì khi chia ra tỷ lệ vẫn sẽ đảm bảo do đã tính ở cha
   */


  changeLazada_toInvoice_byMinvoice(order, invoiceSeries) {
    var _this2 = this;

    return new Promise( /*#__PURE__*/function () {
      var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
        var _a, _b;

        try {
          console.log('order', order); //Tách phần chi tiết hóa đơn của lazada ra, và gom những chi tiết hóa đơn giống nhau lại

          let order_details = [...order.order_items];

          for (let i = 0; i < order_details.length; i++) if (order_details[i].quantity == undefined) order_details[i].quantity = 1;

          ;

          for (let i = 0; i < order_details.length; i++) {
            if (order_details[i]) {
              let quantity = order_details[i].quantity;

              for (let j = i + 1; j < order_details.length; j++) {
                if (order_details[j] && order_details[i].sku_id === order_details[j].sku_id) {
                  if (order_details[i].item_price === order_details[j].item_price || order_details[i].paid_price === order_details[j].paid_price || order_details[i].voucher_amount === order_details[j].voucher_amount || order_details[i].shipping_amount === order_details[j].shipping_amount) {
                    quantity = quantity + order_details[j].quantity;
                    order_details[j] = null;
                  }
                }
              }

              order_details[i].quantity = quantity;
            }
          }

          order_details = order_details.filter(e => e != null);
          /* ---------------------------------------------------------- Khởi tạo invoice ---------------------------------------------------------- */

          let invoice = {
            inv_invoiceSeries: invoiceSeries,
            inv_invoiceIssuedDate: _this2.vhAlgorithm.formatDateToString(new Date()),
            inv_currencyCode: "VND",
            inv_exchangeRate: 1,
            inv_discountAmount: 0,
            inv_vatAmount: 0,
            inv_TotalAmountWithoutVat: 0,
            inv_TotalAmount: 0,
            key_api: order.order_id,
            so_benh_an: order.order_id
          };
          /* --------- Xử lý cqt_vat_ecommerce_use_latest_order_update_time thì lấy ngày cập nhật trạng thái gần nhất của đơn hàng từ sàn --------- */

          if (_this2.cqt_vat_ecommerce_use_latest_order_update_time) {
            invoice.inv_invoiceIssuedDate = _this2.vhAlgorithm.formatDateToString(new Date(order.updated_at));
          }
          /* --------------------------------------------------------- Thông tin người mua -------------------------------------------------------- */

          /** Tên người mua mặc định nếu không có thông tin trong hóa đơn */


          let buyerDisplayNameDefault = 'Người mua không lấy hóa đơn';
          /* ------ Xử lý cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an --------------------------------------------------------------- */
          // Nếu bật thì sẽ thành: Tên sàn - Người mua không lấy hóa đơn - Mã đơn hàng

          if (_this2.cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an) {
            buyerDisplayNameDefault = `Lazada - ${buyerDisplayNameDefault} - ${invoice.so_benh_an}`;
          }
          /* ------ Xử lý cqt_vat_ecommerce_default_payment_method_chuyen_khoan ------------------------------------------------------------------- */
          // Nếu có bật thì luôn là 'Chuyển khoản', nếu không thì sẽ lấy theo của đơn hàng


          if (_this2.cqt_vat_ecommerce_default_payment_method_chuyen_khoan) {
            invoice.inv_paymentMethodName = 'Chuyển khoản';
          } else {
            invoice.inv_paymentMethodName = order.payment_method == 'COD' ? 'Tiền mặt' : 'Chuyển khoản';
          }

          invoice.inv_buyerDisplayName = order.tax_buyerDisplayName ? order.tax_buyerDisplayName : buyerDisplayNameDefault;
          invoice.inv_buyerLegalName = order.tax_buyerLegalName ? order.tax_buyerLegalName : '';
          invoice.inv_buyerTaxCode = order.tax_buyerTaxCode ? order.tax_buyerTaxCode : '';
          invoice.inv_buyerAddressLine = order.tax_buyerAddressLine ? order.tax_buyerAddressLine : '';
          invoice.inv_buyerEmail = order.tax_buyerEmail ? order.tax_buyerEmail : '';
          /* ------------------------------------------------------ Tính toán invoice details ----------------------------------------------------- */

          /** Thuế của hóa đơn. Nếu KHÔNG bật cqt_vat_ecommerce_already_Included thì sẽ set mặc định là 0, bỏ qua platformTax */

          let billTax = 0; // nếu bật cqt_vat_ecommerce_already_Included thì lấy thuế từ cài đặt

          if (_this2.cqt_vat_ecommerce_already_Included) {
            billTax = _this2.cqt_vat_ecommerce_rate || 0;
          }
          /**------------Tạo chi tiết hóa đơn thuế----------------- */


          var invoice_details = new Array();

          for (let i = 0; i < order_details.length; i++) {
            /** Sản phẩm liên kết với sản phẩm của sàn */
            const productLinked = _this2.findProductLinked(order_details[i]); // Khởi tạo chi tiết hóa đơn


            let invoice_detail = _this2.billService.createEInvoiceDetailTemplate();
            /** Tính chất hàng hóa. Nếu inv_TotalAmountWithoutVat = 0 thì tchat = 2, nếu không thì tchat = 1 */


            const tchat = order_details[i].item_price * order_details[i].quantity - order_details[i].voucher_seller === 0 ? 2 : 1;
            /** Thuế của bill detail này. Nếu có sản phẩm liên kết và bật setting cqt_vat_ecommerce_by_linked_product thì sẽ lấy thuế từ sản phẩm liên kết, ngược lại thì vẫn lấy từ billTâx như cũ  */

            const invoiceDetailTax = _this2.cqt_vat_ecommerce_by_linked_product && productLinked && productLinked.tax !== undefined ? productLinked.tax : billTax; // Gán các giá trị chung

            invoice_detail.tchat = tchat;
            invoice_detail.stt_rec0 = invoice_details.length + 1;
            invoice_detail.inv_itemCode = order_details[i].sku_id;
            invoice_detail.inv_unitCode = 'Cái';
            invoice_detail.inv_quantity = order_details[i].quantity;
            invoice_detail.inv_unitPrice = order_details[i].item_price; // Giá bán sản phẩm trên sàn lazada (Đã bao gồm thuế)

            invoice_detail.ma_thue = invoiceDetailTax;
            /* ------ Xử lý tchat --------------------------------------------------------------------------- */

            if (tchat === 2) {
              // Gán lại tên
              invoice_detail.inv_itemName = 'Hàng khuyến mãi/hàng tặng ' + order_details[i].name; // Tính lại giá trị trợ giá (chiết khấu) của chi tiết hóa đơn trường hợp tchat2

              invoice_detail.inv_discountAmount = 0;
              /* ------ Xử lý cqt_vat_ecommerce_already_Included cqt_vat_ecommerce_by_linked_product --------- */

              if (_this2.cqt_vat_ecommerce_already_Included || _this2.cqt_vat_ecommerce_by_linked_product) {
                // Tính lại giá
                invoice_detail.inv_unitPrice = _this2.billService.calculateNewPriceToUseSettingTax(invoice_detail.inv_unitPrice, invoice_detail.inv_quantity, invoice_detail.inv_discountAmount, invoice_detail.ma_thue, 0);
              }
              /* ------ Xử lý Hàng khuyến mãi được phép xuất 0đ ----------------------------------------------- */
              // Nếu có bật cqt_vat_ecommerce_allow_promotional_items_zero_price và là tchat2 thì cần gán lại giá = 0, để các phép tính cho những trường khác bên dưới cũng sẽ tự tính = 0


              if (_this2.cqt_vat_ecommerce_allow_promotional_items_zero_price) {
                invoice_detail.inv_unitPrice = 0;
              }
              /* ------ Xử lý Vẫn giữ hàng xuất bán cho sản phẩm tặng/khuyến mãi khi gửi CQT ------------------ */
              // Nếu có bật cqt_vat_ecommerce_keep_promotional_items_as_sold và là tchat2 thì sẽ set lại nso thành tchat1, discountAmount và discountPercentage vẫn là 0


              if (_this2.cqt_vat_ecommerce_keep_promotional_items_as_sold) {
                // Gán lại tchat
                invoice_detail.tchat = 1; // Gán lại tchat thành 1
                // Gán lại tên

                invoice_detail.inv_itemName = order_details[i].name;
              } // Trợ giá (chiết khấu) tính theo %


              invoice_detail.inv_discountPercentage = 0;
            } else {
              // Gán lại tên
              invoice_detail.inv_itemName = order_details[i].name; // Trợ giá (chiết khấu) của nhà bán hàng trên mỗi chi tiết hóa đơn = seller discount (không lấy của sàn)

              invoice_detail.inv_discountAmount = order_details[i].voucher_seller;
              /* ------ Xử lý Giá hàng hóa, dịch vụ... gửi CQT là giá bán đã giảm ----------------------------------------- */

              if (_this2.cqt_vat_ecommerce_item_price_is_discounted) {
                // Gán lại thành giá đã giảm
                invoice_detail.inv_unitPrice = invoice_detail.inv_unitPrice - invoice_detail.inv_discountAmount / invoice_detail.inv_quantity; // Gán lại Chiết khấu = 0

                invoice_detail.inv_discountAmount = 0;
              }
              /* ------ Xử lý cqt_vat_ecommerce_already_Included cqt_vat_ecommerce_by_linked_product --------- */


              if (_this2.cqt_vat_ecommerce_already_Included || _this2.cqt_vat_ecommerce_by_linked_product) {
                // Tính lại giá
                invoice_detail.inv_unitPrice = _this2.billService.calculateNewPriceToUseSettingTax(invoice_detail.inv_unitPrice, invoice_detail.inv_quantity, invoice_detail.inv_discountAmount, invoice_detail.ma_thue, 0);
              } // Trợ giá (chiết khấu) tính theo %


              invoice_detail.inv_discountPercentage = invoice_detail.inv_discountAmount / (invoice_detail.inv_unitPrice * invoice_detail.inv_quantity) * 100;
            } //Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn


            invoice_detail.inv_TotalAmountWithoutVat = invoice_detail.inv_unitPrice * invoice_detail.inv_quantity - invoice_detail.inv_discountAmount; //Thuế VAT được tính theo chi tiết hóa đơn

            invoice_detail.inv_vatAmount = invoice_detail.inv_TotalAmountWithoutVat * invoice_detail.ma_thue / 100; //Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

            invoice_detail.inv_TotalAmount = invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_vatAmount; // Nếu như có liên kết

            if (productLinked) {
              // Nểu liên kết với sản phẩm
              if (productLinked.type === src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.PRODUCT) {
                // Thay đổi inv_itemName và inv_itemCode
                invoice_detail.inv_itemName = productLinked.name;
                /* ------ Xử lý cqt_vat_ecommerce_item_code_is_barcode ------------------------------------------ */

                if (_this2.cqt_vat_ecommerce_item_code_is_barcode) {
                  const barcode = (_a = _this2.vhQuerySales.getUnit_byRatio(productLinked.units, 1)) === null || _a === void 0 ? void 0 : _a.barcode; // Nếu có barcode thì dùng barcode

                  if (barcode) {
                    invoice_detail.inv_itemCode = barcode;
                  } // Nếu không có barcode thì thông báo
                  else {
                    _this2.vhComponent.hideLoading();

                    _this2.vhComponent.alertMessageDesktop("error", _this2.lang.translate("Gửi hóa đơn lên CQT thất bại. Hóa đơn có chứa sản phẩm chưa có mã vạch, vui lòng bổ sung và thử lại. Hoặc bỏ chọn cấu hình Mã sản phẩm khi xuất hóa đơn là mã vạch để tiếp tục"), 5000);

                    return;
                  }
                } else {
                  invoice_detail.inv_itemCode = productLinked.id_subproduct ? productLinked.id_subproduct : productLinked['_id'];
                } // Thêm vào mảng


                invoice_details = _this2.billService.addEInvoiceDetail(invoice_detail, invoice_details, {
                  cqt_vat_ecommerce_separate_discount_line: _this2.cqt_vat_ecommerce_separate_discount_line
                });
              } // Nếu liên kết với combo
              else if (productLinked.type === src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.COMBO) {
                const priceCombo = productLinked.units[0].price;

                if (priceCombo == 0) {
                  const errorZeroPriceComboMessage = _this2.lang.translate("Unable to issue the invoice because a linked combo product has a price of 0", {
                    invoice: order.order_id
                  });

                  _this2.vhComponent.hideLoading();

                  _this2.vhComponent.alertMessageDesktop("error", errorZeroPriceComboMessage);

                  return;
                } // loop qua combo rồi tính lại chi tiết hóa đơn


                for (let j = 0; j < productLinked.combos.length; j++) {
                  const combo = productLinked.combos[j]; // Khởi tạo chi tiết hóa đơn

                  let combo_detail = _this2.billService.createEInvoiceDetailTemplate();
                  /** Tỉ lệ phần trăm của giá sản phẩm và tổng giá combo */


                  const percentRate = combo.price * combo.quantity / priceCombo;
                  /** Tính chất hàng hóa. Nếu inv_TotalAmountWithoutVat = 0 thì tchat = 2, nếu không thì tchat = 1 */

                  const tchatCombo = !percentRate || combo.price == 0 || invoice_detail.inv_TotalAmountWithoutVat * percentRate == 0 ? 2 : 1;
                  /** Sản phẩm trong combo, get lại để lấy tax */

                  let detailproduct = _this2.vhQuerySales.getlocalDetailProduct(combo.id_subproduct ? combo.id_subproduct : combo.id_product);
                  /** Thuế của bill detail này. Nếu có sản phẩm liên kết và bật setting cqt_vat_ecommerce_by_linked_product thì sẽ lấy thuế từ sản phẩm liên kết, ngược lại thì vẫn lấy từ billTâx như cũ  */


                  const invoiceDetailComboTax = _this2.cqt_vat_ecommerce_by_linked_product && detailproduct && detailproduct.tax !== undefined ? detailproduct.tax : invoice_detail.ma_thue;
                  /** Đơn giá */

                  const unitPrice = (invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_discountAmount) * percentRate / (combo.quantity * invoice_detail.inv_quantity); // Gán các giá trị chung

                  combo_detail.tchat = tchatCombo;
                  combo_detail.stt_rec0 = invoice_details.length + 1;
                  combo_detail.inv_unitCode = 'Cái';
                  combo_detail.inv_quantity = combo.quantity * invoice_detail.inv_quantity;
                  combo_detail.inv_unitPrice = unitPrice; // Giá gốc bán sản phẩm trên sàn shopee

                  combo_detail.ma_thue = invoiceDetailComboTax;
                  /* ------ Xử lý cqt_vat_ecommerce_item_code_is_barcode ------------------------------------------ */

                  if (_this2.cqt_vat_ecommerce_item_code_is_barcode) {
                    const barcode = (_b = _this2.vhQuerySales.getUnit_byRatio(combo.units, combo.ratio)) === null || _b === void 0 ? void 0 : _b.barcode; // Nếu có barcode thì dùng barcode

                    if (barcode) {
                      combo_detail.inv_itemCode = barcode;
                    } // Nếu không có barcode thì thông báo
                    else {
                      _this2.vhComponent.hideLoading();

                      _this2.vhComponent.alertMessageDesktop("error", _this2.lang.translate("Gửi hóa đơn lên CQT thất bại. Hóa đơn có chứa sản phẩm chưa có mã vạch, vui lòng bổ sung và thử lại. Hoặc bỏ chọn cấu hình Mã sản phẩm khi xuất hóa đơn là mã vạch để tiếp tục"), 5000);

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

                    if (_this2.cqt_vat_ecommerce_by_linked_product) {
                      // Tính lại giá
                      combo_detail.inv_unitPrice = _this2.billService.calculateNewPriceToUseSettingTax(combo_detail.inv_unitPrice, combo_detail.inv_quantity, combo_detail.inv_discountAmount, combo_detail.ma_thue, 0);
                    }
                    /* ------ Xử lý Hàng khuyến mãi được phép xuất 0đ ----------------------------------------------- */
                    // Nếu có bật cqt_vat_ecommerce_allow_promotional_items_zero_price và là tchat2 thì cần gán lại giá = 0, để các phép tính cho những trường khác bên dưới cũng sẽ tự tính = 0


                    if (_this2.cqt_vat_ecommerce_allow_promotional_items_zero_price) {
                      combo_detail.inv_unitPrice = 0;
                    }
                    /* ------ Xử lý Vẫn giữ hàng xuất bán cho sản phẩm tặng/khuyến mãi khi gửi CQT ------------------ */
                    // Nếu có bật cqt_vat_ecommerce_keep_promotional_items_as_sold và là tchat2 thì sẽ set lại nso thành tchat1, discountAmount và discountPercentage vẫn là 0


                    if (_this2.cqt_vat_ecommerce_keep_promotional_items_as_sold) {
                      // Gán lại tchat
                      combo_detail.tchat = 1; // Gán lại tchat thành 1
                      // Gán lại tên

                      combo_detail.inv_itemName = combo.name;
                    } // Trợ giá (chiết khấu) tính theo %


                    combo_detail.inv_discountPercentage = 0;
                  } else {
                    // Gán lại tên
                    combo_detail.inv_itemName = combo.name; // Trợ giá (chiết khấu) của nhà bán hàng trên mỗi chi tiết hóa đơn = seller_discount + shopee_discount

                    combo_detail.inv_discountAmount = _this2.billService.roundTo4Decimal(invoice_detail.inv_discountAmount * percentRate);
                    /* ------ Xử lý Giá hàng hóa, dịch vụ... gửi CQT là giá bán đã giảm ----------------------------------------- */

                    if (_this2.cqt_vat_ecommerce_item_price_is_discounted) {
                      // Gán lại thành giá đã giảm
                      combo_detail.inv_unitPrice = combo_detail.inv_unitPrice - combo_detail.inv_discountAmount / combo_detail.inv_quantity; // Gán lại Chiết khấu = 0

                      combo_detail.inv_discountAmount = 0;
                    }
                    /* ------ Xử lý cqt_vat_ecommerce_by_linked_product --------- */


                    if (_this2.cqt_vat_ecommerce_by_linked_product) {
                      // Tính lại giá
                      combo_detail.inv_unitPrice = _this2.billService.calculateNewPriceToUseSettingTax(combo_detail.inv_unitPrice, combo_detail.inv_quantity, combo_detail.inv_discountAmount, combo_detail.ma_thue, 0);
                    } // Trợ giá (chiết khấu) tính theo %


                    combo_detail.inv_discountPercentage = combo_detail.inv_discountAmount / (combo_detail.inv_unitPrice * combo_detail.inv_quantity) * 100;
                  } // Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn


                  combo_detail.inv_TotalAmountWithoutVat = combo_detail.inv_unitPrice * combo_detail.inv_quantity - combo_detail.inv_discountAmount; // Thuế VAT được tính theo chi tiết hóa đơn

                  combo_detail.inv_vatAmount = combo_detail.inv_TotalAmountWithoutVat * combo_detail.ma_thue / 100; // Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

                  combo_detail.inv_TotalAmount = combo_detail.inv_TotalAmountWithoutVat + combo_detail.inv_vatAmount; // Thêm vào mảng

                  invoice_details = _this2.billService.addEInvoiceDetail(combo_detail, invoice_details, {
                    cqt_vat_ecommerce_separate_discount_line: _this2.cqt_vat_ecommerce_separate_discount_line
                  });
                }
              }
            } else {
              invoice_details = _this2.billService.addEInvoiceDetail(invoice_detail, invoice_details, {
                cqt_vat_ecommerce_separate_discount_line: _this2.cqt_vat_ecommerce_separate_discount_line
              });
            }
          }
          /* -------------------------- Tính chi phí vận chuyển, nếu có thì sinh ra một chi tiết hóa đơn "Phí vận chuyển" ------------------------- */
          // Phí ship người mua phải trả


          let shipping_paid_by_buyer = 0; // Phí ship người của được trở giá (người bán + lazada)

          let shipping_discount = 0;

          if (order.shipping_fee_original > 0) {
            shipping_discount = order.shipping_fee_discount_seller + order.shipping_fee_discount_platform;
            shipping_paid_by_buyer = order.shipping_fee_original - shipping_discount;
          }

          if (_this2.cqt_submit_invoice_with_shipping_fee && shipping_paid_by_buyer > 0) {
            // Khởi tạo chi tiết hóa đơn
            let invoice_detail = _this2.billService.createEInvoiceDetailTemplate(); // Gán các giá trị chung


            invoice_detail.tchat = 1; // Tính chất hàng hóa

            invoice_detail.stt_rec0 = invoice_details.length + 1;
            invoice_detail.inv_itemCode = 'phi_van_chuyen';
            invoice_detail.inv_itemName = 'Phí vận chuyển';
            invoice_detail.inv_unitCode = 'Lần';
            invoice_detail.inv_quantity = 1;
            invoice_detail.inv_unitPrice = order.shipping_fee_original; // Giá gốc vận chuyển

            invoice_detail.inv_discountAmount = shipping_discount; // Trợ giá (chiết khấu) của chi tiết hóa đơn

            invoice_detail.inv_TotalAmountWithoutVat = shipping_paid_by_buyer; // Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn

            invoice_detail.ma_thue = billTax; // Lấy thuế cao nhất trong thuế của danh sách chi tiết hóa đơn

            /* ------ Xử lý cqt_vat_ecommerce_already_Included ---------------------------------------------- */

            if (_this2.cqt_vat_ecommerce_already_Included) {
              // Tính lại giá
              invoice_detail.inv_unitPrice = _this2.billService.calculateNewPriceToUseSettingTax(invoice_detail.inv_unitPrice, invoice_detail.inv_quantity, invoice_detail.inv_discountAmount, invoice_detail.ma_thue, 0);
            } // Trợ giá (chiết khấu) tính theo %


            invoice_detail.inv_discountPercentage = invoice_detail.inv_discountAmount / (invoice_detail.inv_unitPrice * invoice_detail.inv_quantity) * 100; // Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn

            invoice_detail.inv_TotalAmountWithoutVat = invoice_detail.inv_unitPrice - invoice_detail.inv_discountAmount; // Thuế VAT được tính theo chi tiết hóa đơn

            invoice_detail.inv_vatAmount = invoice_detail.inv_TotalAmountWithoutVat * invoice_detail.ma_thue / 100; // Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

            invoice_detail.inv_TotalAmount = invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_vatAmount; // Thêm vào mảng

            invoice_details = _this2.billService.addEInvoiceDetail(invoice_detail, invoice_details, {
              cqt_vat_ecommerce_separate_discount_line: _this2.cqt_vat_ecommerce_separate_discount_line
            });
          } // tính phí giao dịch


          if (_this2.cqt_submit_invoice_with_ecommerce_fee) {
            /** Tổng tiền giảm giá (Tổng tiền chiết khấu) */
            let totalDiscountAmount = 0;
            const startTime = new Date(order.created_at);
            const endTime = new Date();
            const json = {
              start_time: startTime,
              end_time: endTime,
              limit: 100,
              offset: 0,
              trade_order_id: order.order_id,
              trans_type: -1
            };
            const listFee = yield _this2.vhQuerySales.getTransactionDetailsLazada(json, _this2.infoShop['access_token']);

            const phi_co_dinh = _this2.calculateTotalFee(listFee, 'Commission');

            const phi_xu_ly_don_hang = _this2.calculateTotalFee(listFee, 'Payment Fee');

            const ecommerce_fee = phi_co_dinh + phi_xu_ly_don_hang;
            totalDiscountAmount += ecommerce_fee;
            /** Tiền thuế */

            const vatAmount = 0; // Không có thuế cho chiết khấu thương mại
            // Khởi tạo chi tiết hóa đơn

            let invoice_detail = _this2.billService.createEInvoiceDetailTemplate(); // Gán các giá trị chung


            invoice_detail.tchat = 3;
            invoice_detail.stt_rec0 = invoice_details.length + 1;
            invoice_detail.inv_itemCode = 'chiet_khau_thuong_mai';
            invoice_detail.inv_itemName = 'Chiết khấu thương mại';
            invoice_detail.inv_unitCode = 'Phần';
            invoice_detail.inv_quantity = 1;
            invoice_detail.inv_unitPrice = totalDiscountAmount;
            invoice_detail.inv_TotalAmountWithoutVat = totalDiscountAmount;
            invoice_detail.ma_thue = 0; // Không có thuế cho chiết khấu thương mại

            invoice_detail.inv_vatAmount = vatAmount;
            invoice_detail.inv_TotalAmount = totalDiscountAmount + vatAmount; // Thêm vào mảng

            invoice_details = _this2.billService.addEInvoiceDetail(invoice_detail, invoice_details, {
              cqt_vat_ecommerce_separate_discount_line: _this2.cqt_vat_ecommerce_separate_discount_line
            });
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
          } //Hóa đơn điện tử thuế gồm 2 phần hóa đơn + chi tiết hóa đơn


          let invoices = [Object.assign(Object.assign({}, invoice), {
            details: [{
              data: invoice_details
            }]
          })];
          console.log('invoices', invoices);
          resolve({
            vcode: 0,
            msg: 'success',
            data: invoices
          });
        } catch (err) {
          console.error('❌ Lỗi changeLazada_toInvoice_byMinvoice:', err);
          reject(err);
        }
      });

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  getGroupedItemsCached(orderItems) {
    const key = JSON.stringify(orderItems);

    if (!this.groupedItemsMap.has(key)) {
      const filtered = orderItems.filter(e => !e.reason || e.status == 'delivered');
      const grouped = new Map();

      for (const item of filtered) {
        if (grouped.has(item.sku_id)) {
          grouped.get(item.sku_id).quantity += 1;
        } else {
          grouped.set(item.sku_id, {
            sku_id: Number(item.sku_id),
            name: item.name,
            quantity: 1
          });
        }
      }

      this.groupedItemsMap.set(key, Array.from(grouped.values()));
    }

    return this.groupedItemsMap.get(key);
  }

  findProductLinked(item) {
    for (let productOfBranch of this.listProductOfBranch) {
      for (let productLazada of productOfBranch[this.id_branch].lazadas) {
        let findProd = productLazada.skus.find(sku => sku.SkuId == item.sku_id);

        if (findProd) {
          return productOfBranch;
        }
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
      for (let productLazada of productOfBranch[this.id_branch].lazadas) {
        let findProd = productLazada.skus.find(sku => sku.SkuId == item.sku_id);

        if (findProd) {
          return true;
        }
      }
    }

    ;
    return false;
  }

  openModelSelectProductsLazada(productLazada) {
    this.productLazadaSelected = productLazada;
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
    const isZeroPriceCombo = product.type == src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.COMBO && product.units[0].price == 0;
    const confirmZeroPriceComboMessage = this.lang.translate("This product is a combo with a price of 0. Do you still want to link it with the product", {
      platform: 'Lazada'
    }) + "?";
    this.modal.confirm({
      nzTitle: '<i>' + (isZeroPriceCombo ? confirmZeroPriceComboMessage : this.lang.translate("Confirm")) + '</i>',
      nzIconType: "info-circle",
      nzCancelText: this.lang.translate("Cancel"),
      nzOnOk: () => {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
          var _a; // Tìm sản phẩm lazada theo sku_id


          const selectedSkuId = (_a = this.productLazadaSelected) === null || _a === void 0 ? void 0 : _a.sku_id;
          const matchedProduct = this.listProductLazada.find(product => {
            var _a;

            return (_a = product.skus) === null || _a === void 0 ? void 0 : _a.some(sku => sku.SkuId == selectedSkuId);
          });
          const id_product_selected = product.id_subproduct ? product.id_subproduct : product['_id'];
          let productLazada = {
            id_shop: this.infoShop._id,
            item_id: matchedProduct.item_id,
            SkuIds: [{
              SkuId: this.productLazadaSelected.sku_id
            }]
          };
          this.vhQuerySales.addMergeLazadasProduct_skus(id_product_selected, productLazada.item_id, productLazada.SkuIds, this.infoShop['_id']).then(bool => {
            this.vhComponent.hideLoading().then(() => {
              setTimeout(() => {
                this.visible_affiliate = false;
                this.listProductOfBranch = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].lazadas && item[this.id_branch].lazadas.length >= 0);
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

  normalizeVietnamTaxPercent(itemPrice, taxAmount) {
    if (itemPrice === 0) return 0;
    const calculatedPercent = taxAmount / itemPrice * 100;
    if (calculatedPercent <= 5) return 5;
    if (calculatedPercent > 5 && calculatedPercent <= 7) return 7;
    return 10;
  }

  calculateTotalFee(data, typeFee) {
    return data.filter(item => item.fee_name === typeFee).map(item => {
      // Remove commas and convert to a number
      const rawAmount = item.amount.replace(/,/g, '');
      return Math.abs(parseFloat(rawAmount));
    }).reduce((total, amount) => total + amount, 0);
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

    return (_c = (_b = (_a = this.salesOrder) === null || _a === void 0 ? void 0 : _a.filter(e => e.checked)) === null || _b === void 0 ? void 0 : _b.filter(data => !data.cqt_status || data.cqt_status == 1)) === null || _c === void 0 ? void 0 : _c.length;
  }
  /**
   * Lấy ngày cập nhật của đơn hàng theo định dạng 2025-06-25
   */


  getUpdateTimeFormat(order) {
    return this.vhAlgorithm.formatDateToString(new Date(order.updated_at));
  }
  /**
   * Xuất danh sách đang hiện trên table ra file excel
   */


  exportExcel() {
    var _a, _b;

    if (!this.salesOrder || !this.salesOrder.length) return; // Lặp qua danh sách hóa đơn

    const XLSXData = this.salesOrder.reduce((acc, order) => {
      if (!order || !order.order_items || !order.order_items.length) return acc; // Mỗi item trong order_items sẽ thành 1 row

      const rows = order.order_items.map(item => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;

        return {
          'orderItemId': ((_a = item.order_item_id) === null || _a === void 0 ? void 0 : _a.toString()) || '',
          'orderType': item.order_flag || '',
          'deliveryType': ((_b = item.shipping_provider_type) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || '',
          'lazadaId': ((_c = item.order_item_id) === null || _c === void 0 ? void 0 : _c.toString()) || '',
          'sellerSku': item.sku || '',
          'lazadaSku': item.shop_sku || '',
          'createTime': this.datePipe.transform(item.created_at, 'yyyy-MM-dd HH:mm') || '',
          'updateTime': this.datePipe.transform(item.updated_at, 'yyyy-MM-dd HH:mm') || '',
          'ttsSla': item.sla_time_stamp || '',
          'orderNumber': ((_d = item.order_id) === null || _d === void 0 ? void 0 : _d.toString()) || '',
          'invoiceRequired': !((_e = JSON.parse(order === null || order === void 0 ? void 0 : order.extra_attributes)) === null || _e === void 0 ? void 0 : _e.TaxInvoiceRequested) ? 'No' : 'Yes',
          'invoiceNumber': item.invoice_number || '',
          'customerName': ((_f = order.customer_first_name + ' ' + order.customer_last_name) === null || _f === void 0 ? void 0 : _f.trim()) || '',
          'nationalRegistrationNumber': order.national_registration_number || '',
          'shippingName': ((_g = order.address_shipping.first_name + ' ' + order.address_shipping.last_name) === null || _g === void 0 ? void 0 : _g.trim()) || '',
          'shippingAddress': order.address_shipping.address1 || '',
          'shippingAddress2': order.address_shipping.address2 || '',
          'shippingAddress3': order.address_shipping.address3 || '',
          'shippingAddress4': order.address_shipping.address4 || '',
          'shippingAddress5': order.address_shipping.address5 || '',
          'shippingPhone': order.address_shipping.phone || '',
          'shippingPhone2': order.address_shipping.phone2 || '',
          'shippingCity': order.address_shipping.city || '',
          'shippingPostCode': order.address_shipping.post_code || '',
          'shippingCountry': order.address_shipping.country || '',
          'billingName': ((_h = order.address_billing.first_name + ' ' + order.address_billing.last_name) === null || _h === void 0 ? void 0 : _h.trim()) || '',
          'billingAddr': order.address_billing.address1 || '',
          'billingAddr2': order.address_billing.address2 || '',
          'billingAddr3': order.address_billing.address3 || '',
          'billingAddr4': order.address_billing.address4 || '',
          'billingAddr5': order.address_billing.address5 || '',
          'billingPhone': order.address_billing.phone || '',
          'billingPhone2': order.address_billing.phone2 || '',
          'billingCity': order.address_billing.city || '',
          'billingPostCode': order.address_billing.post_code || '',
          'billingCountry': order.address_billing.country || '',
          'taxCode': order.tax_code || '',
          'branchNumber': order.branch_number || '',
          'taxInvoiceRequested': (_j = JSON.parse(order === null || order === void 0 ? void 0 : order.extra_attributes)) === null || _j === void 0 ? void 0 : _j.TaxInvoiceRequested,
          'payMethod': order.payment_method || '',
          'paidPrice': item.paid_price || '',
          'unitPrice': item.item_price || '',
          'sellerDiscountTotal': -item.voucher_seller || '',
          'shippingFee': item.shipping_amount || '',
          'walletCredit': item.wallet_credits || '',
          'itemName': item.name || '',
          'variation': item.variation || '',
          'shippingProvider': ((_m = (_l = (_k = item === null || item === void 0 ? void 0 : item.shipment_provider) === null || _k === void 0 ? void 0 : _k.split(',')[1]) === null || _l === void 0 ? void 0 : _l.split(':')[1]) === null || _m === void 0 ? void 0 : _m.trim()) || '',
          'shipmentTypeName': item.shipping_type || '',
          'shippingProviderType': ((_o = item.shipping_provider_type) === null || _o === void 0 ? void 0 : _o.toUpperCase()) || '',
          'trackingCode': item.tracking_code || '',
          'shippingProviderFM': ((_p = item === null || item === void 0 ? void 0 : item.shipment_provider) === null || _p === void 0 ? void 0 : _p.split(',')[0]) || '',
          'status': item.status || '',
          'semi_managed': item.semi_managed
        };
      });
      return acc.concat(rows);
    }, []); // Xử lý tên file, sẽ có dạng Order.{status}.{startDate}_{endDate}.xlsx

    const statusName = this.vhAlgorithm.changeAlias(((_b = (_a = this.list_status_bill[this.selectedIndex]) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.toLowerCase().replace(/ /g, '')) || 'all');
    const startDate = this.vhAlgorithm.formatDateToString(this.date[0]).replace(/-/g, '');
    const endDate = this.vhAlgorithm.formatDateToString(this.date[1]).replace(/-/g, '');
    const nameFile = `Order.${statusName}.${startDate}_${endDate}`;
    this.vhAlgorithm.exportXLSX(XLSXData, nameFile).then(() => {
      console.log('Xuất file Excel thành công:', nameFile);
    }).catch(err => {
      console.error('Lỗi xuất file Excel:', err);
    });
  }

}

EInvoiceLazadaComponent.ɵfac = function EInvoiceLazadaComponent_Factory(t) {
  return new (t || EInvoiceLazadaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_11__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhEinvoice), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhEcommerce), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_bill_service__WEBPACK_IMPORTED_MODULE_4__.BillService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_print_service__WEBPACK_IMPORTED_MODULE_5__.PrintService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe));
};

EInvoiceLazadaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: EInvoiceLazadaComponent,
  selectors: [["app-e-invoice-lazada"]],
  decls: 40,
  vars: 35,
  consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "order-status-lazada"], ["nz-row", "", "nzGutter", "4", 1, "order-status-lazada-header"], ["nz-col", "", "nzSpan", "6", 1, "title"], [1, "color-green"], ["nz-col", "", "nzSpan", "6", 1, "title", "center-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "6"], ["nzFormat", "dd/MM/yyyy", "nzFormat", "dd/MM/yyyy", 3, "nzDisabledDate", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "click"], ["src", "assets/icon/management/view.svg"], ["nz-row", "", "nzGutter", "16", "class", "order-status-lazada-body", 4, "ngIf", "ngIfElse"], ["no_data", ""], ["ecommerce_platform", "lazada", 3, "invoice", "infoShop", "onClose", "onOk", 4, "ngIf"], [3, "title", "visible_affiliate", "listProductApp", "searchProductAppValue", "cancelAffiliate", "searchProductApp", "acceptAfiliate"], ["nz-icon", "", "nzType", "search"], ["nz-row", "", "nzGutter", "16", 1, "order-status-lazada-body"], ["nz-col", "", "nzSpan", "24"], [3, "nzSelectedIndex", "nzSelectedIndexChange", "nzSelectChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle", 4, "ngIf"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzPageSize", "nzPageSizeOptions", 4, "ngIf", "ngIfElse"], ["class", "full-height"], ["no_bill", ""], [3, "nzTitle"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzPageSize", "nzPageSizeOptions"], ["salesOrder_show", ""], ["nzAlign", "center", "nzWidth", "6%"], ["nzLeft", "", "nzWidth", "17%"], ["nzWidth", "15%"], ["nzAlign", "left", 2, "cursor", "pointer", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "17%", 2, "text-align", "right"], ["nzAlign", "center", 3, "nzChecked", "nzIndeterminate", "nzCheckedChange"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], ["nzAlign", "center"], ["nzLeft", ""], ["target", "_blank", 3, "href"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click"], ["style", "font-size: 0.8rem;", 3, "color", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 3, "nzTooltipTitle", 4, "ngIf"], [4, "ngIf"], [2, "text-align", "right"], ["nzAlign", "center", 3, "click"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 1, "cus-icon", 2, "cursor", "pointer", "margin-right", "10px", 3, "click"], ["nz-button", "", "nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [2, "font-size", "0.8rem"], ["class", "icon-link green", "nz-icon", "", "nzType", "link", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "link", "nzTheme", "outline", 1, "icon-link", "green", 3, "click"], ["nz-tooltip", "", 3, "nzTooltipTitle"], [4, "ngIf", "ngIfElse"], ["multiStatus", ""], [2, "color", "var(--ion-color-vh-green)"], [2, "color", "var(--ion-color-vh-red)"], ["nz-tooltip", "", "nz-icon", "", 1, "ant-input-password-icon", 3, "nzTooltipTitle", "nzType", "click"], ["nz-button", "", "nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["nz-row", "", 1, "no-affiliate"], ["nz-col", "", "nzSpan", "24", 1, "text-center"], ["src", "assets/icon/management/ecommerce/no-data-orderstatus.svg", "alt", ""], ["ecommerce_platform", "lazada", 3, "invoice", "infoShop", "onClose", "onOk"]],
  template: function EInvoiceLazadaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_Template_div_click_0_listener() {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EInvoiceLazadaComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.searchValue = $event;
      })("ngModelChange", function EInvoiceLazadaComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.search($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, EInvoiceLazadaComponent_ng_template_19_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "nz-range-picker", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EInvoiceLazadaComponent_Template_nz_range_picker_ngModelChange_22_listener($event) {
        return ctx.date = $event;
      })("ngModelChange", function EInvoiceLazadaComponent_Template_nz_range_picker_ngModelChange_22_listener($event) {
        return ctx.changeTime($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_Template_button_click_24_listener() {
        return ctx.showReport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_Template_button_click_28_listener() {
        return ctx.sendCQT();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceLazadaComponent_Template_button_click_31_listener() {
        return ctx.exportExcel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, EInvoiceLazadaComponent_div_34_Template, 8, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, EInvoiceLazadaComponent_ng_template_35_Template, 6, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, EInvoiceLazadaComponent_app_edit_customer_tax_37_Template, 1, 2, "app-edit-customer-tax", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "app-modal-link-product-ecommerce", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancelAffiliate", function EInvoiceLazadaComponent_Template_app_modal_link_product_ecommerce_cancelAffiliate_38_listener() {
        return ctx.cancelAffiliate();
      })("searchProductApp", function EInvoiceLazadaComponent_Template_app_modal_link_product_ecommerce_searchProductApp_38_listener($event) {
        return ctx.searchProductApp($event);
      })("acceptAfiliate", function EInvoiceLazadaComponent_Template_app_modal_link_product_ecommerce_acceptAfiliate_38_listener($event) {
        return ctx.acceptAfiliate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](20);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](36);

      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 19, "Back"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](9, 21, "Xu\u1EA5t h\u00F3a \u0111\u01A1n \u0111i\u1EC7n t\u1EED t\u1EEB s\u00E0n"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 23, "Shop name"), ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.infoShop.data == null ? null : ctx.infoShop.data.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzSuffix", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.searchValue)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 25, "T\u00ECm m\u00E3 \u0111\u01A1n h\u00E0ng (ph\u00E2n t\u00E1ch b\u1EDFi d\u1EA5u ph\u1EA9y)"));
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzDisabledDate", ctx.disabledDate)("ngModel", ctx.date);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](27, 27, "View"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](30, 29, "G\u1EEDi CQT"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 31, "Xu\u1EA5t Excel"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.load_status)("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isShowModalEditCustomerTax);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 33, "Select Lazada linked products"))("visible_affiliate", ctx.visible_affiliate)("listProductApp", ctx.listProductApp)("searchProductAppValue", ctx.searchProductAppValue);
    }
  },
  directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _components_modal_link_product_ecommerce_modal_link_product_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__.ModalLinkProductEcommerceComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__.NzTabSetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__.NzTabComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzCellFixedDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzThSelectionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTbodyComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__.NzTooltipDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_26__.NzCheckboxComponent, _components_edit_customer_tax_edit_customer_tax_component__WEBPACK_IMPORTED_MODULE_7__.EditCustomerTaxComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .order-status-lazada-header[_ngcontent-%COMP%] {\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .order-status-lazada-header[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25vh;\n  max-width: 250px;\n  height: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-black);\n  margin-top: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-link[_ngcontent-%COMP%] {\n  padding: 1px;\n  font-size: 12px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-link.green[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n  color: var(--ion-color-vh-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtaW52b2ljZS1sYXphZGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQURJO0VBSUksbUJBQUE7QUFBUjtBQUhRO0VBQ0ksVUFBQTtBQUtaO0FBREk7RUFDSSxpRUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUdSO0FBRlE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBSVo7QUFESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQUZRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUlaO0FBRlE7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUlaO0FBRlE7RUFDSSxrQkFBQTtBQUlaO0FBQUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVSO0FBQUk7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0FBRVIiLCJmaWxlIjoiZS1pbnZvaWNlLWxhemFkYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm9yZGVyLXN0YXR1cy1sYXphZGEtaGVhZGVyIHtcclxuICAgICAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0bi12aWV3IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubm8tYWZmaWxpYXRlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXZoO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaWNvbi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1saW5rLmdyZWVuIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 58085:
/*!************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/lazada/e-invoice-lazada/e-invoice-lazada.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceLazadaModule": () => (/* binding */ EInvoiceLazadaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/menu/manage/ecommerce/components/modal-link-product-ecommerce/modal-link-product-ecommerce.module */ 14774);
/* harmony import */ var _e_invoice_lazada_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./e-invoice-lazada.component */ 72938);
/* harmony import */ var src_app_sales_menu_manage_ecommerce_components_edit_customer_tax_edit_customer_tax_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/menu/manage/ecommerce/components/edit-customer-tax/edit-customer-tax.module */ 52701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);











const routes = [
    {
        path: "",
        component: _e_invoice_lazada_component__WEBPACK_IMPORTED_MODULE_2__.EInvoiceLazadaComponent
    },
];
class EInvoiceLazadaModule {
}
EInvoiceLazadaModule.ɵfac = function EInvoiceLazadaModule_Factory(t) { return new (t || EInvoiceLazadaModule)(); };
EInvoiceLazadaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EInvoiceLazadaModule });
EInvoiceLazadaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_sales_menu_manage_ecommerce_components_edit_customer_tax_edit_customer_tax_module__WEBPACK_IMPORTED_MODULE_3__.EditCustomerTaxModule,
            src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_1__.ModalLinkProductEcommerceModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EInvoiceLazadaModule, { declarations: [_e_invoice_lazada_component__WEBPACK_IMPORTED_MODULE_2__.EInvoiceLazadaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        src_app_sales_menu_manage_ecommerce_components_edit_customer_tax_edit_customer_tax_module__WEBPACK_IMPORTED_MODULE_3__.EditCustomerTaxModule,
        src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_1__.ModalLinkProductEcommerceModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_lazada_e-invoice-lazada_e-invoice-lazada_module_ts.js.map