"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_ecommerce_tiki_issue-invoice_issue-delivery-goods_issue-delivery-go-ca729e"],{

/***/ 75485:
/*!**********************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-1/tiki/add/add.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComponent": () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var src_app_sales_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k57-col3/sales-k57-col3.component */ 59035);
/* harmony import */ var src_app_sales_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k80-col3/sales-k80-col3.component */ 10419);
/* harmony import */ var src_app_sales_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k80-col4/sales-k80-col4.component */ 81989);
/* harmony import */ var src_app_sales_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-a5/sales-a5.component */ 92166);
/* harmony import */ var src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-a4/sales-a4.component */ 70963);
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../sale-desktop/components/staff/staff.component */ 88963);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _components_modal_customer_tax_modal_customer_tax_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/modal-customer-tax/modal-customer-tax.component */ 30271);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../search/search-product/search-product.component */ 99767);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


































function AddComponent_div_21_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](item_r7.name);
  }
}

function AddComponent_div_21_ng_container_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_div_21_ng_container_7_span_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r15.openModalChooseLot(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r13.getLotNumber(item_r7.lots, item_r7.id_lotproduct));
  }
}

function AddComponent_div_21_ng_container_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_div_21_ng_container_7_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r21);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r19.openModalChooseLot(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "Select lot"));
  }
}

function AddComponent_div_21_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddComponent_div_21_ng_container_7_span_1_Template, 2, 1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddComponent_div_21_ng_container_7_span_2_Template, 3, 3, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r7.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !item_r7.id_lotproduct);
  }
}

function AddComponent_div_21_span_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_div_21_span_8_ng_container_2_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r28);
      const combo_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r26.openModalChooseLot(combo_r23);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const combo_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r25.getLotNumber(combo_r23.lots, combo_r23.id_lotproduct));
  }
}

function AddComponent_div_21_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddComponent_div_21_span_8_ng_container_2_Template, 3, 1, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const combo_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", i_r24 == item_r7.combos.length - 1 ? combo_r23.quantity + "x " + combo_r23.name + " (" + ctx_r10.getUnit(combo_r23.units, combo_r23.ratio) + ") " : combo_r23.quantity + "x " + combo_r23.name + " (" + ctx_r10.getUnit(combo_r23.units, combo_r23.ratio) + ") " + " ,", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", combo_r23.id_lotproduct);
  }
}

function AddComponent_div_21_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 2, "The products have not been linked"), ")");
  }
}

function AddComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_div_21_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r33);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r32.deleteGoods(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, AddComponent_div_21_span_6_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, AddComponent_div_21_ng_container_7_Template, 3, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, AddComponent_div_21_span_8_Template, 3, 2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, AddComponent_div_21_span_9_Template, 5, 4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "nz-input-number", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function AddComponent_div_21_Template_nz_input_number_ngModelChange_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r33);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r34.checkQuantityProduct(item_r7, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "del", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r7.id_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", item_r7.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", item_r7.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !item_r7.id_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", item_r7.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(item_r7.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r7.price_origin > item_r7.price ? ctx_r0.vhAlgorithm.vhcurrencyunit(item_r7.price_origin) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(item_r7.price * item_r7.quantity));
  }
}

function AddComponent_app_search_product_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "app-search-product", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeSearchProductList", function AddComponent_app_search_product_101_Template_app_search_product_closeSearchProductList_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r35.closeSearchProductList($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("searchProductList", ctx_r1.searchProductList)("default_price_type", 1);
  }
}

function AddComponent_nz_modal_102_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r37.tempDetail.price);
  }
}

function AddComponent_nz_modal_102_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_nz_modal_102_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r40.isVisibleEditUnitPrice = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_nz_modal_102_ng_template_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r42.handleEditUnit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 4, "Save"));
  }
}

function AddComponent_nz_modal_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nz-modal", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_102_Template_nz_modal_nzVisibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r43.isVisibleEditUnitPrice = $event;
    })("nzOnCancel", function AddComponent_nz_modal_102_Template_nz_modal_nzOnCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r45.isVisibleEditUnitPrice = false;
    })("nzOnOk", function AddComponent_nz_modal_102_Template_nz_modal_nzOnOk_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r44);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r46.handleEditUnit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddComponent_nz_modal_102_ng_container_2_Template, 8, 7, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, AddComponent_nz_modal_102_ng_template_3_Template, 6, 6, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzFooter", _r38)("nzVisible", ctx_r2.isVisibleEditUnitPrice);
  }
}

function AddComponent_ng_container_105_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "i", 81);
  }
}

function AddComponent_ng_container_105_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzValue", item_r52._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", item_r52.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](8, 4, item_r52.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](11, 7, item_r52.date_exp, "dd/MM/yyyy"), " ");
  }
}

function AddComponent_ng_container_105_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 1, "No data"));
  }
}

function AddComponent_ng_container_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "nz-input-group", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "input", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keyup", function AddComponent_ng_container_105_Template_input_keyup_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r54);

      const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);

      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r53.searchLot(_r47.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, AddComponent_ng_container_105_ng_template_6_Template, 1, 0, "ng-template", null, 77, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "nz-radio-group", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_105_Template_nz_radio_group_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r55.tempDetail.id_lotproduct = $event;
    })("ngModelChange", function AddComponent_ng_container_105_Template_nz_radio_group_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r56.changeLot($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, AddComponent_ng_container_105_div_9_Template, 12, 10, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, AddComponent_ng_container_105_div_10_Template, 3, 3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](7);

    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzSuffix", _r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx_r3.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r3.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r3.tempDetail.lots.length);
  }
}

function AddComponent_ng_template_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_ng_template_106_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r57.handleCancelChooseLot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_ng_template_106_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r59.handleChooseLot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r5.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 5, "Ok"));
  }
}

function AddComponent_nz_modal_108_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "nz-option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "date");
  }

  if (rf & 2) {
    const element_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r68.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](1, 3, element_r68.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzValue", element_r68._id);
  }
}

function AddComponent_nz_modal_108_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "nz-select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function AddComponent_nz_modal_108_ng_container_2_ng_container_21_ng_container_1_Template_nz_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r71);
      const data_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
      return data_r65.id_lotproduct = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](7, AddComponent_nz_modal_108_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template, 2, 6, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r65.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](6, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", data_r65.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", data_r65.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r66.getUnit(data_r65.units, data_r65.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](data_r65.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r66.vhAlgorithm.vhcurrencyunit(data_r65.price), " ");
  }
}

function AddComponent_nz_modal_108_ng_container_2_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, AddComponent_nz_modal_108_ng_container_2_ng_container_21_ng_container_1_Template, 14, 9, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", data_r65.lots);
  }
}

const _c0 = function () {
  return {
    y: "400px"
  };
};

function AddComponent_nz_modal_108_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "nz-table", 87, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, AddComponent_nz_modal_108_ng_container_2_ng_container_21_Template, 2, 1, "ng-container", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](2);

    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzData", ctx_r60.tempDetail.combos)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 11, "Lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](13, 13, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](16, 15, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 17, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _r63.data);
  }
}

function AddComponent_nz_modal_108_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_nz_modal_108_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r73.show_modal_select_lots_combo = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_nz_modal_108_ng_template_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r74);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r75.handleChooseLotCombo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](5, 4, "Ok"));
  }
}

function AddComponent_nz_modal_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "nz-modal", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_108_Template_nz_modal_nzVisibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r76.show_modal_select_lots_combo = $event;
    })("nzOnCancel", function AddComponent_nz_modal_108_Template_nz_modal_nzOnCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r77);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r78.show_modal_select_lots_combo = false;
    })("nzOnOk", function AddComponent_nz_modal_108_Template_nz_modal_nzOnOk_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r77);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return ctx_r79.handleChooseLotCombo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, AddComponent_nz_modal_108_ng_container_2_Template, 22, 20, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, AddComponent_nz_modal_108_ng_template_3_Template, 6, 6, "ng-template", null, 86, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](4);

    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 4, "Select lot number for products in combo"), ": ", ctx_r6.tempDetail.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzFooter", _r61)("nzVisible", ctx_r6.show_modal_select_lots_combo);
  }
}

const _c1 = function () {
  return {
    minRows: 2,
    maxRows: 4
  };
};

class AddComponent {
  constructor(router, vhComponent, languageService, vhQuerySales, vhAlgorithm, vhAuth, cdRef, fncService, nzModalService) {
    this.router = router;
    this.vhComponent = vhComponent;
    this.languageService = languageService;
    this.vhQuerySales = vhQuerySales;
    this.vhAlgorithm = vhAlgorithm;
    this.vhAuth = vhAuth;
    this.cdRef = cdRef;
    this.fncService = fncService;
    this.nzModalService = nzModalService;
    this.invoice = {
      bill_type: 1,
      cqt_status: 1,
      payment_type: 2,
      id_customer: '',
      id_branch: '',
      id_employee: '',
      id_wallet: 'id_cash',
      date: '',
      total: 0,
      payment: 0,
      tax: 0,
      discount: 0,
      fee: 0,
      note: '',
      price_type: 0,
      order_number_ecommerce: '',
      id_shop: '',
      tax_buyerDisplayName: '',
      tax_buyerLegalName: '',
      tax_buyerTaxCode: '',
      tax_buyerAddressLine: '',
      tax_buyerEmail: '',
      ecommerce_fee_paid_by_seller: 0
    };
    this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore; //nhớ dữ liệu truyền từ trang trước

    this.billTiki = this.router.getCurrentNavigation().extras.state.billTiki;
    this.employee = {};
    this.customer = {};
    this.pickerTime = new Date();
    this.checkPrinter = false;
    this.validProdDetail = true; //nếu biến này = false tức có sp tiki chưa được liên kết với app

    this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
    this.invoiceDetail = [];
    this.subTotal = 0;
    this.taxValue = 0;
    this.isOpenModalTaxCustomer = false;
    this.save_enable = true; // ------thoát trang-----

    this.isExit = false;
    this.searchProductList = false; // -------modal edit unit price-------

    this.isVisibleEditUnitPrice = false;
    this.warning_lot_expried = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').warning_lot_expried;
    this.show_modal_select_lots = false;
    this.list_search_lot = [];
    this.show_modal_select_lots_combo = false;
  }
  /**Khởi tạo hóa đơn và merge sp của tiki vào billDetail */


  initBill() {
    var _a, _b, _c;

    this.invoice.date = this.pickerTime.toISOString();
    this.invoice.id_employee = this.vhAuth.getUser()._id;
    this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
    this.invoice.id_branch = this.vhQuerySales.getDefaultBranch()._id;
    this.invoice.id_customer = this.vhQuerySales.getlocalShopListTiki().find(item => item._id == this.dataRestore.id_shop_selected).data.id_customer;
    this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
    this.invoice.payment_type = 2; //set bill công nợ

    /** Để cộng dồn tiền seller giảm giá phí ship trong từng bill detail shipping_fee_discountAmount */

    let shipping_fee_discountAmount = 0;

    for (let i = 0; i < this.billTiki['items'].length; i++) {
      // Cộng dồn tiền seller giảm giá phí ship
      shipping_fee_discountAmount += ((_b = (_a = this.billTiki['items'][i].seller_income_detail.discount) === null || _a === void 0 ? void 0 : _a.discount_shipping_fee) === null || _b === void 0 ? void 0 : _b.seller_subsidy) || 0;
    }

    this.invoice.discount = 0;
    this.invoice.fee = this.billTiki.invoice.shipping_amount_after_discount + shipping_fee_discountAmount;
    this.invoice.ecommerce_fee_paid_by_seller = Math.abs((_c = this.billTiki.invoice) === null || _c === void 0 ? void 0 : _c.total_seller_fee) - shipping_fee_discountAmount;
    this.addInvoiceDetail(this.billTiki.items);
    this.setSubTotal();
    this.invoice.order_number_ecommerce = this.billTiki['code'].toString();
    this.invoice.id_shop = this.dataRestore['id_shop_selected'];
    this.invoice.note = `${this.languageService.translate("Order number")} Tiki ${this.billTiki['code']}`;
    this.invoice.tax_buyerDisplayName = this.invoice.tax_buyerDisplayName ? this.invoice.tax_buyerDisplayName : 'Người mua không lấy hóa đơn';
    this.invoice.cqt_status = this.billTiki.cqt_status ? this.billTiki.cqt_status : 1;
  }

