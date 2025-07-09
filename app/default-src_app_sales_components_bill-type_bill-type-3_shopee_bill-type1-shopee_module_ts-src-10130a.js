"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["default-src_app_sales_components_bill-type_bill-type-3_shopee_bill-type1-shopee_module_ts-src-10130a"],{

/***/ 29976:
/*!************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-3/shopee/add/add.component.ts ***!
  \************************************************************************************/
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../sale-desktop/components/staff/staff.component */ 88963);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../search/search-product/search-product.component */ 99767);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

































function AddComponent_div_21_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r7.name);
  }
}

function AddComponent_div_21_ng_container_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_div_21_ng_container_7_span_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r15.openModalChooseLot(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r13.getLotNumber(item_r7.lots, item_r7.id_lotproduct));
  }
}

function AddComponent_div_21_ng_container_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_div_21_ng_container_7_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r19.openModalChooseLot(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "Select lot"));
  }
}

function AddComponent_div_21_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddComponent_div_21_ng_container_7_span_1_Template, 2, 1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AddComponent_div_21_ng_container_7_span_2_Template, 3, 3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r7.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !item_r7.id_lotproduct);
  }
}

function AddComponent_div_21_span_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_div_21_span_8_ng_container_2_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28);
      const combo_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r26.openModalChooseLot(combo_r23);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const combo_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r25.getLotNumber(combo_r23.lots, combo_r23.id_lotproduct));
  }
}

function AddComponent_div_21_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AddComponent_div_21_span_8_ng_container_2_Template, 3, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const combo_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", i_r24 == item_r7.combos.length - 1 ? combo_r23.quantity + "x " + combo_r23.name + " (" + ctx_r10.getUnit(combo_r23.units, combo_r23.ratio) + ") " : combo_r23.quantity + "x " + combo_r23.name + " (" + ctx_r10.getUnit(combo_r23.units, combo_r23.ratio) + ") " + " ,", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", combo_r23.id_lotproduct);
  }
}

function AddComponent_div_21_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", item_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "The products have not been linked"), ")");
  }
}

function AddComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_div_21_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r32.deleteGoods(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AddComponent_div_21_span_6_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AddComponent_div_21_ng_container_7_Template, 3, 2, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AddComponent_div_21_span_8_Template, 3, 2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AddComponent_div_21_span_9_Template, 5, 4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "nz-input-number", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AddComponent_div_21_Template_nz_input_number_ngModelChange_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r34.checkQuantityProduct(item_r7, $event);
    })("ngModelChange", function AddComponent_div_21_Template_nz_input_number_ngModelChange_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const item_r7 = restoredCtx.$implicit;
      return item_r7.quantity = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_div_21_Template_div_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r36.openEditUnitPrice(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "del", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
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
  }
}

function AddComponent_app_search_product_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-search-product", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeSearchProductList", function AddComponent_app_search_product_96_Template_app_search_product_closeSearchProductList_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r37.closeSearchProductList($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("searchProductList", ctx_r1.searchProductList)("default_price_type", 1);
  }
}

function AddComponent_nz_modal_97_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx_r39.tempDetail.price);
  }
}

function AddComponent_nz_modal_97_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_nz_modal_97_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r42.isVisibleEditUnitPrice = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_nz_modal_97_ng_template_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r43);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r44.handleEditUnit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "Save"));
  }
}

function AddComponent_nz_modal_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "nz-modal", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_97_Template_nz_modal_nzVisibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r45.isVisibleEditUnitPrice = $event;
    })("nzOnCancel", function AddComponent_nz_modal_97_Template_nz_modal_nzOnCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r47.isVisibleEditUnitPrice = false;
    })("nzOnOk", function AddComponent_nz_modal_97_Template_nz_modal_nzOnOk_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r48.handleEditUnit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AddComponent_nz_modal_97_ng_container_2_Template, 8, 7, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AddComponent_nz_modal_97_ng_template_3_Template, 6, 6, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzFooter", _r40)("nzVisible", ctx_r2.isVisibleEditUnitPrice);
  }
}

function AddComponent_ng_container_100_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 78);
  }
}

function AddComponent_ng_container_100_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", item_r54._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r54.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](8, 4, item_r54.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](11, 7, item_r54.date_exp, "dd/MM/yyyy"), " ");
  }
}

function AddComponent_ng_container_100_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "No data"));
  }
}

function AddComponent_ng_container_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "nz-input-group", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "input", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function AddComponent_ng_container_100_Template_input_keyup_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r56);

      const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);

      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r55.searchLot(_r49.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AddComponent_ng_container_100_ng_template_6_Template, 1, 0, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "nz-radio-group", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AddComponent_ng_container_100_Template_nz_radio_group_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r57.tempDetail.id_lotproduct = $event;
    })("ngModelChange", function AddComponent_ng_container_100_Template_nz_radio_group_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r56);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r58.changeLot($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AddComponent_ng_container_100_div_9_Template, 12, 10, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, AddComponent_ng_container_100_div_10_Template, 3, 3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);

    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSuffix", _r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r3.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r3.tempDetail.lots.length);
  }
}

function AddComponent_ng_template_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_ng_template_101_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r59.handleCancelChooseLot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_ng_template_101_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r60);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r61.handleChooseLot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r5.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "Ok"));
  }
}

function AddComponent_nz_modal_103_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "nz-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "date");
  }

  if (rf & 2) {
    const element_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r70.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](1, 3, element_r70.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", element_r70._id);
  }
}

function AddComponent_nz_modal_103_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "nz-select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AddComponent_nz_modal_103_ng_container_2_ng_container_21_ng_container_1_Template_nz_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r73);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      return data_r67.id_lotproduct = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AddComponent_nz_modal_103_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template, 2, 6, "nz-option", 88);
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
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r67.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", data_r67.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", data_r67.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r68.getUnit(data_r67.units, data_r67.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r67.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r68.vhAlgorithm.vhcurrencyunit(data_r67.price), " ");
  }
}

function AddComponent_nz_modal_103_ng_container_2_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AddComponent_nz_modal_103_ng_container_2_ng_container_21_ng_container_1_Template, 14, 9, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", data_r67.lots);
  }
}

const _c0 = function () {
  return {
    y: "400px"
  };
};

function AddComponent_nz_modal_103_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "nz-table", 84, 85);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, AddComponent_nz_modal_103_ng_container_2_ng_container_21_Template, 2, 1, "ng-container", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);

    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzData", ctx_r62.tempDetail.combos)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](19, _c0));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _r65.data);
  }
}

function AddComponent_nz_modal_103_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_nz_modal_103_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r75.show_modal_select_lots_combo = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_nz_modal_103_ng_template_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r76);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r77.handleChooseLotCombo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "Ok"));
  }
}

function AddComponent_nz_modal_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "nz-modal", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function AddComponent_nz_modal_103_Template_nz_modal_nzVisibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r78.show_modal_select_lots_combo = $event;
    })("nzOnCancel", function AddComponent_nz_modal_103_Template_nz_modal_nzOnCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r80.show_modal_select_lots_combo = false;
    })("nzOnOk", function AddComponent_nz_modal_103_Template_nz_modal_nzOnOk_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r81.handleChooseLotCombo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AddComponent_nz_modal_103_ng_container_2_Template, 22, 20, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AddComponent_nz_modal_103_ng_template_3_Template, 6, 6, "ng-template", null, 83, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);

    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 4, "Select lot number for products in combo"), ": ", ctx_r6.tempDetail.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzFooter", _r63)("nzVisible", ctx_r6.show_modal_select_lots_combo);
  }
}

const _c1 = function () {
  return {
    minRows: 2,
    maxRows: 4
  };
};

class AddComponent {
  constructor(router, vhComponent, languageService, vhQuerySales, vhAlgorithm, vhAuth, fncService, nzModalService, cdf, vhEcommerce) {
    this.router = router;
    this.vhComponent = vhComponent;
    this.languageService = languageService;
    this.vhQuerySales = vhQuerySales;
    this.vhAlgorithm = vhAlgorithm;
    this.vhAuth = vhAuth;
    this.fncService = fncService;
    this.nzModalService = nzModalService;
    this.cdf = cdf;
    this.vhEcommerce = vhEcommerce;
    this.invoice = {
      bill_type: 3,
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
      id_shop: ''
    };
    this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore; //nhớ dữ liệu truyền từ trang trước

    this.billShopee = this.router.getCurrentNavigation().extras.state.billShopee;
    this.employee = {};
    this.customer = {};
    this.pickerTime = new Date();
    this.checkPrinter = false;
    this.validProdDetail = true; //nếu biến này = false tức có sp shopee chưa được liên kết với app

    this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
    this.invoiceDetail = [];
    this.subTotal = 0;
    this.taxValue = 0;
    this.save_enable = true; // ------thoát trang-----

    this.isExit = false;
    /**Phần thêm sản phẩm bổ sung
     * Note : không tính tiền sản phẩm này
     */

    this.searchProductList = false; // -------modal edit unit price-------

    this.isVisibleEditUnitPrice = false;
    this.warning_lot_expried = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').warning_lot_expried;
    this.show_modal_select_lots = false;
    this.list_search_lot = [];
    this.show_modal_select_lots_combo = false;
  }
  /**Khởi tạo hóa đơn và merge sp của shopee vào billDetail */


