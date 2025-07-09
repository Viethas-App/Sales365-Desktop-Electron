"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template8_template8_module_ts"],{

/***/ 21449:
/*!****************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-menu/menu-template/template8/template8.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template8Component": () => (/* binding */ Template8Component)
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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 70325);





















const _c0 = function (a0) {
  return {
    "visibility": a0,
    color: "#ffffff"
  };
};

function Template8Component_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "nz-radio-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function Template8Component_div_11_Template_nz_radio_group_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r2.themeTemp = $event;
    })("ngModelChange", function Template8Component_div_11_Template_nz_radio_group_ngModelChange_1_listener($event) {
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

function Template8Component_ng_container_32_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_ng_container_32_div_1_div_2_Template_img_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const img_r9 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      ctx_r11.editStatus ? ctx_r11.edit(img_r9) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const img_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", img_r9.src, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, ctx_r8.editStatus ? "Click to change image" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", img_r9.shape)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c1, "scale(" + img_r9.ratio + ")", img_r9.outline ? img_r9.outline : "none"));
  }
}

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

function Template8Component_ng_container_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Template8Component_ng_container_32_div_1_div_2_Template, 3, 9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Template8Component_ng_container_32_div_1_Template_input_focus_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r13.edit(page_r5.titleMenu.style);
    })("click", function Template8Component_ng_container_32_div_1_Template_input_click_5_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function Template8Component_ng_container_32_div_1_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return page_r5.titleMenu.value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Template8Component_ng_container_32_div_1_Template_input_focus_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r19.edit(page_r5.address.style);
    })("click", function Template8Component_ng_container_32_div_1_Template_input_click_7_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function Template8Component_ng_container_32_div_1_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      return page_r5.address.value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "menu-book-" + page_r5._id)("ngClass", "theme-" + ctx_r6.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", page_r5.img)("ngForTrackBy", ctx_r6.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](12, _c2, page_r5.titleMenu.style.fontBold, page_r5.titleMenu.style.fontItalic, page_r5.titleMenu.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](16, _c3, page_r5.titleMenu.style.fontSize + "px", page_r5.titleMenu.style.font, page_r5.titleMenu.style.fontColor, page_r5.titleMenu.style.align, page_r5.titleMenu.style.outline ? page_r5.titleMenu.style.outline : "none"))("ngModel", page_r5.titleMenu.value)("disabled", !ctx_r6.editStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](22, _c2, page_r5.address.style.fontBold, page_r5.address.style.fontItalic, page_r5.address.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](26, _c3, page_r5.address.style.fontSize + "px", page_r5.address.style.font, page_r5.address.style.fontColor, page_r5.address.style.align, page_r5.address.style.outline ? page_r5.address.style.outline : "none"))("ngModel", page_r5.address.value)("disabled", !ctx_r6.editStatus);
  }
}

const _c4 = function (a0) {
  return {
    color: a0
  };
};

function Template8Component_ng_container_32_div_2_div_8_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 47);
  }

  if (rf & 2) {
    const line_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", "/assets/icon/management/menu/template8/icon" + ctx_r29.theme + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", line_r28.style.fontSize)("width", line_r28.style.fontSize)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c4, ctx_r29.color2));
  }
}

const _c5 = function (a0) {
  return {
    "fontFamily": a0
  };
};

function Template8Component_ng_container_32_div_2_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c5, line_r28.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r30.vhAlgorithm.vhcurrencyunit_symbol(line_r28.price), " ");
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

function Template8Component_ng_container_32_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_ng_container_32_div_2_div_8_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34);
      const line_r28 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      ctx_r33.editStatus ? ctx_r33.edit(line_r28.style, line_r28.class) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Template8Component_ng_container_32_div_2_div_8_img_2_Template, 1, 6, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, Template8Component_ng_container_32_div_2_div_8_div_4_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r28 = ctx.$implicit;
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](page_r5.data ? line_r28.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "page-row-", line_r28.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](10, _c2, line_r28.style.fontBold, line_r28.style.fontItalic, line_r28.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](14, _c6, line_r28.style.fontSize + "px", line_r28.style.fontColor, line_r28.style.align, line_r28.style.outline ? line_r28.style.outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", line_r28.class == "category-lines" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](19, _c7, line_r28.style.font, line_r28.style.align == "left" ? "flex-start" : line_r28.style.align == "right" ? "flex-end" : "center") : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c5, line_r28.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r28.class == "category-lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", line_r28.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r28.price);
  }
}