  ngOnInit() {
    this.eventKeypress();
    this.initBill();
    let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
    if (printer) this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
    this.vhAlgorithm.waitingStack().then(() => {
      this.discount_price = this.vhAlgorithm.vhnumeral(".discount-price");
      this.invoice_fee = this.vhAlgorithm.vhnumeral(".invoice-fee"); // this.platform_price = this.vhAlgorithm.vhnumeral(".platform-price")
    });
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.event, false);
    window.removeEventListener('beforeunload', this.closerBrower, false);
  }
  /**
   * lắng nghe sk nhấn f1 f2 f3 f4 trên bàn phím
   * @example
   */


  eventKeypress() {
    this.event = event => {
      const keycode = event.keyCode;
      if (keycode === 112 || keycode === 113) event.preventDefault();

      switch (keycode) {
        case 112:
          this.payInvoice(false);
          break;

        case 113:
          {
            if (this.checkPrinter) this.payInvoice(true);
            break;
          }

        case 114:
          {
            this.searchProductList = !this.searchProductList;
            break;
          }
      }
    }; //sự kiện f5, close tab...


    this.closerBrower = event => {
      (event || window.event).returnValue = 'Changes you made may not be saved';
      return 'Changes you made may not be saved';
    };

    window.addEventListener('beforeunload', this.closerBrower);
    document.addEventListener('keydown', this.event, false);
  }
  /**
   * trở về trang phát hành hóa đơn lazada
   * @example this.goBack()
   */


  goBack() {
    this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Are you sure to cancel the sales order")}?`, "OK", this.languageService.translate('Cancel')).then(() => {
      this.isExit = true;
      this.router.navigate(["/sales/dashboard/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods"], {
        state: {
          dataRestore: this.dataRestore
        }
      });
    }, () => {});
  } // -------set employee-------

  /**
   * nhận sk ouput từ component app-staff bắt sk thay đổi nv
   * @param event : id_employee thay đổi
   * @example this.closeAndReceiveEmployee('DNHWIUYGBDGUIWQYGD&W')
   */


  closeAndReceiveEmployee(event) {
    if (event) {
      this.invoice.id_employee = event;
    }
  }
  /**
   * bắt sk thay đổi date của hóa đơn , gán lại giá trị date mới cho đơn
   * @example this.setPickerTime('2023-06-12T08:02:27.697Z')
   */


  setPickerTime(event) {
    if (event.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime()) {
      this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the registration date (")} ${this.fncService.formatDate(this.vhAuth.getStore().registrationdate)} ${")"}`, 8000);
      this.pickerTime = new Date(this.invoice.date);
      this.invoice.date = this.pickerTime.toISOString();
    } else this.vhQuerySales.getValidityDate(new Date(event)).then(validitydate => {
      if (validitydate == null) this.invoice.date = event;else {
        this.pickerTime = new Date(this.invoice.date);
        this.invoice.date = this.pickerTime.toISOString();
        this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 8000);
      }
    });
  }
  /**
   * bắt sk thay đổi giảm giá của hóa đơn , gán lại giá trị giảm giá mới cho đơn
   * @example this.editDiscount()
   */


  editDiscount() {
    if (this.discount_price.getRawValue() && this.discount_price.getRawValue() >= 0) {
      this.invoice.discount = parseFloat(this.discount_price.getRawValue());
    } else {
      document.getElementById("discount-price")['value'] = this.invoice.discount;
      this.discount_price = this.vhAlgorithm.vhnumeral('.discount-price');
    }
  }
  /**
  * bắt sk thay đổi phí của hóa đơn , gán lại giá trị phí mới cho đơn
  * @example this.editFee()
  */


  editFee() {
    if (this.invoice_fee.getRawValue() && this.invoice_fee.getRawValue() >= 0) {
      this.invoice.fee = parseFloat(this.invoice_fee.getRawValue());
    } else {
      document.getElementById("invoice-fee")['value'] = this.invoice.fee;
      this.invoice_fee = this.vhAlgorithm.vhnumeral('.invoice-fee');
    }
  }
  /**
   * so sánh subtotal trước khi tạo bill để chắc chắn có thay đổ bill_detail thì vẫn đúng số liệu
   * @returns boolean
   * @example let bool = this.compareSubTotal()
   */


  compareSubTotal() {
    let sub = this.invoiceDetail.reduce((prev, next) => prev + next.quantity * next.price, 0);
    if (sub == this.subTotal) return true;
    return false;
  }
  /**
   * bắt sk nhấn nút thanh toán hóa đơn
   * @param print biến check in hay ko
   * @example this.payInvoice('print')
   */


  payInvoice(print) {
    var _this = this;

    // if (this.vhAuth.checkMyPermission("sales_enable_payment")) {
    if (this.compareSubTotal()) {
      this.vhComponent.alertConfirm(!print ? `${this.languageService.translate("Pay")}?` : `${this.languageService.translate("Pay & Print")}?`, "", "", "OK", this.languageService.translate("Cancel")).then(() => {
        if (this.save_enable) {
          this.save_enable = false;
          this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.createOrUpdate(1).then(bill => {
              this.save_enable = true;

              if (this.invoice.cqt_status !== 1) {
                this.vhQuerySales.updateBill(bill._id, {
                  cqt_status: this.invoice.cqt_status
                });
              }

              let update = /*#__PURE__*/function () {
                var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
                  return yield _this.vhQuerySales.updateSalesOrderTiki(_this.dataRestore['id_shop_selected'], _this.billTiki['code'], {
                    id_bill_delivered_goods: bill._id
                  });
                });

                return function update() {
                  return _ref.apply(this, arguments);
                };
              }();

              update();
              this.vhComponent.hideLoading(0).then(() => {
                this.vhComponent.showToast(2000, `${this.languageService.translate("Issue invoice")} ${this.languageService.translate("Successfully").toLocaleLowerCase()}`, "success-toast");
                if (print) this.handlePrint();else this.handle(true);
              });
            });
          }).catch(err => {
            this.vhComponent.hideLoading(0);
            this.vhComponent.showToast(2000, err);
          });
        }
      }, () => {});
    } else this.vhComponent.alertMessageDesktop("error", this.languageService.translate("The total price of the product is not equal to the subtotal")); // }
    // else this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast")

  }
  /**
   * tạo bill lên DB
   * @returns Promise<any>
   * @example  this.createOrUpdate()
   * .then((bill: any) => {
   *
   * })
   */


  createOrUpdate(bill_type) {
    return new Promise((resolve, reject) => {
      return this.vhQuerySales.createBill_Billdetail(Object.assign({}, this.invoice), this.getCreateUpdateInvoiceDetail()).then(res => resolve(res)).catch(err => reject(err));
    });
  }
  /**
  * lấy thông tin dữ liệu trang in
  * @returns Promise<any>
  * @example this.checkPrint()
  */


  checkPrint() {
    return new Promise((resolve, rejects) => {
      let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
      if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable) resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);else rejects("No");
    });
  }
  /**
   * trả về danh sách bill_detail đã format theo đúng chuẩn các trường để lưu DB
   * @returns array bill_detail
   * @example let bill_details = getCreateUpdateInvoiceDetail()
   */


  getCreateUpdateInvoiceDetail() {
    return this.invoiceDetail.map(item => {
      let detail = {
        id_product: item.id_product,
        ptype: item.ptype,
        price: item.price,
        quantity: item.quantity,
        ratio: item.ratio,
        price_origin: item.price_origin
      };
      if (item.id_lotproduct) detail['id_lotproduct'] = item.id_lotproduct;
      if (item.id_subproduct) detail['id_subproduct'] = item.id_subproduct;

      if (item.ptype == 5) {
        detail['combos'] = item.combos.map(combo => {
          let product = {
            id_product: combo.id_product,
            price: combo.price,
            quantity: combo.quantity,
            ptype: combo.ptype || combo.type,
            ratio: combo.ratio ? combo.ratio : 1
          };
          if (combo.id_lotproduct) product['id_lotproduct'] = combo.id_lotproduct;
          if (combo.id_subproduct) product['id_subproduct'] = combo.id_subproduct;
          return product;
        });
      }

      return detail;
    }).filter(item => item);
  }
  /**
   * trả về component của trang in tương ứng
   * @example this.renderPrintPage('print_size_a4')
   * @returns component
   */


  renderPrintPage(type) {
    switch (type) {
      case 'print_size_k57_3c':
        return src_app_sales_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_1__.SalesK57Col3Component;

      case 'print_size_k80_3c':
        return src_app_sales_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_2__.SalesK80Col3Component;

      case 'print_size_k80_4c':
        return src_app_sales_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_3__.SalesK80Col4Component;

      case 'print_size_a5':
        return src_app_sales_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_4__.SalesA5Component;

      case 'print_size_a4':
        return src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_5__.SalesA4Component;

      default:
        return src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_5__.SalesA4Component;
    }
  }
  /**
   * trờ về trang phát hành hóa đơn sau khi đã thanh toán xong
   * @example this.handle(true)
   */


  handle(update) {
    this.isExit = true;
    if (update) this.dataRestore['update'] = true;
    this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods'], {
      state: {
        dataRestore: this.dataRestore
      }
    });
  }
  /**
   * kiểm tra dữ liệu thông tin máy in và mở component in
   * @example this.handlePrint()
   */


  handlePrint() {
    this.checkPrint().then(printer => {
      if (printer) this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
        printer: printer,
        invoice: this.invoice,
        invoice_detail: this.invoiceDetail
      }, false, false, `modal-print-${printer['_id']}`).then(modal => {
        modal.onWillDismiss().then(() => this.handle(true));
      });
    }, err => this.handle(true));
  }

  checkDeactivate(currentRoute, currentState, nextState) {
    return nextState.url == '/login' ? true : this.isExit ? this.isExit : this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Are you sure to cancel the sales order"), "OK", this.languageService.translate("Cancel")).then(() => {
      return true;
    }).catch(() => {
      return false;
    });
  }
  /**Phần thêm sản phẩm bổ sung
  * Note : không tính tiền sản phẩm này
  * @param data sản phẩm được chọn
  * @example this.closeSearchProductList(data_product)
  */


  closeSearchProductList(data) {
    if (data) {
      if (data.manylot && !data.id_lotproduct) this.openModalChooseLot(data);else if (data.combos && data.combos.filter(e => e.lots && !e.id_lotproduct).length) {
        this.tempDetail = data;
        this.show_modal_select_lots_combo = true;
      } else this.addInvoiceDetailExtraEcommerce(data);
    }

    this.searchProductList = false;
  }
  /**
   * thêm sp vô mảng invoice_detail
   * @param value
   * @example  this.addInvoiceDetailExtraEcommerce(data_product);
   */


  addInvoiceDetailExtraEcommerce(value) {
    let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id'] && detail['free']);

    if (index != -1) {
      if (this.invoiceDetail[index]['quantity'] < 9999999999) this.invoiceDetail[index]['quantity'] += 1;
    } else {
      let detail = {
        name: value.name,
        id_product: value._id,
        quantity: 1,
        ptype: value.type,
        unit: value.unit,
        units: value.units,
        ratio: value.ratio,
        price: 0,
        price_origin: value.price,
        id_category: value.id_category,
        free: true,
        id_subproduct: value.id_subproduct,
        lots: value.lots,
        id_lotproduct: value.id_lotproduct
      };

      if (value.type == 5) {
        detail['subComboName'] = value.subComboName;
        detail['combos'] = [...value.combos.map(item => {
          let product = {
            id_product: item.id_product,
            name: item.name,
            ptype: item.type,
            price: 0,
            quantity: item.quantity,
            id_subproduct: item.id_subproduct,
            lots: item.lots,
            id_lotproduct: item.id_lotproduct,
            units: item.units,
            ratio: item.ratio,
            free: true //nếu có trường này thì được quyền chỉnh số lượng

          };
          return product;
        })];
      }

      this.invoiceDetail.unshift(detail);
    }
  }
  /**
   * bắt sk thay đổi quantity của bill_detail
   * @param product bill-detail được chọn
   * @param event số lượng thay đổi
   * @example this.checkQuantityProduct(product, 1)
   */


  checkQuantityProduct(product, event) {
    const MIN_PRICE = 1;
    const oldQuantity = product.quantity;
    const oldPrice = product.price;
    const originalTotal = oldQuantity * oldPrice;
    const newQuantity = event || 1;
    const newPrice = originalTotal / newQuantity;

    if (newPrice < MIN_PRICE) {
      return;
    }

    product.quantity = newQuantity;
    product.price = newPrice;
    this.setSubTotal();
  }
  /**
   * mở modal chỉnh sửa giá bán của bill_detail
   * @param detail
   * @example this.openEditUnitPrice(bill_detail)
   */


  openEditUnitPrice(detail) {
    this.tempDetail = detail;
    this.isVisibleEditUnitPrice = true;
    this.vhAlgorithm.waitingStack().then(() => {
      this.unit_price = this.vhAlgorithm.vhnumeral('.unit_price');
    });
  }
  /**
   * bắt sk nhấn nút ok của modal chỉnh sửa giá bán
   * @example this.handleEditUnit()
   */


  handleEditUnit() {
    if (this.unit_price.getRawValue() != '' && this.unit_price.getRawValue() >= 0) {
      this.tempDetail.price = parseFloat(this.unit_price.getRawValue());
      this.isVisibleEditUnitPrice = false;
      this.setSubTotal();
    } else {
      this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
    }
  }
  /**
   * bắt sk nhấn nút xóa bill-detail
   * @param detail
   * @example this.deleteGoods(bill-detail)
   */


  deleteGoods(detail) {
    this.vhComponent.alertConfirm("", "", `${this.languageService.translate("Delete")} ${detail.name}?`, "OK", this.languageService.translate("Cancel")).then(() => this.removeInvoiceDetail(detail.id_product), () => {});
  }
  /**
   * xóa bill-detail trong mảng local invoice_detail
   * @param id
   * @example this.removeInvoiceDetail(bill_detail.id_product)
   */


  removeInvoiceDetail(id) {
    let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == id);

    if (index != -1) {
      this.invoiceDetail.splice(index, 1);
      this.setSubTotal();
    }
  }
  /**
   * tính và gán lại cộng tiền (subTotal) của đơn
   * @example this.setSubTotal()
   */


  setSubTotal() {
    let subTotal = 0;

    for (let i of this.invoiceDetail) {
      subTotal += i.price ? i.price * i.quantity : 0;
    }

    this.subTotal = subTotal;
    this.setTotal();
  }
  /**
   * tính và gán lại tổng tiền (total) của đơn
   * @example this.setTotal()
   */


  setTotal() {
    this.invoice.total = this.subTotal - this.invoice.discount + this.invoice.fee > 0 ? this.subTotal - this.invoice.discount + this.invoice.fee : 0;
  }
  /**
   * Thêm sản phẩm đã bán vào cart
   */


  addInvoiceDetail(items) {
    let products = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].tikis && item[this.id_branch].tikis.length >= 0);

    for (let item of items) {
      let findSuccess = false;

      for (let productOfBranch of products) {
        let findProduct = productOfBranch[this.id_branch].tikis.find(data => data.product_id == item.product.id);

        if (findProduct) {
          findSuccess = true;
          this.addInvoiceDetailTiki(item.invoice.row_total, item.price, item.qty, productOfBranch, true);
          break;
        }
      }

      if (!findSuccess) {
        this.addInvoiceDetailTiki(item.invoice.row_total, item.price, item.qty, {
          name: item.product.name
        }, false);
        this.validProdDetail = false;
      }
    }
  }

  addInvoiceDetailTiki(price, price_origin, quantity, product, exist) {
    if (exist) {
      const productToAdd = {
        name: product.name,
        id_product: product._id,
        quantity: quantity,
        ptype: product.type,
        unit: product.unit,
        price: price,
        ratio: 1,
        units: product.units,
        price_origin: price_origin || null,
        id_subproduct: product.id_subproduct,
        lots: product.lots,
        id_lotproduct: product.id_lotproduct,
        free: false //nếu có trường này true thì được quyền chỉnh số lượng

      };

      if (product.type == src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_6__.VhType.COMBO) {
        productToAdd['combos'] = product.combos;
      }

      this.invoiceDetail.unshift(productToAdd);
    } else {
      this.invoiceDetail.unshift({
        id_product: null,
        quantity: quantity,
        price: price,
        ptype: 1,
        ratio: 1,
        name: product.name
      });
    }
  }
  /**
  * trả về tên unit của sp
  * @param units mảng units của sp
  * @param ratio ratio được chọn
  * @returns string
  * @example let unit_name = this.getUnit([], 1)
  */


  getUnit(units, ratio) {
    return this.vhQuerySales.getUnit_byRatio(units, ratio).unit;
  }
  /**
   * trả về số lô của sp
   * @param lots mảng lots của sp
   * @param _id id của lô đã chọn
   * @returns string
   * @example let lot_name = this.getLotNumber([], 'SQOIUGDHBUWYGBDUEYTFTQ')
   */


  getLotNumber(lots, _id) {
    let lot = lots.find(item => item._id == _id);
    return lot.lot_number;
  }
  /**
   * tìm kiếm lô theo tên lô
   * @param value
   * @example this.searchLot('')
   */


  searchLot(value) {
    this.tempDetail.lots = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value), this.list_search_lot, ['lot_number']);
  }
  /**
   * mở modal chọn lô sp
   * @param data bill-detail được chọn
   * @example this.openModalChooseLot(data)
   */


  openModalChooseLot(data) {
    this.tempDetail = data;
    this.list_search_lot = this.tempDetail.lots;
    if (!this.list_search_lot.length) this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Sản phẩm này không có lô khả dụng để bán!"));else this.show_modal_select_lots = true;
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
            if (!this.tempDetail.id_product) this.closeSearchProductList(this.tempDetail);
          },
          nzOnCancel: () => {// this.show_modal_select_lots = false;
            // this.tempDetail.lots = this.list_search_lot;
          }
        });
      } else {
        this.show_modal_select_lots = false;
        this.tempDetail.lots = this.list_search_lot;
        if (!this.tempDetail.id_product) this.closeSearchProductList(this.tempDetail);
      }
    } else {
      this.show_modal_select_lots = false;
      this.tempDetail.lots = this.list_search_lot;
      if (!this.tempDetail.id_product) this.closeSearchProductList(this.tempDetail);
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
  /** bắt sk nhấn nút ok modal chọn lô sp là combo
  * @example this.handleChooseLotCombo()
  */


  handleChooseLotCombo() {
    if (this.tempDetail.combos.filter(item => item.lots && !item.id_lotproduct).length) this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Vui lòng chọn lô cho sản phẩm thuộc combo này"));else {
      this.show_modal_select_lots_combo = false;
      this.closeSearchProductList(this.tempDetail);
    }
  }

  onClose(event) {
    this.isOpenModalTaxCustomer = false;
  }
  /**
   * Khi ok trong modal chỉnh sửa customer tax
   * @param customerTaxInfo
   */


  onOkEditTax(customerTaxInfo) {
    this.isOpenModalTaxCustomer = false;
    Object.assign(this.invoice, customerTaxInfo);
  }

}

AddComponent.ɵfac = function AddComponent_Factory(t) {
  return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_7__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_8__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_15__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_9__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__.NzModalService));
};

AddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: AddComponent,
  selectors: [["bill-type1-tiki-add"]],
  decls: 110,
  vars: 81,
  consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales", "hide-best-selling"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["target", "_blank", 3, "href"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 2, "width", "97%", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], [1, "sales-bills-staff-name"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], [1, "sales-bills-customer", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", "nz-row", "", 1, "sales-bills-customer-info"], [2, "width", "100%", "margin-bottom", "12px"], [1, "sales-bills-customer-info-name"], [1, "sales-bills-customer-info-phone"], ["nz-col", "", "nzSpan", "24", "nz-row", "", 1, "sales-bills-customer-info", 2, "margin-top", "12px"], [2, "width", "100%", "margin-bottom", "12px", "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "outline", 2, "font-size", "0.9rem", "color", "var(--ion-color-vh-red)", ";margin-left", "4px", 3, "nzTooltipTitle"], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "nz-no-border", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "nz-no-border", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-input", "", 1, "nz-hover-border", 3, "ngModel", "placeholder", "nzAutosize", "ngModelChange"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditUnitPrice2", ""], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "isOpenModal", "invoice", "onClose", "onOk"], [1, "invoiceDetail-item"], ["nz-row", ""], ["nz-col", "", "nzSpan", "1", 3, "click"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "8"], [1, "invoiceDetail-item-name"], ["class", "invoiceDetail-item-name-linked", 4, "ngIf"], [4, "ngIf"], ["style", "font-size: 0.75rem; color: var(--ion-color-vh-black); font-weight: normal;", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "5", 2, "text-align", "right"], [3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "5", 1, "invoiceDetail-item-price", "text-end"], [1, "max-width-two-line", 2, "border-bottom", "1px var(--ion-color-vh-gray) solid", "margin-left", "16px"], [2, "margin-left", "5px", "font-size", "0.8rem"], [1, "max-width-two-line"], [1, "invoiceDetail-item-name-linked"], ["style", "color:var(--ion-color-vh-green);cursor: pointer;", 3, "click", 4, "ngIf"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], [2, "font-size", "0.75rem", "color", "var(--ion-color-vh-black)", "font-weight", "normal"], [1, "invoiceDetail-item-name-notlinked"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "8", 1, "center-col"], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], [2, "width", "100%", 3, "ngModel", "ngModelChange"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], [2, "text-align", "center"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice3", ""], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]],
  template: function AddComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_Template_div_click_0_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "nz-layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_Template_button_click_16_listener() {
        return ctx.searchProductList = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, AddComponent_div_21_Template, 22, 8, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "app-staff", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("closeAndReceiveEmployee", function AddComponent_Template_app_staff_closeAndReceiveEmployee_29_listener($event) {
        return ctx.closeAndReceiveEmployee($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "nz-date-picker", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_34_listener($event) {
        return ctx.pickerTime = $event;
      })("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_34_listener($event) {
        return ctx.setPickerTime($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "b", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](39, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](42, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](45, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_Template_span_click_45_listener() {
        return ctx.isOpenModalTaxCustomer = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](49, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](52, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](53, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](56, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](59, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](62, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](63, "i", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddComponent_Template_input_blur_64_listener() {
        return ctx.editDiscount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](65, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("blur", function AddComponent_Template_input_blur_69_listener() {
        return ctx.editFee();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](70, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](71, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](73, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](76, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](77, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](78, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](79);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](80, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](81, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](82, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](83);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](84, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](85, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](86);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](87, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](88, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](89, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](90);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](91, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](92, "textarea", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_textarea_ngModelChange_92_listener($event) {
        return ctx.invoice.note = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](93, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](94, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](95, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_Template_button_click_95_listener() {
        return ctx.payInvoice(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](96);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](97, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](98, "button", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function AddComponent_Template_button_click_98_listener() {
        return ctx.payInvoice(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](100, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](101, AddComponent_app_search_product_101_Template, 1, 2, "app-search-product", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](102, AddComponent_nz_modal_102_Template, 5, 5, "nz-modal", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](103, "nz-modal", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_103_listener($event) {
        return ctx.show_modal_select_lots = $event;
      })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_103_listener() {
        return ctx.handleCancelChooseLot();
      })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_103_listener() {
        return ctx.handleChooseLot();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](104, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](105, AddComponent_ng_container_105_Template, 11, 7, "ng-container", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](106, AddComponent_ng_template_106_Template, 6, 7, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](108, AddComponent_nz_modal_108_Template, 5, 6, "nz-modal", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](109, "app-modal-customer-tax", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClose", function AddComponent_Template_app_modal_customer_tax_onClose_109_listener($event) {
        return ctx.onClose($event);
      })("onOk", function AddComponent_Template_app_modal_customer_tax_onOk_109_listener($event) {
        return ctx.onOkEditTax($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](107);

      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 44, "Back"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzGutter", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](11, 46, "Order number"), ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("href", "https://sellercenter.tiki.vn/new#/order/list?filter_date_by=allDays&keyword=", ctx.billTiki.code, "&limit=20&order_status_tab=all&page=1&search_type=code&seller_id=5346", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.billTiki.code);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 48, "Search (F4)"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.invoiceDetail);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](28, 50, "Salesman"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("id_employee", ctx.invoice.id_employee);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](33, 52, "Sales date"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.pickerTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](39, 54, "Customer information"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.customer.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.customer.phone, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](48, 56, "Invoice information"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](52, 58, "Payment information"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](56, 60, "SubTotal"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.subTotal));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](62, 62, "Platform fee"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("nzTooltipTitle", "Vui l\u00F2ng ki\u1EC3m tra ph\u00ED s\u00E0n ch\u00EDnh x\u00E1c tr\u01B0\u1EDBc khi ph\u00E1t h\u00E0nh h\u00F3a \u0111\u01A1n");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.discount));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](68, 64, "Fee"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.fee));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](73, 66, "Total"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.total));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](80, 68, "Pay"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.payment));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](87, 70, "Rest"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.invoice.total - ctx.invoice.payment), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](93, 72, "Enter note..."));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngModel", ctx.invoice.note)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](80, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx.validProdDetail || !ctx.checkPrinter);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](97, 74, "Save & Print"), " (F2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx.validProdDetail);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](100, 76, "Save"), " (F1)");
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.searchProductList);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](104, 78, "Select lot number"));
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("nzFooter", _r4)("nzVisible", ctx.show_modal_select_lots);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.show_modal_select_lots_combo);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("isOpenModal", ctx.isOpenModalTaxCustomer)("invoice", ctx.invoice);
    }
  },
  directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_20__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_21__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_22__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_10__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_24__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgModel, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_26__.NzTooltipDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__.NzAutosizeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_16__.NzModalContentDirective, _components_modal_customer_tax_modal_customer_tax_component__WEBPACK_IMPORTED_MODULE_11__.ModalCustomerTaxComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_28__.NzInputNumberComponent, _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_12__.SearchProductComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_27__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_29__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_29__.NzRadioComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_30__.NzTbodyComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_31__.NzOptionComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 500;\n  transition: 0.1s;\n  color: var(--ion-color-vh-green) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 0.1s;\n  border-bottom: 2px solid var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 93%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 1.1rem;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name-linked[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name-notlinked[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-red) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-price[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 8px 32px;\n  width: 20px;\n  cursor: not-allowed;\n  border-radius: 4px;\n  color: var(--ion-color-vh-gray);\n  border: 1px solid var(--ion-color-vh-gray);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 18% 17% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info-name[_ngcontent-%COMP%] {\n  width: 60%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info-phone[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-rest[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-rest[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .hide-best-selling[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n  grid-row-gap: 0px;\n  row-gap: 0px;\n}\n.title[_ngcontent-%COMP%] {\n  align-self: center;\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n  align-self: center;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNFLGVBQUE7QUFFTjtBQUNFO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7QUFHTjtBQUZNOzs7O0VBSUUsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSVI7QUFGTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSVI7QUFIUTtFQUNFLFVBQUE7QUFLVjtBQUpVO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBTVo7QUFKVTtFQUNFLGdCQUFBO0VBQ0Esa0RBQUE7QUFNWjtBQUhRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBS1Y7QUFKVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFNWjtBQUxZO0VBQ0UsaUJBQUE7QUFPZDtBQU5jO0VBQ0UsaUJBQUE7QUFRaEI7QUFOYztFQUNFLHlDQUFBO0FBUWhCO0FBTFk7RUFDRSxlQUFBO0FBT2Q7QUFMWTtFQUNFLGtCQUFBO0FBT2Q7QUFOYztFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMENBQUE7QUFRaEI7QUFGTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FBSVI7QUFIUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUtWO0FBSlU7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS1o7QUFKWTs7O0VBRUUsVUFBQTtFQUNBLGVBQUE7QUFPZDtBQUpVO0VBQ0Usa0JBQUE7QUFNWjtBQUhRO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS1Y7QUFKVTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBTVo7QUFMWTtFQUNFLFVBQUE7QUFPZDtBQUxZO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFPZDtBQUhRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBS1Y7QUFIUTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS1Y7QUFIWTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQUtkO0FBQVk7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFFZDtBQUVZO0VBQ0UsVUFBQTtBQUFkO0FBSVk7RUFDRSxlQUFBO0FBRmQ7QUFJWTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFGZDtBQU1RO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtBQUpWO0FBS1U7RUFDRSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFIWjtBQUtVO0VBQ0UsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBRUEsdUJBQUE7QUFKWjtBQVNJO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUFBLFlBQUE7QUFQTjtBQVVFO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQSjtBQVNFOztFQUVFLGlCQUFBO0FBTko7QUFRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0Usa0JBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQXVCLGdCQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLG1DQUFBO0FBRjlCO0FBS0U7RUFDRSxVQUFBO0VBQVksa0NBQUE7QUFEaEI7QUFLRTtFQUNFLFdBQUE7QUFGSjtBQUdHO0VBQ0ksMEJBQUE7QUFEUDtBQUtFO0VBQ0MsV0FBQTtBQUZIIiwiZmlsZSI6ImFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBuei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC5zYWxlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xyXG4gICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICAmLWNhcnQsXHJcbiAgICAgIC5zYWxlcy1iaWxscy1zdGFmZixcclxuICAgICAgLnNhbGVzLWJpbGxzLWN1c3RvbWVyLFxyXG4gICAgICAuc2FsZXMtYmlsbHMtY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICAmLWNhcnQge1xyXG4gICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICAgIGhlaWdodDogNiU7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICAgIGhlaWdodDogOTMlO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgLmludm9pY2VEZXRhaWwtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgJi1saW5rZWQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICYtbm90bGlua2VkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtcmVkKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXByaWNlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAzMnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1iaWxscyB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxOCUgMTclIDU1JSAxMCU7XHJcbiAgICAgICAgJi1zdGFmZiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICYtdGltZSxcclxuICAgICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgbnotZGF0ZS1waWNrZXIsXHJcbiAgICAgICAgICAgIGFwcC1zdGFmZiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY3VzdG9tZXIge1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgJi1pbmZvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAmLW5hbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1waG9uZSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb250ZW50ID4gZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29udGVudCB7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgZGl2ID4ge1xyXG4gICAgICAgICAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtZGlzY291bnQsXHJcbiAgICAgICAgICAmLWZlZSB7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLXRheCB7XHJcbiAgICAgICAgICAgIC5ub3QtZm91bmQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtcmVzdCB7XHJcbiAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgLm9yZGVyLWFuZC1wcmludCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3JkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICAgICAgICAgIC8vbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5oaWRlLWJlc3Qtc2VsbGluZyB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgICByb3ctZ2FwOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICBpbnB1dCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgLmNlbnRlci1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC8qIEhpZGUgc2Nyb2xsYmFyKi9cclxuICAuaGlkZVNjcm9sbGJhciB7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG4gIH1cclxuICBcclxuICAuaGlkZVNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDsgLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5yYWRpby1wdXJjaGFzZSAgc3BhbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAuYW50LXJhZGlve1xyXG4gICAgICAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5yYWRpby1wdXJjaGFzZSAgLmFudC1yYWRpb3tcclxuICAgd2lkdGg6IDE2cHg7IFxyXG4gIH0iXX0= */"]
});

/***/ }),

/***/ 52076:
/*!***************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-1/tiki/bill-type1-tiki.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillType1TikiModule": () => (/* binding */ BillType1TikiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 75485);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail/detail.component */ 3800);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ 10615);
/* harmony import */ var src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/sale-desktop/components/components.module */ 50682);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/search/search.module */ 43818);
/* harmony import */ var _components_modal_customer_tax_modal_customer_tax_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modal-customer-tax/modal-customer-tax.module */ 8915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);











class BillType1TikiModule {
}
BillType1TikiModule.ɵfac = function BillType1TikiModule_Factory(t) { return new (t || BillType1TikiModule)(); };
BillType1TikiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: BillType1TikiModule });
BillType1TikiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_5__.SearchModule,
            _components_modal_customer_tax_modal_customer_tax_module__WEBPACK_IMPORTED_MODULE_6__.ModalCustomerTaxModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](BillType1TikiModule, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__.DetailComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__.EditComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_4__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_5__.SearchModule,
        _components_modal_customer_tax_modal_customer_tax_module__WEBPACK_IMPORTED_MODULE_6__.ModalCustomerTaxModule], exports: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_1__.DetailComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__.EditComponent] }); })();


/***/ }),