  initBill() {
    this.invoice.date = this.pickerTime.toISOString();
    this.invoice.id_employee = this.vhAuth.getUser()._id;
    this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
    this.invoice.id_branch = this.vhQuerySales.getDefaultBranch()._id;
    this.invoice.id_customer = this.vhEcommerce.getlocalShopListShopee().find(item => item._id == this.dataRestore.id_shop_selected).data.id_customer;
    this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
    this.invoice.payment_type = 2; //set bill công nợ

    this.addInvoiceDetail(this.billShopee.item_list);
    this.setSubTotal();
    this.invoice.discount = 0;
    this.invoice.fee = 0;
    this.invoice.order_number_ecommerce = this.billShopee['order_sn'].toString();
    this.invoice.id_shop = this.dataRestore['id_shop_selected'];
    this.invoice.note = `${this.languageService.translate("Order number")} Shopee ${this.billShopee.order_sn}`;

    for (let item of this.invoiceDetail) {
      if (!item.id_product) {
        this.validProdDetail = false;
        break;
      }
    }
  }

  setSubTotal() {
    let subTotal = 0;

    for (let i of this.invoiceDetail) {
      subTotal += i.price ? i.price * i.quantity : 0;
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
    if (printer) this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
    this.vhAlgorithm.waitingStack().then(() => {
      this.discount_price = this.vhAlgorithm.vhnumeral(".discount-price");
      this.invoice_fee = this.vhAlgorithm.vhnumeral(".invoice-fee");
    });
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.event, false);
    window.removeEventListener('beforeunload', this.closerBrower, false);
  }

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