function Template8Component_ng_container_32_div_2_div_10_ion_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-icon", 50);
  }

  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c4, ctx_r37.color2));
  }
}

function Template8Component_ng_container_32_div_2_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c5, line_r36.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r38.vhAlgorithm.vhcurrencyunit_symbol(line_r36.price), " ");
  }
}

function Template8Component_ng_container_32_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_ng_container_32_div_2_div_10_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);
      const line_r36 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      ctx_r40.editStatus ? ctx_r40.edit(line_r36.style, line_r36.class) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Template8Component_ng_container_32_div_2_div_10_ion_icon_2_Template, 1, 3, "ion-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, Template8Component_ng_container_32_div_2_div_10_div_4_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r36 = ctx.$implicit;
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](page_r5.data ? line_r36.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "page-row-", line_r36.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](10, _c2, line_r36.style.fontBold, line_r36.style.fontItalic, line_r36.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](14, _c6, line_r36.style.fontSize + "px", line_r36.style.fontColor, line_r36.style.align, line_r36.style.outline ? line_r36.style.outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](19, _c5, line_r36.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r36.class == "category-lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", line_r36.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r36.price);
  }
}

function Template8Component_ng_container_32_div_2_div_18_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 47);
  }

  if (rf & 2) {
    const line_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", "/assets/icon/management/menu/template8/icon" + ctx_r44.theme + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", line_r43.style.fontSize)("width", line_r43.style.fontSize)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c4, ctx_r44.color2));
  }
}

function Template8Component_ng_container_32_div_2_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c5, line_r43.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r45.vhAlgorithm.vhcurrencyunit_symbol(line_r43.price), " ");
  }
}

function Template8Component_ng_container_32_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_ng_container_32_div_2_div_18_Template_div_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r49);
      const line_r43 = restoredCtx.$implicit;
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
      ctx_r48.editStatus ? ctx_r48.edit(line_r43.style, line_r43.class) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Template8Component_ng_container_32_div_2_div_18_img_2_Template, 1, 6, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, Template8Component_ng_container_32_div_2_div_18_div_4_Template, 2, 4, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const line_r43 = ctx.$implicit;
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](page_r5.data ? line_r43.class : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("id", "page-row-", line_r43.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](10, _c2, line_r43.style.fontBold, line_r43.style.fontItalic, line_r43.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](14, _c6, line_r43.style.fontSize + "px", line_r43.style.fontColor, line_r43.style.align, line_r43.style.outline ? line_r43.style.outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", line_r43.class == "category-lines" ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](19, _c7, line_r43.style.font, line_r43.style.align == "left" ? "flex-start" : line_r43.style.align == "right" ? "flex-end" : "center") : _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](22, _c5, line_r43.style.font));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r43.class == "category-lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", line_r43.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", line_r43.price);
  }
}