/***/ 3800:
/*!****************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-1/tiki/detail/detail.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k57-col3/sales-k57-col3.component */ 59035);
/* harmony import */ var src_app_sales_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k80-col3/sales-k80-col3.component */ 10419);
/* harmony import */ var src_app_sales_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k80-col4/sales-k80-col4.component */ 81989);
/* harmony import */ var src_app_sales_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-a5/sales-a5.component */ 92166);
/* harmony import */ var src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-a4/sales-a4.component */ 70963);
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
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function DetailComponent_nz_layout_4_tr_47_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r7.getLotNumber(item_r6.lots, item_r6.id_lotproduct));
} }
function DetailComponent_nz_layout_4_tr_47_ng_container_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate3"]("", combo_r11.quantity, "x ", combo_r11.name, " (", ctx_r10.getUnit(combo_r11.units, combo_r11.ratio), "), ");
} }
function DetailComponent_nz_layout_4_tr_47_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DetailComponent_nz_layout_4_tr_47_ng_container_5_span_1_Template, 2, 3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", item_r6.combos);
} }
function DetailComponent_nz_layout_4_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DetailComponent_nz_layout_4_tr_47_ng_container_4_Template, 3, 1, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, DetailComponent_nz_layout_4_tr_47_ng_container_5_Template, 3, 1, "ng-container", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "del", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", item_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r6.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r6.ptype == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r2.getUnit(item_r6.units, item_r6.ratio), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r6.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", ctx_r2.vhAlgorithm.vhcurrencyunit(item_r6.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r6.price_origin > item_r6.price ? ctx_r2.vhAlgorithm.vhcurrencyunit(item_r6.price_origin) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r2.vhAlgorithm.vhcurrencyunit(item_r6.quantity * item_r6.price));
} }
function DetailComponent_nz_layout_4_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r3.invoiceInfo.partner.name), " ");
} }
function DetailComponent_nz_layout_4_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r4.invoiceInfo.partner.name), " - ", ctx_r4.invoiceInfo.partner.phone, " ");
} }
function DetailComponent_nz_layout_4_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r5.renderAddress(ctx_r5.invoiceInfo.partner), " ");
} }
const _c0 = function (a0) { return { y: a0 }; };
const _c1 = function () { return []; };
function DetailComponent_nz_layout_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "nz-layout", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r13.goToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_nz_layout_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r15.printInvoice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "nz-table", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, DetailComponent_nz_layout_4_tr_47_Template, 17, 8, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](59, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](65, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](68, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](72, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](73, DetailComponent_nz_layout_4_div_73_Template, 3, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](74, DetailComponent_nz_layout_4_div_74_Template, 3, 4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](75, DetailComponent_nz_layout_4_div_75_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](83, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](89, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](90, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](95, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](101, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](106);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](107, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](110, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](113, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](119, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](123, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](124);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](125, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](22);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzGutter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 40, "Issue invoice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 42, "Edit"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 44, "Print"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](23, 46, "No data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](87, _c0, ctx_r0.tableHeight))("nzData", ctx_r0.invoice_detail || _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](89, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](29, 48, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](33, 50, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](37, 52, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](41, 54, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](45, 56, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](53, 58, "Invoice code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.invoice.bill_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](59, 60, "Salesman"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.invoiceInfo.employee.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](65, 62, "Sales date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](68, 64, ctx_r0.invoice.date, "dd/MM/yyyy HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](72, 67, "Customer information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoiceInfo.partner._id == "id_retail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoiceInfo.partner._id != "id_retail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.invoiceInfo.partner._id != "id_retail");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](79, 69, "Payment information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](83, 71, "SubTotal"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.subTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](89, 73, "Discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.discount));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](95, 75, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](101, 77, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.invoice.total));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](107, 79, "Pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.invoice.payment));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](113, 81, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit_symbol(ctx_r0.invoice.total - ctx_r0.invoice.payment));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](119, 83, "Payment method"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.setPaymentName(ctx_r0.invoice.payment_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](125, 85, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.invoice.note);
} }
class DetailComponent {
    constructor(router, vhQuerySales, lang, vhAuth, vhComponent, vhAlgorithm, cdRef, fncService) {
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.lang = lang;
        this.vhAuth = vhAuth;
        this.vhComponent = vhComponent;
        this.vhAlgorithm = vhAlgorithm;
        this.cdRef = cdRef;
        this.fncService = fncService;
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.billTiki = this.router.getCurrentNavigation().extras.state.billTiki;
        this.invoice = null;
        this.subTotal = 0;
        this.getDataInvoice(this.router.getCurrentNavigation().extras.state.id);
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
                partner: this.vhQuerySales.getlocalCustomer(this.invoice.id_customer),
                paymentName: this.setPaymentName(this.invoice.payment_type)
            };
        }
        else
            this.invoiceInfo = { employee: {}, partner: {}, paymentName: '' };
        this.setSubTotal();
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
                this.vhQuerySales.getBill_details_byId_bill(id)
            ]).then(([invoice, invoiceDetail]) => {
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
     * tính cộng tiền hóa đơn
     * @example this.setSubTotal()
     */
    setSubTotal() {
        let subTotal = 0;
        for (let i of this.invoice_detail) {
            subTotal += (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
        this.setTotal();
    }
    /**
     * tính tổng tiền hóa đơn
     * @example this.setTotal()
     */
    setTotal() {
        this.invoice.total = this.subTotal - this.invoice.discount + this.invoice.fee > 0 ? this.subTotal - this.invoice.discount + this.invoice.fee : 0;
    }
    /**
     * trả về tên phương thức thanh toán
     * @param type
     * @returns string
     * @example this.setPaymentName(1)
     */
    setPaymentName(type) {
        switch (type) {
            case 1: return this.lang.translate("Cash");
            case 2: return this.lang.translate("Debit");
            case 3: return this.vhQuerySales.getlocalWallet(this.invoice.id_wallet).name;
        }
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
     * trả về chuỗi thông tin địa chỉ của customer
     * @param partner
     * @returns string
     * @example let addr = this.renderAddress(customer_info)
     */
    renderAddress(partner) {
        return (partner.address ? partner.address : '') +
            (partner.district ? ', ' + partner.district : '') +
            (partner.province ? ', ' + partner.province : '') +
            (partner.country ? ', ' + partner.country : '');
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
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
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice: this.invoice, invoice_detail: this.invoice_detail }, false, false, `modal-print-${printer['_id']}`);
        }, (err) => {
            let name = 'Sales';
            this.vhComponent.alertMessage(this.lang.translate("Function"), "", this.lang.translate("Please turn on the printer function"), "OK")
                .then(() => this.router.navigate(['/sales/dashboard/manage/printer', 'page_desktop_sales'], { state: name }));
        });
    }
    /**
     * trả về component của trang in tương ứng
     * @example this.renderPrintPage('print_size_a4')
     * @returns component
     */
    renderPrintPage(type) {
        switch (type) {
            case 'print_size_k57_3c': return src_app_sales_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__.SalesK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__.SalesK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.SalesK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_3__.SalesA5Component;
            case 'print_size_a4': return src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_4__.SalesA4Component;
            default: return src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_4__.SalesA4Component;
        }
    }
    /**
     * trở về trang phát hành hóa đơn tiki
     * @example this.goBack()
     */
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods'], { state: { dataRestore: this.dataRestore } });
    }
    ngAfterViewChecked() {
        if (document.getElementById('sales-invoice-detail-today') && document.querySelector(".sales-cart-header") && document.querySelector(".ant-table-thead") && document.querySelector(".ant-table-pagination")) {
            this.tableHeight = document.getElementById('sales-invoice-detail-today').clientHeight - document.querySelector(".sales-cart-header").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".ant-table-pagination").clientHeight - 40 + "px";
        }
        this.cdRef.detectChanges();
    }
    /**
     * router trang cập nhật phát hành hóa đơn tiki
     * @example this.goToCart()
     */
    goToCart() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods/edit'], { state: { dataRestore: this.dataRestore, invoiceDetail: this.invoice_detail, invoice: this.invoice, billTiki: this.billTiki } });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["bill-type1-tiki-detail"]], decls: 5, vars: 4, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "sales-invoice-detail-today", 4, "ngIf"], ["id", "sales-invoice-detail-today"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline"], [2, "margin-left", "4px"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], [1, "invoiceDetail-item"], ["nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzNoResult"], ["rowSelectionTable", ""], ["nzWidth", "35%"], ["nzWidth", "15%", "nzAlign", "center"], ["nzWidth", "15%", "nzAlign", "right"], ["nzWidth", "20%", "nzAlign", "right"], ["style", "cursor: pointer;", 4, "ngFor", "ngForOf"], [1, "sales-bills", "not-continue-sell"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], [2, "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], [2, "cursor", "pointer"], [4, "ngIf"], ["nzAlign", "center"], ["nzAlign", "right"], [2, "font-size", "0.7rem"], ["class", "sub-name", 4, "ngFor", "ngForOf"], [1, "sub-name"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function DetailComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, DetailComponent_nz_layout_4_Template, 128, 90, "nz-layout", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.invoice);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 66% 33%;\n  grid-template-rows: 65% 35%;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 1/2;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 92%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills.not-continue-sell[_ngcontent-%COMP%] {\n  grid-template-rows: 20% 15% 63%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 2/3;\n  display: grid;\n  grid-template-columns: 100%;\n  align-content: space-between;\n  line-height: 1.8;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 80%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .payment-print[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  color: #fff;\n  border: none;\n  font-size: 0.9rem;\n  width: 100%;\n  height: 50px;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n.sub-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ion-color-vh-gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7QUFFSjtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FBRUY7QUFERTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBR0o7QUFGSTs7OztFQUlFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUlOO0FBRkk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlOO0FBSE07RUFDRSxVQUFBO0FBS1I7QUFKUTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFNVjtBQUpRO0VBQ0Usa0JBQUE7QUFNVjtBQUhNO0VBQ0UsV0FBQTtBQUtSO0FBSlE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFNVjtBQUxVO0VBQ0UsZUFBQTtBQU9aO0FBTFU7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0FBT1o7QUFGSTtFQUNFLCtCQUFBO0FBSU47QUFGSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFJTjtBQUhNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBS1I7QUFKUTtFQUNFLGtCQUFBO0FBTVY7QUFITTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFLUjtBQUhNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUtSO0FBSE07RUFFRSxhQUFBO0VBQ0EsOEJBQUE7QUFJUjtBQUZNO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSVI7QUFIUTtFQUNFLGlCQUFBO0FBS1Y7QUFGVTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQUlaO0FBQVU7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQUVaO0FBRU07RUFDRSx1QkFBQTtBQUFSO0FBQ1E7RUFDRSxpRUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNWO0FBS0E7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FBRkY7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0Esa0JBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQXVCLGdCQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLG1DQUFBO0FBRTVCO0FBQ0E7RUFDRSxVQUFBO0VBQVksa0NBQUE7QUFHZDtBQUFBO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtBQUdGIiwiZmlsZSI6ImRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBpIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDk1JTtcclxuICAuc2FsZXMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjYlIDMzJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNjUlIDM1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICYtY2FydCxcclxuICAgIC5zYWxlcy1iaWxscy1zdGFmZixcclxuICAgIC5zYWxlcy1iaWxscy1jdXN0b21lcixcclxuICAgIC5zYWxlcy1iaWxscy1jb250ZW50IHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAxNDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgICYtY2FydCB7XHJcbiAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgIGdyaWQtY29sdW1uOiAxLzI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICBoZWlnaHQ6IDYlO1xyXG4gICAgICAgIC5idG4tZGF0YSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICBoZWlnaHQ6IDkyJTtcclxuICAgICAgICAuaW52b2ljZURldGFpbC1pdGVtIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgJi1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1iaWxscy5ub3QtY29udGludWUtc2VsbCB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIDE1JSA2MyU7XHJcbiAgICB9XHJcbiAgICAmLWJpbGxzIHtcclxuICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgZ3JpZC1jb2x1bW46IDIvMztcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAmLXN0YWZmIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgYiB7XHJcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYtc3RhZmYgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB9XHJcbiAgICAgICYtY3VzdG9tZXIge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgfVxyXG4gICAgICAmLWN1c3RvbWVyID4gZGl2LFxyXG4gICAgICAmLWNvbnRlbnQgPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB9XHJcbiAgICAgICYtY29udGVudCB7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1wYXkge1xyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1ub3RlIHtcclxuICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIC5wYXltZW50LXByaW50IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcbi5jZW50ZXItY29sIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLyogSGlkZSBzY3JvbGxiYXIqL1xyXG4uaGlkZVNjcm9sbGJhciB7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGb3IgRmlyZWZveCAqL1xyXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXHJcbn1cclxuXHJcbi5oaWRlU2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDBweDsgLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxufVxyXG5cclxuLnN1Yi1uYW1lIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 10615:
/*!************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-1/tiki/edit/edit.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k57-col3/sales-k57-col3.component */ 59035);
/* harmony import */ var src_app_sales_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k80-col3/sales-k80-col3.component */ 10419);
/* harmony import */ var src_app_sales_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k80-col4/sales-k80-col4.component */ 81989);
/* harmony import */ var src_app_sales_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-a5/sales-a5.component */ 92166);
/* harmony import */ var src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-a4/sales-a4.component */ 70963);
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../sale-desktop/components/staff/staff.component */ 88963);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _components_modal_customer_tax_modal_customer_tax_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/modal-customer-tax/modal-customer-tax.component */ 30271);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../search/search-product/search-product.component */ 99767);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
































