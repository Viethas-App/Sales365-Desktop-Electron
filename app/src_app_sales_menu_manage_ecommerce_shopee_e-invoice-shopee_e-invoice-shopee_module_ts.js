"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_shopee_e-invoice-shopee_e-invoice-shopee_module_ts"],{

/***/ 58575:
/*!***************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/e-invoice-shopee/e-invoice-shopee.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceShopeeComponent": () => (/* binding */ EInvoiceShopeeComponent)
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





























function EInvoiceShopeeComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "i", 19);
  }
}

function EInvoiceShopeeComponent_div_34_nz_tab_3_Template(rf, ctx) {
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

function EInvoiceShopeeComponent_div_34_nz_tab_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "nz-tab", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "translate");
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, "Other"), " (", ctx_r7.orderOthersCountByStatus, ")");
  }
}

function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_10_i_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_10_i_2_Template_i_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      $event.stopPropagation();
      return ctx_r23.openModelSelectProductsShopee(item_r21);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_10_i_2_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("color", ctx_r16.isLinkedToProduct(item_r21) ? "" : "var(--ion-color-vh-red)");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", ctx_r16.isLinkedToProduct(item_r21) ? (tmp_1_0 = ctx_r16.findProductLinked(item_r21)) == null ? null : tmp_1_0.name : item_r21.item_name, " (SL :", item_r21.model_quantity_purchased, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r16.isLinkedToProduct(item_r21));
  }
}

function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_16_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const bill_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return ctx_r26.printService.viewEInvoice(ctx_r26.infoBranch, {
        _id: bill_r14.order_sn
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

function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_17_Template_span_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30);
      const bill_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return ctx_r29.printService.viewEInvoice(ctx_r29.infoBranch, {
        _id: bill_r14.order_sn
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

function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_18_Template(rf, ctx) {
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

function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_label_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_label_24_Template_label_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      const bill_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      return bill_r14.checked = $event;
    })("ngModelChange", function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_label_24_Template_label_ngModelChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
      return ctx_r35.refreshStatus();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const bill_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", bill_r14.checked);
  }
}

function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const bill_r14 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r37.gotoDetail(bill_r14);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_Template_i_click_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const bill_r14 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return ctx_r39.vhComponent.copyValue(bill_r14.order_sn);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_10_Template, 4, 5, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_16_Template, 5, 7, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_17_Template, 5, 7, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_span_18_Template, 3, 3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_Template_td_click_22_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_Template_i_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38);
      const bill_r14 = restoredCtx.$implicit;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r41.editTax(bill_r14);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_label_24_Template, 1, 1, "label", 49);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 11, bill_r14.create_at, "dd/MM/yyyy HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", bill_r14.order_sn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", bill_r14.item_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzTooltipTitle", ctx_r13.getUpdateTimeFormat(bill_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 14, bill_r14.order_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
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

function EInvoiceShopeeComponent_div_34_nz_table_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_div_34_nz_table_5_Template_th_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      ctx_r42.statusCol = !ctx_r42.statusCol;
      return ctx_r42.sortTable("status");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzCheckedChange", function EInvoiceShopeeComponent_div_34_nz_table_5_Template_th_nzCheckedChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r44.allChecked = $event;
    })("nzCheckedChange", function EInvoiceShopeeComponent_div_34_nz_table_5_Template_th_nzCheckedChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r43);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r45.checkAll($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](36, EInvoiceShopeeComponent_div_34_nz_table_5_tr_36_Template, 25, 16, "tr", 38);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 24, "Status on Shopee"));
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

function EInvoiceShopeeComponent_div_34_ng_template_6_Template(rf, ctx) {
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

function EInvoiceShopeeComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "nz-tabset", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("nzSelectedIndexChange", function EInvoiceShopeeComponent_div_34_Template_nz_tabset_nzSelectedIndexChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r46.selectedIndex = $event;
    })("nzSelectChange", function EInvoiceShopeeComponent_div_34_Template_nz_tabset_nzSelectChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r48.segmentChanged($event.index);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, EInvoiceShopeeComponent_div_34_nz_tab_3_Template, 2, 4, "nz-tab", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, EInvoiceShopeeComponent_div_34_nz_tab_4_Template, 2, 4, "nz-tab", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, EInvoiceShopeeComponent_div_34_nz_table_5_Template, 37, 33, "nz-table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, EInvoiceShopeeComponent_div_34_ng_template_6_Template, 4, 3, "ng-template", 26, 27, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
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

function EInvoiceShopeeComponent_ng_template_35_Template(rf, ctx) {
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

function EInvoiceShopeeComponent_app_edit_customer_tax_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-edit-customer-tax", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClose", function EInvoiceShopeeComponent_app_edit_customer_tax_37_Template_app_edit_customer_tax_onClose_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r49.isShowModalEditCustomerTax = false;
    })("onOk", function EInvoiceShopeeComponent_app_edit_customer_tax_37_Template_app_edit_customer_tax_onOk_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      ctx_r51.isShowModalEditCustomerTax = false;
      return ctx_r51.onOkEditTax($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("invoice", ctx_r5.tempCustomerTax)("infoShop", ctx_r5.infoShop);
  }
}

