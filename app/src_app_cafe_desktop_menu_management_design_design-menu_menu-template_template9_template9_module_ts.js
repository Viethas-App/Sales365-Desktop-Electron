"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template9_template9_module_ts"],{

/***/ 40826:
/*!****************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-menu/menu-template/template9/template9.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template9Component": () => (/* binding */ Template9Component)
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
    color: "#ffffff"
  };
};

function Template9Component_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-radio-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function Template9Component_div_11_Template_nz_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r2.themeTemp = $event;
    })("ngModelChange", function Template9Component_div_11_Template_nz_radio_group_ngModelChange_1_listener($event) {
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

const _c1 = function (a0, a1) {
  return {
    "transform": a0,
    "outline": a1
  };
};

const _c2 = function (a0, a1, a2) {
  return {
    "fontBold": a0,
    "fontItalic": a1,
    "fontUnderline": a2
  };
};

const _c3 = function (a0, a1, a2, a3, a4) {
  return {
    "fontSize": a0,
    "fontFamily": a1,
    "color": a2,
    "textAlign": a3,
    "outline": a4
  };
};

function Template9Component_ng_container_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template9Component_ng_container_32_div_1_Template_img_click_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r8.editStatus ? ctx_r8.edit(page_r5.img) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Template9Component_ng_container_32_div_1_Template_input_focus_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r11.edit(page_r5.titleMenu.style);
    })("click", function Template9Component_ng_container_32_div_1_Template_input_click_5_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function Template9Component_ng_container_32_div_1_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return page_r5.titleMenu.value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Template9Component_ng_container_32_div_1_Template_input_focus_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r16.edit(page_r5.address.style);
    })("click", function Template9Component_ng_container_32_div_1_Template_input_click_7_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function Template9Component_ng_container_32_div_1_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return page_r5.address.value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "menu-book-" + page_r5._id)("ngClass", "theme-" + ctx_r6.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", page_r5.img.src, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 14, ctx_r6.editStatus ? "Click to change image" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", page_r5.img.shape)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](16, _c1, "scale(" + page_r5.img.ratio + ")", page_r5.img.outline ? page_r5.img.outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](19, _c2, page_r5.titleMenu.style.fontBold, page_r5.titleMenu.style.fontItalic, page_r5.titleMenu.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](23, _c3, page_r5.titleMenu.style.fontSize + "px", page_r5.titleMenu.style.font, page_r5.titleMenu.style.fontColor, page_r5.titleMenu.style.align, page_r5.titleMenu.style.outline ? page_r5.titleMenu.style.outline : "none"))("ngModel", page_r5.titleMenu.value)("disabled", !ctx_r6.editStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](29, _c2, page_r5.address.style.fontBold, page_r5.address.style.fontItalic, page_r5.address.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](33, _c3, page_r5.address.style.fontSize + "px", page_r5.address.style.font, page_r5.address.style.fontColor, page_r5.address.style.align, page_r5.address.style.outline ? page_r5.address.style.outline : "none"))("ngModel", page_r5.address.value)("disabled", !ctx_r6.editStatus);
  }
}

const _c4 = function (a0) {
  return {
    color: a0
  };
};

function Template9Component_ng_container_32_div_2_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 45);
  }

  if (rf & 2) {
    const line_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", line_r25.style.fontSize)("width", line_r25.style.fontSize)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c4, ctx_r26.color2));
  }
}

const _c5 = function (a0) {
  return {
    "fontFamily": a0
  };
};

function Template9Component_ng_container_32_div_2_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c5, line_r25.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r27.vhAlgorithm.vhcurrencyunit_symbol(line_r25.price), " ");
  }
}

const _c6 = function (a0, a1, a2, a3) {
  return {
    "fontSize": a0,
    "color": a1,
    "textAlign": a2,
    "outline": a3
  };
};

const _c7 = function (a0, a3) {
  return {
    "fontFamily": a0,
    "display": "flex",
    "alignItems": "center",
    "justifyContent": a3
  };
};