  goBack() {
    this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Bạn muốn thoát và không lưu đơn này")}?`, "OK", this.languageService.translate('Cancel')).then(() => {
      this.isExit = true;
      this.router.navigate(["/sales/dashboard/manage/ecommerce/shopee/issue-invoice/issue-receive-goods"], {
        state: {
          dataRestore: this.dataRestore
        }
      });
    }, () => {});
  } // -------set employee-------


  closeAndReceiveEmployee(event) {
    if (event) {
      this.invoice.id_employee = event;
    }
  }

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

  editDiscount() {
    if (this.discount_price.getRawValue() && this.discount_price.getRawValue() >= 0) {
      this.invoice.discount = parseFloat(this.discount_price.getRawValue());
    } else {
      document.getElementById("discount-price")['value'] = this.invoice.discount;
      this.discount_price = this.vhAlgorithm.vhnumeral('.discount-price');
    }

    this.setTotal();
  }

  editFee() {
    if (this.invoice_fee.getRawValue() && this.invoice_fee.getRawValue() >= 0) {
      this.invoice.fee = parseFloat(this.invoice_fee.getRawValue());
    } else {
      document.getElementById("invoice-fee")['value'] = this.invoice.fee;
      this.invoice_fee = this.vhAlgorithm.vhnumeral('.invoice-fee');
    }

    this.setTotal();
  }

  compareSubTotal() {
    let sub = this.invoiceDetail.reduce((prev, next) => prev + next.quantity * next.price, 0);
    if (sub == this.subTotal) return true;
    return false;
  }

  getCreateUpdateInvoiceDetail() {
    return this.invoiceDetail.map(item => {
      let detail = {
        id_product: item.id_product,
        ptype: item.ptype,
        price: item.price,
        quantity: item.quantity,
        ratio: item.ratio
      };
      if (item.id_lotproduct) detail['id_lotproduct'] = item.id_lotproduct;
      if (item.id_subproduct) detail['id_subproduct'] = item.id_subproduct;
      if (item.price < item.price_origin) detail['price_origin'] = item.price_origin;
      if (item.price == item.price_origin) detail['price_origin'] = item.price;

      if (item.ptype == 5) {
        detail['combos'] = item.combos.map(combo => {
          let product = {
            id_product: combo.id_product,
            price: combo.price,
            quantity: combo.quantity,
            ptype: combo.ptype,
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

  payInvoice(print) {
    var _this = this;

    if (this.vhAuth.checkMyPermission("sales_enable_payment")) {
      if (this.compareSubTotal()) {
        this.vhComponent.alertConfirm(!print ? `${this.languageService.translate("Pay")}?` : `${this.languageService.translate("Pay & Print")}?`, "", "", "OK", this.languageService.translate("Cancel")).then(() => {
          if (this.save_enable) {
            this.save_enable = false;
            this.vhComponent.showLoading("", "transparent-loading").then(() => {
              this.createOrUpdate(1).then(bill => {
                this.save_enable = true;

                let update = /*#__PURE__*/function () {
                  var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
                    return yield _this.vhEcommerce.updateSalesOrderShopee(_this.dataRestore['id_shop_selected'], _this.billShopee['order_sn'].toString(), {
                      id_bill_received_goods: bill._id
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
              }).catch(err => {
                this.vhComponent.hideLoading(0);
                this.vhComponent.showToast(2000, err);
              });
            });
          }
        }, () => {});
      } else this.vhComponent.alertMessageDesktop("error", this.languageService.translate("The total price of the product is not equal to the subtotal"));
    } else this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
  }

  createOrUpdate(bill_type) {
    return new Promise((resolve, reject) => {
      this.vhQuerySales.createBill_Billdetail(Object.assign({}, this.invoice), this.getCreateUpdateInvoiceDetail()).then(res => resolve(res)).catch(err => reject(err));
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

  handle(update) {
    this.isExit = true;
    if (update) this.dataRestore['update'] = true;
    this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/issue-invoice/issue-receive-goods'], {
      state: {
        dataRestore: this.dataRestore
      }
    });
  }

  handlePrint() {
    this.checkPrint().then(printer => {
      if (printer) this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
        printer: printer,
        invoice: this.invoice
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

  closeSearchProductList(data) {
    if (data) {
      if (data.manylot && !data.id_lotproduct) this.openModalChooseLot(data);else if (data.combos && data.combos.filter(e => e.lots && !e.id_lotproduct).length) {
        this.tempDetail = data;
        this.show_modal_select_lots_combo = true;
      } else this.addInvoiceDetailExtraEcommerce(data);
    }

    this.searchProductList = false;
  }

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

  checkQuantityProduct(product, event) {
    if (!event) product.quantity = 1;else product.quantity = event;
    this.setSubTotal();
    this.cdf.detectChanges();
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
    } else {
      this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
    }
  }

  deleteGoods(detail) {
    this.vhComponent.alertConfirm("", "", `${this.languageService.translate("Delete")} ${detail.name}?`, "OK", this.languageService.translate("Cancel")).then(() => this.removeInvoiceDetail(detail.id_product), () => {});
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
  * Sản phẩm này là sp đã bán trên sàn
  */


  addInvoiceDetail(item_list) {
    let products = this.vhQuerySales.getlocalDetailProducts(src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_6__.VhType.PRODUCT).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].shopees && item[this.id_branch].shopees.length >= 0);

    for (let item of item_list) {
      let findSuccess = false;

      for (let productOfBranch of products) {
        let findProduct = productOfBranch[this.id_branch].shopees.find(data => data.item_id == item.item_id);

        if (findProduct) {
          if (findProduct.model && findProduct.model.length && item.model_id != 0) {
            let indexModel = findProduct.model.findIndex(model => model.model_id == item.model_id);

            if (indexModel >= 0) {
              this.addInvoiceDetailShopee(item.model_discounted_price || item.model_original_price, item.model_quantity_purchased, productOfBranch, true);
              findSuccess = true;
              break;
            }
          } else {
            this.addInvoiceDetailShopee(item.model_discounted_price || item.model_original_price, item.model_quantity_purchased, productOfBranch, true);
            findSuccess = true;
            break;
          }
        }
      }

      if (!findSuccess) {
        this.addInvoiceDetailShopee(item.model_discounted_price || item.model_original_price, item.model_quantity_purchased, {
          name: item.item_name
        }, false);
        this.validProdDetail = false;
      }
    }
  }

  addInvoiceDetailShopee(price, quantity, product, exist) {
    if (exist) {
      this.invoiceDetail.unshift({
        name: product.name,
        id_product: product._id,
        quantity: quantity,
        ptype: product.type,
        unit: product.unit,
        ratio: 1,
        units: product.units,
        price: price,
        price_origin: product.price_origin || null,
        id_subproduct: product.id_subproduct,
        lots: product.lots,
        id_lotproduct: product.id_lotproduct,
        free: false //nếu có trường này true thì được quyền chỉnh số lượng

      });
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
    if (!this.list_search_lot.length) this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Sản phẩm này không có lô khả dụng để bán!"));else this.show_modal_select_lots = true;
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

  handleCancelChooseLot() {
    this.show_modal_select_lots = false;
    this.tempDetail.lots = this.list_search_lot;
  }

  handleChooseLotCombo() {
    if (this.tempDetail.combos.filter(item => item.lots && !item.id_lotproduct).length) this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Vui lòng chọn lô cho sản phẩm thuộc combo này"));else {
      this.show_modal_select_lots_combo = false;
      this.closeSearchProductList(this.tempDetail);
    }
  }

}

AddComponent.ɵfac = function AddComponent_Factory(t) {
  return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_7__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_8__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_9__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhEcommerce));
};

AddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: AddComponent,
  selectors: [["bill-type3-shopee-add"]],
  decls: 104,
  vars: 76,
  consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales", "hide-best-selling"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["target", "_blank", 3, "href"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 2, "width", "97%", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], [1, "sales-bills-staff-name"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], [1, "sales-bills-customer", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", "nz-row", "", 1, "sales-bills-customer-info"], [2, "width", "100%", "margin-bottom", "12px"], [1, "sales-bills-customer-info-name"], [1, "sales-bills-customer-info-phone"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "outline", 2, "font-size", "0.9rem", "color", "var(--ion-color-vh-red)", ";margin-left", "4px", 3, "nzTooltipTitle"], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "nz-no-border", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "nz-no-border", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-input", "", 1, "nz-hover-border", 3, "ngModel", "placeholder", "nzAutosize", "ngModelChange"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditUnitPrice2", ""], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [1, "invoiceDetail-item"], ["nz-row", ""], ["nz-col", "", "nzSpan", "1", 3, "click"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "8"], [1, "invoiceDetail-item-name"], ["class", "invoiceDetail-item-name-linked", 4, "ngIf"], [4, "ngIf"], ["style", "font-size: 0.75rem; color: var(--ion-color-vh-black); font-weight: normal;", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "5", 2, "text-align", "right"], [3, "ngModel", "nzMin", "ngModelChange"], ["nz-col", "", "nzSpan", "5", 1, "invoiceDetail-item-price", "text-end", 3, "click"], [1, "max-width-two-line", 2, "border-bottom", "1px var(--ion-color-vh-gray) solid", "margin-left", "16px"], [2, "margin-left", "5px", "font-size", "0.8rem"], [1, "max-width-two-line"], [1, "invoiceDetail-item-name-linked"], ["style", "color:var(--ion-color-vh-green);cursor: pointer;", 3, "click", 4, "ngIf"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], [2, "font-size", "0.75rem", "color", "var(--ion-color-vh-black)", "font-weight", "normal"], [1, "invoiceDetail-item-name-notlinked"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "8", 1, "center-col"], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], [2, "width", "100%", 3, "ngModel", "ngModelChange"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], [2, "text-align", "center"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice3", ""], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]],
  template: function AddComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_Template_div_click_0_listener() {
        return ctx.goBack();
      });
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
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_Template_button_click_16_listener() {
        return ctx.searchProductList = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](19, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, AddComponent_div_21_Template, 22, 9, "div", 11);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeAndReceiveEmployee", function AddComponent_Template_app_staff_closeAndReceiveEmployee_29_listener($event) {
        return ctx.closeAndReceiveEmployee($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "nz-date-picker", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_34_listener($event) {
        return ctx.pickerTime = $event;
      })("ngModelChange", function AddComponent_Template_nz_date_picker_ngModelChange_34_listener($event) {
        return ctx.setPickerTime($event);
      });
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
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](51, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](57, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](58, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function AddComponent_Template_input_blur_59_listener() {
        return ctx.editDiscount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](63, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function AddComponent_Template_input_blur_64_listener() {
        return ctx.editFee();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](75, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](82, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](85);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](86, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "textarea", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_textarea_ngModelChange_87_listener($event) {
        return ctx.invoice.note = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](88, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_Template_button_click_90_listener() {
        return ctx.payInvoice(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](92, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](93, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AddComponent_Template_button_click_93_listener() {
        return ctx.payInvoice(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](95, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](96, AddComponent_app_search_product_96_Template, 1, 2, "app-search-product", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](97, AddComponent_nz_modal_97_Template, 5, 5, "nz-modal", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "nz-modal", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function AddComponent_Template_nz_modal_nzVisibleChange_98_listener($event) {
        return ctx.show_modal_select_lots = $event;
      })("nzOnCancel", function AddComponent_Template_nz_modal_nzOnCancel_98_listener() {
        return ctx.handleCancelChooseLot();
      })("nzOnOk", function AddComponent_Template_nz_modal_nzOnOk_98_listener() {
        return ctx.handleChooseLot();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](99, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](100, AddComponent_ng_container_100_Template, 11, 7, "ng-container", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](101, AddComponent_ng_template_101_Template, 6, 7, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](103, AddComponent_nz_modal_103_Template, 5, 6, "nz-modal", 43);
    }

    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](102);

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 41, "Back"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzGutter", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 43, "Order number"), ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("href", "https://banhang.shopee.vn/portal/sale/order?search=", ctx.billShopee.order_sn, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.billShopee.order_sn);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 45, "Search (F4)"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.invoiceDetail);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](28, 47, "Salesman"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id_employee", ctx.invoice.id_employee);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](33, 49, "Sales date"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.pickerTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](39, 51, "Customer information"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.customer.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.customer.phone, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](47, 53, "Payment information"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](51, 55, "SubTotal"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.subTotal));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](57, 57, "Platform fee"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTooltipTitle", "Vui l\u00F2ng ki\u1EC3m tra ph\u00ED s\u00E0n ch\u00EDnh x\u00E1c tr\u01B0\u1EDBc khi ph\u00E1t h\u00E0nh h\u00F3a \u0111\u01A1n");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.discount));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](63, 59, "Fee"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.fee));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](68, 61, "Total"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.total));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](75, 63, "Pay"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.payment));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](82, 65, "Rest"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.invoice.total - ctx.invoice.payment), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](88, 67, "Enter note..."));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.invoice.note)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](75, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.validProdDetail || !ctx.checkPrinter);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](92, 69, "Save & Print"), " (F2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.validProdDetail);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](95, 71, "Save"), " (F1)");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.searchProductList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](99, 73, "Select lot number"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzFooter", _r4)("nzVisible", ctx.show_modal_select_lots);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.show_modal_select_lots_combo);
    }
  },
  directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_19__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_10__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__.NzTooltipDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzAutosizeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalContentDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__.NzInputNumberComponent, _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_11__.SearchProductComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__.NzRadioComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTbodyComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__.NzOptionComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 500;\n  transition: 0.1s;\n  color: var(--ion-color-vh-green) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 0.1s;\n  border-bottom: 2px solid var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 93%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 1.1rem;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name-linked[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name-notlinked[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-red) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-price[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 8px 32px;\n  width: 20px;\n  cursor: not-allowed;\n  border-radius: 4px;\n  color: var(--ion-color-vh-gray);\n  border: 1px solid var(--ion-color-vh-gray);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 18% 17% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info-name[_ngcontent-%COMP%] {\n  width: 60%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info-phone[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-rest[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-rest[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .hide-best-selling[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n  grid-row-gap: 0px;\n  row-gap: 0px;\n}\n.title[_ngcontent-%COMP%] {\n  align-self: center;\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n  align-self: center;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNFLGVBQUE7QUFFTjtBQUNFO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQUEsZ0JBQUE7QUFHTjtBQUZNOzs7O0VBSUUsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSVI7QUFGTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSVI7QUFIUTtFQUNFLFVBQUE7QUFLVjtBQUpVO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0FBTVo7QUFKVTtFQUNFLGdCQUFBO0VBQ0Esa0RBQUE7QUFNWjtBQUhRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBS1Y7QUFKVTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFNWjtBQUxZO0VBQ0UsaUJBQUE7QUFPZDtBQU5jO0VBQ0UsaUJBQUE7QUFRaEI7QUFOYztFQUNFLHlDQUFBO0FBUWhCO0FBTFk7RUFDRSxlQUFBO0FBT2Q7QUFMWTtFQUNFLGtCQUFBO0FBT2Q7QUFOYztFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMENBQUE7QUFRaEI7QUFGTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FBSVI7QUFIUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUtWO0FBSlU7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS1o7QUFKWTs7O0VBRUUsVUFBQTtFQUNBLGVBQUE7QUFPZDtBQUpVO0VBQ0Usa0JBQUE7QUFNWjtBQUhRO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS1Y7QUFKVTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBTVo7QUFMWTtFQUNFLFVBQUE7QUFPZDtBQUxZO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFPZDtBQUhRO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBS1Y7QUFIUTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS1Y7QUFIWTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtBQUtkO0FBQVk7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFFZDtBQUVZO0VBQ0UsVUFBQTtBQUFkO0FBSVk7RUFDRSxlQUFBO0FBRmQ7QUFJWTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFGZDtBQU1RO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtBQUpWO0FBS1U7RUFDRSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFIWjtBQUtVO0VBQ0UsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBRUEsdUJBQUE7QUFKWjtBQVNJO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUFBLFlBQUE7QUFQTjtBQVVFO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQSjtBQVNFOztFQUVFLGlCQUFBO0FBTko7QUFRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0Usa0JBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQXVCLGdCQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLG1DQUFBO0FBRjlCO0FBS0U7RUFDRSxVQUFBO0VBQVksa0NBQUE7QUFEaEI7QUFJRTtFQUNFLFdBQUE7QUFESjtBQUVHO0VBQ0ksMEJBQUE7QUFBUDtBQUlFO0VBQ0MsV0FBQTtBQURIIiwiZmlsZSI6ImFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBuei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC5zYWxlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xyXG4gICAgICByb3ctZ2FwOiAxMHB4O1xyXG4gICAgICBjb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICAmLWNhcnQsXHJcbiAgICAgIC5zYWxlcy1iaWxscy1zdGFmZixcclxuICAgICAgLnNhbGVzLWJpbGxzLWN1c3RvbWVyLFxyXG4gICAgICAuc2FsZXMtYmlsbHMtY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICAmLWNhcnQge1xyXG4gICAgICAgIGdyaWQtcm93OiAxLzI7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICAgIGhlaWdodDogNiU7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1pbnZvaWNlRGV0YWlsIHtcclxuICAgICAgICAgIGhlaWdodDogOTMlO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgLmludm9pY2VEZXRhaWwtaXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuMXJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgJi1saW5rZWQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICYtbm90bGlua2VkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtcmVkKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXByaWNlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAzMnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1iaWxscyB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICBncmlkLWNvbHVtbjogMy80O1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxOCUgMTclIDU1JSAxMCU7XHJcbiAgICAgICAgJi1zdGFmZiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgICYtdGltZSxcclxuICAgICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgbnotZGF0ZS1waWNrZXIsXHJcbiAgICAgICAgICAgIGFwcC1zdGFmZiB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY3VzdG9tZXIge1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgJi1pbmZvIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAmLW5hbWUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi1waG9uZSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb250ZW50ID4gZGl2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtY29udGVudCB7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgZGl2ID4ge1xyXG4gICAgICAgICAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtZGlzY291bnQsXHJcbiAgICAgICAgICAmLWZlZSB7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLXRheCB7XHJcbiAgICAgICAgICAgIC5ub3QtZm91bmQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtcmVzdCB7XHJcbiAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnV0dG9uIHtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgLm9yZGVyLWFuZC1wcmludCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAub3JkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA0NyU7XHJcbiAgICAgICAgICAgIC8vbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5oaWRlLWJlc3Qtc2VsbGluZyB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgICByb3ctZ2FwOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIH1cclxuICBpbnB1dCxcclxuICB0ZXh0YXJlYSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgLmNlbnRlci1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC8qIEhpZGUgc2Nyb2xsYmFyKi9cclxuICAuaGlkZVNjcm9sbGJhciB7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG4gIH1cclxuICBcclxuICAuaGlkZVNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDsgLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5yYWRpby1wdXJjaGFzZSAgc3BhbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAuYW50LXJhZGlve1xyXG4gICAgICAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5yYWRpby1wdXJjaGFzZSAgLmFudC1yYWRpb3tcclxuICAgd2lkdGg6IDE2cHg7IFxyXG4gIH1cclxuICAiXX0= */"]
});

/***/ }),

/***/ 11407:
/*!*******************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-3/shopee/bill-type1-shopee.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillType3ShopeeModule": () => (/* binding */ BillType3ShopeeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add/add.component */ 29976);
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit/edit.component */ 63829);
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail/detail.component */ 58123);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/sale-desktop/components/components.module */ 50682);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/search/search.module */ 43818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);










class BillType3ShopeeModule {
}
BillType3ShopeeModule.ɵfac = function BillType3ShopeeModule_Factory(t) { return new (t || BillType3ShopeeModule)(); };
BillType3ShopeeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BillType3ShopeeModule });
BillType3ShopeeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_5__.SearchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BillType3ShopeeModule, { declarations: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        src_app_sales_sale_desktop_components_components_module__WEBPACK_IMPORTED_MODULE_4__.ComponentsModule,
        src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        src_app_sales_components_search_search_module__WEBPACK_IMPORTED_MODULE_5__.SearchModule], exports: [_add_add_component__WEBPACK_IMPORTED_MODULE_0__.AddComponent,
        _edit_edit_component__WEBPACK_IMPORTED_MODULE_1__.EditComponent,
        _detail_detail_component__WEBPACK_IMPORTED_MODULE_2__.DetailComponent] }); })();


/***/ }),