function EditComponent_div_21_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r7.name);
} }
function EditComponent_div_21_ng_container_7_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_div_21_ng_container_7_span_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r15.openModalChooseLot(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r13.getLotNumber(item_r7.lots, item_r7.id_lotproduct));
} }
function EditComponent_div_21_ng_container_7_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_div_21_ng_container_7_span_2_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r19.openModalChooseLot(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "Select lot"));
} }
function EditComponent_div_21_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, EditComponent_div_21_ng_container_7_span_1_Template, 2, 1, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, EditComponent_div_21_ng_container_7_span_2_Template, 3, 3, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r7.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !item_r7.id_lotproduct);
} }
function EditComponent_div_21_span_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_div_21_span_8_ng_container_2_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28); const combo_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r26.openModalChooseLot(combo_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const combo_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r25.getLotNumber(combo_r23.lots, combo_r23.id_lotproduct));
} }
function EditComponent_div_21_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, EditComponent_div_21_span_8_ng_container_2_Template, 3, 1, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", i_r24 == item_r7.combos.length - 1 ? combo_r23.quantity + "x " + combo_r23.name + " (" + ctx_r10.getUnit(combo_r23.units, combo_r23.ratio) + ") " : combo_r23.quantity + "x " + combo_r23.name + " (" + ctx_r10.getUnit(combo_r23.units, combo_r23.ratio) + ") " + " ,", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", combo_r23.id_lotproduct);
} }
function EditComponent_div_21_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", item_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "The products have not been linked"), ")");
} }
function EditComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_div_21_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33); const item_r7 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r32.deleteGoods(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, EditComponent_div_21_span_6_Template, 2, 1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, EditComponent_div_21_ng_container_7_Template, 3, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, EditComponent_div_21_span_8_Template, 3, 2, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, EditComponent_div_21_span_9_Template, 5, 4, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "nz-input-number", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function EditComponent_div_21_Template_nz_input_number_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33); const item_r7 = restoredCtx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r34.checkQuantityProduct(item_r7, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "del", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r7.id_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r7.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", item_r7.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !item_r7.id_product);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", item_r7.quantity)("nzMin", 0.1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(item_r7.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r7.price_origin > item_r7.price ? ctx_r0.vhAlgorithm.vhcurrencyunit(item_r7.price_origin) : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(item_r7.price * item_r7.quantity));
} }
function EditComponent_app_search_product_101_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-search-product", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeSearchProductList", function EditComponent_app_search_product_101_Template_app_search_product_closeSearchProductList_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r35.closeSearchProductList($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("searchProductList", ctx_r1.searchProductList)("default_price_type", 1);
} }
function EditComponent_nz_modal_102_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx_r37.tempDetail.price);
} }
function EditComponent_nz_modal_102_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_nz_modal_102_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r40.isVisibleEditUnitPrice = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_nz_modal_102_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r42.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "Save"));
} }
function EditComponent_nz_modal_102_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "nz-modal", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function EditComponent_nz_modal_102_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r43.isVisibleEditUnitPrice = $event; })("nzOnCancel", function EditComponent_nz_modal_102_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r45.isVisibleEditUnitPrice = false; })("nzOnOk", function EditComponent_nz_modal_102_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r44); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r46.handleEditUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, EditComponent_nz_modal_102_ng_container_2_Template, 8, 7, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, EditComponent_nz_modal_102_ng_template_3_Template, 6, 6, "ng-template", null, 68, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzFooter", _r38)("nzVisible", ctx_r2.isVisibleEditUnitPrice);
} }
function EditComponent_ng_container_105_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 81);
} }
function EditComponent_ng_container_105_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", item_r52._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r52.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](8, 4, item_r52.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](11, 7, item_r52.date_exp, "dd/MM/yyyy"), " ");
} }
function EditComponent_ng_container_105_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "No data"));
} }
function EditComponent_ng_container_105_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "nz-input-group", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "input", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function EditComponent_ng_container_105_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r54); const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r53.searchLot(_r47.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, EditComponent_ng_container_105_ng_template_6_Template, 1, 0, "ng-template", null, 77, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "nz-radio-group", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_105_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r55.tempDetail.id_lotproduct = $event; })("ngModelChange", function EditComponent_ng_container_105_Template_nz_radio_group_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r56.changeLot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, EditComponent_ng_container_105_div_9_Template, 12, 10, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, EditComponent_ng_container_105_div_10_Template, 3, 3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSuffix", _r48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r3.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r3.tempDetail.lots.length);
} }
function EditComponent_ng_template_106_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_ng_template_106_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r57.handleCancelChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_ng_template_106_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r59.handleChooseLot(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r5.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "Ok"));
} }
function EditComponent_nz_modal_108_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "nz-option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "date");
} if (rf & 2) {
    const element_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r68.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](1, 3, element_r68.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", element_r68._id);
} }
function EditComponent_nz_modal_108_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "nz-select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function EditComponent_nz_modal_108_ng_container_2_ng_container_21_ng_container_1_Template_nz_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r71); const data_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit; return data_r65.id_lotproduct = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, EditComponent_nz_modal_108_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template, 2, 6, "nz-option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r65.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", data_r65.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", data_r65.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r66.getUnit(data_r65.units, data_r65.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r65.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r66.vhAlgorithm.vhcurrencyunit(data_r65.price), " ");
} }
function EditComponent_nz_modal_108_ng_container_2_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, EditComponent_nz_modal_108_ng_container_2_ng_container_21_ng_container_1_Template, 14, 9, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", data_r65.lots);
} }
const _c0 = function () { return { y: "400px" }; };
function EditComponent_nz_modal_108_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "nz-table", 87, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, EditComponent_nz_modal_108_ng_container_2_ng_container_21_Template, 2, 1, "ng-container", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzData", ctx_r60.tempDetail.combos)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](19, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 11, "Lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 13, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 15, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 17, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _r63.data);
} }
function EditComponent_nz_modal_108_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_nz_modal_108_ng_template_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r73.show_modal_select_lots_combo = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_nz_modal_108_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return ctx_r75.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "Ok"));
} }
function EditComponent_nz_modal_108_Template(rf, ctx) { if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "nz-modal", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function EditComponent_nz_modal_108_Template_nz_modal_nzVisibleChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r77); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r76.show_modal_select_lots_combo = $event; })("nzOnCancel", function EditComponent_nz_modal_108_Template_nz_modal_nzOnCancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r77); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r78.show_modal_select_lots_combo = false; })("nzOnOk", function EditComponent_nz_modal_108_Template_nz_modal_nzOnOk_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r77); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r79.handleChooseLotCombo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, EditComponent_nz_modal_108_ng_container_2_Template, 22, 20, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, EditComponent_nz_modal_108_ng_template_3_Template, 6, 6, "ng-template", null, 86, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 4, "Select lot number for products in combo"), ": ", ctx_r6.tempDetail.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzFooter", _r61)("nzVisible", ctx_r6.show_modal_select_lots_combo);
} }
const _c1 = function () { return { minRows: 2, maxRows: 4 }; };
class EditComponent {
    constructor(router, vhComponent, languageService, vhQuerySales, vhAlgorithm, vhAuth, fncService, nzModalService, cdf) {
        this.router = router;
        this.vhComponent = vhComponent;
        this.languageService = languageService;
        this.vhQuerySales = vhQuerySales;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.fncService = fncService;
        this.nzModalService = nzModalService;
        this.cdf = cdf;
        this.invoice = this.router.getCurrentNavigation().extras.state.invoice;
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore; //nhớ dữ liệu truyền từ trang trước
        this.billTiki = this.router.getCurrentNavigation().extras.state.billTiki;
        this.employee = {};
        this.customer = {};
        this.pickerTime = new Date();
        this.checkPrinter = false;
        this.validProdDetail = true; //nếu biến này = false tức có sp tiki chưa được liên kết với app
        this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
        this.invoiceDetail = this.router.getCurrentNavigation().extras.state.invoiceDetail;
        this.subTotal = 0;
        this.taxValue = 0;
        this.isOpenModalTaxCustomer = false;
        // ------thoát trang-----
        this.isExit = false;
        /**Phần thêm sản phẩm bổ sung
         * Note : không tính tiền sản phẩm này
         */
        this.searchProductList = false;
        // -------modal edit unit price-------
        this.isVisibleEditUnitPrice = false;
        this.warning_lot_expried = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').warning_lot_expried;
        this.show_modal_select_lots = false;
        this.list_search_lot = [];
        this.show_modal_select_lots_combo = false;
    }
    /**Khởi tạo hóa đơn và merge sp của tiki vào billDetail */
    initBill() {
        this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
        this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
        this.setSubTotal();
        this.pickerTime = new Date(this.invoice.date);
    }
    setSubTotal() {
        let subTotal = 0;
        for (let i of this.invoiceDetail) {
            subTotal += (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
        this.setTotal();
    }
    setTotal() {
        this.invoice.total = this.subTotal - this.invoice.discount + this.invoice.fee > 0 ? this.subTotal - this.invoice.discount + this.invoice.fee : 0;
        this.cdf.detectChanges();
    }
    ngOnInit() {
        this.initBill();
        this.eventKeypress();
        let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
        if (printer)
            this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
        this.vhAlgorithm.waitingStack().then(() => {
            this.discount_price = this.vhAlgorithm.vhnumeral(".discount-price");
            this.invoice_fee = this.vhAlgorithm.vhnumeral(".invoice-fee");
            // this.platform_price = this.vhAlgorithm.vhnumeral(".platform-price")
        });
    }
    ngOnDestroy() {
        document.removeEventListener('keydown', this.event, false);
        window.removeEventListener('beforeunload', this.closerBrower, false);
    }
    eventKeypress() {
        this.event = (event) => {
            const keycode = event.keyCode;
            if (keycode === 112 || keycode === 113)
                event.preventDefault();
            switch (keycode) {
                case 112:
                    this.payInvoice(false);
                    break;
                case 113: {
                    if (this.checkPrinter)
                        this.payInvoice(true);
                    break;
                }
                case 114: {
                    this.searchProductList = !this.searchProductList;
                    break;
                }
            }
        };
        //sự kiện f5, close tab...
        this.closerBrower = (event) => {
            (event || window.event).returnValue = 'Changes you made may not be saved';
            return 'Changes you made may not be saved';
        };
        window.addEventListener('beforeunload', this.closerBrower);
        document.addEventListener('keydown', this.event, false);
    }
    goBack() {
        this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Are you sure to cancel the sales order")}?`, "OK", this.languageService.translate('Cancel'))
            .then(() => { this.isExit = true; this.router.navigate(["/sales/dashboard/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods"], { state: { dataRestore: this.dataRestore } }); }, () => { });
    }
    // -------set employee-------
    closeAndReceiveEmployee(event) {
        if (event) {
            this.invoice.id_employee = (event);
        }
    }
    setPickerTime(event) {
        if (event.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime()) {
            this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the registration date (")} ${this.fncService.formatDate(this.vhAuth.getStore().registrationdate)} ${")"}`, 8000);
            this.pickerTime = new Date(this.invoice.date);
            this.invoice.date = (this.pickerTime.toISOString());
        }
        else
            this.vhQuerySales.getValidityDate(new Date(event)).then((validitydate) => {
                if (validitydate == null)
                    this.invoice.date = (event);
                else {
                    this.pickerTime = new Date(this.invoice.date);
                    this.invoice.date = (this.pickerTime.toISOString());
                    this.vhComponent.alertMessageDesktop("warning", `${this.languageService.translate("You can only create or edit the invoice from the date")} ${this.fncService.formatDate(validitydate)}`, 8000);
                }
            });
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
    compareSubTotal() {
        let sub = this.invoiceDetail.reduce((prev, next) => prev + next.quantity * next.price, 0);
        if (sub == this.subTotal)
            return true;
        return false;
    }
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map(item => {
            if (!item.pmtype) {
                let detail = {
                    id_product: item.id_product,
                    ptype: item.ptype,
                    price: item.price,
                    quantity: item.quantity,
                    ratio: item.ratio,
                    price_origin: item.price_origin,
                };
                if (item.id_lotproduct)
                    detail['id_lotproduct'] = item.id_lotproduct;
                if (item.id_subproduct)
                    detail['id_subproduct'] = item.id_subproduct;
                if (item.ptype == 5) {
                    detail['combos'] = item.combos.map(combo => {
                        let product = {
                            id_product: combo.id_product,
                            price: combo.price,
                            quantity: combo.quantity,
                            ptype: combo.ptype || combo.type,
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
        }).filter(item => item);
    }
    payInvoice(print) {
        if (this.vhAuth.checkMyPermission("sales_enable_payment")) {
            if (this.compareSubTotal()) {
                this.vhComponent.alertConfirm(!print ? `${this.languageService.translate("Pay")}?` : `${this.languageService.translate("Pay & Print")}?`, "", "", "OK", this.languageService.translate("Cancel"))
                    .then(() => {
                    this.vhComponent.showLoading("", "transparent-loading").then(() => {
                        this.createOrUpdate(1).then((bill) => {
                            this.vhComponent.hideLoading(0).then(() => {
                                this.vhComponent.showToast(2000, `${this.languageService.translate("Issue invoice")} ${this.languageService.translate("Successfully").toLocaleLowerCase()}`, "success-toast");
                                if (print)
                                    this.handlePrint();
                                else
                                    this.handle(true);
                            });
                        }).catch(err => { this.vhComponent.hideLoading(0); this.vhComponent.showToast(2000, err); });
                    });
                }, () => { });
            }
            else
                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("The total price of the product is not equal to the subtotal"));
        }
        else
            this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
    }
    createOrUpdate(bill_type) {
        return new Promise((resolve, reject) => {
            this.vhQuerySales.updateBill_Billdetail(this.invoice._id, this.invoice, this.getCreateUpdateInvoiceDetail()).then(res => resolve(res)).catch(err => reject(err));
        });
    }
    /**
    * lấy thông tin dữ liệu trang in
    * @returns Promise<any>
    * @example this.checkPrint()
    */
    checkPrint() {
        return new Promise((resolve, rejects) => {
            let printer = this.vhQuerySales.getLocalPrintPage('page_desktop_sales');
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
            case 'print_size_k57_3c': return src_app_sales_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_0__.SalesK57Col3Component;
            case 'print_size_k80_3c': return src_app_sales_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_1__.SalesK80Col3Component;
            case 'print_size_k80_4c': return src_app_sales_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_2__.SalesK80Col4Component;
            case 'print_size_a5': return src_app_sales_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_3__.SalesA5Component;
            case 'print_size_a4': return src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_4__.SalesA4Component;
            default: return src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_4__.SalesA4Component;
        }
    }
    handle(update) {
        this.isExit = true;
        if (update)
            this.dataRestore['update'] = true;
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods'], { state: { dataRestore: this.dataRestore } });
    }
    handlePrint() {
        this.checkPrint().then((printer) => {
            if (printer)
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice: this.invoice, invoice_detail: this.invoiceDetail }, false, false, `modal-print-${printer['_id']}`).then((modal) => {
                    modal.onWillDismiss().then(() => this.handle(true));
                });
        }, (err) => this.handle(true));
    }
    checkDeactivate(currentRoute, currentState, nextState) {
        return nextState.url == '/login' ? true : (this.isExit ? this.isExit : this.vhComponent.alertConfirm(this.languageService.translate("Confirm"), "", this.languageService.translate("Are you sure to cancel the sales order"), "OK", (this.languageService.translate("Cancel"))).then(() => { return true; }).catch(() => { return false; }));
    }
    closeSearchProductList(data) {
        if (data) {
            if (data.manylot && !data.id_lotproduct)
                this.openModalChooseLot(data);
            else if (data.combos && data.combos.filter(e => e.lots && !e.id_lotproduct).length) {
                this.tempDetail = data;
                this.show_modal_select_lots_combo = true;
            }
            else
                this.addInvoiceDetailExtraEcommerce(data);
        }
        this.searchProductList = false;
    }
    addInvoiceDetailExtraEcommerce(value) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == value['_id'] && detail['free']);
        if (index != -1) {
            if (this.invoiceDetail[index]['quantity'] < 9999999999)
                this.invoiceDetail[index]['quantity'] += 1;
        }
        else {
            let detail = {
                name: value.name,
                id_product: value._id,
                quantity: 1,
                ptype: value.type,
                unit: value.unit,
                units: value.units,
                ratio: value.ratio,
                price: 0,
                price_origin: value.price,
                id_category: value.id_category,
                free: true,
                id_subproduct: value.id_subproduct,
                lots: value.lots,
                id_lotproduct: value.id_lotproduct,
            };
            if (value.type == 5) {
                detail['subComboName'] = value.subComboName;
                detail['combos'] = [...value.combos.map(item => {
                        let product = {
                            id_product: item.id_product, name: item.name, ptype: item.type,
                            price: 0, quantity: item.quantity, id_subproduct: item.id_subproduct,
                            lots: item.lots,
                            id_lotproduct: item.id_lotproduct, units: item.units, ratio: item.ratio,
                            free: true //nếu có trường này thì được quyền chỉnh số lượng
                        };
                        return product;
                    })];
            }
            this.invoiceDetail.unshift(detail);
        }
    }
    checkQuantityProduct(product, event) {
        const MIN_PRICE = 1;
        const oldQuantity = product.quantity;
        const oldPrice = product.price;
        const originalTotal = oldQuantity * oldPrice;
        const newQuantity = event || 1;
        const newPrice = originalTotal / newQuantity;
        if (newPrice < MIN_PRICE) {
            return;
        }
        product.quantity = newQuantity;
        product.price = newPrice;
        this.setSubTotal();
        this.cdf.detectChanges();
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
            item.ratio = parseFloat(unit.ratio);
        }
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
            this.isVisibleEditUnitPrice = false;
            this.setSubTotal();
        }
        else {
            this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
        }
    }
    deleteGoods(detail) {
        this.vhComponent.alertConfirm("", "", `${this.languageService.translate("Delete")} ${detail.name}?`, "OK", this.languageService.translate("Cancel"))
            .then(() => this.removeInvoiceDetail(detail.id_product), () => { });
    }
    removeInvoiceDetail(id) {
        let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == id);
        if (index != -1) {
            this.invoiceDetail.splice(index, 1);
            this.setSubTotal();
        }
    }
    /**
    * Thêm sản phẩm đã bán vào cart
    */
    addInvoiceDetail(order_items) {
        let products = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].tikis && item[this.id_branch].tikis.length >= 0);
        for (let item of order_items) {
            let findSuccess = false;
            for (let productOfBranch of products) {
                let findProduct = productOfBranch[this.id_branch].tikis.find(data => data.product_id == item.product.id);
                if (findProduct) {
                    findSuccess = true;
                    this.addInvoiceDetailTiki(item.price, item.qty, productOfBranch, true);
                    break;
                }
            }
            if (!findSuccess) {
                this.addInvoiceDetailTiki(item.price, item.qty, { name: item.product.name }, false);
                this.validProdDetail = false;
            }
        }
    }
    addInvoiceDetailTiki(price, quantity, product, exist) {
        if (exist) {
            const productToAdd = {
                name: product.name,
                id_product: product._id,
                quantity: quantity,
                ptype: product.type,
                unit: product.unit,
                price: price,
                ratio: 1,
                units: product.units,
                price_origin: product.price_origin || null,
                id_subproduct: product.id_subproduct,
                lots: product.lots,
                id_lotproduct: product.id_lotproduct,
                free: false //nếu có trường này true thì được quyền chỉnh số lượng
            };
            if (product.type == src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_5__.VhType.COMBO) {
                productToAdd['combos'] = product.combos;
            }
            this.invoiceDetail.unshift(productToAdd);
        }
        else {
            this.invoiceDetail.unshift({
                id_product: null,
                quantity: quantity,
                price: price,
                ptype: 1,
                ratio: 1,
                name: product.name
            });
        }
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
    handleChooseLotCombo() {
        if (this.tempDetail.combos.filter(item => item.lots && !item.id_lotproduct).length)
            this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Vui lòng chọn lô cho sản phẩm thuộc combo này"));
        else {
            this.show_modal_select_lots_combo = false;
            this.closeSearchProductList(this.tempDetail);
        }
    }
    onClose(event) {
        this.isOpenModalTaxCustomer = false;
    }
    /**
     * Khi ok trong modal chỉnh sửa customer tax
     * @param customerTaxInfo
     */
    onOkEditTax(customerTaxInfo) {
        this.isOpenModalTaxCustomer = false;
        Object.assign(this.invoice, customerTaxInfo);
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_7__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_8__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef)); };
EditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["bill-type1-tiki-edit"]], decls: 110, vars: 81, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales", "hide-best-selling"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["target", "_blank", 3, "href"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 2, "width", "97%", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], [1, "sales-bills-staff-name"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], [1, "sales-bills-customer", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", "nz-row", "", 1, "sales-bills-customer-info"], [2, "width", "100%", "margin-bottom", "12px"], [1, "sales-bills-customer-info-name"], [1, "sales-bills-customer-info-phone"], ["nz-col", "", "nzSpan", "24", "nz-row", "", 1, "sales-bills-customer-info", 2, "margin-top", "12px"], [2, "width", "100%", "margin-bottom", "12px", "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "outline", 2, "font-size", "0.9rem", "color", "var(--ion-color-vh-red)", ";margin-left", "4px", 3, "nzTooltipTitle"], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "nz-no-border", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "nz-no-border", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-input", "", 1, "nz-hover-border", 3, "ngModel", "placeholder", "nzAutosize", "ngModelChange"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditUnitPrice2", ""], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "isOpenModal", "invoice", "onClose", "onOk"], [1, "invoiceDetail-item"], ["nz-row", ""], ["nz-col", "", "nzSpan", "1", 3, "click"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "8"], [1, "invoiceDetail-item-name"], ["class", "invoiceDetail-item-name-linked", 4, "ngIf"], [4, "ngIf"], ["style", "font-size: 0.75rem; color: var(--ion-color-vh-black); font-weight: normal;", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "5", 2, "text-align", "right"], [3, "ngModel", "nzMin", "ngModelChange"], ["nz-col", "", "nzSpan", "5", 1, "invoiceDetail-item-price", "text-end"], [1, "max-width-two-line", 2, "border-bottom", "1px var(--ion-color-vh-gray) solid", "margin-left", "16px"], [2, "margin-left", "5px", "font-size", "0.8rem"], [1, "max-width-two-line"], [1, "invoiceDetail-item-name-linked"], ["style", "color:var(--ion-color-vh-green);cursor: pointer;", 3, "click", 4, "ngIf"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], [2, "font-size", "0.75rem", "color", "var(--ion-color-vh-black)", "font-weight", "normal"], [1, "invoiceDetail-item-name-notlinked"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "8", 1, "center-col"], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], [2, "width", "100%", 3, "ngModel", "ngModelChange"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], [2, "text-align", "center"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice3", ""], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]], template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_Template_button_click_16_listener() { return ctx.searchProductList = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, EditComponent_div_21_Template, 22, 9, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "app-staff", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeAndReceiveEmployee", function EditComponent_Template_app_staff_closeAndReceiveEmployee_29_listener($event) { return ctx.closeAndReceiveEmployee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "nz-date-picker", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_nz_date_picker_ngModelChange_34_listener($event) { return ctx.pickerTime = $event; })("ngModelChange", function EditComponent_Template_nz_date_picker_ngModelChange_34_listener($event) { return ctx.setPickerTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "b", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_Template_span_click_45_listener() { return ctx.isOpenModalTaxCustomer = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](63, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function EditComponent_Template_input_blur_64_listener() { return ctx.editDiscount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](68, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function EditComponent_Template_input_blur_69_listener() { return ctx.editFee(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](73, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](91, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_textarea_ngModelChange_92_listener($event) { return ctx.invoice.note = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](93, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](95, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_Template_button_click_95_listener() { return ctx.payInvoice(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](97, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_Template_button_click_98_listener() { return ctx.payInvoice(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](101, EditComponent_app_search_product_101_Template, 1, 2, "app-search-product", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](102, EditComponent_nz_modal_102_Template, 5, 5, "nz-modal", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "nz-modal", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function EditComponent_Template_nz_modal_nzVisibleChange_103_listener($event) { return ctx.show_modal_select_lots = $event; })("nzOnCancel", function EditComponent_Template_nz_modal_nzOnCancel_103_listener() { return ctx.handleCancelChooseLot(); })("nzOnOk", function EditComponent_Template_nz_modal_nzOnOk_103_listener() { return ctx.handleChooseLot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](105, EditComponent_ng_container_105_Template, 11, 7, "ng-container", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](106, EditComponent_ng_template_106_Template, 6, 7, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](108, EditComponent_nz_modal_108_Template, 5, 6, "nz-modal", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "app-modal-customer-tax", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClose", function EditComponent_Template_app_modal_customer_tax_onClose_109_listener($event) { return ctx.onClose($event); })("onOk", function EditComponent_Template_app_modal_customer_tax_onOk_109_listener($event) { return ctx.onOkEditTax($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 44, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzGutter", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 46, "Order number"), ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("href", "https://sellercenter.tiki.vn/new#/order/list?filter_date_by=allDays&keyword=", ctx.billTiki.code, "&limit=20&order_status_tab=all&page=1&search_type=code&seller_id=5346", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.billTiki.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 48, "Search (F4)"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.invoiceDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](28, 50, "Salesman"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id_employee", ctx.invoice.id_employee);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](33, 52, "Sales date"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.pickerTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](39, 54, "Customer information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.customer.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.customer.phone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](48, 56, "Invoice information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](52, 58, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](56, 60, "SubTotal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.subTotal));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](62, 62, "Platform fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTooltipTitle", "Vui l\u00F2ng ki\u1EC3m tra ph\u00ED s\u00E0n ch\u00EDnh x\u00E1c tr\u01B0\u1EDBc khi ph\u00E1t h\u00E0nh h\u00F3a \u0111\u01A1n");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.discount));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](68, 64, "Fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.fee));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](73, 66, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.total));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](80, 68, "Pay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.payment));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](87, 70, "Rest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.invoice.total - ctx.invoice.payment), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](93, 72, "Enter note..."));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.invoice.note)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](80, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.validProdDetail || !ctx.checkPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](97, 74, "Save & Print"), " (F2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.validProdDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](100, 76, "Save"), " (F1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.searchProductList);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](104, 78, "Select lot number"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzFooter", _r4)("nzVisible", ctx.show_modal_select_lots);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.show_modal_select_lots_combo);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("isOpenModal", ctx.isOpenModalTaxCustomer)("invoice", ctx.invoice);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_19__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_9__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__.NzTooltipDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzAutosizeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalContentDirective, _components_modal_customer_tax_modal_customer_tax_component__WEBPACK_IMPORTED_MODULE_10__.ModalCustomerTaxComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__.NzInputNumberComponent, _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_11__.SearchProductComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__.NzRadioComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTbodyComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 500;\n  transition: 0.1s;\n  color: var(--ion-color-vh-green) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 0.1s;\n  border-bottom: 2px solid var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 93%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 1.1rem;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name-linked[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name-notlinked[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-red) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-price[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 8px 32px;\n  width: 20px;\n  cursor: not-allowed;\n  border-radius: 4px;\n  color: var(--ion-color-vh-gray);\n  border: 1px solid var(--ion-color-vh-gray);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 18% 17% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info-name[_ngcontent-%COMP%] {\n  width: 60%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info-phone[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-rest[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-rest[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .hide-best-selling[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n  grid-row-gap: 0px;\n  row-gap: 0px;\n}\n.title[_ngcontent-%COMP%] {\n  align-self: center;\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n  align-self: center;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDRSxlQUFBO0FBRU47QUFDRTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0FBR047QUFGTTs7OztFQUlFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUlSO0FBRk07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlSO0FBSFE7RUFDRSxVQUFBO0FBS1Y7QUFKVTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQU1aO0FBSlU7RUFDRSxnQkFBQTtFQUNBLGtEQUFBO0FBTVo7QUFIUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUtWO0FBSlU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBTVo7QUFMWTtFQUNFLGlCQUFBO0FBT2Q7QUFOYztFQUNFLGlCQUFBO0FBUWhCO0FBTmM7RUFDRSx5Q0FBQTtBQVFoQjtBQUxZO0VBQ0UsZUFBQTtBQU9kO0FBTFk7RUFDRSxrQkFBQTtBQU9kO0FBTmM7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO0FBUWhCO0FBRk07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBQUlSO0FBSFE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFLVjtBQUpVO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtaO0FBSlk7OztFQUVFLFVBQUE7RUFDQSxlQUFBO0FBT2Q7QUFKVTtFQUNFLGtCQUFBO0FBTVo7QUFIUTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUtWO0FBSlU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQU1aO0FBTFk7RUFDRSxVQUFBO0FBT2Q7QUFMWTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBT2Q7QUFIUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUtWO0FBSFE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUtWO0FBSFk7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFLZDtBQUFZO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBRWQ7QUFFWTtFQUNFLFVBQUE7QUFBZDtBQUlZO0VBQ0UsZUFBQTtBQUZkO0FBSVk7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBRmQ7QUFNUTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7QUFKVjtBQUtVO0VBQ0UsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBSFo7QUFLVTtFQUNFLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FBSlo7QUFTSTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFBQSxZQUFBO0FBUE47QUFVRTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUEo7QUFTRTs7RUFFRSxpQkFBQTtBQU5KO0FBUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9FLGtCQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUF1QixnQkFBQTtFQUN2Qix3QkFBQTtFQUEwQixtQ0FBQTtBQUY5QjtBQUtFO0VBQ0UsVUFBQTtFQUFZLGtDQUFBO0FBRGhCO0FBSUU7RUFDRSxXQUFBO0FBREo7QUFFRztFQUNJLDBCQUFBO0FBQVA7QUFJRTtFQUNDLFdBQUE7QUFESCIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnNhbGVzIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY1JSAzNSU7XHJcbiAgICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgICYtY2FydCxcclxuICAgICAgLnNhbGVzLWJpbGxzLXN0YWZmLFxyXG4gICAgICAuc2FsZXMtYmlsbHMtY3VzdG9tZXIsXHJcbiAgICAgIC5zYWxlcy1iaWxscy1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgICYtY2FydCB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJi1oZWFkZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2JTtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWludm9pY2VEZXRhaWwge1xyXG4gICAgICAgICAgaGVpZ2h0OiA5MyU7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAuaW52b2ljZURldGFpbC1pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4xcmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgJi1uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAmLWxpbmtlZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJi1ub3RsaW5rZWQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1yZWQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtcHJpY2Uge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXF1YW50aXR5IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDMycHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLWJpbGxzIHtcclxuICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE4JSAxNyUgNTUlIDEwJTtcclxuICAgICAgICAmLXN0YWZmIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgJi10aW1lLFxyXG4gICAgICAgICAgJi1uYW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBuei1kYXRlLXBpY2tlcixcclxuICAgICAgICAgICAgYXBwLXN0YWZmIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jdXN0b21lciB7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAmLWluZm8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXBob25lIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbnRlbnQgPiBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBkaXYgPiB7XHJcbiAgICAgICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1kaXNjb3VudCxcclxuICAgICAgICAgICYtZmVlIHtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtdGF4IHtcclxuICAgICAgICAgICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1yZXN0IHtcclxuICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAub3JkZXItYW5kLXByaW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgICAgICAgLy9tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhpZGUtYmVzdC1zZWxsaW5nIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICAgIHJvdy1nYXA6IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlucHV0LFxyXG4gIHRleHRhcmVhIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICAuY2VudGVyLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLyogSGlkZSBzY3JvbGxiYXIqL1xyXG4gIC5oaWRlU2Nyb2xsYmFyIHtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXHJcbiAgfVxyXG4gIFxyXG4gIC5oaWRlU2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4OyAvKiBGb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLnJhZGlvLXB1cmNoYXNlICBzcGFue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIC5hbnQtcmFkaW97XHJcbiAgICAgICBtYXgtd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLnJhZGlvLXB1cmNoYXNlICAuYW50LXJhZGlve1xyXG4gICB3aWR0aDogMTZweDsgXHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 55986:
/*!**********************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods/add/add.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComponent": () => (/* binding */ AddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_bill_type_bill_type_1_tiki_add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../components/bill-type/bill-type-1/tiki/add/add.component */ 75485);


class AddComponent {
    constructor() {
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(); };
AddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 1, vars: 0, template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "bill-type1-tiki-add");
    } }, directives: [_components_bill_type_bill_type_1_tiki_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36683:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods/detail-tiki/detail-tiki.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailTikiComponent": () => (/* binding */ DetailTikiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/divider */ 72254);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 70325);















function DetailTikiComponent_nz_layout_4_nz_table_38_tr_33_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("M\u00E3 s\u1EA3n ph\u1EA9m");
} }
function DetailTikiComponent_nz_layout_4_nz_table_38_tr_33_i_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailTikiComponent_nz_layout_4_nz_table_38_tr_33_i_13_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r7.vhComponent.copyValue(data_r4.product.seller_product_code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DetailTikiComponent_nz_layout_4_nz_table_38_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "b", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "b", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailTikiComponent_nz_layout_4_nz_table_38_tr_33_Template_b_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const data_r4 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r10.vhComponent.copyValue(data_r4.product.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DetailTikiComponent_nz_layout_4_nz_table_38_tr_33_span_9_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, DetailTikiComponent_nz_layout_4_nz_table_38_tr_33_i_13_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailTikiComponent_nz_layout_4_nz_table_38_tr_33_Template_i_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const data_r4 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r12.vhComponent.copyValue(data_r4.product.sku); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", data_r4.product.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("x", data_r4.qty, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r4.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r4.product.seller_product_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r4.product.seller_product_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", data_r4.product.seller_product_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]("SKU");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r4.product.sku, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 15, "Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.vhAlgorithm.vhcurrencyunit(data_r4.price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.vhAlgorithm.vhcurrencyunit(data_r4.seller_income_detail.item_price + data_r4.seller_income_detail.shipping_fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r3.vhAlgorithm.vhcurrencyunit(data_r4.seller_income_detail.discount.discount_shipping_fee.tiki_subsidy), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("-", ctx_r3.vhAlgorithm.vhcurrencyunit(data_r4.seller_income_detail.discount.discount_shipping_fee.seller_subsidy), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.vhAlgorithm.vhcurrencyunit(data_r4.tiki_fee));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.vhAlgorithm.vhcurrencyunit(data_r4.invoice.seller_income));
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
function DetailTikiComponent_nz_layout_4_nz_table_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-table", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, DetailTikiComponent_nz_layout_4_nz_table_38_tr_33_Template, 38, 17, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzData", ctx_r1.bill.items)("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](33, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 17, "Image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 19, "Product information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 21, "Order value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 23, "Tiki discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 25, "Seller discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 27, "Tiki fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 29, "Revenue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _r2.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 31, "Total"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(ctx_r1.tong_gia_tri_don));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(ctx_r1.tong_tiki_giam_gia));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("-", ctx_r1.vhAlgorithm.vhcurrencyunit(ctx_r1.tong_giam_gia_nha_ban), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(ctx_r1.tong_phi_tra_tiki));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.vhAlgorithm.vhcurrencyunit(ctx_r1.bill.invoice.total_seller_income));
} }
function DetailTikiComponent_nz_layout_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nz-layout", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailTikiComponent_nz_layout_4_Template_span_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.vhComponent.copyValue(ctx_r13.bill.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailTikiComponent_nz_layout_4_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.gotoPrint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "nz-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, DetailTikiComponent_nz_layout_4_nz_table_38_Template, 54, 34, "nz-table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](53, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](67, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](96, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](106, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 33, "Order code"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" #", ctx_r0.bill.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.bill.main_substate_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.bill.tracking_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 35, "Print"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 37, "Order day"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](25, 39, ctx_r0.bill.created_at, "dd/MM/yyyy HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 42, "Payment method"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.bill.payment.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 44, "Product list"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.bill.items.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](43, 46, "Payment information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](47, 48, "Customer information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](53, 50, "Payment_method"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r0.bill.payment.description, " (", ctx_r0.bill.payment.method, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 52, "Customer payment"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.bill.invoice.subtotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](67, 54, "Statement value (estimated)"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.vhAlgorithm.vhcurrencyunit(ctx_r0.bill.invoice.total_seller_income));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](75, 56, "Full_name"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.bill.billing_address.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 58, "Delivery address"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"]("", ctx_r0.bill.billing_address.street, " , ", ctx_r0.bill.billing_address.ward, ", ", ctx_r0.bill.billing_address.district, ", ", ctx_r0.bill.billing_address.region, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](90, 60, "Shipping information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](96, 62, "Shipping package"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.bill.shipping.plan.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.bill.shipping.plan.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](106, 64, "Allowed to view goods"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", "Cho ph\u00E9p xem h\u00E0ng", " ");
} }
class DetailTikiComponent {
    constructor(router, vhQuerySales, vhComponent, cdRef, vhAlgorithm, functionService) {
        this.router = router;
        this.vhQuerySales = vhQuerySales;
        this.vhComponent = vhComponent;
        this.cdRef = cdRef;
        this.vhAlgorithm = vhAlgorithm;
        this.functionService = functionService;
        this.tong_gia_tri_don = 0;
        this.tong_tiki_giam_gia = 0;
        this.tong_giam_gia_nha_ban = 0;
        this.tong_phi_tra_tiki = 0;
        this.bill = this.router.getCurrentNavigation().extras.state.bill;
        this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore;
        this.bill.order_date_time_stamp = new Date((this.bill.order_date_time_stamp - 7 * 60 * 60) * 1000);
    }
    ngOnInit() {
        for (let item of this.bill.items) {
            item.tiki_fee = this.getTikiFee(item.seller_income_detail.seller_fees);
            this.tong_gia_tri_don += item.seller_income_detail.item_qty * item.seller_income_detail.item_price + item.seller_income_detail.shipping_fee;
            this.tong_tiki_giam_gia += item.seller_income_detail.discount.discount_shipping_fee.tiki_subsidy;
            this.tong_giam_gia_nha_ban += item.seller_income_detail.discount.discount_shipping_fee.seller_subsidy;
            this.tong_phi_tra_tiki += item.tiki_fee;
        }
    }
    getTikiFee(arr) {
        let total = 0;
        for (let i in arr) {
            total += arr[i].final_amount;
        }
        return total;
    }
    ngAfterViewChecked() {
        if (document.querySelector("#order-status-sendo") && document.querySelector(".order-status-sendo-header") && document.querySelector("#bill-info") && document.querySelector("#buyer-info") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.querySelector("#order-status-sendo").clientHeight -
                -document.querySelector(".order-status-sendo-header").clientHeight - document.querySelector("#bill-info").clientHeight - document.querySelector("#buyer-info").clientHeight - 90 + "px";
        }
        if (document.getElementById("order-status-sendo"))
            this.widthScroll = document.getElementById("order-status-sendo").clientWidth + "px";
        this.cdRef.detectChanges();
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods'], {
            state: { dataRestore: this.dataRestore }
        });
    }
    gotoPrint() {
        this.router.navigate(["/sales/dashboard/manage/ecommerce/tiki/print"], { state: { bill: this.bill, dataRestore: this.dataRestore, path: this.router.url, info_Shop: this.vhQuerySales.getlocalShopListTiki()[this.vhQuerySales.getlocalShopListTiki().findIndex(item => item._id == this.dataRestore.id_shop_selected)] } });
    }
}
DetailTikiComponent.ɵfac = function DetailTikiComponent_Factory(t) { return new (t || DetailTikiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_0__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_1__.FunctionService)); };
DetailTikiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailTikiComponent, selectors: [["app-detail-tiki"]], decls: 5, vars: 4, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "order-status-sendo", 4, "ngIf"], ["id", "order-status-sendo"], ["nz-row", "", 1, "order-status-sendo-header"], ["nz-col", "", "nzSpan", "18", 1, "title"], [2, "color", "#ee2624", 3, "click"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "6", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "center-all-content", 2, "width", "8vw", 3, "disabled", "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-row", "", "id", "bill-info"], ["nz-col", "", "nzSpan", "24"], ["nz-row", ""], ["nz-col", "", "nzSpan", "12"], ["nz-col", "", "nzSpan", "24", 1, "title"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzData", "nzPageSize", "nzPageSizeOptions", 4, "ngIf"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["nz-row", "", "id", "buyer-info"], ["nz-col", "", "nzSpan", "12", 2, "padding-right", "16px"], ["nz-col", "", "nzSpan", "12", 1, "text-end"], ["nz-row", "", 1, "order-status-sendo-header", 2, "margin-top", "16px"], ["nz-row", "", 2, "padding-right", "16px"], [2, "color", "gray"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzData", "nzPageSize", "nzPageSizeOptions"], ["salesOrder_show", ""], ["nzLeft", "", "nzWidth", "12%"], ["nzLeft", "", "nzWidth", "23%"], ["nzWidth", "13%"], [4, "ngFor", "ngForOf"], [2, "background-color", "#e6f7ff"], ["colSpan", "2"], ["nzLeft", ""], ["alt", "", 3, "src"], [2, "position", "absolute", "top", "16px", "right", "0"], [3, "click"], [4, "ngIf"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click"]], template: function DetailTikiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DetailTikiComponent_Template_div_click_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DetailTikiComponent_nz_layout_4_Template, 110, 66, "nz-layout", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.bill);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_9__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_12__.NzDividerComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzCellFixedDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_13__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n  overflow: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .order-status-sendo-header[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n}\ni[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC10aWtpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFFSjtBQURJO0VBQ0ksZ0NBQUE7RUFDQSxpQkFBQTtBQUdSO0FBREk7RUFDSSxrQkFBQTtBQUdSO0FBQVE7RUFDSSxVQUFBO0FBRVo7QUFDSTtFQUNJLGdDQUFBO0VBQ0EsMkNBQUE7QUFDUjtBQUVBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImRldGFpbC10aWtpLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5vcmRlci1zdGF0dXMtc2VuZG8taGVhZGVyIHtcclxuICAgICAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIH1cclxufVxyXG5pIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 62634:
/*!****************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods/detail/detail.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailComponent": () => (/* binding */ DetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_bill_type_bill_type_1_tiki_detail_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../components/bill-type/bill-type-1/tiki/detail/detail.component */ 3800);


