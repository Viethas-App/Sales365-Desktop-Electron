"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template3_template3_module_ts"],{

/***/ 11203:
/*!****************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-menu/menu-template/template3/template3.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template3Component": () => (/* binding */ Template3Component)
/* harmony export */ });
/* harmony import */ var C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-to-image */ 48117);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! print-js */ 37399);
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/modal */ 98797);
/* harmony import */ var src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cafe/services/language.service */ 52502);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/icon */ 35203);
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ 29910);
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/layout */ 82681);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ 56079);
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ 94772);
/* harmony import */ var _menu_customize_menu_customize_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-customize/menu-customize.component */ 95132);
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/radio */ 31031);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 70325);




















const _c0 = function (a0) {
  return {
    "visibility": a0,
    color: "#373737"
  };
};

function Template3Component_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-radio-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function Template3Component_div_11_Template_nz_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r2.themeTemp = $event;
    })("ngModelChange", function Template3Component_div_11_Template_nz_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r4.changeTheme($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.themeTemp)("nzDisabled", ctx_r0.applyStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c0, ctx_r0.theme == "1" ? "initial" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c0, ctx_r0.theme == "2" ? "initial" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c0, ctx_r0.theme == "3" ? "initial" : "hidden"));
  }
}

const _c1 = function (a0, a1, a2) {
  return {
    "fontBold": a0,
    "fontItalic": a1,
    "fontUnderline": a2
  };
};

const _c2 = function (a0, a1, a2, a3, a4) {
  return {
    "fontSize": a0,
    "fontFamily": a1,
    "color": a2,
    "textAlign": a3,
    "outline": a4
  };
};

function Template3Component_ng_container_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Template3Component_ng_container_32_div_1_Template_input_focus_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r8.edit(page_r5.titleMenu.style);
    })("click", function Template3Component_ng_container_32_div_1_Template_input_click_3_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function Template3Component_ng_container_32_div_1_Template_input_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return page_r5.titleMenu.value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Template3Component_ng_container_32_div_1_Template_input_focus_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r14.edit(page_r5.address.style);
    })("click", function Template3Component_ng_container_32_div_1_Template_input_click_5_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function Template3Component_ng_container_32_div_1_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return page_r5.address.value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "menu-book-" + page_r5._id)("ngClass", "theme-" + ctx_r6.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](10, _c1, page_r5.titleMenu.style.fontBold, page_r5.titleMenu.style.fontItalic, page_r5.titleMenu.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](14, _c2, page_r5.titleMenu.style.fontSize + "px", page_r5.titleMenu.style.font, page_r5.titleMenu.style.fontColor, page_r5.titleMenu.style.align, page_r5.titleMenu.style.outline ? page_r5.titleMenu.style.outline : "none"))("ngModel", page_r5.titleMenu.value)("disabled", !ctx_r6.editStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](20, _c1, page_r5.address.style.fontBold, page_r5.address.style.fontItalic, page_r5.address.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](24, _c2, page_r5.address.style.fontSize + "px", page_r5.address.style.font, page_r5.address.style.fontColor, page_r5.address.style.align, page_r5.address.style.outline ? page_r5.address.style.outline : "none"))("ngModel", page_r5.address.value)("disabled", !ctx_r6.editStatus);
  }
}

const _c3 = function (a0) {
  return {
    "fontFamily": a0
  };
};

function Template3Component_ng_container_32_div_2_div_5_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c3, line_r23.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r24.vhAlgorithm.vhcurrencyunit_symbol(line_r23.price), " ");
  }
}

const _c4 = function (a0, a1, a2, a3) {
  return {
    "fontSize": a0,
    "color": a1,
    "textAlign": a2,
    "outline": a3
  };
};

function Template3Component_ng_container_32_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template3Component_ng_container_32_div_2_div_5_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const line_r23 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      ctx_r26.editStatus ? ctx_r26.edit(line_r23.style, line_r23.class) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, Template3Component_ng_container_32_div_2_div_5_div_3_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r23 = ctx.$implicit;
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](page_r5.data ? line_r23.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "page-row-", line_r23.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](9, _c1, line_r23.style.fontBold, line_r23.style.fontItalic, line_r23.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](13, _c4, line_r23.style.fontSize + "px", line_r23.style.fontColor, line_r23.style.align, line_r23.style.outline ? line_r23.style.outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c3, line_r23.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", line_r23.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r23.price);
  }
}

function Template3Component_ng_container_32_div_2_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c3, line_r29.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r30.vhAlgorithm.vhcurrencyunit_symbol(line_r29.price), " ");
  }
}

function Template3Component_ng_container_32_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template3Component_ng_container_32_div_2_div_8_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const line_r29 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      ctx_r32.editStatus ? ctx_r32.edit(line_r29.style, line_r29.class) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, Template3Component_ng_container_32_div_2_div_8_div_3_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r29 = ctx.$implicit;
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](page_r5.data ? line_r29.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "page-row-", line_r29.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](9, _c1, line_r29.style.fontBold, line_r29.style.fontItalic, line_r29.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](13, _c4, line_r29.style.fontSize + "px", line_r29.style.fontColor, line_r29.style.align, line_r29.style.outline ? line_r29.style.outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c3, line_r29.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", line_r29.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r29.price);
  }
}

function Template3Component_ng_container_32_div_2_div_17_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c3, line_r35.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r36.vhAlgorithm.vhcurrencyunit_symbol(line_r35.price), " ");
  }
}

function Template3Component_ng_container_32_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template3Component_ng_container_32_div_2_div_17_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39);
      const line_r35 = restoredCtx.$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      ctx_r38.editStatus ? ctx_r38.edit(line_r35.style, line_r35.class) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, Template3Component_ng_container_32_div_2_div_17_div_3_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r35 = ctx.$implicit;
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](page_r5.data ? line_r35.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "page-row-", line_r35.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](9, _c1, line_r35.style.fontBold, line_r35.style.fontItalic, line_r35.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](13, _c4, line_r35.style.fontSize + "px", line_r35.style.fontColor, line_r35.style.align, line_r35.style.outline ? line_r35.style.outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](18, _c3, line_r35.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", line_r35.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r35.price);
  }
}

const _c5 = function (a0, a1) {
  return {
    "transform": a0,
    "outline": a1
  };
};