/***/ 58123:
/*!******************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-3/shopee/detail/detail.component.ts ***!
  \******************************************************************************************/
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
        this.billShopee = this.router.getCurrentNavigation().extras.state.billShopee;
        this.invoice = null;
        this.subTotal = 0;
        this.getDataInvoice(this.router.getCurrentNavigation().extras.state.id);
    }
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
    setSubTotal() {
        let subTotal = 0;
        for (let i of this.invoice_detail) {
            subTotal += (i.price ? i.price * i.quantity : 0);
        }
        this.subTotal = subTotal;
        this.setTotal();
    }
    setTotal() {
        this.invoice.total = this.subTotal - this.invoice.discount + this.invoice.fee > 0 ? this.subTotal - this.invoice.discount + this.invoice.fee : 0;
    }
    setPaymentName(type) {
        switch (type) {
            case 1: return this.lang.translate("Cash");
            case 2: return this.lang.translate("Debit");
            case 3: return this.vhQuerySales.getlocalWallet(this.invoice.id_wallet).name;
        }
    }
    getUnit(units, ratio) {
        return this.vhQuerySales.getUnit_byRatio(units, ratio).unit;
    }
    getLotNumber(lots, _id) {
        let lot = lots.find(item => item._id == _id);
        return lot.lot_number + '\n' + this.fncService.formatDate(lot.date_mfg) + ' - ' + this.fncService.formatDate(lot.date_exp);
    }
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
    printInvoice() {
        this.checkPrint().then((printer) => {
            if (printer)
                this.vhComponent.showModal(this.renderPrintPage(printer['_id']), { printer: printer, invoice: this.invoice }, false, false, `modal-print-${printer['_id']}`);
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
    goBack() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/issue-invoice/issue-receive-goods'], { state: { dataRestore: this.dataRestore } });
    }
    ngAfterViewChecked() {
        if (document.getElementById('sales-invoice-detail-today') && document.querySelector(".sales-cart-header") && document.querySelector(".ant-table-thead") && document.querySelector(".ant-table-pagination")) {
            this.tableHeight = document.getElementById('sales-invoice-detail-today').clientHeight - document.querySelector(".sales-cart-header").clientHeight - document.querySelector(".ant-table-thead").clientHeight
                - document.querySelector(".ant-table-pagination").clientHeight - 40 + "px";
        }
        this.cdRef.detectChanges();
    }
    goToCart() {
        this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/issue-invoice/issue-receive-goods/edit'], { state: { dataRestore: this.dataRestore, invoiceDetail: this.invoice_detail, invoice: this.invoice, billShopee: this.billShopee } });
    }
}
DetailComponent.ɵfac = function DetailComponent_Factory(t) { return new (t || DetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_6__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_10__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_7__.FunctionService)); };
DetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DetailComponent, selectors: [["bill-type3-shopee-detail"]], decls: 5, vars: 4, consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["id", "sales-invoice-detail-today", 4, "ngIf"], ["id", "sales-invoice-detail-today"], [1, "sales"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", "center-all-content", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline"], [2, "margin-left", "4px"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], [1, "invoiceDetail-item"], ["nzShowSizeChanger", "", 3, "nzScroll", "nzData", "nzNoResult"], ["rowSelectionTable", ""], ["nzWidth", "35%"], ["nzWidth", "15%", "nzAlign", "center"], ["nzWidth", "15%", "nzAlign", "right"], ["nzWidth", "20%", "nzAlign", "right"], ["style", "cursor: pointer;", 4, "ngFor", "ngForOf"], [1, "sales-bills", "not-continue-sell"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-row", "", 1, "sales-bills-customer", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], [2, "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-payment_type"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], [2, "cursor", "pointer"], [4, "ngIf"], ["nzAlign", "center"], ["nzAlign", "right"], [2, "font-size", "0.7rem"], ["class", "sub-name", 4, "ngFor", "ngForOf"], [1, "sub-name"]], template: function DetailComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_15__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_11__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_17__.NzWaveDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzCellAlignDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_18__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 66% 33%;\n  grid-template-rows: 65% 35%;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 1/2;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .btn-data[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc;\n  border-radius: 5px;\n  width: 100%;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 92%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-align: center !important;\n  border-radius: 5px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills.not-continue-sell[_ngcontent-%COMP%] {\n  grid-template-rows: 20% 15% 63%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 2/3;\n  display: grid;\n  grid-template-columns: 100%;\n  align-content: space-between;\n  line-height: 1.8;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-pay[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-note[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 80%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .payment-print[_ngcontent-%COMP%] {\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  color: #fff;\n  border: none;\n  font-size: 0.9rem;\n  width: 100%;\n  height: 50px;\n}\n.title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n.sub-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--ion-color-vh-gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNFLGVBQUE7QUFFTjtBQUNFO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0FBRUo7QUFESTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FBR047QUFGTTs7OztFQUlFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUlSO0FBRk07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlSO0FBSFE7RUFDRSxVQUFBO0FBS1Y7QUFKVTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFNWjtBQUpVO0VBQ0Usa0JBQUE7QUFNWjtBQUhRO0VBQ0UsV0FBQTtBQUtWO0FBSlU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFNWjtBQUxZO0VBQ0UsZUFBQTtBQU9kO0FBTFk7RUFDRSw2QkFBQTtFQUNBLDZCQUFBO0FBT2Q7QUFGTTtFQUNFLCtCQUFBO0FBSVI7QUFGTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFJUjtBQUhRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBS1Y7QUFKVTtFQUNFLGtCQUFBO0FBTVo7QUFIUTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFLVjtBQUhRO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUtWO0FBSFE7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7QUFJVjtBQUZRO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSVY7QUFIVTtFQUNFLGlCQUFBO0FBS1o7QUFGWTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtBQUlkO0FBQVk7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQUVkO0FBRVE7RUFDRSx1QkFBQTtBQUFWO0FBQ1U7RUFDRSxpRUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNaO0FBS0U7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FBRko7QUFJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0Usa0JBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQXVCLGdCQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLG1DQUFBO0FBRTlCO0FBQ0U7RUFDRSxVQUFBO0VBQVksa0NBQUE7QUFHaEI7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsK0JBQUE7QUFHSiIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgaSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxuICB9XHJcbiAgbnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAuc2FsZXMge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjYlIDMzJTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2NSUgMzUlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICYtY2FydCxcclxuICAgICAgLnNhbGVzLWJpbGxzLXN0YWZmLFxyXG4gICAgICAuc2FsZXMtYmlsbHMtY3VzdG9tZXIsXHJcbiAgICAgIC5zYWxlcy1iaWxscy1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgICYtY2FydCB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDEvMztcclxuICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJi1oZWFkZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2JTtcclxuICAgICAgICAgIC5idG4tZGF0YSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWludm9pY2VEZXRhaWwge1xyXG4gICAgICAgICAgaGVpZ2h0OiA5MiU7XHJcbiAgICAgICAgICAuaW52b2ljZURldGFpbC1pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgJi1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLWJpbGxzLm5vdC1jb250aW51ZS1zZWxsIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSAxNSUgNjMlO1xyXG4gICAgICB9XHJcbiAgICAgICYtYmlsbHMge1xyXG4gICAgICAgIGdyaWQtcm93OiAxLzM7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgJi1zdGFmZiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtc3RhZmYgPiBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWN1c3RvbWVyIHtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWN1c3RvbWVyID4gZGl2LFxyXG4gICAgICAgICYtY29udGVudCA+IGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbnRlbnQge1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1wYXkge1xyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1ub3RlIHtcclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWJ1dHRvbiB7XHJcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIC5wYXltZW50LXByaW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbiAgLmNlbnRlci1jb2wge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC8qIEhpZGUgc2Nyb2xsYmFyKi9cclxuICAuaGlkZVNjcm9sbGJhciB7XHJcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xyXG4gIH1cclxuICBcclxuICAuaGlkZVNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDsgLyogRm9yIENocm9tZSwgU2FmYXJpLCBhbmQgT3BlcmEgKi9cclxuICB9XHJcbiAgXHJcbiAgLnN1Yi1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 63829:
/*!**************************************************************************************!*\
  !*** ./src/app/sales/components/bill-type/bill-type-3/shopee/edit/edit.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditComponent": () => (/* binding */ EditComponent)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var src_app_sales_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k57-col3/sales-k57-col3.component */ 59035);