function Template9Component_ng_container_32_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template9Component_ng_container_32_div_2_div_7_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31);
      const line_r25 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      ctx_r30.editStatus ? ctx_r30.edit(line_r25.style, line_r25.class) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Template9Component_ng_container_32_div_2_div_7_img_2_Template, 1, 5, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, Template9Component_ng_container_32_div_2_div_7_div_4_Template, 2, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r25 = ctx.$implicit;
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](page_r5.data ? line_r25.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "page-row-", line_r25.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](10, _c2, line_r25.style.fontBold, line_r25.style.fontItalic, line_r25.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](14, _c6, line_r25.style.fontSize + "px", line_r25.style.fontColor, line_r25.style.align, line_r25.style.outline ? line_r25.style.outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", line_r25.class == "category-lines" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](19, _c7, line_r25.style.font, line_r25.style.align == "left" ? "flex-start" : line_r25.style.align == "right" ? "flex-end" : "center") : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c5, line_r25.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r25.class == "category-lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", line_r25.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r25.price);
  }
}

function Template9Component_ng_container_32_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template9Component_ng_container_32_div_2_div_9_Template_img_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36);
      const img_r33 = restoredCtx.$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      ctx_r35.editStatus ? ctx_r35.edit(img_r33.value) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const img_r33 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", img_r33.value.src, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx_r23.editStatus ? "Click to change image" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", img_r33.value.shape)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c1, "scale(" + img_r33.value.ratio + ")", img_r33.value.outline ? img_r33.value.outline : "none"));
  }
}

function Template9Component_ng_container_32_div_2_div_12_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 45);
  }

  if (rf & 2) {
    const line_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", line_r37.style.fontSize)("width", line_r37.style.fontSize)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](3, _c4, ctx_r38.color2));
  }
}

function Template9Component_ng_container_32_div_2_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c5, line_r37.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r39.vhAlgorithm.vhcurrencyunit_symbol(line_r37.price), " ");
  }
}

function Template9Component_ng_container_32_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template9Component_ng_container_32_div_2_div_12_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43);
      const line_r37 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      ctx_r42.editStatus ? ctx_r42.edit(line_r37.style, line_r37.class) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Template9Component_ng_container_32_div_2_div_12_img_2_Template, 1, 5, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, Template9Component_ng_container_32_div_2_div_12_div_4_Template, 2, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r37 = ctx.$implicit;
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](page_r5.data ? line_r37.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "page-row-", line_r37.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](10, _c2, line_r37.style.fontBold, line_r37.style.fontItalic, line_r37.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](14, _c6, line_r37.style.fontSize + "px", line_r37.style.fontColor, line_r37.style.align, line_r37.style.outline ? line_r37.style.outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", line_r37.class == "category-lines" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](19, _c7, line_r37.style.font, line_r37.style.align == "left" ? "flex-start" : line_r37.style.align == "right" ? "flex-end" : "center") : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c5, line_r37.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r37.class == "category-lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", line_r37.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r37.price);
  }
}

function Template9Component_ng_container_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Template9Component_ng_container_32_div_2_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r45.edit(ctx_r45.titleMenu.style);
    })("click", function Template9Component_ng_container_32_div_2_Template_input_click_2_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function Template9Component_ng_container_32_div_2_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r48.titleMenu.value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Template9Component_ng_container_32_div_2_Template_input_focus_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r49.edit(ctx_r49.phone.style);
    })("click", function Template9Component_ng_container_32_div_2_Template_input_click_4_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function Template9Component_ng_container_32_div_2_Template_input_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r51.phone.value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, Template9Component_ng_container_32_div_2_div_7_Template, 5, 24, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, Template9Component_ng_container_32_div_2_div_9_Template, 3, 9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, Template9Component_ng_container_32_div_2_div_12_Template, 5, 24, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "menu-book-" + page_r5._id)("ngClass", "theme-" + ctx_r7.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](18, _c2, ctx_r7.titleMenu.style.fontBold, ctx_r7.titleMenu.style.fontItalic, ctx_r7.titleMenu.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](22, _c3, ctx_r7.titleMenu.style.fontSize + "px", ctx_r7.titleMenu.style.font, ctx_r7.titleMenu.style.fontColor, ctx_r7.titleMenu.style.align, ctx_r7.titleMenu.style.outline ? ctx_r7.titleMenu.style.outline : "none"))("ngModel", ctx_r7.titleMenu.value)("disabled", !ctx_r7.editStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](28, _c2, ctx_r7.phone.style.fontBold, ctx_r7.phone.style.fontItalic, ctx_r7.phone.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](32, _c3, ctx_r7.phone.style.fontSize + "px", ctx_r7.phone.style.font, ctx_r7.phone.style.fontColor, ctx_r7.phone.style.align, ctx_r7.phone.style.outline ? ctx_r7.phone.style.outline : "none"))("ngModel", ctx_r7.phone.value)("disabled", !ctx_r7.editStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", page_r5.data[0])("ngForTrackBy", ctx_r7.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 16, ctx_r7.imgPage[page_r5._id - 1]))("ngForTrackBy", ctx_r7.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", page_r5.data[1])("ngForTrackBy", ctx_r7.myTrackByFunction);
  }
}