function Template3Component_ng_container_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Template3Component_ng_container_32_div_2_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r41.edit(ctx_r41.titleMenu.style);
    })("click", function Template3Component_ng_container_32_div_2_Template_input_click_2_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function Template3Component_ng_container_32_div_2_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r44.titleMenu.value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, Template3Component_ng_container_32_div_2_div_5_Template, 4, 20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, Template3Component_ng_container_32_div_2_div_8_Template, 4, 20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template3Component_ng_container_32_div_2_Template_img_click_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r45.editStatus ? ctx_r45.edit(ctx_r45.imgPage[page_r5._id - 1][1]) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template3Component_ng_container_32_div_2_Template_img_click_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r47.editStatus ? ctx_r47.edit(ctx_r47.imgPage[page_r5._id - 1][2]) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, Template3Component_ng_container_32_div_2_div_17_Template, 4, 20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Template3Component_ng_container_32_div_2_Template_input_focus_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r49.edit(ctx_r49.phone.style);
    })("click", function Template3Component_ng_container_32_div_2_Template_input_click_19_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function Template3Component_ng_container_32_div_2_Template_input_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r51.phone.value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "menu-book-" + page_r5._id)("ngClass", "theme-" + ctx_r7.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](28, _c1, ctx_r7.titleMenu.style.fontBold, ctx_r7.titleMenu.style.fontItalic, ctx_r7.titleMenu.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](32, _c2, ctx_r7.titleMenu.style.fontSize + "px", ctx_r7.titleMenu.style.font, ctx_r7.titleMenu.style.fontColor, ctx_r7.titleMenu.style.align, ctx_r7.titleMenu.style.outline ? ctx_r7.titleMenu.style.outline : "none"))("ngModel", ctx_r7.titleMenu.value)("disabled", !ctx_r7.editStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", page_r5.data[0])("ngForTrackBy", ctx_r7.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", page_r5.data[1])("ngForTrackBy", ctx_r7.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r7.imgPage[page_r5._id - 1] ? ctx_r7.imgPage[page_r5._id - 1][1].src : "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 24, ctx_r7.editStatus ? "Click to change image" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r7.imgPage[page_r5._id - 1][1].shape)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](38, _c5, "scale(" + ctx_r7.imgPage[page_r5._id - 1][1].ratio + ")", ctx_r7.imgPage[page_r5._id - 1][1].outline ? ctx_r7.imgPage[page_r5._id - 1][1].outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r7.imgPage[page_r5._id - 1] ? ctx_r7.imgPage[page_r5._id - 1][2].src : "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 26, ctx_r7.editStatus ? "Click to change image" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r7.imgPage[page_r5._id - 1][2].shape)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](41, _c5, "scale(" + ctx_r7.imgPage[page_r5._id - 1][2].ratio + ")", ctx_r7.imgPage[page_r5._id - 1][2].outline ? ctx_r7.imgPage[page_r5._id - 1][2].outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", page_r5.data[2])("ngForTrackBy", ctx_r7.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](44, _c1, ctx_r7.phone.style.fontBold, ctx_r7.phone.style.fontItalic, ctx_r7.phone.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](48, _c2, ctx_r7.phone.style.fontSize + "px", ctx_r7.phone.style.font, ctx_r7.phone.style.fontColor, ctx_r7.phone.style.align, ctx_r7.phone.style.outline ? ctx_r7.phone.style.outline : "none"))("ngModel", ctx_r7.phone.value)("disabled", !ctx_r7.editStatus);
  }
}

function Template3Component_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Template3Component_ng_container_32_div_1_Template, 7, 30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Template3Component_ng_container_32_div_2_Template, 20, 54, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const page_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", page_r5.type == "cover");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", page_r5.type == "page");
  }
}

class Template3Component {
  constructor(cdRef, router, vhQueryCafe, modal, vhAlgorithm, languageService, vhAuth, vhImage) {
    this.cdRef = cdRef;
    this.router = router;
    this.vhQueryCafe = vhQueryCafe;
    this.modal = modal;
    this.vhAlgorithm = vhAlgorithm;
    this.languageService = languageService;
    this.vhAuth = vhAuth;
    this.vhImage = vhImage;
    this.imageWaiting = [];
    this.editStatus = true;
    this.theme = "1";
    this.themeTemp = "1";
    this.color1 = '#373737';
    this.color2 = '#00486b';
    this.dataMenu = [{
      _id: 0,
      titleMenu: {
        value: "MENU",
        style: {
          align: 'left',
          fontBold: false,
          fontItalic: false,
          fontUnderline: false,
          font: 'Arial',
          fontSize: 64,
          fontColor: this.color2
        }
      },
      address: {
        value: "Địa chỉ: 161/3 Ni Sư Huỳnh Liên, p.10, Q. Tân Bình, Tp.HCM",
        style: {
          align: 'left',
          fontBold: false,
          fontItalic: false,
          fontUnderline: false,
          font: 'Arial',
          fontSize: 14,
          fontColor: this.color1
        }
      },
      type: 'cover'
    }, {
      _id: 1,
      data: [[], [], []],
      type: 'page'
    }];
    this.imgPage = [{
      1: {
        src: "assets/icon/management/menu/template3/menu1.jpg",
        shape: 'rectangle',
        ratio: 1
      },
      2: {
        src: "assets/icon/management/menu/template3/menu2.jpg",
        shape: 'square',
        ratio: 1
      }
    }];
    this.titleMenu = {
      value: "Nhà hàng Viethas",
      style: {
        align: 'center',
        fontBold: false,
        fontItalic: false,
        fontUnderline: false,
        font: 'Arial',
        fontSize: 40,
        fontColor: this.color2
      }
    };
    this.phone = {
      value: 'Hotline: 0 329 086 925',
      style: {
        align: 'center',
        fontBold: false,
        fontItalic: false,
        fontUnderline: false,
        font: 'Arial',
        fontSize: 14,
        fontColor: this.color1
      }
    };
    this.dataAttribute = null;
    this.classRows = null;
    this.exportStatus = false;
    this.applyStatus = false;
    this.saveStatus = false;
    /**Check Exit Page */

    this.exitPage = false;
    this.dataSave = this.router.getCurrentNavigation().extras.state; // kiểm tra bản lưu 

    if (this.dataSave) {
      this.imgPage = this.dataSave['img'];
      this.theme = this.dataSave['theme'];
      this.themeTemp = this.dataSave['theme'];
      this.dataMenu[0] = this.dataSave['cover'];
      this.titleMenu = this.dataSave['title'];
      this.phone = this.dataSave['subtitle'];
    }

    this.getData();
  }