/* harmony import */ var src_app_sales_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k80-col3/sales-k80-col3.component */ 10419);
/* harmony import */ var src_app_sales_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-k80-col4/sales-k80-col4.component */ 81989);
/* harmony import */ var src_app_sales_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-a5/sales-a5.component */ 92166);
/* harmony import */ var src_app_sales_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/sales/components/print/sales/sales-a4/sales-a4.component */ 70963);
/* harmony import */ var src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sales/interface/vh-type */ 8829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/sales/services/function.service */ 39);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../sale-desktop/components/staff/staff.component */ 88963);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../search/search-product/search-product.component */ 99767);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

































function EditComponent_div_21_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r7.name);
  }
}

function EditComponent_div_21_ng_container_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_div_21_ng_container_7_span_1_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r15.openModalChooseLot(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r13.getLotNumber(item_r7.lots, item_r7.id_lotproduct));
  }
}

function EditComponent_div_21_ng_container_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_div_21_ng_container_7_span_2_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r19.openModalChooseLot(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "Select lot"));
  }
}

function EditComponent_div_21_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, EditComponent_div_21_ng_container_7_span_1_Template, 2, 1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, EditComponent_div_21_ng_container_7_span_2_Template, 3, 3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r7.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !item_r7.id_lotproduct);
  }
}

function EditComponent_div_21_span_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_div_21_span_8_ng_container_2_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28);
      const combo_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r26.openModalChooseLot(combo_r23);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const combo_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r25.getLotNumber(combo_r23.lots, combo_r23.id_lotproduct));
  }
}

function EditComponent_div_21_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, EditComponent_div_21_span_8_ng_container_2_Template, 3, 1, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const combo_r23 = ctx.$implicit;
    const i_r24 = ctx.index;
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", i_r24 == item_r7.combos.length - 1 ? combo_r23.quantity + "x " + combo_r23.name + " (" + ctx_r10.getUnit(combo_r23.units, combo_r23.ratio) + ") " : combo_r23.quantity + "x " + combo_r23.name + " (" + ctx_r10.getUnit(combo_r23.units, combo_r23.ratio) + ") " + " ,", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", combo_r23.id_lotproduct);
  }
}

function EditComponent_div_21_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", item_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 2, "The products have not been linked"), ")");
  }
}

function EditComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_div_21_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r32.deleteGoods(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, EditComponent_div_21_span_6_Template, 2, 1, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, EditComponent_div_21_ng_container_7_Template, 3, 2, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, EditComponent_div_21_span_8_Template, 3, 2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, EditComponent_div_21_span_9_Template, 5, 4, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "nz-input-number", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function EditComponent_div_21_Template_nz_input_number_ngModelChange_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r34.checkQuantityProduct(item_r7, $event);
    })("ngModelChange", function EditComponent_div_21_Template_nz_input_number_ngModelChange_11_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const item_r7 = restoredCtx.$implicit;
      return item_r7.quantity = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_div_21_Template_div_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r36.openEditUnitPrice(item_r7);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "del", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
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
  }
}

function EditComponent_app_search_product_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-search-product", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeSearchProductList", function EditComponent_app_search_product_96_Template_app_search_product_closeSearchProductList_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r37.closeSearchProductList($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("searchProductList", ctx_r1.searchProductList)("default_price_type", 1);
  }
}

function EditComponent_nz_modal_97_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 3, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 5, "Enter unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx_r39.tempDetail.price);
  }
}

function EditComponent_nz_modal_97_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_nz_modal_97_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r42.isVisibleEditUnitPrice = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_nz_modal_97_ng_template_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r43);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r44.handleEditUnit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "Save"));
  }
}

function EditComponent_nz_modal_97_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "nz-modal", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function EditComponent_nz_modal_97_Template_nz_modal_nzVisibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r45.isVisibleEditUnitPrice = $event;
    })("nzOnCancel", function EditComponent_nz_modal_97_Template_nz_modal_nzOnCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r47.isVisibleEditUnitPrice = false;
    })("nzOnOk", function EditComponent_nz_modal_97_Template_nz_modal_nzOnOk_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r46);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r48.handleEditUnit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, EditComponent_nz_modal_97_ng_container_2_Template, 8, 7, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, EditComponent_nz_modal_97_ng_template_3_Template, 6, 6, "ng-template", null, 65, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 3, "Edit unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzFooter", _r40)("nzVisible", ctx_r2.isVisibleEditUnitPrice);
  }
}

function EditComponent_ng_container_100_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 78);
  }
}

function EditComponent_ng_container_100_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", item_r54._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r54.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](8, 4, item_r54.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](11, 7, item_r54.date_exp, "dd/MM/yyyy"), " ");
  }
}

function EditComponent_ng_container_100_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "No data"));
  }
}

function EditComponent_ng_container_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "nz-input-group", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "input", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function EditComponent_ng_container_100_Template_input_keyup_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r56);

      const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);

      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r55.searchLot(_r49.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, EditComponent_ng_container_100_ng_template_6_Template, 1, 0, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "nz-radio-group", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function EditComponent_ng_container_100_Template_nz_radio_group_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r57.tempDetail.id_lotproduct = $event;
    })("ngModelChange", function EditComponent_ng_container_100_Template_nz_radio_group_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r56);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r58.changeLot($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, EditComponent_ng_container_100_div_9_Template, 12, 10, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, EditComponent_ng_container_100_div_10_Template, 3, 3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);

    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSuffix", _r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r3.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r3.tempDetail.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r3.tempDetail.lots.length);
  }
}

function EditComponent_ng_template_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_ng_template_101_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r59.handleCancelChooseLot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_ng_template_101_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r60);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r61.handleChooseLot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r5.tempDetail.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "Ok"));
  }
}

function EditComponent_nz_modal_103_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "nz-option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "date");
  }

  if (rf & 2) {
    const element_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r70.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](1, 3, element_r70.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", element_r70._id);
  }
}

function EditComponent_nz_modal_103_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "nz-select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function EditComponent_nz_modal_103_ng_container_2_ng_container_21_ng_container_1_Template_nz_select_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r73);
      const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      return data_r67.id_lotproduct = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, EditComponent_nz_modal_103_ng_container_2_ng_container_21_ng_container_1_nz_option_7_Template, 2, 6, "nz-option", 88);
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
  }

  if (rf & 2) {
    const data_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r67.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 7, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", data_r67.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", data_r67.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r68.getUnit(data_r67.units, data_r67.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r67.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r68.vhAlgorithm.vhcurrencyunit(data_r67.price), " ");
  }
}

function EditComponent_nz_modal_103_ng_container_2_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, EditComponent_nz_modal_103_ng_container_2_ng_container_21_ng_container_1_Template, 14, 9, "ng-container", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", data_r67.lots);
  }
}

const _c0 = function () {
  return {
    y: "400px"
  };
};

function EditComponent_nz_modal_103_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "nz-table", 84, 85);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, EditComponent_nz_modal_103_ng_container_2_ng_container_21_Template, 2, 1, "ng-container", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);

    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzData", ctx_r62.tempDetail.combos)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](19, _c0));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", _r65.data);
  }
}

function EditComponent_nz_modal_103_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_nz_modal_103_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r75.show_modal_select_lots_combo = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_nz_modal_103_ng_template_3_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r76);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r77.handleChooseLotCombo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "Ok"));
  }
}

function EditComponent_nz_modal_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "nz-modal", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function EditComponent_nz_modal_103_Template_nz_modal_nzVisibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r78.show_modal_select_lots_combo = $event;
    })("nzOnCancel", function EditComponent_nz_modal_103_Template_nz_modal_nzOnCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r80.show_modal_select_lots_combo = false;
    })("nzOnOk", function EditComponent_nz_modal_103_Template_nz_modal_nzOnOk_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r79);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r81.handleChooseLotCombo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, EditComponent_nz_modal_103_ng_container_2_Template, 22, 20, "ng-container", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, EditComponent_nz_modal_103_ng_template_3_Template, 6, 6, "ng-template", null, 83, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);

    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate2"]("nzTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 4, "Select lot number for products in combo"), ": ", ctx_r6.tempDetail.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzFooter", _r63)("nzVisible", ctx_r6.show_modal_select_lots_combo);
  }
}