function Template9Component_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Template9Component_ng_container_32_div_1_Template, 8, 39, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Template9Component_ng_container_32_div_2_Template, 13, 38, "div", 24);
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

class Template9Component {
  constructor(cdRef, router, vhQueryCafe, vhAlgorithm, modal, languageService, vhAuth, vhImage) {
    this.cdRef = cdRef;
    this.router = router;
    this.vhQueryCafe = vhQueryCafe;
    this.vhAlgorithm = vhAlgorithm;
    this.modal = modal;
    this.languageService = languageService;
    this.vhAuth = vhAuth;
    this.vhImage = vhImage;
    this.imageWaiting = [];
    this.editStatus = true;
    this.theme = "1";
    this.themeTemp = "1";
    this.color1 = '#ffffff';
    this.color2 = '#f8eab3';
    this.dataMenu = [{
      _id: 0,
      titleMenu: {
        value: "MENU",
        style: {
          align: 'center',
          fontBold: true,
          fontItalic: false,
          fontUnderline: false,
          font: 'Arial',
          fontSize: 72,
          fontColor: this.color1
        }
      },
      img: {
        src: "assets/icon/management/menu/template9/cover.jpg",
        shape: 'circle',
        ratio: 1
      },
      address: {
        value: "Địa chỉ: 161/3 Ni Sư Huỳnh Liên, p.10, Q. Tân Bình, Tp.HCM",
        style: {
          align: 'center',
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
      data: [[], []],
      type: 'page'
    }];
    this.imgPage = [{
      1: {
        src: "assets/icon/management/menu/template9/menu1.jpg",
        shape: 'circle',
        ratio: 1
      },
      2: {
        src: "assets/icon/management/menu/template9/menu2.jpg",
        shape: 'circle',
        ratio: 1
      },
      3: {
        src: "assets/icon/management/menu/template9/menu3.jpg",
        shape: 'circle',
        ratio: 1
      },
      4: {
        src: "assets/icon/management/menu/template9/menu4.jpg",
        shape: 'circle',
        ratio: 1
      },
      5: {
        src: "assets/icon/management/menu/template9/cover.jpg",
        shape: 'circle',
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
        fontSize: 32,
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
  }

  transformData(dataMenuRaw) {
    let data = [this.dataMenu[0], {
      _id: 1,
      data: [[], []],
      type: 'page'
    }];
    let i = this.dataMenu.length - 1;
    let j = 0;
    let countUnit = 0;

    const transfer = distance => {
      countUnit += distance;

      if (countUnit > 600 && j == 0) {
        // dư thừa đưa sang cột kế bên
        let temp = data[i].data[j].pop();
        j += 1;
        countUnit = distance;
        data[i].data[j].push(temp);
      }

      if (countUnit > 600 && j == 1) {
        // dư thừa đưa sang trang kế tiếp
        let temp = data[i].data[j].pop();
        i++;
        j = 0;
        countUnit = distance;
        data.push({
          _id: i,
          data: [[temp], []],
          type: 'page'
        });

        if (this.imgPage.length < i) {
          this.imgPage.push({
            1: {
              src: "assets/icon/management/menu/template9/menu1.jpg",
              shape: 'circle',
              ratio: 1
            },
            2: {
              src: "assets/icon/management/menu/template9/menu2.jpg",
              shape: 'circle',
              ratio: 1
            },
            3: {
              src: "assets/icon/management/menu/template9/menu3.jpg",
              shape: 'circle',
              ratio: 1
            },
            4: {
              src: "assets/icon/management/menu/template9/menu4.jpg",
              shape: 'circle',
              ratio: 1
            },
            5: {
              src: "assets/icon/management/menu/template9/cover.jpg",
              shape: 'circle',
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
            if (countUnit > 600) {
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
                } else if (_this.dataMenu[pageIdCurrent].data[1].length > 0) {
                  // nếu cột 3 tiếp theo có rows
                  let temp = _this.dataMenu[pageIdCurrent].data[1].shift();

                  if (temp) _this.dataMenu[pageIdCurrent].data[0].push(temp);
                } else fetchDataNextPage();
              }
            }
          }

          if (columnCurrent == 1) {
            if (countUnit > 600) {
              let temp = _this.dataMenu[pageIdCurrent].data[1].splice(rowCurrent, numberItem - rowCurrent); // chuyển dữ liệu thừa sang page tiếp theo


              if (_this.dataMenu[pageIdCurrent + 1]) // có tồn tại page 2
                _this.dataMenu[pageIdCurrent + 1].data[0] = temp.concat(_this.dataMenu[pageIdCurrent + 1].data[0]);else {
                _this.dataMenu.push({
                  _id: _this.dataMenu.length,
                  data: [temp, []],
                  type: 'page'
                });

                _this.imgPage.push({
                  1: {
                    src: "assets/icon/management/menu/template9/menu1.jpg",
                    shape: 'circle',
                    ratio: 1
                  },
                  2: {
                    src: "assets/icon/management/menu/template9/menu2.jpg",
                    shape: 'circle',
                    ratio: 1
                  },
                  3: {
                    src: "assets/icon/management/menu/template9/menu3.jpg",
                    shape: 'circle',
                    ratio: 1
                  },
                  4: {
                    src: "assets/icon/management/menu/template9/menu4.jpg",
                    shape: 'circle',
                    ratio: 1
                  },
                  5: {
                    src: "assets/icon/management/menu/template9/cover.jpg",
                    shape: 'circle',
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
        return "11px";

      case "A5":
        return "25px";

      default:
        return "17px";
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
    if (this.dataAttribute) {
      this.outOfElement();
      style.outline = '1px white dashed';
      this.dataAttribute = style;
      this.classRows = rowClass;
    } else {
      style.outline = '1px white dashed';
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
        template: 9,
        pattern: 7,
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

Template9Component.ɵfac = function Template9Component_Factory(t) {
  return new (t || Template9Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhImage));
};

Template9Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: Template9Component,
  selectors: [["app-template9"]],
  decls: 33,
  vars: 27,
  consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", "", 1, "design-menu-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "6", 1, "left-all-content", "title-header"], ["nz-col", "", "nzSpan", "18", 1, "right-all-content", "title-header", "button"], [4, "ngIf"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-add", 3, "nzLoading", "disabled", "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-add", 3, "disabled", "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-down", 3, "nzLoading", "disabled", "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "24", "id", "template-container", 1, "container", "ant-table-body", 3, "click"], [1, "design-menu-properties", 3, "click"], [3, "attribute", "classRow", "applyStatus", "change", "changeAll", "changeImage"], [1, "edit-main", 2, "width", "100%", "text-align", "-webkit-center"], ["id", "menu-book"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nzButtonStyle", "outline", "nzSize", "default", 3, "ngModel", "nzDisabled", "ngModelChange"], ["nz-radio-button", "", "nzValue", "1", 1, "theme-btn", 2, "background-color", "#273661"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline", 3, "ngStyle"], ["nz-radio-button", "", "nzValue", "2", 1, "theme-btn", 2, "background-color", "#9a1c24"], ["nz-radio-button", "", "nzValue", "3", 1, "theme-btn", 2, "background-color", "#0d7d3f"], ["class", "page cover-page", 3, "id", "ngClass", 4, "ngIf"], ["class", "page menu-page", 3, "id", "ngClass", 4, "ngIf"], [2, "height", "16px"], [1, "page", "cover-page", 3, "id", "ngClass"], [1, "cover-page-image"], [3, "src", "ngClass", "ngStyle", "title", "click"], [1, "cover-page-title"], ["id", "mainTitle", 3, "ngClass", "ngStyle", "ngModel", "disabled", "focus", "click", "ngModelChange"], [1, "cover-page-address"], [3, "ngClass", "ngStyle", "ngModel", "disabled", "focus", "click", "ngModelChange"], [1, "page", "menu-page", 3, "id", "ngClass"], [1, "menu-page-title"], [1, "menu-page-phone"], [1, "menu-page-dish"], [1, "menu-page-dish-list"], [3, "class", "id", "ngClass", "ngStyle", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "menu-page-dish-image-list"], ["class", "menu-page-dish-image-list-image", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "id", "ngClass", "ngStyle", "click"], [3, "ngStyle"], ["src", "/assets/icon/management/menu/template9/icon.svg", 3, "width", "ngStyle", 4, "ngIf"], ["style", "text-align: right;", 3, "ngStyle", 4, "ngIf"], ["src", "/assets/icon/management/menu/template9/icon.svg", 3, "width", "ngStyle"], [2, "text-align", "right", 3, "ngStyle"], [1, "menu-page-dish-image-list-image"]],
  template: function Template9Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template9Component_Template_div_click_0_listener() {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, Template9Component_div_11_Template, 8, 11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template9Component_Template_button_click_13_listener() {
        return ctx.saveMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template9Component_Template_button_click_18_listener() {
        return ctx.preview();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template9Component_Template_button_click_23_listener() {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template9Component_Template_div_click_27_listener() {
        return ctx.outOfElement();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template9Component_Template_div_click_28_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "app-menu-customize", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function Template9Component_Template_app_menu_customize_change_29_listener() {
        return ctx.changeStyle();
      })("changeAll", function Template9Component_Template_app_menu_customize_changeAll_29_listener($event) {
        return ctx.changeStyle($event);
      })("changeImage", function Template9Component_Template_app_menu_customize_changeImage_29_listener($event) {
        return ctx.addImageWaiting($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, Template9Component_ng_container_32_Template, 4, 2, "ng-container", 17);
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
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.KeyValuePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n  border: none !important;\n  margin: 0 8px;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]::before {\n  background: none;\n}\nnz-layout[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  background: var(--ion-color-vh-white) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .btn-down[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .design-menu-properties[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  max-height: 93%;\n  overflow-y: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #menu-book[_ngcontent-%COMP%] {\n  width: 566px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 804px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.cover-page.theme-1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template9/cover1.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.cover-page.theme-2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template9/cover2.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.cover-page.theme-3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template9/cover3.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.menu-page.theme-1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template9/bg_menu1.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.menu-page.theme-2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template9/bg_menu2.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.menu-page.theme-3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template9/bg_menu3.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image[_ngcontent-%COMP%] {\n  height: 64%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image[_ngcontent-%COMP%]   img.circle[_ngcontent-%COMP%] {\n  width: 272px;\n  height: 272px;\n  border-radius: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image[_ngcontent-%COMP%]   img.square[_ngcontent-%COMP%] {\n  width: 272px;\n  height: 272px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image[_ngcontent-%COMP%]   img.square_radius[_ngcontent-%COMP%] {\n  width: 272px;\n  height: 272px;\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image[_ngcontent-%COMP%]   img.rectangle_radius[_ngcontent-%COMP%] {\n  width: calc(272 / 3 * 4px);\n  height: 272px;\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image[_ngcontent-%COMP%]   img.rectangle[_ngcontent-%COMP%] {\n  width: calc(272 / 3 * 4px);\n  height: 272px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  height: 14%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  width: 100%;\n  max-height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-address[_ngcontent-%COMP%] {\n  height: 14%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-address[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  background: none;\n  border: none;\n  outline: none;\n  width: 100%;\n  max-height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page[_ngcontent-%COMP%] {\n  padding: 16px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-title[_ngcontent-%COMP%] {\n  height: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  width: 100%;\n  max-height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-phone[_ngcontent-%COMP%] {\n  height: 4%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-phone[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  width: 100%;\n  max-height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish[_ngcontent-%COMP%] {\n  height: 89%;\n  display: grid;\n  grid-template-columns: 37% 26% 37%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%] {\n  padding: 8px 0;\n  text-align: left;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .category-lines[_ngcontent-%COMP%] {\n  padding: 10px 0 4px;\n  cursor: pointer;\n  max-height: 400px;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .food-lines-noprice[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  cursor: pointer;\n  max-height: 400px;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .food-lines-price[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  display: grid;\n  grid-template-columns: auto 100px;\n  cursor: pointer;\n  max-height: 400px;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .subs-lines[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  display: grid;\n  grid-template-columns: auto 100px;\n  cursor: pointer;\n  max-height: 400px;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .combo-subs-lines[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  cursor: pointer;\n  max-height: 600px;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image-list[_ngcontent-%COMP%] {\n  max-height: 610px;\n  padding: 8px;\n  display: grid;\n  grid-template-rows: 20% 20% 20% 20% 20%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image-list-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image-list-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image-list-image[_ngcontent-%COMP%]   img.circle[_ngcontent-%COMP%] {\n  width: 105px;\n  height: 105px;\n  border-radius: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image-list-image[_ngcontent-%COMP%]   img.square[_ngcontent-%COMP%] {\n  width: 105px;\n  height: 105px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image-list-image[_ngcontent-%COMP%]   img.square_radius[_ngcontent-%COMP%] {\n  width: 105px;\n  height: 105px;\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image-list-image[_ngcontent-%COMP%]   img.rectangle_radius[_ngcontent-%COMP%] {\n  width: 138px;\n  height: calc(138 / 4 * 3px);\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image-list-image[_ngcontent-%COMP%]   img.rectangle[_ngcontent-%COMP%] {\n  width: 138px;\n  height: calc(138 / 4 * 3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlOS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBR0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBQVI7QUFHSTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFLUTtFQUNJLGdDQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFNUTtFQUNJLFdBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFKWjtBQVFJO0VBQ0ksYUFBQTtBQU5SO0FBU0k7RUFDSSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBUFI7QUFVSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQVVRO0VBQ0ksWUFBQTtBQVJaO0FBV1E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFUWjtBQVdnQjtFQUNJLDBFQUFBO0FBVHBCO0FBV2dCO0VBQ0ksMEVBQUE7QUFUcEI7QUFXZ0I7RUFDSSwwRUFBQTtBQVRwQjtBQWFnQjtFQUNJLDRFQUFBO0FBWHBCO0FBYWdCO0VBQ0ksNEVBQUE7QUFYcEI7QUFhZ0I7RUFDSSw0RUFBQTtBQVhwQjtBQWdCUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFkWjtBQWdCWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBZGhCO0FBZWdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBYnBCO0FBY29CO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQVp4QjtBQWNvQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBWnhCO0FBY29CO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQVp4QjtBQWNvQjtFQUNJLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBWnhCO0FBY29CO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0FBWnhCO0FBaUJZO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBZmhCO0FBZ0JnQjtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFkcEI7QUFrQlk7RUFDSSxXQUFBO0FBaEJoQjtBQWlCZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQWZwQjtBQW9CUTtFQUNJLGFBQUE7QUFsQlo7QUFtQlk7RUFDSSxVQUFBO0FBakJoQjtBQWtCZ0I7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBaEJwQjtBQW9CWTtFQUNJLFVBQUE7QUFsQmhCO0FBbUJnQjtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFqQnBCO0FBcUJZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtBQW5CaEI7QUFxQmdCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FBbkJwQjtBQXFCb0I7RUFDSSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBbkJ4QjtBQXNCb0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBcEJ4QjtBQXVCb0I7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBckJ4QjtBQXdCb0I7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBdEJ4QjtBQXlCb0I7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBdkJ4QjtBQTJCZ0I7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7QUF6QnBCO0FBMEJvQjtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUF4QnhCO0FBeUJ3QjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQXZCNUI7QUF3QjRCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXRCaEM7QUF3QjRCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUF0QmhDO0FBd0I0QjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUF0QmhDO0FBd0I0QjtFQUNJLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FBdEJoQztBQXdCNEI7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7QUF0QmhDIiwiZmlsZSI6InRlbXBsYXRlOS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudGhlbWUtYnRuIHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tZG93biB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbiA+IGRpdiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzaWduLW1lbnUtcHJvcGVydGllcyB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDE2cHggMDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5MyU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAgICAgI21lbnUtYm9vayB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1NjZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogODA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICYuY292ZXItcGFnZSB7XHJcbiAgICAgICAgICAgICAgICAmLnRoZW1lLTEge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9tYW5hZ2VtZW50L21lbnUvdGVtcGxhdGU5L2NvdmVyMS5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnRoZW1lLTIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9tYW5hZ2VtZW50L21lbnUvdGVtcGxhdGU5L2NvdmVyMi5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnRoZW1lLTMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9tYW5hZ2VtZW50L21lbnUvdGVtcGxhdGU5L2NvdmVyMy5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5tZW51LXBhZ2Uge1xyXG4gICAgICAgICAgICAgICAgJi50aGVtZS0xIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vbWFuYWdlbWVudC9tZW51L3RlbXBsYXRlOS9iZ19tZW51MS5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnRoZW1lLTIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9tYW5hZ2VtZW50L21lbnUvdGVtcGxhdGU5L2JnX21lbnUyLmpwZ1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYudGhlbWUtMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29uL21hbmFnZW1lbnQvbWVudS90ZW1wbGF0ZTkvYmdfbWVudTMuanBnXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY292ZXItcGFnZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICYtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2NCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICYuY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYuc3F1YXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3MnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLnNxdWFyZV9yYWRpdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjcycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjcycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDclO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLnJlY3RhbmdsZV9yYWRpdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygyNzIgLyAzICogNHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNyU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYucmVjdGFuZ2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMjcyIC8gMyAqIDRweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjcycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTQlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi1hZGRyZXNzIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTQlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW51LXBhZ2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICAmLXRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNyU7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLXBob25lIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNCU7XHJcbiAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLWRpc2gge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4OSU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNyUgMjYlIDM3JTtcclxuXHJcbiAgICAgICAgICAgICAgICAmLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1saW5lcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZm9vZC1saW5lcy1ub3ByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb2QtbGluZXMtcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzLWxpbmVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY29tYm8tc3Vicy1saW5lcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi1pbWFnZS1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwJSAyMCUgMjAlIDIwJSAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgJi1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmNpcmNsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5zcXVhcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5zcXVhcmVfcmFkaXVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYucmVjdGFuZ2xlX3JhZGl1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMzggLyA0ICogM3B4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICYucmVjdGFuZ2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEzOCAvIDQgKiAzcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 57185:
/*!*************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-menu/menu-template/template9/template9.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template9Module": () => (/* binding */ Template9Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _template9_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template9.component */ 40826);
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
        component: _template9_component__WEBPACK_IMPORTED_MODULE_0__.Template9Component,
        canDeactivate: [src_app_cafe_desktop_canLeavePage__WEBPACK_IMPORTED_MODULE_1__.CanLeavePage]
    }
];
class Template9Module {
}
Template9Module.ɵfac = function Template9Module_Factory(t) { return new (t || Template9Module)(); };
Template9Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: Template9Module });
Template9Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _menu_customize_menu_customize_module__WEBPACK_IMPORTED_MODULE_3__.MenuCustomizeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](Template9Module, { declarations: [_template9_component__WEBPACK_IMPORTED_MODULE_0__.Template9Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _menu_customize_menu_customize_module__WEBPACK_IMPORTED_MODULE_3__.MenuCustomizeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template9_template9_module_ts.js.map