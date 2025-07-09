"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_cafe-desktop_components_cart1_cart1_module_ts"],{

/***/ 16002:
/*!***************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/bill-detail1/bill-detail1.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillDetail1Component": () => (/* binding */ BillDetail1Component)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/interface/vh-type */ 162);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var src_app_cafe_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cafe/services/product.service */ 28506);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var _print_one_col_print_one_col_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./print-one-col/print-one-col.component */ 70863);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ 79787);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _product_wishlist1_product_wishlist1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-wishlist1/product-wishlist1.component */ 38533);
/* harmony import */ var _search_product_search_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search-product/search-product.component */ 9341);
/* harmony import */ var _search_service_search_service_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../search-service/search-service.component */ 10319);
/* harmony import */ var _search_topping_search_topping_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../search-topping/search-topping.component */ 53817);
/* harmony import */ var _search_combo_search_combo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search-combo/search-combo.component */ 73016);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 39370);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/date-picker */ 45858);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


































function BillDetail1Component_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r22.showModalChangePriceType.emit(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "Ch\u1ECDn gi\u00E1 b\u00E1n"));
  }
}

function BillDetail1Component_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "Please select a dishes/beverage"));
  }
}

function BillDetail1Component_div_30_ng_container_1_i_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_container_1_i_9_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r33.showProductGift.emit(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function BillDetail1Component_div_30_ng_container_1_i_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_container_1_i_10_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r35.showProductGiftType7.emit(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_i_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_i_5_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r47);
      const data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      ctx_r46.showPrintKitchenAgain = true;
      return ctx_r46.openPrintKitchen(data_r38);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "Print kitchen"));
  }
}

function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_i_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_i_6_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r51);
      const data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3).index;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r49.printLabel(data_r38, i_r25);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "Label printing"));
  }
}

function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_ng_container_7_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r55);
      const data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r53.openModalChooseLot(data_r38);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r41.getLotNumber(data_r38.lots, data_r38.id_lotproduct), "");
  }
}

function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_s_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r42.vhAlgorithm.vhcurrencyunit(data_r38.price_origin), " ");
  }
}

function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const combo_r59 = ctx.$implicit;
    const i_r60 = ctx.index;
    const data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", i_r60 == data_r38.combos.length - 1 ? combo_r59.quantity + "x " + combo_r59.name + " (" + ctx_r58.getUnit(combo_r59.units, combo_r59.ratio) + ") " : combo_r59.quantity + "x " + combo_r59.name + " (" + ctx_r58.getUnit(combo_r59.units, combo_r59.ratio) + ") " + " ,", " ");
  }
}

function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_div_18_span_1_Template, 2, 1, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", data_r38.combos);
  }
}

function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_div_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const sideDishes_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]("+ " + sideDishes_r63.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](6, 2, sideDishes_r63.quantity, "1.0-2"));
  }
}

function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_div_19_ng_container_1_Template, 9, 5, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const sideDishes_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", sideDishes_r63.quantity > 0);
  }
}

function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const properties_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]("+ " + properties_r66.name + " - " + properties_r66.selectedValue);
  }
}

const _c0 = function () {
  return [];
};

function BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_i_5_Template, 2, 3, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_i_6_Template, 2, 3, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_ng_container_7_Template, 3, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_s_13_Template, 2, 1, "s", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_div_18_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_div_19_Template, 2, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_div_20_Template, 5, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", data_r38.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r37.checkPrinterKitchen.enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r37.stamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", data_r38.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("x", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](10, 14, data_r38.quantity, "1.0-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r37.vhAlgorithm.vhcurrencyunit(data_r38.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", data_r38.price < data_r38.price_origin && ctx_r37.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r37.vhAlgorithm.vhcurrencyunit(data_r38.price * data_r38.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", data_r38.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", data_r38.toppings ? data_r38.toppings : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](17, _c0))("ngForTrackBy", ctx_r37.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", data_r38.properties ? data_r38.properties : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](18, _c0))("ngForTrackBy", ctx_r37.myTrackByNameFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r38.note);
  }
}

function BillDetail1Component_div_30_ng_container_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_div_30_ng_container_1_ng_container_11_div_1_Template, 24, 19, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", item_r24.products);
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_i_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_i_5_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r78);
      const data_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      ctx_r77.showPrintKitchenAgain = true;
      return ctx_r77.openPrintKitchen(data_r68);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "Print kitchen"));
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_i_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_i_6_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r82);
      const data_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).index;
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r80.printLabel(data_r68, i_r25);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "Label printing"));
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_ng_container_7_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r86);
      const data_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r84.openModalChooseLot(data_r68);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r72.getLotNumber(data_r68.lots, data_r68.id_lotproduct), "");
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_s_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r73.vhAlgorithm.vhcurrencyunit(data_r68.price_origin), " ");
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_18_span_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "b", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const combo_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r91.getLotNumber(combo_r90.lots, combo_r90.id_lotproduct));
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_18_span_1_ng_container_2_Template, 3, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const combo_r90 = ctx.$implicit;
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"](" ", combo_r90.quantity, "x ", combo_r90.name, " (", ctx_r89.getUnit(combo_r90.units, combo_r90.ratio), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", combo_r90.lots && combo_r90.id_lotproduct);
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_18_span_1_Template, 4, 4, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", data_r68.combos);
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_19_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const sideDishes_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]("+ " + sideDishes_r94.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](6, 2, sideDishes_r94.quantity, "1.0-2"));
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_19_ng_container_1_Template, 9, 5, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const sideDishes_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", sideDishes_r94.quantity > 0);
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const properties_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]("+ " + properties_r97.name + " - " + properties_r97.selectedValue);
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_i_5_Template, 2, 3, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_i_6_Template, 2, 3, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_ng_container_7_Template, 3, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_s_13_Template, 2, 1, "s", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_18_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_19_Template, 2, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_div_20_Template, 5, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", data_r68.name, " (Qu\u00E0 t\u1EB7ng) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r69.checkPrinterKitchen.enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r69.stamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", data_r68.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("x", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](10, 14, data_r68.quantity, "1.0-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r69.vhAlgorithm.vhcurrencyunit(data_r68.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", data_r68.price < data_r68.price_origin && ctx_r69.display_promotion_selling_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r69.vhAlgorithm.vhcurrencyunit(data_r68.price * data_r68.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", data_r68.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", data_r68.toppings ? data_r68.toppings : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](17, _c0))("ngForTrackBy", ctx_r69.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", data_r68.properties ? data_r68.properties : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](18, _c0))("ngForTrackBy", ctx_r69.myTrackByNameFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r68.note);
  }
}

function BillDetail1Component_div_30_ng_container_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_div_30_ng_container_1_div_12_ng_container_1_Template, 24, 19, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", data_r68.choose);
  }
}

function BillDetail1Component_div_30_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzOnConfirm", function BillDetail1Component_div_30_ng_container_1_Template_button_nzOnConfirm_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r99.deletePromotion.emit(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, BillDetail1Component_div_30_ng_container_1_i_9_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, BillDetail1Component_div_30_ng_container_1_i_10_Template, 1, 0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, BillDetail1Component_div_30_ng_container_1_ng_container_11_Template, 2, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, BillDetail1Component_div_30_ng_container_1_div_12_Template, 2, 1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzPopconfirmTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 7, "Cancel promotion?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzLoading", item_r24.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", item_r24.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.pmtype == 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.pmtype == 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.pmtype != 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", item_r24.products_gift);
  }
}

function BillDetail1Component_div_30_ng_template_2_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" (", ctx_r102.getUnit(item_r24.units, item_r24.ratio), ") ");
  }
}

function BillDetail1Component_div_30_ng_template_2_i_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_template_2_i_8_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r114);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      const item_r24 = ctx_r115.$implicit;
      const i_r25 = ctx_r115.index;
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      ctx_r113.showPrintKitchenAgain = true;
      return ctx_r113.openPrintKitchen(item_r24, i_r25);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "Print kitchen"));
  }
}

function BillDetail1Component_div_30_ng_template_2_i_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_template_2_i_9_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r118);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      const item_r24 = ctx_r117.$implicit;
      const i_r25 = ctx_r117.index;
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r116.printLabel(item_r24, i_r25);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTooltipTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 1, "Label printing"));
  }
}

function BillDetail1Component_div_30_ng_template_2_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_template_2_ng_container_10_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r121);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r119.openModalChooseLot(item_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r105.getLotNumber(item_r24.lots, item_r24.id_lotproduct), "");
  }
}

function BillDetail1Component_div_30_ng_template_2_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" x", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, item_r24.quantity, "1.0-2"), " ");
  }
}

function BillDetail1Component_div_30_ng_template_2_ng_container_14_s_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3).$implicit;
    const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r124.vhAlgorithm.vhcurrencyunit(item_r24.price_origin), " ");
  }
}

function BillDetail1Component_div_30_ng_template_2_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BillDetail1Component_div_30_ng_template_2_ng_container_14_s_2_Template, 2, 1, "s", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r107.vhAlgorithm.vhcurrencyunit(item_r24.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.price < item_r24.price_origin && ctx_r107.display_promotion_selling_price);
  }
}

function BillDetail1Component_div_30_ng_template_2_div_21_span_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "b", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const combo_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r129.getLotNumber(combo_r128.lots, combo_r128.id_lotproduct));
  }
}

function BillDetail1Component_div_30_ng_template_2_div_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BillDetail1Component_div_30_ng_template_2_div_21_span_1_ng_container_2_Template, 3, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const combo_r128 = ctx.$implicit;
    const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate3"](" ", combo_r128.quantity, "x ", combo_r128.name, " (", ctx_r127.getUnit(combo_r128.units, combo_r128.ratio), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", combo_r128.lots && combo_r128.id_lotproduct);
  }
}

function BillDetail1Component_div_30_ng_template_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_div_30_ng_template_2_div_21_span_1_Template, 4, 4, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", item_r24.combos);
  }
}

function BillDetail1Component_div_30_ng_template_2_div_22_ng_container_1_s_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const sideDishes_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r134.vhAlgorithm.vhcurrencyunit(sideDishes_r132.price_origin));
  }
}

function BillDetail1Component_div_30_ng_template_2_div_22_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, BillDetail1Component_div_30_ng_template_2_div_22_ng_container_1_s_9_Template, 2, 1, "s", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const sideDishes_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]("+ " + sideDishes_r132.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](6, 5, sideDishes_r132.quantity, "1.0-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r133.vhAlgorithm.vhcurrencyunit(sideDishes_r132.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", sideDishes_r132.price < sideDishes_r132.price_origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r133.vhAlgorithm.vhcurrencyunit(sideDishes_r132.price * sideDishes_r132.quantity));
  }
}

function BillDetail1Component_div_30_ng_template_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_div_30_ng_template_2_div_22_ng_container_1_Template, 13, 8, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const sideDishes_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", sideDishes_r132.quantity > 0);
  }
}

function BillDetail1Component_div_30_ng_template_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const properties_r137 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"]("+ " + properties_r137.name + " - " + properties_r137.selectedValue);
  }
}

function BillDetail1Component_div_30_ng_template_2_div_24_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "Started at"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 4, item_r24.time_start_order, "HH:mm:ss dd/MM/yyyy"), "");
  }
}

const _c1 = function (a0) {
  return {
    "color": a0
  };
};

function BillDetail1Component_div_30_ng_template_2_div_24_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](8, _c1, item_r24.is_paused ? "var(--ion-color-vh-orange)" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 3, "Estimated until"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 5, item_r24.time_end_order, "HH:mm:ss dd/MM/yyyy"), " ");
  }
}

function BillDetail1Component_div_30_ng_template_2_div_24_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const usedTime_r143 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "Used"), ": ", usedTime_r143, "");
  }
}

function BillDetail1Component_div_30_ng_template_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_div_30_ng_template_2_div_24_p_1_Template, 4, 7, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BillDetail1Component_div_30_ng_template_2_div_24_p_2_Template, 4, 10, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BillDetail1Component_div_30_ng_template_2_div_24_ng_container_3_Template, 4, 4, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.time_start_order);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.time_end_order);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r111.productService.generateTimeUseString(item_r24.time_start_order, item_r24.time_end_order));
  }
}

function BillDetail1Component_div_30_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzOnConfirm", function BillDetail1Component_div_30_ng_template_2_Template_button_nzOnConfirm_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r147);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r145.removeFood(item_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, BillDetail1Component_div_30_ng_template_2_ng_container_7_Template, 2, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, BillDetail1Component_div_30_ng_template_2_i_8_Template, 2, 3, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, BillDetail1Component_div_30_ng_template_2_i_9_Template, 2, 3, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, BillDetail1Component_div_30_ng_template_2_ng_container_10_Template, 3, 1, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, BillDetail1Component_div_30_ng_template_2_ng_container_12_Template, 3, 4, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, BillDetail1Component_div_30_ng_template_2_ng_container_14_Template, 3, 2, "ng-container", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_div_30_ng_template_2_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r147);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r148.editFood(item_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, BillDetail1Component_div_30_ng_template_2_div_21_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, BillDetail1Component_div_30_ng_template_2_div_22_Template, 2, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, BillDetail1Component_div_30_ng_template_2_div_23_Template, 5, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, BillDetail1Component_div_30_ng_template_2_div_24_Template, 4, 3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BillDetail1Component_div_30_ng_template_2_Template_input_ngModelChange_26_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r147);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      return item_r24.note = $event;
    })("blur", function BillDetail1Component_div_30_ng_template_2_Template_input_blur_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r147);
      const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r152.updateNote(item_r24);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 18, "Delete"), "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzLoading", !item_r24._id || item_r24.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r24.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.ptype == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r28.checkPrinterKitchen.enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r28.stamp);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.ptype !== ctx_r28.VhType.SERVICETIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.ptype !== ctx_r28.VhType.SERVICETIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r28.vhAlgorithm.vhcurrencyunit(item_r24.price * item_r24.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", item_r24.toppings ? item_r24.toppings : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](22, _c0))("ngForTrackBy", ctx_r28.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", item_r24.properties ? item_r24.properties : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](23, _c0))("ngForTrackBy", ctx_r28.myTrackByNameFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.ptype === ctx_r28.VhType.SERVICETIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 20, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", item_r24.note);
  }
}

function BillDetail1Component_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_div_30_ng_container_1_Template, 13, 9, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BillDetail1Component_div_30_ng_template_2_Template, 28, 24, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r24 = ctx.$implicit;

    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r24.id_promotion)("ngIfElse", _r27);
  }
}

function BillDetail1Component_app_product_wishlist1_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-product-wishlist1", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("productChoice", function BillDetail1Component_app_product_wishlist1_31_Template_app_product_wishlist1_productChoice_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r156);
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r155.createBillDetail($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("default_price_type", ctx_r3.default_price_type);
  }
}

function BillDetail1Component_app_search_product_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-search-product", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeSearchProductList", function BillDetail1Component_app_search_product_33_Template_app_search_product_closeSearchProductList_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r158);
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r157.closeSearchProduct($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("showDrawerProductList", ctx_r4.showDrawerProductList)("default_price_type", ctx_r4.default_price_type);
  }
}

function BillDetail1Component_app_search_service_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-search-service", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeSearchServiceList", function BillDetail1Component_app_search_service_34_Template_app_search_service_closeSearchServiceList_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r160);
      const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r159.closeSearchService($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("showDrawerServiceList", ctx_r5.showDrawerServiceList)("default_price_type", ctx_r5.default_price_type);
  }
}

function BillDetail1Component_app_search_topping_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-search-topping", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeSearchSideDishesList", function BillDetail1Component_app_search_topping_35_Template_app_search_topping_closeSearchSideDishesList_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r162);
      const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r161.closeSearchSideDishes($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("showDrawerSideDishesList", ctx_r6.showDrawerSideDishesList)("default_price_type", ctx_r6.default_price_type);
  }
}

function BillDetail1Component_app_search_combo_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r164 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "app-search-combo", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("closeSearchCombosList", function BillDetail1Component_app_search_combo_36_Template_app_search_combo_closeSearchCombosList_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r164);
      const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r163.closeSearchCombos($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("showDrawerCombosList", ctx_r7.showDrawerCombosList);
  }
}

function BillDetail1Component_ng_container_39_nz_option_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "nz-option", 85);
  }

  if (rf & 2) {
    const item_r166 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", item_r166._id)("nzLabel", item_r166.name);
  }
}

function BillDetail1Component_ng_container_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Ch\u1ECDn khu v\u1EF1c \u0111i\u1EC1u ph\u1ED1i b\u1EBFp/qu\u1EA7y pha ch\u1EBF");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "nz-select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BillDetail1Component_ng_container_39_Template_nz_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r168);
      const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r167.id_dispatcherzone = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, BillDetail1Component_ng_container_39_nz_option_4_Template, 1, 2, "nz-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r8.id_dispatcherzone);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r8.dispatcherzones);
  }
}

function BillDetail1Component_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r170 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_ng_template_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r170);
      const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r169.handleDispatcher();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "Ok"));
  }
}

function BillDetail1Component_nz_modal_42_ng_container_2_div_1_nz_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "nz-option", 85);
  }

  if (rf & 2) {
    const item_r179 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", item_r179._id)("nzLabel", item_r179.name);
  }
}

function BillDetail1Component_nz_modal_42_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Ch\u1ECDn m\u00E1y in \u0111i\u1EC1u ph\u1ED1i : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "nz-select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, BillDetail1Component_nz_modal_42_ng_container_2_div_1_nz_option_5_Template, 1, 2, "nz-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r174.id_printer_kitchen);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r174.printer_kitchens);
  }
}

const _c2 = function (a0, a1) {
  return {
    "font-family": a0,
    "font-size.pt": a1
  };
};

function BillDetail1Component_nz_modal_42_ng_container_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](4, _c2, ctx_r175.checkPrinterKitchen.font_family, ctx_r175.checkPrinterKitchen.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, ctx_r175.printKitchen.title), " ");
  }
}

function BillDetail1Component_nz_modal_42_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "b", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](6, _c2, ctx_r176.checkPrinterKitchen.font_family, ctx_r176.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 4, "Table"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](9, _c2, ctx_r176.checkPrinterKitchen.font_family, ctx_r176.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r176.tableInfo.length > 50 ? ctx_r176.tableInfo.substring(0, 49) + "..." : ctx_r176.tableInfo);
  }
}

function BillDetail1Component_nz_modal_42_ng_container_2_div_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" (", ctx_r181.getUnit(item_r180.units, item_r180.ratio), ") ");
  }
}

function BillDetail1Component_nz_modal_42_ng_container_2_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](2, _c2, ctx_r182.checkPrinterKitchen.font_family, ctx_r182.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r182.getSubCombo(item_r180.combos), " ");
  }
}

function BillDetail1Component_nz_modal_42_ng_container_2_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const sideDishes_r187 = ctx.$implicit;
    const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](4, _c2, ctx_r183.checkPrinterKitchen.font_family, ctx_r183.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", "+ " + sideDishes_r187.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](7, _c2, ctx_r183.checkPrinterKitchen.font_family, ctx_r183.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", sideDishes_r187.quantity, "");
  }
}

function BillDetail1Component_nz_modal_42_ng_container_2_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const properties_r188 = ctx.$implicit;
    const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](2, _c2, ctx_r184.checkPrinterKitchen.font_family, ctx_r184.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", "+ " + properties_r188.name + " - " + properties_r188.selectedValue, " ");
  }
}

function BillDetail1Component_nz_modal_42_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, BillDetail1Component_nz_modal_42_ng_container_2_div_12_span_4_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, BillDetail1Component_nz_modal_42_ng_container_2_div_12_div_7_Template, 4, 5, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, BillDetail1Component_nz_modal_42_ng_container_2_div_12_div_8_Template, 5, 10, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, BillDetail1Component_nz_modal_42_ng_container_2_div_12_div_9_Template, 3, 5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r180 = ctx.$implicit;
    const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](11, _c2, ctx_r177.checkPrinterKitchen.font_family, ctx_r177.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r180.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r180.ptype === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](14, _c2, ctx_r177.checkPrinterKitchen.font_family, ctx_r177.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r180.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r180.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", item_r180.toppings ? item_r180.toppings : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](17, _c0))("ngForTrackBy", ctx_r177.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", item_r180.properties ? item_r180.properties : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](18, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](19, _c2, ctx_r177.checkPrinterKitchen.font_family, ctx_r177.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r180.note);
  }
}

function BillDetail1Component_nz_modal_42_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_nz_modal_42_ng_container_2_div_1_Template, 6, 2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BillDetail1Component_nz_modal_42_ng_container_2_div_3_Template, 3, 7, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, BillDetail1Component_nz_modal_42_ng_container_2_div_4_Template, 7, 12, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, BillDetail1Component_nz_modal_42_ng_container_2_div_12_Template, 12, 22, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r171.platform.is("electron"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r171.checkPrinterKitchen.header_hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r171.checkPrinterKitchen.table_name_hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](12, _c2, ctx_r171.checkPrinterKitchen.font_family, ctx_r171.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 8, "Dishes name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](15, _c2, ctx_r171.checkPrinterKitchen.font_family, ctx_r171.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 10, "Quantity"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r171.printKitchen.value);
  }
}

function BillDetail1Component_nz_modal_42_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_nz_modal_42_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r190);
      const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r189.handlePrint(false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "Print"));
  }
}

function BillDetail1Component_nz_modal_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "nz-modal", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function BillDetail1Component_nz_modal_42_Template_nz_modal_nzVisibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r192);
      const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r191.printKitchen.status = $event;
    })("nzOnCancel", function BillDetail1Component_nz_modal_42_Template_nz_modal_nzOnCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r192);
      const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r193.handleCancelPrint();
    })("nzOnOk", function BillDetail1Component_nz_modal_42_Template_nz_modal_nzOnOk_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r192);
      const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r194.handlePrint(false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BillDetail1Component_nz_modal_42_ng_container_2_Template, 13, 18, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BillDetail1Component_nz_modal_42_ng_template_3_Template, 3, 3, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r172 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);

    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](1, 4, "Print kitchen"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzMaskClosable", false)("nzFooter", _r172)("nzVisible", ctx_r11.printKitchen.status);
  }
}

function BillDetail1Component_ng_container_45_div_1_nz_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "nz-option", 85);
  }

  if (rf & 2) {
    const item_r200 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", item_r200._id)("nzLabel", item_r200.name);
  }
}

function BillDetail1Component_ng_container_45_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Ch\u1ECDn m\u00E1y in \u0111i\u1EC1u ph\u1ED1i : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "nz-select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, BillDetail1Component_ng_container_45_div_1_nz_option_5_Template, 1, 2, "nz-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r195.id_printer_kitchen);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r195.printer_kitchens);
  }
}

function BillDetail1Component_ng_container_45_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](4, _c2, ctx_r196.checkPrinterKitchen.font_family, ctx_r196.checkPrinterKitchen.font_size));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, ctx_r196.printKitchen.title), " ");
  }
}

function BillDetail1Component_ng_container_45_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "b", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](6, _c2, ctx_r197.checkPrinterKitchen.font_family, ctx_r197.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 4, "Table"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](9, _c2, ctx_r197.checkPrinterKitchen.font_family, ctx_r197.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r197.tableInfo.length > 50 ? ctx_r197.tableInfo.substring(0, 49) + "..." : ctx_r197.tableInfo);
  }
}

function BillDetail1Component_ng_container_45_div_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" (", ctx_r202.getUnit(item_r201.units, item_r201.ratio), ") ");
  }
}

function BillDetail1Component_ng_container_45_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](2, _c2, ctx_r203.checkPrinterKitchen.font_family, ctx_r203.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r203.getSubCombo(item_r201.combos), " ");
  }
}

function BillDetail1Component_ng_container_45_div_12_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const sideDishes_r208 = ctx.$implicit;
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](4, _c2, ctx_r204.checkPrinterKitchen.font_family, ctx_r204.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", "+ " + sideDishes_r208.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](7, _c2, ctx_r204.checkPrinterKitchen.font_family, ctx_r204.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", sideDishes_r208.quantity, "");
  }
}

function BillDetail1Component_ng_container_45_div_12_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const properties_r209 = ctx.$implicit;
    const ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](2, _c2, ctx_r205.checkPrinterKitchen.font_family, ctx_r205.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", "+ " + properties_r209.name + " - " + properties_r209.selectedValue, " ");
  }
}

function BillDetail1Component_ng_container_45_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, BillDetail1Component_ng_container_45_div_12_span_4_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, BillDetail1Component_ng_container_45_div_12_div_7_Template, 4, 5, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, BillDetail1Component_ng_container_45_div_12_div_8_Template, 5, 10, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, BillDetail1Component_ng_container_45_div_12_div_9_Template, 3, 5, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r201 = ctx.$implicit;
    const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](11, _c2, ctx_r198.checkPrinterKitchen.font_family, ctx_r198.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r201.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r201.ptype === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](14, _c2, ctx_r198.checkPrinterKitchen.font_family, ctx_r198.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r201.quantity, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r201.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", item_r201.toppings ? item_r201.toppings : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](17, _c0))("ngForTrackBy", ctx_r198.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", item_r201.properties ? item_r201.properties : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](18, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](19, _c2, ctx_r198.checkPrinterKitchen.font_family, ctx_r198.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](item_r201.note);
  }
}

function BillDetail1Component_ng_container_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_ng_container_45_div_1_Template, 6, 2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BillDetail1Component_ng_container_45_div_3_Template, 3, 7, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, BillDetail1Component_ng_container_45_div_4_Template, 7, 12, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, BillDetail1Component_ng_container_45_div_12_Template, 12, 22, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r12.platform.is("electron"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r12.checkPrinterKitchen.header_hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r12.checkPrinterKitchen.table_name_hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](12, _c2, ctx_r12.checkPrinterKitchen.font_family, ctx_r12.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 8, "Dishes name"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](15, _c2, ctx_r12.checkPrinterKitchen.font_family, ctx_r12.checkPrinterKitchen.font_size * 0.625));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 10, "Quantity"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r12.printKitchen.value);
  }
}

function BillDetail1Component_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_ng_template_46_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r211);
      const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r210.handlePrint(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "Print"));
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r216.getSubCombo(ctx_r216.choiceFood.combos), " ");
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "Properties"), " ");
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_17_nz_collapse_panel_4_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const value_r225 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", value_r225);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](value_r225);
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_17_nz_collapse_panel_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "nz-collapse-panel", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "nz-radio-group", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_17_nz_collapse_panel_4_Template_nz_radio_group_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r227);
      const properties_r222 = restoredCtx.$implicit;
      return properties_r222.selectedValue = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_17_nz_collapse_panel_4_label_2_Template, 2, 2, "label", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const properties_r222 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzHeader", properties_r222.name)("nzActive", properties_r222.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", properties_r222.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", properties_r222.value);
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_17_div_1_Template, 3, 3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "nz-collapse", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_17_nz_collapse_panel_4_Template, 3, 4, "nz-collapse-panel", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r217.choiceFood.properties.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r217.choiceFood.properties);
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "Side dishes"), " ");
  }
}

const _c3 = function (a0, a1) {
  return {
    "btn-activate": a0,
    "btn-disabled": a1
  };
};

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_18_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_18_div_3_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r232);
      const item_r230 = restoredCtx.$implicit;
      return item_r230.quantity = item_r230.quantity - 1;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "nz-input-number", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_18_div_3_Template_nz_input_number_ngModelChange_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r232);
      const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
      return ctx_r233.updatePrice(ctx_r233.choiceFood);
    })("ngModelChange", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_18_div_3_Template_nz_input_number_ngModelChange_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r232);
      const item_r230 = restoredCtx.$implicit;
      return item_r230.quantity = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_18_div_3_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r232);
      const item_r230 = restoredCtx.$implicit;
      return item_r230.quantity = item_r230.quantity + 1;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r230 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 9, item_r230.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", item_r230.quantity <= 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](11, _c3, item_r230.quantity > 0, item_r230.quantity <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0)("nzStep", 1)("ngModel", item_r230.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", item_r230.quantity > 9999999998)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](14, _c3, item_r230.quantity <= 9999999998, item_r230.quantity > 9999999998));
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_18_div_1_Template, 3, 3, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_18_div_3_Template, 13, 17, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r218.choiceFood.toppings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r218.choiceFood.toppings);
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_ng_container_19_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const lot_r239 = ctx.$implicit;
    const combo_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", lot_r239._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", lot_r239.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](8, 6, lot_r239.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](11, 9, lot_r239.date_exp, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](14, 12, "Stock"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](17, 14, lot_r239.quantity_branch[ctx_r238.id_branch] / combo_r236.ratio, "1.0-2"));
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_ng_container_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r243 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "nz-radio-group", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_ng_container_19_div_1_Template_nz_radio_group_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r243);
      const combo_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      return combo_r236.id_lotproduct = $event;
    })("ngModelChange", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_ng_container_19_div_1_Template_nz_radio_group_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r243);
      const combo_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r244.changeLot($event, combo_r236);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_ng_container_19_div_1_div_8_Template, 18, 17, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const combo_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 5, "Select lot and expiry date for combo components"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", combo_r236.name, " (", ctx_r237.getUnit(combo_r236.units, combo_r236.ratio), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", combo_r236.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", combo_r236.lots);
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_ng_container_19_div_1_Template, 9, 7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const combo_r236 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", combo_r236.lots);
  }
}

const _c4 = function () {
  return {
    standalone: true
  };
};

function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("blur", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_Template_input_blur_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r248);
      const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r247.updatePrice(ctx_r247.choiceFood);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r248);
      const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r249.choiceFood.quantity = ctx_r249.choiceFood.quantity - 1;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "nz-input-number", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_Template_nz_input_number_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r248);
      const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r250.choiceFood.quantity = $event;
    })("ngModelChange", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_Template_nz_input_number_ngModelChange_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r248);
      const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r251.updatePrice(ctx_r251.choiceFood);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r248);
      const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r252.choiceFood.quantity = ctx_r252.choiceFood.quantity + 1;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_13_Template, 2, 1, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r248);
      const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r253.choiceFood.note = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_17_Template, 5, 2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_div_18_Template, 4, 2, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_ng_container_19_Template, 2, 1, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r213.vhAuth.checkLocalMyPermissionName("sales_enable_update_price_bill_detail"))("value", ctx_r213.vhAlgorithm.vhcurrencyunit(ctx_r213.choiceFood.price))("ngClass", "price-" + ctx_r213.choiceFood.id_product)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 20, "Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r213.choiceFood.quantity <= 1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](24, _c3, ctx_r213.choiceFood.quantity > 0, ctx_r213.choiceFood.quantity <= 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", ctx_r213.choiceFood.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", ctx_r213.choiceFood.quantity > 9999999998)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction2"](27, _c3, ctx_r213.choiceFood.quantity <= 9999999998, ctx_r213.choiceFood.quantity > 9999999998));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r213.vhAlgorithm.vhcurrencyunit(ctx_r213.choiceFood.price * ctx_r213.choiceFood.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r213.choiceFood.combos);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r213.choiceFood.note)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](30, _c4))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 22, "Enter note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r213.choiceFood.properties);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r213.choiceFood.toppings);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r213.choiceFood.combos);
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "small", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate4"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 13, "First time block"), " - ", ctx_r254.choiceFood.units[0].first_time.time_block, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 15, ctx_r254.choiceFood.units[0].first_time.unit), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 17, "first"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate6"]("*", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 19, "Time less than"), " ", ctx_r254.choiceFood.units[0].first_time.time_block, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 21, ctx_r254.choiceFood.units[0].first_time.unit), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 23, "will be rounded up to"), " ", ctx_r254.choiceFood.units[0].first_time.time_block, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 25, ctx_r254.choiceFood.units[0].first_time.unit), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](15, 27, ctx_r254.choiceFood.time_start_order, "HH:mm:ss dd/MM/yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](16, 30, ctx_r254.choiceFood == null ? null : ctx_r254.choiceFood.serviceTimePrice == null ? null : ctx_r254.choiceFood.serviceTimePrice.first_time == null ? null : ctx_r254.choiceFood.serviceTimePrice.first_time.time_end_order, "HH:mm:ss dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r254.vhAlgorithm.vhcurrencyunit(ctx_r254.choiceFood == null ? null : ctx_r254.choiceFood.serviceTimePrice == null ? null : ctx_r254.choiceFood.serviceTimePrice.first_time == null ? null : ctx_r254.choiceFood.serviceTimePrice.first_time.price));
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "p", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const specialTime_r259 = ctx.$implicit;
    const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate6"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 7, specialTime_r259.from_time, "HH:mm:ss"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](4, 10, specialTime_r259.to_time, "HH:mm dd/MM/yyyy"), " = ", ctx_r258.productService.generateTimeFromValue(specialTime_r259.duration, ctx_r258.choiceFood.units[0].unit), " (", ctx_r258.vhAlgorithm.vhcurrencyunit_symbol(specialTime_r259.price), " / ", ctx_r258.choiceFood.units[0].time_block, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 13, ctx_r258.choiceFood.units[0].unit), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r258.vhAlgorithm.vhcurrencyunit(specialTime_r259.total_price));
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_div_9_div_4_Template, 8, 15, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r255 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "Special time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r255.choiceFood == null ? null : ctx_r255.choiceFood.serviceTimePrice == null ? null : ctx_r255.choiceFood.serviceTimePrice.special_times);
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 8, "Merge block"), " - ", ctx_r256.vhAlgorithm.vhcurrencyunit_symbol(ctx_r256.choiceFood == null ? null : ctx_r256.choiceFood.serviceTimePrice == null ? null : ctx_r256.choiceFood.serviceTimePrice.merge_block == null ? null : ctx_r256.choiceFood.serviceTimePrice.merge_block.price), " / 1 block");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate5"]("", ctx_r256.choiceFood == null ? null : ctx_r256.choiceFood.serviceTimePrice == null ? null : ctx_r256.choiceFood.serviceTimePrice.merge_block == null ? null : ctx_r256.choiceFood.serviceTimePrice.merge_block.count, " block = ", ctx_r256.choiceFood == null ? null : ctx_r256.choiceFood.serviceTimePrice == null ? null : ctx_r256.choiceFood.serviceTimePrice.merge_block == null ? null : ctx_r256.choiceFood.serviceTimePrice.merge_block.duration, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 10, ctx_r256.choiceFood.units[0].unit), " (1 block = ", ctx_r256.choiceFood == null ? null : ctx_r256.choiceFood.serviceTimePrice == null ? null : ctx_r256.choiceFood.serviceTimePrice.merge_block == null ? null : ctx_r256.choiceFood.serviceTimePrice.merge_block.time_per_block, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 12, ctx_r256.choiceFood.units[0].unit), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r256.vhAlgorithm.vhcurrencyunit(ctx_r256.choiceFood == null ? null : ctx_r256.choiceFood.serviceTimePrice == null ? null : ctx_r256.choiceFood.serviceTimePrice.merge_block == null ? null : ctx_r256.choiceFood.serviceTimePrice.merge_block.total_price));
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "small", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "p", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate4"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 12, "Regular selling time"), " - ", ctx_r257.vhAlgorithm.vhcurrencyunit_symbol(ctx_r257.choiceFood.units[0].price), " / ", ctx_r257.choiceFood.units[0].time_block, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 14, ctx_r257.choiceFood.units[0].unit), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate6"]("*", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](8, 16, "Time less than"), " ", ctx_r257.choiceFood.units[0].time_block, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](9, 18, ctx_r257.choiceFood.units[0].unit), " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 20, "will be rounded up to"), " ", ctx_r257.choiceFood.units[0].time_block, " ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](11, 22, ctx_r257.choiceFood.units[0].unit), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r257.productService.generateTimeFromValue(ctx_r257.choiceFood == null ? null : ctx_r257.choiceFood.serviceTimePrice == null ? null : ctx_r257.choiceFood.serviceTimePrice.time_used, ctx_r257.choiceFood == null ? null : ctx_r257.choiceFood.serviceTimePrice == null ? null : ctx_r257.choiceFood.serviceTimePrice.unit));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r257.vhAlgorithm.vhcurrencyunit(ctx_r257.choiceFood == null ? null : ctx_r257.choiceFood.serviceTimePrice == null ? null : ctx_r257.choiceFood.serviceTimePrice.price));
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_div_8_Template, 20, 33, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_div_9_Template, 5, 4, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_div_10_Template, 12, 14, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_div_11_Template, 17, 24, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](23, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "b", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](29, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_Template_i_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r261);
      const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r260.pauseTime(!(ctx_r260.choiceFood == null ? null : ctx_r260.choiceFood.is_paused));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "hr", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_Template_i_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r261);
      const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r262.handleOpenEditUsedTime();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r261);
      const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r263.choiceFood.note = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 18, "Used time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 20, "Drafted"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r215.choiceFood.units[0].is_first_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r215.choiceFood.units[0].is_special_times && (ctx_r215.choiceFood == null ? null : ctx_r215.choiceFood.serviceTimePrice == null ? null : ctx_r215.choiceFood.serviceTimePrice.special_times == null ? null : ctx_r215.choiceFood.serviceTimePrice.special_times.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r215.choiceFood.units[0].is_merge_block);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r215.choiceFood == null ? null : ctx_r215.choiceFood.serviceTimePrice == null ? null : ctx_r215.choiceFood.serviceTimePrice.time_used);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](15, 22, "From"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](18, 24, ctx_r215.choiceFood.time_start_order, "HH:mm:ss dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](20, 27, "to"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](23, 29, ctx_r215.choiceFood == null ? null : ctx_r215.choiceFood.time_end_order, "HH:mm:ss dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(", ctx_r215.productService.generateTimeUseString(ctx_r215.choiceFood.time_start_order, ctx_r215.choiceFood == null ? null : ctx_r215.choiceFood.time_end_order), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](29, 32, "Total"), ": ", ctx_r215.vhAlgorithm.vhcurrencyunit_symbol(ctx_r215.choiceFood == null ? null : ctx_r215.choiceFood.serviceTimePrice == null ? null : ctx_r215.choiceFood.serviceTimePrice.total_price), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](33, 34, (ctx_r215.choiceFood == null ? null : ctx_r215.choiceFood.is_paused) ? "Continue timing" : "Pause timing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](37, 36, "Edit usage time"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](41, 38, "Note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r215.choiceFood.note)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](43, 40, "Enter note"));
  }
}

function BillDetail1Component_nz_modal_48_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, BillDetail1Component_nz_modal_48_ng_container_1_ng_container_2_Template, 20, 31, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BillDetail1Component_nz_modal_48_ng_container_1_ng_template_3_Template, 44, 42, "ng-template", null, 102, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);

    const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r212.choiceFood.ptype !== ctx_r212.VhType.SERVICETIME)("ngIfElse", _r214);
  }
}

function BillDetail1Component_nz_modal_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "nz-modal", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzOnCancel", function BillDetail1Component_nz_modal_48_Template_nz_modal_nzOnCancel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r265);
      const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r264.saveEdit();
    })("nzVisibleChange", function BillDetail1Component_nz_modal_48_Template_nz_modal_nzVisibleChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r265);
      const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r266.showDrawerEdit = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, BillDetail1Component_nz_modal_48_ng_container_1_Template, 5, 2, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzVisible", ctx_r15.showDrawerEdit)("nzTitle", ctx_r15.choiceFood.name)("nzFooter", null);
  }
}

function BillDetail1Component_ng_container_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r268 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "p", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "nz-date-picker", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BillDetail1Component_ng_container_51_Template_nz_date_picker_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r268);
      const ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r267.tempStartTime = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "p", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "nz-date-picker", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BillDetail1Component_ng_container_51_Template_nz_date_picker_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r268);
      const ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r269.tempEndTime = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "p", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "p", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "p", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzGutter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 9, "_Started at"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r16.tempStartTime)("nzAllowClear", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 11, "Ended at"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r16.tempEndTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("*", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 13, "_Note"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](21, 15, "The start time must be less than or equal to the current time."));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](24, 17, "The end time must be greater than the start time."));
  }
}

function BillDetail1Component_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_ng_template_52_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r271);
      const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r270.isShowModalEditUsedTime = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_ng_template_52_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r271);
      const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r272.handleUpdateUsedTime();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r18.tempStartTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "Ok"));
  }
}

function BillDetail1Component_ng_container_56_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "i", 170);
  }
}

function BillDetail1Component_ng_container_56_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "label", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "span", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r278 = ctx.$implicit;
    const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzValue", item_r278._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r278.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](8, 6, item_r278.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](11, 9, item_r278.date_exp, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](14, 12, "Stock"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](17, 14, item_r278.quantity_branch[ctx_r276.id_branch] / ctx_r276.choiceFood.ratio, "1.0-2"));
  }
}

function BillDetail1Component_ng_container_56_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "No data"));
  }
}

function BillDetail1Component_ng_container_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r280 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "nz-input-group", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "input", 166, 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keyup", function BillDetail1Component_ng_container_56_Template_input_keyup_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r280);

      const _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](4);

      const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r279.searchLot(_r273.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, BillDetail1Component_ng_container_56_ng_template_6_Template, 1, 0, "ng-template", null, 168, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "nz-radio-group", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BillDetail1Component_ng_container_56_Template_nz_radio_group_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r280);
      const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r281.choiceFood.id_lotproduct = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, BillDetail1Component_ng_container_56_div_9_Template, 18, 17, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, BillDetail1Component_ng_container_56_div_10_Template, 3, 3, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r274 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](7);

    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzSuffix", _r274);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "Find lot number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r19.choiceFood.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r19.choiceFood.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r19.choiceFood.lots.length);
  }
}

function BillDetail1Component_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r283 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_ng_template_57_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r283);
      const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r282.handleCancelChooseLot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_ng_template_57_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r283);
      const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r284.handleChooseLot();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 3, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r21.choiceFood.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 5, "Ok"));
  }
}

const _c5 = function (a0) {
  return {
    "layout-1": a0
  };
};

class BillDetail1Component {
  constructor(vhAlgorithm, vhQueryCafe, vhAuth, lang, vhComponent, platform, nzModalService, productService) {
    this.vhAlgorithm = vhAlgorithm;
    this.vhQueryCafe = vhQueryCafe;
    this.vhAuth = vhAuth;
    this.lang = lang;
    this.vhComponent = vhComponent;
    this.platform = platform;
    this.nzModalService = nzModalService;
    this.productService = productService;
    this.goBack = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.statusInvoice = {}; // cập nhật lại bill khi có thay đổi

    this.updateInvoice = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.deletePromotion = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.showProductGift = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.showProductGiftType7 = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.showModalChangePriceType = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.checkPromotion = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.showDrawerProductList = false;
    this.showDrawerServiceList = false;
    this.showDrawerSideDishesList = false;
    this.showDrawerCombosList = false;
    this.showDrawerEdit = false;
    this.showPrintKitchenAgain = false;
    this.display_promotion_selling_price = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').display_promotion_selling_price;
    this.printKitchen = {
      status: false,
      title: 'Add dishes',
      value: []
    };
    this.wishList = this.vhAuth.localStorageGET("show_best_selling");
    this.show_modal_select_lots = false;
    this.list_search_lot = [];
    this.warning_lot_expried = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').warning_lot_expried;
    this.dispatchers_enable = this.vhQueryCafe.getLocalAppSettingNameBranch("dispatchers_enable").dispatchers_enable;
    this.open_dialog_print_kitchen_bill_detail = this.vhQueryCafe.getLocalAppSettingNameBranch("dispatchers_enable").open_dialog_print_kitchen_bill_detail;
    this.id_branch = this.vhQueryCafe.getDefaultBranch()._id;
    this.show_modal_dispatcher = false;
    this.dispatcherzones = this.vhQueryCafe.getlocalDispatcherZones();
    this.id_dispatcherzone = this.vhQueryCafe.getlocalDispatcherZones().length ? this.vhQueryCafe.getlocalDispatcherZones().find(e => e.default)._id : '';
    this.printer_kitchens = this.vhQueryCafe.getlocalPrinters();
    this.id_printer_kitchen = this.vhQueryCafe.getlocalPrinters().length ? this.vhQueryCafe.getlocalPrinters().find(e => e.default)._id : '';
    this.management_product_price2 = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').management_product_price2;
    this.editPrice = {};
    /* -------------------------------------------------- MODAL CHỈNH SỬA THỜI GIAN SỬ DỤNG ------------------------------------------------- */

    this.VhType = src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_2__.VhType;
    /** Có hiện modal Chỉnh sửa thời gian sử dụng hay không */

    this.isShowModalEditUsedTime = false;
    /** Thời gian mở bill, dùng để tính thời gian cho Dịch vụ thời gian */

    this.endTime = new Date();
  }

  keyEvent(event) {
    if (["F3", "F4", "F5", "F6"].includes(event.key)) {
      this.closeSearchProduct(false);
      this.closeSearchService(false);
      this.closeSearchSideDishes(false);
      this.closeSearchCombos(false);

      switch (event.key) {
        case "F3":
          this.openSearchService();
          break;

        case "F4":
          this.openSearchProduct();
          break;

        case "F5":
          this.openSearchSideDishes();
          break;

        case "F6":
          this.openSearchCombos();
          break;
      }

      event.preventDefault();
      event.stopPropagation();
    }
  }

  ngOnInit() {
    console.log('default_price_type', this.default_price_type);
  }

  ngOnChanges({
    printAllLabelEvent,
    printKitchenAll,
    invoices
  }) {
    var _a; // Nếu thay đổi invoices thì tính lại giá cho các dịch vụ thời gian và total cho bill


    if (invoices && invoices.currentValue) {
      if (this.invoices.getInvoiceDetail().length && this.productService.isContainServiceTime(this.invoices)) {
        this.endTime = new Date(); // set lại price

        (_a = this.invoices.getInvoiceDetail()) === null || _a === void 0 ? void 0 : _a.forEach((item, index) => {
          if (item.ptype === src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_2__.VhType.SERVICETIME && !item.is_paused) {
            const newItem = Object.assign(Object.assign({}, item), {
              time_end_order: this.endTime
            });
            const serviceTimePrice = this.productService.calculateServiceTimePrice(newItem, this.endTime, this.invoices.getPriceType());
            newItem.price = serviceTimePrice.total_price;
            newItem.price_origin = serviceTimePrice.total_price;
            this.invoices.getInvoiceDetail()[index] = Object.assign({}, newItem);
          }
        }); // Tính lại total cho bill

        this.invoices.setSubTotal();
      }
    }

    if (printAllLabelEvent && printAllLabelEvent.currentValue == true) this.printAllLabel();

    if (printKitchenAll && printKitchenAll.currentValue) {
      this.printAllDishToKitchen();
    }
  }

  printAllDishToKitchen() {
    if (this.checkPrinterKitchen.enable) {
      for (let detail of this.invoices.getInvoiceDetail()) {
        let dataKitchen = {
          name: detail.name,
          quantity: +detail.quantity,
          note: detail.note,
          max_quantity: +detail.quantity,
          ptype: detail.ptype,
          ratio: detail.ratio,
          units: detail.units
        };
        if (detail.properties) dataKitchen['properties'] = detail.properties;
        if (detail.toppings) dataKitchen['toppings'] = detail.toppings.map(item => {
          return Object.assign(Object.assign({}, item), {
            max_quantity: item.quantity
          });
        });
        if (detail.combos) dataKitchen['combos'] = detail.combos;
        this.printKitchen['value'].push(dataKitchen);
      }

      this.printKitchen = Object.assign(Object.assign({}, this.printKitchen), {
        title: 'Add dishes'
      });
      this.showPrintKitchenAgain = true;
    }
  }

  printLabel(item, i) {
    if (item.ptype == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_2__.VhType.SERVICETIME && !item.is_paused) {
      this.productService.updateServiceTimePrice(item, this.invoices.getPriceType());
      this.invoices.getInvoiceDetail()[i] = item;
      this.invoices.setSubTotal();
    } // lọc bỏ topping số lượng = 0


    const data = JSON.parse(JSON.stringify(item || {}));

    if (item.toppings && item.toppings.length > 0) {
      data.toppings = item.toppings.filter(topping => topping.quantity > 0);
    }

    this.list_selected_dishs = [Object.assign(Object.assign({}, data), {
      index: i
    })];
  }

  printAllLabel() {
    let arr = [];
    this.invoices.getInvoiceDetail().forEach((element, index) => {
      if ([1, 4, 5].includes(element.ptype)) arr.push(Object.assign(Object.assign({}, element), {
        index: index
      }));
    });
    this.list_selected_dishs = arr;
  }

  myTrackByFunction(element, index) {
    return element._id ? element._id : index;
  }

  myTrackByNameFunction(element, index) {
    return element.name ? element.name : index;
  }

  openSearchProduct() {
    this.showDrawerProductList = true;
  }

  closeSearchProduct(ev) {
    if (ev) this.createBillDetail(ev);else this.showDrawerProductList = false;
  }

  openSearchService() {
    this.showDrawerServiceList = true;
  }

  closeSearchService(ev) {
    if (ev) this.createBillDetail(ev);else this.showDrawerServiceList = false;
  }

  openSearchSideDishes() {
    this.showDrawerSideDishesList = true;
  }

  closeSearchSideDishes(ev) {
    if (ev) this.createBillDetail(ev);else this.showDrawerSideDishesList = false;
  }

  openSearchCombos() {
    this.showDrawerCombosList = true;
  }

  closeSearchCombos(ev) {
    if (ev) this.createBillDetail(ev);else this.showDrawerCombosList = false;
  }
  /** Tạo bill detail lên database
   * @param productValue thông tin sản phẩm
  */


  createBillDetail(productValue) {
    var _this = this;

    return (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (productValue.quantity) {
        // nếu SL sản phẩm > 0
        let name = `${productValue.name}`; //tạo detail lưu local

        let detail = _this.invoices.getCreateItemDetail(productValue);

        detail['name'] = name; // thêm bill detail đó vào danh sách bill detail

        _this.invoices.addInvoiceDetail(Object.assign(Object.assign({}, productValue), {
          id_product: productValue._id,
          time_start_order: new Date()
        }));

        let bill_detail = _this.invoices.getCreateItemCleanDetail(detail); // dữ liệu detail sạch phù hợp với database


        if (bill_detail.ptype == 5) {
          _this.vhQueryCafe.createBill_Detail_ptype_5(bill_detail).then(vhbill_detail => {
            _this.invoices.getInvoiceDetail()[0]._id = vhbill_detail._id;
            _this.choiceFood = _this.invoices.getInvoiceDetail()[0];

            _this.updateInvoice.emit(true);

            _this.printKitchenOrDispatcher(detail);
          }, error => {
            console.log('error', error);
          });
        } else {
          console.log('createBill_Detail', bill_detail);

          _this.vhQueryCafe.createBill_Detail(bill_detail).then(vhbill_detail => {
            console.log('vhbill_detail', vhbill_detail);
            _this.invoices.getInvoiceDetail()[0]._id = vhbill_detail._id;
            _this.choiceFood = _this.invoices.getInvoiceDetail()[0];

            _this.updateInvoice.emit(true);

            _this.printKitchenOrDispatcher(detail);
          }, error => {
            console.log('error', error);
          });
        }
      }
    })();
  }

  printKitchenOrDispatcher(bill_detail) {
    // Bật in bếp
    if (this.checkPrinterKitchen.enable && !this.dispatchers_enable && this.open_dialog_print_kitchen_bill_detail) {
      let dataKitchen = {
        name: bill_detail.name,
        quantity: +bill_detail.quantity,
        note: bill_detail.note,
        ptype: bill_detail.ptype,
        ratio: bill_detail.ratio,
        units: bill_detail.units
      };
      if (bill_detail.properties) dataKitchen['properties'] = bill_detail.properties;
      if (bill_detail.toppings) dataKitchen['toppings'] = bill_detail.toppings;
      if (bill_detail.combos) dataKitchen['combos'] = bill_detail.combos;
      this.printKitchen['value'].push(dataKitchen);
      this.printKitchen = Object.assign(Object.assign({}, this.printKitchen), {
        title: 'Add dishes',
        status: true
      });
    } // nếu chọn là điều phối bằng giao diện


    if (this.dispatchers_enable) {
      // show modal chọn giao diện để điều phối
      this.show_modal_dispatcher = true;
    }
  }

  changeLot(e, item) {
    item.lot_number = item.lots.find(find => find._id == e).lot_number;
  }
  /**xử lý điều phối */


  handleDispatcher() {
    this.choiceFood.id_dispatcherzone = this.id_dispatcherzone;
    this.choiceFood.dispatcher_done = false;
    this.vhQueryCafe.updateBill_Detail(this.choiceFood._id, {
      id_dispatcherzone: this.id_dispatcherzone,
      dispatcher_done: false
    });
    this.show_modal_dispatcher = false;
  }

  openPrintKitchen(detail, i) {
    // Bật in bếp
    if (this.checkPrinterKitchen.enable) {
      if (detail.ptype == src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_2__.VhType.SERVICETIME && !detail.is_paused) {
        this.productService.updateServiceTimePrice(detail, this.invoices.getPriceType());
        this.invoices.getInvoiceDetail()[i] = detail;
        this.invoices.setSubTotal();
      }

      let dataKitchen = {
        name: detail.name,
        quantity: +detail.quantity,
        note: detail.note,
        max_quantity: +detail.quantity,
        ptype: detail.ptype,
        ratio: detail.ratio,
        units: detail.units
      };
      if (detail.properties) dataKitchen['properties'] = detail.properties;
      if (detail.toppings) dataKitchen['toppings'] = detail.toppings.map(item => {
        return Object.assign(Object.assign({}, item), {
          max_quantity: item.quantity
        });
      });
      if (detail.combos) dataKitchen['combos'] = detail.combos;
      this.printKitchen['value'].push(dataKitchen);
      this.printKitchen = Object.assign(Object.assign({}, this.printKitchen), {
        title: this.lang.translate('Print kitchen')
      });
    }
  }
  /**In bếp */


  handlePrint(value) {
    if (this.platform.is("electron")) this.printElectron(value);else this.printDesktop(value);
  }

  handleCancelPrint(value) {
    this.printKitchen['value'] = [];
    if (value) this.showPrintKitchenAgain = false;else this.printKitchen['status'] = false;
  }

  printElectron(value) {
    let html = value ? document.getElementById("print-kitchen-again").innerHTML : document.getElementById("print-kitchen").innerHTML;
    electron.ipcRenderer.send("print-start", {
      html: html,
      deviceName: this.printer_kitchens.find(e => e._id == this.id_printer_kitchen).printer_name
    });
    electron.ipcRenderer.on("print-done", (event, data) => {
      if (data) this.handleCancelPrint(value);else this.vhComponent.alertMessageDesktop('warning', this.lang.translate('Printing failed'), 3000);
    });
  }
  /**In bằng desktop */


  printDesktop(value) {
    print_js__WEBPACK_IMPORTED_MODULE_1___default()({
      printable: value ? "print-kitchen-again" : "print-kitchen",
      type: "html",
      scanStyles: false,
      style: 'html { font-size: 14pt;}' + '.print-kitchen .font-bold {font-size:1.8rem; font-weight:bold}' + '.print-kitchen b {font-size: 14pt}' + '.print-kitchen .print-kitchen-font{font-size: 14pt}' + '.print-kitchen .print-kitchen-value { display:flex; justity-content:center: align-items:center}' + '.print-kitchen .print-kitchen-value-name { width : 70% ; font-size: 14pt}' + '.print-kitchen .print-kitchen-value-quantity { width : 30% ; font-size: 14pt ; text-align:center}' + '.print-kitchen .print-kitchen-value-name-note {font-style: italic; font-size: 10pt}' + '.print-kitchen .print-kitchen-combo { display:flex; justity-content:center: align-items:center}' + '.print-kitchen .print-kitchen-combo-name { width : 70% ; font-size: 12pt}' + '.print-kitchen .print-kitchen-properties { display:flex; justity-content:center: align-items:center}' + '.print-kitchen .print-kitchen-properties-name { width : 70% ; font-size: 12pt}' + '.print-kitchen .print-kitchen-properties-quantity { width : 30% ; font-size: 12pt ; text-align:center}' + '.print-kitchen .print-kitchen-topping { display:flex; justity-content:center: align-items:center}' + '.print-kitchen .print-kitchen-topping-name { width : 70% ; font-size: 12pt}' + '.print-kitchen .print-kitchen-topping-quantity { width : 30% ; font-size: 12pt ; text-align:center}'
    });
  }

  changeQuantityPrintKitchen(value, max, current_value) {
    if (parseFloat(value) < 0.01) current_value.quantity = 0.01;
    if (parseFloat(value) > max) current_value.quantity = max;
  }
  /**Cập nhật ghi chú món
   * @param item: thông tin bill detail cần cập nhật
  */


  updateNote(item) {
    this.vhQueryCafe.updateBill_Detail(item._id, {
      note: item.note
    });
  }
  /**Cập nhật thông tin món ăn */


  saveEdit() {
    if (this.choiceFood.ptype === src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_2__.VhType.SERVICETIME) {
      if (!this.choiceFood.is_paused) {
        this.choiceFood.time_end_order = new Date();
      }

      const serviceTimePrice = this.productService.calculateServiceTimePrice(this.choiceFood, this.endTime, this.invoices.getPriceType());
      this.choiceFood.price = serviceTimePrice.total_price;
      this.choiceFood.price_origin = serviceTimePrice.total_price;
      delete this.choiceFood.serviceTimePrice;
    }

    this.choiceFood.price = parseFloat(this.choiceFood.price);
    this.showDrawerEdit = false;
    let index = this.invoices.getInvoiceDetail().findIndex(item => item._id == this.choiceFood._id);
    this.invoices.getInvoiceDetail()[index] = Object.assign({}, this.choiceFood);
    this.invoices.setSubTotal(); // console.log(this.invoices.getCreateItemCleanDetail(this.choiceFood));

    if (this.choiceFood.ptype == 5) {
      this.vhQueryCafe.updateBill_Detail_btype_5(this.choiceFood._id, {
        quantity: this.choiceFood.quantity,
        price: this.choiceFood.price,
        ratio: this.choiceFood.ratio
      }).then(bool => {
        console.log('updateBill_Detail_btype_5', bool);
      }, error => {
        console.log('error', error);
      });
    } else {
      this.vhQueryCafe.updateBill_Detail(this.choiceFood._id, {
        quantity: this.choiceFood.quantity,
        price: this.choiceFood.price,
        ratio: this.choiceFood.ratio
      }).then(res => {
        this.updateInvoice.emit(true);
        delete this.choiceFood;
      });
    }
  }
  /** Chỉnh sửa sản phẩm
   * @param item thông tin sản phẩm đang được xử lý
   */


  editFood(item) {
    this.choiceFood = item;
    this.showDrawerEdit = true; // Nếu không phải Dịch vụ thời gian

    if (this.choiceFood.ptype !== src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_2__.VhType.SERVICETIME) {
      // backup
      // cleavejs cho các input
      setTimeout(() => {
        this.editPrice['price-' + item.id_product] = this.vhAlgorithm.vhnumeral(".price-" + item.id_product); // if (this.choiceFood.toppings) {
        //   this.choiceFood.toppings.forEach(topping => {
        //     this.editPrice['topping-' + topping.id_product] = this.vhAlgorithm.vhnumeral(".topping-" + topping.id_product)
        //   });
        // }
      }, 200);
      return;
    } // Nếu là Dịch vụ thời gian


    this.productService.updateServiceTimePrice(this.choiceFood, this.invoices.getPriceType());

    if (!this.choiceFood.is_paused) {
      this.invoices.setSubTotal();
    }

    console.log('editFood this.choiceFood', this.choiceFood);
  }
  /**Thêm cleavejs chỉnh sửa giá sản phẩm
   * @param item thông tin sản phẩm đang xử lý
  */


  updatePrice(item) {
    if (item.ptype) {
      let price = this.editPrice['price-' + item.id_product].getRawValue();
      console.log(this.choiceFood.quantity);
      this.choiceFood.price = price ? parseFloat(price) : 0;
      this.choiceFood.quantity = this.choiceFood.quantity > 0 ? this.choiceFood.quantity : 1;
    } else {
      let price = this.editPrice['topping-' + item.id_product].getRawValue();
      let index = this.choiceFood.toppings.findIndex(element => element.id_product == item.id_product);

      if (index != -1) {
        this.choiceFood.toppings[index].price = price ? parseFloat(price) : 0;
        this.choiceFood.toppings[index].quantity = this.choiceFood.toppings[index].quantity > 0 ? this.choiceFood.toppings[index].quantity : 1;
      }
    }

    console.log(this.choiceFood);
  }
  /**Xóa món ăn
   * @param food: thông tin sản phẩm đang xử lý
  */


  removeFood(food) {
    if (this.vhAuth.checkLocalMyPermissionName('sell_enable_cancel_bill_detail')) {
      food.deleting = true; // thêm hủy món vô in bếp

      if (this.checkPrinterKitchen.enable && !this.dispatchers_enable && this.open_dialog_print_kitchen_bill_detail) {
        let dataKitchen = {
          name: food.name,
          quantity: food.quantity,
          note: food.note
        };
        if (food.properties) dataKitchen['properties'] = food.properties;
        if (food.toppings) dataKitchen['toppings'] = food.toppings;
        if (food.combos) dataKitchen['combos'] = food.subComboName;
        this.printKitchen['value'].push(dataKitchen);
        this.printKitchen = Object.assign(Object.assign({}, this.printKitchen), {
          title: 'Cancel dishes',
          status: true
        });
      }

      if (food.ptype == 5) {
        this.vhQueryCafe.deleteBill_Detail_ptype_5(food._id).then(value => {
          this.invoices.removeInvoiceDetail(food._id);
          this.updateInvoice.emit(true);
          console.log('deleteBill_Detail_ptype_5', value);
        });
      } else {
        this.vhQueryCafe.deleteBill_Detail(food._id).then(value => {
          this.invoices.removeInvoiceDetail(food._id);
          this.updateInvoice.emit(true);
        });
      }
    } else this.vhComponent.showToast(3000, this.lang.translate("You do not have this rights"), "alert-toast");
  }

  getSubCombo(arr) {
    let subName = "";
    arr.forEach(item => {
      if (subName.length) subName += `, ${item.quantity}x ${item.name}${'(' + this.getUnit(item.units, item.ratio) + ')'}`;else subName += `${item.quantity}x ${item.name}${'(' + this.getUnit(item.units, item.ratio) + ')'}`;
    });
    return subName;
  }

  getUnit(units, ratio) {
    return this.vhQueryCafe.getUnit_byRatio(units, ratio).unit;
  }

  searchLot(value) {
    this.choiceFood.lots = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(value), this.list_search_lot, ['lot_number']);
  }

  getLotNumber(lots, _id) {
    let lot = lots.find(item => item._id == _id);
    return lot.lot_number;
  }

  openModalChooseLot(data) {
    this.choiceFood = data;
    this.list_search_lot = this.choiceFood.lots;
    if (!this.list_search_lot.length) this.vhComponent.alertMessageDesktop("error", this.lang.translate("Sản phẩm này không có lô khả dụng để bán!"));else this.show_modal_select_lots = true;
  }

  handleChooseLot() {
    if (this.warning_lot_expried) {
      let lot_select = this.list_search_lot.find(e => e._id == this.choiceFood.id_lotproduct);

      if (new Date().getTime() >= new Date(lot_select.date_exp).getTime()) {
        this.nzModalService.confirm({
          nzTitle: this.lang.translate("Lô này đã hết hạn! Tiếp tục bán sản phẩm này?"),
          nzOnOk: () => {
            this.show_modal_select_lots = false;
            this.choiceFood.lots = this.list_search_lot;
            this.vhQueryCafe.updateBill_Detail(this.choiceFood._id, {
              id_lotproduct: this.choiceFood.id_lotproduct
            });
          },
          nzOnCancel: () => {}
        });
      } else {
        this.show_modal_select_lots = false;
        this.choiceFood.lots = this.list_search_lot;
        this.vhQueryCafe.updateBill_Detail(this.choiceFood._id, {
          id_lotproduct: this.choiceFood.id_lotproduct
        });
      }
    } else {
      this.show_modal_select_lots = false;
      this.choiceFood.lots = this.list_search_lot;
      this.vhQueryCafe.updateBill_Detail(this.choiceFood._id, {
        id_lotproduct: this.choiceFood.id_lotproduct
      });
    }
  }

  handleCancelChooseLot() {
    this.show_modal_select_lots = false;
    this.choiceFood.lots = this.list_search_lot;
  }
  /**
   * Mở modal Chỉnh sửa thời gian sử dụng
   */


  handleOpenEditUsedTime() {
    this.tempStartTime = this.choiceFood.time_start_order;

    if (!(this.tempStartTime instanceof Date)) {
      this.tempStartTime = new Date(this.tempStartTime);
    }

    if (this.choiceFood.is_paused) {
      this.tempEndTime = this.choiceFood.time_end_order;

      if (!(this.tempEndTime instanceof Date)) {
        this.tempEndTime = new Date(this.tempEndTime);
      }
    } else {
      this.tempEndTime = null;
    }

    this.isShowModalEditUsedTime = true;
  }
  /**
   * Khi nhấn ok trong modal Chỉnh sửa thời gian sử dụng
   */


  handleUpdateUsedTime() {
    var _a; // validate start time<= now; end time > start time


    if (this.tempStartTime > new Date()) {
      this.vhComponent.alertMessageDesktop('error', this.lang.translate('The start time must be less than or equal to the current time.'));
      return;
    }

    if (this.tempEndTime && this.tempEndTime <= this.tempStartTime) {
      this.vhComponent.alertMessageDesktop('error', this.lang.translate('The end time must be greater than the start time.'));
      return;
    }

    this.isShowModalEditUsedTime = false;
    this.choiceFood.time_start_order = this.tempStartTime;
    const currentTime = new Date();

    if (!this.tempEndTime) {
      this.choiceFood.is_paused = false;
    } else {
      // mặt hàng tính giờ sẽ dừng tính giờ ngay tại thời điểm đó
      this.choiceFood.is_paused = true;
    }

    this.choiceFood.time_end_order = (_a = this.tempEndTime) !== null && _a !== void 0 ? _a : currentTime;
    this.vhQueryCafe.updateBill_Detail(this.choiceFood._id, {
      time_start_order: this.tempStartTime,
      time_end_order: this.tempEndTime ? this.choiceFood.time_end_order : null,
      is_paused: this.choiceFood.is_paused
    }); // Tính lại giá cho dịch vụ thời gian

    const serviceTimePrice = this.productService.calculateServiceTimePrice(this.choiceFood, this.endTime, this.invoices.getPriceType());
    this.choiceFood.serviceTimePrice = JSON.parse(JSON.stringify(serviceTimePrice));
    this.choiceFood.price = serviceTimePrice.total_price;
    this.choiceFood.price_origin = serviceTimePrice.total_price;
    this.invoices.setSubTotal();
  }
  /**
   * Tạm ngưng / Tiếp tục tính giờ
   *
   * @param isPause true: tạm ngưng; false: tiếp tục tính giờ
   */


  pauseTime(isPause) {
    this.choiceFood.time_end_order = new Date();
    this.choiceFood.is_paused = isPause;
    const serviceTimePrice = this.productService.calculateServiceTimePrice(this.choiceFood, this.endTime, this.invoices.getPriceType());
    this.choiceFood.serviceTimePrice = JSON.parse(JSON.stringify(serviceTimePrice));
    this.choiceFood.price = serviceTimePrice.total_price;
    this.choiceFood.price_origin = serviceTimePrice.total_price;
    this.invoices.setSubTotal();
    this.vhQueryCafe.updateBill_Detail(this.choiceFood._id, {
      time_end_order: isPause ? this.choiceFood.time_end_order : undefined,
      is_paused: isPause,
      price: this.choiceFood.price
    });
  }

}

BillDetail1Component.ɵfac = function BillDetail1Component_Factory(t) {
  return new (t || BillDetail1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_13__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_13__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_13__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_4__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_cafe_services_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService));
};

BillDetail1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: BillDetail1Component,
  selectors: [["app-bill-detail1"]],
  hostBindings: function BillDetail1Component_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("keydown", function BillDetail1Component_keydown_HostBindingHandler($event) {
        return ctx.keyEvent($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    statusInvoice: "statusInvoice",
    printKitchenAll: "printKitchenAll",
    stamp: "stamp",
    default_price_type: "default_price_type",
    printAllLabelEvent: "printAllLabelEvent",
    invoices: "invoices",
    checkPrinterKitchen: "checkPrinterKitchen",
    tableInfo: "tableInfo",
    printer: "printer"
  },
  outputs: {
    goBack: "goBack",
    updateInvoice: "updateInvoice",
    deletePromotion: "deletePromotion",
    showProductGift: "showProductGift",
    showProductGiftType7: "showProductGiftType7",
    showModalChangePriceType: "showModalChangePriceType",
    checkPromotion: "checkPromotion"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]],
  decls: 59,
  vars: 61,
  consts: [[1, "layout", 3, "ngClass"], [1, "bill-detail"], [1, "btn-list"], ["nz-button", "", "nzType", "default", 3, "nzLoading", "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 3, "click"], ["nz-icon", "", "nzType", "file-search", "nzTheme", "outline"], ["nz-icon", "", "nzType", "search", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 3, "click", 4, "ngIf"], ["nz-button", "", 2, "background", "#00a859", "color", "white", 3, "click"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline"], [1, "bill-detail-area", "ant-table-body"], ["class", "no-data", 4, "ngIf"], ["class", "bill-detail-area-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["style", "padding-top: 8px", 3, "default_price_type", "productChoice", 4, "ngIf"], [2, "display", "none", 3, "totalNumber", "list_dishs", "stamp", "tableInfo"], [3, "showDrawerProductList", "default_price_type", "closeSearchProductList", 4, "ngIf"], [3, "showDrawerServiceList", "default_price_type", "closeSearchServiceList", 4, "ngIf"], [3, "showDrawerSideDishesList", "default_price_type", "closeSearchSideDishesList", 4, "ngIf"], [3, "showDrawerCombosList", "closeSearchCombosList", 4, "ngIf"], ["nzWidth", "300", 3, "nzMaskClosable", "nzFooter", "nzVisible", "nzTitle", "nzCloseIcon", "nzVisibleChange", "nzOnOk"], [4, "nzModalContent"], ["modalFooterDispatcher", ""], ["nzWidth", "300", 3, "nzMaskClosable", "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk", 4, "ngIf"], ["nzWidth", "300", 3, "nzMaskClosable", "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterPrintKitchen", ""], ["nzWidth", "40vw", 3, "nzVisible", "nzTitle", "nzFooter", "nzOnCancel", "nzVisibleChange", 4, "ngIf"], [3, "nzVisible", "nzTitle", "nzFooter", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUsedTime", ""], [3, "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["modalFooterEditUnitPrice2", ""], [1, "no-data"], [1, "bill-detail-area-item"], [4, "ngIf", "ngIfElse"], ["elseTemplate", ""], ["nz-row", ""], ["nz-col", "", "nzSpan", "1", 1, "center-col"], ["nzType", "text", "nz-popconfirm", "", "nzPopconfirmPlacement", "bottomLeft", "nz-button", "", 3, "nzPopconfirmTitle", "nzLoading", "nzOnConfirm"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline", 2, "cursor", "pointer"], ["nz-col", "", "nzSpan", "23"], [2, "font-weight", "bold", "margin-bottom", "0"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline", "style", "cursor: pointer;", 3, "click", 4, "ngIf"], [4, "ngIf"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline", 2, "cursor", "pointer", 3, "click"], [4, "ngFor", "ngForOf"], [1, "bill-detail-area-item-info"], [1, "delete-btn"], [1, "item-name"], ["style", "color: var(--ion-color-vh-green);margin-right: 8px;cursor: pointer;", "nz-icon", "", "nzType", "printer", "nzTheme", "outline", "nz-tooltip", "", "nzTooltipColor", "var(--ion-color-vh-green)", "nzTooltipPlacement", "bottom", 3, "nzTooltipTitle", "click", 4, "ngIf"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline", "style", "cursor: pointer;", "nz-tooltip", "", "nzTooltipPlacement", "bottom", 3, "nzTooltipTitle", "click", 4, "ngIf"], [1, "item-quantity"], [1, "item-price"], [1, "item-total"], [1, "edit-btn"], [1, "bill-detail-area-item-combo"], ["class", "bill-detail-area-item-side-dishes", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "bill-detail-area-item-properties", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["id", "note-card1", 1, "bill-detail-area-item-note"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline", "nz-tooltip", "", "nzTooltipColor", "var(--ion-color-vh-green)", "nzTooltipPlacement", "bottom", 2, "color", "var(--ion-color-vh-green)", "margin-right", "8px", "cursor", "pointer", 3, "nzTooltipTitle", "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline", "nz-tooltip", "", "nzTooltipPlacement", "bottom", 2, "cursor", "pointer", 3, "nzTooltipTitle", "click"], [2, "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["style", "font-size: 0.75rem; color: var(--ion-color-vh-black); font-weight: normal;", 4, "ngFor", "ngForOf"], [2, "font-size", "0.75rem", "color", "var(--ion-color-vh-black)", "font-weight", "normal"], [1, "bill-detail-area-item-side-dishes"], [1, "bill-detail-area-item-properties"], ["class", "sub-name", 4, "ngFor", "ngForOf"], [1, "sub-name"], [2, "font-size", "0.7rem !important"], ["nz-button", "", "nzType", "text", "nz-popconfirm", "", "nzPopconfirmPlacement", "right", 3, "nzLoading", "nzPopconfirmTitle", "nzOnConfirm"], ["nz-icon", "", "nzType", "close", "nzTheme", "outline"], ["nz-button", "", "nzType", "text", 3, "click"], ["nz-icon", "", "nzType", "edit", "nzTheme", "outline"], ["class", "bill-detail-area-item-time", 4, "ngIf"], ["nz-input", "", "nzBorderless", "", 3, "ngModel", "placeholder", "ngModelChange", "blur"], [1, "bill-detail-area-item-time"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [2, "padding-top", "8px", 3, "default_price_type", "productChoice"], [3, "showDrawerProductList", "default_price_type", "closeSearchProductList"], [3, "showDrawerServiceList", "default_price_type", "closeSearchServiceList"], [3, "showDrawerSideDishesList", "default_price_type", "closeSearchSideDishesList"], [3, "showDrawerCombosList", "closeSearchCombosList"], [3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [3, "nzValue", "nzLabel"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"], ["nz-row", "", 4, "ngIf"], ["id", "print-kitchen"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "border-bottom", "1px solid gray"], ["nz-col", "", "nzSpan", "12"], [3, "ngModel"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "padding", "4px", "font-weight", "bold"], ["style", "display: flex; align-items: center;padding: 0 4px 0 8px;", 4, "ngIf"], ["style", "display: flex;align-items: center;justify-content: space-between;padding: 0 4px 0 8px;", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["style", "display: flex;align-items: center;justify-content: space-between;padding: 0 4px 0 8px;", 4, "ngFor", "ngForOf"], [2, "padding", "0 4px 0 8px", "font-style", "italic", 3, "ngStyle"], [2, "display", "flex", "align-items", "center", "padding", "0 4px 0 8px"], [2, "display", "flex", "align-items", "center", "justify-content", "space-between", "padding", "0 4px 0 8px"], ["id", "print-kitchen-again"], ["nzWidth", "40vw", 3, "nzVisible", "nzTitle", "nzFooter", "nzOnCancel", "nzVisibleChange"], [1, "ant-table-body", "modal-edit", 2, "max-height", "50vh", "overflow-y", "auto", "overflow-x", "hidden", "padding", "0 8px"], ["serviceTimeTemplate", ""], ["nz-row", "", 2, "width", "100%", "align-items", "center"], ["nz-col", "", "nzSpan", "7"], ["maxlength", "15", "nz-input", "", 3, "disabled", "value", "ngClass", "placeholder", "blur"], ["nz-col", "", "nzSpan", "10", 1, "price-edit", 2, "display", "flex", "justify-content", "space-between", "align-items", "stretch", "gap", "6px", "padding", "0 20px"], ["nz-button", "", "nzType", "default", 2, "width", "40px", 3, "disabled", "ngClass", "click"], ["nz-icon", "", "nzType", "minus"], [2, "flex", "1", 3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], ["nz-icon", "", "nzType", "plus"], ["nz-col", "", "nzSpan", "7", 2, "text-align", "right"], ["nz-col", "", "nzSpan", "24", "style", "font-size: 0.7rem; margin-top: 8px;", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "order-div-note1", 2, "margin-top", "8px"], ["nzBorderless", "", "nz-input", "", 1, "order-note", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], ["nz-row", "", "class", "option-modal", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 2, "font-size", "0.7rem", "margin-top", "8px"], ["nz-row", "", 1, "option-modal"], ["class", "align-center", "nz-col", "", "nzSpan", "24", "style", "padding: 16px 0; font-weight: bold;", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", 1, "align-center"], ["nzGhost", ""], [3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 1, "align-center", 2, "padding", "16px 0", "font-weight", "bold"], [3, "nzHeader", "nzActive"], [2, "padding-left", "24px", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-radio", "", 3, "nzValue"], ["nz-col", "", "nzSpan", "24", "class", "items-food", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 1, "items-food"], ["nz-row", "", 2, "width", "100%"], ["nz-col", "", "nzSpan", "7", 1, "align-center", "price-edit"], ["nz-col", "", "nzSpan", "10", 1, "text-align-center", "price-edit", 2, "display", "flex", "justify-content", "space-evenly", "align-items", "end"], ["nz-button", "", "nzType", "default", 3, "disabled", "ngClass", "click"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "7", 1, "align-end", "text-align-right"], [2, "width", "100%", "padding", "8px 0", 3, "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "24"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], ["nz-col", "", "nzSpan", "6"], ["nz-col", "", "nzSpan", "6", 1, "ion-text-end"], [2, "color", "var(--ion-color-vh-orange)"], [1, "flex-between", 2, "margin-bottom", "8px", "font-size", "0.95rem"], ["class", "flex-between", 4, "ngIf"], ["style", "margin-bottom: 1rem;", 4, "ngIf"], [1, "flex-between"], [2, "font-size", "1rem"], [1, "flex-between", 2, "margin", "16px 0"], [2, "text-align", "right", "color", "var(--ion-color-vh-orange)", "cursor", "pointer", 3, "click"], [2, "background-color", "#f0f0f0", "flex", "auto"], [2, "text-align", "right", "color", "var(--ion-color-vh-green)", "cursor", "pointer", 3, "click"], ["nz-col", "", "nzSpan", "24", 1, "order-div-note1"], ["nz-input", "", 1, "order-note", 3, "ngModel", "placeholder", "ngModelChange"], [2, "display", "block"], [2, "margin-top", "0.25rem"], [2, "margin-bottom", "1rem"], ["class", "flex-between", 4, "ngFor", "ngForOf"], [2, "margin-bottom", "0"], ["nz-row", "", 3, "nzGutter"], [2, "margin-bottom", "4px"], ["nzFormat", "dd/MM/yyyy HH:mm:ss", "nzShowTime", "", 2, "width", "100%", 3, "ngModel", "nzAllowClear", "ngModelChange"], ["nzFormat", "dd/MM/yyyy HH:mm:ss", "nzShowTime", "", "nzAllowClear", "", 2, "width", "100%", 3, "ngModel", "ngModelChange"], [2, "margin-top", "32px"], [2, "margin-bottom", "0px"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "disabled", "click"], [3, "nzSuffix"], ["type", "text", "nz-input", "", 3, "placeholder", "keyup"], ["searchValue", ""], ["suffixIconSearch", ""], ["style", "text-align: center;", 4, "ngIf"], ["nz-icon", "", "nzType", "search"], [2, "text-align", "center"]],
  template: function BillDetail1Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_Template_button_click_3_listener() {
        return ctx.goBack.emit(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_Template_button_click_7_listener() {
        return ctx.openSearchService();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](10, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_Template_button_click_11_listener() {
        return ctx.openSearchProduct();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](14, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_Template_button_click_15_listener() {
        return ctx.openSearchSideDishes();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_Template_button_click_19_listener() {
        return ctx.openSearchCombos();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](23, BillDetail1Component_button_23_Template, 3, 3, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BillDetail1Component_Template_button_click_24_listener() {
        return ctx.checkPromotion.emit(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](25, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, BillDetail1Component_div_29_Template, 4, 3, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, BillDetail1Component_div_30_Template, 4, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, BillDetail1Component_app_product_wishlist1_31_Template, 1, 1, "app-product-wishlist1", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "app-print-one-col", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, BillDetail1Component_app_search_product_33_Template, 1, 2, "app-search-product", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, BillDetail1Component_app_search_service_34_Template, 1, 2, "app-search-service", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, BillDetail1Component_app_search_topping_35_Template, 1, 2, "app-search-topping", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, BillDetail1Component_app_search_combo_36_Template, 1, 1, "app-search-combo", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "nz-modal", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function BillDetail1Component_Template_nz_modal_nzVisibleChange_37_listener($event) {
        return ctx.show_modal_dispatcher = $event;
      })("nzOnOk", function BillDetail1Component_Template_nz_modal_nzOnOk_37_listener() {
        return ctx.handleDispatcher();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, BillDetail1Component_ng_container_39_Template, 5, 2, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, BillDetail1Component_ng_template_40_Template, 3, 3, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, BillDetail1Component_nz_modal_42_Template, 5, 6, "nz-modal", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "nz-modal", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function BillDetail1Component_Template_nz_modal_nzVisibleChange_43_listener($event) {
        return ctx.showPrintKitchenAgain = $event;
      })("nzOnCancel", function BillDetail1Component_Template_nz_modal_nzOnCancel_43_listener() {
        ctx.showPrintKitchenAgain = false;
        return ctx.handleCancelPrint();
      })("nzOnOk", function BillDetail1Component_Template_nz_modal_nzOnOk_43_listener() {
        return ctx.handlePrint(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](44, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, BillDetail1Component_ng_container_45_Template, 13, 18, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, BillDetail1Component_ng_template_46_Template, 3, 3, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](48, BillDetail1Component_nz_modal_48_Template, 2, 3, "nz-modal", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "nz-modal", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function BillDetail1Component_Template_nz_modal_nzVisibleChange_49_listener($event) {
        return ctx.isShowModalEditUsedTime = $event;
      })("nzOnCancel", function BillDetail1Component_Template_nz_modal_nzOnCancel_49_listener() {
        return ctx.isShowModalEditUsedTime = false;
      })("nzOnOk", function BillDetail1Component_Template_nz_modal_nzOnOk_49_listener() {
        return ctx.handleUpdateUsedTime();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](50, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](51, BillDetail1Component_ng_container_51_Template, 25, 19, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](52, BillDetail1Component_ng_template_52_Template, 6, 7, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "nz-modal", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("nzVisibleChange", function BillDetail1Component_Template_nz_modal_nzVisibleChange_54_listener($event) {
        return ctx.show_modal_select_lots = $event;
      })("nzOnCancel", function BillDetail1Component_Template_nz_modal_nzOnCancel_54_listener() {
        return ctx.handleCancelChooseLot();
      })("nzOnOk", function BillDetail1Component_Template_nz_modal_nzOnOk_54_listener() {
        return ctx.handleChooseLot();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](55, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](56, BillDetail1Component_ng_container_56_Template, 11, 7, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, BillDetail1Component_ng_template_57_Template, 6, 7, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](41);

      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](47);

      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](53);

      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](58);

      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](59, _c5, ctx.wishList));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzLoading", ctx.statusInvoice.updating);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 39, "Back"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](10, 41, "Service"), " (F3) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](14, 43, "Dishes/beverage"), " (F4)");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 45, "Side dishes"), " (F5)");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 47, "Combos"), " (F6)");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.management_product_price2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 49, "Promotions"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.invoices.getInvoiceDetail().length);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.invoices.getInvoiceDetail())("ngForTrackBy", ctx.myTrackByFunction);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.wishList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("totalNumber", ctx.list_selected_dishs ? ctx.list_selected_dishs.length : ctx.invoices.getInvoiceDetail().length)("list_dishs", ctx.list_selected_dishs)("stamp", ctx.stamp)("tableInfo", ctx.tableInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showDrawerProductList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showDrawerServiceList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showDrawerSideDishesList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showDrawerCombosList);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](38, 51, "Dish dispatch"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzMaskClosable", false)("nzFooter", _r9)("nzVisible", ctx.show_modal_dispatcher)("nzCloseIcon", null)("nzMaskClosable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.printKitchen.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](44, 53, "Print kitchen"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzMaskClosable", false)("nzFooter", _r13)("nzVisible", ctx.showPrintKitchenAgain);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.choiceFood);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzVisible", ctx.isShowModalEditUsedTime)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](50, 55, "Edit used time"))("nzFooter", _r17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](55, 57, "Select lot number"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("nzFooter", _r20)("nzVisible", ctx.show_modal_select_lots);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_18__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_19__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__.NzIconDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _print_one_col_print_one_col_component__WEBPACK_IMPORTED_MODULE_6__.PrintOneColComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_15__.NzModalContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_21__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_21__.NzColDirective, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_22__.NzPopconfirmDirective, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_23__.NzTooltipDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _product_wishlist1_product_wishlist1_component__WEBPACK_IMPORTED_MODULE_7__.ProductWishlist1Component, _search_product_search_product_component__WEBPACK_IMPORTED_MODULE_8__.SearchProductComponent, _search_service_search_service_component__WEBPACK_IMPORTED_MODULE_9__.SearchServiceComponent, _search_topping_search_topping_component__WEBPACK_IMPORTED_MODULE_10__.SearchToppingComponent, _search_combo_search_combo_component__WEBPACK_IMPORTED_MODULE_11__.SearchComboComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_26__.NzOptionComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__.NzInputNumberComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_28__.NzCollapseComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_28__.NzCollapsePanelComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_29__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_29__.NzRadioComponent, ng_zorro_antd_date_picker__WEBPACK_IMPORTED_MODULE_30__.NzDatePickerComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__.NzInputGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_24__.NzInputGroupWhitSuffixOrPrefixDirective],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe],
  styles: ["@charset \"UTF-8\";\n.layout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.layout-1[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 70% 30%;\n}\n.bill-detail[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 8px;\n}\n.bill-detail[_ngcontent-%COMP%]   .btn-list[_ngcontent-%COMP%] {\n  height: 10%;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n.bill-detail[_ngcontent-%COMP%]   .btn-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 8px;\n  font-size: 0.9rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  overflow: hidden;\n  min-height: 40px;\n}\n.bill-detail-area[_ngcontent-%COMP%] {\n  position: relative;\n  height: 90%;\n  overflow: auto;\n}\n.bill-detail-area-item[_ngcontent-%COMP%] {\n  border-bottom: 1px var(--ion-color-vh-gray-light) solid;\n}\n.bill-detail-area-item-info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 2rem calc(50% - 4rem) 10% 20% 20% 2rem;\n  align-items: center;\n  font-size: 0.9rem;\n}\n.bill-detail-area-item-properties[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2rem calc(100% - 4rem) 2rem;\n  align-items: center;\n  font-size: 0.75rem;\n}\n.bill-detail-area-item-side-dishes[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2rem calc(50% - 4rem) 10% 20% 20% 2rem;\n  align-items: center;\n  font-size: 0.75rem;\n}\n.bill-detail-area-item-note[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.bill-detail-area-item-note[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .bill-detail-area-item-note[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.7rem !important;\n  color: var(--ion-color-vh-gray);\n  padding-left: 2rem;\n  font-style: italic;\n}\n.bill-detail-area-item-combo[_ngcontent-%COMP%] {\n  font-size: 0.7rem !important;\n  color: var(--ion-color-vh-black);\n  padding-left: 2rem;\n}\n.bill-detail-area-item-time[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n.bill-detail-area-item-time[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin: 0;\n}\n.modal-edit[_ngcontent-%COMP%]   .flex-between[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  grid-gap: 24px;\n  gap: 24px;\n}\n.modal-edit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .modal-edit[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-gray);\n}\nnz-date-picker[_ngcontent-%COMP%]     .ant-picker-clear {\n  display: block !important;\n}\n\n.print-kitchen[_ngcontent-%COMP%] {\n  max-height: 40vh;\n  overflow: auto;\n  padding: 0 8px;\n}\n.print-kitchen-font[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.print-kitchen-font[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 0.9rem;\n  font-weight: bold;\n}\n.print-kitchen-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.print-kitchen-value-name[_ngcontent-%COMP%] {\n  width: 70%;\n  text-align: left;\n}\n.print-kitchen-value-name-note[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 0.7rem;\n}\n.print-kitchen-value-quantity[_ngcontent-%COMP%] {\n  width: 30%;\n  text-align: end;\n}\n.print-kitchen-combo[_ngcontent-%COMP%], .print-kitchen-properties[_ngcontent-%COMP%], .print-kitchen-topping[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.print-kitchen-combo-name[_ngcontent-%COMP%], .print-kitchen-properties-name[_ngcontent-%COMP%], .print-kitchen-topping-name[_ngcontent-%COMP%] {\n  width: 70%;\n  text-align: left;\n}\n.print-kitchen-combo-quantity[_ngcontent-%COMP%], .print-kitchen-properties-quantity[_ngcontent-%COMP%], .print-kitchen-topping-quantity[_ngcontent-%COMP%] {\n  width: 30%;\n  text-align: end;\n}\n.header.print-kitchen-value[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  border-bottom: 1px solid var(--ion-color-vh-gray);\n}\n.option-modal[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.option-modal[_ngcontent-%COMP%]   .order-note[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-vh-gray);\n  padding: 0;\n}\n.option-modal[_ngcontent-%COMP%]   .align-center[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.option-modal[_ngcontent-%COMP%]   .align-end[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n.option-modal[_ngcontent-%COMP%]   .text-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.option-modal[_ngcontent-%COMP%]   .text-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.option-modal[_ngcontent-%COMP%]   nz-input-number[_ngcontent-%COMP%] {\n  height: 34px;\n}\n.option-modal[_ngcontent-%COMP%]   nz-input-number[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 38px;\n}\n.ant-btn[_ngcontent-%COMP%]:focus, .ant-btn[_ngcontent-%COMP%]:hover {\n  color: var(--ion-color-vh-green);\n  border-color: var(--ion-color-vh-green);\n}\n  #note-card1 > app-keyboard > div {\n  right: 25% !important;\n  width: 55% !important;\n  position: fixed !important;\n  bottom: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGwtZGV0YWlsMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUVGO0FBREU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQUdKO0FBQ0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFFRjtBQURFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBR0o7QUFGSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSU47QUFERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFHSjtBQUZJO0VBQ0UsdURBQUE7QUFJTjtBQUhNO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFLUjtBQUhNO0VBQ0UsYUFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUtSO0FBSE07RUFDRSxhQUFBO0VBQ0EsNkRBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBS1I7QUFITTtFQUNFLFdBQUE7QUFLUjtBQUpROztFQUVFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTVY7QUFITTtFQUNFLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUtSO0FBQ0E7RUFDRSxrQkFBQTtBQUVGO0FBQUE7RUFDRSxpQkFBQTtFQUNBLFNBQUE7QUFHRjtBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUdKO0FBQUE7O0VBRUksK0JBQUE7QUFHSjtBQUFBO0VBQ0kseUJBQUE7QUFHSjtBQUFBLGVBQUE7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFFRjtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRUY7QUFERTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFHSjtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRUY7QUFERTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUdKO0FBRkk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBSU47QUFERTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBR0o7QUFDQTs7O0VBR0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBRUY7QUFERTs7O0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBS0o7QUFIRTs7O0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFPSjtBQUhBO0VBQ0UsY0FBQTtFQUNBLGlEQUFBO0FBTUY7QUFIQTtFQUNFLFdBQUE7QUFNRjtBQUxFO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUFPSjtBQUxFO0VBQ0Usa0JBQUE7QUFPSjtBQUxFO0VBQ0Usb0JBQUE7QUFPSjtBQUxFO0VBQ0UsaUJBQUE7QUFPSjtBQUxFO0VBQ0Usa0JBQUE7QUFPSjtBQUxFO0VBQ0UsWUFBQTtBQU9KO0FBTkk7RUFDRSxZQUFBO0FBUU47QUFIQTs7RUFFRSxnQ0FBQTtFQUNBLHVDQUFBO0FBTUY7QUFKQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUFPRiIsImZpbGUiOiJiaWxsLWRldGFpbDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubGF5b3V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5sYXlvdXQtMSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MCUgMzAlO1xufVxuXG4uYmlsbC1kZXRhaWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogOHB4O1xufVxuLmJpbGwtZGV0YWlsIC5idG4tbGlzdCB7XG4gIGhlaWdodDogMTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmlsbC1kZXRhaWwgLmJ0bi1saXN0IGJ1dHRvbiB7XG4gIG1hcmdpbjogMCA4cHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuLmJpbGwtZGV0YWlsLWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogOTAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5iaWxsLWRldGFpbC1hcmVhLWl0ZW0ge1xuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0taW9uLWNvbG9yLXZoLWdyYXktbGlnaHQpIHNvbGlkO1xufVxuLmJpbGwtZGV0YWlsLWFyZWEtaXRlbS1pbmZvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSBjYWxjKDUwJSAtIDRyZW0pIDEwJSAyMCUgMjAlIDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuLmJpbGwtZGV0YWlsLWFyZWEtaXRlbS1wcm9wZXJ0aWVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIGNhbGMoMTAwJSAtIDRyZW0pIDJyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cbi5iaWxsLWRldGFpbC1hcmVhLWl0ZW0tc2lkZS1kaXNoZXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gY2FsYyg1MCUgLSA0cmVtKSAxMCUgMjAlIDIwJSAycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4uYmlsbC1kZXRhaWwtYXJlYS1pdGVtLW5vdGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5iaWxsLWRldGFpbC1hcmVhLWl0ZW0tbm90ZSBpbnB1dCxcbi5iaWxsLWRldGFpbC1hcmVhLWl0ZW0tbm90ZSBzcGFuIHtcbiAgZm9udC1zaXplOiAwLjdyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uYmlsbC1kZXRhaWwtYXJlYS1pdGVtLWNvbWJvIHtcbiAgZm9udC1zaXplOiAwLjdyZW0gIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cblxuLmJpbGwtZGV0YWlsLWFyZWEtaXRlbS10aW1lIHtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuXG4uYmlsbC1kZXRhaWwtYXJlYS1pdGVtLXRpbWUgcCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2RhbC1lZGl0IC5mbGV4LWJldHdlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjRweDtcbn1cblxuLm1vZGFsLWVkaXQgc3Bhbixcbi5tb2RhbC1lZGl0IHNtYWxsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcbn1cblxubnotZGF0ZS1waWNrZXIgOjpuZy1kZWVwIC5hbnQtcGlja2VyLWNsZWFyIHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cblxuLyptb2RhbCBpbiBi4bq/cCovXG4ucHJpbnQta2l0Y2hlbiB7XG4gIG1heC1oZWlnaHQ6IDQwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLnByaW50LWtpdGNoZW4tZm9udCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnByaW50LWtpdGNoZW4tZm9udCBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByaW50LWtpdGNoZW4tdmFsdWUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wcmludC1raXRjaGVuLXZhbHVlLW5hbWUge1xuICB3aWR0aDogNzAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnByaW50LWtpdGNoZW4tdmFsdWUtbmFtZS1ub3RlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbi5wcmludC1raXRjaGVuLXZhbHVlLXF1YW50aXR5IHtcbiAgd2lkdGg6IDMwJTtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4ucHJpbnQta2l0Y2hlbi1jb21ibyxcbi5wcmludC1raXRjaGVuLXByb3BlcnRpZXMsXG4ucHJpbnQta2l0Y2hlbi10b3BwaW5nIHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByaW50LWtpdGNoZW4tY29tYm8tbmFtZSxcbi5wcmludC1raXRjaGVuLXByb3BlcnRpZXMtbmFtZSxcbi5wcmludC1raXRjaGVuLXRvcHBpbmctbmFtZSB7XG4gIHdpZHRoOiA3MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucHJpbnQta2l0Y2hlbi1jb21iby1xdWFudGl0eSxcbi5wcmludC1raXRjaGVuLXByb3BlcnRpZXMtcXVhbnRpdHksXG4ucHJpbnQta2l0Y2hlbi10b3BwaW5nLXF1YW50aXR5IHtcbiAgd2lkdGg6IDMwJTtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uaGVhZGVyLnByaW50LWtpdGNoZW4tdmFsdWUge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcbn1cblxuLm9wdGlvbi1tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm9wdGlvbi1tb2RhbCAub3JkZXItbm90ZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xuICBwYWRkaW5nOiAwO1xufVxuLm9wdGlvbi1tb2RhbCAuYWxpZ24tY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLm9wdGlvbi1tb2RhbCAuYWxpZ24tZW5kIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG4ub3B0aW9uLW1vZGFsIC50ZXh0LWFsaWduLXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ub3B0aW9uLW1vZGFsIC50ZXh0LWFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vcHRpb24tbW9kYWwgbnotaW5wdXQtbnVtYmVyIHtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuLm9wdGlvbi1tb2RhbCBuei1pbnB1dC1udW1iZXIgaW5wdXQge1xuICBoZWlnaHQ6IDM4cHg7XG59XG5cbi5hbnQtYnRuOmZvY3VzLFxuLmFudC1idG46aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xufVxuXG46Om5nLWRlZXAgI25vdGUtY2FyZDEgPiBhcHAta2V5Ym9hcmQgPiBkaXYge1xuICByaWdodDogMjUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1NSUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMiU7XG59Il19 */"]
});

/***/ }),

/***/ 21445:
/*!************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/bill-detail1/bill-detail1.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillDetail1Module": () => (/* binding */ BillDetail1Module)
/* harmony export */ });
/* harmony import */ var _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../keyboard/keyboard.module */ 9657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _bill_detail1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bill-detail1.component */ 16002);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _search_product_search_product_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-product/search-product.module */ 72573);
/* harmony import */ var _search_service_search_service_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search-service/search-service.module */ 51067);
/* harmony import */ var _search_topping_search_topping_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-topping/search-topping.module */ 37147);
/* harmony import */ var _search_combo_search_combo_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search-combo/search-combo.module */ 99006);
/* harmony import */ var _product_wishlist1_product_wishlist1_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../product-wishlist1/product-wishlist1.module */ 66667);
/* harmony import */ var _print_one_col_print_one_col_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./print-one-col/print-one-col.component */ 70863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);













class BillDetail1Module {
}
BillDetail1Module.ɵfac = function BillDetail1Module_Factory(t) { return new (t || BillDetail1Module)(); };
BillDetail1Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: BillDetail1Module });
BillDetail1Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
            _product_wishlist1_product_wishlist1_module__WEBPACK_IMPORTED_MODULE_7__.ProductWishlist1Module,
            _search_product_search_product_module__WEBPACK_IMPORTED_MODULE_3__.SearchProductModule,
            _search_service_search_service_module__WEBPACK_IMPORTED_MODULE_4__.SearchServiceModule,
            _search_topping_search_topping_module__WEBPACK_IMPORTED_MODULE_5__.SearchToppingModule,
            _search_combo_search_combo_module__WEBPACK_IMPORTED_MODULE_6__.SearchComboModule,
            _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](BillDetail1Module, { declarations: [_bill_detail1_component__WEBPACK_IMPORTED_MODULE_1__.BillDetail1Component, _print_one_col_print_one_col_component__WEBPACK_IMPORTED_MODULE_8__.PrintOneColComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule,
        _product_wishlist1_product_wishlist1_module__WEBPACK_IMPORTED_MODULE_7__.ProductWishlist1Module,
        _search_product_search_product_module__WEBPACK_IMPORTED_MODULE_3__.SearchProductModule,
        _search_service_search_service_module__WEBPACK_IMPORTED_MODULE_4__.SearchServiceModule,
        _search_topping_search_topping_module__WEBPACK_IMPORTED_MODULE_5__.SearchToppingModule,
        _search_combo_search_combo_module__WEBPACK_IMPORTED_MODULE_6__.SearchComboModule,
        _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule], exports: [_bill_detail1_component__WEBPACK_IMPORTED_MODULE_1__.BillDetail1Component] }); })();


/***/ }),

/***/ 70863:
/*!******************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/bill-detail1/print-one-col/print-one-col.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintOneColComponent": () => (/* binding */ PrintOneColComponent)
/* harmony export */ });
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);









function PrintOneColComponent_div_3_div_1_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("+ ", i_r11.name, " ", i_r11.selectedValue, " ");
} }
function PrintOneColComponent_div_3_div_1_div_1_br_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
} }
function PrintOneColComponent_div_3_div_1_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+ ", i_r13.name, " ");
} }
function PrintOneColComponent_div_3_div_1_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.subComboName);
} }
const _c0 = function (a0, a1) { return { "width.mm": a0, "height.mm": a1 }; };
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return { "text-align": a0, "font-weight": a1, "font-style": a2, "text-decoration": a3, "height.mm": a4, "width.mm": a5, "top.px": a6, "left.px": a7, "display": a8, "font-size.px": a9 }; };
function PrintOneColComponent_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PrintOneColComponent_div_3_div_1_div_1_span_10_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PrintOneColComponent_div_3_div_1_div_1_br_11_Template, 1, 0, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PrintOneColComponent_div_3_div_1_div_1_span_12_Template, 3, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PrintOneColComponent_div_3_div_1_div_1_span_13_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r4 = ctx_r16.index;
    const item_r3 = ctx_r16.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](20, _c0, ctx_r5.stamp.width * 1.375, i_r4 == ctx_r5.data_show.length - 1 ? ctx_r5.stamp.height * 1.375 - ctx_r5.ratio : ctx_r5.stamp.height * 1.375 - (ctx_r5.ratio - 1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](23, _c1, [ctx_r5.stamp.property.header.text_align, ctx_r5.stamp.property.header.font_weight, ctx_r5.stamp.property.header.font_style, ctx_r5.stamp.property.header.text_decoration, ctx_r5.stamp.property.header.height * 1.375 - 1, ctx_r5.stamp.property.header.width * 1.375 - 4, ctx_r5.stamp.property.header.y, ctx_r5.stamp.property.header.x, ctx_r5.stamp.property.header.status ? "block" : "none", ctx_r5.stamp.property.header.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.stamp.template == 1 ? ctx_r5.vhQueryCafe.getLocalAppSettingNameBranch("store_info").company : ctx_r5.tableInfo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](34, _c1, [ctx_r5.stamp.property.time.text_align, ctx_r5.stamp.property.time.font_weight, ctx_r5.stamp.property.time.font_style, ctx_r5.stamp.property.time.text_decoration, ctx_r5.stamp.property.time.height * 1.375 - 1, ctx_r5.stamp.property.time.width * 1.375, ctx_r5.stamp.property.time.y, ctx_r5.stamp.property.time.x, ctx_r5.stamp.property.time.status ? "block" : "none", ctx_r5.stamp.property.time.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 17, item_r3.time_start_order, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](45, _c1, [ctx_r5.stamp.property.name.text_align, ctx_r5.stamp.property.name.font_weight, ctx_r5.stamp.property.name.font_style, ctx_r5.stamp.property.name.text_decoration, ctx_r5.stamp.property.name.height * 1.375 - 1, ctx_r5.stamp.property.name.width * 1.375, ctx_r5.stamp.property.name.y, ctx_r5.stamp.property.name.x, ctx_r5.stamp.property.name.status ? "block" : "none", ctx_r5.stamp.property.name.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r3.properties);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r3.properties == null ? null : item_r3.properties.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r3.toppings);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r3.ptype == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](56, _c1, [ctx_r5.stamp.property.note.text_align, ctx_r5.stamp.property.note.font_weight, ctx_r5.stamp.property.note.font_style, ctx_r5.stamp.property.note.text_decoration, ctx_r5.stamp.property.note.height * 1.375 - 1, ctx_r5.stamp.property.note.width * 1.375, ctx_r5.stamp.property.note.y, ctx_r5.stamp.property.note.x, ctx_r5.stamp.property.note.status ? "block" : "none", ctx_r5.stamp.property.note.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r3.note, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](67, _c1, [ctx_r5.stamp.property.total.text_align, ctx_r5.stamp.property.total.font_weight, ctx_r5.stamp.property.total.font_style, ctx_r5.stamp.property.total.text_decoration, ctx_r5.stamp.property.total.height * 1.375 - 1, ctx_r5.stamp.property.total.width * 1.375, ctx_r5.stamp.property.total.y, ctx_r5.stamp.property.total.x, ctx_r5.stamp.property.total.status ? "block" : "none", ctx_r5.stamp.property.total.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.vhAlgorithm.vhcurrencyunit_symbol(item_r3.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](78, _c1, [ctx_r5.stamp.property.notice.text_align, ctx_r5.stamp.property.notice.font_weight, ctx_r5.stamp.property.notice.font_style, ctx_r5.stamp.property.notice.text_decoration, ctx_r5.stamp.property.notice.height * 1.375 - 1, ctx_r5.stamp.property.notice.width * 1.375, ctx_r5.stamp.property.notice.y, ctx_r5.stamp.property.notice.x, ctx_r5.stamp.property.notice.status ? "block" : "none", ctx_r5.stamp.property.notice.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" **", ctx_r5.stamp.property.notice.value, " ");
} }
function PrintOneColComponent_div_3_div_1_div_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("+ ", i_r21.name, " ", i_r21.selectedValue, "");
} }
function PrintOneColComponent_div_3_div_1_div_2_br_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
} }
function PrintOneColComponent_div_3_div_1_div_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" + ", i_r23.name, " ");
} }
function PrintOneColComponent_div_3_div_1_div_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r3.subComboName);
} }
function PrintOneColComponent_div_3_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PrintOneColComponent_div_3_div_1_div_2_span_7_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PrintOneColComponent_div_3_div_1_div_2_br_8_Template, 1, 0, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PrintOneColComponent_div_3_div_1_div_2_span_9_Template, 3, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PrintOneColComponent_div_3_div_1_div_2_span_10_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r4 = ctx_r26.index;
    const item_r3 = ctx_r26.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](16, _c0, ctx_r6.stamp.width * 1.375, i_r4 == ctx_r6.data_show.length - 1 ? ctx_r6.stamp.height * 1.375 - ctx_r6.ratio : ctx_r6.stamp.height * 1.375 - (ctx_r6.ratio - 1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](19, _c1, [ctx_r6.stamp.property.header.text_align, ctx_r6.stamp.property.header.font_weight, ctx_r6.stamp.property.header.font_style, ctx_r6.stamp.property.header.text_decoration, ctx_r6.stamp.property.header.height * 1.375 - 1, ctx_r6.stamp.property.header.width * 1.375 - 4, ctx_r6.stamp.property.header.y, ctx_r6.stamp.property.header.x, ctx_r6.stamp.property.header.status ? "block" : "none", ctx_r6.stamp.property.header.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.tableInfo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](30, _c1, [ctx_r6.stamp.property.name.text_align, ctx_r6.stamp.property.name.font_weight, ctx_r6.stamp.property.name.font_style, ctx_r6.stamp.property.name.text_decoration, ctx_r6.stamp.property.name.height * 1.375 - 1, ctx_r6.stamp.property.name.width * 1.375, ctx_r6.stamp.property.name.y, ctx_r6.stamp.property.name.x, ctx_r6.stamp.property.name.status ? "block" : "none", ctx_r6.stamp.property.name.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r3.properties);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r3.properties == null ? null : item_r3.properties.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r3.toppings);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r3.ptype == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](41, _c1, [ctx_r6.stamp.property.note.text_align, ctx_r6.stamp.property.note.font_weight, ctx_r6.stamp.property.note.font_style, ctx_r6.stamp.property.note.text_decoration, ctx_r6.stamp.property.note.height * 1.375 - 1, ctx_r6.stamp.property.note.width * 1.375, ctx_r6.stamp.property.note.y, ctx_r6.stamp.property.note.x, ctx_r6.stamp.property.note.status ? "block" : "none", ctx_r6.stamp.property.note.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r3.note, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](52, _c1, [ctx_r6.stamp.property.total.text_align, ctx_r6.stamp.property.total.font_weight, ctx_r6.stamp.property.total.font_style, ctx_r6.stamp.property.total.text_decoration, ctx_r6.stamp.property.total.height * 1.375 - 1, ctx_r6.stamp.property.total.width * 1.375, ctx_r6.stamp.property.total.y, ctx_r6.stamp.property.total.x, ctx_r6.stamp.property.total.status ? "block" : "none", ctx_r6.stamp.property.total.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.vhAlgorithm.vhcurrencyunit_symbol(item_r3.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](63, _c1, [ctx_r6.stamp.property.number.text_align, ctx_r6.stamp.property.number.font_weight, ctx_r6.stamp.property.number.font_style, ctx_r6.stamp.property.number.text_decoration, ctx_r6.stamp.property.number.height * 1.375 - 1, ctx_r6.stamp.property.number.width * 1.375, ctx_r6.stamp.property.number.y, ctx_r6.stamp.property.number.x, ctx_r6.stamp.property.number.status ? "block" : "none", ctx_r6.stamp.property.number.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", item_r3.index + 1, "/", ctx_r6.totalNumber, " ");
} }
const _c2 = function (a0, a1, a2) { return { "width.mm": a0, "height.mm": a1, "margin-bottom": a2 }; };
function PrintOneColComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintOneColComponent_div_3_div_1_div_1_Template, 20, 89, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintOneColComponent_div_3_div_1_div_2_Template, 17, 74, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c2, ctx_r2.stamp.width * 1.375 * ctx_r2.stamp.col, i_r4 == ctx_r2.data_show.length - 1 ? ctx_r2.stamp.height * 1.375 - 3 : ctx_r2.stamp.height * 1.375 - 2, i_r4 == ctx_r2.data_show.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.stamp.template == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.stamp.template == 2);
} }
function PrintOneColComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintOneColComponent_div_3_div_1_Template, 3, 7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.data_show);
} }
function PrintOneColComponent_div_4_div_1_div_1_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("+ ", i_r36.name, " ", i_r36.selectedValue, " ");
} }
function PrintOneColComponent_div_4_div_1_div_1_br_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
} }
function PrintOneColComponent_div_4_div_1_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+ ", i_r38.name, " ");
} }
function PrintOneColComponent_div_4_div_1_div_1_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r28.subComboName);
} }
function PrintOneColComponent_div_4_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PrintOneColComponent_div_4_div_1_div_1_span_10_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, PrintOneColComponent_div_4_div_1_div_1_br_11_Template, 1, 0, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, PrintOneColComponent_div_4_div_1_div_1_span_12_Template, 3, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, PrintOneColComponent_div_4_div_1_div_1_span_13_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r29 = ctx_r41.index;
    const item_r28 = ctx_r41.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](20, _c0, ctx_r30.stamp.width * 1.375, i_r29 == ctx_r30.data_show.length - 1 ? ctx_r30.stamp.height * 1.375 - 5 : ctx_r30.stamp.height * 1.375 - 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](23, _c1, [ctx_r30.stamp.property.header.text_align, ctx_r30.stamp.property.header.font_weight, ctx_r30.stamp.property.header.font_style, ctx_r30.stamp.property.header.text_decoration, ctx_r30.stamp.property.header.height * 1.375 - 1, ctx_r30.stamp.property.header.width * 1.375 - 4, ctx_r30.stamp.property.header.y, ctx_r30.stamp.property.header.x, ctx_r30.stamp.property.header.status ? "block" : "none", ctx_r30.stamp.property.header.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r30.stamp.template == 1 ? ctx_r30.vhQueryCafe.getLocalAppSettingNameBranch("store_info").company : ctx_r30.tableInfo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](34, _c1, [ctx_r30.stamp.property.time.text_align, ctx_r30.stamp.property.time.font_weight, ctx_r30.stamp.property.time.font_style, ctx_r30.stamp.property.time.text_decoration, ctx_r30.stamp.property.time.height * 1.375 - 1, ctx_r30.stamp.property.time.width * 1.375, ctx_r30.stamp.property.time.y, ctx_r30.stamp.property.time.x, ctx_r30.stamp.property.time.status ? "block" : "none", ctx_r30.stamp.property.time.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 17, item_r28.time_start_order, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](45, _c1, [ctx_r30.stamp.property.name.text_align, ctx_r30.stamp.property.name.font_weight, ctx_r30.stamp.property.name.font_style, ctx_r30.stamp.property.name.text_decoration, ctx_r30.stamp.property.name.height * 1.375 - 1, ctx_r30.stamp.property.name.width * 1.375, ctx_r30.stamp.property.name.y, ctx_r30.stamp.property.name.x, ctx_r30.stamp.property.name.status ? "block" : "none", ctx_r30.stamp.property.name.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r28.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r28.properties);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.properties == null ? null : item_r28.properties.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r28.toppings);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.ptype == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](56, _c1, [ctx_r30.stamp.property.note.text_align, ctx_r30.stamp.property.note.font_weight, ctx_r30.stamp.property.note.font_style, ctx_r30.stamp.property.note.text_decoration, ctx_r30.stamp.property.note.height * 1.375 - 1, ctx_r30.stamp.property.note.width * 1.375, ctx_r30.stamp.property.note.y, ctx_r30.stamp.property.note.x, ctx_r30.stamp.property.note.status ? "block" : "none", ctx_r30.stamp.property.note.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r28.note, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](67, _c1, [ctx_r30.stamp.property.total.text_align, ctx_r30.stamp.property.total.font_weight, ctx_r30.stamp.property.total.font_style, ctx_r30.stamp.property.total.text_decoration, ctx_r30.stamp.property.total.height * 1.375 - 1, ctx_r30.stamp.property.total.width * 1.375, ctx_r30.stamp.property.total.y, ctx_r30.stamp.property.total.x, ctx_r30.stamp.property.total.status ? "block" : "none", ctx_r30.stamp.property.total.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r30.vhAlgorithm.vhcurrencyunit_symbol(item_r28.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](78, _c1, [ctx_r30.stamp.property.notice.text_align, ctx_r30.stamp.property.notice.font_weight, ctx_r30.stamp.property.notice.font_style, ctx_r30.stamp.property.notice.text_decoration, ctx_r30.stamp.property.notice.height * 1.375 - 1, ctx_r30.stamp.property.notice.width * 1.375, ctx_r30.stamp.property.notice.y, ctx_r30.stamp.property.notice.x, ctx_r30.stamp.property.notice.status ? "block" : "none", ctx_r30.stamp.property.notice.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" **", ctx_r30.stamp.property.notice.value, " ");
} }
function PrintOneColComponent_div_4_div_1_div_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("+ ", i_r46.name, " ", i_r46.selectedValue, "");
} }
function PrintOneColComponent_div_4_div_1_div_2_br_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "br");
} }
function PrintOneColComponent_div_4_div_1_div_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" + ", i_r48.name, " ");
} }
function PrintOneColComponent_div_4_div_1_div_2_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r28.subComboName);
} }
function PrintOneColComponent_div_4_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, PrintOneColComponent_div_4_div_1_div_2_span_7_Template, 2, 2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, PrintOneColComponent_div_4_div_1_div_2_br_8_Template, 1, 0, "br", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PrintOneColComponent_div_4_div_1_div_2_span_9_Template, 3, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, PrintOneColComponent_div_4_div_1_div_2_span_10_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r29 = ctx_r51.index;
    const item_r28 = ctx_r51.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](16, _c0, ctx_r31.stamp.width * 1.375, i_r29 == ctx_r31.data_show.length - 1 ? ctx_r31.stamp.height * 1.375 - 5 : ctx_r31.stamp.height * 1.375 - 4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](19, _c1, [ctx_r31.stamp.property.header.text_align, ctx_r31.stamp.property.header.font_weight, ctx_r31.stamp.property.header.font_style, ctx_r31.stamp.property.header.text_decoration, ctx_r31.stamp.property.header.height * 1.375 - 1, ctx_r31.stamp.property.header.width * 1.375 - 4, ctx_r31.stamp.property.header.y, ctx_r31.stamp.property.header.x, ctx_r31.stamp.property.header.status ? "block" : "none", ctx_r31.stamp.property.header.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r31.tableInfo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](30, _c1, [ctx_r31.stamp.property.name.text_align, ctx_r31.stamp.property.name.font_weight, ctx_r31.stamp.property.name.font_style, ctx_r31.stamp.property.name.text_decoration, ctx_r31.stamp.property.name.height * 1.375 - 1, ctx_r31.stamp.property.name.width * 1.375, ctx_r31.stamp.property.name.y, ctx_r31.stamp.property.name.x, ctx_r31.stamp.property.name.status ? "block" : "none", ctx_r31.stamp.property.name.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r28.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r28.properties);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.properties == null ? null : item_r28.properties.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r28.toppings);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.ptype == 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](41, _c1, [ctx_r31.stamp.property.note.text_align, ctx_r31.stamp.property.note.font_weight, ctx_r31.stamp.property.note.font_style, ctx_r31.stamp.property.note.text_decoration, ctx_r31.stamp.property.note.height * 1.375 - 1, ctx_r31.stamp.property.note.width * 1.375, ctx_r31.stamp.property.note.y, ctx_r31.stamp.property.note.x, ctx_r31.stamp.property.note.status ? "block" : "none", ctx_r31.stamp.property.note.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r28.note, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](52, _c1, [ctx_r31.stamp.property.total.text_align, ctx_r31.stamp.property.total.font_weight, ctx_r31.stamp.property.total.font_style, ctx_r31.stamp.property.total.text_decoration, ctx_r31.stamp.property.total.height * 1.375 - 1, ctx_r31.stamp.property.total.width * 1.375, ctx_r31.stamp.property.total.y, ctx_r31.stamp.property.total.x, ctx_r31.stamp.property.total.status ? "block" : "none", ctx_r31.stamp.property.total.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r31.vhAlgorithm.vhcurrencyunit_symbol(item_r28.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunctionV"](63, _c1, [ctx_r31.stamp.property.number.text_align, ctx_r31.stamp.property.number.font_weight, ctx_r31.stamp.property.number.font_style, ctx_r31.stamp.property.number.text_decoration, ctx_r31.stamp.property.number.height * 1.375 - 1, ctx_r31.stamp.property.number.width * 1.375, ctx_r31.stamp.property.number.y, ctx_r31.stamp.property.number.x, ctx_r31.stamp.property.number.status ? "block" : "none", ctx_r31.stamp.property.number.font_size]));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", item_r28.index + 1, "/", ctx_r31.totalNumber, " ");
} }
function PrintOneColComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintOneColComponent_div_4_div_1_div_1_Template, 20, 89, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PrintOneColComponent_div_4_div_1_div_2_Template, 17, 74, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r29 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](3, _c2, ctx_r27.stamp.width * 1.375 * ctx_r27.stamp.col, i_r29 == ctx_r27.data_show.length - 1 ? ctx_r27.stamp.height * 1.375 - 5 : ctx_r27.stamp.height * 1.375 - 4, i_r29 == ctx_r27.data_show.length - 1 ? "0" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r27.stamp.template == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r27.stamp.template == 2);
} }
function PrintOneColComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PrintOneColComponent_div_4_div_1_Template, 3, 7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.data_show);
} }
class PrintOneColComponent {
    constructor(lang, vhAlgorithm, vhComponent, vhQueryCafe, platform) {
        this.lang = lang;
        this.vhAlgorithm = vhAlgorithm;
        this.vhComponent = vhComponent;
        this.vhQueryCafe = vhQueryCafe;
        this.platform = platform;
        this.number = 1;
        this.ratio = 3;
        this.data_show = [];
    }
    ngOnChanges({ list_dishs }) {
        if (list_dishs && list_dishs.currentValue) {
            this.data_show = [];
            this.onChangeData();
            setTimeout(() => {
                this.printBrowser();
            }, 200);
        }
    }
    /**
     * Tính tổng tiền của sản phẩm. Nếu có topping thì tính cả topping
     * @param data sản phẩm cần tính tiền
     * @returns tổng tiền của sản phẩm
     */
    getPrice(data) {
        let total = data.price * data.quantity;
        if (data.toppings) {
            total += data.toppings.reduce((sum, topping) => sum + topping.price * topping.quantity, 0);
        }
        return total;
    }
    /**
     * Gọi khi thay đổi dữ liệu list_dishs truyền vào, để cập nhật lại data_show
     */
    onChangeData() {
        for (let i of this.list_dishs) {
            for (let j = 0; j < i.quantity; j++) {
                const item = Object.assign(Object.assign({}, i), { price: this.getPrice(i) });
                // Nếu là combo thì lấy tên combo
                if (i.ptype === 5)
                    item.subComboName = this.getComboName(i);
                this.data_show.push(item);
            }
        }
    }
    /**
     * Lấy tên combo
     * @param product sản phẩm cần lấy tên combo
     * @returns tên combo, nếu không có thì trả về chuỗi rỗng
     */
    getComboName(product) {
        if (!product.combos)
            return '';
        let comboName = [];
        for (let combo of product.combos) {
            let cb = `${combo.quantity}x ${combo.name} (${this.getUnit(combo.units, combo.ratio)})`;
            if (combo.lots && combo.id_lotproduct) {
                cb += ` (${this.getLotNumber(combo.lots, combo.id_lotproduct)})`;
            }
            comboName.push(cb);
        }
        return comboName.join(', ');
    }
    /**
     * Lấy tên đơn vị theo tỷ lệ
     * @param units mảng đơn vị của sản phẩm
     * @param ratio tỷ lệ cần lấy
     */
    getUnit(units, ratio) {
        return this.vhQueryCafe.getUnit_byRatio(units, ratio).unit;
    }
    /**
     * Lấy tên lô theo id_lot được chọn
     * @param lots mảng lô của sản phẩm
     * @param _id id lô cần lấy
     * @returns tên lô
     */
    getLotNumber(lots, _id) {
        let lot = lots.find(item => item._id == _id);
        return lot.lot_number;
    }
    Print() {
        if (this.platform.is("electron"))
            this.printElectron();
        else
            this.printBrowser();
    }
    printElectron() {
        let html = document.getElementById("stamp-barcode-electron").innerHTML;
        electron.ipcRenderer.send("print-start", {
            html: html,
            deviceName: this.stamp.printer_name,
        });
        electron.ipcRenderer.on("print-done", (event, data) => {
            if (!data)
                this.vhComponent.alertMessageDesktop('warning', this.lang.translate('Printing failed'), 3000);
        });
    }
    printBrowser() {
        print_js__WEBPACK_IMPORTED_MODULE_0___default()({
            printable: "stamp-barcode",
            type: "html",
            scanStyles: false,
            maxWidth: this.stamp.width,
            style: '@page { margin: 0 !important;padding: 0 !important;}' +
                '.stamp {margin-bottom: 3mm; width: ' + this.stamp.width + 'mm;height: ' + (this.stamp.height - 6) + 'mm;}' +
                '.center-all-content { display: flex;align-items: center;justify-content: center;}'
        });
    }
}
PrintOneColComponent.ɵfac = function PrintOneColComponent_Factory(t) { return new (t || PrintOneColComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_1__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_2__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform)); };
PrintOneColComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintOneColComponent, selectors: [["app-print-one-col"]], inputs: { list_dishs: "list_dishs", stamp: "stamp", number: "number", tableInfo: "tableInfo", totalNumber: "totalNumber" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 2, consts: [["nz-row", "", "id", "scroll", 2, "height", "100%", "padding-top", "16px"], ["nz-col", "", "nzSpan", "24", 1, "center-all-content", "hideScrollbar", 2, "overflow", "auto", "padding-top", "16px"], ["id", "stamp-barcode", "style", "height: 100%;margin-top: -1.5mm;margin-left: 2mm;", 4, "ngIf"], ["id", "stamp-barcode-electron", "style", "height: 100%;margin-top: -1.5mm;display: none;margin-left: 2mm;", 4, "ngIf"], ["id", "stamp-barcode", 2, "height", "100%", "margin-top", "-1.5mm", "margin-left", "2mm"], ["class", "stamp mb-6", "style", "display: flex;", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "stamp", "mb-6", 2, "display", "flex", 3, "ngStyle"], ["style", "overflow: hidden;position: relative;", "class", "border-top", 3, "ngStyle", 4, "ngIf"], [1, "border-top", 2, "overflow", "hidden", "position", "relative", 3, "ngStyle"], ["id", "header", 2, "position", "absolute", 3, "ngStyle"], ["id", "time", 2, "position", "absolute", 3, "ngStyle"], ["id", "name", 2, "position", "absolute", "overflow", "hidden", 3, "ngStyle"], ["style", "font-size:0.8rem;", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["style", "font-size:0.8rem;", 4, "ngIf"], ["id", "note", 2, "position", "absolute", 3, "ngStyle"], ["id", "total", 2, "position", "absolute", 3, "ngStyle"], ["id", "notice", 2, "position", "absolute", 3, "ngStyle"], [2, "font-size", "0.8rem"], ["id", "number", 2, "position", "absolute", 3, "ngStyle"], ["id", "stamp-barcode-electron", 2, "height", "100%", "margin-top", "-1.5mm", "display", "none", "margin-left", "2mm"], ["class", "stamp mb-6", "style", "display: flex; ", 3, "ngStyle", 4, "ngFor", "ngForOf"]], template: function PrintOneColComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PrintOneColComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PrintOneColComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.stamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.stamp);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_6__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\nnz-layout[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  border: 1px solid #414141;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-family[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 200px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-size[_ngcontent-%COMP%] {\n  min-width: 60px;\n  max-width: 75px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  align-items: center;\n  height: 32px;\n  max-width: 50px;\n  margin: 6px;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 5px;\n  background: #ff0909;\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nz-layout[_ngcontent-%COMP%]   .font-text-color[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:active {\n  border: none;\n  outline: none;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 50px;\n  margin: 6px;\n  padding: 0;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-italic[_ngcontent-%COMP%] {\n  font-style: italic;\n}\nnz-layout[_ngcontent-%COMP%]   .font-text-btn-underline[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.border-bot[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed;\n}\n.border-top[_ngcontent-%COMP%] {\n  border-top: 1px dashed;\n  border-left: 1px dashed;\n  border-right: 1px dashed;\n}\n.mb-6[_ngcontent-%COMP%] {\n  margin-bottom: 6mm;\n}\n.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n}\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LW9uZS1jb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDSSxpQkFBQTtBQUVOO0FBQ0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBR1I7QUFESTtFQUNJLGtCQUFBO0FBR1I7QUFBSTtFQUNJLHlCQUFBO0FBRVI7QUFBSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBR1o7QUFEUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFHWjtBQUZZO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSWhCO0FBSGdCO0VBRUksWUFBQTtFQUNBLGFBQUE7QUFJcEI7QUFBUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFWjtBQURZO0VBQ0ksaUJBQUE7QUFHaEI7QUFEWTtFQUNJLGtCQUFBO0FBR2hCO0FBRFk7RUFDSSwwQkFBQTtBQUdoQjtBQUVBO0VBQ0kseUJBQUE7QUFDSjtBQUNBO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBRUo7QUFBQTtFQUNJLGtCQUFBO0FBR0o7QUFEQTtFQUNJLGdDQUFBO0FBSUo7QUFGQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUtKIiwiZmlsZSI6InByaW50LW9uZS1jb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWJhY2sge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGkge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxubnotbGF5b3V0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGhlaWdodDogOTUlO1xyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH0gXHJcbiAgICAuY2VudGVyLXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvcmRlcntcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoNjUsIDY1LCA2NSk7XHJcbiAgICB9XHJcbiAgICAuZm9udC10ZXh0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgJi1mYW1pbHkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi1zaXplIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLWNvbG9yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA5LCA5KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICYtYm9sZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLWl0YWxpYyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi11bmRlcmxpbmUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJvcmRlci1ib3R7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkO1xyXG59XHJcbi5ib3JkZXItdG9we1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRhc2hlZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkO1xyXG59XHJcbi5tYi02e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNm1tO1xyXG59XHJcbi5zZWxlY3RlZHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG59XHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 69775:
/*!*************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/bill1/bill1.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bill1Component": () => (/* binding */ Bill1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/product.service */ 28506);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/cascader */ 92131);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/tag */ 9506);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function Bill1Component_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Bill1Component_span_5_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.openModalOtherDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, "Add other payment"), " ");
} }
function Bill1Component_ng_container_13_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r20.percent_discount, "1.0-2"), " %");
} }
function Bill1Component_ng_container_13_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function Bill1Component_ng_container_13_div_7_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r25.updateServiceTime(); ctx_r25.invoices.setPercentDiscountBill(_r24.value); return ctx_r25.editPercentDiscount(_r24.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 1, ctx_r21.percent_discount, "1.0-2"));
} }
function Bill1Component_ng_container_13_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r22.vhAlgorithm.vhcurrencyunit(ctx_r22.invoices.getDiscount()));
} }
function Bill1Component_ng_container_13_input_9_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function Bill1Component_ng_container_13_input_9_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r27.updateServiceTime(); return ctx_r27.updateDiscount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r23.vhAlgorithm.vhcurrencyunit(ctx_r23.invoices.getDiscount()));
} }
function Bill1Component_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, Bill1Component_ng_container_13_span_6_Template, 3, 4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, Bill1Component_ng_container_13_div_7_Template, 5, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, Bill1Component_ng_container_13_span_8_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, Bill1Component_ng_container_13_input_9_Template, 1, 1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 5, "Discount value"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isPreventEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isPreventEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.isPreventEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.isPreventEdit);
} }
function Bill1Component_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "Discount"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.vhAlgorithm.vhcurrencyunit(ctx_r2.invoices.getDiscountBill()));
} }
function Bill1Component_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "Point payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.vhAlgorithm.vhcurrencyunit(ctx_r3.invoices.getDiscountPoint()));
} }
function Bill1Component_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "Coupon payment"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.vhAlgorithm.vhcurrencyunit(ctx_r4.invoices.getDiscountCoupon()));
} }
function Bill1Component_div_17_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r29.vhAlgorithm.vhcurrencyunit(ctx_r29.invoice_fee));
} }
function Bill1Component_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function Bill1Component_div_17_div_5_Template_input_blur_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r31.updateServiceTime(); return ctx_r31.updateFee(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r30.vhAlgorithm.vhcurrencyunit(ctx_r30.invoice_fee));
} }
function Bill1Component_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, Bill1Component_div_17_span_4_Template, 2, 1, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, Bill1Component_div_17_div_5_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, "Fee"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.isPreventEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r5.isPreventEdit);
} }
function Bill1Component_div_18_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r33.tax, " %");
} }
function Bill1Component_div_18_nz_select_6_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-option", 39);
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzLabel", ctx_r36.vhAlgorithm.vhpercent(item_r37.value / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzValue", item_r37.value);
} }
function Bill1Component_div_18_nz_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Bill1Component_div_18_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r38.tax = $event; })("ngModelChange", function Bill1Component_div_18_nz_select_6_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r40.updateServiceTime(); return ctx_r40.updateTax($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Bill1Component_div_18_nz_select_6_nz_option_1_Template, 1, 2, "nz-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r34.tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r34.listTax)("ngForTrackBy", ctx_r34.myTrackByFunction);
} }
function Bill1Component_div_18_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "0.00%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Bill1Component_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, Bill1Component_div_18_span_5_Template, 2, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, Bill1Component_div_18_nz_select_6_Template, 2, 3, "nz-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, Bill1Component_div_18_span_7_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, "Tax"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.isPreventEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.isPreventEdit && ctx_r6.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r6.listTax.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.vhAlgorithm.vhcurrencyunit(ctx_r6.invoices.getTaxValue()));
} }
function Bill1Component_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Bill1Component_ng_container_30_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r41.showProductGiftType7.emit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function Bill1Component_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r8.vhAlgorithm.vhcurrencyunit(ctx_r8.invoices.getPayment()));
} }
function Bill1Component_input_33_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function Bill1Component_input_33_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r43.updateServiceTime(); return ctx_r43.updatePayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r9.vhAlgorithm.vhcurrencyunit(ctx_r9.invoices.getPayment()))("disabled", !ctx_r9.debt || ctx_r9.invoices.getPaymentType() == 2);
} }
function Bill1Component_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "Rest"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r10.vhAlgorithm.vhcurrencyunit_symbol(ctx_r10.invoices.getTotalATax() - ctx_r10.invoices.getPayment()), " ");
} }
function Bill1Component_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.getPaymentTypeLabel(ctx_r11.paymentType));
} }
function Bill1Component_div_40_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nz-cascader", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Bill1Component_div_40_Template_nz_cascader_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r45.paymentType = $event; })("ngModelChange", function Bill1Component_div_40_Template_nz_cascader_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r47.updateServiceTime(); return ctx_r47.changePaymentType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzOptions", ctx_r12.nzOptions)("nzAllowClear", false)("ngModel", ctx_r12.paymentType)("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, "Payment method"));
} }
function Bill1Component_div_41_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r48.vhAlgorithm.vhcurrencyunit(ctx_r48.invoice_cash));
} }
function Bill1Component_div_41_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function Bill1Component_div_41_input_6_Template_input_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); ctx_r51.updateServiceTime(); return ctx_r51.updateCash(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r49.invoices.getPaymentType() == 2)("value", ctx_r49.vhAlgorithm.vhcurrencyunit(ctx_r49.invoice_cash));
} }
function Bill1Component_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, Bill1Component_div_41_span_5_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, Bill1Component_div_41_input_6_Template, 2, 2, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 3, "cash"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.isPreventEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r13.isPreventEdit);
} }
function Bill1Component_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "Change"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r14.vhAlgorithm.vhcurrencyunit(ctx_r14.invoices.getExcessCash()));
} }
function Bill1Component_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r15.invoice_note);
} }
const _c0 = function () { return { minRows: 2, maxRows: 4 }; };
function Bill1Component_textarea_45_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "textarea", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function Bill1Component_textarea_45_Template_textarea_blur_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r54.updateServiceTime(); return ctx_r54.updateNote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 3, "Enter note..."))("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0))("value", ctx_r16.invoice_note);
} }
function Bill1Component_ng_container_48_nz_tag_17_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nz-tag", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzOnClose", function Bill1Component_ng_container_48_nz_tag_17_Template_nz_tag_nzOnClose_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r61); const item_r59 = restoredCtx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r60.onCloseProductCode(item_r59); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzColor", "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r59.code);
} }
function Bill1Component_ng_container_48_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-input-number", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function Bill1Component_ng_container_48_ng_container_18_Template_nz_input_number_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r63.value_discount_point = $event; })("keyup", function Bill1Component_ng_container_48_ng_container_18_Template_nz_input_number_keyup_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r64); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r65.calculatePoint2Money(_r62["value"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 12, "Accumulated points"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 14, "Enter points"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r58.value_discount_point)("nzMin", 0)("nzMax", ctx_r58.point_validity)("nzStep", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r58.vhAlgorithm.vhcurrencyunit(ctx_r58.invoices.getDiscountPoint()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 16, "Conversion rate"), ": ", ctx_r58.customer_class.payment.points, " \u0110i\u1EC3m = ", ctx_r58.vhAlgorithm.vhcurrencyunit_symbol(ctx_r58.customer_class.payment.money), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 18, "Current accumulated points"), " : ", ctx_r58.point_validity, " ");
} }
function Bill1Component_ng_container_48_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function Bill1Component_ng_container_48_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r67); const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r66.getDiscountOfCoupon(_r56.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function Bill1Component_ng_container_48_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r67); const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](7); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r68.getDiscountOfCoupon(_r56.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, Bill1Component_ng_container_48_nz_tag_17_Template, 2, 2, "nz-tag", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, Bill1Component_ng_container_48_ng_container_18_Template, 19, 20, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 8, "Coupon"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 10, "Enter or scan code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 12, "Apply"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.vhAlgorithm.vhcurrencyunit(ctx_r17.invoices.getDiscountCoupon()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r17.product_codes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.customer_class == null ? null : ctx_r17.customer_class.payment.enable);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 14, "Total discount"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.vhAlgorithm.vhcurrencyunit(ctx_r17.invoices.getDiscountOther()));
} }
class Bill1Component {
    constructor(languageService, vhQueryCafe, vhAlgorithm, vhAuth, vhComponent, productService) {
        this.languageService = languageService;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.vhAuth = vhAuth;
        this.vhComponent = vhComponent;
        this.productService = productService;
        // khách hàng hiện tại có được nợ hay không?
        this.debt = false;
        // giá trị thuế hiện tại
        this.tax = 0;
        // giá trị thuế hiện tại
        this.payment = 0;
        // phương thức thanh toán hiện tại - cấu trúc dữ liệu tương thích với component đang được sử dụng
        this.paymentType = [1];
        this.product_gift_type7 = [];
        this.gotten_gift_type7 = false;
        /** Có ngăn edit hay không, có thì sẽ hiển thị các input và textarea dưới dạng span */
        this.isPreventEdit = false;
        this.updateInvoice = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.showProductGiftType7 = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.nzOptions = [
            { value: 1, label: this.languageService.translate("Cash"), isLeaf: true },
            { value: 2, label: this.languageService.translate("Debit"), disabled: true, isLeaf: true },
            { value: 3, label: this.languageService.translate("Account"), children: [] }
        ];
        /** Danh sách thuế được tạo và đang được kích hoạt */
        this.listTax = this.vhQueryCafe.getlocalTaxs().filter(tax => tax.status);
        this.moneyEdit = {};
        this.percent_discount = 0;
        this.is_discount_bill = false;
        this.customer_group = this.vhQueryCafe.getlocalCustomerClasss();
        this.discount_bill = 0;
        this.showModalOtherDiscount = false;
        this.point_validity = 0;
        this.value_discount_point = 0;
        this.product_codes = [];
    }
    ngOnInit() {
        // lấy thông tin tài khoản
        this.getWallets();
    }
    ngOnChanges(change) {
        if (change.debt) {
            if (!change.debt.currentValue) {
                if (this.paymentType[0] == 2)
                    this.changePaymentType([1]);
            }
            this.nzOptions[1].disabled = !change.debt.currentValue;
        }
        this.invoice_discount = this.invoices.getDiscount().toString();
        this.invoice_fee = this.invoices.getFee().toString();
        this.invoice_payment = this.invoices.getPayment().toString();
        this.invoice_cash = this.invoices.getCash().toString();
        this.invoice_note = this.invoices.getNote();
        this.percent_discount = this.invoices.getSubTotal() ? this.invoices.getDiscount() / this.invoices.getSubTotal() * 100 : 0;
    }
    ngAfterViewInit() {
        // Cleave js
        if (document.querySelector(".discount-price"))
            this.moneyEdit['discount'] = this.vhAlgorithm.vhnumeral(".discount-price");
        if (document.querySelector(".fee-price"))
            this.moneyEdit['fee'] = this.vhAlgorithm.vhnumeral(".fee-price");
        if (document.querySelector(".payment-price"))
            this.moneyEdit['payment'] = this.vhAlgorithm.vhnumeral(".payment-price");
        if (document.querySelector(".customerPay"))
            this.moneyEdit['cash'] = this.vhAlgorithm.vhnumeral(".customerPay");
    }
    myTrackByFunction(element, index) {
        return element._id ? element._id : index;
    }
    getWallets() {
        this.nzOptions[2].children = this.vhQueryCafe.getlocalWallets()
            .filter(wallet => wallet._id != 'id_cash' &&
            wallet.id_branch == this.vhQueryCafe.getDefaultBranch()._id).map(wallet => {
            return { label: wallet.name, value: wallet._id, isLeaf: true };
        });
    }
    changePercentDiscount(value) {
        this.percent_discount = value;
        this.invoices.setDiscount(this.invoices.getSubTotal() * value / 100);
        this.updateInvoice.emit(true);
        this.invoice_payment = this.invoices.getPayment().toString();
        this.invoice_cash = this.invoices.getCash().toString();
        this.invoice_discount = (this.invoices.getDiscount()).toString();
    }
    /**Cập nhật giảm giá */
    updateDiscount() {
        let discount = this.moneyEdit['discount'].getRawValue();
        this.invoices.setDiscount(discount ? parseFloat(discount) : 0);
        this.updateInvoice.emit(true);
        this.invoice_payment = this.invoices.getPayment().toString();
        this.invoice_cash = this.invoices.getCash().toString();
        this.percent_discount = discount / this.invoices.getSubTotal() * 100;
    }
    editPercentDiscount(value) {
        if (parseFloat(value) > 100)
            document.getElementById("percent-discount-price")['value'] = 0;
        else
            this.changePercentDiscount(value);
    }
    /** Cập nhật phí */
    updateFee() {
        let fee = this.moneyEdit['fee'].getRawValue();
        this.invoices.setFee(fee ? parseFloat(fee) : 0);
        this.updateInvoice.emit(true);
        this.invoice_payment = this.invoices.getPayment().toString();
        this.invoice_cash = this.invoices.getCash().toString();
    }
    /**Cập nhật thuế */
    updateTax(value) {
        this.invoices.setTax(parseFloat(value));
        this.updateInvoice.emit(true);
        this.invoice_payment = this.invoices.getPayment().toString();
        this.invoice_cash = this.invoices.getCash().toString();
    }
    /**Cập nhật tiền khách trả */
    updatePayment() {
        console.log('update payment');
        if (this.debt) {
            let payment = this.moneyEdit['payment'].getRawValue();
            let value = payment ? parseFloat(payment) : 0;
            this.invoices.setPayment(value ? (value > this.invoices.getTotalATax() || value < 0 ? this.invoices.getTotalATax() : value) : 0);
            document.getElementById("payment-price")['value'] = this.invoices.getPayment();
            this.moneyEdit['payment'] = this.vhAlgorithm.vhnumeral(".payment-price");
            this.updateInvoice.emit(true);
            this.invoice_payment = this.invoices.getPayment().toString();
            this.invoice_cash = this.invoices.getCash().toString();
        }
    }
    /**Cập nhật ghi chú */
    updateNote() {
        let note = document.getElementById("invoice-note");
        this.invoices.setNote(note.value);
        this.updateInvoice.emit(true);
    }
    /**Cập nhật tiền khách trả*/
    updateCash() {
        this.invoices.setCash(parseFloat(this.moneyEdit['cash'].getRawValue()));
        this.updateInvoice.emit(true);
        this.invoice_payment = this.invoices.getPayment().toString();
    }
    /** Thay đổi phương thức thanh toán
     * @param value loại thanh toán
    */
    changePaymentType(value) {
        this.invoices.setPaymentType(value[0]);
        this.invoices.setPayment();
        switch (value[0]) {
            case 1:
                this.invoices.setIdWallet("id_cash");
                this.invoice_payment = this.invoices.getPayment().toString();
                this.invoice_cash = this.invoices.getCash().toString();
                break;
            case 2:
                this.invoices.setIdWallet("");
                this.invoices.setCash(0);
                this.invoice_cash = '0';
                this.invoice_payment = this.invoices.getPayment().toString();
                break;
            case 3:
                this.invoices.setIdWallet(value[1]);
                this.invoice_payment = this.invoices.getPayment().toString();
                this.invoice_cash = this.invoices.getCash().toString();
                break;
        }
        this.updateInvoice.emit(true);
        console.log(this.invoice_cash);
    }
    /**
     * kiểm tra tối đa 12 ky tự cuả discount
     * @param value
     */
    checkMaxLengthDiscount(value) {
        if (parseFloat(value) > 999999999999) {
            value = value.slice(0, 12);
            this.invoice_discount = value;
        }
    }
    /**
     * kiểm tra tối đa 12 ky tự cuả fee
     * @param value
     */
    checkMaxLengthFee(value) {
        if (parseFloat(value) > 999999999999) {
            value = value.slice(0, 12);
            this.invoice_fee = value;
        }
    }
    /**
     * kiểm tra tối đa 12 ky tự cuả payment
     * @param value
     */
    checkMaxLengthPayment(value) {
        if (parseFloat(value) > 999999999999) {
            value = value.slice(0, 12);
            this.invoice_payment = value;
        }
    }
    /**
       * kiểm tra tối đa 12 ky tự cuả cash
       * @param value
       */
    checkMaxLengthCash(value) {
        if (parseFloat(value) > 999999999999) {
            value = value.slice(0, 12);
            this.invoice_cash = value;
        }
    }
    openModalOtherDiscount() {
        this.showModalOtherDiscount = true;
        this.point_validity = this.vhQueryCafe.getlocalCustomerPoints(this.invoices.getIdPartner());
    }
    handleOkOtherDiscount() {
        if (this.invoices.getPayment() < this.invoices.getDiscountOther())
            this.invoices.setPayment(0);
        this.showModalOtherDiscount = false;
        // this.updateInvoice.emit(true);
    }
    getDiscountOfCoupon(code) {
        if (code)
            this.vhQueryCafe.getCoupon_Code_Name_Release_byCode(code)
                .then((product_codes) => {
                if (product_codes && !this.product_codes.find(item => item.code == code)) {
                    switch (product_codes.status) {
                        case 1: {
                            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Phiếu này chưa được quy đổi"));
                            break;
                        }
                        case 3: {
                            if (new Date() < new Date(product_codes.date_expire)) {
                                this.product_codes.push(product_codes);
                                this.invoices.setDiscountCoupon(product_codes.value);
                                this.vhComponent.alertMessageDesktop("success", this.languageService.translate("Sử dụng coupon thành công"));
                            }
                            else {
                                this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Phiếu này đã hết hạn sử dụng"), 8000);
                            }
                            break;
                        }
                        case 4: {
                            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Phiếu này đã được sử dụng"), 8000);
                            break;
                        }
                    }
                }
                if (!product_codes)
                    this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Không tìm thấy phiếu này"), 8000);
                setTimeout(() => {
                    document.getElementById('coupon').getElementsByTagName("input")[0].value = '';
                }, 200);
            });
    }
    onCloseProductCode(item) {
        this.product_codes.splice(this.product_codes.findIndex(i => i._id == item._id), 1);
        this.invoices.setDiscountCoupon(-item.value);
    }
    calculatePoint2Money(value) {
        if (value <= this.point_validity) {
            this.value_discount_point = value;
            this.invoices.setDiscountPoint((value / this.customer_class.payment.points) * this.customer_class.payment.money);
            this.invoices.setUsePoint(value);
        }
        else {
            this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vượt quá giới hạn điểm cho phép"));
        }
    }
    /**
     * Lấy label của phương thức thanh toán
     * @param value value của phương thức thanh toán cần lấy label
     * @returns label của phương thức thanh toán
     */
    getPaymentTypeLabel(value) {
        var _a, _b, _c, _d;
        if (value[1]) {
            let wallet = this.vhQueryCafe.getlocalWallets().find(item => item._id == value[1]);
            if (wallet)
                return `${(_b = (_a = this.nzOptions.filter(item => item.value == value[0])) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.label} / ${wallet.name}`;
        }
        else {
            return (_d = (_c = this.nzOptions.filter(item => item.value == value[0])) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.label;
        }
    }
    /**
     * Tính lại bill detail cho Dịch vụ thời gian và setSubTotal() cho invoices
     */
    updateServiceTime() {
        if (this.isPreventEdit || !this.productService.isContainServiceTime(this.invoices))
            return;
        this.productService.updateServiceTimePriceInvoiceDetail(this.invoices.getInvoiceDetail(), this.invoices.getPriceType());
        this.invoices.setSubTotal();
    }
}
Bill1Component.ɵfac = function Bill1Component_Factory(t) { return new (t || Bill1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_4__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_cafe_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService)); };
Bill1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Bill1Component, selectors: [["app-bill1"]], inputs: { invoices: "invoices", debt: "debt", tax: "tax", payment: "payment", paymentType: "paymentType", product_gift_type7: "product_gift_type7", gotten_gift_type7: "gotten_gift_type7", isPreventEdit: "isPreventEdit", customer_class: "customer_class" }, outputs: { updateInvoice: "updateInvoice", showProductGiftType7: "showProductGiftType7" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 49, vars: 38, consts: [[1, "bill"], ["nz-col", "", "nzSpan", "24", 2, "display", "flex", "justify-content", "space-between"], ["style", "cursor: pointer;color: var(--ion-color-vh-green);", 3, "click", 4, "ngIf"], [1, "bill-area", "hideScrollbar"], ["nz-row", "", 2, "margin-top", "8px"], ["nz-col", "", "nzSpan", "12"], ["nz-col", "", "nzSpan", "12", 1, "text-end"], [4, "ngIf"], ["class", "sales-bills-content-discount", "style", "display: flex; justify-content: space-between; align-items: center; margin-top: 8px;", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["class", "sales-bills-content-total", "style", "display: flex; justify-content: space-between;align-items: center; margin-top: 8px;", "nz-col", "", "nzSpan", "24", 4, "ngIf"], ["nz-row", "", "style", "margin-top: 8px;", 4, "ngIf"], ["class", "bill-area-item", "style", "margin-top: 8px;", 4, "ngIf"], ["nz-col", "", "nzSpan", "12", 1, "payment"], ["class", "payment-price", 4, "ngIf"], ["maxlength", "15", "class", "payment-price", "id", "payment-price", "nz-input", "", 3, "value", "disabled", "blur", 4, "ngIf"], ["nz-col", "", "nzSpan", "12", "class", "text-end payment-price", 4, "ngIf"], ["nz-col", "", "nzSpan", "12", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", "id", "note", 1, "bill-area-item-note"], ["class", "nz-hover-border", "id", "invoice-note", "nz-input", "", 3, "placeholder", "nzAutosize", "value", "blur", 4, "ngIf"], ["nzWidth", "50vw", "nzCancelText", "", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [2, "cursor", "pointer", "color", "var(--ion-color-vh-green)", 3, "click"], ["nz-icon", "", "nzType", "plus", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-discount", 2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-top", "8px"], [2, "width", "auto"], ["class", "text-end", 4, "ngIf"], ["style", "width:50%;", "class", "border_bottom discount-price", "type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 3, "value", "blur", 4, "ngIf"], ["id", "percent-discount-price", "type", "number", "max", "100", "min", "0", "step", "1", "maxlength", "3", "nz-input", "", 1, "border_bottom", 2, "width", "60px", 3, "value", "blur"], ["percentDiscount", ""], [1, "text-end"], ["type", "text", "maxlength", "15", "id", "discount-price", "nz-input", "", 1, "border_bottom", "discount-price", 2, "width", "50%", 3, "value", "blur"], ["nz-col", "", "nzSpan", "24", 1, "sales-bills-content-total", 2, "display", "flex", "justify-content", "space-between", "align-items", "center", "margin-top", "8px"], ["nz-col", "", "nzSpan", "12", "class", "text-end", 4, "ngIf"], ["maxlength", "15", "id", "fee-price", "nz-input", "", 1, "fee-price", 3, "value", "blur"], [1, "bill-area-item", 2, "margin-top", "8px"], [1, "bill-area-item-value"], ["style", "min-width: 72px;", 3, "ngModel", "ngModelChange", 4, "ngIf"], [2, "min-width", "72px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzValue", "nzLabel"], ["nz-icon", "", "nzType", "gift", "nzTheme", "outline", 2, "font-size", "1rem", "margin-left", "8px", "cursor", "pointer", "color", "var(--ion-color-vh-green)", 3, "click"], [1, "payment-price"], ["maxlength", "15", "id", "payment-price", "nz-input", "", 1, "payment-price", 3, "value", "disabled", "blur"], ["nz-col", "", "nzSpan", "12", 1, "text-end", "payment-price"], [3, "nzOptions", "nzAllowClear", "ngModel", "nzPlaceHolder", "ngModelChange"], ["nz-col", "", "nzSpan", "12", "id", "cash"], ["style", "text-align: end;", "type", "text", "maxlength", "15", "nz-input", "", "class", "customerPay", 3, "disabled", "value", "blur", 4, "ngIf"], ["type", "text", "maxlength", "15", "nz-input", "", 1, "customerPay", 2, "text-align", "end", 3, "disabled", "value", "blur"], ["cash", ""], ["id", "invoice-note", "nz-input", "", 1, "nz-hover-border", 3, "placeholder", "nzAutosize", "value", "blur"], ["note", ""], ["nz-row", "", 1, "center-all-content"], ["nz-col", "", "nzSpan", "6"], ["nz-col", "", "nzSpan", "12", "id", "coupon", 2, "display", "flex"], ["nz-input", "", 2, "text-align", "left", 3, "placeholder", "keyup.enter"], ["coupon", ""], ["nz-button", "", "nzType", "primary", 2, "margin-left", "8px", 3, "click"], ["nz-col", "", "nzSpan", "6", 1, "text-end"], ["nz-row", ""], ["nz-col", "", "nzSpan", "18"], ["nzMode", "closeable", 3, "nzColor", "nzOnClose", 4, "ngFor", "ngForOf"], ["nz-row", "", 1, "mt-8", "beetween-all-content"], ["nzMode", "closeable", 3, "nzColor", "nzOnClose"], ["nz-row", "", 1, "center-all-content", "mt-8"], [2, "width", "100%", 3, "ngModel", "nzPlaceHolder", "nzMin", "nzMax", "nzStep", "ngModelChange", "keyup"], ["point", ""], ["nz-row", "", 1, "mt-8"], ["nz-col", "", "nzSpan", "14"], ["nz-col", "", "nzSpan", "10", 1, "text-end"]], template: function Bill1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, Bill1Component_span_5_Template, 4, 3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, Bill1Component_ng_container_13_Template, 10, 7, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, Bill1Component_div_14_Template, 6, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, Bill1Component_div_15_Template, 6, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, Bill1Component_div_16_Template, 6, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, Bill1Component_div_17_Template, 6, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, Bill1Component_div_18_Template, 10, 7, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, Bill1Component_ng_container_30_Template, 2, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, Bill1Component_span_32_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, Bill1Component_input_33_Template, 1, 2, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, Bill1Component_div_34_Template, 6, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, Bill1Component_span_39_Template, 2, 1, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, Bill1Component_div_40_Template, 3, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, Bill1Component_div_41_Template, 7, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](42, Bill1Component_div_42_Template, 6, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, Bill1Component_span_44_Template, 2, 1, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, Bill1Component_textarea_45_Template, 3, 6, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "nz-modal", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("nzVisibleChange", function Bill1Component_Template_nz_modal_nzVisibleChange_46_listener($event) { return ctx.showModalOtherDiscount = $event; })("nzOnCancel", function Bill1Component_Template_nz_modal_nzOnCancel_46_listener() { ctx.updateServiceTime(); return ctx.showModalOtherDiscount = false; })("nzOnOk", function Bill1Component_Template_nz_modal_nzOnOk_46_listener() { ctx.updateServiceTime(); return ctx.handleOkOtherDiscount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, Bill1Component_ng_container_48_Template, 25, 16, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 26, "Payment information"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isPreventEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 28, "SubTotal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoices.getSubTotal()));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_discount"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invoices.getDiscountBill());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invoices.getDiscountPoint());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.invoices.getDiscountCoupon());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_fee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_tax"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 30, "Total"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.vhAlgorithm.vhcurrencyunit(ctx.invoices.getTotalATax()));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 32, "Pay"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.product_gift_type7.length && !ctx.gotten_gift_type7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPreventEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isPreventEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_rest"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](38, 34, "Payment method"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPreventEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isPreventEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_cash"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vhAuth.localStorageGET("show_cash"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPreventEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isPreventEdit);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nzVisible", ctx.showModalOtherDiscount)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 36, "Other payment"));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_7__.NzModalContentDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_9__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzInputDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, ng_zorro_antd_cascader__WEBPACK_IMPORTED_MODULE_13__.NzCascaderComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_10__.NzAutosizeDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_16__.NzTagComponent, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_17__.NzInputNumberComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: [".bill[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 8px;\n  font-size: 0.9rem;\n  width: 100%;\n}\n.bill-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bold;\n  padding-bottom: 4px;\n}\n.bill-area[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.bill-area-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 32px;\n  margin-top: 8px;\n}\n.bill-area-item-title.payment[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n}\n.bill-area-item-payment_type[_ngcontent-%COMP%], .bill-area-item-note[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\ninput[_ngcontent-%COMP%] {\n  text-align: right;\n}\ninput.payment-price[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1rem;\n  font-weight: bold;\n}\nspan.payment-price[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1rem;\n  font-weight: bold;\n  display: block;\n  width: 100%;\n  text-align: right;\n}\n  .keyboardroot {\n  width: 350px !important;\n  right: 0 !important;\n}\n  #note > app-keyboard > div {\n  position: fixed !important;\n  bottom: 10%;\n  left: 15% !important;\n  width: 55% !important;\n}\n  #cash > app-keyboard > div {\n  position: fixed;\n  bottom: 10%;\n  right: 15% !important;\n}\n  .ant-popover {\n  max-width: 50vh;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n.mt-8[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.text-end[_ngcontent-%COMP%] {\n  text-align: end;\n}\n.beetween-all-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGwxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDSjtBQUFJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFBSTtFQUVJLGdCQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRVo7QUFEWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUdoQjtBQUNZO0VBRUksY0FBQTtBQUFoQjtBQUtBO0VBTUksaUJBQUE7QUFQSjtBQUVJO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBUjtBQUtBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRko7QUFLQTtFQUNJLHVCQUFBO0VBR0EsbUJBQUE7QUFKSjtBQU9BO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUpKO0FBUUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBTEo7QUFRQTtFQUNJLGVBQUE7QUFMSjtBQVFBLGdDQUFBO0FBQ0E7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBTEY7QUFRQSxZQUFBO0FBQ0E7RUFDRSwwQkFBQTtBQUxGO0FBT0E7RUFDSSxlQUFBO0FBSko7QUFNQTtFQUNJLGVBQUE7QUFISjtBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFGSiIsImZpbGUiOiJiaWxsMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIH1cclxuICAgICYtYXJlYSB7XHJcbiAgICAgICAgLy8gbWF4LWhlaWdodDogNDI1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAmLWl0ZW0ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgICAgJi10aXRsZS5wYXltZW50IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgJi1wYXltZW50X3R5cGUsXHJcbiAgICAgICAgICAgICYtbm90ZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pbnB1dCB7XHJcbiAgICAmLnBheW1lbnQtcHJpY2Uge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5zcGFuLnBheW1lbnQtcHJpY2Uge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5rZXlib2FyZHJvb3R7XHJcbiAgICB3aWR0aDogMzUwcHggIWltcG9ydGFudDtcclxuICAgIC8vIHJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAjbm90ZSA+YXBwLWtleWJvYXJkPmRpdntcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiAxMCU7XHJcbiAgICBsZWZ0OiAxNSUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA1NSUgIWltcG9ydGFudDtcclxufVxyXG4gXHJcblxyXG46Om5nLWRlZXAgI2Nhc2ggPmFwcC1rZXlib2FyZD5kaXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDEwJTtcclxuICAgIHJpZ2h0OiAxNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hbnQtcG9wb3ZlciB7XHJcbiAgICBtYXgtd2lkdGg6IDUwdmg7XHJcbn1cclxuXHJcbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEZpcmVmb3ggKi9cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG4ubXQtOHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4udGV4dC1lbmR7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuLmJlZXR3ZWVuLWFsbC1jb250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0iXX0= */"] });


/***/ }),

/***/ 44293:
/*!**********************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/bill1/bill1.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bill1Module": () => (/* binding */ Bill1Module)
/* harmony export */ });
/* harmony import */ var _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../keyboard/keyboard.module */ 9657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _bill1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bill1.component */ 69775);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);







class Bill1Module {
}
Bill1Module.ɵfac = function Bill1Module_Factory(t) { return new (t || Bill1Module)(); };
Bill1Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Bill1Module });
Bill1Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Bill1Module, { declarations: [_bill1_component__WEBPACK_IMPORTED_MODULE_1__.Bill1Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule], exports: [_bill1_component__WEBPACK_IMPORTED_MODULE_1__.Bill1Component] }); })();


/***/ }),

/***/ 51683:
/*!*******************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/cart1.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart1Component": () => (/* binding */ Cart1Component)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var src_app_cafe_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/components/print/sales/sales-a4/sales-a4.component */ 62241);
/* harmony import */ var src_app_cafe_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/components/print/sales/sales-a5/sales-a5.component */ 12365);
/* harmony import */ var src_app_cafe_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/components/print/sales/sales-k80-col4/sales-k80-col4.component */ 17308);
/* harmony import */ var src_app_cafe_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cafe/components/print/sales/sales-k80-col3/sales-k80-col3.component */ 34672);
/* harmony import */ var src_app_cafe_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cafe/components/print/sales/sales-k57-col3/sales-k57-col3.component */ 40808);
/* harmony import */ var src_app_cafe_interface_vh_order_invoice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cafe/interface/vh-order-invoice */ 25500);
/* harmony import */ var src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/cafe/interface/vh-type */ 162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/cafe/components/vh-component/vh-component */ 4866);
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/message */ 91804);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var src_app_cafe_services_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/cafe/services/product.service */ 28506);
/* harmony import */ var src_app_cafe_services_bill_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/cafe/services/bill.service */ 91130);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _bill_detail1_bill_detail1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bill-detail1/bill-detail1.component */ 16002);
/* harmony import */ var _info_bill1_info_bill1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./info-bill1/info-bill1.component */ 71720);
/* harmony import */ var _customer1_customer1_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./customer1/customer1.component */ 48807);
/* harmony import */ var _bill1_bill1_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bill1/bill1.component */ 69775);
/* harmony import */ var _payment_button1_payment_button1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./payment-button1/payment-button1.component */ 40874);
/* harmony import */ var ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ng-zorro-antd/table */ 4316);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/switch */ 17318);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


































const _c0 = function (a0) {
  return {
    "grid-template-rows": a0
  };
};

const _c1 = function (a0, a1) {
  return [a0, a1];
};

const _c2 = function (a0) {
  return [a0];
};

function Cart1Component_nz_layout_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "nz-layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "nz-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "app-bill-detail1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("showModalChangePriceType", function Cart1Component_nz_layout_0_Template_app_bill_detail1_showModalChangePriceType_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r4.showModalChangePriceType = true;
    })("checkPromotion", function Cart1Component_nz_layout_0_Template_app_bill_detail1_checkPromotion_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r6.getPromotions();
    })("deletePromotion", function Cart1Component_nz_layout_0_Template_app_bill_detail1_deletePromotion_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r7.deletePromotions();
    })("updateInvoice", function Cart1Component_nz_layout_0_Template_app_bill_detail1_updateInvoice_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r8.updateInvoice($event);
    })("goBack", function Cart1Component_nz_layout_0_Template_app_bill_detail1_goBack_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r9.invoices.getInvoiceDetail().length ? ctx_r9.goBack() : ctx_r9.deleteInvoice(true);
    })("showProductGift", function Cart1Component_nz_layout_0_Template_app_bill_detail1_showProductGift_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r10.showProductGift = true;
    })("showProductGiftType7", function Cart1Component_nz_layout_0_Template_app_bill_detail1_showProductGiftType7_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r11.showProductGiftType7 = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "app-info-bill1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("updateInvoice", function Cart1Component_nz_layout_0_Template_app_info_bill1_updateInvoice_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r12.updateInvoice($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "app-customer1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("changeDebt", function Cart1Component_nz_layout_0_Template_app_customer1_changeDebt_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r13.debt = $event;
    })("updateInvoice", function Cart1Component_nz_layout_0_Template_app_customer1_updateInvoice_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r14.updateInvoice($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "app-bill1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("updateInvoice", function Cart1Component_nz_layout_0_Template_app_bill1_updateInvoice_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r15.updateInvoice($event);
    })("showProductGiftType7", function Cart1Component_nz_layout_0_Template_app_bill1_showProductGiftType7_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r16.showProductGiftType7 = true;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "app-payment-button1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("printAllLabel", function Cart1Component_nz_layout_0_Template_app_payment_button1_printAllLabel_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r17.printAllLabel = $event;
    })("printKitchenAll", function Cart1Component_nz_layout_0_Template_app_payment_button1_printKitchenAll_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r18.handleEmit_printKitchenAll($event);
    })("payment", function Cart1Component_nz_layout_0_Template_app_payment_button1_payment_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r19.saveInvoice($event);
    })("deleteInvoice", function Cart1Component_nz_layout_0_Template_app_payment_button1_deleteInvoice_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r20.deleteInvoice($event);
    })("testPrint", function Cart1Component_nz_layout_0_Template_app_payment_button1_testPrint_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r5);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r21.handlePrintTest();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzSpan", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("stamp", ctx_r0.stamp)("invoices", ctx_r0.invoices)("checkPrinterKitchen", ctx_r0.checkPrinterKitchen)("printer", ctx_r0.printer)("printAllLabelEvent", ctx_r0.printAllLabel)("printKitchenAll", ctx_r0.printKitchenAll)("tableInfo", ctx_r0.tableInfo)("default_price_type", ctx_r0.default_price_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzSpan", 7)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](28, _c0, ctx_r0.checkPrinterKitchen && ctx_r0.stamp ? "calc(100% - 155px) 175px" : "calc(100% - 115px) 115px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("invoices", ctx_r0.invoices)("employeeID", ctx_r0.invoices.getIdEmployee())("tableInfo", ctx_r0.tableInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("invoices", ctx_r0.invoices)("customerID", ctx_r0.invoices.getIdPartner())("total_earning_points", ctx_r0.getTotalEarningPoint());
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("invoices", ctx_r0.invoices)("debt", ctx_r0.debt)("tax", ctx_r0.invoices.getTax())("payment", ctx_r0.invoices.getPayment())("paymentType", ctx_r0.invoices.getPaymentType() == 3 ? _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction2"](30, _c1, ctx_r0.invoices.getPaymentType(), ctx_r0.invoices.getIdWallet()) : _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](33, _c2, ctx_r0.invoices.getPaymentType()))("customer_class", ctx_r0.customer_class)("product_gift_type7", ctx_r0.product_gift_type7)("gotten_gift_type7", ctx_r0.gotten_gift_type7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("stamp", ctx_r0.stamp)("invoices", ctx_r0.invoices)("statusInvoice", ctx_r0.statusInvoice);
  }
}

function Cart1Component_ng_container_2_ng_container_21_ng_container_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r28 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate3"](" ", data_r28.name, "(", data_r28.unit ? data_r28.unit : ctx_r26.getUnit(data_r28.units, data_r28.ratio), ") x", data_r28.quantity, " ");
  }
}

function Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_4_nz_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "date");
  }

  if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r33.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](1, 3, element_r33.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzValue", element_r33._id);
  }
}

function Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "nz-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_4_Template_nz_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r36);
      const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      return data_r29.id_lotproduct = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_4_nz_option_6_Template, 2, 6, "nz-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", data_r29.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", data_r29.lots);
  }
}

function Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_nz_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "date");
  }

  if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r42.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](1, 3, element_r42.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzValue", element_r42._id);
  }
}

function Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "nz-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_Template_nz_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r45);
      const combo_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      return combo_r39.id_lotproduct = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_nz_option_6_Template, 2, 6, "nz-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const combo_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", combo_r39.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", combo_r39.lots);
  }
}

function Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_ng_container_3_Template, 7, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const combo_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("- ", combo_r39.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", combo_r39.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r38.getUnit(combo_r39.units, combo_r39.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](combo_r39.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r38.vhAlgorithm.vhcurrencyunit(combo_r39.price), " ");
  }
}

function Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_15_tr_1_Template, 11, 5, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", data_r29.combos);
  }
}

function Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_4_Template, 7, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "nz-input-number", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_Template_nz_input_number_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r49);
      const data_r29 = restoredCtx.$implicit;
      return data_r29.quantity = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "nz-switch", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_Template_nz_switch_ngModelChange_14_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r49);
      const data_r29 = restoredCtx.$implicit;
      return data_r29.choose = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_ng_container_15_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r29 = ctx.$implicit;
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", data_r29.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", data_r29.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r27.getUnit(data_r29.units, data_r29.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", data_r29.quantity)("nzMin", 0)("nzMax", data_r29.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r27.vhAlgorithm.vhcurrencyunit(data_r29.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r27.vhAlgorithm.vhcurrencyunit(data_r29.price_origin));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", data_r29.choose)("nzDisabled", ctx_r27.checkDisableChooseProductGift(item_r24) && !data_r29.choose);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", data_r29.ptype == 5);
  }
}

function Cart1Component_ng_container_2_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](13, Cart1Component_ng_container_2_ng_container_21_ng_container_1_span_13_Template, 3, 3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](15, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](16, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](19, Cart1Component_ng_container_2_ng_container_21_ng_container_1_ng_container_19_Template, 16, 11, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 7, "_Selected gift quantity"), ": ", item_r24.promotions_maximum, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](11, 9, "List of purchased products"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", item_r24.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](18, 11, "List of gifted products"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", item_r24.products_gift);
  }
}

function Cart1Component_ng_container_2_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Cart1Component_ng_container_2_ng_container_21_ng_container_1_Template, 20, 13, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r24.pmtype == 6);
  }
}

const _c3 = function () {
  return {
    y: "400px"
  };
};

function Cart1Component_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "nz-table", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](21, Cart1Component_ng_container_2_ng_container_21_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](2);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzData", ctx_r1.invoices.getInvoiceDetail())("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](19, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](10, 11, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](13, 13, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](16, 15, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](19, 17, "Functions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _r22.data);
  }
}

function Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_4_nz_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "date");
  }

  if (rf & 2) {
    const element_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r62.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](1, 3, element_r62.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzValue", element_r62._id);
  }
}

function Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "nz-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_4_Template_nz_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r65);
      const data_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      return data_r58.id_lotproduct = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_4_nz_option_6_Template, 2, 6, "nz-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", data_r58.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", data_r58.lots);
  }
}

function Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_nz_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "nz-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](1, "date");
  }

  if (rf & 2) {
    const element_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate2"]("nzLabel", "", element_r71.lot_number, " - HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](1, 3, element_r71.date_exp, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzValue", element_r71._id);
  }
}

function Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "nz-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_Template_nz_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r74);
      const combo_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
      return combo_r68.id_lotproduct = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](6, Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_nz_option_6_Template, 2, 6, "nz-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const combo_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 4, "Lot number"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 6, "Select product batch"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", combo_r68.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", combo_r68.lots);
  }
}

function Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_ng_container_3_Template, 7, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const combo_r68 = ctx.$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("- ", combo_r68.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", combo_r68.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r67.getUnit(combo_r68.units, combo_r68.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](combo_r68.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r67.vhAlgorithm.vhcurrencyunit(combo_r68.price), " ");
  }
}

function Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_15_tr_1_Template, 11, 5, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", data_r58.combos);
  }
}

function Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_4_Template, 7, 8, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "nz-input-number", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_Template_nz_input_number_ngModelChange_8_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r78);
      const data_r58 = restoredCtx.$implicit;
      return data_r58.quantity = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "del");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "nz-switch", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_Template_nz_switch_ngModelChange_14_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r78);
      const data_r58 = restoredCtx.$implicit;
      return data_r58.choose = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_ng_container_15_Template, 2, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const data_r58 = ctx.$implicit;
    const item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", data_r58.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", data_r58.lots);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r57.getUnit(data_r58.units, data_r58.ratio));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", data_r58.quantity)("nzMin", 0)("nzMax", data_r58.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", ctx_r57.vhAlgorithm.vhcurrencyunit(data_r58.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](ctx_r57.vhAlgorithm.vhcurrencyunit(data_r58.price_origin));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", data_r58.choose)("nzDisabled", ctx_r57.checkDisableChooseProductGift(item_r55) && !data_r58.choose);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", data_r58.ptype == 5);
  }
}

function Cart1Component_ng_container_4_ng_container_21_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](7, Cart1Component_ng_container_4_ng_container_21_ng_container_1_ng_container_7_Template, 16, 11, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](item_r55.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 4, "_Selected gift quantity"), ": ", item_r55.promotions_maximum, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", item_r55.products_gift);
  }
}

function Cart1Component_ng_container_4_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, Cart1Component_ng_container_4_ng_container_21_ng_container_1_Template, 8, 6, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const item_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", item_r55.products_gift);
  }
}

function Cart1Component_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "nz-table", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](21, Cart1Component_ng_container_4_ng_container_21_Template, 2, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](2);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzData", ctx_r2.product_gift_type7)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](19, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 9, "Product name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](10, 11, "Unit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](13, 13, "Quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](16, 15, "Unit price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](19, 17, "Functions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _r53.data);
  }
}

function Cart1Component_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "nz-radio-group", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function Cart1Component_ng_container_8_Template_nz_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r83);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
      return ctx_r82.default_price_type = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r3.default_price_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzValue", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 5, "Selling price"), " 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzValue", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 7, "Selling price"), " 2");
  }
}

class Cart1Component {
  constructor(vhAlgorithm, vhQueryCafe, router, vhAuth, languageService, vhComponent, cdRef, mess, nzModalService, plaform, vhQuery, productService, vhEinvoice, billService) {
    this.vhAlgorithm = vhAlgorithm;
    this.vhQueryCafe = vhQueryCafe;
    this.router = router;
    this.vhAuth = vhAuth;
    this.languageService = languageService;
    this.vhComponent = vhComponent;
    this.cdRef = cdRef;
    this.mess = mess;
    this.nzModalService = nzModalService;
    this.plaform = plaform;
    this.vhQuery = vhQuery;
    this.productService = productService;
    this.vhEinvoice = vhEinvoice;
    this.billService = billService;
    this.invoices = new src_app_cafe_interface_vh_order_invoice__WEBPACK_IMPORTED_MODULE_6__.VhOrderInvoices();
    this.printAllLabel = false;
    this.checkPrinterKitchen = {};
    this.checkPrinter = false; // cho phép nợ hay không

    this.debt = false;
    this.printKitchenAll = false; // biến nhận giá trị output printKitchenAll từ component payment-button1
    // thông tin bàn đang được đặt

    this.tableInfo = ''; // trạng thái

    this.statusInvoice = {
      updating: false,
      deleting: false
    };
    this.list_earning_point_bills = [];
    this.list_earning_points_products = [];
    this.default_price_type = 1;
    this.earning_point = 0;
    this.isExit = false;
    this.isGotPromotion = false;
    this.showProductGift = false;
    this.product_gift_type7 = [];
    this.showProductGiftType7 = false;
    this.gotten_gift_type7 = false;
    this.bill_details_pmtype_7 = [];
    this.showModalChangePriceType = false;
    /* ----------------------------------------------------------- HÓA ĐƠN ĐIỆN TỬ ---------------------------------------------------------- */

    this.cqt_invoice_auto_sign = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').cqt_invoice_auto_sign;
    this.cqt_submit_invoice_immediately = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').cqt_submit_invoice_immediately;
    let dataTrans = this.router.getCurrentNavigation().extras.state;
    if (dataTrans.dataRestore) this.dataRestore = dataTrans.dataRestore;
    this.initInvoice(dataTrans);
  }

  ngOnInit() {
    if (this.plaform.is('electron')) {
      // this.vhDisplayLEDService.refreshLocalDisplayLEDs()
      //   .then((led) => {
      // console.log("led", led)
      console.log('connectDisplayLEDScreens');
      this.vhQueryCafe.connectDisplayLEDScreens(); // })
    }
  }

  ngOnDestroy() {
    this.vhQueryCafe.closeSyncOpeningBill(); // this.observableSyncOpeningBill.unsubscribe();

    if (this.plaform.is('electron')) this.vhQueryCafe.disconnectDisplayLEDScreens();
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }
  /**Pop up báo khi phát sinh lỗi
   * @param err thông tin lỗi
   */


  alertErr(err) {
    this.vhComponent.alertMessageDesktop('error', this.languageService.translate('Connect error'));
    this.goBack();
  }
  /**Hàm trở về trang khu vực order
   * @param reset: reset quyền truy cập
   * @default reset = true
   */


  goBack(reset = true) {
    var _this = this;

    return (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.isExit = true;

      if (_this.dataRestore['searchValueToday'] && _this.dataRestore['filterTypeToday']) {
        delete _this.dataRestore['searchValueToday'];
        delete _this.dataRestore['filterTypeToday'];
      }

      _this.router.navigate(['/cafe/cafe-desktop'], {
        state: _this.dataRestore
      });
    })();
  }
  /**Render food name
   * @param id_prod: id product
   * @param id_subProd: id subproduct
   */


  renderNameFood(id_prod, id_subProd) {
    let food = this.vhQueryCafe.getlocalProduct(id_prod);
    let subFood;
    if (id_subProd) subFood = food.subs.find(item => item._id == id_subProd);
    return `${food ? food.name : ''} ${subFood ? '(' + subFood.name + ')' : ''}`;
  }
  /**Render các thành phần combo
   * @package arr: mảng combos
   */


  getSubCombo(arr) {
    let subName = '';
    arr.forEach(item => {
      if (subName.length) subName += `, ${item.name} ${'(' + this.getUnit(item.units, item.ratio) + ')'} ${'x' + item.quantity}`;else subName += `${item.name} ${item.unit ? '(' + item.unit + ')' : ''} ${'x' + item.quantity}`;
    });
    return subName;
  }
  /**Khởi tạo hóa đơn
   * @param dataTrans: dữ liệu state
   */


  initInvoice(dataTrans) {
    this.invoices.setIdTable(dataTrans['id_table']);
    this.invoices.setIdEmployee(this.vhAuth.getUser()._id);
    this.invoices.setIdArea(this.dataRestore['id_area']); // lấy thuế

    let tax = this.vhQueryCafe.getlocalTaxs().find(tax => tax.status && tax.default);
    if (tax) this.invoices.setTax(parseFloat(tax.value));

    if (dataTrans.id_bill) {
      // bàn đã sinh bill
      Promise.all([this.vhQueryCafe.getBill(dataTrans.id_bill), this.vhQueryCafe.getBill_details_byId_bill(dataTrans.id_bill), this.vhComponent.showLoading('', 'transparent-loading', null, 0, false), this.vhQuery.getDocsByFields("barcode_designs", {
        id_branch: {
          $eq: this.vhQueryCafe.getDefaultBranch()._id
        },
        default: {
          $eq: true
        }
      }), this.vhQueryCafe.getEarningPointsBills(), this.vhQueryCafe.getEarningPointsProducts()]).then(([bill, billDetail, loading, label, earning_point_bills, earning_points_products]) => {
        if (label['length'] && label[0].status) this.stamp = label[0];
        this.list_earning_point_bills = earning_point_bills;
        this.list_earning_points_products = earning_points_products;

        if (!bill) {
          this.vhComponent.alertMessage('', '', this.languageService.translate('The invoice is not existed'), 'OK').then(() => this.goBack(false));
          return;
        }

        this.invoices = new src_app_cafe_interface_vh_order_invoice__WEBPACK_IMPORTED_MODULE_6__.VhOrderInvoices(bill, this.vhAlgorithm.sortDatebyDESC(billDetail, 'time_start_order'), this.vhQueryCafe, this.plaform);
        this.getClassAndProgram(); // kiểm tra cho phép nợ

        this.debt = this.invoices.getIdPartner() == 'id_retail' ? false : this.vhQueryCafe.getlocalCustomer(this.invoices.getIdPartner());
        this.observableCheckBill(bill['_id']);
        this.default_price_type = this.invoices.getPriceType() ? this.invoices.getPriceType() : 1;
      }).catch(err => this.alertErr(err)).finally(() => this.vhComponent.hideLoading(0));
    } else {
      this.goBack();
    } // lấy thông tin bàn


    if (this.invoices.getIdTable() == 'go_home') {
      this.tableInfo = this.languageService.translate('Take away');
    } else {
      this.tableInfo = `${this.vhQueryCafe.getlocalArea(this.invoices.getIdArea()).name} - ${this.vhQueryCafe.getlocalTable(this.invoices.getIdTable()).name}`;
    } // kiểm tra máy in


    let printer = this.vhQueryCafe.getLocalPrintPage('page_desktop_sales');
    this.printer = printer ? printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)] : null;

    if (this.printer) {
      this.checkPrinter = this.printer.enable;
    }

    let printer_kitchen = this.vhQueryCafe.getLocalPrintPage('page_desktop_kitchen');
    this.checkPrinterKitchen = printer_kitchen ? printer_kitchen.print_sizes[printer_kitchen.print_sizes.findIndex(e => e._id == printer_kitchen.print_size_default)] : {
      enable: false
    };
  } // sự kiện subscribe bill dc mở ở thiết bị khác


  observableCheckBill(id_bill) {
    console.log('id_bill', id_bill);
    this.vhQueryCafe.observableSyncOpeningBill(id_bill, 5).subscribe(rsp => {
      console.log('observableSyncOpeningBill', rsp);
      this.vhQueryCafe.closeSyncOpeningBill();

      if (rsp.vcode === 0) {
        this.nzModalService.confirm({
          nzTitle: this.languageService.translate('Hóa đơn này đang được cập nhật ở thiết bị khác!'),
          nzOkText: 'Thoát',
          nzOnOk: () => {
            this.goBack();
          },
          nzCancelText: null,
          nzOnCancel: () => {
            this.goBack();
          }
        });
      } else if (rsp.vcode === 1) {
        this.nzModalService.confirm({
          nzTitle: this.languageService.translate('Hóa đơn này đã được thanh toán ở thiết bị khác!'),
          nzOkText: 'Thoát',
          nzOnOk: () => {
            this.goBack();
          },
          nzCancelText: null,
          nzOnCancel: () => {
            this.goBack();
          }
        });
      } else if (rsp.vcode === 2) {
        this.vhComponent.alertMessageDesktop('success', this.languageService.translate('Hóa đơn đã bị xóa!'));
        this.goBack();
      }
    }, error => {
      console.log(error);
    });
  }
  /**Tiến hành cập nhặt hóa đơn
   * @param ev: event trả về từ output
   */


  updateInvoice(ev) {
    this.statusInvoice.updating = true; // tiến hành cập nhật
    // kiểm tra bill đang có km thì destroy km trước khi luu

    if (this.invoices.isPromotion()) {
      this.deletePromotions();
      this.statusInvoice.updating = false;
    } else {
      this.vhQueryCafe.updateBill(this.invoices.getID(), this.invoices.getCreateUpdateInvoice(5)).then(id => {
        console.log('update invoice: ', id);
        this.getClassAndProgram();
      }).catch(err => console.error(err)).finally(() => this.statusInvoice.updating = false);
    }
  }
  /**
   * hàm get điểm tích lũy theo hóa đơn
   * 1. get hạng khách hàng
   * 2. từ hạng khách hàng get tích điểm theo bill
   * 3. check các điều kiện của chương trình
   * a check sản phẩm khuyến mãi include_promotion_product
   * b  check giảm giá/ chiết khấu include_discount
   * c check thanh toán = điểm thưởng include_paid_points
   * d check phí  include_fee
   * e check thuế include_tax
   * @returns 0 | number
   */


  getEarningBill() {
    if (this.program_bill && this.invoices.getSubTotal() > this.program_bill.bill_total_minimum) {
      let subTotal = this.invoices.getSubTotal();

      if (!this.program_bill.include_promotion_product) {
        // ko tích điểm sp có km =>  tính lại subTotal
        subTotal = this.getSubTotalNotPromotion();
        if (this.program_bill.include_discount) subTotal = subTotal - this.invoices.getDiscount() - this.invoices.getDiscountBill();
        if (this.program_bill.include_paid_points && this.invoices.getDiscountPoint()) subTotal = subTotal - this.invoices.getDiscountPoint();
        if (this.program_bill.include_fee) subTotal += this.invoices.getFee();
        if (this.program_bill.include_tax) subTotal += subTotal * (this.invoices.getTax() / 100);
        return (subTotal - subTotal % this.program_bill.exchange.money) / this.program_bill.exchange.money * this.program_bill.exchange.points;
      } else {
        subTotal = this.invoices.getSubTotal();
        if (this.program_bill.include_discount) subTotal = subTotal - this.invoices.getDiscount() - this.invoices.getDiscountBill();
        if (this.program_bill.include_paid_points && this.invoices.getDiscountPoint()) subTotal = subTotal - this.invoices.getDiscountPoint();
        if (this.program_bill.include_fee) subTotal += this.invoices.getFee();
        if (this.program_bill.include_tax) subTotal += subTotal * (this.invoices.getTax() / 100);
        return (subTotal - subTotal % this.program_bill.exchange.money) / this.program_bill.exchange.money * this.program_bill.exchange.points;
      }
    } else return 0;
  }
  /**
   * hàm này trả về tổng tiền của sản phẩm ko có chương trình khuyến mãi
   * return : number
   */


  getSubTotalNotPromotion() {
    return this.invoices.getInvoiceDetail().filter(item => !item.id_promotion).reduce((prev, next) => prev + next.quantity * next.price, 0);
  }
  /**
   * hàm này trả về tổng tiền của sản phẩm  ko có chương trình khuyến mãi thuộc chương trình tích điểm sản phẩm
   * return : number
   */


  getSubTotalNotPromotionOFProduct(products_of_program_earnig_product) {
    return this.invoices.getInvoiceDetail().filter(item => item.price_origin == item.price && products_of_program_earnig_product.find(i => i == item.id_product || i == item.id_subproduct)).reduce((prev, next) => prev + next.quantity * next.price, 0);
  }
  /**
   * hàm này trả về tổng điểm được tích của tất cả sản phẩm
   * @returns 0 | number
   */


  getEarningProduct(products) {
    if (this.program_product) {
      let subTotal = 0;

      if (!this.program_product.include_promotion_product) {
        // tích điểm sp ko có km
        subTotal = this.getSubTotalNotPromotionOFProduct(this.program_product.products);
        return (subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money * this.program_product.exchange.points;
      } else {
        // tích điểm sp có km =>  tính lại subTotal
        subTotal = products.filter(item => item.price_origin == item.price && this.program_product.products.find(i => i == item.id_product)).reduce((prev, next) => prev + next.quantity * next.price, 0);
        return (subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money * this.program_product.exchange.points;
      }
    } else return 0;
  }
  /**
   * hàm này để gán chương trình tich diem hóa đơn và sản phẩm của khách hàng
   */


  getClassAndProgram() {
    let customer = this.vhQueryCafe.getlocalCustomer(this.invoices.getIdPartner());
    this.customer_class = this.vhQueryCafe.getlocalCustomerClasss().find(item => item._id == customer.id_customer_class);

    if (this.customer_class && this.customer_class.id_earning_points_bill) {
      this.program_bill = this.list_earning_point_bills.find(item => item._id == this.customer_class.id_earning_points_bill);
    }

    if (this.customer_class && this.customer_class.id_earning_points_product) {
      this.program_product = this.list_earning_points_products.find(item => item._id == this.customer_class.id_earning_points_product);
    }

    if (!this.customer_class) {
      this.program_bill = null;
      this.program_product = null;
    }
  }
  /**
   * hàm này trả về tổng điểm được tích của đơn và sản phẩm
   * @returns 0 | number
   */


  getTotalEarningPoint() {
    this.earning_point = this.getEarningProduct(this.invoices.getInvoiceDetail()) + this.getEarningBill();
    return this.earning_point ? this.earning_point : 0;
  }
  /**
   * hàm này trả về điểm được tích của sản phẩm được thêm
   * @param product sản phẩm được thêm
   * @returns 0 | number
   */


  getTotalEarningPointProduct(product, promotion) {
    if (this.program_product) {
      let subTotal = 0;

      if (!this.program_product.include_promotion_product && promotion) {
        // tích điểm sp có km =>  tính lại subTotal
        subTotal = this.program_product.products.find(i => i == product._id) ? product.price : 0;
        return (subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money * this.program_product.exchange.points;
      } else {
        subTotal = this.program_product.products.find(i => i == product._id) ? product.price : 0;
        return (subTotal - subTotal % this.program_product.exchange.money) / this.program_product.exchange.money * this.program_product.exchange.points;
      }
    } else return 0;
  }
  /** Tiến hành xóa hóa đơn
   */


  deleteProcess() {
    if (this.invoices.getIdTable() == 'go_home') {
      return Promise.all([this.vhQueryCafe.deleteBill_Billdetail(this.invoices.getID())]);
    } else {
      this.vhQueryCafe.closeSyncOpeningBill();
      return Promise.all([this.vhQueryCafe.deleteBill_Billdetail(this.invoices.getID()), this.vhQueryCafe.updateTable(this.invoices.getIdTable(), {
        status: false
      })]);
    }
  }
  /**Xóa hóa đơn
   * @param ev: event trả về từ output
   */


  deleteInvoice(ev) {
    if (ev) {
      this.vhQueryCafe.closeSyncOpeningBill();
      this.statusInvoice.deleting = true; // tiến hành xóa

      this.deleteProcess().then(id => console.log('delete invoice: ', id)).catch(err => {
        console.error(err);
        this.vhComponent.showToast(2000, this.languageService.translate('Delete fail'), 'alert-toast');
      }).finally(() => {
        this.statusInvoice.deleting = false;
        this.vhComponent.alertMessageDesktop('success', this.languageService.translate('Invoice deleted successfully'));
        this.goBack();
      });
    }
  }
  /**Save hóa đơn */


  createProcess() {
    this.productService.updateAllServiceTimeToPause(this.invoices.getInvoiceDetail());

    if (this.invoices.getIdTable() == 'go_home') {
      return Promise.all([this.vhQueryCafe.updateBill_Billdetail(this.invoices.getID(), this.invoices.getCreateUpdateInvoice(1), this.invoices.getCreateUpdateInvoiceDetail())]);
    } else {
      return Promise.all([this.vhQueryCafe.updateBill_Billdetail(this.invoices.getID(), this.invoices.getCreateUpdateInvoice(1), this.invoices.getCreateUpdateInvoiceDetail()), this.vhQueryCafe.updateTable(this.invoices.getIdTable(), {
        status: false
      })]);
    }
  }
  /** Thanh toán hóa đơn
   * @param print: cho phép in hóa đơn hay k?
   */


  saveInvoice(print) {
    var _this2 = this;

    if (!this.vhAuth.checkLocalMyPermissionName('sales_enable_payment')) {
      this.vhComponent.alertMessageDesktop('error', this.languageService.translate('You do not have this rights'));
      return;
    }

    if (this.getTotalEarningPoint() || this.invoices.getUsePoint()) {
      let earned_points = this.getTotalEarningPoint() - this.invoices.getUsePoint();
      this.vhQueryCafe.updateCustomer_byEarnedPoints(this.invoices.getIdPartner(), earned_points);
      this.invoices.setEarningPointBill(this.getTotalEarningPoint());
    } // if (print == "print") {


    if (this.checkPrinter) {
      this.statusInvoice['payment'] = true;
      const bill = Object.assign({}, this.invoices);
      const invoiceTemp = Object.assign({}, bill === null || bill === void 0 ? void 0 : bill.invoice);
      this.createProcess().then( /*#__PURE__*/function () {
        var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          if (_this2.cqt_submit_invoice_immediately) yield _this2.handleMinvoice(invoiceTemp);

          _this2.mess.success(`${_this2.languageService.translate('Sales invoice')} ${_this2.invoices.getBillCode()} ${_this2.languageService.translate('has been created successfully')}`);

          _this2.handlePrintInvoice(); // this.goBack(false)


          _this2.statusInvoice['payment'] = false;
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    } else {
      this.statusInvoice['payment'] = true;
      const bill = Object.assign({}, this.invoices);
      const invoiceTemp = Object.assign({}, bill === null || bill === void 0 ? void 0 : bill.invoice);
      this.createProcess().then( /*#__PURE__*/function () {
        var _ref2 = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (res) {
          if (_this2.cqt_submit_invoice_immediately) yield _this2.handleMinvoice(invoiceTemp);

          _this2.mess.success(`${_this2.languageService.translate('Sales invoice')} ${_this2.invoices.getBillCode()} ${_this2.languageService.translate('has been created successfully')}`);

          _this2.goBack(false);

          _this2.statusInvoice['payment'] = false;
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  } ///////////////////////////////////////////////IN HÓA ĐƠN//////////////////////////////////////////////////////////

  /**
   * Lấy các trang in
   * @param type size
   * @returns
   */


  renderPrintPage(type) {
    switch (type) {
      case 'print_size_k57_3c':
        return src_app_cafe_components_print_sales_sales_k57_col3_sales_k57_col3_component__WEBPACK_IMPORTED_MODULE_5__.SalesK57Col3Component;

      case 'print_size_k80_3c':
        return src_app_cafe_components_print_sales_sales_k80_col3_sales_k80_col3_component__WEBPACK_IMPORTED_MODULE_4__.SalesK80Col3Component;

      case 'print_size_k80_4c':
        return src_app_cafe_components_print_sales_sales_k80_col4_sales_k80_col4_component__WEBPACK_IMPORTED_MODULE_3__.SalesK80Col4Component;

      case 'print_size_a5':
        return src_app_cafe_components_print_sales_sales_a5_sales_a5_component__WEBPACK_IMPORTED_MODULE_2__.SalesA5Component;

      case 'print_size_a4':
        return src_app_cafe_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_1__.SalesA4Component;

      default:
        return src_app_cafe_components_print_sales_sales_a4_sales_a4_component__WEBPACK_IMPORTED_MODULE_1__.SalesA4Component;
    }
  }
  /** Mở trang in */


  handlePrintInvoice() {
    if (this.printer) this.vhQueryCafe.getBill(this.invoices.getID()).then(res => {
      this.invoices.setBillCode(res.bill_code);
      this.vhComponent.showModal(this.renderPrintPage(this.printer['_id']), {
        printer: this.printer,
        invoice: this.invoices
      }, false, false, `modal-print-${this.printer['_id']}`).then(modal => {
        modal.onWillDismiss().then(() => {
          this.goBack(false);
        });
      });
    });else this.goBack(false);
  }
  /** Mở trang in thử*/


  handlePrintTest() {
    if (this.checkPrinter) {
      this.updateServiceTime();
      if (this.vhAuth.checkMyPermission('sales_enable_print_out_for_customer')) this.vhComponent.showModal(this.renderPrintPage(this.printer['_id']), {
        printer: this.printer,
        invoice: this.invoices,
        temp: true
      }, false, false, `modal-print-${this.printer['_id']}`).then(modal => {
        modal.onWillDismiss().then(() => {});
      });else this.mess.error(this.languageService.translate('You do not have this rights'), {
        nzDuration: 5000
      });
    } else this.nzModalService.confirm({
      nzTitle: '<i>' + this.languageService.translate('Function') + '</i>',
      nzContent: '<b>' + this.languageService.translate('Please open the function in') + ' ' + '<i>' + '"' + this.languageService.translate('Sales page settings') + '"' + '</i>' + ' ' + ' -> ' + '<i>' + '"' + this.languageService.translate('Print page') + '"' + '</i>' + '</b>',
      nzIconType: 'info-circle',
      nzCancelText: null,
      nzOnOk: () => {}
    });
  }

  handleEmit_printKitchenAll(ev) {
    this.printKitchenAll = ev;
    setTimeout(() => {
      this.printKitchenAll = false;
    }, 2000);
  }

  checkDeactivate(currentRoute, currentState, nextState) {
    if (!this.isExit) {
      if (this.invoices.getInvoiceDetail().length) {
        Promise.all([this.vhComponent.showLoading('', 'transparent-loading'), this.vhQueryCafe.updateBill(this.invoices.getID(), this.invoices.getCreateUpdateInvoice(this.invoices.getBillType()))]).then(() => {
          this.vhComponent.hideLoading(0);
          this.isExit = true;
          this.router.navigateByUrl(nextState.url);
        });
      } else {
        this.statusInvoice.deleting = true; // tiến hành xóa

        Promise.all([this.vhComponent.showLoading('', 'transparent-loading'), this.deleteProcess()]).then(id => {
          this.isExit = true;
          this.router.navigateByUrl(nextState.url);
        }).catch(err => {
          console.error(err);
          this.vhComponent.showToast(2000, this.languageService.translate('Delete fail'), 'alert-toast');
        }).finally(() => {
          this.vhComponent.hideLoading(0);
          this.statusInvoice.deleting = false;
        });
      }
    }

    return this.isExit;
  }

  getBill_Detail_ByID_Bill() {
    this.vhQueryCafe.getBill_details_byId_bill(this.invoices.getID()).then(bill_details => {
      console.log('getBill_details_byId_bill', bill_details);
      this.invoices = new src_app_cafe_interface_vh_order_invoice__WEBPACK_IMPORTED_MODULE_6__.VhOrderInvoices(this.invoices.getCreateUpdateInvoice(5), bill_details, this.vhQueryCafe, this.plaform);
    }, error => {
      console.log('error ', error);
    });
  }
  /**
   * hàm này để xóa tất cả promotion trong bill và update
   */


  deletePromotions() {
    this.destroyBillDetails_withPromotions().then(() => {
      this.vhQueryCafe.updateBill_Billdetail(this.invoices.getID(), this.invoices.getCreateUpdateInvoice(5), this.invoices.getCreateUpdateInvoiceDetail()).then(() => {
        this.getBill_Detail_ByID_Bill();
      }).catch(err => console.error(err));
    });
  }

  destroyBillDetails_withPromotions() {
    this.invoices.setBillHavePromotion(false);
    return new Promise(resolve => {
      let bill_details = this.vhQueryCafe.destroyBillDetails_withPromotions(this.invoices.getInvoiceDetail()).map(item => {
        return Object.assign(Object.assign({}, item), {
          _id: item._id ? item._id : true
        });
      });
      console.log(bill_details);
      this.invoices = new src_app_cafe_interface_vh_order_invoice__WEBPACK_IMPORTED_MODULE_6__.VhOrderInvoices(this.invoices.getCreateUpdateInvoice(5), bill_details, this.vhQueryCafe, this.plaform);
      this.invoices.setSubTotal();
      this.product_gift_type7 = [];
      this.bill_details_pmtype_7 = [];
      resolve(true);
    });
  }

  handleAddGiftType7() {
    this.showProductGiftType7 = false;
    if (!this.gotten_gift_type7) for (let i in this.product_gift_type7) {
      if (this.product_gift_type7[i].products_gift.filter(e => e.choose).length) this.invoices.addBill_detail_promotion(this.product_gift_type7[i]);
    }
    this.gotten_gift_type7 = true;
    console.log(this.invoices.getInvoiceDetail());
  }
  /**
   * hàm lấy quà
   */


  getPromotions() {
    this.gotten_gift_type7 = false;
    this.vhComponent.showLoading('').then(() => {
      /** Chứa các bill_detail có ptype = 6 */
      let bill_details_type_6;
      /** Chứa các bill_detail có ptype != 6 */

      let bill_details_others; // Nếu có Dịch vụ thời gian thì tách bill_detail có ptype = 6 ra để xử lý riêng, sau khi get xong thì thêm vô lại

      if (this.productService.isContainServiceTime(this.invoices)) {
        bill_details_type_6 = this.invoices.getInvoiceDetail().filter(item => item.ptype === src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_7__.VhType.SERVICETIME);
        bill_details_others = this.invoices.getInvoiceDetail().filter(item => item.ptype !== src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_7__.VhType.SERVICETIME);
        this.invoices = new src_app_cafe_interface_vh_order_invoice__WEBPACK_IMPORTED_MODULE_6__.VhOrderInvoices(this.invoices.getCreateUpdateInvoice(5), bill_details_others, this.vhQueryCafe);
      }

      this.vhQueryCafe.changeBillDetails_withPromotions(this.invoices.getInvoiceDetail(), this.invoices.getDate()).then(bill_details_display => {
        // Nếu có Dịch vụ thời gian thì thêm bill_detail có ptype = 6 vào lại
        if (this.productService.isContainServiceTime(this.invoices)) {
          bill_details_display.bill_details_pmtype_0to6 = [...bill_details_type_6, ...bill_details_display.bill_details_pmtype_0to6];
        }

        this.handleChooseLotForPromotion(bill_details_display.bill_details_pmtype_0to6);
        this.handleChooseLotForPromotion(bill_details_display.bill_details_pmtype_7);
        this.bill_details_pmtype_7 = this.vhAlgorithm.sortNumberbyASC([...bill_details_display.bill_details_pmtype_7], 'total_bill_value');
        this.isGotPromotion = true;
        this.vhComponent.hideLoading(0);
        this.invoices = new src_app_cafe_interface_vh_order_invoice__WEBPACK_IMPORTED_MODULE_6__.VhOrderInvoices(this.invoices.getCreateUpdateInvoice(5), [...bill_details_display.bill_details_pmtype_0to6], this.vhQueryCafe, this.plaform);
        this.handlePromotionType7(this.bill_details_pmtype_7);
        this.getEarningpointPromotion().then(() => {
          this.vhQueryCafe.updateBill_Billdetail(this.invoices.getID(), this.invoices.getCreateUpdateInvoice(5), this.invoices.getCreateUpdateInvoiceDetail()).then(() => {
            console.log("success");
          });
        });
      }, error => {
        this.vhComponent.hideLoading(0).then(() => {
          this.vhComponent.showToast(5000, error, 'alert-toast');
        });
      });
    });
  }

  handlePromotionType7(bill_details_pmtype_7) {
    if (bill_details_pmtype_7.length) {
      if (bill_details_pmtype_7.findLastIndex(e => e.total_bill_value <= this.invoices.getTotalATax()) != -1) this.product_gift_type7 = [bill_details_pmtype_7[bill_details_pmtype_7.findLastIndex(e => e.total_bill_value <= this.invoices.getTotalATax())]];else this.product_gift_type7 = [];
    } else this.product_gift_type7 = [];
  }

  handleChooseLotForPromotion(promotion) {
    for (let i of promotion) {
      if (i.products_gift) {
        for (let product of i.products_gift) {
          if (product.lots && product.lots.length) {
            let min_date_exp = this.vhAlgorithm.sortDatebyASC(product.lots, 'date_exp');
            product['id_lotproduct'] = min_date_exp[0]._id;
            product['lot_number'] = min_date_exp[0].lot_number;
          }

          if (product.combos) {
            product.combos.forEach(element => {
              if (element.lots && element.lots.length) {
                let min_date_exp = this.vhAlgorithm.sortDatebyASC(element.lots, 'date_exp');
                element['id_lotproduct'] = min_date_exp[0]._id;
                element['lot_number'] = min_date_exp[0].lot_number;
              }
            });
          }
        }
      }
    }
  }
  /**
  * hàm này để get SubTotal mới của mảng đã lấy quà
  * đồng thời gán điểm tích lũy sản phẩm mới của các sản phẩm trong khuyến mãi nếu có
  */


  getEarningpointPromotion() {
    return new Promise(resolve => {
      for (let i of this.invoices.getInvoiceDetail()) {
        if (i.pmtype) this.invoices.setBillHavePromotion(true);

        if (i.products_gift) {
          for (let product of i.products_gift) {
            product.earning_points_product = this.getTotalEarningPointProduct(i, true);
          }
        }

        if (i.products) {
          for (let product of i.products) {
            product.earning_points_product = this.getTotalEarningPointProduct(i, true);
          }
        }

        if (!i.id_promotion) i.earning_points_product = this.getTotalEarningPointProduct(i, null);
      }

      this.invoices.setSubTotal();
      resolve(true);
    });
  }
  /**
   * hàm này để kiểm tra disable sản phẩm tặng hay ko
   * @param data phần tử trong mảng đã lấy quà
   * @returns
   */


  checkDisableChooseProductGift(data) {
    if (data.products_gift.filter(item => item.choose).length == data.promotions_maximum) return true;else return false;
  }

  handleOk() {
    this.showModalChangePriceType = false;
    this.changePriceType(this.default_price_type);
  }

  handleCancel() {
    this.showModalChangePriceType = false;
  }

  getUnit(units, ratio) {
    return this.vhQueryCafe.getUnit_byRatio(units, ratio).unit;
  }

  getLotNumber(lots, _id) {
    let lot = lots.find(item => item._id == _id);
    return lot.lot_number;
  }
  /**
   *  sự kiện nhận thay đổi giá từ output component app-change-price-type
   * @event : boolean | null
   */


  changePriceType(event) {
    if (event != null) {
      // nếu có thay đổi kiểu giá bán thì cập nhật lại giá các sản phẩm thành giá bán sỉ
      this.default_price_type = event;
      this.destroyBillDetails_withPromotions().then(() => {
        if (this.invoices.getInvoiceDetail().length) {
          // nếu có  length mơi update
          let bill_details = this.invoices.getInvoiceDetail();

          for (let i in bill_details) {
            // Nếu là dịch vụ thời gian
            if (bill_details[i].ptype === src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_7__.VhType.SERVICETIME) {
              this.productService.updateServiceTimePrice(bill_details[i], event);
              delete bill_details[i].serviceTimePrice; // Cập nhật lại sản phẩm trong danh sách hóa đơn

              bill_details[i] = Object.assign({}, bill_details[i]);
              continue;
            }

            let price_update = 0;
            let product = this.vhQueryCafe.getlocalDetailProduct(bill_details[i].id_subproduct ? bill_details[i].id_subproduct : bill_details[i].id_product);
            product = Object.assign(Object.assign({}, product), this.vhQueryCafe.getUnit_byRatio(product.units, bill_details[i].ratio));

            if (event == 1) {
              price_update = product.price;

              if (bill_details[i].toppings) {
                for (let top of bill_details[i].toppings) {
                  top.price = this.vhQueryCafe.getlocalProduct(top.id_product).units[0].price;
                }
              }
            } else {
              price_update = product.price2 ? product.price2 : product.price;

              if (bill_details[i].toppings) {
                for (let top of bill_details[i].toppings) {
                  let topping = this.vhQueryCafe.getlocalProduct(top.id_product);
                  top.price = topping.units[0].price2 ? topping.units[0].price2 : topping.units[0].price;
                }
              }
            }

            bill_details[i].price = price_update;
            bill_details[i].price_origin = price_update;
          }

          this.invoices.setSubTotal();
        }

        this.invoices.setPriceType(event);
        this.vhQueryCafe.updateBill_Billdetail(this.invoices.getID(), this.invoices.getCreateUpdateInvoice(5), this.invoices.getCreateUpdateInvoiceDetail()).then(() => {
          console.log('success');
        });
      });
    }

    if (!this.gotten_gift_type7) this.handlePromotionType7(this.bill_details_pmtype_7);
  }
  /**
   * Tính lại bill detail cho Dịch vụ thời gian và setSubTotal() cho invoices
   */


  updateServiceTime() {
    if (!this.productService.isContainServiceTime(this.invoices)) return;
    this.productService.updateServiceTimePriceInvoiceDetail(this.invoices.getInvoiceDetail(), this.invoices.getPriceType());
    this.invoices.setSubTotal();
  }

  handleMinvoice(bill) {
    return new Promise((resolve, reject) => {
      var _a; // lấy ra chi nhánh hiện tại


      let currentBranch = this.vhQueryCafe.getlocalBranch(this.vhQueryCafe.getDefaultBranch()._id);

      if (!currentBranch.einvoices) {
        resolve(true);
        return;
      } // trường hợp chưa có tạo kết nối hóa đơn điện tử


      if (!((_a = currentBranch.einvoices) === null || _a === void 0 ? void 0 : _a.length)) {
        this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Please connect e-invoice for this branch"));
        resolve(true);
        return;
      } // trường hợp đã gửi lên cqt rồi thì khỏi


      if (bill.cqt_status == 2 || bill.cqt_status == 3) {
        resolve(true);
        return;
      } // trường hợp chỉ có 1 kết nối hóa đơn điện tử thì tạo thẳng luôn


      if (currentBranch.einvoices.length && currentBranch.einvoices.length == 1) {
        if (!currentBranch.einvoices[0].invoiceSeries.length) {
          this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Please connect e-invoice for this branch"));
          resolve(true);
          return;
        }

        this.billService.changeBill_byLocal_toInvoice_byMinvoice(bill._id, currentBranch.einvoices[0].invoiceSeries[0]).then(rsp => {
          console.log('changeBill_toInvoice_byMinvoice', rsp);

          if (rsp.vcode == 0) {
            if (this.cqt_invoice_auto_sign) {
              this.vhEinvoice.saveInvoice_Sign_byMinvoice(currentBranch.taxcode, currentBranch.einvoices[0].token, 1, rsp.data).then(res => {
                console.log('saveInvoice_Sign_byMinvoice', res);

                if (res.code == '00') {
                  bill.cqt_status = 3;
                  this.vhQueryCafe.updateBill(bill._id, {
                    cqt_status: 3
                  }).then(bool => {
                    console.log('updateBill', bool);
                    resolve(true);
                  }, error => {
                    console.log('error', error);
                  });
                } else if (res.code == '9999') {
                  bill.cqt_status = 1;
                  this.vhQueryCafe.updateBill(bill._id, {
                    cqt_status: 1
                  }).then(bool => {
                    console.log('updateBill', bool);
                    resolve(true);
                  });
                  this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vui lòng kiểm tra lại thông tin hóa đơn đẩy lên CQT chưa phù hợp"));
                } else {
                  bill.cqt_status = 1;
                  this.vhQueryCafe.updateBill(bill._id, {
                    cqt_status: 1
                  }).then(bool => {
                    console.log('updateBill', bool);
                    resolve(true);
                  });
                  this.vhComponent.alertMessageDesktop("error", this.languageService.translate('An error occurred while sending the invoice to CQT'));
                }
              });
            } else {
              this.vhEinvoice.saveInvoice_noSign_byMinvoice(currentBranch.taxcode, currentBranch.einvoices[0].token, 1, rsp.data).then(res => {
                console.log(res);

                if (res.code == '00') {
                  bill.cqt_status = 2;
                  this.vhQueryCafe.updateBill(bill._id, {
                    cqt_status: 2
                  }).then(bool => {
                    console.log('updateBill', bool);
                    resolve(true);
                  }, error => {
                    console.log('error', error);
                  });
                } else if (res.code == '9999') {
                  bill.cqt_status = 1;
                  this.vhQueryCafe.updateBill(bill._id, {
                    cqt_status: 1
                  }).then(bool => {
                    console.log('updateBill', bool);
                    resolve(true);
                  });
                  this.vhComponent.alertMessageDesktop("error", this.languageService.translate("Vui lòng kiểm tra lại thông tin hóa đơn đẩy lên CQT chưa phù hợp"));
                } else {
                  bill.cqt_status = 1;
                  this.vhQueryCafe.updateBill(bill._id, {
                    cqt_status: 1
                  }).then(bool => {
                    console.log('updateBill', bool);
                    resolve(true);
                  });
                  this.vhComponent.alertMessageDesktop("error", this.languageService.translate('An error occurred while sending the invoice to CQT'));
                }
              });
            }
          }
        }, error => {
          console.log('error', error);
          resolve(true);
          return;
        });
      }
    });
  }

}

Cart1Component.ɵfac = function Cart1Component_Factory(t) {
  return new (t || Cart1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_8__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_cafe_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_9__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_20__.NzMessageService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_22__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__.VhQuery), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_cafe_services_product_service__WEBPACK_IMPORTED_MODULE_10__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_18__.VhEinvoice), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_cafe_services_bill_service__WEBPACK_IMPORTED_MODULE_11__.BillService));
};

Cart1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({
  type: Cart1Component,
  selectors: [["app-cart1"]],
  decls: 9,
  vars: 12,
  consts: [[4, "ngIf"], ["nzWidth", "70vw", 3, "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["nzCentered", "", 3, "nzVisible", "nzTitle", "nzCancelText", "nzVisibleChange", "nzOnCancel", "nzOnOk"], ["nz-row", "", 1, "row", 2, "background", "#f7f7f7", "margin", "0"], ["nz-col", "", 1, "col-left", 2, "padding", "4px", 3, "nzSpan"], [3, "stamp", "invoices", "checkPrinterKitchen", "printer", "printAllLabelEvent", "printKitchenAll", "tableInfo", "default_price_type", "showModalChangePriceType", "checkPromotion", "deletePromotion", "updateInvoice", "goBack", "showProductGift", "showProductGiftType7"], ["nz-col", "", 1, "col-right", 3, "nzSpan", "ngStyle"], [1, "ant-table-body"], [2, "padding", "4px", 3, "invoices", "employeeID", "tableInfo", "updateInvoice"], [2, "padding", "4px", 3, "invoices", "customerID", "total_earning_points", "changeDebt", "updateInvoice"], ["id", "bill1"], [2, "padding", "4px", 3, "invoices", "debt", "tax", "payment", "paymentType", "customer_class", "product_gift_type7", "gotten_gift_type7", "updateInvoice", "showProductGiftType7"], [2, "padding", "4px", 3, "stamp", "invoices", "statusInvoice", "printAllLabel", "printKitchenAll", "payment", "deleteInvoice", "testPrint"], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], [4, "ngFor", "ngForOf"], ["colspan", "5"], [3, "ngModel", "nzMin", "nzMax", "ngModelChange"], [3, "ngModel", "nzDisabled", "ngModelChange"], ["nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], [3, "nzLabel", "nzValue"], [3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"]],
  template: function Cart1Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, Cart1Component_nz_layout_0_Template, 12, 35, "nz-layout", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "nz-modal", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("nzVisibleChange", function Cart1Component_Template_nz_modal_nzVisibleChange_1_listener($event) {
        return ctx.showProductGift = $event;
      })("nzOnCancel", function Cart1Component_Template_nz_modal_nzOnCancel_1_listener() {
        return ctx.showProductGift = false;
      })("nzOnOk", function Cart1Component_Template_nz_modal_nzOnOk_1_listener() {
        ctx.showProductGift = false;
        return ctx.getEarningpointPromotion();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, Cart1Component_ng_container_2_Template, 22, 20, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "nz-modal", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("nzVisibleChange", function Cart1Component_Template_nz_modal_nzVisibleChange_3_listener($event) {
        return ctx.showProductGiftType7 = $event;
      })("nzOnCancel", function Cart1Component_Template_nz_modal_nzOnCancel_3_listener() {
        return ctx.showProductGiftType7 = false;
      })("nzOnOk", function Cart1Component_Template_nz_modal_nzOnOk_3_listener() {
        ctx.showProductGiftType7 = false;
        return ctx.handleAddGiftType7();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, Cart1Component_ng_container_4_Template, 22, 20, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "nz-modal", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("nzVisibleChange", function Cart1Component_Template_nz_modal_nzVisibleChange_5_listener($event) {
        return ctx.showModalChangePriceType = $event;
      })("nzOnCancel", function Cart1Component_Template_nz_modal_nzOnCancel_5_listener() {
        return ctx.handleCancel();
      })("nzOnOk", function Cart1Component_Template_nz_modal_nzOnOk_5_listener() {
        return ctx.handleOk();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](8, Cart1Component_ng_container_8_Template, 8, 9, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.invoices);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("nzTitle", "Ch\u1ECDn qu\u00E0 t\u1EB7ng");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzVisible", ctx.showProductGift);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("nzTitle", "Ch\u1ECDn qu\u00E0 t\u1EB7ng");
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzVisible", ctx.showProductGiftType7);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 8, "Choose selling price"));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpropertyInterpolate"]("nzCancelText", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 10, "Cancel"));
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("nzVisible", ctx.showModalChangePriceType);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_21__.NzModalContentDirective, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_24__.NzLayoutComponent, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_24__.NzContentComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_25__.NzColDirective, _bill_detail1_bill_detail1_component__WEBPACK_IMPORTED_MODULE_12__.BillDetail1Component, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgStyle, _info_bill1_info_bill1_component__WEBPACK_IMPORTED_MODULE_13__.InfoBill1Component, _customer1_customer1_component__WEBPACK_IMPORTED_MODULE_14__.Customer1Component, _bill1_bill1_component__WEBPACK_IMPORTED_MODULE_15__.Bill1Component, _payment_button1_payment_button1_component__WEBPACK_IMPORTED_MODULE_16__.PaymentButton1Component, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzTableComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzTheadComponent, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzTrDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzTableCellDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzThMeasureDirective, ng_zorro_antd_table__WEBPACK_IMPORTED_MODULE_26__.NzTbodyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgForOf, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_27__.NzInputNumberComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_28__.NgModel, ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_29__.NzSwitchComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__.NzSelectComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_30__.NzOptionComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_31__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_31__.NzRadioComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  cursor: pointer;\n  display: inline-block;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-left[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-right[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100%;\n  width: 100%;\n  height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-right[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: max-content max-content max-content;\n  grid-template-columns: 100%;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQUk7RUFDSSxlQUFBO0FBRVI7QUFDQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBREk7RUFDSSxZQUFBO0FBR1I7QUFEWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBR2hCO0FBRFk7RUFDSSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUdoQjtBQUZnQjtFQUNJLGFBQUE7RUFDQSx1REFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSXBCIiwiZmlsZSI6ImNhcnQxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdy1iYWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIH1cclxufVxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDk1JTtcclxuICAgIC5yb3cge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAuY29sIHtcclxuICAgICAgICAgICAgJi1sZWZ0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYtcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDsgXHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICYgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IFxyXG4iXX0= */"]
});

/***/ }),

/***/ 51457:
/*!****************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/cart1.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart1Module": () => (/* binding */ Cart1Module)
/* harmony export */ });
/* harmony import */ var _bill1_bill1_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bill1/bill1.module */ 44293);
/* harmony import */ var _customer1_customer1_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer1/customer1.module */ 95290);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _cart1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart1.component */ 51683);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _cart1_bill_detail1_bill_detail1_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart1/bill-detail1/bill-detail1.module */ 21445);
/* harmony import */ var _cart1_info_bill1_info_bill1_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart1/info-bill1/info-bill1.module */ 37647);
/* harmony import */ var _cart1_payment_button1_payment_button1_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart1/payment-button1/payment-button1.module */ 33758);
/* harmony import */ var src_app_cafe_desktop_canLeavePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/cafe/desktop/canLeavePage */ 38248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);














const routes = [
    {
        path: "",
        component: _cart1_component__WEBPACK_IMPORTED_MODULE_3__.Cart1Component,
        canDeactivate: [src_app_cafe_desktop_canLeavePage__WEBPACK_IMPORTED_MODULE_7__.CanLeavePage]
    }
];
class Cart1Module {
}
Cart1Module.ɵfac = function Cart1Module_Factory(t) { return new (t || Cart1Module)(); };
Cart1Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: Cart1Module });
Cart1Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes),
            _cart1_bill_detail1_bill_detail1_module__WEBPACK_IMPORTED_MODULE_4__.BillDetail1Module,
            _customer1_customer1_module__WEBPACK_IMPORTED_MODULE_1__.Customer1Module,
            _cart1_info_bill1_info_bill1_module__WEBPACK_IMPORTED_MODULE_5__.InfoBill1Module,
            _bill1_bill1_module__WEBPACK_IMPORTED_MODULE_0__.Bill1Module,
            _cart1_payment_button1_payment_button1_module__WEBPACK_IMPORTED_MODULE_6__.PaymentButton1Module
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](Cart1Module, { declarations: [_cart1_component__WEBPACK_IMPORTED_MODULE_3__.Cart1Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _cart1_bill_detail1_bill_detail1_module__WEBPACK_IMPORTED_MODULE_4__.BillDetail1Module,
        _customer1_customer1_module__WEBPACK_IMPORTED_MODULE_1__.Customer1Module,
        _cart1_info_bill1_info_bill1_module__WEBPACK_IMPORTED_MODULE_5__.InfoBill1Module,
        _bill1_bill1_module__WEBPACK_IMPORTED_MODULE_0__.Bill1Module,
        _cart1_payment_button1_payment_button1_module__WEBPACK_IMPORTED_MODULE_6__.PaymentButton1Module] }); })();


/***/ }),

/***/ 95980:
/*!***********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/customer-profile/customer-profile.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerProfileComponent": () => (/* binding */ CustomerProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);







function CustomerProfileComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 21, "Customer information"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 23, "Customer name"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 25, "Phone number"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.phone, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 27, "Email"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 29, "Gender"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.gender, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 31, "Date of birth"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 33, ctx_r0.customer.datebirth, "dd/MM/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 36, "Address"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.address, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 38, "Country"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.country, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 40, "Province"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.province, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 42, "District"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.district, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 44, "Note"), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.customer.note, "");
} }
class CustomerProfileComponent {
    constructor(vhQueryCafe) {
        this.vhQueryCafe = vhQueryCafe;
        this.closeInfoCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.customer = {};
    }
    ngOnChanges(change) {
        // lấy dữ liệu khách hàng
        this.initCustomer(change.customerID.currentValue);
    }
    initCustomer(id_customer) {
        if (id_customer != 'id_retail') {
            let customer = this.vhQueryCafe.getlocalCustomer(id_customer);
            this.customer = customer ? customer : {};
        }
    }
    goBack() {
        this.closeInfoCustomer.emit(false);
    }
}
CustomerProfileComponent.ɵfac = function CustomerProfileComponent_Factory(t) { return new (t || CustomerProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQueryCafe)); };
CustomerProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomerProfileComponent, selectors: [["app-customer-profile"]], inputs: { customerID: ["id", "customerID"], showDrawerCustomerInfo: "showDrawerCustomerInfo" }, outputs: { closeInfoCustomer: "closeInfoCustomer" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 3, consts: [[3, "nzMaskClosable", "nzWidth", "nzVisible", "nzOnClose"], [4, "nzDrawerContent"], ["nz-row", "", 1, "info-customer"], ["nz-col", "", "nzSpan", "24"]], template: function CustomerProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function CustomerProfileComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerProfileComponent_ng_container_1_Template, 66, 46, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 400)("nzVisible", ctx.showDrawerCustomerInfo);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__.NzColDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: [".info-customer[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin: 5px 0;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.2 rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJjdXN0b21lci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tY3VzdG9tZXIge1xyXG4gIGRpdiB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG59XHJcbmgzIHtcclxuICBmb250LXNpemU6IDEuMiByZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8421:
/*!********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/customer-profile/customer-profile.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerProfileModule": () => (/* binding */ CustomerProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _customer_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-profile.component */ 95980);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class CustomerProfileModule {
}
CustomerProfileModule.ɵfac = function CustomerProfileModule_Factory(t) { return new (t || CustomerProfileModule)(); };
CustomerProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CustomerProfileModule });
CustomerProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CustomerProfileModule, { declarations: [_customer_profile_component__WEBPACK_IMPORTED_MODULE_0__.CustomerProfileComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule], exports: [_customer_profile_component__WEBPACK_IMPORTED_MODULE_0__.CustomerProfileComponent] }); })();


/***/ }),

/***/ 48807:
/*!*********************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/customer1/customer1.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Customer1Component": () => (/* binding */ Customer1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var _components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../../components/vh-component/vh-component */ 4866);
/* harmony import */ var src_app_cafe_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/services/product.service */ 28506);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _components_search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../components/search/search-customer/search-customer.component */ 88403);
/* harmony import */ var _advange_booking_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../advange/booking/components/add-customer/add-customer.component */ 71898);
/* harmony import */ var _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer-profile/customer-profile.component */ 95980);
/* harmony import */ var _retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../retail-info/retail-info.component */ 91577);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















function Customer1Component_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate4"](" ", ctx_r0.invoices.getRetailName(), " - ", ctx_r0.invoices.getRetailPhone(), " ", ctx_r0.invoices.getRetailAddress() ? "-" : "", " ", ctx_r0.invoices.getRetailAddress(), " ");
} }
function Customer1Component_div_20_nz_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "nz-option", 20);
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", item_r8._id)("nzLabel", item_r8.name + " - " + item_r8.phone);
} }
function Customer1Component_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "nz-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function Customer1Component_div_20_Template_nz_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r9.customerID = $event; })("ngModelChange", function Customer1Component_div_20_Template_nz_select_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r11.changeCustomer($event); })("nzBlur", function Customer1Component_div_20_Template_nz_select_nzBlur_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.blurCustomer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, Customer1Component_div_20_nz_option_4_Template, 1, 2, "nz-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function Customer1Component_div_20_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r13.openCustomerInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "Select customer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.customerID);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.customerList);
} }
function Customer1Component_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, "Accumulated points"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.point_validity ? ctx_r2.point_validity : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 6, "Plus"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.total_earning_points);
} }
function Customer1Component_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-search-customer", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closeAndReceiveCustomer", function Customer1Component_div_22_Template_app_search_customer_closeAndReceiveCustomer_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.changeCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function Customer1Component_div_22_Template_i_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r16.openCustomerInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id_customer", ctx_r3.customerID);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx_r3.customerID != "id_retail" ? "active" : "deactive");
} }
function Customer1Component_app_add_customer_23_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-add-customer", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closeAddCustomer", function Customer1Component_app_add_customer_23_Template_app_add_customer_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r17.closeAddCustomer($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showDrawerAddCustomer", ctx_r4.showDrawerAddCustomer);
} }
function Customer1Component_app_customer_profile_24_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-customer-profile", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closeInfoCustomer", function Customer1Component_app_customer_profile_24_Template_app_customer_profile_closeInfoCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.closeCustomerInfo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showDrawerCustomerInfo", ctx_r5.showDrawerCustomerInfo)("id", ctx_r5.customerID);
} }
function Customer1Component_app_retail_info_25_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-retail-info", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("closeAddCustomer", function Customer1Component_app_retail_info_25_Template_app_retail_info_closeAddCustomer_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.saveRetailInfo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("showDrawerAddRetail", ctx_r6.showDrawerAddRetail)("retail_name", ctx_r6.invoices.getRetailName())("retail_phone", ctx_r6.invoices.getRetailPhone())("retail_address", ctx_r6.invoices.getRetailAddress());
} }
class Customer1Component {
    constructor(vhQueryCafe, vhAlgorithm, nzModalService, lang, vhComponent, productService) {
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        this.nzModalService = nzModalService;
        this.lang = lang;
        this.vhComponent = vhComponent;
        this.productService = productService;
        // Cập nhật hóa đơn khi có sự thay đổi
        this.updateInvoice = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.changeDebt = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter(); // trạng thái cho phép nợ bị thay đổi
        this.customerList = [];
        this.customerSearchList = [];
        // Customer
        this.customer = '';
        // Customer
        this.showDrawerAddCustomer = false;
        this.showDrawerCustomerInfo = false;
        this.showDrawerAddRetail = false;
        this.show_box_search = false;
        this.point_validity = 0;
    }
    ngOnInit() {
        this.initCustomer();
    }
    initCustomer() {
        this.customerList = this.vhQueryCafe.getlocalCustomers().filter(item => item._id != 'id_retail');
        if (this.customerID == "id_retail") {
            this.customerType = 1;
        }
        else {
            this.customerType = 2;
            this.customer = this.vhQueryCafe.getlocalCustomer(this.customerID).name + ' - ' + this.vhQueryCafe.getlocalCustomer(this.customerID).phone;
            setTimeout(() => {
                this.point_validity = this.vhQueryCafe.getlocalCustomerPoints(this.customerID);
                console.log(this.point_validity);
            }, 200);
        }
    }
    ngOnChanges({ customerID }) {
        if (customerID)
            if (customerID.previousValue) {
                if (customerID.previousValue != customerID.currentValue) {
                    if (this.customerID == "id_retail") {
                        this.customerType = 1;
                    }
                    else {
                        this.customerType = 2;
                        this.customer = this.vhQueryCafe.getlocalCustomer(this.customerID).name + ' - ' + this.vhQueryCafe.getlocalCustomer(this.customerID).phone;
                        setTimeout(() => {
                            this.point_validity = this.vhQueryCafe.getlocalCustomerPoints(this.customerID);
                            console.log(this.point_validity);
                        }, 200);
                    }
                }
            }
    }
    myTrackByFunction(element, index) {
        return element._id ? element._id : index;
    }
    changeCustomerType(type) {
        if (type == 1) {
            this.customerID = "id_retail";
            this.invoices.setIdPartner("id_retail");
            this.invoices.setTaxBuyerDisplayName('Người mua không lấy hoá đơn');
            this.invoices.setTaxBuyerLegalName('');
            this.invoices.setTaxBuyerTaxCode('');
            this.invoices.setTaxBuyerAddressLine('');
            this.invoices.setTaxBuyerEmail('');
            this.updateInvoice.emit({ id_customer: 'id_retail', tax_buyerDisplayName: this.invoices.getTaxBuyerDisplayName(), tax_buyerLegalName: this.invoices.getTaxBuyerLegalName(), tax_buyerTaxCode: this.invoices.getTaxBuyerTaxCode(), tax_buyerAddressLine: this.invoices.getTaxBuyerAddressLine(), tax_buyerEmail: this.invoices.getTaxBuyerEmail() });
            this.changeDebt.emit(false);
            if (this.vhQueryCafe.getlocalCustomer('id_retail').id_discount_bill) {
                this.vhComponent.alertMessageDesktop('success', this.lang.translate("Khách hàng này được chiết khấu theo công thức") + this.vhQueryCafe.getlocalDiscount_bill(this.vhQueryCafe.getlocalCustomer('id_retail').id_discount_bill).name);
                this.invoices.setDiscount(this.vhQueryCafe.getDiscount_bill_byCustomer(this.invoices.getSubTotal(), 'id_retail').discount);
            }
            this.updateServiceTime();
        }
        else if (type == 2 && this.invoices.getRetailName()) {
            this.nzModalService.confirm({
                nzTitle: `${this.lang.translate('Retail customer information will be lost')}?`,
                nzCancelText: this.lang.translate("Cancel"),
                nzOkText: "Ok",
                nzOnOk: () => {
                    this.clearRetailCustomer();
                    this.customerList = this.vhQueryCafe.getlocalCustomers().filter(item => item._id != 'id_retail');
                    this.customerSearchList = this.customerList;
                    setTimeout(() => document.getElementById("select-customer").click(), 200);
                },
                nzOnCancel: () => { this.customerType = 1; },
            });
        }
        else if (type == 2) {
            this.customerList = this.vhQueryCafe.getlocalCustomers().filter(item => item._id != 'id_retail');
            this.customerSearchList = this.customerList;
            setTimeout(() => document.getElementById("select-customer").click(), 200);
        }
    }
    clearRetailCustomer() {
        this.invoices.setRetailName('');
        this.invoices.setRetailPhone('');
        this.invoices.setRetailAddress('');
    }
    blurCustomer() {
        setTimeout(() => {
            if (this.customerID == "id_retail")
                this.customerType = 1;
        }, 500);
    }
    changeCustomer(ev) {
        this.invoices.setIdPartner(ev);
        const localCustomer = this.vhQueryCafe.getlocalCustomer(ev);
        this.invoices.setTaxBuyerDisplayName((localCustomer === null || localCustomer === void 0 ? void 0 : localCustomer.name) || '');
        this.invoices.setTaxBuyerLegalName((localCustomer === null || localCustomer === void 0 ? void 0 : localCustomer.name) || '');
        this.invoices.setTaxBuyerTaxCode((localCustomer === null || localCustomer === void 0 ? void 0 : localCustomer.taxcode) || '');
        this.invoices.setTaxBuyerAddressLine((localCustomer === null || localCustomer === void 0 ? void 0 : localCustomer.address) || '');
        this.invoices.setTaxBuyerEmail((localCustomer === null || localCustomer === void 0 ? void 0 : localCustomer.email) || '');
        this.updateInvoice.emit({ id_customer: ev, tax_buyerDisplayName: this.invoices.getTaxBuyerDisplayName(), tax_buyerLegalName: this.invoices.getTaxBuyerLegalName(), tax_buyerTaxCode: this.invoices.getTaxBuyerTaxCode(), tax_buyerAddressLine: this.invoices.getTaxBuyerAddressLine(), tax_buyerEmail: this.invoices.getTaxBuyerEmail() });
        let debt = this.vhQueryCafe.getlocalCustomer(ev).debt_enable;
        this.changeDebt.emit(debt ? debt : false);
        this.point_validity = this.vhQueryCafe.getlocalCustomerPoints(ev);
        console.log(this.point_validity);
        // if (this.vhQueryCafe.getlocalCustomer(ev).id_discount_bill) {
        //   this.vhComponent.alertMessageDesktop('success',this.lang.translate("Khách hàng này được chiết khấu theo công thức")+ " " + this.vhQueryCafe.getlocalDiscount_bill(this.vhQueryCafe.getlocalCustomer(ev).id_discount_bill).name)
        //   this.invoices.setDiscount(this.vhQueryCafe.getDiscount_bill_byCustomer(this.invoices.getSubTotal(), ev).discount)
        // }
        // else this.invoices.setDiscount(0)
        this.updateServiceTime();
    }
    // Customer process
    openAddCustomer() {
        if (this.customerType == 1)
            this.showDrawerAddRetail = true;
        else
            this.showDrawerAddCustomer = true;
    }
    closeAddCustomer(ev) {
        if (ev.reload) { // restart customer list
            this.customerList = this.vhQueryCafe.getlocalCustomers().filter(item => item._id != 'id_retail');
            this.customerID = ev.value._id;
            this.changeCustomer(ev.value._id);
        }
        this.showDrawerAddCustomer = false;
    }
    openCustomerInfo() {
        this.showDrawerCustomerInfo = true;
    }
    closeCustomerInfo(ev) {
        this.showDrawerCustomerInfo = false;
    }
    searchCustomer(event) {
        this.customerList = this.vhAlgorithm.searchList(this.vhAlgorithm.changeAlias(event.toString().toLowerCase()), this.customerSearchList, ['name', 'phone']);
    }
    //Lưu thông tin khách lẻ
    saveRetailInfo(result) {
        if (result) {
            this.invoices.setRetailName(result.retail_name);
            this.invoices.setRetailPhone(result.retail_phone);
            this.invoices.setRetailAddress(result.retail_address);
            this.updateInvoice.emit({ id_customer: 'id_retail' });
        }
        this.showDrawerAddRetail = false;
    }
    /**
     * Tính lại bill detail cho Dịch vụ thời gian và setSubTotal() cho invoices
     */
    updateServiceTime() {
        if (!this.productService.isContainServiceTime(this.invoices))
            return;
        this.productService.updateServiceTimePriceInvoiceDetail(this.invoices.getInvoiceDetail(), this.invoices.getPriceType());
        this.invoices.setSubTotal();
    }
}
Customer1Component.ɵfac = function Customer1Component_Factory(t) { return new (t || Customer1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_8__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_9__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_0__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_cafe_services_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService)); };
Customer1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: Customer1Component, selectors: [["app-customer1"]], inputs: { invoices: "invoices", customerID: "customerID", total_earning_points: "total_earning_points" }, outputs: { updateInvoice: "updateInvoice", changeDebt: "changeDebt" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]], decls: 26, vars: 24, consts: [[1, "customer"], [1, "customer-title"], [1, "title"], [1, "btn-add"], ["nz-button", "", "nzType", "text", "nzShape", "circle", 3, "click"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"], [1, "customer-type"], ["nzName", "radiogroup", "ks", "", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue"], [4, "ngIf"], ["class", "customer-select", 4, "ngIf"], ["nz-col", "", "nzSpan", "24", "style", "display: flex; justify-content: space-between;margin: 8px 0;", 4, "ngIf"], ["style", "display: flex; justify-content: space-between;", 4, "ngIf"], [3, "showDrawerAddCustomer", "closeAddCustomer", 4, "ngIf"], [3, "showDrawerCustomerInfo", "id", "closeInfoCustomer", 4, "ngIf"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer", 4, "ngIf"], [1, "customer-select"], ["id", "select-customer", "nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange", "nzBlur"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline"], [3, "nzValue", "nzLabel"], ["nz-col", "", "nzSpan", "24", 2, "display", "flex", "justify-content", "space-between", "margin", "8px 0"], [2, "display", "flex", "justify-content", "space-between"], [3, "id_customer", "closeAndReceiveCustomer"], ["nz-icon", "", "nzType", "info-circle", "nzTheme", "outline", 2, "cursor", "pointer", 3, "ngClass", "click"], [3, "showDrawerAddCustomer", "closeAddCustomer"], [3, "showDrawerCustomerInfo", "id", "closeInfoCustomer"], [3, "showDrawerAddRetail", "retail_name", "retail_phone", "retail_address", "closeAddCustomer"]], template: function Customer1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function Customer1Component_Template_button_click_6_listener() { return ctx.openAddCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "nz-radio-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function Customer1Component_Template_nz_radio_group_ngModelChange_9_listener($event) { return ctx.customerType = $event; })("ngModelChange", function Customer1Component_Template_nz_radio_group_ngModelChange_9_listener($event) { return ctx.changeCustomerType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, Customer1Component_ng_container_19_Template, 2, 4, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, Customer1Component_div_20_Template, 7, 5, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, Customer1Component_div_21_Template, 11, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, Customer1Component_div_22_Template, 3, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, Customer1Component_app_add_customer_23_Template, 1, 1, "app-add-customer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, Customer1Component_app_customer_profile_24_Template, 1, 2, "app-customer-profile", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, Customer1Component_app_retail_info_25_Template, 1, 4, "app-retail-info", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 16, "Customer information"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzType", ctx.invoices.getRetailName() ? "eye" : "plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.customerType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 18, "Retail customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](15, 20, "Member"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("nzValue", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](18, 22, "Search customer"));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.customerType == 1 && ctx.invoices.getRetailName());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.customerType == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.customerType == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.customerType == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showDrawerAddCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showDrawerCustomerInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showDrawerAddRetail);
    } }, directives: [ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_13__.NzRadioComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzSelectComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_16__.NzOptionComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_17__.NzColDirective, _components_search_search_customer_search_customer_component__WEBPACK_IMPORTED_MODULE_3__.SearchCustomerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _advange_booking_components_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_4__.AddCustomerComponent, _customer_profile_customer_profile_component__WEBPACK_IMPORTED_MODULE_5__.CustomerProfileComponent, _retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_6__.RetailInfoComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe], styles: [".customer[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 8px;\n  font-size: 0.9rem;\n  width: 100%;\n}\n.customer-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.customer-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: bold;\n}\n.customer-title[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .customer-title[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:focus {\n  color: var(--ion-color-vh-green);\n}\n.customer-type[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.customer-select[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto max-content;\n  align-items: center;\n}\n.customer-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .customer-select[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:focus {\n  margin-left: 8px;\n  color: var(--ion-color-vh-green);\n}\n.customer-select[_ngcontent-%COMP%]   .absolute_box_search[_ngcontent-%COMP%] {\n  z-index: 9999999;\n  width: 94%;\n  background: white;\n  max-height: 200px;\n}\n.customer-select[_ngcontent-%COMP%]   .demo-infinite-container[_ngcontent-%COMP%] {\n  height: 200px;\n  border-radius: 4px;\n  border: 1px solid #c8c7cc;\n}\n.customer-select[_ngcontent-%COMP%]   nz-list[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRVI7QUFEUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFHWjtBQUFZOztFQUVJLGdDQUFBO0FBRWhCO0FBRUk7RUFDSSxjQUFBO0FBQVI7QUFFSTtFQUNJLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0FBQVI7QUFDUTs7RUFFSSxnQkFBQTtFQUNBLGdDQUFBO0FBQ1o7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDWjtBQUNVO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDWjtBQUNVO0VBQ0UsYUFBQTtBQUNaIiwiZmlsZSI6ImN1c3RvbWVyMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICYtdGl0bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgICAgIGJ1dHRvbixcclxuICAgICAgICAgICAgYnV0dG9uOmhvdmVyOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi10eXBlIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIH1cclxuICAgICYtc2VsZWN0IHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBtYXgtY29udGVudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJ1dHRvbixcclxuICAgICAgICBidXR0b246aG92ZXI6Zm9jdXMge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFic29sdXRlX2JveF9zZWFyY2gge1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTk5OTk5O1xyXG4gICAgICAgICAgICB3aWR0aDogOTQlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZGVtby1pbmZpbml0ZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjOGM3Y2M7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBuei1saXN0IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 95290:
/*!******************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/customer1/customer1.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Customer1Module": () => (/* binding */ Customer1Module)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../keyboard/keyboard.module */ 9657);
/* harmony import */ var _advange_booking_components_add_customer_add_customer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../advange/booking/components/add-customer/add-customer.module */ 11072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _customer1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer1.component */ 48807);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _customer_profile_customer_profile_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer-profile/customer-profile.module */ 8421);
/* harmony import */ var _retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../retail-info/retail-info.component */ 91577);
/* harmony import */ var src_app_cafe_components_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cafe/components/search/search.module */ 19860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);












class Customer1Module {
}
Customer1Module.ɵfac = function Customer1Module_Factory(t) { return new (t || Customer1Module)(); };
Customer1Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: Customer1Module });
Customer1Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
            _advange_booking_components_add_customer_add_customer_module__WEBPACK_IMPORTED_MODULE_1__.AddCustomerModule,
            _customer_profile_customer_profile_module__WEBPACK_IMPORTED_MODULE_4__.CustomerProfileModule,
            _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_cafe_components_search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](Customer1Module, { declarations: [_customer1_component__WEBPACK_IMPORTED_MODULE_2__.Customer1Component, _retail_info_retail_info_component__WEBPACK_IMPORTED_MODULE_5__.RetailInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_3__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule,
        _advange_booking_components_add_customer_add_customer_module__WEBPACK_IMPORTED_MODULE_1__.AddCustomerModule,
        _customer_profile_customer_profile_module__WEBPACK_IMPORTED_MODULE_4__.CustomerProfileModule,
        _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__.ScrollingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        src_app_cafe_components_search_search_module__WEBPACK_IMPORTED_MODULE_6__.SearchModule], exports: [_customer1_component__WEBPACK_IMPORTED_MODULE_2__.Customer1Component] }); })();


/***/ }),

/***/ 71720:
/*!***********************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/info-bill1/info-bill1.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoBill1Component": () => (/* binding */ InfoBill1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







function InfoBill1Component_nz_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 6);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r1._id)("nzLabel", item_r1.name);
} }
class InfoBill1Component {
    constructor(vhAuth) {
        this.vhAuth = vhAuth;
        // thông tin bàn đang order
        this.tableInfo = {};
        // cập nhật hóa đơn khi có sự thay đổi
        this.updateInvoice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.employeeList = [];
    }
    ngOnInit() {
        this.initData();
    }
    myTrackByFunction(element, index) {
        return element._id ? element._id : index;
    }
    initData() {
        // nhân viên
        this.employeeList = this.vhAuth.getlocalEmployees();
    }
    changeEmployee(ev) {
        this.invoices.setIdEmployee(ev);
        this.updateInvoice.emit({ id_employee: ev });
    }
}
InfoBill1Component.ɵfac = function InfoBill1Component_Factory(t) { return new (t || InfoBill1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAuth)); };
InfoBill1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoBill1Component, selectors: [["app-info-bill1"]], inputs: { invoices: "invoices", employeeID: "employeeID", tableInfo: "tableInfo" }, outputs: { updateInvoice: "updateInvoice" }, decls: 28, vars: 24, consts: [[1, "info-bill"], [1, "select"], [1, "select-title"], [1, "select-detail"], ["nzBorderless", "", "nzShowSearch", "", 3, "nzPlaceHolder", "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzValue", "nzLabel"]], template: function InfoBill1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InfoBill1Component_Template_nz_select_ngModelChange_12_listener($event) { return ctx.employeeID = $event; })("ngModelChange", function InfoBill1Component_Template_nz_select_ngModelChange_12_listener($event) { return ctx.changeEmployee($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InfoBill1Component_nz_option_14_Template, 1, 2, "nz-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "Invoice code"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.invoices.getBillCode(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "Salesman"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzPlaceHolder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "Select employee"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.employeeID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employeeList)("ngForTrackBy", ctx.myTrackByFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 17, "Sales date"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 19, ctx.invoices.getDate(), "dd/MM/yyyy HH:mm"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 22, "Table"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.tableInfo, " ");
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_2__.NzOptionComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe], styles: [".info-bill[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border-radius: 5px;\n  padding: 8px;\n  font-size: 0.9rem;\n  width: 100%;\n}\n.info-bill[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 32px;\n}\n.info-bill[_ngcontent-%COMP%]   .select-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.info-bill[_ngcontent-%COMP%]   .select-title[_ngcontent-%COMP%]   nz-select[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.info-bill[_ngcontent-%COMP%]   .select-detail[_ngcontent-%COMP%] {\n  text-align: right;\n  min-width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tYmlsbDEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURRO0VBQ0ksaUJBQUE7QUFHWjtBQUZZO0VBQ0ksV0FBQTtBQUloQjtBQURRO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBR1oiLCJmaWxlIjoiaW5mby1iaWxsMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvLWJpbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuc2VsZWN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbnotc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYtZGV0YWlsIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 37647:
/*!********************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/info-bill1/info-bill1.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoBill1Module": () => (/* binding */ InfoBill1Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _info_bill1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-bill1.component */ 71720);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class InfoBill1Module {
}
InfoBill1Module.ɵfac = function InfoBill1Module_Factory(t) { return new (t || InfoBill1Module)(); };
InfoBill1Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: InfoBill1Module });
InfoBill1Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InfoBill1Module, { declarations: [_info_bill1_component__WEBPACK_IMPORTED_MODULE_0__.InfoBill1Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule], exports: [_info_bill1_component__WEBPACK_IMPORTED_MODULE_0__.InfoBill1Component] }); })();


/***/ }),

/***/ 40874:
/*!*********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/payment-button1/payment-button1.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentButton1Component": () => (/* binding */ PaymentButton1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var src_app_cafe_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/services/product.service */ 28506);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ 90463);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var _bill1_bill1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bill1/bill1.component */ 69775);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 70325);













function PaymentButton1Component_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentButton1Component_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.handlePrintAllLabel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.invoices.getInvoiceDetail().length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "Print all labels"), " ");
} }
function PaymentButton1Component_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentButton1Component_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.printKitchenAll.emit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.invoices.getInvoiceDetail().length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "Print all dishes to kitchen"), " ");
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
const _c1 = function (a0) { return [a0]; };
function PaymentButton1Component_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-bill1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("invoices", ctx_r2.invoices)("debt", ctx_r2.debt)("tax", ctx_r2.invoices.getTax())("customer_class", ctx_r2.customer_class)("paymentType", ctx_r2.invoices.getPaymentType() == 3 ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c0, ctx_r2.invoices.getPaymentType(), ctx_r2.invoices.getIdWallet()) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c1, ctx_r2.invoices.getPaymentType()))("isPreventEdit", true);
} }
function PaymentButton1Component_ng_template_19_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnConfirm", function PaymentButton1Component_ng_template_19_button_0_Template_button_nzOnConfirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.saveInvoice("print"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 4, "Complete"), "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r9.invoices.getInvoiceDetail().length)("nzLoading", ctx_r9.statusInvoice["payment"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 6, "Complete"), " ");
} }
function PaymentButton1Component_ng_template_19_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentButton1Component_ng_template_19_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.saveInvoice("print"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r10.invoices.getInvoiceDetail().length)("nzLoading", ctx_r10.statusInvoice["payment"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 3, "Complete"), " ");
} }
function PaymentButton1Component_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PaymentButton1Component_ng_template_19_button_0_Template, 4, 8, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PaymentButton1Component_ng_template_19_button_1_Template, 3, 5, "button", 15);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.vhAuth.localStorageGET("show_confirm_pay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.vhAuth.localStorageGET("show_confirm_pay"));
} }
class PaymentButton1Component {
    constructor(vhQueryCafe, vhAuth, productService) {
        this.vhQueryCafe = vhQueryCafe;
        this.vhAuth = vhAuth;
        this.productService = productService;
        // biểu hiện trang thái - 1/ đang cập nhật hóa đơn - 2/ đang xóa hóa đơn
        this.statusInvoice = {};
        // tiến hành thanh toán 
        this.payment = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        // tiến hành xóa hóa đơn
        this.deleteInvoice = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.testPrint = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.printAllLabel = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.printKitchenAll = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.checkPrinter = false;
        this.checkPrinterKitchen = false;
        this.colSpan = '12';
        this.openBillStatus = false;
    }
    keyEvent(event) {
        if (["F1", "F2", "Delete"].includes(event.key)) {
            switch (event.key) {
                case "F1":
                    document.getElementById("order-and-print").click();
                    break;
                case "F2":
                    document.getElementById("order").click();
                    break;
                case "Delete":
                    document.getElementById("delete-invoice").click();
                    break;
            }
            event.preventDefault();
            event.stopPropagation();
        }
    }
    ngOnChanges() {
        // kiểm tra máy in
        let printer = this.vhQueryCafe.getLocalPrintPage('page_desktop_sales');
        this.printer = printer ? printer.print_sizes[printer.print_sizes.findIndex(e => e._id == printer.print_size_default)] : null;
        if (this.printer) {
            this.checkPrinter = this.printer.enable;
        }
        let printer_kitchen = this.vhQueryCafe.getLocalPrintPage('page_desktop_kitchen');
        this.checkPrinterKitchen = printer_kitchen ? printer_kitchen.print_sizes[printer_kitchen.print_sizes.findIndex(e => e._id == printer_kitchen.print_size_default)].enable : null;
        if (this.checkPrinterKitchen && this.stamp)
            this.colSpan = '24';
        if (!this.checkPrinterKitchen && !this.stamp)
            this.colSpan = '24';
        if ((!this.checkPrinterKitchen && this.stamp) || (this.checkPrinterKitchen && !this.stamp))
            this.colSpan = '12';
    }
    saveInvoice(print = "notPrint") {
        this.payment.emit(print);
    }
    delete() {
        this.deleteInvoice.emit(true);
    }
    handlePrintAllLabel() {
        this.printAllLabel.emit(true);
        setTimeout(() => {
            this.printAllLabel.emit(false);
        }, 1000);
    }
    handleCancel() {
        this.openBillStatus = false;
    }
    /**
     * Tính lại bill detail cho Dịch vụ thời gian và setSubTotal() cho invoices
     */
    updateServiceTime() {
        if (!this.productService.isContainServiceTime(this.invoices))
            return;
        this.productService.updateServiceTimePriceInvoiceDetail(this.invoices.getInvoiceDetail(), this.invoices.getPriceType());
        this.invoices.setSubTotal();
    }
}
PaymentButton1Component.ɵfac = function PaymentButton1Component_Factory(t) { return new (t || PaymentButton1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_3__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_cafe_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService)); };
PaymentButton1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentButton1Component, selectors: [["app-payment-button1"]], hostBindings: function PaymentButton1Component_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function PaymentButton1Component_keydown_HostBindingHandler($event) { return ctx.keyEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, inputs: { invoices: "invoices", statusInvoice: "statusInvoice", stamp: "stamp" }, outputs: { payment: "payment", deleteInvoice: "deleteInvoice", testPrint: "testPrint", printAllLabel: "printAllLabel", printKitchenAll: "printKitchenAll" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 21, vars: 25, consts: [["nz-row", ""], ["nz-col", "", "nzSpan", "12", 1, "payment-btn", 2, "padding", "8px 0"], ["nz-button", "", 1, "order", 3, "disabled", "click"], ["style", "padding: 8px 0", "class", "payment-btn", "nz-col", "", "nzSpan", "12", 4, "ngIf"], ["class", "payment-btn", "style", "margin-top: 8px;", "nz-col", "", "nzSpan", "12", 4, "ngIf"], ["nz-button", "", "id", "delete-invoice", "nz-popconfirm", "", "nzPopconfirmPlacement", "top", 1, "delete", 3, "nzLoading", "nzPopconfirmTitle", "nzOnConfirm"], ["nz-col", "", 1, "payment-btn", 2, "margin-top", "8px", 3, "nzSpan"], ["nz-button", "", "id", "order-and-print", 1, "order-and-print", 3, "disabled", "nzLoading", "click"], [3, "nzMaskClosable", "nzFooter", "nzVisible", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterPrintKitchen", ""], ["nz-col", "", "nzSpan", "12", 1, "payment-btn", 2, "margin-top", "8px"], ["nz-button", "", "id", "order", 1, "order", 3, "disabled", "click"], [3, "invoices", "debt", "tax", "customer_class", "paymentType", "isPreventEdit"], ["id", "order-and-print", "class", "order-and-print", "nz-button", "", "nz-popconfirm", "", "nzPopconfirmPlacement", "top", 3, "disabled", "nzLoading", "nzPopconfirmTitle", "nzOnConfirm", 4, "ngIf"], ["nz-button", "", "id", "order-and-print", "class", "order-and-print", 3, "disabled", "nzLoading", "click", 4, "ngIf"], ["id", "order-and-print", "nz-button", "", "nz-popconfirm", "", "nzPopconfirmPlacement", "top", 1, "order-and-print", 3, "disabled", "nzLoading", "nzPopconfirmTitle", "nzOnConfirm"]], template: function PaymentButton1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentButton1Component_Template_button_click_2_listener() { return ctx.testPrint.emit(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PaymentButton1Component_div_5_Template, 4, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PaymentButton1Component_div_6_Template, 4, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzOnConfirm", function PaymentButton1Component_Template_button_nzOnConfirm_8_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentButton1Component_Template_button_click_13_listener() { ctx.updateServiceTime(); return ctx.openBillStatus = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "nz-modal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("nzVisibleChange", function PaymentButton1Component_Template_nz_modal_nzVisibleChange_16_listener($event) { return ctx.openBillStatus = $event; })("nzOnCancel", function PaymentButton1Component_Template_nz_modal_nzOnCancel_16_listener() { return ctx.handleCancel(); })("nzOnOk", function PaymentButton1Component_Template_nz_modal_nzOnOk_16_listener() { return ctx.saveInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PaymentButton1Component_ng_container_18_Template, 2, 11, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, PaymentButton1Component_ng_template_19_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.invoices.getInvoiceDetail().length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 15, "Print out for customer"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkPrinterKitchen);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("nzPopconfirmTitle", "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 17, "Delete"), "?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzLoading", ctx.statusInvoice.deleting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 19, "Delete"), " (DEL) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzSpan", ctx.colSpan);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.invoices.getInvoiceDetail().length)("nzLoading", ctx.statusInvoice.updating);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 21, "Pay & Print"), " (F1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nzMaskClosable", false)("nzFooter", _r3)("nzVisible", ctx.openBillStatus)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 23, "Payment information"));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_9__.NzPopconfirmDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_10__.NzModalContentDirective, _bill1_bill1_component__WEBPACK_IMPORTED_MODULE_1__.Bill1Component], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe], styles: [".payment-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: flex-end;\n  justify-content: space-between;\n}\n\n.order-and-print[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-green);\n  color: var(--ion-color-vh-white);\n  font-size: 0.9rem;\n  width: 100%;\n  height: 48px;\n  overflow: hidden;\n}\n\n.order[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-green);\n  border: 1px solid var(--ion-color-vh-green);\n  font-size: 0.9rem;\n  width: 98%;\n  height: 48px;\n  overflow: hidden;\n  white-space: break-spaces;\n}\n\n.delete[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-vh-white);\n  color: var(--ion-color-vh-red);\n  border: 1px solid var(--ion-color-vh-red);\n  font-size: 0.9rem;\n  width: 99%;\n  height: 48px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQtYnV0dG9uMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksMkNBQUE7RUFDQSw4QkFBQTtFQUNBLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUoiLCJmaWxlIjoicGF5bWVudC1idXR0b24xLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQtYnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm9yZGVyLWFuZC1wcmludCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm9yZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxufVxyXG4uZGVsZXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXJlZCk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtcmVkKTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgd2lkdGg6IDk5JTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 33758:
/*!******************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/payment-button1/payment-button1.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentButton1Module": () => (/* binding */ PaymentButton1Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _payment_button1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-button1.component */ 40874);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _bill1_bill1_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bill1/bill1.module */ 44293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






class PaymentButton1Module {
}
PaymentButton1Module.ɵfac = function PaymentButton1Module_Factory(t) { return new (t || PaymentButton1Module)(); };
PaymentButton1Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PaymentButton1Module });
PaymentButton1Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
            _bill1_bill1_module__WEBPACK_IMPORTED_MODULE_2__.Bill1Module,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PaymentButton1Module, { declarations: [_payment_button1_component__WEBPACK_IMPORTED_MODULE_0__.PaymentButton1Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule,
        _bill1_bill1_module__WEBPACK_IMPORTED_MODULE_2__.Bill1Module], exports: [_payment_button1_component__WEBPACK_IMPORTED_MODULE_0__.PaymentButton1Component] }); })();


/***/ }),

/***/ 38533:
/*!*************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/product-wishlist1/product-wishlist1.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductWishlist1Component": () => (/* binding */ ProductWishlist1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/pagination */ 93730);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/card */ 47108);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 39370);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















function ProductWishlist1Component_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductWishlist1Component_div_8_Template_nz_card_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const prod_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectFoods(prod_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prod_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", prod_r4.img ? prod_r4.img : "assets/icon/management/noimage.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](prod_r4.item_code);
} }
function ProductWishlist1Component_ng_container_11_div_2_s_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.vhAlgorithm.vhcurrencyunit(ctx_r12.choiceFood.price_origin));
} }
function ProductWishlist1Component_ng_container_11_div_2_nz_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const i_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", i_r16.unit)("nzValue", i_r16.ratio);
} }
function ProductWishlist1Component_ng_container_11_div_2_label_20_s_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.vhAlgorithm.vhcurrencyunit(sub_r17.price_origin));
} }
function ProductWishlist1Component_ng_container_11_div_2_label_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductWishlist1Component_ng_container_11_div_2_label_20_s_2_Template, 2, 1, "s", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r17 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", sub_r17._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", sub_r17.name, " - ", ctx_r14.vhAlgorithm.vhcurrencyunit(sub_r17.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r17.price < sub_r17.price_origin);
} }
function ProductWishlist1Component_ng_container_11_div_2_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Not property yet"));
} }
const _c0 = function (a0, a1) { return { "btn-activate": a0, "btn-disabled": a1 }; };
const _c1 = function () { return []; };
const _c2 = function () { return { standalone: true }; };
function ProductWishlist1Component_ng_container_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductWishlist1Component_ng_container_11_div_2_s_5_Template, 2, 1, "s", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductWishlist1Component_ng_container_11_div_2_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.choiceFood.ratio = $event; })("ngModelChange", function ProductWishlist1Component_ng_container_11_div_2_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.changeUnit($event, ctx_r22.choiceFood); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductWishlist1Component_ng_container_11_div_2_nz_option_8_Template, 1, 2, "nz-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductWishlist1Component_ng_container_11_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.choiceFood.quantity = ctx_r23.choiceFood.quantity - 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-input-number", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductWishlist1Component_ng_container_11_div_2_Template_nz_input_number_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.choiceFood.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductWishlist1Component_ng_container_11_div_2_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.choiceFood.quantity = ctx_r25.choiceFood.quantity + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-radio-group", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductWishlist1Component_ng_container_11_div_2_Template_nz_radio_group_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.choiceFood.id_subproduct = $event; })("ngModelChange", function ProductWishlist1Component_ng_container_11_div_2_Template_nz_radio_group_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.changeSub($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProductWishlist1Component_ng_container_11_div_2_label_20_Template, 3, 4, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductWishlist1Component_ng_container_11_div_2_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.choiceFood.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProductWishlist1Component_ng_container_11_div_2_div_24_Template, 3, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.vhAlgorithm.vhcurrencyunit(ctx_r7.choiceFood.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.choiceFood.price_origin > ctx_r7.choiceFood.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.choiceFood.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.choiceFood.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.choiceFood.quantity <= 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c0, ctx_r7.choiceFood.quantity > 0, ctx_r7.choiceFood.quantity <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", ctx_r7.choiceFood.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.choiceFood.quantity > 9999999998)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c0, ctx_r7.choiceFood.quantity <= 9999999998, ctx_r7.choiceFood.quantity > 9999999998));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.vhAlgorithm.vhcurrencyunit(ctx_r7.choiceFood.price * ctx_r7.choiceFood.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.choiceFood.id_subproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.choiceFood.subs ? ctx_r7.choiceFood.subs : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1))("ngForTrackBy", ctx_r7.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 20, "Enter note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.choiceFood.note)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.choiceFood.subs.length);
} }
function ProductWishlist1Component_ng_container_11_div_3_s_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.vhAlgorithm.vhcurrencyunit(ctx_r29.choiceFood.price_origin));
} }
function ProductWishlist1Component_ng_container_11_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductWishlist1Component_ng_container_11_div_3_s_4_Template, 2, 1, "s", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductWishlist1Component_ng_container_11_div_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.choiceFood.quantity = ctx_r30.choiceFood.quantity - 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-input-number", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductWishlist1Component_ng_container_11_div_3_Template_nz_input_number_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.choiceFood.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductWishlist1Component_ng_container_11_div_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.choiceFood.quantity = ctx_r33.choiceFood.quantity + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductWishlist1Component_ng_container_11_div_3_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.choiceFood.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.vhAlgorithm.vhcurrencyunit(ctx_r8.choiceFood.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.choiceFood.price_origin > ctx_r8.choiceFood.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.choiceFood.quantity <= 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](16, _c0, ctx_r8.choiceFood.quantity > 0, ctx_r8.choiceFood.quantity <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", ctx_r8.choiceFood.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r8.choiceFood.quantity > 9999999998)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](19, _c0, ctx_r8.choiceFood.quantity <= 9999999998, ctx_r8.choiceFood.quantity > 9999999998));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.vhAlgorithm.vhcurrencyunit(ctx_r8.choiceFood.price * ctx_r8.choiceFood.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, "Enter note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r8.choiceFood.note)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2));
} }
function ProductWishlist1Component_ng_container_11_div_4_nz_collapse_panel_6_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", value_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r39);
} }
function ProductWishlist1Component_ng_container_11_div_4_nz_collapse_panel_6_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-radio-group", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductWishlist1Component_ng_container_11_div_4_nz_collapse_panel_6_Template_nz_radio_group_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const properties_r36 = restoredCtx.$implicit; return properties_r36.selectedValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductWishlist1Component_ng_container_11_div_4_nz_collapse_panel_6_label_2_Template, 2, 2, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const properties_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", properties_r36.name)("nzActive", properties_r36.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", properties_r36.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", properties_r36.value);
} }
function ProductWishlist1Component_ng_container_11_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-collapse", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductWishlist1Component_ng_container_11_div_4_nz_collapse_panel_6_Template, 3, 4, "nz-collapse-panel", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "Properties"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.choiceFood.properties);
} }
function ProductWishlist1Component_ng_container_11_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductWishlist1Component_ng_container_11_div_5_div_5_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const item_r43 = restoredCtx.$implicit; return item_r43.quantity = item_r43.quantity - 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-input-number", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductWishlist1Component_ng_container_11_div_5_div_5_Template_nz_input_number_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const item_r43 = restoredCtx.$implicit; return item_r43.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductWishlist1Component_ng_container_11_div_5_div_5_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const item_r43 = restoredCtx.$implicit; return item_r43.quantity = item_r43.quantity + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r43 = ctx.$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 13, item_r43.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, "Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "topping-" + item_r43._id)("value", ctx_r42.vhAlgorithm.vhcurrencyunit(item_r43.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r43.quantity <= 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c0, item_r43.quantity > 0, item_r43.quantity <= 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0)("nzStep", 1)("ngModel", item_r43.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r43.quantity > 9999999998)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c0, item_r43.quantity <= 9999999998, item_r43.quantity > 9999999998));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r42.vhAlgorithm.vhcurrencyunit(item_r43.price * item_r43.quantity), " ");
} }
function ProductWishlist1Component_ng_container_11_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductWishlist1Component_ng_container_11_div_5_div_5_Template, 16, 23, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "Side dishes"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.choiceFood.toppings);
} }
function ProductWishlist1Component_ng_container_11_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r49._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r49.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, item_r49.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 9, item_r49.date_exp, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "Stock"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 14, item_r49.quantity_branch[ctx_r48.id_branch] / ctx_r48.choiceFood.ratio, "1.0-2"));
} }
function ProductWishlist1Component_ng_container_11_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ch\u1ECDn l\u00F4, h\u1EA1n s\u1EED d\u1EE5ng c\u1EE7a nguy\u00EAn li\u1EC7u ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-radio-group", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductWishlist1Component_ng_container_11_div_6_Template_nz_radio_group_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.choiceFood.id_lotproduct = $event; })("ngModelChange", function ProductWishlist1Component_ng_container_11_div_6_Template_nz_radio_group_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.changeLot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductWishlist1Component_ng_container_11_div_6_div_3_Template, 18, 17, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.choiceFood.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.choiceFood.lots);
} }
function ProductWishlist1Component_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductWishlist1Component_ng_container_11_div_2_Template, 25, 30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductWishlist1Component_ng_container_11_div_3_Template, 17, 23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductWishlist1Component_ng_container_11_div_4_Template, 7, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductWishlist1Component_ng_container_11_div_5_Template, 6, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductWishlist1Component_ng_container_11_div_6_Template, 4, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.choiceFood.manysize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.choiceFood.manysize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.choiceFood.properties && ctx_r1.choiceFood.properties.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.choiceFood.toppings && ctx_r1.choiceFood.toppings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.choiceFood.lots);
} }
function ProductWishlist1Component_ng_template_12_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductWishlist1Component_ng_template_12_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.selectFoodsCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Cancel"), " ");
} }
function ProductWishlist1Component_ng_template_12_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductWishlist1Component_ng_template_12_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.chooseFood(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Add"));
} }
function ProductWishlist1Component_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductWishlist1Component_ng_template_12_button_0_Template, 3, 3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductWishlist1Component_ng_template_12_button_1_Template, 3, 3, "button", 61);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.choiceFood.manysize || ctx_r3.choiceFood.subs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.choiceFood.manysize || ctx_r3.choiceFood.subs.length);
} }
class ProductWishlist1Component {
    constructor(vhQueryCafe, vhAlgorithm) {
        this.vhQueryCafe = vhQueryCafe;
        this.vhAlgorithm = vhAlgorithm;
        // các chương trình khuyến mãi hiện có
        // trả về product được chọn và đã xử lý cho bill-detail1
        this.productChoice = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.indexPage = 1;
        this.wishList = [];
        this.choiceFood = {};
        this.showOptions = false;
        this.id_branch = this.vhQueryCafe.getDefaultBranch()._id;
        this.auto_hidden_lot = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').auto_hidden_lot;
        this.auto_select_lot = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch').auto_select_lot;
    }
    ngOnInit() {
        let dataProd = this.vhQueryCafe.getlocalDetailProducts().filter(item => item.type == 1 || item.type == 3).filter(product => product.selling && !product.delete_hidden).slice(0, 12).map(item => {
            let unit = this.vhQueryCafe.getUnit_byRatio(item.units, item.units.find(u => u.default).ratio);
            return Object.assign(Object.assign({}, item), unit);
        });
        this.wishList = dataProd;
    }
    myTrackByFunction(element, index) {
        return element._id ? element._id : index;
    }
    changeSub(value) {
        let subChoice = this.choiceFood.subs.find(item => item._id == value);
        if (subChoice) {
            this.choiceFood['id_subproduct'] = value;
            this.choiceFood['price'] = subChoice.price;
            this.choiceFood['price_origin'] = subChoice.price_origin;
        }
    }
    /** Chọn sản phẩm
     * @param value dữ liệu sản phẩm được chọn
    */
    selectFoods(value) {
        this.choiceFood = {
            toppings: value.toppings, quantity: 1, note: "", price_origin: this.default_price_type == 1 ? value.price : value.price2 ? value.price2 : value.price, name: value.name, ptype: value.type, properties: value.properties, _id: value._id,
            price: this.default_price_type == 1 ? value.price : value.price2 ? value.price2 : value.price, ratio: 1, units: value.units
        };
        if (value.lot_number)
            this.choiceFood['lot_number'] = value.lot_number;
        if (value.lots)
            this.choiceFood['lots'] = value.lots;
        if (value.id_lotproduct)
            this.choiceFood['id_lotproduct'] = value.id_lotproduct;
        if (value.id_subproduct)
            this.choiceFood.id_subproduct = value.id_subproduct;
        // Lưu trữ các properties đã chon
        if (this.choiceFood.properties) {
            // sao chép mảng giá trị chọn
            this.choiceFood.properties.forEach(element => {
                element.active = true;
                element.selectedValue = element.value[0];
            });
        }
        // Kiểm tra topping
        if (this.choiceFood.toppings) {
            for (let topping of this.choiceFood.toppings) {
                let data = this.vhQueryCafe.getlocalProduct(topping.id_product);
                topping.quantity = 0;
                topping.name = data.name;
                topping.price_origin = this.default_price_type == 1 ? data.units[0].price : data.units[0].price2 ? data.units[0].price2 : data.units[0].price;
                topping.price = this.default_price_type == 1 ? data.units[0].price : data.units[0].price2 ? data.units[0].price2 : data.units[0].price;
                topping.ratio = 1;
                topping.ptype = 4;
                topping._id = topping.id_product;
            }
        }
        if (this.choiceFood.type == 3 && this.choiceFood.lots) {
            this.choiceFood.lots = this.vhAlgorithm.sortDatebyASC(this.choiceFood.lots, 'date_exp');
            if (this.auto_hidden_lot)
                this.choiceFood.lots = this.choiceFood.lots.filter(e => new Date(e.date_exp).getTime() >= new Date().getTime());
            // if (this.auto_select_lot && this.choiceFood.lots.length) {
            let min_date_exp = this.vhAlgorithm.sortDatebyASC(this.choiceFood.lots.filter(e => new Date(e.date_exp).getTime() >= new Date().getTime()), 'date_exp');
            if (min_date_exp.length) {
                this.choiceFood['id_lotproduct'] = min_date_exp[0]._id;
                this.choiceFood['lot_number'] = min_date_exp[0].lot_number;
            }
            // }
        }
        if (this.choiceFood) {
            this.showOptions = true;
        }
        console.log(this.choiceFood);
    }
    selectFoodsCancel() {
        this.showOptions = false;
    }
    chooseFood() {
        this.showOptions = false;
        if (this.choiceFood.toppings)
            this.choiceFood.toppings = this.choiceFood.toppings.filter(item => item.quantity);
        if (this.choiceFood.quantity) {
            this.productChoice.emit(this.choiceFood);
        }
        console.log(this.choiceFood);
    }
    changeUnit(ev, item) {
        if (this.default_price_type == 1) {
            let unit = this.vhQueryCafe.getUnit_byRatio(item.units, ev);
            if (unit) {
                item.unit = unit.unit;
                item.price = parseFloat(unit.price);
                item.ratio = parseFloat(unit.ratio);
                item.price_origin = parseFloat(unit.price);
            }
        }
        else {
            let unit = this.vhQueryCafe.getUnit_byRatio(item.units, ev);
            if (unit) {
                item.unit = unit.unit;
                item.price = parseFloat(unit.price2);
                item.ratio = parseFloat(unit.ratio);
                item.price_origin = parseFloat(unit.price2);
            }
        }
    }
    changeLot(e) {
        this.choiceFood.lot_number = this.choiceFood.lots.find(item => item._id == e).lot_number;
    }
}
ProductWishlist1Component.ɵfac = function ProductWishlist1Component_Factory(t) { return new (t || ProductWishlist1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAlgorithm)); };
ProductWishlist1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductWishlist1Component, selectors: [["app-product-wishlist1"]], inputs: { default_price_type: "default_price_type" }, outputs: { productChoice: "productChoice" }, decls: 14, vars: 15, consts: [[1, "wish-list"], [1, "wish-list-header"], [1, "wish-list-header-title"], [1, "wish-list-header-page"], ["nzSimple", "", 3, "nzPageIndex", "nzPageSize", "nzTotal", "nzPageIndexChange"], [1, "wish-list-area"], ["class", "wish-list-area-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nzWidth", "40vw", 3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterSelectFood", ""], [1, "wish-list-area-item"], ["nzHoverable", "", 1, "wish-list-area-item-card", 3, "click"], ["alt", "image", 2, "width", "130px", "height", "130px", "object-fit", "contain", 3, "src"], [1, "wish-list-area-item-card-title"], [1, "item-code"], [1, "ant-table-body", 2, "max-height", "50vh", "overflow-y", "auto", "overflow-x", "hidden", "padding", "0 8px"], ["nz-row", "", "class", "option-modal", 4, "ngIf"], [4, "ngIf"], ["nz-row", "", 1, "option-modal"], ["nz-col", "", "nzSpan", "24", 1, "items-food"], ["nz-row", "", 2, "width", "100%"], ["nz-col", "", "nzSpan", "7", 1, "align-center"], ["style", "font-size: 0.8rem;", 4, "ngIf"], ["nz-col", "", "nzSpan", "4"], [2, "width", "90%", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "6", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], ["nz-button", "", "nzType", "default", 3, "disabled", "ngClass", "click"], ["nz-icon", "", "nzType", "minus"], [1, "align-center", "text-align-center"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], ["nz-icon", "", "nzType", "plus"], ["nz-col", "", "nzSpan", "7", 1, "align-center", "text-align-right"], ["nz-col", "", "nzSpan", "24", 1, "align-center"], [3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nzBorderless", "", "nz-input", "", 1, "order-note", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], [2, "font-size", "0.8rem"], [3, "nzLabel", "nzValue"], ["nz-radio", "", 3, "nzValue"], ["nz-col", "", "nzSpan", "10", 2, "display", "flex", "justify-content", "space-between", "align-items", "center"], ["nz-col", "", "nzSpan", "24", 1, "align-center", 2, "padding", "16px 0", "font-weight", "bold"], ["nzGhost", ""], [3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive"], [2, "padding-left", "24px", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", "class", "items-food", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "7", 1, "align-center", "price-edit"], ["maxlength", "15", "nz-input", "", 3, "ngClass", "value", "placeholder"], ["nz-col", "", "nzSpan", "10", 1, "align-end", "text-align-center", "price-edit", 2, "display", "flex", "justify-content", "space-evenly", "align-items", "flex-end"], ["nz-col", "", "nzSpan", "7", 1, "text-align-right", 2, "display", "flex", "align-items", "flex-end", "justify-content", "flex-end"], [2, "width", "100%", "padding", "8px 0", 3, "ngModel", "ngModelChange"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], ["nz-col", "", "nzSpan", "6"], ["nz-col", "", "nzSpan", "6", 1, "ion-text-end"], [2, "color", "var(--ion-color-vh-orange)"], ["nz-button", "", "class", "nz-hover-border", "style", "background-color: var(--ion-color-vh-white); color: var(--ion-color-vh-black)", "nzType", "default", 3, "click", 4, "ngIf"], ["nz-button", "", "class", "nz-hover-border", "style", "background-color: var(--ion-color-vh-green); color: var(--ion-color-vh-white)", "class", "nz-hover-border-green", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"]], template: function ProductWishlist1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-pagination", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzPageIndexChange", function ProductWishlist1Component_Template_nz_pagination_nzPageIndexChange_6_listener($event) { return ctx.indexPage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductWishlist1Component_div_8_Template, 7, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-modal", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function ProductWishlist1Component_Template_nz_modal_nzVisibleChange_10_listener($event) { return ctx.showOptions = $event; })("nzOnCancel", function ProductWishlist1Component_Template_nz_modal_nzOnCancel_10_listener() { return ctx.selectFoodsCancel(); })("nzOnOk", function ProductWishlist1Component_Template_nz_modal_nzOnOk_10_listener() { return ctx.chooseFood(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductWishlist1Component_ng_container_11_Template, 7, 5, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductWishlist1Component_ng_template_12_Template, 2, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "Dishes/beverage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPageIndex", ctx.indexPage)("nzPageSize", 5)("nzTotal", ctx.wishList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 11, ctx.wishList, 5 * (ctx.indexPage - 1), 5 * (ctx.indexPage - 1) + 5))("ngForTrackBy", ctx.myTrackByFunction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", ctx.choiceFood.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.showOptions)("nzFooter", _r2);
    } }, directives: [ng_zorro_antd_pagination__WEBPACK_IMPORTED_MODULE_2__.NzPaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalContentDirective, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_5__.NzCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_6__.NzColDirective, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_9__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_10__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_12__.NzIconDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_13__.NzInputNumberComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioGroupComponent, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_7__.NzOptionComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_14__.NzRadioComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__.NzCollapseComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_16__.NzCollapsePanelComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe], styles: [".wish-list[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #ffffff;\n  border-radius: 5px;\n}\n.wish-list-header[_ngcontent-%COMP%] {\n  height: 20%;\n  font-size: 1rem;\n  display: flex;\n  justify-content: space-between;\n  padding: 8px;\n  align-items: center;\n}\n.wish-list-header-title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  border-bottom: 2px var(--ion-color-vh-green) solid;\n}\n.wish-list-area[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 20% 20% 20% 20% 20%;\n  grid-template-rows: 100%;\n  height: 80%;\n}\n.wish-list-area-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 8px;\n}\n.wish-list-area-item-card[_ngcontent-%COMP%] {\n  max-width: calc(100% - 16px);\n  height: 100%;\n  margin: auto;\n  border-radius: 5px;\n  text-align: center;\n}\n.wish-list-area-item-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: calc(100% - 54px);\n  border-radius: 5px 5px 0 0;\n  object-fit: cover;\n}\n.wish-list-area-item-card-title[_ngcontent-%COMP%] {\n  height: 54px;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 0.9rem;\n  padding: 0 8px;\n}\n\n.option-modal[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.option-modal[_ngcontent-%COMP%]   .order-note[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-vh-gray);\n  padding: 0;\n}\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px calc(100% - 64px) 32px;\n  grid-template-rows: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-activate[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-green) !important;\n}\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-activate[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--ion-color-vh-green) !important;\n}\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-disabled[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-gray) !important;\n}\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--ion-color-vh-gray) !important;\n}\n.option-modal[_ngcontent-%COMP%]   .align-center[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.option-modal[_ngcontent-%COMP%]   .text-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.option-modal[_ngcontent-%COMP%]   .text-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n  .radio-purchase span {\n  width: 100%;\n}\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n.item-code[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--ion-color-vh-green);\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtd2lzaGxpc3QxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQURRO0VBQ0ksZ0NBQUE7RUFDQSxrREFBQTtBQUdaO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsMENBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUFDUjtBQUFRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBRVo7QUFEWTtFQUNJLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBR2hCO0FBRmdCO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0FBSXBCO0FBRmdCO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFJcEI7QUFHQSxVQUFBO0FBQ0E7RUFDSSxXQUFBO0FBQUo7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FBQ1I7QUFDSTtFQUNJLGFBQUE7RUFDQSxrREFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQVE7RUFDSSxrREFBQTtBQUVaO0FBRFk7RUFDSSwwQkFBQTtFQUNBLDJDQUFBO0FBR2hCO0FBQVE7RUFDSSxpREFBQTtBQUVaO0FBRFk7RUFDSSwwQkFBQTtFQUNBLDBDQUFBO0FBR2hCO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBQ0k7RUFDSSxrQkFBQTtBQUNSO0FBR0E7RUFDSSxXQUFBO0FBQUo7QUFDRztFQUNJLDBCQUFBO0FBQ1A7QUFHQTtFQUNHLFdBQUE7QUFBSDtBQUVBO0VBQ0ksaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0oiLCJmaWxlIjoicHJvZHVjdC13aXNobGlzdDEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lzaC1saXN0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICYtdGl0bGUge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgc29saWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYtYXJlYSB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSAyMCUgMjAlIDIwJSAyMCU7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgICYtaXRlbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgJi1jYXJkIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTRweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqTW9kYWwgKi9cclxuLm9wdGlvbi1tb2RhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5vcmRlci1ub3RlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAubnVtYmVyLWNob2ljZSB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMycHggY2FsYygxMDAlIC0gNjRweCkgMzJweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuYnRuLWFjdGl2YXRlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFsaWduLWNlbnRlciB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtYWxpZ24tcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnRleHQtYWxpZ24tY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucmFkaW8tcHVyY2hhc2UgIHNwYW57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgLmFudC1yYWRpb3tcclxuICAgICAgIG1heC13aWR0aDogMjRweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucmFkaW8tcHVyY2hhc2UgIC5hbnQtcmFkaW97XHJcbiAgIHdpZHRoOiAxNnB4OyBcclxufVxyXG4uaXRlbS1jb2RlIHtcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9Il19 */"] });


/***/ }),

/***/ 66667:
/*!**********************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/product-wishlist1/product-wishlist1.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductWishlist1Module": () => (/* binding */ ProductWishlist1Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _product_wishlist1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-wishlist1.component */ 38533);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class ProductWishlist1Module {
}
ProductWishlist1Module.ɵfac = function ProductWishlist1Module_Factory(t) { return new (t || ProductWishlist1Module)(); };
ProductWishlist1Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProductWishlist1Module });
ProductWishlist1Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductWishlist1Module, { declarations: [_product_wishlist1_component__WEBPACK_IMPORTED_MODULE_0__.ProductWishlist1Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule], exports: [_product_wishlist1_component__WEBPACK_IMPORTED_MODULE_0__.ProductWishlist1Component] }); })();


/***/ }),

/***/ 91577:
/*!*************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/retail-info/retail-info.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RetailInfoComponent": () => (/* binding */ RetailInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/form */ 32734);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 70325);













function RetailInfoComponent_ng_container_2_ng_template_12_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Retail name is required"), " ");
} }
function RetailInfoComponent_ng_container_2_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RetailInfoComponent_ng_container_2_ng_template_12_ng_container_0_Template, 3, 3, "ng-container", 12);
} if (rf & 2) {
    const control_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r7.hasError("required"));
} }
function RetailInfoComponent_ng_container_2_ng_template_24_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "At least 6 characters"), " ");
} }
function RetailInfoComponent_ng_container_2_ng_template_24_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Phone number is required"), " ");
} }
function RetailInfoComponent_ng_container_2_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RetailInfoComponent_ng_container_2_ng_template_24_ng_container_0_Template, 3, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RetailInfoComponent_ng_container_2_ng_template_24_ng_container_1_Template, 3, 3, "ng-container", 12);
} if (rf & 2) {
    const control_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r9.hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", control_r9.hasError("required"));
} }
function RetailInfoComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RetailInfoComponent_ng_container_2_ng_template_12_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "nz-form-control", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RetailInfoComponent_ng_container_2_ng_template_24_Template, 2, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-form-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "nz-form-control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-input-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.addRetailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "Name"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzErrorTip", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, "Enter customer name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 13, "Phone number"), "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzErrorTip", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 15, "Enter customer phone"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 17, "Address"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 19, "Enter address"));
} }
const _c0 = function (a0) { return { opacity: a0 }; };
function RetailInfoComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RetailInfoComponent_ng_template_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RetailInfoComponent_ng_template_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.close(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.addRetailForm.invalid)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r2.addRetailForm.invalid ? 0.5 : 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "Add"));
} }
class RetailInfoComponent {
    constructor() {
        this.showDrawerAddRetail = false;
        this.retail_name = '';
        this.retail_phone = '';
        this.retail_address = '';
        this.closeAddCustomer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.initaddRetailForm();
    }
    close(success) {
        this.closeAddCustomer.emit(success ? this.addRetailForm.value : false);
    }
    initaddRetailForm() {
        this.addRetailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            retail_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.retail_name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])),
            retail_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.retail_phone, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(6)])),
            retail_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(this.retail_address),
        });
    }
}
RetailInfoComponent.ɵfac = function RetailInfoComponent_Factory(t) { return new (t || RetailInfoComponent)(); };
RetailInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RetailInfoComponent, selectors: [["app-retail-info"]], inputs: { showDrawerAddRetail: "showDrawerAddRetail", retail_name: "retail_name", retail_phone: "retail_phone", retail_address: "retail_address" }, outputs: { closeAddCustomer: "closeAddCustomer" }, decls: 5, vars: 7, consts: [[3, "nzMaskClosable", "nzWidth", "nzTitle", "nzVisible", "nzFooter", "nzOnClose"], [4, "nzDrawerContent"], ["footerAddRetail", ""], ["nz-form", "", 3, "formGroup"], ["nz-col", "", "nzSpan", "24"], [1, "label"], [3, "nzErrorTip"], ["formControlName", "retail_name", "nz-input", "", "required", "", 3, "placeholder"], ["combineTplName", ""], ["formControlName", "retail_phone", "type", "tel", "nz-input", "", "minlength", "6", "required", "", 1, "phone", 3, "placeholder"], ["combineTplPhone", ""], ["formControlName", "retail_address", "nz-input", "", 3, "placeholder"], [4, "ngIf"], [1, "footerAddRetail", 2, "float", "right"], ["nz-button", "", 2, "margin-right", "8px", 3, "click"], ["nz-button", "", 3, "disabled", "ngStyle", "click"]], template: function RetailInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function RetailInfoComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RetailInfoComponent_ng_container_2_Template, 36, 21, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RetailInfoComponent_ng_template_3_Template, 7, 10, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 5, "Add customer retail"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 400)("nzVisible", ctx.showDrawerAddRetail)("nzFooter", _r1);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerContentDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormItemComponent, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_3__.NzFormControlComponent, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__.NzInputGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_8__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_9__.NzWaveDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: [".ant-form-item[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  border: 1px solid #c8c7cc !important;\n  border-radius: 5px !important;\n}\n\n.footerAddRetail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-gray);\n  border: 1px solid var(--ion-color-vh-gray);\n  background-color: var(--ion-color-vh-white);\n}\n\n.footerAddRetail[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 0.9rem;\n  color: var(--ion-color-vh-white);\n  border: 1px solid var(--ion-color-vh-green);\n  background-color: var(--ion-color-vh-green);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldGFpbC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKOztBQUNBOztFQUVJLG9DQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFDSTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0FBRVI7O0FBQUk7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSwyQ0FBQTtBQUVSIiwiZmlsZSI6InJldGFpbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFudC1mb3JtLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiAwIDAgNXB4O1xyXG59XHJcbmlucHV0LFxyXG50ZXh0YXJlYSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzhjN2NjICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG4uZm9vdGVyQWRkUmV0YWlsIHtcclxuICAgIGJ1dHRvbjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSk7XHJcbiAgICB9XHJcbiAgICBidXR0b246bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLXdoaXRlKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 73016:
/*!***************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/search-combo/search-combo.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComboComponent": () => (/* binding */ SearchComboComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 70325);


















function SearchComboComponent_div_2_nz_list_item_9_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", combo_r8.quantity, "x ", combo_r8.name, ", ");
} }
function SearchComboComponent_div_2_nz_list_item_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComboComponent_div_2_nz_list_item_9_Template_nz_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r6 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.selectCombos(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item-meta", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-list-item-meta-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-list-item-meta-description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchComboComponent_div_2_nz_list_item_9_span_6_Template, 2, 2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzAvatar", item_r6.img ? item_r6.img : "assets/icon/management/noimage.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r6.combos);
} }
function SearchComboComponent_div_2_nz_list_empty_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "No data"));
} }
const _c0 = function () { return { standalone: true }; };
function SearchComboComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComboComponent_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.tempVal = $event; })("ngModelChange", function SearchComboComponent_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.searchCombos($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "cdk-virtual-scroll-viewport", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComboComponent_div_2_nz_list_item_9_Template, 7, 3, "nz-list-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchComboComponent_div_2_nz_list_empty_10_Template, 2, 3, "nz-list-empty", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "Search for side dishes name, barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.tempVal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchList)("ngForTrackBy", ctx_r0.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchList.length === 0);
} }
function SearchComboComponent_ng_container_4_div_1_s_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.vhAlgorithm.vhcurrencyunit(ctx_r15.choiceCombos.price_origin));
} }
function SearchComboComponent_ng_container_4_div_1_ng_container_17_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lot_r20 = ctx.$implicit;
    const combo_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", lot_r20._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lot_r20.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, lot_r20.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 9, lot_r20.date_exp, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "Stock"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 14, lot_r20.quantity_branch[ctx_r19.id_branch] / combo_r17.ratio, "1.0-2"));
} }
function SearchComboComponent_ng_container_4_div_1_ng_container_17_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-radio-group", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComboComponent_ng_container_4_div_1_ng_container_17_div_1_Template_nz_radio_group_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const combo_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return combo_r17.id_lotproduct = $event; })("ngModelChange", function SearchComboComponent_ng_container_4_div_1_ng_container_17_div_1_Template_nz_radio_group_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const combo_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.changeLot($event, combo_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComboComponent_ng_container_4_div_1_ng_container_17_div_1_div_8_Template, 18, 17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const combo_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "Select lot and expiry date for combo components"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", combo_r17.name, " (", combo_r17.unit, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", combo_r17.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", combo_r17.lots);
} }
function SearchComboComponent_ng_container_4_div_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComboComponent_ng_container_4_div_1_ng_container_17_div_1_Template, 9, 7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const combo_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", combo_r17.lots);
} }
const _c1 = function (a0, a1) { return { "btn-activate": a0, "btn-disabled": a1 }; };
function SearchComboComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchComboComponent_ng_container_4_div_1_Template_input_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.updatePrice(ctx_r28.choiceCombos); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComboComponent_ng_container_4_div_1_s_5_Template, 2, 1, "s", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComboComponent_ng_container_4_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.reduceQuantity(ctx_r30.choiceCombos); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-input-number", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchComboComponent_ng_container_4_div_1_Template_nz_input_number_blur_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.updatePrice(ctx_r31.choiceCombos); })("ngModelChange", function SearchComboComponent_ng_container_4_div_1_Template_nz_input_number_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.choiceCombos.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComboComponent_ng_container_4_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.increaseQuantity(ctx_r33.choiceCombos); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComboComponent_ng_container_4_div_1_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.choiceCombos.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SearchComboComponent_ng_container_4_div_1_ng_container_17_Template, 2, 1, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 18, "Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "price-" + ctx_r14.choiceCombos._id)("disabled", !ctx_r14.vhAuth.checkLocalMyPermissionName("sales_enable_update_price_bill_detail"))("value", ctx_r14.vhAlgorithm.vhcurrencyunit(ctx_r14.choiceCombos.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.choiceCombos.price_origin > ctx_r14.choiceCombos.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.choiceCombos.quantity <= 1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](22, _c1, ctx_r14.choiceCombos.quantity > 0, ctx_r14.choiceCombos.quantity <= 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", ctx_r14.choiceCombos.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.choiceCombos.quantity > 9999999998)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c1, ctx_r14.choiceCombos.quantity <= 9999999998, ctx_r14.choiceCombos.quantity > 9999999998));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.vhAlgorithm.vhcurrencyunit(ctx_r14.choiceCombos.price * ctx_r14.choiceCombos.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 20, "Enter note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r14.choiceCombos.note)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.choiceCombos.combos);
} }
function SearchComboComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComboComponent_ng_container_4_div_1_Template, 18, 29, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.choiceCombos.manysize);
} }
function SearchComboComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComboComponent_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.selectFoodsCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComboComponent_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.chooseCombos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "Add"));
} }
class SearchComboComponent {
    constructor(vhAlgorithm, vhQueryCafe, vhAuth) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAuth = vhAuth;
        this.showDrawerCombosList = true;
        // trả về product được chọn và đã xử lý cho bill-detail1
        this.closeSearchCombosList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.combosList = [];
        this.choiceCombos = {};
        this.searchList = [];
        this.id_branch = this.vhQueryCafe.getDefaultBranch()._id;
        this.auto_hidden_lot = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch')
            .auto_hidden_lot;
        this.auto_select_lot = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch')
            .auto_select_lot;
        this.tempVal = '';
        this.editPrice = {};
        this.showOptions = false;
    }
    ngOnInit() {
        let dispatcher_done = !this.vhQueryCafe.getLocalAppSettingNameBranch('dispatchers_enable')
            .dispatchers_enable;
        this.combosList = this.vhQueryCafe
            .getlocalDetailProducts(5)
            .filter((item) => !item.delete_hidden)
            .map((e) => {
            this.handleLotsOfCombo(e.combos.filter((lot) => lot.lots));
            return Object.assign(Object.assign(Object.assign(Object.assign({}, e), { dispatcher_done: dispatcher_done }), e.units[0]), { combos: e.combos.map((pro) => {
                    return Object.assign(Object.assign({}, pro), { unit: this.getUnit(pro.units, pro.ratio), ptype: pro.type });
                }) });
        });
        this.searchList = [...this.combosList];
        this.searchList = this.vhAlgorithm.sortVietnamesebyASC(this.searchList, 'name');
    }
    ngAfterViewInit() {
        document.getElementById('inputSearchCombos').focus();
    }
    handleLotsOfCombo(combos) {
        combos = this.vhAlgorithm.sortDatebyASC(combos, 'date_exp');
        for (let i of combos) {
            if (i.lots.length) {
                if (this.auto_hidden_lot)
                    i.lots = i.lots.filter((e) => new Date(e.date_exp).getTime() >= new Date().getTime());
                let min_date_exp = this.vhAlgorithm.sortDatebyASC(i.lots, 'date_exp');
                // if (this.auto_select_lot)
                i['id_lotproduct'] = min_date_exp[0]._id;
            }
        }
    }
    myTrackByFunction(element, index) {
        return element._id ? element._id : index;
    }
    goBack() {
        this.closeSearchCombosList.emit(false);
    }
    /** Tìm kiếm combo
     * @param value giá trị tìm kiếm
     */
    searchCombos(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.combosList, [
                'name',
            ]);
        else
            this.searchList = this.combosList;
        this.searchList = this.vhAlgorithm.sortVietnamesebyASC(this.searchList, 'name');
    }
    /**
     * Chọn combo để xử lý
     * @param value dữ liệu combo được chọn
     */
    selectCombos(value) {
        this.choiceCombos = Object.assign(Object.assign({}, value), { quantity: 1, note: '', price_origin: value.price, price: value.price, ptype: 5 });
        if (this.choiceCombos) {
            this.showOptions = true;
            setTimeout(() => {
                this.editPrice['price-' + value._id] = this.vhAlgorithm.vhnumeral('.price-' + value._id);
            }, 200);
        }
    }
    /**Thêm cleavejs chỉnh sửa giá món ăn */
    updatePrice(item) {
        let price = this.editPrice['price-' + item._id].getRawValue();
        this.choiceCombos.price = price ? parseFloat(price) : 0;
        this.choiceCombos.quantity =
            this.choiceCombos.quantity > 0 ? this.choiceCombos.quantity : 1;
    }
    chooseCombos() {
        this.showOptions = false;
        if (this.choiceCombos['quantity']) {
            this.choiceCombos['combos'] = this.choiceCombos['combos'].map((item) => {
                return Object.assign(Object.assign({}, item), { id_category: this.vhQueryCafe.getlocalProduct(item.id_product)
                        .id_category });
            });
            this.closeSearchCombosList.emit(this.choiceCombos);
        }
    }
    selectFoodsCancel() {
        this.showOptions = false;
    }
    changeLot(e, item) {
        item.lot_number = item.lots.find((find) => find._id == e).lot_number;
    }
    getUnit(units, ratio) {
        return this.vhQueryCafe.getUnit_byRatio(units, ratio).unit;
    }
    /** Tăng số lượng sản phẩm */
    increaseQuantity(item) {
        if (item.quantity != '')
            item.quantity = parseFloat(item.quantity);
        item.quantity = item.quantity + 1;
    }
    /** Giảm số lượng sản phẩm */
    reduceQuantity(item) {
        if (item.quantity != '')
            item.quantity = parseFloat(item.quantity);
        item.quantity = item.quantity - 1;
    }
}
SearchComboComponent.ɵfac = function SearchComboComponent_Factory(t) { return new (t || SearchComboComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAuth)); };
SearchComboComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComboComponent, selectors: [["app-search-combo"]], inputs: { showDrawerCombosList: "showDrawerCombosList" }, outputs: { closeSearchCombosList: "closeSearchCombosList" }, decls: 7, vars: 9, consts: [[3, "nzMaskClosable", "nzWidth", "nzVisible", "nzTitle", "nzOnClose"], ["id", "search-combos-popup", 4, "nzDrawerContent"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterSelectFood", ""], ["id", "search-combos-popup"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "search"], ["id", "inputSearchCombos", "nz-input", "", 1, "nz-hover-border", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], ["nz-row", "", 2, "height", "calc(100% - 35px)", "padding", "8px 0"], ["nz-col", "", "nzSpan", "24"], [1, "infinite-container", "ant-table-body", 3, "itemSize"], ["nzItemLayout", "horizontal"], ["class", "combos-item", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzNoResult", 4, "ngIf"], [1, "combos-item", 3, "click"], [3, "nzAvatar"], [2, "font-size", "0.9rem", "color", "var(--ion-color-vh-black)"], ["style", "font-size: 0.75rem; color: var(--ion-color-vh-black); font-weight: normal;", 4, "ngFor", "ngForOf"], [2, "font-size", "0.75rem", "color", "var(--ion-color-vh-black)", "font-weight", "normal"], [3, "nzNoResult"], ["nz-row", "", "class", "option-modal", 4, "ngIf"], ["nz-row", "", 1, "option-modal"], ["nz-row", "", 2, "width", "100%"], ["nz-col", "", "nzSpan", "7", 1, "align-center", "price-edit"], ["maxlength", "15", "nz-input", "", 3, "ngClass", "disabled", "value", "placeholder", "blur"], ["style", "font-size: 0.8rem;", 4, "ngIf"], ["nz-col", "", "nzSpan", "10", 1, "text-align-center", "price-edit", 2, "display", "flex", "justify-content", "space-evenly", "align-items", "center"], ["nz-button", "", "nzType", "default", 3, "disabled", "ngClass", "click"], ["nz-icon", "", "nzType", "minus"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "blur", "ngModelChange"], ["nz-icon", "", "nzType", "plus"], ["nz-col", "", "nzSpan", "7", 1, "align-center", "text-align-right"], ["nz-col", "", "nzSpan", "24", 1, "align-center", "order-div-note1"], ["nzBorderless", "", "nz-input", "", 1, "order-note", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], [4, "ngFor", "ngForOf"], [2, "font-size", "0.8rem"], [4, "ngIf"], [2, "width", "100%", "padding", "8px 0", 3, "ngModel", "ngModelChange"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], ["nz-col", "", "nzSpan", "6"], ["nz-col", "", "nzSpan", "6", 1, "ion-text-end"], [2, "color", "var(--ion-color-vh-orange)"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"]], template: function SearchComboComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function SearchComboComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComboComponent_div_2_Template, 11, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function SearchComboComponent_Template_nz_modal_nzVisibleChange_3_listener($event) { return ctx.showOptions = $event; })("nzOnCancel", function SearchComboComponent_Template_nz_modal_nzOnCancel_3_listener() { return ctx.selectFoodsCancel(); })("nzOnOk", function SearchComboComponent_Template_nz_modal_nzOnOk_3_listener() { return ctx.chooseCombos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComboComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComboComponent_ng_template_5_Template, 6, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 7, "Search for combos"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 500)("nzVisible", ctx.showDrawerCombosList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", ctx.choiceCombos.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.showOptions)("nzFooter", _r2);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerContentDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.CdkFixedSizeVirtualScroll, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListItemMetaTitleComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListItemMetaDescriptionComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListEmptyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_14__.NzInputNumberComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__.NzRadioGroupComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_15__.NzRadioComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.DecimalPipe], styles: ["#search-combos-popup[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.infinite-container[_ngcontent-%COMP%] {\n  height: calc(100% - 68px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.combos-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.combos-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(204, 204, 202, 0.05);\n}\n\n.combos-item[_ngcontent-%COMP%]   .ant-list-item-meta-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem !important;\n}\n\n\n\n.option-modal[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.option-modal[_ngcontent-%COMP%]   .order-note[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-vh-gray);\n  padding: 0;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px calc(100% - 64px) 32px;\n  grid-template-rows: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-activate[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-green) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-activate[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--ion-color-vh-green) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-disabled[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-gray) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--ion-color-vh-gray) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .align-center[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.option-modal[_ngcontent-%COMP%]   .text-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.option-modal[_ngcontent-%COMP%]   .text-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n  .search > app-keyboard > div {\n  position: fixed !important;\n  left: 10%;\n  width: 55% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1jb21iby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQURJO0VBQ0ksMkNBQUE7QUFHUjs7QUFESTtFQUNJLDRCQUFBO0FBR1I7O0FBQ0EsVUFBQTs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFESTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FBR1I7O0FBREk7RUFDSSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFHUjs7QUFGUTtFQUNJLGtEQUFBO0FBSVo7O0FBSFk7RUFDSSwwQkFBQTtFQUNBLDJDQUFBO0FBS2hCOztBQUZRO0VBQ0ksaURBQUE7QUFJWjs7QUFIWTtFQUNJLDBCQUFBO0VBQ0EsMENBQUE7QUFLaEI7O0FBREk7RUFDSSxrQkFBQTtBQUdSOztBQURJO0VBQ0ksaUJBQUE7QUFHUjs7QUFESTtFQUNJLGtCQUFBO0FBR1I7O0FBQUE7RUFDSSwwQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUdKIiwiZmlsZSI6InNlYXJjaC1jb21iby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2gtY29tYm9zLXBvcHVwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uaW5maW5pdGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjhweCk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uY29tYm9zLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjAyLCAwLjA1KTtcclxuICAgIH1cclxuICAgIC5hbnQtbGlzdC1pdGVtLW1ldGEtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKk1vZGFsICovXHJcbi5vcHRpb24tbW9kYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAub3JkZXItbm90ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLm51bWJlci1jaG9pY2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMnB4IGNhbGMoMTAwJSAtIDY0cHgpIDMycHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmJ0bi1hY3RpdmF0ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWRpc2FibGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LWFsaWduLXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC50ZXh0LWFsaWduLWNlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbjo6bmctZGVlcCAuc2VhcmNoID5hcHAta2V5Ym9hcmQ+ZGl2e1xyXG4gICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICB3aWR0aDogNTUlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 99006:
/*!************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/search-combo/search-combo.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComboModule": () => (/* binding */ SearchComboModule)
/* harmony export */ });
/* harmony import */ var _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../keyboard/keyboard.module */ 9657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _search_combo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-combo.component */ 73016);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








class SearchComboModule {
}
SearchComboModule.ɵfac = function SearchComboModule_Factory(t) { return new (t || SearchComboModule)(); };
SearchComboModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SearchComboModule });
SearchComboModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
            _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SearchComboModule, { declarations: [_search_combo_component__WEBPACK_IMPORTED_MODULE_1__.SearchComboComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
        _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule], exports: [_search_combo_component__WEBPACK_IMPORTED_MODULE_1__.SearchComboComponent] }); })();


/***/ }),

/***/ 9341:
/*!*******************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/search-product/search-product.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchProductComponent": () => (/* binding */ SearchProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/select */ 61532);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/collapse */ 39370);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















function SearchProductComponent_div_2_nz_tab_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-tab", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, tab_r7.name));
} }
function SearchProductComponent_div_2_nz_list_item_11_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "Item code"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.item_code);
} }
function SearchProductComponent_div_2_nz_list_item_11_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.vhAlgorithm.vhcurrencyunit(item_r8.price), "");
} }
function SearchProductComponent_div_2_nz_list_item_11_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.vhAlgorithm.vhcurrencyunit(item_r8.price2), "");
} }
function SearchProductComponent_div_2_nz_list_item_11_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "Stock"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r8.quantity_branch[ctx_r12.id_branch], " ", item_r8.unit, "");
} }
function SearchProductComponent_div_2_nz_list_item_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchProductComponent_div_2_nz_list_item_11_Template_nz_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const item_r8 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.selectFoods(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item-meta", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-list-item-meta-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchProductComponent_div_2_nz_list_item_11_div_5_Template, 5, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchProductComponent_div_2_nz_list_item_11_div_6_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchProductComponent_div_2_nz_list_item_11_div_7_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchProductComponent_div_2_nz_list_item_11_span_8_Template, 5, 5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzAvatar", item_r8.img ? item_r8.img : "assets/icon/management/noimage.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.item_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.default_price_type == 1 || !item_r8.price2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.default_price_type == 2 && item_r8.price2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r8.type == 3);
} }
function SearchProductComponent_div_2_nz_list_empty_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "No data"));
} }
const _c0 = function () { return { standalone: true }; };
function SearchProductComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchProductComponent_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.tempVal = $event; })("ngModelChange", function SearchProductComponent_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.searchFood($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-tabset", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSelectedIndexChange", function SearchProductComponent_div_2_Template_nz_tabset_nzSelectedIndexChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.changeTypeGood($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchProductComponent_div_2_nz_tab_8_Template, 2, 3, "nz-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "cdk-virtual-scroll-viewport", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchProductComponent_div_2_nz_list_item_11_Template, 9, 6, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SearchProductComponent_div_2_nz_list_empty_12_Template, 2, 3, "nz-list-empty", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "Search for product name, barcode, item code"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.tempVal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelectedIndex", ctx_r0.indexTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.listTabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchList)("ngForTrackBy", ctx_r0.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchList.length === 0);
} }
function SearchProductComponent_ng_container_4_div_2_s_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.vhAlgorithm.vhcurrencyunit(ctx_r27.choiceFood.price_origin));
} }
function SearchProductComponent_ng_container_4_div_2_nz_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 50);
} if (rf & 2) {
    const i_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", i_r30.unit)("nzValue", i_r30.ratio);
} }
function SearchProductComponent_ng_container_4_div_2_label_19_s_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.vhAlgorithm.vhcurrencyunit(sub_r31.price_origin));
} }
function SearchProductComponent_ng_container_4_div_2_label_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchProductComponent_ng_container_4_div_2_label_19_s_2_Template, 2, 1, "s", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r31 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", sub_r31._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", sub_r31.name, " - ", ctx_r29.vhAlgorithm.vhcurrencyunit(sub_r31.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r31.price < sub_r31.price_origin);
} }
const _c1 = function (a0, a1) { return { "btn-activate": a0, "btn-disabled": a1 }; };
const _c2 = function () { return []; };
function SearchProductComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchProductComponent_ng_container_4_div_2_Template_input_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.updatePrice(ctx_r34.choiceFood); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchProductComponent_ng_container_4_div_2_s_5_Template, 2, 1, "s", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchProductComponent_ng_container_4_div_2_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.choiceFood.ratio = $event; })("ngModelChange", function SearchProductComponent_ng_container_4_div_2_Template_nz_select_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.changeUnit($event, ctx_r37.choiceFood); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchProductComponent_ng_container_4_div_2_nz_option_8_Template, 1, 2, "nz-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchProductComponent_ng_container_4_div_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.reduceQuantity(ctx_r38.choiceFood); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-input-number", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchProductComponent_ng_container_4_div_2_Template_nz_input_number_blur_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.updatePrice(ctx_r39.choiceFood); })("ngModelChange", function SearchProductComponent_ng_container_4_div_2_Template_nz_input_number_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.choiceFood.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchProductComponent_ng_container_4_div_2_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.increaseQuantity(ctx_r41.choiceFood); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "nz-radio-group", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchProductComponent_ng_container_4_div_2_Template_nz_radio_group_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.choiceFood.id_subproduct = $event; })("ngModelChange", function SearchProductComponent_ng_container_4_div_2_Template_nz_radio_group_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.changeSub($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SearchProductComponent_ng_container_4_div_2_label_19_Template, 3, 4, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchProductComponent_ng_container_4_div_2_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.choiceFood.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 22, "Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "price-" + ctx_r23.choiceFood._id)("disabled", !ctx_r23.vhAuth.checkLocalMyPermissionName("sales_enable_update_price_bill_detail"))("value", ctx_r23.vhAlgorithm.vhcurrencyunit(ctx_r23.choiceFood.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r23.choiceFood.price_origin > ctx_r23.choiceFood.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.choiceFood.ratio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.choiceFood.units);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r23.choiceFood.quantity <= 1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](26, _c1, ctx_r23.choiceFood.quantity > 0, ctx_r23.choiceFood.quantity <= 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", ctx_r23.choiceFood.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r23.choiceFood.quantity > 9999999998)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](29, _c1, ctx_r23.choiceFood.quantity <= 9999999998, ctx_r23.choiceFood.quantity > 9999999998));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.vhAlgorithm.vhcurrencyunit(ctx_r23.choiceFood.price * ctx_r23.choiceFood.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.choiceFood.id_subproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.choiceFood.subs ? ctx_r23.choiceFood.subs : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c2))("ngForTrackBy", ctx_r23.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 24, "Enter note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r23.choiceFood.note)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c0));
} }
function SearchProductComponent_ng_container_4_div_3_nz_collapse_panel_6_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", value_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r49);
} }
function SearchProductComponent_ng_container_4_div_3_nz_collapse_panel_6_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-collapse-panel", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-radio-group", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchProductComponent_ng_container_4_div_3_nz_collapse_panel_6_Template_nz_radio_group_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const properties_r46 = restoredCtx.$implicit; return properties_r46.selectedValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchProductComponent_ng_container_4_div_3_nz_collapse_panel_6_label_2_Template, 2, 2, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const properties_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzHeader", properties_r46.name)("nzActive", properties_r46.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", properties_r46.selectedValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", properties_r46.value);
} }
function SearchProductComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-collapse", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchProductComponent_ng_container_4_div_3_nz_collapse_panel_6_Template, 3, 4, "nz-collapse-panel", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "Properties"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.choiceFood.properties);
} }
function SearchProductComponent_ng_container_4_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchProductComponent_ng_container_4_div_4_div_5_Template_input_blur_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const item_r53 = restoredCtx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r54.updatePrice(item_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchProductComponent_ng_container_4_div_4_div_5_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const item_r53 = restoredCtx.$implicit; return item_r53.quantity = item_r53.quantity - 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nz-input-number", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchProductComponent_ng_container_4_div_4_div_5_Template_nz_input_number_ngModelChange_11_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const item_r53 = restoredCtx.$implicit; return item_r53.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchProductComponent_ng_container_4_div_4_div_5_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const item_r53 = restoredCtx.$implicit; return item_r53.quantity = item_r53.quantity + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r53 = ctx.$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 13, item_r53.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, "Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "topping-" + item_r53._id)("value", ctx_r52.vhAlgorithm.vhcurrencyunit(item_r53.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r53.quantity <= 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c1, item_r53.quantity > 0, item_r53.quantity <= 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0)("nzStep", 1)("ngModel", item_r53.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", item_r53.quantity > 9999999998)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](20, _c1, item_r53.quantity <= 9999999998, item_r53.quantity > 9999999998));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r52.vhAlgorithm.vhcurrencyunit(item_r53.price * item_r53.quantity), " ");
} }
function SearchProductComponent_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchProductComponent_ng_container_4_div_4_div_5_Template, 16, 23, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "Side dishes"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.choiceFood.toppings);
} }
function SearchProductComponent_ng_container_4_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", item_r60._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r60.lot_number, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" NSX: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 6, item_r60.date_mfg, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" HSD: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 9, item_r60.date_exp, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, "Stock"), ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 14, item_r60.quantity_branch[ctx_r59.id_branch] / ctx_r59.choiceFood.ratio, "1.0-2"));
} }
function SearchProductComponent_ng_container_4_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ch\u1ECDn l\u00F4, h\u1EA1n s\u1EED d\u1EE5ng c\u1EE7a nguy\u00EAn li\u1EC7u ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-radio-group", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchProductComponent_ng_container_4_div_5_Template_nz_radio_group_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.choiceFood.id_lotproduct = $event; })("ngModelChange", function SearchProductComponent_ng_container_4_div_5_Template_nz_radio_group_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.changeLot($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchProductComponent_ng_container_4_div_5_div_3_Template, 18, 17, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.choiceFood.id_lotproduct);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.choiceFood.lots);
} }
function SearchProductComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchProductComponent_ng_container_4_div_2_Template, 23, 34, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchProductComponent_ng_container_4_div_3_Template, 7, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchProductComponent_ng_container_4_div_4_Template, 6, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchProductComponent_ng_container_4_div_5_Template, 4, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.choiceFood);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.choiceFood.properties && ctx_r1.choiceFood.properties.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.choiceFood.toppings && ctx_r1.choiceFood.toppings.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.choiceFood.lots);
} }
function SearchProductComponent_ng_template_5_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchProductComponent_ng_template_5_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r66.selectFoodsCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Cancel"), " ");
} }
function SearchProductComponent_ng_template_5_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchProductComponent_ng_template_5_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r68.chooseFood(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "Add"));
} }
function SearchProductComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchProductComponent_ng_template_5_button_0_Template, 3, 3, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchProductComponent_ng_template_5_button_1_Template, 3, 3, "button", 70);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.choiceFood.manysize || ctx_r3.choiceFood.subs.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.choiceFood.manysize || ctx_r3.choiceFood.subs.length);
} }
class SearchProductComponent {
    constructor(vhAlgorithm, vhQueryCafe, vhAuth) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAuth = vhAuth;
        this.showDrawerProductList = true;
        // trả về product được chọn và đã xử lý cho bill-detail1
        this.closeSearchProductList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /** Danh sách sản phẩm */
        this.foodList = this.vhQueryCafe
            .getlocalDetailProducts()
            .filter((item) => item.type == 1 || item.type == 3)
            .filter((item) => !item.delete_hidden || item.manysize)
            .map((e) => {
            return Object.assign(Object.assign(Object.assign({}, e), e.units[e.units.findIndex(ele => ele.default)]), { ptype: e.type });
        });
        /** Danh sách sản phẩm đã tìm kiếm */
        this.searchList = [];
        /** Sản phẩm được chọn */
        this.choiceFood = {};
        /** Danh sách menu */
        this.list_menu = [];
        this.listTabs = [{ _id: 'all', name: 'All', type: 1 }];
        this.indexTab = 0;
        this.showOptions = false;
        this.tempVal = '';
        this.id_branch = this.vhQueryCafe.getDefaultBranch()._id;
        this.auto_hidden_lot = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch')
            .auto_hidden_lot;
        this.auto_select_lot = this.vhQueryCafe.getLocalAppSettingNameBranch('permission_branch')
            .auto_select_lot;
        this.editPrice = {};
    }
    ngOnInit() {
        this.getMenu();
    }
    ngAfterViewInit() {
        document.getElementById('inputSearchDishes').focus();
    }
    myTrackByFunction(element, index) {
        return element._id ? element._id : index;
    }
    goBack() {
        this.closeSearchProductList.emit(false);
    }
    getMenu() {
        this.list_menu = this.vhQueryCafe.getlocalCategorys().filter(item => item.type == 1 || item.type == 3);
        this.list_menu = this.vhQueryCafe.getlocalCategorys().filter(item => item.type == 1 || item.type == 3);
        for (let cate of this.list_menu) {
            if (this.foodList.find(e => e.id_category == cate._id))
                cate.valid = true;
            else
                cate.valid = false;
        }
        this.list_menu = this.vhAlgorithm.sortVietnamesebyASC(this.list_menu.filter(e => e.valid), 'name');
        this.list_menu.forEach(item => this.listTabs.push(item));
        this.searchList = [...this.foodList];
        this.searchList = this.vhAlgorithm.sortVietnamesebyASC(this.searchList, 'name');
    }
    /**
     * Tìm kiếm sản phẩm
     * @param value giá trị tìm kiếm
     */
    searchFood(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.foodList, [
                'name',
                'barcode',
                'item_code'
            ]);
        else
            this.searchList = [...this.foodList];
        this.searchList = this.vhAlgorithm.sortVietnamesebyASC(this.searchList, 'name');
    }
    chooseProduct(item) {
        this.closeSearchProductList.emit(item);
    }
    changeSub(value) {
        let subChoice = this.choiceFood.subs.find((item) => item._id == value);
        if (subChoice) {
            this.choiceFood['id_subproduct'] = value;
            this.choiceFood['price'] = subChoice.price;
            this.choiceFood['price_origin'] = subChoice.price_origin;
        }
    }
    /**
     * Chọn sản phẩm để xử lý
     * @param value dữ liệu sản phẩm được chọn
     */
    selectFoods(value) {
        console.log(value);
        let dispatcher_done = !this.vhQueryCafe.getLocalAppSettingNameBranch('dispatchers_enable')
            .dispatchers_enable;
        this.choiceFood = {
            dispatcher_done: dispatcher_done,
            toppings: JSON.parse(JSON.stringify(value.toppings || [])),
            quantity: 1,
            note: '',
            price_origin: this.default_price_type == 1
                ? value.price
                : value.price2
                    ? value.price2
                    : value.price,
            name: value.name,
            ptype: value.type,
            properties: value.properties,
            _id: value._id,
            price: this.default_price_type == 1
                ? value.price
                : value.price2
                    ? value.price2
                    : value.price,
            ratio: 1,
            units: value.units,
        };
        if (value.lot_number)
            this.choiceFood['lot_number'] = value.lot_number;
        if (value.lots)
            this.choiceFood['lots'] = value.lots;
        if (value.id_lotproduct)
            this.choiceFood['id_lotproduct'] = value.id_lotproduct;
        if (value.id_subproduct)
            this.choiceFood.id_subproduct = value.id_subproduct;
        // Lưu trữ các properties đã chon
        if (this.choiceFood.properties) {
            // sao chép mảng giá trị chọn
            this.choiceFood.properties.forEach((element) => {
                element.active = true;
                element.selectedValue = element.value[0];
            });
        }
        // Kiểm tra topping
        if (this.choiceFood.toppings) {
            for (let topping of this.choiceFood.toppings) {
                let data = this.vhQueryCafe.getlocalProduct(topping.id_product);
                console.log(data);
                topping.quantity = topping.quantity;
                topping.name = data.name;
                topping.price_origin =
                    this.default_price_type == 1
                        ? topping.units[0].price
                        : topping.units[0].price2
                            ? topping.units[0].price2
                            : topping.units[0].price;
                topping.price =
                    this.default_price_type == 1
                        ? topping.units[0].price
                        : topping.units[0].price2
                            ? topping.units[0].price2
                            : topping.units[0].price;
                topping.ratio = 1;
                topping.ptype = 4;
                topping._id = topping.id_product;
            }
        }
        if (this.choiceFood.type == 3 && this.choiceFood.lots) {
            this.choiceFood.lots = this.vhAlgorithm.sortDatebyASC(this.choiceFood.lots, 'date_exp');
            if (this.auto_hidden_lot)
                this.choiceFood.lots = this.choiceFood.lots.filter((e) => new Date(e.date_exp).getTime() >= new Date().getTime());
            let min_date_exp = this.vhAlgorithm.sortDatebyASC(this.choiceFood.lots.filter((e) => new Date(e.date_exp).getTime() >= new Date().getTime()), 'date_exp');
            if (min_date_exp.length) {
                this.choiceFood['id_lotproduct'] = min_date_exp[0]._id;
                this.choiceFood['lot_number'] = min_date_exp[0].lot_number;
            }
        }
        if (this.choiceFood) {
            this.showOptions = true;
            setTimeout(() => {
                this.editPrice['price-' + value._id] = this.vhAlgorithm.vhnumeral('.price-' + value._id);
                // if (this.choiceFood.toppings) {
                //   this.choiceFood.toppings.forEach(topping => {
                //     this.editPrice['topping-' + topping._id] = this.vhAlgorithm.vhnumeral(".topping-" + topping._id)
                //   });
                // }
            }, 200);
        }
    }
    /**Thêm cleavejs chỉnh sửa giá món ăn */
    updatePrice(item) {
        if (!item.ptype) {
            let price = this.editPrice['price-' + item._id].getRawValue();
            this.choiceFood.price = price ? parseFloat(price) : 0;
            this.choiceFood.quantity =
                this.choiceFood.quantity > 0 ? this.choiceFood.quantity : 1;
        }
        else {
            let price = this.editPrice['topping-' + item._id].getRawValue();
            let index = this.choiceFood.toppings.findIndex((element) => element._id == item._id);
            if (index != -1) {
                this.choiceFood.toppings[index].price = price ? parseFloat(price) : 0;
                this.choiceFood.toppings[index].quantity =
                    this.choiceFood.toppings[index].quantity > 0
                        ? this.choiceFood.toppings[index].quantity
                        : 1;
            }
        }
    }
    selectFoodsCancel() {
        this.showOptions = false;
    }
    chooseFood() {
        this.showOptions = false;
        // if (this.choiceFood.toppings)
        //   this.choiceFood.toppings = this.choiceFood.toppings.filter(
        //     (item) => item.quantity
        //   );
        if (this.choiceFood.quantity) {
            this.closeSearchProductList.emit(this.choiceFood);
        }
        console.log(this.choiceFood);
    }
    /** Chọn danh mục
     * @param event index danh mục được chọn
     */
    changeTypeGood(event) {
        this.indexTab = event;
        let products = this.vhQueryCafe
            .getlocalDetailProducts()
            .filter((item) => item.type == 1 || item.type == 3)
            .filter((item) => !item.delete_hidden)
            .map((item) => {
            let unit = this.vhQueryCafe.getUnit_byRatio(item.units, item.units.find((u) => u.default).ratio);
            return Object.assign(Object.assign({}, item), unit);
        });
        if (event == 0) {
            this.foodList = products.filter((item) => !item.delete_hidden);
        }
        else {
            this.foodList = products.filter((item) => item.id_category == this.listTabs[event]._id);
        }
        this.searchFood(this.tempVal);
    }
    changeUnit(ev, item) {
        if (this.default_price_type == 1) {
            let unit = this.vhQueryCafe.getUnit_byRatio(item.units, ev);
            if (unit) {
                item.unit = unit.unit;
                item.price = parseFloat(unit.price);
                item.ratio = parseFloat(unit.ratio);
                item.price_origin = parseFloat(unit.price);
            }
        }
        else {
            let unit = this.vhQueryCafe.getUnit_byRatio(item.units, ev);
            if (unit) {
                item.unit = unit.unit;
                item.price = parseFloat(unit.price2);
                item.ratio = parseFloat(unit.ratio);
                item.price_origin = parseFloat(unit.price2);
            }
        }
    }
    changeLot(e) {
        this.choiceFood.lot_number = this.choiceFood.lots.find((item) => item._id == e).lot_number;
    }
    /** Tăng số lượng sản phẩm */
    increaseQuantity(item) {
        if (item.quantity != '')
            item.quantity = parseFloat(item.quantity);
        item.quantity = item.quantity + 1;
    }
    /** Giảm số lượng sản phẩm */
    reduceQuantity(item) {
        if (item.quantity != '')
            item.quantity = parseFloat(item.quantity);
        item.quantity = item.quantity - 1;
    }
}
SearchProductComponent.ɵfac = function SearchProductComponent_Factory(t) { return new (t || SearchProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAuth)); };
SearchProductComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchProductComponent, selectors: [["app-search-product"]], inputs: { showDrawerProductList: "showDrawerProductList", default_price_type: "default_price_type" }, outputs: { closeSearchProductList: "closeSearchProductList" }, decls: 7, vars: 9, consts: [[3, "nzMaskClosable", "nzWidth", "nzVisible", "nzTitle", "nzOnClose"], ["id", "search-product-popup", 4, "nzDrawerContent"], ["nzWidth", "40vw", 3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterSelectFood", ""], ["id", "search-product-popup"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "search"], ["id", "inputSearchDishes", "nz-input", "", 1, "nz-hover-border", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], ["nz-row", "", 2, "height", "calc(100% - 35px)", "padding", "8px 0"], ["nz-col", "", "nzSpan", "24"], [3, "nzSelectedIndex", "nzSelectedIndexChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [1, "infinite-container", "ant-table-body", 3, "itemSize"], ["nzItemLayout", "horizontal"], ["class", "product-item", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzNoResult", 4, "ngIf"], [3, "nzTitle"], [1, "product-item", 3, "click"], [3, "nzAvatar"], [2, "font-size", "0.9rem", "color", "var(--ion-color-vh-black)"], [4, "ngIf"], ["style", "font-size: 0.9rem; color: var(--ion-color-vh-black)", 4, "ngIf"], ["style", "font-size: 0.75rem;display: block;", 4, "ngIf"], [2, "color", "var(--ion-color-vh-green)"], [2, "font-size", "0.75rem", "display", "block"], [2, "color", "var(--ion-color-vh-orange)"], [3, "nzNoResult"], [1, "ant-table-body", 2, "max-height", "50vh", "overflow-y", "auto", "overflow-x", "hidden", "padding", "0 8px"], ["nz-row", "", "class", "option-modal", 4, "ngIf"], ["nz-row", "", 1, "option-modal"], ["nz-row", "", 2, "width", "100%"], ["nz-col", "", "nzSpan", "7", 1, "align-center", "price-edit"], ["maxlength", "15", "nz-input", "", 3, "ngClass", "disabled", "value", "placeholder", "blur"], ["style", "font-size: 0.8rem;", 4, "ngIf"], ["nz-col", "", "nzSpan", "4"], [2, "width", "90%", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "6", 1, "text-align-center", "price-edit", 2, "display", "flex", "justify-content", "space-evenly", "align-items", "center"], ["nz-button", "", "nzType", "default", 3, "disabled", "ngClass", "click"], ["nz-icon", "", "nzType", "minus"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "blur", "ngModelChange"], ["nz-icon", "", "nzType", "plus"], ["nz-col", "", "nzSpan", "7", 1, "align-center", "text-align-right"], ["nz-col", "", "nzSpan", "24", 1, "align-center"], [3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nz-col", "", "nzSpan", "24", 1, "align-center", "order-div-note1"], ["nzBorderless", "", "nz-input", "", 1, "order-note", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], [2, "font-size", "0.8rem"], [3, "nzLabel", "nzValue"], ["nz-radio", "", 3, "nzValue"], ["nz-col", "", "nzSpan", "24", 1, "align-center", 2, "padding", "16px 0", "font-weight", "bold"], ["nzGhost", ""], [3, "nzHeader", "nzActive", 4, "ngFor", "ngForOf"], [3, "nzHeader", "nzActive"], [2, "padding-left", "24px", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "nzValue", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", "class", "items-food", 4, "ngFor", "ngForOf"], ["nz-col", "", "nzSpan", "24", 1, "items-food"], ["maxlength", "15", "nz-input", "", 3, "ngClass", "value", "placeholder", "blur"], ["nz-col", "", "nzSpan", "10", 1, "align-end", "text-align-center", "price-edit", 2, "display", "flex", "justify-content", "space-evenly", "align-items", "flex-end"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "ngModelChange"], ["nz-col", "", "nzSpan", "7", 1, "text-align-right", 2, "display", "flex", "align-items", "flex-end", "justify-content", "flex-end"], [2, "width", "100%", "padding", "8px 0", 3, "ngModel", "ngModelChange"], ["nz-row", "", 4, "ngFor", "ngForOf"], ["nz-radio", "", 1, "radio-purchase", 2, "width", "100%", 3, "nzValue"], ["nz-col", "", "nzSpan", "6"], ["nz-col", "", "nzSpan", "6", 1, "ion-text-end"], ["nz-button", "", "class", "nz-hover-border", "style", "background-color: var(--ion-color-vh-white); color: var(--ion-color-vh-black)", "nzType", "default", 3, "click", 4, "ngIf"], ["nz-button", "", "class", "nz-hover-border", "style", "background-color: var(--ion-color-vh-green); color: var(--ion-color-vh-white)", "class", "nz-hover-border-green", 3, "click", 4, "ngIf"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"]], template: function SearchProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function SearchProductComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchProductComponent_div_2_Template, 13, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function SearchProductComponent_Template_nz_modal_nzVisibleChange_3_listener($event) { return ctx.showOptions = $event; })("nzOnCancel", function SearchProductComponent_Template_nz_modal_nzOnCancel_3_listener() { return ctx.selectFoodsCancel(); })("nzOnOk", function SearchProductComponent_Template_nz_modal_nzOnOk_3_listener() { return ctx.chooseFood(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchProductComponent_ng_container_4_Template, 6, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchProductComponent_ng_template_5_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 7, "Search dishes/ beverage"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 500)("nzVisible", ctx.showDrawerProductList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", ctx.choiceFood.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.showOptions)("nzFooter", _r2);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerContentDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_7__.NzTabSetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__.CdkFixedSizeVirtualScroll, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__.NzListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_7__.NzTabComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__.NzListItemMetaTitleComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__.NzListEmptyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzSelectComponent, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_16__.NzInputNumberComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__.NzRadioGroupComponent, ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_11__.NzOptionComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__.NzRadioComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_18__.NzCollapseComponent, ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_18__.NzCollapsePanelComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe], styles: ["#search-product-popup[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.infinite-container[_ngcontent-%COMP%] {\n  height: calc(100% - 68px);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.product-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.product-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(204, 204, 202, 0.05);\n}\n\n.product-item[_ngcontent-%COMP%]   .ant-list-item-meta-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem !important;\n}\n\n\n\n.option-modal[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.option-modal[_ngcontent-%COMP%]   .order-note[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-vh-gray);\n  padding: 0;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px calc(100% - 64px) 32px;\n  grid-template-rows: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-activate[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-green) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-activate[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--ion-color-vh-green) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-disabled[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-gray) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--ion-color-vh-gray) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .align-center[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.option-modal[_ngcontent-%COMP%]   .text-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.option-modal[_ngcontent-%COMP%]   .text-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n  .radio-purchase span {\n  width: 100%;\n}\n\n  .radio-purchase span .ant-radio {\n  max-width: 24px !important;\n}\n\n  .radio-purchase .ant-radio {\n  width: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQUNKOztBQUNBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBREk7RUFDSSwyQ0FBQTtBQUdSOztBQURJO0VBQ0ksNEJBQUE7QUFHUjs7QUFDQSxVQUFBOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQURJO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUFHUjs7QUFBSTtFQUNJLGFBQUE7RUFDQSxrREFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVSOztBQURRO0VBQ0ksa0RBQUE7QUFHWjs7QUFGWTtFQUNJLDBCQUFBO0VBQ0EsMkNBQUE7QUFJaEI7O0FBRFE7RUFDSSxpREFBQTtBQUdaOztBQUZZO0VBQ0ksMEJBQUE7RUFDQSwwQ0FBQTtBQUloQjs7QUFBSTtFQUNJLGtCQUFBO0FBRVI7O0FBQUk7RUFDSSxpQkFBQTtBQUVSOztBQUFJO0VBQ0ksa0JBQUE7QUFFUjs7QUFDQTtFQUNJLFdBQUE7QUFFSjs7QUFERztFQUNJLDBCQUFBO0FBR1A7O0FBQ0E7RUFDRyxXQUFBO0FBRUgiLCJmaWxlIjoic2VhcmNoLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoLXByb2R1Y3QtcG9wdXAge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5pbmZpbml0ZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9kdWN0LWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjAyLCAwLjA1KTtcclxuICAgIH1cclxuICAgIC5hbnQtbGlzdC1pdGVtLW1ldGEtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKk1vZGFsICovXHJcbi5vcHRpb24tbW9kYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAub3JkZXItbm90ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5udW1iZXItY2hvaWNlIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzJweCBjYWxjKDEwMCUgLSA2NHB4KSAzMnB4O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC5idG4tYWN0aXZhdGUge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1kaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWxpZ24tY2VudGVyIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1hbGlnbi1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudGV4dC1hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSBcclxuOjpuZy1kZWVwIC5yYWRpby1wdXJjaGFzZSAgc3BhbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAuYW50LXJhZGlve1xyXG4gICAgICAgbWF4LXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5yYWRpby1wdXJjaGFzZSAgLmFudC1yYWRpb3tcclxuICAgd2lkdGg6IDE2cHg7IFxyXG59Il19 */"] });


/***/ }),

/***/ 72573:
/*!****************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/search-product/search-product.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchProductModule": () => (/* binding */ SearchProductModule)
/* harmony export */ });
/* harmony import */ var _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../keyboard/keyboard.module */ 9657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _search_product_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-product.component */ 9341);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








class SearchProductModule {
}
SearchProductModule.ɵfac = function SearchProductModule_Factory(t) { return new (t || SearchProductModule)(); };
SearchProductModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SearchProductModule });
SearchProductModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule, _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SearchProductModule, { declarations: [_search_product_component__WEBPACK_IMPORTED_MODULE_1__.SearchProductComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule, _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule], exports: [_search_product_component__WEBPACK_IMPORTED_MODULE_1__.SearchProductComponent] }); })();


/***/ }),

/***/ 10319:
/*!*******************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/search-service/search-service.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchServiceComponent": () => (/* binding */ SearchServiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/cafe/interface/vh-type */ 162);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/tabs */ 97768);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 70325);



















function SearchServiceComponent_div_2_nz_tab_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-tab", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const tab_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, tab_r7.name));
} }
function SearchServiceComponent_div_2_nz_list_item_11_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r11.vhAlgorithm.vhcurrencyunit(item_r8.price), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, item_r8.units[0].unit), "");
} }
function SearchServiceComponent_div_2_nz_list_item_11_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r12.vhAlgorithm.vhcurrencyunit(item_r8.price));
} }
function SearchServiceComponent_div_2_nz_list_item_11_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchServiceComponent_div_2_nz_list_item_11_div_5_ng_container_1_Template, 3, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchServiceComponent_div_2_nz_list_item_11_div_5_ng_container_2_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r8.type === ctx_r9.VhType.SERVICETIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r8.type !== ctx_r9.VhType.SERVICETIME);
} }
function SearchServiceComponent_div_2_nz_list_item_11_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r16.vhAlgorithm.vhcurrencyunit(item_r8.price2), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, item_r8.units[0].unit), "");
} }
function SearchServiceComponent_div_2_nz_list_item_11_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r17.vhAlgorithm.vhcurrencyunit(item_r8.price2));
} }
function SearchServiceComponent_div_2_nz_list_item_11_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchServiceComponent_div_2_nz_list_item_11_div_6_ng_container_1_Template, 3, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchServiceComponent_div_2_nz_list_item_11_div_6_ng_container_2_Template, 2, 1, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r8.type === ctx_r10.VhType.SERVICETIME);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r8.type !== ctx_r10.VhType.SERVICETIME);
} }
function SearchServiceComponent_div_2_nz_list_item_11_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-list-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchServiceComponent_div_2_nz_list_item_11_Template_nz_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const item_r8 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.selectService(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nz-list-item-meta", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nz-list-item-meta-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SearchServiceComponent_div_2_nz_list_item_11_div_5_Template, 3, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SearchServiceComponent_div_2_nz_list_item_11_div_6_Template, 3, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzAvatar", item_r8.img ? item_r8.img : "assets/icon/management/noimage.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.default_price_type == 1 || !item_r8.price2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.default_price_type == 2 && item_r8.price2);
} }
function SearchServiceComponent_div_2_nz_list_empty_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-list-empty", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, "No data"));
} }
const _c0 = function () { return { standalone: true }; };
function SearchServiceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchServiceComponent_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.tempVal = $event; })("ngModelChange", function SearchServiceComponent_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.searchService($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "nz-tabset", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzSelectedIndexChange", function SearchServiceComponent_div_2_Template_nz_tabset_nzSelectedIndexChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.changeTypeGood($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SearchServiceComponent_div_2_nz_tab_8_Template, 2, 3, "nz-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "cdk-virtual-scroll-viewport", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "nz-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SearchServiceComponent_div_2_nz_list_item_11_Template, 7, 4, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SearchServiceComponent_div_2_nz_list_empty_12_Template, 2, 3, "nz-list-empty", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.tempVal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0))("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 9, "Search for service name, barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzSelectedIndex", ctx_r0.indexTab);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.listTabs);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("itemSize", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.searchList)("ngForTrackBy", ctx_r0.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.searchList.length === 0);
} }
function SearchServiceComponent_ng_container_4_div_1_s_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "s", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r28.vhAlgorithm.vhcurrencyunit(ctx_r28.choiceService.price_origin));
} }
const _c1 = function (a0, a1) { return { "btn-activate": a0, "btn-disabled": a1 }; };
function SearchServiceComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function SearchServiceComponent_ng_container_4_div_1_Template_input_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r29.updatePrice(ctx_r29.choiceService); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SearchServiceComponent_ng_container_4_div_1_s_5_Template, 2, 1, "s", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchServiceComponent_ng_container_4_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r31.reduceQuantity(ctx_r31.choiceService); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-input-number", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function SearchServiceComponent_ng_container_4_div_1_Template_nz_input_number_blur_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r32.updatePrice(ctx_r32.choiceService); })("ngModelChange", function SearchServiceComponent_ng_container_4_div_1_Template_nz_input_number_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r33.choiceService.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchServiceComponent_ng_container_4_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r34.increaseQuantity(ctx_r34.choiceService); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchServiceComponent_ng_container_4_div_1_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r35.choiceService.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 17, "Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", "price-" + ctx_r27.choiceService._id)("disabled", !ctx_r27.vhAuth.checkLocalMyPermissionName("sales_enable_update_price_bill_detail"))("value", ctx_r27.vhAlgorithm.vhcurrencyunit(ctx_r27.choiceService.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r27.choiceService.price_origin > ctx_r27.choiceService.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r27.choiceService.quantity <= 1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](21, _c1, ctx_r27.choiceService.quantity > 0, ctx_r27.choiceService.quantity <= 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", ctx_r27.choiceService.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r27.choiceService.quantity > 9999999998)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](24, _c1, ctx_r27.choiceService.quantity <= 9999999998, ctx_r27.choiceService.quantity > 9999999998));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r27.vhAlgorithm.vhcurrencyunit(ctx_r27.choiceService.price * ctx_r27.choiceService.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 19, "Enter note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r27.choiceService.note)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c0));
} }
function SearchServiceComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SearchServiceComponent_ng_container_4_div_1_Template, 17, 28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.choiceService.manysize);
} }
function SearchServiceComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchServiceComponent_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r36.selectFoodsCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchServiceComponent_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r38.chooseService(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 4, "Add"));
} }
class SearchServiceComponent {
    constructor(vhAlgorithm, vhQueryCafe, vhAuth) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAuth = vhAuth;
        // chương trình khuyến mãi đang được áp dụng
        this.promotions = [];
        this.showDrawerServiceList = true;
        // trả về product được chọn và đã xử lý cho bill-detail1
        this.closeSearchServiceList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**Danh sách dịch vụ */
        this.serviceList = this.vhQueryCafe
            .getlocalDetailProducts(src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE_SERVICETIME)
            .filter((item) => !item.delete_hidden)
            .map((e) => {
            return Object.assign(Object.assign({}, e), e.units[0]);
        });
        /**Dịch vụ được chọn */
        this.choiceService = {};
        /** Danh sách dịch vụ đã được tìm kiếm */
        this.searchList = [];
        /** Danh mục dịch vụ */
        this.list_menu = [];
        this.listTabs = [{ _id: 'all', name: 'All', type: 1 }];
        this.indexTab = 0;
        this.VhType = src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType;
        this.tempVal = '';
        this.editPrice = {};
        this.showOptions = false;
    }
    ngOnInit() {
        this.list_menu = this.vhQueryCafe.getlocalCategorys(src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE);
        this.list_menu.forEach((item) => this.listTabs.push(item));
        this.searchList = [...this.serviceList];
        this.searchList = this.vhAlgorithm.sortVietnamesebyASC(this.searchList, 'name');
    }
    ngAfterViewInit() {
        document.getElementById('inputSearchService').focus();
    }
    myTrackByFunction(element, index) {
        return element._id ? element._id : index;
    }
    goBack() {
        this.closeSearchServiceList.emit(false);
    }
    /**
     * Tìm kiếm dịch vụ
     * @param value giá trị tìm kiếm
     */
    searchService(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.serviceList, [
                'name',
            ]);
        else
            this.searchList = this.serviceList;
        this.searchList = this.vhAlgorithm.sortVietnamesebyASC(this.searchList, 'name');
    }
    /**
     * Chọn dịch vụ để xử lý
     * @param value dữ liệu dịch vụ được chọn
     */
    selectService(value) {
        let dispatcher_done = !this.vhQueryCafe.getLocalAppSettingNameBranch('dispatchers_enable').dispatchers_enable;
        this.choiceService = Object.assign(Object.assign({ dispatcher_done: dispatcher_done }, value), { quantity: 1, note: '', price_origin: this.default_price_type == 1
                ? value.price
                : value.price2
                    ? value.price2
                    : value.price, price: this.default_price_type == 1
                ? value.price
                : value.price2
                    ? value.price2
                    : value.price, ptype: value.type });
        if (this.choiceService) {
            if (value.type !== src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICETIME) {
                this.showOptions = true;
                setTimeout(() => {
                    this.editPrice['price-' + value._id] = this.vhAlgorithm.vhnumeral('.price-' + value._id);
                }, 200);
            }
            else {
                this.closeSearchServiceList.emit(this.choiceService);
            }
        }
    }
    /**Thêm cleavejs chỉnh sửa giá món ăn */
    updatePrice(item) {
        let price = this.editPrice['price-' + item._id].getRawValue();
        this.choiceService.price = price ? parseFloat(price) : 0;
        this.choiceService.quantity =
            this.choiceService.quantity > 0 ? this.choiceService.quantity : 1;
    }
    chooseService() {
        this.showOptions = false;
        if (this.choiceService['quantity']) {
            this.closeSearchServiceList.emit(this.choiceService);
        }
    }
    changeTypeGood(event) {
        this.indexTab = event;
        let products = this.vhQueryCafe
            .getlocalDetailProducts(src_app_cafe_interface_vh_type__WEBPACK_IMPORTED_MODULE_0__.VhType.SERVICE_SERVICETIME)
            .filter((item) => !item.delete_hidden)
            .map((e) => {
            return Object.assign(Object.assign({}, e), e.units[0]);
        });
        if (event == 0) {
            this.serviceList = products;
        }
        else {
            this.serviceList = products.filter((item) => item.id_category == this.listTabs[event]._id);
        }
        this.searchService(this.tempVal);
    }
    selectFoodsCancel() {
        this.showOptions = false;
    }
    /** Tăng số lượng sản phẩm */
    increaseQuantity(item) {
        if (item.quantity != '')
            item.quantity = parseFloat(item.quantity);
        item.quantity = item.quantity + 1;
    }
    /** Giảm số lượng sản phẩm */
    reduceQuantity(item) {
        if (item.quantity != '')
            item.quantity = parseFloat(item.quantity);
        item.quantity = item.quantity - 1;
    }
}
SearchServiceComponent.ɵfac = function SearchServiceComponent_Factory(t) { return new (t || SearchServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_2__.VhAuth)); };
SearchServiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchServiceComponent, selectors: [["app-search-service"]], inputs: { promotions: "promotions", showDrawerServiceList: "showDrawerServiceList", default_price_type: "default_price_type" }, outputs: { closeSearchServiceList: "closeSearchServiceList" }, decls: 7, vars: 9, consts: [[3, "nzMaskClosable", "nzWidth", "nzVisible", "nzTitle", "nzOnClose"], ["id", "search-service-popup", 4, "nzDrawerContent"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterSelectFood", ""], ["id", "search-service-popup"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "search"], ["id", "inputSearchService", "nz-input", "", 1, "nz-hover-border", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], ["nz-row", "", 2, "height", "calc(100% - 35px)", "padding", "8px 0"], ["nz-col", "", "nzSpan", "24"], [3, "nzSelectedIndex", "nzSelectedIndexChange"], [3, "nzTitle", 4, "ngFor", "ngForOf"], [1, "infinite-container", "ant-table-body", 3, "itemSize"], ["nzItemLayout", "horizontal"], ["class", "service-item", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzNoResult", 4, "ngIf"], [3, "nzTitle"], [1, "service-item", 3, "click"], [3, "nzAvatar"], [2, "font-size", "0.9rem", "color", "var(--ion-color-vh-black)"], ["style", "font-size: 0.9rem; color: var(--ion-color-vh-black)", 4, "ngIf"], [4, "ngIf"], [3, "nzNoResult"], ["nz-row", "", "class", "option-modal", 4, "ngIf"], ["nz-row", "", 1, "option-modal"], ["nz-row", "", 2, "width", "100%"], ["nz-col", "", "nzSpan", "7", 1, "align-center", "price-edit"], ["maxlength", "15", "nz-input", "", 3, "ngClass", "disabled", "value", "placeholder", "blur"], ["style", "font-size: 0.8rem;", 4, "ngIf"], ["nz-col", "", "nzSpan", "10", 1, "text-align-center", "price-edit", 2, "display", "flex", "justify-content", "space-evenly", "align-items", "center"], ["nz-button", "", "nzType", "default", 3, "disabled", "ngClass", "click"], ["nz-icon", "", "nzType", "minus"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "blur", "ngModelChange"], ["nz-icon", "", "nzType", "plus"], ["nz-col", "", "nzSpan", "7", 1, "align-center", "text-align-right"], ["nz-col", "", "nzSpan", "24", 1, "align-center", "order-div-note1"], ["nzBorderless", "", "nz-input", "", 1, "order-note", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], [2, "font-size", "0.8rem"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"]], template: function SearchServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzOnClose", function SearchServiceComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SearchServiceComponent_div_2_Template, 13, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "nz-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzVisibleChange", function SearchServiceComponent_Template_nz_modal_nzVisibleChange_3_listener($event) { return ctx.showOptions = $event; })("nzOnCancel", function SearchServiceComponent_Template_nz_modal_nzOnCancel_3_listener() { return ctx.selectFoodsCancel(); })("nzOnOk", function SearchServiceComponent_Template_nz_modal_nzOnOk_3_listener() { return ctx.chooseService(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SearchServiceComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SearchServiceComponent_ng_template_5_Template, 6, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 500)("nzVisible", ctx.showDrawerServiceList)("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 7, "Search for service"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nzTitle", ctx.choiceService.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzVisible", ctx.showOptions)("nzFooter", _r2);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_3__.NzDrawerContentDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_4__.NzModalContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_5__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_8__.NzTabSetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__.CdkFixedSizeVirtualScroll, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_11__.NzListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_8__.NzTabComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_11__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_11__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_11__.NzListItemMetaTitleComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_11__.NzListEmptyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_12__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_13__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__.NzIconDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_16__.NzInputNumberComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["#search-service-popup[_ngcontent-%COMP%], .infinite-container[_ngcontent-%COMP%] {\n  height: calc(100% - 68px);\n}\n\n.infinite-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.service-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.service-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(204, 204, 202, 0.05);\n}\n\n.service-item[_ngcontent-%COMP%]   .ant-list-item-meta-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem !important;\n}\n\n\n\n.option-modal[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.option-modal[_ngcontent-%COMP%]   .order-note[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-vh-gray);\n  padding: 0;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px calc(100% - 64px) 32px;\n  grid-template-rows: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-activate[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-green) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-activate[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--ion-color-vh-green) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-disabled[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-gray) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--ion-color-vh-gray) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .align-center[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.option-modal[_ngcontent-%COMP%]   .text-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.option-modal[_ngcontent-%COMP%]   .text-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n  .search > app-keyboard > div {\n  position: fixed !important;\n  left: 10%;\n  width: 55% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBREk7RUFDSSwyQ0FBQTtBQUdSOztBQURJO0VBQ0ksNEJBQUE7QUFHUjs7QUFDQSxVQUFBOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQURJO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUFHUjs7QUFESTtFQUNJLGFBQUE7RUFDQSxrREFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdSOztBQUZRO0VBQ0ksa0RBQUE7QUFJWjs7QUFIWTtFQUNJLDBCQUFBO0VBQ0EsMkNBQUE7QUFLaEI7O0FBRlE7RUFDSSxpREFBQTtBQUlaOztBQUhZO0VBQ0ksMEJBQUE7RUFDQSwwQ0FBQTtBQUtoQjs7QUFBSTtFQUNJLGtCQUFBO0FBRVI7O0FBQUk7RUFDSSxpQkFBQTtBQUVSOztBQUFJO0VBQ0ksa0JBQUE7QUFFUjs7QUFDQTtFQUNJLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBRUoiLCJmaWxlIjoic2VhcmNoLXNlcnZpY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoLXNlcnZpY2UtcG9wdXAsXHJcbi5pbmZpbml0ZS1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2OHB4KTtcclxufVxyXG4uaW5maW5pdGUtY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zZXJ2aWNlLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDQsIDIwNCwgMjAyLCAwLjA1KTtcclxuICAgIH1cclxuICAgIC5hbnQtbGlzdC1pdGVtLW1ldGEtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKk1vZGFsICovXHJcbi5vcHRpb24tbW9kYWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAub3JkZXItbm90ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLm51bWJlci1jaG9pY2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMnB4IGNhbGMoMTAwJSAtIDY0cHgpIDMycHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDAlO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmJ0bi1hY3RpdmF0ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnRuLWRpc2FibGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JheSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWxpZ24tY2VudGVyIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1hbGlnbi1yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAudGV4dC1hbGlnbi1jZW50ZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG46Om5nLWRlZXAgLnNlYXJjaCA+YXBwLWtleWJvYXJkPmRpdntcclxuICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ 51067:
/*!****************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/search-service/search-service.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchServiceModule": () => (/* binding */ SearchServiceModule)
/* harmony export */ });
/* harmony import */ var _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../keyboard/keyboard.module */ 9657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _search_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-service.component */ 10319);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








class SearchServiceModule {
}
SearchServiceModule.ɵfac = function SearchServiceModule_Factory(t) { return new (t || SearchServiceModule)(); };
SearchServiceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SearchServiceModule });
SearchServiceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
            _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SearchServiceModule, { declarations: [_search_service_component__WEBPACK_IMPORTED_MODULE_1__.SearchServiceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
        _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule], exports: [_search_service_component__WEBPACK_IMPORTED_MODULE_1__.SearchServiceComponent] }); })();


/***/ }),

/***/ 53817:
/*!*******************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/search-topping/search-topping.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchToppingComponent": () => (/* binding */ SearchToppingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/drawer */ 88346);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/input */ 29422);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/list */ 53966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/input-number */ 77727);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 70325);

















function SearchToppingComponent_div_2_nz_list_item_9_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.vhAlgorithm.vhcurrencyunit(item_r6.price), "");
} }
function SearchToppingComponent_div_2_nz_list_item_9_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.vhAlgorithm.vhcurrencyunit(item_r6.price2), "");
} }
function SearchToppingComponent_div_2_nz_list_item_9_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchToppingComponent_div_2_nz_list_item_9_Template_nz_list_item_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r6 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.selectSideDishes(item_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-list-item-meta", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-list-item-meta-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchToppingComponent_div_2_nz_list_item_9_div_5_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchToppingComponent_div_2_nz_list_item_9_div_6_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzAvatar", item_r6.img ? item_r6.img : "assets/icon/management/noimage.svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.default_price_type == 1 || !item_r6.price2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.default_price_type == 2 && item_r6.price2);
} }
function SearchToppingComponent_div_2_nz_list_empty_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-list-empty", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzNoResult", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, "No data"));
} }
const _c0 = function () { return { standalone: true }; };
function SearchToppingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchToppingComponent_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.tempVal = $event; })("ngModelChange", function SearchToppingComponent_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.searchSideDishes($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "cdk-virtual-scroll-viewport", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-list", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchToppingComponent_div_2_nz_list_item_9_Template, 7, 4, "nz-list-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SearchToppingComponent_div_2_nz_list_empty_10_Template, 2, 3, "nz-list-empty", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "Search for side dishes name, barcode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.tempVal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemSize", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchList)("ngForTrackBy", ctx_r0.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchList.length === 0);
} }
function SearchToppingComponent_ng_container_4_div_1_s_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.vhAlgorithm.vhcurrencyunit(ctx_r17.choiceSideDishes.price_origin));
} }
const _c1 = function (a0, a1) { return { "btn-activate": a0, "btn-disabled": a1 }; };
function SearchToppingComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchToppingComponent_ng_container_4_div_1_Template_input_blur_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.updatePrice(ctx_r18.choiceSideDishes); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchToppingComponent_ng_container_4_div_1_s_5_Template, 2, 1, "s", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchToppingComponent_ng_container_4_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.reduceQuantity(ctx_r20.choiceSideDishes); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-input-number", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SearchToppingComponent_ng_container_4_div_1_Template_nz_input_number_blur_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.updatePrice(ctx_r21.choiceSideDishes); })("ngModelChange", function SearchToppingComponent_ng_container_4_div_1_Template_nz_input_number_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.choiceSideDishes.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchToppingComponent_ng_container_4_div_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.increaseQuantity(ctx_r23.choiceSideDishes); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchToppingComponent_ng_container_4_div_1_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.choiceSideDishes.note = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 17, "Price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "price-" + ctx_r16.choiceSideDishes._id)("value", ctx_r16.vhAlgorithm.vhcurrencyunit(ctx_r16.choiceSideDishes.price))("disabled", !ctx_r16.vhAuth.checkLocalMyPermissionName("sales_enable_update_price_bill_detail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.choiceSideDishes.price_origin > ctx_r16.choiceSideDishes.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r16.choiceSideDishes.quantity <= 1)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c1, ctx_r16.choiceSideDishes.quantity > 0, ctx_r16.choiceSideDishes.quantity <= 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMax", 9999999999)("nzMin", 0.1)("nzStep", 1)("ngModel", ctx_r16.choiceSideDishes.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r16.choiceSideDishes.quantity > 9999999998)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c1, ctx_r16.choiceSideDishes.quantity <= 9999999998, ctx_r16.choiceSideDishes.quantity > 9999999998));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.vhAlgorithm.vhcurrencyunit(ctx_r16.choiceSideDishes.price * ctx_r16.choiceSideDishes.quantity), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 19, "Enter note"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r16.choiceSideDishes.note)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c0));
} }
function SearchToppingComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchToppingComponent_ng_container_4_div_1_Template, 17, 28, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.choiceSideDishes.manysize);
} }
function SearchToppingComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchToppingComponent_ng_template_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.selectFoodsCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchToppingComponent_ng_template_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.chooseSideDishes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "Cancel"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "Add"));
} }
class SearchToppingComponent {
    constructor(vhAlgorithm, vhQueryCafe, vhAuth) {
        this.vhAlgorithm = vhAlgorithm;
        this.vhQueryCafe = vhQueryCafe;
        this.vhAuth = vhAuth;
        // chương trình khuyến mãi đang được áp dụng
        this.promotions = [];
        this.showDrawerSideDishesList = true;
        // trả về product được chọn và đã xử lý cho bill-detail1
        this.closeSearchSideDishesList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**Danh sách topping */
        this.sideDishesList = this.vhQueryCafe
            .getlocalProducts()
            .filter((item) => !item.delete_hidden && item.type == 4)
            .map((e) => {
            return Object.assign(Object.assign({}, e), e.units[0]);
        });
        /**Topping được chọn để xử lý */
        this.choiceSideDishes = {};
        /**Danh sách topping đã được tìm kiếm */
        this.searchList = [];
        this.tempVal = '';
        this.editPrice = {};
        this.showOptions = false;
    }
    ngOnInit() {
        this.searchList = [...this.sideDishesList];
        this.searchList = this.vhAlgorithm.sortVietnamesebyASC(this.searchList, 'name');
    }
    ngAfterViewInit() {
        document.getElementById('inputSearchSideDishes').focus();
    }
    myTrackByFunction(element, index) {
        return element._id ? element._id : index;
    }
    goBack() {
        this.closeSearchSideDishesList.emit(false);
    }
    /**
     * Tìm kiếm topping
     * @param value giá trị tìm kiếm
     */
    searchSideDishes(value) {
        let tempVal = this.vhAlgorithm.changeAlias(value.toLowerCase());
        if (value.length)
            this.searchList = this.vhAlgorithm.searchList(tempVal, this.sideDishesList, ['name']);
        else
            this.searchList = this.sideDishesList;
        this.searchList = this.vhAlgorithm.sortVietnamesebyASC(this.searchList, 'name');
    }
    /**
     * Chọn topping để xử lý
     * @param value dữ liệu topping được chọn
     */
    selectSideDishes(value) {
        let dispatcher_done = !this.vhQueryCafe.getLocalAppSettingNameBranch('dispatchers_enable')
            .dispatchers_enable;
        this.choiceSideDishes = Object.assign(Object.assign({ dispatcher_done: dispatcher_done }, value), { quantity: 1, note: '', price_origin: this.default_price_type == 1
                ? value.price
                : value.price2
                    ? value.price2
                    : value.price, price: this.default_price_type == 1
                ? value.price
                : value.price2
                    ? value.price2
                    : value.price, ptype: 4 });
        if (this.choiceSideDishes) {
            this.showOptions = true;
            setTimeout(() => {
                this.editPrice['price-' + value._id] = this.vhAlgorithm.vhnumeral('.price-' + value._id);
            }, 200);
        }
    }
    /**Thêm cleavejs chỉnh sửa giá món ăn */
    updatePrice(item) {
        let price = this.editPrice['price-' + item._id].getRawValue();
        this.choiceSideDishes.price = price ? parseFloat(price) : 0;
        this.choiceSideDishes.quantity =
            this.choiceSideDishes.quantity > 0 ? this.choiceSideDishes.quantity : 1;
    }
    chooseSideDishes() {
        this.showOptions = false;
        if (this.choiceSideDishes['quantity']) {
            this.closeSearchSideDishesList.emit(this.choiceSideDishes);
        }
    }
    selectFoodsCancel() {
        this.showOptions = false;
    }
    /** Tăng số lượng sản phẩm */
    increaseQuantity(item) {
        if (item.quantity != '')
            item.quantity = parseFloat(item.quantity);
        item.quantity = item.quantity + 1;
    }
    /** Giảm số lượng sản phẩm */
    reduceQuantity(item) {
        if (item.quantity != '')
            item.quantity = parseFloat(item.quantity);
        item.quantity = item.quantity - 1;
    }
}
SearchToppingComponent.ɵfac = function SearchToppingComponent_Factory(t) { return new (t || SearchToppingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAuth)); };
SearchToppingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchToppingComponent, selectors: [["app-search-topping"]], inputs: { promotions: "promotions", showDrawerSideDishesList: "showDrawerSideDishesList", default_price_type: "default_price_type" }, outputs: { closeSearchSideDishesList: "closeSearchSideDishesList" }, decls: 7, vars: 9, consts: [[3, "nzMaskClosable", "nzWidth", "nzVisible", "nzTitle", "nzOnClose"], ["id", "search-side-dishes-popup", 4, "nzDrawerContent"], [3, "nzVisible", "nzFooter", "nzTitle", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], ["modalFooterSelectFood", ""], ["id", "search-side-dishes-popup"], ["nz-row", ""], ["nz-col", "", "nzSpan", "24", 1, "search"], ["id", "inputSearchSideDishes", "nz-input", "", 1, "nz-hover-border", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], ["nz-row", "", 2, "height", "calc(100% - 35px)", "padding", "8px 0"], ["nz-col", "", "nzSpan", "24"], [1, "infinite-container", "ant-table-body", 3, "itemSize"], ["nzItemLayout", "horizontal"], ["class", "side-dishes-item", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "nzNoResult", 4, "ngIf"], [1, "side-dishes-item", 3, "click"], [3, "nzAvatar"], [2, "font-size", "0.9rem", "color", "var(--ion-color-vh-black)"], ["style", "font-size: 0.9rem; color: var(--ion-color-vh-black)", 4, "ngIf"], [3, "nzNoResult"], ["nz-row", "", "class", "option-modal", 4, "ngIf"], ["nz-row", "", 1, "option-modal"], ["nz-row", "", 2, "width", "100%"], ["nz-col", "", "nzSpan", "7", 1, "align-center", "price-edit"], ["maxlength", "15", "nz-input", "", 3, "ngClass", "value", "placeholder", "disabled", "blur"], ["style", "font-size: 0.8rem;", 4, "ngIf"], ["nz-col", "", "nzSpan", "10", 1, "text-align-center", "price-edit", 2, "display", "flex", "justify-content", "space-evenly", "align-items", "center"], ["nz-button", "", "nzType", "default", 3, "disabled", "ngClass", "click"], ["nz-icon", "", "nzType", "minus"], [3, "nzMax", "nzMin", "nzStep", "ngModel", "blur", "ngModelChange"], ["nz-icon", "", "nzType", "plus"], ["nz-col", "", "nzSpan", "7", 1, "align-center", "text-align-right"], ["nz-col", "", "nzSpan", "24", 1, "align-center", "order-div-note1"], ["nzBorderless", "", "nz-input", "", 1, "order-note", 3, "ngModel", "ngModelOptions", "placeholder", "ngModelChange"], [2, "font-size", "0.8rem"], ["nz-button", "", "nzType", "default", 1, "nz-hover-border", 2, "background-color", "var(--ion-color-vh-white)", "color", "var(--ion-color-vh-black)", 3, "click"], ["nz-button", "", 1, "nz-hover-border-green", 2, "background-color", "var(--ion-color-vh-green)", "color", "var(--ion-color-vh-white)", 3, "click"]], template: function SearchToppingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzOnClose", function SearchToppingComponent_Template_nz_drawer_nzOnClose_0_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchToppingComponent_div_2_Template, 11, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function SearchToppingComponent_Template_nz_modal_nzVisibleChange_3_listener($event) { return ctx.showOptions = $event; })("nzOnCancel", function SearchToppingComponent_Template_nz_modal_nzOnCancel_3_listener() { return ctx.selectFoodsCancel(); })("nzOnOk", function SearchToppingComponent_Template_nz_modal_nzOnOk_3_listener() { return ctx.chooseSideDishes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchToppingComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchToppingComponent_ng_template_5_Template, 6, 6, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 7, "Search for side dishes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzMaskClosable", true)("nzWidth", 500)("nzVisible", ctx.showDrawerSideDishesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzTitle", ctx.choiceSideDishes.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.showOptions)("nzFooter", _r2);
    } }, directives: [ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerComponent, ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_2__.NzDrawerContentDirective, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalContentDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_4__.NzColDirective, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_5__.NzInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.CdkVirtualScrollViewport, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.CdkFixedSizeVirtualScroll, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListItemComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListItemMetaComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListItemMetaTitleComponent, ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_8__.NzListEmptyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__.NzWaveDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_13__.NzIconDirective, ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_14__.NzInputNumberComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["#search-side-dishes-popup[_ngcontent-%COMP%], .infinite-container[_ngcontent-%COMP%] {\n  height: calc(100% - 68px);\n}\n\n.infinite-container[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.side-dishes-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.side-dishes-item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(204, 204, 202, 0.05);\n}\n\n.side-dishes-item[_ngcontent-%COMP%]   .ant-list-item-meta-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem !important;\n}\n\n\n\n.option-modal[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.option-modal[_ngcontent-%COMP%]   .order-note[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--ion-color-vh-gray);\n  padding: 0;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px calc(100% - 64px) 32px;\n  grid-template-rows: 100%;\n  justify-content: center;\n  align-items: center;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-activate[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-green) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-activate[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--ion-color-vh-green) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-disabled[_ngcontent-%COMP%] {\n  border-color: var(--ion-color-vh-gray) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .number-choice[_ngcontent-%COMP%]   .btn-disabled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n  color: var(--ion-color-vh-gray) !important;\n}\n\n.option-modal[_ngcontent-%COMP%]   .align-center[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.option-modal[_ngcontent-%COMP%]   .text-align-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.option-modal[_ngcontent-%COMP%]   .text-align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n  .search > app-keyboard > div {\n  position: fixed !important;\n  left: 10%;\n  width: 55% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC10b3BwaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0E7RUFDSSxlQUFBO0FBRUo7O0FBREk7RUFDSSwyQ0FBQTtBQUdSOztBQURJO0VBQ0ksNEJBQUE7QUFHUjs7QUFDQSxVQUFBOztBQUNBO0VBQ0ksV0FBQTtBQUVKOztBQURJO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUFHUjs7QUFESTtFQUNJLGFBQUE7RUFDQSxrREFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdSOztBQUZRO0VBQ0ksa0RBQUE7QUFJWjs7QUFIWTtFQUNJLDBCQUFBO0VBQ0EsMkNBQUE7QUFLaEI7O0FBRlE7RUFDSSxpREFBQTtBQUlaOztBQUhZO0VBQ0ksMEJBQUE7RUFDQSwwQ0FBQTtBQUtoQjs7QUFESTtFQUNJLGtCQUFBO0FBR1I7O0FBREk7RUFDSSxpQkFBQTtBQUdSOztBQURJO0VBQ0ksa0JBQUE7QUFHUjs7QUFBQTtFQUNJLDBCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FBR0oiLCJmaWxlIjoic2VhcmNoLXRvcHBpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoLXNpZGUtZGlzaGVzLXBvcHVwLFxyXG4uaW5maW5pdGUtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjhweCk7XHJcbn1cclxuLmluZmluaXRlLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uc2lkZS1kaXNoZXMtaXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDIsIDAuMDUpO1xyXG4gICAgfVxyXG4gICAgLmFudC1saXN0LWl0ZW0tbWV0YS10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqTW9kYWwgKi9cclxuLm9wdGlvbi1tb2RhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5vcmRlci1ub3RlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyYXkpO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAubnVtYmVyLWNob2ljZSB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMycHggY2FsYygxMDAlIC0gNjRweCkgMzJweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMCU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuYnRuLWFjdGl2YXRlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idG4tZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmF5KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFsaWduLWNlbnRlciB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtYWxpZ24tcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnRleHQtYWxpZ24tY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuOjpuZy1kZWVwIC5zZWFyY2ggPmFwcC1rZXlib2FyZD5kaXZ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDEwJTtcclxuICAgIHdpZHRoOiA1NSUgIWltcG9ydGFudDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 37147:
/*!****************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/cafe-desktop/components/cart1/search-topping/search-topping.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchToppingModule": () => (/* binding */ SearchToppingModule)
/* harmony export */ });
/* harmony import */ var _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../keyboard/keyboard.module */ 9657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _search_topping_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-topping.component */ 53817);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ 42791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);








class SearchToppingModule {
}
SearchToppingModule.ɵfac = function SearchToppingModule_Factory(t) { return new (t || SearchToppingModule)(); };
SearchToppingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SearchToppingModule });
SearchToppingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
            _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SearchToppingModule, { declarations: [_search_topping_component__WEBPACK_IMPORTED_MODULE_1__.SearchToppingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule,
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__.ScrollingModule,
        _keyboard_keyboard_module__WEBPACK_IMPORTED_MODULE_0__.KeyboardModule], exports: [_search_topping_component__WEBPACK_IMPORTED_MODULE_1__.SearchToppingComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_cafe-desktop_components_cart1_cart1_module_ts.js.map