class DetailComponent {
    constructor() {
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["app-detail"]], decls: 1, vars: 0, template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "bill-type1-tiki-detail");
    } }, directives: [_components_bill_type_bill_type_1_tiki_detail_detail_component__WEBPACK_IMPORTED_MODULE_0__.DetailComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 91803:
/*!************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods/edit/edit.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _components_bill_type_bill_type_1_tiki_edit_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../components/bill-type/bill-type-1/tiki/edit/edit.component */ 10615);


class EditComponent {
    constructor() { }
    ngOnInit() {
    }
}
EditComponent.ɵfac = function EditComponent_Factory(t) { return new (t || EditComponent)(); };
EditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditComponent, selectors: [["app-edit"]], decls: 1, vars: 0, template: function EditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "bill-type1-tiki-edit");
    } }, directives: [_components_bill_type_bill_type_1_tiki_edit_edit_component__WEBPACK_IMPORTED_MODULE_0__.EditComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 49987:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods/issue-delivery-goods.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IssueDeliveryGoodsComponent": () => (/* binding */ IssueDeliveryGoodsComponent)
/* harmony export */ });
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _components_modal_link_product_ecommerce_modal_link_product_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/modal-link-product-ecommerce/modal-link-product-ecommerce.component */ 68886);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ 23530);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 70325);






















function IssueDeliveryGoodsComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 24);
} }
function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_span_10_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_span_10_i_2_Template_i_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); $event.stopPropagation(); return ctx_r23.openModelSelectProductsTiki(item_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_span_10_i_2_Template, 1, 0, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r14.isLinkedToProduct(item_r21) ? "" : "var(--ion-color-vh-red)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx_r14.isLinkedToProduct(item_r21) ? ctx_r14.findProductLinked(item_r21).name : item_r21.product.name, " (SL: ", item_r21.qty, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r14.isLinkedToProduct(item_r21));
} }
function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bill_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, bill_r12.main_substate_text));
} }
function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bill_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, bill_r12.main_state_text));
} }
function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_span_19_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_span_19_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const bill_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); $event.stopPropagation(); return ctx_r28.gotoCreateBill(bill_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "Create invoice"));
} }
function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_span_20_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_span_20_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const bill_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); $event.stopPropagation(); return ctx_r31.gotoDetail(bill_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "View invoice"));
} }
function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_label_22_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_label_22_Template_label_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36); const bill_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r34.checkBillToCreateInvoice($event, bill_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bill_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r20.selectedBills[bill_r12.code]);
} }
function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39); const bill_r12 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r38.gotoDetailTiki(bill_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_Template_i_click_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39); const bill_r12 = restoredCtx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); $event.stopPropagation(); return ctx_r40.vhComponent.copyValue(bill_r12.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_span_10_Template, 4, 5, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_ng_container_12_Template, 4, 3, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_ng_template_13_Template, 3, 3, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_span_19_Template, 4, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_span_20_Template, 4, 3, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_label_22_Template, 1, 1, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bill_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 10, bill_r12.created_at, "dd/MM/yyyy HH:mm"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", bill_r12.code, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", bill_r12.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bill_r12.main_substate_text)("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r11.vhAlgorithm.vhcurrencyunit(bill_r12.invoice.total_seller_income));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !bill_r12.id_bill_delivered_goods);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bill_r12.id_bill_delivered_goods);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !bill_r12.id_bill_delivered_goods ? ctx_r11.billIsLinkedToProduct(bill_r12) : false);
} }
const _c0 = function () { return [20, 30, 40, 50, 100, 200]; };
const _c1 = function (a0) { return { y: a0 }; };
function IssueDeliveryGoodsComponent_div_32_nz_table_2_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nz-table", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function IssueDeliveryGoodsComponent_div_32_nz_table_2_Template_label_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r41.checkAll = $event; })("ngModelChange", function IssueDeliveryGoodsComponent_div_32_nz_table_2_Template_label_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r43.toggleSelectAll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, IssueDeliveryGoodsComponent_div_32_nz_table_2_tr_39_Template, 23, 13, "tr", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzPageSize", 20)("nzPageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](31, _c0))("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](32, _c1, ctx_r9.heightScroll))("nzData", ctx_r9.salesOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 15, "No."));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 17, "Date"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 19, "Order number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 21, "Product"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](23, 23, "Status on Tiki"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](27, 25, "Total"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 27, "Invoice"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (", ctx_r9.countSelectedBill, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](36, 29, "Select"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r9.checkAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _r10.data);
} }
function IssueDeliveryGoodsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, IssueDeliveryGoodsComponent_div_32_nz_table_2_Template, 40, 34, "nz-table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.salesOrder.length > 0)("ngIfElse", _r3);
} }
function IssueDeliveryGoodsComponent_ng_template_33_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "No data"));
} }
function IssueDeliveryGoodsComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, IssueDeliveryGoodsComponent_ng_template_33_div_0_Template, 4, 3, "div", 56);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.load_status);
} }
function IssueDeliveryGoodsComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 1, "Please click the view button"), " ");
} }
function IssueDeliveryGoodsComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "nz-date-picker", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function IssueDeliveryGoodsComponent_ng_template_37_Template_nz_date_picker_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r46.bill_selected.date_control = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, "Date"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r8.bill_selected.date_control);
} }
class IssueDeliveryGoodsComponent {
    constructor(router, lang, vhComponent, vhAlgorithm, vhQuerySales, cdRef, datePipe, nzModalService, vhAuth) {
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
        this.salesOrder = [];
        this.salesSubOrder = [];
        this.date = [new Date(), new Date()];
        this.load_status = false;
        this.dataRestore = {};
        this.bill_selected = {};
        /**Giới hạn thời gian cho xem bill */
        this.disabledDate = (current) => {
            if (current.getTime() < this.minDate.getTime() - 24 * 60 * 60 * 1000)
                return true;
            return false;
        };
        this.minDate = new Date(Date.now() - 24 * 60 * 60 * 1000 * 30);
        this.infoShop = {};
        this.listProductOfBranch = []; // sp của phần mềm có liên kết với tiki
        this.listProductApp = []; //sp của phần mềm
        this.listSubProductApp = []; //sp của app chứa tiki[]
        this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
        this.setHeight = { "max-height": "500px", "height": "500px", "overflow-y": "hidden" };
        this.arrayHidden = []; //mảng này chứa id của những sp đang tạm ẩn
        this.searchProductAppValue = '';
        this.invoice = {
            bill_type: 1,
            cqt_status: 1,
            payment_type: 2,
            id_customer: '',
            id_branch: '',
            id_employee: '',
            id_wallet: 'id_cash',
            date: '',
            total: 0,
            payment: 0,
            tax: 0,
            discount: 0,
            fee: 0,
            note: '',
            price_type: 0,
            order_number_ecommerce: '',
            id_shop: '',
            tax_buyerDisplayName: '',
            tax_buyerLegalName: '',
            tax_buyerTaxCode: '',
            tax_buyerAddressLine: '',
            tax_buyerEmail: '',
            ecommerce_fee_paid_by_seller: 0,
        };
        this.invoiceDetail = [];
        this.employee = {};
        this.customer = {};
        this.subTotal = 0;
        this.visible_affiliate = false; // hiển thị modal chọn sản phẩm phần mềm liên kết
        this.productTikiSelected = null; // sản phẩm tiki được chọn để lien kết
        /* ----------- THANH TOÁN HÓA ĐƠN HÀNG LOẠT ------ */
        this.checkAll = false;
        this.selectedBills = {};
        this.listInvoiceSelected = [];
        this.pickerTime = new Date();
        this.date[0].setHours(0, 0, 0, 0);
        this.date[1].setHours(23, 59, 59, 59);
        this.dataRestore = ((_a = this.router.getCurrentNavigation().extras.state) === null || _a === void 0 ? void 0 : _a.dataRestore) || {};
    }
    ngOnInit() {
        this.initState();
    }
    initState() {
        if (this.dataRestore.id_shop_selected) {
            this.date = this.dataRestore.date;
            this.searchValue = this.dataRestore.searchValue;
            this.salesOrder = this.dataRestore.salesOrder;
            this.salesSubOrder = this.salesOrder;
            if (this.dataRestore['update']) {
                this.dataRestore['update'] = false;
                this.showReport();
            }
            else
                this.load_status = true;
        }
        this.infoShop = this.vhQuerySales.getlocalShopListTiki()[0];
        this.getMinDate();
        this.listProductOfBranch = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].tikis && item[this.id_branch].tikis.length >= 0);
        let localProducts = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden);
        this.listProductApp = localProducts.map(item => {
            if (item[this.id_branch] && item[this.id_branch].tikis && item[this.id_branch].tikis.length) { //filter những sp tiki thuộc id tiki đã chọn
                item[this.id_branch].tikis = [...item[this.id_branch].tikis.filter(prod => prod.id_shop == this.infoShop._id)];
            }
            return Object.assign(Object.assign({}, item), this.vhQuerySales.getUnit_byRatio(item.units, 1));
        });
        this.listSubProductApp = [...this.listProductApp];
    }
    /**
     * Lấy ngày giới hạn được xem báo cáo
    */
    getMinDate() {
        let date = new Date(Date.now() - 24 * 60 * 60 * 1000 * 100);
        this.vhQuerySales.getValidityDate(date).then((validitydate) => {
            this.minDate = validitydate;
            if ((this.minDate.getTime()) < new Date(this.vhAuth.getStore().registrationdate).getTime()) {
                this.disabledDate = (current) => {
                    if (current.getTime() < new Date(this.vhAuth.getStore().registrationdate).getTime() - 24 * 60 * 60 * 1000)
                        return true;
                    return false;
                };
            }
        });
    }
    /**Tìm kiếm hóa đơn */
    search(value) {
        let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
        this.salesOrder = this.vhAlgorithm.searchList(val, [...this.salesSubOrder], ['code']);
    }
    /**
     * search tên sản phẩm trong app viethas
     * @example this.search('Sản phẩm A')
     */
    searchProductApp(value) {
        let val = this.vhAlgorithm.changeAlias(value.trim().toLowerCase());
        this.listProductApp = this.vhAlgorithm.searchList(val, [...this.listSubProductApp], ['name', 'barcode', 'item_code']);
    }
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/issue-invoice'], {
            state: { dataRestore: this.dataRestore }
        });
    }
    changeTime(event) {
        if (event[1].getTime() - event[0].getTime() <= 2678400000) {
        }
        else {
            this.vhComponent.showToast(2000, this.lang.translate("The time to view no more than 30 days"), "alert-toast");
            this.date = [event[0], event[0].getTime() + 2678400000];
        }
    }
    showReport() {
        this.load_status = true;
        this.salesOrder = [];
        this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.vhQuerySales.getSalesOrderListTiki(this.datePipe.transform(new Date(this.date[0].setHours(0, 0, 0)), "yyyy-MM-dd HH:mm:ss").toString(), this.datePipe.transform(new Date(this.date[1].setHours(23, 59, 59)), "yyyy-MM-dd HH:mm:ss").toString(), this.infoShop.access_token, this.infoShop._id)
                .then((result) => {
                this.vhComponent.hideLoading(0);
                result.forEach(item => {
                    if (item.verify_status_delivered_goods)
                        this.salesOrder.push(item);
                });
                this.salesSubOrder = [...this.salesOrder];
                console.log(this.salesOrder);
            })
                .catch(err => this.vhComponent.hideLoading(0));
        });
    }
    changeShop(event) { }
    ngAfterViewChecked() {
        if (document.querySelector("#tiki-issue-invoice") && document.querySelector(".ant-table-thead") && document.querySelector(".tiki-issue-invoice-header") && document.querySelector(".ant-table-pagination")) {
            this.heightScroll = document.querySelector("#tiki-issue-invoice").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".tiki-issue-invoice-header").clientHeight - 90 + "px";
        }
        this.cdRef.detectChanges();
    }
    gotoCreateBill(bill) {
        var _a;
        //tìm customer để loại trừ bug khách hàng bị xóa rồi
        let customer = this.vhQuerySales.getlocalCustomer((_a = this.infoShop.data) === null || _a === void 0 ? void 0 : _a.id_customer);
        if (customer) {
            this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods/add'], {
                state: { dataRestore: Object.assign(Object.assign({}, this.dataRestore), { searchValue: this.searchValue, id_shop_selected: this.infoShop._id, date: this.date, salesOrder: this.salesOrder }), billTiki: bill }
            });
        }
        else
            this.vhComponent.alertMessageDesktop('warning', this.lang.translate('Please update customer in settings'));
    }
    gotoDetail(bill) {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods/detail'], {
            state: { dataRestore: Object.assign(Object.assign({}, this.dataRestore), { searchValue: this.searchValue, id_shop_selected: this.infoShop._id, date: this.date, salesOrder: this.salesOrder }), id: bill.id_bill_delivered_goods, billTiki: bill }
        });
    }
    gotoDetailTiki(bill) {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods/detail-tiki'], {
            state: {
                bill: bill,
                dataRestore: {
                    salesOrder: this.salesOrder, searchValue: this.searchValue,
                    id_shop_selected: this.infoShop._id, listProduct: this.dataRestore.listProduct,
                    date: this.date,
                    salesSubOrder: this.salesSubOrder,
                }
            }
        });
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
        const isZeroPriceCombo = product.type === src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO && product.units[0].price === 0;
        const confirmZeroPriceComboMessage = this.lang.translate("This product is a combo with a price of 0. Do you still want to link it with the product", { platform: 'Tiki' }) + "?";
        this.nzModalService.confirm({
            nzTitle: '<i>' + (isZeroPriceCombo ? confirmZeroPriceComboMessage : this.lang.translate("Confirm")) + '</i>',
            nzIconType: "info-circle",
            nzCancelText: this.lang.translate("Cancel"),
            nzOnOk: () => {
                this.vhComponent.showLoading("", "transparent-loading").then(() => {
                    const id_product_selected = product.id_subproduct ? product.id_subproduct : product['_id'];
                    this.vhQuerySales.addMergeTikiProduct(id_product_selected, [this.productTikiSelected.product.id], this.infoShop['_id']).then((bool) => {
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
                    if (indexProd >= 0)
                        listProduct.splice(indexProd, 1);
                }
            }
        }
        return listProduct;
    }
    toggleSelectAll(checked) {
        this.checkAll = checked;
        this.listInvoiceSelected = []; // reset before adding
        for (let bill of this.salesOrder) {
            const canSelect = !bill.id_bill_delivered_goods && this.billIsLinkedToProduct(bill);
            if (canSelect) {
                this.selectedBills[bill.code] = checked;
                if (checked) {
                    this.listInvoiceSelected.push(bill);
                }
            }
            else {
                // ensure unselect disabled ones
                this.selectedBills[bill.code] = false;
            }
        }
    }
    billIsLinkedToProduct(bill) {
        return bill.items.every(item => this.isLinkedToProduct(item));
    }
    checkBillToCreateInvoice(bool, bill) {
        this.selectedBills[bill.code] = bool;
        if (bool) {
            this.listInvoiceSelected.push(bill);
        }
        else {
            this.listInvoiceSelected = this.listInvoiceSelected.filter(item => item.code != bill.code);
        }
        const allBillsCanSelect = this.salesOrder.filter(b => !b.id_bill_delivered_goods && this.billIsLinkedToProduct(b));
        this.checkAll = allBillsCanSelect.every(b => this.selectedBills[b.code]);
    }
    payInvoice() {
        this.vhComponent.alertConfirm(`${this.lang.translate("Pay")}?`, "", "", "OK", this.lang.translate("Cancel"))
            .then(() => {
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
                const updatePromises = [];
                for (let index = 0; index < this.listInvoiceSelected.length; index++) {
                    const billTiki = this.listInvoiceSelected[index];
                    this.initBill(billTiki);
                    const promise = this.createOrUpdate(1).then((bill) => {
                        this.salesOrder.find(item => item.code == billTiki['code']).id_bill_delivered_goods = bill._id;
                        if (this.invoice.cqt_status !== 1) {
                            this.vhQuerySales.updateBill(bill._id, { cqt_status: this.invoice.cqt_status });
                        }
                        return this.vhQuerySales.updateSalesOrderTiki(this.infoShop._id, billTiki['code'], { id_bill_delivered_goods: bill._id });
                    });
                    updatePromises.push(promise.catch(err => {
                        this.vhComponent.showToast(2000, err);
                        return null;
                    }));
                }
                // Wait for all promises to resolve (or reject caught above)
                Promise.all(updatePromises).then(() => {
                    this.vhComponent.hideLoading(0).then(() => {
                        this.vhComponent.showToast(2000, `${this.lang.translate("Issue invoice")} ${this.lang.translate("Successfully").toLocaleLowerCase()}`, "success-toast");
                    });
                });
            });
        }, () => { });
        // }
        // else this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast")
    }
    createOrUpdate(bill_type) {
        return new Promise((resolve, reject) => {
            this.vhQuerySales.createBill_Billdetail(Object.assign({}, this.invoice), this.getCreateUpdateInvoiceDetail()).then(res => resolve(res)).catch(err => reject(err));
        });
    }
    /**
    * Thêm sản phẩm đã bán vào cart
    */
    addInvoiceDetail(items) {
        let products = this.vhQuerySales.getlocalDetailProducts(35).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].tikis && item[this.id_branch].tikis.length >= 0);
        for (let item of items) {
            let findSuccess = false;
            for (let productOfBranch of products) {
                let findProduct = productOfBranch[this.id_branch].tikis.find(data => data.product_id == item.product.id);
                if (findProduct) {
                    findSuccess = true;
                    this.addInvoiceDetailTiki(item.invoice.row_total, item.price, item.qty, productOfBranch, true);
                    break;
                }
            }
            if (!findSuccess) {
                this.addInvoiceDetailTiki(item.invoice.row_total, item.price, item.qty, { name: item.product.name }, false);
            }
        }
    }
    /**
     *
     * @param price
     * @param product
     * @param exist
     */
    addInvoiceDetailTiki(price, price_origin, quantity, product, exist) {
        if (exist) {
            const productToAdd = {
                name: product.name,
                id_product: product._id,
                quantity: quantity,
                ptype: product.type,
                unit: product.unit,
                price: price,
                ratio: 1,
                units: product.units,
                price_origin: price_origin || null,
                id_subproduct: product.id_subproduct,
                lots: product.lots,
                id_lotproduct: product.id_lotproduct,
                free: false //nếu có trường này true thì được quyền chỉnh số lượng
            };
            if (product.type == src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.COMBO) {
                productToAdd['combos'] = product.combos;
            }
            this.invoiceDetail.unshift(productToAdd);
        }
        else {
            this.invoiceDetail.unshift({
                id_product: null,
                quantity: quantity,
                price: price,
                ptype: 1,
                ratio: 1,
                name: product.name
            });
        }
    }
    /**
       * trả về danh sách bill_detail đã format theo đúng chuẩn các trường để lưu DB
       * @returns array bill_detail
       * @example let bill_details = getCreateUpdateInvoiceDetail()
       */
    getCreateUpdateInvoiceDetail() {
        return this.invoiceDetail.map(item => {
            let detail = {
                id_product: item.id_product,
                ptype: item.ptype,
                price: item.price,
                quantity: item.quantity,
                ratio: item.ratio,
                price_origin: item.price_origin,
            };
            if (item.id_lotproduct)
                detail['id_lotproduct'] = item.id_lotproduct;
            if (item.id_subproduct)
                detail['id_subproduct'] = item.id_subproduct;
            if (item.ptype == 5) {
                detail['combos'] = item.combos.map(combo => {
                    let product = {
                        id_product: combo.id_product,
                        price: combo.price,
                        quantity: combo.quantity,
                        ptype: combo.ptype || combo.type,
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
        }).filter(item => item);
    }
    initBill(billTiki) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.resetInvoice();
        this.invoice.date = this.pickerTime.toISOString();
        this.invoice.id_employee = this.vhAuth.getUser()._id;
        this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
        this.invoice.id_branch = (this.vhQuerySales.getDefaultBranch()._id);
        this.invoice.id_customer = (this.vhQuerySales.getlocalShopListTiki().find(item => item._id == this.infoShop._id).data.id_customer);
        this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
        this.invoice.payment_type = (2); //set bill công nợ
        this.invoice.fee = billTiki.invoice.shipping_amount_after_discount;
        /** Để cộng dồn tiền seller giảm giá phí ship trong từng bill detail shipping_fee_discountAmount */
        let shipping_fee_discountAmount = 0;
        for (let i = 0; i < billTiki['items'].length; i++) {
            // cộng dồn phần giảm giá từ seller
            this.invoice.discount += ((_a = billTiki['items'][i].invoice) === null || _a === void 0 ? void 0 : _a.is_seller_discount_coupon) ? (_e = (_d = (_c = (_b = billTiki['items'][i]) === null || _b === void 0 ? void 0 : _b.seller_income_detail) === null || _c === void 0 ? void 0 : _c.discount) === null || _d === void 0 ? void 0 : _d.discount_coupon) === null || _e === void 0 ? void 0 : _e.seller_discount : 0;
            // Cộng dồn tiền seller giảm giá phí ship
            shipping_fee_discountAmount += ((_g = (_f = billTiki['items'][i].seller_income_detail.discount) === null || _f === void 0 ? void 0 : _f.discount_shipping_fee) === null || _g === void 0 ? void 0 : _g.seller_subsidy) || 0;
        }
        this.invoice.ecommerce_fee_paid_by_seller = Math.abs((_h = billTiki.invoice) === null || _h === void 0 ? void 0 : _h.total_seller_fee) - shipping_fee_discountAmount;
        this.addInvoiceDetail(billTiki.items);
        this.setSubTotal();
        this.invoice.order_number_ecommerce = (billTiki['code'].toString());
        this.invoice.id_shop = (this.infoShop._id);
        this.invoice.note = (`${this.lang.translate("Order number")} Tiki ${billTiki['code']}`);
        this.invoice.tax_buyerDisplayName = this.invoice.tax_buyerDisplayName ? this.invoice.tax_buyerDisplayName : 'Người mua không lấy hóa đơn';
        this.invoice.cqt_status = billTiki.cqt_status ? billTiki.cqt_status : 1;
    }
    /**
     * tính và gán lại cộng tiền (subTotal) của đơn
     * @example this.setSubTotal()
     */
    setSubTotal() {
        let subTotal = 0;
        for (let i of this.invoiceDetail) {
            subTotal += (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
        this.setTotal();
    }
    /**
     * tính và gán lại tổng tiền (total) của đơn
     * @example this.setTotal()
     */
    setTotal() {
        this.invoice.total = this.subTotal - this.invoice.discount + this.invoice.fee > 0 ? this.subTotal - this.invoice.discount + this.invoice.fee : 0;
    }
    resetInvoice() {
        this.invoice = {
            bill_type: 1,
            cqt_status: 1,
            payment_type: 2,
            id_customer: '',
            id_branch: '',
            id_employee: '',
            id_wallet: 'id_cash',
            date: '',
            total: 0,
            payment: 0,
            tax: 0,
            discount: 0,
            fee: 0,
            note: '',
            price_type: 0,
            order_number_ecommerce: '',
            id_shop: '',
            tax_buyerDisplayName: '',
            tax_buyerLegalName: '',
            tax_buyerTaxCode: '',
            tax_buyerAddressLine: '',
            tax_buyerEmail: '',
            ecommerce_fee_paid_by_seller: 0,
        };
        this.invoiceDetail = [];
    }
    /**
     * Đếm số lượng bill đang check
     */
    get countSelectedBill() {
        let count = 0;
        for (let key in this.selectedBills) {
            if (this.selectedBills[key]) {
                count++;
            }
        }
        return count;
    }
}
IssueDeliveryGoodsComponent.ɵfac = function IssueDeliveryGoodsComponent_Factory(t) { return new (t || IssueDeliveryGoodsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAuth)); };
IssueDeliveryGoodsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: IssueDeliveryGoodsComponent, selectors: [["app-issue-delivery-goods"]], decls: 41, vars: 32, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "tiki-issue-invoice"], ["nz-row", "", "nzGutter", "4", 1, "tiki-issue-invoice-header"], ["nz-col", "", "nzSpan", "4", 1, "title"], ["nz-col", "", "nzSpan", "5"], [1, "color-green"], ["nz-col", "", "nzSpan", "6", 1, "title", "center-all-content"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "ngModel", "placeholder", "ngModelChange"], ["suffixIconSearch", ""], ["nz-col", "", "nzSpan", "6"], ["nzFormat", "dd/MM/yyyy", 3, "nzDisabledDate", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "3", 1, "right-all-content"], [2, "display", "flex", "gap", "4px"], ["nz-button", "", "nzType", "default", 1, "btn-view", "center-all-content", 3, "click"], ["src", "assets/icon/management/view.svg"], ["nz-button", "", 1, "btn-green", 3, "disabled", "click"], ["nz-row", "", "nzGutter", "16", "class", "tiki-issue-invoice-body", 4, "ngIf", "ngIfElse"], ["class", "full-height"], ["no_bill", ""], ["no_data", ""], ["updateForControl", ""], [3, "title", "visible_affiliate", "listProductApp", "searchProductAppValue", "cancelAffiliate", "searchProductApp", "acceptAfiliate"], ["nz-icon", "", "nzType", "search"], ["nz-row", "", "nzGutter", "16", 1, "tiki-issue-invoice-body"], ["nz-col", "", "nzSpan", "24"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData", 4, "ngIf", "ngIfElse"], ["nzShowPagination", "", "nzShowSizeChanger", "", 3, "nzPageSize", "nzPageSizeOptions", "nzScroll", "nzData"], ["salesOrder_show", ""], ["nzWidth", "8%", 2, "text-align", "center"], ["nzWidth", "17%"], ["nzWidth", "20%"], ["nzWidth", "15%", 2, "text-align", "right"], ["nzAlign", "center", "nzWidth", "20%"], ["nzAlign", "center", "nzWidth", "10%"], ["nz-checkbox", "", 1, "product-item-checkbox", 2, "margin-left", "8px", 3, "ngModel", "ngModelChange"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], [2, "text-align", "center"], ["nzLeft", ""], ["nz-icon", "", "nzType", "copy", "nzTheme", "outline", 3, "click"], ["style", "font-size: 0.8rem;", 3, "color", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], [2, "text-align", "right"], ["nzAlign", "center"], ["class", "invoice-create", 3, "click", 4, "ngIf"], ["class", "invoice-view", 3, "click", 4, "ngIf"], ["class", "product-item-checkbox", "nz-checkbox", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [2, "font-size", "0.8rem"], ["class", "icon-link green", "nz-icon", "", "nzType", "link", "nzTheme", "outline", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "link", "nzTheme", "outline", 1, "icon-link", "green", 3, "click"], [1, "invoice-create", 3, "click"], [1, "invoice-view", 3, "click"], ["nz-checkbox", "", 1, "product-item-checkbox", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "24", "style", "height: 60vh;", "class", "center-all-content", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", 2, "height", "60vh"], ["nz-row", "", 1, "no-affiliate"], ["nz-col", "", "nzSpan", "24", 1, "text-center"], ["src", "assets/icon/management/ecommerce/no-data-orderstatus.svg", "alt", ""], ["nz-row", ""], ["nzFormat", "dd/MM/yyyy", 2, "margin-left", "20px", 3, "ngModel", "ngModelChange"]], template: function IssueDeliveryGoodsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IssueDeliveryGoodsComponent_Template_div_click_0_listener() { return ctx.goBack(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function IssueDeliveryGoodsComponent_Template_input_ngModelChange_17_listener($event) { return ctx.searchValue = $event; })("ngModelChange", function IssueDeliveryGoodsComponent_Template_input_ngModelChange_17_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, IssueDeliveryGoodsComponent_ng_template_19_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "nz-range-picker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function IssueDeliveryGoodsComponent_Template_nz_range_picker_ngModelChange_22_listener($event) { return ctx.date = $event; })("ngModelChange", function IssueDeliveryGoodsComponent_Template_nz_range_picker_ngModelChange_22_listener($event) { return ctx.changeTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IssueDeliveryGoodsComponent_Template_button_click_25_listener() { return ctx.showReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "ion-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IssueDeliveryGoodsComponent_Template_button_click_29_listener() { return ctx.payInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, IssueDeliveryGoodsComponent_div_32_Template, 3, 2, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, IssueDeliveryGoodsComponent_ng_template_33_Template, 1, 1, "ng-template", 19, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, IssueDeliveryGoodsComponent_ng_template_35_Template, 6, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, IssueDeliveryGoodsComponent_ng_template_37_Template, 6, 4, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "app-modal-link-product-ecommerce", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancelAffiliate", function IssueDeliveryGoodsComponent_Template_app_modal_link_product_ecommerce_cancelAffiliate_39_listener() { return ctx.cancelAffiliate(); })("searchProductApp", function IssueDeliveryGoodsComponent_Template_app_modal_link_product_ecommerce_searchProductApp_39_listener($event) { return ctx.searchProductApp($event); })("acceptAfiliate", function IssueDeliveryGoodsComponent_Template_app_modal_link_product_ecommerce_acceptAfiliate_39_listener($event) { return ctx.acceptAfiliate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 18, "Back"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 20, "Goods delivered"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 22, "Shop name"), " : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.infoShop.data == null ? null : ctx.infoShop.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzSuffix", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 24, "Search for order code"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzDisabledDate", ctx.disabledDate)("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 26, "View"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.listInvoiceSelected.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](31, 28, "Create bulk invoices"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.load_status)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](40, 30, "Select Tiki linked products"))("visible_affiliate", ctx.visible_affiliate)("listProductApp", ctx.listProductApp)("searchProductAppValue", ctx.searchProductAppValue);
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_13__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzDatePickerComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_15__.NzRangePickerComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _components_modal_link_product_ecommerce_modal_link_product_ecommerce_component__WEBPACK_IMPORTED_MODULE_3__.ModalLinkProductEcommerceComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzCellAlignDirective, ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_20__.NzCheckboxComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_19__.NzCellFixedDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .tiki-issue-invoice-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  display: flex;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .tiki-issue-invoice-header[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  width: 95%;\n  color: #ffffff;\n}\nnz-layout[_ngcontent-%COMP%]   .btn-view[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding-right: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .invoice[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .invoice-create[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .invoice-view[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-vh-black);\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25vh;\n  max-width: 250px;\n  height: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-black);\n  margin-top: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .no-affiliate[_ngcontent-%COMP%]   .text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-link[_ngcontent-%COMP%] {\n  padding: 1px;\n  font-size: 12px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .icon-link.green[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-vh-green);\n  color: var(--ion-color-vh-green);\n}\n.date-picker-cus[_ngcontent-%COMP%] {\n  width: 97%;\n  border: 1px solid #d9d9d9;\n}\n.date-picker-cus[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzc3VlLWRlbGl2ZXJ5LWdvb2RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBRUE7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0FBRVI7QUFBSTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0FBQ1I7QUFBUTtFQUNJLFVBQUE7QUFFWjtBQUNJO0VBQ0ksaUVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFDUjtBQUFRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUVaO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBQVE7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7QUFFWjtBQUFRO0VBQ0ksZUFBQTtFQUNBLGdDQUFBO0FBRVo7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUFRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUVaO0FBQVE7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUVaO0FBQVE7RUFDSSxrQkFBQTtBQUVaO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNSO0FBQ0k7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0FBQ1I7QUFHQTtFQUNJLFVBQUE7RUFJQSx5QkFBQTtBQUhKO0FBQUk7RUFDSSwwQ0FBQTtBQUVSIiwiZmlsZSI6Imlzc3VlLWRlbGl2ZXJ5LWdvb2RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuICAgIC5jZW50ZXItdGV4dCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRpa2ktaXNzdWUtaW52b2ljZS1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAvLyAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBuei1zZWxlY3Qge1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tdmlldyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmludm9pY2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICYtY3JlYXRlIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi12aWV3IHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWJsYWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubm8tYWZmaWxpYXRlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXZoO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtY2VudGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pY29uLWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmc6IDFweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5pY29uLWxpbmsuZ3JlZW4ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRlLXBpY2tlci1jdXMge1xyXG4gICAgd2lkdGg6IDk3JTtcclxuICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 23030:
/*!********************************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/ecommerce/tiki/issue-invoice/issue-delivery-goods/issue-delivery-goods.module.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IssueDeliveryGoodsModule": () => (/* binding */ IssueDeliveryGoodsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _issue_delivery_goods_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./issue-delivery-goods.component */ 49987);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add/add.component */ 55986);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ 62634);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _detail_tiki_detail_tiki_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail-tiki/detail-tiki.component */ 36683);
/* harmony import */ var src_app_sales_components_bill_type_bill_type_1_tiki_bill_type1_tiki_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/bill-type/bill-type-1/tiki/bill-type1-tiki.module */ 52076);
/* harmony import */ var src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/menu/manage/ecommerce/components/modal-link-product-ecommerce/modal-link-product-ecommerce.module */ 14774);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit/edit.component */ 91803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);