const _c1 = function () {
  return {
    minRows: 2,
    maxRows: 4
  };
};

class EditComponent {
  constructor(router, vhComponent, languageService, vhQuerySales, vhAlgorithm, vhAuth, fncService, nzModalService, vhEcommerce, cdf) {
    this.router = router;
    this.vhComponent = vhComponent;
    this.languageService = languageService;
    this.vhQuerySales = vhQuerySales;
    this.vhAlgorithm = vhAlgorithm;
    this.vhAuth = vhAuth;
    this.fncService = fncService;
    this.nzModalService = nzModalService;
    this.vhEcommerce = vhEcommerce;
    this.cdf = cdf;
    this.invoice = this.router.getCurrentNavigation().extras.state.invoice;
    this.dataRestore = this.router.getCurrentNavigation().extras.state.dataRestore; //nhớ dữ liệu truyền từ trang trước

    this.billShopee = this.router.getCurrentNavigation().extras.state.billShopee;
    this.employee = {};
    this.customer = {};
    this.pickerTime = new Date();
    this.checkPrinter = false;
    this.validProdDetail = true; //nếu biến này = false tức có sp shopee chưa được liên kết với app

    this.id_branch = this.vhQuerySales.getDefaultBranch()._id;
    this.invoiceDetail = this.router.getCurrentNavigation().extras.state.invoiceDetail;
    this.subTotal = 0;
    this.taxValue = 0; // ------thoát trang-----

    this.isExit = false;
    /**Phần thêm sản phẩm bổ sung
     * Note : không tính tiền sản phẩm này
     */

    this.searchProductList = false; // -------modal edit unit price-------

    this.isVisibleEditUnitPrice = false;
    this.warning_lot_expried = this.vhQuerySales.getLocalAppSettingNameBranch('permission_branch').warning_lot_expried;
    this.show_modal_select_lots = false;
    this.list_search_lot = [];
    this.show_modal_select_lots_combo = false;
  }
  /**Khởi tạo hóa đơn và merge sp của shopee vào billDetail */


  initBill() {
    this.employee = this.vhAuth.getlocalEmployee(this.invoice.id_employee);
    this.customer = this.vhQuerySales.getlocalCustomer(this.invoice.id_customer);
    this.setSubTotal();
    this.pickerTime = new Date(this.invoice.date);
  }

  setSubTotal() {
    let subTotal = 0;

    for (let i of this.invoiceDetail) {
      subTotal += i.price ? i.price * i.quantity : 0;
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
    if (printer) this.checkPrinter = printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable;
    this.vhAlgorithm.waitingStack().then(() => {
      this.discount_price = this.vhAlgorithm.vhnumeral(".discount-price");
      this.invoice_fee = this.vhAlgorithm.vhnumeral(".invoice-fee");
    });
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.event, false);
    window.removeEventListener('beforeunload', this.closerBrower, false);
  }

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

  goBack() {
    this.vhComponent.alertConfirm(`${this.languageService.translate("Confirm")}`, "", `${this.languageService.translate("Are you sure to cancel the sales order")}?`, "OK", this.languageService.translate('Cancel')).then(() => {
      this.isExit = true;
      this.router.navigate(["/sales/dashboard/manage/ecommerce/shopee/issue-invoice/issue-receive-goods"], {
        state: {
          dataRestore: this.dataRestore
        }
      });
    }, () => {});
  } // -------set employee-------


  closeAndReceiveEmployee(event) {
    if (event) {
      this.invoice.id_employee = event;
    }
  }

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

  editDiscount() {
    if (this.discount_price.getRawValue() && this.discount_price.getRawValue() >= 0) {
      this.invoice.discount = parseFloat(this.discount_price.getRawValue());
    } else {
      document.getElementById("discount-price")['value'] = this.invoice.discount;
      this.discount_price = this.vhAlgorithm.vhnumeral('.discount-price');
    }

    this.setTotal();
  }

  editFee() {
    if (this.invoice_fee.getRawValue() && this.invoice_fee.getRawValue() >= 0) {
      this.invoice.fee = parseFloat(this.invoice_fee.getRawValue());
    } else {
      document.getElementById("invoice-fee")['value'] = this.invoice.fee;
      this.invoice_fee = this.vhAlgorithm.vhnumeral('.invoice-fee');
    }

    this.setTotal();
  }

  compareSubTotal() {
    let sub = this.invoiceDetail.reduce((prev, next) => prev + next.quantity * next.price, 0);
    if (sub == this.subTotal) return true;
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
          ratio: item.ratio
        };
        if (item.id_lotproduct) detail['id_lotproduct'] = item.id_lotproduct;
        if (item.id_subproduct) detail['id_subproduct'] = item.id_subproduct;
        if (item.price < item.price_origin) detail['price_origin'] = item.price_origin;
        if (item.price == item.price_origin) detail['price_origin'] = item.price;

        if (item.ptype == 5) {
          detail['combos'] = item.combos.map(combo => {
            let product = {
              id_product: combo.id_product,
              price: combo.price,
              quantity: combo.quantity,
              ptype: combo.ptype,
              ratio: combo.ratio ? combo.ratio : 1
            };
            if (combo.id_lotproduct) product['id_lotproduct'] = combo.id_lotproduct;
            if (combo.id_subproduct) product['id_subproduct'] = combo.id_subproduct;
            return product;
          });
        }