function Template8Component_ng_container_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("focus", function Template8Component_ng_container_32_div_2_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r51.edit(ctx_r51.titleMenu.style);
    })("click", function Template8Component_ng_container_32_div_2_Template_input_click_2_listener($event) {
      return $event.stopPropagation();
    })("ngModelChange", function Template8Component_ng_container_32_div_2_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r54.titleMenu.value = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_ng_container_32_div_2_Template_img_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r55.editStatus ? ctx_r55.edit(ctx_r55.imgPage[page_r5._id - 1][1]) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, Template8Component_ng_container_32_div_2_div_8_Template, 5, 24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, Template8Component_ng_container_32_div_2_div_10_Template, 5, 21, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_ng_container_32_div_2_Template_img_click_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r57.editStatus ? ctx_r57.edit(ctx_r57.imgPage[page_r5._id - 1][2]) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_ng_container_32_div_2_Template_img_click_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52);
      const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r59.editStatus ? ctx_r59.edit(ctx_r59.imgPage[page_r5._id - 1][3]) : null;
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, Template8Component_ng_container_32_div_2_div_18_Template, 5, 24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const page_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "menu-book-" + page_r5._id)("ngClass", "theme-" + ctx_r7.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](30, _c2, ctx_r7.titleMenu.style.fontBold, ctx_r7.titleMenu.style.fontItalic, ctx_r7.titleMenu.style.fontUnderline))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction5"](34, _c3, ctx_r7.titleMenu.style.fontSize + "px", ctx_r7.titleMenu.style.font, ctx_r7.titleMenu.style.fontColor, ctx_r7.titleMenu.style.align, ctx_r7.titleMenu.style.outline ? ctx_r7.titleMenu.style.outline : "none"))("ngModel", ctx_r7.titleMenu.value)("disabled", !ctx_r7.editStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r7.imgPage[page_r5._id - 1] ? ctx_r7.imgPage[page_r5._id - 1][1].src : "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 24, ctx_r7.editStatus ? "Click to change image" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r7.imgPage[page_r5._id - 1][1].shape)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](40, _c1, "scale(" + ctx_r7.imgPage[page_r5._id - 1][1].ratio + ")", ctx_r7.imgPage[page_r5._id - 1][1].outline ? ctx_r7.imgPage[page_r5._id - 1][1].outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", page_r5.data[0])("ngForTrackBy", ctx_r7.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", page_r5.data[1])("ngForTrackBy", ctx_r7.myTrackByFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r7.imgPage[page_r5._id - 1] ? ctx_r7.imgPage[page_r5._id - 1][2].src : "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 26, ctx_r7.editStatus ? "Click to change image" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r7.imgPage[page_r5._id - 1][2].shape)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](43, _c1, "scale(" + ctx_r7.imgPage[page_r5._id - 1][2].ratio + ")", ctx_r7.imgPage[page_r5._id - 1][2].outline ? ctx_r7.imgPage[page_r5._id - 1][2].outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r7.imgPage[page_r5._id - 1] ? ctx_r7.imgPage[page_r5._id - 1][3].src : "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](17, 28, ctx_r7.editStatus ? "Click to change image" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r7.imgPage[page_r5._id - 1][3].shape)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](46, _c1, "scale(" + ctx_r7.imgPage[page_r5._id - 1][3].ratio + ")", ctx_r7.imgPage[page_r5._id - 1][3].outline ? ctx_r7.imgPage[page_r5._id - 1][3].outline : "none"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", page_r5.data[2])("ngForTrackBy", ctx_r7.myTrackByFunction);
  }
}

function Template8Component_ng_container_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, Template8Component_ng_container_32_div_1_Template, 8, 32, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, Template8Component_ng_container_32_div_2_Template, 19, 49, "div", 24);
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