const routes = [
    {
        path: "",
        component: _issue_delivery_goods_component__WEBPACK_IMPORTED_MODULE_0__.IssueDeliveryGoodsComponent
    },
    {
        path: "add",
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_1__.AddComponent
    },
    {
        path: "edit",
        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__.EditComponent
    },
    {
        path: "detail",
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent
    },
    {
        path: "detail-tiki",
        component: _detail_tiki_detail_tiki_component__WEBPACK_IMPORTED_MODULE_4__.DetailTikiComponent
    },
];
class IssueDeliveryGoodsModule {
}
IssueDeliveryGoodsModule.ɵfac = function IssueDeliveryGoodsModule_Factory(t) { return new (t || IssueDeliveryGoodsModule)(); };
IssueDeliveryGoodsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: IssueDeliveryGoodsModule });
IssueDeliveryGoodsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            src_app_sales_components_bill_type_bill_type_1_tiki_bill_type1_tiki_module__WEBPACK_IMPORTED_MODULE_5__.BillType1TikiModule,
            src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_6__.ModalLinkProductEcommerceModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](IssueDeliveryGoodsModule, { declarations: [_issue_delivery_goods_component__WEBPACK_IMPORTED_MODULE_0__.IssueDeliveryGoodsComponent, _add_add_component__WEBPACK_IMPORTED_MODULE_1__.AddComponent, _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent, _detail_tiki_detail_tiki_component__WEBPACK_IMPORTED_MODULE_4__.DetailTikiComponent, _edit_edit_component__WEBPACK_IMPORTED_MODULE_7__.EditComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        src_app_sales_components_bill_type_bill_type_1_tiki_bill_type1_tiki_module__WEBPACK_IMPORTED_MODULE_5__.BillType1TikiModule,
        src_app_sales_menu_manage_ecommerce_components_modal_link_product_ecommerce_modal_link_product_ecommerce_module__WEBPACK_IMPORTED_MODULE_6__.ModalLinkProductEcommerceModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_ecommerce_tiki_issue-invoice_issue-delivery-goods_issue-delivery-go-ca729e.js.map