        return detail;
      }
    }).filter(item => item);
  }

  payInvoice(print) {
    var _this = this;

    if (this.vhAuth.checkMyPermission("sales_enable_payment")) {
      if (this.compareSubTotal()) {
        this.vhComponent.alertConfirm(!print ? `${this.languageService.translate("Pay")}?` : `${this.languageService.translate("Pay & Print")}?`, "", "", "OK", this.languageService.translate("Cancel")).then(() => {
          this.vhComponent.showLoading("", "transparent-loading").then(() => {
            this.createOrUpdate(1).then(bill => {
              let update = /*#__PURE__*/function () {
                var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
                  return yield _this.vhEcommerce.updateSalesOrderShopee(_this.dataRestore['id_shop_selected'], _this.billShopee['order_sn'].toString(), {
                    id_bill_received_goods: bill._id
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
            }).catch(err => {
              this.vhComponent.hideLoading(0);
              this.vhComponent.showToast(2000, err);
            });
          });
        }, () => {});
      } else this.vhComponent.alertMessageDesktop("error", this.languageService.translate("The total price of the product is not equal to the subtotal"));
    } else this.vhComponent.showToast(1500, this.languageService.translate('You do not have this rights'), "alert-toast");
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
      if (printer && printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)].enable) resolve(printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)]);else rejects("No");
    });
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

  handle(update) {
    this.isExit = true;
    if (update) this.dataRestore['update'] = true;
    this.router.navigate(['/sales/dashboard/manage/ecommerce/shopee/issue-invoice/issue-receive-goods'], {
      state: {
        dataRestore: this.dataRestore
      }
    });
  }

  handlePrint() {
    this.checkPrint().then(printer => {
      if (printer) this.vhComponent.showModal(this.renderPrintPage(printer['_id']), {
        printer: printer,
        invoice: this.invoice
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

  closeSearchProductList(data) {
    if (data) {
      if (data.manylot && !data.id_lotproduct) this.openModalChooseLot(data);else if (data.combos && data.combos.filter(e => e.lots && !e.id_lotproduct).length) {
        this.tempDetail = data;
        this.show_modal_select_lots_combo = true;
      } else this.addInvoiceDetailExtraEcommerce(data);
    }

    this.searchProductList = false;
  }

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

  checkQuantityProduct(product, event) {
    if (!event) product.quantity = 1;else product.quantity = event;
    this.setSubTotal();
    this.cdf.detectChanges();
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
    } else {
      this.vhComponent.showToast(2000, this.languageService.translate("Invalid data, please check again"), "alert-toast");
    }
  }

  deleteGoods(detail) {
    this.vhComponent.alertConfirm("", "", `${this.languageService.translate("Delete")} ${detail.name}?`, "OK", this.languageService.translate("Cancel")).then(() => this.removeInvoiceDetail(detail.id_product), () => {});
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
   * Công thức tính free ship max = 4,5% * (giá trị sp - giá trị NBH tài trợ) * 1.1 (tối đa 16.5k trên 1sp)
   * Phí thanh toán = 2.002% x (giá sản phẩm – chi phí nhà bán hàng tài trợ + phí vận chuyển trả bởi khách hàng)
   */


  addInvoiceDetail(billShopee) {
    let order_items = billShopee.order_items.filter(e => !e.reason);
    let freeShipMax = 0;
    let paymet_fee = 0;
    let products = this.vhQuerySales.getlocalDetailProducts(src_app_sales_interface_vh_type__WEBPACK_IMPORTED_MODULE_6__.VhType.PRODUCT).filter(e => !e.delete_hidden).filter(item => item[this.id_branch] && item[this.id_branch].shopees && item[this.id_branch].shopees.length >= 0);

    for (let order_item of order_items) {
      paymet_fee += parseFloat((0.02002 * (order_item.item_price - order_item.voucher_seller + order_item.shipping_amount)).toFixed(2));
      freeShipMax += parseFloat((0.045 * (order_item.item_price - order_item.voucher_seller) * 1.1).toFixed(2));
      let findSuccess = false;

      for (let productApp of products) {
        for (let productShopee of productApp[this.id_branch].shopees) {
          let findProd = productShopee.skus.find(sku => sku.SkuId == order_item.sku_id);

          if (findProd) {
            findSuccess = true;
            this.addInvoiceDetailShopee(order_item.item_price, productApp, true);
            break;
          }
        }

        if (findSuccess) break;
      }

      if (!findSuccess) {
        this.addInvoiceDetailShopee(order_item.item_price, {
          name: order_item.name
        }, false);
        this.validProdDetail = false;
      }
    }

    let fee = parseFloat(freeShipMax.toFixed(2));
    this.invoice.discount = (fee > 16500 ? 16500 : fee) + parseFloat(paymet_fee.toFixed(2)) + billShopee.shipping_fee_discount_seller;
  }

  addInvoiceDetailShopee(price, product, exist) {
    let index = this.invoiceDetail.findIndex(detail => detail['id_product'] == product['_id'] && product['_id'] != null);

    if (index != -1) {
      if (this.invoiceDetail[index]['quantity'] < 9999999999) this.invoiceDetail[index]['quantity'] += 1;
    } else {
      if (exist) {
        this.invoiceDetail.unshift({
          name: product.name,
          id_product: product._id,
          quantity: 1,
          ptype: product.type,
          unit: product.unit,
          ratio: 1,
          units: product.units,
          price: price,
          price_origin: product.price_origin || null,
          id_subproduct: product.id_subproduct,
          lots: product.lots,
          id_lotproduct: product.id_lotproduct,
          free: false //nếu có trường này true thì được quyền chỉnh số lượng

        });
      } else {
        this.invoiceDetail.unshift({
          id_product: null,
          quantity: 1,
          price: price,
          ptype: 1,
          ratio: 1,
          name: product.name
        });
      }
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
    if (!this.list_search_lot.length) this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Sản phẩm này không có lô khả dụng để bán!"));else this.show_modal_select_lots = true;
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

  handleCancelChooseLot() {
    this.show_modal_select_lots = false;
    this.tempDetail.lots = this.list_search_lot;
  }

  handleChooseLotCombo() {
    if (this.tempDetail.combos.filter(item => item.lots && !item.id_lotproduct).length) this.vhComponent.alertMessageDesktop("warning", this.languageService.translate("Vui lòng chọn lô cho sản phẩm thuộc combo này"));else {
      this.show_modal_select_lots_combo = false;
      this.closeSearchProductList(this.tempDetail);
    }
  }

}

EditComponent.ɵfac = function EditComponent_Factory(t) {
  return new (t || EditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_7__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_8__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhQuerySales), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_sales_services_function_service__WEBPACK_IMPORTED_MODULE_9__.FunctionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_14__.VhEcommerce), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef));
};

EditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: EditComponent,
  selectors: [["bill-type3-shopee-edit"]],
  decls: 104,
  vars: 76,
  consts: [["nz-row", "", 1, "row-back", "medium-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], [1, "sales", "hide-best-selling"], [1, "sales-cart"], ["nz-row", "", 1, "sales-cart-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "12", 1, "title"], ["target", "_blank", 3, "href"], ["nz-col", "", "nzSpan", "12", 1, "right-all-content"], ["nz-button", "", "nzType", "default", 1, "btn-data", "nz-hover-border", 2, "width", "97%", 3, "click"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], [1, "hideScrollbar", "sales-cart-invoiceDetail"], ["class", "invoiceDetail-item", 4, "ngFor", "ngForOf"], [1, "sales-bills"], ["nz-row", "", 1, "sales-bills-staff", "hideScrollbar"], ["nz-col", "", "nzSpan", "24"], [1, "sales-bills-staff-name"], [3, "id_employee", "closeAndReceiveEmployee"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-staff-time"], ["nzBorderless", "", "nzShowTime", "", "nzFormat", "dd/MM/yyyy HH:mm:ss", 2, "text-align-last", "right", 3, "ngModel", "ngModelChange"], [1, "sales-bills-customer", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", "nz-row", "", 1, "sales-bills-customer-info"], [2, "width", "100%", "margin-bottom", "12px"], [1, "sales-bills-customer-info-name"], [1, "sales-bills-customer-info-phone"], ["nz-row", "", 1, "sales-bills-content", "hideScrollbar"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount"], ["nzTooltipPlacement", "top", "nz-tooltip", "", "nz-icon", "", "nzType", "exclamation-circle", "nzTheme", "outline", 2, "font-size", "0.9rem", "color", "var(--ion-color-vh-red)", ";margin-left", "4px", 3, "nzTooltipTitle"], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "nz-no-border", "discount-price", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-fee"], ["type", "text", "maxlength", "15", "id", "invoice-fee", "nz-input", "", 1, "nz-no-border", "invoice-fee", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-pay"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-rest"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-note"], ["nz-input", "", 1, "nz-hover-border", 3, "ngModel", "placeholder", "nzAutosize", "ngModelChange"], ["nz-row", "", 1, "sales-bills-button"], ["nz-button", "", 1, "order-and-print", 3, "disabled", "click"], ["nz-button", "", 1, "order", 3, "disabled", "click"], [3, "searchProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterEditUnitPrice2", ""], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], [1, "invoiceDetail-item"], ["nz-row", ""], ["nz-col", "", "nzSpan", "1", 3, "click"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer", "color", "var(--ion-color-vh-red)"], ["nz-col", "", "nzSpan", "8"], [1, "invoiceDetail-item-name"], ["class", "invoiceDetail-item-name-linked", 4, "ngIf"], [4, "ngIf"], ["style", "font-size: 0.75rem; color: var(--ion-color-vh-black); font-weight: normal;", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "5", 2, "text-align", "right"], [3, "ngModel", "nzMin", "ngModelChange"], ["nz-col", "", "nzSpan", "5", 1, "invoiceDetail-item-price", "text-end", 3, "click"], [1, "max-width-two-line", 2, "border-bottom", "1px var(--ion-color-vh-gray) solid", "margin-left", "16px"], [2, "margin-left", "5px", "font-size", "0.8rem"], [1, "max-width-two-line"], [1, "invoiceDetail-item-name-linked"], ["style", "color:var(--ion-color-vh-green);cursor: pointer;", 3, "click", 4, "ngIf"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], [2, "font-size", "0.75rem", "color", "var(--ion-color-vh-black)", "font-weight", "normal"], [1, "invoiceDetail-item-name-notlinked"], [3, "searchProductList", "default_price_type", "closeSearchProductList"], ["modalFooterEditUnitPrice", ""], ["nz-col", "", "nzSpan", "8", 1, "center-col"], ["nz-col", "", "nzSpan", "16"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "unit_price", 3, "value", "placeholder"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], [2, "width", "100%", 3, "ngModel", "ngModelChange"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], [2, "text-align", "center"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], ["nzWidth", "70vw", 3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice3", ""], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"]],
  template: function EditComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_Template_div_click_0_listener() {
        return ctx.goBack();
      });
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
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_Template_button_click_16_listener() {
        return ctx.searchProductList = true;
      });
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
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeAndReceiveEmployee", function EditComponent_Template_app_staff_closeAndReceiveEmployee_29_listener($event) {
        return ctx.closeAndReceiveEmployee($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "nz-date-picker", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_nz_date_picker_ngModelChange_34_listener($event) {
        return ctx.pickerTime = $event;
      })("ngModelChange", function EditComponent_Template_nz_date_picker_ngModelChange_34_listener($event) {
        return ctx.setPickerTime($event);
      });
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
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](47, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](51, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](57, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](58, "i", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function EditComponent_Template_input_blur_59_listener() {
        return ctx.editDiscount();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](63, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function EditComponent_Template_input_blur_64_listener() {
        return ctx.editFee();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](68, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](75, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](78);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](79, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](82, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](83, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](85);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](86, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "textarea", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function EditComponent_Template_textarea_ngModelChange_87_listener($event) {
        return ctx.invoice.note = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](88, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_Template_button_click_90_listener() {
        return ctx.payInvoice(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](92, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](93, "button", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function EditComponent_Template_button_click_93_listener() {
        return ctx.payInvoice(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](94);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](95, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](96, EditComponent_app_search_product_96_Template, 1, 2, "app-search-product", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](97, EditComponent_nz_modal_97_Template, 5, 5, "nz-modal", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "nz-modal", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function EditComponent_Template_nz_modal_nzVisibleChange_98_listener($event) {
        return ctx.show_modal_select_lots = $event;
      })("nzOnCancel", function EditComponent_Template_nz_modal_nzOnCancel_98_listener() {
        return ctx.handleCancelChooseLot();
      })("nzOnOk", function EditComponent_Template_nz_modal_nzOnOk_98_listener() {
        return ctx.handleChooseLot();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](99, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](100, EditComponent_ng_container_100_Template, 11, 7, "ng-container", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](101, EditComponent_ng_template_101_Template, 6, 7, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](103, EditComponent_nz_modal_103_Template, 5, 6, "nz-modal", 43);
    }

    if (rf & 2) {
      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](102);

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 41, "Back"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzGutter", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 43, "Order number"), ": ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("href", "https://banhang.shopee.vn/portal/sale/order?search=", ctx.billShopee.order_sn, "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.billShopee.order_sn);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](19, 45, "Search (F4)"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.invoiceDetail);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](28, 47, "Salesman"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id_employee", ctx.invoice.id_employee);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](33, 49, "Sales date"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.pickerTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](39, 51, "Customer information"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.customer.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.customer.phone, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](47, 53, "Payment information"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](51, 55, "SubTotal"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.subTotal));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](57, 57, "Platform fee"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTooltipTitle", "Vui l\u00F2ng ki\u1EC3m tra ph\u00ED s\u00E0n ch\u00EDnh x\u00E1c tr\u01B0\u1EDBc khi ph\u00E1t h\u00E0nh h\u00F3a \u0111\u01A1n");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.discount));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](63, 59, "Fee"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.fee));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](68, 61, "Total"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.total));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](75, 63, "Pay"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoice.payment));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](82, 65, "Rest"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx.vhAlgorithm.vhcurrencyunit_symbol(ctx.invoice.total - ctx.invoice.payment), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](88, 67, "Enter note..."));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.invoice.note)("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](75, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.validProdDetail || !ctx.checkPrinter);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](92, 69, "Save & Print"), " (F2) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx.validProdDetail);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](95, 71, "Save"), " (F1)");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.searchProductList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isVisibleEditUnitPrice);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](99, 73, "Select lot number"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzFooter", _r4)("nzVisible", ctx.show_modal_select_lots);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.show_modal_select_lots_combo);
    }
  },
  directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_17__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_18__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_19__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_16__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_20__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_21__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgForOf, _sale_desktop_components_staff_staff_component__WEBPACK_IMPORTED_MODULE_10__.StaffComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_23__.NzDatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.NgModel, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_25__.NzTooltipDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzAutosizeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_22__.NgIf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalContentDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__.NzInputNumberComponent, _search_search_product_search_product_component__WEBPACK_IMPORTED_MODULE_11__.SearchProductComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_26__.NzInputGroupWhitSuffixOrPrefixDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_28__.NzRadioComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_29__.NzTbodyComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__.NzOptionComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_22__.DatePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%] {\n  display: grid;\n  height: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 65% 35%;\n  grid-row-gap: 10px;\n  row-gap: 10px;\n  grid-column-gap: 10px;\n  column-gap: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 0.9rem;\n  width: 100%;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart[_ngcontent-%COMP%] {\n  grid-row: 1/2;\n  grid-column: 1/3;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%] {\n  height: 6%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 500;\n  transition: 0.1s;\n  color: var(--ion-color-vh-green) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transition: 0.1s;\n  border-bottom: 2px solid var(--ion-color-vh-green);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%] {\n  height: 93%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item[_ngcontent-%COMP%] {\n  margin-top: 1.1rem;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name-linked[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-name-notlinked[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-red) !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-price[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-cart-invoiceDetail[_ngcontent-%COMP%]   .invoiceDetail-item-quantity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 8px 32px;\n  width: 20px;\n  cursor: not-allowed;\n  border-radius: 4px;\n  color: var(--ion-color-vh-gray);\n  border: 1px solid var(--ion-color-vh-gray);\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  grid-column: 3/4;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 18% 17% 55% 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-y: scroll;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.9rem;\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-time[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   nz-date-picker[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-staff-name[_ngcontent-%COMP%]   app-staff[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-staff[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  align-self: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info-name[_ngcontent-%COMP%] {\n  width: 60%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-customer-info-phone[_ngcontent-%COMP%] {\n  text-align: end;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%] {\n  align-content: flex-start;\n  overflow-y: scroll;\n  font-size: 0.9rem;\n  margin-top: 10px;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 0.9rem;\n  width: 40%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-discount[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], nz-layout[_ngcontent-%COMP%]   .sales-bills-content-fee[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: end;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-tax[_ngcontent-%COMP%]   .not-found[_ngcontent-%COMP%] {\n  width: 25%;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-rest[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-content-rest[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 1rem;\n  color: var(--ion-color-vh-green);\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%] {\n  align-content: flex-end;\n  justify-content: space-between;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .sales-bills-button[_ngcontent-%COMP%]   .order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 47%;\n  height: 50px !important;\n}\nnz-layout[_ngcontent-%COMP%]   .hide-best-selling[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n  grid-row-gap: 0px;\n  row-gap: 0px;\n}\n.title[_ngcontent-%COMP%] {\n  align-self: center;\n  color: var(--ion-color-vh-green);\n  font-size: 1.2rem;\n  align-self: center;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.center-col[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.hideScrollbar[_ngcontent-%COMP%] {\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.hideScrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n  \n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDRSxlQUFBO0FBRU47QUFDRTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtFQUFBLGdCQUFBO0FBR047QUFGTTs7OztFQUlFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUlSO0FBRk07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlSO0FBSFE7RUFDRSxVQUFBO0FBS1Y7QUFKVTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQU1aO0FBSlU7RUFDRSxnQkFBQTtFQUNBLGtEQUFBO0FBTVo7QUFIUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQUtWO0FBSlU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBTVo7QUFMWTtFQUNFLGlCQUFBO0FBT2Q7QUFOYztFQUNFLGlCQUFBO0FBUWhCO0FBTmM7RUFDRSx5Q0FBQTtBQVFoQjtBQUxZO0VBQ0UsZUFBQTtBQU9kO0FBTFk7RUFDRSxrQkFBQTtBQU9kO0FBTmM7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBDQUFBO0FBUWhCO0FBRk07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBQUlSO0FBSFE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFLVjtBQUpVO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUtaO0FBSlk7OztFQUVFLFVBQUE7RUFDQSxlQUFBO0FBT2Q7QUFKVTtFQUNFLGtCQUFBO0FBTVo7QUFIUTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUtWO0FBSlU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQU1aO0FBTFk7RUFDRSxVQUFBO0FBT2Q7QUFMWTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBT2Q7QUFIUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQUtWO0FBSFE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUtWO0FBSFk7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFLZDtBQUFZO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBRWQ7QUFFWTtFQUNFLFVBQUE7QUFBZDtBQUlZO0VBQ0UsZUFBQTtBQUZkO0FBSVk7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBRmQ7QUFNUTtFQUNFLHVCQUFBO0VBQ0EsOEJBQUE7QUFKVjtBQUtVO0VBQ0UsMkNBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0FBSFo7QUFLVTtFQUNFLDJDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUVBLHVCQUFBO0FBSlo7QUFTSTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFBQSxZQUFBO0FBUE47QUFVRTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUEo7QUFTRTs7RUFFRSxpQkFBQTtBQU5KO0FBUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9FLGtCQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUF1QixnQkFBQTtFQUN2Qix3QkFBQTtFQUEwQixtQ0FBQTtBQUY5QjtBQUtFO0VBQ0UsVUFBQTtFQUFZLGtDQUFBO0FBRGhCO0FBSUU7RUFDRSxXQUFBO0FBREo7QUFFRztFQUNJLDBCQUFBO0FBQVA7QUFJRTtFQUNDLFdBQUE7QUFESCIsImZpbGUiOiJlZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG56LWxheW91dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnNhbGVzIHtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDY1JSAzNSU7XHJcbiAgICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbiAgICAgICYtY2FydCxcclxuICAgICAgLnNhbGVzLWJpbGxzLXN0YWZmLFxyXG4gICAgICAuc2FsZXMtYmlsbHMtY3VzdG9tZXIsXHJcbiAgICAgIC5zYWxlcy1iaWxscy1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgICYtY2FydCB7XHJcbiAgICAgICAgZ3JpZC1yb3c6IDEvMjtcclxuICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgJi1oZWFkZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiA2JTtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMXM7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWludm9pY2VEZXRhaWwge1xyXG4gICAgICAgICAgaGVpZ2h0OiA5MyU7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAuaW52b2ljZURldGFpbC1pdGVtIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4xcmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgJi1uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAmLWxpbmtlZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJi1ub3RsaW5rZWQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1yZWQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtcHJpY2Uge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXF1YW50aXR5IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDMycHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLWJpbGxzIHtcclxuICAgICAgICBncmlkLXJvdzogMS8zO1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAzLzQ7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDE4JSAxNyUgNTUlIDEwJTtcclxuICAgICAgICAmLXN0YWZmIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICAgICAgJi10aW1lLFxyXG4gICAgICAgICAgJi1uYW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBuei1kYXRlLXBpY2tlcixcclxuICAgICAgICAgICAgYXBwLXN0YWZmIHtcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jdXN0b21lciB7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAmLWluZm8ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICYtbmFtZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLXBob25lIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbnRlbnQgPiBkaXYge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1jb250ZW50IHtcclxuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBkaXYgPiB7XHJcbiAgICAgICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1kaXNjb3VudCxcclxuICAgICAgICAgICYtZmVlIHtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtdGF4IHtcclxuICAgICAgICAgICAgLm5vdC1mb3VuZCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJi1yZXN0IHtcclxuICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1idXR0b24ge1xyXG4gICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAub3JkZXItYW5kLXByaW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogNDclO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5vcmRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ3JTtcclxuICAgICAgICAgICAgLy9tYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhpZGUtYmVzdC1zZWxsaW5nIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICAgIHJvdy1nYXA6IDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGlucHV0LFxyXG4gIHRleHRhcmVhIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxuICAuY2VudGVyLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLyogSGlkZSBzY3JvbGxiYXIqL1xyXG4gIC5oaWRlU2Nyb2xsYmFyIHtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRm9yIEZpcmVmb3ggKi9cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXHJcbiAgfVxyXG4gIFxyXG4gIC5oaWRlU2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMHB4OyAvKiBGb3IgQ2hyb21lLCBTYWZhcmksIGFuZCBPcGVyYSAqL1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLnJhZGlvLXB1cmNoYXNlICBzcGFue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgIC5hbnQtcmFkaW97XHJcbiAgICAgICBtYXgtd2lkdGg6IDI0cHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLnJhZGlvLXB1cmNoYXNlICAuYW50LXJhZGlve1xyXG4gICB3aWR0aDogMTZweDsgXHJcbiAgfVxyXG4gICJdfQ== */"]
});

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
//# sourceMappingURL=default-src_app_sales_components_bill-type_bill-type-3_shopee_bill-type1-shopee_module_ts-src-10130a.js.map