  myTrackByFunction(element, index) {
    return element.index ? element.index : index;
  }

  myTrackByFunctionID(element, index) {
    return element._id ? element._id : index;
  }

  ngAfterViewInit() {
    document.getElementById("template-container").addEventListener("fullscreenchange", ev => {
      this.editStatus = !this.editStatus;
    });
    this.dataMenu = this.transformData(this.dataMenu);
    document.getElementById("mainTitle").focus();
  }

  ngOnDestroy() {
    document.getElementById("template-container").removeEventListener("fullscreenchange", ev => {});
    this.deleteImageWaiting(this.imageWaiting);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  changeTheme(theme) {
    this.modal.confirm({
      nzTitle: this.languageService.translate("Are you sure to change this theme?"),
      nzContent: this.languageService.translate("Changing the theme will change your editing"),
      nzOkText: 'OK',
      nzCancelText: this.languageService.translate("Cancel"),
      nzOnOk: () => new Promise((resolve, reject) => {
        this.theme = theme;

        switch (theme) {
          case "1":
            this.color1 = '#373737';
            this.color2 = '#00486b';
            break;

          case "2":
            this.color1 = '#373737';
            this.color2 = '#0d7d3f';
            break;

          case "3":
            this.color1 = '#373737';
            this.color2 = '#a81f23';
            break;
        } // set toàn bộ màu sắc


        this.titleMenu.style.fontColor = this.color2;
        this.phone.style.fontColor = this.color1;
        this.dataMenu.forEach((page, index) => {
          if (index > 0) {
            page.data[0].forEach(row => {
              row.style.fontColor = row.class == "category-lines" ? this.color2 : this.color1;
            });
            page.data[1].forEach(row => {
              row.style.fontColor = row.class == "category-lines" ? this.color2 : this.color1;
            });
            page.data[2].forEach(row => {
              row.style.fontColor = row.class == "category-lines" ? this.color2 : this.color1;
            });
          } else {
            page.titleMenu.style.fontColor = this.color2;
            page.address.style.fontColor = this.color1;
          }
        });
        resolve();
      }),
      nzOnCancel: () => {
        return new Promise(resolve => {
          this.themeTemp = this.theme;
          resolve();
        });
      }
    });
  }
  /**Render các thành phần combo */


  getSubCombo(arr) {
    let subName = "";
    arr.forEach(item => {
      if (subName.length) subName += `, ${item.quantity} ${item.name}`;else subName += `${item.quantity} ${item.name}`;
    });
    return subName;
  }

  getData() {
    let categories = this.vhQueryCafe.getlocalCategorys(1);
    let foods = this.vhQueryCafe.getlocalProducts(1).filter(item => !item.delete_hidden);
    let ingredients = this.vhQueryCafe.getlocalProducts(3).filter(item => !item.delete_hidden);
    let sideDishes = this.vhQueryCafe.getlocalProducts(4).filter(item => !item.delete_hidden);
    let combos = this.vhQueryCafe.getlocalProducts(5).filter(item => !item.delete_hidden);
    let index = 0; // đánh dấu index món ăn

    let rowStyle; // kiểm tra có bản lưu hay không?

    if (this.dataSave) rowStyle = this.dataSave['rowStyle']; // combo

    if (combos.length) {
      let styleCategory = rowStyle ? rowStyle['combo'] : null;
      this.dataMenu[1].data[0].push({
        name: this.languageService.translate("Combo"),
        class: 'category-lines',
        index,
        _id: 'combo',
        style: styleCategory ? styleCategory : {
          align: 'left',
          fontBold: true,
          fontItalic: false,
          fontUnderline: false,
          font: 'Arial',
          fontSize: 14,
          fontColor: this.color2
        }
      });
      index++;

      for (let combo of combos) {
        let styleFood = rowStyle ? rowStyle[combo._id] : null;
        this.dataMenu[1].data[0].push({
          name: combo.name,
          price: combo.price,
          class: 'food-lines-price',
          index,
          _id: combo._id,
          style: styleFood ? styleFood : {
            align: 'left',
            fontBold: false,
            fontItalic: false,
            fontUnderline: false,
            font: 'Arial',
            fontSize: 12,
            fontColor: this.color1
          }
        });
        index++;
        let styleSub = rowStyle ? rowStyle[`subs-${combo._id}`] : null;
        this.dataMenu[1].data[0].push({
          name: this.getSubCombo(combo.combos),
          class: 'combo-subs-lines',
          index,
          _id: `subs-${combo._id}`,
          style: styleSub ? styleSub : {
            align: 'left',
            fontBold: false,
            fontItalic: false,
            fontUnderline: false,
            font: 'Arial',
            fontSize: 10,
            fontColor: this.color1
          }
        });
        index++;
      }
    } // món ăn


    for (let category of categories) {
      let styleCategory = rowStyle ? rowStyle[category._id] : null;
      this.dataMenu[1].data[0].push({
        name: category.name,
        class: 'category-lines',
        index,
        _id: category._id,
        style: styleCategory ? styleCategory : {
          align: 'left',
          fontBold: true,
          fontItalic: false,
          fontUnderline: false,
          font: 'Arial',
          fontSize: 14,
          fontColor: this.color2
        }
      });
      index++;

      for (let food of foods) {
        if (food.id_category == category._id) {
          if (food.subs && food.subs.length > 0) {
            let styleFood = rowStyle ? rowStyle[food._id] : null;
            this.dataMenu[1].data[0].push({
              name: food.name,
              class: 'food-lines-noprice',
              index,
              _id: food._id,
              style: styleFood ? styleFood : {
                align: 'left',
                fontBold: false,
                fontItalic: false,
                fontUnderline: false,
                font: 'Arial',
                fontSize: 12,
                fontColor: this.color1
              }
            });
            index++;

            for (let subs of food.subs) {
              let styleSub = rowStyle ? rowStyle[subs._id] : null;
              this.dataMenu[1].data[0].push({
                name: subs.name,
                price: subs.price,
                class: 'subs-lines',
                index,
                _id: subs._id,
                style: styleSub ? styleSub : {
                  align: 'left',
                  fontBold: false,
                  fontItalic: false,
                  fontUnderline: false,
                  font: 'Arial',
                  fontSize: 12,
                  fontColor: this.color1
                }
              });
              index++;
            }
          } else {
            let styleFood = rowStyle ? rowStyle[food._id] : null;
            this.dataMenu[1].data[0].push({
              name: food.name,
              price: food.price,
              class: 'food-lines-price',
              index,
              _id: food._id,
              style: styleFood ? styleFood : {
                align: 'left',
                fontBold: false,
                fontItalic: false,
                fontUnderline: false,
                font: 'Arial',
                fontSize: 12,
                fontColor: this.color1
              }
            });
            index++;
          }
        }
      }
    } // món phụ cho bán


    if (sideDishes.length) {
      let styleCategory = rowStyle ? rowStyle['sideDish'] : null;
      this.dataMenu[1].data[0].push({
        name: this.languageService.translate("Side dishes"),
        class: 'category-lines',
        index,
        _id: 'sideDish',
        style: styleCategory ? styleCategory : {
          align: 'left',
          fontBold: true,
          fontItalic: false,
          fontUnderline: false,
          font: 'Arial',
          fontSize: 14,
          fontColor: this.color2
        }
      });
      index++;

      for (let sideDish of sideDishes) {
        let styleSideDishes = rowStyle ? rowStyle[sideDish._id] : null;
        this.dataMenu[1].data[0].push({
          name: sideDish.name,
          price: sideDish.price,
          class: 'food-lines-price',
          index,
          _id: sideDish._id,
          style: styleSideDishes ? styleSideDishes : {
            align: 'left',
            fontBold: false,
            fontItalic: false,
            fontUnderline: false,
            font: 'Arial',
            fontSize: 12,
            fontColor: this.color1
          }
        });
        index++;
      }
    } // nguyên liệu cho bán


    if (ingredients.length) {
      let styleCategory = rowStyle ? rowStyle['ingredient'] : null;
      this.dataMenu[1].data[0].push({
        name: this.languageService.translate("Ingredient"),
        class: 'category-lines',
        index,
        _id: 'ingredient',
        style: styleCategory ? styleCategory : {
          align: 'left',
          fontBold: true,
          fontItalic: false,
          fontUnderline: false,
          font: 'Arial',
          fontSize: 14,
          fontColor: this.color2
        }
      });
      index++;

      for (let ingredient of ingredients) {
        let styleIngredient = rowStyle ? rowStyle[ingredient._id] : null;
        this.dataMenu[1].data[0].push({
          name: ingredient.name,
          price: ingredient.price,
          class: 'food-lines-price',
          index,
          _id: ingredient._id,
          style: styleIngredient ? styleIngredient : {
            align: 'left',
            fontBold: false,
            fontItalic: false,
            fontUnderline: false,
            font: 'Arial',
            fontSize: 12,
            fontColor: this.color1
          }
        });
        index++;
      }
    }

    console.log(this.dataMenu);
  } // phân trang trước khi load dữ liệu


  transformData(dataMenuRaw) {
    let data = [this.dataMenu[0], {
      _id: 1,
      data: [[], [], []],
      type: 'page'
    }];
    let i = this.dataMenu.length - 1;
    let j = 0;
    let countUnit = 0;

    const transfer = distance => {
      countUnit += distance;

      if (countUnit > 418 && j == 0) {
        // dư thừa đưa sang cột kế bên
        let temp = data[i].data[j].pop();
        j += 1;
        countUnit = distance;
        data[i].data[j].push(temp);
      }

      if (countUnit > 292 && j == 1) {
        // dư thừa đưa sang cột kế bên
        let temp = data[i].data[j].pop();
        j += 1;
        countUnit = distance;
        data[i].data[j].push(temp);
      }

      if (countUnit > 209 && j == 2) {
        // dư thừa đưa sang trang kế tiếp
        let temp = data[i].data[j].pop();
        i++;
        j = 0;
        countUnit = distance;
        data.push({
          _id: i,
          data: [[temp], [], []],
          type: 'page'
        });

        if (this.imgPage.length < i) {
          this.imgPage.push({
            1: {
              src: "assets/icon/management/menu/template3/menu1.jpg",
              shape: 'rectangle',
              ratio: 1
            },
            2: {
              src: "assets/icon/management/menu/template3/menu2.jpg",
              shape: 'square',
              ratio: 1
            }
          });
        }
      }
    };

    for (let rows of dataMenuRaw[1].data[0]) {
      let node = document.getElementById("page-row-" + rows.index);
      data[i].data[j].push(rows);
      transfer(node.clientHeight);
    }

    return data;
  } // phân trang sau khi đã load dữ liệu


  changeStyle(returnData) {
    var _this = this;

    return (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.applyStatus = true;
      let countUnit = 0;

      const transfer = /*#__PURE__*/function () {
        var _ref = (0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (pageIdCurrent, columnCurrent, rowCurrent, distance) {
          // lấy dữ liệu trang tiếp theo đưa về lại trang đầu
          const fetchDataNextPage = () => {
            if (rowCurrent == numberItem - 1) {
              // cuối cột nhưng chưa lấp đầy cột
              if (_this.dataMenu[pageIdCurrent + 1]) {
                // TH đổ dữ liệu trang tiếp theo về lại trang cũ 
                if (_this.dataMenu[pageIdCurrent + 1].data[0].length > 0) {
                  // nếu cột 1 trang tiếp còn rows
                  let temp = _this.dataMenu[pageIdCurrent + 1].data[0].shift();

                  if (temp) _this.dataMenu[pageIdCurrent].data[columnCurrent].push(temp); // console.log("page " + pageIdCurrent + " - " + rowCurrent + " " + countUnit)
                } else if (_this.dataMenu[pageIdCurrent + 1].data[1].length > 0) {
                  // nếu cột 2 trang tiếp còn rows
                  let temp = _this.dataMenu[pageIdCurrent + 1].data[1].shift();

                  if (temp) _this.dataMenu[pageIdCurrent].data[columnCurrent].push(temp);
                } else if (_this.dataMenu[pageIdCurrent + 1].data[2].length > 0) {
                  // nếu cột 3 trang tiếp còn rows
                  let temp = _this.dataMenu[pageIdCurrent + 1].data[2].shift();

                  if (temp) _this.dataMenu[pageIdCurrent].data[columnCurrent].push(temp);
                } else {
                  // console.log("xóa trang thừa " + pageIdCurrent + " - " + rowCurrent + " " + countUnit)
                  _this.dataMenu.splice(pageIdCurrent + 1, 1); // xóa các trang thừa


                  _this.imgPage.pop(); // kiểm tra lại một lần nữa xem còn trang thừa nào không?


                  transfer(pageIdCurrent, columnCurrent, rowCurrent, 0);
                }
              }
            }
          };

          countUnit += distance;
          let numberItem = _this.dataMenu[pageIdCurrent].data[columnCurrent].length;

          if (columnCurrent == 0) {
            if (countUnit > 418) {
              // dư thừa đưa sang cột kế bên
              let temp = _this.dataMenu[pageIdCurrent].data[0].splice(rowCurrent, numberItem - rowCurrent);

              _this.dataMenu[pageIdCurrent].data[1] = temp.concat(_this.dataMenu[pageIdCurrent].data[1]);
              countUnit = 0;
            } else {
              if (rowCurrent == numberItem - 1) {
                // cuối cột nhưng chưa lấp đầy cột
                if (_this.dataMenu[pageIdCurrent].data[1].length > 0) {
                  // nếu cột 2 tiếp theo có rows
                  let temp = _this.dataMenu[pageIdCurrent].data[1].shift();

                  if (temp) _this.dataMenu[pageIdCurrent].data[0].push(temp);
                } else if (_this.dataMenu[pageIdCurrent].data[2].length > 0) {
                  // nếu cột 3 tiếp theo có rows
                  let temp = _this.dataMenu[pageIdCurrent].data[2].shift();

                  if (temp) _this.dataMenu[pageIdCurrent].data[0].push(temp);
                } else fetchDataNextPage();
              }
            }
          }

          if (columnCurrent == 1) {
            if (countUnit > 292) {
              // dư thừa đưa sang cột kế bên
              let temp = _this.dataMenu[pageIdCurrent].data[1].splice(rowCurrent, numberItem - rowCurrent);

              _this.dataMenu[pageIdCurrent].data[2] = temp.concat(_this.dataMenu[pageIdCurrent].data[2]);
              countUnit = 0;
            } else {
              if (rowCurrent == numberItem - 1) {
                // cuối cột nhưng chưa lấp đầy cột
                if (_this.dataMenu[pageIdCurrent].data[2].length > 0) {
                  // nếu cột 3 tiếp theo có rows
                  let temp = _this.dataMenu[pageIdCurrent].data[2].shift();

                  if (temp) _this.dataMenu[pageIdCurrent].data[1].push(temp);
                } else fetchDataNextPage();
              }
            }
          }

          if (columnCurrent == 2) {
            if (countUnit > 209) {
              let temp = _this.dataMenu[pageIdCurrent].data[2].splice(rowCurrent, numberItem - rowCurrent); // chuyển dữ liệu thừa sang page tiếp theo


              if (_this.dataMenu[pageIdCurrent + 1]) // có tồn tại page 2
                _this.dataMenu[pageIdCurrent + 1].data[0] = temp.concat(_this.dataMenu[pageIdCurrent + 1].data[0]);else {
                _this.dataMenu.push({
                  _id: _this.dataMenu.length,
                  data: [temp, [], []],
                  type: 'page'
                });

                _this.imgPage.push({
                  1: {
                    src: "assets/icon/management/menu/template3/menu1.jpg",
                    shape: 'rectangle',
                    ratio: 1
                  },
                  2: {
                    src: "assets/icon/management/menu/template3/menu2.jpg",
                    shape: 'square',
                    ratio: 1
                  }
                });
              }
              countUnit = 0;
            } else fetchDataNextPage();
          }
        });

        return function transfer(_x, _x2, _x3, _x4) {
          return _ref.apply(this, arguments);
        };
      }();

      for (let i = 1; i < _this.dataMenu.length; i++) {
        for (let j = 0; j < _this.dataMenu[i].data.length; j++) {
          for (let k = 0; k < _this.dataMenu[i].data[j].length; k++) {
            if (returnData) {
              if (returnData.class == _this.dataMenu[i].data[j][k].class) {
                _this.dataMenu[i].data[j][k].style = Object.assign(Object.assign({}, returnData.style), {
                  outline: 'none'
                });
                yield _this.timeout(10);
              }
            }

            let node = document.getElementById("page-row-" + _this.dataMenu[i].data[j][k].index); // đang kiểm tra rows đang xét

            _this.dataMenu[i]._id = _this.dataMenu[i - 1]._id + 1; //set lại id sau nhiều lần xóa các trang thừa

            transfer(i, j, k, node.clientHeight);
          }
        }
      }

      if (returnData) _this.outOfElement();
      _this.applyStatus = false;
    })();
  }