class Template8Component {
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
    this.color2 = '#006895';
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
      img: [{
        src: "assets/icon/management/menu/template8/menu1.jpg",
        shape: 'rectangle_radius',
        ratio: 1
      }, {
        src: "assets/icon/management/menu/template8/cover.jpg",
        shape: 'rectangle_radius',
        ratio: 1
      }, {
        src: "assets/icon/management/menu/template8/menu3.jpg",
        shape: 'rectangle_radius',
        ratio: 1
      }, {
        src: "assets/icon/management/menu/template8/menu2.jpg",
        shape: 'rectangle_radius',
        ratio: 1
      }],
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
      data: [[], [], []],
      type: 'page'
    }];
    this.imgPage = [{
      1: {
        src: "assets/icon/management/menu/template8/menu1.jpg",
        shape: 'rectangle_radius',
        ratio: 1
      },
      2: {
        src: "assets/icon/management/menu/template8/menu2.jpg",
        shape: 'rectangle_radius',
        ratio: 1
      },
      3: {
        src: "assets/icon/management/menu/template8/menu3.jpg",
        shape: 'rectangle_radius',
        ratio: 1
      }
    }];
    this.titleMenu = {
      value: "Nhà hàng Viethas",
      style: {
        align: 'left',
        fontBold: false,
        fontItalic: false,
        fontUnderline: false,
        font: 'Arial',
        fontSize: 40,
        fontColor: this.color2
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
            this.color2 = '#006895';
            break;

          case "2":
            this.color1 = '#373737';
            this.color2 = '#079147';
            break;

          case "3":
            this.color1 = '#373737';
            this.color2 = '#f47920';
            break;
        } // set toàn bộ màu sắc


        this.titleMenu.style.fontColor = this.color2;
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
            page.titleMenu.style.fontColor = this.color1;
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

      if (countUnit > 289 && j == 0) {
        // dư thừa đưa sang cột kế bên
        let temp = data[i].data[j].pop();
        j += 1;
        countUnit = distance;
        data[i].data[j].push(temp);
      }

      if (countUnit > 289 && j == 1) {
        // dư thừa đưa sang cột kế bên
        let temp = data[i].data[j].pop();
        j += 1;
        countUnit = distance;
        data[i].data[j].push(temp);
      }

      if (countUnit > 289 && j == 2) {
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
              src: "assets/icon/management/menu/template8/menu1.jpg",
              shape: 'rectangle_radius',
              ratio: 1
            },
            2: {
              src: "assets/icon/management/menu/template8/menu2.jpg",
              shape: 'rectangle_radius',
              ratio: 1
            },
            3: {
              src: "assets/icon/management/menu/template8/menu3.jpg",
              shape: 'rectangle_radius',
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
            if (countUnit > 289) {
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
            if (countUnit > 289) {
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
            if (countUnit > 289) {
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
                    src: "assets/icon/management/menu/template8/menu1.jpg",
                    shape: 'rectangle_radius',
                    ratio: 1
                  },
                  2: {
                    src: "assets/icon/management/menu/template8/menu2.jpg",
                    shape: 'rectangle_radius',
                    ratio: 1
                  },
                  3: {
                    src: "assets/icon/management/menu/template8/menu3.jpg",
                    shape: 'rectangle_radius',
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
        imageStyle: 'width: 100%;  margin: 0 !important; padding: 0 !important; ',
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
        template: 8,
        pattern: 6,
        date: new Date().toISOString(),
        theme: this.theme,
        cover: this.dataMenu[0],
        title: this.titleMenu,
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

Template8Component.ɵfac = function Template8Component_Factory(t) {
  return new (t || Template8Component)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhQueryCafe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_8__.NzModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAlgorithm), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_cafe_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhAuth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_7__.VhImage));
};

Template8Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: Template8Component,
  selectors: [["app-template8"]],
  decls: 33,
  vars: 27,
  consts: [["nz-row", "", 1, "row-back", "small-size", 3, "click"], ["nz-icon", "", "nzType", "left", "nzTheme", "outline"], ["nz-row", "", 1, "design-menu-header", 3, "nzGutter"], ["nz-col", "", "nzSpan", "6", 1, "left-all-content", "title-header"], ["nz-col", "", "nzSpan", "18", 1, "right-all-content", "title-header", "button"], [4, "ngIf"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-add", 3, "nzLoading", "disabled", "click"], ["nz-icon", "", "nzType", "save", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-add", 3, "disabled", "click"], ["nz-icon", "", "nzType", "eye", "nzTheme", "outline"], ["nz-button", "", "nzType", "default", 1, "center-all-content", "btn-down", 3, "nzLoading", "disabled", "click"], ["nz-icon", "", "nzType", "printer", "nzTheme", "outline"], ["nz-col", "", "nzSpan", "24", "id", "template-container", 1, "container", "ant-table-body", 3, "click"], [1, "design-menu-properties", 3, "click"], [3, "attribute", "classRow", "applyStatus", "change", "changeAll", "changeImage"], [1, "edit-main", 2, "width", "100%", "text-align", "-webkit-center"], ["id", "menu-book"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["nzButtonStyle", "outline", "nzSize", "default", 3, "ngModel", "nzDisabled", "ngModelChange"], ["nz-radio-button", "", "nzValue", "1", 1, "theme-btn", 2, "background-color", "#006895"], ["nz-icon", "", "nzType", "check", "nzTheme", "outline", 3, "ngStyle"], ["nz-radio-button", "", "nzValue", "2", 1, "theme-btn", 2, "background-color", "#079147"], ["nz-radio-button", "", "nzValue", "3", 1, "theme-btn", 2, "background-color", "#f47920"], ["class", "page cover-page", 3, "id", "ngClass", 4, "ngIf"], ["class", "page menu-page", 3, "id", "ngClass", 4, "ngIf"], [2, "height", "16px"], [1, "page", "cover-page", 3, "id", "ngClass"], [1, "cover-page-image"], ["class", "cover-page-image-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "cover-page-title"], ["id", "mainTitle", 3, "ngClass", "ngStyle", "ngModel", "disabled", "focus", "click", "ngModelChange"], [1, "cover-page-address"], [3, "ngClass", "ngStyle", "ngModel", "disabled", "focus", "click", "ngModelChange"], [1, "cover-page-image-item"], ["alt", "", 3, "src", "ngClass", "ngStyle", "title", "click"], [1, "page", "menu-page", 3, "id", "ngClass"], [1, "menu-page-title"], [1, "menu-page-dish"], [1, "menu-page-dish-list"], [1, "menu-page-dish-image"], [3, "src", "ngClass", "ngStyle", "title", "click"], [3, "class", "id", "ngClass", "ngStyle", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "menu-page-dish-image", 2, "position", "absolute", "bottom", "8px", "width", "calc(100% - 32px)"], [3, "id", "ngClass", "ngStyle", "click"], [3, "ngStyle"], [3, "width", "ngStyle", "src", 4, "ngIf"], ["style", "text-align: right;", 3, "ngStyle", 4, "ngIf"], [3, "width", "ngStyle", "src"], [2, "text-align", "right", 3, "ngStyle"], ["src", "/assets/icon/management/menu/template8/icon-hoa thi-01.svg", 3, "ngStyle", 4, "ngIf"], ["src", "/assets/icon/management/menu/template8/icon-hoa thi-01.svg", 3, "ngStyle"]],
  template: function Template8Component_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_Template_div_click_0_listener() {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, Template8Component_div_11_Template, 8, 11, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_Template_button_click_13_listener() {
        return ctx.saveMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_Template_button_click_18_listener() {
        return ctx.preview();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_Template_button_click_23_listener() {
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
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_Template_div_click_27_listener() {
        return ctx.outOfElement();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function Template8Component_Template_div_click_28_listener($event) {
        return $event.stopPropagation();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "app-menu-customize", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function Template8Component_Template_app_menu_customize_change_29_listener() {
        return ctx.changeStyle();
      })("changeAll", function Template8Component_Template_app_menu_customize_changeAll_29_listener($event) {
        return ctx.changeStyle($event);
      })("changeImage", function Template8Component_Template_app_menu_customize_changeImage_29_listener($event) {
        return ctx.addImageWaiting($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, Template8Component_ng_container_32_Template, 4, 2, "ng-container", 17);
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
  directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzRowDirective, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_10__.NzIconDirective, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_11__["ɵNzTransitionPatchDirective"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_12__.NzLayoutComponent, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_9__.NzColDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__.NzButtonComponent, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__.NzWaveDirective, _menu_customize_menu_customize_component__WEBPACK_IMPORTED_MODULE_4__.MenuCustomizeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__.NzRadioGroupComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__.NzRadioComponent, ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_16__.NzRadioButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonIcon],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe],
  styles: [".row-back[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 8px;\n  cursor: pointer;\n}\n.row-back[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 2px;\n}\nnz-layout[_ngcontent-%COMP%] {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #00000014;\n  border-radius: 5px;\n  padding: 16px;\n  height: 95%;\n}\nnz-layout[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-green);\n  font-size: 1.1rem;\n}\nnz-layout[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%] {\n  border: none !important;\n  margin: 0 8px;\n  border-radius: 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .theme-btn[_ngcontent-%COMP%]::before {\n  background: none;\n}\nnz-layout[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  color: var(--ion-color-vh-black);\n  background: var(--ion-color-vh-white) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .btn-down[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--ion-color-vh-green) 0% 0% no-repeat padding-box;\n  border-radius: 5px;\n  font-size: 0.9rem;\n}\nnz-layout[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\nnz-layout[_ngcontent-%COMP%]   .design-menu-properties[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  max-height: 93%;\n  overflow-y: auto;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #menu-book[_ngcontent-%COMP%] {\n  width: 808px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 567px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.cover-page.theme-1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template8/cover1.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.cover-page.theme-2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template8/cover2.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.cover-page.theme-3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template8/cover3.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.menu-page.theme-1[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template8/bg_menu1.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.menu-page.theme-2[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template8/bg_menu2.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .page.menu-page.theme-3[_ngcontent-%COMP%] {\n  background-image: url(\"/assets/icon/management/menu/template8/bg_menu3.jpg\");\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 16px;\n  display: grid;\n  grid-template-columns: 29% 71%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  height: 57%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 90%;\n  max-height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-address[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 43%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-address[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 16px 0;\n  background: none;\n  border: none;\n  width: 90%;\n  max-height: 100%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 565px;\n  display: grid;\n  grid-template-rows: 25% 25% 25% 25%;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image-item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 8px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image-item[_ngcontent-%COMP%]   img.circle[_ngcontent-%COMP%] {\n  width: 124px;\n  height: 124px;\n  border-radius: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image-item[_ngcontent-%COMP%]   img.square[_ngcontent-%COMP%] {\n  width: 124px;\n  height: 124px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image-item[_ngcontent-%COMP%]   img.square_radius[_ngcontent-%COMP%] {\n  width: 124px;\n  height: 124px;\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image-item[_ngcontent-%COMP%]   img.rectangle_radius[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 124px;\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .cover-page-image-item[_ngcontent-%COMP%]   img.rectangle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 124px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page[_ngcontent-%COMP%] {\n  padding: 16px;\n  border-radius: 16px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 10%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 100%;\n  max-height: 100%;\n  padding: 0 16px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish[_ngcontent-%COMP%] {\n  height: 90%;\n  display: grid;\n  grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%] {\n  padding: 16px;\n  text-align: left;\n  position: relative;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .category-lines[_ngcontent-%COMP%] {\n  padding: 10px 0 4px;\n  max-height: 280px;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .food-lines-noprice[_ngcontent-%COMP%] {\n  max-height: 280px;\n  overflow: hidden;\n  padding-left: 24px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .food-lines-price[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 100px;\n  max-height: 280px;\n  overflow: hidden;\n  padding-left: 24px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .subs-lines[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 100px;\n  max-height: 280px;\n  overflow: hidden;\n  padding-left: 40px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-list[_ngcontent-%COMP%]   .combo-subs-lines[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  cursor: pointer;\n  max-height: 600px;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 177px;\n  padding: 8px 0;\n  text-align: center;\n  overflow: hidden;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  cursor: pointer;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image[_ngcontent-%COMP%]   img.circle[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image[_ngcontent-%COMP%]   img.square[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image[_ngcontent-%COMP%]   img.square_radius[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image[_ngcontent-%COMP%]   img.rectangle_radius[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  border-radius: 7%;\n}\nnz-layout[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .menu-page-dish-image[_ngcontent-%COMP%]   img.rectangle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n}\n.over-flow[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlOC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBR0E7RUFDSSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUFKO0FBRUk7RUFDSSxnQ0FBQTtFQUNBLGlCQUFBO0FBQVI7QUFHSTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBRFI7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFLUTtFQUNJLGdDQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFNUTtFQUNJLFdBQUE7RUFDQSxpRUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFKWjtBQVFJO0VBQ0ksYUFBQTtBQU5SO0FBU0k7RUFDSSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBUFI7QUFVSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQVVRO0VBQ0ksWUFBQTtBQVJaO0FBV1E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFUWjtBQVdnQjtFQUNJLDBFQUFBO0FBVHBCO0FBV2dCO0VBQ0ksMEVBQUE7QUFUcEI7QUFXZ0I7RUFDSSwwRUFBQTtBQVRwQjtBQWFnQjtFQUNJLDRFQUFBO0FBWHBCO0FBYWdCO0VBQ0ksNEVBQUE7QUFYcEI7QUFhZ0I7RUFDSSw0RUFBQTtBQVhwQjtBQWdCUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFkWjtBQWdCWTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQWRoQjtBQWVnQjtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWJwQjtBQWlCWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQWZoQjtBQWdCZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBZHBCO0FBa0JZO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFoQmhCO0FBaUJnQjtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQWZwQjtBQWdCb0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFkeEI7QUFld0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBYjVCO0FBZXdCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFiNUI7QUFld0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBYjVCO0FBZXdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQWI1QjtBQWV3QjtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBYjVCO0FBb0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBbEJaO0FBb0JZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBbEJoQjtBQW9CZ0I7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBbEJwQjtBQXNCWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUVBQUE7RUFDQSxrQkFBQTtBQXBCaEI7QUFzQmdCO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFwQnBCO0FBc0JvQjtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXBCeEI7QUF1Qm9CO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBckJ4QjtBQXdCb0I7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF0QnhCO0FBeUJvQjtFQUNJLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXZCeEI7QUEwQm9CO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQXhCeEI7QUE0QmdCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQTFCcEI7QUEyQm9CO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBekJ4QjtBQTBCd0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBeEI1QjtBQTBCd0I7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQXhCNUI7QUEwQndCO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQXhCNUI7QUEwQndCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQXhCNUI7QUEwQndCO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUF4QjVCO0FBaUNBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBOUJKIiwiZmlsZSI6InRlbXBsYXRlOC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3ctYmFjayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5uei1sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMTQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiA5NSU7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXZoLWdyZWVuKTtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAudGhlbWUtYnRuIHtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgICAuYnRuLWFkZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItdmgtYmxhY2spO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itdmgtd2hpdGUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tZG93biB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItdmgtZ3JlZW4pIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbiA+IGRpdiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzaWduLW1lbnUtcHJvcGVydGllcyB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDE2cHggMDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA5MyU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuXHJcbiAgICAgICAgI21lbnUtYm9vayB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTY3cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICYuY292ZXItcGFnZSB7XHJcbiAgICAgICAgICAgICAgICAmLnRoZW1lLTEge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9tYW5hZ2VtZW50L21lbnUvdGVtcGxhdGU4L2NvdmVyMS5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnRoZW1lLTIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9tYW5hZ2VtZW50L21lbnUvdGVtcGxhdGU4L2NvdmVyMi5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnRoZW1lLTMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9tYW5hZ2VtZW50L21lbnUvdGVtcGxhdGU4L2NvdmVyMy5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5tZW51LXBhZ2Uge1xyXG4gICAgICAgICAgICAgICAgJi50aGVtZS0xIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ljb24vbWFuYWdlbWVudC9tZW51L3RlbXBsYXRlOC9iZ19tZW51MS5qcGdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLnRoZW1lLTIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaWNvbi9tYW5hZ2VtZW50L21lbnUvdGVtcGxhdGU4L2JnX21lbnUyLmpwZ1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYudGhlbWUtMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29uL21hbmFnZW1lbnQvbWVudS90ZW1wbGF0ZTgvYmdfbWVudTMuanBnXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY292ZXItcGFnZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOSUgNzElO1xyXG5cclxuICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU3JTtcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYtYWRkcmVzcyB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQzJTtcclxuICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLWltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNTY1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNSUgMjUlIDI1JSAyNSU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgJi1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5zcXVhcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnNxdWFyZV9yYWRpdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDclO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYucmVjdGFuZ2xlX3JhZGl1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnJlY3RhbmdsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW51LXBhZ2Uge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgJi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLWRpc2gge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBjYWxjKDEwMCUgLyAzKSBjYWxjKDEwMCUgLyAzKSBjYWxjKDEwMCUgLyAzKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRlZ29yeS1saW5lcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmZvb2QtbGluZXMtbm9wcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZm9vZC1saW5lcy1wcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzLWxpbmVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAuY29tYm8tc3Vicy1saW5lcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmLWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYuY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgJi5zcXVhcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnNxdWFyZV9yYWRpdXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDclO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYucmVjdGFuZ2xlX3JhZGl1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3JTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnJlY3RhbmdsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vdmVyLWZsb3cge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 55366:
/*!*************************************************************************************************************!*\
  !*** ./src/app/cafe/desktop/menu/management/design/design-menu/menu-template/template8/template8.module.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Template8Module": () => (/* binding */ Template8Module)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _template8_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template8.component */ 21449);
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
        component: _template8_component__WEBPACK_IMPORTED_MODULE_0__.Template8Component,
        canDeactivate: [src_app_cafe_desktop_canLeavePage__WEBPACK_IMPORTED_MODULE_1__.CanLeavePage]
    }
];
class Template8Module {
}
Template8Module.ɵfac = function Template8Module_Factory(t) { return new (t || Template8Module)(); };
Template8Module.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: Template8Module });
Template8Module.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _menu_customize_menu_customize_module__WEBPACK_IMPORTED_MODULE_3__.MenuCustomizeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](Template8Module, { declarations: [_template8_component__WEBPACK_IMPORTED_MODULE_0__.Template8Component], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, src_app_cafe_desktop_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_2__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _menu_customize_menu_customize_module__WEBPACK_IMPORTED_MODULE_3__.MenuCustomizeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_cafe_desktop_menu_management_design_design-menu_menu-template_template8_template8_module_ts.js.map