class EInvoiceShopeeComponent {
  constructor(router, lang, vhComponent, vhAlgorithm, vhQuerySales, cdRef, datePipe, vhEcommerce, vhAuth, vhQuery, vhEinvoice, nzModalService, billService, printService) {
    var _a;

    this.router = router;
    this.lang = lang;
    this.vhComponent = vhComponent;
    this.vhAlgorithm = vhAlgorithm;
    this.vhQuerySales = vhQuerySales;
    this.cdRef = cdRef;
    this.datePipe = datePipe;
    this.vhEcommerce = vhEcommerce;
    this.vhAuth = vhAuth;
    this.vhQuery = vhQuery;
    this.vhEinvoice = vhEinvoice;
    this.nzModalService = nzModalService;
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
      value: "ALL"
    }, {
      name: "Wait for confirmation",
      value: "UNPAID"
    }, {
      name: "Chờ lấy hàng",
      value: "READY_TO_SHIP",
      value2: "PROCESSED"
    }, {
      name: "Shipping",
      value: "SHIPPED",
      value2: "RETRY_SHIP"
    }, {
      name: "Delivered",
      value: "TO_CONFIRM_RECEIVE"
    }, {
      name: "Hoàn tất",
      value: "COMPLETED"
    }, {
      name: "Đã hủy",
      value: "IN_CANCEL",
      value2: "CANCELLED"
    }, {
      name: "Trả hàng",
      value: "TO_RETURN"
    }];
    this.date = [new Date(), new Date()];
    this.load_status = false;
    /**Giới hạn thời gian cho xem bill */

    this.disabledDate = current => {
      // if (current.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime() - 24 * 60 * 60 * 1000) return true;
      return false; //  return true;
    };

    this.listAddress = [];
    this.listTimes = [];
    this.infoShop = {};
    this.listProductOfBranch = []; // sp của phần mềm có liên kết với sp shopee

    this.listProductApp = []; // sp trong phần mềm chứa shopee[]

    this.listSubProductApp = []; //sp của app để search

    this.listProductShopee = []; // sp của shopee

    this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
    this.infoBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id);
    /** Map chứa số lượng đơn hàng theo trạng thái */

    this.orderCountByStatus = {
      "All": 0,
      "Wait for confirmation": 0,
      "Chờ lấy hàng": 0,
      "Shipping": 0,
      "Delivered": 0,
      "Hoàn tất": 0,
      "Đã hủy": 0,
      "Trả hàng": 0
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
    /** Có hiển thị modal chỉnh sửa customer tax hay không */

    this.isShowModalEditCustomerTax = false;
    this.tempCustomerTax = null;
    this.visible_affiliate = false;
    this.productShopeeSelected = null;
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

    this.infoShop = this.vhEcommerce.getlocalShopListShopee()[0];
    this.listProductOfBranch = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].shopees && item[this.id_branch].shopees.length >= 0);
    let localProducts = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden);
    this.listProductApp = localProducts.map(item => {
      let unit = this.vhQuerySales.getUnit_byRatio(item.units, 1);

      if (item[this.id_branch] && item[this.id_branch].shopees && item[this.id_branch].shopees.length) {
        //filter những sp shopee thuộc id shopee đã chọn
        item[this.id_branch].product_shopees = [...item[this.id_branch].shopees.filter(prod => prod.id_shop == this.infoShop._id)];
      }

      return Object.assign(Object.assign({}, item), unit);
    });
    this.listSubProductApp = [...this.listProductApp];
    this.listProductShopee = this.clearProductShow(this.vhEcommerce.getlocalProductListShopee(this.infoShop['_id']).filter(item => item.item_status == 'NORMAL'), this.listProductApp);
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
      // search theo order_sn
      this.salesOrder = this.salesOrder.filter(item => {
        return valArray.some(val => {
          var _a, _b;

          return (_b = this.vhAlgorithm.changeAlias((_a = item === null || item === void 0 ? void 0 : item.order_sn) === null || _a === void 0 ? void 0 : _a.toString())) === null || _b === void 0 ? void 0 : _b.includes(val);
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
    // Nếu chọn tab Khác thì hiện những đơn không có trong danh sách trạng thái
    if (event === this.list_status_bill.length) {
      this.salesOrder = this.salesSubOrder.filter(item => {
        return !this.list_status_bill.some(status => status.value === item.order_status || status.value2 === item.order_status);
      });
      return;
    }

    if (event == 0) this.salesOrder = this.salesSubOrder;else this.salesOrder = this.salesSubOrder.filter(item => item.order_status == this.list_status_bill[event].value || item.order_status == this.list_status_bill[event].value2);
  }
  /**
   * Đếm số lượng đơn hàng theo trạng thái
   * @param orders
   */


  countOrderByStatus(orders) {
    this.orderOthersCountByStatus = orders.filter(order => {
      return !this.list_status_bill.some(status => status.value === order.order_status || status.value2 === order.order_status);
    }).length;

    for (const key in this.orderCountByStatus) {
      if (key === 'All') {
        this.orderCountByStatus[key] = orders.length;
      } else {
        this.orderCountByStatus[key] = orders.filter(order => {
          return order.order_status === this.list_status_bill.find(status => status.name === key).value || order.order_status === this.list_status_bill.find(status => status.name === key).value2;
        }).length;
      }
    }
  }

  goBack() {
    this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee'], {
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
      this.vhEcommerce.getSalesOrderListShopee(new Date(this.datePipe.transform(new Date(this.date[0].setHours(0, 0, 0)), "yyyy-MM-dd HH:mm:ss").toString()), new Date(this.datePipe.transform(new Date(this.date[1].setHours(23, 59, 59)), "yyyy-MM-dd HH:mm:ss").toString()), this.infoShop.access_token.toString(), this.infoShop._id.toString()).then(result => {
        this.vhComponent.hideLoading(0);
        this.salesOrder = result.map(item => {
          var _a;

          return Object.assign(Object.assign({}, item), {
            create_at: new Date(item.create_time * 1000),
            checked: item.cqt_status == 1 || !item.cqt_status ? true : false,
            cqt_status: (_a = item.cqt_status) !== null && _a !== void 0 ? _a : 1
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

  gotoDetail(bill) {// this.router.n/avigate(['/sales/dashboard/manage/ecommerce/shopee/order-status/detail'], { state: { bill: bill, dataRestore: { salesOrder: this.salesOrder, searchValue: this.searchValue, id_shop_selected: this.infoShop._id, date: this.date, salesSubOrder: this.salesSubOrder, selectedIndex: this.selectedIndex } } });
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
        // tạo mỗi lần 5 request gửi hóa đơn
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


      let currentBranch = this.vhQuerySales.getlocalBranch(this.vhQuerySales.getDefaultBranch()._id); // trường hợp chưa có tạo kết nối hóa đơn điện tử

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
          this.changeShopee_toInvoice_byMinvoice(invoice, currentBranch.einvoices[0].invoiceSeries[0]).then(rsp => {
            console.log('rsp', rsp);

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
                    this.vhEcommerce.updateSalesOrderShopee_byFile([invoice.order_sn.toString()], {
                      cqt_status: 3
                    }, this.infoShop.access_token, this.infoShop._id).then(array => {
                      console.log('updateSalesOrderShopee_byFile', array);
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
              } // KHÔNG Ký tự động ngay khi gửi hóa đơn lên Cơ quan thuế
              else {
                this.vhEinvoice.saveInvoice_noSign_byMinvoice(currentBranch.taxcode, currentBranch.einvoices[0].token, 1, rsp.data).then(res => {
                  console.log(res);
                  invoice.isLoading = false;

                  if (res.code == '00') {
                    invoice.cqt_status = 2;
                    invoice.status = this.lang.translate("Sent to CQT");
                    this.vhComponent.alertMessageDesktop("success", this.lang.translate('Update invoice to CQT successfully'));
                    this.vhEcommerce.updateSalesOrderShopee_byFile([invoice.order_sn.toString()], {
                      cqt_status: 2
                    }, this.infoShop.access_token, this.infoShop._id).then(array => {
                      console.log('updateSalesOrderShopee_byFile', array);
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
  * this.vhQuerySales.changeShopee_toInvoice_byMinvoice(order, invoiceSeries)
      .then((rsp) => {
        //-----------your code here-----------
      }, (error:any) => {
          console.log('error', error);
      });
       * @param order hóa đơn lấy từ tiktok về
   * @param invoiceSeries ký hiệu hóa đơn
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


  changeShopee_toInvoice_byMinvoice(order, invoiceSeries) {
    var _this2 = this;

    return (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      return new Promise( /*#__PURE__*/function () {
        var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (resolve, reject) {
          var _a, _b;

          try {
            const escrowShopee = yield _this2.vhEcommerce.getEscrowShopee(order.order_sn, _this2.infoShop.access_token, _this2.infoShop._id);
            console.log('escrowShopee', escrowShopee);
            console.log('order', order); // gán lại chi tiết hóa đơn của shopee thành invoice_details

            let order_details = [...escrowShopee.order_income.items];
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
              key_api: order.order_sn,
              so_benh_an: order.order_sn
            };
            /* --------- Xử lý cqt_vat_ecommerce_use_latest_order_update_time thì lấy ngày cập nhật trạng thái gần nhất của đơn hàng từ sàn --------- */

            if (_this2.cqt_vat_ecommerce_use_latest_order_update_time) {
              invoice.inv_invoiceIssuedDate = _this2.vhAlgorithm.formatDateToString(new Date(order.update_time * 1000)); // *1000 để chuyển từ giây sang mili giây
            }
            /* --------------------------------------------------------- Thông tin người mua -------------------------------------------------------- */

            /** Tên người mua mặc định nếu không có thông tin trong hóa đơn */


            let buyerDisplayNameDefault = 'Người mua không lấy hóa đơn';
            /* ------ Xử lý cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an --------------------------------------------------------------- */
            // Nếu bật thì sẽ thành: Tên sàn - Người mua không lấy hóa đơn - Mã đơn hàng

            if (_this2.cqt_vat_ecommerce_buyer_info_with_platform_and_so_benh_an) {
              buyerDisplayNameDefault = `Shopee - ${buyerDisplayNameDefault} - ${invoice.so_benh_an}`;
            }
            /* ------ Xử lý cqt_vat_ecommerce_default_payment_method_chuyen_khoan ------------------------------------------------------------------- */
            // Nếu có bật thì luôn là 'Chuyển khoản', nếu không thì sẽ lấy theo của đơn hàng


            if (_this2.cqt_vat_ecommerce_default_payment_method_chuyen_khoan) {
              invoice.inv_paymentMethodName = 'Chuyển khoản';
            } else {
              invoice.inv_paymentMethodName = order.payment_method == 'Cash on Delivery' ? 'Tiền mặt' : 'Chuyển khoản';
            }

            invoice.inv_buyerDisplayName = order.tax_buyerDisplayName ? order.tax_buyerDisplayName : buyerDisplayNameDefault;
            invoice.inv_buyerLegalName = order.tax_buyerLegalName ? order.tax_buyerLegalName : '';
            invoice.inv_buyerTaxCode = order.tax_buyerTaxCode ? order.tax_buyerTaxCode : '';
            invoice.inv_buyerAddressLine = order.tax_buyerAddressLine ? order.tax_buyerAddressLine : '';
            invoice.inv_buyerEmail = order.tax_buyerEmail ? order.tax_buyerEmail : '';
            /* ------------------------------------------------------ Tính toán invoice details ----------------------------------------------------- */

            /** Thuế sàn */

            let platformTax = escrowShopee.order_income.vat_on_imported_goods;
            /** Thuế của hóa đơn (lấy từ sàn / từ cài đặt) */

            let billTax = 0; // nếu bật cqt_vat_ecommerce_already_Included thì lấy thuế từ cài đặt

            if (_this2.cqt_vat_ecommerce_already_Included) {
              billTax = _this2.cqt_vat_ecommerce_rate || 0;
            } else {
              billTax = platformTax;
            } //  LƯU Ý: GIÁ TRỊ SHOPEE TRẢ VỀ ĐÃ BAO GỒM SỐ LƯỢNG


            let invoice_details = new Array();

            for (let i = 0; i < order_details.length; i++) {
              /** Sản phẩm liên kết với sản phẩm của sàn */
              const productLinked = _this2.findProductLinked(order_details[i]); // Khởi tạo chi tiết hóa đơn


              let invoice_detail = _this2.billService.createEInvoiceDetailTemplate();
              /** Tính chất hàng hóa. Nếu inv_TotalAmountWithoutVat = 0 thì tchat = 2, nếu không thì tchat = 1 */


              const tchat = order_details[i].original_price - (order_details[i].seller_discount || 0) === 0 ? 2 : 1;
              /** Thuế của bill detail này. Nếu có sản phẩm liên kết và bật setting cqt_vat_ecommerce_by_linked_product thì sẽ lấy thuế từ sản phẩm liên kết, ngược lại thì vẫn lấy từ billTâx như cũ  */

              const invoiceDetailTax = _this2.cqt_vat_ecommerce_by_linked_product && productLinked && productLinked.tax !== undefined ? productLinked.tax : billTax; // Gán các giá trị chung

              invoice_detail.tchat = tchat;
              invoice_detail.stt_rec0 = invoice_details.length + 1;
              invoice_detail.inv_itemCode = order_details[i].item_id;
              invoice_detail.inv_unitCode = 'Cái';
              invoice_detail.inv_quantity = order_details[i].quantity_purchased;
              invoice_detail.inv_unitPrice = order_details[i].original_price / order_details[i].quantity_purchased; // Giá gốc bán sản phẩm trên sàn shopee

              invoice_detail.ma_thue = invoiceDetailTax;
              /* ------ Xử lý tchat --------------------------------------------------------------------------- */

              if (tchat === 2) {
                // Gán lại tên
                invoice_detail.inv_itemName = 'Hàng khuyến mãi/hàng tặng ' + order_details[i].item_name; // Tính lại giá trị trợ giá (chiết khấu) của chi tiết hóa đơn trường hợp tchat2

                invoice_detail.inv_discountAmount = 0;
                /* ------ Xử lý cqt_vat_ecommerce_already_Included cqt_vat_ecommerce_by_linked_product --------- */

                if (_this2.cqt_vat_ecommerce_already_Included || _this2.cqt_vat_ecommerce_by_linked_product) {
                  // Tính lại giá
                  invoice_detail.inv_unitPrice = _this2.billService.calculateNewPriceToUseSettingTax(invoice_detail.inv_unitPrice, invoice_detail.inv_quantity, invoice_detail.inv_discountAmount, invoice_detail.ma_thue, platformTax);
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

                  invoice_detail.inv_itemName = order_details[i].item_name;
                } // Trợ giá (chiết khấu) tính theo %


                invoice_detail.inv_discountPercentage = 0;
              } else {
                // Gán lại tên
                invoice_detail.inv_itemName = order_details[i].item_name; // Trợ giá (chiết khấu) của nhà bán hàng trên mỗi chi tiết hóa đơn = seller_discount (không lấy của sàn)

                invoice_detail.inv_discountAmount = order_details[i].seller_discount || 0;
                /* ------ Xử lý Giá hàng hóa, dịch vụ... gửi CQT là giá bán đã giảm ----------------------------------------- */

                if (_this2.cqt_vat_ecommerce_item_price_is_discounted) {
                  // Gán lại thành giá đã giảm
                  invoice_detail.inv_unitPrice = invoice_detail.inv_unitPrice - invoice_detail.inv_discountAmount / invoice_detail.inv_quantity; // Gán lại Chiết khấu = 0

                  invoice_detail.inv_discountAmount = 0;
                }
                /* ------ Xử lý cqt_vat_ecommerce_already_Included cqt_vat_ecommerce_by_linked_product --------- */


                if (_this2.cqt_vat_ecommerce_already_Included || _this2.cqt_vat_ecommerce_by_linked_product) {
                  // Tính lại giá
                  invoice_detail.inv_unitPrice = _this2.billService.calculateNewPriceToUseSettingTax(invoice_detail.inv_unitPrice, invoice_detail.inv_quantity, invoice_detail.inv_discountAmount, invoice_detail.ma_thue, platformTax);
                } // Trợ giá (chiết khấu) tính theo %


                invoice_detail.inv_discountPercentage = invoice_detail.inv_discountAmount / (invoice_detail.inv_unitPrice * invoice_detail.inv_quantity) * 100;
              } // Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn


              invoice_detail.inv_TotalAmountWithoutVat = invoice_detail.inv_unitPrice * invoice_detail.inv_quantity - invoice_detail.inv_discountAmount; // Thuế VAT được tính theo chi tiết hóa đơn

              invoice_detail.inv_vatAmount = invoice_detail.inv_TotalAmountWithoutVat * invoice_detail.ma_thue / 100; // Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

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
                      invoice: order.order_sn
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
                        combo_detail.inv_unitPrice = _this2.billService.calculateNewPriceToUseSettingTax(combo_detail.inv_unitPrice, combo_detail.inv_quantity, combo_detail.inv_discountAmount, combo_detail.ma_thue, platformTax);
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
                        combo_detail.inv_unitPrice = _this2.billService.calculateNewPriceToUseSettingTax(combo_detail.inv_unitPrice, combo_detail.inv_quantity, combo_detail.inv_discountAmount, combo_detail.ma_thue, platformTax);
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


            let shipping_paid_by_buyer = 0; // Phí ship người của được trở giá (người bán + shopee) => phí vận chuyển có tính thêm voucher của shopee vào

            let shipping_discount = 0;

            if (escrowShopee.order_income.actual_shipping_fee > 0) {
              shipping_discount = escrowShopee.order_income.shopee_shipping_rebate;
              shipping_paid_by_buyer = escrowShopee.order_income.actual_shipping_fee - shipping_discount;
            }

            if (_this2.cqt_submit_invoice_with_shipping_fee && shipping_paid_by_buyer > 0) {
              // Khởi tạo chi tiết hóa đơn
              let invoice_detail = _this2.billService.createEInvoiceDetailTemplate(); // Gán các giá trị chung


              invoice_detail.tchat = 1;
              invoice_detail.stt_rec0 = invoice_details.length + 1;
              invoice_detail.inv_itemCode = 'phi_van_chuyen';
              invoice_detail.inv_itemName = 'Phí vận chuyển';
              invoice_detail.inv_unitCode = 'Lần';
              invoice_detail.inv_quantity = 1;
              invoice_detail.inv_unitPrice = escrowShopee.order_income.actual_shipping_fee;
              invoice_detail.inv_discountAmount = shipping_discount;
              invoice_detail.inv_TotalAmountWithoutVat = shipping_paid_by_buyer;
              invoice_detail.ma_thue = billTax;
              /* ------ Xử lý cqt_vat_ecommerce_already_Included ---------------------------------------------- */

              if (_this2.cqt_vat_ecommerce_already_Included) {
                // Tính lại giá
                invoice_detail.inv_unitPrice = _this2.billService.calculateNewPriceToUseSettingTax(invoice_detail.inv_unitPrice, invoice_detail.inv_quantity, invoice_detail.inv_discountAmount, invoice_detail.ma_thue, platformTax);
              } // Trợ giá (chiết khấu) tính theo %


              invoice_detail.inv_discountPercentage = invoice_detail.inv_discountAmount / (invoice_detail.inv_unitPrice * invoice_detail.inv_quantity) * 100; // Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn

              invoice_detail.inv_TotalAmountWithoutVat = invoice_detail.inv_unitPrice - invoice_detail.inv_discountAmount; // Thuế VAT được tính theo chi tiết hóa đơn

              invoice_detail.inv_vatAmount = invoice_detail.inv_TotalAmountWithoutVat * invoice_detail.ma_thue / 100; // Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

              invoice_detail.inv_TotalAmount = invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_vatAmount; // Thêm vào mảng

              invoice_details = _this2.billService.addEInvoiceDetail(invoice_detail, invoice_details, {
                cqt_vat_ecommerce_separate_discount_line: _this2.cqt_vat_ecommerce_separate_discount_line
              });
            }
            /* ----------------------------------------------------------- Xử lý voucher của shopee ----------------------------------------------------------- */
            // Xử lý phần giảm giá (voucher của shopee + voucher của sàn)
            // tạo thành 1 invoice detail cso tchat3 cho phần giảm giá
            // phụ phí của shopee lên ng bán = seller_transaction_fee + shipping_seller_protection_fee_amount+commission_fee
            // invoice_detail này vẫn sẽ tính thuế, nhưng khi tính tổng thuế sẽ bỏ qua nó (tương đương bill.total * (bill.tax / 100) của mình)

            /** Tổng tiền giảm giá (Tổng tiền chiết khấu) */


            let totalDiscountAmount = 0; // Giảm giá cho đơn hàng từ seller

            if (escrowShopee.order_income.voucher_from_seller > 0) {
              totalDiscountAmount = escrowShopee.order_income.voucher_from_seller || 0;
            } // Phí sàn


            if (_this2.cqt_submit_invoice_with_ecommerce_fee) {
              totalDiscountAmount += escrowShopee.order_income.seller_transaction_fee + escrowShopee.order_income.shipping_seller_protection_fee_amount + escrowShopee.order_income.commission_fee;
            }

            if (totalDiscountAmount > 0) {
              // Khởi tạo chi tiết hóa đơn
              let invoice_detail = _this2.billService.createEInvoiceDetailTemplate(); // Gán các giá trị chung


              invoice_detail.tchat = 3;
              invoice_detail.stt_rec0 = invoice_details.length + 1;
              invoice_detail.inv_itemCode = 'chiet_khau_thuong_mai';
              invoice_detail.inv_itemName = 'Chiết khấu thương mại';
              invoice_detail.inv_unitCode = 'Phần';
              invoice_detail.inv_quantity = 1;
              invoice_detail.inv_unitPrice = totalDiscountAmount;
              invoice_detail.inv_TotalAmountWithoutVat = totalDiscountAmount; // Thành tiền trước thuế

              invoice_detail.ma_thue = 0; // Không có thuế cho chiết khấu thương mại
              // Giá cuối (đã trừ trợ giá) của chi tiết hóa đơn

              invoice_detail.inv_TotalAmountWithoutVat = invoice_detail.inv_unitPrice - invoice_detail.inv_discountAmount; // Thuế VAT được tính theo chi tiết hóa đơn

              invoice_detail.inv_vatAmount = invoice_detail.inv_TotalAmountWithoutVat * invoice_detail.ma_thue / 100; // Tổng giá trị hàng hóa kê khai theo chi tiết hóa đơn

              invoice_detail.inv_TotalAmount = invoice_detail.inv_TotalAmountWithoutVat + invoice_detail.inv_vatAmount; // Thêm vào mảng

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
            }
            /* ----- Trả về dữ liệu ---------------------------------------------- */
            // Hóa đơn điện tử thuế gồm 2 phần hóa đơn + chi tiết hóa đơn


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
            console.error('❌ Lỗi changeTiktok_toInvoice_byMinvoice:', err);
            reject(err);
          }
        });

        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
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
  /**Xóa những sp đã được liên kết rồi ra khỏi mảng của modal danh sách sp liên kết
   * @example this.clearProductShow(listProductShopee, listProductApp)
   */


  clearProductShow(listProduct, listProductApp) {
    for (let prodApp of listProductApp) {
      if (prodApp[this.id_branch] && prodApp[this.id_branch].shopees && prodApp[this.id_branch].shopees.length) {
        let arrayProdShopee = prodApp[this.id_branch].shopees;

        for (let item of arrayProdShopee) {
          let indexProd = listProduct.findIndex(prod => prod.item_id == item.item_id);

          if (indexProd >= 0) {
            if (listProduct[indexProd].model && item.model && item.model.length) {
              for (let model of item.model) {
                let index = listProduct[indexProd].model.findIndex(data => data.model_id == (model === null || model === void 0 ? void 0 : model.model_id));
                if (index >= 0) listProduct[indexProd].model.splice(index, 1);
              }

              if (!listProduct[indexProd].model.length) listProduct.splice(indexProd, 1);
            } else listProduct.splice(indexProd, 1);
          }
        }
      }
    }

    return listProduct;
  }
  /**
  * Kiểm tra sản phẩm đã được lien kết hay chưa
  *
  */


  isLinkedToProduct(item) {
    for (let productOfBranch of this.listProductOfBranch) {
      let findProduct = productOfBranch[this.id_branch].shopees.find(data => data.item_id == item.item_id);

      if (findProduct) {
        if (findProduct.model && findProduct.model.length && item.model_id != 0) {
          let indexModel = findProduct.model.findIndex(model => model.model_id == item.model_id);

          if (indexModel >= 0) {
            return true;
          }
        } else {
          return true;
        }
      }
    }

    ;
    return false;
  }

  findProductLinked(item) {
    var _a;

    for (let productOfBranch of this.listProductOfBranch) {
      const shopees = ((_a = productOfBranch[this.id_branch]) === null || _a === void 0 ? void 0 : _a.shopees) || [];
      const found = shopees.find(data => {
        var _a, _b;

        if (data.item_id !== item.item_id) return false;

        if (((_a = data.model) === null || _a === void 0 ? void 0 : _a.length) && item.model_id !== 0) {
          return data.model.some(model => model.model_id === item.model_id);
        }

        return ((_b = data.model) === null || _b === void 0 ? void 0 : _b.length) ? false : true;
      });

      if (found) {
        return productOfBranch;
      }
    }

    return null;
  }

  openModelSelectProductsShopee(productShopee) {
    this.productShopeeSelected = productShopee;
    this.visible_affiliate = true;
  }
  /**
   * Tắt modal và clone mảng product ra một mảng mới để tránh nhớ lại product cũ bị checked
   */


  cancelAffiliate() {
    this.visible_affiliate = false;
  }
  /**
   * Liên kết sản phẩm từ shopee với sản phẩm tại cửa hàng.
   * @param product Sản phẩm của cửa hàng
   */


  acceptAfiliate(product) {
    const isZeroPriceCombo = product.type === src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_1__.VhType.COMBO && product.units[0].price === 0;
    const confirmZeroPriceComboMessage = this.lang.translate("This product is a combo with a price of 0. Do you still want to link it with the product", {
      platform: 'Shopee'
    }) + "?";
    this.nzModalService.confirm({
      nzTitle: '<i>' + (isZeroPriceCombo ? confirmZeroPriceComboMessage : this.lang.translate("Confirm")) + '</i>',
      nzIconType: "info-circle",
      nzCancelText: this.lang.translate("Cancel"),
      nzOnOk: () => {
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
          // Tìm sản phẩm shopee
          const currentProductShopee = this.listProductShopee.find(item => item.item_id == this.productShopeeSelected.item_id);
          const id_product_selected = product.id_subproduct ? product.id_subproduct : product['_id'];
          let productShopee = {
            item_id: this.productShopeeSelected.item_id,
            models: []
          }; // Nếu sản phẩm shopee có model thì thêm vào mảng

          if (currentProductShopee && currentProductShopee.has_model) {
            const model = currentProductShopee.model.find(item => item.model_id == this.productShopeeSelected.model_id);
            productShopee.models.push(model);
          }

          this.vhEcommerce.addMergeShopeesProduct_model(this.vhQuerySales.getlocalDetailProduct(id_product_selected), productShopee.item_id, productShopee.models, this.infoShop['_id'], this.id_branch).then(bool => {
            this.vhComponent.hideLoading().then(() => {
              setTimeout(() => {
                this.visible_affiliate = false;
                this.listProductOfBranch = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].shopees && item[this.id_branch].shopees.length >= 0);
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
    return this.vhAlgorithm.formatDateToString(new Date(order.update_time * 1000));
  }
  /**
   * Xuất danh sách đang hiện trên table ra file excel
   */


  exportExcel() {
    var _a, _b;

    if (!this.salesOrder || !this.salesOrder.length) return; // Lặp qua danh sách hóa đơn

    const XLSXData = this.salesOrder.reduce((acc, order) => {
      if (!order || !order.item_list || !order.item_list.length) return acc; // Mỗi item trong item_list sẽ thành 1 row

      const rows = order.item_list.map(item => ({
        'Mã đơn hàng': order.order_sn || '',
        'Mã Kiện Hàng': item.package_list && item.package_list.length > 0 ? item.package_list[0].package_number : '',
        'Ngày đặt hàng': this.datePipe.transform(new Date(order.create_time * 1000), 'yyyy-MM-dd HH:mm') || '',
        'Trạng Thái Đơn Hàng': (() => {
          var _a;

          const currentDate = new Date();
          const returnDueDate = order.return_request_due_date ? new Date(order.return_request_due_date * 1000) : null;

          if (order.order_status === 'COMPLETED' && returnDueDate && returnDueDate.getTime() > currentDate.getTime()) {
            return `Người mua xác nhận đã nhận được hàng, tuy nhiên Người mua vẫn có thể gửi yêu cầu Trả hàng/Hoàn tiền tới ngày ${this.datePipe.transform(returnDueDate, 'yyyy-MM-dd HH:mm')}`;
          }

          return (_a = this.lang.translate(order.order_status)) !== null && _a !== void 0 ? _a : '';
        })(),
        'Lý do hủy': this.lang.translate(order.cancel_reason) || '',
        'Nhận xét từ Người mua': order.message_to_seller || '',
        'Đơn Vị Vận Chuyển': (() => {
          switch (order.shipping_carrier) {
            case 'SPX Express':
              return 'Nhanh-SPX Express';

            case 'SPX Instant':
              return 'Hỏa Tốc-SPX Instant';

            case 'GHN - Hàng Cồng Kềnh':
              return 'Hàng Cồng Kềnh-GHN - Hàng Cồng Kềnh';

            case 'AhaMove':
              return 'Hỏa Tốc-AhaMove';

            case 'Giao Hàng Nhanh':
              return 'Nhanh-Giao Hàng Nhanh';

            default:
              return order.package_list && order.package_list.length > 0 ? order.package_list[0].shipping_carrier : '';
          }
        })(),
        'Ngày giao hàng dự kiến': order.ship_by_date ? this.datePipe.transform(new Date(order.ship_by_date * 1000), 'yyyy-MM-dd HH:mm') : '',
        'Thời gian giao hàng': order.pickup_done_time ? this.datePipe.transform(new Date(order.pickup_done_time * 1000), 'yyyy-MM-dd HH:mm') : '',
        'SKU sản phẩm': item.item_sku || '',
        'Tên sản phẩm': item.item_name || '',
        'Cân nặng sản phẩm': item.weight || '',
        'Tổng cân nặng': item.weight ? item.weight * item.model_quantity_purchased : '',
        'Giá gốc': item.model_original_price || '',
        'Giá ưu đãi': item.model_discounted_price || '',
        'Số lượng': item.model_quantity_purchased || '',
        'Tổng giá bán (sản phẩm)': item.model_discounted_price ? item.model_discounted_price * item.model_quantity_purchased : '',
        'Phí vận chuyển tài trợ bởi Shopee (dự kiến)': order.estimated_shipping_fee || '',
        'Tổng số tiền người mua thanh toán': order.total_amount || '',
        'Phương thức thanh toán': (() => {
          switch (order.payment_method) {
            case 'ShopeePay Linked Bank Account':
              return 'TK Ngân hàng liên kết ShopeePay';

            case 'Cash on Delivery':
              return 'Thanh toán khi nhận hàng';

            case 'ShopeePay':
              return 'Ví ShopeePay';

            case 'Credit / Debit Card':
              return 'Thẻ Tín dụng/Ghi nợ';

            default:
              return order.payment_method || '';
          }
        })(),
        'Người Mua': order.buyer_username || '',
        'Tên Người nhận': order.recipient_address ? order.recipient_address.name : '',
        'Số điện thoại': order.recipient_address ? order.recipient_address.phone : '',
        'Tỉnh/Thành phố': order.recipient_address.city || '',
        'TP / Quận / Huyện': order.recipient_address.district || '',
        'Quận': order.recipient_address.state || '',
        'Địa chỉ nhận hàng': order.recipient_address ? order.recipient_address.full_address : '',
        'Quốc gia': order.region || ''
      }));
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

EInvoiceShopeeComponent.ɵfac = function EInvoiceShopeeComponent_Factory(t) {
  return new (t || EInvoiceShopeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_3__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhEcommerce), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhEinvoice), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_12__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_bill_service__WEBPACK_IMPORTED_MODULE_4__.BillService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_print_service__WEBPACK_IMPORTED_MODULE_5__.PrintService));
};

EInvoiceShopeeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: EInvoiceShopeeComponent,
  selectors: [["app-e-invoice-shopee"]],
  decls: 40,
  vars: 35,
  consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "order-status-tiki"], ["nz-row", "", "nzGutter", "4", 1, "order-status-tiki-header"], ["nz-col", "", "nzSpan", "8", 1, "title"], [1, "color-green"], ["nz-col", "", "nzSpan", "6", 1, "title", "center-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "6"], ["nzFormat", "dd/MM/yyyy", "nzFormat", "dd/MM/yyyy", 3, "nzDisabledDate", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "4", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "click"], ["src", "assets/icon/management/view.svg"], ["nz-row", "", "nzGutter", "16", "class", "order-status-tiki-body", 4, "ngIf", "ngIfElse"], ["no_data", ""], ["ecommerce_platform", "shopee", 3, "invoice", "infoShop", "onClose", "onOk", 4, "ngIf"], [3, "title", "visible_affiliate", "listProductApp", "searchProductAppValue", "cancelAffiliate", "searchProductApp", "acceptAfiliate"], ["nz-icon", "", "nzType", "search"], ["nz-row", "", "nzGutter", "16", 1, "order-status-tiki-body"], ["nz-col", "", "nzSpan", "24"], [3, "nzSelectedIndex", "nzSelectedIndexChange", "nzSelectChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [3, "nzTitle", 4, "ngIf"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzPageSize", "nzPageSizeOptions", 4, "ngIf", "ngIfElse"], ["class", "full-height"], ["no_bill", ""], [3, "nzTitle"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzPageSize", "nzPageSizeOptions"], ["salesOrder_show", ""], ["nzAlign", "center", "nzWidth", "6%"], ["nzLeft", "", "nzWidth", "17%"], ["nzWidth", "15%"], [3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], ["nzWidth", "17%", 2, "text-align", "right"], ["nzAlign", "center", 3, "nzChecked", "nzIndeterminate", "nzCheckedChange"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], ["nzAlign", "center"], ["nzLeft", ""], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click"], ["style", "font-size: 0.8rem;", 3, "color", 4, "ngFor", "ngForOf"], ["nz-tooltip", "", 3, "nzTooltipTitle"], [4, "ngIf"], [2, "text-align", "right"], ["nzAlign", "center", 3, "click"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 1, "cus-icon", 2, "cursor", "pointer", "margin-right", "10px", 3, "click"], ["nz-button", "", "nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [2, "font-size", "0.8rem"], ["class", "icon-link green", "nz-icon", "", "nzType", "link", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "link", "nzTheme", "outline", 1, "icon-link", "green", 3, "click"], ["nz-tooltip", "", "nz-icon", "", 1, "ant-input-password-icon", 3, "nzTooltipTitle", "nzType", "click"], ["nz-button", "", "nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content"], ["nz-row", "", 1, "no-affiliate"], ["nz-col", "", "nzSpan", "24", 1, "text-center"], ["src", "assets/icon/management/ecommerce/no-data-orderstatus.svg", "alt", ""], ["ecommerce_platform", "shopee", 3, "invoice", "infoShop", "onClose", "onOk"]],
  template: function EInvoiceShopeeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_Template_div_click_0_listener() {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EInvoiceShopeeComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.searchValue = $event;
      })("ngModelChange", function EInvoiceShopeeComponent_Template_input_ngModelChange_17_listener($event) {
        return ctx.search($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, EInvoiceShopeeComponent_ng_template_19_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "nz-range-picker", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function EInvoiceShopeeComponent_Template_nz_range_picker_ngModelChange_22_listener($event) {
        return ctx.date = $event;
      })("ngModelChange", function EInvoiceShopeeComponent_Template_nz_range_picker_ngModelChange_22_listener($event) {
        return ctx.changeTime($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_Template_button_click_24_listener() {
        return ctx.showReport();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "ion-icon", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_Template_button_click_28_listener() {
        return ctx.sendCQT();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EInvoiceShopeeComponent_Template_button_click_31_listener() {
        return ctx.exportExcel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](34, EInvoiceShopeeComponent_div_34_Template, 8, 5, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, EInvoiceShopeeComponent_ng_template_35_Template, 6, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](37, EInvoiceShopeeComponent_app_edit_customer_tax_37_Template, 1, 2, "app-edit-customer-tax", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "app-modal-link-product-ecommerce", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancelAffiliate", function EInvoiceShopeeComponent_Template_app_modal_link_product_ecommerce_cancelAffiliate_38_listener() {
        return ctx.cancelAffiliate();
      })("searchProductApp", function EInvoiceShopeeComponent_Template_app_modal_link_product_ecommerce_searchProductApp_38_listener($event) {
        return ctx.searchProductApp($event);
      })("acceptAfiliate", function EInvoiceShopeeComponent_Template_app_modal_link_product_ecommerce_acceptAfiliate_38_listener($event) {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](39, 33, "Select Shopee linked products"))("visible_affiliate", ctx.visible_affiliate)("listProductApp", ctx.listProductApp)("searchProductAppValue", ctx.searchProductAppValue);
    }
  },
  directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_14__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_15__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_16__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_13__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_17__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_19__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _components_modal_link_product_ecommerce_modal_link_product_ecommerce_component__WEBPACK_IMPORTED_MODULE_6__.ModalLinkProductEcommerceComponent, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__.NzTabSetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_23__.NzTabComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzCellFixedDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzThSelectionComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_24__.NzTbodyComponent, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__.NzTooltipDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_26__.NzCheckboxComponent, _components_edit_customer_tax_edit_customer_tax_component__WEBPACK_IMPORTED_MODULE_7__.EditCustomerTaxComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_27__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .order-status-tiki-header[_ngcontent-%COMP%] {\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .order-status-tiki-header[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25vh;\n  max-width: 250px;\n  height: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-black);\n  margin-top: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-link[_ngcontent-%COMP%] {\n  padding: 1px;\n  font-size: 12px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-link.green[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n  color: var(--ion-color-vh-green);\n}\n.seller-inventory[_ngcontent-%COMP%], .seller-time-pickup[_ngcontent-%COMP%] {\n  width: 95%;\n  margin: 12px auto;\n}\n.modal-confirm[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImUtaW52b2ljZS1zaG9wZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7QUFHUjtBQURJO0VBQ0ksa0JBQUE7QUFHUjtBQURJO0VBSUksbUJBQUE7QUFBUjtBQUhRO0VBQ0ksVUFBQTtBQUtaO0FBREk7RUFDSSxpRUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUdSO0FBRlE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FBSVo7QUFESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHUjtBQUZRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUlaO0FBRlE7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUlaO0FBRlE7RUFDSSxrQkFBQTtBQUlaO0FBREk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdSO0FBREk7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0FBR1I7QUFBQTs7RUFFSSxVQUFBO0VBQ0EsaUJBQUE7QUFHSjtBQUFJO0VBQ0ksaUJBQUE7QUFHUiIsImZpbGUiOiJlLWludm9pY2Utc2hvcGVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgfVxyXG4gICAgLmNlbnRlci10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAub3JkZXItc3RhdHVzLXRpa2ktaGVhZGVyIHtcclxuICAgICAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ0bi12aWV3IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubm8tYWZmaWxpYXRlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXZoO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pY29uLWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5pY29uLWxpbmsuZ3JlZW4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICB9XHJcbn1cclxuLnNlbGxlci1pbnZlbnRvcnksXHJcbi5zZWxsZXItdGltZS1waWNrdXAge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG1hcmdpbjogMTJweCBhdXRvO1xyXG59XHJcbi5tb2RhbC1jb25maXJtIHtcclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 51130:
/*!************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/shopee/e-invoice-shopee/e-invoice-shopee.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EInvoiceShopeeModule": () => (/* binding */ EInvoiceShopeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/menu/manage/ecommerce/components/modal-link-product-ecommerce/modal-link-product-ecommerce.module */ 14774);
/* harmony import */ var _e_invoice_shopee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./e-invoice-shopee.component */ 58575);
/* harmony import */ var src_app_sales_menu_manage_ecommerce_components_edit_customer_tax_edit_customer_tax_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/menu/manage/ecommerce/components/edit-customer-tax/edit-customer-tax.module */ 52701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);











const routes = [
    {
        path: "",
        component: _e_invoice_shopee_component__WEBPACK_IMPORTED_MODULE_2__.EInvoiceShopeeComponent
    },
];
class EInvoiceShopeeModule {
}
EInvoiceShopeeModule.ɵfac = function EInvoiceShopeeModule_Factory(t) { return new (t || EInvoiceShopeeModule)(); };
EInvoiceShopeeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: EInvoiceShopeeModule });
EInvoiceShopeeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_1__.ModalLinkProductEcommerceModule,
            src_app_sales_menu_manage_ecommerce_components_edit_customer_tax_edit_customer_tax_module__WEBPACK_IMPORTED_MODULE_3__.EditCustomerTaxModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](EInvoiceShopeeModule, { declarations: [_e_invoice_shopee_component__WEBPACK_IMPORTED_MODULE_2__.EInvoiceShopeeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_0__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_1__.ModalLinkProductEcommerceModule,
        src_app_sales_menu_manage_ecommerce_components_edit_customer_tax_edit_customer_tax_module__WEBPACK_IMPORTED_MODULE_3__.EditCustomerTaxModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_shopee_e-invoice-shopee_e-invoice-shopee_module_ts.js.map