  renderSize(size) {
    switch (size) {
      case "A3":
        return "4.5px";

      case "A5":
        return "7.5px";

      default:
        return "6.5px";
    }
  }

  print() {
    var _this2 = this;

    this.outOfElement();
    this.exportStatus = true;
    setTimeout( /*#__PURE__*/(0,C_GitHub_Sales365_Desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let data = new Array(_this2.dataMenu.length);

      for (let [index, item] of _this2.dataMenu.entries()) {
        data[index] = yield dom_to_image__WEBPACK_IMPORTED_MODULE_1___default().toSvg(document.getElementById("menu-book-" + item._id), {
          quality: 1
        });
      }

      print_js__WEBPACK_IMPORTED_MODULE_2___default()({
        printable: data,
        type: 'image',
        imageStyle: 'width: 100%',
        style: '@page { margin: 0 !important; padding: 0 !important; }'
      });
      _this2.exportStatus = false;
    }), 10);
  }

  preview() {
    this.outOfElement();
    document.getElementById("template-container").requestFullscreen();
  } // chỉnh sửa


  edit(style, rowClass) {
    style.outline = '1px black dashed';

    if (this.dataAttribute) {
      this.outOfElement();
      this.dataAttribute = style;
      this.classRows = rowClass;
    } else {
      setTimeout(() => {
        this.dataAttribute = style;
        this.classRows = rowClass;
      }, 200);
    }
  }

  outOfElement() {
    // xóa dữ liệu Input
    if (this.dataAttribute) {
      this.dataAttribute.outline = 'none';
      this.dataAttribute = null;
    }
  }

  timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  /**Lưu menu */


  saveMenu() {
    return new Promise((resolve, rejects) => {
      this.saveStatus = true;
      let rowStyle = new Object({}); // lưu trữ style các dòng

      for (let i = 1; i < this.dataMenu.length; i++) {
        for (let j = 0; j < this.dataMenu[i].data.length; j++) {
          this.dataMenu[i].data[j].forEach(row => {
            rowStyle[row._id] = row.style;
          });
        }
      }

      let data = {
        rowStyle,
        id_editor: this.vhAuth.getUser()._id,
        template: 3,
        pattern: 2,
        date: new Date().toISOString(),
        theme: this.theme,
        cover: this.dataMenu[0],
        title: this.titleMenu,
        subtitle: this.phone,
        img: this.imgPage
      };

      if (this.dataSave) {
        this.vhQueryCafe.updatePatternMenu(this.dataSave._id, data).then(result => {
          // reset lại ban đầu
          this.imageWaiting = [];
          this.saveStatus = false;
          resolve(true);
        }).catch(err => rejects(err));
      } else {
        this.vhQueryCafe.addPatternMenu(data).then(result => {
          // reset lại ban đầu
          this.imageWaiting = [];
          this.dataSave = result;
          this.saveStatus = false;
          resolve(true);
        }).catch(err => rejects(err));
      }
    });
  }

  popUpExit() {
    return new Promise(resolve => {
      const modal = this.modal.create({
        nzTitle: this.languageService.translate("This menu has not been saved yet"),
        nzContent: this.languageService.translate("Do you want to exit?"),
        nzFooter: [{
          label: this.languageService.translate("Save & Exit"),
          type: 'text',
          loading: this.saveStatus,
          onClick: () => {
            modal.destroy();
            resolve({
              save: true,
              exit: true
            });
          }
        }, {
          label: this.languageService.translate("Cancel"),
          onClick: () => {
            modal.destroy();
            resolve({
              save: false,
              exit: false
            });
          }
        }, {
          label: this.languageService.translate("Exit"),
          type: 'primary',
          onClick: () => {
            modal.destroy();
            resolve({
              save: false,
              exit: true
            });
          }
        }]
      });
    });
  }

  goBack() {
    this.popUpExit().then(({
      save,
      exit
    }) => {
      this.exitPage = exit;

      if (exit) {
        if (save) {
          this.saveMenu().then(() => this.router.navigateByUrl("/cafe/dashboard/management/design/design-menu"));
        } else this.router.navigateByUrl("/cafe/dashboard/management/design/design-menu");
      }
    });
  }

  checkDeactivate(currentRoute, currentState, nextState) {
    if (!this.exitPage) {
      this.popUpExit().then(({
        save,
        exit
      }) => {
        this.exitPage = exit;

        if (exit) {
          if (save) {
            this.saveMenu().then(() => this.router.navigateByUrl(nextState.url));
          } else this.router.navigateByUrl(nextState.url);
        }
      });
    }

    return this.exitPage;
  }
  /**Lưu tạm các ảnh đã up nhưng chưa lưu menu */


  addImageWaiting(photoURL) {
    this.imageWaiting.push(photoURL.newSrc); // xóa url cũ 

    let index = this.imageWaiting.findIndex(item => item == photoURL.oldSrc);
    if (index != -1) this.imageWaiting.splice(index, 1);
  }
  /**Xóa ảnh lưu tạm vì không lưu menu */


  deleteImageWaiting(images) {
    if (images.length) {
      this.vhImage.deleteThumbnail(images);
    }
  }

}

Template3Component.ɵfac = function Template3Component_Factory(t) {
  return new (t || Template3Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhImage));
};

Template3Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: Template3Component,
  selectors: [["app-template3"]],
  decls: 33,
  vars: 27,
  consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", "", 1, "design-menu-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "6", 1, "left-all-content", "title-header"], ["nz-col", "", "nzSpan", "18", 1, "right-all-content", "title-header", "button"], [4, "ngIf"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-add", 3, "nzLoading", "disabled", "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-add", 3, "disabled", "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-down", 3, "nzLoading", "disabled", "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "24", "id", "template-container", 1, "container", "ant-table-body", 3, "click"], [1, "design-menu-properties", 3, "click"], [3, "attribute", "classRow", "applyStatus", "change", "changeAll", "changeImage"], [1, "edit-main", 2, "width", "100%", "text-align", "-webkit-center"], ["id", "menu-book"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nzButtonStyle", "outline", "nzSize", "default", 3, "ngModel", "nzDisabled", "ngModelChange"], ["nz-radio-button", "", "nzValue", "1", 1, "theme-btn", 2, "background-color", "#d3e5ea"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline", 3, "ngStyle"], ["nz-radio-button", "", "nzValue", "2", 1, "theme-btn", 2, "background-color", "#bbdfc0"], ["nz-radio-button", "", "nzValue", "3", 1, "theme-btn", 2, "background-color", "#fed095"], ["class", "cover-page page", 3, "id", "ngClass", 4, "ngIf"], ["class", "menu-page page", 3, "id", "ngClass", 4, "ngIf"], [2, "height", "16px"], [1, "cover-page", "page", 3, "id", "ngClass"], [1, "cover-page-content"], [1, "cover-page-content-title"], ["id", "mainTitle", 3, "ngClass", "ngStyle", "ngModel", "disabled", "focus", "click", "ngModelChange"], [1, "cover-page-content-address"], [3, "ngClass", "ngStyle", "ngModel", "disabled", "focus", "click", "ngModelChange"], [1, "cover-page-image"], [1, "menu-page", "page", 3, "id", "ngClass"], [1, "menu-page-title"], [1, "menu-page-dish"], [1, "menu-page-dish-list"], [3, "class", "id", "ngClass", "ngStyle", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "height", "70%"], [1, "menu-page-dish-list-image-1"], [3, "src", "ngClass", "ngStyle", "title", "click"], [1, "menu-page-dish-list-image-2"], [2, "height", "50%"], [1, "menu-page-phone"], [3, "id", "ngClass", "ngStyle", "click"], [3, "ngStyle"], ["style", "text-align: right;", 3, "ngStyle", 4, "ngIf"], [2, "text-align", "right", 3, "ngStyle"]],
  template: function Template3Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template3Component_Template_div_click_0_listener() {
        return ctx.goBack();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "nz-layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, Template3Component_div_11_Template, 8, 11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template3Component_Template_button_click_13_listener() {
        return ctx.saveMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template3Component_Template_button_click_18_listener() {
        return ctx.preview();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template3Component_Template_button_click_23_listener() {
        return ctx.print();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template3Component_Template_div_click_27_listener() {
        return ctx.outOfElement();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template3Component_Template_div_click_28_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "app-menu-customize", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function Template3Component_Template_app_menu_customize_change_29_listener() {
        return ctx.changeStyle();
      })("changeAll", function Template3Component_Template_app_menu_customize_changeAll_29_listener($event) {
        return ctx.changeStyle($event);
      })("changeImage", function Template3Component_Template_app_menu_customize_changeImage_29_listener($event) {
        return ctx.addImageWaiting($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, Template3Component_ng_container_32_Template, 4, 2, "ng-container", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 17, "Back"), "\n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzGutter", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 19, "Menu design"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.themeTemp);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLoading", ctx.saveStatus)("disabled", ctx.applyStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 21, "Save"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.applyStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 23, "Preview"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nzLoading", ctx.exportStatus)("disabled", ctx.applyStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](26, 25, "Print / Download menu"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("attribute", ctx.dataAttribute)("classRow", ctx.classRows)("applyStatus", ctx.applyStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dataMenu)("ngForTrackBy", ctx.myTrackByFunctionID);
    }
  },
  directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, _menu_customize_menu_customize_component__WEBPACK_IMPORTED_MODULE_4__.MenuCustomizeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__.NzRadioButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n  border: none !important;\n  margin: 0 8px;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]::before {\n  background: none;\n}\nnz-layout[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  background: var(--ion-color-vh-white) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .btn-down[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .design-menu-properties[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  max-height: 93%;\n  overflow-y: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #menu-book[_ngcontent-%COMP%] {\n  width: 808px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 567px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.cover-page.theme-1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template3/cover1.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.cover-page.theme-2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template3/cover2.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.cover-page.theme-3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template3/cover3.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.menu-page.theme-1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template3/bg_menu1.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.menu-page.theme-2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template3/bg_menu2.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.menu-page.theme-3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template3/bg_menu3.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50% 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-content[_ngcontent-%COMP%] {\n  height: 36%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-content-title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70%;\n  display: flex;\n  align-items: flex-end;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-content-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  width: 100%;\n  max-height: 100%;\n  padding: 0 0 0 32px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-content-address[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 70%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-content-address[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  width: 100%;\n  max-height: 100%;\n  padding: 0 0 0 36px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 15%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  width: 100%;\n  max-height: 100%;\n  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish[_ngcontent-%COMP%] {\n  height: 432px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);\n  padding: 8px 65px 8px 50px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  height: 418px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .category-lines[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 10px 0 4px;\n  text-transform: uppercase;\n  max-height: 400px;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .food-lines-noprice[_ngcontent-%COMP%] {\n  cursor: pointer;\n  max-height: 400px;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .food-lines-price[_ngcontent-%COMP%] {\n  cursor: pointer;\n  max-height: 400px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: auto 100px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .subs-lines[_ngcontent-%COMP%] {\n  cursor: pointer;\n  max-height: 400px;\n  overflow: hidden;\n  padding-left: 16px;\n  display: grid;\n  grid-template-columns: auto 100px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .combo-subs-lines[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  cursor: pointer;\n  max-height: 600px;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-1[_ngcontent-%COMP%]   img.circle[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 125px;\n  border-radius: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-1[_ngcontent-%COMP%]   img.square[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 125px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-1[_ngcontent-%COMP%]   img.square_radius[_ngcontent-%COMP%] {\n  width: 125px;\n  height: 125px;\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-1[_ngcontent-%COMP%]   img.rectangle_radius[_ngcontent-%COMP%] {\n  width: calc(125 / 3 * 4px);\n  height: 125px;\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-1[_ngcontent-%COMP%]   img.rectangle[_ngcontent-%COMP%] {\n  width: calc(125 / 3 * 4px);\n  height: 125px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-2[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-2[_ngcontent-%COMP%]   img.circle[_ngcontent-%COMP%] {\n  width: 209px;\n  height: 209px;\n  border-radius: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-2[_ngcontent-%COMP%]   img.square[_ngcontent-%COMP%] {\n  width: 209px;\n  height: 209px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-2[_ngcontent-%COMP%]   img.square_radius[_ngcontent-%COMP%] {\n  width: 209px;\n  height: 209px;\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-2[_ngcontent-%COMP%]   img.rectangle_radius[_ngcontent-%COMP%] {\n  width: 215px;\n  height: calc(215 / 4 * 3px);\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list-image-2[_ngcontent-%COMP%]   img.rectangle[_ngcontent-%COMP%] {\n  width: 215px;\n  height: calc(215 / 4 * 3px);\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-phone[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 8%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-phone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  width: 100%;\n}\n.over-flow[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtBQUVKO0FBQ0E7RUFDRSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUU7RUFDRSxnQ0FBQTtFQUNBLGlCQUFBO0FBRUo7QUFBRTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNFLGdCQUFBO0FBR047QUFDSTtFQUNFLGdDQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ047QUFDSTtFQUNFLFdBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUVFO0VBQ0UsYUFBQTtBQUFKO0FBR0U7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBREo7QUFJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGSjtBQUdJO0VBQ0UsWUFBQTtBQUROO0FBR0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFETjtBQUdRO0VBQ0UsMEVBQUE7QUFEVjtBQUdRO0VBQ0UsMEVBQUE7QUFEVjtBQUdRO0VBQ0UsMEVBQUE7QUFEVjtBQUtRO0VBQ0UsNEVBQUE7QUFIVjtBQUtRO0VBQ0UsNEVBQUE7QUFIVjtBQUtRO0VBQ0UsNEVBQUE7QUFIVjtBQVFJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBTk47QUFPTTtFQUNFLFdBQUE7QUFMUjtBQU1RO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUFKVjtBQUtVO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSFo7QUFNUTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBSlY7QUFLVTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhaO0FBU007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFQUjtBQVFRO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLCtFQUFBO0FBTlY7QUFTTTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtRUFBQTtFQUNBLDBCQUFBO0FBUFI7QUFRUTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FBTlY7QUFRVTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU5aO0FBUVU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQU5aO0FBUVU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBQU5aO0FBUVU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0FBTlo7QUFRVTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFOWjtBQVNVO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFQWjtBQVFZO0VBQ0UsZUFBQTtBQU5kO0FBT2M7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTGhCO0FBT2M7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUxoQjtBQU9jO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUxoQjtBQU9jO0VBQ0UsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFMaEI7QUFPYztFQUNFLDBCQUFBO0VBQ0EsYUFBQTtBQUxoQjtBQVNVO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFQWjtBQVFZO0VBQ0UsZUFBQTtBQU5kO0FBT2M7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTGhCO0FBT2M7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQUxoQjtBQU9jO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUxoQjtBQU9jO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFMaEI7QUFPYztFQUNFLFlBQUE7RUFDQSwyQkFBQTtBQUxoQjtBQVdNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBVFI7QUFVUTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBUlY7QUFlQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVpGIiwiZmlsZSI6InRlbXBsYXRlMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgaSB7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgfVxyXG59XHJcbm56LWxheW91dCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDE0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGhlaWdodDogOTUlO1xyXG5cclxuICAudGl0bGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbik7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICB9XHJcbiAgLnRoZW1lLWJ0biB7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnV0dG9uIHtcclxuICAgIC5idG4tYWRkIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci12aC1ibGFjayk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC13aGl0ZSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1kb3duIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci12aC1ncmVlbikgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYnV0dG9uID4gZGl2IHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgfVxyXG5cclxuICAuZGVzaWduLW1lbnUtcHJvcGVydGllcyB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MyU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgI21lbnUtYm9vayB7XHJcbiAgICAgIHdpZHRoOiA4MDhweDtcclxuICAgIH1cclxuICAgIC5wYWdlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTY3cHg7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICYuY292ZXItcGFnZSB7XHJcbiAgICAgICAgJi50aGVtZS0xIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9tYW5hZ2VtZW50L21lbnUvdGVtcGxhdGUzL2NvdmVyMS5qcGdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYudGhlbWUtMiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vbWFuYWdlbWVudC9tZW51L3RlbXBsYXRlMy9jb3ZlcjIuanBnXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnRoZW1lLTMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29uL21hbmFnZW1lbnQvbWVudS90ZW1wbGF0ZTMvY292ZXIzLmpwZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi5tZW51LXBhZ2Uge1xyXG4gICAgICAgICYudGhlbWUtMSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vbWFuYWdlbWVudC9tZW51L3RlbXBsYXRlMy9iZ19tZW51MS5qcGdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYudGhlbWUtMiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vbWFuYWdlbWVudC9tZW51L3RlbXBsYXRlMy9iZ19tZW51Mi5qcGdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYudGhlbWUtMyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vbWFuYWdlbWVudC9tZW51L3RlbXBsYXRlMy9iZ19tZW51My5qcGdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvdmVyLXBhZ2Uge1xyXG4gICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgICAgICYtY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNiU7XHJcbiAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMzJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1hZGRyZXNzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAwIDM2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubWVudS1wYWdlIHtcclxuICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTUlO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICNmZmYsIDFweCAtMXB4IDAgI2ZmZiwgLTFweCAxcHggMCAjZmZmLCAxcHggMXB4IDAgI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJi1kaXNoIHtcclxuICAgICAgICBoZWlnaHQ6IDQzMnB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGNhbGMoMTAwJSAvIDMpIGNhbGMoMTAwJSAvIDMpIGNhbGMoMTAwJSAvIDMpO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCA2NXB4IDhweCA1MHB4O1xyXG4gICAgICAgICYtbGlzdCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgICAgIGhlaWdodDogNDE4cHg7XHJcblxyXG4gICAgICAgICAgLmNhdGVnb3J5LWxpbmVzIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgNHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5mb29kLWxpbmVzLW5vcHJpY2Uge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvb2QtbGluZXMtcHJpY2Uge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMTAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3Vicy1saW5lcyB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDEwMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNvbWJvLXN1YnMtbGluZXMge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi1pbWFnZS0xIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAmLmNpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmLnNxdWFyZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmLnNxdWFyZV9yYWRpdXMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDclO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmLnJlY3RhbmdsZV9yYWRpdXMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTI1IC8gMyAqIDRweCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNyU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICYucmVjdGFuZ2xlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEyNSAvIDMgKiA0cHgpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgICYtaW1hZ2UtMiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgJi5jaXJjbGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwOXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDlweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJi5zcXVhcmUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwOXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDlweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJi5zcXVhcmVfcmFkaXVzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDlweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjA5cHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3JTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgJi5yZWN0YW5nbGVfcmFkaXVzIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMTVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygyMTUgLyA0ICogM3B4KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDclO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAmLnJlY3RhbmdsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMjE1IC8gNCAqIDNweCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYtcGhvbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDglO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ub3Zlci1mbG93IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 1581:
/*!*************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-menu/menu-template/template3/template3.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template3Module": () => (/* binding */ Template3Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _template3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template3.component */ 11203);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_cafe_desktop_canLeavePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/cafe/desktop/canLeavePage */ 38248);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cafe/desktop/ng-zorro-ant.module */ 86126);
/* harmony import */ var _menu_customize_menu_customize_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-customize/menu-customize.module */ 46050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);











const routes = [
    {
        path: "",
        component: _template3_component__WEBPACK_IMPORTED_MODULE_0__.Template3Component,
        canDeactivate: [src_app_cafe_desktop_canLeavePage__WEBPACK_IMPORTED_MODULE_1__.CanLeavePage]
    }
];
class Template3Module {
}
Template3Module.ɵfac = function Template3Module_Factory(t) { return new (t || Template3Module)(); };
Template3Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: Template3Module });
Template3Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _menu_customize_menu_customize_module__WEBPACK_IMPORTED_MODULE_3__.MenuCustomizeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](Template3Module, { declarations: [_template3_component__WEBPACK_IMPORTED_MODULE_0__.Template3Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _menu_customize_menu_customize_module__WEBPACK_IMPORTED_MODULE_3__.MenuCustomizeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template3_template3_module_ts.js.map